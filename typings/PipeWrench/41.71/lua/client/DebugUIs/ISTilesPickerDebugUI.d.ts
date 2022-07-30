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
 * File generated at: 2022-07-29T08:38:59.549Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISTilesPickerDebugUI:new */
    export class ISTilesPickerDebugUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      arrow: any;

      chr: any;

      cursor: any;

      filesList: any;

      marker: any;

      moveWithMouse: any;

      playerNum: any;

      selectX: any;

      selectY: any;

      selectZ: any;

      tilesList: any;

      constructor(x: any, y: any, character: any, square: any);

      addMarker: ((square: any, radius: any) => any) | any;

      drawTilesetList: ((y: any, item: any, alt: any) => any) | any;

      onSelectNewSquare: (() => any) | any;

      onSquareSelected: ((square: any) => any) | any;

      populateList: (() => any) | any;

      removeMarker: (() => any) | any;
    }

    /** @customConstructor ISTilesPickerTilesList:new */
    export class ISTilesPickerTilesList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tileset: any;

      constructor(x: any, y: any, w: any, h: any);

      onMouseWheel: ((del: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISTilesPickerDebugUI {}
}
