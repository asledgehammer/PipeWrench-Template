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
  export namespace zombie.ai.states {
    /**
     * @customConstructor AttackState.new
     * @
     * [CLASS] zombie.ai.states.AttackState extends zombie.ai.State
     */
    export class AttackState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.AttackState
       */
      static instance(): zombie.ai.states.AttackState;
    }
    /**
     * @customConstructor BurntToDeath.new
     * @
     * [CLASS] zombie.ai.states.BurntToDeath extends zombie.ai.State
     */
    export class BurntToDeath {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.BurntToDeath
       */
      static instance(): zombie.ai.states.BurntToDeath;
    }
    /**
     * @customConstructor ClimbDownSheetRopeState.new
     * @
     * [CLASS] zombie.ai.states.ClimbDownSheetRopeState extends zombie.ai.State
     */
    export class ClimbDownSheetRopeState {
      /** float */
      static readonly CLIMB_DOWN_SPEED: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getClimbDownSheetRopeSpeed(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbDownSheetRopeState
       */
      static instance(): zombie.ai.states.ClimbDownSheetRopeState;
    }
    /**
     * @customConstructor ClimbOverFenceState.new
     * @
     * [CLASS] zombie.ai.states.ClimbOverFenceState extends zombie.ai.State
     */
    export class ClimbOverFenceState {
      /** int */
      static readonly COLLIDE_WITH_WALL: number;
      /** int */
      static readonly TRIP_METAL_BARS: number;
      /** int */
      static readonly TRIP_TREE: number;
      /** int */
      static readonly TRIP_WINDOW: number;
      /** int */
      static readonly TRIP_ZOMBIE: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoDirections arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoDirections): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbOverFenceState
       */
      static instance(): zombie.ai.states.ClimbOverFenceState;
    }
    /**
     * @customConstructor ClimbOverWallState.new
     * @
     * [CLASS] zombie.ai.states.ClimbOverWallState extends zombie.ai.State
     */
    export class ClimbOverWallState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoDirections arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoDirections): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbOverWallState
       */
      static instance(): zombie.ai.states.ClimbOverWallState;
    }
    /**
     * @customConstructor ClimbSheetRopeState.new
     * @
     * [CLASS] zombie.ai.states.ClimbSheetRopeState extends zombie.ai.State
     */
    export class ClimbSheetRopeState {
      /** float */
      static readonly CLIMB_SPEED: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getClimbSheetRopeSpeed(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbSheetRopeState
       */
      static instance(): zombie.ai.states.ClimbSheetRopeState;
    }
    /**
     * @customConstructor ClimbThroughWindowState.new
     * @
     * [CLASS] zombie.ai.states.ClimbThroughWindowState extends zombie.ai.State
     */
    export class ClimbThroughWindowState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.IsoObject
       */
      getWindow(arg0: zombie.characters.IsoGameCharacter): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, IsoDirections arg3): boolean
       */
      isPastInnerEdgeOfSquare(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, IsoDirections arg3): boolean
       */
      isPastOuterEdgeOfSquare(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isWindowClosing(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      slideX(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      slideY(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbThroughWindowState
       */
      static instance(): zombie.ai.states.ClimbThroughWindowState;
    }
    /**
     * @customConstructor CloseWindowState.new
     * @
     * [CLASS] zombie.ai.states.CloseWindowState extends zombie.ai.State
     */
    export class CloseWindowState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.CloseWindowState
       */
      static instance(): zombie.ai.states.CloseWindowState;
    }
    /**
     * @customConstructor CrawlingZombieTurnState.new
     * @
     * [CLASS] zombie.ai.states.CrawlingZombieTurnState extends zombie.ai.State
     */
    export class CrawlingZombieTurnState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoDirections arg1): boolean
       */
      static calculateDir(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoDirections): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.CrawlingZombieTurnState
       */
      static instance(): zombie.ai.states.CrawlingZombieTurnState;
    }
    /**
     * @customConstructor FakeDeadAttackState.new
     * @
     * [CLASS] zombie.ai.states.FakeDeadAttackState extends zombie.ai.State
     */
    export class FakeDeadAttackState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FakeDeadAttackState
       */
      static instance(): zombie.ai.states.FakeDeadAttackState;
    }
    /**
     * @customConstructor FakeDeadZombieState.new
     * @
     * [CLASS] zombie.ai.states.FakeDeadZombieState extends zombie.ai.State
     */
    export class FakeDeadZombieState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FakeDeadZombieState
       */
      static instance(): zombie.ai.states.FakeDeadZombieState;
    }
    /**
     * @customConstructor FishingState.new
     * @
     * [CLASS] zombie.ai.states.FishingState extends zombie.ai.State
     */
    export class FishingState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FishingState
       */
      static instance(): zombie.ai.states.FishingState;
    }
    /**
     * @customConstructor FitnessState.new
     * @
     * [CLASS] zombie.ai.states.FitnessState extends zombie.ai.State
     */
    export class FitnessState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FitnessState
       */
      static instance(): zombie.ai.states.FitnessState;
    }
    /**
     * @customConstructor IdleState.new
     * @
     * [CLASS] zombie.ai.states.IdleState extends zombie.ai.State
     */
    export class IdleState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.IdleState
       */
      static instance(): zombie.ai.states.IdleState;
    }
    /**
     * @customConstructor LungeState.new
     * @
     * [CLASS] zombie.ai.states.LungeState extends zombie.ai.State
     */
    export class LungeState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.LungeState
       */
      static instance(): zombie.ai.states.LungeState;
    }
    /**
     * @customConstructor OpenWindowState.new
     * @
     * [CLASS] zombie.ai.states.OpenWindowState extends zombie.ai.State
     */
    export class OpenWindowState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoWindow arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.objects.IsoWindow): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.OpenWindowState
       */
      static instance(): zombie.ai.states.OpenWindowState;
    }
    /**
     * @customConstructor PathFindState.new
     * @
     * [CLASS] zombie.ai.states.PathFindState extends zombie.ai.State
     */
    export class PathFindState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.PathFindState2
       */
      static instance(): zombie.vehicles.PathFindState2;
    }
    /**
     * @customConstructor PlayerActionsState.new
     * @
     * [CLASS] zombie.ai.states.PlayerActionsState extends zombie.ai.State
     */
    export class PlayerActionsState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerActionsState
       */
      static instance(): zombie.ai.states.PlayerActionsState;
    }
    /**
     * @customConstructor PlayerAimState.new
     * @
     * [CLASS] zombie.ai.states.PlayerAimState extends zombie.ai.State
     */
    export class PlayerAimState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerAimState
       */
      static instance(): zombie.ai.states.PlayerAimState;
    }
    /**
     * @customConstructor PlayerEmoteState.new
     * @
     * [CLASS] zombie.ai.states.PlayerEmoteState extends zombie.ai.State
     */
    export class PlayerEmoteState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerEmoteState
       */
      static instance(): zombie.ai.states.PlayerEmoteState;
    }
    /**
     * @customConstructor PlayerExtState.new
     * @
     * [CLASS] zombie.ai.states.PlayerExtState extends zombie.ai.State
     */
    export class PlayerExtState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerExtState
       */
      static instance(): zombie.ai.states.PlayerExtState;
    }
    /**
     * @customConstructor PlayerFallDownState.new
     * @
     * [CLASS] zombie.ai.states.PlayerFallDownState extends zombie.ai.State
     */
    export class PlayerFallDownState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerFallDownState
       */
      static instance(): zombie.ai.states.PlayerFallDownState;
    }
    /**
     * @customConstructor PlayerFallingState.new
     * @
     * [CLASS] zombie.ai.states.PlayerFallingState extends zombie.ai.State
     */
    export class PlayerFallingState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerFallingState
       */
      static instance(): zombie.ai.states.PlayerFallingState;
    }
    /**
     * @customConstructor PlayerGetUpState.new
     * @
     * [CLASS] zombie.ai.states.PlayerGetUpState extends zombie.ai.State
     */
    export class PlayerGetUpState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerGetUpState
       */
      static instance(): zombie.ai.states.PlayerGetUpState;
    }
    /**
     * @customConstructor PlayerHitReactionPVPState.new
     * @
     * [CLASS] zombie.ai.states.PlayerHitReactionPVPState extends zombie.ai.State
     */
    export class PlayerHitReactionPVPState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerHitReactionPVPState
       */
      static instance(): zombie.ai.states.PlayerHitReactionPVPState;
    }
    /**
     * @customConstructor PlayerHitReactionState.new
     * @
     * [CLASS] zombie.ai.states.PlayerHitReactionState extends zombie.ai.State
     */
    export class PlayerHitReactionState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerHitReactionState
       */
      static instance(): zombie.ai.states.PlayerHitReactionState;
    }
    /**
     * @customConstructor PlayerKnockedDown.new
     * @
     * [CLASS] zombie.ai.states.PlayerKnockedDown extends zombie.ai.State
     */
    export class PlayerKnockedDown {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerKnockedDown
       */
      static instance(): zombie.ai.states.PlayerKnockedDown;
    }
    /**
     * @customConstructor PlayerOnGroundState.new
     * @
     * [CLASS] zombie.ai.states.PlayerOnGroundState extends zombie.ai.State
     */
    export class PlayerOnGroundState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerOnGroundState
       */
      static instance(): zombie.ai.states.PlayerOnGroundState;
    }
    /**
     * @customConstructor PlayerSitOnGroundState.new
     * @
     * [CLASS] zombie.ai.states.PlayerSitOnGroundState extends zombie.ai.State
     */
    export class PlayerSitOnGroundState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerSitOnGroundState
       */
      static instance(): zombie.ai.states.PlayerSitOnGroundState;
    }
    /**
     * @customConstructor PlayerStrafeState.new
     * @
     * [CLASS] zombie.ai.states.PlayerStrafeState extends zombie.ai.State
     */
    export class PlayerStrafeState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerStrafeState
       */
      static instance(): zombie.ai.states.PlayerStrafeState;
    }
    /**
     * @customConstructor SmashWindowState.new
     * @
     * [CLASS] zombie.ai.states.SmashWindowState extends zombie.ai.State
     */
    export class SmashWindowState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.SmashWindowState
       */
      static instance(): zombie.ai.states.SmashWindowState;
    }
    /**
     * @customConstructor StaggerBackState.new
     * @
     * [CLASS] zombie.ai.states.StaggerBackState extends zombie.ai.State
     */
    export class StaggerBackState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.StaggerBackState
       */
      static instance(): zombie.ai.states.StaggerBackState;
    }
    /**
     * @customConstructor SwipeStatePlayer.new
     * @
     * [CLASS] zombie.ai.states.SwipeStatePlayer extends zombie.ai.State
     */
    export class SwipeStatePlayer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoLivingCharacter arg0, AttackVars arg1): void
       */
      CalcAttackVars(arg0: zombie.characters.IsoLivingCharacter, arg1: zombie.network.packets.hit.AttackVars): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1, HitInfo arg2): number
       */
      CalcHitChance(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon, arg2: zombie.network.packets.hit.HitInfo): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1, AttackVars arg2, ArrayList arg3): void
       */
      CalcHitList(arg0: zombie.characters.IsoGameCharacter, arg1: boolean, arg2: zombie.network.packets.hit.AttackVars, arg3: java.util.ArrayList<zombie.network.packets.hit.HitInfo>): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      ConnectSwing(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoLivingCharacter arg0, HandWeapon arg1, boolean arg2, ArrayList arg3, ArrayList arg4): void
       */
      calcValidTargets(arg0: zombie.characters.IsoLivingCharacter, arg1: zombie.inventory.types.HandWeapon, arg2: boolean, arg3: java.util.ArrayList<zombie.network.packets.hit.HitInfo>, arg4: java.util.ArrayList<zombie.network.packets.hit.HitInfo>): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1): void
       */
      changeWeapon(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HitInfo arg1, HitInfo arg2): boolean
       */
      isProneTargetBetter(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.network.packets.hit.HitInfo, arg2: zombie.network.packets.hit.HitInfo): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1): void
       */
      static WeaponLowerCondition(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoMovingObject arg1): boolean
       */
      static checkPVP(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoMovingObject): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoMovingObject arg0, String arg1, Vector3 arg2): zombie.iso.Vector3
       */
      static getBoneWorldPos(arg0: zombie.iso.IsoMovingObject, arg1: string, arg2: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.SwipeStatePlayer
       */
      static instance(): zombie.ai.states.SwipeStatePlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      static isProne(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      static isStanding(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoMovingObject arg0, HandWeapon arg1, IsoGameCharacter arg2): void
       */
      static splash(arg0: zombie.iso.IsoMovingObject, arg1: zombie.inventory.types.HandWeapon, arg2: zombie.characters.IsoGameCharacter): void;
    }
    /**
     * @customConstructor CustomComparator.new
     * @
     * [CLASS] zombie.ai.states.SwipeStatePlayer$CustomComparator
     */
    export class SwipeStatePlayer$CustomComparator {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (HitInfo arg0, HitInfo arg1): number
       *  - (Object arg0, Object arg1): number
       */
      compare<U>(arg0: any, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Comparator<T>
       */
      reversed<U>(): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): java.util.Comparator<T>
       *  - (Function arg0): java.util.Comparator<T>
       *  - (Function arg0, Comparator arg1): java.util.Comparator<T>
       */
      thenComparing<U>(arg0: java.util.Comparator<any> | java.util._function_.Function<any, U>, arg1?: java.util.Comparator<U>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToDoubleFunction arg0): java.util.Comparator<T>
       */
      thenComparingDouble<U>(arg0: java.util._function_.ToDoubleFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToIntFunction arg0): java.util.Comparator<T>
       */
      thenComparingInt<U>(arg0: java.util._function_.ToIntFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToLongFunction arg0): java.util.Comparator<T>
       */
      thenComparingLong<U>(arg0: java.util._function_.ToLongFunction<any>): java.util.Comparator<any>;
    }
    /**
     * @customConstructor ThumpState.new
     * @
     * [CLASS] zombie.ai.states.ThumpState extends zombie.ai.State
     */
    export class ThumpState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFastForwardDamageMultiplier(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ThumpState
       */
      static instance(): zombie.ai.states.ThumpState;
    }
    /**
     * @customConstructor WalkTowardState.new
     * @
     * [CLASS] zombie.ai.states.WalkTowardState extends zombie.ai.State
     */
    export class WalkTowardState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, Vector2 arg1): boolean
       */
      calculateTargetLocation(arg0: zombie.characters.IsoZombie, arg1: zombie.iso.Vector2): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.WalkTowardState
       */
      static instance(): zombie.ai.states.WalkTowardState;
    }
    /**
     * @customConstructor ZombieFallDownState.new
     * @
     * [CLASS] zombie.ai.states.ZombieFallDownState extends zombie.ai.State
     */
    export class ZombieFallDownState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieFallDownState
       */
      static instance(): zombie.ai.states.ZombieFallDownState;
    }
    /**
     * @customConstructor ZombieGetDownState.new
     * @
     * [CLASS] zombie.ai.states.ZombieGetDownState extends zombie.ai.State
     */
    export class ZombieGetDownState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isNearStartXY(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieGetDownState
       */
      static instance(): zombie.ai.states.ZombieGetDownState;
    }
    /**
     * @customConstructor ZombieGetUpState.new
     * @
     * [CLASS] zombie.ai.states.ZombieGetUpState extends zombie.ai.State
     */
    export class ZombieGetUpState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieGetUpState
       */
      static instance(): zombie.ai.states.ZombieGetUpState;
    }
    /**
     * @customConstructor ZombieIdleState.new
     * @
     * [CLASS] zombie.ai.states.ZombieIdleState extends zombie.ai.State
     */
    export class ZombieIdleState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieIdleState
       */
      static instance(): zombie.ai.states.ZombieIdleState;
    }
    /**
     * @customConstructor ZombieOnGroundState.new
     * @
     * [CLASS] zombie.ai.states.ZombieOnGroundState extends zombie.ai.State
     */
    export class ZombieOnGroundState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieOnGroundState
       */
      static instance(): zombie.ai.states.ZombieOnGroundState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1): boolean
       */
      static isCharacterStandingOnOther(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter): boolean;
    }
    /**
     * @customConstructor ZombieReanimateState.new
     * @
     * [CLASS] zombie.ai.states.ZombieReanimateState extends zombie.ai.State
     */
    export class ZombieReanimateState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieReanimateState
       */
      static instance(): zombie.ai.states.ZombieReanimateState;
    }
    /**
     * @customConstructor ZombieSittingState.new
     * @
     * [CLASS] zombie.ai.states.ZombieSittingState extends zombie.ai.State
     */
    export class ZombieSittingState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieSittingState
       */
      static instance(): zombie.ai.states.ZombieSittingState;
    }
  }
}
