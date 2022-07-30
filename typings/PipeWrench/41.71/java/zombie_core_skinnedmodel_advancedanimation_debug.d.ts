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
  export namespace zombie.core.skinnedmodel.advancedanimation.debug {
    /**
     * @customConstructor AnimatorDebugMonitor.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
     */
    export class AnimatorDebugMonitor {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsDirtyFloatList(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addCustomVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getFilter(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFloatNames(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLogString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getSelectedVarFloatList(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSelectedVarMaxFloat(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSelectedVarMinFloat(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSelectedVariable(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSelectedVariableFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoTickStamps(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeCustomVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoTickStamps(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setFilter(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSelectedVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimLayer[] arg1): void
       */
      update(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimLayer[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      static getKnownVariables(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isKnownVarsDirty(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static registerVariable(arg0: string): void;
    }
  }
}
