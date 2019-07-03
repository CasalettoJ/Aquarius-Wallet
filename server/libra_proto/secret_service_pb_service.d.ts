// package: secret_service
// file: secret_service.proto

import * as secret_service_pb from "./secret_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SecretServiceGenerateKey = {
  readonly methodName: string;
  readonly service: typeof SecretService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof secret_service_pb.GenerateKeyRequest;
  readonly responseType: typeof secret_service_pb.GenerateKeyResponse;
};

type SecretServiceGetPublicKey = {
  readonly methodName: string;
  readonly service: typeof SecretService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof secret_service_pb.PublicKeyRequest;
  readonly responseType: typeof secret_service_pb.PublicKeyResponse;
};

type SecretServiceSign = {
  readonly methodName: string;
  readonly service: typeof SecretService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof secret_service_pb.SignRequest;
  readonly responseType: typeof secret_service_pb.SignResponse;
};

export class SecretService {
  static readonly serviceName: string;
  static readonly GenerateKey: SecretServiceGenerateKey;
  static readonly GetPublicKey: SecretServiceGetPublicKey;
  static readonly Sign: SecretServiceSign;
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

export class SecretServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  generateKey(
    requestMessage: secret_service_pb.GenerateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: secret_service_pb.GenerateKeyResponse|null) => void
  ): UnaryResponse;
  generateKey(
    requestMessage: secret_service_pb.GenerateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: secret_service_pb.GenerateKeyResponse|null) => void
  ): UnaryResponse;
  getPublicKey(
    requestMessage: secret_service_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: secret_service_pb.PublicKeyResponse|null) => void
  ): UnaryResponse;
  getPublicKey(
    requestMessage: secret_service_pb.PublicKeyRequest,
    callback: (error: ServiceError|null, responseMessage: secret_service_pb.PublicKeyResponse|null) => void
  ): UnaryResponse;
  sign(
    requestMessage: secret_service_pb.SignRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: secret_service_pb.SignResponse|null) => void
  ): UnaryResponse;
  sign(
    requestMessage: secret_service_pb.SignRequest,
    callback: (error: ServiceError|null, responseMessage: secret_service_pb.SignResponse|null) => void
  ): UnaryResponse;
}

