// package: admission_control
// file: admission_control.proto

var admission_control_pb = require("./admission_control_pb");
var get_with_proof_pb = require("./get_with_proof_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdmissionControl = (function () {
  function AdmissionControl() {}
  AdmissionControl.serviceName = "admission_control.AdmissionControl";
  return AdmissionControl;
}());

AdmissionControl.SubmitTransaction = {
  methodName: "SubmitTransaction",
  service: AdmissionControl,
  requestStream: false,
  responseStream: false,
  requestType: admission_control_pb.SubmitTransactionRequest,
  responseType: admission_control_pb.SubmitTransactionResponse
};

AdmissionControl.UpdateToLatestLedger = {
  methodName: "UpdateToLatestLedger",
  service: AdmissionControl,
  requestStream: false,
  responseStream: false,
  requestType: get_with_proof_pb.UpdateToLatestLedgerRequest,
  responseType: get_with_proof_pb.UpdateToLatestLedgerResponse
};

exports.AdmissionControl = AdmissionControl;

function AdmissionControlClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdmissionControlClient.prototype.submitTransaction = function submitTransaction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdmissionControl.SubmitTransaction, {
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

AdmissionControlClient.prototype.updateToLatestLedger = function updateToLatestLedger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdmissionControl.UpdateToLatestLedger, {
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

exports.AdmissionControlClient = AdmissionControlClient;

