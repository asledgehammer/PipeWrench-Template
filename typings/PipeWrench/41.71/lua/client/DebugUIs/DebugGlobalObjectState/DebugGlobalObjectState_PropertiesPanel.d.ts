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
 * File generated at: 2022-07-29T08:38:59.128Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectState_BasePropertiesPanel:new */
    export class DebugGlobalObjectState_BasePropertiesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      constructor(x: any, y: any, w: any, h: any);

      addLine: ((text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      postrender: (() => any) | any;

      render: (() => any) | any;

      renderKeyValue: ((k: any, v: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_GlobalObjectPanel:new */
    export class DebugGlobalObjectState_GlobalObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      objectPos: any;

      system: any;

      render1: (() => any) | any;

      setObject: ((globalObject: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_IsoObjectPanel:new */
    export class DebugGlobalObjectState_IsoObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      objectPos: any;

      system: any;

      render1: (() => any) | any;

      setObject: ((globalObject: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_PropertiesPanel:new */
    export class DebugGlobalObjectState_PropertiesPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      state: any;

      system: any;

      constructor(x: any, y: any, width: any, height: any, state: any);

      createChildren: (() => any) | any;

      setObject: ((globalObject: any) => any) | any;

      setSystem: ((system: any) => any) | any;
    }

    /** @customConstructor DebugGlobalObjectState_SystemPanel:new */
    export class DebugGlobalObjectState_SystemPanel extends lua.client.DebugUIs.DebugGlobalObjectState
      .DebugGlobalObjectState_BasePropertiesPanel {
      [id: string]: any;
      static [id: string]: any;

      system: any;

      constructor(x: any, y: any, w: any, h: any);

      render1: (() => any) | any;

      setSystem: ((system: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectState_PropertiesPanel {}
}
