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
 * File generated at Friday July 2022 15:18:33.563-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.world.moddata {
    /**
     * @customConstructor ModData.new
     * @
     * [CLASS] zombie.world.moddata.ModData
     */
    export class ModData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      static add(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static create(arg0?: string): string | se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static exists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static get(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getOrCreate(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getTableNames(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static remove(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static request(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static transmit(arg0: string): void;
    }
  }
}
