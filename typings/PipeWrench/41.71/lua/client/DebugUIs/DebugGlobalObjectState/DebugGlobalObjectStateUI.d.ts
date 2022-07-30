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
 * File generated at: 2022-07-29T08:38:59.167Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectStateUI:new */
    export class DebugGlobalObjectStateUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      comboClientServer: any;

      currentTool: any;

      dragCameraTool: any;

      gameState: any;

      mouseDown: any;

      mouseDownX: any;

      mouseDownY: any;

      mouseMoved: any;

      objectList: any;

      objectSections: any;

      propertiesPanel: any;

      selectedObject: any;

      selectedSquare: any;

      selectedSystem: any;

      showServer: any;

      systemList: any;

      toolBar: any;

      zLevelSlider: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren: (() => any) | any;

      isMouseOverChild: (() => any) | any;

      ObjectList_doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      ObjectList_OnMouseDoubleClick: ((item: any) => any) | any;

      onChangeZLevel: ((value: any, slider: any) => any) | any;

      onComboClientServer: (() => any) | any;

      onExit: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      pickSquare: ((x: any, y: any) => any) | any;

      setObjectList: ((square: any, x: any, y: any, z: any) => any) | any;

      setSystemList: (() => any) | any;

      showUI: (() => any) | any;

      SystemList_doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      update: (() => any) | any;

      updateObjectList: (() => any) | any;

      updateObjectProps: (() => any) | any;

      updateSelectedObject: (() => any) | any;

      updateSelectedSystem: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectStateUI {}
}
