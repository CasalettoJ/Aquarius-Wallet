import * as React from "react";
import { AxiosError, AxiosResponse } from "axios";
import { ServiceError } from "grpc";

import { UnsafeWalletType } from "../../../common/api/Types";

import * as WalletAPI from "../api/Wallet";

type WalletContextType = {
  latestWallet: UnsafeWalletType;
  activeAccount?: { depth: number; address: string };
  latestAPIError: (
    | AxiosError<UnsafeWalletType>
    | ServiceError
    | AxiosResponse<UnsafeWalletType>) & { networkError?: boolean }; // TODO: Make these context types consistent ; separate API, gRPC, and backend errors when setting up error handling
  createWallet: (s: string) => Promise<void>;
  importWallet: (m: string, s: string) => Promise<void>;
  newAddress: (m: string, s: string) => Promise<void>;
  setActiveAccount: (a: { depth: number; address: string }) => void;
  destroyWallet: () => void;
};

const defaultWalletState: WalletContextType = {
  latestWallet: {
    mnemonic: null,
    addresses: {},
    lastError: null
  },
  latestAPIError: null,
  activeAccount: null,
  createWallet: async (salt: string) => {},
  importWallet: async (mnemonic: string, salt: string) => {},
  newAddress: async (mnemonic: string, salt: string) => {},
  destroyWallet: () => {},
  setActiveAccount: (a: { depth: number; address: string }) => {}
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
  const [activeAccount, setActiveAccount] = React.useState<{
    depth: number;
    address: string;
  }>(null);

  async function createWallet(salt: string) {
    setLatestAPIError(null);
    setLatestWallet(null);
    try {
      const response = await WalletAPI.createNewWallet(salt);
      if (response.status !== 200) {
        setLatestAPIError(response);
      } else {
        setLatestWallet(response.data);
        setActiveAccount({
          depth: 0,
          address: Object.keys(response.data.addresses)[0]
        });
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
        setActiveAccount({
          depth: 0,
          address: Object.keys(response.data.addresses)[0]
        });
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
        latestAPIError,
        latestWallet,
        activeAccount,
        setActiveAccount,
        createWallet: async (salt: string) => await createWallet(salt),
        importWallet: async (mnemonic: string, salt: string) =>
          await importWallet(mnemonic, salt),
        newAddress: async (mnemonic: string, salt: string) =>
          await generateNewAddress(mnemonic, salt),
        destroyWallet: () => {
          setLatestWallet(null);
          setActiveAccount(null);
        }
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
