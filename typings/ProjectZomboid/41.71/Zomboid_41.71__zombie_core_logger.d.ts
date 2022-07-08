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
 * File generated at Friday July 2022 15:18:33.636-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.logger {
    /**
     * @customConstructor ZLogger.new
     * @
     * [CLASS] zombie.core.logger.ZLogger
     */
    export class ZLogger {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1)
       */
      constructor(arg0: string | null, arg1: boolean);
      /**
       * Method Parameters: 
       *  - (Exception arg0): void
       *  - (String arg0): void
       *  - (String arg0, String arg1): void
       */
      write(arg0: java.lang.Exception | string, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      writeUnsafe(arg0: string, arg1: string): void;
    }
  }
}
