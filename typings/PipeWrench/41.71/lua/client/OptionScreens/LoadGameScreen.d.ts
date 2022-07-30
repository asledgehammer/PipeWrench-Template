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
 * File generated at: 2022-07-29T08:39:01.544Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor LoadGameScreen:new */
    export class LoadGameScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      configButton: any;

      configPanel: any;

      deadTexture: any;

      deleteButton: any;

      infoPanel: any;

      itemheightoverride: any;

      javaObject: any;

      joyfocus: any;

      joypadFocused: any;

      listbox: any;

      mapGroups: any;

      modal: any;

      playButton: any;

      richText: any;

      selected: any;

      startY: any;

      constructor(x: any, y: any, width: any, height: any);

      checkChallenge: ((item: any) => any) | any;

      checkMapsAvailable: ((item: any) => any) | any;

      clickPlay: (() => any) | any;

      create: (() => any) | any;

      disableBtn: (() => any) | any;

      drawMap: ((y: any, item: any, alt: any) => any) | any;

      getChallenge: ((item: any) => any) | any;

      hasChoices: (() => any) | any;

      hideConfigPanel: (() => any) | any;

      instantiate: (() => any) | any;

      onDblClickWorld: (() => any) | any;

      onDeleteModalClick: ((button: any) => any) | any;

      onErrorLoadingClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocus_child: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate_child: ((joypadData: any) => any) | any;

      onJoypadDirLeft_child: ((joypadData: any) => any) | any;

      onJoypadDirRight_child: ((joypadData: any) => any) | any;

      onLoseJoypadFocus_child: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSavefileModsChanged: ((folder: any) => any) | any;

      render: (() => any) | any;

      setSaveGamesList: (() => any) | any;

      showConfigPanel: (() => any) | any;

      static onClickWorld: (() => any) | any;

      static OnKeyPressed: ((key: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.LoadGameScreen {
    /** @noSelf */
    export const LoadGameScreen_onModsModified: (() => any) | any;
  }
}
