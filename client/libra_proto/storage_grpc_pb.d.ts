// package: storage
// file: storage.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as storage_pb from "./storage_pb";
import * as get_with_proof_pb from "./get_with_proof_pb";
import * as ledger_info_pb from "./ledger_info_pb";
import * as transaction_pb from "./transaction_pb";
import * as account_state_blob_pb from "./account_state_blob_pb";
import * as proof_pb from "./proof_pb";

interface IStorageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    saveTransactions: IStorageService_ISaveTransactions;
    updateToLatestLedger: IStorageService_IUpdateToLatestLedger;
    getTransactions: IStorageService_IGetTransactions;
    getAccountStateWithProofByStateRoot: IStorageService_IGetAccountStateWithProofByStateRoot;
    getExecutorStartupInfo: IStorageService_IGetExecutorStartupInfo;
}

interface IStorageService_ISaveTransactions extends grpc.MethodDefinition<storage_pb.SaveTransactionsRequest, storage_pb.SaveTransactionsResponse> {
    path: string; // "/storage.Storage/SaveTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<storage_pb.SaveTransactionsRequest>;
    requestDeserialize: grpc.deserialize<storage_pb.SaveTransactionsRequest>;
    responseSerialize: grpc.serialize<storage_pb.SaveTransactionsResponse>;
    responseDeserialize: grpc.deserialize<storage_pb.SaveTransactionsResponse>;
}
interface IStorageService_IUpdateToLatestLedger extends grpc.MethodDefinition<get_with_proof_pb.UpdateToLatestLedgerRequest, get_with_proof_pb.UpdateToLatestLedgerResponse> {
    path: string; // "/storage.Storage/UpdateToLatestLedger"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<get_with_proof_pb.UpdateToLatestLedgerRequest>;
    requestDeserialize: grpc.deserialize<get_with_proof_pb.UpdateToLatestLedgerRequest>;
    responseSerialize: grpc.serialize<get_with_proof_pb.UpdateToLatestLedgerResponse>;
    responseDeserialize: grpc.deserialize<get_with_proof_pb.UpdateToLatestLedgerResponse>;
}
interface IStorageService_IGetTransactions extends grpc.MethodDefinition<storage_pb.GetTransactionsRequest, storage_pb.GetTransactionsResponse> {
    path: string; // "/storage.Storage/GetTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<storage_pb.GetTransactionsRequest>;
    requestDeserialize: grpc.deserialize<storage_pb.GetTransactionsRequest>;
    responseSerialize: grpc.serialize<storage_pb.GetTransactionsResponse>;
    responseDeserialize: grpc.deserialize<storage_pb.GetTransactionsResponse>;
}
interface IStorageService_IGetAccountStateWithProofByStateRoot extends grpc.MethodDefinition<storage_pb.GetAccountStateWithProofByStateRootRequest, storage_pb.GetAccountStateWithProofByStateRootResponse> {
    path: string; // "/storage.Storage/GetAccountStateWithProofByStateRoot"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<storage_pb.GetAccountStateWithProofByStateRootRequest>;
    requestDeserialize: grpc.deserialize<storage_pb.GetAccountStateWithProofByStateRootRequest>;
    responseSerialize: grpc.serialize<storage_pb.GetAccountStateWithProofByStateRootResponse>;
    responseDeserialize: grpc.deserialize<storage_pb.GetAccountStateWithProofByStateRootResponse>;
}
interface IStorageService_IGetExecutorStartupInfo extends grpc.MethodDefinition<storage_pb.GetExecutorStartupInfoRequest, storage_pb.GetExecutorStartupInfoResponse> {
    path: string; // "/storage.Storage/GetExecutorStartupInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<storage_pb.GetExecutorStartupInfoRequest>;
    requestDeserialize: grpc.deserialize<storage_pb.GetExecutorStartupInfoRequest>;
    responseSerialize: grpc.serialize<storage_pb.GetExecutorStartupInfoResponse>;
    responseDeserialize: grpc.deserialize<storage_pb.GetExecutorStartupInfoResponse>;
}

export const StorageService: IStorageService;

export interface IStorageServer {
    saveTransactions: grpc.handleUnaryCall<storage_pb.SaveTransactionsRequest, storage_pb.SaveTransactionsResponse>;
    updateToLatestLedger: grpc.handleUnaryCall<get_with_proof_pb.UpdateToLatestLedgerRequest, get_with_proof_pb.UpdateToLatestLedgerResponse>;
    getTransactions: grpc.handleUnaryCall<storage_pb.GetTransactionsRequest, storage_pb.GetTransactionsResponse>;
    getAccountStateWithProofByStateRoot: grpc.handleUnaryCall<storage_pb.GetAccountStateWithProofByStateRootRequest, storage_pb.GetAccountStateWithProofByStateRootResponse>;
    getExecutorStartupInfo: grpc.handleUnaryCall<storage_pb.GetExecutorStartupInfoRequest, storage_pb.GetExecutorStartupInfoResponse>;
}

export interface IStorageClient {
    saveTransactions(request: storage_pb.SaveTransactionsRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.SaveTransactionsResponse) => void): grpc.ClientUnaryCall;
    saveTransactions(request: storage_pb.SaveTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.SaveTransactionsResponse) => void): grpc.ClientUnaryCall;
    saveTransactions(request: storage_pb.SaveTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.SaveTransactionsResponse) => void): grpc.ClientUnaryCall;
    updateToLatestLedger(request: get_with_proof_pb.UpdateToLatestLedgerRequest, callback: (error: grpc.ServiceError | null, response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void): grpc.ClientUnaryCall;
    updateToLatestLedger(request: get_with_proof_pb.UpdateToLatestLedgerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void): grpc.ClientUnaryCall;
    updateToLatestLedger(request: get_with_proof_pb.UpdateToLatestLedgerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void): grpc.ClientUnaryCall;
    getTransactions(request: storage_pb.GetTransactionsRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.GetTransactionsResponse) => void): grpc.ClientUnaryCall;
    getTransactions(request: storage_pb.GetTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.GetTransactionsResponse) => void): grpc.ClientUnaryCall;
    getTransactions(request: storage_pb.GetTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.GetTransactionsResponse) => void): grpc.ClientUnaryCall;
    getAccountStateWithProofByStateRoot(request: storage_pb.GetAccountStateWithProofByStateRootRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.GetAccountStateWithProofByStateRootResponse) => void): grpc.ClientUnaryCall;
    getAccountStateWithProofByStateRoot(request: storage_pb.GetAccountStateWithProofByStateRootRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.GetAccountStateWithProofByStateRootResponse) => void): grpc.ClientUnaryCall;
    getAccountStateWithProofByStateRoot(request: storage_pb.GetAccountStateWithProofByStateRootRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.GetAccountStateWithProofByStateRootResponse) => void): grpc.ClientUnaryCall;
    getExecutorStartupInfo(request: storage_pb.GetExecutorStartupInfoRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.GetExecutorStartupInfoResponse) => void): grpc.ClientUnaryCall;
    getExecutorStartupInfo(request: storage_pb.GetExecutorStartupInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.GetExecutorStartupInfoResponse) => void): grpc.ClientUnaryCall;
    getExecutorStartupInfo(request: storage_pb.GetExecutorStartupInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.GetExecutorStartupInfoResponse) => void): grpc.ClientUnaryCall;
}

export class StorageClient extends grpc.Client implements IStorageClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public saveTransactions(request: storage_pb.SaveTransactionsRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.SaveTransactionsResponse) => void): grpc.ClientUnaryCall;
    public saveTransactions(request: storage_pb.SaveTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.SaveTransactionsResponse) => void): grpc.ClientUnaryCall;
    public saveTransactions(request: storage_pb.SaveTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.SaveTransactionsResponse) => void): grpc.ClientUnaryCall;
    public updateToLatestLedger(request: get_with_proof_pb.UpdateToLatestLedgerRequest, callback: (error: grpc.ServiceError | null, response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void): grpc.ClientUnaryCall;
    public updateToLatestLedger(request: get_with_proof_pb.UpdateToLatestLedgerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void): grpc.ClientUnaryCall;
    public updateToLatestLedger(request: get_with_proof_pb.UpdateToLatestLedgerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_with_proof_pb.UpdateToLatestLedgerResponse) => void): grpc.ClientUnaryCall;
    public getTransactions(request: storage_pb.GetTransactionsRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.GetTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getTransactions(request: storage_pb.GetTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.GetTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getTransactions(request: storage_pb.GetTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.GetTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getAccountStateWithProofByStateRoot(request: storage_pb.GetAccountStateWithProofByStateRootRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.GetAccountStateWithProofByStateRootResponse) => void): grpc.ClientUnaryCall;
    public getAccountStateWithProofByStateRoot(request: storage_pb.GetAccountStateWithProofByStateRootRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.GetAccountStateWithProofByStateRootResponse) => void): grpc.ClientUnaryCall;
    public getAccountStateWithProofByStateRoot(request: storage_pb.GetAccountStateWithProofByStateRootRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.GetAccountStateWithProofByStateRootResponse) => void): grpc.ClientUnaryCall;
    public getExecutorStartupInfo(request: storage_pb.GetExecutorStartupInfoRequest, callback: (error: grpc.ServiceError | null, response: storage_pb.GetExecutorStartupInfoResponse) => void): grpc.ClientUnaryCall;
    public getExecutorStartupInfo(request: storage_pb.GetExecutorStartupInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: storage_pb.GetExecutorStartupInfoResponse) => void): grpc.ClientUnaryCall;
    public getExecutorStartupInfo(request: storage_pb.GetExecutorStartupInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: storage_pb.GetExecutorStartupInfoResponse) => void): grpc.ClientUnaryCall;
}
