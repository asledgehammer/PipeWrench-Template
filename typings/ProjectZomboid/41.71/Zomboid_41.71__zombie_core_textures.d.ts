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
 * File generated at Friday July 2022 15:18:33.626-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.textures {
    /**
     * @customConstructor ColorInfo.new
     * @
     * [CLASS] zombie.core.textures.ColorInfo
     */
    export class ColorInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (float arg0, float arg1, float arg2, float arg3)
       */
      constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number);
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      desaturate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0, float arg1, ColorInfo arg2): void
       */
      interp(arg0: zombie.core.textures.ColorInfo, arg1: number, arg2: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): zombie.core.textures.ColorInfo
       *  - (float arg0, float arg1, float arg2, float arg3): zombie.core.textures.ColorInfo
       */
      set(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      toColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      toImmutableColor(): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor IGLFramebufferObject.new
     * @
     * [INTERFACE] zombie.core.textures.IGLFramebufferObject
     */
    export class IGLFramebufferObject {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_COLOR_ATTACHMENT0(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_DEPTH24_STENCIL8(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_DEPTH_ATTACHMENT(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_DEPTH_STENCIL(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_COMPLETE(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_FORMATS(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_UNDEFINED(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_FRAMEBUFFER_UNSUPPORTED(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_RENDERBUFFER(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_STENCIL_ATTACHMENT(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBindFramebuffer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBindRenderbuffer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      glCheckFramebufferStatus(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDeleteFramebuffers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDeleteRenderbuffers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glFramebufferRenderbuffer(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      glFramebufferTexture2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      glGenFramebuffers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      glGenRenderbuffers(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glRenderbufferStorage(arg0: number, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * @customConstructor ImageData.new
     * @
     * [CLASS] zombie.core.textures.ImageData
     */
    export class ImageData {
      /** int */
      static readonly MIP_LEVEL_IDX_OFFSET: number;

      /**
       * Constructors: 
       *  - (String arg0)
       *  - (InputStream arg0, boolean arg1)
       *  - (TextureID arg0, WrappedBuffer arg1)
       *  - (int arg0, int arg1)
       *  - (BufferedInputStream arg0, boolean arg1, PZFileformat arg2)
       *  - (int arg0, int arg1, WrappedBuffer arg2)
       */
      constructor(arg0: string | java.io.InputStream | zombie.core.textures.TextureID | number | java.io.BufferedInputStream, arg1?: boolean | zombie.core.utils.WrappedBuffer | number, arg2?: zombie.core.textures.Texture$PZFileformat | zombie.core.utils.WrappedBuffer | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dispose(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.MipMapLevel
       */
      getData(): zombie.core.textures.MipMapLevel;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMipMapCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.textures.MipMapLevel
       */
      getMipMapData(arg0: number): zombie.core.textures.MipMapLevel;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initMipMaps(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (byte arg0, byte arg1, byte arg2): void
       *  - (byte arg0, byte arg1, byte arg2, byte arg3): void
       */
      makeTransp(arg0: number, arg1: number, arg2: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (Raster arg0): void
       *  - (BufferedImage arg0): void
       */
      setData(arg0: java.awt.image.Raster | java.awt.image.BufferedImage): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static calculateNumMips(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): zombie.core.textures.ImageData
       */
      static createSteamAvatar(arg0: number): zombie.core.textures.ImageData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getNextMipDimension(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, int arg3, int arg4, int[] arg5): number[]
       */
      static getPixelClamped(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, int arg3, int arg4, int[] arg5): number
       */
      static getPixelDiscard(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, int arg3, int arg4, int[] arg5): void
       */
      static setPixel(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
    }
    /**
     * @customConstructor Mask.new
     * @
     * [CLASS] zombie.core.textures.Mask
     */
    export class Mask {
      /**
       * Constructors: 
       *  - (ITexture arg0)
       *  - (Mask arg0)
       *  - (ITexture arg0, boolean[] arg1)
       *  - (ITexture arg0, BooleanGrid arg1)
       *  - (int arg0, int arg1)
       *  - (Mask arg0, int arg1, int arg2, int arg3, int arg4)
       *  - (Texture arg0, Texture arg1, int arg2, int arg3, int arg4, int arg5)
       *  - (BooleanGrid arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6)
       *  - (boolean[] arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6)
       */
      constructor(arg0: zombie.interfaces.ITexture | zombie.core.textures.Mask | number | zombie.core.textures.Texture | zombie.core.utils.BooleanGrid | boolean[], arg1?: boolean[] | zombie.core.utils.BooleanGrid | number | zombie.core.textures.Texture, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number);
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      full(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      get(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      save(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      set(arg0: number, arg1: number, arg2: boolean): void;
    }
    /**
     * @customConstructor MipMapLevel.new
     * @
     * [CLASS] zombie.core.textures.MipMapLevel
     */
    export class MipMapLevel {
      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       *  - (int arg0, int arg1, WrappedBuffer arg2)
       */
      constructor(arg0: number, arg1: number, arg2?: zombie.core.utils.WrappedBuffer | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dispose(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      getBuffer(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDataSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisposed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      rewind(): void;
    }
    /**
     * @customConstructor Texture.new
     * @
     * [CLASS] zombie.core.textures.Texture extends zombie.asset.Asset
     */
    export class Texture {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;
      /** int */
      static BindCount: number;
      /** boolean */
      static WarnFailFindTexture: boolean;
      /** boolean */
      static bDoingQuad: boolean;
      /** float */
      static la: number;
      /** int */
      static lastTextureID: number;
      /** int */
      static lastlastTextureID: number;
      /** float */
      static lb: number;
      /** float */
      static lg: number;
      /** float */
      static lr: number;
      /** java.util.HashSet<java.lang.String> */
      static readonly nullTextures?: java.util.HashSet<string>;
      /** int */
      static totalTextureID: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Texture arg0)
       *  - (String arg0)
       *  - (String arg0, boolean arg1)
       *  - (TextureID arg0, String arg1)
       *  - (String arg0, int[] arg1)
       *  - (String arg0, String arg1)
       *  - (int arg0, int arg1, int arg2)
       *  - (AssetPath arg0, AssetManager arg1, TextureAssetParams arg2)
       *  - (String arg0, BufferedInputStream arg1, boolean arg2)
       *  - (String arg0, boolean arg1, boolean arg2)
       *  - (String arg0, int arg1, int arg2, int arg3)
       *  - (int arg0, int arg1, String arg2, int arg3)
       *  - (String arg0, BufferedInputStream arg1, boolean arg2, PZFileformat arg3)
       */
      constructor(arg0?: zombie.core.textures.Texture | string | zombie.core.textures.TextureID | number | zombie.asset.AssetPath, arg1?: boolean | string | number[] | number | zombie.asset.AssetManager | java.io.BufferedInputStream, arg2?: number | zombie.core.textures.Texture$TextureAssetParams | boolean | string, arg3?: number | zombie.core.textures.Texture$PZFileformat);
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      bind(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      copyMaskRegion(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (WrappedBuffer arg0): void
       *  - (boolean[] arg0): void
       *  - (BooleanGrid arg0): void
       */
      createMask(arg0?: zombie.core.utils.WrappedBuffer | boolean[] | zombie.core.utils.BooleanGrid): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): boolean
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.utils.WrappedBuffer
       */
      getData(): zombie.core.utils.WrappedBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightOrig(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Mask
       */
      getMask(): zombie.core.textures.Mask;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRealHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRealWidth(): number;
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
       *  - (Empty): zombie.core.textures.TextureID
       */
      getTextureId(): zombie.core.textures.TextureID;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getUVScale(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseAlphaChannel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthOrig(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollisionable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
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
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      loadMaskRegion(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      makeTransp(arg0: number, arg1: number, arg2: number): void;
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
       *  - (String arg0): void
       */
      reloadFromFile(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, Consumer arg8): void
       *  - (ObjectRenderEffects arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       */
      render(arg0: number | zombie.iso.objects.ObjectRenderEffects, arg1: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg9?: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, int arg5, int arg6, int arg7): void
       */
      renderdiamond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, int arg5, int arg6, int arg7, float arg8, float arg9, float arg10, float arg11): void
       */
      rendershader2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7, Consumer arg8): void
       */
      renderstrip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, int arg5, int arg6, int arg7): void
       */
      renderwalln(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, int arg5, int arg6, int arg7, int arg8, int arg9): void
       */
      renderwallnw(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, int arg5, int arg6, int arg7): void
       */
      renderwallw(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      saveMask(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveMaskRegion(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      saveOnRenderThread(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      saveToCurrentSavefileDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      saveToZomboidDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setAlphaForeach(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setCustomizedTexture(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      setData(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Mask arg0): void
       */
      setMask(arg0: zombie.core.textures.Mask): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setNameOnly(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffsetX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffsetY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRealHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRealWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setRegion(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseAlphaChannel(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): zombie.core.textures.Texture
       *  - (String arg0, int arg1, int arg2, int arg3, int arg4): zombie.core.textures.Texture
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7): zombie.core.textures.Texture[]
       */
      split(arg0: number | string, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): zombie.core.textures.Texture | zombie.core.textures.Texture[];
      /**
       * Method Parameters: 
       *  - (int[] arg0, int[] arg1): zombie.core.textures.Texture[][]
       */
      split2D(arg0: number[], arg1: number[]): zombie.core.textures.Texture[][];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      splitIcon(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static bindNone(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static clearTextures(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (HashMap arg0, HashMap arg1): void
       */
      static collectAllIcons(arg0: java.util.HashMap<string, string>, arg1: java.util.HashMap<string, string>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int[] arg0, int arg1, int arg2): number[]
       */
      static flipPixels(arg0: number[], arg1: number, arg2: number): number[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static forgetTexture(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getEngineMipmapTexture(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getErrorTexture(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       *  - (String arg0, String arg1): zombie.core.textures.Texture
       *  - (String arg0, int arg1): zombie.core.textures.Texture
       *  - (String arg0, int[] arg1, String arg2): zombie.core.textures.Texture
       */
      static getSharedTexture(arg0: string, arg1?: string | number | number[], arg2?: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): zombie.core.textures.Texture
       */
      static getSteamAvatar(arg0: number): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      static getTexture(arg0: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getWhite(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static onTexturePacksChanged(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static processFilePath(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static reload(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): void
       */
      static steamAvatarChanged(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      static trygetTexture(arg0: string): zombie.core.textures.Texture;
    }
    /** [ENUM] zombie.core.textures.Texture$PZFileformat */
    export class Texture$PZFileformat {
      protected constructor();
      static readonly DDS: zombie.core.textures.Texture$PZFileformat;
      static readonly PNG: zombie.core.textures.Texture$PZFileformat;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor TextureAssetParams.new
     * @
     * [CLASS] zombie.core.textures.Texture$TextureAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class Texture$TextureAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor TextureDraw.new
     * @
     * [CLASS] zombie.core.textures.TextureDraw
     */
    export class TextureDraw {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getColor(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      run(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, Consumer arg10): zombie.core.textures.TextureDraw
       *  - (TextureDraw arg0, Texture arg1, WallShaderTexRender arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, Consumer arg11): zombie.core.textures.TextureDraw
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, int arg10, int arg11, int arg12, int arg13): void
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13): void
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, int arg10, int arg11, int arg12, int arg13, Consumer arg14): zombie.core.textures.TextureDraw
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, Consumer arg18): zombie.core.textures.TextureDraw
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, int arg10, int arg11, int arg12, int arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, Consumer arg22): zombie.core.textures.TextureDraw
       *  - (TextureDraw arg0, Texture arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, float arg25, Consumer arg26): void
       */
      static Create(arg0: zombie.core.textures.TextureDraw, arg1: zombie.core.textures.Texture, arg2: number | zombie.core.SpriteRenderer$WallShaderTexRender, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg11?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg12?: number, arg13?: number, arg14?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg15?: number, arg16?: number, arg17?: number, arg18?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg19?: number, arg20?: number, arg21?: number, arg22?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg23?: number, arg24?: number, arg25?: number, arg26?: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): zombie.core.textures.TextureDraw | void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, float arg3): void
       */
      static ShaderUpdate1f(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3): void
       */
      static ShaderUpdate1i(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, float arg3, float arg4): void
       */
      static ShaderUpdate2f(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, float arg3, float arg4, float arg5): void
       */
      static ShaderUpdate3f(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      static ShaderUpdate4f(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static StartShader(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, float arg2): void
       */
      static doCoreIntParam(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, ModelSlot arg1): void
       */
      static drawModel(arg0: zombie.core.textures.TextureDraw, arg1: zombie.core.skinnedmodel.ModelManager$ModelSlot): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3): void
       */
      static drawParticles(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, Shader arg1, int arg2, int arg3, int arg4): void
       */
      static drawPuddles(arg0: zombie.core.textures.TextureDraw, arg1: zombie.core.opengl.Shader, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, Shader arg1, int arg2, int arg3, int arg4): void
       */
      static drawSkyBox(arg0: zombie.core.textures.TextureDraw, arg1: zombie.core.opengl.Shader, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, Shader arg1, int arg2, int arg3, boolean arg4): void
       */
      static drawWater(arg0: zombie.core.textures.TextureDraw, arg1: zombie.core.opengl.Shader, arg2: number, arg3: number, arg4: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, float arg2): void
       */
      static glAlphaFunc(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glBind(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glBlendEquation(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2): void
       */
      static glBlendFunc(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      static glBlendFuncSeparate(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2): void
       */
      static glBuffer(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glClear(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      static glClearColor(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      static glColorMask(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, boolean arg1): void
       */
      static glDepthMask(arg0: zombie.core.textures.TextureDraw, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glDisable(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       */
      static glDoEndFrame(arg0: zombie.core.textures.TextureDraw): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glDoEndFrameFx(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, float arg3, int arg4): void
       *  - (TextureDraw arg0, int arg1, int arg2, float arg3, int arg4, boolean arg5): void
       */
      static glDoStartFrame(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3): void
       */
      static glDoStartFrameFx(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glEnable(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glGenerateMipMaps(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, boolean arg1): void
       */
      static glIgnoreStyles(arg0: zombie.core.textures.TextureDraw, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       */
      static glLoadIdentity(arg0: zombie.core.textures.TextureDraw): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3): void
       */
      static glStencilFunc(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      static glStencilMask(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3): void
       */
      static glStencilOp(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3): void
       */
      static glTexParameteri(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      static glViewport(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    /**
     * @customConstructor GenericDrawer.new
     * @
     * [ABSTRACT CLASS] zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class TextureDraw$GenericDrawer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
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
    }
    /** [ENUM] zombie.core.textures.TextureDraw$Type */
    export class TextureDraw$Type {
      protected constructor();
      static readonly BindActiveTexture: zombie.core.textures.TextureDraw$Type;
      static readonly DrawModel: zombie.core.textures.TextureDraw$Type;
      static readonly DrawParticles: zombie.core.textures.TextureDraw$Type;
      static readonly DrawPuddles: zombie.core.textures.TextureDraw$Type;
      static readonly DrawSkyBox: zombie.core.textures.TextureDraw$Type;
      static readonly DrawWater: zombie.core.textures.TextureDraw$Type;
      static readonly ShaderUpdate: zombie.core.textures.TextureDraw$Type;
      static readonly StartShader: zombie.core.textures.TextureDraw$Type;
      static readonly doCoreIntParam: zombie.core.textures.TextureDraw$Type;
      static readonly drawTerrain: zombie.core.textures.TextureDraw$Type;
      static readonly glAlphaFunc: zombie.core.textures.TextureDraw$Type;
      static readonly glBind: zombie.core.textures.TextureDraw$Type;
      static readonly glBlendEquation: zombie.core.textures.TextureDraw$Type;
      static readonly glBlendFunc: zombie.core.textures.TextureDraw$Type;
      static readonly glBlendFuncSeparate: zombie.core.textures.TextureDraw$Type;
      static readonly glBuffer: zombie.core.textures.TextureDraw$Type;
      static readonly glClear: zombie.core.textures.TextureDraw$Type;
      static readonly glClearColor: zombie.core.textures.TextureDraw$Type;
      static readonly glColorMask: zombie.core.textures.TextureDraw$Type;
      static readonly glDepthMask: zombie.core.textures.TextureDraw$Type;
      static readonly glDisable: zombie.core.textures.TextureDraw$Type;
      static readonly glDoEndFrame: zombie.core.textures.TextureDraw$Type;
      static readonly glDoEndFrameFx: zombie.core.textures.TextureDraw$Type;
      static readonly glDoStartFrame: zombie.core.textures.TextureDraw$Type;
      static readonly glDoStartFrameFx: zombie.core.textures.TextureDraw$Type;
      static readonly glDoStartFrameText: zombie.core.textures.TextureDraw$Type;
      static readonly glDraw: zombie.core.textures.TextureDraw$Type;
      static readonly glEnable: zombie.core.textures.TextureDraw$Type;
      static readonly glGenerateMipMaps: zombie.core.textures.TextureDraw$Type;
      static readonly glIgnoreStyles: zombie.core.textures.TextureDraw$Type;
      static readonly glLoadIdentity: zombie.core.textures.TextureDraw$Type;
      static readonly glStencilFunc: zombie.core.textures.TextureDraw$Type;
      static readonly glStencilMask: zombie.core.textures.TextureDraw$Type;
      static readonly glStencilOp: zombie.core.textures.TextureDraw$Type;
      static readonly glTexParameteri: zombie.core.textures.TextureDraw$Type;
      static readonly glViewport: zombie.core.textures.TextureDraw$Type;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor TextureFBO.new
     * @
     * [CLASS] zombie.core.textures.TextureFBO
     */
    export class TextureFBO {
      /**
       * Constructors: 
       *  - (ITexture arg0)
       *  - (ITexture arg0, boolean arg1)
       */
      constructor(arg0: zombie.interfaces.ITexture | null, arg1?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroyLeaveTexture(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endDrawing(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBufferId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.interfaces.ITexture
       */
      getTexture(): zombie.interfaces.ITexture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseTexture(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0, boolean arg1): void
       */
      startDrawing(arg0?: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ITexture arg0): void
       */
      swapTexture(arg0: zombie.interfaces.ITexture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static checkFBOSupport(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getCurrentID(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.IGLFramebufferObject
       */
      static getFuncs(): zombie.core.textures.IGLFramebufferObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reset(): void;
    }
    /**
     * @customConstructor TextureID.new
     * @
     * [CLASS] zombie.core.textures.TextureID extends zombie.asset.Asset
     */
    export class TextureID {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;
      /** boolean */
      static UseFiltering: boolean;
      /** boolean */
      static bUseCompression: boolean;
      /** boolean */
      static bUseCompressionOption: boolean;
      /** java.nio.IntBuffer */
      static readonly deleteTextureIDS?: java.nio.IntBuffer;
      /** long */
      static totalGraphicMemory: number;
      /** float */
      static totalMemUsed: number;

      /**
       * Constructors: 
       *  - (String arg0)
       *  - (ImageData arg0)
       *  - (String arg0, int[] arg1)
       *  - (String arg0, String arg1)
       *  - (BufferedInputStream arg0, String arg1, boolean arg2)
       *  - (AssetPath arg0, AssetManager arg1, TextureIDAssetParams arg2)
       *  - (int arg0, int arg1, int arg2)
       *  - (String arg0, int arg1, int arg2, int arg3)
       *  - (BufferedInputStream arg0, String arg1, boolean arg2, PZFileformat arg3)
       */
      constructor(arg0: string | zombie.core.textures.ImageData | java.io.BufferedInputStream | zombie.asset.AssetPath | number, arg1?: number[] | string | zombie.asset.AssetManager | number, arg2?: boolean | zombie.core.textures.TextureID$TextureIDAssetParams | number, arg3?: number | zombie.core.textures.Texture$PZFileformat);
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bind(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bindalways(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      freeMemory(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.utils.WrappedBuffer
       */
      getData(): zombie.core.utils.WrappedBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ImageData
       */
      getImageData(): zombie.core.textures.ImageData;
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
       *  - (Empty): string
       */
      getPathFileName(): string;
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
      hasMipMaps(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
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
       *  - (Empty): boolean
       */
      isSolid(): boolean;
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
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      setData(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ImageData arg0): void
       */
      setImageData(arg0: zombie.core.textures.ImageData): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMagFilter(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinFilter(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): zombie.core.textures.TextureID
       */
      static createSteamAvatar(arg0: number): zombie.core.textures.TextureID;
    }
    /**
     * @customConstructor TextureIDAssetParams.new
     * @
     * [CLASS] zombie.core.textures.TextureID$TextureIDAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class TextureID$TextureIDAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor TexturePackPage.new
     * @
     * [CLASS] zombie.core.textures.TexturePackPage
     */
    export class TexturePackPage {
      /** java.util.HashMap<java.lang.String, java.util.Stack<java.lang.String>> */
      static FoundTextures?: java.util.HashMap<string, java.util.Stack<string>>;
      /** java.util.ArrayList<zombie.core.textures.TexturePackPage$SubTextureInfo> */
      static TempSubTextureInfo?: java.util.ArrayList<zombie.core.textures.TexturePackPage$SubTextureInfo>;
      /** java.util.HashMap<java.lang.String, java.lang.String> */
      static readonly TexturePackPageNameMap?: java.util.HashMap<string, string>;
      /** boolean */
      static bIgnoreWorldItemTextures: boolean;
      /** int */
      static chl1: number;
      /** int */
      static chl2: number;
      /** int */
      static chl3: number;
      /** int */
      static chl4: number;
      /** java.util.HashMap<java.lang.String, zombie.core.textures.Texture> */
      static readonly subTextureMap?: java.util.HashMap<string, zombie.core.textures.Texture>;
      /** java.util.HashMap<java.lang.String, zombie.core.textures.Texture> */
      static readonly subTextureMap2?: java.util.HashMap<string, zombie.core.textures.Texture>;
      /** java.util.ArrayList<java.lang.String> */
      static tempFilenameCheck?: java.util.ArrayList<string>;
      /** java.util.HashMap<java.lang.String, zombie.core.textures.TexturePackPage> */
      static readonly texturePackPageMap?: java.util.HashMap<string, zombie.core.textures.TexturePackPage>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BufferedInputStream arg0): void
       */
      loadFromPackFile(arg0: java.io.BufferedInputStream): void;
      /**
       * Method Parameters: 
       *  - (BufferedInputStream arg0): void
       */
      loadFromPackFileDDS(arg0: java.io.BufferedInputStream): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static LoadDir(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InputStream arg0): string
       */
      static ReadString(arg0: java.io.InputStream): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      static getTexture(arg0: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InputStream arg0): number
       *  - (ByteBuffer arg0): number
       */
      static readInt(arg0: java.io.InputStream | java.nio.ByteBuffer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InputStream arg0): number
       */
      static readIntByte(arg0: java.io.InputStream): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (File arg0): void
       */
      static searchFolders(arg0: java.io.File): void;
    }
    /**
     * @customConstructor SubTextureInfo.new
     * @
     * [CLASS] zombie.core.textures.TexturePackPage$SubTextureInfo
     */
    export class TexturePackPage$SubTextureInfo {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, String arg8)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: string | null);
    }
  }
}
