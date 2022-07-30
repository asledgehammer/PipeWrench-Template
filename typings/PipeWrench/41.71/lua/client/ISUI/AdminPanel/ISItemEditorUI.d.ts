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
 * File generated at: 2022-07-29T08:39:00.024Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISItemEditorUI:new */
    export class ISItemEditorUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      admin: any;

      age: any;

      aimingTime: any;

      boredom: any;

      buttonBorderColor: any;

      calories: any;

      cancel: any;

      carbs: any;

      clipSize: any;

      color: any;

      colorBtn: any;

      colorPicker: any;

      condition: any;

      dy: any;

      hunger: any;

      isDrainable: any;

      isFood: any;

      isWeapon: any;

      item: any;

      lipids: any;

      maxDmg: any;

      maxRange: any;

      minAngle: any;

      minDmg: any;

      minRange: any;

      name: any;

      offAge: any;

      offAgeMax: any;

      originalColorA: any;

      originalColorB: any;

      originalColorG: any;

      originalColorR: any;

      originalWeight: any;

      poisonPower: any;

      proteins: any;

      recoilDelay: any;

      reloadTime: any;

      save: any;

      unhappy: any;

      usedDelta: any;

      variableColor: any;

      weight: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, admin: any, item: any);

      create: (() => any) | any;

      onColor: ((button: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onPickedColor: ((color: any, mouseUp: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;

      updateButtons: ((internalUI: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISItemEditorUI {}
}
