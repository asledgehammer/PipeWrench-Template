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
 * File generated at: 2022-07-29T08:39:02.391Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTimedActionQueue:new */
    export class ISTimedActionQueue extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      current: any;

      queue: any;

      constructor(character: any);

      addToQueue: ((action: any) => any) | any;

      clearQueue: (() => any) | any;

      indexOf: ((action: any) => any) | any;

      onCompleted: ((action: any) => any) | any;

      removeFromQueue: ((action: any) => any) | any;

      resetQueue: (() => any) | any;

      tick: (() => any) | any;

      static add: ((action: any) => any) | any;

      static addAfter: ((previousAction: any, action: any) => any) | any;

      static clear: ((character: any) => any) | any;

      static getTimedActionQueue: ((character: any) => any) | any;

      static hasAction: ((action: any) => any) | any;

      static isPlayerDoingAction: ((playerObj: any) => any) | any;

      static onTick: (() => any) | any;

      static queueActions:
        | ((
            character: any,
            addActionsFunction: any,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any,
            arg7: any,
            arg8: any,
            arg9: any,
            arg10: any
          ) => any)
        | any;
    }
  }
  export namespace lua.client.TimedActions.ISTimedActionQueue {}
}
