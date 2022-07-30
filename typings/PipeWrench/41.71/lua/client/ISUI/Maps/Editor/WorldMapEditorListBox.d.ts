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
 * File generated at: 2022-07-29T08:39:00.843Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorListBox:new */
    export class WorldMapEditorListBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      arg1: any;

      arg2: any;

      arg3: any;

      arg4: any;

      buttonAdd: any;

      buttonMoveDown: any;

      buttonMoveUp: any;

      buttonRemove: any;

      callback: any;

      listbox: any;

      selectedItem: any;

      target: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        callback: any,
        target: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any
      );

      addItem: ((text: any, data: any) => any) | any;

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      getItemByIndex: ((index: any) => any) | any;

      getListBox: (() => any) | any;

      getSelectedIndex: (() => any) | any;

      getSelectedItem: (() => any) | any;

      insertItem: ((index: any, text: any, data: any) => any) | any;

      onAddItem: (() => any) | any;

      onMoveDown: (() => any) | any;

      onMoveUp: (() => any) | any;

      onRemoveItem: (() => any) | any;

      removeItemByIndex: ((index: any) => any) | any;

      setSelectedIndex: ((index: any) => any) | any;

      size: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorListBox {}
}
