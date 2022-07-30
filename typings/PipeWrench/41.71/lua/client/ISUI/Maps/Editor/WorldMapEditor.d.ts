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
 * File generated at: 2022-07-29T08:39:00.835Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditor:new */
    export class WorldMapEditor extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      bounds: any;

      currentMode: any;

      dragging: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartX: any;

      dragStartY: any;

      dragStartZoomF: any;

      mapAPI: any;

      mapItem: any;

      mode: any;

      modeButton: any;

      state: any;

      styleAPI: any;

      symbolsAPI: any;

      constructor(x: any, y: any, width: any, height: any, javaObject: any);

      close: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      loadSettingsFromMap: (() => any) | any;

      onExit: ((button: any, x: any, y: any) => any) | any;

      onGenerateLuaScript: (() => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSwitchMode: ((button: any) => any) | any;

      setDataFiles: ((fileNames: any) => any) | any;

      showUI: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditor {}
}
