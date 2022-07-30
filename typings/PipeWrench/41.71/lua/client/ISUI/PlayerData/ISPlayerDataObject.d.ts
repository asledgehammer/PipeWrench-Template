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
 * File generated at: 2022-07-29T08:39:00.990Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.PlayerData {
    /** @customConstructor ISPlayerDataObject:new */
    export class ISPlayerDataObject extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backButtonWheel: any;

      buttonPrompt: any;

      characterInfo: any;

      contextMenu: any;

      craftingUI: any;

      equipped: any;

      h1: any;

      h2: any;

      id: any;

      lootInventory: any;

      mechanicsUI: any;

      miniMap: any;

      playerHotbar: any;

      playerInventory: any;

      radialMenu: any;

      safetyUI: any;

      vehicleDashboard: any;

      w1: any;

      w2: any;

      x1: any;

      x1left: any;

      x2: any;

      y1: any;

      y1top: any;

      y2: any;

      constructor(id: any);

      createInventoryInterface: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      placeInventoryScreens: ((playerID: any, totalPlayers: any, mouse: any) => any) | any;

      revertToKeyboardAndMouse: (() => any) | any;

      static onKeyPressed: ((key: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.PlayerData.ISPlayerDataObject {}
}
