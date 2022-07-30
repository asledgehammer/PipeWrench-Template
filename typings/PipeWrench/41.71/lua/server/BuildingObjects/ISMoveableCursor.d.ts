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
 * File generated at: 2022-07-29T08:38:58.510Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISMoveableCursor:new */
    export class ISMoveableCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      cacheInvObjectIndex: any;

      cacheInvObjectSprite: any;

      cacheObject: any;

      cacheSquare: any;

      canCreate: any;

      canSeeCurrentSquare: any;

      character: any;

      colorMod: any;

      currentMoveProps: any;

      currentSquare: any;

      cursorFacing: any;

      floorSprite: any;

      isMoveableCursor: any;

      isYButtonResetCursor: any;

      joypadFacing: any;

      moveableMode: any;

      noNeedHammer: any;

      objectIndex: any;

      objectListCache: any;

      objectSprite: any;

      origMoveProps: any;

      origSpriteName: any;

      player: any;

      renderFloorHelper: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      skipBuildAction: any;

      skipWalk: any;

      subObjectIndex: any;

      tryInitialInvItem: any;

      yOffset: any;

      constructor(_character: any);

      clearCache: (() => any) | any;

      create: ((_x: any, _y: any, _z: any, _north: any, _sprite: any) => any) | any;

      exitCursor: (() => any) | any;

      getDirectionFromItem: ((item: any) => any) | any;

      getInfoPanel: (() => any) | any;

      getInventoryObjectList: (() => any) | any;

      getMoveableMode: (() => any) | any;

      getObjectList: (() => any) | any;

      getRotateableObject: (() => any) | any;

      getScrapObjectList: (() => any) | any;

      getXPrompt: (() => any) | any;

      rotateWhilePlacing: (() => any) | any;

      setInfoPanel: ((_square: any, _object: any, _moveProps: any, _customTexture: any) => any) | any;

      setJoypadFocus: ((_window: any) => any) | any;

      setMoveableMode: ((_mode: any) => any) | any;

      shouldAddObject: ((_obj: any) => any) | any;

      tryInitialItem: ((_item: any) => any) | any;

      static changeModeKey: ((_key: any, _playerNum: any, _joyPadTriggered: any) => any) | any;

      static clearCacheForAllPlayers: (() => any) | any;

      static exitCursorKey: ((_key: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISMoveableCursor {}
}
