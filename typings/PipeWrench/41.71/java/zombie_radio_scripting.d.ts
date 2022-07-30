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
  export namespace zombie.radio.scripting {
    /**
     * @customConstructor DynamicRadioChannel.new
     * @
     * [CLASS] zombie.radio.scripting.DynamicRadioChannel extends zombie.radio.scripting.RadioChannel
     */
    export class DynamicRadioChannel {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, ChannelCategory arg2)
       *  - (String arg0, int arg1, ChannelCategory arg2, String arg3)
       */
      constructor(arg0: string, arg1: number, arg2: zombie.radio.ChannelCategory, arg3?: string);
      /**
       * Method Parameters: 
       *  - (RadioScript arg0): void
       */
      AddRadioScript(arg0: zombie.radio.scripting.RadioScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.ChannelCategory
       */
      GetCategory(): zombie.radio.ChannelCategory;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetFrequency(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      GetPlayerIsListening(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsTv(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      LoadAiringBroadcast(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetPlayerIsListening(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      UpdateScripts(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirCounterMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioBroadCast
       */
      getAiringBroadcast(): zombie.radio.scripting.RadioBroadCast;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioScript
       */
      getCurrentScript(): zombie.radio.scripting.RadioScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentScriptLoop(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentScriptMaxLoops(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastAiredLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastBroadcastID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.RadioData
       */
      getRadioData(): zombie.radio.RadioData;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.radio.scripting.RadioScript
       */
      getRadioScript(arg0: string): zombie.radio.scripting.RadioScript;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimeSynced(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       *  - (String arg0, int arg1, int arg2, int arg3): void
       */
      setActiveScript(arg0: string, arg1: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setActiveScriptNull(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAirCounterMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (RadioBroadCast arg0): void
       */
      setAiringBroadcast(arg0: zombie.radio.scripting.RadioBroadCast): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLouisvilleObfuscate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (RadioData arg0): void
       */
      setRadioData(arg0: zombie.radio.RadioData): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTimeSynced(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor RadioBroadCast.new
     * @
     * [CLASS] zombie.radio.scripting.RadioBroadCast
     */
    export class RadioBroadCast {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2)
       */
      constructor(arg0: string, arg1: number, arg2: number);
      /**
       * Method Parameters: 
       *  - (RadioLine arg0): void
       */
      AddRadioLine(arg0: zombie.radio.scripting.RadioLine): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      PeekNextLineText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioLine
       */
      getCurrentLine(): zombie.radio.scripting.RadioLine;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentLineNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEndStamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.scripting.RadioLine>
       */
      getLines(): java.util.ArrayList<zombie.radio.scripting.RadioLine>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioLine
       *  - (boolean arg0): zombie.radio.scripting.RadioLine
       */
      getNextLine(arg0?: boolean): zombie.radio.scripting.RadioLine;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartStamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      resetLineCounter(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentLineNumber(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (RadioBroadCast arg0): void
       */
      setPostSegment(arg0: zombie.radio.scripting.RadioBroadCast): void;
      /**
       * Method Parameters: 
       *  - (RadioBroadCast arg0): void
       */
      setPreSegment(arg0: zombie.radio.scripting.RadioBroadCast): void;
    }
    /**
     * @customConstructor RadioChannel.new
     * @
     * [CLASS] zombie.radio.scripting.RadioChannel
     */
    export class RadioChannel {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, ChannelCategory arg2)
       *  - (String arg0, int arg1, ChannelCategory arg2, String arg3)
       */
      constructor(arg0: string, arg1: number, arg2: zombie.radio.ChannelCategory, arg3?: string);
      /**
       * Method Parameters: 
       *  - (RadioScript arg0): void
       */
      AddRadioScript(arg0: zombie.radio.scripting.RadioScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.ChannelCategory
       */
      GetCategory(): zombie.radio.ChannelCategory;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetFrequency(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      GetPlayerIsListening(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsTv(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      LoadAiringBroadcast(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetPlayerIsListening(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      UpdateScripts(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirCounterMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioBroadCast
       */
      getAiringBroadcast(): zombie.radio.scripting.RadioBroadCast;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioScript
       */
      getCurrentScript(): zombie.radio.scripting.RadioScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentScriptLoop(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentScriptMaxLoops(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastAiredLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastBroadcastID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.RadioData
       */
      getRadioData(): zombie.radio.RadioData;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.radio.scripting.RadioScript
       */
      getRadioScript(arg0: string): zombie.radio.scripting.RadioScript;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimeSynced(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       *  - (String arg0, int arg1, int arg2, int arg3): void
       */
      setActiveScript(arg0: string, arg1: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setActiveScriptNull(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAirCounterMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (RadioBroadCast arg0): void
       */
      setAiringBroadcast(arg0: zombie.radio.scripting.RadioBroadCast): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLouisvilleObfuscate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (RadioData arg0): void
       */
      setRadioData(arg0: zombie.radio.RadioData): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTimeSynced(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor RadioLine.new
     * @
     * [CLASS] zombie.radio.scripting.RadioLine
     */
    export class RadioLine {
      /**
       * Constructors: 
       *  - (String arg0, float arg1, float arg2, float arg3)
       *  - (String arg0, float arg1, float arg2, float arg3, String arg4)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4?: string);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAirTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEffectsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomAirTime(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAirTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setText(arg0: string): void;
    }
    /**
     * @customConstructor RadioScript.new
     * @
     * [CLASS] zombie.radio.scripting.RadioScript
     */
    export class RadioScript {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2)
       *  - (String arg0, int arg1, int arg2, String arg3)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3?: string);
      /**
       * Method Parameters: 
       *  - (RadioBroadCast arg0): void
       *  - (RadioBroadCast arg0, boolean arg1): void
       */
      AddBroadcast(arg0: zombie.radio.scripting.RadioBroadCast, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2): void
       */
      AddExitOption(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetGUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      UpdateScript(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearExitOptions(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.scripting.RadioBroadCast>
       */
      getBroadcastList(): java.util.ArrayList<zombie.radio.scripting.RadioBroadCast>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.radio.scripting.RadioBroadCast
       */
      getBroadcastWithID(arg0: string): zombie.radio.scripting.RadioBroadCast;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioBroadCast
       */
      getCurrentBroadcast(): zombie.radio.scripting.RadioBroadCast;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.scripting.RadioScript$ExitOption>
       */
      getExitOptions(): java.util.ArrayList<zombie.radio.scripting.RadioScript$ExitOption>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoopMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoopMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioScript$ExitOption
       */
      getNextScript(): zombie.radio.scripting.RadioScript$ExitOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartDayStamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioBroadCast
       */
      getValidAirBroadcast(): zombie.radio.scripting.RadioBroadCast;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioBroadCast
       */
      getValidAirBroadcastDebug(): zombie.radio.scripting.RadioBroadCast;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStartDayStamp(arg0: number): void;
    }
    /**
     * @customConstructor ExitOption.new
     * @
     * [CLASS] zombie.radio.scripting.RadioScript$ExitOption
     */
    export class RadioScript$ExitOption {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2)
       */
      constructor(arg0: string, arg1: number, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptname(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartDelay(): number;
    }
    /**
     * @customConstructor RadioScriptManager.new
     * @
     * [CLASS] zombie.radio.scripting.RadioScriptManager
     */
    export class RadioScriptManager {

      /**
       * Method Parameters: 
       *  - (RadioChannel arg0, boolean arg1): void
       */
      AddChannel(arg0: zombie.radio.scripting.RadioChannel, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      Load(arg0: java.util.List<string>): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, boolean arg2): void
       */
      PlayerListensChannel(arg0: number, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RemoveChannel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Writer arg0): void
       */
      Save(arg0: java.io.Writer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      UpdateScripts(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<number, zombie.radio.scripting.RadioChannel>
       */
      getChannels(): java.util.Map<number, zombie.radio.scripting.RadioChannel>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList
       */
      getChannelsList(): java.util.ArrayList<any>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTimeStamp(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.radio.scripting.RadioChannel
       */
      getRadioChannel(arg0: string): zombie.radio.scripting.RadioChannel;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      init(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      simulateChannelUntil(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      simulateScriptsUntil(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioScriptManager
       */
      static getInstance(): zombie.radio.scripting.RadioScriptManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static hasInstance(): boolean;
    }
  }
}
