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
  export namespace zombie.ui {
    /**
     * @customConstructor ActionProgressBar.new
     * @
     * [CLASS] zombie.ui.ActionProgressBar extends zombie.ui.UIElement
     */
    export class ActionProgressBar {
      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor Clock.new
     * @
     * [CLASS] zombie.ui.Clock extends zombie.ui.UIElement
     */
    export class Clock {
      /** zombie.ui.Clock */
      static instance?: zombie.ui.Clock;

      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDateVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor HUDButton.new
     * @
     * [CLASS] zombie.ui.HUDButton extends zombie.ui.UIElement
     */
    export class HUDButton {
      /**
       * Constructors: 
       *  - (String arg0, float arg1, float arg2, String arg3, String arg4, UIEventHandler arg5)
       *  - (String arg0, double arg1, double arg2, String arg3, String arg4, UIElement arg5)
       *  - (String arg0, float arg1, float arg2, String arg3, String arg4, String arg5, UIEventHandler arg6)
       *  - (String arg0, float arg1, float arg2, String arg3, String arg4, String arg5, UIElement arg6)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: string, arg5: zombie.ui.UIEventHandler | zombie.ui.UIElement | string, arg6?: zombie.ui.UIEventHandler | zombie.ui.UIElement);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor ModalDialog.new
     * @
     * [CLASS] zombie.ui.ModalDialog extends zombie.ui.NewWindow
     */
    export class ModalDialog {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, boolean arg2)
       */
      constructor(arg0: string, arg1: string, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      Clicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      Nest(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor MoodlesUI.new
     * @
     * [CLASS] zombie.ui.MoodlesUI extends zombie.ui.UIElement
     */
    export class MoodlesUI {
      /** zombie.core.textures.Texture */
      static chevronDown?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static chevronDownBorder?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static chevronUp?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static chevronUpBorder?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static minusGreen?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static minusRed?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static plusGreen?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static plusRed?: zombie.core.textures.Texture;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CurrentlyAnimating(): boolean;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      Nest(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (MoodleType arg0): void
       */
      wiggle(arg0: zombie.characters.Moodles.MoodleType): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.MoodlesUI
       */
      static getInstance(): zombie.ui.MoodlesUI;
    }
    /**
     * @customConstructor NewHealthPanel.new
     * @
     * [CLASS] zombie.ui.NewHealthPanel extends zombie.ui.NewWindow
     */
    export class NewHealthPanel {
      /** zombie.ui.NewHealthPanel */
      static instance?: zombie.ui.NewHealthPanel;

      /**
       * Constructors: 
       *  - (int arg0, int arg1, IsoGameCharacter arg2)
       */
      constructor(arg0: number, arg1: number, arg2: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      Nest(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      SetCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDamageStatusString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor ObjectTooltip.new
     * @
     * [CLASS] zombie.ui.ObjectTooltip extends zombie.ui.UIElement
     */
    export class ObjectTooltip {
      /** float */
      static alphaStep: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawProgressBar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3): void
       */
      DrawValueRight(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2): void
       *  - (int arg0, int arg1, int arg2): void
       */
      DrawValueRightNoPlus(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      adjustWidth(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.ObjectTooltip$Layout
       */
      beginLayout(): zombie.ui.ObjectTooltip$Layout;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Layout arg0): void
       */
      endLayout(arg0: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIFont
       */
      getFont(): zombie.ui.UIFont;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLineSpacing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightOfStack(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      hide(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMeasureOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMeasureOnly(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeightOfStack(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, double arg1, double arg2): void
       */
      show(arg0: zombie.iso.IsoObject, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static checkFont(): void;
    }
    /**
     * @customConstructor Layout.new
     * @
     * [CLASS] zombie.ui.ObjectTooltip$Layout
     */
    export class ObjectTooltip$Layout {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.ObjectTooltip$LayoutItem
       */
      addItem(): zombie.ui.ObjectTooltip$LayoutItem;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      free(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, ObjectTooltip arg2): number
       */
      render(arg0: number, arg1: number, arg2: zombie.ui.ObjectTooltip): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinLabelWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinValueWidth(arg0: number): void;
    }
    /**
     * @customConstructor LayoutItem.new
     * @
     * [CLASS] zombie.ui.ObjectTooltip$LayoutItem
     */
    export class ObjectTooltip$LayoutItem {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calcSizes(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, ObjectTooltip arg4): void
       */
      render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setLabel(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setProgress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setValue(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setValueRight(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (float arg0): void
       */
      setValueRightNoPlus(arg0: number): void;
    }
    /**
     * @customConstructor RadarPanel.new
     * @
     * [CLASS] zombie.ui.RadarPanel extends zombie.ui.UIElement
     */
    export class RadarPanel {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor RadialMenu.new
     * @
     * [CLASS] zombie.ui.RadialMenu extends zombie.ui.UIElement
     */
    export class RadialMenu {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Texture arg1): void
       */
      addSlice(arg0: string, arg1: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getSliceIndexFromJoypad(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getSliceIndexFromMouse(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setJoypad(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      setSliceText(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, Texture arg1): void
       */
      setSliceTexture(arg0: number, arg1: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor RadialProgressBar.new
     * @
     * [CLASS] zombie.ui.RadialProgressBar extends zombie.ui.UIElement
     */
    export class RadialProgressBar {
      /**
       * Constructors: 
       *  - (KahluaTable arg0, Texture arg1)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable, arg1: zombie.core.textures.Texture);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor SpeedControls.new
     * @
     * [CLASS] zombie.ui.SpeedControls extends zombie.ui.UIElement
     */
    export class SpeedControls {
      /** zombie.ui.HUDButton */
      static FastForward?: zombie.ui.HUDButton;
      /** zombie.ui.HUDButton */
      static FasterForward?: zombie.ui.HUDButton;
      /** zombie.ui.HUDButton */
      static Pause?: zombie.ui.HUDButton;
      /** zombie.ui.HUDButton */
      static Play?: zombie.ui.HUDButton;
      /** zombie.ui.HUDButton */
      static Wait?: zombie.ui.HUDButton;
      /** zombie.ui.SpeedControls */
      static instance?: zombie.ui.SpeedControls;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SetCorrectIconStates(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetCurrentGameSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentGameSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor SCButton.new
     * @
     * [CLASS] zombie.ui.SpeedControls$SCButton extends zombie.ui.HUDButton
     */
    export class SpeedControls$SCButton {
      /**
       * Constructors: 
       *  - (String arg0, float arg1, float arg2, String arg3, String arg4, UIElement arg5)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: string, arg5: zombie.ui.UIElement);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /** [ENUM] zombie.ui.TextDrawHorizontal */
    export class TextDrawHorizontal {
      protected constructor();
      static readonly Center: zombie.ui.TextDrawHorizontal;
      static readonly Left: zombie.ui.TextDrawHorizontal;
      static readonly Right: zombie.ui.TextDrawHorizontal;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor TextDrawObject.new
     * @
     * [CLASS] zombie.ui.TextDrawObject
     */
    export class TextDrawObject {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0, int arg1, int arg2, boolean arg3)
       *  - (int arg0, int arg1, int arg2, boolean arg3, boolean arg4, boolean arg5, boolean arg6, boolean arg7, boolean arg8)
       */
      constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: boolean, arg4?: boolean, arg5?: boolean, arg6?: boolean, arg7?: boolean, arg8?: boolean);
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       *  - (double arg0, double arg1, boolean arg2): void
       *  - (double arg0, double arg1, boolean arg2, float arg3): void
       *  - (double arg0, double arg1, double arg2, double arg3, double arg4, double arg5, boolean arg6): void
       *  - (TextDrawHorizontal arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, boolean arg7): void
       */
      AddBatchedDraw(arg0: number | zombie.ui.TextDrawHorizontal, arg1: number, arg2?: boolean | number, arg3?: number, arg4?: number, arg5?: number, arg6?: boolean | number, arg7?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Clear(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       *  - (double arg0, double arg1, boolean arg2): void
       *  - (double arg0, double arg1, boolean arg2, float arg3): void
       *  - (double arg0, double arg1, double arg2, double arg3, double arg4, double arg5, boolean arg6): void
       *  - (TextDrawHorizontal arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, boolean arg7): void
       */
      Draw(arg0: number | zombie.ui.TextDrawHorizontal, arg1: number, arg2?: boolean | number, arg3?: number, arg4?: number, arg5?: number, arg6?: boolean | number, arg7?: boolean): void;
      /**
       * Method Parameters: 
       *  - (TextDrawHorizontal arg0, double arg1, double arg2, float arg3, float arg4, float arg5, float arg6, boolean arg7): void
       */
      DrawRaw(arg0: zombie.ui.TextDrawHorizontal, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, int arg1): void
       *  - (UIFont arg0, String arg1, int arg2): void
       */
      ReadString(arg0: string | zombie.ui.UIFont, arg1?: number | string, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateDimensions(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomTag(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIFont
       */
      getDefaultFontEnum(): zombie.ui.UIFont;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHearRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.TextDrawHorizontal
       */
      getHorizontalAlign(): zombie.ui.TextDrawHorizontal;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInternalClock(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginal(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrambleVal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUnformatted(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVisibleRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNullOrZeroLength(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowAnyImage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowBBcode(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowChatIcons(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowColors(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowFonts(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowImages(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowLineBreaks(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCustomImageMaxDimensions(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCustomTag(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       *  - (int arg0, int arg1, int arg2): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setDefaultColors(arg0: number, arg1: number, arg2: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0): void
       */
      setDefaultFont(arg0: zombie.ui.UIFont): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDrawBackground(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEqualizeLineHeights(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHearRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (TextDrawHorizontal arg0): void
       *  - (String arg0): void
       */
      setHorizontalAlign(arg0: zombie.ui.TextDrawHorizontal | string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInternalTickClock(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxCharsPerLine(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       *  - (float arg0, float arg1, float arg2): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setOutlineColors(arg0: number, arg1: number, arg2: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScrambleVal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5): void
       */
      setSettings(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): void;
      /**
       * Method Parameters: 
       *  - (String[] arg0): void
       */
      setValidFonts(arg0: string[]): void;
      /**
       * Method Parameters: 
       *  - (String[] arg0): void
       */
      setValidImages(arg0: string[]): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setVisibleRadius(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): number
       */
      updateInternalTickClock(arg0?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static NoRender(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static RenderBatch(arg0: number): void;
    }
    /**
     * @customConstructor TextManager.new
     * @
     * [CLASS] zombie.ui.TextManager
     */
    export class TextManager {
      /** zombie.ui.TextManager */
      static readonly instance?: zombie.ui.TextManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, String arg2): void
       *  - (double arg0, double arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (UIFont arg0, double arg1, double arg2, double arg3, String arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawString(arg0: number | zombie.ui.UIFont, arg1: number, arg2: string | number, arg3?: number | string, arg4?: number | string, arg5?: number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawStringBBcode(arg0: zombie.ui.UIFont, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawStringCentre(arg0: number | zombie.ui.UIFont, arg1: number, arg2: string | number, arg3: number | string, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawStringCentreDefered(arg0: zombie.ui.UIFont, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawStringRight(arg0: number | zombie.ui.UIFont, arg1: number, arg2: string | number, arg3: number | string, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawStringUntrimmed(arg0: zombie.ui.UIFont, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DrawTextFromGameWorld(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, TextDrawObject arg2): void
       */
      DrawTextObject(arg0: number, arg1: number, arg2: zombie.ui.TextDrawObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, boolean arg2): zombie.ui.TextDrawObject
       */
      GetDrawTextObject(arg0: string, arg1: number, arg2: boolean): zombie.ui.TextDrawObject;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Init(): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0): number
       */
      MeasureFont(arg0: zombie.ui.UIFont): number;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1): number
       */
      MeasureStringX(arg0: zombie.ui.UIFont, arg1: string): number;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1): number
       */
      MeasureStringY(arg0: zombie.ui.UIFont, arg1: string): number;
      /**
       * Method Parameters: 
       *  - (UIFont arg0): zombie.core.fonts.AngelCodeFont
       */
      getFontFromEnum(arg0: zombie.ui.UIFont): zombie.core.fonts.AngelCodeFont;
      /**
       * Method Parameters: 
       *  - (UIFont arg0): number
       */
      getFontHeight(arg0: zombie.ui.UIFont): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.fonts.AngelCodeFont
       */
      getNormalFromFontSize(arg0: number): zombie.core.fonts.AngelCodeFont;
    }
    /**
     * @customConstructor DeferedTextDraw.new
     * @
     * [CLASS] zombie.ui.TextManager$DeferedTextDraw
     */
    export class TextManager$DeferedTextDraw {
      /**
       * Constructors: 
       *  - (UIFont arg0, double arg1, double arg2, String arg3, double arg4, double arg5, double arg6, double arg7)
       */
      constructor(arg0: zombie.ui.UIFont, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    /**
     * @customConstructor UI3DModel.new
     * @
     * [CLASS] zombie.ui.UI3DModel extends zombie.ui.UIElement
     */
    export class UI3DModel {
      /**
       * Constructors: 
       *  - (KahluaTable arg0)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clothingItemChanged(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDirection(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      reportEvent(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAnimSetName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setDirection(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoRandomExtAnimations(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsometric(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, boolean arg2): void
       */
      setOutfitName(arg0: string, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setState(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      setSurvivorDesc(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setXOffset(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setYOffset(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor UIDebugConsole.new
     * @
     * [CLASS] zombie.ui.UIDebugConsole extends zombie.ui.NewWindow
     */
    export class UIDebugConsole {
      /** zombie.ui.UIDebugConsole */
      static instance?: zombie.ui.UIDebugConsole;

      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      Nest(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ProcessCommand(): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (byte[] arg0, int arg1, int arg2): void
       */
      addOutput(arg0: number[], arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (CharSequence arg0, CharSequence arg1): number
       */
      levenshteinDistance(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onOtherKey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor UIElement.new
     * @
     * [CLASS] zombie.ui.UIElement
     */
    export class UIElement {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (KahluaTable arg0)
       */
      constructor(arg0?: se.krka.kahlua.vm.KahluaTable);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor UIEventHandler.new
     * @
     * [INTERFACE] zombie.ui.UIEventHandler
     */
    export class UIEventHandler {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2): void
       */
      DoubleClick(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      ModalClick(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2): void
       */
      Selected(arg0: string, arg1: number, arg2: number): void;
    }
    /** [ENUM] zombie.ui.UIFont */
    export class UIFont {
      protected constructor();
      static readonly AutoNormLarge: zombie.ui.UIFont;
      static readonly AutoNormMedium: zombie.ui.UIFont;
      static readonly AutoNormSmall: zombie.ui.UIFont;
      static readonly Code: zombie.ui.UIFont;
      static readonly Cred1: zombie.ui.UIFont;
      static readonly Cred2: zombie.ui.UIFont;
      static readonly DebugConsole: zombie.ui.UIFont;
      static readonly Dialogue: zombie.ui.UIFont;
      static readonly Handwritten: zombie.ui.UIFont;
      static readonly Intro: zombie.ui.UIFont;
      static readonly Large: zombie.ui.UIFont;
      static readonly MainMenu1: zombie.ui.UIFont;
      static readonly MainMenu2: zombie.ui.UIFont;
      static readonly Massive: zombie.ui.UIFont;
      static readonly Medium: zombie.ui.UIFont;
      static readonly MediumNew: zombie.ui.UIFont;
      static readonly NewLarge: zombie.ui.UIFont;
      static readonly NewMedium: zombie.ui.UIFont;
      static readonly NewSmall: zombie.ui.UIFont;
      static readonly Small: zombie.ui.UIFont;
      static readonly Title: zombie.ui.UIFont;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor UIManager.new
     * @
     * [CLASS] zombie.ui.UIManager
     */
    export class UIManager {
      /** zombie.ui.UIDebugConsole */
      static DebugConsole?: zombie.ui.UIDebugConsole;
      /** java.util.ArrayList<java.lang.String> */
      static readonly DoneTutorials?: java.util.ArrayList<string>;
      /** float */
      static FadeAlpha: number;
      /** int */
      static FadeInTime: number;
      /** int */
      static FadeInTimeMax: number;
      /** boolean */
      static FadingOut: boolean;
      /** boolean */
      static KeyDownZoomIn: boolean;
      /** boolean */
      static KeyDownZoomOut: boolean;
      /** zombie.iso.IsoObject */
      static LastPicked?: zombie.iso.IsoObject;
      /** zombie.ui.ModalDialog */
      static Modal?: zombie.ui.ModalDialog;
      /** zombie.ui.MoodlesUI[] */
      static readonly MoodleUI?: zombie.ui.MoodlesUI[];
      /** zombie.iso.IsoObjectPicker$ClickObject */
      static Picked?: zombie.iso.IsoObjectPicker$ClickObject;
      /** zombie.iso.Vector2 */
      static readonly PickedTile?: zombie.iso.Vector2;
      /** zombie.iso.Vector2 */
      static readonly PickedTileLocal?: zombie.iso.Vector2;
      /** zombie.ui.ActionProgressBar[] */
      static readonly ProgressBar?: zombie.ui.ActionProgressBar[];
      /** zombie.iso.IsoObject */
      static RightDownObject?: zombie.iso.IsoObject;
      /** zombie.ui.UIServerToolbox */
      static ServerToolbox?: zombie.ui.UIServerToolbox;
      /** java.util.ArrayList<zombie.ui.UIElement> */
      static readonly UI?: java.util.ArrayList<zombie.ui.UIElement>;
      /** zombie.core.textures.TextureFBO */
      static UIFBO?: zombie.core.textures.TextureFBO;
      /** boolean */
      static VisibleAllUI: boolean;
      /** boolean */
      static bFadeBeforeUI: boolean;
      /** boolean */
      static bSuspend: boolean;
      /** zombie.core.textures.Texture */
      static black?: zombie.core.textures.Texture;
      /** zombie.ui.Clock */
      static clock?: zombie.ui.Clock;
      /** se.krka.kahlua.vm.KahluaThread */
      static defaultthread?: se.krka.kahlua.vm.KahluaThread;
      /** boolean */
      static doTick: boolean;
      /** float */
      static lastAlpha: number;
      /** zombie.core.textures.Texture */
      static lastMouseTexture?: zombie.core.textures.Texture;
      /** int */
      static lastMouseX: number;
      /** int */
      static lastMouseY: number;
      /** float */
      static lastOffX: number;
      /** float */
      static lastOffY: number;
      /** zombie.core.textures.Texture */
      static mouseArrow?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static mouseAttack?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static mouseExamine?: zombie.core.textures.Texture;
      /** zombie.core.textures.Texture */
      static mouseGrab?: zombie.core.textures.Texture;
      /** se.krka.kahlua.vm.KahluaThread */
      static previousThread?: se.krka.kahlua.vm.KahluaThread;
      /** zombie.ui.SpeedControls */
      static speedControls?: zombie.ui.SpeedControls;
      /** java.util.ArrayList<zombie.ui.UIElement> */
      static readonly toTop?: java.util.ArrayList<zombie.ui.UIElement>;
      /** zombie.ui.ObjectTooltip */
      static toolTip?: zombie.ui.ObjectTooltip;
      /** long */
      static uiRenderIntervalMS: number;
      /** long */
      static uiRenderTimeMS: number;
      /** long */
      static uiUpdateIntervalMS: number;
      /** long */
      static uiUpdateTimeMS: number;
      /** boolean */
      static useUIFBO: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      static AddUI(arg0: zombie.ui.UIElement): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static CloseContainers(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static CreateFBO(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      static DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3?: number, arg4?: number, arg5?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       *  - (double arg0, double arg1): void
       */
      static FadeIn(arg0: number, arg1?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       *  - (double arg0, double arg1): void
       */
      static FadeOut(arg0: number, arg1?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      static RemoveElement(arg0: zombie.ui.UIElement): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static closeContainers(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, boolean arg2): zombie.core.textures.TextureFBO
       */
      static createTexture(arg0: number, arg1: number, arg2: boolean): zombie.core.textures.TextureFBO;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, long arg1): void
       */
      static debugBreakpoint(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getBlack(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.Clock
       */
      static getClock(): zombie.ui.Clock;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIDebugConsole
       */
      static getDebugConsole(): zombie.ui.UIDebugConsole;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaThread
       */
      static getDefaultThread(): se.krka.kahlua.vm.KahluaThread;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getDoneTutorials(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getDoubleClickDist(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getDoubleClickInterval(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       *  - (double arg0): number
       */
      static getFadeAlpha(arg0?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFadeInTime(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFadeInTimeMax(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastAlpha(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getLastMouseTexture(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastMouseX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastMouseY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastOffX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastOffY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastPicked(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMillisSinceLastRender(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMillisSinceLastUpdate(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.ModalDialog
       */
      static getModal(): zombie.ui.ModalDialog;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): zombie.ui.MoodlesUI
       */
      static getMoodleUI(arg0: number): zombie.ui.MoodlesUI;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getMouseArrow(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getMouseAttack(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getMouseExamine(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getMouseGrab(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObjectPicker$ClickObject
       */
      static getPicked(): zombie.iso.IsoObjectPicker$ClickObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getPickedTile(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getPickedTileLocal(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): zombie.ui.ActionProgressBar
       */
      static getProgressBar(arg0: number): zombie.ui.ActionProgressBar;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getRightDownObject(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSecondsSinceLastRender(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSecondsSinceLastUpdate(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIServerToolbox
       */
      static getServerToolbox(): zombie.ui.UIServerToolbox;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.SpeedControls
       */
      static getSpeedControls(): zombie.ui.SpeedControls;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2): zombie.iso.Vector2
       */
      static getTileFromMouse(arg0: number, arg1: number, arg2: number): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.ObjectTooltip
       */
      static getToolTip(): zombie.ui.ObjectTooltip;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      static getUI(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3, double arg4): boolean
       */
      static isDoubleClick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isFBOActive(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isFadingOut(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isForceCursorVisible(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isMouseOverInventory(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isShowLuaDebuggerOnError(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isShowPausedMessage(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isbFadeBeforeUI(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static onKeyPress(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static onKeyRelease(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static onKeyRepeat(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static render(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static resize(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      static setBlack(arg0: zombie.core.textures.Texture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Clock arg0): void
       */
      static setClock(arg0: zombie.ui.Clock): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UIDebugConsole arg0): void
       */
      static setDebugConsole(arg0: zombie.ui.UIDebugConsole): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static setDoneTutorials(arg0: java.util.ArrayList<string>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       */
      static setFadeAlpha(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      static setFadeBeforeUI(arg0: number, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       */
      static setFadeInTime(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       */
      static setFadeInTimeMax(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      static setFadeTime(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setFadingOut(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setLastAlpha(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      static setLastMouseTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       */
      static setLastMouseX(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): void
       */
      static setLastMouseY(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setLastOffX(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setLastOffY(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastPicked(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModalDialog arg0): void
       */
      static setModal(arg0: zombie.ui.ModalDialog): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, MoodlesUI arg1): void
       */
      static setMoodleUI(arg0: number, arg1: zombie.ui.MoodlesUI): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      static setMouseArrow(arg0: zombie.core.textures.Texture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      static setMouseAttack(arg0: zombie.core.textures.Texture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      static setMouseExamine(arg0: zombie.core.textures.Texture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      static setMouseGrab(arg0: zombie.core.textures.Texture): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ClickObject arg0): void
       */
      static setPicked(arg0: zombie.iso.IsoObjectPicker$ClickObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      static setPickedTile(arg0: zombie.iso.Vector2): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      static setPickedTileLocal(arg0: zombie.iso.Vector2): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, UIElement arg1, UIElement arg2): void
       */
      static setPlayerInventory(arg0: number, arg1: zombie.ui.UIElement, arg2: zombie.ui.UIElement): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, UIElement arg1, UIElement arg2): void
       */
      static setPlayerInventoryTooltip(arg0: number, arg1: zombie.ui.UIElement, arg2: zombie.ui.UIElement): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, ActionProgressBar arg1): void
       */
      static setProgressBar(arg0: number, arg1: zombie.ui.ActionProgressBar): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setRightDownObject(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UIServerToolbox arg0): void
       */
      static setServerToolbox(arg0: zombie.ui.UIServerToolbox): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setShowLuaDebuggerOnError(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setShowPausedMessage(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SpeedControls arg0): void
       */
      static setSpeedControls(arg0: zombie.ui.SpeedControls): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      static setToolTip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static setUI(arg0: java.util.ArrayList<zombie.ui.UIElement>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setVisibleAllUI(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setbFadeBeforeUI(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updateBeforeFadeOut(): void;
    }
    /**
     * @customConstructor UIServerToolbox.new
     * @
     * [CLASS] zombie.ui.UIServerToolbox extends zombie.ui.NewWindow
     */
    export class UIServerToolbox {
      /** zombie.ui.UIServerToolbox */
      static instance?: zombie.ui.UIServerToolbox;

      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2): void
       */
      DoubleClick(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      ModalClick(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      Nest(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      OnCoopServerMessage(arg0: string, arg1: string, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2): void
       */
      Selected(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      shutdown(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor UITextBox2.new
     * @
     * [CLASS] zombie.ui.UITextBox2 extends zombie.ui.UIElement
     */
    export class UITextBox2 {
      /** boolean */
      static ConsoleHasFocus: boolean;

      /**
       * Constructors: 
       *  - (UIFont arg0, int arg1, int arg2, int arg3, int arg4, String arg5, boolean arg6)
       */
      constructor(arg0: zombie.ui.UIFont, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string, arg6: boolean);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearHighlights(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearInput(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      focus(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCursorLine(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCursorPos(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getForceUpperCase(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrameAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInternalText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxLines(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxTextLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreFirstInput(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEditable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFocused(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMasked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultipleLine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnlyNumbers(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSelectable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onCommandEntered(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onOtherKey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onPressDown(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onPressUp(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onTextChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBlink(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      selectAll(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setClearButton(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCursorLine(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCursorPos(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEditable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceUpperCase(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFrameAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasFrame(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMasked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxLines(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxTextLength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMultipleLine(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnlyNumbers(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSelectable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setTextColor(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      toDisplayLine(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unfocus(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateText(): void;
    }
    /**
     * @customConstructor UITransition.new
     * @
     * [CLASS] zombie.ui.UITransition
     */
    export class UITransition {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      fraction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsed(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, boolean arg1): void
       */
      init(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setElapsed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFadeIn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreUpdateTime(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static UpdateAll(): void;
    }
    /**
     * @customConstructor VehicleGauge.new
     * @
     * [CLASS] zombie.ui.VehicleGauge extends zombie.ui.UIElement
     */
    export class VehicleGauge {
      /**
       * Constructors: 
       *  - (Texture arg0, int arg1, int arg2, float arg3, float arg4)
       */
      constructor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNeedleWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
  }
}
