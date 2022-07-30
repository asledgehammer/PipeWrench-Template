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
  export namespace zombie.characters.action {
    /**
     * @customConstructor ActionContext.new
     * @
     * [CLASS] zombie.characters.action.ActionContext
     */
    export class ActionContext {
      /**
       * Constructors: 
       *  - (IAnimatable arg0)
       */
      constructor(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimatable);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      childStateCount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearEvent(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      foreachChildState(arg0: java.util._function_.Consumer<zombie.characters.action.ActionState>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.action.ActionState
       */
      getChildStateAt(arg0: number): zombie.characters.action.ActionState;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.characters.action.ActionState>
       */
      getChildStates(): java.util.List<zombie.characters.action.ActionState>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionState
       */
      getCurrentState(): zombie.characters.action.ActionState;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionGroup
       */
      getGroup(): zombie.characters.action.ActionGroup;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      getOwner(): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionStateSnapshot
       */
      getPlaybackStateSnapshot(): zombie.characters.action.ActionStateSnapshot;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPreviousStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasChildStates(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, int arg1): boolean
       */
      hasEventOccurred(arg0: string, arg1?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      indexOfChildState(arg0: java.util._function_.Predicate<zombie.characters.action.ActionState>): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      logCurrentState(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (int arg0, String arg1): void
       */
      reportEvent(arg0: string | number, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (ActionGroup arg0): void
       */
      setGroup(arg0: zombie.characters.action.ActionGroup): void;
      /**
       * Method Parameters: 
       *  - (ActionStateSnapshot arg0): void
       */
      setPlaybackStateSnapshot(arg0: zombie.characters.action.ActionStateSnapshot): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor ActionGroup.new
     * @
     * [CLASS] zombie.characters.action.ActionGroup
     */
    export class ActionGroup {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ActionState arg0): void
       */
      addState(arg0: zombie.characters.action.ActionState): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.action.ActionState
       */
      get(arg0: string): zombie.characters.action.ActionState;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionState
       */
      getDefaultState(): zombie.characters.action.ActionState;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionState
       */
      getInitialState(): zombie.characters.action.ActionState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.action.ActionGroup
       */
      static getActionGroup(arg0: string): zombie.characters.action.ActionGroup;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reloadAll(): void;
    }
    /**
     * @customConstructor ActionState.new
     * @
     * [CLASS] zombie.characters.action.ActionState
     */
    export class ActionState {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeSubstate(): boolean;
      /**
       * Method Parameters: 
       *  - (ActionState arg0): boolean
       */
      canHaveSubState(arg0: zombie.characters.action.ActionState): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canHaveSubStates(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      load(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (File arg0): void
       */
      parse(arg0: java.io.File): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetForReload(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sortTransitions(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ActionState arg0, ActionState arg1): boolean
       */
      static canHaveSubState(arg0: zombie.characters.action.ActionState, arg1: zombie.characters.action.ActionState): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String[] arg0, String[] arg1): boolean
       */
      static tagsOverlap(arg0: string[], arg1: string[]): boolean;
    }
    /**
     * @customConstructor ActionStateSnapshot.new
     * @
     * [CLASS] zombie.characters.action.ActionStateSnapshot
     */
    export class ActionStateSnapshot {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
