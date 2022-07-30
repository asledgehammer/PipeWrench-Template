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
 * File generated at: 2022-07-29T08:39:00.367Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISInventoryPage:new */
    export class ISInventoryPage extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static bagSoundTime: any;

      static floorContainer: any;

      static renderDirty: any;

      backpackChoice: any;

      backpacks: any;

      blinkAlpha: any;

      blinkAlphaContainer: any;

      blinkAlphaIncrease: any;

      blinkAlphaIncreaseContainer: any;

      blinkContainer: any;

      blinkContainerType: any;

      buttonPool: any;

      buttonSize: any;

      capacity: any;

      closebutton: any;

      closeButton: any;

      collapsebutton: any;

      collapseButton: any;

      collapseCounter: any;

      coloredInv: any;

      conDefault: any;

      containerIconMaps: any;

      forceSelectedContainer: any;

      forceSelectedContainerTime: any;

      highlightColors: any;

      infoBtn: any;

      infoButton: any;

      infoRichText: any;

      infoText: any;

      invbasic: any;

      inventory: any;

      inventoryPane: any;

      isCollapsed: any;

      lastDir: any;

      lastSquare: any;

      lookDir: any;

      minimumHeight: any;

      minimumWidth: any;

      mouseOverButton: any;

      onCharacter: any;

      pin: any;

      pinbutton: any;

      pinButton: any;

      render3DItemRot: any;

      render3DItemXOffset: any;

      render3DItemYOffset: any;

      render3DItemZOffset: any;

      resizeimage: any;

      resizeWidget: any;

      resizeWidget2: any;

      selectedButton: any;

      selectedSqDrop: any;

      statusbarbkg: any;

      title: any;

      titlebarbkg: any;

      titleFont: any;

      titleFontHgt: any;

      totalWeight: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any, inventory: any, onCharacter: any, zoom: any);

      addContainerButton: ((container: any, texture: any, name: any, tooltip: any) => any) | any;

      canPutIn: (() => any) | any;

      checkExplored: ((container: any, playerObj: any) => any) | any;

      collapse: (() => any) | any;

      createChildren: (() => any) | any;

      dropItemsInContainer: ((button: any) => any) | any;

      ensureVisible: ((index: any) => any) | any;

      getCurrentBackpackIndex: (() => any) | any;

      isCycleContainerKeyDown: (() => any) | any;

      isRemoveButtonVisible: (() => any) | any;

      lootAll: (() => any) | any;

      nextUnlockedContainer: ((index: any, wrap: any) => any) | any;

      onBackpackClick: ((button: any) => any) | any;

      onBackpackMouseDown: ((button: any, x: any, y: any) => any) | any;

      onBackpackMouseUp: ((x: any, y: any) => any) | any;

      onBackpackRightMouseDown: ((x: any, y: any) => any) | any;

      onChangeFilter: ((selected: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onInfo: (() => any) | any;

      onInventoryContainerSizeChanged: (() => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onMouseOutButton: ((button: any, x: any, y: any) => any) | any;

      onMouseOverButton: ((button: any, x: any, y: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onRightMouseDownOutside: ((x: any, y: any) => any) | any;

      prevUnlockedContainer: ((index: any, wrap: any) => any) | any;

      refreshBackpacks: (() => any) | any;

      refreshWeight: (() => any) | any;

      removeAll: (() => any) | any;

      render: (() => any) | any;

      render3DItemPreview: (() => any) | any;

      RestoreLayout: ((name: any, layout: any) => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      selectButtonForContainer: ((container: any) => any) | any;

      selectContainer: ((button: any) => any) | any;

      selectNextContainer: (() => any) | any;

      selectPrevContainer: (() => any) | any;

      setBlinkingContainer: ((blinking: any, containerType: any) => any) | any;

      setForceSelectedContainer: ((container: any) => any) | any;

      setInfo: ((text: any) => any) | any;

      setNewContainer: ((inventory: any) => any) | any;

      setPinned: (() => any) | any;

      syncToggleStove: (() => any) | any;

      titleBarHeight: ((selected: any) => any) | any;

      toggleStove: (() => any) | any;

      transferAll: (() => any) | any;

      update: (() => any) | any;

      static ContainerSizeChanged: (() => any) | any;

      static dirtyUI: (() => any) | any;

      static GetFloorContainer: ((playerNum: any) => any) | any;

      static loadWeight: ((inv: any) => any) | any;

      static OnContainerUpdate: ((object: any) => any) | any;

      static ongamestart: (() => any) | any;

      static onInventoryFontChanged: (() => any) | any;

      static onKeyPressed: ((key: any) => any) | any;

      static toggleInventory: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryPage {}
}
