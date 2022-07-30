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
 * File generated at: 2022-07-29T08:38:59.187Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Anims {
    /** @customConstructor ISAnimDebugMonitor:new */
    export class ISAnimDebugMonitor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonActiveNodes: any;

      buttonAnimTracks: any;

      buttonClearVar: any;

      buttonLayers: any;

      buttonSetVar: any;

      buttonStamps: any;

      buttonToggleMonitor: any;

      buttonVariables: any;

      cGreen: any;

      clearText: any;

      comboFloats: any;

      comboVars: any;

      cRed: any;

      currentTile: any;

      editEnabled: any;

      entryBoxValue: any;

      floatPlotter: any;

      greyCol: any;

      hotKeyPanels: any;

      init: any;

      isJoypadWindow: any;

      labelFloat: any;

      labelFloatInfo: any;

      labelVars: any;

      monitor: any;

      oldNodesVal: any;

      oldTracksVal: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      selectedVar: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      clear: (() => any) | any;

      clearLog: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onCombo: ((_combo: any) => any) | any;

      onResize: (() => any) | any;

      scrollToBottom: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      toggleEditEnabled: ((_b: any) => any) | any;

      update: (() => any) | any;

      static OnOpenPanel: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.ISAnimDebugMonitor {}
}
