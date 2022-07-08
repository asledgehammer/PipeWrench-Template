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
 * File generated at Friday July 2022 15:18:33.622-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.skinnedmodel.animation.sharedskele {
    /**
     * @customConstructor SharedSkeleAnimationRepository.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationRepository
     */
    export class SharedSkeleAnimationRepository {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (AnimationClip arg0): zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack
       */
      getTrack(arg0: zombie.core.skinnedmodel.animation.AnimationClip): zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack;
      /**
       * Method Parameters: 
       *  - (AnimationClip arg0, SharedSkeleAnimationTrack arg1): void
       */
      setTrack(arg0: zombie.core.skinnedmodel.animation.AnimationClip, arg1: zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack): void;
    }
    /**
     * @customConstructor SharedSkeleAnimationTrack.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack
     */
    export class SharedSkeleAnimationTrack {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
      /**
       * Method Parameters: 
       *  - (AnimTrackSampler arg0, float arg1): void
       */
      set(arg0: zombie.core.skinnedmodel.animation.AnimTrackSampler, arg1: number): void;
    }
  }
}
