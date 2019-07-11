// package: storage
// file: storage.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as get_with_proof_pb from "./get_with_proof_pb";
import * as ledger_info_pb from "./ledger_info_pb";
import * as transaction_pb from "./transaction_pb";
import * as account_state_blob_pb from "./account_state_blob_pb";
import * as proof_pb from "./proof_pb";

export class SaveTransactionsRequest extends jspb.Message { 
    clearTxnsToCommitList(): void;
    getTxnsToCommitList(): Array<transaction_pb.TransactionToCommit>;
    setTxnsToCommitList(value: Array<transaction_pb.TransactionToCommit>): void;
    addTxnsToCommit(value?: transaction_pb.TransactionToCommit, index?: number): transaction_pb.TransactionToCommit;

    getFirstVersion(): string;
    setFirstVersion(value: string): void;


    hasLedgerInfoWithSignatures(): boolean;
    clearLedgerInfoWithSignatures(): void;
    getLedgerInfoWithSignatures(): ledger_info_pb.LedgerInfoWithSignatures | undefined;
    setLedgerInfoWithSignatures(value?: ledger_info_pb.LedgerInfoWithSignatures): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SaveTransactionsRequest): SaveTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveTransactionsRequest;
    static deserializeBinaryFromReader(message: SaveTransactionsRequest, reader: jspb.BinaryReader): SaveTransactionsRequest;
}

export namespace SaveTransactionsRequest {
    export type AsObject = {
        txnsToCommitList: Array<transaction_pb.TransactionToCommit.AsObject>,
        firstVersion: string,
        ledgerInfoWithSignatures?: ledger_info_pb.LedgerInfoWithSignatures.AsObject,
    }
}

export class SaveTransactionsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SaveTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SaveTransactionsResponse): SaveTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SaveTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SaveTransactionsResponse;
    static deserializeBinaryFromReader(message: SaveTransactionsResponse, reader: jspb.BinaryReader): SaveTransactionsResponse;
}

export namespace SaveTransactionsResponse {
    export type AsObject = {
    }
}

export class GetTransactionsRequest extends jspb.Message { 
    getStartVersion(): string;
    setStartVersion(value: string): void;

    getBatchSize(): string;
    setBatchSize(value: string): void;

    getLedgerVersion(): string;
    setLedgerVersion(value: string): void;

    getFetchEvents(): boolean;
    setFetchEvents(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
    static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
    export type AsObject = {
        startVersion: string,
        batchSize: string,
        ledgerVersion: string,
        fetchEvents: boolean,
    }
}

export class GetTransactionsResponse extends jspb.Message { 

    hasTxnListWithProof(): boolean;
    clearTxnListWithProof(): void;
    getTxnListWithProof(): transaction_pb.TransactionListWithProof | undefined;
    setTxnListWithProof(value?: transaction_pb.TransactionListWithProof): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionsResponse): GetTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionsResponse;
    static deserializeBinaryFromReader(message: GetTransactionsResponse, reader: jspb.BinaryReader): GetTransactionsResponse;
}

export namespace GetTransactionsResponse {
    export type AsObject = {
        txnListWithProof?: transaction_pb.TransactionListWithProof.AsObject,
    }
}

export class GetAccountStateWithProofByStateRootRequest extends jspb.Message { 
    getAddress(): Uint8Array | string;
    getAddress_asU8(): Uint8Array;
    getAddress_asB64(): string;
    setAddress(value: Uint8Array | string): void;

    getStateRootHash(): Uint8Array | string;
    getStateRootHash_asU8(): Uint8Array;
    getStateRootHash_asB64(): string;
    setStateRootHash(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountStateWithProofByStateRootRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountStateWithProofByStateRootRequest): GetAccountStateWithProofByStateRootRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountStateWithProofByStateRootRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountStateWithProofByStateRootRequest;
    static deserializeBinaryFromReader(message: GetAccountStateWithProofByStateRootRequest, reader: jspb.BinaryReader): GetAccountStateWithProofByStateRootRequest;
}

export namespace GetAccountStateWithProofByStateRootRequest {
    export type AsObject = {
        address: Uint8Array | string,
        stateRootHash: Uint8Array | string,
    }
}

export class GetAccountStateWithProofByStateRootResponse extends jspb.Message { 

    hasAccountStateBlob(): boolean;
    clearAccountStateBlob(): void;
    getAccountStateBlob(): account_state_blob_pb.AccountStateBlob | undefined;
    setAccountStateBlob(value?: account_state_blob_pb.AccountStateBlob): void;


    hasSparseMerkleProof(): boolean;
    clearSparseMerkleProof(): void;
    getSparseMerkleProof(): proof_pb.SparseMerkleProof | undefined;
    setSparseMerkleProof(value?: proof_pb.SparseMerkleProof): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountStateWithProofByStateRootResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountStateWithProofByStateRootResponse): GetAccountStateWithProofByStateRootResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountStateWithProofByStateRootResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountStateWithProofByStateRootResponse;
    static deserializeBinaryFromReader(message: GetAccountStateWithProofByStateRootResponse, reader: jspb.BinaryReader): GetAccountStateWithProofByStateRootResponse;
}

export namespace GetAccountStateWithProofByStateRootResponse {
    export type AsObject = {
        accountStateBlob?: account_state_blob_pb.AccountStateBlob.AsObject,
        sparseMerkleProof?: proof_pb.SparseMerkleProof.AsObject,
    }
}

export class GetExecutorStartupInfoRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetExecutorStartupInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetExecutorStartupInfoRequest): GetExecutorStartupInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetExecutorStartupInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetExecutorStartupInfoRequest;
    static deserializeBinaryFromReader(message: GetExecutorStartupInfoRequest, reader: jspb.BinaryReader): GetExecutorStartupInfoRequest;
}

export namespace GetExecutorStartupInfoRequest {
    export type AsObject = {
    }
}

export class GetExecutorStartupInfoResponse extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): ExecutorStartupInfo | undefined;
    setInfo(value?: ExecutorStartupInfo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetExecutorStartupInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetExecutorStartupInfoResponse): GetExecutorStartupInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetExecutorStartupInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetExecutorStartupInfoResponse;
    static deserializeBinaryFromReader(message: GetExecutorStartupInfoResponse, reader: jspb.BinaryReader): GetExecutorStartupInfoResponse;
}

export namespace GetExecutorStartupInfoResponse {
    export type AsObject = {
        info?: ExecutorStartupInfo.AsObject,
    }
}

export class ExecutorStartupInfo extends jspb.Message { 

    hasLedgerInfo(): boolean;
    clearLedgerInfo(): void;
    getLedgerInfo(): ledger_info_pb.LedgerInfo | undefined;
    setLedgerInfo(value?: ledger_info_pb.LedgerInfo): void;

    getLatestVersion(): string;
    setLatestVersion(value: string): void;

    getAccountStateRootHash(): Uint8Array | string;
    getAccountStateRootHash_asU8(): Uint8Array;
    getAccountStateRootHash_asB64(): string;
    setAccountStateRootHash(value: Uint8Array | string): void;

    clearLedgerFrozenSubtreeHashesList(): void;
    getLedgerFrozenSubtreeHashesList(): Array<Uint8Array | string>;
    getLedgerFrozenSubtreeHashesList_asU8(): Array<Uint8Array>;
    getLedgerFrozenSubtreeHashesList_asB64(): Array<string>;
    setLedgerFrozenSubtreeHashesList(value: Array<Uint8Array | string>): void;
    addLedgerFrozenSubtreeHashes(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutorStartupInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutorStartupInfo): ExecutorStartupInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutorStartupInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutorStartupInfo;
    static deserializeBinaryFromReader(message: ExecutorStartupInfo, reader: jspb.BinaryReader): ExecutorStartupInfo;
}

export namespace ExecutorStartupInfo {
    export type AsObject = {
        ledgerInfo?: ledger_info_pb.LedgerInfo.AsObject,
        latestVersion: string,
        accountStateRootHash: Uint8Array | string,
        ledgerFrozenSubtreeHashesList: Array<Uint8Array | string>,
    }
}
