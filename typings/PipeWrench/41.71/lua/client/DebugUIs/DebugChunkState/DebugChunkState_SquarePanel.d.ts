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
 * File generated at: 2022-07-29T08:38:59.045Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkStateUI_SquarePanel:new */
    export class DebugChunkStateUI_SquarePanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      debugChunkState: any;

      font: any;

      fontHgt: any;

      square: any;

      squareX: any;

      squareY: any;

      squareZ: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createSections: (() => any) | any;

      setSquare: ((square: any, x: any, y: any, z: any) => any) | any;
    }

    /** @customConstructor DebugChunkStateUI_SquarePropsHandler:new */
    export class DebugChunkStateUI_SquarePropsHandler extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      gameState: any;

      object: any;

      square: any;

      squareX: any;

      squareY: any;

      squareZ: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      addLine: ((text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      playerIndex: (() => any) | any;

      postrender: (() => any) | any;

      render: (() => any) | any;

      render1: (() => any) | any;

      setSquare: ((square: any, x: any, y: any, z: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_SquarePanel {}
}
