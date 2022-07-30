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
 * File generated at: 2022-07-29T08:39:02.841Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor HealthPanelAction:new */
    export class HealthPanelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      args: any;

      handler: any;

      constructor(
        character: any,
        handler: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any
      );
    }

    /** @customConstructor ISHealthBodyPartListBox:new */
    export class ISHealthBodyPartListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseUp: ((x: any, y: any) => any) | any;
    }

    /** @customConstructor ISHealthBodyPartPanel:new */
    export class ISHealthBodyPartPanel extends lua.client.ISUI.BodyParts.ISBodyPartPanel {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any, x: any, y: any);

      cbSetSelected: ((bp: any) => any) | any;
    }

    /** @customConstructor ISHealthPanel:new */
    export class ISHealthPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      abutton: any;

      actions: any;

      allTextHeight: any;

      blockingAlpha: any;

      blockingMessage: any;

      bodyPartAction: any;

      bodyPartPanel: any;

      character: any;

      characterX: any;

      characterY: any;

      damagedParts: any;

      doctorLevel: any;

      fitness: any;

      healthPanel: any;

      listbox: any;

      otherPlayer: any;

      otherPlayerX: any;

      otherPlayerY: any;

      playerNum: any;

      progressBarLoaded: any;

      textRight: any;

      constructor(player: any, x: any, y: any, width: any, height: any);

      checkContainerItems: ((container: any, childContainers: any, handlers: any) => any) | any;

      checkItems: ((handlers: any) => any) | any;

      createChildren: (() => any) | any;

      doBodyPartContextMenu: ((bodyPart: any, x: any, y: any) => any) | any;

      drawText: ((str: any, x: any, y: any, r: any, g: any, b: any, a: any, font: any) => any) | any;

      dropItemsOnBodyPart: ((bodyPart: any, items: any) => any) | any;

      getDamagedParts: (() => any) | any;

      getDoctor: (() => any) | any;

      getPatient: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setBodyPartAction: ((bodyPart: any, args: any) => any) | any;

      setOtherPlayer: ((playerObj: any) => any) | any;

      toPlayerInventory: ((playerObj: any, item: any, bodyPart: any) => any) | any;

      update: (() => any) | any;

      updateBodyPartList: (() => any) | any;

      static DidPatientMove: ((doctor: any, patient: any, patientX: any, patientY: any) => any) | any;

      static getBandageType: ((bodyPart: any) => any) | any;

      static onCheat: ((bodyPart: any, action: any, player: any, otherPlayer: any) => any) | any;

      static onCheatItem: ((itemType: any, playerObj: any) => any) | any;

      static setBodyPartActionForPlayer:
        | ((playerObj: any, bodyPart: any, action: any, jobType: any, args: any) => any)
        | any;
    }

    /** @customConstructor ISNewHealthPanel:new */
    export class ISNewHealthPanel extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      constructor(x: any, y: any, character: any);

      onClick: ((button: any) => any) | any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISHealthPanel {}
}
