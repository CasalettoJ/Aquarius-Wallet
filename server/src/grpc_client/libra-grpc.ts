// node_modules
import grpc, { ServiceError } from "grpc";

// proto files
import {
  RequestItem,
  UpdateToLatestLedgerRequest,
  UpdateToLatestLedgerResponse
} from "../../../common/libra_proto/get_with_proof_pb";
import { AdmissionControlClient } from "../../../common/libra_proto/admission_control_grpc_pb";
import { LedgerInfoWithSignatures } from "../../../common/libra_proto/ledger_info_pb";

export type ClientUpdateLedgerResponse = {
  response: UpdateToLatestLedgerResponse | null;
  error: ServiceError | null;
};

class LibraClient {
  readonly defaultVersion: string = "0";
  serverAddress: string;
  client: AdmissionControlClient;
  latestLedger: LedgerInfoWithSignatures | null;

  constructor(address: string) {
    this.serverAddress = address;
    this.client = new AdmissionControlClient(
      this.serverAddress,
      grpc.credentials.createInsecure()
    );
  }

  async GetLatestLedgerAsync(
    requestItems: Array<RequestItem>
  ): Promise<ClientUpdateLedgerResponse> {
    const request = this.GetLatestLedgerRequest(requestItems);
    const response: ClientUpdateLedgerResponse = {
      response: null,
      error: null
    };
    try {
      response.response = await request;
      this.latestLedger = response.response.getLedgerInfoWithSigs();
    } catch (err) {
      response.error = err;
    }
    return response;
  }

  GetLatestLedgerRequest(
    requestItems: Array<RequestItem>
  ): Promise<UpdateToLatestLedgerResponse> {
    const request = new UpdateToLatestLedgerRequest();
    request.setClientKnownVersion(
      this.latestLedger
        ? this.latestLedger.getLedgerInfo().getVersion()
        : this.defaultVersion
    );
    request.setRequestedItemsList(requestItems);
    const promise = new Promise<UpdateToLatestLedgerResponse>(
      (resolve, reject) => {
        this.client.updateToLatestLedger(
          request,
          (err: ServiceError, resp: UpdateToLatestLedgerResponse) => {
            if (err) {
              reject(err);
            }
            return resolve(resp);
          }
        );
      }
    );
    return promise;
  }
}

export default LibraClient;
