/*
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
 * File generated at: 2022-07-29T08:39:00.503Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISOnScreenKeyboard:new */
    export class ISOnScreenKeyboard extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      bSelectDefaultKey: any;

      buttonPadY: any;

      capsLock: any;

      entry: any;

      isRTPressed: any;

      keepOnScreen: any;

      keyPanel: any;

      playerNum: any;

      setBlockMovement: any;

      shiftDown: any;

      textEntryBox: any;

      toggleButtonBG: any;

      transition: any;

      constructor(x: any, y: any, width: any, height: any);

      accept: (() => any) | any;

      checkRightTrigger: ((joypadData: any) => any) | any;

      createChildren: (() => any) | any;

      focusOnEntry: ((joypadData: any) => any) | any;

      getCurrentText: (() => any) | any;

      hide: (() => any) | any;

      KeyFunction_CapsLock: (() => any) | any;

      KeyFunction_Char: ((chLower: any, chUpper: any) => any) | any;

      KeyFunction_Enter: (() => any) | any;

      KeyFunction_Hide: (() => any) | any;

      KeyFunction_KeyCode: ((keyCode: any) => any) | any;

      KeyFunction_TogglePassword: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      setButtonNames: (() => any) | any;

      setMultipleLine: ((multipleLine: any) => any) | any;

      show: ((playerNum: any, textEntryBox: any, joypadData: any) => any) | any;

      shrinkWrap: ((panel: any) => any) | any;

      update: (() => any) | any;
    }

    /** @customConstructor OnScreenKeyboardEntry:new */
    export class OnScreenKeyboardEntry extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      constructor(x: any, y: any, width: any, height: any);

      focus: (() => any) | any;

      getCursorLine: (() => any) | any;

      getCursorPos: (() => any) | any;

      getText: (() => any) | any;

      instantiate: (() => any) | any;

      isFocused: (() => any) | any;

      isMasked: (() => any) | any;

      isMultipleLine: (() => any) | any;

      render: (() => any) | any;

      setCursorLine: ((line: any) => any) | any;

      setCursorPos: ((charIndex: any) => any) | any;

      setMasked: ((masked: any) => any) | any;

      setMaxLines: ((max: any) => any) | any;

      setMultipleLine: ((multipleLine: any) => any) | any;

      setText: ((str: any) => any) | any;

      unfocus: (() => any) | any;

      update: (() => any) | any;
    }

    /** @customConstructor OnScreenKeyboardPanel:new */
    export class OnScreenKeyboardPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      backgroundColorPressed: any;

      buttonH: any;

      buttonPadX: any;

      buttonPadY: any;

      buttonW: any;

      buttonX: any;

      buttonY: any;

      defaultButton: any;

      parent: any;

      rowOfButtons: any;

      constructor(x: any, y: any, parent: any);

      createButton: ((textLower: any, textUpper: any, keyFunction: any, arg1: any, arg2: any) => any) | any;

      createButton_Char: ((chLower: any, chUpper: any) => any) | any;

      createButton2: ((x: any, y: any, w: any, h: any, text: any, keyFunction: any, arg1: any, arg2: any) => any) | any;

      createChildren: (() => any) | any;

      onButtonPressed: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      renderButton: (() => any) | any;
    }

    export class OnScreenKeyboard {
      private constructor();

      static [id: string]: any;

      static instance: any;

      static GetCurrentText: (() => any) | any;

      static Hide: (() => any) | any;

      static IsVisible: (() => any) | any;

      static Show: ((playerNum: any, textEntryBox: any, joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISOnScreenKeyboard {}
}
