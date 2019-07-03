// package: storage
// file: storage.proto

var storage_pb = require("./storage_pb");
var get_with_proof_pb = require("./get_with_proof_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Storage = (function () {
  function Storage() {}
  Storage.serviceName = "storage.Storage";
  return Storage;
}());

Storage.SaveTransactions = {
  methodName: "SaveTransactions",
  service: Storage,
  requestStream: false,
  responseStream: false,
  requestType: storage_pb.SaveTransactionsRequest,
  responseType: storage_pb.SaveTransactionsResponse
};

Storage.UpdateToLatestLedger = {
  methodName: "UpdateToLatestLedger",
  service: Storage,
  requestStream: false,
  responseStream: false,
  requestType: get_with_proof_pb.UpdateToLatestLedgerRequest,
  responseType: get_with_proof_pb.UpdateToLatestLedgerResponse
};

Storage.GetTransactions = {
  methodName: "GetTransactions",
  service: Storage,
  requestStream: false,
  responseStream: false,
  requestType: storage_pb.GetTransactionsRequest,
  responseType: storage_pb.GetTransactionsResponse
};

Storage.GetAccountStateWithProofByStateRoot = {
  methodName: "GetAccountStateWithProofByStateRoot",
  service: Storage,
  requestStream: false,
  responseStream: false,
  requestType: storage_pb.GetAccountStateWithProofByStateRootRequest,
  responseType: storage_pb.GetAccountStateWithProofByStateRootResponse
};

Storage.GetExecutorStartupInfo = {
  methodName: "GetExecutorStartupInfo",
  service: Storage,
  requestStream: false,
  responseStream: false,
  requestType: storage_pb.GetExecutorStartupInfoRequest,
  responseType: storage_pb.GetExecutorStartupInfoResponse
};

exports.Storage = Storage;

function StorageClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StorageClient.prototype.saveTransactions = function saveTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Storage.SaveTransactions, {
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

StorageClient.prototype.updateToLatestLedger = function updateToLatestLedger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Storage.UpdateToLatestLedger, {
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

StorageClient.prototype.getTransactions = function getTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Storage.GetTransactions, {
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

StorageClient.prototype.getAccountStateWithProofByStateRoot = function getAccountStateWithProofByStateRoot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Storage.GetAccountStateWithProofByStateRoot, {
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

StorageClient.prototype.getExecutorStartupInfo = function getExecutorStartupInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Storage.GetExecutorStartupInfo, {
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

exports.StorageClient = StorageClient;

