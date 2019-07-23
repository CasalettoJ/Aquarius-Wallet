import * as React from "react";
import { AxiosError } from "axios";
import { ServiceError } from "grpc";

import { UpdateToLatestLedgerAPIResponse } from "../../../common/api/Types";
import { string } from "prop-types";

type WalletContextType = {
  exportString: string;
  addresses: Map<string, number>;
  updateExportString: () => void;
  updateAddresses: () => void;
};

const WalletContext = React.createContext<WalletContextType>({
  exportString: "",
  addresses: new Map<string, number>(),
  updateExportString: () => {},
  updateAddresses: () => {}
});

export const WalletConsumer = WalletContext.Consumer;
export const WalletProvider = WalletContext.Provider;
export default WalletContext;
