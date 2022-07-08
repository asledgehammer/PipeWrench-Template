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
 * File generated at Friday July 2022 15:18:33.650-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.gameStates {
    /**
     * @customConstructor AnimationViewerState.new
     * @
     * [CLASS] zombie.gameStates.AnimationViewerState extends zombie.gameStates.GameState
     */
    export class AnimationViewerState {
      /** zombie.gameStates.AnimationViewerState */
      static instance?: zombie.gameStates.AnimationViewerState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
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
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.AnimationViewerState
       */
      static checkInstance(): zombie.gameStates.AnimationViewerState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.AnimationViewerState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class AnimationViewerState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (AnimationViewerState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.AnimationViewerState | null, arg1: string | null, arg2: boolean);
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
     * @customConstructor AttachmentEditorState.new
     * @
     * [CLASS] zombie.gameStates.AttachmentEditorState extends zombie.gameStates.GameState
     */
    export class AttachmentEditorState {
      /** zombie.gameStates.AttachmentEditorState */
      static instance?: zombie.gameStates.AttachmentEditorState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.AttachmentEditorState
       */
      static checkInstance(): zombie.gameStates.AttachmentEditorState;
    }
    /**
     * @customConstructor ChooseGameInfo.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo
     */
    export class ChooseGameInfo {

      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static getAvailableModDetails(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Map
       */
      static getMapDetails(arg0: string): zombie.gameStates.ChooseGameInfo$Map;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static getModDetails(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static readModInfo(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
    }
    /**
     * @customConstructor Map.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$Map
     */
    export class ChooseGameInfo$Map {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDirectory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLotDirectories(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getThumbnail(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFixed2x(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFixed2x(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setThumbnail(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
    }
    /**
     * @customConstructor Mod.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$Mod
     */
    export class ChooseGameInfo$Mod {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      addPack(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      addTileDef(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDir(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$PackFile>
       */
      getPacks(): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$PackFile>;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getPoster(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPosterCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequire(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$TileDef>
       */
      getTileDefs(): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$TileDef>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUrl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.GameVersion
       */
      getVersionMax(): zombie.core.GameVersion;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.GameVersion
       */
      getVersionMin(): zombie.core.GameVersion;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorkshopID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAvailable(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAvailable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setRequire(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUrl(arg0: string): void;
    }
    /**
     * @customConstructor PackFile.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$PackFile
     */
    export class ChooseGameInfo$PackFile {
      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string | null, arg1: number);
    }
    /**
     * @customConstructor SpawnOrigin.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$SpawnOrigin
     */
    export class ChooseGameInfo$SpawnOrigin {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * @customConstructor TileDef.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$TileDef
     */
    export class ChooseGameInfo$TileDef {
      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string | null, arg1: number);
    }
    /**
     * @customConstructor ConnectToServerState.new
     * @
     * [CLASS] zombie.gameStates.ConnectToServerState extends zombie.gameStates.GameState
     */
    export class ConnectToServerState {
      /** zombie.gameStates.ConnectToServerState */
      static instance?: zombie.gameStates.ConnectToServerState;

      /**
       * Constructors: 
       *  - (ByteBuffer arg0)
       */
      constructor(arg0: java.nio.ByteBuffer | null);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      FromLua(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor DebugChunkState.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState extends zombie.gameStates.GameState
     */
    export class DebugChunkState {
      /** zombie.gameStates.DebugChunkState */
      static instance?: zombie.gameStates.DebugChunkState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, boolean arg7): zombie.iso.LosUtil$TestResults
       */
      lineClearCached(arg0: zombie.iso.IsoCell, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): zombie.iso.LosUtil$TestResults;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderScene(): void;
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
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      updateScene(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.DebugChunkState
       */
      static checkInstance(): zombie.gameStates.DebugChunkState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class DebugChunkState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (DebugChunkState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.DebugChunkState | null, arg1: string | null, arg2: boolean);
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
     * @customConstructor DebugGlobalObjectState.new
     * @
     * [CLASS] zombie.gameStates.DebugGlobalObjectState extends zombie.gameStates.GameState
     */
    export class DebugGlobalObjectState {
      /** zombie.gameStates.DebugGlobalObjectState */
      static instance?: zombie.gameStates.DebugGlobalObjectState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderScene(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      updateScene(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor GameLoadingState.new
     * @
     * [CLASS] zombie.gameStates.GameLoadingState extends zombie.gameStates.GameState
     */
    export class GameLoadingState {
      /** java.lang.String */
      static GameLoadingString?: string;
      /** boolean */
      static bDone: boolean;
      /** boolean */
      static build23Stop: boolean;
      /** int */
      static convertingFileCount: number;
      /** int */
      static convertingFileMax: number;
      /** boolean */
      static convertingWorld: boolean;
      /** java.lang.Thread */
      static loader?: java.lang.Thread;
      /** boolean */
      static mapDownloadFailed: boolean;
      /** boolean */
      static newGame: boolean;
      /** boolean */
      static playerCreated: boolean;
      /** boolean */
      static playerWrongIP: boolean;
      /** boolean */
      static unexpectedError: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Done(): void;
    }
    /**
     * @customConstructor GameState.new
     * @
     * [CLASS] zombie.gameStates.GameState
     */
    export class GameState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor GameStateMachine.new
     * @
     * [CLASS] zombie.gameStates.GameStateMachine
     */
    export class GameStateMachine {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (GameState arg0): void
       */
      forceNextState(arg0: zombie.gameStates.GameState): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /** [ENUM] zombie.gameStates.GameStateMachine$StateAction */
    export class GameStateMachine$StateAction {
      protected constructor();
      static readonly Continue: zombie.gameStates.GameStateMachine$StateAction;
      static readonly Remain: zombie.gameStates.GameStateMachine$StateAction;
      static readonly Yield: zombie.gameStates.GameStateMachine$StateAction;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor LoadingQueueState.new
     * @
     * [CLASS] zombie.gameStates.LoadingQueueState extends zombie.gameStates.GameState
     */
    export class LoadingQueueState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static onConnectionImmediate(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static onPlaceInQueue(arg0: number): void;
    }
    /**
     * @customConstructor MainScreenState.new
     * @
     * [CLASS] zombie.gameStates.MainScreenState extends zombie.gameStates.GameState
     */
    export class MainScreenState {
      /** java.lang.String */
      static Version?: string;
      /** fmod.fmod.Audio */
      static ambient?: fmod.fmod.Audio;
      /** zombie.gameStates.MainScreenState */
      static instance?: zombie.gameStates.MainScreenState;
      /** float */
      static totalScale: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      ShouldShowLogo(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderBackground(): void;
      /**
       * Method Parameters: 
       *  - (ConnectToServerState arg0): void
       */
      setConnectToServerState(arg0: zombie.gameStates.ConnectToServerState): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5): void
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, Color arg5): void
       */
      static DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number | zombie.core.Color): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BufferedImage arg0): java.nio.ByteBuffer
       */
      static convertToByteBuffer(arg0: java.awt.image.BufferedImage): java.nio.ByteBuffer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.MainScreenState
       */
      static getInstance(): zombie.gameStates.MainScreenState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): org.lwjgl.glfw.GLFWImage$Buffer
       */
      static loadIcons(): org.lwjgl.glfw.GLFWImage$Buffer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String[] arg0): void
       */
      static main(arg0: string[]): void;
    }
    /**
     * @customConstructor Credit.new
     * @
     * [CLASS] zombie.gameStates.MainScreenState$Credit
     */
    export class MainScreenState$Credit {
      /**
       * Constructors: 
       *  - (MainScreenState arg0, Texture arg1, Texture arg2)
       */
      constructor(arg0: zombie.gameStates.MainScreenState | null, arg1: zombie.core.textures.Texture | null, arg2: zombie.core.textures.Texture | null);
    }
    /**
     * @customConstructor ScreenElement.new
     * @
     * [CLASS] zombie.gameStates.MainScreenState$ScreenElement
     */
    export class MainScreenState$ScreenElement {
      /**
       * Constructors: 
       *  - (Texture arg0, int arg1, int arg2, float arg3, float arg4, int arg5)
       */
      constructor(arg0: zombie.core.textures.Texture | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
  }
}
