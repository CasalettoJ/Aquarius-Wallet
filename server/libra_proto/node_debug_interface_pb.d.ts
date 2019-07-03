// package: debug
// file: node_debug_interface.proto

import * as jspb from "google-protobuf";

export class GetNodeDetailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeDetailsRequest): GetNodeDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeDetailsRequest;
  static deserializeBinaryFromReader(message: GetNodeDetailsRequest, reader: jspb.BinaryReader): GetNodeDetailsRequest;
}

export namespace GetNodeDetailsRequest {
  export type AsObject = {
  }
}

export class GetNodeDetailsResponse extends jspb.Message {
  getStatsMap(): jspb.Map<string, string>;
  clearStatsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeDetailsResponse): GetNodeDetailsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeDetailsResponse;
  static deserializeBinaryFromReader(message: GetNodeDetailsResponse, reader: jspb.BinaryReader): GetNodeDetailsResponse;
}

export namespace GetNodeDetailsResponse {
  export type AsObject = {
    statsMap: Array<[string, string]>,
  }
}

export class DumpJemallocHeapProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DumpJemallocHeapProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DumpJemallocHeapProfileRequest): DumpJemallocHeapProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DumpJemallocHeapProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DumpJemallocHeapProfileRequest;
  static deserializeBinaryFromReader(message: DumpJemallocHeapProfileRequest, reader: jspb.BinaryReader): DumpJemallocHeapProfileRequest;
}

export namespace DumpJemallocHeapProfileRequest {
  export type AsObject = {
  }
}

export class DumpJemallocHeapProfileResponse extends jspb.Message {
  getStatusCode(): number;
  setStatusCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DumpJemallocHeapProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DumpJemallocHeapProfileResponse): DumpJemallocHeapProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DumpJemallocHeapProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DumpJemallocHeapProfileResponse;
  static deserializeBinaryFromReader(message: DumpJemallocHeapProfileResponse, reader: jspb.BinaryReader): DumpJemallocHeapProfileResponse;
}

export namespace DumpJemallocHeapProfileResponse {
  export type AsObject = {
    statusCode: number,
  }
}

