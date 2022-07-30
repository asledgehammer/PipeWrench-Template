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
  export namespace zombie.interfaces {
    /**
     * @customConstructor ITexture.new
     * @
     * [INTERFACE] zombie.interfaces.ITexture
     */
    export class ITexture {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      bind(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.utils.WrappedBuffer
       */
      getData(): zombie.core.utils.WrappedBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Mask
       */
      getMask(): zombie.core.textures.Mask;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      makeTransp(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setAlphaForeach(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      setData(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Mask arg0): void
       */
      setMask(arg0: zombie.core.textures.Mask): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setRegion(arg0: number, arg1: number, arg2: number, arg3: number): void;
    }
  }
}
