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
 * File generated at: 2022-07-29T08:38:58.892Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Chat {
    /** @customConstructor ISChat:new */
    export class ISChat extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static focused: any;

      static instance: any;

      static maxTextEntryOpaque: any;

      btnHeight: any;

      chatFont: any;

      chatLockedButtonTexture: any;

      chatText: any;

      chatUnLockedButtonTexture: any;

      closeBtnTxt: any;

      currentTabID: any;

      fade: any;

      fadeTime: any;

      fontHgt: any;

      gearButton: any;

      inset: any;

      lockButton: any;

      locked: any;

      maxOpaque: any;

      minimumHeight: any;

      minimumWidth: any;

      minOpaque: any;

      mutedUsers: any;

      nextBtnTxt: any;

      opaqueOnFocus: any;

      panel: any;

      prevBtnTxt: any;

      servermsg: any;

      servermsgTimer: any;

      showTimestamp: any;

      showTitle: any;

      tabCnt: any;

      tabs: any;

      textEntry: any;

      timerTextEntry: any;

      constructor(x: any, y: any, width: any, height: any);

      calcAlpha: ((defaultMin: any, defaultMax: any, fraction: any) => any) | any;

      calcTabPos: (() => any) | any;

      calcTabSize: (() => any) | any;

      createTab: (() => any) | any;

      focus: (() => any) | any;

      initFade: ((durationInS: any) => any) | any;

      isCursorOnTitlebar: ((x: any, y: any) => any) | any;

      isMuted: ((username: any) => any) | any;

      logChatCommand: ((command: any) => any) | any;

      makeFade: ((fraction: any) => any) | any;

      mute: ((username: any) => any) | any;

      onActivateView: (() => any) | any;

      onCommandEntered: (() => any) | any;

      onContextClear: (() => any) | any;

      onGearButtonClick: (() => any) | any;

      onOtherKey: ((key: any) => any) | any;

      onPressDown: (() => any) | any;

      onPressUp: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render_chatText: (() => any) | any;

      unfocus: (() => any) | any;

      updateChatPrefixSettings: (() => any) | any;

      static addLineInChat: ((message: any, tabID: any) => any) | any;

      static createChat: (() => any) | any;

      static initChat: (() => any) | any;

      static ISTabPanelOnMouseDown: ((target: any, x: any, y: any) => any) | any;

      static onFadeTimeChange: ((target: any, value: any) => any) | any;

      static onFocusOpaqueChange: ((target: any, value: any) => any) | any;

      static onFontSizeChange: ((target: any, value: any) => any) | any;

      static onKeyKeepPressed: ((key: any) => any) | any;

      static onMaxOpaqueChange: ((target: any, value: any) => any) | any;

      static onMinOpaqueChange: ((target: any, value: any) => any) | any;

      static onSetDefaultTab: ((defaultTabTitle: any) => any) | any;

      static onSwitchStream: (() => any) | any;

      static onTabAdded: ((tabTitle: any, tabID: any) => any) | any;

      static onTabRemoved: ((tabTitle: any, tabID: any) => any) | any;

      static onTextChange: (() => any) | any;

      static ontick: (() => any) | any;

      static onToggleChatBox: ((key: any) => any) | any;

      static onToggleTagPrefix: (() => any) | any;

      static onToggleTimestampPrefix: (() => any) | any;

      static unfocusEvent: (() => any) | any;
    }
  }
  export namespace lua.client.Chat.ISChat {}
}
