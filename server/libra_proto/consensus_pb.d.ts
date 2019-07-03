// package: network
// file: consensus.proto

import * as jspb from "google-protobuf";
import * as ledger_info_pb from "./ledger_info_pb";
import * as transaction_pb from "./transaction_pb";

export class ConsensusMsg extends jspb.Message {
  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): Proposal | undefined;
  setProposal(value?: Proposal): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): Vote | undefined;
  setVote(value?: Vote): void;

  hasRequestBlock(): boolean;
  clearRequestBlock(): void;
  getRequestBlock(): RequestBlock | undefined;
  setRequestBlock(value?: RequestBlock): void;

  hasRespondBlock(): boolean;
  clearRespondBlock(): void;
  getRespondBlock(): RespondBlock | undefined;
  setRespondBlock(value?: RespondBlock): void;

  hasTimeoutMsg(): boolean;
  clearTimeoutMsg(): void;
  getTimeoutMsg(): TimeoutMsg | undefined;
  setTimeoutMsg(value?: TimeoutMsg): void;

  hasRequestChunk(): boolean;
  clearRequestChunk(): void;
  getRequestChunk(): RequestChunk | undefined;
  setRequestChunk(value?: RequestChunk): void;

  hasRespondChunk(): boolean;
  clearRespondChunk(): void;
  getRespondChunk(): RespondChunk | undefined;
  setRespondChunk(value?: RespondChunk): void;

  getMessageCase(): ConsensusMsg.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusMsg): ConsensusMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusMsg;
  static deserializeBinaryFromReader(message: ConsensusMsg, reader: jspb.BinaryReader): ConsensusMsg;
}

export namespace ConsensusMsg {
  export type AsObject = {
    proposal?: Proposal.AsObject,
    vote?: Vote.AsObject,
    requestBlock?: RequestBlock.AsObject,
    respondBlock?: RespondBlock.AsObject,
    timeoutMsg?: TimeoutMsg.AsObject,
    requestChunk?: RequestChunk.AsObject,
    respondChunk?: RespondChunk.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    PROPOSAL = 1,
    VOTE = 2,
    REQUEST_BLOCK = 3,
    RESPOND_BLOCK = 4,
    TIMEOUT_MSG = 5,
    REQUEST_CHUNK = 6,
    RESPOND_CHUNK = 7,
  }
}

export class Proposal extends jspb.Message {
  hasProposedBlock(): boolean;
  clearProposedBlock(): void;
  getProposedBlock(): Block | undefined;
  setProposedBlock(value?: Block): void;

  getProposer(): Uint8Array | string;
  getProposer_asU8(): Uint8Array;
  getProposer_asB64(): string;
  setProposer(value: Uint8Array | string): void;

  hasTimeoutQuorumCert(): boolean;
  clearTimeoutQuorumCert(): void;
  getTimeoutQuorumCert(): PacemakerTimeoutCertificate | undefined;
  setTimeoutQuorumCert(value?: PacemakerTimeoutCertificate): void;

  hasHighestLedgerInfo(): boolean;
  clearHighestLedgerInfo(): void;
  getHighestLedgerInfo(): QuorumCert | undefined;
  setHighestLedgerInfo(value?: QuorumCert): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    proposedBlock?: Block.AsObject,
    proposer: Uint8Array | string,
    timeoutQuorumCert?: PacemakerTimeoutCertificate.AsObject,
    highestLedgerInfo?: QuorumCert.AsObject,
  }
}

export class PacemakerTimeout extends jspb.Message {
  getRound(): string;
  setRound(value: string): void;

  getAuthor(): Uint8Array | string;
  getAuthor_asU8(): Uint8Array;
  getAuthor_asB64(): string;
  setAuthor(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacemakerTimeout.AsObject;
  static toObject(includeInstance: boolean, msg: PacemakerTimeout): PacemakerTimeout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacemakerTimeout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacemakerTimeout;
  static deserializeBinaryFromReader(message: PacemakerTimeout, reader: jspb.BinaryReader): PacemakerTimeout;
}

export namespace PacemakerTimeout {
  export type AsObject = {
    round: string,
    author: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class TimeoutMsg extends jspb.Message {
  hasHighestQuorumCert(): boolean;
  clearHighestQuorumCert(): void;
  getHighestQuorumCert(): QuorumCert | undefined;
  setHighestQuorumCert(value?: QuorumCert): void;

  hasPacemakerTimeout(): boolean;
  clearPacemakerTimeout(): void;
  getPacemakerTimeout(): PacemakerTimeout | undefined;
  setPacemakerTimeout(value?: PacemakerTimeout): void;

  getAuthor(): Uint8Array | string;
  getAuthor_asU8(): Uint8Array;
  getAuthor_asB64(): string;
  setAuthor(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  hasHighestLedgerInfo(): boolean;
  clearHighestLedgerInfo(): void;
  getHighestLedgerInfo(): QuorumCert | undefined;
  setHighestLedgerInfo(value?: QuorumCert): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeoutMsg.AsObject;
  static toObject(includeInstance: boolean, msg: TimeoutMsg): TimeoutMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeoutMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeoutMsg;
  static deserializeBinaryFromReader(message: TimeoutMsg, reader: jspb.BinaryReader): TimeoutMsg;
}

export namespace TimeoutMsg {
  export type AsObject = {
    highestQuorumCert?: QuorumCert.AsObject,
    pacemakerTimeout?: PacemakerTimeout.AsObject,
    author: Uint8Array | string,
    signature: Uint8Array | string,
    highestLedgerInfo?: QuorumCert.AsObject,
  }
}

export class PacemakerTimeoutCertificate extends jspb.Message {
  getRound(): string;
  setRound(value: string): void;

  clearTimeoutsList(): void;
  getTimeoutsList(): Array<PacemakerTimeout>;
  setTimeoutsList(value: Array<PacemakerTimeout>): void;
  addTimeouts(value?: PacemakerTimeout, index?: number): PacemakerTimeout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacemakerTimeoutCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: PacemakerTimeoutCertificate): PacemakerTimeoutCertificate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacemakerTimeoutCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacemakerTimeoutCertificate;
  static deserializeBinaryFromReader(message: PacemakerTimeoutCertificate, reader: jspb.BinaryReader): PacemakerTimeoutCertificate;
}

export namespace PacemakerTimeoutCertificate {
  export type AsObject = {
    round: string,
    timeoutsList: Array<PacemakerTimeout.AsObject>,
  }
}

export class Block extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getParentId(): Uint8Array | string;
  getParentId_asU8(): Uint8Array;
  getParentId_asB64(): string;
  setParentId(value: Uint8Array | string): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getRound(): string;
  setRound(value: string): void;

  getHeight(): string;
  setHeight(value: string): void;

  getTimestampUsecs(): string;
  setTimestampUsecs(value: string): void;

  hasQuorumCert(): boolean;
  clearQuorumCert(): void;
  getQuorumCert(): QuorumCert | undefined;
  setQuorumCert(value?: QuorumCert): void;

  getAuthor(): Uint8Array | string;
  getAuthor_asU8(): Uint8Array;
  getAuthor_asB64(): string;
  setAuthor(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    id: Uint8Array | string,
    parentId: Uint8Array | string,
    payload: Uint8Array | string,
    round: string,
    height: string,
    timestampUsecs: string,
    quorumCert?: QuorumCert.AsObject,
    author: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class QuorumCert extends jspb.Message {
  getBlockId(): Uint8Array | string;
  getBlockId_asU8(): Uint8Array;
  getBlockId_asB64(): string;
  setBlockId(value: Uint8Array | string): void;

  getStateId(): Uint8Array | string;
  getStateId_asU8(): Uint8Array;
  getStateId_asB64(): string;
  setStateId(value: Uint8Array | string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getRound(): string;
  setRound(value: string): void;

  hasSignedLedgerInfo(): boolean;
  clearSignedLedgerInfo(): void;
  getSignedLedgerInfo(): ledger_info_pb.LedgerInfoWithSignatures | undefined;
  setSignedLedgerInfo(value?: ledger_info_pb.LedgerInfoWithSignatures): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuorumCert.AsObject;
  static toObject(includeInstance: boolean, msg: QuorumCert): QuorumCert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuorumCert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuorumCert;
  static deserializeBinaryFromReader(message: QuorumCert, reader: jspb.BinaryReader): QuorumCert;
}

export namespace QuorumCert {
  export type AsObject = {
    blockId: Uint8Array | string,
    stateId: Uint8Array | string,
    version: string,
    round: string,
    signedLedgerInfo?: ledger_info_pb.LedgerInfoWithSignatures.AsObject,
  }
}

export class Vote extends jspb.Message {
  getProposedBlockId(): Uint8Array | string;
  getProposedBlockId_asU8(): Uint8Array;
  getProposedBlockId_asB64(): string;
  setProposedBlockId(value: Uint8Array | string): void;

  getExecutedStateId(): Uint8Array | string;
  getExecutedStateId_asU8(): Uint8Array;
  getExecutedStateId_asB64(): string;
  setExecutedStateId(value: Uint8Array | string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getRound(): string;
  setRound(value: string): void;

  getAuthor(): Uint8Array | string;
  getAuthor_asU8(): Uint8Array;
  getAuthor_asB64(): string;
  setAuthor(value: Uint8Array | string): void;

  hasLedgerInfo(): boolean;
  clearLedgerInfo(): void;
  getLedgerInfo(): ledger_info_pb.LedgerInfo | undefined;
  setLedgerInfo(value?: ledger_info_pb.LedgerInfo): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    proposedBlockId: Uint8Array | string,
    executedStateId: Uint8Array | string,
    version: string,
    round: string,
    author: Uint8Array | string,
    ledgerInfo?: ledger_info_pb.LedgerInfo.AsObject,
    signature: Uint8Array | string,
  }
}

export class RequestBlock extends jspb.Message {
  getBlockId(): Uint8Array | string;
  getBlockId_asU8(): Uint8Array;
  getBlockId_asB64(): string;
  setBlockId(value: Uint8Array | string): void;

  getNumBlocks(): string;
  setNumBlocks(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestBlock.AsObject;
  static toObject(includeInstance: boolean, msg: RequestBlock): RequestBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestBlock;
  static deserializeBinaryFromReader(message: RequestBlock, reader: jspb.BinaryReader): RequestBlock;
}

export namespace RequestBlock {
  export type AsObject = {
    blockId: Uint8Array | string,
    numBlocks: string,
  }
}

export class RespondBlock extends jspb.Message {
  getStatus(): BlockRetrievalStatusMap[keyof BlockRetrievalStatusMap];
  setStatus(value: BlockRetrievalStatusMap[keyof BlockRetrievalStatusMap]): void;

  clearBlocksList(): void;
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespondBlock.AsObject;
  static toObject(includeInstance: boolean, msg: RespondBlock): RespondBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespondBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespondBlock;
  static deserializeBinaryFromReader(message: RespondBlock, reader: jspb.BinaryReader): RespondBlock;
}

export namespace RespondBlock {
  export type AsObject = {
    status: BlockRetrievalStatusMap[keyof BlockRetrievalStatusMap],
    blocksList: Array<Block.AsObject>,
  }
}

export class RequestChunk extends jspb.Message {
  getStartVersion(): string;
  setStartVersion(value: string): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): QuorumCert | undefined;
  setTarget(value?: QuorumCert): void;

  getBatchSize(): string;
  setBatchSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RequestChunk): RequestChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestChunk;
  static deserializeBinaryFromReader(message: RequestChunk, reader: jspb.BinaryReader): RequestChunk;
}

export namespace RequestChunk {
  export type AsObject = {
    startVersion: string,
    target?: QuorumCert.AsObject,
    batchSize: string,
  }
}

export class RespondChunk extends jspb.Message {
  hasTxnListWithProof(): boolean;
  clearTxnListWithProof(): void;
  getTxnListWithProof(): transaction_pb.TransactionListWithProof | undefined;
  setTxnListWithProof(value?: transaction_pb.TransactionListWithProof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespondChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RespondChunk): RespondChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespondChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespondChunk;
  static deserializeBinaryFromReader(message: RespondChunk, reader: jspb.BinaryReader): RespondChunk;
}

export namespace RespondChunk {
  export type AsObject = {
    txnListWithProof?: transaction_pb.TransactionListWithProof.AsObject,
  }
}

export interface BlockRetrievalStatusMap {
  SUCCEEDED: 0;
  ID_NOT_FOUND: 1;
  NOT_ENOUGH_BLOCKS: 2;
}

export const BlockRetrievalStatus: BlockRetrievalStatusMap;

