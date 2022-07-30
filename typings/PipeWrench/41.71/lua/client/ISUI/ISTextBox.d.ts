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
 * File generated at: 2022-07-29T08:39:00.623Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTextBox:new */
    export class ISTextBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      colorBtn: any;

      colorPicker: any;

      currentColor: any;

      defaultEntryText: any;

      entry: any;

      errorMsg: any;

      fontHgt: any;

      maxLines: any;

      multipleLine: any;

      name: any;

      no: any;

      numLines: any;

      onclick: any;

      param1: any;

      param2: any;

      param3: any;

      param4: any;

      player: any;

      showError: any;

      target: any;

      text: any;

      titlebarbkg: any;

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

      destroy: (() => any) | any;

      enableColorPicker: (() => any) | any;

      getMaxLines: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onColorPicker: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onPickedColor: ((color: any, mouseUp: any) => any) | any;

      render: (() => any) | any;

      setMaxLines: ((max: any) => any) | any;

      setMultipleLine: ((multiple: any) => any) | any;

      setNumberOfLines: ((numLines: any) => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setValidateFunction: ((target: any, func: any, arg1: any, arg2: any) => any) | any;

      setValidateTooltipText: ((text: any) => any) | any;

      showErrorMessage: ((show: any, errorMsg: any) => any) | any;

      titleBarHeight: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTextBox {}
}
