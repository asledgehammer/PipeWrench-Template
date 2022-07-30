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
 * File generated at: 2022-07-29T08:39:01.512Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor InviteFriends:new */
    export class InviteFriends extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      allowButton: any;

      backButton: any;

      filterEntry: any;

      inviteButton: any;

      invited: any;

      inviteTime: any;

      isCoopHost: any;

      listbox: any;

      mouseOverButtonIndex: any;

      selectedFriend: any;

      statusLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      clickBack: (() => any) | any;

      clickInvite: (() => any) | any;

      create: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      fillList: (() => any) | any;

      filter: (() => any) | any;

      hasChoices: (() => any) | any;

      loadInvitedFile: (() => any) | any;

      onDblClick: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDown_ListBox: ((x: any, y: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      refreshList: (() => any) | any;

      render: (() => any) | any;

      saveInvitedFile: (() => any) | any;

      toggleAllowDeny: ((index: any) => any) | any;

      static OnSteamFriendStatusChanged: ((steamID: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.InviteFriends {}
}
