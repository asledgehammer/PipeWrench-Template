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
 * File generated at: 2022-07-29T08:39:00.527Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRadialMenu:new */
    export class ISRadialMenu extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      hideWhenButtonReleased: any;

      innerRadius: any;

      javaObject: any;

      outerRadius: any;

      playerNum: any;

      slices: any;

      constructor(x: any, y: any, innerRadius: any, outerRadius: any, playerNum: any);

      addSlice:
        | ((
            text: any,
            texture: any,
            command: any,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any
          ) => any)
        | any;

      center: (() => any) | any;

      clear: (() => any) | any;

      getSliceCommand: ((sliceIndex: any) => any) | any;

      instantiate: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadButtonReleased: ((button: any, joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      setHideWhenButtonReleased: ((button: any) => any) | any;

      setSliceText: ((sliceIndex: any, text: any) => any) | any;

      setSliceTexture: ((sliceIndex: any, texture: any) => any) | any;

      undisplay: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRadialMenu {}
}
