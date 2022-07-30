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
 * File generated at: 2022-07-29T08:38:58.531Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPaintCursor:new */
    export class ISPaintCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      action: any;

      args: any;

      character: any;

      currentSquare: any;

      floorSprite: any;

      noNeedHammer: any;

      objectIndex: any;

      plasterSprite: any;

      player: any;

      renderFloorHelper: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      signSprite: any;

      skipBuildAction: any;

      skipWalk: any;

      constructor(character: any, action: any, args: any);

      _isDoorFrame: ((object: any) => any) | any;

      _isWall: ((object: any) => any) | any;

      canPaint: ((object: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getObjectList: (() => any) | any;

      hasItems: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPaintCursor {}
}
