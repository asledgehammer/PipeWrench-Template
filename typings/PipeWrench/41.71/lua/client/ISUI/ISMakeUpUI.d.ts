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
 * File generated at: 2022-07-29T08:39:00.459Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISMakeUpUI:new */
    export class ISMakeUpUI extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      addMakeupLbl: any;

      avatarBackgroundTexture: any;

      avatarHeight: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarX: any;

      avatarY: any;

      character: any;

      comboMakeup: any;

      desc: any;

      drawJoypadFocus: any;

      item: any;

      joypadButtons: any;

      joypadIndex: any;

      joypadIndexY: any;

      leftPanel: any;

      location: any;

      makeUpSelected: any;

      needsUpdateAvatar: any;

      needsUpdateLayout: any;

      playerNum: any;

      previousMakeUp: any;

      remove: any;

      removeMakeupCombo: any;

      removeMakeupLbl: any;

      rightPanel: any;

      constructor(x: any, y: any, item: any, character: any);

      close: (() => any) | any;

      createChildren: (() => any) | any;

      displayBodyPart: ((cat: any) => any) | any;

      initLocationCombo: (() => any) | any;

      initRemoveMakeUpCombo: (() => any) | any;

      onApplyMakeUp: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onRemoveMakeUp: (() => any) | any;

      onSelectLocation: (() => any) | any;

      onSelectMakeUp: (() => any) | any;

      onSelectRemoveMakeUp: (() => any) | any;

      prerender: (() => any) | any;

      reinit: (() => any) | any;

      reinitCombos: (() => any) | any;

      setWidthToChildren: ((panel: any, minWidth: any) => any) | any;

      update: (() => any) | any;

      updateAvatar: (() => any) | any;

      updateLayout: (() => any) | any;

      static OnPlayerDeath: ((playerObj: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISMakeUpUI {}
}
