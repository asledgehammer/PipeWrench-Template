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
 * File generated at: 2022-07-29T08:39:02.523Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Tutorial {
    /** @customConstructor BandageStep:new */
    export class BandageStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static blink: any;

      static brother1: any;

      static brother2: any;

      static containers: any;

      static extTimer: any;

      static fences: any;

      static finished: any;

      static isBrothersDead: any;

      static oneDead: any;

      static runned: any;

      static spawnedItems: any;

      static sqDoor: any;

      static sqWindow: any;

      static vaulted: any;

      static vaultedWindow: any;

      static vaultedWrong: any;

      static vaultedWrongZoom: any;

      static window: any;

      constructor();

      OnBrothersDead: (() => any) | any;

      static BandageYourself: (() => any) | any;

      static CheckWindow: (() => any) | any;

      static HealthOpen: (() => any) | any;

      static OpenCurtain: (() => any) | any;

      static spawnBrothers: (() => any) | any;

      static ThroughDoor: (() => any) | any;

      static ThroughWindow: (() => any) | any;

      static Vault: (() => any) | any;
    }

    /** @customConstructor FightStep:new */
    export class FightStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static climbThrough: any;

      static finished: any;

      static floor: any;

      static floor1SQ: any;

      static floor2SQ: any;

      static markerDone: any;

      static momDead: any;

      static momzombie: any;

      static pinInv: any;

      static playerX: any;

      static playerY: any;

      static stopHighlight: any;

      static wasOpen: any;

      static window: any;

      constructor();

      ClimbThroughWindow: (() => any) | any;

      HitZombie: (() => any) | any;

      IsAiming: (() => any) | any;

      KillZombie: (() => any) | any;

      LootKnife: (() => any) | any;

      OnMomDead: ((zed: any) => any) | any;

      OpenWindow: (() => any) | any;

      spawnMom: (() => any) | any;

      WalkToWindow: (() => any) | any;
    }

    /** @customConstructor InventoryLootingStep:new */
    export class InventoryLootingStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static container: any;

      static finished: any;

      constructor();

      focusCorrectPanel: (() => any) | any;

      focusLootingPanel: (() => any) | any;

      haveItem: (() => any) | any;

      haveWater: (() => any) | any;

      openInventoryJoypad: (() => any) | any;
    }

    /** @customConstructor InventoryUseStep:new */
    export class InventoryUseStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static bloodMouse1: any;

      static dontTurn: any;

      static finished: any;

      static lastInventory: any;

      static panContainer: any;

      static sink: any;

      constructor();

      eat: (() => any) | any;

      fillBottle: (() => any) | any;

      focusLootingPanel: (() => any) | any;

      InLocJoypad: (() => any) | any;

      lootWeapon: (() => any) | any;

      seeWeapon: (() => any) | any;

      selectInventory: (() => any) | any;

      static spawnPan: (() => any) | any;
    }

    /** @customConstructor ShotgunStep:new */
    export class ShotgunStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static brotherWakeupTimer: any;

      static finished: any;

      static forceSpawnHorde: any;

      static hassprintedTimer: any;

      static lockedX: any;

      static lockedY: any;

      static outhouseSQ: any;

      static sneaked: any;

      static soundDone: any;

      static soundTimer: any;

      static spawnedHorde: any;

      static squares: any;

      static timeOfDeath: any;

      static vaulted: any;

      constructor();

      Aiming: (() => any) | any;

      isPlayedDead: (() => any) | any;

      isPlayedDeadJoypad: (() => any) | any;

      Shout: (() => any) | any;

      static BackOverFence: (() => any) | any;

      static BrothersDead: (() => any) | any;

      static ClimbedFence: (() => any) | any;

      static OnSquare: (() => any) | any;

      static Outhouse: (() => any) | any;

      static Sprinted: (() => any) | any;

      static SurvivalGuideOpen: (() => any) | any;

      static TheEnd: (() => any) | any;
    }

    /** @customConstructor SneakStep:new */
    export class SneakStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static bag: any;

      static dadzombie: any;

      static finished: any;

      static isDadDead: any;

      static pinInv: any;

      static shotgun: any;

      static sqGate: any;

      static wasSneaking: any;

      constructor();

      CheckBag: (() => any) | any;

      DadDead: (() => any) | any;

      EquippedBag: (() => any) | any;

      EquipShotgun: (() => any) | any;

      GoThroughDoor: (() => any) | any;

      OnDadDead: (() => any) | any;

      OpenGate: (() => any) | any;

      SneakingGate: (() => any) | any;

      spawnDad: (() => any) | any;

      static OnSwingAtDad: ((owner: any, weapon: any, zed: any, dmg: any) => any) | any;

      static setZoom: ((depth: any) => any) | any;

      static Sneak: (() => any) | any;

      static spawnShotgun: (() => any) | any;
    }

    /** @customConstructor WalkToAdjacent:new */
    export class WalkToAdjacent extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static appleContainer: any;

      static finished: any;

      static lastPlayerX: any;

      static lastPlayerY: any;

      static sneaked: any;

      constructor();

      inLoc: (() => any) | any;

      inLoc2: (() => any) | any;

      strafed: (() => any) | any;
    }

    /** @customConstructor WelcomeStep:new */
    export class WelcomeStep extends lua.client.Tutorial.TutorialStep {
      [id: string]: any;
      static [id: string]: any;

      static finished: any;

      constructor();
    }

    export class TutorialTests {
      private constructor();

      static [id: string]: any;

      static addHoming: ((sq: any, yoffset: any, xoffset: any, color: any) => any) | any;

      static addMarker: ((sq: any, size: any) => any) | any;

      static HealthOpen: (() => any) | any;

      static highlight: ((obj: any, thickness: any) => any) | any;

      static LookedAround: (() => any) | any;

      static NotSkillsPage: (() => any) | any;

      static PlayerInfoOpen: (() => any) | any;

      static RemoveMarkers: (() => any) | any;

      static SkillsPage: (() => any) | any;

      static stopHighlight: ((obj: any) => any) | any;

      static ZoomedIn: (() => any) | any;

      static ZoomedOut: (() => any) | any;
    }
  }
  export namespace lua.client.Tutorial.Steps {}
}
