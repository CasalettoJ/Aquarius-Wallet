import express from "express";
import asyncHandler from "express-async-handler";
import bodyParser = require("body-parser");

import APIConstants from "../../../common/api/APIConstants";
import AquariusWalletWrapper from "../wallet/Wallet";
import Mnemonic from "../wallet/Mnemonic";
import WalletConstants from "../constants/WalletConstants";

import BigNumber from "bignumber.js";
import { UnsafeWalletType } from "../../../common/api/Types";

const router = express.Router();
const jsonParser = bodyParser.json();

router.post(
  APIConstants.endpoints.wallet.create,
  jsonParser,
  asyncHandler(async (req, res) => {
    const response: UnsafeWalletType = {
      mnemonic: null,
      addresses: {},
      lastError: null
    };
    const salt = req.body.salt ? req.body.salt : WalletConstants.defaultSalt;
    const wallet = await AquariusWalletWrapper.generateNew(salt);
    wallet.generateNewAddress();
    Object.keys(wallet.addressMap).forEach((address, index) => {
      response.addresses[address] = wallet.addressMap[address];
    });
    response.mnemonic = wallet.exportData;
    res.send(response);
  })
);

router.post(
  APIConstants.endpoints.wallet.import,
  jsonParser,
  asyncHandler(async (req, res) => {
    const response: UnsafeWalletType = {
      mnemonic: null,
      addresses: {},
      lastError: null
    };

    const salt = req.body.salt ? req.body.salt : WalletConstants.defaultSalt;
    const { mnemonic }: { mnemonic: string } = req.body;
    if (!mnemonic) {
      response.lastError = "Unable to import wallet: Invalid key phrase.";
      res.status(400);
      res.send(response);
    }
    const importedWallet = await unsafeRecreateWallet(mnemonic, salt);
    Object.keys(importedWallet.addressMap).forEach((address, index) => {
      response.addresses[address] = importedWallet.addressMap[address];
    });
    response.mnemonic = importedWallet.exportData;
    res.send(response);
  })
);

router.post(
  APIConstants.endpoints.wallet.newAccount,
  jsonParser,
  asyncHandler(async (req, res) => {
    const response: UnsafeWalletType = {
      mnemonic: null,
      addresses: {},
      lastError: null
    };

    const salt = req.body.salt
      ? req.body.salt
      : WalletConstants.exportDepthDelimiter;
    const { mnemonic }: { mnemonic: string } = req.body;
    if (!mnemonic) {
      response.lastError =
        "Unable to generate new account: Invalid key phrase.";
      res.status(400);
      res.send(response);
    }
    const importedWallet = await unsafeRecreateWallet(mnemonic, salt);
    importedWallet.generateNewAddress();
    Object.keys(importedWallet.addressMap).forEach((address, index) => {
      response.addresses[address] = importedWallet.addressMap[address];
    });
    response.mnemonic = importedWallet.exportData;
    res.send(response);
  })
);

async function unsafeRecreateWallet(
  mnemonic: string,
  salt: string
): Promise<AquariusWalletWrapper> {
  const [phrase, depth] = mnemonic.split(WalletConstants.exportDepthDelimiter);
  const keyphrase = Mnemonic.fromWords(phrase);
  const wallet = await AquariusWalletWrapper.generateFromMnemonic(
    keyphrase,
    salt
  );
  wallet.generateAddresses(new BigNumber(depth ? depth : 1));
  return wallet;
}

export default router;
