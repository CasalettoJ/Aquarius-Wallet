export default {
  defaultSalt: "AQUARIUS WALLET",
  mnemonicSaltPrefix: "LIBRA WALLET: mnemonic salt prefix$",
  masterKeySalt: "LIBRA WALLET: master key salt$",
  infoPrefix: "LIBRA WALLET: derived key$",
  hashSuffix: "@@$$LIBRA$$@@", // https://github.com/libra/libra/blob/master/crypto/legacy_crypto/src/hash.rs#L83
  pbkdf2Iterations: 2048,
  seedLen: 32,
  privateKeyLen: 32,
  mnemonicDelimiter: " "
};

// https://github.com/libra/libra/blob/master/types/src/account_config.rs
export const AccountConstants = {
  addressLength: 32,
  shortStringLength: 4,
  libraNetworkIDShort: "lb",
  coinModuleName: "LibraCoin",
  coinStructName: "T",
  accountModuleName: "LibraAccount",
  accountStructName: "T",
  hashModuleName: "Hash"
};

// https://github.com/libra/libra/blob/master/crypto/legacy_crypto/src/hash.rs
export const HasherConstants = {
  accessPathHasher: "VM_ACCESS_PATH",
  ledgerInfoHasher: "LedgerInfo",
  transactionAccumulatorHasher: "TransactionAccumulator",
  eventAccumulatorHasher: "EventAccumulator",
  sparseMerkleInternalHasher: "SparseMerkleInternal",
  sparseMerkleLeafHasher: "SparseMerkleLeaf",
  accountStateBlobHasher: "AccountStateBlob",
  transactionInfoHasher: "TransactionInfo",
  rawTransactionHasher: "RawTransaction",
  signedTransactionHasher: "SignedTransaction",
  blockHasher: "BlockId",
  pacemakerTimeoutHasher: "PacemakerTimeout",
  timeoutMsgHasher: "TimeoutMsg",
  voteMsgHasher: "VoteMsg",
  contractEventHasher: "ContractEvent",
  /// The hasher used only for testing. It doesn't have a salt.
  testOnlyHasher: "",
  discoveryMsgHasher: "DiscoveryMsg"
};
