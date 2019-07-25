import { ServiceError } from "grpc";
import { UpdateToLatestLedgerResponse } from "../libra_protos/get_with_proof_pb";
import BigNumber from "bignumber.js";

export type UpdateToLatestLedgerAPIResponse = {
  error: ServiceError | null;
  response: UpdateToLatestLedgerResponse.AsObject | null;
  networkError: boolean;
};

export type UnsafeWalletType = {
  mnemonic: string;
  addresses: AddressMapType;
  lastError: string;
};

export type AddressMapType = { [key: string]: BigNumber };
