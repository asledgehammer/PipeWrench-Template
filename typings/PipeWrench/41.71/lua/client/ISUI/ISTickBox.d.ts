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
 * File generated at: 2022-07-29T08:39:00.636Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTickBox:new */
    export class ISTickBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      _textColor: any;

      boxSize: any;

      changeOptionArgs: any;

      changeOptionMethod: any;

      changeOptionTarget: any;

      choicesColor: any;

      disabledOptions: any;

      enable: any;

      font: any;

      fontHgt: any;

      isTickBox: any;

      itemGap: any;

      itemHgt: any;

      joypadFocused: any;

      joypadIndex: any;

      leftMargin: any;

      mouseOverOption: any;

      name: any;

      optionCount: any;

      optionData: any;

      options: any;

      optionsIndex: any;

      selected: any;

      textGap: any;

      textures: any;

      tickTexture: any;

      tooltip: any;

      tooltipUI: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        name: any,
        changeOptionTarget: any,
        changeOptionMethod: any,
        changeOptionArg1: any,
        changeOptionArg2: any
      );

      addOption: ((name: any, data: any, texture: any) => any) | any;

      clearOptions: (() => any) | any;

      disableOption: ((name: any, disable: any) => any) | any;

      forceClick: (() => any) | any;

      getOptionCount: (() => any) | any;

      getOptionData: ((index: any) => any) | any;

      getTextColor: ((index: any, color: any) => any) | any;

      isSelected: ((index: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setFont: ((font: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setSelected: ((index: any, selected: any) => any) | any;

      setWidthToFit: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTickBox {}
}
