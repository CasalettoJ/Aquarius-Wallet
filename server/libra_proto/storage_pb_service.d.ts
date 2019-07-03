// package: storage
// file: storage.proto

import * as storage_pb from "./storage_pb";
import * as get_with_proof_pb from "./get_with_proof_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StorageSaveTransactions = {
  readonly methodName: string;
  readonly service: typeof Storage;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_pb.SaveTransactionsRequest;
  readonly responseType: typeof storage_pb.SaveTransactionsResponse;
};

type StorageUpdateToLatestLedger = {
  readonly methodName: string;
  readonly service: typeof Storage;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof get_with_proof_pb.UpdateToLatestLedgerRequest;
  readonly responseType: typeof get_with_proof_pb.UpdateToLatestLedgerResponse;
};

type StorageGetTransactions = {
  readonly methodName: string;
  readonly service: typeof Storage;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_pb.GetTransactionsRequest;
  readonly responseType: typeof storage_pb.GetTransactionsResponse;
};

type StorageGetAccountStateWithProofByStateRoot = {
  readonly methodName: string;
  readonly service: typeof Storage;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_pb.GetAccountStateWithProofByStateRootRequest;
  readonly responseType: typeof storage_pb.GetAccountStateWithProofByStateRootResponse;
};

type StorageGetExecutorStartupInfo = {
  readonly methodName: string;
  readonly service: typeof Storage;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storage_pb.GetExecutorStartupInfoRequest;
  readonly responseType: typeof storage_pb.GetExecutorStartupInfoResponse;
};

export class Storage {
  static readonly serviceName: string;
  static readonly SaveTransactions: StorageSaveTransactions;
  static readonly UpdateToLatestLedger: StorageUpdateToLatestLedger;
  static readonly GetTransactions: StorageGetTransactions;
  static readonly GetAccountStateWithProofByStateRoot: StorageGetAccountStateWithProofByStateRoot;
  static readonly GetExecutorStartupInfo: StorageGetExecutorStartupInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class StorageClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  saveTransactions(
    requestMessage: storage_pb.SaveTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_pb.SaveTransactionsResponse|null) => void
  ): UnaryResponse;
  saveTransactions(
    requestMessage: storage_pb.SaveTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: storage_pb.SaveTransactionsResponse|null) => void
  ): UnaryResponse;
  updateToLatestLedger(
    requestMessage: get_with_proof_pb.UpdateToLatestLedgerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: get_with_proof_pb.UpdateToLatestLedgerResponse|null) => void
  ): UnaryResponse;
  updateToLatestLedger(
    requestMessage: get_with_proof_pb.UpdateToLatestLedgerRequest,
    callback: (error: ServiceError|null, responseMessage: get_with_proof_pb.UpdateToLatestLedgerResponse|null) => void
  ): UnaryResponse;
  getTransactions(
    requestMessage: storage_pb.GetTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_pb.GetTransactionsResponse|null) => void
  ): UnaryResponse;
  getTransactions(
    requestMessage: storage_pb.GetTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: storage_pb.GetTransactionsResponse|null) => void
  ): UnaryResponse;
  getAccountStateWithProofByStateRoot(
    requestMessage: storage_pb.GetAccountStateWithProofByStateRootRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_pb.GetAccountStateWithProofByStateRootResponse|null) => void
  ): UnaryResponse;
  getAccountStateWithProofByStateRoot(
    requestMessage: storage_pb.GetAccountStateWithProofByStateRootRequest,
    callback: (error: ServiceError|null, responseMessage: storage_pb.GetAccountStateWithProofByStateRootResponse|null) => void
  ): UnaryResponse;
  getExecutorStartupInfo(
    requestMessage: storage_pb.GetExecutorStartupInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storage_pb.GetExecutorStartupInfoResponse|null) => void
  ): UnaryResponse;
  getExecutorStartupInfo(
    requestMessage: storage_pb.GetExecutorStartupInfoRequest,
    callback: (error: ServiceError|null, responseMessage: storage_pb.GetExecutorStartupInfoResponse|null) => void
  ): UnaryResponse;
}

