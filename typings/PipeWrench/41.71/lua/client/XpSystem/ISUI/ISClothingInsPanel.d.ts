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
 * File generated at: 2022-07-29T08:39:02.829Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISClothingInsPanel:new */
    export class ISClothingInsPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      bFemale: any;

      bodyPartPanel: any;

      bpAnchorX: any;

      bpAnchorY: any;

      bpPanelX: any;

      bpPanelY: any;

      btnTextColor: any;

      colorScheme: any;

      coreHeatBar: any;

      coreRectangleH: any;

      coreTemperatureBar: any;

      currentViewID: any;

      defTextColor: any;

      labelCoreHeat: any;

      labelCoreHeatMax: any;

      labelCoreHeatMid: any;

      labelCoreHeatMin: any;

      labelCoreTemp: any;

      labelCoreTempMax: any;

      labelCoreTempMid: any;

      labelCoreTempMin: any;

      labelCurrentView: any;

      labelCurrentViewMax: any;

      labelCurrentViewMid: any;

      labelCurrentViewMin: any;

      legendBar: any;

      mainGroup: any;

      mainGroupViews: any;

      maxViewsY: any;

      nodeDetails: any;

      nodeGroup: any;

      nodeGroupViews: any;

      player: any;

      playerNum: any;

      refreshNeeded: any;

      selectedBodyPart: any;

      selectedViewIndex: any;

      titleColor: any;

      toggleAdvBtn: any;

      viewButtons: any;

      views: any;

      viewsAdvanced: any;

      viewsSimple: any;

      constructor(player: any, x: any, y: any, width: any, height: any);

      addMainGroup: ((_widget: any, _ignoreAddChild: any, _view: any) => any) | any;

      addNodeGroup: ((_widget: any, _view: any) => any) | any;

      addView: ((_viewID: any, _viewTable: any, _y: any) => any) | any;

      create: (() => any) | any;

      createChildren: (() => any) | any;

      onClickViewButton: ((_btn: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onResetButton: ((_btn: any) => any) | any;

      onToggleViewStyle: ((_btn: any) => any) | any;

      render: (() => any) | any;

      setJoypadButtons: (() => any) | any;

      setSelection: ((_node: any) => any) | any;

      setViewIndex: ((_index: any) => any) | any;

      setViewStyle: ((_viewStyle: any, _force: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISClothingInsPanel {}
}
