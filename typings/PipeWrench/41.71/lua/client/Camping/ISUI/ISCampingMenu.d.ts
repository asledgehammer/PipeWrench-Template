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
 * File generated at: 2022-07-29T08:38:58.801Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Camping.ISUI {
    export class ISCampingMenu {
      private constructor();

      static [id: string]: any;

      static doCampingMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static doSleepOption: ((context: any, bed: any, player: any, playerObj: any) => any) | any;

      static getFuelDurationForItem: ((item: any) => any) | any;

      static getFuelItemUses: ((item: any) => any) | any;

      static isValidCampfire: ((campfire: any) => any) | any;

      static isValidFuel: ((item: any) => any) | any;

      static isValidTinder: ((item: any) => any) | any;

      static onAddAllFuel: ((playerObj: any, campfire: any) => any) | any;

      static onAddFuel: ((playerObj: any, campfire: any, fuelType: any) => any) | any;

      static onAddMultipleFuel: ((playerObj: any, campfire: any, fuelType: any) => any) | any;

      static onAddTent: ((worldobjects: any, player: any, tentKit: any) => any) | any;

      static onDisplayInfo: ((worldobjects: any, player: any, isoCampfireObject: any, campfire: any) => any) | any;

      static onLightFromKindle:
        | ((worldobjects: any, player: any, percedWood: any, stickOrBranch: any, campfire: any) => any)
        | any;

      static onLightFromLiterature:
        | ((playerObj: any, itemType: any, lighter: any, campfire: any, fuelAmt: any) => any)
        | any;

      static onLightFromPetrol:
        | ((worldobjects: any, player: any, lighter: any, petrol: any, campfire: any) => any)
        | any;

      static onPlaceCampfire: ((worldobjects: any, player: any, campfireKit: any) => any) | any;

      static onPutOutCampfire: ((worldobjects: any, player: any, campfire: any) => any) | any;

      static onRemoveCampfire: ((worldobjects: any, player: any, campfire: any) => any) | any;

      static onRemoveTent: ((worldobjects: any, player: any, tent: any) => any) | any;

      static onRest: ((worldobjects: any, player: any, tent: any) => any) | any;

      static onSleep: ((worldobjects: any, player: any, tent: any) => any) | any;

      static timeString: ((timeInMinutes: any) => any) | any;

      static toPlayerInventory: ((playerObj: any, item: any) => any) | any;

      static walkToCampfire: ((playerObj: any, square: any) => any) | any;
    }
  }
  export namespace lua.client.Camping.ISUI.ISCampingMenu {}
}
