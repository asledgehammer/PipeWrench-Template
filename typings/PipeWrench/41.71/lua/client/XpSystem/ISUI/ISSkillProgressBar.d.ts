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
 * File generated at: 2022-07-29T08:39:02.846Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISSkillProgressBar:new */
    export class ISSkillProgressBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static alpha: any;

      static upAlpha: any;

      AddSkillBtn: any;

      char: any;

      level: any;

      message: any;

      parent: any;

      perk: any;

      playerNum: any;

      ProgressSkill: any;

      SkillBtnEmptWhitey: any;

      SkillBtnEmpty: any;

      SkillBtnEmptyBig: any;

      tooltip: any;

      UnlockedSkill: any;

      xp: any;

      xpForLvl: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any, perk: any, parent: any);

      activate: (() => any) | any;

      render: (() => any) | any;

      renderPerkRect: (() => any) | any;

      updateTooltip: ((lvlSelected: any) => any) | any;

      static getPerkXp: ((self: any) => any) | any;

      static getPreviousXpLvl: ((perk: any, level: any) => any) | any;

      static getXpForLvl: ((perk: any, level: any) => any) | any;

      static updateAlpha: (() => any) | any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISSkillProgressBar {}
}
