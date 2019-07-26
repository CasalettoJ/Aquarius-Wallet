import * as React from "react";

import { useWalletContext } from "../../context/WalletContext";
import Card from "../atoms/Card";

function Keyphrase() {
  const { latestWallet } = useWalletContext(); // TODO split this up this component is a joke

  return latestWallet ? (
    <Card>
      <h2 style={{ fontSize: "26px" }}>Wallet Keyphrase</h2>
      {latestWallet.mnemonic}
    </Card>
  ) : null;
}

export default Keyphrase;
