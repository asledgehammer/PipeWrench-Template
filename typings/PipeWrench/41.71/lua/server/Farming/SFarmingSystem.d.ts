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
 * File generated at: 2022-07-29T08:38:59.755Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.Farming {
    /** @customConstructor SFarmingSystem:new */
    export class SFarmingSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      hourElapsedForWater: any;

      hoursElapsed: any;

      previousHour: any;

      previousHourHealth: any;

      constructor();

      changeHealth: (() => any) | any;

      checkPlant: (() => any) | any;

      convertOldModData: (() => any) | any;

      destroyOnWalk: ((luaObject: any) => any) | any;

      diseaseClosePlant: ((luaObject: any) => any) | any;

      diseaseThis: ((luaObject: any, checkClosePlant: any) => any) | any;

      EveryTenMinutes: (() => any) | any;

      getHealth: (() => any) | any;

      growPlant: ((luaObject: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      harvest: ((luaObject: any, player: any) => any) | any;

      isValidModData: ((modData: any) => any) | any;

      lowerWaterLvlAndUpDisease: (() => any) | any;

      plow: ((square: any) => any) | any;

      receiveCommand: ((playerObj: any, command: any, args: any) => any) | any;

      removePlant: ((luaObject: any) => any) | any;

      removeTallGrass: ((sq: any) => any) | any;
    }
  }
  export namespace lua.server.Farming.SFarmingSystem {}
}
