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
 * File generated at: 2022-07-29T08:39:00.567Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRichTextPanel:new */
    export class ISRichTextPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autosetheight: any;

      b: any;

      clip: any;

      contentTransparency: any;

      currentLine: any;

      defaultFont: any;

      font: any;

      fonts: any;

      g: any;

      imageCount: any;

      imageH: any;

      images: any;

      imageW: any;

      imageX: any;

      imageY: any;

      indent: any;

      keybinds: any;

      lines: any;

      lineX: any;

      lineY: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      maxLines: any;

      orient: any;

      r: any;

      rgb: any;

      rgbCurrent: any;

      rgbStack: any;

      text: any;

      textB: any;

      textDirty: any;

      textG: any;

      textR: any;

      constructor(x: any, y: any, width: any, height: any);

      onMouseWheel: ((del: any) => any) | any;

      onResize: (() => any) | any;

      paginate: (() => any) | any;

      processCommand: ((command: any, x: any, y: any, lineImageHeight: any, lineHeight: any) => any) | any;

      render: (() => any) | any;

      replaceKeyName: ((text: any, offset: any) => any) | any;

      replaceKeyNames: ((text: any) => any) | any;

      setContentTransparency: ((alpha: any) => any) | any;

      setMargins: ((left: any, top: any, right: any, bottom: any) => any) | any;

      setText: ((text: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRichTextPanel {}
}
