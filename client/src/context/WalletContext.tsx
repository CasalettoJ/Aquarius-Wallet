import * as React from "react";
import { AxiosError, AxiosResponse } from "axios";
import { ServiceError } from "grpc";

import { UnsafeWalletType } from "../../../common/api/Types";

import * as WalletAPI from "../api/Wallet";

type WalletContextType = {
  latestWallet: UnsafeWalletType;
  latestAPIError: (
    | AxiosError<UnsafeWalletType>
    | ServiceError
    | AxiosResponse<UnsafeWalletType>) & { networkError?: boolean }; // TODO: Make these context types consistent ; separate API, gRPC, and backend errors when setting up error handling
  createWallet: (s: string) => Promise<void>;
  importWallet: (m: string, s: string) => Promise<void>;
  newAddress: (m: string, s: string) => Promise<void>;
};

const defaultWalletState: WalletContextType = {
  latestWallet: {
    mnemonic: null,
    addresses: {},
    lastError: null
  },
  latestAPIError: null,
  createWallet: async (salt: string) => {},
  importWallet: async (mnemonic: string, salt: string) => {},
  newAddress: async (mnemonic: string, salt: string) => {}
};

const WalletContext = React.createContext<WalletContextType>(
  defaultWalletState
);

type Props = {
  children?: any;
};
export function WalletProvider(props: Props) {
  const [latestWallet, setLatestWallet] = React.useState<UnsafeWalletType>(
    null
  );
  const [latestAPIError, setLatestAPIError] = React.useState<
    | AxiosError<UnsafeWalletType>
    | ServiceError
    | AxiosResponse<UnsafeWalletType>
  >(null);

  async function createWallet(salt: string) {
    setLatestAPIError(null);
    setLatestWallet(null);
    try {
      const response = await WalletAPI.createNewWallet(salt);
      if (response.status !== 200) {
        setLatestAPIError(response);
      } else {
        setLatestWallet(response.data);
      }
    } catch (err) {
      setLatestAPIError(err); // TODO: Error handling
    }
  }

  async function importWallet(mnemonic: string, salt: string) {
    setLatestAPIError(null);
    try {
      const response = await WalletAPI.importWallet(mnemonic, salt);
      if (response.status !== 200) {
        setLatestAPIError(response);
      } else {
        setLatestWallet(response.data);
      }
    } catch (err) {
      setLatestAPIError(err); // TODO: Error handling
    }
  }

  async function generateNewAddress(mnemonic: string, salt: string) {
    setLatestAPIError(null);
    try {
      const response = await WalletAPI.generateNewAddress(mnemonic, salt);
      if (response.status !== 200) {
        setLatestAPIError(response);
      } else {
        setLatestWallet(response.data);
      }
    } catch (err) {
      setLatestAPIError(err); // TODO: Error handling
    }
  }

  return (
    <WalletContext.Provider
      value={{
        latestAPIError: latestAPIError,
        latestWallet,
        createWallet: async (salt: string) => await createWallet(salt),
        importWallet: async (mnemonic: string, salt: string) =>
          await importWallet(mnemonic, salt),
        newAddress: async (mnemonic: string, salt: string) =>
          await generateNewAddress(mnemonic, salt)
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
}

export function useWalletContext(): WalletContextType {
  const context = React.useContext(WalletContext);
  if (!context) {
    throw `useLedgerContext must be used in a LedgerProvider`;
  }
  return context;
}

export default WalletContext;
