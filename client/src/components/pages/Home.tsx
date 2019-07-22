import * as React from "react";
import { ServiceError } from "grpc";
import axios, { AxiosResponse, AxiosError } from "axios";
import styled from "styled-components";

import { UpdateToLatestLedgerAPIResponse } from "../../../../common/api/Types";

import { GetLatestLedger } from "../../api/Ledger";
import Colors from "../../constants/Colors";
import StyleStrings from "../../constants/StyleStrings";
import Card from "../atoms/Card";

const RefreshButton = styled.button`
  font-size: 18px;
  color: ${Colors.action};
  background-color: transparent;
  border: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    font-weight: 700;
    color: ${Colors.secondary};
  }
`;

function Home() {
  const [lastResponse, setLastResponse] = React.useState<
    UpdateToLatestLedgerAPIResponse
  >(null);
  const [lastErr, setLastErr] = React.useState<
    AxiosError<UpdateToLatestLedgerAPIResponse> | ServiceError
  >(null);

  async function handleClick() {
    return await updateLedger();
  }

  async function updateLedger() {
    setLastResponse(null);
    setLastErr(null);
    try {
      const resp = await GetLatestLedger([]);
      console.log(resp);
      if (resp.data.error) {
        setLastErr(resp.data.error);
      } else {
        setLastResponse(resp.data);
      }
    } catch (err) {
      console.log(err);
      setLastErr(err);
    }
  }

  return (
    <Card>
      <RefreshButton onClick={handleClick}>Refresh</RefreshButton>
      <br />
      {lastErr && <div> ERROR: {JSON.stringify(lastErr)}</div>}
      {lastResponse && (
        <div>
          <h1>Latest Ledger:</h1>
          <div>
            <p>
              <b>Version:</b>{" "}
              {lastResponse.response.ledgerInfoWithSigs.ledgerInfo.version}
            </p>
            <p>
              <b>Transaction Accumulator Hash:</b>{" "}
              {
                lastResponse.response.ledgerInfoWithSigs.ledgerInfo
                  .transactionAccumulatorHash
              }
            </p>
            <p>
              <b>Consensus Data Hash:</b>{" "}
              {
                lastResponse.response.ledgerInfoWithSigs.ledgerInfo
                  .consensusDataHash
              }
            </p>
            <p>
              <b>Consensus Block ID:</b>{" "}
              {
                lastResponse.response.ledgerInfoWithSigs.ledgerInfo
                  .consensusBlockId
              }
            </p>
            <p>
              <b>Epoch:</b>{" "}
              {lastResponse.response.ledgerInfoWithSigs.ledgerInfo.epochNum}
            </p>
            <p>
              <b>Timestamp:</b>{" "}
              {
                lastResponse.response.ledgerInfoWithSigs.ledgerInfo
                  .timestampUsecs
              }
            </p>
            <h3>Validators</h3>
            {lastResponse.response.ledgerInfoWithSigs.signaturesList.map(
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
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

export default Home;
