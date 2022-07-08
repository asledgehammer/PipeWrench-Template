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
 * File generated at Friday July 2022 15:18:33.591-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.debug {
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.debug.BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class BooleanDebugOption {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, boolean arg2)
       */
      constructor(arg0: string | null, arg1: boolean, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDefaultValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor DebugLog.new
     * @
     * [CLASS] zombie.debug.DebugLog
     */
    export class DebugLog {
      /** zombie.debug.DebugLogStream */
      static readonly ActionSystem?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Animation?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Asset?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Clothing?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Combat?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Craftboid?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly FileIO?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Fireplace?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly General?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Input?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly IsoRegion?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Lua?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly MapLoading?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Mod?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Multiplayer?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Network?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly NetworkFileDebug?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly NetworkPacketDebug?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Objects?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Radio?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Recipe?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Script?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Security?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Shader?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Sledgehammer?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Sound?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Statistic?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly UnitTests?: zombie.debug.DebugLogStream;
      /** int */
      static readonly VERSION: number;
      /** zombie.debug.DebugLogStream */
      static readonly Vehicle?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Voice?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Zombie?: zombie.debug.DebugLogStream;
      /** java.util.Map<java.util.UUID, java.util.List<com.asledgehammer.crafthammer.api.event.log.LogListener>> */
      static readonly listeners?: java.util.Map<java.util.UUID, java.util.List<com.asledgehammer.crafthammer.api.event.log.LogListener>>;
      /** boolean */
      static printServerTime: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UUID arg0, LogListener arg1): void
       */
      static addListener(arg0: java.util.UUID, arg1: com.asledgehammer.crafthammer.api.event.log.LogListener): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0): void
       */
      static disableLog(arg0: zombie.debug.DebugType): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0): void
       */
      static enableLog(arg0: zombie.debug.DebugType): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7, Object arg8): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10, Object arg11): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10, Object arg11, Object arg12): string
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10, Object arg11, Object arg12, Object arg13): string
       */
      static formatString(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity, arg2: string, arg3: any, arg4: string, arg5?: any, arg6?: any, arg7?: any, arg8?: any, arg9?: any, arg10?: any, arg11?: any, arg12?: any, arg13?: any): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1, String arg2, Object arg3, String arg4, Object... arg5): string
       */
      static formatStringVarArgs(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity, arg2: string, arg3: any, arg4: string, arg5: any): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.debug.DebugType>
       */
      static getDebugTypes(): java.util.ArrayList<zombie.debug.DebugType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0): boolean
       */
      static isEnabled(arg0: zombie.debug.DebugType): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (LogSeverity arg0, DebugType arg1): boolean
       */
      static isLogEnabled(arg0: zombie.debug.LogSeverity, arg1: zombie.debug.DebugType): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static load(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Object arg0): void
       *  - (DebugType arg0, String arg1): void
       */
      static log(arg0: any, arg1?: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UUID arg0, LogListener arg1): void
       */
      static removeListener(arg0: java.util.UUID, arg1: com.asledgehammer.crafthammer.api.event.log.LogListener): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UUID arg0): void
       */
      static removeListeners(arg0: java.util.UUID): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static save(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, boolean arg1): void
       */
      static setLogEnabled(arg0: zombie.debug.DebugType, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (OutputStream arg0): void
       */
      static setStdErr(arg0: java.io.OutputStream): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (OutputStream arg0): void
       */
      static setStdOut(arg0: java.io.OutputStream): void;
    }
    /**
     * @customConstructor DebugLogStream.new
     * @
     * [CLASS] zombie.debug.DebugLogStream extends java.io.PrintStream
     */
    export class DebugLogStream {
      /** java.lang.String */
      static readonly s_prefixDebug?: string;
      /** java.lang.String */
      static readonly s_prefixErr?: string;
      /** java.lang.String */
      static readonly s_prefixOut?: string;
      /** java.lang.String */
      static readonly s_prefixWarn?: string;

      /**
       * Constructors: 
       *  - (PrintStream arg0, PrintStream arg1, PrintStream arg2, IDebugLogFormatter arg3)
       */
      constructor(arg0: java.io.PrintStream | null, arg1: java.io.PrintStream | null, arg2: java.io.PrintStream | null, arg3: zombie.debug.IDebugLogFormatter | null);
      /**
       * Method Parameters: 
       *  - (CharSequence arg0): java.lang.Appendable
       *  - (CharSequence arg0): java.io.PrintStream
       *  - (char arg0): java.lang.Appendable
       *  - (char arg0): java.io.PrintStream
       *  - (CharSequence arg0, int arg1, int arg2): java.lang.Appendable
       *  - (CharSequence arg0, int arg1, int arg2): java.io.PrintStream
       */
      append(arg0: java.lang.CharSequence | string, arg1?: number, arg2?: number): java.lang.Appendable | java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkError(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6): void
       */
      debugln(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      error(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      flush(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object... arg1): java.io.PrintStream
       *  - (Locale arg0, String arg1, Object... arg2): java.io.PrintStream
       */
      format(arg0: string | java.util.Locale, arg1: any | string, arg2?: any): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0): void
       *  - (boolean arg0): void
       *  - (char arg0): void
       *  - (int arg0): void
       *  - (double arg0): void
       *  - (float arg0): void
       *  - (long arg0): void
       *  - (char[] arg0): void
       */
      print(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Throwable arg0, String arg1, LogSeverity arg2): void
       *  - (Throwable arg0, String arg1, String arg2, LogSeverity arg3): void
       */
      printException(arg0: java.lang.Throwable, arg1: string, arg2: zombie.debug.LogSeverity | string, arg3?: zombie.debug.LogSeverity): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      printStackTrace(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, Object... arg2): void
       */
      printUnitTest(arg0: string, arg1: boolean, arg2: any): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object... arg1): java.io.PrintStream
       *  - (Locale arg0, String arg1, Object... arg2): java.io.PrintStream
       */
      printf(arg0: string | java.util.Locale, arg1: any | string, arg2?: any): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (char[] arg0): void
       *  - (double arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       *  - (Object arg0): void
       *  - (boolean arg0): void
       *  - (char arg0): void
       *  - (int arg0): void
       *  - (long arg0): void
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6, Object arg7): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9): void
       */
      println(arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any, arg9?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      warn(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (byte[] arg0): void
       *  - (byte[] arg0, int arg1, int arg2): void
       */
      write(arg0: number | number[], arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (byte[] arg0): void
       */
      writeBytes(arg0: number[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static generateCallerPrefix(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (StackTraceElement arg0, boolean arg1): string
       */
      static getStackTraceElementString(arg0: java.lang.StackTraceElement, arg1: boolean): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Throwable arg0): string
       */
      static getTopStackTraceString(arg0: java.lang.Throwable): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.OutputStream
       */
      static nullOutputStream(): java.io.OutputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): java.lang.StackTraceElement
       */
      static tryGetCallerTraceElement(arg0: number): java.lang.StackTraceElement;
    }
    /**
     * @customConstructor DebugOptions.new
     * @
     * [CLASS] zombie.debug.DebugOptions
     */
    export class DebugOptions {
      /** int */
      static readonly VERSION: number;
      /** zombie.debug.DebugOptions */
      static readonly instance?: zombie.debug.DebugOptions;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      addChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.debug.options.IDebugOption>
       */
      getChildren(): java.lang.Iterable<zombie.debug.options.IDebugOption>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.debug.BooleanDebugOption
       */
      getOptionByIndex(arg0: number): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.debug.BooleanDebugOption
       */
      getOptionByName(arg0: string): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onChildAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onDescendantAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static testThreadCrash(arg0: number): void;
    }
    /**
     * @customConstructor Checks.new
     * @
     * [CLASS] zombie.debug.DebugOptions$Checks extends zombie.debug.options.OptionGroup
     */
    export class DebugOptions$Checks {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      addChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.debug.options.IDebugOption>
       */
      getChildren(): java.lang.Iterable<zombie.debug.options.IDebugOption>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onChildAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onDescendantAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       *  - (IDebugOptionGroup arg0, String arg1, boolean arg2): zombie.debug.BooleanDebugOption
       */
      static newDebugOnlyOption(arg0: string | zombie.debug.options.IDebugOptionGroup, arg1: boolean | string, arg2?: boolean): zombie.debug.BooleanDebugOption;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       *  - (IDebugOptionGroup arg0, String arg1, boolean arg2): zombie.debug.BooleanDebugOption
       */
      static newOption(arg0: string | zombie.debug.options.IDebugOptionGroup, arg1: boolean | string, arg2?: boolean): zombie.debug.BooleanDebugOption;
    }
    /** [ENUM] zombie.debug.DebugType */
    export class DebugType {
      protected constructor();
      static readonly ActionSystem: zombie.debug.DebugType;
      static readonly Animation: zombie.debug.DebugType;
      static readonly Asset: zombie.debug.DebugType;
      static readonly Clothing: zombie.debug.DebugType;
      static readonly Combat: zombie.debug.DebugType;
      static readonly CraftHammer: zombie.debug.DebugType;
      static readonly Damage: zombie.debug.DebugType;
      static readonly Death: zombie.debug.DebugType;
      static readonly FileIO: zombie.debug.DebugType;
      static readonly Fireplace: zombie.debug.DebugType;
      static readonly General: zombie.debug.DebugType;
      static readonly Input: zombie.debug.DebugType;
      static readonly IsoRegion: zombie.debug.DebugType;
      static readonly Lua: zombie.debug.DebugType;
      static readonly MapLoading: zombie.debug.DebugType;
      static readonly Mod: zombie.debug.DebugType;
      static readonly Multiplayer: zombie.debug.DebugType;
      static readonly Network: zombie.debug.DebugType;
      static readonly NetworkFileDebug: zombie.debug.DebugType;
      static readonly NetworkPacketDebug: zombie.debug.DebugType;
      static readonly Objects: zombie.debug.DebugType;
      static readonly Ownership: zombie.debug.DebugType;
      static readonly Radio: zombie.debug.DebugType;
      static readonly Recipe: zombie.debug.DebugType;
      static readonly Script: zombie.debug.DebugType;
      static readonly Security: zombie.debug.DebugType;
      static readonly Shader: zombie.debug.DebugType;
      static readonly Sledgehammer: zombie.debug.DebugType;
      static readonly Sound: zombie.debug.DebugType;
      static readonly Statistic: zombie.debug.DebugType;
      static readonly UnitTests: zombie.debug.DebugType;
      static readonly Vehicle: zombie.debug.DebugType;
      static readonly Voice: zombie.debug.DebugType;
      static readonly Zombie: zombie.debug.DebugType;
      name(): string;
      ordinal(): number;
      getColor(): string;

      getLabel(): string;

    }
    /**
     * @customConstructor IDebugLogFormatter.new
     * @
     * [INTERFACE] zombie.debug.IDebugLogFormatter
     */
    export class IDebugLogFormatter {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6, Object arg7): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10, Object arg11): string
       *  - (LogSeverity arg0, String arg1, String arg2, String arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9, Object arg10, Object arg11, Object arg12): string
       */
      format(arg0: zombie.debug.LogSeverity, arg1: string, arg2: string, arg3: string, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any, arg9?: any, arg10?: any, arg11?: any, arg12?: any): string;
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0): boolean
       */
      isLogEnabled(arg0: zombie.debug.LogSeverity): boolean;
    }
    /** [ENUM] zombie.debug.LogSeverity */
    export class LogSeverity {
      protected constructor();
      static readonly Error: zombie.debug.LogSeverity;
      static readonly General: zombie.debug.LogSeverity;
      static readonly Trace: zombie.debug.LogSeverity;
      static readonly Warning: zombie.debug.LogSeverity;
      name(): string;
      ordinal(): number;
    }
  }
}
