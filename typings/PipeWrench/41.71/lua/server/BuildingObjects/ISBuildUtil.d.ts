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
 * File generated at: 2022-07-29T08:38:58.425Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    export class buildUtil {
      private constructor();

      static [id: string]: any;

      static addCorner: ((x: any, y: any, z: any, thumpable: any, item: any) => any) | any;

      static addWoodXp: ((ISItem: any) => any) | any;

      static canBePlace: ((ISItem: any, square: any) => any) | any;

      static checkCorner: ((x: any, y: any, z: any, north: any, thumpable: any, item: any) => any) | any;

      static checkMaterialOnGround: ((squareToCheck: any) => any) | any;

      static consumeMaterial: ((ISItem: any) => any) | any;

      static getDoubleDoorObjects: ((object: any) => any) | any;

      static getGarageDoorObjects: ((object: any) => any) | any;

      static getGraveObjects: ((object: any) => any) | any;

      static getMaterialOnGround: ((squareToCheck: any) => any) | any;

      static getMaterialOnGroundCounts: ((itemMap: any) => any) | any;

      static getMaterialOnGroundUses: ((itemMap: any) => any) | any;

      static getStairObjects: ((object: any) => any) | any;

      static getWoodHealth: ((ISItem: any) => any) | any;

      static openNailsBox: ((ISItem: any) => any) | any;

      static predicateMaterial: ((item: any) => any) | any;

      static removeFromGround: ((square: any) => any) | any;

      static setHaveConstruction: ((_square: any, _hasConstruction: any) => any) | any;

      static setInfo: ((javaObject: any, ISItem: any) => any) | any;

      static stairIsBlockingPlacement: ((_square: any, _doAdjacent: any, _north: any) => any) | any;

      static useDrainable: ((item: any, uses: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildUtil {}
}
