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
 * File generated at Friday July 2022 15:18:33.594-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.network {
    /**
     * @customConstructor ByteBufferWriter.new
     * @
     * [CLASS] zombie.core.network.ByteBufferWriter
     */
    export class ByteBufferWriter {
      /**
       * Constructors: 
       *  - (ByteBuffer arg0)
       */
      constructor(arg0: java.nio.ByteBuffer | null);
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      putBoolean(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      putByte(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (char arg0): void
       */
      putChar(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      putDouble(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      putFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      putInt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      putLong(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      putShort(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      putUTF(arg0: string): void;
    }
  }
}
