import * as React from "react";
import { AxiosError } from "axios";
import { ServiceError } from "grpc";

import { UpdateToLatestLedgerAPIResponse } from "../../../common/api/Types";
import { getLatestLedger } from "../api/Ledger";

type LedgerContextType = {
  latestLedger: UpdateToLatestLedgerAPIResponse;
  latestLedgerError: AxiosError<UpdateToLatestLedgerAPIResponse> | ServiceError;
  updateLedger: () => Promise<void>;
};

const defaultLedgerState: LedgerContextType = {
  latestLedger: null,
  latestLedgerError: null,
  updateLedger: async () => {}
};

const LedgerContext = React.createContext<LedgerContextType>(
  defaultLedgerState
);

type Props = {
  children?: any;
};
export function LedgerProvider(props: Props) {
  const [lastResponse, setLastResponse] = React.useState<
    UpdateToLatestLedgerAPIResponse
  >(null);
  const [lastErr, setLastErr] = React.useState<
    AxiosError<UpdateToLatestLedgerAPIResponse> | ServiceError
  >(null);

  async function updateLedger() {
    setLastResponse(null);
    setLastErr(null);
    try {
      const resp = await getLatestLedger([]); // TODO: Need to handle request items
      if (resp.data.error) {
        setLastErr(resp.data.error);
      } else {
        setLastResponse(resp.data);
      }
    } catch (err) {
      // console.log(err); // TODO: Error handling
      setLastErr(err);
    }
  }

  return (
    <LedgerContext.Provider
      value={{
        latestLedger: lastResponse,
        latestLedgerError: lastErr,
        updateLedger: async () => await updateLedger()
      }}
    >
      {props.children}
    </LedgerContext.Provider>
  );
}

export function useLedgerContext(): LedgerContextType {
  const context = React.useContext(LedgerContext);
  if (!context) {
    throw `useLedgerContext must be used in a LedgerProvider`;
  }
  return context;
}

export default LedgerContext;
