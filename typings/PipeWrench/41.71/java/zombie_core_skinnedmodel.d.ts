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
  export namespace zombie.core.skinnedmodel {
    /**
     * @customConstructor ModelManager.new
     * @
     * [CLASS] zombie.core.skinnedmodel.ModelManager
     */
    export class ModelManager {
      /** boolean */
      static NoOpenGL: boolean;
      /** zombie.core.skinnedmodel.ModelManager */
      static readonly instance?: zombie.core.skinnedmodel.ModelManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      Add(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      ContainsChar(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       *  - (IsoGameCharacter arg0): void
       */
      Remove(arg0: zombie.vehicles.BaseVehicle | zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2): void
       */
      RenderParticles(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      RenderPuddles(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      RenderSkyBox(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, boolean arg3): void
       */
      RenderWater(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (IsoGameCharacter arg0): void
       */
      Reset(arg0?: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ResetCharacterEquippedHands(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ResetEquippedNextFrame(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ResetNextFrame(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0, AnimationClip arg1): void
       */
      addAnimationClip(arg0: string, arg1: zombie.core.skinnedmodel.animation.AnimationClip): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, String arg1, String arg2, String arg3): zombie.core.skinnedmodel.model.ModelInstance
       *  - (ModelSlot arg0, String arg1, String arg2, String arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      addStatic(arg0: zombie.core.skinnedmodel.model.ModelInstance | zombie.core.skinnedmodel.ModelManager$ModelSlot, arg1: string, arg2: string, arg3: string, arg4?: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, String arg1, String arg2, String arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      addStaticForcedTex(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: string, arg2: string, arg3: string, arg4: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      addVehicle(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (AnimationAsset arg0): void
       */
      animationAssetLoaded(arg0: zombie.core.skinnedmodel.model.AnimationAsset): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      create(): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0): void
       */
      derefModelInstance(arg0: zombie.core.skinnedmodel.model.ModelInstance): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      derefModelInstances(arg0: java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      dressInRandomOutfit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<zombie.core.skinnedmodel.animation.AnimationClip>
       */
      getAllAnimationClips(): java.util.Collection<zombie.core.skinnedmodel.animation.AnimationClip>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.animation.AnimationClip
       */
      getAnimationClip(arg0: string): zombie.core.skinnedmodel.animation.AnimationClip;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.core.skinnedmodel.model.Model
       */
      getBodyModel(arg0: zombie.characters.IsoGameCharacter): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoLightSource[] arg1): void
       */
      getClosestThreeLights(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoLightSource[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.Model
       *  - (String arg0, String arg1, boolean arg2, String arg3): zombie.core.skinnedmodel.model.Model
       */
      getLoadedModel(arg0: string, arg1?: string, arg2?: boolean, arg3?: string): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.core.skinnedmodel.ModelManager$ModelSlot
       */
      getSlot(arg0: zombie.characters.IsoGameCharacter): zombie.core.skinnedmodel.ModelManager$ModelSlot;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTextureFlags(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      initAnimationMeshes(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCreated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLoadingAnimations(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, String arg3): void
       */
      loadAdditionalModel(arg0: string, arg1: string, arg2: boolean, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadModAnimations(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
       */
      loadStaticModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, IsoGameCharacter arg2, AnimationPlayer arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      newAdditionalModelInstance(arg0: string, arg1: string, arg2: zombie.characters.IsoGameCharacter, arg3: zombie.core.skinnedmodel.animation.AnimationPlayer, arg4: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Model arg0, IsoGameCharacter arg1, AnimationPlayer arg2): zombie.core.skinnedmodel.model.ModelInstance
       */
      newInstance(arg0: zombie.core.skinnedmodel.model.Model, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.core.skinnedmodel.animation.AnimationPlayer): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0, String arg1, String arg2, String arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      newStaticInstance(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot, arg1: string, arg2: string, arg3: string, arg4: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, String arg3, Model arg4): void
       */
      putLoadedModel(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: zombie.core.skinnedmodel.model.Model): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reloadAllOutfits(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      reloadModelsMatching(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, Object arg1): void
       */
      resetModelInstance(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, Object arg1): void
       */
      resetModelInstanceRecurse(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0, Object arg1): void
       */
      resetModelInstancesRecurse(arg0: java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, boolean arg3): void
       *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): void
       */
      setModelMetaData(arg0: string, arg1: string, arg2: string, arg3: boolean | string, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, String arg3, boolean arg4): zombie.core.skinnedmodel.model.Model
       */
      tryGetLoadedModel(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: boolean): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor ModAnimations.new
     * @
     * [CLASS] zombie.core.skinnedmodel.ModelManager$ModAnimations
     */
    export class ModelManager$ModAnimations {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPriority(arg0: number): void;
    }
    /**
     * @customConstructor ModelSlot.new
     * @
     * [CLASS] zombie.core.skinnedmodel.ModelManager$ModelSlot
     */
    export class ModelManager$ModelSlot {
      /**
       * Constructors: 
       *  - (int arg0, ModelInstance arg1, IsoGameCharacter arg2)
       */
      constructor(arg0: number, arg1: zombie.core.skinnedmodel.model.ModelInstance, arg2: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendering(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
  }
}
