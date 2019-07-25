import axios, { AxiosResponse } from "axios";
import { RequestItem } from "../../../common/libra_protos/get_with_proof_pb";
import { UpdateToLatestLedgerAPIResponse } from "../../../common/api/Types";
import APIConstants from "../../../common/api/APIConstants";

export async function getLatestLedger(
  requestItems: Array<RequestItem> //TODO handling requestitems
): Promise<AxiosResponse<UpdateToLatestLedgerAPIResponse>> {
  try {
    return await axios.get<UpdateToLatestLedgerAPIResponse>(
      `${APIConstants.constants.walletHost}${APIConstants.endpoints.root}` // TODO: Real endpoint for ledger querying
    );
  } catch (err) {
    const resp: UpdateToLatestLedgerAPIResponse = {
      error: err,
      networkError: false,
      response: null
    };
    if (!err.response) {
      resp.networkError = true;
    }
    console.log(JSON.stringify(resp));
    throw resp;
  }
}
