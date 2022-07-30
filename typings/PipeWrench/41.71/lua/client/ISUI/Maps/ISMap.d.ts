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
 * File generated at: 2022-07-29T08:39:00.930Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISMap:new */
    export class ISMap extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      cross: any;

      dragging: any;

      draggingStartingX: any;

      draggingStartingY: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartZoomF: any;

      editSymbolsBtn: any;

      getJoypadFocus: any;

      javaObject: any;

      LBumperZoom: any;

      mapAPI: any;

      mapObj: any;

      ok: any;

      placeSymbBtn: any;

      playerNum: any;

      povXms: any;

      povYms: any;

      RBumperZoom: any;

      scaleBtn: any;

      selectedColor: any;

      setMapData: any;

      symbolsUI: any;

      symbolTexList: any;

      textCursor: any;

      updateMS: any;

      constructor(x: any, y: any, width: any, height: any, map: any, player: any);

      canErase: (() => any) | any;

      canWrite: (() => any) | any;

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      initMapData: (() => any) | any;

      instantiate: (() => any) | any;

      onButtonClick: ((button: any) => any) | any;

      onConfirmRemove: ((button: any, note: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      renderJoypadIcons: (() => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;

      updateJoypad: (() => any) | any;
    }

    /** @customConstructor ISMapWrapper:new */
    export class ISMapWrapper extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      isKeyConsumed: ((key: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      setVisible: ((bVisible: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMap {}
}
