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
 * File generated at: 2022-07-29T08:39:02.822Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISCharacterScreen:new */
    export class ISCharacterScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      avatarBackgroundTexture: any;

      avatarHeight: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarX: any;

      avatarY: any;

      beardButton: any;

      bFemale: any;

      char: any;

      displayedTraits: any;

      hairButton: any;

      literatureButton: any;

      literatureUI: any;

      playerNum: any;

      profImage: any;

      refreshNeeded: any;

      sexText: any;

      traits: any;

      weightDecTexture: any;

      weightIncLotTexture: any;

      weightIncTexture: any;

      xOffset: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      addTooltip: ((option: any, text: any) => any) | any;

      beardMenu: ((button: any) => any) | any;

      create: (() => any) | any;

      hairMenu: ((button: any) => any) | any;

      initJoypadButtons: ((joypadData: any) => any) | any;

      maxTextWidth: ((font: any, text: any, maxWidth: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onShowLiterature: (() => any) | any;

      render: (() => any) | any;

      updateAvatar: (() => any) | any;

      static loadBeardAndHairStyle: ((self: any) => any) | any;

      static loadFavouriteWeapon: ((self: any) => any) | any;

      static loadProfession: ((self: any) => any) | any;

      static loadTraits: ((self: any) => any) | any;

      static onCutHair: ((playerObj: any, hairStyle: any, time: any) => any) | any;

      static onTrimBeard: ((playerObj: any, beardStyle: any) => any) | any;

      static setDisplayedTraits: ((self: any) => any) | any;

      static traitsChanged: ((self: any) => any) | any;
    }

    /** @customConstructor ISCharacterScreenAvatar:new */
    export class ISCharacterScreenAvatar extends lua.client.ISUI.ISUI3DModel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterScreen {}
}
