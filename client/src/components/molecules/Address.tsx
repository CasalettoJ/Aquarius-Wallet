import * as React from "react";
import styled from "styled-components";

import Colors from "../../constants/Colors";
import { useWalletContext } from "../../context/WalletContext";

const Container = styled.div`
  display: flex;
`;

const ActivateAddressButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${Colors.action};
  width: 100%;

  :hover {
    color: ${Colors.secondary};
  }
`;

type Props = {
  depth: number;
  address: string;
};

function Address(props: Props) {
  const { activeAccount, setActiveAccount } = useWalletContext();
  return (
    <Container>
      <div style={{ minHeight: "24px" }}>
        <ActivateAddressButton style={{ cursor: "default" }} disabled>
          {activeAccount && props.depth === activeAccount.depth && (
            <span style={{ color: Colors.main }}>
              Account {props.depth + 1}. Balance: 0 LBR
            </span>
          )}
        </ActivateAddressButton>

        {(!activeAccount ||
          (activeAccount && props.depth !== activeAccount.depth)) && (
          <ActivateAddressButton
            onClick={() =>
              setActiveAccount({ depth: props.depth, address: props.address })
            }
          >
            <span>Account {props.depth + 1}. Balance: 0 LBR</span>
          </ActivateAddressButton>
        )}
      </div>
    </Container> // TODO LBR Calcs
  );
}

export default Address;
