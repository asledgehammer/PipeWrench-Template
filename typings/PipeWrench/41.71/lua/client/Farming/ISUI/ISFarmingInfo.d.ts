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
 * File generated at: 2022-07-29T08:38:59.735Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Farming.ISUI {
    /** @customConstructor ISFarmingInfo:new */
    export class ISFarmingInfo extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      plant: any;

      vegetable: any;

      constructor(x: any, y: any, width: any, height: any, character: any, plant: any);

      getBlueBar: ((list: any) => any) | any;

      getDiseaseColor: ((diseaseLvl: any, index: any, info: any) => any) | any;

      getGreen: ((list: any, index: any) => any) | any;

      getOrange: ((list: any, index: any) => any) | any;

      getOrangeBar: ((list: any) => any) | any;

      getRed: ((list: any, index: any) => any) | any;

      getRedBar: ((list: any) => any) | any;

      getWhite: ((list: any, index: any) => any) | any;

      isPlantValid: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setPlant: ((plant: any) => any) | any;

      update: (() => any) | any;

      static getCurrentGrowingPhase: ((info: any, farmingLevel: any) => any) | any;

      static getDiseaseName: ((info: any) => any) | any;

      static getFertilizerColor: ((info: any) => any) | any;

      static getHealth: ((info: any, farmingLevel: any) => any) | any;

      static getHealthColor: ((info: any, farmingLevel: any) => any) | any;

      static getLastWatedHour: ((plant: any) => any) | any;

      static getNextGrowingPhase: ((info: any) => any) | any;

      static getNoWateredSinceColor: ((plant: any, lastWatedHour: any, farmingLevel: any) => any) | any;

      static getTitleColor: ((plant: any) => any) | any;

      static getWaterBarWidth: ((info: any) => any) | any;

      static getWaterLvl: ((plant: any, farmingLevel: any) => any) | any;

      static getWaterLvlBarColor: ((info: any, farmingLevel: any) => any) | any;

      static getWaterLvlColor: ((plant: any, farmingLevel: any) => any) | any;

      static RequiredWidth: (() => any) | any;
    }

    export class disease {
      static [id: string]: any;
    }

    export class disease_rgb {
      static [id: string]: any;
    }

    export class fertilizer_rgb {
      static [id: string]: any;
    }

    export class health_rgb {
      static [id: string]: any;
    }

    export class nowateredsince_rgb {
      static [id: string]: any;
    }

    export class title_rgb {
      static [id: string]: any;
    }

    export class water_rgb {
      static [id: string]: any;
    }

    export class waterbar_rgb {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Farming.ISUI.ISFarmingInfo {}
}
