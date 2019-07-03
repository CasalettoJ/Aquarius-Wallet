// package: admission_control
// file: admission_control.proto

import * as admission_control_pb from "./admission_control_pb";
import * as get_with_proof_pb from "./get_with_proof_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdmissionControlSubmitTransaction = {
  readonly methodName: string;
  readonly service: typeof AdmissionControl;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof admission_control_pb.SubmitTransactionRequest;
  readonly responseType: typeof admission_control_pb.SubmitTransactionResponse;
};

type AdmissionControlUpdateToLatestLedger = {
  readonly methodName: string;
  readonly service: typeof AdmissionControl;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof get_with_proof_pb.UpdateToLatestLedgerRequest;
  readonly responseType: typeof get_with_proof_pb.UpdateToLatestLedgerResponse;
};

export class AdmissionControl {
  static readonly serviceName: string;
  static readonly SubmitTransaction: AdmissionControlSubmitTransaction;
  static readonly UpdateToLatestLedger: AdmissionControlUpdateToLatestLedger;
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

export class AdmissionControlClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  submitTransaction(
    requestMessage: admission_control_pb.SubmitTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: admission_control_pb.SubmitTransactionResponse|null) => void
  ): UnaryResponse;
  submitTransaction(
    requestMessage: admission_control_pb.SubmitTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: admission_control_pb.SubmitTransactionResponse|null) => void
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
}

