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
 * File generated at Friday July 2022 15:18:33.701-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.ai {
    /**
     * @customConstructor GameCharacterAIBrain.new
     * @
     * [CLASS] zombie.ai.GameCharacterAIBrain
     */
    export class GameCharacterAIBrain {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter | null);
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      AddBlockedMemory(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5): boolean
       */
      HasBlockedMemory(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCloseZombieCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoZombie
       *  - (boolean arg0): zombie.characters.IsoZombie
       */
      getClosestChasingZombie(arg0?: boolean): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getClosestChasingZombies(arg0: number): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.SurvivorGroup
       */
      getGroup(): zombie.characters.SurvivorGroup;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOrder(): string;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      postUpdateHuman(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOrder(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor KnownBlockedEdges.new
     * @
     * [CLASS] zombie.ai.KnownBlockedEdges
     */
    export class KnownBlockedEdges {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (KnownBlockedEdges arg0): zombie.ai.KnownBlockedEdges
       *  - (int arg0, int arg1, int arg2): zombie.ai.KnownBlockedEdges
       *  - (int arg0, int arg1, int arg2, boolean arg3, boolean arg4): zombie.ai.KnownBlockedEdges
       */
      init(arg0: zombie.ai.KnownBlockedEdges | number, arg1?: number, arg2?: number, arg3?: boolean, arg4?: boolean): zombie.ai.KnownBlockedEdges;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isBlocked(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.KnownBlockedEdges
       */
      static alloc(): zombie.ai.KnownBlockedEdges;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static releaseAll(arg0: java.util.ArrayList<zombie.ai.KnownBlockedEdges>): void;
    }
    /**
     * @customConstructor MapKnowledge.new
     * @
     * [CLASS] zombie.ai.MapKnowledge
     */
    export class MapKnowledge {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forget(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ai.KnownBlockedEdges>
       *  - (int arg0, int arg1, int arg2): zombie.ai.KnownBlockedEdges
       */
      getKnownBlockedEdges(arg0?: number, arg1?: number, arg2?: number): java.util.ArrayList<zombie.ai.KnownBlockedEdges> | zombie.ai.KnownBlockedEdges;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.ai.KnownBlockedEdges
       */
      getOrCreateKnownBlockedEdges(arg0: number, arg1: number, arg2: number): zombie.ai.KnownBlockedEdges;
      /**
       * Method Parameters: 
       *  - (IsoThumpable arg0, boolean arg1): void
       *  - (IsoDoor arg0, boolean arg1): void
       */
      setKnownBlockedDoor(arg0: zombie.iso.objects.IsoThumpable | zombie.iso.objects.IsoDoor, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3): void
       */
      setKnownBlockedEdgeN(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3): void
       */
      setKnownBlockedEdgeW(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0, boolean arg1): void
       */
      setKnownBlockedWindow(arg0: zombie.iso.objects.IsoWindow, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, boolean arg1): void
       */
      setKnownBlockedWindowFrame(arg0: zombie.iso.IsoObject, arg1: boolean): void;
    }
    /**
     * @customConstructor State.new
     * @
     * [ABSTRACT CLASS] zombie.ai.State
     */
    export class State {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
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
    }
    /**
     * @customConstructor StateMachine.new
     * @
     * [CLASS] zombie.ai.StateMachine
     */
    export class StateMachine {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter | null);
      /**
       * Method Parameters: 
       *  - (State arg0, Iterable arg1): void
       *  - (State arg0, Iterable arg1, boolean arg2): void
       */
      changeState(arg0: zombie.ai.State, arg1: java.lang.Iterable<zombie.ai.State>, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getCurrent(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getPrevious(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.ai.State
       */
      getSubStateAt(arg0: number): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSubStateCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): boolean
       */
      isSubstate(arg0: zombie.ai.State): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      revertToPreviousState(arg0: zombie.ai.State): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, AnimEvent arg1): void
       */
      stateAnimEvent(arg0: number, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor SubstateSlot.new
     * @
     * [CLASS] zombie.ai.StateMachine$SubstateSlot
     */
    export class StateMachine$SubstateSlot {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getState(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
    }
  }
}
