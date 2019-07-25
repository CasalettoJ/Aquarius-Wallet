import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useWalletContext } from "../../context/WalletContext";
import { IoMdWallet, IoMdCreate, IoMdAddCircleOutline } from "react-icons/io";
import ErrorText from "../atoms/ErrorText";

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
const NewAddressButton = styled(IoMdAddCircleOutline)`
  ${actionButtonStyle}
`;

function LedgerInfo() {
  const {
    latestAPIError,
    latestWallet,
    createWallet,
    newAddress,
    importWallet
  } = useWalletContext(); // TODO split this up this component is a joke

  return (
    <React.Fragment>
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
        <NewAddressButton
          onClick={async () =>
            await newAddress(
              "gym roast napkin pact then feel drill joy army crisp unlock oyster ramp receive typical spirit stick daughter enough stumble soul heavy minute screen;4",
              "LIBRA"
            )
          }
          size="48px"
        />
      </Container>
      <div style={{ marginTop: "42px" }}>
        {latestWallet && (
          <div>
            <h2 style={{ fontSize: "26px" }}>Wallet Keyphrase</h2>
            {latestWallet.mnemonic}
            <br />
            <br />
            <h2 style={{ fontSize: "26px" }}>Public Addresses</h2>
            {Object.keys(latestWallet.addresses).map((address, i) => {
              return (
                <p>
                  {i} : {address}
                </p>
              );
            })}
          </div>
        )}
        {(latestAPIError || (latestWallet && latestWallet.lastError)) && (
          <ErrorText>
            Error querying the Libra testnet:{" "}
            {latestAPIError.networkError
              ? "Network Error"
              : JSON.stringify(latestAPIError)}
          </ErrorText>
        )}
      </div>
    </React.Fragment>
  );
}

export default LedgerInfo;
