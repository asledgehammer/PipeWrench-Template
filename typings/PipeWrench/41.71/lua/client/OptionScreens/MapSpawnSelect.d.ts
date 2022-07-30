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
 * File generated at: 2022-07-29T08:39:01.582Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor MapSpawnSelect:new */
    export class MapSpawnSelect extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addY: any;

      backButton: any;

      checkExist: any;

      checkExistsName: any;

      joyfocus: any;

      listbox: any;

      nextButton: any;

      previousScreen: any;

      richText: any;

      selectedRegion: any;

      startY: any;

      textEntry: any;

      textEntryLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      clickBack: (() => any) | any;

      clickNext: (() => any) | any;

      create: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillList: (() => any) | any;

      getChallengeSpawnRegion: (() => any) | any;

      getFixedSpawnRegion: (() => any) | any;

      getSafehouseSpawnRegion: (() => any) | any;

      getSpawnRegions: (() => any) | any;

      hasChoices: (() => any) | any;

      hideOrShowSaveName: (() => any) | any;

      onDblClick: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate_child: ((joypadData: any) => any) | any;

      onJoypadDirDown_textEntry: ((joypadData: any) => any) | any;

      onJoypadDown_textEntry: ((button: any, joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      render: (() => any) | any;

      useDefaultSpawnRegion: (() => any) | any;
    }

    /** @customConstructor MapSpawnSelectInfoPanel:new */
    export class MapSpawnSelectInfoPanel extends lua.client.ISUI.ISRichTextPanel {
      [id: string]: any;
      static [id: string]: any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      prerender: (() => any) | any;
    }

    /** @customConstructor MapSpawnSelectListBox:new */
    export class MapSpawnSelectListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.MapSpawnSelect {}
}
