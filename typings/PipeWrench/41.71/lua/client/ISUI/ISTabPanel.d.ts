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
 * File generated at: 2022-07-29T08:39:00.617Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTabPanel:new */
    export class ISTabPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static fromOutside: any;

      static mouseOut: any;

      static viewDraggin: any;

      static viewDragging: any;

      static xMouse: any;

      static yMouse: any;

      activeView: any;

      allowDraggingTabs: any;

      allowTornOffTabs: any;

      blinkTabAlpha: any;

      blinkTabAlphaIncrease: any;

      blinkTabs: any;

      centerTabs: any;

      draggingTab: any;

      equalTabWidth: any;

      isDragging: any;

      maxLength: any;

      scrollX: any;

      smoothScrollTargetX: any;

      smoothScrollX: any;

      tabHeight: any;

      tabPadX: any;

      tabTornOff: any;

      tabTornOffTarget: any;

      tabTransparency: any;

      textTransparency: any;

      viewList: any;

      constructor(x: any, y: any, width: any, height: any);

      activateView: ((viewName: any) => any) | any;

      addView: ((name: any, view: any) => any) | any;

      ensureVisible: ((index: any) => any) | any;

      getActiveView: (() => any) | any;

      getActiveViewIndex: (() => any) | any;

      getScrollButtonAtX: ((x: any) => any) | any;

      getTabIndexAtX: ((x: any, scrollX: any) => any) | any;

      getTabX: ((tabIndex: any, scrollX: any) => any) | any;

      getView: ((viewName: any) => any) | any;

      getWidthOfAllTabs: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      removeView: ((view: any) => any) | any;

      render: (() => any) | any;

      setCenterTabs: ((center: any) => any) | any;

      setEqualTabWidth: ((equal: any) => any) | any;

      setOnTabTornOff: ((target: any, method: any) => any) | any;

      setTabsTransparency: ((alpha: any) => any) | any;

      setTextTransparency: ((alpha: any) => any) | any;

      updateSmoothScrolling: (() => any) | any;

      static redoTab: ((self: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTabPanel {}
}
