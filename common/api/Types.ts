import { ServiceError } from "grpc";
import { UpdateToLatestLedgerResponse } from "../libra_proto/get_with_proof_pb";

export type UpdateToLatestLedgerAPIResponse = {
  error: ServiceError | null;
  response: UpdateToLatestLedgerResponse.AsObject | null;
  networkError: boolean;
};
