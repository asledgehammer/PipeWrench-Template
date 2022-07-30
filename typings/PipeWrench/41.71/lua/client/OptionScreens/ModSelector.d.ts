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
 * File generated at: 2022-07-29T08:39:01.602Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ModInfoPanel:new */
    export class ModInfoPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonOptions: any;

      buttonToggle: any;

      locationEntry: any;

      locationLabel: any;

      modInfo: any;

      posterPanel: any;

      richText: any;

      thumbnailPanel: any;

      urlButton: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      render: (() => any) | any;

      setModInfo: ((modInfo: any) => any) | any;
    }

    /** @customConstructor ModListBox:new */
    export class ModListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      mouseOverButton: any;

      constructor(x: any, y: any, width: any, height: any);

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;
    }

    /** @customConstructor ModPosterPanel:new */
    export class ModPosterPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      modInfo: any;

      constructor(x: any, y: any, width: any, height: any);

      render: (() => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setModInfo: ((modInfo: any) => any) | any;
    }

    /** @customConstructor ModSelector:new */
    export class ModSelector extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      abutton: any;

      backButton: any;

      cantTexture: any;

      getModButton: any;

      infoPanel: any;

      itemheightoverride: any;

      javaObject: any;

      joyfocus: any;

      listbox: any;

      loadGameFolder: any;

      loadGameMapName: any;

      mapConflicts: any;

      mapGroups: any;

      modOrderbtn: any;

      modorderui: any;

      ModsEnabled: any;

      selected: any;

      smallFontHgt: any;

      tickTexture: any;

      topRect: any;

      urlButton: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      forceActivateMods: ((modInfo: any, activate: any) => any) | any;

      getActiveMods: (() => any) | any;

      instantiate: (() => any) | any;

      isModActive: ((modInfo: any) => any) | any;

      onAccept: (() => any) | any;

      onDblClickMap: ((item: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onModsEnabledTick: ((option: any, selected: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      populateListBox: ((directories: any) => any) | any;

      setExistingSavefile: ((folder: any) => any) | any;

      updateButtons: (() => any) | any;

      static showNagPanel: (() => any) | any;
    }

    /** @customConstructor ModThumbnailPanel:new */
    export class ModThumbnailPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      index: any;

      modInfo: any;

      padX: any;

      padY: any;

      pressed: any;

      thumbnailHeight: any;

      thumbnailWidth: any;

      constructor(x: any, y: any, width: any, height: any);

      getIndexAt: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setModInfo: ((modInfo: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ModSelector {
    /** @noSelf */
    export const ModSelector_onModsModified: (() => any) | any;
  }
}
