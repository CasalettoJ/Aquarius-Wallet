// https://github.com/libra/libra/blob/master/client/libra_wallet/src/mnemonic.rs
import EnglishWords, { EnglishArray } from "./wordlists/English";
import crypto from "crypto";

/// Mnemonic seed for deterministic key derivation
class Mnemonic {
  words: Array<string>;

  /// Generate mnemonic from strings
  static fromWords(words: Array<string>): Mnemonic {
    const mnemonic = new Mnemonic();
    if (!this.countWords(words)) {
      throw `Error creating mnemonic from words: ${words}\nMnemonic must have a word count divisible with 6.`;
    }
    const invalidWords = this.validateWords(words);
    if (invalidWords.length > 0) {
      throw `Errow creating mnemonic from words: ${words}\nThe following words were invalid: ${invalidWords}`;
    }

    mnemonic.words = words;
    return mnemonic;
  }

  /// Generate mnemonic from a byte array (I'm pretty sure everything here is little-endian...)
  static fromBytes(bytes: Uint8Array) {
    const mnemonic = new Mnemonic();
    if (!this.validateBytes) {
      throw `Error creating mnemonic from bytes: ${bytes}\nData must have a bytelength divisible by 4.`;
    }
    const checksum = new Uint8Array(32);
    const sha2 = crypto.createHash("sha256");

    // https://github.com/CasalettoJ/mnemonic
    // Step 1 Generate Checksum w/ sha256
    sha2.update(bytes);
    checksum.set(sha2.digest(), 0);

    // Step 2 Take the first (bytes/4) bytes from the checksum:
    const checksumAppend = new Uint8Array(
      checksum.subarray(0, checksum.length / 32)
    );

    // Step 3 add the checksum append to the bytes:
    const generatedBytes = new Uint8Array(bytes.length + checksumAppend.length);
    generatedBytes.set(bytes, 0);
    generatedBytes.set(checksumAppend, bytes.length);

    // Step 4 split the result in 11-bit-length segments
    let bufferBinary = "";
    for (let i = 0; i < generatedBytes.byteLength; i++) {
      let bin = generatedBytes[i].toString(2);
      const pad = 8 - bin.length;
      for (let j = 0; j < pad; j++) {
        bin = "0" + bin;
      }
      bufferBinary += bin;
    }
    const binarySplits = new Array<string>();
    for (let i = 0; i < bufferBinary.length; i += 11) {
      let binaryString = "";
      for (let j = 0; j < 11; j++) {
        binaryString += bufferBinary[i + j];
      }
      binarySplits.push(binaryString);
    }

    const words = new Array<string>();
    // Step 5 Map the binary numbers to array indices in the word list
    for (let i = 0; i < binarySplits.length; i++) {
      const index = parseInt(binarySplits[i], 2);
      words.push(EnglishArray[index]);
    }

    // console.log(`Bytes: ${bytes}`);
    // console.log(`Checksum: ${checksum}`);
    // console.log(`Checksum append: ${checksumAppend}`);
    // console.log(`Generated Bytes: ${generatedBytes}`);
    // console.log(`Buffer Binary: ${bufferBinary}`);
    // console.log(`Binary Splits: ${binarySplits}`);
    // console.log(`Mnemonic Phrase: ${words}`);
    mnemonic.words = words;
    return mnemonic;
  }

  private static countWords(words: Array<string>): boolean {
    return words.length > 6 && words.length % 6 == 0;
  }

  private static validateWords(words: Array<string>): Array<string> {
    const invalidWords = words.map((word: string, i: number) => {
      if (!EnglishWords[word]) {
        return word;
      }
    });
    return invalidWords;
  }

  private static validateBytes(bytes: Uint8Array): boolean {
    return bytes.byteLength % 4 == 0;
  }

  toString(): string {
    return this.words.join(" ");
  }

  // https://gist.github.com/skratchdot/e095036fad80597f1c1a
  toBytes(): Uint8Array {
    const word = this.toString();
    const buf = new ArrayBuffer(word.length * 2); // 2 bytes for each char
    const byteArray = new Uint8Array(buf);
    for (let i = 0; i < word.length; i++) {
      byteArray[i] = word.charCodeAt(i);
    }
    return byteArray;
  }
}

export default Mnemonic;
