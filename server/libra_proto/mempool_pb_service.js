// package: mempool
// file: mempool.proto

var mempool_pb = require("./mempool_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Mempool = (function () {
  function Mempool() {}
  Mempool.serviceName = "mempool.Mempool";
  return Mempool;
}());

Mempool.AddTransactionWithValidation = {
  methodName: "AddTransactionWithValidation",
  service: Mempool,
  requestStream: false,
  responseStream: false,
  requestType: mempool_pb.AddTransactionWithValidationRequest,
  responseType: mempool_pb.AddTransactionWithValidationResponse
};

Mempool.GetBlock = {
  methodName: "GetBlock",
  service: Mempool,
  requestStream: false,
  responseStream: false,
  requestType: mempool_pb.GetBlockRequest,
  responseType: mempool_pb.GetBlockResponse
};

Mempool.CommitTransactions = {
  methodName: "CommitTransactions",
  service: Mempool,
  requestStream: false,
  responseStream: false,
  requestType: mempool_pb.CommitTransactionsRequest,
  responseType: mempool_pb.CommitTransactionsResponse
};

Mempool.HealthCheck = {
  methodName: "HealthCheck",
  service: Mempool,
  requestStream: false,
  responseStream: false,
  requestType: mempool_pb.HealthCheckRequest,
  responseType: mempool_pb.HealthCheckResponse
};

exports.Mempool = Mempool;

function MempoolClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MempoolClient.prototype.addTransactionWithValidation = function addTransactionWithValidation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mempool.AddTransactionWithValidation, {
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

MempoolClient.prototype.getBlock = function getBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mempool.GetBlock, {
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

MempoolClient.prototype.commitTransactions = function commitTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mempool.CommitTransactions, {
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

MempoolClient.prototype.healthCheck = function healthCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Mempool.HealthCheck, {
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

exports.MempoolClient = MempoolClient;

