/*
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
 * File generated at: 2022-07-29T08:39:00.718Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /**
     * @customConstructor ISUIElement:new
     * @author [JabDoesThings]
     *
     * **ISUIElement** is the base UI class in the Project Zomboid Lua codebase.
     */
    export class ISUIElement extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      /** A counter for assigning to new UI elements. */
      static IDMax: number;

      anchorBottom: boolean;

      anchorLeft: boolean;

      anchorRight: boolean;

      anchorTop: boolean;

      children: { [id: string]: ISUIElement };

      /** Unknown Type */
      controller: any;

      dock: string;

      enabled: boolean;

      forceCursorVisible: boolean;

      /** The height of the UI element. (In pixels) */
      height: boolean;

      /** Horizontal Scrollbar. */
      hscroll: ISScrollBar;

      /** The internal ID of the UI element. */
      ID: number;

      /**
       * The Java instance of the UI element.
       *
       * This is used to communicate with the game's UI engine.
       */
      javaObject: PipeWrench.UIElement;

      /** Some kind of Joypad data. */
      joyfocus: any;

      /** The minimum height of the UI element. (In pixels) */
      minimumHeight: number;

      /** The minimum width of the UI element. (In pixels) */
      minimumWidth: number;

      /** A callback function for double clicking. */
      onMouseDoubleClick: any;

      /** True if the UI element is removed from the UI manager. */
      removed: boolean;

      scrollwidth: number;

      /** Related to 'onMouseDoubleClick'. */
      target: any;

      /** Vertical Scrollbar. */
      vscroll: ISScrollBar;

      wantKeyEvents: boolean;

      /** The width of the UI element. (In pixels) */
      width: number;

      /** The x coordinate on the screen. (In pixels) */
      x: number;

      /** The y coordinate on the screen. (In pixels) */
      y: number;

      /**
       * @param x - The x coordinate on the screen. (In pixels)
       * @param y - The y coordinate on the screen. (In pixels)
       * @param width - The width of the UI element. (In pixels)
       * @param height - The height of the UI element. (In pixels)
       */
      constructor(x: number, y: number, width: number, height: number);

      /**
       * Adds a child UI element to this UI element.
       *
       * @param other - The UI element to add as a child to this UI element.
       */
      addChild: (other: ISUIElement) => void;

      /**
       * Adds a vertical ISScrollBar to the UI element.
       *
       * @param addHorizontal - If true, a horizontal ISScrollBar is initialized as well.
       */
      addScrollBars: (addHorizontal: boolean) => void;

      /**
       * Adds this UI element to the UI manager for the game.
       *
       * (NOTE: This means that this element is a root element with no parent)
       *
       */
      addToUIManager: () => void;

      backMost: (() => any) | any;

      bringToTop: (() => any) | any;

      clampStencilRectToParent: ((x: any, y: any, w: any, h: any) => any) | any;

      clearChildren: (() => any) | any;

      clearMaxDrawHeight: (() => any) | any;

      clearStencilRect: (() => any) | any;

      containsPoint: ((x: any, y: any) => any) | any;

      containsPointLocal: ((x: any, y: any) => any) | any;

      createChildren: (() => any) | any;

      drawLine2: ((x: any, y: any, x2: any, y2: any, a: any, r: any, g: any, b: any) => any) | any;

      drawProgressBar: ((x: any, y: any, w: any, h: any, f: any, fg: any) => any) | any;

      drawRect: ((x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any) | any;

      drawRectBorder: ((x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any) | any;

      drawRectBorderStatic: ((x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any) | any;

      drawRectStatic: ((x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any) | any;

      drawText: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTextCentre: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTextCentreStatic: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTextRight: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTextRightStatic: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTextStatic: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTextUntrimmed: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      drawTexture: ((texture: any, x: any, y: any, a: any, r: any, g: any, b: any) => any) | any;

      drawTextureAllPoint:
        | ((
            texture: any,
            tlx: any,
            tly: any,
            trx: any,
            _try_: any,
            brx: any,
            bry: any,
            blx: any,
            bly: any,
            r: any,
            g: any,
            b: any,
            a: any
          ) => any)
        | any;

      DrawTextureAngle: ((tex: any, centerX: any, centerY: any, angle: any) => any) | any;

      drawTextureScaled: ((texture: any, x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any) | any;

      drawTextureScaledAspect:
        | ((texture: any, x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any)
        | any;

      drawTextureScaledAspect2:
        | ((texture: any, x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any)
        | any;

      drawTextureScaledStatic:
        | ((texture: any, x: any, y: any, w: any, h: any, a: any, r: any, g: any, b: any) => any)
        | any;

      drawTextureScaledUniform:
        | ((texture: any, x: any, y: any, scale: any, a: any, r: any, g: any, b: any) => any)
        | any;

      drawTextureStatic: ((texture: any, x: any, y: any, a: any, r: any, g: any, b: any) => any) | any;

      drawTextureTiledX: ((texture: any, x: any, y: any, w: any, h: any, r: any, g: any, b: any, a: any) => any) | any;

      drawTextureTiledY: ((texture: any, x: any, y: any, w: any, h: any, r: any, g: any, b: any, a: any) => any) | any;

      drawTextZoomed: ((str: any, x: any, y: any, zoom: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      getAbsoluteX: (() => any) | any;

      getAbsoluteY: (() => any) | any;

      getBottom: (() => any) | any;

      getCentreX: (() => any) | any;

      getCentreY: (() => any) | any;

      getChildren: (() => any) | any;

      getController: (() => any) | any;

      getHeight: (() => any) | any;

      getIsCaptured: (() => any) | any;

      getIsFollowGameWorld: (() => any) | any;

      getIsVisible: (() => any) | any;

      getJavaObject: (() => any) | any;

      getKeepOnScreen: (() => any) | any;

      getMaxDrawHeight: (() => any) | any;

      getMouseX: (() => any) | any;

      getMouseY: (() => any) | any;

      getParent: (() => any) | any;

      getRenderThisPlayerOnly: (() => any) | any;

      getRight: (() => any) | any;

      getScrollAreaHeight: (() => any) | any;

      getScrollAreaWidth: (() => any) | any;

      getScrollChildren: (() => any) | any;

      getScrollHeight: (() => any) | any;

      getScrollWidth: (() => any) | any;

      getScrollWithParent: (() => any) | any;

      getUIName: ((name: any) => any) | any;

      getWidth: (() => any) | any;

      getX: (() => any) | any;

      getXScroll: (() => any) | any;

      getY: (() => any) | any;

      getYScroll: (() => any) | any;

      ignoreHeightChange: (() => any) | any;

      ignoreWidthChange: (() => any) | any;

      instantiate: (() => any) | any;

      isEnabled: (() => any) | any;

      isFollowGameWorld: (() => any) | any;

      isMouseOver: (() => any) | any;

      isReallyVisible: (() => any) | any;

      isRemoved: (() => any) | any;

      isVisible: (() => any) | any;

      isVScrollBarVisible: (() => any) | any;

      onFocus: ((x: any, y: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onMouseMove: ((dx: any, dy: any) => any) | any;

      onMouseMoveOutside: ((dx: any, dy: any) => any) | any;

      onMouseUp: ((x: any, y: any) => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onResize: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseDownOutside: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      onRightMouseUpOutside: ((x: any, y: any) => any) | any;

      prerender: (() => any) | any;

      recalcSize: (() => any) | any;

      removeChild: ((otherElement: any) => any) | any;

      removeFromUIManager: (() => any) | any;

      render: (() => any) | any;

      repaintStencilRect: ((x: any, y: any, w: any, h: any) => any) | any;

      resumeStencil: (() => any) | any;

      setAlwaysOnTop: ((b: any) => any) | any;

      setAnchorBottom: ((bAnchor: any) => any) | any;

      setAnchorLeft: ((bAnchor: any) => any) | any;

      setAnchorRight: ((bAnchor: any) => any) | any;

      setAnchorTop: ((bAnchor: any) => any) | any;

      setCapture: ((bCapture: any) => any) | any;

      setController: ((c: any) => any) | any;

      setEnabled: ((en: any) => any) | any;

      setFollowGameWorld: ((bFollow: any) => any) | any;

      setForceCursorVisible: ((force: any) => any) | any;

      setHeight: ((h: any) => any) | any;

      setHeightAndParentHeight: ((h: any) => any) | any;

      setMaxDrawHeight: ((height: any) => any) | any;

      setOnMouseDoubleClick: ((target: any, onmousedblclick: any) => any) | any;

      setRemoved: ((bremove: any) => any) | any;

      setRenderThisPlayerOnly: ((playerNum: any) => any) | any;

      setScrollChildren: ((b: any) => any) | any;

      setScrollHeight: ((h: any) => any) | any;

      setScrollWidth: ((w: any) => any) | any;

      setScrollWithParent: ((b: any) => any) | any;

      setStencilRect: ((x: any, y: any, w: any, h: any) => any) | any;

      setUIName: ((name: any) => any) | any;

      setVisible: ((bVisible: any) => any) | any;

      setWantKeyEvents: ((want: any) => any) | any;

      setWidth: ((w: any) => any) | any;

      setWidthAndParentWidth: ((wi: any) => any) | any;

      setX: ((x: any) => any) | any;

      setXScroll: ((x: any) => any) | any;

      setY: ((y: any) => any) | any;

      setYScroll: ((y: any) => any) | any;

      shrinkX: ((x: any) => any) | any;

      shrinkY: ((y: any) => any) | any;

      stayOnSplitScreen: ((playerNum: any) => any) | any;

      suspendStencil: (() => any) | any;

      update: (() => any) | any;

      updateScrollbars: (() => any) | any;

      wrapInCollapsableWindow: ((title: any, resizable: any, subClass: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISUIElement {}
}
