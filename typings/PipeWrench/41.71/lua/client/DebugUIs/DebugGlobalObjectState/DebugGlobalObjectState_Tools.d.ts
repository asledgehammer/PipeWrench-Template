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
 * File generated at: 2022-07-29T08:38:59.142Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectStateUI_DragCameraTool:new */
    export class DebugGlobalObjectStateUI_DragCameraTool extends lua.client.DebugUIs.DebugChunkState
      .DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      mouseDown: any;

      startDragX: any;

      startDragY: any;

      startScreenX: any;

      startScreenY: any;

      constructor(ui: any);
    }

    /** @customConstructor DebugGlobalObjectStateUI_Tool:new */
    export class DebugGlobalObjectStateUI_Tool extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      ui: any;

      constructor(ui: any);

      java0: ((func: any) => any) | any;

      java1: ((func: any, arg0: any) => any) | any;

      java2: ((func: any, arg0: any, arg1: any) => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      onMouseMove: ((dx: any, dy: any) => any) | any;

      onMouseUp: ((x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectState_Tools {}
}
