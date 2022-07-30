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
 * File generated at: 2022-07-29T08:39:01.562Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor MainOptions:new */
    export class MainOptions extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static keyBindingLength: any;

      static keys: any;

      static keyText: any;

      static setKeybindDialog: any;

      static translatorPane: any;

      acceptButton: any;

      addY: any;

      backButton: any;

      btnJoypadSensitivityM: any;

      btnJoypadSensitivityP: any;

      colorPicker: any;

      colorPicker2: any;

      controllerTestPanel: any;

      cover: any;

      gameOptions: any;

      gameSounds: any;

      javaObject: any;

      joyfocus: any;

      keyButtonWidth: any;

      keyTickBoxes: any;

      labelJoypadSensitivity: any;

      mainPanel: any;

      modal: any;

      monitorSettings: any;

      mpColor: any;

      objHighColor: any;

      resetLua: any;

      restartRequired: any;

      saveButton: any;

      sprintBtn: any;

      stuffBelowControllerTickbox: any;

      tabs: any;

      constructor(x: any, y: any, width: any, height: any);

      addColorButton: ((x: any, y: any, name: any, color: any, onClick: any) => any) | any;

      addCombo:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      addHorizontalLine: ((y: any, text: any) => any) | any;

      addMegaVolumeControl:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      addPage: ((name: any) => any) | any;

      addSpinBox:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      addTextPane: ((x: any, y: any, w: any, h: any) => any) | any;

      addTickBox: ((x: any, y: any, w: any, h: any) => any) | any;

      addVolumeControl:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      addVolumeIndicator:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      addYesNo: ((x: any, y: any, w: any, h: any, name: any) => any) | any;

      apply: ((closeAfter: any) => any) | any;

      centerChildrenX: ((panel: any) => any) | any;

      centerKeybindings: (() => any) | any;

      centerTabChildrenX: ((tabTitle: any) => any) | any;

      ControllerReload: ((button: any) => any) | any;

      create: (() => any) | any;

      instantiate: (() => any) | any;

      joypadSensitivityM: ((button: any) => any) | any;

      joypadSensitivityP: ((button: any) => any) | any;

      onConfirmModalClick: ((button: any) => any) | any;

      onConfirmMonitorSettingsClick: ((button: any, closeAfter: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocusCurrentTab: ((joypadData: any) => any) | any;

      onGameSounds: (() => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivateCurrentTab: ((joypadData: any) => any) | any;

      onJoypadDownCurrentTab: ((button: any, joypadData: any) => any) | any;

      onKeybindChanged: ((name: any, key: any) => any) | any;

      onKeyBindingBtnPress: ((button: any, x: any, y: any) => any) | any;

      onKeyboardLayoutChanged: (() => any) | any;

      onLoseJoypadFocusCurrentTab: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onMPColor: ((button: any) => any) | any;

      onObjHighlightColor: ((button: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onReloadGameSounds: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onRestartRequiredClick: ((button: any, closeAfter: any) => any) | any;

      onTabsActivateView: ((tabs: any) => any) | any;

      pickedMPTextColor: ((color: any, mouseUp: any) => any) | any;

      pickedObjHighlightColor: ((color: any, mouseUp: any) => any) | any;

      render: (() => any) | any;

      setResolutionAndFullScreen: (() => any) | any;

      showConfirmDialog: (() => any) | any;

      showConfirmMonitorSettingsDialog: ((closeAfter: any) => any) | any;

      showRestartRequiredDialog: ((closeAfter: any) => any) | any;

      subPanelPreRender: (() => any) | any;

      subPanelRender: (() => any) | any;

      toUI: (() => any) | any;

      static doLanguageToolTip: ((languages: any) => any) | any;

      static getAvailableLanguage: (() => any) | any;

      static getGeneralTranslators: ((_language: any) => any) | any;

      static keyPressHandler: ((key: any) => any) | any;

      static loadKeys: (() => any) | any;

      static OnGamepadConnect: ((index: any) => any) | any;

      static OnGamepadDisconnect: ((index: any) => any) | any;

      static saveKeys: (() => any) | any;

      static sortModes: ((a: any, b: any) => any) | any;

      static upgradeKeysIni: ((name: any, key: any, defaultKey: any, version: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.MainOptions {}
}
