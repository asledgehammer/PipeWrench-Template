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
 * File generated at: 2022-07-29T08:38:59.023Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor AttachmentEditorUI:new */
    export class AttachmentEditorUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      bottomPanel: any;

      buttonScale1: any;

      buttonScale2: any;

      buttonScale3: any;

      editUI: any;

      scene: any;

      views: any;

      wroteScriptLabel: any;

      wroteScriptTime: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onExit: ((button: any, x: any, y: any) => any) | any;

      onGridMult1: ((button: any, x: any, y: any) => any) | any;

      onGridMult2: ((button: any, x: any, y: any) => any) | any;

      onGridMult3: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSave: ((button: any, x: any, y: any) => any) | any;

      setEditUI: ((ui: any) => any) | any;

      showUI: (() => any) | any;

      update: (() => any) | any;

      wroteScript: ((fileName: any) => any) | any;
    }

    /** @customConstructor AttachmentEditorUI_EditAttachment:new */
    export class AttachmentEditorUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      belowList: any;

      button3: any;

      button4: any;

      buttonDeleteAttachment: any;

      buttonNewAttachment: any;

      buttonRemoveModel: any;

      comboAddModel: any;

      comboPlayer: any;

      femaleBodyScript: any;

      gizmo: any;

      list: any;

      list2: any;

      maleBodyScript: any;

      nameEntry: any;

      originalOffset: any;

      originalRotate: any;

      selectedAttachment: any;

      selectedBone: any;

      selectedModelScript: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doDrawItem2: ((y: any, item: any, alt: any) => any) | any;

      doLayout: (() => any) | any;

      getSelectedAttachmentIds: (() => any) | any;

      getSelectedAttachments: (() => any) | any;

      getUniqueAttachmentId: ((modelScript: any) => any) | any;

      isBodyScript: ((modelScript: any) => any) | any;

      onComboAddModel: (() => any) | any;

      onComboPlayerModel: (() => any) | any;

      onDeleteAttachment: ((button: any, x: any, y: any) => any) | any;

      onNameEntered: (() => any) | any;

      onNewAttachment: ((button: any, x: any, y: any) => any) | any;

      onRemoveModel: ((button: any, x: any, y: any) => any) | any;

      onRightMouseDownList1: ((x: any, y: any) => any) | any;

      onSetObjectAutoRotate: ((child: any) => any) | any;

      onSetObjectParent: ((child: any, childAttachment: any, parent: any, parentAttachment: any) => any) | any;

      onToggleGizmo: (() => any) | any;

      onToggleGlobalLocal: (() => any) | any;

      pickCharacterBone: (() => any) | any;

      setSelectedAttachment: ((attach: any) => any) | any;

      setSelectedModel: ((modelScript: any) => any) | any;
    }

    /** @customConstructor AttachmentEditorUI_EditPanel:new */
    export class AttachmentEditorUI_EditPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      createList: ((x: any, y: any, w: any, h: any) => any) | any;

      java0: ((func: any) => any) | any;

      java1: ((func: any, arg0: any) => any) | any;

      java2: ((func: any, arg0: any, arg1: any) => any) | any;

      java3: ((func: any, arg0: any, arg1: any, arg2: any) => any) | any;

      java4: ((func: any, arg0: any, arg1: any, arg2: any, arg3: any) => any) | any;

      java6: ((func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any) => any) | any;

      java9:
        | ((
            func: any,
            arg0: any,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any,
            arg7: any,
            arg8: any
          ) => any)
        | any;

      onGizmoAccept: (() => any) | any;

      onGizmoCancel: (() => any) | any;

      onGizmoChanged: ((delta: any) => any) | any;

      onGizmoStart: (() => any) | any;

      onSceneMouseDown: ((x: any, y: any) => any) | any;

      prerenderEditor: (() => any) | any;

      toUI: (() => any) | any;

      updateEditor: (() => any) | any;
    }

    /** @customConstructor AttachmentEditorUI_ListBox:new */
    export class AttachmentEditorUI_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      selectionMode: any;

      constructor(x: any, y: any, width: any, height: any);

      clearSelection: (() => any) | any;

      getSelectedCount: (() => any) | any;

      getSelectedItems: (() => any) | any;

      indexOf: ((text: any) => any) | any;

      iteratorSelected: (() => any) | any;

      setSelectedRow: ((row: any) => any) | any;

      setSelectedRows: ((rows: any) => any) | any;
    }

    /** @customConstructor AttachmentEditorUI_Scene:new */
    export class AttachmentEditorUI_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      gizmoAxis: any;

      gizmoClickScenePos: any;

      gizmoStartScenePos: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      onGizmoAccept: (() => any) | any;

      onGizmoCancel: (() => any) | any;

      onGizmoChanged: ((delta: any) => any) | any;

      onGizmoStart: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      prerenderEditor: (() => any) | any;
    }

    /** @customConstructor AttachmentEditorUI_SwitchView:new */
    export class AttachmentEditorUI_SwitchView extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      constructor(editor: any, x: any, y: any, width: any, height: any);

      onMouseMoveOutside: ((dx: any, dy: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.AttachmentEditorUI {
    /** @noSelf */
    export const AttachmentEditorState_InitUI: (() => any) | any;
  }
}
