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
 * File generated at: 2022-07-29T08:39:02.589Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor EditVehicleUI:new */
    export class EditVehicleUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      bottomPanel: any;

      editCombo: any;

      editUI: any;

      scene: any;

      scriptCombo: any;

      views: any;

      wroteScriptLabel: any;

      wroteScriptTime: any;

      constructor(x: any, y: any, width: any, height: any);

      alignEverythingToGrid: (() => any) | any;

      createChildren: (() => any) | any;

      onComboEdit: (() => any) | any;

      onComboVehicle: (() => any) | any;

      onExit: ((button: any, x: any, y: any) => any) | any;

      onReload: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSave: ((button: any, x: any, y: any) => any) | any;

      setEditUI: ((ui: any) => any) | any;

      setScript: ((scriptName: any) => any) | any;

      showUI: (() => any) | any;

      update: (() => any) | any;

      wroteScript: ((fileName: any) => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditArea:new */
    export class EditVehicleUI_EditArea extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      button: any;

      buttonAlign: any;

      gizmo: any;

      list: any;

      originalXYWH: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      getSelectedAreas: (() => any) | any;

      onAlignToExtents: (() => any) | any;

      onToggleGizmo: (() => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditAttachment:new */
    export class EditVehicleUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      belowList: any;

      button3: any;

      button4: any;

      buttonDeleteAttachment: any;

      buttonNewAttachment: any;

      gizmo: any;

      list: any;

      nameEntry: any;

      originalOffset: any;

      originalRotate: any;

      selectedAttachment: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doLayout: (() => any) | any;

      getSelectedAttachmentIds: (() => any) | any;

      getSelectedAttachments: (() => any) | any;

      getUniqueAttachmentId: ((modelScript: any) => any) | any;

      onDeleteAttachment: ((button: any, x: any, y: any) => any) | any;

      onNameEntered: (() => any) | any;

      onNewAttachment: ((button: any, x: any, y: any) => any) | any;

      onToggleGizmo: (() => any) | any;

      onToggleGlobalLocal: (() => any) | any;

      setSelectedAttachment: ((attach: any) => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditChassis:new */
    export class EditVehicleUI_EditChassis extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      originalCenterOfMassOffset: any;

      originalChassisExtents: any;

      originalExtents: any;

      originalModelOffset: any;

      originalModelScale: any;

      originalShadowExtents: any;

      originalShadowOffset: any;

      tempVector3f_1: any;

      tempVector3f_2: any;

      constructor(x: any, y: any, width: any, height: any);

      addAABB: ((box: any, offset: any, r: any, g: any, b: any) => any) | any;

      addSphere: ((offset: any, radius: any, r: any, g: any, b: any) => any) | any;

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditPanel:new */
    export class EditVehicleUI_EditPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      script: any;

      constructor(x: any, y: any, width: any, height: any);

      createList: ((x: any, y: any, w: any, h: any) => any) | any;

      isScaleVehicle: (() => any) | any;

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

      prerenderEditor: (() => any) | any;

      toUI: (() => any) | any;

      updateEditor: (() => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditPassenger:new */
    export class EditVehicleUI_EditPassenger extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      list2: any;

      originalOffset: any;

      selectedPassenger: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doDrawItem2: ((y: any, item: any, alt: any) => any) | any;

      getSelectedPositionIds: (() => any) | any;

      getSelectedPositions: (() => any) | any;

      prerenderEditor2: (() => any) | any;

      setSelectedPassenger: ((pngr: any) => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditPhysics:new */
    export class EditVehicleUI_EditPhysics extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      button4: any;

      list: any;

      list2: any;

      originalValue: any;

      selectedShape: any;

      transformMode: any;

      constructor(x: any, y: any, width: any, height: any);

      addAABB: ((extents: any, offset: any, r: any, g: any, b: any) => any) | any;

      addSphere: ((offset: any, radius: any, r: any, g: any, b: any) => any) | any;

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doDrawItem2: ((y: any, item: any, alt: any) => any) | any;

      getSelectedShapes: (() => any) | any;

      indexOfShape: ((shape: any) => any) | any;

      onToggleGlobalLocal: (() => any) | any;

      prerenderEditor2: (() => any) | any;

      setSelectedShape: ((shape: any) => any) | any;
    }

    /** @customConstructor EditVehicleUI_EditWheel:new */
    export class EditVehicleUI_EditWheel extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      originalOffset: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      getSelectedWheels: (() => any) | any;
    }

    /** @customConstructor EditVehicleUI_ListBox:new */
    export class EditVehicleUI_ListBox extends lua.client.ISUI.ISScrollingListBox {
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

    /** @customConstructor EditVehicleUI_Scene:new */
    export class EditVehicleUI_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      gizmoAxis: any;

      gizmoClickScenePos: any;

      gizmoStartScenePos: any;

      constructor(x: any, y: any, width: any, height: any);

      onGizmoAccept: (() => any) | any;

      onGizmoCancel: (() => any) | any;

      onGizmoChanged: ((delta: any) => any) | any;

      onGizmoStart: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      prerenderEditor: (() => any) | any;
    }

    /** @customConstructor EditVehicleUI_SwitchView:new */
    export class EditVehicleUI_SwitchView extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      constructor(editor: any, x: any, y: any, width: any, height: any);

      onMouseMoveOutside: ((dx: any, dy: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.EditVehicleState {
    /** @noSelf */
    export const EditVehicleState_InitUI: (() => any) | any;
  }
}
