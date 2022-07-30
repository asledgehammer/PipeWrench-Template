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
 * File generated at: 2022-07-29T08:38:58.164Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Blacksmith.ISUI {
    export class ISBlacksmithMenu {
      private constructor();

      static [id: string]: any;

      static addToolTip: ((option: any, name: any, texture: any) => any) | any;

      static checkMetalWeldingFurnitures:
        | ((
            metalPipes: any,
            smallMetalSheet: any,
            metalSheet: any,
            hinge: any,
            scrapMetal: any,
            torchUse: any,
            skill: any,
            player: any,
            toolTip: any,
            metalBar: any,
            wire: any
          ) => any)
        | any;

      static checkWire: ((wireUses: any, player: any, toolTip: any) => any) | any;

      static doBuildMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static getBlowTorchWithMostUses: ((container: any) => any) | any;

      static getFenceSprite: ((player: any) => any) | any;

      static getFirstBlowTorchWithUses: ((container: any, uses: any) => any) | any;

      static getMaterialCount: ((playerObj: any, type: any) => any) | any;

      static getMaterialUses: ((playerObj: any, type: any) => any) | any;

      static getMetal: ((player: any, amount: any) => any) | any;

      static onAddFuel: ((worldobjects: any, furnace: any, coal: any, player: any) => any) | any;

      static onAddLogs: ((worldobjects: any, metalDrum: any, player: any) => any) | any;

      static onAnvil: ((worldobjects: any, player: any) => any) | any;

      static onBigLocker: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onBigMetalFence: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onBigMetalFenceGate: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onBigWiredFence: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onDoubleMetalDoor: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onDoublePoleDoor: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onEmptyDrum: ((worldobjects: any, metalDrum: any, playerObj: any) => any) | any;

      static onFenceGate: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onInfo: ((worldobjects: any, furnace: any, player: any) => any) | any;

      static onLightDrumFromKindle:
        | ((worldobjects: any, player: any, percedWood: any, stickOrBranch: any, metalDrum: any) => any)
        | any;

      static onLightDrumFromLiterature:
        | ((worldobjects: any, player: any, literature: any, lighter: any, metalDrum: any, fuelAmt: any) => any)
        | any;

      static onLightDrumFromPetrol:
        | ((worldobjects: any, player: any, lighter: any, petrol: any, metalDrum: any) => any)
        | any;

      static onLightFromKindle:
        | ((worldobjects: any, player: any, percedWood: any, stickOrBranch: any, furnace: any) => any)
        | any;

      static onLightFromLiterature:
        | ((worldobjects: any, player: any, literature: any, lighter: any, furnace: any, fuelAmt: any) => any)
        | any;

      static onLightFromPetrol:
        | ((worldobjects: any, player: any, lighter: any, petrol: any, furnace: any) => any)
        | any;

      static onMetalCounter: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onMetalCounterCorner: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onMetalCrate: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onMetalDrum: ((worldobjects: any, player: any, sprite: any) => any) | any;

      static onMetalFence: ((worldobjects: any, player: any, torchUse: any, sprite: any) => any) | any;

      static onMetalFloor: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onMetalPoleFence: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onMetalShelves: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onMetalWallFrame: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onPutOutFireDrum: ((worldobjects: any, metalDrum: any, player: any) => any) | any;

      static onRemoveCharcoal: ((worldobjects: any, metalDrum: any, player: any) => any) | any;

      static onRemoveDrum: ((worldobjects: any, metalDrum: any, player: any) => any) | any;

      static onRemoveLogs: ((worldobjects: any, metalDrum: any, player: any) => any) | any;

      static onSmallLocker: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static onStoneFurnace: ((worldobjects: any, player: any) => any) | any;

      static onStopFire: ((worldobjects: any, furnace: any, player: any) => any) | any;

      static onUseBellows: ((worldobjects: any, furnace: any, bellows: any, player: any) => any) | any;

      static onWiredFence: ((worldobjects: any, player: any, torchUse: any) => any) | any;

      static weldingRodUses: ((torchUses: any) => any) | any;
    }
  }
  export namespace lua.client.Blacksmith.ISUI.ISBlacksmithMenu {}
}
