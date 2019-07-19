// node_modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import asyncHandler from "express-async-handler";
import randomBytes from "randombytes";

// local
import serverConfig from "./ServerConfig";
import LibraClient from "./grpc_client/LibragRPC";
import { UpdateToLatestLedgerAPIResponse } from "../../common/api/Types";
import Mnemonic from "./wallet/Mnemonic";
import KeyFactory, { Seed } from "./wallet/KeyFactory";
import BigNumber from "bignumber.js";

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
        response: null,
        networkError: false
      };
      if (ledgerResponse.response) {
        response.response = ledgerResponse.response.toObject();
        // console.log(`Request successful: ${JSON.stringify(response.response)}`);
      }
      response.error = ledgerResponse.error;
      res.send(response);
    })
  );

  app.get(
    "/test",
    asyncHandler(async (req, res) => {
      const random = randomBytes(32);
      const mnemonic = Mnemonic.fromBytes(new Uint8Array(random));
      const seed = new Seed(mnemonic, "TEST", () => {
        const keyFactory = new KeyFactory(seed);
        keyFactory.derivePrivateChild(new BigNumber(0));
        res.send();
      });
    })
  );

  app.listen(serverConfig.constants.serverPort, () => {
    console.log(`Listening on port ${serverConfig.constants.serverPort}`);
  });
})();
