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
 * File generated at: 2022-07-29T08:39:00.591Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISScrollingListBox:new */
    export class ISScrollingListBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      altBgColor: any;

      columns: any;

      count: any;

      drawBorder: any;

      font: any;

      fontHgt: any;

      itemheight: any;

      itemheightoverride: any;

      itemPadY: any;

      items: any;

      javaObject: any;

      joypadFocused: any;

      listHeaderColor: any;

      listHeight: any;

      mouseoverselected: any;

      onmousedblclick: any;

      onmousedown: any;

      selected: any;

      selectedBeforeReset: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      target: any;

      tooltipUI: any;

      constructor(x: any, y: any, width: any, height: any);

      addColumn: ((columnName: any, size: any) => any) | any;

      addItem: ((name: any, item: any) => any) | any;

      clear: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      insertItem: ((index: any, name: any, item: any) => any) | any;

      instantiate: (() => any) | any;

      isMouseOverScrollBar: (() => any) | any;

      nextVisibleItem: ((index: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDoubleClick: ((x: any, y: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      prevVisibleIndex: ((index: any) => any) | any;

      removeFirst: (() => any) | any;

      removeItem: ((itemText: any) => any) | any;

      removeItemByIndex: ((itemIndex: any) => any) | any;

      render: (() => any) | any;

      rowAt: ((x: any, y: any) => any) | any;

      scrollToSelected: (() => any) | any;

      setFont: ((font: any, padY: any) => any) | any;

      setJoypadFocused: ((focused: any, joypadData: any) => any) | any;

      setOnMouseDoubleClick: ((target: any, onmousedblclick: any) => any) | any;

      setOnMouseDownFunction: ((target: any, onmousedown: any) => any) | any;

      size: (() => any) | any;

      sort: (() => any) | any;

      topOfItem: ((index: any) => any) | any;

      updateSmoothScrolling: (() => any) | any;

      updateTooltip: (() => any) | any;

      static sortByName: ((a: any, b: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISScrollingListBox {}
}
