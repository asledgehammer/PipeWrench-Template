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
 * File generated at: 2022-07-29T08:38:59.242Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor DailyValuesDebug:new */
    export class DailyValuesDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static cm: any;

      static fx: any;

      static instance: any;

      static shiftDown: any;

      currentTile: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      labels: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      tempColor: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLabel: ((_curY: any, _labelID: any, _title: any) => any) | any;

      addLabelValue: ((_curY: any, _type: any, _labelID: any, _title: any, _defaultVal: any) => any) | any;

      clear: (() => any) | any;

      getTitleLabel: ((_labelID: any) => any) | any;

      getValueLabel: ((_labelID: any) => any) | any;

      onResize: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      static OnOpenPanel: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.DailyValuesDebug {}
}
