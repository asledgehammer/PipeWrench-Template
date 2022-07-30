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
 * File generated at: 2022-07-29T08:39:01.692Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.RadioCom {
    /** @customConstructor ISRadioWindow:new */
    export class ISRadioWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      deviceData: any;

      deviceType: any;

      drawJoypadFocus: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      modules: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addModule: ((_modulePanel: any, _moduleName: any, _enable: any) => any) | any;

      clear: (() => any) | any;

      focusNext: ((_up: any) => any) | any;

      focusSelf: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      readFromObject: ((_player: any, _deviceObject: any) => any) | any;

      setSubFocus: ((_newFocus: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      unfocusSelf: (() => any) | any;

      update: (() => any) | any;

      static activate: ((_player: any, _deviceObject: any) => any) | any;

      static onEquip: ((_player: any, _item: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISRadioWindow {}
}
