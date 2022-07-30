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
 * File generated at: 2022-07-29T08:39:00.449Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLiteratureList:new */
    export class ISLiteratureList extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      constructor(x: any, y: any, width: any, height: any, character: any);
    }

    /** @customConstructor ISLiteratureMediaList:new */
    export class ISLiteratureMediaList extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      scriptItem: any;

      constructor(x: any, y: any, width: any, height: any, character: any);
    }

    /** @customConstructor ISLiteratureUI:new */
    export class ISLiteratureUI extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      drawJoypadFocus: any;

      listbox1: any;

      listbox2: any;

      listboxMedia: any;

      owner: any;

      playerNum: any;

      tabs: any;

      constructor(x: any, y: any, width: any, height: any, character: any, owner: any);

      close: (() => any) | any;

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((button: any) => any) | any;

      onJoypadDirUp: ((button: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      prerender: (() => any) | any;

      setLists: (() => any) | any;

      setMediaLists: ((scriptItems: any) => any) | any;

      static SetItemHidden: ((fullType: any, hidden: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISLiteratureUI {}
}
