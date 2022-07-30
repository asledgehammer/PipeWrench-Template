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
 * File generated at: 2022-07-29T08:39:01.271Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../reference.d.ts" />
/// <reference path="../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared {
    export class luautils {
      private constructor();

      static [id: string]: any;

      static equipItems: ((_player: any, _primItemToEquip: any, _scndItemToEquip: any) => any) | any;

      static getConditionRGB: ((condition: any) => any) | any;

      static getCorrectSquareForWall: ((playerObj: any, square: any) => any) | any;

      static getNextTiles: ((cell: any, startingGrid: any, range: any) => any) | any;

      static haveToBeTransfered: ((player: any, item: any, dontWalk: any) => any) | any;

      static indexOf: ((table1: any, value: any) => any) | any;

      static isEquipped: ((_item: any, _player: any) => any) | any;

      static isSquareAdjacentToSquare: ((_square1: any, _square2: any) => any) | any;

      static okModal: ((_text: any, _centered: any, _width: any, _height: any, _posX: any, _posY: any) => any) | any;

      static round: ((num: any, idp: any) => any) | any;

      static split: ((inputstr: any, sep: any) => any) | any;

      static stringEnds: ((String: any, End: any) => any) | any;

      static stringStarts: ((String: any, Start: any) => any) | any;

      static trim: ((s: any) => any) | any;

      static updatePerksXp: ((perks: any, player: any) => any) | any;

      static walkAdj: ((playerObj: any, square: any, keepActions: any) => any) | any;

      static walkAdjAltTest: ((playerObj: any, square: any, altSquare: any, keepActions: any) => any) | any;

      static walkAdjWall: ((playerObj: any, square: any, north: any, keepActions: any) => any) | any;

      static walkAdjWindowOrDoor: ((playerObj: any, square: any, item: any, keepActions: any) => any) | any;

      static walkToContainer: ((container: any, playerNum: any) => any) | any;

      static walkToObject: ((_player: any, _object: any, _cancelTA: any) => any) | any;

      static weaponLowerCondition: ((_weapon: any, _character: any, _replace: any, _chance: any) => any) | any;
    }
  }
  export namespace lua.shared.luautils {}
}
