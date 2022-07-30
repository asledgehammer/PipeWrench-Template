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
 * File generated at: 2022-07-29T08:39:00.981Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISWorldMapSymbols:new */
    export class ISWorldMapSymbols extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addNoteBtn: any;

      blackColor: any;

      buttonList: any;

      character: any;

      colorButtonInfo: any;

      colorButtons: any;

      currentColor: any;

      currentTool: any;

      editNoteBtn: any;

      ignoreRightMouseUp: any;

      keyPressConsumed: any;

      mapAPI: any;

      mapUI: any;

      mouseOverNote: any;

      mouseOverSymbol: any;

      moveBtn: any;

      noteX: any;

      noteY: any;

      playerNum: any;

      removeBtn: any;

      selectedSymbol: any;

      showTranslationOption: any;

      symbolList: any;

      symbolsAPI: any;

      symbolTexList: any;

      textCursor: any;

      tools: any;

      wasCanErase: any;

      wasCanWrite: any;

      constructor(x: any, y: any, width: any, height: any, mapUI: any);

      canErase: (() => any) | any;

      canWrite: (() => any) | any;

      checkAnnotationForMoveJoypad: (() => any) | any;

      checkAnnotationForMoveMouse: (() => any) | any;

      checkAnnotationForRemoveJoypad: (() => any) | any;

      checkAnnotationForRemoveMouse: (() => any) | any;

      checkInventory: (() => any) | any;

      checkTextForEditJoypad: (() => any) | any;

      checkTextForEditMouse: (() => any) | any;

      createChildren: (() => any) | any;

      getJoypadAButtonText: (() => any) | any;

      hitTestAnnotations: ((x: any, y: any, mode: any, filter: any) => any) | any;

      initTools: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onButtonClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDownInMap: ((button: any, joypadData: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDownMap: ((x: any, y: any) => any) | any;

      onMouseMoveMap: ((x: any, y: any) => any) | any;

      onMouseUpMap: ((x: any, y: any) => any) | any;

      onRightMouseDownMap: ((x: any, y: any) => any) | any;

      onRightMouseUpMap: ((x: any, y: any) => any) | any;

      populateSymbolList: (() => any) | any;

      render: (() => any) | any;

      renderNoteBeingAddedOrEdited: ((modal: any) => any) | any;

      renderSymbol: ((symbol: any, x: any, y: any) => any) | any;

      setCurrentTool: ((tool: any) => any) | any;

      toggleTool: ((tool: any) => any) | any;

      undisplay: (() => any) | any;

      updateSymbolColors: (() => any) | any;

      static RequiredWidth: (() => any) | any;
    }

    /** @customConstructor ISWorldMapSymbolTool:new */
    export class ISWorldMapSymbolTool extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      dragMoved: any;

      dragStartX: any;

      dragStartY: any;

      mapAPI: any;

      mapUI: any;

      symbolsAPI: any;

      symbolsUI: any;

      constructor(symbolsUI: any);

      activate: (() => any) | any;

      deactivate: (() => any) | any;

      getJoypadAButtonText: (() => any) | any;

      getMouseX: (() => any) | any;

      getMouseY: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onJoypadDownInMap: ((button: any, joypadData: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      onMouseMove: ((dx: any, dy: any) => any) | any;

      onMouseUp: ((x: any, y: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render: (() => any) | any;
    }

    /** @customConstructor ISWorldMapSymbolTool_AddNote:new */
    export class ISWorldMapSymbolTool_AddNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      modal: any;

      constructor(symbolsUI: any);

      addNote: ((x: any, y: any) => any) | any;

      onAddNote: ((button: any, playerNum: any) => any) | any;
    }

    /** @customConstructor ISWorldMapSymbolTool_AddSymbol:new */
    export class ISWorldMapSymbolTool_AddSymbol extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      constructor(symbolsUI: any);

      addSymbol: ((x: any, y: any) => any) | any;
    }

    /** @customConstructor ISWorldMapSymbolTool_EditNote:new */
    export class ISWorldMapSymbolTool_EditNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      modal: any;

      constructor(symbolsUI: any);

      editNote: ((x: any, y: any) => any) | any;

      onEditNote: ((button: any, symbol: any) => any) | any;
    }

    /** @customConstructor ISWorldMapSymbolTool_MoveAnnotation:new */
    export class ISWorldMapSymbolTool_MoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      deltaX: any;

      deltaY: any;

      originalX: any;

      originalY: any;

      constructor(symbolsUI: any);

      cancelDrag: (() => any) | any;
    }

    /** @customConstructor ISWorldMapSymbolTool_RemoveAnnotation:new */
    export class ISWorldMapSymbolTool_RemoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {
      [id: string]: any;
      static [id: string]: any;

      constructor(symbolsUI: any);

      removeAnnotation: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMapSymbols {}
}
