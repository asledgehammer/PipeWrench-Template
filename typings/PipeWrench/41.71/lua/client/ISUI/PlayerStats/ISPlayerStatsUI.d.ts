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
 * File generated at: 2022-07-29T08:39:01.022Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsUI:new */
    export class ISPlayerStatsUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addLvlBtn: any;

      addTraitBtn: any;

      addXpBtn: any;

      admin: any;

      buttonBorderColor: any;

      buttonHeight: any;

      buttonOffset: any;

      buttonPadY: any;

      buttonWidth: any;

      changeAccessLvlBtn: any;

      changeForename: any;

      changeProfession: any;

      changeSurname: any;

      changeUsernameBtn: any;

      char: any;

      closeBtn: any;

      listHeaderColor: any;

      loseLvlBtn: any;

      mainPanel: any;

      manageInvBtn: any;

      muteAllBtn: any;

      perks: any;

      perksAddXPButtons: any;

      selectedPerk: any;

      traits: any;

      traitsRemoveButtons: any;

      userlogBtn: any;

      userlogs: any;

      variableColor: any;

      warningPoint: any;

      warningPointsBtn: any;

      windows: any;

      xoffset: any;

      xpListBox: any;

      constructor(x: any, y: any, width: any, height: any, playerChecked: any, admin: any);

      canModifyThis: (() => any) | any;

      create: (() => any) | any;

      drawPerk: ((y: any, item: any, alt: any) => any) | any;

      onAddTrait: ((button: any, trait: any) => any) | any;

      onAddWarningPoint: ((button: any, reason: any, amount: any) => any) | any;

      onAddXP: ((button: any, perk: any, amount: any, addGlobalXP: any) => any) | any;

      onChangeAccessLevel: ((button: any, accessLevel: any) => any) | any;

      onChangeName: ((button: any, player: any, changedName: any) => any) | any;

      onChangeProfession: ((button: any, prof: any) => any) | any;

      onMouseWheelXXX: ((del: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onRemoveTrait: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      subPanelPreRender: (() => any) | any;

      subPanelRender: (() => any) | any;

      updateButtons: (() => any) | any;

      updateColumns: (() => any) | any;

      static loadPerks: ((self: any) => any) | any;

      static loadProfession: ((self: any) => any) | any;

      static loadTraits: ((self: any) => any) | any;

      static loadUserlog: ((self: any) => any) | any;

      static OnOpenPanel: (() => any) | any;

      static receiveUserLog: ((username: any, logs: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}
}
