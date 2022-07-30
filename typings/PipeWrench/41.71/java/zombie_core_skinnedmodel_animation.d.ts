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
  export namespace zombie.core.skinnedmodel.animation {
    /**
     * @customConstructor AnimTrackSampler.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.animation.AnimTrackSampler
     */
    export class AnimTrackSampler {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, Matrix4f arg1): void
       */
      getBoneMatrix(arg0: number, arg1: org.lwjgl.util.vector.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumBones(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLooped(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      moveToTime(arg0: number): void;
    }
    /**
     * @customConstructor AnimationBoneBinding.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.AnimationBoneBinding
     */
    export class AnimationBoneBinding {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBone(): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningData
       */
      getSkinningData(): zombie.core.skinnedmodel.model.SkinningData;
      /**
       * Method Parameters: 
       *  - (SkinningData arg0): void
       */
      setSkinningData(arg0: zombie.core.skinnedmodel.model.SkinningData): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor AnimationClip.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.AnimationClip
     */
    export class AnimationClip {
      /**
       * Constructors: 
       *  - (float arg0, List arg1, String arg2, boolean arg3)
       */
      constructor(arg0: number, arg1: java.util.List<zombie.core.skinnedmodel.animation.Keyframe>, arg2: string, arg3: boolean);
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.animation.Keyframe[]
       */
      getBoneFramesAt(arg0: number): zombie.core.skinnedmodel.animation.Keyframe[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.Keyframe[]
       */
      getKeyframes(): zombie.core.skinnedmodel.animation.Keyframe[];
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.animation.Keyframe
       */
      getRootMotionFrameAt(arg0: number): zombie.core.skinnedmodel.animation.Keyframe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRootMotionFrameCount(): number;
    }
    /**
     * @customConstructor AnimationMultiTrack.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.AnimationMultiTrack
     */
    export class AnimationMultiTrack {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      addTrack(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      findTrack(arg0: string): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDuration(): number;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): number
       */
      getIndexOfTrack(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getTrackAt(arg0: number): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrackCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.core.skinnedmodel.animation.AnimationTrack>
       */
      getTracks(): java.util.List<zombie.core.skinnedmodel.animation.AnimationTrack>;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      removeTrack(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeTrackAt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      removeTracks(arg0: java.util.List<zombie.core.skinnedmodel.animation.AnimationTrack>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor AnimationPlayer.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.AnimationPlayer extends zombie.util.PooledObject
     */
    export class AnimationPlayer {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoAngles(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): org.lwjgl.util.vector.Matrix4f
       */
      GetPropBoneMatrix(arg0: number): org.lwjgl.util.vector.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      SetDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      SetForceDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (float arg0): void
       */
      Update(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      UpdateDir(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateSkinTransforms(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addBoneReparent(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      discardRecording(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      dismember(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngle(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Matrix4f arg1): org.lwjgl.util.vector.Matrix4f
       */
      getBoneModelTransform(arg0: number, arg1: org.lwjgl.util.vector.Matrix4f): org.lwjgl.util.vector.Matrix4f;
      /**
       * Method Parameters: 
       *  - (int arg0, Matrix4f arg1): org.lwjgl.util.vector.Matrix4f
       */
      getBoneTransform(arg0: number, arg1: org.lwjgl.util.vector.Matrix4f): org.lwjgl.util.vector.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationBoneBinding
       */
      getCounterRotationBone(): zombie.core.skinnedmodel.animation.AnimationBoneBinding;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredAngleDelta(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      getDeferredMovement(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredRotationWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExcessTwistAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxTwistAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.Model
       */
      getModel(): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationMultiTrack
       */
      getMultiTrack(): zombie.core.skinnedmodel.animation.AnimationMultiTrack;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
       */
      getRecorder(): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderedAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShoulderTwistAngle(): number;
      /**
       * Method Parameters: 
       *  - (SkinningData arg0): org.lwjgl.util.vector.Matrix4f[]
       */
      getSkinTransforms(arg0: zombie.core.skinnedmodel.model.SkinningData): org.lwjgl.util.vector.Matrix4f[];
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): number
       */
      getSkinningBoneIndex(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, number>
       */
      getSkinningBoneIndices(): java.util.HashMap<string, number>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningData
       */
      getSkinningData(): zombie.core.skinnedmodel.model.SkinningData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetTwistAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTwistAngle(): number;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0, int arg1, Matrix4f arg2): org.lwjgl.util.vector.Matrix4f
       */
      getUnweightedModelTransform(arg0: zombie.core.skinnedmodel.animation.AnimationTrack, arg1: number, arg2: org.lwjgl.util.vector.Matrix4f): org.lwjgl.util.vector.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSkinningData(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isBoneReparented(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBoneTransformsNeedFirstFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecording(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      play(arg0: string, arg1: boolean): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBoneModelTransforms(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setAngleToTarget(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCounterRotationBone(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxTwistAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Model arg0): void
       */
      setModel(arg0: zombie.core.skinnedmodel.model.Model): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * Method Parameters: 
       *  - (AnimationPlayerRecorder arg0): void
       */
      setRecorder(arg0: zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRecording(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (SharedSkeleAnimationRepository arg0): void
       */
      setSharedAnimRepo(arg0: zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationRepository): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setTargetToAngle(): void;
      /**
       * Method Parameters: 
       *  - (String... arg0): void
       */
      setTwistBones(arg0: string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateMultiTrackBoneTransforms_DeferredMovementOnly(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Model arg0): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      static alloc(arg0: zombie.core.skinnedmodel.model.Model): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      static calculateAnimPlayerAngle(arg0: zombie.iso.Vector2): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimationTrack arg0, int arg1, Matrix4f arg2): org.lwjgl.util.vector.Matrix4f
       */
      static getUnweightedBoneTransform(arg0: zombie.core.skinnedmodel.animation.AnimationTrack, arg1: number, arg2: org.lwjgl.util.vector.Matrix4f): org.lwjgl.util.vector.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerpBlendWeight(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0): void
       */
      static releaseTracks(arg0: java.util.List<zombie.core.skinnedmodel.animation.AnimationTrack>): void;
    }
    /**
     * @customConstructor AnimationTrack.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.AnimationTrack extends zombie.util.PooledObject
     */
    export class AnimationTrack {

      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      UpdateKeyframes(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IAnimListener arg0): void
       */
      addListener(arg0: zombie.core.skinnedmodel.animation.IAnimListener): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      advance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      advanceFraction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, Vector3f arg1, Quaternion arg2, Vector3f arg3): void
       */
      get(arg0: number, arg1: org.lwjgl.util.vector.Vector3f, arg2: org.lwjgl.util.vector.Quaternion, arg3: org.lwjgl.util.vector.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getBoneWeight(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClampedBlendDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationClip
       */
      getClip(): zombie.core.skinnedmodel.animation.AnimationClip;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.lwjgl.util.vector.Vector3f
       */
      getCurrentDeferredCounterPosition(arg0: org.lwjgl.util.vector.Vector3f): org.lwjgl.util.vector.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.lwjgl.util.vector.Vector3f
       */
      getCurrentDeferredPosition(arg0: org.lwjgl.util.vector.Vector3f): org.lwjgl.util.vector.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentDeferredRotation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTimeFraction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentTimeValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredBoneWeight(): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, Vector2 arg1): zombie.iso.Vector2
       */
      getDeferredMovement(arg0: org.lwjgl.util.vector.Vector3f, arg1: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredMovementBoneIdx(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getDeferredMovementDiff(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredRotationDiff(): number;
      /**
       * Method Parameters: 
       *  - (Quaternion arg0): number
       */
      getDeferredTwistRotation(arg0: org.lwjgl.util.vector.Quaternion): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLayerIdx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPreviousTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPreviousTimeValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseDeferredRotation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBoneMask(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasClip(): boolean;
      /**
       * Method Parameters: 
       *  - (SkinningData arg0): void
       */
      initBoneWeights(arg0: zombie.core.skinnedmodel.model.SkinningData): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinished(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLooping(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      moveCurrentTimeValueTo(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      moveCurrentTimeValueToFraction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (IAnimListener arg0): void
       */
      removeListener(arg0: zombie.core.skinnedmodel.animation.IAnimListener): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      reset(): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      rewind(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      scaledAdvance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      scaledRewind(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      setBoneWeights(arg0: java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentTimeValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (SkinningBone arg0, BoneAxis arg1): void
       */
      setDeferredBone(arg0: zombie.core.skinnedmodel.model.SkinningBone, arg1: zombie.core.skinnedmodel.animation.BoneAxis): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLayerIdx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPreviousTimeValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseDeferredRotation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimationClip arg0, boolean arg1): void
       */
      startClip(arg0: zombie.core.skinnedmodel.animation.AnimationClip, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      static alloc(): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimationTrack arg0, Supplier arg1): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      static createClone(arg0: zombie.core.skinnedmodel.animation.AnimationTrack, arg1: java.util._function_.Supplier<zombie.core.skinnedmodel.animation.AnimationTrack>): zombie.core.skinnedmodel.animation.AnimationTrack;
    }
    /** [ENUM] zombie.core.skinnedmodel.animation.BoneAxis */
    export class BoneAxis {
      protected constructor();
      static readonly Y: zombie.core.skinnedmodel.animation.BoneAxis;
      static readonly Z: zombie.core.skinnedmodel.animation.BoneAxis;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IAnimListener.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.animation.IAnimListener
     */
    export class IAnimListener {
      protected constructor();
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
    }
    /**
     * @customConstructor Keyframe.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.Keyframe
     */
    export class Keyframe {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3f arg0, Quaternion arg1, Vector3f arg2)
       */
      constructor(arg0?: org.lwjgl.util.vector.Vector3f, arg1?: org.lwjgl.util.vector.Quaternion, arg2?: org.lwjgl.util.vector.Vector3f);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, Quaternion arg1, Vector3f arg2): void
       */
      get(arg0: org.lwjgl.util.vector.Vector3f, arg1: org.lwjgl.util.vector.Quaternion, arg2: org.lwjgl.util.vector.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (Keyframe arg0): void
       */
      set(arg0: zombie.core.skinnedmodel.animation.Keyframe): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setIdentity(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Keyframe arg0, Keyframe arg1, float arg2, Keyframe arg3): zombie.core.skinnedmodel.animation.Keyframe
       *  - (Keyframe arg0, Keyframe arg1, float arg2, Vector3f arg3, Quaternion arg4, Vector3f arg5): void
       */
      static lerp(arg0: zombie.core.skinnedmodel.animation.Keyframe, arg1: zombie.core.skinnedmodel.animation.Keyframe, arg2: number, arg3: zombie.core.skinnedmodel.animation.Keyframe | org.lwjgl.util.vector.Vector3f, arg4?: org.lwjgl.util.vector.Quaternion, arg5?: org.lwjgl.util.vector.Vector3f): zombie.core.skinnedmodel.animation.Keyframe | void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3f arg0, Quaternion arg1, Vector3f arg2): void
       */
      static setIdentity(arg0: org.lwjgl.util.vector.Vector3f, arg1: org.lwjgl.util.vector.Quaternion, arg2: org.lwjgl.util.vector.Vector3f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Quaternion arg0): void
       */
      static setIdentityIfNotNull(arg0: org.lwjgl.util.vector.Quaternion): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Quaternion arg0, Quaternion arg1): void
       *  - (Vector3f arg0, float arg1, float arg2, float arg3): void
       *  - (Vector3f arg0, Vector3f arg1, float arg2, float arg3, float arg4): void
       */
      static setIfNotNull(arg0: org.lwjgl.util.vector.Quaternion | org.lwjgl.util.vector.Vector3f, arg1: org.lwjgl.util.vector.Quaternion | number | org.lwjgl.util.vector.Vector3f, arg2?: number, arg3?: number, arg4?: number): void;
    }
  }
}
