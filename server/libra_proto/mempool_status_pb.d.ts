// package: mempool
// file: mempool_status.proto

import * as jspb from "google-protobuf";

export interface MempoolAddTransactionStatusMap {
  VALID: 0;
  INSUFFICIENTBALANCE: 1;
  INVALIDSEQNUMBER: 2;
  MEMPOOLISFULL: 3;
  TOOMANYTRANSACTIONS: 4;
  INVALIDUPDATE: 5;
}

export const MempoolAddTransactionStatus: MempoolAddTransactionStatusMap;

