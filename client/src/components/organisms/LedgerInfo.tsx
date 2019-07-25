import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useLedgerContext } from "../../context/LedgerContext";
import { IoMdRefreshCircle } from "react-icons/io";
import ErrorText from "../atoms/ErrorText";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const RefreshButton = styled(IoMdRefreshCircle)`
  color: ${Colors.action};
  cursor: pointer;
  margin-right: 24px;
  min-width: 5%;

  &:hover {
    color: ${Colors.secondary};
  }
`;

function LedgerInfo() {
  const { latestLedger, latestLedgerError, updateLedger } = useLedgerContext();
  React.useEffect(() => {
    if (!latestLedger) {
      updateLedger();
    }
  }, []);
  async function handleClick() {
    await updateLedger();
  }
  return (
    <Container>
      <RefreshButton onClick={handleClick} size="48px" />
      <br />
      {latestLedgerError && (
        <ErrorText>
          Error querying the Libra testnet:{" "}
          {latestLedgerError.networkError
            ? "Network Error"
            : JSON.stringify(latestLedgerError)}
        </ErrorText>
      )}
      {latestLedger && (
        <div>
          <div>
            <p>
              <b>Version:</b>{" "}
              {latestLedger.response.ledgerInfoWithSigs.ledgerInfo.version}
            </p>
            <p>
              <b>Timestamp:</b>{" "}
              {
                latestLedger.response.ledgerInfoWithSigs.ledgerInfo
                  .timestampUsecs
              }
            </p>
          </div>
        </div>
      )}
    </Container>
  );
}

export default LedgerInfo;
