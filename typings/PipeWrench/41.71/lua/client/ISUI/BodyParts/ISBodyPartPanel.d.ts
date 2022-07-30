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
 * File generated at: 2022-07-29T08:39:00.130Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.BodyParts {
    /** @customConstructor ISBodyPartPanel:new */
    export class ISBodyPartPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      backgroundAlpha: any;

      baseTexture: any;

      bFemale: any;

      bps: any;

      cacheColor: any;

      canSelect: any;

      colorScheme: any;

      defaultAlpha: any;

      deselectedAlpha: any;

      doToolTip: any;

      drawDebugLines: any;

      drawSelectedHitbox: any;

      functionTarget: any;

      lockedSelection: any;

      maxValue: any;

      minValue: any;

      nodeAlpha: any;

      nodes: any;

      onPartSelected: any;

      outlineTex: any;

      player: any;

      playerNum: any;

      selectedAlpha: any;

      selectedBp: any;

      selectlines: any;

      toolTipText: any;

      constructor(player: any, x: any, y: any, target: any, onPartSelected: any);

      activateToolTip: (() => any) | any;

      createChildren: (() => any) | any;

      deactivateToolTip: (() => any) | any;

      deselect: (() => any) | any;

      drawLineLeft: ((x: any, y: any) => any) | any;

      enableNodes: ((_nodeTex: any, _nodeOutlineTex: any) => any) | any;

      getBodyPartColor: ((_bodyPartType: any) => any) | any;

      getPartForCoordinate: ((mx: any, my: any) => any) | any;

      getRgbForValue: ((_val: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      overrideNodeTexture: ((_bodyPartType: any, _nodeTex: any, _nodeOutlineTex: any) => any) | any;

      render: (() => any) | any;

      setAlphas:
        | ((
            _defaultAlpha: any,
            _nodeAlpha: any,
            _selectedAlpha: any,
            _deselectedAlpha: any,
            _backgroundAlpha: any
          ) => any)
        | any;

      setColorForValue: ((_val: any, _color: any) => any) | any;

      setColorScheme: ((_colorScheme: any) => any) | any;

      setEnableSelectLines: ((_b: any, _defaultAnchorX: any, _defaultAnchorY: any) => any) | any;

      setSelected: ((mx: any, my: any, bLock: any) => any) | any;

      setSelectLinesAnchor: ((_anchorX: any, _anchorY: any) => any) | any;

      setToolTip: ((_b: any, _text: any) => any) | any;

      setValue: ((_bodyPartType: any, _value: any, _force: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.BodyParts.ISBodyPartPanel {}
}
