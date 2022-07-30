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
  export namespace zombie.input {
    /**
     * @customConstructor GameKeyboard.new
     * @
     * [CLASS] zombie.input.GameKeyboard
     */
    export class GameKeyboard {
      /** boolean */
      static bNoEventsWhileLoading: boolean;
      /** boolean */
      static doLuaKeyPressed: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static eatKeyPress(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): org.lwjglx.input.KeyEventQueue
       */
      static getEventQueue(): org.lwjglx.input.KeyEventQueue;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): org.lwjglx.input.KeyEventQueue
       */
      static getEventQueuePolling(): org.lwjglx.input.KeyEventQueue;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isKeyDown(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isKeyPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static poll(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDoLuaKeyPressed(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static wasKeyDown(arg0: number): boolean;
    }
    /**
     * @customConstructor JoypadManager.new
     * @
     * [CLASS] zombie.input.JoypadManager
     */
    export class JoypadManager {
      /** zombie.input.JoypadManager */
      static readonly instance?: zombie.input.JoypadManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, String arg2): zombie.input.JoypadManager$Joypad
       */
      addJoypad(arg0: number, arg1: string, arg2: string): zombie.input.JoypadManager$Joypad;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      assignJoypad(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getAimingAxisX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getAimingAxisY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getDeadZone(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.input.JoypadManager$Joypad
       */
      getFromControllerID(arg0: number): zombie.input.JoypadManager$Joypad;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.input.JoypadManager$Joypad
       */
      getFromPlayer(arg0: number): zombie.input.JoypadManager$Joypad;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getLastActivity(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getMovementAxisX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getMovementAxisY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isAButtonReleasePress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isAButtonStartPress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isAPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isBButtonReleasePress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isBButtonStartPress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isBPressed(arg0: number): boolean;
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
      isDownPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isJoypadConnected(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isL3Pressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isLBPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isLTPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isLeftPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isR3Pressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isRBPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isRTPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isRightPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isUpPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isXButtonReleasePress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isXButtonStartPress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isXPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isYButtonReleasePress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isYButtonStartPress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isYPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Controller arg0): void
       */
      onControllerConnected(arg0: org.lwjglx.input.Controller): void;
      /**
       * Method Parameters: 
       *  - (Controller arg0): void
       */
      onControllerDisconnected(arg0: org.lwjglx.input.Controller): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onPressed(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onPressedAxis(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onPressedAxisNeg(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onPressedPov(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onPressedTrigger(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reloadControllerFiles(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderUI(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      revertToKeyboardAndMouse(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      saveControllerSettings(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setControllerActive(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      setDeadZone(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncActiveControllers(): void;
    }
    /**
     * @customConstructor Joypad.new
     * @
     * [CLASS] zombie.input.JoypadManager$Joypad
     */
    export class JoypadManager$Joypad {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAButton(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingAxisX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingAxisY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBButton(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBackButton(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getDeadZone(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getL3(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLBumper(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovementAxisX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovementAxisY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR3(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRBumper(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartButton(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXButton(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYButton(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isButtonPressed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isButtonReleasePress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isButtonStartPress(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDownPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isL3Pressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLBPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLTPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLeftPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isR3Pressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRBPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRTPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRightPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUpPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isXPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isYPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onPressed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onPressedAxis(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onPressedAxisNeg(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onPressedPov(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onPressedTrigger(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setDeadZone(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      wasButtonPressed(arg0: number): boolean;
    }
    /**
     * @customConstructor Mouse.new
     * @
     * [CLASS] zombie.input.Mouse
     */
    export class Mouse {
      /** boolean[] */
      static UICaptured?: boolean[];
      /** boolean */
      static bLeftDown: boolean;
      /** boolean */
      static bLeftWasDown: boolean;
      /** boolean */
      static bMiddleDown: boolean;
      /** boolean */
      static bMiddleWasDown: boolean;
      /** boolean */
      static bRightDown: boolean;
      /** boolean */
      static bRightWasDown: boolean;
      /** long */
      static lastActivity: number;
      /** boolean[] */
      static m_buttonDownStates?: boolean[];
      /** int */
      static wheelDelta: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static UIBlockButtonDown(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getWheelState(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getXA(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getYA(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initCustomCursor(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isButtonDown(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isButtonDownUICheck(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isCursorVisible(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isLeftDown(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isLeftPressed(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isLeftReleased(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isLeftUp(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isMiddleDown(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isMiddlePressed(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isMiddleReleased(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isMiddleUp(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isRightDown(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isRightPressed(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isRightReleased(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isRightUp(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): org.lwjglx.input.Cursor
       */
      static loadCursor(arg0: string): org.lwjglx.input.Cursor;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static poll(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static renderCursorTexture(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setCursorVisible(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static setXY(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
  }
}
