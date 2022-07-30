/**
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * File generated at 2022-07-29T02:33Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../reference.d.ts" />
declare module 'PipeWrench' {
  export namespace java.io {
    export type BufferedInputStream = any;
    /**
     * @customConstructor BufferedReader.new
     * @
     * [CLASS] java.io.BufferedReader extends java.io.Reader
     */
    export class BufferedReader {
      /**
       * Constructors: 
       *  - (Reader arg0)
       *  - (Reader arg0, int arg1)
       */
      constructor(arg0: java.io.Reader, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<string>
       */
      lines(): java.util.stream.Stream<string>;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      mark(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      markSupported(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (char[] arg0): number
       *  - (CharBuffer arg0): number
       *  - (char[] arg0, int arg1, int arg2): number
       */
      read(arg0?: string[] | java.nio.CharBuffer, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      readLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      ready(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      skip(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Writer arg0): number
       */
      transferTo(arg0: java.io.Writer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.Reader
       */
      static nullReader(): java.io.Reader;
    }
    /**
     * @customConstructor BufferedWriter.new
     * @
     * [CLASS] java.io.BufferedWriter extends java.io.Writer
     */
    export class BufferedWriter {
      /**
       * Constructors: 
       *  - (Writer arg0)
       *  - (Writer arg0, int arg1)
       */
      constructor(arg0: java.io.Writer, arg1?: number);
      /**
       * Method Parameters: 
       *  - (char arg0): java.io.Writer
       *  - (char arg0): java.lang.Appendable
       *  - (CharSequence arg0): java.lang.Appendable
       *  - (CharSequence arg0): java.io.Writer
       *  - (CharSequence arg0, int arg1, int arg2): java.io.Writer
       *  - (CharSequence arg0, int arg1, int arg2): java.lang.Appendable
       */
      append(arg0: string | java.lang.CharSequence, arg1?: number, arg2?: number): java.io.Writer | java.lang.Appendable;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      flush(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      newLine(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (String arg0): void
       *  - (char[] arg0): void
       *  - (char[] arg0, int arg1, int arg2): void
       *  - (String arg0, int arg1, int arg2): void
       */
      write(arg0: number | string | string[], arg1?: number, arg2?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.Writer
       */
      static nullWriter(): java.io.Writer;
    }
    export type DataInput = any;
    /**
     * @customConstructor DataInputStream.new
     * @
     * [CLASS] java.io.DataInputStream extends java.io.FilterInputStream
     */
    export class DataInputStream {
      /**
       * Constructors: 
       *  - (InputStream arg0)
       */
      constructor(arg0: java.io.InputStream);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      available(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      mark(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      markSupported(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (byte[] arg0): number
       *  - (byte[] arg0, int arg1, int arg2): number
       */
      read(arg0?: number[], arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      readAllBytes(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      readBoolean(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      readChar(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readDouble(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readFloat(): number;
      /**
       * Method Parameters: 
       *  - (byte[] arg0): void
       *  - (byte[] arg0, int arg1, int arg2): void
       */
      readFully(arg0: number[], arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      readLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readLong(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number[]
       *  - (byte[] arg0, int arg1, int arg2): number
       */
      readNBytes(arg0: number | number[], arg1?: number, arg2?: number): number[] | number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readShort(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      readUTF(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readUnsignedByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      readUnsignedShort(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      skip(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      skipBytes(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      skipNBytes(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (OutputStream arg0): number
       */
      transferTo(arg0: java.io.OutputStream): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.InputStream
       */
      static nullInputStream(): java.io.InputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DataInput arg0): string
       */
      static readUTF(arg0: java.io.DataInput): string;
    }
    /**
     * @customConstructor DataOutputStream.new
     * @
     * [CLASS] java.io.DataOutputStream extends java.io.FilterOutputStream
     */
    export class DataOutputStream {
      /**
       * Constructors: 
       *  - (OutputStream arg0)
       */
      constructor(arg0: java.io.OutputStream);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      flush(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (byte[] arg0): void
       *  - (byte[] arg0, int arg1, int arg2): void
       */
      write(arg0: number | number[], arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      writeBoolean(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      writeByte(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      writeBytes(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      writeChar(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      writeChars(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      writeDouble(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      writeFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      writeInt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      writeLong(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      writeShort(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      writeUTF(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.OutputStream
       */
      static nullOutputStream(): java.io.OutputStream;
    }
    export type File = any;
    export type FileDescriptor = any;
    export type InputStream = any;
    export type ObjectInput = any;
    export type ObjectOutput = any;
    export type ObjectOutputStream = any;
    export type OutputStream = any;
    export type PrintStream = any;
    export type PrintWriter = any;
    export type RandomAccessFile = any;
    export type Reader = any;
    export type Writer = any;
  }
}
