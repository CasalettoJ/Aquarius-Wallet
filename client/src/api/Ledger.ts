import axios, { AxiosResponse } from "axios";
import { RequestItem } from "../../../common/libra_protos/get_with_proof_pb";
import { UpdateToLatestLedgerAPIResponse } from "../../../common/api/Types";

import ApiConfig from "../constants/ApiConfig";

export async function GetLatestLedger(
  requestItems: Array<RequestItem> //TODO handling requestitems
): Promise<AxiosResponse<UpdateToLatestLedgerAPIResponse>> {
  try {
    return await axios.get<UpdateToLatestLedgerAPIResponse>(
      `${ApiConfig.baseURL}${ApiConfig.endpoints.updateLedger}`
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
    throw resp;
  }
}
