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
  export namespace zombie.core.sprite {
    /**
     * @customConstructor GenericSpriteRenderState.new
     * @
     * [ABSTRACT CLASS] zombie.core.sprite.GenericSpriteRenderState
     */
    export class GenericSpriteRenderState {
      /** byte */
      static readonly UVCA_CIRCLE: number;
      /** byte */
      static readonly UVCA_NOCIRCLE: number;
      /** byte */
      static readonly UVCA_NONE: number;


      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckSpriteSlots(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EndShader(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      ShaderUpdate1f(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      ShaderUpdate1i(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3): void
       */
      ShaderUpdate2f(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
       */
      ShaderUpdate3f(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      ShaderUpdate4f(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      StartShader(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearCutawayTexture(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearUseVertColorsArray(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      doCoreIntParam(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (GenericDrawer arg0): void
       */
      drawGeneric(arg0: zombie.core.textures.TextureDraw$GenericDrawer): void;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0): void
       */
      drawModel(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      drawParticles(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, int arg3): void
       */
      drawPuddles(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, int arg3): void
       */
      drawSkyBox(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, boolean arg3): void
       */
      drawWater(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      glAlphaFunc(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glBind(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glBlendEquation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBlendFunc(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glBlendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBuffer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glClear(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glColorMask(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      glDepthMask(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDisable(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      glDoEndFrame(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDoEndFrameFx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, int arg3): void
       *  - (int arg0, int arg1, float arg2, int arg3, boolean arg4): void
       */
      glDoStartFrame(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glDoStartFrameFx(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glEnable(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glGenerateMipMaps(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      glIgnoreStyles(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      glLoadIdentity(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glStencilFunc(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glStencilMask(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glStencilOp(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glTexParameteri(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glViewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendering(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReady(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onRenderAcquired(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onRendered(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, int arg9, int arg10, int arg11, int arg12): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, float arg9, float arg10, float arg11, float arg12, Consumer arg13): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, Consumer arg17): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, Consumer arg25): void
       */
      render(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg10?: number, arg11?: number, arg12?: number, arg13?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg14?: number, arg15?: number, arg16?: number, arg17?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg18?: number, arg19?: number, arg20?: number, arg21?: number, arg22?: number, arg23?: number, arg24?: number, arg25?: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20): void
       */
      renderPoly(arg0: number | zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12?: number, arg13?: number, arg14?: number, arg15?: number, arg16?: number, arg17?: number, arg18?: number, arg19?: number, arg20?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, Consumer arg25): void
       */
      renderdebug(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number, arg19: number, arg20: number, arg21: number, arg22: number, arg23: number, arg24: number, arg25: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       */
      renderflipped(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, int arg9): void
       */
      renderline(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setCutawayTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (WallShaderTexRender arg0): void
       */
      setExtraWallShaderParams(arg0: zombie.core.SpriteRenderer$WallShaderTexRender): void;
      /**
       * Method Parameters: 
       *  - (byte arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setUseVertColorsArray(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0): void
       */
      static clearSprites(arg0: java.util.List<zombie.core.textures.TextureDraw>): void;
    }
    /**
     * @customConstructor SpriteRenderState.new
     * @
     * [CLASS] zombie.core.sprite.SpriteRenderState extends zombie.core.sprite.GenericSpriteRenderState
     */
    export class SpriteRenderState {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckSpriteSlots(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EndShader(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      ShaderUpdate1f(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      ShaderUpdate1i(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3): void
       */
      ShaderUpdate2f(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
       */
      ShaderUpdate3f(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      ShaderUpdate4f(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      StartShader(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearCutawayTexture(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearUseVertColorsArray(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      doCoreIntParam(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (GenericDrawer arg0): void
       */
      drawGeneric(arg0: zombie.core.textures.TextureDraw$GenericDrawer): void;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0): void
       */
      drawModel(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      drawParticles(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, int arg3): void
       */
      drawPuddles(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, int arg3): void
       */
      drawSkyBox(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, boolean arg3): void
       */
      drawWater(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.sprite.GenericSpriteRenderState
       */
      getActiveState(): zombie.core.sprite.GenericSpriteRenderState;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      glAlphaFunc(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glBind(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glBlendEquation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBlendFunc(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glBlendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBuffer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glClear(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glColorMask(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      glDepthMask(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDisable(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      glDoEndFrame(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDoEndFrameFx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, int arg3): void
       *  - (int arg0, int arg1, float arg2, int arg3, boolean arg4): void
       */
      glDoStartFrame(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glDoStartFrameFx(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glEnable(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glGenerateMipMaps(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      glIgnoreStyles(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      glLoadIdentity(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glStencilFunc(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glStencilMask(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glStencilOp(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glTexParameteri(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glViewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendering(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReady(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onRenderAcquired(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onRendered(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      prePopulating(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, int arg9, int arg10, int arg11, int arg12): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, float arg9, float arg10, float arg11, float arg12, Consumer arg13): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, Consumer arg17): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, Consumer arg25): void
       */
      render(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg10?: number, arg11?: number, arg12?: number, arg13?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg14?: number, arg15?: number, arg16?: number, arg17?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg18?: number, arg19?: number, arg20?: number, arg21?: number, arg22?: number, arg23?: number, arg24?: number, arg25?: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20): void
       */
      renderPoly(arg0: number | zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12?: number, arg13?: number, arg14?: number, arg15?: number, arg16?: number, arg17?: number, arg18?: number, arg19?: number, arg20?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, Consumer arg25): void
       */
      renderdebug(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number, arg19: number, arg20: number, arg21: number, arg22: number, arg23: number, arg24: number, arg25: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       */
      renderflipped(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, int arg9): void
       */
      renderline(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setCutawayTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (WallShaderTexRender arg0): void
       */
      setExtraWallShaderParams(arg0: zombie.core.SpriteRenderer$WallShaderTexRender): void;
      /**
       * Method Parameters: 
       *  - (byte arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setUseVertColorsArray(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0): void
       */
      static clearSprites(arg0: java.util.List<zombie.core.textures.TextureDraw>): void;
    }
  }
}
