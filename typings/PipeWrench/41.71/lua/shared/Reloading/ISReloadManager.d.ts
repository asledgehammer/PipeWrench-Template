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
 * File generated at: 2022-07-29T08:39:01.864Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadManager:new */
    export class ISReloadManager extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      chainReload: any;

      kIsPressed: any;

      lastClickTime: any;

      playerid: any;

      rackingAction: any;

      reloadable: any;

      reloadAction: any;

      reloadWeapon: any;

      rIsPressed: any;

      spaceIsPressed: any;

      constructor(player: any);

      autoRackNeeded: (() => any) | any;

      checkLoaded: ((character: any, chargeDelta: any) => any) | any;

      checkRackConditions: (() => any) | any;

      checkReloadConditions: (() => any) | any;

      fireShot: ((wielder: any, weapon: any, difficulty: any) => any) | any;

      getDifficulty: (() => any) | any;

      getDifficultyDescription: ((difficulty: any) => any) | any;

      isWeaponReloadable: (() => any) | any;

      printManagerDetails: (() => any) | any;

      printReloadableDetails: (() => any) | any;

      printWeaponModDetails: (() => any) | any;

      rackingNow: (() => any) | any;

      rackingStarted: (() => any) | any;

      reloadStarted: (() => any) | any;

      setDifficulty: ((newDifficulty: any) => any) | any;

      startRackFromUi: ((item: any) => any) | any;

      startRacking: (() => any) | any;

      startReloadFromUi: ((item: any) => any) | any;

      startReloading: (() => any) | any;

      stopRacking: (() => any) | any;

      stopReload: ((noSound: any) => any) | any;

      stopReloadSuccess: (() => any) | any;
    }

    export class aaa {
      private constructor();

      static [id: string]: any;

      static checkLoadedHook: ((character: any, chargeDelta: any) => any) | any;

      static fireShotHook: ((wielder: any, weapon: any) => any) | any;

      static startRackingHook: ((pl: any) => any) | any;

      static startReloadHook: ((pl: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadManager {}
}
