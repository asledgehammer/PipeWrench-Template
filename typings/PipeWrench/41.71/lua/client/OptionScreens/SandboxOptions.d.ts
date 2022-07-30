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
 * File generated at: 2022-07-29T08:39:01.625Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor SandboxOptionsScreen:new */
    export class SandboxOptionsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addY: any;

      backButton: any;

      controls: any;

      currentPanel: any;

      defaultPreset: any;

      deletePresetButton: any;

      devPresetButton: any;

      groupBox: any;

      hadJoypadFocus: any;

      javaObject: any;

      listbox: any;

      nonDefaultOptions: any;

      playButton: any;

      presetList: any;

      presetPanel: any;

      presets: any;

      savePresetButton: any;

      selectedMonth: any;

      selectedYear: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      createPanel: ((page: any) => any) | any;

      deletePresetStep1: ((preset: any) => any) | any;

      deletePresetStep2: ((button: any, joypadData: any) => any) | any;

      getApocalypsePreset: (() => any) | any;

      getBeginnerPreset: (() => any) | any;

      getBuilderPreset: (() => any) | any;

      getDefaultPreset: (() => any) | any;

      getHardPreset: (() => any) | any;

      getNormalPreset: (() => any) | any;

      getSurvivalPreset: (() => any) | any;

      getSurvivorPreset: (() => any) | any;

      instantiate: (() => any) | any;

      loadPresets: (() => any) | any;

      onComboBoxSelected: ((combo: any, optionName: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGroupBox: ((index: any, selected: any, groupBoxName: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDownListbox: ((item: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onPresetChange: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSaveDeveloperPreset: ((button: any, joypadData: any) => any) | any;

      onSavePreset: ((button: any, joypadData: any) => any) | any;

      onValidateSavePreset: ((text: any) => any) | any;

      render: (() => any) | any;

      setSandboxVars: (() => any) | any;

      settingsFromUI: ((options: any) => any) | any;

      settingsToUI: ((options: any) => any) | any;

      subPanelPreRender: (() => any) | any;

      subPanelRender: (() => any) | any;

      syncStartDay: (() => any) | any;

      static load: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.SandboxOptions {}
}
