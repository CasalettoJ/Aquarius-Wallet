// package: execution
// file: execution.proto

var execution_pb = require("./execution_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Execution = (function () {
  function Execution() {}
  Execution.serviceName = "execution.Execution";
  return Execution;
}());

Execution.ExecuteBlock = {
  methodName: "ExecuteBlock",
  service: Execution,
  requestStream: false,
  responseStream: false,
  requestType: execution_pb.ExecuteBlockRequest,
  responseType: execution_pb.ExecuteBlockResponse
};

Execution.CommitBlock = {
  methodName: "CommitBlock",
  service: Execution,
  requestStream: false,
  responseStream: false,
  requestType: execution_pb.CommitBlockRequest,
  responseType: execution_pb.CommitBlockResponse
};

Execution.ExecuteChunk = {
  methodName: "ExecuteChunk",
  service: Execution,
  requestStream: false,
  responseStream: false,
  requestType: execution_pb.ExecuteChunkRequest,
  responseType: execution_pb.ExecuteChunkResponse
};

exports.Execution = Execution;

function ExecutionClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExecutionClient.prototype.executeBlock = function executeBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Execution.ExecuteBlock, {
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

ExecutionClient.prototype.commitBlock = function commitBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Execution.CommitBlock, {
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

ExecutionClient.prototype.executeChunk = function executeChunk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Execution.ExecuteChunk, {
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

exports.ExecutionClient = ExecutionClient;

