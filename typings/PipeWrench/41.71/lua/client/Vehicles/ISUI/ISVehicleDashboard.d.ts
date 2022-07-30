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
 * File generated at: 2022-07-29T08:39:02.628Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleDashboard:new */
    export class ISVehicleDashboard extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static lastVehicleDamage: any;

      static lastVehicleDamageTimer: any;

      backgroundTex: any;

      batteryTex: any;

      btn_partSpeed: any;

      character: any;

      dashboardBG: any;

      doorTex: any;

      engineGauge: any;

      engineGaugeTex: any;

      engineTex: any;

      flickAlpha: any;

      flickAlphaUp: any;

      flickingTimer: any;

      fuelGauge: any;

      fuelValue: any;

      gasTank: any;

      gaugeEmpty: any;

      gaugeFull: any;

      gaugeLow: any;

      gauges: any;

      heaterTex: any;

      iconAirCondition: any;

      iconBattery: any;

      iconDoor: any;

      iconEngine: any;

      iconHeater: any;

      iconIgnition: any;

      iconIgnitionHotwired: any;

      iconIgnitionKey: any;

      iconIgnitionStarted: any;

      iconLights: any;

      iconSpeedRegulator: any;

      iconTrunk: any;

      ignitionTex: any;

      lightsTex: any;

      playerNum: any;

      speedGauge: any;

      speedGaugeTex: any;

      speedregulatorTex: any;

      texEngine: any;

      trunkTex: any;

      vehicle: any;

      wasKeyInIgnition: any;

      constructor(playerNum: any, chr: any);

      checkEngineFull: (() => any) | any;

      createChildren: (() => any) | any;

      getAlphaFlick: ((_default_: any) => any) | any;

      onClickDoors: (() => any) | any;

      onClickEngine: (() => any) | any;

      onClickHeadlights: (() => any) | any;

      onClickHeater: (() => any) | any;

      onClickKeys: (() => any) | any;

      onClickTrunk: (() => any) | any;

      onResolutionChange: (() => any) | any;

      render: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;

      static damageChecker: (() => any) | any;

      static damageFlick: ((character: any) => any) | any;

      static getVehicleCondition: ((vehicle: any) => any) | any;

      static onEnterVehicle: ((character: any) => any) | any;

      static onExitVehicle: ((character: any) => any) | any;

      static OnGameStart: (() => any) | any;

      static onSwitchVehicleSeat: ((character: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleDashboard {}
}
