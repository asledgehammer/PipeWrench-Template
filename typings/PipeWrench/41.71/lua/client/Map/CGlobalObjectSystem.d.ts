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
 * File generated at: 2022-07-29T08:39:01.285Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Map {
    /** @customConstructor CGlobalObjectSystem:new */
    export class CGlobalObjectSystem extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      systemName: any;

      wantNoise: any;

      constructor(name: any);

      getIsoObjectAt: ((x: any, y: any, z: any) => any) | any;

      getIsoObjectOnSquare: ((square: any) => any) | any;

      getLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      getLuaObjectByIndex: ((index: any) => any) | any;

      getLuaObjectCount: (() => any) | any;

      getLuaObjectOnSquare: ((square: any) => any) | any;

      initLuaObjects: (() => any) | any;

      initSystem: (() => any) | any;

      isValidIsoObject: ((isoObject: any) => any) | any;

      newLuaObject: ((globalObject: any) => any) | any;

      newLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      noise: ((message: any) => any) | any;

      OnLuaObjectUpdated: ((luaObject: any) => any) | any;

      OnServerCommand: ((command: any, args: any) => any) | any;

      removeLuaObject: ((luaObject: any) => any) | any;

      removeLuaObjectAt: ((x: any, y: any, z: any) => any) | any;

      sendCommand: ((playerObj: any, command: any, args: any) => any) | any;

      static RegisterSystemClass: ((luaClass: any) => any) | any;
    }
  }
  export namespace lua.client.Map.CGlobalObjectSystem {}
}
