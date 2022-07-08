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
 * File generated at Friday July 2022 15:18:33.639-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.input {
    /**
     * @customConstructor Input.new
     * @
     * [CLASS] zombie.core.input.Input
     */
    export class Input {
      /** int */
      static readonly ANY_CONTROLLER: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getAxisCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      getAxisName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getAxisValue(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getButtonCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      getButtonName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): org.lwjglx.input.Controller
       */
      getController(arg0: number): org.lwjglx.input.Controller;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getControllerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initControllers(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isButtonPressedD(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isButtonReleasePress(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isButtonStartPress(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerDownD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerLeftD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerRightD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerUpD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      poll(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      quit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateGameThread(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      wasButtonPressed(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getKeyCode(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getKeyName(arg0: number): string;
    }
  }
}
