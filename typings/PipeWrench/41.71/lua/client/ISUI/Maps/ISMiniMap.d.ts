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
 * File generated at: 2022-07-29T08:39:00.944Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISMiniMapInner:new */
    export class ISMiniMapInner extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartX: any;

      dragStartY: any;

      dragStartZoomF: any;

      mapAPI: any;

      playerNum: any;

      rightMouseDown: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      onMouseDown: ((x: any, y: any) => any) | any;

      onTeleport: ((worldX: any, worldY: any) => any) | any;

      prerenderHack: (() => any) | any;
    }

    /** @customConstructor ISMiniMapOuter:new */
    export class ISMiniMapOuter extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      borderSize: any;

      bottomHeight: any;

      bottomPanel: any;

      button1: any;

      button2: any;

      button3: any;

      button4: any;

      button5: any;

      button6: any;

      hideInventoryX: any;

      inner: any;

      playerNum: any;

      titleBar: any;

      userPosition: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      createChildren: (() => any) | any;

      onButton1: (() => any) | any;

      onButton2: (() => any) | any;

      onButton3: (() => any) | any;

      onButton4: (() => any) | any;

      onButton5: (() => any) | any;

      onButton6: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      RestoreLayout: ((name: any, layout: any) => any) | any;

      restoreSettings: (() => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      saveSettings: (() => any) | any;

      setAdornmentsVisible: ((visible: any) => any) | any;

      setPosition: (() => any) | any;
    }

    /** @customConstructor ISMiniMapTitleBar:new */
    export class ISMiniMapTitleBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      miniMap: any;

      titlebarbkg: any;

      constructor(miniMap: any);

      titleBarHeight: (() => any) | any;

      static TitleBarHeight: (() => any) | any;
    }

    export class ISMiniMap {
      private constructor();

      static [id: string]: any;

      static FocusMiniMap: ((playerNum: any) => any) | any;

      static InitPlayer: ((playerNum: any) => any) | any;

      static IsAllowed: (() => any) | any;

      static Recreate: ((playerNum: any) => any) | any;

      static ToggleMiniMap: ((playerNum: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMiniMap {}
}
