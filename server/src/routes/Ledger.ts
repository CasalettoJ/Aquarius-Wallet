import express from "express";
import asyncHandler from "express-async-handler";

import { UpdateToLatestLedgerAPIResponse } from "../../../common/api/Types";
import APIConstants from "../../../common/api/APIConstants";

import LibraClient from "../grpc_client/LibragRPC";

const router = express.Router();

// TODO Handle requestitems
router.get(
  APIConstants.endpoints.root, // TODO: Use better endpoint
  asyncHandler(async (req, res) => {
    const client: LibraClient = res.locals.libraClient;
    const ledgerResponse = await client.GetLatestLedgerAsync([]);
    const response: UpdateToLatestLedgerAPIResponse = {
      error: null,
      response: null,
      networkError: false
    };
    if (ledgerResponse.response) {
      response.response = ledgerResponse.response.toObject();
    }
    response.error = ledgerResponse.error;
    res.send(response);
  })
);

export default router;
