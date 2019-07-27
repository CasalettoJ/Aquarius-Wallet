import * as React from "react";

import { useWalletContext } from "../../context/WalletContext";
import ErrorText from "../atoms/ErrorText";
import WalletControls from "../molecules/WalletControls";
import Keyphrase from "../molecules/Keyphrase";
import AccountControls from "./AccountControls";

function LedgerInfo() {
  const { latestAPIError, latestWallet } = useWalletContext(); // TODO split this up this component is a joke

  return (
    <React.Fragment>
      <WalletControls />
      <Keyphrase />
      <AccountControls />
      {(latestAPIError || (latestWallet && latestWallet.lastError)) && (
        <ErrorText>
          Error querying the Libra testnet:{" "}
          {latestAPIError.networkError
            ? "Network Error"
            : JSON.stringify(latestAPIError)}
        </ErrorText>
      )}
    </React.Fragment>
  );
}

export default LedgerInfo;
