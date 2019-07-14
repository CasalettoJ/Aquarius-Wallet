// No futoin-hkdf types available via npm
// https://github.com/futoin/util-js-hkdf/blob/master/hkdf.js

// declare module "futoin-hkdf" {
//   export function hash_length(hash: string): number; // https://github.com/futoin/util-js-hkdf/blob/master/hkdf.js:28
//   export function extract(
//     hash: string,
//     hash_len: number,
//     ikm: Buffer | string,
//     salt: Buffer | string
//   ): Buffer; // https://github.com/futoin/util-js-hkdf/blob/master/hkdf.js:55
//   export function expand(
//     hash: string,
//     hash_len: number,
//     prk: Buffer | string,
//     length: Buffer | string,
//     info: Buffer | string
//   ): Buffer; // https://github.com/futoin/util-js-hkdf/blob/master/hkdf.js:74;
//   export default function(
//     ikm: Buffer | string,
//     length: number,
//     salt: Buffer | string,
//     info: Buffer | string
//   ): Buffer; // https://github.com/futoin/util-js-hkdf/blob/master/hkdf.js:121
// }
