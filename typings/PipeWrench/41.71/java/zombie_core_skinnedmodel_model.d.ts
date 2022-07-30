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
  export namespace zombie.core.skinnedmodel.model {
    /**
     * @customConstructor AnimationAsset.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.AnimationAsset extends zombie.asset.Asset
     */
    export class AnimationAsset {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1, AnimationAssetParams arg2)
       */
      constructor(arg0: zombie.asset.AssetPath, arg1: zombie.asset.AssetManager, arg2: zombie.core.skinnedmodel.model.AnimationAsset$AnimationAssetParams);
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBeforeReady(): void;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
    }
    /**
     * @customConstructor AnimationAssetParams.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.AnimationAsset$AnimationAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class AnimationAsset$AnimationAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor CharacterMask.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.CharacterMask
     */
    export class CharacterMask {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      contentsToString(): string;
      /**
       * Method Parameters: 
       *  - (CharacterMask arg0): void
       */
      copyFrom(arg0: zombie.core.skinnedmodel.model.CharacterMask): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachVisible(arg0: java.util._function_.Consumer<zombie.core.skinnedmodel.model.CharacterMask$Part>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): boolean
       */
      isBloodBodyPartVisible(arg0: zombie.characterTextures.BloodBodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNothingVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Part arg0): boolean
       */
      isPartVisible(arg0: zombie.core.skinnedmodel.model.CharacterMask$Part): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTorsoVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Part arg0, boolean arg1): void
       */
      setPartVisible(arg0: zombie.core.skinnedmodel.model.CharacterMask$Part, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0, boolean arg1): void
       */
      setPartsVisible(arg0: java.util.ArrayList<number>, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.CharacterMask$Part */
    export class CharacterMask$Part {
      protected constructor();
      static readonly Belt: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Chest: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Crotch: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Dress: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Head: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftArm: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftFoot: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftHand: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftLeg: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Pelvis: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightArm: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightFoot: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightHand: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightLeg: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Torso: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Waist: zombie.core.skinnedmodel.model.CharacterMask$Part;
      name(): string;
      ordinal(): number;
      getBloodBodyPartTypes(): zombie.characterTextures.BloodBodyPartType[];

      getParent(): zombie.core.skinnedmodel.model.CharacterMask$Part;

      getValue(): number;

      hasSubdivisions(): boolean;

      isSubdivision(): boolean;

      subDivisions(): zombie.core.skinnedmodel.model.CharacterMask$Part[];

    }
    /**
     * @customConstructor Model.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.Model extends zombie.asset.Asset
     */
    export class Model {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;
      /** zombie.core.Color[] */
      static readonly debugDrawColours?: zombie.core.Color[];
      /** java.nio.FloatBuffer */
      static readonly m_staticReusableFloatBuffer?: java.nio.FloatBuffer;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1, ModelAssetParams arg2)
       */
      constructor(arg0: zombie.asset.AssetPath, arg1: zombie.asset.AssetManager, arg2: zombie.core.skinnedmodel.model.Model$ModelAssetParams);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      CreateShader(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, ModelInstanceRenderData arg1): void
       */
      DrawChar(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: zombie.core.skinnedmodel.model.ModelInstanceRenderData): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, ModelInstanceRenderData arg1): void
       */
      DrawVehicle(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: zombie.core.skinnedmodel.model.ModelInstanceRenderData): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      debugDrawLightSource(arg0: zombie.iso.IsoLightSource, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, int arg1, Vector3 arg2): void
       *  - (IsoGameCharacter arg0, int arg1, Vector3 arg2): void
       */
      static BoneToWorldCoords(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData | zombie.characters.IsoGameCharacter, arg1: number, arg2: zombie.iso.Vector3): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, Vector3 arg2, float arg3): void
       */
      static BoneYDirectionToWorldCoords(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: zombie.iso.Vector3, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0): void
       */
      static CharacterModelCameraBegin(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static CharacterModelCameraEnd(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, Vector3 arg1): void
       *  - (IsoGameCharacter arg0, Vector3 arg1): void
       */
      static VectorToWorldCoords(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData | zombie.characters.IsoGameCharacter, arg1: zombie.iso.Vector3): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      static debugDrawAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      static debugDrawLightSource(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0): void
       */
      static drawBoneMtx(arg0: org.lwjgl.util.vector.Matrix4f): void;
    }
    /**
     * @customConstructor ModelAssetParams.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.Model$ModelAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class Model$ModelAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ModelInstance.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance
     */
    export class ModelInstance {
      /** float */
      static MODEL_LIGHT_MULT_OUTSIDE: number;
      /** float */
      static MODEL_LIGHT_MULT_ROOM: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LoadTexture(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      SetForceDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateDir(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      applyModelScriptScale(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      clearOwner(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroySmartTextures(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      dismember(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachment(arg0: number): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachmentById(arg0: string): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (int arg0, Matrix4f arg1): org.joml.Matrix4f
       *  - (ModelAttachment arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      getAttachmentMatrix(arg0: number | zombie.scripting.objects.ModelAttachment, arg1: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (String arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      getAttachmentMatrixById(arg0: string, arg1: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisual
       */
      getItemVisual(): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getOwner(): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer
       */
      getTextureInitializer(): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTextureCreator(): boolean;
      /**
       * Method Parameters: 
       *  - (Model arg0, IsoGameCharacter arg1, AnimationPlayer arg2): zombie.core.skinnedmodel.model.ModelInstance
       */
      init(arg0: zombie.core.skinnedmodel.model.Model, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.core.skinnedmodel.animation.AnimationPlayer): zombie.core.skinnedmodel.model.ModelInstance;
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
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setInstanceSkip(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      setItemVisual(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setOwner(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (ModelInstanceTextureInitializer arg0): void
       */
      setTextureInitializer(arg0: zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLights(): void;
    }
    /**
     * @customConstructor EffectLight.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance$EffectLight
     */
    export class ModelInstance$EffectLight {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, int arg6): void
       */
      set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus */
    export class ModelInstance$FrameLightBlendStatus {
      protected constructor();
      static readonly During: zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus;
      static readonly In: zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus;
      static readonly Out: zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor FrameLightInfo.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance$FrameLightInfo
     */
    export class ModelInstance$FrameLightInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor PlayerData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance$PlayerData
     */
    export class ModelInstance$PlayerData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ModelInstanceRenderData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceRenderData
     */
    export class ModelInstanceRenderData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0): void
       */
      RenderCharacter(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0): void
       */
      RenderVehicle(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0): zombie.core.skinnedmodel.model.ModelInstanceRenderData
       */
      init(arg0: zombie.core.skinnedmodel.model.ModelInstance): zombie.core.skinnedmodel.model.ModelInstanceRenderData;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderDebug(): void;
      /**
       * Method Parameters: 
       *  - (ModelInstanceRenderData arg0): zombie.core.skinnedmodel.model.ModelInstanceRenderData
       */
      transformToParent(arg0: zombie.core.skinnedmodel.model.ModelInstanceRenderData): zombie.core.skinnedmodel.model.ModelInstanceRenderData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceRenderData
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelInstanceRenderData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelInstance arg0, String arg1, Matrix4f arg2): void
       */
      static applyBoneTransform(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: string, arg2: org.joml.Matrix4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelAttachment arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      static makeAttachmentTransform(arg0: zombie.scripting.objects.ModelAttachment, arg1: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static release(arg0: java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): void;
    }
    /**
     * @customConstructor ModelInstanceTextureCreator.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceTextureCreator extends zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class ModelInstanceTextureCreator {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       *  - (HumanVisual arg0, ItemVisuals arg1, ModelInstance arg2): void
       *  - (BaseVisual arg0, ItemVisuals arg1, ModelInstance arg2): void
       */
      init(arg0: zombie.characters.IsoGameCharacter | zombie.core.skinnedmodel.visual.HumanVisual | zombie.core.skinnedmodel.visual.BaseVisual, arg1?: zombie.core.skinnedmodel.visual.ItemVisuals, arg2?: zombie.core.skinnedmodel.model.ModelInstance): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator;
    }
    /**
     * @customConstructor ModelInstanceTextureInitializer.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer
     */
    export class ModelInstanceTextureInitializer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, InventoryItem arg1): void
       *  - (ModelInstance arg0, float arg1): void
       */
      init(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: zombie.inventory.InventoryItem | number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderMain(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirty(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer;
    }
    /**
     * @customConstructor ModelSlotRenderData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelSlotRenderData extends zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class ModelSlotRenderData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0): zombie.core.skinnedmodel.model.ModelSlotRenderData
       */
      init(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot): zombie.core.skinnedmodel.model.ModelSlotRenderData;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderDebug(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelSlotRenderData
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelSlotRenderData;
    }
    /**
     * @customConstructor SkinningBone.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningBone
     */
    export class SkinningBone {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachDescendant(arg0: java.util._function_.Consumer<zombie.core.skinnedmodel.model.SkinningBone>): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor SkinningBoneHierarchy.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningBoneHierarchy
     */
    export class SkinningBoneHierarchy {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (SkinningData arg0): void
       */
      buildBoneHiearchy(arg0: zombie.core.skinnedmodel.model.SkinningData): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getRootBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numRootBones(): number;
    }
    /**
     * @customConstructor SkinningData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningData
     */
    export class SkinningData {
      /**
       * Constructors: 
       *  - (HashMap arg0, List arg1, List arg2, List arg3, List arg4, HashMap arg5)
       */
      constructor(arg0: java.util.HashMap<string, zombie.core.skinnedmodel.animation.AnimationClip>, arg1: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg2: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg3: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg4: java.util.List<number>, arg5: java.util.HashMap<string, number>);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBone(arg0: string): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningBoneHierarchy
       */
      getBoneHieararchy(): zombie.core.skinnedmodel.model.SkinningBoneHierarchy;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getParentBoneIdx(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getRootBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numBones(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numRootBones(): number;
    }
  }
}
