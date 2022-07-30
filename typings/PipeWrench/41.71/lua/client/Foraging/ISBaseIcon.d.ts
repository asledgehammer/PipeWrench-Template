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
 * File generated at: 2022-07-29T08:38:59.869Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISBaseIcon:new */
    export class ISBaseIcon extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      adjacentSquares: any;

      alphaTarget: any;

      altWorldTexture: any;

      baseHeight: any;

      baseWidth: any;

      bounce: any;

      bounceHeight: any;

      bounceMax: any;

      bounceSpeed: any;

      bounceStep: any;

      canMoveVertical: any;

      canRollForSearchFocus: any;

      character: any;

      currentTimestamp: any;

      darkVisionRadius: any;

      distanceToPlayer: any;

      expandView: any;

      expandViewStep: any;

      icon: any;

      iconClass: any;

      iconID: any;

      identified: any;

      identifyDistance: any;

      isBeingRemoved: any;

      isBonusIcon: any;

      isDarknessCapped: any;

      isForageable: any;

      isKnownPoison: any;

      isMover: any;

      isNoticed: any;

      isoMarker: any;

      isSeen: any;

      isSeenThisUpdate: any;

      itemCount: any;

      itemList: any;

      itemObj: any;

      itemRotation: any;

      itemSize: any;

      itemTexture: any;

      itemType: any;

      lastSeenHours: any;

      lastTimestamp: any;

      managedMarkers: any;

      manager: any;

      maxPosChanges: any;

      maxRadius: any;

      maxRadiusCap: any;

      minRadius: any;

      modifiers: any;

      moveState: any;

      moveTargetX: any;

      moveTargetY: any;

      onMouseDoubleClick: any;

      onSquareDistance: any;

      perkLevel: any;

      pinAlpha: any;

      pinOffset: any;

      player: any;

      posChanges: any;

      renderItemTexture: any;

      spotTimer: any;

      spotTimerMax: any;

      square: any;

      stareVal: any;

      texture: any;

      textureCenter: any;

      textureColor: any;

      timeDelta: any;

      updateEvents: any;

      updateTick: any;

      updateTickMax: any;

      viewAngle: any;

      viewDistance: any;

      visionData: any;

      worldMarker: any;

      xCoord: any;

      yCoord: any;

      zCoord: any;

      zoom: any;

      zSize: any;

      constructor(_manager: any, _icon: any);

      addIsoMarker: (() => any) | any;

      addWorldMarker: (() => any) | any;

      checkIsForageable: (() => any) | any;

      checkIsPlayerRunning: (() => any) | any;

      checkIsSpotted: (() => any) | any;

      doContextMenu: ((_context: any) => any) | any;

      doPickup: (() => any) | any;

      doSearchFocusCheck: (() => any) | any;

      doUpdateEvents: ((_force: any) => any) | any;

      doVisionCheck: (() => any) | any;

      findPinOffset: (() => any) | any;

      findTextureCenter: (() => any) | any;

      getAlpha: (() => any) | any;

      getAngle2D: ((_x1: any, _y1: any, _x2: any, _y2: any) => any) | any;

      getAngleOffset2D: ((_angle1: any, _angle2: any) => any) | any;

      getCanSeeThisUpdate: (() => any) | any;

      getColor: (() => any) | any;

      getDistance3D: ((_x1: any, _y1: any, _z1: any, _x2: any, _y2: any, _z2: any) => any) | any;

      getGameSpeed: (() => any) | any;

      getGridSquare: (() => any) | any;

      getIsNoticed: (() => any) | any;

      getIsSearchModeActive: (() => any) | any;

      getIsSeen: (() => any) | any;

      getIsSeenThisUpdate: (() => any) | any;

      getItemList: (() => any) | any;

      getScreenDelta: (() => any) | any;

      getSpotTimer: (() => any) | any;

      initAltTexture: (() => any) | any;

      initGridSquare: (() => any) | any;

      initItem: (() => any) | any;

      initItemCount: (() => any) | any;

      isCenterView: ((_bonusAngle: any) => any) | any;

      isInRangeOfPlayer: ((_range: any) => any) | any;

      isNearby: (() => any) | any;

      isValid: (() => any) | any;

      onRightMouseDown: (() => any) | any;

      onRightMouseUp: (() => any) | any;

      remove: (() => any) | any;

      removeIsoMarker: (() => any) | any;

      removeWorldMarker: (() => any) | any;

      render: (() => any) | any;

      render3DItem: (() => any) | any;

      renderAltWorldTexture: (() => any) | any;

      renderPinIcon: (() => any) | any;

      renderWorldIcon: (() => any) | any;

      renderWorldItemTexture: (() => any) | any;

      reset: (() => any) | any;

      resetBounce: (() => any) | any;

      setAlpha: ((_a: any) => any) | any;

      setColor: ((_rgba: any) => any) | any;

      setIsBeingRemoved: ((_isBeingRemoved: any) => any) | any;

      setIsNoticed: ((_isNoticed: any) => any) | any;

      setIsSeen: ((_isSeen: any) => any) | any;

      setIsSeenThisUpdate: ((_isSeen: any) => any) | any;

      setSpotTimer: ((_time: any) => any) | any;

      spotIcon: (() => any) | any;

      update: (() => any) | any;

      updateAlpha: (() => any) | any;

      updateBounce: (() => any) | any;

      updateDistanceToPlayer: (() => any) | any;

      updateLastSeen: (() => any) | any;

      updateManagerMarkers: (() => any) | any;

      updateModifiers: (() => any) | any;

      updatePerkLevel: (() => any) | any;

      updatePinIconPosition: (() => any) | any;

      updatePinIconSize: (() => any) | any;

      updateSpotTimer: (() => any) | any;

      updateSpotTimerMax: (() => any) | any;

      updateTimestamp: (() => any) | any;

      updateViewDistance: (() => any) | any;

      updateWorldMarker: (() => any) | any;

      updateZoom: (() => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISBaseIcon {}
}
