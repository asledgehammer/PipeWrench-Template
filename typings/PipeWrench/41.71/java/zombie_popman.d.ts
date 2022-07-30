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
  export namespace zombie.popman {
    /**
     * @customConstructor ObjectPool.new
     * @
     * [CLASS] zombie.popman.ObjectPool
     */
    export class ObjectPool<T> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Allocator arg0)
       */
      constructor(arg0?: zombie.popman.ObjectPool$Allocator<T>);
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<T>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<T> | java.util.List<T>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<T>): void;
    }
    /**
     * @customConstructor Allocator.new
     * @
     * [INTERFACE] zombie.popman.ObjectPool$Allocator
     */
    export class ObjectPool$Allocator<T> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      allocate(): any;
    }
    /**
     * @customConstructor ZombiePopulationManager.new
     * @
     * [CLASS] zombie.popman.ZombiePopulationManager
     */
    export class ZombiePopulationManager {
      /** boolean */
      static bDebugLoggingEnabled: boolean;
      /** zombie.popman.ZombiePopulationManager */
      static readonly instance?: zombie.popman.ZombiePopulationManager;


      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      addChunkToWorld(arg0: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (WorldSound arg0, boolean arg1): void
       */
      addWorldSound(arg0: zombie.WorldSoundManager$WorldSound, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      beginSaveRealZombies(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      createHordeFromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): void
       */
      createHordeInAreaTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      dbgClearZombies(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      dbgSpawnNow(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      dbgSpawnTimeToZero(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endSaveRealZombies(): void;
      /**
       * Method Parameters: 
       *  - (IsoMetaGrid arg0): void
       */
      init(arg0: zombie.iso.IsoMetaGrid): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onConfigReloaded(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      playerSpawnedAt(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, KahluaTable arg4): void
       */
      registerSpawnOrigin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      removeChunkFromWorld(arg0: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setAggroTarget(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldWait(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, IsoGridSquare arg1): void
       */
      sitAgainstWall(arg0: zombie.characters.IsoZombie, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLoadedAreas(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateMain(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateThread(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      virtualizeZombie(arg0: zombie.characters.IsoZombie): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor ZombiePopulationRenderer.new
     * @
     * [CLASS] zombie.popman.ZombiePopulationRenderer
     */
    export class ZombiePopulationRenderer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      outlineRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, float arg1, float arg2, float arg3): void
       */
      render(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      renderCellInfo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      renderCircle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      renderString(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      renderVehicle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      renderZombie(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
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
       *  - (int arg0, int arg1): void
       */
      setWallFollowerEnd(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setWallFollowerStart(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      uiToWorldX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      uiToWorldY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      wallFollowerMouseMove(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldToScreenX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldToScreenY(arg0: number): number;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.popman.ZombiePopulationRenderer$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class ZombiePopulationRenderer$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (ZombiePopulationRenderer arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.popman.ZombiePopulationRenderer, arg1: string, arg2: boolean);
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
  }
}
