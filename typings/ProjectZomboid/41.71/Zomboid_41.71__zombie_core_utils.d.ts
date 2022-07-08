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
 * File generated at Friday July 2022 15:18:33.572-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.utils {
    /**
     * @customConstructor BooleanGrid.new
     * @
     * [CLASS] zombie.core.utils.BooleanGrid
     */
    export class BooleanGrid {
      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      LoadFromByteBuffer(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      PutToByteBuffer(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): zombie.core.utils.BooleanGrid
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (BooleanGrid arg0): void
       */
      copy(arg0: zombie.core.utils.BooleanGrid): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fill(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      getValue(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      setValue(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor OnceEvery.new
     * @
     * [CLASS] zombie.core.utils.OnceEvery
     */
    export class OnceEvery {
      /**
       * Constructors: 
       *  - (float arg0)
       *  - (float arg0, boolean arg1)
       */
      constructor(arg0: number, arg1?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Check(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getElapsedMillis(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    /**
     * @customConstructor WrappedBuffer.new
     * @
     * [CLASS] zombie.core.utils.WrappedBuffer
     */
    export class WrappedBuffer {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dispose(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      getBuffer(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisposed(): boolean;
    }
  }
}
