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
 */

/** 
 * @noResolution 
 * @noSelfInFile 
 * @author JabDoesThings
 * 
 * This is an example of manually typed Lua objects for a ProjectZomboid Lua pseudo-class. 
 * 
 * The name & location of this file is done on purpose. The TypeScript files using this
 * file will compile to Lua, referencing the actual Lua code properly.
 * Result:
 *   require 'ISUI/ISUIElement'
 * 
 */
declare module 'ISUI' {
    
    import { zombie } from 'Zomboid';

    /** 
     * @customConstructor ISUIElement:new
     * @
     * File: ./src/client/ISUI/ISUIElement.lua
     * 
     * NOTE: Use {PseudoClass:new} for customConstructor. This is how you create Lua
     * pseudo-classes in the Lua environment. (Java uses {Class.new}). Also, use @ on
     * the next line to prevent multi-line customConstructor definitions if you wish
     * to write documentation for the class.
     */
    export class ISUIElement {

        /* ### FIELDS ### */

        readonly javaObject: zombie.ui.UIElement;

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns The new ISUIElement instance.
         */
        constructor(x: number, y: number, width: number, height: number);

        /* ### METHODS ### */

        initialise(): void;

        setController(controller: boolean): void;

        setAnchorBottom(bAnchor: boolean): void;

        setAnchorTop(bAnchor: boolean): void;

        setAnchorLeft(bAnchor: boolean): void;

        setAnchorRight(bAnchor: boolean): void;

        getKeepOnScreen(): boolean;

        /** @param x (double) */
        setX(x: number): void;

        /** @param y (double) */
        setY(y: number): void;

        /** @param width (double) */
        setWidth(width: number): void;

        /** @param height (double) */
        setHeight(height: number): void;

        getWidth(): number;

        getHeight(): number;

        getRight(): number;

        getBottom(): number;

        getXScroll(): number;

        /** @param width (double) */
        setWidthAndParentWidth(width: number): void;

        /** @param height (double) */
        setHeightAndParentHeight(height: number): void;

        getYScroll(): number;

        getMouseX(): number;

        getMouseY(): number;

        getCentreX(): number;

        getCentreY(): number;

        getX(): number;

        getY(): number;

        isEnabled(): boolean;

        setEnabled(enabled: boolean): void;

        getAbsoluteX(): number;

        isMouseOver(): boolean;

        suspendStencil(): void;

        resumeStencil(): void;

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        setStencilRect(x: number, y: number, width: number, height: number): void;

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        clearStencilRect(x: number, y: number, width: number, height: number): void;

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        repaintStencilRect(x: number, y: number, width: number, height: number): void;

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns {{x: number, y: number, w: number, h: number}}
         */
        clampStencilRectToParent(
            x: number,
            y: number,
            width: number,
            height: number
        ): { x: number; y: number; w: number; h: number };

        /**
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        ignoreWidthChange(): void;

        /** @returns (double) */
        getMaxDrawHeight(): number;

        /** @param height (double) */
        setMaxDrawHeight(height: number): void;

        /**
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        clearMaxDrawHeight(): void;

        ignoreHeightChange(): void;

        getAbsoluteY(): number;

        /**
         * @returns (void) The Lua side shows returning the Java method call, however
         * The Java method is void.
         */
        recalcSize(): void;

        setCapture(capture: boolean): void;

        getIsCaptured(): boolean;

        setFollowGameWorld(follow: boolean): void;

        /** (Same as ISUIElement#isFollowGameWorld()) */
        getIsFollowGameWorld(): boolean;

        isFollowGameWorld(): boolean;

        /** @param playerNumber (int) */
        setRenderThisPlayerOnly(playerNumber: number): void;

        /** @returns (int) */
        getRenderThisPlayerOnly(): number;

        /** @param joypadData (unknown) */
        onLoseJoypadFocus(joypadData: any): void;

        /** @param joypadData (unknown) */
        onGainJoypadFocus(joypadData: any): void;

        setVisible(visible: boolean): void;

        getJavaObject(): zombie.ui.UIElement;

        /** (The same as ISUIElement#isVisible()) */
        getIsVisible(): boolean;

        isVisible(): boolean;

        isReallyVisible(): boolean;

        /** @param button (unknown) */
        onJoypadDown(button: any): void;

        onJoypadDirUp(): void;

        onJoypadDirDown(): void;

        onJoypadDirLeft(): void;

        onJoypadDirRight(): void;

        instantiate(): void;

        createChildren(): void;

        /**
         * @param texture
         * @param texLX (double)
         * @param texLY (double)
         * @param texRX (double)
         * @param texRY (double)
         * @param brx (double)
         * @param bry (double)
         * @param blx (double)
         * @param bly (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         * @param alpha (double)
         */
        drawTextureAllPoint(
            texture: zombie.core.textures.Texture | null,
            texLX: number,
            texLY: number,
            texRX: number,
            texRY: number,
            brx: number,
            bry: number,
            blx: number,
            bly: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;

        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaled(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param scale (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaledUniform(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            scale: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaledAspect(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTextureScaledAspect2(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        /**
         * @param texture
         * @param x (double)
         * @param y (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         */
        drawTexture(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawTextureTiledX(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            width: number,
            height: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;

        drawTextureTiledY(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            width: number,
            height: number,
            red: number,
            green: number,
            blue: number,
            alpha: number
        ): void;

        DrawTextureAngle(
            texture: zombie.core.textures.Texture | null,
            centerX: number,
            centerY: number,
            angle: number
        ): void;

        drawTextureScaledStatic(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawTextureStatic(
            texture: zombie.core.textures.Texture | null,
            x: number,
            y: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawRect(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawRectStatic(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawRectBorderStatic(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawRectBorder(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawLine2(
            x: number,
            y: number,
            x2: number,
            y2: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): void;

        drawTextZoomed(
            text: string,
            x: number,
            y: number,
            zoom: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawTextUntrimmed(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawTextCentre(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawText(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawTextRight(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        setAlwaysOnTop(flag: boolean): void;

        drawTextStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawTextCentreStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawTextStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        drawTextRightStatic(
            text: string,
            x: number,
            y: number,
            red: number,
            green: number,
            blue: number,
            alpha: number,
            font: zombie.ui.UIFont
        ): void;

        addToUIManager(): void;

        removeFromUIManager(): void;

        backMost(): void;

        addScrollBars(addHorizontal: boolean): void;

        isVScrollBarVisible(): boolean;

        getParent(): ISUIElement;

        getChildren(): { [id: number]: ISUIElement };

        addChild(otherElement: ISUIElement): void;

        removeChild(otherElement: ISUIElement): void;

        clearChildren(): void;

        onMouseWheel(delta: number): boolean;

        onMouseUp(x: number, y: number): void;

        /**
         * @param target (unknown)
         * @param onMouseDoubleClick (unknown)
         */
        setOnMouseDoubleClick(target: any, onMouseDoubleClick: any): void;

        onRightMouseUpOutside(x: number, y: number): void;

        onRightMouseDownOutside(x: number, y: number): void;

        onMouseUpOutside(x: number, y: number): void;

        onMouseDownOutside(x: number, y: number): void;

        onFocus(x: number, y: number): void;

        bringToTop(): void;

        onRightMouseUp(x: number, y: number): void;

        onRightMouseDown(x: number, y: number): void;

        onMouseMove(deltaX: number, deltaY: number): void;

        onMouseMoveOutside(deltaX: number, deltaY: number): void;

        containsPoint(x: number, y: number): boolean;

        containsPointLocal(x: number, y: number): boolean;

        shrinkY(y: number): void;

        shrinkX(x: number): void;

        update(): void;

        prerender(): void;

        render(): void;

        setScrollWidth(width: number): void;

        setScrollHeight(height: number): void;

        getScrollWidth(): number;

        getScrollHeight(): number;

        setScrollChildren(flag: boolean): void;

        getScrollChildren(): boolean;

        setScrollWithParent(flag: boolean): void;

        getScrollWithParent(): boolean;

        setYScroll(y: number): void;

        updateScrollbars(): void;

        setXScroll(x: number): void;

        getScrollAreaWidth(): number;

        getScrollAreaHeight(): number;

        /**
         * @param title
         * @param resizable
         * @param subClass (unknown) (Lua class object)
         *
         * @returns (unknown) (Lua class object instance)
         */
        wrapInCollapsableWindow(title: string, resizable: boolean, subClass: any): any;

        isRemoved(): boolean;

        setRemoved(removed: boolean): void;

        setUIName(name: string): void;

        /**
         * @param name (This is an unused variable. Looks like this variable is an artifact of the design phase of this feature)
         */
        getUIName(name: string): string;

        toString(): string;

        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param value (0.0 to 1.0)
         * @param foreground (Color -> {r: number (red), g: number (green), b: number (blue), a: number (alpha)})
         */
        drawProgressBar(
            x: number,
            y: number,
            width: number,
            height: number,
            value: number,
            foreground: { r: number; g: number; b: number; a: number }
        ): void;

        /** @param playerNum (int) */
        stayOnSplitScreen(playerNum: number): void;
        
        setWantKeyEvents(want: boolean): void;

        setForceCursorVisible(force: boolean): void;
    }
}
