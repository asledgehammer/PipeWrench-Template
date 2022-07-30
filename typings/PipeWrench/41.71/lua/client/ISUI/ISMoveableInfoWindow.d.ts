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
 * File generated at: 2022-07-29T08:39:00.484Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISMoveableInfoWindow:new */
    export class ISMoveableInfoWindow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static displayPosition: any;

      allowCurrent: any;

      bodyText: any;

      character: any;

      customBodyAlign: any;

      description: any;

      drag: any;

      drawJoypadFocus: any;

      footer: any;

      header: any;

      infoBody: any;

      mouseOverUI: any;

      moveableTexture: any;

      name: any;

      playerNum: any;

      square: any;

      textureList: any;

      texYOffset: any;

      constructor(x: any, y: any, character: any, drag: any);

      calculateDimensions: (() => any) | any;

      drawTexture: ((texture: any, x: any, y: any, a: any, r: any, g: any, b: any) => any) | any;

      isMouseOverUI: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBodyText: ((_bodyTextTable: any, _font: any, _align: any) => any) | any;

      setBodyTextOLD: ((_body: any, _font: any, _align: any) => any) | any;

      setDrag: ((_drag: any) => any) | any;

      setFooterText: ((_footer: any, _font: any) => any) | any;

      setHeaderText: ((_header: any, _font: any) => any) | any;

      setSquare: ((_square: any) => any) | any;

      setTexture: ((_textureName: any, _allow: any, _square: any, _yoffset: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      static moveablePanelModeKey: ((_key: any) => any) | any;

      static setDisplayPosition: ((_position: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISMoveableInfoWindow {}
}
