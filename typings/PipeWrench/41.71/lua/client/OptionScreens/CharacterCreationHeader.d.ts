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
 * File generated at: 2022-07-29T08:39:01.448Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CharacterCreationHeader:new */
    export class CharacterCreationHeader extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      avatarPanel: any;

      femaletex: any;

      forenameEntry: any;

      genderCombo: any;

      itemheightoverride: any;

      javaObject: any;

      maletex: any;

      surnameEntry: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      createAvatar: (() => any) | any;

      disableBtn: (() => any) | any;

      dressWithDefinitions: ((definition: any, resetWornItems: any) => any) | any;

      initPlayer: (() => any) | any;

      instantiate: (() => any) | any;

      onGenderSelected: ((combo: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      randomGenericOutfit: (() => any) | any;

      render: (() => any) | any;

      setAvatarFromUI: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationHeader {}
}
