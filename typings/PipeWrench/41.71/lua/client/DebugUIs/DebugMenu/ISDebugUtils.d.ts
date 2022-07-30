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
 * File generated at: 2022-07-29T08:38:59.384Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu {
    export class ISDebugUtils {
      private constructor();

      static [id: string]: any;

      static addButton:
        | ((_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _title: any, _func: any) => any)
        | any;

      static addComboBox: ((_self: any, _data: any, _x: any, _y: any, _w: any, _font: any, _func: any) => any) | any;

      static addHorzBar: ((_self: any, _y: any) => any) | any;

      static addLabel: ((_self: any, _data: any, _x: any, _y: any, _title: any, _font: any, _bLeft: any) => any) | any;

      static addSlider: ((_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _func: any) => any) | any;

      static addTextEntryBox: ((_self: any, _data: any, _title: any, _x: any, _y: any, _w: any, _h: any) => any) | any;

      static addTickBox:
        | ((_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _title: any, options: any, _func: any) => any)
        | any;

      static clamp01: ((_n: any) => any) | any;

      static initHorzBars: ((_self: any, _x: any, _width: any) => any) | any;

      static onMouseWheel: ((self: any, del: any) => any) | any;

      static printval: ((_v: any, _d: any) => any) | any;

      static renderHorzBars: ((_self: any) => any) | any;

      static roundNum: ((num: any, numDecimalPlaces: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.ISDebugUtils {}
}
