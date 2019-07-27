// TODO: Refactor into base label / button atom w/ other button components

import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdTrash } from "react-icons/io";

const DestroyWalletStyledButton = styled.button`
  color: ${Colors.action};
  cursor: pointer;
  margin-right: 24px;
  min-width: 5%;
  background-color: transparent;
  border: none;
  margin-top: 24px;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    color: ${Colors.pureWhite};
    background-color: red;
  }
`;

type Props = {
  size: string;
};
function DestroyWalletButton(props: Props) {
  const { latestWallet, destroyWallet } = useWalletContext(); // TODO Custom salts from user input

  return latestWallet ? (
    <React.Fragment>
      <DestroyWalletStyledButton
        onClick={() => {
          destroyWallet();
        }}
      >
        <h2>Destroy Wallet</h2>
        <IoMdTrash size={props.size} />
      </DestroyWalletStyledButton>
    </React.Fragment>
  ) : null;
}

export default DestroyWalletButton;
