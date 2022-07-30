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
 * File generated at: 2022-07-29T08:39:01.420Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.shared.NPCs {
    export class BaseGameCharacterDetails {
      private constructor();

      static [id: string]: any;

      static CreateCharacterInstance: ((s: any) => any) | any;

      static CreateCharacterStats: ((desc: any) => any) | any;

      static DoFemaleForename: (() => any) | any;

      static DoHairColor: (() => any) | any;

      static DoMaleForename: (() => any) | any;

      static DoObservations: (() => any) | any;

      static DoProfessions: (() => any) | any;

      static DoSpawnPoint: (() => any) | any;

      static DoSurname: (() => any) | any;

      static DoTraits: (() => any) | any;

      static DoTrouserColor: (() => any) | any;

      static SetProfessionDescription: ((prof: any) => any) | any;

      static SetTraitDescription: ((trait: any) => any) | any;
    }
  }
  export namespace lua.shared.NPCs.MainCreationMethods {}
}
