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
 * File generated at: 2022-07-29T08:39:00.204Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISButtonPrompt:new */
    export class ISButtonPrompt extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      static test: any;

      aFunc: any;

      aParams: any;

      aPrompt: any;

      background: any;

      backgroundColor: any;

      bFunc: any;

      borderColor: any;

      bParams: any;

      bPrompt: any;

      buttonA: any;

      buttonB: any;

      buttonLB: any;

      buttonRB: any;

      buttonX: any;

      buttonY: any;

      h1: any;

      h2: any;

      isLoot: any;

      lbFunc: any;

      lbParams: any;

      lbPrompt: any;

      list: any;

      lmargin: any;

      movableIconPickup: any;

      movableIconPlace: any;

      movableIconRotate: any;

      movableIconScrap: any;

      player: any;

      rbFunc: any;

      rbParams: any;

      rbPrompt: any;

      rmargin: any;

      w1: any;

      w2: any;

      x1: any;

      x2: any;

      xFunc: any;

      xParams: any;

      xPrompt: any;

      y1: any;

      y2: any;

      yFunc: any;

      yParams: any;

      yPrompt: any;

      constructor(player: any);

      climbFence: (() => any) | any;

      climbInWindow: ((window: any) => any) | any;

      climbOverWall: ((dir: any) => any) | any;

      closeWindow: ((window: any) => any) | any;

      cmdCloseVehicleDoor: ((playerObj: any, part: any) => any) | any;

      cmdEnterVehicle: ((vehicle: any, seat: any) => any) | any;

      cmdExitVehicle: (() => any) | any;

      cmdOpenVehicleDoor: ((playerObj: any, part: any) => any) | any;

      cmdShowInventory: (() => any) | any;

      cmdShowLoot: (() => any) | any;

      cmdToggleLight: ((light: any) => any) | any;

      cmdToggleStove: ((stove: any) => any) | any;

      cmdUseVehicle: ((vehicle: any, part: any) => any) | any;

      doAButtonDoorOrWindowOrWindowFrame: ((dir: any, obj: any) => any) | any;

      doBButtonDoorOrWindowOrWindowFrame: ((dir: any, obj: any) => any) | any;

      getBestAButtonAction: ((dir: any) => any) | any;

      getBestBButtonAction: ((dir: any) => any) | any;

      getBestLBButtonAction: ((dir: any) => any) | any;

      getBestRBButtonAction: ((dir: any) => any) | any;

      getBestXButtonAction: ((dir: any) => any) | any;

      getBestYButtonAction: ((dir: any) => any) | any;

      getTopOf: (() => any) | any;

      getXButtonObjects: ((dir: any) => any) | any;

      interact: ((worldobjects: any) => any) | any;

      isLootIcon: (() => any) | any;

      onAPress: (() => any) | any;

      onBPress: (() => any) | any;

      onJoypadButtonReleased: ((button: any) => any) | any;

      onLBPress: (() => any) | any;

      onRBPress: (() => any) | any;

      onXPress: (() => any) | any;

      onYPress: (() => any) | any;

      openDeviceOptions: ((device: any) => any) | any;

      openDoor: ((door: any) => any) | any;

      openWindow: ((window: any) => any) | any;

      setAPrompt: ((str: any, func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      setBPrompt: ((str: any, func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      setLBPrompt: ((str: any, func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      setRBPrompt: ((str: any, func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      setXPrompt: ((str: any, func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      setYPrompt: ((str: any, func: any, param1: any, param2: any, param3: any, param4: any) => any) | any;

      sleep: (() => any) | any;

      smashWindow: ((window: any) => any) | any;

      stopAction: (() => any) | any;

      testAButtonAction: ((dir: any) => any) | any;

      testBButtonAction: ((dir: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISButtonPrompt {}
}
