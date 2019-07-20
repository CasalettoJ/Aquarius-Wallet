import toBytes from "./stringToBytes";

export default function(s: string): string {
  return Buffer.from(toBytes(s)).toString("hex");
}
