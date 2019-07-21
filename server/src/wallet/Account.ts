import { AccountConstants } from "./Constants";
import { SHA3 } from "sha3";

export class AccountAddress {
  private readonly _address: Uint8Array;

  get address(): Uint8Array {
    return this._address;
  }

  get hexAddress(): string {
    return Buffer.from(this.address).toString("hex");
  }

  get shortAddress(): Uint8Array {
    return this.address.subarray(AccountConstants.shortStringLength);
  }

  static get default(): AccountAddress {
    return new AccountAddress(new Uint8Array(AccountConstants.addressLength));
  }

  get isDefault(): boolean {
    return AccountAddress.default.hexAddress === this.hexAddress;
  }

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
    const hash = addressBufferFromPublicKey(pk);
    const newAddress = new AccountAddress(new Uint8Array(hash));
    return newAddress;
  }

  static coreCodeAddress(): AccountAddress {
    return AccountAddress.default;
  }

  static associationAddress(): AccountAddress {
    return AccountAddress.default;
  }
}

export function addressBufferFromPublicKey(pk: Buffer): Buffer {
  const keccak = new SHA3(256);
  keccak.update(pk);
  const hash = keccak.digest();
  return hash;
}
