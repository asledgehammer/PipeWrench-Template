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
 * File generated at: 2022-07-29T08:38:59.222Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ClimateDebug:new */
    export class ClimateDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static eventsAdded: any;

      static instance: any;

      static shiftDown: any;

      buttonD1: any;

      buttonH1: any;

      buttonM1: any;

      chartLabelsLeft: any;

      chartLabelsLeftTxt: any;

      chartLabelsRight: any;

      chartLabelsRightTxt: any;

      charts: any;

      colTable: any;

      currentTile: any;

      dayStamp: any;

      greyCol: any;

      historyD1: any;

      historyH1: any;

      historyM1: any;

      hotKeyPanels: any;

      hourStamp: any;

      isJoypadWindow: any;

      monthStamp: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      varInfo: any;

      year: any;

      yearStamp: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addColor: ((_r: any, _g: any, _b: any) => any) | any;

      addVarInfo: ((_name: any, _desc: any, _min: any, _max: any, _func: any) => any) | any;

      clear: (() => any) | any;

      initVariables: (() => any) | any;

      onButton: ((_btn: any) => any) | any;

      onButtonToggle: ((_btn: any) => any) | any;

      onResize: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      updateValues: ((_mgr: any) => any) | any;

      static OnClimateTickDebug: ((mgr: any) => any) | any;

      static OnOpenPanel: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ClimateDebug {}
}
