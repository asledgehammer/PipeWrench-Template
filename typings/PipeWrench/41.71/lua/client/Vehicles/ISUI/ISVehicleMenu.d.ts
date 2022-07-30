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
 * File generated at: 2022-07-29T08:39:02.652Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Vehicles.ISUI {
    export class ISVehicleMenu {
      private constructor();

      static [id: string]: any;

      static addSetScriptMenu: ((context: any, playerObj: any, vehicle: any) => any) | any;

      static doTowingMenu: ((playerObj: any, vehicle: any, menu: any) => any) | any;

      static FillMenuOutsideVehicle: ((player: any, context: any, vehicle: any, test: any) => any) | any;

      static FillPartMenu: ((playerIndex: any, context: any, slice: any, vehicle: any) => any) | any;

      static getBestSwitchSeatEnter: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static getBestSwitchSeatExit: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static getNextTire: ((currentTire: any) => any) | any;

      static getVehicleDisplayName: ((vehicle: any) => any) | any;

      static getVehicleToInteractWith: ((playerObj: any) => any) | any;

      static moveItemsFromSeat: ((playerObj: any, vehicle: any, seat: any, moveThem: any, doEnter: any) => any) | any;

      static moveItemsOnSeat:
        | ((seat: any, newSeat: any, playerObj: any, moveThem: any, itemListIndex: any) => any)
        | any;

      static onAttachTrailer: ((playerObj: any, vehicle: any, attachmentA: any, attachmentB: any) => any) | any;

      static onCloseDoor: ((playerObj: any, part: any) => any) | any;

      static onConfirmSleep: ((this: any, button: any, player: any, bed: any) => any) | any;

      static onDebugAngles: ((playerObj: any, vehicle: any) => any) | any;

      static onDebugBlood: ((playerObj: any, vehicle: any) => any) | any;

      static onDebugColor: ((playerObj: any, vehicle: any) => any) | any;

      static onDebugEditor: ((playerObj: any, vehicle: any) => any) | any;

      static onDebugSetScript: ((playerObj: any, vehicle: any, scriptName: any) => any) | any;

      static onDetachTrailer: ((playerObj: any, vehicle: any, attachmentA: any) => any) | any;

      static onEnter: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static onEnter2: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static onEnterAux: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static onEnterAux2: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static onExit: ((playerObj: any, seatFrom: any) => any) | any;

      static onExitAux: ((playerObj: any, seat: any) => any) | any;

      static OnFillWorldObjectContextMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static onHorn: ((playerObj: any) => any) | any;

      static onHornStart: ((playerObj: any) => any) | any;

      static onHornStop: ((playerObj: any) => any) | any;

      static onHotwire: ((playerObj: any) => any) | any;

      static onInfo: ((playerObj: any, vehicle: any) => any) | any;

      static onKeyPressed: ((key: any) => any) | any;

      static onKeyStartPressed: ((key: any) => any) | any;

      static onLightbar: ((playerObj: any) => any) | any;

      static onLockDoor: ((playerObj: any, part: any) => any) | any;

      static onMechanic: ((playerObj: any, vehicle: any) => any) | any;

      static onOpenDoor: ((playerObj: any, part: any) => any) | any;

      static onRemoveBurntVehicle: ((player: any, vehicle: any) => any) | any;

      static onRoadtrip: ((playerObj: any) => any) | any;

      static onShowSeatUI: ((playerObj: any, vehicle: any) => any) | any;

      static onShutOff: ((playerObj: any) => any) | any;

      static onSignalDevice: ((playerObj: any, part: any) => any) | any;

      static onSleep: ((playerObj: any, vehicle: any) => any) | any;

      static onStartEngine: ((playerObj: any) => any) | any;

      static onSwitchSeat: ((playerObj: any, seatTo: any) => any) | any;

      static onToggleHeadlights: ((playerObj: any) => any) | any;

      static onToggleHeater: ((playerObj: any) => any) | any;

      static onToggleTrunkLocked: ((playerObj: any) => any) | any;

      static onUnlockDoor: ((playerObj: any, part: any) => any) | any;

      static onWalkPath: ((playerObj: any) => any) | any;

      static onWash: ((playerObj: any, vehicle: any) => any) | any;

      static processEnter: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static processEnter2: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static processShiftEnter: ((playerObj: any, vehicle: any, seat: any) => any) | any;

      static showRadialMenu: ((playerObj: any) => any) | any;

      static showRadialMenuOutside: ((playerObj: any) => any) | any;

      static tryMoveItemsFromSeat:
        | ((
            playerObj: any,
            vehicle: any,
            seat: any,
            moveThem: any,
            doEnter: any,
            seatTo: any,
            itemListIndex: any
          ) => any)
        | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleMenu {}
}
