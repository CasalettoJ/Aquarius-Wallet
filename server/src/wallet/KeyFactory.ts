/// Seed is the output of a one-way function, which accepts a mnemonic as input
export class Seed {}

export default class {
  readonly MNEMONIC_SALT_PREFIX = "AQUARIUS WALLET: mnemonic salt prefix$";
  readonly MASTER_KEY_SALT = "AQUARIUS WALLET: master key salt$";
  readonly INFO_PREFIX = "AQUARIUS WALLET: derived key$";

  constructor(seed: Seed) {}
}
