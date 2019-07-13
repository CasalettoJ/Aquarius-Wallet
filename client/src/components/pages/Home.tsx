import * as React from "react";
import { ServiceError } from "grpc";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Link } from "react-router-dom";

import { GetLatestLedger } from "../../api/Ledger";

import Paths from "../../constants/Paths";
import { UpdateToLatestLedgerAPIResponse } from "../../../../common/api/Types";

function HelloWorld() {
  const [lastResponse, setLastResponse] = React.useState<
    UpdateToLatestLedgerAPIResponse
  >(null);
  const [lastErr, setLastErr] = React.useState<
    AxiosError<UpdateToLatestLedgerAPIResponse> | ServiceError
  >(null);

  async function handleClick() {
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
    <React.Fragment>
      <button
        style={{
          margin: "25px",
          width: "200px",
          height: "100px"
        }}
        type="button"
        onClick={handleClick}
      >
        Update to Latest Ledger
      </button>
      <br />
      <Link
        style={{
          margin: "25px"
        }}
        to={Paths.walletManagement}
      >
        Go to Wallet Management
      </Link>
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
