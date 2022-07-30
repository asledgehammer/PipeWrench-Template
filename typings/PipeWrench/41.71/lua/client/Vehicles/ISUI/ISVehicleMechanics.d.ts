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
 * File generated at: 2022-07-29T08:39:02.642Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleMechanics:new */
    export class ISVehicleMechanics extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static alphaOverlay: any;

      static alphaOverlayInc: any;

      static cheat: any;

      bodyworklist: any;

      checkEngine: any;

      chr: any;

      context: any;

      drawJoypadFocus: any;

      flashFailure: any;

      flashTimer: any;

      flashTimerAlpha: any;

      flashTimerAlphaInc: any;

      generalCondition: any;

      generalCondRGB: any;

      hidetooltip: any;

      leftListHasFocus: any;

      leftListSelection: any;

      listbox: any;

      listWidth: any;

      minimumHeight: any;

      partCatRGB: any;

      partRGB: any;

      playerNum: any;

      rightListSelection: any;

      selected: any;

      tooltip: any;

      usedHood: any;

      vehicle: any;

      vehiclePart: any;

      xCarTexOffset: any;

      constructor(x: any, y: any, character: any, vehicle: any);

      checkEngineFull: (() => any) | any;

      doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      doMenuTooltip: ((part: any, option: any, lua: any, name: any) => any) | any;

      doPartContextMenu: ((part: any, x: any, y: any) => any) | any;

      getConditionRGB: ((condition: any) => any) | any;

      getMouseOverPart: ((x: any, y: any) => any) | any;

      initParts: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      isMouseOverPart: ((x: any, y: any, part: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onListboxJoypadDirDown: ((listbox: any) => any) | any;

      onListboxJoypadDirUp: ((listbox: any) => any) | any;

      onListMouseDown: ((x: any, y: any) => any) | any;

      onListRightMouseUp: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      recalculGeneralCondition: (() => any) | any;

      renderCarOverlay: (() => any) | any;

      renderCarOverlayTooltip: ((partProps: any, part: any, carType: any) => any) | any;

      renderPartDetail: ((part: any) => any) | any;

      roundContainerContentAmount: ((part: any) => any) | any;

      selectPart: ((part: any) => any) | any;

      setVisible: ((bVisible: any, joypadData: any) => any) | any;

      startFlashGreen: (() => any) | any;

      startFlashRed: (() => any) | any;

      update: (() => any) | any;

      updateLayout: (() => any) | any;

      static onCheatGetKey: ((playerObj: any, vehicle: any) => any) | any;

      static onCheatHotwire: ((playerObj: any, vehicle: any, hotwired: any, broken: any) => any) | any;

      static onCheatRemove: ((playerObj: any, vehicle: any) => any) | any;

      static onCheatRemoveAux: ((dummy: any, button: any, playerObj: any, vehicle: any) => any) | any;

      static onCheatRepair: ((playerObj: any, vehicle: any) => any) | any;

      static onCheatRepairPart: ((playerObj: any, part: any) => any) | any;

      static onCheatSetCondition: ((playerObj: any, part: any) => any) | any;

      static onCheatSetConditionAux: ((target: any, button: any, playerObj: any, part: any) => any) | any;

      static onCheatSetContentAmount: ((playerObj: any, part: any) => any) | any;

      static onCheatSetContentAmountAux: ((target: any, button: any, playerObj: any, part: any) => any) | any;

      static onCheatSetRust: ((playerObj: any, vehicle: any) => any) | any;

      static onCheatSetRustAux: ((target: any, button: any, playerObj: any, vehicle: any) => any) | any;

      static onCheatToggle: ((playerObj: any) => any) | any;

      static onConfigHeadlight: ((playerObj: any, part: any, dir: any) => any) | any;

      static OnMechanicActionDone:
        | ((chr: any, success: any, vehicleId: any, partId: any, itemId: any, installing: any) => any)
        | any;

      static onRepairEngine: ((playerObj: any, part: any) => any) | any;

      static onTakeEngineParts: ((playerObj: any, part: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleMechanics {}
}
