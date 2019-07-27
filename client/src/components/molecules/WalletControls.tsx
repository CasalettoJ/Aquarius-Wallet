import * as React from "react";
import styled from "styled-components";

import Card from "../atoms/Card";
import NewAddressButton from "./NewAddressButton";
import OpenWalletForm from "./OpenWalletForm";
import DestroyWalletButton from "./DestroyWalletButton";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

function WalletControls() {
  return (
    <Card>
      <Container>
        <h1 style={{ fontSize: "36px", marginBottom: "24px" }}>
          Wallet Controls
        </h1>
        <OpenWalletForm />
        <div style={{ flexDirection: "row" }}>
          <NewAddressButton size="36px" />
          <DestroyWalletButton size="36px" />
        </div>
      </Container>
    </Card>
  );
}

export default WalletControls;
