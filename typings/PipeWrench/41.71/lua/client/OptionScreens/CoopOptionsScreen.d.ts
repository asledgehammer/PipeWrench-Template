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
 * File generated at: 2022-07-29T08:39:01.503Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopOptionsScreen:new */
    export class CoopOptionsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      abortButton: any;

      accountNameEntry: any;

      backButton: any;

      deletePlayerButton: any;

      deleteWorldButton: any;

      itemheightoverride: any;

      javaObject: any;

      memoryComboBox: any;

      memoryToIndex: any;

      panel: any;

      richText: any;

      selected: any;

      serverStatus: any;

      settingsButton: any;

      settingsComboBox: any;

      softreset: any;

      softResetButton: any;

      startButton: any;

      uiStatus: any;

      worldVersion: any;

      constructor(x: any, y: any, width: any, height: any);

      aboutToShow: (() => any) | any;

      checkPlayerExists: (() => any) | any;

      checkWorldExists: (() => any) | any;

      checkWorldVersion: (() => any) | any;

      create: (() => any) | any;

      getPlayerSaveFolder: (() => any) | any;

      getServerSaveFolder: (() => any) | any;

      instantiate: (() => any) | any;

      loadOptions: (() => any) | any;

      onAbortButtonDown: ((button: any, x: any, y: any) => any) | any;

      onBackButtonDown: ((button: any, x: any, y: any) => any) | any;

      onDeletePlayer: (() => any) | any;

      onDeletePlayerStep2: ((button: any, joypadData: any) => any) | any;

      onDeleteWorld: (() => any) | any;

      onDeleteWorldStep2: ((button: any, joypadData: any) => any) | any;

      onEditSettings: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMemorySelected: (() => any) | any;

      onSettingsSelected: (() => any) | any;

      onSoftReset: (() => any) | any;

      onSoftResetStep2: ((button: any, joypadData: any) => any) | any;

      onStartButtonDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      saveOptions: (() => any) | any;

      static OnConnected: (() => any) | any;

      static OnConnectFailed: ((message: any) => any) | any;

      static OnConnectionStateChanged: ((state: any, message: any) => any) | any;

      static onCoopServerMessage: ((tag: any, cookie: any, payload: any) => any) | any;
    }

    /** @customConstructor CoopOptionsScreenPanel:new */
    export class CoopOptionsScreenPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      oldJoypadIndex: any;

      oldJoypadIndexY: any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;
    }

    export class CoopConnection {
      private constructor();

      static [id: string]: any;

      static memory: any;

      static servername: any;

      static serverPassword: any;

      static username: any;
    }
  }
  export namespace lua.client.OptionScreens.CoopOptionsScreen {}
}
