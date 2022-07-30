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
 * File generated at: 2022-07-29T08:39:01.729Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISVolumeBar:new */
    export class ISVolumeBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dimChange: any;

      dragInside: any;

      elBackgroundColor: any;

      elBorderColor: any;

      elBorderHighlightColor: any;

      elHighlightColor: any;

      elHoverColor: any;

      enableControls: any;

      fontheight: any;

      greyCol: any;

      hoverVolume: any;

      innerMargin: any;

      joyMeter: any;

      mouseEnabled: any;

      onVolumeChange: any;

      onVolumeChangeTarget: any;

      posChange: any;

      volume: any;

      volumeSteps: any;

      constructor(x: any, y: any, width: any, height: any, onVolumeChange: any, onVolumeChangeTarget: any);

      createChildren: (() => any) | any;

      getHoverVolume: (() => any) | any;

      getVolume: (() => any) | any;

      getVolumeFromXPosition: ((_x: any) => any) | any;

      getVolumeSteps: (() => any) | any;

      isDragging: (() => any) | any;

      render: (() => any) | any;

      resetHoverVolume: (() => any) | any;

      setEnableControls: ((b: any) => any) | any;

      setHeight: ((h: any) => any) | any;

      setHoverVolume: ((_vol: any) => any) | any;

      setVolume: ((vol: any) => any) | any;

      setVolumeJoypad: ((_up: any) => any) | any;

      setVolumeSteps: ((vol: any) => any) | any;

      setWidth: ((w: any) => any) | any;

      setX: ((x: any) => any) | any;

      setY: ((y: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISVolumeBar {}
}
