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
  export namespace zombie.core.fonts {
    /**
     * @customConstructor AngelCodeFont.new
     * @
     * [CLASS] zombie.core.fonts.AngelCodeFont
     */
    export class AngelCodeFont {
      /** float */
      static curA: number;
      /** float */
      static curB: number;
      /** zombie.core.Color */
      static curCol?: zombie.core.Color;
      /** float */
      static curG: number;
      /** float */
      static curR: number;
      /** int */
      static xoff: number;
      /** int */
      static yoff: number;

      /**
       * Constructors: 
       *  - (String arg0, Texture arg1)
       *  - (String arg0, String arg1)
       */
      constructor(arg0: string, arg1: zombie.core.textures.Texture | string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, String arg2): void
       *  - (float arg0, float arg1, String arg2, Color arg3): void
       *  - (float arg0, float arg1, String arg2, Color arg3, int arg4, int arg5): void
       *  - (float arg0, float arg1, String arg2, float arg3, float arg4, float arg5, float arg6): void
       *  - (float arg0, float arg1, float arg2, String arg3, float arg4, float arg5, float arg6, float arg7): void
       *  - (float arg0, float arg1, String arg2, float arg3, float arg4, float arg5, float arg6, int arg7, int arg8): void
       *  - (float arg0, float arg1, float arg2, String arg3, float arg4, float arg5, float arg6, float arg7, int arg8, int arg9): void
       */
      drawString(arg0: number, arg1: number, arg2: string | number, arg3?: zombie.core.Color | number | string, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getHeight(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLineHeight(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, int arg1, int arg2): number
       *  - (String arg0, int arg1, int arg2, boolean arg3): number
       */
      getWidth(arg0: string, arg1?: boolean | number, arg2?: number, arg3?: boolean): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getYOffset(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0, State arg1, Asset arg2): void
       */
      onStateChanged(arg0: zombie.asset.Asset$State, arg1: zombie.asset.Asset$State, arg2: zombie.asset.Asset): void;
    }
    /**
     * @customConstructor CharDef.new
     * @
     * [CLASS] zombie.core.fonts.AngelCodeFont$CharDef
     */
    export class AngelCodeFont$CharDef {
      /**
       * Constructors: 
       *  - (AngelCodeFont arg0)
       */
      constructor(arg0: zombie.core.fonts.AngelCodeFont);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      draw(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getKerning(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor CharDefTexture.new
     * @
     * [CLASS] zombie.core.fonts.AngelCodeFont$CharDefTexture extends zombie.core.textures.Texture
     */
    export class AngelCodeFont$CharDefTexture {
      /**
       * Constructors: 
       *  - (TextureID arg0, String arg1)
       */
      constructor(arg0: zombie.core.textures.TextureID, arg1: string);
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
       *  - (boolean[] arg0): void
       *  - (BooleanGrid arg0): void
       *  - (WrappedBuffer arg0): void
       */
      createMask(arg0?: boolean[] | zombie.core.utils.BooleanGrid | zombie.core.utils.WrappedBuffer): void;
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
       *  - (Empty): void
       */
      releaseCharDef(): void;
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
       *  - (String arg0, int arg1): zombie.core.textures.Texture
       *  - (String arg0, String arg1): zombie.core.textures.Texture
       *  - (String arg0, int[] arg1, String arg2): zombie.core.textures.Texture
       */
      static getSharedTexture(arg0: string, arg1?: number | string | number[], arg2?: string): zombie.core.textures.Texture;
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
  }
}
