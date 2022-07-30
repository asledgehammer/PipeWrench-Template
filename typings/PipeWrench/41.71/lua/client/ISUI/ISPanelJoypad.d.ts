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
 * File generated at: 2022-07-29T08:39:00.517Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPanelJoypad:new */
    export class ISPanelJoypad extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      downX: any;

      downY: any;

      ISButtonA: any;

      ISButtonB: any;

      ISButtonX: any;

      ISButtonY: any;

      joypadButtons: any;

      joypadButtonsY: any;

      joypadIndex: any;

      joypadIndexY: any;

      mouseOver: any;

      moveWithMouse: any;

      moving: any;

      constructor(x: any, y: any, width: any, height: any);

      clearJoypadFocus: ((joypadData: any) => any) | any;

      close: (() => any) | any;

      doRightJoystickScrolling: ((dx: any, dy: any) => any) | any;

      ensureVisible: (() => any) | any;

      getClosestChild: ((children: any, x: any) => any) | any;

      getJoypadFocus: (() => any) | any;

      getVisibleChildren: ((joypadIndexY: any) => any) | any;

      insertNewLineOfButtons:
        | ((
            button1: any,
            button2: any,
            button3: any,
            button4: any,
            button5: any,
            button6: any,
            button7: any,
            button8: any,
            button9: any,
            button10: any
          ) => any)
        | any;

      insertNewListOfButtons: ((list: any) => any) | any;

      insertNewListOfButtonsList: ((list: any) => any) | any;

      isFocusOnControl: (() => any) | any;

      noBackground: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      restoreJoypadFocus: ((joypadData: any) => any) | any;

      setISButtonForA: ((button: any) => any) | any;

      setISButtonForB: ((button: any) => any) | any;

      setISButtonForX: ((button: any) => any) | any;

      setISButtonForY: ((button: any) => any) | any;

      setJoypadFocus: ((child: any, joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISPanelJoypad {}
}
