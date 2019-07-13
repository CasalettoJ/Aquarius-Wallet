// node_modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import asyncHandler from "express-async-handler";

// local
import serverConfig from "./config";
import LibraClient from "./grpc_client/libra-grpc";
import { UpdateToLatestLedgerAPIResponse } from "../../common/api/Types";

(() => {
  const app = express();
  const client = new LibraClient(serverConfig.constants.testnetAddr);

  app.use(bodyParser.json());
  app.use(cors());

  // TODO Handle requestitems
  app.get(
    serverConfig.endpoints.root,
    asyncHandler(async (req, res) => {
      const ledgerResponse = await client.GetLatestLedgerAsync([]);
      const response: UpdateToLatestLedgerAPIResponse = {
        error: null,
        response: null
      };
      if (ledgerResponse.response) {
        response.response = ledgerResponse.response.toObject();
        console.log(`Request successful: ${JSON.stringify(response.response)}`);
      }
      response.error = ledgerResponse.error;
      res.send(response);
    })
  );

  app.listen(serverConfig.constants.serverPort, () => {
    console.log(`Listening on port ${serverConfig.constants.serverPort}`);
  });
})();
