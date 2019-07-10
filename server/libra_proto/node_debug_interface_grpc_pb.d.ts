// package: debug
// file: node_debug_interface.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as node_debug_interface_pb from "./node_debug_interface_pb";

interface INodeDebugInterfaceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getNodeDetails: INodeDebugInterfaceService_IGetNodeDetails;
    dumpJemallocHeapProfile: INodeDebugInterfaceService_IDumpJemallocHeapProfile;
}

interface INodeDebugInterfaceService_IGetNodeDetails extends grpc.MethodDefinition<node_debug_interface_pb.GetNodeDetailsRequest, node_debug_interface_pb.GetNodeDetailsResponse> {
    path: string; // "/debug.NodeDebugInterface/GetNodeDetails"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<node_debug_interface_pb.GetNodeDetailsRequest>;
    requestDeserialize: grpc.deserialize<node_debug_interface_pb.GetNodeDetailsRequest>;
    responseSerialize: grpc.serialize<node_debug_interface_pb.GetNodeDetailsResponse>;
    responseDeserialize: grpc.deserialize<node_debug_interface_pb.GetNodeDetailsResponse>;
}
interface INodeDebugInterfaceService_IDumpJemallocHeapProfile extends grpc.MethodDefinition<node_debug_interface_pb.DumpJemallocHeapProfileRequest, node_debug_interface_pb.DumpJemallocHeapProfileResponse> {
    path: string; // "/debug.NodeDebugInterface/DumpJemallocHeapProfile"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<node_debug_interface_pb.DumpJemallocHeapProfileRequest>;
    requestDeserialize: grpc.deserialize<node_debug_interface_pb.DumpJemallocHeapProfileRequest>;
    responseSerialize: grpc.serialize<node_debug_interface_pb.DumpJemallocHeapProfileResponse>;
    responseDeserialize: grpc.deserialize<node_debug_interface_pb.DumpJemallocHeapProfileResponse>;
}

export const NodeDebugInterfaceService: INodeDebugInterfaceService;

export interface INodeDebugInterfaceServer {
    getNodeDetails: grpc.handleUnaryCall<node_debug_interface_pb.GetNodeDetailsRequest, node_debug_interface_pb.GetNodeDetailsResponse>;
    dumpJemallocHeapProfile: grpc.handleUnaryCall<node_debug_interface_pb.DumpJemallocHeapProfileRequest, node_debug_interface_pb.DumpJemallocHeapProfileResponse>;
}

export interface INodeDebugInterfaceClient {
    getNodeDetails(request: node_debug_interface_pb.GetNodeDetailsRequest, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.GetNodeDetailsResponse) => void): grpc.ClientUnaryCall;
    getNodeDetails(request: node_debug_interface_pb.GetNodeDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.GetNodeDetailsResponse) => void): grpc.ClientUnaryCall;
    getNodeDetails(request: node_debug_interface_pb.GetNodeDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.GetNodeDetailsResponse) => void): grpc.ClientUnaryCall;
    dumpJemallocHeapProfile(request: node_debug_interface_pb.DumpJemallocHeapProfileRequest, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.DumpJemallocHeapProfileResponse) => void): grpc.ClientUnaryCall;
    dumpJemallocHeapProfile(request: node_debug_interface_pb.DumpJemallocHeapProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.DumpJemallocHeapProfileResponse) => void): grpc.ClientUnaryCall;
    dumpJemallocHeapProfile(request: node_debug_interface_pb.DumpJemallocHeapProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.DumpJemallocHeapProfileResponse) => void): grpc.ClientUnaryCall;
}

export class NodeDebugInterfaceClient extends grpc.Client implements INodeDebugInterfaceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getNodeDetails(request: node_debug_interface_pb.GetNodeDetailsRequest, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.GetNodeDetailsResponse) => void): grpc.ClientUnaryCall;
    public getNodeDetails(request: node_debug_interface_pb.GetNodeDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.GetNodeDetailsResponse) => void): grpc.ClientUnaryCall;
    public getNodeDetails(request: node_debug_interface_pb.GetNodeDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.GetNodeDetailsResponse) => void): grpc.ClientUnaryCall;
    public dumpJemallocHeapProfile(request: node_debug_interface_pb.DumpJemallocHeapProfileRequest, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.DumpJemallocHeapProfileResponse) => void): grpc.ClientUnaryCall;
    public dumpJemallocHeapProfile(request: node_debug_interface_pb.DumpJemallocHeapProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.DumpJemallocHeapProfileResponse) => void): grpc.ClientUnaryCall;
    public dumpJemallocHeapProfile(request: node_debug_interface_pb.DumpJemallocHeapProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: node_debug_interface_pb.DumpJemallocHeapProfileResponse) => void): grpc.ClientUnaryCall;
}
