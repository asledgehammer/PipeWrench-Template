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
 * File generated at: 2022-07-29T08:39:02.798Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.Vehicles {
    export class Vehicles {
      private constructor();

      static [id: string]: any;

      static LowerCondition: ((vehicle: any, part: any, elapsedMinutes: any) => any) | any;
    }

    export class VehicleUtils {
      private constructor();

      static [id: string]: any;

      static anyWorkingHeadlights: ((vehicle: any) => any) | any;

      static calculateInstallationSuccess: ((perks: any, chr: any, chrPerks: any) => any) | any;

      static callLua: ((functionName: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      static chargeBattery: ((vehicle: any, delta: any) => any) | any;

      static CheckForUnlockedDoorsWindows: ((vehicle: any) => any) | any;

      static compareFloats: ((a: any, b: any, precision: any) => any) | any;

      static createPartInventoryItem: ((part: any) => any) | any;

      static getChildWindow: ((part: any) => any) | any;

      static getContainers: ((playerNum: any) => any) | any;

      static getInsideTemperature: ((player: any) => any) | any;

      static getItems: ((playerNum: any) => any) | any;

      static getPerksTableForChr: ((perks: any, chr: any) => any) | any;

      static InstallPart: ((part: any, item: any, chr: any) => any) | any;

      static lowerUninstalledItemCondition: ((part: any, item: any, mechanicSkill: any, chr: any) => any) | any;

      static OnUseVehicle: ((character: any, vehicle: any, pressedNotTapped: any) => any) | any;

      static OnVehicleHorn: ((character: any, vehicle: any, pressed: any) => any) | any;

      static RemoveTire: ((part: any, explosion: any) => any) | any;

      static RequiredKeyNotFound: ((part: any, chr: any) => any) | any;

      static split: ((string: any, pattern: any) => any) | any;

      static testItems: ((chr: any, items: any, typeToItem: any) => any) | any;

      static testPerks: ((chr: any, perks: any) => any) | any;

      static testProfession: ((chr: any, professions: any) => any) | any;

      static testRecipes: ((chr: any, recipes: any) => any) | any;

      static testTraits: ((chr: any, traits: any) => any) | any;

      static UninstallPart: ((part: any, chr: any) => any) | any;
    }
  }
  export namespace lua.server.Vehicles.Vehicles {}
}
