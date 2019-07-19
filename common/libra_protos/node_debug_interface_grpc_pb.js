// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) The Libra Core Contributors
// SPDX-License-Identifier: Apache-2.0
//
// A Debugging interface to be used to query debug information from a Node
'use strict';
var grpc = require('grpc');
var node_debug_interface_pb = require('./node_debug_interface_pb.js');

function serialize_debug_DumpJemallocHeapProfileRequest(arg) {
  if (!(arg instanceof node_debug_interface_pb.DumpJemallocHeapProfileRequest)) {
    throw new Error('Expected argument of type debug.DumpJemallocHeapProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_debug_DumpJemallocHeapProfileRequest(buffer_arg) {
  return node_debug_interface_pb.DumpJemallocHeapProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_debug_DumpJemallocHeapProfileResponse(arg) {
  if (!(arg instanceof node_debug_interface_pb.DumpJemallocHeapProfileResponse)) {
    throw new Error('Expected argument of type debug.DumpJemallocHeapProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_debug_DumpJemallocHeapProfileResponse(buffer_arg) {
  return node_debug_interface_pb.DumpJemallocHeapProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_debug_GetNodeDetailsRequest(arg) {
  if (!(arg instanceof node_debug_interface_pb.GetNodeDetailsRequest)) {
    throw new Error('Expected argument of type debug.GetNodeDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_debug_GetNodeDetailsRequest(buffer_arg) {
  return node_debug_interface_pb.GetNodeDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_debug_GetNodeDetailsResponse(arg) {
  if (!(arg instanceof node_debug_interface_pb.GetNodeDetailsResponse)) {
    throw new Error('Expected argument of type debug.GetNodeDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_debug_GetNodeDetailsResponse(buffer_arg) {
  return node_debug_interface_pb.GetNodeDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NodeDebugInterfaceService = exports.NodeDebugInterfaceService = {
  // Returns debug information about node
  getNodeDetails: {
    path: '/debug.NodeDebugInterface/GetNodeDetails',
    requestStream: false,
    responseStream: false,
    requestType: node_debug_interface_pb.GetNodeDetailsRequest,
    responseType: node_debug_interface_pb.GetNodeDetailsResponse,
    requestSerialize: serialize_debug_GetNodeDetailsRequest,
    requestDeserialize: deserialize_debug_GetNodeDetailsRequest,
    responseSerialize: serialize_debug_GetNodeDetailsResponse,
    responseDeserialize: deserialize_debug_GetNodeDetailsResponse,
  },
  // Triggers a dump of heap profile.
  dumpJemallocHeapProfile: {
    path: '/debug.NodeDebugInterface/DumpJemallocHeapProfile',
    requestStream: false,
    responseStream: false,
    requestType: node_debug_interface_pb.DumpJemallocHeapProfileRequest,
    responseType: node_debug_interface_pb.DumpJemallocHeapProfileResponse,
    requestSerialize: serialize_debug_DumpJemallocHeapProfileRequest,
    requestDeserialize: deserialize_debug_DumpJemallocHeapProfileRequest,
    responseSerialize: serialize_debug_DumpJemallocHeapProfileResponse,
    responseDeserialize: deserialize_debug_DumpJemallocHeapProfileResponse,
  },
};

exports.NodeDebugInterfaceClient = grpc.makeGenericClientConstructor(NodeDebugInterfaceService);
