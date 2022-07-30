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
 * File generated at: 2022-07-29T08:39:00.762Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISWindow:new */
    export class ISWindow extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      hasClose: any;

      mDownX: any;

      mDownY: any;

      resizing: any;

      title: any;

      toolbars: any;

      constructor(title: any, x: any, y: any, width: any, height: any);

      addToolbar: ((toolbar: any, height: any) => any) | any;

      getClientBottom: (() => any) | any;

      getClientHeight: (() => any) | any;

      getClientLeft: (() => any) | any;

      getClientRight: (() => any) | any;

      getClientTop: (() => any) | any;

      getClientWidth: (() => any) | any;

      getNClientTop: (() => any) | any;

      getTotalToolbarHeight: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      removeToolbar: ((toolbar: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISWindow {}
}
