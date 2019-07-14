import crypto from "crypto";
const hkdf = require("futoin-hkdf");
import { eddsa } from "elliptic";

import Mnemonic from "./Mnemonic";
import WalletConstants from "./Constants";

export class ExtendedPrivateKey {
  readonly depth: bigint;
  readonly keyPair: eddsa.KeyPair;

  constructor(depth: bigint, kp: eddsa.KeyPair) {
    this.depth = depth;
    this.keyPair = kp;
  }
}

/// Seed is the output of a one-way function, which accepts a mnemonic as input
export class Seed {
  seed: Buffer;
  /// This constructor implements the one-way function that allows to generate a Seed from a
  /// particular Mnemonic and salt. WalletLibrary implements a fixed salt, but a user could
  /// choose a user-defined salt instead of the hardcoded one.
  constructor(
    mnemonic: Mnemonic,
    salt: string,
    cb: (err: Error, dKey: Buffer) => void
  ) {
    crypto.pbkdf2(
      mnemonic.toBytes(),
      salt,
      WalletConstants.pbkdf2Iterations,
      WalletConstants.seedLen,
      "sha3-256",
      (err: Error, dKey: Buffer) => {
        // TODO Error handling
        if (err) {
          throw `Error during seed creation: ${err}`;
        }
        this.seed = dKey;
        if (cb) {
          cb(err, dKey);
        }
      }
    );
  }
}

export default class {
  readonly seed: Seed;
  readonly masterMaterial: Buffer;
  constructor(seed: Seed) {
    this.seed = seed;
    // console.log(`Keyfactory Seed: ${JSON.stringify(seed)}`);
    this.masterMaterial = hkdf.extract(
      "sha3-256",
      32,
      this.seed.seed.buffer,
      WalletConstants.masterKeySalt
    );
    // console.log(
    //   `Keyfactory Master Material (Hex): ${this.masterMaterial.toString("hex")}`
    // );
  }

  /// Derive a particular PrivateKey at a certain depth
  derivePrivateChild(depth: bigint): ExtendedPrivateKey {
    // application info in the HKDF context is defined as WalletConstants.infoPrefix+depth.
    // console.log(
    //   `Creating private key with master material at depth ${depth}...`
    // );
    const buf = Buffer.alloc(8);
    buf.writeBigUInt64LE(depth);
    const infoPrefixBuffer = Buffer.from(WalletConstants.infoPrefix);
    const depthBuffer = Buffer.from(buf);
    const applicationInfo = Buffer.concat([infoPrefixBuffer, depthBuffer]);
    // console.log(`Application Info: ${applicationInfo.toString("hex")}`);
    const hkdfExpand = hkdf.expand(
      "sha3-256",
      hkdf.hash_length("sha3-256"),
      Buffer.from(this.masterMaterial),
      WalletConstants.privateKeyLen,
      applicationInfo
    );
    const keyPair = new eddsa("ed25519").keyFromSecret(Buffer.from(hkdfExpand));
    const epk = new ExtendedPrivateKey(depth, keyPair);
    // console.log(`Private Key: ${keyPair.getSecret().toString("hex")}`);
    // console.log(
    //   `Public Key: ${Buffer.from(keyPair.getPublic()).toString("hex")}`
    // );
    return epk;
  }
}
