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
 * File generated at: 2022-07-29T08:39:00.642Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISToolTip:new */
    export class ISToolTip extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      contextMenu: any;

      description: any;

      descriptionPanel: any;

      desiredX: any;

      desiredY: any;

      followMouse: any;

      footNote: any;

      maxLineWidth: any;

      name: any;

      owner: any;

      texture: any;

      constructor();

      adjustPositionToAvoidOverlap: ((avoidRect: any) => any) | any;

      doLayout: (() => any) | any;

      instantiate: (() => any) | any;

      layoutContents: ((x: any, y: any, myWidth: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      overlaps: ((r1: any, r2: any) => any) | any;

      placeAbove: ((r1: any, r2: any) => any) | any;

      placeLeft: ((r1: any, r2: any) => any) | any;

      placeRight: ((r1: any, r2: any) => any) | any;

      render: (() => any) | any;

      renderContents: (() => any) | any;

      reset: (() => any) | any;

      setContextMenu: ((contextMenu: any) => any) | any;

      setDesiredPosition: ((x: any, y: any) => any) | any;

      setName: ((name: any) => any) | any;

      setOwner: ((ui: any) => any) | any;

      setTexture: ((textureName: any) => any) | any;

      static GetFont: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISToolTip {}
}
