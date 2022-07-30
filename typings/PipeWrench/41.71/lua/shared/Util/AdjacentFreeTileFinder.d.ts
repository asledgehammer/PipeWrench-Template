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
 * File generated at: 2022-07-29T08:39:02.544Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared.Util {
    export class AdjacentFreeTileFinder {
      private constructor();

      static [id: string]: any;

      static Find: ((gridSquare: any, playerObj: any) => any) | any;

      static FindClosest: ((gridSquare: any, playerObj: any) => any) | any;

      static FindEdge: ((gridSquare: any, dir: any, playerObj: any, preferSameSquare: any) => any) | any;

      static FindWall: ((gridSquare: any, north: any, playerObj: any) => any) | any;

      static FindWindowOrDoor: ((gridSquare: any, window: any, playerObj: any) => any) | any;

      static isTileOrAdjacent: ((a: any, b: any) => any) | any;

      static isTileOrAdjacent8: ((a: any, b: any) => any) | any;

      static privCanStand: ((test: any) => any) | any;

      static privGetNorth: ((gridSquare: any, object: any) => any) | any;

      static privTrySquare: ((src: any, test: any) => any) | any;

      static privTrySquareForWalls: ((src: any, test: any) => any) | any;

      static privTrySquareForWalls2: ((src: any, x: any, y: any, z: any) => any) | any;

      static privTrySquareWindow: ((src: any, test: any) => any) | any;
    }
  }
  export namespace lua.shared.Util.AdjacentFreeTileFinder {}
}
