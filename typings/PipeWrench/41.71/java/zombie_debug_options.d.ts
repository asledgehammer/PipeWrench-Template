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
  export namespace zombie.debug.options {
    /**
     * @customConstructor IDebugOption.new
     * @
     * [INTERFACE] zombie.debug.options.IDebugOption
     */
    export class IDebugOption {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
    }
    /**
     * @customConstructor IDebugOptionGroup.new
     * @
     * [INTERFACE] zombie.debug.options.IDebugOptionGroup
     */
    export class IDebugOptionGroup {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      addChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.debug.options.IDebugOption>
       */
      getChildren(): java.lang.Iterable<zombie.debug.options.IDebugOption>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onChildAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onDescendantAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
    }
  }
}
