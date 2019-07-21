import express from "express";
import asyncHandler from "express-async-handler";

import ServerConfig from "../ServerConfig";
import bodyParser = require("body-parser");
import AquariusWalletWrapper from "../wallet/Wallet";
import Mnemonic from "../wallet/Mnemonic";

const router = express.Router();
const jsonParser = bodyParser.json();

router.get(
  ServerConfig.endpoints.test,
  jsonParser,
  asyncHandler(async (req, res) => {
    const wallet = await AquariusWalletWrapper.generateNew("LIBRA");
    const newAddr = wallet.generateNewAddress();
    console.log(`Address Created: ${newAddr.address.hexAddress}`);
    res.send(wallet);
  })
);

router.get(
  ServerConfig.endpoints.testWords,
  asyncHandler(async (req, res) => {
    const mnemonic = Mnemonic.fromWords(
      "gym roast napkin pact then feel drill joy army crisp unlock oyster ramp receive typical spirit stick daughter enough stumble soul heavy minute screen"
    );
    const wallet = await AquariusWalletWrapper.generateFromMnemonic(
      mnemonic,
      "LIBRA"
    );
    const newAddr = wallet.generateNewAddress();
    console.log(`Address Created: ${newAddr.address.hexAddress}`);
    res.send(wallet);
  })
);

export default router;
