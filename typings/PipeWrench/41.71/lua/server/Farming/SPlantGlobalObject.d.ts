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
 * File generated at: 2022-07-29T08:38:59.765Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.Farming {
    /** @customConstructor SPlantGlobalObject:new */
    export class SPlantGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      aphidLvl: any;

      badCare: any;

      exterior: any;

      fertilizer: any;

      fliesLvl: any;

      hasSeed: any;

      hasVegetable: any;

      health: any;

      lastWaterHour: any;

      mildewLvl: any;

      nbOfGrow: any;

      nextGrowing: any;

      objectName: any;

      spriteName: any;

      state: any;

      typeOfSeed: any;

      waterLvl: any;

      waterNeeded: any;

      waterNeededMax: any;

      constructor(luaSystem: any, globalObject: any);

      addIcon: (() => any) | any;

      addObject: (() => any) | any;

      aphid: (() => any) | any;

      canHarvest: (() => any) | any;

      checkStat: (() => any) | any;

      cureFlies: ((fliesCureSource: any, uses: any) => any) | any;

      cureMildew: ((mildewCureSource: any, uses: any) => any) | any;

      deadPlant: (() => any) | any;

      destroyThis: (() => any) | any;

      dryThis: (() => any) | any;

      fertilize: ((fertilizer: any) => any) | any;

      flies: (() => any) | any;

      fromModData: ((modData: any) => any) | any;

      fromObject: ((object: any) => any) | any;

      getObject: (() => any) | any;

      isAlive: (() => any) | any;

      loadGridSquare: (() => any) | any;

      lowerWaterLvl: ((plant: any) => any) | any;

      mildew: (() => any) | any;

      removeObject: (() => any) | any;

      rottenThis: (() => any) | any;

      saveData: (() => any) | any;

      seed: ((typeOfSeed: any) => any) | any;

      setObjectName: ((objectName: any) => any) | any;

      setSpriteName: ((spriteName: any) => any) | any;

      toModData: ((modData: any) => any) | any;

      upDisease: (() => any) | any;

      water: ((waterSource: any, uses: any) => any) | any;

      static initModData: ((modData: any) => any) | any;
    }
  }
  export namespace lua.server.Farming.SPlantGlobalObject {}
}
