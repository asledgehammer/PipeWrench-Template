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
 * File generated at: 2022-07-29T08:39:01.027Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsUserlogUI:new */
    export class ISPlayerStatsUserlogUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLog: any;

      chr: any;

      listHeaderColor: any;

      ok: any;

      onclick: any;

      removeLog: any;

      target: any;

      userlogList: any;

      userlogs: any;

      variableColor: any;

      windows: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, player: any, userlogs: any);

      create: (() => any) | any;

      drawLog: ((y: any, item: any, alt: any) => any) | any;

      onAddLog: ((button: any, player: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onRemoveLog: ((button: any, player: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      static populateLogList: ((self: any) => any) | any;

      static receiveUserLog: ((username: any, logs: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}
}
