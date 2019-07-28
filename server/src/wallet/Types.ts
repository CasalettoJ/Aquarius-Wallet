import { AccountAddress } from "./Account";
import AccountConstants from "../constants/AccountConstants";

export type StructTag = {
  address: AccountAddress;
  module: string;
  name: string;
  type_params: StructTag[];
};

export const CoinStructTag: StructTag = {
  module: AccountConstants.coinModuleName,
  name: AccountConstants.coinStructName,
  address: AccountAddress.coreCodeAddress(),
  type_params: []
};

export const AccountStructTag: StructTag = {
  module: AccountConstants.accountModuleName,
  name: AccountConstants.accountStructName,
  address: AccountAddress.coreCodeAddress(),
  type_params: []
};
