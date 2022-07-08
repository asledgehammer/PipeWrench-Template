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
 * File generated at Friday July 2022 15:18:33.671-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.skinnedmodel.advancedanimation {
    /**
     * @customConstructor AdvancedAnimator.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
     */
    export class AdvancedAnimator {
      /** float */
      static s_MotionScale: number;
      /** float */
      static s_RotationScale: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetDebug(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      OnAnimDataChanged(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimEvent arg1): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reload(): void;
      /**
       * Method Parameters: 
       *  - (AnimationSet arg0): void
       */
      SetAnimSet(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationSet): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, List arg1): void
       */
      SetState(arg0: string, arg1?: java.util.List<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      containsAnyIdleNodes(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      debugGetVariables(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getActiveSubLayerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      getCharacter(): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
       */
      getDebugMonitor(): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimLayer
       */
      getRootLayer(): zombie.core.skinnedmodel.advancedanimation.AnimLayer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.advancedanimation.AnimLayer
       */
      getSubLayerAt(arg0: number): zombie.core.skinnedmodel.advancedanimation.AnimLayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSubLayerCount(): number;
      /**
       * Method Parameters: 
       *  - (IAnimatable arg0): void
       */
      init(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimatable): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecording(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      printDebugCharacterActions(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (AnimatorDebugMonitor arg0): void
       */
      setDebugMonitor(arg0: zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor): void;
      /**
       * Method Parameters: 
       *  - (AnimationPlayerRecorder arg0): void
       */
      setRecorder(arg0: zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      updateSpeedScale(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static checkModifiedFiles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static systemInit(): void;
    }
    /**
     * @customConstructor SubLayerSlot.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator$SubLayerSlot
     */
    export class AdvancedAnimator$SubLayerSlot {
      /**
       * Constructors: 
       *  - (AnimLayer arg0, IAnimatable arg1, IAnimEventCallback arg2)
       */
      constructor(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer | null, arg1: zombie.core.skinnedmodel.advancedanimation.IAnimatable | null, arg2: zombie.core.skinnedmodel.advancedanimation.IAnimEventCallback | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applyTransition(): void;
      /**
       * Method Parameters: 
       *  - (AnimState arg0, boolean arg1): void
       */
      transitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor AnimBoneWeight.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight
     */
    export class AnimBoneWeight {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, float arg1)
       */
      constructor(arg0?: string | null, arg1?: number);
    }
    /**
     * @customConstructor AnimEvent.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimEvent
     */
    export class AnimEvent {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toDetailsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime */
    export class AnimEvent$AnimEventTime {
      protected constructor();
      static readonly End: zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime;
      static readonly Percentage: zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime;
      static readonly Start: zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor AnimLayer.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimLayer
     */
    export class AnimLayer {
      /**
       * Constructors: 
       *  - (IAnimatable arg0, IAnimEventCallback arg1)
       *  - (AnimLayer arg0, IAnimatable arg1, IAnimEventCallback arg2)
       */
      constructor(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimatable | zombie.core.skinnedmodel.advancedanimation.AnimLayer | null, arg1: zombie.core.skinnedmodel.advancedanimation.IAnimEventCallback | zombie.core.skinnedmodel.advancedanimation.IAnimatable | null, arg2?: zombie.core.skinnedmodel.advancedanimation.IAnimEventCallback | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetDebugString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (AnimState arg0, boolean arg1): boolean
       */
      TransitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (LiveAnimNode arg0, boolean arg1): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode
       */
      findTransitionToNewNode(arg0: zombie.core.skinnedmodel.advancedanimation.LiveAnimNode, arg1: boolean): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationMultiTrack
       */
      getAnimationTrack(): zombie.core.skinnedmodel.animation.AnimationMultiTrack;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode
       */
      getCurrentSyncNode(): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getCurrentSyncTrack(): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugNodeName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDepth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.core.skinnedmodel.advancedanimation.LiveAnimNode>
       */
      getLiveAnimNodes(): java.util.List<zombie.core.skinnedmodel.advancedanimation.LiveAnimNode>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getVariableSource(): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasState(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isCurrentState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecording(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStateless(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSubLayer(): boolean;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onAnimStarted(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onLoopedAnim(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFadeOut(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFinished(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onTrackDestroyed(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFadedOutNodes(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateNodeActiveFlags(): void;
    }
    /**
     * @customConstructor AnimNode.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimNode
     */
    export class AnimNode {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): boolean
       */
      checkConditions(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): boolean;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, String arg1): zombie.core.skinnedmodel.advancedanimation.AnimTransition
       */
      findTransitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: string): zombie.core.skinnedmodel.advancedanimation.AnimTransition;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendOutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getConditionsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.BoneAxis
       */
      getDeferredBoneAxis(): zombie.core.skinnedmodel.animation.BoneAxis;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeferredBoneName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPriority(): number;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): number
       */
      getSpeedScale(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAbstract(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIdleAnim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimNode
       */
      static Parse(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimNode;
    }
    /**
     * @customConstructor AnimState.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimState
     */
    export class AnimState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, List arg1): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimNode>
       */
      getAnimNodes(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimNode>): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimNode>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.core.skinnedmodel.advancedanimation.AnimState
       */
      static Parse(arg0: string, arg1: string): zombie.core.skinnedmodel.advancedanimation.AnimState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimState arg0): string
       */
      static getStateName(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState): string;
    }
    /**
     * @customConstructor AnimTransition.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimTransition
     */
    export class AnimTransition {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor AnimationSet.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationSet
     */
    export class AnimationSet {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimState
       */
      GetState(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimState;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      Load(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsState(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.core.skinnedmodel.advancedanimation.AnimationSet
       */
      static GetAnimationSet(arg0: string, arg1: boolean): zombie.core.skinnedmodel.advancedanimation.AnimationSet;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
    }
    /**
     * @customConstructor AnimationVariableHandle.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle
     */
    export class AnimationVariableHandle {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVariableIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVariableName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle
       */
      static alloc(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackBool.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.Boolean>
     */
    export class AnimationVariableSlotCallbackBool {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string | null, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | boolean, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | null, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | null);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackBool$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      call(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackBool$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      call(arg0: any): void;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackFloat.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.Float>
     */
    export class AnimationVariableSlotCallbackFloat {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string | null, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | number, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | null, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | null);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      call(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      call(arg0: any): void;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackInt.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.Integer>
     */
    export class AnimationVariableSlotCallbackInt {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string | null, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | number, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | null, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | null);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackInt$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      call(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackInt$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      call(arg0: any): void;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackString.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.String>
     */
    export class AnimationVariableSlotCallbackString {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string | null, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | string | null, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped | null, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped | null);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackString$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      call(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackString$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      call(arg0: any): void;
    }
    /**
     * @customConstructor AnimationVariableSource.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
     */
    export class AnimationVariableSource {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearVariables(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getOrCreateVariable(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSlot arg0): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       */
      setVariable(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot | string, arg1?: number | boolean | string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped): void;
    }
    /** [ENUM] zombie.core.skinnedmodel.advancedanimation.AnimationVariableType */
    export class AnimationVariableType {
      protected constructor();
      static readonly Boolean: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      static readonly Float: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      static readonly String: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      static readonly Void: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IAnimEventCallback.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimEventCallback
     */
    export class IAnimEventCallback {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimEvent arg1): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
    }
    /**
     * @customConstructor IAnimatable.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimatable
     */
    export class IAnimatable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetAnimSetName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionContext
       */
      getActionContext(): zombie.characters.action.ActionContext;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
       */
      getAdvancedAnimator(): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
       */
      getAnimationPlayerRecorder(): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModelInstance(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUID(): string;
      /**
       * Method Parameters: 
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle | string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimationRecorderActive(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
    }
    /**
     * @customConstructor IAnimationVariableSlot.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
     */
    export class IAnimationVariableSlot {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (String arg0): void
       *  - (boolean arg0): void
       */
      setValue(arg0: number | string | boolean): void;
    }
    /**
     * @customConstructor IAnimationVariableSource.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
     */
    export class IAnimationVariableSource {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle | string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
    }
    /**
     * @customConstructor LiveAnimNode.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.LiveAnimNode extends zombie.util.PooledObject
     */
    export class LiveAnimNode {

      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      addMainTrack(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, String arg1): zombie.core.skinnedmodel.advancedanimation.AnimTransition
       */
      findTransitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: string): zombie.core.skinnedmodel.advancedanimation.AnimTransition;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendInTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendOutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.BoneAxis
       */
      getDeferredBoneAxis(): zombie.core.skinnedmodel.animation.BoneAxis;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeferredBoneName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLayerIdx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMainInitialRewindTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getPlayingTrackAt(arg0: number): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayingTrackCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimNode
       */
      getSourceNode(): zombie.core.skinnedmodel.advancedanimation.AnimNode;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): number
       */
      getSpeedScale(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight>
       */
      getSubStateBoneWeights(): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTransitionFrom(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionInBlendInTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionInBlendOutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getTransitionInTrack(): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionInWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionLayerIdx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIdleAnimActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLooped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMainAnimActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNew(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTransitioningIn(): boolean;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onAnimStarted(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onLoopedAnim(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFadeOut(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFinished(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onTrackDestroyed(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTransitionInBlendDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (AnimTransition arg0): void
       */
      setTransitionOut(arg0: zombie.core.skinnedmodel.advancedanimation.AnimTransition): void;
      /**
       * Method Parameters: 
       *  - (LiveAnimNode arg0, AnimTransition arg1, AnimationTrack arg2): void
       *  - (AnimNode arg0, AnimTransition arg1, AnimationTrack arg2): void
       */
      startTransitionIn(arg0: zombie.core.skinnedmodel.advancedanimation.LiveAnimNode | zombie.core.skinnedmodel.advancedanimation.AnimNode, arg1: zombie.core.skinnedmodel.advancedanimation.AnimTransition, arg2: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasDeactivated(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimNode arg1, int arg2): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode
       */
      static alloc(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimNode, arg2: number): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode;
    }
  }
}
