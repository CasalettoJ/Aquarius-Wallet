import express from "express";
import cors from "cors";

import serverConfig from "./ServerConfig";
import LibraClient from "./grpc_client/LibragRPC";

import TestRoutes from "./routes/Test";
import LedgerRoutes from "./routes/Ledger";

(() => {
  // TODO: Sessions with persistent db and grpc connections

  const app = express();
  const client = new LibraClient(serverConfig.constants.testnetAddr);

  app.use(cors());

  // TODO: Write proper grpc client middleware
  app.use((req, _, next) => {
    req.params.libraClient = client;
    next();
  });

  // Routes
  app.use(TestRoutes);
  app.use(LedgerRoutes);

  app.listen(serverConfig.constants.serverPort, () => {
    console.log(`Listening on port ${serverConfig.constants.serverPort}`);
  });
})();
