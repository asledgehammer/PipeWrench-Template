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
 * File generated at: 2022-07-29T08:39:00.952Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISTextBoxMap:new */
    export class ISTextBoxMap extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      blackColor: any;

      character: any;

      colorButtonInfo: any;

      colorButtons: any;

      currentColor: any;

      defaultEntryText: any;

      entry: any;

      fontHgt: any;

      ISButtonA: any;

      ISButtonB: any;

      joypadIndex: any;

      joypadIndexY: any;

      mapUI: any;

      name: any;

      no: any;

      onclick: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      symbolsUI: any;

      target: any;

      text: any;

      tickBox: any;

      validateArgs: any;

      validateFunc: any;

      validateTarget: any;

      validateTooltipText: any;

      yes: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        text: any,
        defaultEntryText: any,
        target: any,
        onclick: any,
        player: any,
        param1: any,
        param2: any,
        param3: any,
        param4: any
      );

      close: (() => any) | any;

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      isTranslation: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onCommandEntered: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      onOtherKey: ((key: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;

      selectColor: ((r: any, g: any, b: any) => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setValidateFunction: ((target: any, func: any, arg1: any, arg2: any) => any) | any;

      setValidateTooltipText: ((text: any) => any) | any;

      showTranslationTickBox: ((isTranslation: any) => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISTextBoxMap {}
}
