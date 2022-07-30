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
 * File generated at: 2022-07-29T08:39:01.610Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor NewGameScreen:new */
    export class NewGameScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      buttonMods: any;

      fadeIn: any;

      fadeOut: any;

      itemheightoverride: any;

      javaObject: any;

      joypadFocused: any;

      mainPanel: any;

      mainPanelReqWidth: any;

      modal: any;

      MouseEnterMainMenuItem: any;

      newButton: any;

      overBottomPanelButton: any;

      richText: any;

      selected: any;

      selectedItem: any;

      startY: any;

      survival: any;

      constructor(x: any, y: any, width: any, height: any);

      clickPlay: (() => any) | any;

      create: (() => any) | any;

      disableBtn: (() => any) | any;

      instantiate: (() => any) | any;

      Label_setJoypadFocused: ((focused: any, joypadData: any) => any) | any;

      needDifficulty: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResetLua: ((reason: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      prerenderBottomPanelLabel: (() => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      updateBottomPanelButtons: (() => any) | any;

      static dblClickChallenge: ((item: any, x: any, y: any) => any) | any;

      static dblClickDifficulty: ((item: any, x: any, y: any) => any) | any;

      static dblClickPlaystyle: ((item: any, x: any, y: any) => any) | any;

      static dblClickSurvival: ((item: any, x: any, y: any) => any) | any;

      static dblClickTutorial: ((item: any, x: any, y: any) => any) | any;

      static onChooseDifficulty: ((item: any, x: any, y: any) => any) | any;

      static onMenuItemMouseDown: ((item: any, x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.NewGameScreen {}
}
