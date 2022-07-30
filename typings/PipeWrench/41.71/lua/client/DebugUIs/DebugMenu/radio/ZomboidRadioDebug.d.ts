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
 * File generated at: 2022-07-29T08:38:59.445Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.radio {
    /** @customConstructor ZomboidRadioDebug:new */
    export class ZomboidRadioDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      broadcastList: any;

      buttonBorderColor: any;

      channelsList: any;

      channelsSize: any;

      currentChannel: any;

      infoList: any;

      panelTitle: any;

      radio: any;

      scriptManager: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawBroadcastList: ((y: any, item: any, alt: any) => any) | any;

      drawChannelList: ((y: any, item: any, alt: any) => any) | any;

      drawInfoList: ((y: any, item: any, alt: any) => any) | any;

      onClickClose: (() => any) | any;

      onClickRefresh: (() => any) | any;

      OnDaysListMouseDown: ((item: any) => any) | any;

      onViewScript: (() => any) | any;

      populateBroadcastList: ((_radioChannel: any) => any) | any;

      populateInfoList: ((_radioChannel: any) => any) | any;

      populateList: ((_force: any) => any) | any;

      update: (() => any) | any;

      static OnOpenPanel: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.radio.ZomboidRadioDebug {}
}
