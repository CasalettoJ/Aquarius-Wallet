import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdCreate } from "react-icons/io";

const actionButtonStyle = `
color: ${Colors.action};
cursor: pointer;
margin-right: 24px;
min-width: 5%;

&:hover {
  color: ${Colors.secondary};
}
`;

const ImportWalletButton = styled(IoMdCreate)`
  ${actionButtonStyle}
`;

function WalletControls() {
  const { importWallet } = useWalletContext(); // TODO Custom salts from user input

  return (
    <React.Fragment>
      <ImportWalletButton
        onClick={async () =>
          await importWallet(
            "gym roast napkin pact then feel drill joy army crisp unlock oyster ramp receive typical spirit stick daughter enough stumble soul heavy minute screen;4",
            "LIBRA"
          )
        }
        size="48px"
      />
    </React.Fragment>
  );
}

export default WalletControls;
