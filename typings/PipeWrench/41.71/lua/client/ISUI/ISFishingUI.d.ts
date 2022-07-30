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
 * File generated at: 2022-07-29T08:39:00.319Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISFishingUI:new */
    export class ISFishingUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      barHgt: any;

      barPadY: any;

      barY: any;

      btnHgt: any;

      buttonBorderColor: any;

      cancel: any;

      canFishDistance: any;

      checkPlayerX: any;

      checkPlayerY: any;

      checkStuffTime: any;

      clickedSquare: any;

      clickedSquareX: any;

      clickedSquareY: any;

      clickedSquareZ: any;

      close: any;

      containers: any;

      containerSelector: any;

      containersLbl: any;

      fgBar: any;

      fgBarOrange: any;

      fgBarRed: any;

      fishes: any;

      items_array: any;

      lures: any;

      luresEnabled: any;

      maxFish: any;

      ok: any;

      padBottom: any;

      player: any;

      rod: any;

      rods: any;

      selectedLure: any;

      selectedRod: any;

      squareWithOtherZone: any;

      squareWithoutZone: any;

      squareWithSameZone: any;

      titleY: any;

      usingSpear: any;

      zoneProgress: any;

      constructor(x: any, y: any, width: any, height: any, player: any, clickedSquare: any);

      checkInventory: (() => any) | any;

      checkInventoryBags: (() => any) | any;

      checkInventoryLures: (() => any) | any;

      checkInventoryRods: (() => any) | any;

      checkPlayerPosition: (() => any) | any;

      clickedRod: ((buttons: any, index: any) => any) | any;

      doBagOptions: (() => any) | any;

      equipItems: (() => any) | any;

      getSelectedBag: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeReactivate: ((joypadData: any) => any) | any;

      pickBestSquare: ((squares: any) => any) | any;

      render: (() => any) | any;

      setFish: ((item: any) => any) | any;

      updateButtons: ((currentAction: any) => any) | any;

      updateLures: (() => any) | any;

      updateRods: (() => any) | any;

      updateSelectedRod: (() => any) | any;

      updateSize: (() => any) | any;

      updateZoneProgress: ((zoneClicked: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISFishingUI {}
}
