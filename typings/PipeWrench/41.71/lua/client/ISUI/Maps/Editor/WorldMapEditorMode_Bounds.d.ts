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
 * File generated at: 2022-07-29T08:39:00.872Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Bounds:new */
    export class WorldMapEditorMode_Bounds extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      labelBounds: any;

      mode: any;

      resizeMode: any;

      resizer: any;

      snapButtons: any;

      snapMode: any;

      constructor(editor: any);

      cancelResize: (() => any) | any;

      createChildren: (() => any) | any;

      onChangeSnapMode: ((button: any) => any) | any;

      onDrawBounds: (() => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      onReset: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBounds: ((x1: any, y1: any, x2: any, y2: any) => any) | any;

      snap: ((xy: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Bounds {}
}
