// package: mempool
// file: mempool.proto

import * as mempool_pb from "./mempool_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MempoolAddTransactionWithValidation = {
  readonly methodName: string;
  readonly service: typeof Mempool;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mempool_pb.AddTransactionWithValidationRequest;
  readonly responseType: typeof mempool_pb.AddTransactionWithValidationResponse;
};

type MempoolGetBlock = {
  readonly methodName: string;
  readonly service: typeof Mempool;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mempool_pb.GetBlockRequest;
  readonly responseType: typeof mempool_pb.GetBlockResponse;
};

type MempoolCommitTransactions = {
  readonly methodName: string;
  readonly service: typeof Mempool;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mempool_pb.CommitTransactionsRequest;
  readonly responseType: typeof mempool_pb.CommitTransactionsResponse;
};

type MempoolHealthCheck = {
  readonly methodName: string;
  readonly service: typeof Mempool;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mempool_pb.HealthCheckRequest;
  readonly responseType: typeof mempool_pb.HealthCheckResponse;
};

export class Mempool {
  static readonly serviceName: string;
  static readonly AddTransactionWithValidation: MempoolAddTransactionWithValidation;
  static readonly GetBlock: MempoolGetBlock;
  static readonly CommitTransactions: MempoolCommitTransactions;
  static readonly HealthCheck: MempoolHealthCheck;
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

export class MempoolClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addTransactionWithValidation(
    requestMessage: mempool_pb.AddTransactionWithValidationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.AddTransactionWithValidationResponse|null) => void
  ): UnaryResponse;
  addTransactionWithValidation(
    requestMessage: mempool_pb.AddTransactionWithValidationRequest,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.AddTransactionWithValidationResponse|null) => void
  ): UnaryResponse;
  getBlock(
    requestMessage: mempool_pb.GetBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.GetBlockResponse|null) => void
  ): UnaryResponse;
  getBlock(
    requestMessage: mempool_pb.GetBlockRequest,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.GetBlockResponse|null) => void
  ): UnaryResponse;
  commitTransactions(
    requestMessage: mempool_pb.CommitTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.CommitTransactionsResponse|null) => void
  ): UnaryResponse;
  commitTransactions(
    requestMessage: mempool_pb.CommitTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.CommitTransactionsResponse|null) => void
  ): UnaryResponse;
  healthCheck(
    requestMessage: mempool_pb.HealthCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.HealthCheckResponse|null) => void
  ): UnaryResponse;
  healthCheck(
    requestMessage: mempool_pb.HealthCheckRequest,
    callback: (error: ServiceError|null, responseMessage: mempool_pb.HealthCheckResponse|null) => void
  ): UnaryResponse;
}

