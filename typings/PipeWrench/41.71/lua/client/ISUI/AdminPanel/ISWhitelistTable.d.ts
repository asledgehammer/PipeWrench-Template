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
 * File generated at: 2022-07-29T08:39:00.106Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISWhitelistTable:new */
    export class ISWhitelistTable extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      columnSize: any;

      combo: any;

      currentPage: any;

      datas: any;

      entriesPerPages: any;

      entry: any;

      filtered: any;

      filters: any;

      fullPages: any;

      listHeaderColor: any;

      loading: any;

      nbrPerPageLbl: any;

      nbrPerPages: any;

      nextPage: any;

      pageLbl: any;

      pagePanel: any;

      pages: any;

      pagesLbl: any;

      prePage: any;

      schema: any;

      tableName: any;

      totalResult: any;

      constructor(x: any, y: any, width: any, height: any, tableName: any);

      clear: (() => any) | any;

      clearFilters: (() => any) | any;

      computeResult: ((datas: any) => any) | any;

      createChildren: (() => any) | any;

      doPagesButtons: (() => any) | any;

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onOptionPage: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      static getTableResult: ((datas: any, rowId: any, tableName: any) => any) | any;

      static onFilterChange: ((entry: any, combo: any) => any) | any;

      static onNbrPerPageChange: ((entry: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistTable {}
}
