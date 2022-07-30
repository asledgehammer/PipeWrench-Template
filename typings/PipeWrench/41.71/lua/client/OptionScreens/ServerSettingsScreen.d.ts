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
 * File generated at: 2022-07-29T08:39:01.646Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor BaseServerSettingsPanel:new */
    export class BaseServerSettingsPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;
    }

    /** @customConstructor ServerSettingsScreen:new */
    export class ServerSettingsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      joyfocus: any;

      pageDelete: any;

      pageDuplicate: any;

      pageEdit: any;

      pageNew: any;

      pageRename: any;

      pageSpawnPoints: any;

      pageStart: any;

      constructor(x: any, y: any, width: any, height: any);

      aboutToShow: (() => any) | any;

      create: (() => any) | any;

      getCurrentFocusForController: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      static getSandboxSettingsTable: (() => any) | any;
    }

    /** @customConstructor SpawnRegionsNameFilePanel:new */
    export class SpawnRegionsNameFilePanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      entryFile: any;

      entryName: any;

      joyfocus: any;

      joypadFocused: any;

      selectedItem: any;

      constructor(x: any, y: any, width: any);

      createChildren: (() => any) | any;

      onFileEntered: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDownInParent: ((button: any, joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onNameEntered: (() => any) | any;

      render: (() => any) | any;

      setJoypadFocused: ((focused: any, joypadData: any) => any) | any;
    }

    export class DefaultServerSettings {
      private constructor();

      static [id: string]: any;

      insertUnique: ((_table: any, value: any) => any) | any;

      setDefaultsFromSingleplayer: ((settings: any) => any) | any;

      setServerOptionValue: ((settings: any, option: any, _table: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ServerSettingsScreen {}
}
