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
 * File generated at: 2022-07-29T08:39:00.380Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISInventoryPane:new */
    export class ISInventoryPane extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      blinkAlpha: any;

      blinkAlphaIncrease: any;

      brokenItemIcon: any;

      buttonOption: any;

      clickedScrollBar: any;

      collapsed: any;

      collapseicon: any;

      column2: any;

      column3: any;

      column4: any;

      contextButton1: any;

      contextButton2: any;

      contextButton3: any;

      draggedItems: any;

      dragging: any;

      draggingMarquis: any;

      draggingMarquisX: any;

      draggingMarquisY: any;

      draggingX: any;

      draggingY: any;

      dragStarted: any;

      equippedInHotbar: any;

      equippedItemIcon: any;

      expandicon: any;

      favoriteStar: any;

      filtericon: any;

      filterMenu: any;

      firstSelect: any;

      font: any;

      fontHgt: any;

      frozenItemIcon: any;

      headerHgt: any;

      hotbar: any;

      inventory: any;

      itemHgt: any;

      itemindex: any;

      items: any;

      itemslist: any;

      itemSortFunc: any;

      joyselection: any;

      minimumHeight: any;

      minimumWidth: any;

      mode: any;

      mouseOverOption: any;

      nameHeader: any;

      poisonIcon: any;

      previousMouseUp: any;

      removeAllDialog: any;

      selected: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      texScale: any;

      toolRender: any;

      treecolicon: any;

      treeexpicon: any;

      typeHeader: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any, inventory: any, zoom: any);

      canPutIn: (() => any) | any;

      collapseAll: ((button: any) => any) | any;

      createChildren: (() => any) | any;

      doButtons: ((y: any) => any) | any;

      doContextOnJoypadSelected: (() => any) | any;

      doContextualDblClick: ((item: any) => any) | any;

      doGrabOnJoypadSelected: (() => any) | any;

      doJoypadExpandCollapse: (() => any) | any;

      drawItemDetails: ((item: any, y: any, xoff: any, yoff: any, red: any) => any) | any;

      drawProgressBar: ((x: any, y: any, w: any, h: any, f: any, fg: any) => any) | any;

      drawTextAndProgressBar: ((text: any, fraction: any, xoff: any, top: any, fgText: any, fgBar: any) => any) | any;

      expandAll: ((button: any) => any) | any;

      hideButtons: (() => any) | any;

      isMouseOverScrollBar: (() => any) | any;

      lootAll: (() => any) | any;

      onConfirmDelete: ((button: any) => any) | any;

      onContext: ((button: any) => any) | any;

      onFilterMenu: ((button: any) => any) | any;

      onInventoryFontChanged: (() => any) | any;

      onMouseDoubleClick: ((x: any, y: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onResize: (() => any) | any;

      onResizeColumn: ((button: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      refreshContainer: (() => any) | any;

      removeAll: ((player: any) => any) | any;

      render: (() => any) | any;

      renderdetails: ((doDragged: any) => any) | any;

      rendericons: (() => any) | any;

      RestoreLayout: ((name: any, layout: any) => any) | any;

      restoreSelection: ((selected: any) => any) | any;

      rowAt: ((x: any, y: any) => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      saveSelection: ((selected: any) => any) | any;

      selectIndex: ((index: any) => any) | any;

      setMode: ((mode: any) => any) | any;

      sortByName: ((button: any) => any) | any;

      sortByType: ((button: any) => any) | any;

      sortByWeight: ((_isAscending: any) => any) | any;

      sortItemsByType: ((items: any) => any) | any;

      sortItemsByTypeAndWeight: ((items: any) => any) | any;

      sortItemsByWeight: ((items: any) => any) | any;

      toggleStove: (() => any) | any;

      topOfItem: ((index: any) => any) | any;

      transferAll: (() => any) | any;

      transferItemsByWeight: ((items: any, container: any) => any) | any;

      update: (() => any) | any;

      updateSmoothScrolling: (() => any) | any;

      updateTooltip: (() => any) | any;

      static getActualItems: ((items: any) => any) | any;

      static itemSortByCatDesc: ((a: any, b: any) => any) | any;

      static itemSortByCatInc: ((a: any, b: any) => any) | any;

      static itemSortByNameDesc: ((a: any, b: any) => any) | any;

      static itemSortByNameInc: ((a: any, b: any) => any) | any;

      static itemSortByWeightAsc: ((a: any, b: any) => any) | any;

      static itemSortByWeightDesc: ((a: any, b: any) => any) | any;
    }

    export class ISInventoryPaneDraggedItems {
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryPane {}
}
