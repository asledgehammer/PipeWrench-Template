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
 * File generated at: 2022-07-29T08:39:02.620Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleHSV:new */
    export class ISVehicleHSV extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      colorHue: any;

      colorSaturation: any;

      colorValue: any;

      nextSkinButton: any;

      script: any;

      scriptName: any;

      vehicle: any;

      constructor(playerObj: any);

      addLabel: ((_x: any, _y: any, _title: any, _font: any, _bLeft: any) => any) | any;

      addSlider: ((_x: any, _y: any, _w: any, _h: any, _func: any) => any) | any;

      callbackAngleX: ((value: any, slider: any) => any) | any;

      callbackAngleY: ((value: any, slider: any) => any) | any;

      callbackAngleZ: ((value: any, slider: any) => any) | any;

      clearVehicle: (() => any) | any;

      onButtonBlack: (() => any) | any;

      onButtonBlue: (() => any) | any;

      onButtonNextSkin: (() => any) | any;

      onButtonOther: (() => any) | any;

      onButtonRed: (() => any) | any;

      onButtonWhite: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleColor {}
}
