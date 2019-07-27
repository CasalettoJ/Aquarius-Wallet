import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdAddCircleOutline } from "react-icons/io";

const NewAddressStyledButton = styled.button`
  color: ${Colors.action};
  cursor: pointer;
  margin-right: 24px;
  min-width: 5%;
  background-color: transparent;
  border: none;
  margin-top: 24px;

  &:hover {
    color: ${Colors.secondary};
  }
`;

type Props = {
  size: string;
};
function NewAddressButton(props: Props) {
  const { newAddress, latestWallet } = useWalletContext(); // TODO Custom salts from user input

  return latestWallet ? (
    <React.Fragment>
      <NewAddressStyledButton
        onClick={async () => await newAddress(latestWallet.mnemonic, "LIBRA")}
      >
        <h2>Add New Account</h2>
        <IoMdAddCircleOutline size={props.size} />
      </NewAddressStyledButton>
    </React.Fragment>
  ) : null;
}

export default NewAddressButton;
