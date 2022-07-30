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
 * File generated at: 2022-07-29T08:39:00.248Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISContextMenu:new */
    export class ISContextMenu extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static globalPlayerContext: any;

      addedDefaultOptions: any;

      arrowDown: any;

      arrowUp: any;

      backgroundColorMouseOver: any;

      blinkAlpha: any;

      blinkAlphaIncrease: any;

      currentOptionRect: any;

      font: any;

      fontHgt: any;

      forceVisible: any;

      itemHgt: any;

      keepOnScreen: any;

      mouseOut: any;

      numOptions: any;

      optionPool: any;

      options: any;

      padTopBottom: any;

      padY: any;

      parent: any;

      player: any;

      scrollAreaHeight: any;

      scrollIndicatorHgt: any;

      slideGoalDY: any;

      slideGoalTime: any;

      slideGoalX: any;

      slideGoalY: any;

      subMenu: any;

      subOptionNums: any;

      tickTexture: any;

      toolTip: any;

      visibleCheck: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any, zoom: any);

      addActionsOption:
        | ((
            text: any,
            getActionsFunction: any,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any,
            arg7: any,
            arg8: any,
            arg9: any,
            arg10: any
          ) => any)
        | any;

      addDefaultOptions: (() => any) | any;

      addOption:
        | ((
            name: any,
            target: any,
            onSelect: any,
            param1: any,
            param2: any,
            param3: any,
            param4: any,
            param5: any,
            param6: any,
            param7: any,
            param8: any,
            param9: any,
            param10: any
          ) => any)
        | any;

      addOptionOnTop:
        | ((
            name: any,
            target: any,
            onSelect: any,
            param1: any,
            param2: any,
            param3: any,
            param4: any,
            param5: any,
            param6: any,
            param7: any,
            param8: any,
            param9: any,
            param10: any
          ) => any)
        | any;

      addSubMenu: ((option: any, menu: any) => any) | any;

      allocOption:
        | ((
            name: any,
            target: any,
            onSelect: any,
            param1: any,
            param2: any,
            param3: any,
            param4: any,
            param5: any,
            param6: any,
            param7: any,
            param8: any,
            param9: any,
            param10: any
          ) => any)
        | any;

      calcHeight: (() => any) | any;

      calcWidth: (() => any) | any;

      clear: (() => any) | any;

      closeAll: (() => any) | any;

      displayAncestor: ((ancestor: any) => any) | any;

      displaySubMenu: ((subMenu: any, option: any) => any) | any;

      ensureVisible: (() => any) | any;

      getDefaultOptionCount: (() => any) | any;

      getIndexAt: ((x: any, y: any) => any) | any;

      getIndexForSubMenu: ((subMenu: any) => any) | any;

      getItemY: ((index: any) => any) | any;

      getNew: ((parentContext: any) => any) | any;

      getOptionFromName: ((name: any) => any) | any;

      getRootY: (() => any) | any;

      getScrollAreaHeight: (() => any) | any;

      getSubInstance: ((num: any) => any) | any;

      getSubMenu: ((num: any) => any) | any;

      hideAndChildren: (() => any) | any;

      hideSelf: (() => any) | any;

      hideSelfAndChildren2: (() => any) | any;

      hideToolTip: (() => any) | any;

      isAnyVisible: (() => any) | any;

      isEmpty: (() => any) | any;

      isMouseOut: (() => any) | any;

      isOptionSingleMenu: (() => any) | any;

      onFocus: ((x: any, y: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      removeLastOption: (() => any) | any;

      render: (() => any) | any;

      setFont: ((font: any) => any) | any;

      setFontFromOption: (() => any) | any;

      setOptionChecked: ((option: any, checked: any) => any) | any;

      setSlideGoalX: ((startX: any, finalX: any) => any) | any;

      setSlideGoalY: ((startY: any, finalY: any) => any) | any;

      showTooltip: ((option: any) => any) | any;

      topmostMenuWithMouse: ((x: any, y: any) => any) | any;

      updateSlideGoalX: (() => any) | any;

      updateSlideGoalY: (() => any) | any;

      static get: ((player: any, x: any, y: any) => any) | any;

      static noise: ((msg: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISContextMenu {}
}
