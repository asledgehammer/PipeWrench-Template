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
 * File generated at: 2022-07-29T08:38:59.481Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.WorldFlares {
    /** @customConstructor WorldFlaresDebug:new */
    export class WorldFlaresDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      colBoxWidth: any;

      colExt: any;

      colExtBoxY: any;

      colInt: any;

      colIntBoxY: any;

      entryBoxLifeTime: any;

      entryBoxRange: any;

      entryBoxWindspeed: any;

      flareCount: any;

      flareID: any;

      flaresList: any;

      infoWidth: any;

      infoX: any;

      infoY: any;

      panelTitle: any;

      variableColor: any;

      windowY: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawFlaresList: ((y: any, item: any, alt: any) => any) | any;

      onClickAddFlare: (() => any) | any;

      onClickClose: (() => any) | any;

      onClickDeleteFlares: (() => any) | any;

      OnFlaresListMouseDown: ((item: any) => any) | any;

      onSliderChange: ((_newVal: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      populateList: (() => any) | any;

      update: (() => any) | any;

      static OnOpenPanel: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.WorldFlares.WorldFlaresDebug {}
}
