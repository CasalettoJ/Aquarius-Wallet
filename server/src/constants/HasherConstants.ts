// https://github.com/libra/libra/blob/master/crypto/legacy_crypto/src/hash.rs
export default {
  hashSuffix: "@@$$LIBRA$$@@", // https://github.com/libra/libra/blob/master/crypto/legacy_crypto/src/hash.rs#L83
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
  discoveryMsgHasher: "DiscoveryMsg",
  bytesLength: 32,
  bitsLength: 256
};
