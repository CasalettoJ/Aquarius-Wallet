import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdAddCircleOutline } from "react-icons/io";

const actionButtonStyle = `
color: ${Colors.action};
cursor: pointer;
margin-right: 24px;
min-width: 5%;

&:hover {
  color: ${Colors.secondary};
}
`;

const NewAddress = styled(IoMdAddCircleOutline)`
  ${actionButtonStyle}
`;

type Props = {
  size: string;
};
function NewAddressButton(props: Props) {
  const { newAddress, latestWallet } = useWalletContext(); // TODO Custom salts from user input

  return latestWallet ? (
    <React.Fragment>
      <NewAddress
        onClick={async () => await newAddress(latestWallet.mnemonic, "LIBRA")}
        size={props.size}
      />
    </React.Fragment>
  ) : null;
}

export default NewAddressButton;
