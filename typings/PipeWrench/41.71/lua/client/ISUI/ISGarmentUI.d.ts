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
 * File generated at: 2022-07-29T08:39:00.338Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGarmentUI:new */
    export class ISGarmentUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      addedHeight: any;

      biteColumn: any;

      bodyPartColumn: any;

      bulletColumn: any;

      chr: any;

      clothing: any;

      drawJoypadFocus: any;

      fgBar: any;

      listbox: any;

      noRepairWidth: any;

      parts: any;

      playerNum: any;

      progressHeight: any;

      progressWidth: any;

      progressWidth1: any;

      progressWidth2: any;

      progressWidth3: any;

      progressWidthTotal: any;

      progressX1: any;

      progressX2: any;

      progressX3: any;

      progressY: any;

      scratchColumn: any;

      sex: any;

      textures: any;

      texturesHeight: any;

      texturesY: any;

      texturesYOffset: any;

      constructor(x: any, y: any, character: any, clothing: any);

      addTextures: ((type: any, textureName: any, overlayName: any) => any) | any;

      calcColumnWidths: (() => any) | any;

      calcProgressPositions: (() => any) | any;

      calcProgressWidths: (() => any) | any;

      calculateHeight: ((doListHeight: any) => any) | any;

      create: (() => any) | any;

      doContextMenu: ((part: any, x: any, y: any) => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doPatch: ((fabric: any, thread: any, needle: any, part: any, context: any, submenu: any) => any) | any;

      getPaddablePartsNumber: ((clothing: any, parts: any) => any) | any;

      onBodyPartListRightMouseUp: ((x: any, y: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISGarmentUI {}
}
