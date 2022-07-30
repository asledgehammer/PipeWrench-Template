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
  export namespace zombie.erosion.season {
    /**
     * @customConstructor ErosionSeason.new
     * @
     * [CLASS] zombie.erosion.season.ErosionSeason
     */
    export class ErosionSeason {
      /** int */
      static readonly NUM_SEASONS: number;
      /** int */
      static readonly SEASON_AUTUMN: number;
      /** int */
      static readonly SEASON_DEFAULT: number;
      /** int */
      static readonly SEASON_SPRING: number;
      /** int */
      static readonly SEASON_SUMMER: number;
      /** int */
      static readonly SEASON_SUMMER2: number;
      /** int */
      static readonly SEASON_WINTER: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): zombie.erosion.season.ErosionSeason
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurDayPercent(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDawn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayHighNoon(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayMeanTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayNoiseVal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaylight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDusk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHighNoon(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDaylightSummer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDaylightWinter(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainDayStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainYearAverage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeason(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeasonDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeasonDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeasonLag(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSeasonName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeasonProgression(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeasonStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeedA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeedB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeedC(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTempDiff(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTempMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTempMin(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.GregorianCalendar
       */
      getWinterStartDay(arg0: number, arg1: number, arg2: number): java.util.GregorianCalendar;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, float arg5, int arg6, int arg7, int arg8): void
       */
      init(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRainDay(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isSeason(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSunnyDay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isThunderDay(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurSeason(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setDay(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11): void
       */
      setRain(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
    }
  }
}
