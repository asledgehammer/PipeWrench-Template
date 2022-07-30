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
  export namespace zombie.characters.CharacterTimedActions {
    /**
     * @customConstructor BaseAction.new
     * @
     * [CLASS] zombie.characters.CharacterTimedActions.BaseAction
     */
    export class BaseAction {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (AnimEvent arg0): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, float arg2): void
       */
      PlayLoopedSoundTillComplete(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finished(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceComplete(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceStop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJobDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getPrimaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPrimaryHandMdl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getSecondaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSecondaryHandMdl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasStalled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      perform(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetJobDelta(): void;
      /**
       * Method Parameters: 
       *  - (CharacterActionAnims arg0): void
       *  - (String arg0): void
       */
      setActionAnim(arg0: zombie.characters.CharacterActionAnims | string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, boolean arg1): void
       */
      setAnimVariable(arg0: string, arg1: string | boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlockMovementEtc(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLoopedAction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverrideAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, InventoryItem arg1): void
       *  - (InventoryItem arg0, InventoryItem arg1, boolean arg2): void
       */
      setOverrideHandModels(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.InventoryItem, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, boolean arg2): void
       */
      setOverrideHandModelsObject(arg0: any, arg1: any, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       */
      setOverrideHandModelsString(arg0: string, arg1: string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseProgressBar(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopTimedActionAnim(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      valid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      waitToStart(): void;
    }
    /**
     * @customConstructor LuaTimedAction.new
     * @
     * [CLASS] zombie.characters.CharacterTimedActions.LuaTimedAction extends zombie.characters.CharacterTimedActions.BaseAction
     */
    export class LuaTimedAction {
      /** java.lang.Object[] */
      static statObj?: any[];

      /**
       * Constructors: 
       *  - (KahluaTable arg0, IsoGameCharacter arg1)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable, arg1: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (AnimEvent arg0): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, float arg2): void
       */
      PlayLoopedSoundTillComplete(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finished(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceComplete(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceStop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJobDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getPrimaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPrimaryHandMdl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getSecondaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSecondaryHandMdl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasStalled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      perform(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetJobDelta(): void;
      /**
       * Method Parameters: 
       *  - (CharacterActionAnims arg0): void
       *  - (String arg0): void
       */
      setActionAnim(arg0: zombie.characters.CharacterActionAnims | string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, boolean arg1): void
       */
      setAnimVariable(arg0: string, arg1: string | boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlockMovementEtc(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLoopedAction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverrideAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, InventoryItem arg1): void
       *  - (InventoryItem arg0, InventoryItem arg1, boolean arg2): void
       */
      setOverrideHandModels(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.InventoryItem, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, boolean arg2): void
       */
      setOverrideHandModelsObject(arg0: any, arg1: any, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       */
      setOverrideHandModelsString(arg0: string, arg1: string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseProgressBar(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopTimedActionAnim(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      valid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      waitToStart(): void;
    }
    /**
     * @customConstructor LuaTimedActionNew.new
     * @
     * [CLASS] zombie.characters.CharacterTimedActions.LuaTimedActionNew extends zombie.characters.CharacterTimedActions.BaseAction
     */
    export class LuaTimedActionNew {
      /**
       * Constructors: 
       *  - (KahluaTable arg0, IsoGameCharacter arg1)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable, arg1: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Mover arg0): void
       */
      Failed(arg0: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (AnimEvent arg0): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3): void
       */
      Pathfind(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, float arg2): void
       */
      PlayLoopedSoundTillComplete(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Path arg0, Mover arg1): void
       */
      Succeeded(arg0: zombie.ai.astar.Path, arg1: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finished(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceComplete(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceStop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJobDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMetaType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getPrimaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPrimaryHandMdl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getSecondaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSecondaryHandMdl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasStalled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      perform(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetJobDelta(): void;
      /**
       * Method Parameters: 
       *  - (CharacterActionAnims arg0): void
       *  - (String arg0): void
       */
      setActionAnim(arg0: zombie.characters.CharacterActionAnims | string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, boolean arg1): void
       */
      setAnimVariable(arg0: string, arg1: string | boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlockMovementEtc(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLoopedAction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverrideAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, InventoryItem arg1): void
       *  - (InventoryItem arg0, InventoryItem arg1, boolean arg2): void
       */
      setOverrideHandModels(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.InventoryItem, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, boolean arg2): void
       */
      setOverrideHandModelsObject(arg0: any, arg1: any, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       */
      setOverrideHandModelsString(arg0: string, arg1: string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseProgressBar(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopTimedActionAnim(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      valid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      waitToStart(): void;
    }
  }
}
