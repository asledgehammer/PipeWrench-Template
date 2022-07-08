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
 * File generated at Friday July 2022 15:18:33.603-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.util {
    /**
     * @customConstructor BufferedRandomAccessFile.new
     * @
     * [CLASS] zombie.util.BufferedRandomAccessFile extends java.io.RandomAccessFile
     */
    export class BufferedRandomAccessFile {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2)
       *  - (File arg0, String arg1, int arg2)
       */
      constructor(arg0: string | java.io.File | null, arg1: string | null, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.channels.FileChannel
       */
      getChannel(): java.nio.channels.FileChannel;
      /**
       * Method Parameters: 
       *  - (Empty): java.io.FileDescriptor
       */
      getFD(): java.io.FileDescriptor;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFilePointer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNextLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (byte[] arg0): number
       *  - (byte[] arg0, int arg1, int arg2): number
       */
      read(arg0?: number[], arg1?: number, arg2?: number): number;
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
       *  - (long arg0): void
       */
      seek(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      skipBytes(arg0: number): number;
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
    }
    /**
     * @customConstructor IPooledObject.new
     * @
     * [INTERFACE] zombie.util.IPooledObject
     */
    export class IPooledObject {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IPooledObject[] arg0): void
       *  - (List arg0): void
       */
      static release(arg0: zombie.util.IPooledObject[] | java.util.List<zombie.util.IPooledObject>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IPooledObject[] arg0): void
       */
      static releaseAndBlank(arg0: zombie.util.IPooledObject[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IPooledObject[] arg0): void
       */
      static tryReleaseAndBlank(arg0: zombie.util.IPooledObject[]): void;
    }
    /**
     * @customConstructor PZCalendar.new
     * @
     * [CLASS] zombie.util.PZCalendar
     */
    export class PZCalendar {
      /**
       * Constructors: 
       *  - (Calendar arg0)
       */
      constructor(arg0: java.util.Calendar | null);
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      get(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Date
       */
      getTime(): java.util.Date;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeInMillis(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isLeapYear(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setTimeInMillis(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.util.PZCalendar
       */
      static getInstance(): zombie.util.PZCalendar;
    }
    /**
     * @customConstructor Pool.new
     * @
     * [CLASS] zombie.util.Pool
     */
    export class Pool<PO> {
      /**
       * Constructors: 
       *  - (Supplier arg0)
       */
      constructor(arg0: java.util._function_.Supplier<PO> | null);
      /**
       * Method Parameters: 
       *  - (Empty): PO
       */
      alloc<E>(): PO;
      /**
       * Method Parameters: 
       *  - (IPooledObject arg0): void
       */
      release<E>(arg0: zombie.util.IPooledObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IPooledObject[] arg0): E[]
       *  - (IPooledObject arg0): E
       *  - (Object arg0): E
       */
      static tryRelease<E>(arg0: E[] | E): any;
    }
  }
}
