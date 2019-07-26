import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdWallet, IoMdCreate } from "react-icons/io";
import Card from "../atoms/Card";
import NewAddressButton from "./NewAddressButton";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const actionButtonStyle = `
color: ${Colors.action};
cursor: pointer;
margin-right: 24px;
min-width: 5%;

&:hover {
  color: ${Colors.secondary};
}
`;

const CreateWalletButton = styled(IoMdWallet)`
  ${actionButtonStyle}
`;
const ImportWalletButton = styled(IoMdCreate)`
  ${actionButtonStyle}
`;

function WalletControls() {
  const { createWallet, importWallet } = useWalletContext(); // TODO Custom salts from user input

  return (
    <Card>
      <Container>
        <CreateWalletButton
          onClick={async () => await createWallet("LIBRA")}
          size="48px"
        />
        <ImportWalletButton
          onClick={async () =>
            await importWallet(
              "gym roast napkin pact then feel drill joy army crisp unlock oyster ramp receive typical spirit stick daughter enough stumble soul heavy minute screen;4",
              "LIBRA"
            )
          }
          size="48px"
        />
        <NewAddressButton size="48px" />
      </Container>
    </Card>
  );
}

export default WalletControls;
