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
 * File generated at: 2022-07-29T08:39:01.747Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMElement:new */
    export class RWMElement extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonTexture: any;

      drawJoypadFocus: any;

      fontheight: any;

      fontheightMed: any;

      headerButton: any;

      isExpanded: any;

      isJoypadWindow: any;

      overrideBPrompt: any;

      playerNum: any;

      radioParent: any;

      subpanel: any;

      titleText: any;

      constructor(x: any, y: any, width: any, height: any, subpanel: any, title: any, radioParent: any);

      calculateHeights: (() => any) | any;

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onHeaderClick: (() => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      readFromObject: ((_player: any, _deviceObject: any, _deviceData: any, _deviceType: any) => any) | any;

      render: (() => any) | any;

      setExpanded: ((_bool: any) => any) | any;

      setFocus: ((_playerNum: any, _radioParent: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMElement {}
}
