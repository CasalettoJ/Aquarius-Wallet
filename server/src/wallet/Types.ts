import { AccountAddress } from "./Account";
import { AccountConstants } from "./Constants";

export type StructTag = {
  address: AccountAddress;
  module: string;
  name: string;
  type_params: Array<StructTag>;
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
