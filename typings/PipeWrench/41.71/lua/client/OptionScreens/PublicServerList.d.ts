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
 * File generated at: 2022-07-29T08:39:01.618Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor PublicServerList:new */
    export class PublicServerList extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static refreshTime: any;

      addBtn: any;

      backButton: any;

      connecting: any;

      descEntry: any;

      descLabel: any;

      emptyServer: any;

      eraseBtn: any;

      failMessage: any;

      filterBottomPad: any;

      filterEntry: any;

      filterLabel: any;

      filterPadX: any;

      filterUI: any;

      filterX: any;

      hasVisibleItem: any;

      itemheightoverride: any;

      javaObject: any;

      largeServer: any;

      listbox: any;

      NoLabel: any;

      passwordEntry: any;

      passwordLabel: any;

      playButton: any;

      portEntry: any;

      portLabel: any;

      pwdProtected: any;

      refreshBtn: any;

      savedBtn: any;

      scrollPanel: any;

      serverEntry: any;

      serverLabel: any;

      serverNameEntry: any;

      serverNameLabel: any;

      serverPasswordEntry: any;

      showCountdownForJoin: any;

      tabs: any;

      usernameEntry: any;

      usernameLabel: any;

      versionCheckBox: any;

      whitelistServer: any;

      constructor(x: any, y: any, width: any, height: any);

      addServer: (() => any) | any;

      addServerToList: ((server: any) => any) | any;

      canConnect: (() => any) | any;

      checkFields: (() => any) | any;

      clickNext: (() => any) | any;

      countMods: ((modString: any) => any) | any;

      create: (() => any) | any;

      drawMap: ((y: any, item: any, alt: any) => any) | any;

      emptyServerFile: ((server: any, append: any) => any) | any;

      erase: (() => any) | any;

      fillFields: ((item: any) => any) | any;

      instantiate: (() => any) | any;

      layoutFilterUI: (() => any) | any;

      onCheckLargeServerOption: (() => any) | any;

      onClickServer: ((item: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocus_RightPanel: ((joypadData: any) => any) | any;

      onJoypadDirLeft_RightPanel: ((joypadData: any) => any) | any;

      onJoypadDirRight_ListBox: ((joypadData: any) => any) | any;

      onJoypadDown_ListBox: ((button: any, joypadData: any) => any) | any;

      onJoypadDown_RightPanel: ((button: any, joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus_RightPanel: ((joypadData: any) => any) | any;

      onMouseDown_Tabs: ((x: any, y: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      refreshList: (() => any) | any;

      setServerDescription: ((item: any) => any) | any;

      setServerMods: ((item: any) => any) | any;

      sortList: (() => any) | any;

      trimFields: ((item: any) => any) | any;

      writeServerOnFile: ((server: any, append: any) => any) | any;

      static OnSteamRefreshInternetServers: (() => any) | any;

      static OnSteamRulesRefreshComplete: ((host: any, port: any, rules: any) => any) | any;

      static OnSteamServerResponded: ((serverIndex: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.PublicServerList {}
}
