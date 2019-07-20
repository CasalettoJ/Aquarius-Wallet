export default function(s: string): Uint8Array {
  const buf = new ArrayBuffer(s.length);
  const byteArray = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    byteArray[i] = s.charCodeAt(i);
  }
  return byteArray;
}
