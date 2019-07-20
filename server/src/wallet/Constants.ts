export default {
  defaultSalt: "AQUARIUS WALLET",
  mnemonicSaltPrefix: "LIBRA WALLET: mnemonic salt prefix$",
  masterKeySalt: "LIBRA WALLET: master key salt$",
  infoPrefix: "LIBRA WALLET: derived key$",
  pbkdf2Iterations: 2048,
  seedLen: 32,
  privateKeyLen: 32,
  delimiter: " "
};

// https://github.com/libra/libra/blob/master/types/src/account_config.rs
export const AccountConstants = {
  addressLength: 32,
  shortStringLength: 4,
  libraNetworkIDShort: "lb"
  // coinmoduleName: "LibraCoin",
  // coinStructName: "T",
  // accountModuleName: "LibraAccount",
  // accountStructName: "T",
  // hashModuleName: "Hash"
};
