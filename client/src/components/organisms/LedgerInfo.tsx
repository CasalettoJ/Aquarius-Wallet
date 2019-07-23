import * as React from "react";
import styled from "styled-components";
import Colors from "../../constants/Colors";

import { useLedgerContext } from "../../context/LedgerContext";
import { IoMdRefreshCircle } from "react-icons/io";

const RefreshButton = styled(IoMdRefreshCircle)`
  color: ${Colors.action};
  cursor: pointer;

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
    <React.Fragment>
      <RefreshButton onClick={handleClick} size="48px" />
      <br />
      {latestLedgerError && (
        <div> ERROR: {JSON.stringify(latestLedgerError)}</div>
      )}
      {latestLedger && (
        <div>
          <h1>Latest Ledger:</h1>
          <div>
            <p>
              <b>Version:</b>{" "}
              {latestLedger.response.ledgerInfoWithSigs.ledgerInfo.version}
            </p>
            {/* <p>
              <b>Transaction Accumulator Hash:</b>{" "}
              {
                latestLedger.response.ledgerInfoWithSigs.ledgerInfo
                  .transactionAccumulatorHash
              }
            </p>
            <p>
              <b>Consensus Data Hash:</b>{" "}
              {
                latestLedger.response.ledgerInfoWithSigs.ledgerInfo
                  .consensusDataHash
              }
            </p>
            <p>
              <b>Consensus Block ID:</b>{" "}
              {
                latestLedger.response.ledgerInfoWithSigs.ledgerInfo
                  .consensusBlockId
              }
            </p> */}
            {/* <p>
              <b>Epoch:</b>{" "}
              {latestLedger.response.ledgerInfoWithSigs.ledgerInfo.epochNum}
            </p> */}
            <p>
              <b>Timestamp:</b>{" "}
              {
                latestLedger.response.ledgerInfoWithSigs.ledgerInfo
                  .timestampUsecs
              }
            </p>
            {/* <h3>Validators</h3> */}
            {/* {latestLedger.response.ledgerInfoWithSigs.signaturesList.map(
              (x: any) => (
                <React.Fragment>
                  <div>
                    Validator ID: {x.validatorId}
                    <br />
                    Signature: {x.signature}
                  </div>
                  <br />
                  <br />
                </React.Fragment>
              )
            )} */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default LedgerInfo;
