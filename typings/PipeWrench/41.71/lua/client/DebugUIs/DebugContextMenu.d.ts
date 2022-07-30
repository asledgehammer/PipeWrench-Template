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
 * File generated at: 2022-07-29T08:38:59.101Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    export class DebugContextMenu {
      private constructor();

      static [id: string]: any;

      static addRBDebugMenu: ((context: any, building: any) => any) | any;

      static addRVSDebugMenu: ((context: any, square: any) => any) | any;

      static addRZSDebugMenu: ((context: any, square: any) => any) | any;

      static do3DItem: (() => any) | any;

      static doCheatMenu: ((context: any, playerObj: any) => any) | any;

      static doDebugCorpseMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static doDebugMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static doDebugObjectMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static doDebugZombieMenu: ((player: any, context: any, worldobjects: any, test: any) => any) | any;

      static doRandomizedBuilding: ((building: any, RBdef: any) => any) | any;

      static doRandomizedVehicleStory: ((square: any, rvs: any) => any) | any;

      static doRandomizedZoneStory: ((square: any, rzs: any) => any) | any;

      static onAttachedItems: ((playerObj: any) => any) | any;

      static OnBBQSetFuel: ((obj: any) => any) | any;

      static OnBBQZeroFuel: ((obj: any) => any) | any;

      static OnBendFence: ((worldobjects: any, fence: any) => any) | any;

      static OnBreakFence: ((worldobjects: any, fence: any) => any) | any;

      static OnCampfireSetFuel: ((obj: any) => any) | any;

      static OnCampfireZeroFuel: ((obj: any) => any) | any;

      static onCheat: ((player: any, cheat: any) => any) | any;

      static OnDeadBodyRemove: ((body: any) => any) | any;

      static OnDeadBodyToggleCrawling: ((body: any) => any) | any;

      static OnDeadBodyToggleFakeDead: ((body: any) => any) | any;

      static onDebugInterpolationUI: ((square: any) => any) | any;

      static onDebugPlayerInterpolationUI: ((square: any) => any) | any;

      static OnDoorLock: ((worldobjects: any, door: any) => any) | any;

      static OnFireplaceSetFuel: ((obj: any) => any) | any;

      static OnFireplaceZeroFuel: ((obj: any) => any) | any;

      static onGenerateLootUI: ((playerObj: any) => any) | any;

      static OnGeneratorSetFuel: ((obj: any) => any) | any;

      static OnGetBuildingKey: ((worldobjects: any, player: any) => any) | any;

      static OnGetDoorKey: ((worldobjects: any, door: any, player: any) => any) | any;

      static onHordeManager: ((square: any, player: any) => any) | any;

      static onMakeNoise: ((square: any, playerObj: any) => any) | any;

      static OnMannequinCreateItem: ((script: any) => any) | any;

      static OnMannequinSetScript: ((obj: any, script: any) => any) | any;

      static OnMetalDrumSetWater: ((obj: any) => any) | any;

      static OnMetalDrumZeroWater: ((obj: any) => any) | any;

      static OnRainBarrelSetWater: ((obj: any) => any) | any;

      static OnRainBarrelZeroWater: ((obj: any) => any) | any;

      static OnReanimateCorpse: ((body: any) => any) | any;

      static OnRemoveAllZombies: ((zombie: any) => any) | any;

      static OnRemoveAllZombiesClient: ((zombie: any) => any) | any;

      static onRemoveItemTool: ((playerObj: any) => any) | any;

      static onRemoveVehicles: ((zone: any) => any) | any;

      static onRunningUI: ((playerObj: any) => any) | any;

      static OnSelectedZombieKnockDown: ((hitFromBehind: any) => any) | any;

      static OnSelectedZombieToggleCanCrawlUnderVehicle: (() => any) | any;

      static OnSelectedZombieToggleCanWalk: (() => any) | any;

      static OnSelectedZombieToggleCrawling: (() => any) | any;

      static OnSelectedZombieToggleFakeDead: (() => any) | any;

      static OnSelectedZombieToggleUseless: (() => any) | any;

      static OnSelectedZombieWalk: ((square: any) => any) | any;

      static OnSelectZombie: ((zombie: any) => any) | any;

      static onSetAlarm: ((def: any) => any) | any;

      static OnSetCompost: ((worldobjects: any, obj: any) => any) | any;

      static OnSetDoorKeyID: ((worldobjects: any, door: any) => any) | any;

      static OnSetZombieOnFire: ((zombie: any) => any) | any;

      static onSpawnPoints: ((square: any, player: any) => any) | any;

      static onSpawnSurvivorHorde: ((playerObj: any) => any) | any;

      static onSpawnVehicle: ((playerObj: any) => any) | any;

      static onTeleportUI: ((playerObj: any) => any) | any;

      static onTeleportValid: ((button: any, x: any, y: any, z: any) => any) | any;

      static onTick: (() => any) | any;

      static onTilesPicker: ((playerObj: any) => any) | any;

      static OnUnbendFence: ((worldobjects: any, fence: any) => any) | any;

      static OnWindowGlassRemoved: ((worldobjects: any, window: any) => any) | any;

      static OnWindowLock: ((worldobjects: any, window: any) => any) | any;

      static OnWindowPermLock: ((worldobjects: any, window: any) => any) | any;

      static OnWindowSmash: ((worldobjects: any, window: any) => any) | any;

      static pickSquare: ((x: any, y: any) => any) | any;

      static stagger: ((player: any, stag: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugContextMenu {}
}
