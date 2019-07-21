import randomBytes from "randombytes";

import {
  RawTransaction,
  SignedTransaction
} from "../../../common/libra_protos/transaction_pb";

import KeyFactory, { Seed } from "./KeyFactory";
import Mnemonic from "./Mnemonic";
import BigNumber from "bignumber.js";
import { AccountAddress } from "./Account";

export type DerivedPublicAddress = {
  address: AccountAddress;
  depth: BigNumber;
};

// TODO: Store mnemonic phrase in an encrypted way.
class AquariusWalletWrapper {
  private readonly _mnemonic: Mnemonic;
  private readonly _keyFactory: KeyFactory;
  private _addressMap: Map<Buffer, BigNumber>;
  private _keyLeaf: BigNumber;

  constructor(kf: KeyFactory, m: Mnemonic) {
    this._keyFactory = kf;
    this._keyLeaf = new BigNumber(0);
    this._addressMap = new Map<Buffer, BigNumber>();
    this._mnemonic = m;
  }

  get keyLeaf(): BigNumber {
    return this._keyLeaf;
  }

  // TODO: https://github.com/libra/libra/blob/master/client/libra_wallet/src/wallet_library.rs#L140 has error checking for this.
  get addressMap(): Map<Buffer, BigNumber> {
    return this._addressMap;
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
    this._keyLeaf.plus(1);
    return { address: epk.address, depth: epk.depth };
  }

  /// Simple public function that allows to sign a Libra RawTransaction with the PrivateKey
  /// associated to a particular AccountAddress. If the PrivateKey associated to an
  /// AccountAddress is not contained in the addr_map, then this function will throw an Error
  signTxn(txn: RawTransaction): SignedTransaction {
    const senderAccount = Buffer.from(txn.getSenderAccount_asU8());
    if (this.addressMap.has(senderAccount)) {
      const senderAddress = this.addressMap.get(
        Buffer.from(senderAccount.buffer)
      );
      // TODO
      const rawBytes = txn.serializeBinary();
      return null;
    } else {
      // TODO Error handling
      throw `Account sending transaction not found in wallet.  Account: ${senderAccount.toString(
        "hex"
      )}`;
    }
  }
}

export default AquariusWalletWrapper;
