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
 * File generated at: 2022-07-29T08:39:01.957Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.SurvivalGuide {
    /** @customConstructor ISSurvivalGuideListBox:new */
    export class ISSurvivalGuideListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;
    }

    /** @customConstructor ISSurvivalGuideRichText:new */
    export class ISSurvivalGuideRichText extends lua.client.ISUI.ISRichTextPanel {
      [id: string]: any;
      static [id: string]: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      yScrollDelta: any;

      constructor(x: any, y: any, width: any, height: any);

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirLeft: ((joypadData: any) => any) | any;

      onJoypadDirRight: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      prerender: (() => any) | any;

      updateSmoothScrolling: (() => any) | any;
    }

    /** @customConstructor ISSurvivalGuideRightPanel:new */
    export class ISSurvivalGuideRightPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      richText: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onTickBox: ((index: any, selected: any) => any) | any;
    }

    /** @customConstructor ISTutorialPanel:new */
    export class ISTutorialPanel extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      centerText: any;

      chapterList: any;

      content: any;

      moreInfo: any;

      rightPanel: any;

      rightPanelText: any;

      tutorialSetInfo: any;

      visibleFunction: any;

      visibleTarget: any;

      constructor(x: any, y: any, width: any, height: any);

      close: (() => any) | any;

      createChildren: (() => any) | any;

      fillChapterList: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onToggleVisible: (() => any) | any;

      prerender: (() => any) | any;

      reload: (() => any) | any;

      render: (() => any) | any;

      setPage: ((pageNum: any) => any) | any;

      setUseJoypad: ((useJoypad: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.SurvivalGuide.ISTutorialPanel {}
}
