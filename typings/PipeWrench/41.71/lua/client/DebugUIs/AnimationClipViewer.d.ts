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
 * File generated at: 2022-07-29T08:38:58.988Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor AnimationClipViewer:new */
    export class AnimationClipViewer extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animate: any;

      bottomPanel: any;

      buttonOptions: any;

      filter: any;

      filterText: any;

      listBox: any;

      optionsPanel: any;

      scene: any;

      speedScale: any;

      timeline: any;

      toolBar: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      createToolbar: (() => any) | any;

      getCurrentFrame: (() => any) | any;

      getCurrentTime: (() => any) | any;

      getDuration: (() => any) | any;

      getFPS: (() => any) | any;

      getLastFrame: (() => any) | any;

      onExit: ((button: any, x: any, y: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onOptions: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSpeedScaleChanged: ((speed: any, slider: any) => any) | any;

      render: (() => any) | any;

      resetView: (() => any) | any;

      setClipList: (() => any) | any;

      showUI: (() => any) | any;

      update: (() => any) | any;
    }

    /** @customConstructor AnimationClipViewer_ListBox:new */
    export class AnimationClipViewer_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      indexOf: ((text: any) => any) | any;
    }

    /** @customConstructor AnimationClipViewer_OptionsPanel:new */
    export class AnimationClipViewer_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any) => any) | any;
    }

    /** @customConstructor AnimationClipViewer_Scene:new */
    export class AnimationClipViewer_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      rotate: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseDown: ((x: any, y: any) => any) | any;

      prerenderEditor: (() => any) | any;
    }

    /** @customConstructor AnimationClipViewer_Timeline:new */
    export class AnimationClipViewer_Timeline extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      keyframeTimes: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.AnimationClipViewer {
    /** @noSelf */
    export const AnimationViewerState_InitUI: (() => any) | any;
  }
}
