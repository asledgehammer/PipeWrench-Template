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
 * File generated at: 2022-07-29T08:38:58.552Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPlace3DItemCursor:new */
    export class ISPlace3DItemCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      chr: any;

      isPlace3DCursor: any;

      isYButtonResetCursor: any;

      items: any;

      itemSq: any;

      joypadPositionActive: any;

      joypadPositionX: any;

      joypadPositionY: any;

      keepOnSquare: any;

      keepOnSquareX: any;

      keepOnSquareY: any;

      noNeedHammer: any;

      placeAll: any;

      player: any;

      previousSq: any;

      render3DItemRot: any;

      render3DItemXOffset: any;

      render3DItemYOffset: any;

      render3DItemZOffset: any;

      rotatePressed: any;

      rotateReverse: any;

      rotateStart: any;

      rotating: any;

      selectedSqDrop: any;

      skipBuildAction: any;

      surfaceKeyTimer: any;

      surfaceSelected: any;

      surfacesPossible: any;

      constructor(character: any, items: any);

      checkPositionJoypad: (() => any) | any;

      checkRotateJoypad: (() => any) | any;

      checkRotateKey: (() => any) | any;

      checkSelectSurfaceKey: (() => any) | any;

      clamp: ((rot: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      drawPrompt: ((playerNum: any, ui: any) => any) | any;

      getSurface: ((square: any) => any) | any;

      getXPrompt: (() => any) | any;

      handleRotate: ((pressed: any, reverse: any) => any) | any;

      onObjectLeftMouseButtonDown: ((object: any, x: any, y: any) => any) | any;

      rotateDelta: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPlace3DItemCursor {}
}
