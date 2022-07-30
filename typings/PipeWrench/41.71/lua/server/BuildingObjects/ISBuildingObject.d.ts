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
 * File generated at: 2022-07-29T08:38:58.412Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBuildingObject:new */
    export class ISBuildingObject extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      blockAllTheSquare: any;

      build: any;

      canBarricade: any;

      canBeAlwaysPlaced: any;

      canBeBuild: any;

      canBePlastered: any;

      canPassThrough: any;

      choosenSprite: any;

      clickedUI: any;

      completionSound: any;

      crossSpeed: any;

      dismantable: any;

      dragNilAfterPlace: any;

      east: any;

      eastSprite: any;

      hoppable: any;

      isContainer: any;

      isCorner: any;

      isDoor: any;

      isDoorFrame: any;

      isLeftDown: any;

      isThumpable: any;

      isWallLike: any;

      modData: any;

      north: any;

      northSprite: any;

      nSprite: any;

      RENDER_SPRITE: any;

      RENDER_SPRITE_FLOOR: any;

      RENDER_SPRITE_NAME: any;

      south: any;

      southSprite: any;

      sprite: any;

      square: any;

      thumpDmg: any;

      west: any;

      xJoypad: any;

      yJoypad: any;

      zJoypad: any;

      deactivate: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getSprite: (() => any) | any;

      getYPrompt: (() => any) | any;

      haveMaterial: ((square: any) => any) | any;

      init: (() => any) | any;

      isValid: ((square: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirRight: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadPressButton: ((joypadIndex: any, joypadData: any, button: any) => any) | any;

      onTimedActionStart: ((action: any) => any) | any;

      onTimedActionStop: ((action: any) => any) | any;

      reinit: (() => any) | any;

      render: ((x: any, y: any, z: any, square: any) => any) | any;

      reset: (() => any) | any;

      rotateKey: ((key: any) => any) | any;

      rotateMouse: ((x: any, y: any) => any) | any;

      setCanPassThrough: ((passThrough: any) => any) | any;

      setDragNilAfterPlace: ((nilAfter: any) => any) | any;

      setEastSprite: ((sprite: any) => any) | any;

      setNorthSprite: ((sprite: any) => any) | any;

      setSouthSprite: ((sprite: any) => any) | any;

      setSprite: ((sprite: any) => any) | any;

      tryBuild: ((x: any, y: any, z: any) => any) | any;

      walkTo: ((x: any, y: any, z: any) => any) | any;

      static onDestroy: ((thump: any, player: any) => any) | any;

      static removeFromGround: ((square: any) => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildingObject {}
}
