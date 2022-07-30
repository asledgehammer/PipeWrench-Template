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
 * File generated at: 2022-07-29T08:39:01.683Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.RadioCom {
    /** @customConstructor ISRadioAction:new */
    export class ISRadioAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      deviceData: any;

      mode: any;

      secondaryItem: any;

      constructor(mode: any, character: any, device: any, secondaryItem: any);

      isValidAddBattery: (() => any) | any;

      isValidAddHeadphones: (() => any) | any;

      isValidAddMedia: (() => any) | any;

      isValidMuteMicrophone: (() => any) | any;

      isValidMuteVolume: (() => any) | any;

      isValidRemoveBattery: (() => any) | any;

      isValidRemoveHeadphones: (() => any) | any;

      isValidRemoveMedia: (() => any) | any;

      isValidSetChannel: (() => any) | any;

      isValidSetVolume: (() => any) | any;

      isValidToggleOnOff: (() => any) | any;

      isValidTogglePlayMedia: (() => any) | any;

      isValidUnMuteVolume: (() => any) | any;

      performAddBattery: (() => any) | any;

      performAddHeadphones: (() => any) | any;

      performAddMedia: (() => any) | any;

      performMuteMicrophone: (() => any) | any;

      performMuteVolume: (() => any) | any;

      performRemoveBattery: (() => any) | any;

      performRemoveHeadphones: (() => any) | any;

      performRemoveMedia: (() => any) | any;

      performSetChannel: (() => any) | any;

      performSetVolume: (() => any) | any;

      performToggleOnOff: (() => any) | any;

      performTogglePlayMedia: (() => any) | any;

      performUnMuteVolume: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISRadioAction {}
}
