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
 * File generated at: 2022-07-29T08:39:00.037Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemsListTable:new */
    export class ISItemsListTable extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonAdd1: any;

      buttonAdd2: any;

      buttonAdd5: any;

      buttonAddMultiple: any;

      buttonBorderColor: any;

      datas: any;

      filters: any;

      filterWidgetMap: any;

      filterWidgets: any;

      listHeaderColor: any;

      totalResult: any;

      viewer: any;

      constructor(x: any, y: any, width: any, height: any, viewer: any);

      addItem: ((item: any) => any) | any;

      createChildren: (() => any) | any;

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      filterCategory: ((widget: any, scriptItem: any) => any) | any;

      filterDisplayCategory: ((widget: any, scriptItem: any) => any) | any;

      filterName: ((widget: any, scriptItem: any) => any) | any;

      filterType: ((widget: any, scriptItem: any) => any) | any;

      initList: ((module: any) => any) | any;

      onAddItem: ((button: any, item: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onOtherKey: ((key: any) => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      static onFilterChange: ((widget: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemsListTable {}
}
