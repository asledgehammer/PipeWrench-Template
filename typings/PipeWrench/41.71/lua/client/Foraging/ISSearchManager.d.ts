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
 * File generated at: 2022-07-29T08:38:59.901Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISSearchManager:new */
    export class ISSearchManager extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static showDebug: any;

      static showDebugExtended: any;

      static showDebugLocations: any;

      static showDebugVision: any;

      static showDebugVisionRadius: any;

      activeAlpha: any;

      activeIconRadius: any;

      activeIcons: any;

      activeZoneRadius: any;

      activeZones: any;

      aimBonusTick: any;

      aimBonusTickMax: any;

      aimMulti: any;

      alphaStep: any;

      baseHeight: any;

      baseWidth: any;

      cell: any;

      cellIconRadius: any;

      character: any;

      checkedSquares: any;

      closeIcons: any;

      currentTimestamp: any;

      currentZone: any;

      currentZoneName: any;

      debugArrows: any;

      debugMarkers: any;

      disableTick: any;

      disableTickMax: any;

      distanceMoveExtra: any;

      distanceMoveThreshold: any;

      distanceSinceFind: any;

      effectOverlayValues: any;

      forageIcons: any;

      haloNotes: any;

      iconCategories: any;

      iconLoadRate: any;

      iconQueue: any;

      iconStack: any;

      ignoredItemCategories: any;

      ignoredItemTypes: any;

      isEffectOverlay: any;

      isoMarkers: any;

      isSearchMode: any;

      isSpotting: any;

      lastFoundX: any;

      lastFoundY: any;

      lastTimestamp: any;

      lastUpdateX: any;

      lastUpdateY: any;

      maxRadius: any;

      maxRadiusCap: any;

      minAlpha: any;

      minRadius: any;

      modifiers: any;

      movedIcons: any;

      movedIconsSquares: any;

      overlayValues: any;

      perkLevel: any;

      player: any;

      radius: any;

      reducedTimePerLevel: any;

      searchModeOverlay: any;

      seenIcons: any;

      sneakBonusTick: any;

      sneakBonusTickMax: any;

      sneakMulti: any;

      spotAlpha: any;

      spriteAffinities: any;

      spriteCheckedSquares: any;

      square: any;

      squareCheckRate: any;

      squareStack: any;

      stashIcons: any;

      stashTypes: any;

      texture: any;

      textureColor: any;

      textureHeight: any;

      textureWidth: any;

      timeDelta: any;

      timeSinceFind: any;

      timeToMoveIcon: any;

      timeToMoveIconExtra: any;

      timeToMoveIconMax: any;

      triggerHalo: any;

      updateEvents: any;

      updateTick: any;

      updateTickMax: any;

      visibleFunction: any;

      visibleTarget: any;

      worldIconStack: any;

      worldMarkers: any;

      worldObjectIcons: any;

      xpIcons: any;

      zoom: any;

      constructor(_character: any);

      addHaloNote: ((_text: any) => any) | any;

      addIcon: ((_id: any, _iconClass: any, _itemType: any, _itemObj: any, _x: any, _y: any, _z: any) => any) | any;

      checkActiveZones: (() => any) | any;

      checkCloseIcons: (() => any) | any;

      checkForSpriteAffinity: ((_square: any, _object: any, _zoneData: any) => any) | any;

      checkIcons: (() => any) | any;

      checkMarkers: (() => any) | any;

      checkShouldDisable: (() => any) | any;

      checkShouldForceIcon: (() => any) | any;

      checkSquares: (() => any) | any;

      checkWorldIcons: (() => any) | any;

      clearCheckedSquares: (() => any) | any;

      clearHaloNotes: (() => any) | any;

      clearIcons: (() => any) | any;

      clearMovedIconsSquares: (() => any) | any;

      clearQueue: (() => any) | any;

      clearSpriteCheckedSquares: (() => any) | any;

      clearZoneData: (() => any) | any;

      createBonusIcon: ((_square: any, _catDef: any, _zoneData: any) => any) | any;

      createIconsForCell: (() => any) | any;

      createIconsForContainers: ((_square: any, _object: any) => any) | any;

      createIconsForWorldItems: ((_square: any) => any) | any;

      createIconsForZone: ((_zoneData: any, _recreate: any) => any) | any;

      displayHaloNotes: (() => any) | any;

      doChangePosition: ((_icon: any) => any) | any;

      doChangeZone: ((_zoneData: any) => any) | any;

      doDisableCheck: (() => any) | any;

      doMoveIcon: ((_icon: any, _x: any, _y: any, _z: any) => any) | any;

      doMoveIconNearPlayer: (() => any) | any;

      doUpdateEvents: ((_force: any) => any) | any;

      findSpriteAffinityIcon: ((_square: any, _catDef: any, _zoneData: any) => any) | any;

      flashEye: ((_amount: any) => any) | any;

      getAlpha: (() => any) | any;

      getAndActivateZoneAtXY: ((_x: any, _y: any) => any) | any;

      getColor: (() => any) | any;

      getGameSpeed: (() => any) | any;

      getIsSeen: ((_icon: any) => any) | any;

      getOverlayRadius: (() => any) | any;

      getScreenDelta: (() => any) | any;

      isFinishedLoadingIcons: (() => any) | any;

      isIconOnSquare: ((_square: any, _iconList: any) => any) | any;

      loadIcons: (() => any) | any;

      onRightMouseDown: (() => any) | any;

      onRightMouseUp: (() => any) | any;

      onToggleVisible: (() => any) | any;

      removeIcon: ((_icon: any) => any) | any;

      removeItem: ((_icon: any) => any) | any;

      removeZoneAndIcons: ((_zoneData: any) => any) | any;

      render: (() => any) | any;

      renderDebugInfo: (() => any) | any;

      renderEye: (() => any) | any;

      reset: (() => any) | any;

      resetForceFindSystem: (() => any) | any;

      resetVisionBonuses: (() => any) | any;

      setAlpha: ((_a: any) => any) | any;

      setColor: ((_rgba: any) => any) | any;

      spotIcon: ((_icon: any) => any) | any;

      toggleSearchMode: ((_isSearchMode: any) => any) | any;

      update: (() => any) | any;

      updateAlpha: (() => any) | any;

      updateCurrentZone: (() => any) | any;

      updateForceFindSystem: (() => any) | any;

      updateModifiers: (() => any) | any;

      updateOverlay: (() => any) | any;

      updatePosition: (() => any) | any;

      updateTimestamp: (() => any) | any;

      updateVisionBonuses: (() => any) | any;

      updateZoom: (() => any) | any;

      worldItemTest: ((_itemObj: any) => any) | any;

      static createUI: ((_player: any) => any) | any;

      static destroyUI: ((_character: any) => any) | any;

      static getManager: ((_character: any) => any) | any;

      static handleKeyPressed: ((_keyPressed: any) => any) | any;

      static initBinds: (() => any) | any;

      static OnFillWorldObjectContextMenu: ((_player: any, _context: any, _worldObjects: any) => any) | any;

      static OnGameStart: (() => any) | any;

      static onUpdateIcon: ((_zoneData: any, _iconID: any, _icon: any) => any) | any;

      static setManager: ((_character: any, _manager: any) => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISSearchManager {}
}
