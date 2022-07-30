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
 * File generated at: 2022-07-29T08:38:59.917Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISZoneDisplay:new */
    export class ISZoneDisplay extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      alpha: any;

      blinkStep: any;

      canSeeSky: any;

      character: any;

      climateManager: any;

      climateMoon: any;

      cloudIntensity: any;

      currentTip: any;

      currentZone: any;

      dawn: any;

      dusk: any;

      fadeElements: any;

      fadeTarget: any;

      flashNumber: any;

      flashNumberMax: any;

      flashTipButton: any;

      fogIntensity: any;

      fogStep: any;

      gameTime: any;

      infoBtn: any;

      manager: any;

      moonBright: any;

      moonPhase: any;

      nextBtn: any;

      noon: any;

      perkLevel: any;

      player: any;

      prevBtn: any;

      showBackground: any;

      showBorder: any;

      sunBright: any;

      timeOfDay: any;

      timeString: any;

      tipPanel: any;

      tooltip: any;

      updateTick: any;

      updateTickMax: any;

      visionBonuses: any;

      zdImages: any;

      constructor(_parent: any);

      canSeeOutside: (() => any) | any;

      canSeeThroughObject: ((_object: any) => any) | any;

      doFadeStep: (() => any) | any;

      getVisionTooltipText: (() => any) | any;

      getZoneTooltipText: (() => any) | any;

      isLeapYear: ((_yearNum: any) => any) | any;

      showNextTip: (() => any) | any;

      showPrevTip: (() => any) | any;

      showTip: ((_tip: any, _force: any) => any) | any;

      toggleTips: (() => any) | any;

      update: (() => any) | any;

      updateData: (() => any) | any;

      updateLocation: (() => any) | any;

      updateMoonPhase: (() => any) | any;

      updateMoonPosition: ((_dawn: any, _dusk: any, _timeOfDay: any) => any) | any;

      updateSunPosition: ((_dawn: any, _dusk: any, _timeOfDay: any) => any) | any;

      updateTips: (() => any) | any;

      updateTooltip: (() => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISZoneDisplay {}
}
