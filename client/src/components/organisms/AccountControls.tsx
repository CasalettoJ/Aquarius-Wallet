import * as React from "react";
const QRCode = require("qrcode.react");
import styled from "styled-components";

import { useWalletContext } from "../../context/WalletContext";
import Card from "../atoms/Card";
import Colors from "../../constants/Colors";
import Addresses from "./Addresses";
import AccountTransactionForm from "../molecules/AccountTransactionForm";
import MintForm from "../molecules/MintForm";

const Container = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 350px;
`;

function Keyphrase() {
  const { latestWallet, activeAccount } = useWalletContext(); // TODO split this up this component is a joke

  return latestWallet ? (
    <Container>
      <div style={{ minWidth: "320px", paddingBottom: "48px" }}>
        {activeAccount && (
          <div>
            <h2 style={{ fontSize: "26px" }}>
              Active Account: {activeAccount.depth + 1}
            </h2>
            <div style={{ display: "flex" }}>
              <QRCode
                includeMargin
                value={activeAccount.address}
                fgColor={Colors.main}
                size={256}
              />
              <div style={{ padding: "24px" }}>
                <p style={{ fontSize: "18px", marginBottom: "4px" }}>
                  Address:
                </p>
                <p style={{ fontSize: "14px", marginBottom: "4px" }}>
                  {activeAccount.address}
                </p>
                <AccountTransactionForm />
                <MintForm />
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Addresses itemsPerPage={10} />
      </div>
    </Container>
  ) : null;
}

export default Keyphrase;
