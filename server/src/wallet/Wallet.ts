import randomBytes from "randombytes";
import BigNumber from "bignumber.js";

import {
  RawTransaction,
  SignedTransaction
} from "../../../common/libra_protos/transaction_pb";
import { AddressMapType } from "../../../common/api/Types";

import WalletConstants from "../constants/WalletConstants";

import KeyFactory, { Seed } from "./KeyFactory";
import Mnemonic from "./Mnemonic";
import { AccountAddress } from "./Account";
import { DefaultHasher } from "./Crypto";
import HasherConstants from "../constants/HasherConstants";

export type DerivedPublicAddress = {
  address: AccountAddress;
  depth: BigNumber;
};

// TODO: Store mnemonic phrase in an encrypted way.
class AquariusWalletWrapper {
  private readonly _mnemonic: Mnemonic;
  private readonly _keyFactory: KeyFactory;
  private _addressMap: AddressMapType;
  private _keyLeaf: BigNumber;

  constructor(kf: KeyFactory, m: Mnemonic) {
    this._keyFactory = kf;
    this._keyLeaf = new BigNumber(0);
    this._addressMap = {};
    this._mnemonic = m;
  }

  get keyLeaf(): BigNumber {
    return this._keyLeaf;
  }

  // TODO: https://github.com/libra/libra/blob/master/client/libra_wallet/src/wallet_library.rs#L140 has error checking for this.
  get addressMap(): AddressMapType {
    return this._addressMap;
  }

  /// Returns string that can be saved to file and imported into other wallets like libra_wallet
  get exportData(): string {
    return `${this._mnemonic.toString()}${
      WalletConstants.exportDepthDelimiter
    }${this.keyLeaf.toString(10)}`;
  }

  static async generateNew(salt: string = ""): Promise<AquariusWalletWrapper> {
    const random = randomBytes(32);
    const mnemonic = Mnemonic.fromBytes(new Uint8Array(random));
    return await this.generateFromMnemonic(mnemonic, salt);
  }

  static async generateFromMnemonic(mnemonic: Mnemonic, salt: string = "") {
    const promise = new Promise<AquariusWalletWrapper>((resolve, reject) => {
      const seed = new Seed(mnemonic, salt, (err, _) => {
        if (err) {
          reject(err);
        } else {
          const keyFactory = new KeyFactory(seed);
          const newWallet = new AquariusWalletWrapper(keyFactory, mnemonic);
          resolve(newWallet);
        }
      });
    });
    return promise;
  }

  generateAddresses(depth: BigNumber): Array<DerivedPublicAddress> {
    if (this.keyLeaf.isGreaterThan(depth)) {
      // TODO: Error handling
      return;
    }

    const newAddresses: Array<DerivedPublicAddress> = new Array<
      DerivedPublicAddress
    >();
    while (!this.keyLeaf.isEqualTo(depth)) {
      newAddresses.push(this.generateNewAddress());
    }
    return newAddresses;
  }

  generateAddressAtDepth(depth: BigNumber): AccountAddress {
    return this._keyFactory.derivePrivateChild(depth).address;
  }

  generateNewAddress(): DerivedPublicAddress {
    const epk = this._keyFactory.derivePrivateChild(this.keyLeaf);
    this._keyLeaf = this._keyLeaf.plus(1);
    this._addressMap[epk.address.hexAddress] = epk.depth;
    return { address: epk.address, depth: epk.depth };
  }

  /// Simple public function that allows to sign a Libra RawTransaction with the PrivateKey
  /// associated to a particular AccountAddress. If the PrivateKey associated to an
  /// AccountAddress is not contained in the addr_map, then this function will throw an Error
  signTxn(txn: RawTransaction): SignedTransaction {
    const senderAccount = Buffer.from(txn.getSenderAccount_asU8());
    if (this._addressMap[senderAccount.toString("hex")]) {
      const rawTxHasher = DefaultHasher.newWithSalt(
        Buffer.from(HasherConstants.rawTransactionHasher)
      );

      const senderDepth = this.addressMap[senderAccount.toString("hex")];
      // TODO - test
      const rawBytes = txn.serializeBinary();
      const hash = rawTxHasher.finalize(Buffer.from(rawBytes));
      const childKey = this._keyFactory.derivePrivateChild(senderDepth);
      const signature = childKey.sign(hash);
      const pubKey = childKey.publicKey;

      let signedTx = new SignedTransaction();
      signedTx.setRawTxnBytes(rawBytes);
      signedTx.setSenderPublicKey(pubKey.toString("hex"));
      signedTx.setSenderSignature(signature.toBytes());

      return signedTx;
    } else {
      // TODO Error handling
      throw `Account sending transaction not found in wallet.  Account: ${senderAccount.toString(
        "hex"
      )}`;
    }
  }
}

export default AquariusWalletWrapper;
