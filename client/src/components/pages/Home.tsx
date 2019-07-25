import * as React from "react";

import Card from "../atoms/Card";
import LedgerInfo from "../organisms/LedgerInfo";
import { LedgerProvider } from "../../context/LedgerContext";

function Home() {
  return (
    <LedgerProvider>
      <Card>
        <LedgerInfo />
      </Card>
    </LedgerProvider>
  );
}

export default Home;
