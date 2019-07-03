// package: execution
// file: execution.proto

import * as execution_pb from "./execution_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ExecutionExecuteBlock = {
  readonly methodName: string;
  readonly service: typeof Execution;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof execution_pb.ExecuteBlockRequest;
  readonly responseType: typeof execution_pb.ExecuteBlockResponse;
};

type ExecutionCommitBlock = {
  readonly methodName: string;
  readonly service: typeof Execution;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof execution_pb.CommitBlockRequest;
  readonly responseType: typeof execution_pb.CommitBlockResponse;
};

type ExecutionExecuteChunk = {
  readonly methodName: string;
  readonly service: typeof Execution;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof execution_pb.ExecuteChunkRequest;
  readonly responseType: typeof execution_pb.ExecuteChunkResponse;
};

export class Execution {
  static readonly serviceName: string;
  static readonly ExecuteBlock: ExecutionExecuteBlock;
  static readonly CommitBlock: ExecutionCommitBlock;
  static readonly ExecuteChunk: ExecutionExecuteChunk;
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

export class ExecutionClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  executeBlock(
    requestMessage: execution_pb.ExecuteBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: execution_pb.ExecuteBlockResponse|null) => void
  ): UnaryResponse;
  executeBlock(
    requestMessage: execution_pb.ExecuteBlockRequest,
    callback: (error: ServiceError|null, responseMessage: execution_pb.ExecuteBlockResponse|null) => void
  ): UnaryResponse;
  commitBlock(
    requestMessage: execution_pb.CommitBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: execution_pb.CommitBlockResponse|null) => void
  ): UnaryResponse;
  commitBlock(
    requestMessage: execution_pb.CommitBlockRequest,
    callback: (error: ServiceError|null, responseMessage: execution_pb.CommitBlockResponse|null) => void
  ): UnaryResponse;
  executeChunk(
    requestMessage: execution_pb.ExecuteChunkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: execution_pb.ExecuteChunkResponse|null) => void
  ): UnaryResponse;
  executeChunk(
    requestMessage: execution_pb.ExecuteChunkRequest,
    callback: (error: ServiceError|null, responseMessage: execution_pb.ExecuteChunkResponse|null) => void
  ): UnaryResponse;
}

