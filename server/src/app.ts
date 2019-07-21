// node_modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import asyncHandler from "express-async-handler";

// local
import serverConfig from "./ServerConfig";
import LibraClient from "./grpc_client/LibragRPC";
import { UpdateToLatestLedgerAPIResponse } from "../../common/api/Types";
import Mnemonic from "./wallet/Mnemonic";
import AquariusWalletWrapper from "./wallet/Wallet";

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
    serverConfig.endpoints.test,
    asyncHandler(async (req, res) => {
      const wallet = await AquariusWalletWrapper.generateNew("LIBRA");
      const newAddr = wallet.generateNewAddress();
      console.log(`Address Created: ${newAddr.address.hexStrAddress}`);
      res.send(wallet);
    })
  );

  app.get(
    serverConfig.endpoints.testWords,
    asyncHandler(async (req, res) => {
      const mnemonic = Mnemonic.fromWords(
        "gym roast napkin pact then feel drill joy army crisp unlock oyster ramp receive typical spirit stick daughter enough stumble soul heavy minute screen"
      );
      const wallet = await AquariusWalletWrapper.generateFromMnemonic(
        mnemonic,
        "LIBRA"
      );
      const newAddr = wallet.generateNewAddress();
      console.log(`Address Created: ${newAddr.address.hexStrAddress}`);
      res.send(wallet);
    })
  );

  app.listen(serverConfig.constants.serverPort, () => {
    console.log(`Listening on port ${serverConfig.constants.serverPort}`);
  });
})();
