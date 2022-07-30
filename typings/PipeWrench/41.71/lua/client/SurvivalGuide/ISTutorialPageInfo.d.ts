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
 * File generated at: 2022-07-29T08:39:01.950Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor ISTutorialPageInfo:new */
    export class ISTutorialPageInfo extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      data: any;

      moreTextInfo: any;

      nextcondition: any;

      text: any;

      title: any;

      constructor(title: any, text: any, moreTextInfo: any, nextcondition: any);
    }

    /** @customConstructor ISTutorialSetInfo:new */
    export class ISTutorialSetInfo extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      currentPage: any;

      pageCount: any;

      pages: any;

      constructor();

      addPage: ((pagetitle: any, pagetext: any, moreTextInfo: any, pagenextcondition: any) => any) | any;

      applyPageToRichTextPanel: ((tutorialPanel: any) => any) | any;

      getCurrent: (() => any) | any;

      hasNext: (() => any) | any;

      hasPrevious: (() => any) | any;

      update: ((tutorialPanel: any) => any) | any;
    }
  }
  export namespace lua.client.SurvivalGuide.ISTutorialPageInfo {}
}
