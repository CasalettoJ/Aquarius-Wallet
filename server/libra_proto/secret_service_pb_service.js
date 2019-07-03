// package: secret_service
// file: secret_service.proto

var secret_service_pb = require("./secret_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SecretService = (function () {
  function SecretService() {}
  SecretService.serviceName = "secret_service.SecretService";
  return SecretService;
}());

SecretService.GenerateKey = {
  methodName: "GenerateKey",
  service: SecretService,
  requestStream: false,
  responseStream: false,
  requestType: secret_service_pb.GenerateKeyRequest,
  responseType: secret_service_pb.GenerateKeyResponse
};

SecretService.GetPublicKey = {
  methodName: "GetPublicKey",
  service: SecretService,
  requestStream: false,
  responseStream: false,
  requestType: secret_service_pb.PublicKeyRequest,
  responseType: secret_service_pb.PublicKeyResponse
};

SecretService.Sign = {
  methodName: "Sign",
  service: SecretService,
  requestStream: false,
  responseStream: false,
  requestType: secret_service_pb.SignRequest,
  responseType: secret_service_pb.SignResponse
};

exports.SecretService = SecretService;

function SecretServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SecretServiceClient.prototype.generateKey = function generateKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SecretService.GenerateKey, {
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

SecretServiceClient.prototype.getPublicKey = function getPublicKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SecretService.GetPublicKey, {
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

SecretServiceClient.prototype.sign = function sign(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SecretService.Sign, {
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

exports.SecretServiceClient = SecretServiceClient;

