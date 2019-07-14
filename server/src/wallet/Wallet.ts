import randomBytes from "randombytes";

import KeyFactory, { Seed } from "./KeyFactory";
import Mnemonic from "./Mnemonic";
import BigNumber from "bignumber.js";

// Differs from https://github.com/libra/libra/blob/master/client/libra_wallet/src/wallet_library.rs in that it won't store mnemonic.  That is the user's responsibility to store and supply only as needed until I implement an encrypted storage for it (backend user accounts?)
class AquariusWalletWrapper {
  private _keyFactory: KeyFactory;
  private _addressMap: Map<Buffer, BigNumber>;
  private _keyLeaf: BigNumber;

  constructor(kf: KeyFactory) {
    this._keyFactory = kf;
    this._keyLeaf = new BigNumber(0);
    this._addressMap = new Map<Buffer, BigNumber>();
  }

  get keyLeaf(): BigNumber {
    return this._keyLeaf;
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
          const newWallet = new AquariusWalletWrapper(keyFactory);
          resolve(newWallet);
        }
      });
    });
    return promise;
  }

  generateNewAddress(): { address: Buffer; depth: BigNumber } {
    const epk = this._keyFactory.derivePrivateChild(this.keyLeaf);
    this._keyLeaf.plus(1);
    return { address: epk.getAddress(), depth: epk.depth };
  }
}

export default AquariusWalletWrapper;
