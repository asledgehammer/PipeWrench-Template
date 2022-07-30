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
 * File generated at: 2022-07-29T08:39:00.122Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.AdminPanel.LootZed {
    export class LootZedTool {
      private constructor();

      static [id: string]: any;

      static SpawnItemCheckerList: any;

      static doRollItem_CalcChances:
        | ((containerDist: any, arg1: any, arg2: any, character: any, arg4: any, isJunk: any, arg6: any) => any)
        | any;

      static fillContainer_CalcChances: ((container: any, player: any) => any) | any;

      static fillContainerType_CalcChances: ((roomDist: any, container: any, roomName: any, player: any) => any) | any;

      static rollItem_CalcChances:
        | ((containerDist: any, container: any, doItemContainer: any, player: any, roomDist: any) => any)
        | any;

      static rollProceduralItem_CalcChances:
        | ((proceduralItems: any, container: any, arg2: any, character: any, roomDist: any) => any)
        | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.LootZed.SpawnRateChecker {}
}
