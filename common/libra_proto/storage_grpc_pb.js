// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) The Libra Core Contributors
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var storage_pb = require('./storage_pb.js');
var get_with_proof_pb = require('./get_with_proof_pb.js');
var ledger_info_pb = require('./ledger_info_pb.js');
var transaction_pb = require('./transaction_pb.js');
var account_state_blob_pb = require('./account_state_blob_pb.js');
var proof_pb = require('./proof_pb.js');

function serialize_storage_GetAccountStateWithProofByStateRootRequest(arg) {
  if (!(arg instanceof storage_pb.GetAccountStateWithProofByStateRootRequest)) {
    throw new Error('Expected argument of type storage.GetAccountStateWithProofByStateRootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_GetAccountStateWithProofByStateRootRequest(buffer_arg) {
  return storage_pb.GetAccountStateWithProofByStateRootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_GetAccountStateWithProofByStateRootResponse(arg) {
  if (!(arg instanceof storage_pb.GetAccountStateWithProofByStateRootResponse)) {
    throw new Error('Expected argument of type storage.GetAccountStateWithProofByStateRootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_GetAccountStateWithProofByStateRootResponse(buffer_arg) {
  return storage_pb.GetAccountStateWithProofByStateRootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_GetExecutorStartupInfoRequest(arg) {
  if (!(arg instanceof storage_pb.GetExecutorStartupInfoRequest)) {
    throw new Error('Expected argument of type storage.GetExecutorStartupInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_GetExecutorStartupInfoRequest(buffer_arg) {
  return storage_pb.GetExecutorStartupInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_GetExecutorStartupInfoResponse(arg) {
  if (!(arg instanceof storage_pb.GetExecutorStartupInfoResponse)) {
    throw new Error('Expected argument of type storage.GetExecutorStartupInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_GetExecutorStartupInfoResponse(buffer_arg) {
  return storage_pb.GetExecutorStartupInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_GetTransactionsRequest(arg) {
  if (!(arg instanceof storage_pb.GetTransactionsRequest)) {
    throw new Error('Expected argument of type storage.GetTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_GetTransactionsRequest(buffer_arg) {
  return storage_pb.GetTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_GetTransactionsResponse(arg) {
  if (!(arg instanceof storage_pb.GetTransactionsResponse)) {
    throw new Error('Expected argument of type storage.GetTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_GetTransactionsResponse(buffer_arg) {
  return storage_pb.GetTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_SaveTransactionsRequest(arg) {
  if (!(arg instanceof storage_pb.SaveTransactionsRequest)) {
    throw new Error('Expected argument of type storage.SaveTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_SaveTransactionsRequest(buffer_arg) {
  return storage_pb.SaveTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_storage_SaveTransactionsResponse(arg) {
  if (!(arg instanceof storage_pb.SaveTransactionsResponse)) {
    throw new Error('Expected argument of type storage.SaveTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_storage_SaveTransactionsResponse(buffer_arg) {
  return storage_pb.SaveTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_types_UpdateToLatestLedgerRequest(arg) {
  if (!(arg instanceof get_with_proof_pb.UpdateToLatestLedgerRequest)) {
    throw new Error('Expected argument of type types.UpdateToLatestLedgerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_types_UpdateToLatestLedgerRequest(buffer_arg) {
  return get_with_proof_pb.UpdateToLatestLedgerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_types_UpdateToLatestLedgerResponse(arg) {
  if (!(arg instanceof get_with_proof_pb.UpdateToLatestLedgerResponse)) {
    throw new Error('Expected argument of type types.UpdateToLatestLedgerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_types_UpdateToLatestLedgerResponse(buffer_arg) {
  return get_with_proof_pb.UpdateToLatestLedgerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// -----------------------------------------------------------------------------
// ---------------- Service definition for storage
// -----------------------------------------------------------------------------
var StorageService = exports.StorageService = {
  // Persist transactions. Called by Execution when either syncing nodes or
  // committing blocks during normal operation.
  saveTransactions: {
    path: '/storage.Storage/SaveTransactions',
    requestStream: false,
    responseStream: false,
    requestType: storage_pb.SaveTransactionsRequest,
    responseType: storage_pb.SaveTransactionsResponse,
    requestSerialize: serialize_storage_SaveTransactionsRequest,
    requestDeserialize: deserialize_storage_SaveTransactionsRequest,
    responseSerialize: serialize_storage_SaveTransactionsResponse,
    responseDeserialize: deserialize_storage_SaveTransactionsResponse,
  },
  // Read APIs.
  //
  // Used to get a piece of data and return the proof of it. If the client
  // knows and trusts a ledger info at version v, it should pass v in as the
  // client_known_version and we will return the latest ledger info together
  // with the proof that it derives from v.
  updateToLatestLedger: {
    path: '/storage.Storage/UpdateToLatestLedger',
    requestStream: false,
    responseStream: false,
    requestType: get_with_proof_pb.UpdateToLatestLedgerRequest,
    responseType: get_with_proof_pb.UpdateToLatestLedgerResponse,
    requestSerialize: serialize_types_UpdateToLatestLedgerRequest,
    requestDeserialize: deserialize_types_UpdateToLatestLedgerRequest,
    responseSerialize: serialize_types_UpdateToLatestLedgerResponse,
    responseDeserialize: deserialize_types_UpdateToLatestLedgerResponse,
  },
  // When we receive a request from a peer validator asking a list of
  // transactions for state synchronization, this API can be used to serve the
  // request. Note that the peer should specify a ledger version and all proofs
  // in the response will be relative to this given ledger version.
  getTransactions: {
    path: '/storage.Storage/GetTransactions',
    requestStream: false,
    responseStream: false,
    requestType: storage_pb.GetTransactionsRequest,
    responseType: storage_pb.GetTransactionsResponse,
    requestSerialize: serialize_storage_GetTransactionsRequest,
    requestDeserialize: deserialize_storage_GetTransactionsRequest,
    responseSerialize: serialize_storage_GetTransactionsResponse,
    responseDeserialize: deserialize_storage_GetTransactionsResponse,
  },
  getAccountStateWithProofByStateRoot: {
    path: '/storage.Storage/GetAccountStateWithProofByStateRoot',
    requestStream: false,
    responseStream: false,
    requestType: storage_pb.GetAccountStateWithProofByStateRootRequest,
    responseType: storage_pb.GetAccountStateWithProofByStateRootResponse,
    requestSerialize: serialize_storage_GetAccountStateWithProofByStateRootRequest,
    requestDeserialize: deserialize_storage_GetAccountStateWithProofByStateRootRequest,
    responseSerialize: serialize_storage_GetAccountStateWithProofByStateRootResponse,
    responseDeserialize: deserialize_storage_GetAccountStateWithProofByStateRootResponse,
  },
  // Returns information needed for Executor to start up.
  getExecutorStartupInfo: {
    path: '/storage.Storage/GetExecutorStartupInfo',
    requestStream: false,
    responseStream: false,
    requestType: storage_pb.GetExecutorStartupInfoRequest,
    responseType: storage_pb.GetExecutorStartupInfoResponse,
    requestSerialize: serialize_storage_GetExecutorStartupInfoRequest,
    requestDeserialize: deserialize_storage_GetExecutorStartupInfoRequest,
    responseSerialize: serialize_storage_GetExecutorStartupInfoResponse,
    responseDeserialize: deserialize_storage_GetExecutorStartupInfoResponse,
  },
};

exports.StorageClient = grpc.makeGenericClientConstructor(StorageService);
// Write APIs.
