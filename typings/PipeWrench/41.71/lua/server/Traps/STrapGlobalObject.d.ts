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
 * File generated at: 2022-07-29T08:39:02.472Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.Traps {
    /** @customConstructor STrapGlobalObject:new */
    export class STrapGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      animalHour: any;

      bait: any;

      baitAmountMulti: any;

      closedSprite: any;

      def: any;

      destroyed: any;

      lastUpdate: any;

      openSprite: any;

      player: any;

      trapBait: any;

      trapBaitDay: any;

      trappingSkill: any;

      trapType: any;

      zone: any;

      constructor(luaSystem: any, globalObject: any);

      addBait: ((bait: any, age: any, baitAmountMulti: any, player: any) => any) | any;

      addSound: ((square: any) => any) | any;

      calculTrap: ((square: any) => any) | any;

      checkBaitFreshness: (() => any) | any;

      checkDestroy: ((square: any) => any) | any;

      checkForAnimal: ((square: any) => any) | any;

      checkForWallExploit: ((square: any) => any) | any;

      checkTime: ((animal: any) => any) | any;

      fromModData: ((modData: any) => any) | any;

      isMetalTrap: (() => any) | any;

      reinitModData: ((square: any) => any) | any;

      removeAnimal: ((character: any) => any) | any;

      removeBait: ((character: any) => any) | any;

      setAnimal: ((animal: any) => any) | any;

      setDef: (() => any) | any;

      spawnDestroyItems: ((square: any, object: any) => any) | any;

      toModData: ((modData: any) => any) | any;

      toObject: ((object: any, transmitData: any) => any) | any;

      static SpawnDestroyItems: ((trapType: any, square: any, object: any) => any) | any;
    }
  }
  export namespace lua.server.Traps.STrapGlobalObject {}
}
