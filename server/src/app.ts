import express from "express";
import cors = require("cors");

import APIConstants from "../../common/api/APIConstants";

import LibraClient from "./grpc_client/LibragRPC";
import TestRoutes from "./routes/Test";
import LedgerRoutes from "./routes/Ledger";
import WalletRoutes from "./routes/Wallet";
import console = require("console");

(() => {
  // TODO: Sessions with persistent db and grpc connections
  const app = express();
  app.use(cors());
  const client = new LibraClient(APIConstants.constants.testnetAddr);

  // TODO: Write proper grpc client middleware for handling multiple grpc sessions
  app.use((req, res, next) => {
    res.locals.libraClient = client;
    next();
  });

  // Routes
  app.use(TestRoutes);
  app.use(LedgerRoutes);
  app.use(WalletRoutes);

  app.listen(3001, () => {
    console.log(`Listening on port 3001`);
  });
})();
