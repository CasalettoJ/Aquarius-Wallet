import * as React from "react";
import styled from "styled-components";

import Address from "../molecules/Address";
import NewAddressButton from "../molecules/NewAddressButton";
import Card from "../atoms/Card";
import { useWalletContext } from "../../context/WalletContext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Addresses() {
  const { latestWallet } = useWalletContext(); // TODO: Error handling
  return latestWallet ? (
    <Container>
      {Object.keys(latestWallet.addresses).map((address, i) => {
        return <Address key={`${i};${address}`} depth={i} address={address} />;
      })}
    </Container>
  ) : null;
}

export default Addresses;
