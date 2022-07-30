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
 * File generated at: 2022-07-29T08:39:02.024Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBaseTimedAction:new */
    export class ISBaseTimedAction extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      action: any;

      caloriesModifier: any;

      character: any;

      maxTime: any;

      stopOnAim: any;

      stopOnRun: any;

      stopOnWalk: any;

      constructor(character: any);

      addAfter: ((action: any) => any) | any;

      adjustMaxTime: ((maxTime: any) => any) | any;

      begin: (() => any) | any;

      create: (() => any) | any;

      forceComplete: (() => any) | any;

      forceStop: (() => any) | any;

      getJobDelta: (() => any) | any;

      isValid: (() => any) | any;

      perform: (() => any) | any;

      resetJobDelta: (() => any) | any;

      setActionAnim: ((_action: any, _displayItemModels: any) => any) | any;

      setAnimVariable: ((_key: any, _val: any) => any) | any;

      setCurrentTime: ((time: any) => any) | any;

      setOverrideHandModels: ((_primaryHand: any, _secondaryHand: any, _resetModel: any) => any) | any;

      setOverrideHandModelsString: ((_primaryHand: any, _secondaryHand: any, _resetModel: any) => any) | any;

      setTime: ((time: any) => any) | any;

      start: (() => any) | any;

      stop: (() => any) | any;

      update: (() => any) | any;

      waitToStart: (() => any) | any;
    }
  }
  export namespace lua.shared.TimedActions.ISBaseTimedAction {}
}
