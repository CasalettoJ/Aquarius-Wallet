import axios, { AxiosResponse } from "axios";
import { UnsafeWalletType } from "../../../common/api/Types";

import APIConstants from "../../../common/api/APIConstants";

export async function createNewWallet(
  salt: string
): Promise<AxiosResponse<UnsafeWalletType>> {
  try {
    return await axios.post(
      `${APIConstants.constants.walletHost}${
        APIConstants.endpoints.wallet.create
      }`,
      { salt }
    );
  } catch (err) {
    throw err; // TODO: Error handling
  }
}

export async function generateNewAddress(
  mnemonic: string,
  salt: string
): Promise<AxiosResponse<UnsafeWalletType>> {
  try {
    return await axios.post(
      `${APIConstants.constants.walletHost}${
        APIConstants.endpoints.wallet.newAccount
      }`,
      { salt, mnemonic }
    );
  } catch (err) {
    throw err; // TODO: Error handling
  }
}

export async function importWallet(
  mnemonic: string,
  salt: string
): Promise<AxiosResponse<UnsafeWalletType>> {
  try {
    return await axios.post(
      `${APIConstants.constants.walletHost}${
        APIConstants.endpoints.wallet.import
      }`,
      { salt, mnemonic }
    );
  } catch (err) {
    throw err; // TODO: Error handling
  }
}
