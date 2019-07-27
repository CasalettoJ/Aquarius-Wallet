import * as React from "react";
import Card from "../atoms/Card";
import styled from "styled-components";

import WalletInfo from "../organisms/WalletInfo";
import ErrorText from "../atoms/ErrorText";

const Container = styled(Card)`
  padding: 24px;
  margin: 24px;
  display: flex;
  flex-direction: column;
`;

function Wallet() {
  return (
    <React.Fragment>
      <Container>
        <ErrorText>
          This wallet is not secure and is only a demonstration.
        </ErrorText>
        <br />
        <ErrorText>
          It does not save any data locally, store your keyphrase if you want to
          keep using it to test!
        </ErrorText>
      </Container>
      <WalletInfo />
    </React.Fragment>
  );
}

export default Wallet;
