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
 * File generated at: 2022-07-29T08:39:02.554Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared.Util {
    /** @customConstructor LuaList:new */
    export class LuaList extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      count: any;

      items: any;

      constructor();

      add: ((item: any) => any) | any;

      addAll: ((list: any) => any) | any;

      clear: (() => any) | any;

      contains: ((item: any) => any) | any;

      foreach: ((func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      get: ((index: any) => any) | any;

      isEmpty: (() => any) | any;

      pop: (() => any) | any;

      remove: ((item: any) => any) | any;

      removeAt: ((index: any) => any) | any;

      removeRandom: (() => any) | any;

      size: (() => any) | any;

      sort: ((f: any) => any) | any;
    }
  }
  export namespace lua.shared.Util.LuaList {}
}
