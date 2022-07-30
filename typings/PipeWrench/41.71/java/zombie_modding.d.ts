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
  export namespace zombie.modding {
    /**
     * @customConstructor ActiveMods.new
     * @
     * [CLASS] zombie.modding.ActiveMods
     */
    export class ActiveMods {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkMissingMaps(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkMissingMods(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (ActiveMods arg0): void
       */
      copyFrom(arg0: zombie.modding.ActiveMods): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMapOrder(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMods(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isModActive(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeMapOrder(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeMod(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setModActive(arg0: string, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.modding.ActiveMods
       */
      static getById(arg0: string): zombie.modding.ActiveMods;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.modding.ActiveMods
       */
      static getByIndex(arg0: number): zombie.modding.ActiveMods;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static indexOf(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static renderUI(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ActiveMods arg0): boolean
       */
      static requiresResetLua(arg0: zombie.modding.ActiveMods): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ActiveMods arg0): void
       */
      static setLoadedMods(arg0: zombie.modding.ActiveMods): void;
    }
  }
}
