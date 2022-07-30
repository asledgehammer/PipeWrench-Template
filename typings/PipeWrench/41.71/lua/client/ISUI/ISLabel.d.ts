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
 * File generated at: 2022-07-29T08:39:00.427Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLabel:new */
    export class ISLabel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      a: any;

      b: any;

      backgroundColor: any;

      borderColor: any;

      center: any;

      font: any;

      g: any;

      joypadFocused: any;

      joypadTexture: any;

      left: any;

      mouseOver: any;

      name: any;

      originalX: any;

      r: any;

      tooltip: any;

      tooltipUI: any;

      translation: any;

      constructor(x: any, y: any, height: any, name: any, r: any, g: any, b: any, a: any, font: any, bLeft: any);

      getName: (() => any) | any;

      setColor: ((r: any, g: any, b: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setName: ((name: any) => any) | any;

      setTooltip: ((tooltip: any) => any) | any;

      setTranslation: ((translation: any) => any) | any;

      setWidthToName: ((minWidth: any) => any) | any;

      updateTooltip: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISLabel {}
}
