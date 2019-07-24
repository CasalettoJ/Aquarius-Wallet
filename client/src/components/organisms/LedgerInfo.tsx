import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useLedgerContext } from "../../context/LedgerContext";
import { IoMdRefreshCircle } from "react-icons/io";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const RefreshButton = styled(IoMdRefreshCircle)`
  color: ${Colors.action};
  cursor: pointer;
  margin-right: 24px;

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
        <div> ERROR: {JSON.stringify(latestLedgerError)}</div>
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
