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
 * File generated at: 2022-07-29T08:38:59.304Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor WeatherFXDebug:new */
    export class WeatherFXDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static eventAdded: any;

      static fx: any;

      static instance: any;

      static shiftDown: any;

      AmbientSlider: any;

      btnBlizzard: any;

      btnClimate: any;

      btnDebugBounds: any;

      btnGodMode: any;

      btnLaunchFlare: any;

      btnNightVision: any;

      btnStorm: any;

      btnTropical: any;

      cloudSlider: any;

      currentTile: any;

      DayLightStrengthSlider: any;

      DesaturationSlider: any;

      fogSlider: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      labelAmbient: any;

      labelAmbientValue: any;

      labelCloud: any;

      labelCloudValue: any;

      labelDayLightStrength: any;

      labelDayLightStrengthValue: any;

      labelDesaturation: any;

      labelDesaturationValue: any;

      labelFog: any;

      labelFogValue: any;

      labelIsSnow: any;

      labelNightStrength: any;

      labelNightStrengthValue: any;

      labelPrecipitation: any;

      labelPrecipitationValue: any;

      labelViewDistance: any;

      labelViewDistanceValue: any;

      labelWindAngle: any;

      labelWindAngleValue: any;

      labelWindIntensity: any;

      labelWindIntensityValue: any;

      LightColorPanel: any;

      NightStrengthSlider: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      precipitationSlider: any;

      richtext: any;

      subFocus: any;

      tickBoxIsSnow: any;

      ViewDistanceSlider: any;

      windAngleSlider: any;

      windIntensitySlider: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      clear: (() => any) | any;

      onAmbientChange: ((_slider: any, _value: any) => any) | any;

      onButtonClimate: ((_btn: any) => any) | any;

      onButtonDebugBounds: ((_btn: any) => any) | any;

      onButtonDoBlizzard: ((_btn: any) => any) | any;

      onButtonDoStorm: ((_btn: any) => any) | any;

      onButtonDoTropical: ((_btn: any) => any) | any;

      onButtonGodMode: ((_btn: any) => any) | any;

      onButtonLaunchFlare: ((_btn: any) => any) | any;

      onButtonNightVision: ((_btn: any) => any) | any;

      onCloudIntensityChange: ((_slider: any, _value: any) => any) | any;

      onDayLightStrengthChange: ((_slider: any, _value: any) => any) | any;

      onDesaturationChange: ((_slider: any, _value: any) => any) | any;

      onFogIntensityChange: ((_slider: any, _value: any) => any) | any;

      onLightColorChange: ((_slider: any, _value: any) => any) | any;

      onLightIntensityChange: ((_slider: any, _value: any) => any) | any;

      onNightStrengthChange: ((_slider: any, _value: any) => any) | any;

      onPrecipitationChange: ((_slider: any, _value: any) => any) | any;

      onResize: (() => any) | any;

      onViewDistanceChange: ((_slider: any, _value: any) => any) | any;

      onWindAngleChange: ((_slider: any, _value: any) => any) | any;

      onWindIntensityChange: ((_slider: any, _value: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      tickBoxIsSnowChange: ((_optionIndex: any, _value: any) => any) | any;

      update: (() => any) | any;

      static OnOpenPanel: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.WeatherFXDebug {}
}
