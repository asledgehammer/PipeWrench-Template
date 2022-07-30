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
 * File generated at: 2022-07-29T08:38:59.908Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISSearchWindow:new */
    export class ISSearchWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static showDebug: any;

      character: any;

      climateManager: any;

      drawJoypadFocus: any;

      gameTime: any;

      joypadMoveSpeed: any;

      manager: any;

      overrideBPrompt: any;

      player: any;

      searchFocus: any;

      searchFocusCategory: any;

      showBackground: any;

      showBorder: any;

      toggleSearchMode: any;

      tooltipForced: any;

      visibleFunction: any;

      visibleTarget: any;

      zoneDisplay: any;

      constructor(_manager: any);

      checkShowFirstTimeSearchTutorial: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      nextSearchFocus: (() => any) | any;

      onChangeSearchFocusCategory: ((_option: any) => any) | any;

      onGainJoypadFocus: (() => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((_button: any) => any) | any;

      onLoseJoypadFocus: (() => any) | any;

      onToggleVisible: (() => any) | any;

      toggleForceAreaTooltip: (() => any) | any;

      toggleForceVisionTooltip: (() => any) | any;

      update: (() => any) | any;

      updateSearchFocusCategories: (() => any) | any;

      static createUI: ((_player: any) => any) | any;

      static destroyUI: ((_character: any) => any) | any;

      static onEnableSearchMode: ((_character: any, _isSearchMode: any) => any) | any;

      static OnFillWorldObjectContextMenu: ((_player: any, _context: any) => any) | any;

      static showWindow: ((_character: any) => any) | any;

      static toggleWindow: ((_character: any) => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISSearchWindow {}
}
