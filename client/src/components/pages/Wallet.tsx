import * as React from "react";
import Card from "../atoms/Card";

import WalletInfo from "../organisms/WalletInfo";
import { WalletProvider } from "../../context/WalletContext";
import ErrorText from "../atoms/ErrorText";

function Wallet() {
  return (
    <WalletProvider>
      <Card>
        <ErrorText>
          This wallet is not secure and is only a demonstration.
        </ErrorText>
        <br />
        <ErrorText>
          It does not save any data locally, store your keyphrase if you want to
          keep using it to test!
        </ErrorText>
      </Card>
      <Card>
        <WalletInfo />
      </Card>
    </WalletProvider>
  );
}

export default Wallet;
