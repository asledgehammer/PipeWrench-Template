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
 * File generated at: 2022-07-29T08:39:02.668Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleSeatUI:new */
    export class ISVehicleSeatUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      characterSeat: any;

      close: any;

      joypadSeat: any;

      mouseOverExit: any;

      mouseOverSeat: any;

      playerNum: any;

      richText: any;

      seatText: any;

      vehicle: any;

      constructor(x: any, y: any, character: any);

      centerOnScreen: (() => any) | any;

      closeSelf: (() => any) | any;

      createChildren: (() => any) | any;

      exitSeat: ((seat: any) => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      isSeatInstalled: ((seat: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;

      update: (() => any) | any;

      useSeat: ((seat: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleSeatUI {}
}
