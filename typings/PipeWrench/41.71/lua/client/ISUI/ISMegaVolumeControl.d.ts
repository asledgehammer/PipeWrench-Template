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
 * File generated at: 2022-07-29T08:39:00.464Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISMegaVolumeControl:new */
    export class ISMegaVolumeControl extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      fade: any;

      isSlider: any;

      joypadFocused: any;

      target: any;

      targetFunc: any;

      tooltipUI: any;

      volume: any;

      constructor(x: any, y: any, width: any, height: any, target: any, targetFunc: any);

      getVolume: (() => any) | any;

      getVolumeAtX: ((x: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirRight: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setVolume: ((volume: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISMegaVolumeControl {}
}
