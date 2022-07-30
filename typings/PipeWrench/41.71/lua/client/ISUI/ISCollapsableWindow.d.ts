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
 * File generated at: 2022-07-29T08:39:00.214Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCollapsableWindow:new */
    export class ISCollapsableWindow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      clearStentil: any;

      closeButton: any;

      closeButtonTexture: any;

      collapseButton: any;

      collapseButtonTexture: any;

      collapseCounter: any;

      drawFrame: any;

      infoBtn: any;

      infoButton: any;

      infoRichText: any;

      infoText: any;

      invbasic: any;

      isCollapsed: any;

      pinButton: any;

      pinButtonTexture: any;

      resizable: any;

      resizeimage: any;

      resizeWidget: any;

      resizeWidget2: any;

      statusbarbkg: any;

      title: any;

      titlebarbkg: any;

      titleFont: any;

      titleFontHgt: any;

      viewList: any;

      widgetTextureColor: any;

      constructor(x: any, y: any, width: any, height: any);

      addView: ((view: any) => any) | any;

      collapse: (() => any) | any;

      createChildren: (() => any) | any;

      getTitle: (() => any) | any;

      getViews: (() => any) | any;

      onInfo: (() => any) | any;

      pin: (() => any) | any;

      render: (() => any) | any;

      resizeWidgetHeight: (() => any) | any;

      RestoreLayout: ((name: any, layout: any) => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      setDrawFrame: ((visible: any) => any) | any;

      setInfo: ((text: any) => any) | any;

      setResizable: ((resizable: any) => any) | any;

      setTitle: ((title: any) => any) | any;

      titleBarHeight: (() => any) | any;

      uncollapse: (() => any) | any;

      static TitleBarHeight: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISCollapsableWindow {}
}
