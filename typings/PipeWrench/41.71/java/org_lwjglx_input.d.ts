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
  export namespace org.lwjglx.input {
    export type Controller = any;
    export type Cursor = any;
    export type KeyEventQueue = any;
    /**
     * @customConstructor Keyboard.new
     * @
     * [CLASS] org.lwjglx.input.Keyboard
     */
    export class Keyboard {
      /** int */
      static readonly CHAR_NONE: number;
      /** int */
      static readonly KEYBOARD_SIZE: number;
      /** int */
      static readonly KEY_0: number;
      /** int */
      static readonly KEY_1: number;
      /** int */
      static readonly KEY_2: number;
      /** int */
      static readonly KEY_3: number;
      /** int */
      static readonly KEY_4: number;
      /** int */
      static readonly KEY_5: number;
      /** int */
      static readonly KEY_6: number;
      /** int */
      static readonly KEY_7: number;
      /** int */
      static readonly KEY_8: number;
      /** int */
      static readonly KEY_9: number;
      /** int */
      static readonly KEY_A: number;
      /** int */
      static readonly KEY_ADD: number;
      /** int */
      static readonly KEY_APOSTROPHE: number;
      /** int */
      static readonly KEY_APPS: number;
      /** int */
      static readonly KEY_AT: number;
      /** int */
      static readonly KEY_AX: number;
      /** int */
      static readonly KEY_B: number;
      /** int */
      static readonly KEY_BACK: number;
      /** int */
      static readonly KEY_BACKSLASH: number;
      /** int */
      static readonly KEY_C: number;
      /** int */
      static readonly KEY_CAPITAL: number;
      /** int */
      static readonly KEY_CIRCUMFLEX: number;
      /** int */
      static readonly KEY_CLEAR: number;
      /** int */
      static readonly KEY_COLON: number;
      /** int */
      static readonly KEY_COMMA: number;
      /** int */
      static readonly KEY_CONVERT: number;
      /** int */
      static readonly KEY_D: number;
      /** int */
      static readonly KEY_DECIMAL: number;
      /** int */
      static readonly KEY_DELETE: number;
      /** int */
      static readonly KEY_DIVIDE: number;
      /** int */
      static readonly KEY_DOWN: number;
      /** int */
      static readonly KEY_E: number;
      /** int */
      static readonly KEY_END: number;
      /** int */
      static readonly KEY_EQUALS: number;
      /** int */
      static readonly KEY_ESCAPE: number;
      /** int */
      static readonly KEY_F: number;
      /** int */
      static readonly KEY_F1: number;
      /** int */
      static readonly KEY_F10: number;
      /** int */
      static readonly KEY_F11: number;
      /** int */
      static readonly KEY_F12: number;
      /** int */
      static readonly KEY_F13: number;
      /** int */
      static readonly KEY_F14: number;
      /** int */
      static readonly KEY_F15: number;
      /** int */
      static readonly KEY_F16: number;
      /** int */
      static readonly KEY_F17: number;
      /** int */
      static readonly KEY_F18: number;
      /** int */
      static readonly KEY_F19: number;
      /** int */
      static readonly KEY_F2: number;
      /** int */
      static readonly KEY_F3: number;
      /** int */
      static readonly KEY_F4: number;
      /** int */
      static readonly KEY_F5: number;
      /** int */
      static readonly KEY_F6: number;
      /** int */
      static readonly KEY_F7: number;
      /** int */
      static readonly KEY_F8: number;
      /** int */
      static readonly KEY_F9: number;
      /** int */
      static readonly KEY_FUNCTION: number;
      /** int */
      static readonly KEY_G: number;
      /** int */
      static readonly KEY_GRAVE: number;
      /** int */
      static readonly KEY_H: number;
      /** int */
      static readonly KEY_HOME: number;
      /** int */
      static readonly KEY_I: number;
      /** int */
      static readonly KEY_INSERT: number;
      /** int */
      static readonly KEY_J: number;
      /** int */
      static readonly KEY_K: number;
      /** int */
      static readonly KEY_KANA: number;
      /** int */
      static readonly KEY_KANJI: number;
      /** int */
      static readonly KEY_L: number;
      /** int */
      static readonly KEY_LBRACKET: number;
      /** int */
      static readonly KEY_LCONTROL: number;
      /** int */
      static readonly KEY_LEFT: number;
      /** int */
      static readonly KEY_LMENU: number;
      /** int */
      static readonly KEY_LMETA: number;
      /** int */
      static readonly KEY_LSHIFT: number;
      /** int */
      static readonly KEY_LWIN: number;
      /** int */
      static readonly KEY_M: number;
      /** int */
      static readonly KEY_MINUS: number;
      /** int */
      static readonly KEY_MULTIPLY: number;
      /** int */
      static readonly KEY_N: number;
      /** int */
      static readonly KEY_NEXT: number;
      /** int */
      static readonly KEY_NOCONVERT: number;
      /** int */
      static readonly KEY_NONE: number;
      /** int */
      static readonly KEY_NUMLOCK: number;
      /** int */
      static readonly KEY_NUMPAD0: number;
      /** int */
      static readonly KEY_NUMPAD1: number;
      /** int */
      static readonly KEY_NUMPAD2: number;
      /** int */
      static readonly KEY_NUMPAD3: number;
      /** int */
      static readonly KEY_NUMPAD4: number;
      /** int */
      static readonly KEY_NUMPAD5: number;
      /** int */
      static readonly KEY_NUMPAD6: number;
      /** int */
      static readonly KEY_NUMPAD7: number;
      /** int */
      static readonly KEY_NUMPAD8: number;
      /** int */
      static readonly KEY_NUMPAD9: number;
      /** int */
      static readonly KEY_NUMPADCOMMA: number;
      /** int */
      static readonly KEY_NUMPADENTER: number;
      /** int */
      static readonly KEY_NUMPADEQUALS: number;
      /** int */
      static readonly KEY_O: number;
      /** int */
      static readonly KEY_P: number;
      /** int */
      static readonly KEY_PAUSE: number;
      /** int */
      static readonly KEY_PERIOD: number;
      /** int */
      static readonly KEY_POWER: number;
      /** int */
      static readonly KEY_PRIOR: number;
      /** int */
      static readonly KEY_Q: number;
      /** int */
      static readonly KEY_R: number;
      /** int */
      static readonly KEY_RBRACKET: number;
      /** int */
      static readonly KEY_RCONTROL: number;
      /** int */
      static readonly KEY_RETURN: number;
      /** int */
      static readonly KEY_RIGHT: number;
      /** int */
      static readonly KEY_RMENU: number;
      /** int */
      static readonly KEY_RMETA: number;
      /** int */
      static readonly KEY_RSHIFT: number;
      /** int */
      static readonly KEY_RWIN: number;
      /** int */
      static readonly KEY_S: number;
      /** int */
      static readonly KEY_SCROLL: number;
      /** int */
      static readonly KEY_SECTION: number;
      /** int */
      static readonly KEY_SEMICOLON: number;
      /** int */
      static readonly KEY_SLASH: number;
      /** int */
      static readonly KEY_SLEEP: number;
      /** int */
      static readonly KEY_SPACE: number;
      /** int */
      static readonly KEY_STOP: number;
      /** int */
      static readonly KEY_SUBTRACT: number;
      /** int */
      static readonly KEY_SYSRQ: number;
      /** int */
      static readonly KEY_T: number;
      /** int */
      static readonly KEY_TAB: number;
      /** int */
      static readonly KEY_U: number;
      /** int */
      static readonly KEY_UNDERLINE: number;
      /** int */
      static readonly KEY_UNLABELED: number;
      /** int */
      static readonly KEY_UP: number;
      /** int */
      static readonly KEY_V: number;
      /** int */
      static readonly KEY_W: number;
      /** int */
      static readonly KEY_X: number;
      /** int */
      static readonly KEY_Y: number;
      /** int */
      static readonly KEY_YEN: number;
      /** int */
      static readonly KEY_Z: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (char arg0): void
       */
      static addCharEvent(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static addKeyEvent(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static areRepeatEventsEnabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static create(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static destroy(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static enableRepeatEvents(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getEventCharacter(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getEventKey(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getEventKeyState(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getEventNanoseconds(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getKeyIndex(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getKeyName(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initKeyNames(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isCreated(): boolean;
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
       *  - (Empty): boolean
       */
      static isRepeatEvent(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static next(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static poll(): void;
    }
  }
}
