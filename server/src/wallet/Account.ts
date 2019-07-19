import { AccountConstants } from "./Constants";
import { Keccak } from "sha3";

export class AccountAddress {
  private readonly _address: Uint8Array;
  // private _nickname: string;

  get address(): Uint8Array {
    return this.address;
  }
  get hexStrAddress(): string {
    return Buffer.from(this.address).toString("hex");
  }
  get shortAddress(): Uint8Array {
    return this.address.subarray(AccountConstants.shortStringLength);
  }
  //   get nickname(): string {
  //     return this._nickname;
  //   }
  //   set nickname(n: string) {
  //     this._nickname = n;
  //   }

  constructor(address: Uint8Array) {
    if (address.byteLength != AccountConstants.addressLength) {
      // TODO: Error handling
      throw `Account address ${address} was not expected length ${
        AccountConstants.addressLength
      }`;
    }
    this._address = address;
  }

  // https://github.com/libra/libra/blob/master/types/src/account_address.rs#L59 Important TODO notes from libra team on hashing of addresses from public keys.
  static fromPublicKey(pk: Buffer): AccountAddress {
    const keccak = new Keccak(256);
    keccak.update(pk);
    const hash = keccak.digest();
    const newAddress = new AccountAddress(hash);
    return newAddress;
  }
}
