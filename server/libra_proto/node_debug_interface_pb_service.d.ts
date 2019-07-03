// package: debug
// file: node_debug_interface.proto

import * as node_debug_interface_pb from "./node_debug_interface_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NodeDebugInterfaceGetNodeDetails = {
  readonly methodName: string;
  readonly service: typeof NodeDebugInterface;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_debug_interface_pb.GetNodeDetailsRequest;
  readonly responseType: typeof node_debug_interface_pb.GetNodeDetailsResponse;
};

type NodeDebugInterfaceDumpJemallocHeapProfile = {
  readonly methodName: string;
  readonly service: typeof NodeDebugInterface;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof node_debug_interface_pb.DumpJemallocHeapProfileRequest;
  readonly responseType: typeof node_debug_interface_pb.DumpJemallocHeapProfileResponse;
};

export class NodeDebugInterface {
  static readonly serviceName: string;
  static readonly GetNodeDetails: NodeDebugInterfaceGetNodeDetails;
  static readonly DumpJemallocHeapProfile: NodeDebugInterfaceDumpJemallocHeapProfile;
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

export class NodeDebugInterfaceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNodeDetails(
    requestMessage: node_debug_interface_pb.GetNodeDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_debug_interface_pb.GetNodeDetailsResponse|null) => void
  ): UnaryResponse;
  getNodeDetails(
    requestMessage: node_debug_interface_pb.GetNodeDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: node_debug_interface_pb.GetNodeDetailsResponse|null) => void
  ): UnaryResponse;
  dumpJemallocHeapProfile(
    requestMessage: node_debug_interface_pb.DumpJemallocHeapProfileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: node_debug_interface_pb.DumpJemallocHeapProfileResponse|null) => void
  ): UnaryResponse;
  dumpJemallocHeapProfile(
    requestMessage: node_debug_interface_pb.DumpJemallocHeapProfileRequest,
    callback: (error: ServiceError|null, responseMessage: node_debug_interface_pb.DumpJemallocHeapProfileResponse|null) => void
  ): UnaryResponse;
}

