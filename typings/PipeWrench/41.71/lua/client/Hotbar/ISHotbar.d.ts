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
 * File generated at: 2022-07-29T08:38:59.931Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Hotbar {
    /** @customConstructor ISHotbar:new */
    export class ISHotbar extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      attachedItems: any;

      availableSlot: any;

      character: any;

      chr: any;

      equippedItemIcon: any;

      font: any;

      margins: any;

      needsRefresh: any;

      playerNum: any;

      replacements: any;

      slotHeight: any;

      slotPad: any;

      slotWidth: any;

      textColor: any;

      wornItems: any;

      constructor(character: any);

      activateSlot: ((slotIndex: any) => any) | any;

      attachItem: ((item: any, slot: any, slotIndex: any, slotDef: any, doAnim: any) => any) | any;

      canBeAttached: ((slot: any, item: any) => any) | any;

      compareWornItems: (() => any) | any;

      doMenu: ((slotIndex: any) => any) | any;

      equipItem: ((item: any) => any) | any;

      getSlotDef: ((slot: any) => any) | any;

      getSlotDefReplacement: ((slot: any) => any) | any;

      getSlotForKey: ((key: any) => any) | any;

      getSlotIndexAt: ((x: any, y: any) => any) | any;

      haveThisSlot: ((slotType: any, list: any) => any) | any;

      isInHotbar: ((item: any) => any) | any;

      isItemAttached: ((item: any) => any) | any;

      loadPosition: (() => any) | any;

      onRadialAttach: ((item: any, slotIndex: any, v: any) => any) | any;

      onRadialRemove: ((item: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      refresh: (() => any) | any;

      reloadIcons: (() => any) | any;

      removeItem: ((item: any, doAnim: any) => any) | any;

      render: (() => any) | any;

      savePosition: (() => any) | any;

      setAttachAnim: ((item: any, slot: any) => any) | any;

      setSizeAndPosition: (() => any) | any;

      update: (() => any) | any;

      static doMenuFromInventory: ((playerNum: any, item: any, context: any) => any) | any;

      static onClothingUpdated: ((player: any) => any) | any;

      static onKeyKeepPressed: ((key: any) => any) | any;

      static onKeyPressed: ((key: any) => any) | any;

      static onKeyStartPressed: ((key: any) => any) | any;
    }
  }
  export namespace lua.client.Hotbar.ISHotbar {}
}
