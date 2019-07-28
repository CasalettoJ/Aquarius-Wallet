import SHA3 from "sha3";
import HasherConstants from "../constants/HasherConstants";

// https://github.com/libra/libra/blob/master/crypto/legacy_crypto/src/hash.rs
// Use crypto like this: https://github.com/libra/libra/blob/master/types/src/transaction.rs#L178

export class HashValue {
  private _hash: Uint8Array = new Uint8Array(HasherConstants.bytesLength);

  get hash() {
    return this._hash;
  }

  constructor(hash: Uint8Array) {
    if (hash.byteLength > HasherConstants.bytesLength) {
      throw `Hashvalue supplied ${Buffer.from(hash).toString(
        "hex"
      )} is not the expected length: ${HasherConstants.bytesLength}`; // TODO: Error handling
    }
    this._hash = Buffer.from(hash);
  }

  static default(): Uint8Array {
    return new Uint8Array(HasherConstants.bytesLength);
  }

  // Libra team leaves this private but idk why so I won't
  // https://github.com/libra/libra/blob/master/crypto/legacy_crypto/src/hash.rs#L165
  static fromSHA3(buffer: Buffer): HashValue {
    const hash = new SHA3(256);
    hash.update(Buffer.from(buffer));
    return new HashValue(new Uint8Array(Buffer.from(hash.digest())));
  }

  toBinaryString(): string {
    return Buffer.from(this._hash).toString("binary");
  }

  toHexString(): string {
    return Buffer.from(this._hash).toString("hex");
  }

  isDefault(): boolean {
    return this._hash == new Uint8Array(HasherConstants.bytesLength);
  }
}

export class DefaultHasher {
  private _hasher: SHA3;

  constructor(hasher: SHA3) {
    this._hasher = hasher;
  }

  // Used to generate the different legacy hashers  ! !
  static newWithSalt(typename: Uint8Array): DefaultHasher {
    const hasher = new SHA3(256);
    let salt: Buffer = Buffer.from(typename.buffer);
    if (typename.byteLength > 0) {
      salt = Buffer.concat([
        Buffer.from(typename),
        Buffer.from(HasherConstants.hashSuffix)
      ]);
      hasher.update(salt);
    }
    return new DefaultHasher(hasher);
  }

  finalize(buf: Buffer): Buffer {
    this._hasher.update(Buffer.from(buf));
    return this._hasher.digest();
  }
}
