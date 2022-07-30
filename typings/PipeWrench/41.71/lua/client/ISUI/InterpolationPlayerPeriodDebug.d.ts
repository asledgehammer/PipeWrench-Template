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
 * File generated at: 2022-07-29T08:39:00.159Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor InterpolationPlayerPeriodDebug:new */
    export class InterpolationPlayerPeriodDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static shiftDown: any;

      clearOnNextRun: any;

      colTable: any;

      currentStage: any;

      currentTile: any;

      dayStamp: any;

      greyCol: any;

      historyM1: any;

      hotKeyPanels: any;

      hourStamp: any;

      isJoypadWindow: any;

      labels: any;

      monthStamp: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerInfo: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      varInfo: any;

      year: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addColor: ((_r: any, _g: any, _b: any) => any) | any;

      addLabel: ((_curX: any, _curY: any, _labelID: any, _title: any) => any) | any;

      addLabelValue:
        | ((_curX: any, _curY: any, _width: any, _type: any, _labelID: any, _title: any, _defaultVal: any) => any)
        | any;

      addVarInfo: ((_name: any, _desc: any, _min: any, _max: any, _func: any) => any) | any;

      clear: (() => any) | any;

      getTitleLabel: ((_labelID: any) => any) | any;

      getValueLabel: ((_labelID: any) => any) | any;

      initVariables: (() => any) | any;

      onButtonToggle: ((_btn: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onResize: (() => any) | any;

      setPlayer: ((player: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      updateValues: (() => any) | any;

      static OnOpenPanel: ((player: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.InterpolationPlayerPeriodDebug {}
}
