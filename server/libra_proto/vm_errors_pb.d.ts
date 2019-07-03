// package: types
// file: vm_errors.proto

import * as jspb from "google-protobuf";
import * as language_storage_pb from "./language_storage_pb";

export class VMValidationStatus extends jspb.Message {
  getCode(): VMValidationStatusCodeMap[keyof VMValidationStatusCodeMap];
  setCode(value: VMValidationStatusCodeMap[keyof VMValidationStatusCodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMValidationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMValidationStatus): VMValidationStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMValidationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMValidationStatus;
  static deserializeBinaryFromReader(message: VMValidationStatus, reader: jspb.BinaryReader): VMValidationStatus;
}

export namespace VMValidationStatus {
  export type AsObject = {
    code: VMValidationStatusCodeMap[keyof VMValidationStatusCodeMap],
    message: string,
  }
}

export class VMVerificationStatusList extends jspb.Message {
  clearStatusListList(): void;
  getStatusListList(): Array<VMVerificationStatus>;
  setStatusListList(value: Array<VMVerificationStatus>): void;
  addStatusList(value?: VMVerificationStatus, index?: number): VMVerificationStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMVerificationStatusList.AsObject;
  static toObject(includeInstance: boolean, msg: VMVerificationStatusList): VMVerificationStatusList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMVerificationStatusList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMVerificationStatusList;
  static deserializeBinaryFromReader(message: VMVerificationStatusList, reader: jspb.BinaryReader): VMVerificationStatusList;
}

export namespace VMVerificationStatusList {
  export type AsObject = {
    statusListList: Array<VMVerificationStatus.AsObject>,
  }
}

export class VMVerificationStatus extends jspb.Message {
  getStatusKind(): VMVerificationStatus.StatusKindMap[keyof VMVerificationStatus.StatusKindMap];
  setStatusKind(value: VMVerificationStatus.StatusKindMap[keyof VMVerificationStatus.StatusKindMap]): void;

  getModuleIdx(): number;
  setModuleIdx(value: number): void;

  getErrorKind(): VMVerificationErrorKindMap[keyof VMVerificationErrorKindMap];
  setErrorKind(value: VMVerificationErrorKindMap[keyof VMVerificationErrorKindMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasDependencyId(): boolean;
  clearDependencyId(): void;
  getDependencyId(): language_storage_pb.ModuleId | undefined;
  setDependencyId(value?: language_storage_pb.ModuleId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMVerificationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMVerificationStatus): VMVerificationStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMVerificationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMVerificationStatus;
  static deserializeBinaryFromReader(message: VMVerificationStatus, reader: jspb.BinaryReader): VMVerificationStatus;
}

export namespace VMVerificationStatus {
  export type AsObject = {
    statusKind: VMVerificationStatus.StatusKindMap[keyof VMVerificationStatus.StatusKindMap],
    moduleIdx: number,
    errorKind: VMVerificationErrorKindMap[keyof VMVerificationErrorKindMap],
    message: string,
    dependencyId?: language_storage_pb.ModuleId.AsObject,
  }

  export interface StatusKindMap {
    SCRIPT: 0;
    MODULE: 1;
    DEPENDENCY: 2;
  }

  export const StatusKind: StatusKindMap;
}

export class AssertionFailure extends jspb.Message {
  getAssertionErrorCode(): string;
  setAssertionErrorCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionFailure.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionFailure): AssertionFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionFailure;
  static deserializeBinaryFromReader(message: AssertionFailure, reader: jspb.BinaryReader): AssertionFailure;
}

export namespace AssertionFailure {
  export type AsObject = {
    assertionErrorCode: string,
  }
}

export class ArithmeticError extends jspb.Message {
  getErrorCode(): ArithmeticError.ArithmeticErrorTypeMap[keyof ArithmeticError.ArithmeticErrorTypeMap];
  setErrorCode(value: ArithmeticError.ArithmeticErrorTypeMap[keyof ArithmeticError.ArithmeticErrorTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArithmeticError.AsObject;
  static toObject(includeInstance: boolean, msg: ArithmeticError): ArithmeticError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArithmeticError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArithmeticError;
  static deserializeBinaryFromReader(message: ArithmeticError, reader: jspb.BinaryReader): ArithmeticError;
}

export namespace ArithmeticError {
  export type AsObject = {
    errorCode: ArithmeticError.ArithmeticErrorTypeMap[keyof ArithmeticError.ArithmeticErrorTypeMap],
  }

  export interface ArithmeticErrorTypeMap {
    UNKNOWNARITHMETICERROR: 0;
    UNDERFLOW: 1;
    OVERFLOW: 2;
    DIVISIONBYZERO: 3;
  }

  export const ArithmeticErrorType: ArithmeticErrorTypeMap;
}

export class DynamicReferenceError extends jspb.Message {
  getErrorCode(): DynamicReferenceError.DynamicReferenceErrorTypeMap[keyof DynamicReferenceError.DynamicReferenceErrorTypeMap];
  setErrorCode(value: DynamicReferenceError.DynamicReferenceErrorTypeMap[keyof DynamicReferenceError.DynamicReferenceErrorTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicReferenceError.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicReferenceError): DynamicReferenceError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DynamicReferenceError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicReferenceError;
  static deserializeBinaryFromReader(message: DynamicReferenceError, reader: jspb.BinaryReader): DynamicReferenceError;
}

export namespace DynamicReferenceError {
  export type AsObject = {
    errorCode: DynamicReferenceError.DynamicReferenceErrorTypeMap[keyof DynamicReferenceError.DynamicReferenceErrorTypeMap],
  }

  export interface DynamicReferenceErrorTypeMap {
    UNKNOWNDYNAMICREFERENCEERROR: 0;
    MOVEOFBORROWEDRESOURCE: 1;
    GLOBALREFALREADYRELEASED: 2;
    MISSINGRELEASEREF: 3;
    GLOBALALREADYBORROWED: 4;
  }

  export const DynamicReferenceErrorType: DynamicReferenceErrorTypeMap;
}

export class ExecutionStatus extends jspb.Message {
  hasRuntimeStatus(): boolean;
  clearRuntimeStatus(): void;
  getRuntimeStatus(): RuntimeStatusMap[keyof RuntimeStatusMap];
  setRuntimeStatus(value: RuntimeStatusMap[keyof RuntimeStatusMap]): void;

  hasAssertionFailure(): boolean;
  clearAssertionFailure(): void;
  getAssertionFailure(): AssertionFailure | undefined;
  setAssertionFailure(value?: AssertionFailure): void;

  hasArithmeticError(): boolean;
  clearArithmeticError(): void;
  getArithmeticError(): ArithmeticError | undefined;
  setArithmeticError(value?: ArithmeticError): void;

  hasReferenceError(): boolean;
  clearReferenceError(): void;
  getReferenceError(): DynamicReferenceError | undefined;
  setReferenceError(value?: DynamicReferenceError): void;

  getExecutionStatusCase(): ExecutionStatus.ExecutionStatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionStatus): ExecutionStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionStatus;
  static deserializeBinaryFromReader(message: ExecutionStatus, reader: jspb.BinaryReader): ExecutionStatus;
}

export namespace ExecutionStatus {
  export type AsObject = {
    runtimeStatus: RuntimeStatusMap[keyof RuntimeStatusMap],
    assertionFailure?: AssertionFailure.AsObject,
    arithmeticError?: ArithmeticError.AsObject,
    referenceError?: DynamicReferenceError.AsObject,
  }

  export enum ExecutionStatusCase {
    EXECUTION_STATUS_NOT_SET = 0,
    RUNTIME_STATUS = 1,
    ASSERTION_FAILURE = 2,
    ARITHMETIC_ERROR = 3,
    REFERENCE_ERROR = 4,
  }
}

export class VMStatus extends jspb.Message {
  hasValidation(): boolean;
  clearValidation(): void;
  getValidation(): VMValidationStatus | undefined;
  setValidation(value?: VMValidationStatus): void;

  hasVerification(): boolean;
  clearVerification(): void;
  getVerification(): VMVerificationStatusList | undefined;
  setVerification(value?: VMVerificationStatusList): void;

  hasInvariantViolation(): boolean;
  clearInvariantViolation(): void;
  getInvariantViolation(): VMInvariantViolationErrorMap[keyof VMInvariantViolationErrorMap];
  setInvariantViolation(value: VMInvariantViolationErrorMap[keyof VMInvariantViolationErrorMap]): void;

  hasDeserialization(): boolean;
  clearDeserialization(): void;
  getDeserialization(): BinaryErrorMap[keyof BinaryErrorMap];
  setDeserialization(value: BinaryErrorMap[keyof BinaryErrorMap]): void;

  hasExecution(): boolean;
  clearExecution(): void;
  getExecution(): ExecutionStatus | undefined;
  setExecution(value?: ExecutionStatus): void;

  getErrorTypeCase(): VMStatus.ErrorTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMStatus.AsObject;
  static toObject(includeInstance: boolean, msg: VMStatus): VMStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMStatus;
  static deserializeBinaryFromReader(message: VMStatus, reader: jspb.BinaryReader): VMStatus;
}

export namespace VMStatus {
  export type AsObject = {
    validation?: VMValidationStatus.AsObject,
    verification?: VMVerificationStatusList.AsObject,
    invariantViolation: VMInvariantViolationErrorMap[keyof VMInvariantViolationErrorMap],
    deserialization: BinaryErrorMap[keyof BinaryErrorMap],
    execution?: ExecutionStatus.AsObject,
  }

  export enum ErrorTypeCase {
    ERROR_TYPE_NOT_SET = 0,
    VALIDATION = 1,
    VERIFICATION = 2,
    INVARIANT_VIOLATION = 3,
    DESERIALIZATION = 4,
    EXECUTION = 5,
  }
}

export interface VMValidationStatusCodeMap {
  UNKNOWNVALIDATIONSTATUS: 0;
  INVALIDSIGNATURE: 1;
  INVALIDAUTHKEY: 2;
  SEQUENCENUMBERTOOOLD: 3;
  SEQUENCENUMBERTOONEW: 4;
  INSUFFICIENTBALANCEFORTRANSACTIONFEE: 5;
  TRANSACTIONEXPIRED: 6;
  SENDINGACCOUNTDOESNOTEXIST: 7;
  REJECTEDWRITESET: 8;
  INVALIDWRITESET: 9;
  EXCEEDEDMAXTRANSACTIONSIZE: 10;
  UNKNOWNSCRIPT: 11;
  UNKNOWNMODULE: 12;
  MAXGASUNITSEXCEEDSMAXGASUNITSBOUND: 13;
  MAXGASUNITSBELOWMINTRANSACTIONGASUNITS: 14;
  GASUNITPRICEBELOWMINBOUND: 15;
  GASUNITPRICEABOVEMAXBOUND: 16;
}

export const VMValidationStatusCode: VMValidationStatusCodeMap;

export interface VMVerificationErrorKindMap {
  UNKNOWNVERIFICATIONERROR: 0;
  INDEXOUTOFBOUNDS: 1;
  RANGEOUTOFBOUNDS: 2;
  INVALIDSIGNATURETOKEN: 3;
  INVALIDFIELDDEFREFERENCE: 4;
  RECURSIVESTRUCTDEFINITION: 5;
  INVALIDRESOURCEFIELD: 6;
  INVALIDFALLTHROUGH: 7;
  JOINFAILURE: 8;
  NEGATIVESTACKSIZEWITHINBLOCK: 9;
  UNBALANCEDSTACK: 10;
  INVALIDMAINFUNCTIONSIGNATURE: 11;
  DUPLICATEELEMENT: 12;
  INVALIDMODULEHANDLE: 13;
  UNIMPLEMENTEDHANDLE: 14;
  INCONSISTENTFIELDS: 15;
  UNUSEDFIELDS: 16;
  LOOKUPFAILED: 17;
  VISIBILITYMISMATCH: 18;
  TYPERESOLUTIONFAILURE: 19;
  TYPEMISMATCH: 20;
  MISSINGDEPENDENCY: 21;
  POPREFERENCEERROR: 22;
  POPRESOURCEERROR: 23;
  RELEASEREFTYPEMISMATCHERROR: 24;
  BRTYPEMISMATCHERROR: 25;
  ASSERTTYPEMISMATCHERROR: 26;
  STLOCTYPEMISMATCHERROR: 27;
  STLOCUNSAFETODESTROYERROR: 28;
  RETUNSAFETODESTROYERROR: 29;
  RETTYPEMISMATCHERROR: 30;
  FREEZEREFTYPEMISMATCHERROR: 31;
  FREEZEREFEXISTSMUTABLEBORROWERROR: 32;
  BORROWFIELDTYPEMISMATCHERROR: 33;
  BORROWFIELDBADFIELDERROR: 34;
  BORROWFIELDEXISTSMUTABLEBORROWERROR: 35;
  COPYLOCUNAVAILABLEERROR: 36;
  COPYLOCRESOURCEERROR: 37;
  COPYLOCEXISTSBORROWERROR: 38;
  MOVELOCUNAVAILABLEERROR: 39;
  MOVELOCEXISTSBORROWERROR: 40;
  BORROWLOCREFERENCEERROR: 41;
  BORROWLOCUNAVAILABLEERROR: 42;
  BORROWLOCEXISTSBORROWERROR: 43;
  CALLTYPEMISMATCHERROR: 44;
  CALLBORROWEDMUTABLEREFERENCEERROR: 45;
  PACKTYPEMISMATCHERROR: 46;
  UNPACKTYPEMISMATCHERROR: 47;
  READREFTYPEMISMATCHERROR: 48;
  READREFRESOURCEERROR: 49;
  READREFEXISTSMUTABLEBORROWERROR: 50;
  WRITEREFTYPEMISMATCHERROR: 51;
  WRITEREFRESOURCEERROR: 52;
  WRITEREFEXISTSBORROWERROR: 53;
  WRITEREFNOMUTABLEREFERENCEERROR: 54;
  INTEGEROPTYPEMISMATCHERROR: 55;
  BOOLEANOPTYPEMISMATCHERROR: 56;
  EQUALITYOPTYPEMISMATCHERROR: 57;
  EXISTSRESOURCETYPEMISMATCHERROR: 58;
  BORROWGLOBALTYPEMISMATCHERROR: 59;
  BORROWGLOBALNORESOURCEERROR: 60;
  MOVEFROMTYPEMISMATCHERROR: 61;
  MOVEFROMNORESOURCEERROR: 62;
  MOVETOSENDERTYPEMISMATCHERROR: 63;
  MOVETOSENDERNORESOURCEERROR: 64;
  CREATEACCOUNTTYPEMISMATCHERROR: 65;
  MODULEADDRESSDOESNOTMATCHSENDER: 66;
  NOMODULEHANDLES: 67;
}

export const VMVerificationErrorKind: VMVerificationErrorKindMap;

export interface VMInvariantViolationErrorMap {
  UNKNOWNINVARIANTVIOLATIONERROR: 0;
  OUTOFBOUNDSINDEX: 1;
  OUTOFBOUNDSRANGE: 2;
  EMPTYVALUESTACK: 3;
  EMPTYCALLSTACK: 4;
  PCOVERFLOW: 5;
  LINKERERROR: 6;
  LOCALREFERENCEERROR: 7;
  STORAGEERROR: 8;
}

export const VMInvariantViolationError: VMInvariantViolationErrorMap;

export interface BinaryErrorMap {
  UNKNOWNBINARYERROR: 0;
  MALFORMED: 1;
  BADMAGIC: 2;
  UNKNOWNVERSION: 3;
  UNKNOWNTABLETYPE: 4;
  UNKNOWNSIGNATURETYPE: 5;
  UNKNOWNSERIALIZEDTYPE: 6;
  UNKNOWNOPCODE: 7;
  BADHEADERTABLE: 8;
  UNEXPECTEDSIGNATURETYPE: 9;
  DUPLICATETABLE: 10;
}

export const BinaryError: BinaryErrorMap;

export interface RuntimeStatusMap {
  UNKNOWNRUNTIMESTATUS: 0;
  EXECUTED: 1;
  OUTOFGAS: 2;
  RESOURCEDOESNOTEXIST: 3;
  RESOURCEALREADYEXISTS: 4;
  EVICTEDACCOUNTACCESS: 5;
  ACCOUNTADDRESSALREADYEXISTS: 6;
  TYPEERROR: 7;
  MISSINGDATA: 8;
  DATAFORMATERROR: 9;
  INVALIDDATA: 10;
  REMOTEDATAERROR: 11;
  CANNOTWRITEEXISTINGRESOURCE: 12;
  VALUESERIALIZATIONERROR: 13;
  VALUEDESERIALIZATIONERROR: 14;
  DUPLICATEMODULENAME: 15;
}

export const RuntimeStatus: RuntimeStatusMap;

