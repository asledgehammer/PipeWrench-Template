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
 * File generated at: 2022-07-29T08:39:00.521Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPostDeathUI:new */
    export class ISPostDeathUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      buttonQuit: any;

      buttonRespawn: any;

      playerIndex: any;

      quitToDesktopDialog: any;

      screenHeight: any;

      screenWidth: any;

      screenX: any;

      screenY: any;

      textY: any;

      waitOver: any;

      constructor(playerIndex: any);

      configButton: ((button: any) => any) | any;

      createChildren: (() => any) | any;

      onConfirmQuitToDesktop: ((button: any) => any) | any;

      onExit: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadReactivate: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onQuitToDesktop: (() => any) | any;

      onRespawn: (() => any) | any;

      render: (() => any) | any;

      static OnPlayerDeath: ((playerObj: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISPostDeathUI {}
}
