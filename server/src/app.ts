import express from "express";
import cors from "cors";

import APIConstants from "./constants/APIConstants";
import LibraClient from "./grpc_client/LibragRPC";

import TestRoutes from "./routes/Test";
import LedgerRoutes from "./routes/Ledger";

(() => {
  // TODO: Sessions with persistent db and grpc connections
  const app = express();
  const client = new LibraClient(APIConstants.constants.testnetAddr);

  app.use(cors());

  // TODO: Write proper grpc client middleware for handling multiple grpc sessions
  app.use((req, res, next) => {
    res.locals.libraClient = client;
    next();
  });

  // Routes
  app.use(TestRoutes);
  app.use(LedgerRoutes);

  app.listen(APIConstants.constants.serverPort, () => {
    console.log(`Listening on port ${APIConstants.constants.serverPort}`);
  });
})();
