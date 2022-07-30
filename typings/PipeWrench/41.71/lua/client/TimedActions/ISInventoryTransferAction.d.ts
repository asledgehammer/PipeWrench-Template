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
 * File generated at: 2022-07-29T08:39:02.229Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISInventoryTransferAction:new */
    export class ISInventoryTransferAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      static putSound: any;

      static putSoundTime: any;

      allowMissingItems: any;

      destContainer: any;

      dontAdd: any;

      item: any;

      jobType: any;

      loopedAction: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      queueList: any;

      selectedContainer: any;

      srcContainer: any;

      transactions: any;

      constructor(character: any, item: any, srcContainer: any, destContainer: any, time: any);

      canDropOnFloor: ((square: any) => any) | any;

      canMergeAction: ((action: any) => any) | any;

      checkQueueList: (() => any) | any;

      countItemsRecursive: ((_containerList: any, _itemsNum: any) => any) | any;

      doActionAnim: ((cont: any) => any) | any;

      findRootInventory: ((_inventory: any) => any) | any;

      floorHasRoomFor: ((square: any, item: any) => any) | any;

      getExtraLogData: (() => any) | any;

      getNotFullFloorSquare: ((item: any) => any) | any;

      getTimeDelta: (() => any) | any;

      isAlreadyTransferred: ((item: any) => any) | any;

      removeItemOnCharacter: (() => any) | any;

      setAllowMissingItems: ((allow: any) => any) | any;

      setOnComplete:
        | ((func: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any) => any)
        | any;

      startActionAnim: (() => any) | any;

      transferItem: ((item: any) => any) | any;

      static GetDropItemOffset: ((character: any, square: any, item: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISInventoryTransferAction {}
}
