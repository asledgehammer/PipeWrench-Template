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
 * File generated at: 2022-07-29T08:39:00.630Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTextEntryBox:new */
    export class ISTextEntryBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      currentText: any;

      fade: any;

      font: any;

      javaObject: any;

      joypadFocused: any;

      keeplog: any;

      logIndex: any;

      title: any;

      tooltip: any;

      tooltipUI: any;

      constructor(title: any, x: any, y: any, width: any, height: any);

      clear: (() => any) | any;

      focus: (() => any) | any;

      getCursorPos: (() => any) | any;

      getFrameAlpha: (() => any) | any;

      getInternalText: (() => any) | any;

      getMaxLines: (() => any) | any;

      getText: (() => any) | any;

      ignoreFirstInput: (() => any) | any;

      instantiate: (() => any) | any;

      isEditable: (() => any) | any;

      isFocused: (() => any) | any;

      isMultipleLine: (() => any) | any;

      isSelectable: (() => any) | any;

      onCommandEntered: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onPressDown: (() => any) | any;

      onPressUp: (() => any) | any;

      onTextChange: (() => any) | any;

      selectAll: (() => any) | any;

      setClearButton: ((hasButton: any) => any) | any;

      setCursorPos: ((charIndex: any) => any) | any;

      setEditable: ((editable: any) => any) | any;

      setForceUpperCase: ((forceUpperCase: any) => any) | any;

      setFrameAlpha: ((alpha: any) => any) | any;

      setHasFrame: ((hasFrame: any) => any) | any;

      setJoypadFocused: ((focused: any, joypadData: any) => any) | any;

      setMasked: ((b: any) => any) | any;

      setMaxLines: ((max: any) => any) | any;

      setMaxTextLength: ((length: any) => any) | any;

      setMultipleLine: ((multiple: any) => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setSelectable: ((enable: any) => any) | any;

      setText: ((str: any) => any) | any;

      setTooltip: ((text: any) => any) | any;

      setValid: ((valid: any) => any) | any;

      unfocus: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTextEntryBox {}
}
