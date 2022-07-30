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
 * File generated at: 2022-07-29T08:39:00.743Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUIWriteJournal:new */
    export class ISUIWriteJournal extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      currentPage: any;

      defaultEntryText: any;

      deleteButton: any;

      editable: any;

      entry: any;

      fontHgt: any;

      ISButtonA: any;

      ISButtonB: any;

      isUnlocked: any;

      joypadButtons: any;

      joypadButtonsY: any;

      joypadIndex: any;

      joypadIndexY: any;

      lineNumber: any;

      lockButton: any;

      locked: any;

      maxTextLength: any;

      name: any;

      newPage: any;

      nextPage: any;

      no: any;

      notebook: any;

      numberOfPages: any;

      onclick: any;

      pageLabel: any;

      playerNum: any;

      previousPage: any;

      target: any;

      text: any;

      yes: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        target: any,
        onclick: any,
        character: any,
        notebook: any,
        defaultEntryText: any,
        title: any,
        lineNumber: any,
        editable: any,
        numberOfPages: any
      );

      close: (() => any) | any;

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;

      setJoypadButtons: ((joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISUIWriteJournal {}
}
