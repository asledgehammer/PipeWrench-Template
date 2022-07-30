/**
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
 * File generated at 2022-07-29T02:33Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../reference.d.ts" />
declare module 'PipeWrench' {
  export namespace zombie.iso.weather.fx {
    /**
     * @customConstructor IsoWeatherFX.new
     * @
     * [CLASS] zombie.iso.weather.fx.IsoWeatherFX
     */
    export class IsoWeatherFX {
      /** float */
      static ZoomMod: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCloudIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPrecipitationIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getPrecipitationIsSnow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderWindAngleRain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindPrecipIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasCloudsToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasFogToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasPrecipitationToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderClouds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderFog(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1, boolean arg2): void
       */
      renderLayered(arg0: boolean, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderPrecipitation(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCloudIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDebugBounds(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFogIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPrecipitationIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPrecipitationIsSnow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindAngleIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindPrecipIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clamp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerp(arg0: number, arg1: number, arg2: number): number;
    }
  }
}
