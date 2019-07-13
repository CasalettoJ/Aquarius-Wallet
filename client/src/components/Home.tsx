import * as React from "react";
import { ServiceError } from "grpc";
import axios, { AxiosResponse } from "axios";

import { UpdateToLatestLedgerAPIResponse } from "../../../common/api/Types";

type Props = {
  apiAddr: string;
};

function HelloWorld(props: Props) {
  const [lastResponse, setLastResponse] = React.useState<
    UpdateToLatestLedgerAPIResponse
  >(null);
  const [lastErr, setLastErr] = React.useState<ServiceError>(null);

  function handleClick() {
    setLastResponse(null);
    setLastErr(null);
    axios
      .get(props.apiAddr)
      .then((response: AxiosResponse<UpdateToLatestLedgerAPIResponse>) => {
        const { data } = response;
        if (data.error) {
          setLastErr(data.error);
        } else {
          setLastResponse(data);
        }
        console.log(response);
      })
      .catch(error => {
        setLastErr(error);
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <button
        style={{
          position: "relative",
          left: "50px",
          top: "20px",
          width: "200px",
          height: "100px"
        }}
        type="button"
        onClick={handleClick}
      >
        Update to Latest Ledger
      </button>
      <br />
      <br />
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
    </React.Fragment>
  );
}

export default HelloWorld;
