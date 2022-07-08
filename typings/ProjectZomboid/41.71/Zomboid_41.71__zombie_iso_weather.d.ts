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
 * File generated at Friday July 2022 15:18:33.702-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.iso.weather {
    /**
     * @customConstructor ClimateColorInfo.new
     * @
     * [CLASS] zombie.iso.weather.ClimateColorInfo
     */
    export class ClimateColorInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (float arg0, float arg1, float arg2, float arg3)
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7)
       */
      constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getExterior(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getInterior(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (ClimateColorInfo arg0, float arg1, ClimateColorInfo arg2): zombie.iso.weather.ClimateColorInfo
       */
      interp(arg0: zombie.iso.weather.ClimateColorInfo, arg1: number, arg2: zombie.iso.weather.ClimateColorInfo): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0, int arg1): void
       */
      load(arg0: java.io.DataInputStream, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      read(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      scale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setExterior(arg0: zombie.core.Color | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setInterior(arg0: zombie.core.Color | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (ClimateColorInfo arg0): void
       */
      setTo(arg0: zombie.iso.weather.ClimateColorInfo): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      write(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ClimateColorInfo arg0, ClimateColorInfo arg1, float arg2, ClimateColorInfo arg3): zombie.iso.weather.ClimateColorInfo
       */
      static interp(arg0: zombie.iso.weather.ClimateColorInfo, arg1: zombie.iso.weather.ClimateColorInfo, arg2: number, arg3: zombie.iso.weather.ClimateColorInfo): zombie.iso.weather.ClimateColorInfo;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static writeColorInfoConfig(): boolean;
    }
    /**
     * @customConstructor ClimateForecaster.new
     * @
     * [CLASS] zombie.iso.weather.ClimateForecaster
     */
    export class ClimateForecaster {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaysTillFirstWeather(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$DayForecast
       *  - (int arg0): zombie.iso.weather.ClimateForecaster$DayForecast
       */
      getForecast(arg0?: number): zombie.iso.weather.ClimateForecaster$DayForecast;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.weather.ClimateForecaster$DayForecast>
       */
      getForecasts(): java.util.ArrayList<zombie.iso.weather.ClimateForecaster$DayForecast>;
    }
    /**
     * @customConstructor DayForecast.new
     * @
     * [CLASS] zombie.iso.weather.ClimateForecaster$DayForecast
     */
    export class ClimateForecaster$DayForecast {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateManager$AirFront
       */
      getAirFront(): zombie.iso.weather.ClimateManager$AirFront;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAirFrontString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$ForecastValue
       */
      getCloudiness(): zombie.iso.weather.ClimateForecaster$ForecastValue;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDawn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLightHours(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDusk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$ForecastValue
       */
      getHumidity(): zombie.iso.weather.ClimateForecaster$ForecastValue;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndexOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMeanWindAngleString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$ForecastValue
       */
      getTemperature(): zombie.iso.weather.ClimateForecaster$ForecastValue;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeatherEndTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$DayForecast
       */
      getWeatherOverlap(): zombie.iso.weather.ClimateForecaster$DayForecast;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.WeatherPeriod
       */
      getWeatherPeriod(): zombie.iso.weather.WeatherPeriod;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getWeatherStages(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeatherStartTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$ForecastValue
       */
      getWindDirection(): zombie.iso.weather.ClimateForecaster$ForecastValue;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster$ForecastValue
       */
      getWindPower(): zombie.iso.weather.ClimateForecaster$ForecastValue;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isChanceOnSnow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasBlizzard(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasFog(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasHeavyRain(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasStorm(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasTropicalStorm(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWeatherStarts(): boolean;
    }
    /**
     * @customConstructor ForecastValue.new
     * @
     * [CLASS] zombie.iso.weather.ClimateForecaster$ForecastValue
     */
    export class ClimateForecaster$ForecastValue {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayMean(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightMean(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalMean(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalMin(): number;
    }
    /**
     * @customConstructor ClimateHistory.new
     * @
     * [CLASS] zombie.iso.weather.ClimateHistory
     */
    export class ClimateHistory {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ClimateManager arg0): void
       */
      init(arg0: zombie.iso.weather.ClimateManager): void;
      /**
       * Method Parameters: 
       *  - (ClimateManager arg0): void
       */
      updateDayChange(arg0: zombie.iso.weather.ClimateManager): void;
    }
    /**
     * @customConstructor ClimateManager.new
     * @
     * [CLASS] zombie.iso.weather.ClimateManager
     */
    export class ClimateManager {
      /** float */
      static readonly AVG_FAV_AIR_TEMPERATURE: number;
      /** boolean */
      static A_STORM_IS_COMING: boolean;
      /** int */
      static readonly BOOL_IS_SNOW: number;
      /** int */
      static readonly BOOL_MAX: number;
      /** int */
      static readonly COLOR_GLOBAL_LIGHT: number;
      /** int */
      static readonly COLOR_MAX: number;
      /** int */
      static readonly COLOR_NEW_FOG: number;
      /** int */
      static readonly FLOAT_AMBIENT: number;
      /** int */
      static readonly FLOAT_CLOUD_INTENSITY: number;
      /** int */
      static readonly FLOAT_DAYLIGHT_STRENGTH: number;
      /** int */
      static readonly FLOAT_DESATURATION: number;
      /** int */
      static readonly FLOAT_FOG_INTENSITY: number;
      /** int */
      static readonly FLOAT_GLOBAL_LIGHT_INTENSITY: number;
      /** int */
      static readonly FLOAT_HUMIDITY: number;
      /** int */
      static readonly FLOAT_MAX: number;
      /** int */
      static readonly FLOAT_NIGHT_STRENGTH: number;
      /** int */
      static readonly FLOAT_PRECIPITATION_INTENSITY: number;
      /** int */
      static readonly FLOAT_TEMPERATURE: number;
      /** int */
      static readonly FLOAT_VIEW_DISTANCE: number;
      /** int */
      static readonly FLOAT_WIND_ANGLE_INTENSITY: number;
      /** int */
      static readonly FLOAT_WIND_INTENSITY: number;
      /** int */
      static readonly FRONT_COLD: number;
      /** int */
      static readonly FRONT_STATIONARY: number;
      /** int */
      static readonly FRONT_WARM: number;
      /** float */
      static readonly MAX_WINDSPEED_KPH: number;
      /** float */
      static readonly MAX_WINDSPEED_MPH: number;
      /** byte */
      static readonly PacketAdminVarsUpdate: number;
      /** byte */
      static readonly PacketClientChangedAdminVars: number;
      /** byte */
      static readonly PacketClientChangedWeather: number;
      /** byte */
      static readonly PacketFlare: number;
      /** byte */
      static readonly PacketRequestAdminVars: number;
      /** byte */
      static readonly PacketThunderEvent: number;
      /** byte */
      static readonly PacketUpdateClimateVars: number;
      /** byte */
      static readonly PacketWeatherUpdate: number;
      /** boolean */
      static THE_DESCENDING_FOG: boolean;
      /** boolean */
      static WINTER_IS_COMING: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, AirFront arg3): void
       */
      CalculateWeatherFrontStrength(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.weather.ClimateManager$AirFront): void;
      /**
       * Method Parameters: 
       *  - (ClimateValues arg0): void
       */
      CopyClimateValues(arg0: zombie.iso.weather.ClimateValues): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      execute_Simulation(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceDayInfoUpdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirMass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirMassDaily(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirMassTemperature(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       *  - (IsoGameCharacter arg0, boolean arg1): number
       */
      getAirTemperatureForCharacter(arg0: zombie.characters.IsoGameCharacter, arg1?: boolean): number;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): number
       *  - (IsoGridSquare arg0, BaseVehicle arg1): number
       *  - (IsoGridSquare arg0, BaseVehicle arg1, boolean arg2): number
       */
      getAirTemperatureForSquare(arg0: zombie.iso.IsoGridSquare, arg1?: zombie.vehicles.BaseVehicle, arg2?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbient(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoolMax(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.ClimateManager$ClimateBool
       */
      getClimateBool(arg0: number): zombie.iso.weather.ClimateManager$ClimateBool;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.ClimateManager$ClimateColor
       */
      getClimateColor(arg0: number): zombie.iso.weather.ClimateManager$ClimateColor;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.ClimateManager$ClimateFloat
       */
      getClimateFloat(arg0: number): zombie.iso.weather.ClimateManager$ClimateFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateForecaster
       */
      getClimateForecaster(): zombie.iso.weather.ClimateForecaster;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateHistory
       */
      getClimateHistory(): zombie.iso.weather.ClimateHistory;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateValues
       */
      getClimateValuesCopy(): zombie.iso.weather.ClimateValues;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCloudIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColFog(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColFogLegacy(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColFogNew(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColNight(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColNightMoon(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColNightNoMoon(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColorNewFog(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCorrectedWindAngleIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateManager$DayInfo
       */
      getCurrentDay(): zombie.iso.weather.ClimateManager$DayInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLightStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayMeanTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDesaturation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getEnabledFxUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getEnabledSimulation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getEnabledWeatherGeneration(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getFogTintStorm(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getFogTintTropical(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrontStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getGlobalLight(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGlobalLightIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getGlobalLightInternal(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHumidity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsThunderStorming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWindspeedKph(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWindspeedMph(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateManager$DayInfo
       */
      getNextDay(): zombie.iso.weather.ClimateManager$DayInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightStrength(): number;
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
       *  - (Empty): zombie.iso.weather.ClimateManager$DayInfo
       */
      getPreviousDay(): zombie.iso.weather.ClimateManager$DayInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.season.ErosionSeason
       */
      getSeason(): zombie.erosion.season.ErosionSeason;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.weather.ClimateColorInfo
       */
      getSeasonColor(arg0: number, arg1: number, arg2: number): zombie.iso.weather.ClimateColorInfo;
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
      getSimplexOffsetA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSimplexOffsetB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSimplexOffsetC(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSimplexOffsetD(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSnowFracNow(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSnowIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSnowStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ThunderStorm
       */
      getThunderStorm(): zombie.iso.weather.ThunderStorm;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getViewDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeatherInterference(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.WeatherPeriod
       */
      getWeatherPeriod(): zombie.iso.weather.WeatherPeriod;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleDegrees(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleRadians(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): number
       */
      getWindForceMovement(arg0: zombie.characters.IsoGameCharacter, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindSpeedMovement(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindspeedKph(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldAgeHours(): number;
      /**
       * Method Parameters: 
       *  - (IsoMetaGrid arg0): void
       */
      init(arg0: zombie.iso.IsoMetaGrid): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRaining(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSnowing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUpdated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      launchFlare(): void;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0, int arg1): void
       */
      load(arg0: java.io.DataInputStream, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postCellLoadSetSnow(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      receiveClimatePacket(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetAdmin(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetModded(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetOverrides(): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendInitialState(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbient(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDayLightStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDesaturation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabledFxUpdate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabledSimulation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabledWeatherGeneration(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNightStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPrecipitationIsSnow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5, boolean arg6): void
       */
      setSeasonColorDawn(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5, boolean arg6): void
       */
      setSeasonColorDay(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5, boolean arg6): void
       */
      setSeasonColorDusk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setViewDistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopWeatherAndThunder(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitClientChangeAdminVars(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, int arg1): void
       */
      transmitGenerateWeather(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitRequestAdminVars(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      transmitServerStartRain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitServerStopRain(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitServerStopWeather(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, boolean arg3, boolean arg4): void
       */
      transmitServerTriggerLightning(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      transmitServerTriggerStorm(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitStopWeather(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      transmitTriggerBlizzard(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      transmitTriggerStorm(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      transmitTriggerTropical(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, boolean arg1): boolean
       */
      triggerCustomWeather(arg0: number, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): boolean
       */
      triggerCustomWeatherStage(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, double arg2, float arg3, float arg4, float arg5, float arg6): void
       *  - (int arg0, int arg1, double arg2, float arg3, float arg4, float arg5, float arg6, ClimateColorInfo arg7): void
       */
      triggerKateBobIntroStorm(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: zombie.iso.weather.ClimateColorInfo): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      triggerWinterIsComingStorm(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEveryTenMins(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateOLD(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static ToKph(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static ToMph(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       *  - (int arg0, int arg1, int arg2): number
       */
      static clamp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static clamp01(arg0: number): number;
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
       *  - (Empty): zombie.iso.weather.ClimateManager
       */
      static getInstance(): zombie.iso.weather.ClimateManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getWindAngleString(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getWindNoiseBase(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getWindNoiseFinal(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getWindTickFinal(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static normalizeRange(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static posToPosNegRange(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ClimateManager arg0): void
       */
      static setInstance(arg0: zombie.iso.weather.ClimateManager): void;
    }
    /**
     * @customConstructor AirFront.new
     * @
     * [CLASS] zombie.iso.weather.ClimateManager$AirFront
     */
    export class ClimateManager$AirFront {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addDaySample(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (AirFront arg0): void
       */
      copyFrom(arg0: zombie.iso.weather.ClimateManager$AirFront): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngleDegrees(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxNoise(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalNoise(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getType(): number;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0): void
       */
      load(arg0: java.io.DataInputStream): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFrontType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStrength(arg0: number): void;
    }
    /**
     * @customConstructor ClimateBool.new
     * @
     * [CLASS] zombie.iso.weather.ClimateManager$ClimateBool
     */
    export class ClimateManager$ClimateBool {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getAdminValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getInternalValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getModdedValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOverride(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.iso.weather.ClimateManager$ClimateBool
       */
      init(arg0: number, arg1: string): zombie.iso.weather.ClimateManager$ClimateBool;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableOverride(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAdminValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableModded(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableOverride(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFinalValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setModdedValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverride(arg0: boolean): void;
    }
    /**
     * @customConstructor ClimateColor.new
     * @
     * [CLASS] zombie.iso.weather.ClimateManager$ClimateColor
     */
    export class ClimateManager$ClimateColor {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getAdminValue(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getFinalValue(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getInternalValue(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getModdedValue(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getOverride(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOverrideInterpolate(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.iso.weather.ClimateManager$ClimateColor
       */
      init(arg0: number, arg1: string): zombie.iso.weather.ClimateManager$ClimateColor;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableOverride(): boolean;
      /**
       * Method Parameters: 
       *  - (ClimateColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      setAdminValue(arg0: zombie.iso.weather.ClimateColorInfo | number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setAdminValueExterior(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setAdminValueInterior(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableModded(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableOverride(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ClimateColorInfo arg0): void
       */
      setFinalValue(arg0: zombie.iso.weather.ClimateColorInfo): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setModdedInterpolate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ClimateColorInfo arg0): void
       */
      setModdedValue(arg0: zombie.iso.weather.ClimateColorInfo): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, float arg1): void
       *  - (ClimateColorInfo arg0, float arg1): void
       */
      setOverride(arg0: java.nio.ByteBuffer | zombie.iso.weather.ClimateColorInfo, arg1: number): void;
    }
    /**
     * @customConstructor ClimateFloat.new
     * @
     * [CLASS] zombie.iso.weather.ClimateManager$ClimateFloat
     */
    export class ClimateManager$ClimateFloat {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAdminValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFinalValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInternalValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getModdedValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOverride(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOverrideInterpolate(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.iso.weather.ClimateManager$ClimateFloat
       */
      init(arg0: number, arg1: string): zombie.iso.weather.ClimateManager$ClimateFloat;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableOverride(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAdminValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableModded(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableOverride(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFinalValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setModdedInterpolate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setModdedValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setOverride(arg0: number, arg1: number): void;
    }
    /** [ENUM] zombie.iso.weather.ClimateManager$ClimateNetAuth */
    export class ClimateManager$ClimateNetAuth {
      protected constructor();
      static readonly ClientAndServer: zombie.iso.weather.ClimateManager$ClimateNetAuth;
      static readonly ClientOnly: zombie.iso.weather.ClimateManager$ClimateNetAuth;
      static readonly Denied: zombie.iso.weather.ClimateManager$ClimateNetAuth;
      static readonly ServerOnly: zombie.iso.weather.ClimateManager$ClimateNetAuth;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor DayInfo.new
     * @
     * [CLASS] zombie.iso.weather.ClimateManager$DayInfo
     */
    export class ClimateManager$DayInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDateValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHour(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMonth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.season.ErosionSeason
       */
      getSeason(): zombie.erosion.season.ErosionSeason;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYear(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      set(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor ClimateMoon.new
     * @
     * [CLASS] zombie.iso.weather.ClimateMoon
     */
    export class ClimateMoon {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentMoonPhase(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateMoon
       */
      static getInstance(): zombie.iso.weather.ClimateMoon;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMoonFloat(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getPhaseName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      static updatePhase(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor ClimateValues.new
     * @
     * [CLASS] zombie.iso.weather.ClimateValues
     */
    export class ClimateValues {
      /**
       * Constructors: 
       *  - (ClimateManager arg0)
       */
      constructor(arg0: zombie.iso.weather.ClimateManager | null);
      /**
       * Method Parameters: 
       *  - (ClimateValues arg0): void
       */
      CopyValues(arg0: zombie.iso.weather.ClimateValues): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirFrontAirmass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirMassNoiseFrequencyMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirMassTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbient(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCacheDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCacheMonth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCacheWorldAgeHours(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCacheYear(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCloudIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCloudyT(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateValues
       */
      getCopy(): zombie.iso.weather.ClimateValues;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDawn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayFogDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayFogStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLightLagged(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLightStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLightStrengthBase(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayMeanTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDesaturation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDusk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHumidity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLerpNight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightLagged(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoiseAirmass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoon(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleDegrees(): number;
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
       *  - (Empty): boolean
       */
      isDayDoFog(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTemperatureIsSnow(): boolean;
      /**
       * Method Parameters: 
       *  - (GregorianCalendar arg0): void
       *  - (int arg0, int arg1, int arg2): void
       *  - (int arg0, int arg1, int arg2, int arg3): void
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      pollDate(arg0: java.util.GregorianCalendar | number, arg1?: number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      print(): void;
    }
    /**
     * @customConstructor Temperature.new
     * @
     * [CLASS] zombie.iso.weather.Temperature
     */
    export class Temperature {
      /** float */
      static readonly BodyMaxTemp: number;
      /** float */
      static readonly BodyMinTemp: number;
      /** java.lang.String */
      static CELSIUS_POSTFIX?: string;
      /** boolean */
      static DO_DAYLEN_MOD: boolean;
      /** boolean */
      static DO_DEFAULT_BASE: boolean;
      /** java.lang.String */
      static FAHRENHEIT_POSTFIX?: string;
      /** float */
      static readonly FavorableNakedTemp: number;
      /** float */
      static readonly FavorableRoomTemp: number;
      /** float */
      static readonly Hyperthermia_1: number;
      /** float */
      static readonly Hyperthermia_2: number;
      /** float */
      static readonly Hyperthermia_3: number;
      /** float */
      static readonly Hyperthermia_4: number;
      /** float */
      static readonly Hypothermia_1: number;
      /** float */
      static readonly Hypothermia_2: number;
      /** float */
      static readonly Hypothermia_3: number;
      /** float */
      static readonly Hypothermia_4: number;
      /** float */
      static readonly TrueInsulationMultiplier: number;
      /** float */
      static readonly TrueWindresistMultiplier: number;
      /** float */
      static readonly coreCelciusMax: number;
      /** float */
      static readonly coreCelciusMin: number;
      /** float */
      static readonly homeostasisDefault: number;
      /** float */
      static readonly neutralZone: number;
      /** float */
      static readonly skinCelciusFavorable: number;
      /** float */
      static readonly skinCelciusMax: number;
      /** float */
      static readonly skinCelciusMin: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static CelsiusToFahrenheit(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static FahrenheitToCelsius(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static WindchillCelsiusKph(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCelsiusPostfix(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFahrenheitPostfix(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static getFractionForRealTimeRatePerMin(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTemperaturePostfix(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getTemperatureString(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static getTrueInsulationValue(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static getTrueWindresistanceValue(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): zombie.core.Color
       */
      static getValueColor(arg0: number): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): number
       */
      static getWindChillAmountForPlayer(arg0: zombie.characters.IsoPlayer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reset(): void;
    }
    /**
     * @customConstructor ThunderStorm.new
     * @
     * [CLASS] zombie.iso.weather.ThunderStorm
     */
    export class ThunderStorm {
      /** int */
      static MAP_MAX_X: number;
      /** int */
      static MAP_MAX_Y: number;
      /** int */
      static MAP_MIN_X: number;
      /** int */
      static MAP_MIN_Y: number;

      /**
       * Constructors: 
       *  - (ClimateManager arg0)
       */
      constructor(arg0: zombie.iso.weather.ClimateManager | null);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasActiveThunderClouds(): boolean;
      /**
       * Method Parameters: 
       *  - (PlayerRenderSettings arg0, int arg1, IsoPlayer arg2): void
       */
      applyLightningForPlayer(arg0: zombie.core.opengl.RenderSettings$PlayerRenderSettings, arg1: number, arg2: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, boolean arg3, boolean arg4): void
       */
      enqueueThunderEvent(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.weather.ThunderStorm$ThunderCloud>
       */
      getClouds(): java.util.ArrayList<zombie.iso.weather.ThunderStorm$ThunderCloud>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isModifyingNight(): boolean;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0): void
       */
      load(arg0: java.io.DataInputStream): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      noise(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      readNetThunderEvent(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, double arg5, boolean arg6): void
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, double arg5, boolean arg6, float arg7): zombie.iso.weather.ThunderStorm$ThunderCloud
       */
      startThunderCloud(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7?: number): void | zombie.iso.weather.ThunderStorm$ThunderCloud;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopAllClouds(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      stopCloud(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, boolean arg3, boolean arg4): void
       */
      triggerThunderEvent(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      writeNetThunderEvent(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMapDiagonal(): number;
    }
    /**
     * @customConstructor ThunderCloud.new
     * @
     * [CLASS] zombie.iso.weather.ThunderStorm$ThunderCloud
     */
    export class ThunderStorm$ThunderCloud {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      lifeTime(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      setCenter(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor WeatherPeriod.new
     * @
     * [CLASS] zombie.iso.weather.WeatherPeriod
     */
    export class WeatherPeriod {
      /** float */
      static readonly FRONT_STRENGTH_THRESHOLD: number;
      /** int */
      static readonly STAGE_BLIZZARD: number;
      /** int */
      static readonly STAGE_CLEARING: number;
      /** int */
      static readonly STAGE_DRIZZLE: number;
      /** int */
      static readonly STAGE_HEAVY_PRECIP: number;
      /** int */
      static readonly STAGE_INTERMEZZO: number;
      /** int */
      static readonly STAGE_KATEBOB_STORM: number;
      /** int */
      static readonly STAGE_MAX: number;
      /** int */
      static readonly STAGE_MODDED: number;
      /** int */
      static readonly STAGE_MODERATE: number;
      /** int */
      static readonly STAGE_SHOWERS: number;
      /** int */
      static readonly STAGE_START: number;
      /** int */
      static readonly STAGE_STORM: number;
      /** int */
      static readonly STAGE_TROPICAL_STORM: number;

      /**
       * Constructors: 
       *  - (ClimateManager arg0, ThunderStorm arg1)
       */
      constructor(arg0: zombie.iso.weather.ClimateManager | null, arg1: zombie.iso.weather.ThunderStorm | null);
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1): zombie.iso.weather.WeatherPeriod$WeatherStage
       */
      createAndAddModdedStage(arg0: string, arg1: number): zombie.iso.weather.WeatherPeriod$WeatherStage;
      /**
       * Method Parameters: 
       *  - (int arg0, double arg1): zombie.iso.weather.WeatherPeriod$WeatherStage
       */
      createAndAddStage(arg0: number, arg1: number): zombie.iso.weather.WeatherPeriod$WeatherStage;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      endCreateModdedPeriod(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColor(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColorBlizzard(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColorBlueish(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColorGreenish(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColorPurplish(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColorReddish(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getCloudColorTropical(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.WeatherPeriod$WeatherStage
       */
      getCurrentStage(): zombie.iso.weather.WeatherPeriod$WeatherStage;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentStageID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateManager$AirFront
       */
      getFrontCache(): zombie.iso.weather.ClimateManager$AirFront;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrontType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPrecipitationFinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getPrintStuff(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainThreshold(): number;
      /**
       * Method Parameters: 
       *  - (double arg0): zombie.iso.weather.WeatherPeriod$WeatherStage
       */
      getStageForWorldAge(arg0: number): zombie.iso.weather.WeatherPeriod$WeatherStage;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStageProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeatherNoise(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.weather.WeatherPeriod$WeatherStage>
       */
      getWeatherStages(): java.util.ArrayList<zombie.iso.weather.WeatherPeriod$WeatherStage>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleDegrees(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBlizzard(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasHeavyRain(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasStorm(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTropical(): boolean;
      /**
       * Method Parameters: 
       *  - (AirFront arg0, double arg1): void
       *  - (AirFront arg0, double arg1, int arg2, float arg3): void
       */
      initSimulationDebug(arg0: zombie.iso.weather.ClimateManager$AirFront, arg1: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlizzard(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isThunderStorm(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTropicalStorm(): boolean;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0, int arg1): void
       */
      load(arg0: java.io.DataInputStream, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      readNetWeatherData(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (ClimateColorInfo arg0): void
       */
      setCloudColor(arg0: zombie.iso.weather.ClimateColorInfo): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDummy(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setKateBobStormCoords(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setKateBobStormProgress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPrintStuff(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, float arg1, float arg2): boolean
       */
      startCreateModdedPeriod(arg0: boolean, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopWeatherPeriod(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      writeNetWeatherData(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMaxTemperatureInfluence(): number;
    }
    /** [ENUM] zombie.iso.weather.WeatherPeriod$StrLerpVal */
    export class WeatherPeriod$StrLerpVal {
      protected constructor();
      static readonly Entry: zombie.iso.weather.WeatherPeriod$StrLerpVal;
      static readonly NextTarget: zombie.iso.weather.WeatherPeriod$StrLerpVal;
      static readonly None: zombie.iso.weather.WeatherPeriod$StrLerpVal;
      static readonly Target: zombie.iso.weather.WeatherPeriod$StrLerpVal;
      name(): string;
      ordinal(): number;
      getValue(): number;

    }
    /**
     * @customConstructor WeatherStage.new
     * @
     * [CLASS] zombie.iso.weather.WeatherPeriod$WeatherStage
     */
    export class WeatherPeriod$WeatherStage {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       */
      constructor(arg0?: number);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getHasStartedCloud(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLinearT(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getParabolicT(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStageCurrentStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStageDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStageEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStageID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStageStart(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      lerpEntryTo(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0, int arg1): void
       */
      load(arg0: java.io.DataInputStream, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasStartedCloud(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStageID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetStrength(arg0: number): void;
    }
    /**
     * @customConstructor WorldFlares.new
     * @
     * [CLASS] zombie.iso.weather.WorldFlares
     */
    export class WorldFlares {
      /** boolean */
      static DEBUG_DRAW: boolean;
      /** boolean */
      static readonly ENABLED: boolean;
      /** int */
      static NEXT_ID: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Clear(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PlayerRenderSettings arg0, int arg1, IsoPlayer arg2): void
       */
      static applyFlaresForPlayer(arg0: zombie.core.opengl.RenderSettings$PlayerRenderSettings, arg1: number, arg2: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static debugRender(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getDebugDraw(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.WorldFlares$Flare
       */
      static getFlare(arg0: number): zombie.iso.weather.WorldFlares$Flare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFlareCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.WorldFlares$Flare
       */
      static getFlareID(arg0: number): zombie.iso.weather.WorldFlares$Flare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10): void
       */
      static launchFlare(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDebugDraw(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    /**
     * @customConstructor Flare.new
     * @
     * [CLASS] zombie.iso.weather.WorldFlares$Flare
     */
    export class WorldFlares$Flare {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateColorInfo
       */
      getColor(): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.ClimateColorInfo
       */
      getColorPlayer(arg0: number): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getDistModPlayer(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntensity(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getIntensityPlayer(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getLerpPlayer(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLifeTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxLifeTime(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.ClimateColorInfo
       */
      getOutColorPlayer(arg0: number): zombie.iso.weather.ClimateColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPercent(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasLaunched(): boolean;
    }
  }
}
