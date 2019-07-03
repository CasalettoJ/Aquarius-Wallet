// package: debug
// file: node_debug_interface.proto

var node_debug_interface_pb = require("./node_debug_interface_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NodeDebugInterface = (function () {
  function NodeDebugInterface() {}
  NodeDebugInterface.serviceName = "debug.NodeDebugInterface";
  return NodeDebugInterface;
}());

NodeDebugInterface.GetNodeDetails = {
  methodName: "GetNodeDetails",
  service: NodeDebugInterface,
  requestStream: false,
  responseStream: false,
  requestType: node_debug_interface_pb.GetNodeDetailsRequest,
  responseType: node_debug_interface_pb.GetNodeDetailsResponse
};

NodeDebugInterface.DumpJemallocHeapProfile = {
  methodName: "DumpJemallocHeapProfile",
  service: NodeDebugInterface,
  requestStream: false,
  responseStream: false,
  requestType: node_debug_interface_pb.DumpJemallocHeapProfileRequest,
  responseType: node_debug_interface_pb.DumpJemallocHeapProfileResponse
};

exports.NodeDebugInterface = NodeDebugInterface;

function NodeDebugInterfaceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NodeDebugInterfaceClient.prototype.getNodeDetails = function getNodeDetails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeDebugInterface.GetNodeDetails, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

NodeDebugInterfaceClient.prototype.dumpJemallocHeapProfile = function dumpJemallocHeapProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeDebugInterface.DumpJemallocHeapProfile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.NodeDebugInterfaceClient = NodeDebugInterfaceClient;

