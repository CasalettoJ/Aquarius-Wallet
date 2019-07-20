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
import { AccountAddress } from "./wallet/Account";
import { Keccak } from "sha3";
import stringToHex from "../../common/utils/stringToHex";

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
      const seed = new Seed(mnemonic, "LIBRA", () => {
        const keyFactory = new KeyFactory(seed);
        const child = keyFactory.derivePrivateChild(new BigNumber(0));
        const address = child.keyPair.getPublic();
        const keccak = new Keccak(256);
        keccak.update(Buffer.from(address));
        const hash = keccak.digest();
        console.log(hash.toString("hex"));
        // const newAddress = new AccountAddress(new Uint8Array(hash));
        // console.log(newAddress.hexStrAddress);
        res.send();
      });
    })
  );

  app.get(
    "/testwords",
    asyncHandler(async (req, res) => {
      const random = randomBytes(32);

      const mnemonic = Mnemonic.fromWords(
        "gym roast napkin pact then feel drill joy army crisp unlock oyster ramp receive typical spirit stick daughter enough stumble soul heavy minute screen"
      );
      console.log(
        `Mnemonic: ${mnemonic.toString()}\nMnemonic As Bytes: ${stringToHex(
          mnemonic.toString()
        )}`
      );
      const seed = new Seed(mnemonic, "LIBRA", () => {
        const keyFactory = new KeyFactory(seed);
        const child = keyFactory.derivePrivateChild(new BigNumber(0));
        const address = child.keyPair.getPublic();
        const keccak = new Keccak(256);
        keccak.update(Buffer.from(address));
        const hash = keccak.digest();
        console.log(hash.toString("hex"));
        res.send();
      });
    })
  );

  app.listen(serverConfig.constants.serverPort, () => {
    console.log(`Listening on port ${serverConfig.constants.serverPort}`);
  });
})();
