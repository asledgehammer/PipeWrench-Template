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
 * File generated at: 2022-07-29T08:39:01.719Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISSliderPanel:new */
    export class ISSliderPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      btnLeftDim: any;

      btnRightDim: any;

      buttonColor: any;

      buttonMouseOverColor: any;

      currentValue: any;

      customPaginate: any;

      doButtons: any;

      doToolTip: any;

      dragClickX: any;

      dragInside: any;

      isSliderPanel: any;

      leftPressed: any;

      maxValue: any;

      minValue: any;

      onValueChange: any;

      rightPressed: any;

      shiftValue: any;

      sliderBarBorderColor: any;

      sliderBarColor: any;

      sliderBarDim: any;

      sliderBorderColor: any;

      sliderColor: any;

      sliderDim: any;

      sliderMouseOverColor: any;

      stepValue: any;

      target: any;

      texBtnLeft: any;

      texBtnRight: any;

      toolTip: any;

      toolTipText: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onValueChange: any, customPaginate: any);

      activateToolTip: (() => any) | any;

      createChildren: (() => any) | any;

      deactivateToolTip: (() => any) | any;

      doOnValueChange: ((_newvalue: any) => any) | any;

      getCurrentValue: (() => any) | any;

      paginate: (() => any) | any;

      render: (() => any) | any;

      round: ((num: any, idp: any) => any) | any;

      setCurrentValue: ((_v: any, _ignoreOnChange: any) => any) | any;

      setDoButtons: ((_b: any) => any) | any;

      setValues: ((_min: any, _max: any, _step: any, _shift: any, _ignoreCurVal: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISSliderPanel {}
}
