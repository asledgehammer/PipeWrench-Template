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
  export namespace zombie.iso.sprite {
    /**
     * @customConstructor IsoAnim.new
     * @
     * [CLASS] zombie.iso.sprite.IsoAnim
     */
    export class IsoAnim {
      /** java.util.HashMap<java.lang.String, zombie.iso.sprite.IsoAnim> */
      static readonly GlobalAnimMap?: java.util.HashMap<string, zombie.iso.sprite.IsoAnim>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      LoadFrames(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       *  - (String arg0, String arg1, String arg2, int arg3, String arg4): void
       */
      LoadFramesBitRepeatFrame(arg0: string, arg1: string, arg2: number | string, arg3?: number, arg4?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       *  - (String arg0, String arg1, String arg2, int arg3): void
       *  - (String arg0, String arg1, String arg2, int arg3, String arg4): void
       */
      LoadFramesBits(arg0: string, arg1: string, arg2: number | string, arg3?: number, arg4?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3): void
       */
      LoadFramesPageSimple(arg0: string, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      LoadFramesPcx(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, int arg3): void
       */
      LoadFramesReverseAltName(arg0: string, arg1: string, arg2: string, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, int arg4, String arg5): void
       */
      LoadFramesUseOtherFrame(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number, arg5: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static DisposeAll(): void;
    }
    /**
     * @customConstructor IsoSprite.new
     * @
     * [CLASS] zombie.iso.sprite.IsoSprite
     */
    export class IsoSprite {
      /** byte */
      static readonly RL_DEFAULT: number;
      /** byte */
      static readonly RL_FLOOR: number;
      /** float */
      static alphaStep: number;
      /** float */
      static globalOffsetX: number;
      /** float */
      static globalOffsetY: number;
      /** int */
      static maxCount: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoSpriteManager arg0)
       */
      constructor(arg0?: zombie.iso.sprite.IsoSpriteManager);
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): void
       */
      AddProperties(arg0: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      CacheAnims(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      ChangeTintMod(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LoadCache(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      LoadFrameExplicit(arg0: string): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      LoadFrames(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      LoadFramesNoDirPage(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      LoadFramesNoDirPageDirect(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LoadFramesNoDirPageSimple(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3): void
       */
      LoadFramesPageSimple(arg0: string, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      LoadFramesPcx(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, int arg3): void
       */
      LoadFramesReverseAltName(arg0: string, arg1: string, arg2: string, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (IsoAnim arg0): void
       *  - (String arg0): void
       */
      PlayAnim(arg0: zombie.iso.sprite.IsoAnim | string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      PlayAnimUnlooped(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      RenderGhostTile(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6): void
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8): void
       */
      RenderGhostTileColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      RenderGhostTileRed(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ReplaceCurrentAnimFrames(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, boolean arg3): number
       */
      getMaskClickedY(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getParentObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSheetGridIdFromName(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteGrid
       */
      getSpriteGrid(): zombie.iso.sprite.IsoSpriteGrid;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): zombie.core.textures.Texture
       */
      getTextureForCurrentFrame(arg0: zombie.iso.IsoDirections): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoDirections arg1): zombie.core.textures.Texture
       */
      getTextureForFrame(arg0: number, arg1: zombie.iso.IsoDirections): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getTintMod(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasActiveModel(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2): boolean
       *  - (IsoDirections arg0, int arg1, int arg2, boolean arg3): boolean
       */
      isMaskClicked(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoveWithWind(): boolean;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0): void
       */
      load(arg0: java.io.DataInputStream): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteInstance
       */
      newInstance(): zombie.iso.sprite.IsoSpriteInstance;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1, float arg2, float arg3, IsoDirections arg4, float arg5, float arg6, ColorInfo arg7, boolean arg8): void
       *  - (IsoObject arg0, float arg1, float arg2, float arg3, IsoDirections arg4, float arg5, float arg6, ColorInfo arg7, boolean arg8, Consumer arg9): void
       *  - (IsoSpriteInstance arg0, IsoObject arg1, float arg2, float arg3, float arg4, IsoDirections arg5, float arg6, float arg7, ColorInfo arg8, boolean arg9): void
       *  - (IsoSpriteInstance arg0, IsoObject arg1, float arg2, float arg3, float arg4, IsoDirections arg5, float arg6, float arg7, ColorInfo arg8, boolean arg9, Consumer arg10): void
       */
      render(arg0: zombie.iso.IsoObject | zombie.iso.sprite.IsoSpriteInstance, arg1: number | zombie.iso.IsoObject, arg2: number, arg3: number, arg4: zombie.iso.IsoDirections | number, arg5: number | zombie.iso.IsoDirections, arg6: number, arg7: zombie.core.textures.ColorInfo | number, arg8: boolean | zombie.core.textures.ColorInfo, arg9?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | boolean, arg10?: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderActiveModel(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3): void
       */
      renderBloodSplat(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteInstance arg0, IsoObject arg1, float arg2, float arg3, float arg4, IsoDirections arg5, float arg6, float arg7, ColorInfo arg8, boolean arg9, Consumer arg10): void
       */
      renderCurrentAnim(arg0: zombie.iso.sprite.IsoSpriteInstance, arg1: zombie.iso.IsoObject, arg2: number, arg3: number, arg4: number, arg5: zombie.iso.IsoDirections, arg6: number, arg7: number, arg8: zombie.core.textures.ColorInfo, arg9: boolean, arg10: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteInstance arg0, IsoObject arg1, IsoDirections arg2): void
       */
      renderObjectPicker(arg0: zombie.iso.sprite.IsoSpriteInstance, arg1: zombie.iso.IsoObject, arg2: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteInstance arg0, IsoObject arg1, float arg2, float arg3, float arg4, float arg5, float arg6, ColorInfo arg7, boolean arg8): void
       */
      renderVehicle(arg0: zombie.iso.sprite.IsoSpriteInstance, arg1: zombie.iso.IsoObject, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: zombie.core.textures.ColorInfo, arg8: boolean): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): zombie.iso.sprite.IsoSprite
       */
      setFromCache(arg0: string, arg1: string, arg2: number): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setHideForWaterRender(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setParentObjectName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteGrid arg0): void
       */
      setSpriteGrid(arg0: zombie.iso.sprite.IsoSpriteGrid): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setTintMod(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (IsoSpriteInstance arg0): void
       */
      update(arg0?: zombie.iso.sprite.IsoSpriteInstance): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoSpriteManager arg0): zombie.iso.sprite.IsoSprite
       */
      static CreateSprite(arg0: zombie.iso.sprite.IsoSpriteManager): zombie.iso.sprite.IsoSprite;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): zombie.iso.sprite.IsoSprite
       */
      static CreateSpriteUsingCache(arg0: string, arg1: string, arg2: number): zombie.iso.sprite.IsoSprite;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static DisposeAll(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static HasCache(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getSheetGridIdFromName(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoSpriteManager arg0, int arg1): zombie.iso.sprite.IsoSprite
       *  - (IsoSpriteManager arg0, String arg1, int arg2): zombie.iso.sprite.IsoSprite
       *  - (IsoSpriteManager arg0, IsoSprite arg1, int arg2): zombie.iso.sprite.IsoSprite
       */
      static getSprite(arg0: zombie.iso.sprite.IsoSpriteManager, arg1: number | string | zombie.iso.sprite.IsoSprite, arg2?: number): zombie.iso.sprite.IsoSprite;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoSpriteManager arg0, int arg1, IsoSprite arg2): void
       */
      static setSpriteID(arg0: zombie.iso.sprite.IsoSpriteManager, arg1: number, arg2: zombie.iso.sprite.IsoSprite): void;
    }
    /**
     * @customConstructor IsoSpriteGrid.new
     * @
     * [CLASS] zombie.iso.sprite.IsoSpriteGrid
     */
    export class IsoSpriteGrid {
      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getAnchorSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.sprite.IsoSprite
       */
      getSprite(arg0: number, arg1: number): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpriteCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.sprite.IsoSprite
       */
      getSpriteFromIndex(arg0: number): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): number
       */
      getSpriteGridPosX(arg0: zombie.iso.sprite.IsoSprite): number;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): number
       */
      getSpriteGridPosY(arg0: zombie.iso.sprite.IsoSprite): number;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): number
       */
      getSpriteIndex(arg0: zombie.iso.sprite.IsoSprite): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite[]
       */
      getSprites(): zombie.iso.sprite.IsoSprite[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, IsoSprite arg2): void
       */
      setSprite(arg0: number, arg1: number, arg2: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      validate(): boolean;
    }
    /**
     * @customConstructor IsoSpriteInstance.new
     * @
     * [CLASS] zombie.iso.sprite.IsoSpriteInstance
     */
    export class IsoSpriteInstance {
      /** zombie.popman.ObjectPool<zombie.iso.sprite.IsoSpriteInstance> */
      static readonly pool?: zombie.popman.ObjectPool<zombie.iso.sprite.IsoSpriteInstance>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoSprite arg0)
       */
      constructor(arg0?: zombie.iso.sprite.IsoSprite);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      RenderGhostTileColor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      SetAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      SetTargetAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrame(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getParentSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScaleX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScaleY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTintB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTintG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTintR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCopyTargetAlpha(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinished(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiplyObjectAlpha(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1, float arg2, float arg3, IsoDirections arg4, float arg5, float arg6, ColorInfo arg7): void
       */
      render(arg0: zombie.iso.IsoObject, arg1: number, arg2: number, arg3: number, arg4: zombie.iso.IsoDirections, arg5: number, arg6: number, arg7: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      scaleAspect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFrameSpeedPerFrame(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setScale(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoSpriteInstance arg0): void
       */
      static add(arg0: zombie.iso.sprite.IsoSpriteInstance): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoSprite arg0): zombie.iso.sprite.IsoSpriteInstance
       */
      static get(arg0: zombie.iso.sprite.IsoSprite): zombie.iso.sprite.IsoSpriteInstance;
    }
    /**
     * @customConstructor IsoSpriteManager.new
     * @
     * [CLASS] zombie.iso.sprite.IsoSpriteManager
     */
    export class IsoSpriteManager {
      /** zombie.iso.sprite.IsoSpriteManager */
      static readonly instance?: zombie.iso.sprite.IsoSpriteManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.sprite.IsoSprite
       *  - (String arg0, int arg1): zombie.iso.sprite.IsoSprite
       */
      AddSprite(arg0: string, arg1?: number): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.sprite.IsoSprite
       *  - (String arg0, Color arg1): zombie.iso.sprite.IsoSprite
       */
      getOrAddSpriteCache(arg0: string, arg1?: zombie.core.Color): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.sprite.IsoSprite
       *  - (String arg0): zombie.iso.sprite.IsoSprite
       */
      getSprite(arg0: number | string): zombie.iso.sprite.IsoSprite;
    }
  }
}
