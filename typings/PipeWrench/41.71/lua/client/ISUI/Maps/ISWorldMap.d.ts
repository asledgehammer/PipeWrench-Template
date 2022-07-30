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
 * File generated at: 2022-07-29T08:39:00.964Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISWorldMap:new */
    export class ISWorldMap extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonPanel: any;

      centerBtn: any;

      character: any;

      closeBtn: any;

      cross: any;

      dragging: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartX: any;

      dragStartY: any;

      dragStartZoomF: any;

      forgetBtn: any;

      forgetUI: any;

      getJoypadFocus: any;

      hideUnvisitedAreas: any;

      isometric: any;

      javaObject: any;

      LBumperZoom: any;

      mapAPI: any;

      optionBtn: any;

      optionsUI: any;

      perspectiveBtn: any;

      playerNum: any;

      povXms: any;

      povYms: any;

      pyramidBtn: any;

      RBumperZoom: any;

      showCellGrid: any;

      showPlayers: any;

      showTileGrid: any;

      symbolsBtn: any;

      symbolsUI: any;

      texViewIsometric: any;

      texViewOrthographic: any;

      texViewPyramid: any;

      updateMS: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      initDataAndStyle: (() => any) | any;

      instantiate: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onCenterOnPlayer: (() => any) | any;

      onChangeOptions: ((button: any) => any) | any;

      onChangePerspective: (() => any) | any;

      onConfirmForget: ((button: any) => any) | any;

      onForget: (() => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      onTeleport: ((worldX: any, worldY: any) => any) | any;

      onTogglePyramid: (() => any) | any;

      onToggleSymbols: (() => any) | any;

      render: (() => any) | any;

      renderJoypadPrompt: ((texture: any, text: any, x: any, y: any) => any) | any;

      restoreSettings: (() => any) | any;

      saveSettings: (() => any) | any;

      setHideUnvisitedAreas: ((hide: any) => any) | any;

      setIsometric: ((iso: any) => any) | any;

      setShowCellGrid: ((show: any) => any) | any;

      setShowPlayers: ((show: any) => any) | any;

      setShowTileGrid: ((show: any) => any) | any;

      updateJoypad: (() => any) | any;

      static checkKey: ((key: any) => any) | any;

      static HideWorldMap: ((playerNum: any) => any) | any;

      static IsAllowed: (() => any) | any;

      static onKeyKeepPressed: ((key: any) => any) | any;

      static onKeyReleased: ((key: any) => any) | any;

      static onKeyStartPressed: ((key: any) => any) | any;

      static OnPlayerDeath: ((playerObj: any) => any) | any;

      static ShowWorldMap: ((playerNum: any) => any) | any;

      static ToggleWorldMap: ((playerNum: any) => any) | any;
    }

    /** @customConstructor ISWorldMapButtonPanel:new */
    export class ISWorldMapButtonPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;
    }

    /** @customConstructor WorldMapOptions:new */
    export class WorldMapOptions extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      doubleBoxes: any;

      map: any;

      tickBoxes: any;

      constructor(x: any, y: any, width: any, height: any, map: any);

      onCommandEntered: ((entry: any, option: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any, option: any) => any) | any;

      synchUI: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMap {}
}
