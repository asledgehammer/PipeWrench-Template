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
 * File generated at: 2022-07-29T08:39:02.235Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLightActions:new */
    export class ISLightActions extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      lightswitch: any;

      mode: any;

      constructor(mode: any, character: any, lightswitch: any, item: any);

      isValidAddBattery: (() => any) | any;

      isValidAddLightBulb: (() => any) | any;

      isValidModifyLamp: (() => any) | any;

      isValidRemoveBattery: (() => any) | any;

      isValidRemoveLightBulb: (() => any) | any;

      performAddBattery: (() => any) | any;

      performAddLightBulb: (() => any) | any;

      performModifyLamp: (() => any) | any;

      performRemoveBattery: (() => any) | any;

      performRemoveLightBulb: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISLightActions {}
}
