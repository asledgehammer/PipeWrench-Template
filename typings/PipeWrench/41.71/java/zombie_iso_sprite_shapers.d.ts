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
  export namespace zombie.iso.sprite.shapers {
    /**
     * @customConstructor WallShaperWhole.new
     * @
     * [CLASS] zombie.iso.sprite.shapers.WallShaperWhole extends zombie.iso.sprite.shapers.WallShaper
     */
    export class WallShaperWhole {
      /** zombie.iso.sprite.shapers.WallShaperWhole */
      static readonly instance?: zombie.iso.sprite.shapers.WallShaperWhole;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       *  - (Object arg0): void
       */
      accept(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): java.util._function_.Consumer<T>
       */
      andThen(arg0: java.util._function_.Consumer<any>): java.util._function_.Consumer<any>;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTintColor(arg0: number): void;
    }
  }
}
