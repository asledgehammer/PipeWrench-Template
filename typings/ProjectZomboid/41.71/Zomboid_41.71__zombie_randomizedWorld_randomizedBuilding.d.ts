/**
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
 * File generated at Friday July 2022 15:18:33.684-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.randomizedWorld.randomizedBuilding {
    /**
     * @customConstructor RBBar.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBBar extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBBar {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBBasic.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBBasic extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBBasic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): void
       */
      doProfessionStory(arg0: zombie.iso.BuildingDef, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, RandomizedDeadSurvivorBase arg1): void
       */
      doRandomDeadSurvivorStory(arg0: zombie.iso.BuildingDef, arg1: zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivorProfession(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase>
       */
      getSurvivorStories(): java.util.ArrayList<zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getUniqueRDSSpawned(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBBurnt.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBBurnt extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBBurnt {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBBurntCorpse.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBBurntCorpse extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBBurntCorpse {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBBurntFireman.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBBurntFireman extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBBurntFireman {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBCafe.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBCafe extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBCafe {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBClinic.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBClinic extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBClinic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBHairSalon.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBHairSalon extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBHairSalon {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBKateAndBaldspot.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBKateAndBaldspot extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBKateAndBaldspot {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBLooted.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBLooted extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBLooted {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBOffice.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBOffice extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBOffice {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBOther.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBOther extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBOther {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBPileOCrepe.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBPileOCrepe extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBPileOCrepe {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBPizzaWhirled.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBPizzaWhirled extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBPizzaWhirled {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBSafehouse.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBSafehouse extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBSafehouse {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBSchool.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBSchool extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBSchool {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBShopLooted.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBShopLooted extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBShopLooted {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBSpiffo.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBSpiffo extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBSpiffo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      roomValid(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RBStripclub.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RBStripclub extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RBStripclub {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RandomizedBuildingBase.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase extends zombie.randomizedWorld.RandomizedWorldBase
     */
    export class RandomizedBuildingBase {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBarricade(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.types.HandWeapon
       */
      addRandomRangedWeapon(arg0: zombie.inventory.ItemContainer, arg1: boolean, arg2: boolean, arg3: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | number, arg2?: number, arg3?: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | number | string, arg6?: zombie.iso.IsoDirections | string, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5): zombie.inventory.InventoryItem
       */
      addWorldItem(arg0: string, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject | number, arg3?: number, arg4?: number, arg5?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, Integer arg3, RoomDef arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombies(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: number, arg4: zombie.iso.RoomDef): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDoor
       */
      getDoor(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumRooms(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysDo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoGridSquare arg1): boolean
       */
      isTableFor3DItems(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, boolean arg1): boolean
       */
      isValid(arg0: zombie.iso.BuildingDef, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      randomizeBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysDo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumRooms(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1, int arg2): void
       */
      spawnItemsInContainers(arg0: zombie.iso.BuildingDef, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoBuilding arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.areas.IsoBuilding): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllRBMapChance(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor HumanCorpse.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase$HumanCorpse extends zombie.characters.IsoGameCharacter
     */
    export class RandomizedBuildingBase$HumanCorpse {
      /**
       * Constructors: 
       *  - (IsoCell arg0, float arg1, float arg2, float arg3)
       */
      constructor(arg0: zombie.iso.IsoCell | null, arg1: number, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      Anger(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      ApplyInBedOffset(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, float arg3, int arg4, int arg5, boolean arg6, int arg7, boolean arg8, float arg9, ColorInfo arg10): void
       */
      AttachAnim(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: number, arg10: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0, int arg1, int arg2, boolean arg3, int arg4, boolean arg5, float arg6): void
       *  - (IsoSprite arg0, int arg1, int arg2, boolean arg3, int arg4, boolean arg5, float arg6, ColorInfo arg7): void
       */
      AttachExistingAnim(arg0: zombie.iso.sprite.IsoSprite, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: number, arg7?: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      AttackObject(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      BetaAntiDepress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      BetaBlockers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CacheEquipped(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      Callout(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CanAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      CanSee(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearEquippedCache(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ClearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1): void
       */
      Collision(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Damage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Despawn(): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      DirectionFromVector(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DirtySlice(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       *  - (int arg0, int arg1): number
       */
      DistTo(arg0: zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       */
      DistToProper(arg0: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       *  - (float arg0, float arg1): number
       */
      DistToSquared(arg0: zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoCollideNorS(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoCollideWorE(): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1): void
       *  - (HandWeapon arg0, IsoGameCharacter arg1, boolean arg2): void
       */
      DoDeath(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1, boolean arg2, float arg3, float arg4): void
       */
      DoFloorSplat(arg0: zombie.iso.IsoGridSquare, arg1: string, arg2: boolean, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (String arg0): void
       */
      DoFootstepSound(arg0: number | string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoSneezeText(): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0, IsoGridSquare arg1): void
       */
      DoSpecialTooltip(arg0: zombie.ui.ObjectTooltip, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, float arg2): boolean
       */
      DoSwingCollisionBoneCheck(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DrawSneezeText(): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      Dressup(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, float arg1): boolean
       */
      Eat(arg0: zombie.inventory.InventoryItem, arg1?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      FireCheck(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetAnimSetName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      GetPrimaryEquippedCache(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      GetSecondaryEquippedCache(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      GetVariable(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): number
       */
      GetVehicleSlowFactor(arg0: zombie.vehicles.BaseVehicle): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      HasItem(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      HasTrait(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1, float arg2): void
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       *  - (BaseVehicle arg0, float arg1, boolean arg2, float arg3, float arg4): number
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4, boolean arg5): number
       */
      Hit(arg0: zombie.iso.Vector2 | zombie.inventory.types.HandWeapon | zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoObject | zombie.characters.IsoGameCharacter | number, arg2: number | boolean, arg3?: boolean | number, arg4?: number, arg5?: boolean): void | number;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, float arg1): void
       */
      HitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      InitSpriteParts(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       *  - (HandWeapon arg0, IsoMovingObject arg1, Vector3 arg2, boolean arg3): boolean
       */
      IsAttackRange(arg0: number | zombie.inventory.types.HandWeapon, arg1: number | zombie.iso.IsoMovingObject, arg2: number | zombie.iso.Vector3, arg3?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsSpeaking(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      Kill(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       *  - (Perk arg0, boolean arg1): void
       */
      LevelPerk(arg0: zombie.characters.skills.PerkFactory$Perk, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       */
      LoseLevel(arg0: zombie.characters.skills.PerkFactory$Perk): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      Move(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      MoveForward(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      MoveUnmodded(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      NPCGetAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      NPCGetRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetAiming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetJustMoved(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetMelee(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetRunning(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimEvent arg1): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnDeath(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      PainMeds(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      PlayAnim(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      PlayAnimUnlooped(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      PlayAnimWithSpeed(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseAction arg0): void
       */
      QueueAction(arg0: zombie.characters.CharacterTimedActions.BaseAction): void;
      /**
       * Method Parameters: 
       *  - (Literature arg0): void
       */
      ReadLiterature(arg0: zombie.inventory.types.Literature): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ReduceHealthWhenBurning(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RemoveAttachedAnim(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RemoveAttachedAnims(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6): void
       */
      Say(arg0: string, arg1?: number, arg2?: number, arg3?: number, arg4?: zombie.ui.UIFont, arg5?: number, arg6?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (int arg0, String arg1): void
       */
      SayDebug(arg0: string | number, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, int arg6, String arg7): void
       */
      SayRadio(arg0: string, arg1: number, arg2: number, arg3: number, arg4: zombie.ui.UIFont, arg5: number, arg6: number, arg7: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SayShout(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SayWhisper(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): void
       */
      Seen(arg0: java.util.Stack<zombie.iso.IsoMovingObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Serialize(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SetOnFire(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      SetVariable(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      SleepingTablet(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SpreadFire(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SpreadFireMP(): void;
      /**
       * Method Parameters: 
       *  - (BaseAction arg0): void
       */
      StartAction(arg0: zombie.characters.CharacterTimedActions.BaseAction): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, String arg1): void
       */
      StartTimedActionAnim(arg0: string, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueue(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueueAiming(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueueRunning(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueueWalking(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopBurning(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopTimedActionAnim(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoGridSquare arg1, IsoGridSquare arg2): boolean
       */
      TestCollide(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoGridSquare arg1, IsoGridSquare arg2): boolean
       */
      TestPathfindCollide(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoGridSquare arg1): zombie.iso.IsoObject$VisionResult
       */
      TestVision(arg0: zombie.iso.IsoGridSquare, arg1: zombie.iso.IsoGridSquare): zombie.iso.IsoObject$VisionResult;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      Throw(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      Thump(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      UnCollision(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      WeaponHit(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (ActionContext arg0): void
       */
      actionStateChanged(arg0: zombie.characters.action.ActionContext): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      addBasicPatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (BloodBodyPartType arg0, boolean arg1, boolean arg2, boolean arg3): void
       */
      addBlood(arg0: number | zombie.characterTextures.BloodBodyPartType, arg1?: boolean, arg2?: boolean, arg3?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addChild(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, Integer arg1, boolean arg2): void
       */
      addDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): boolean
       *  - (BloodBodyPartType arg0, boolean arg1): boolean
       */
      addHole(arg0: zombie.characterTextures.BloodBodyPartType, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, boolean arg1): boolean
       */
      addHoleFromZombieAttacks(arg0: zombie.characterTextures.BloodBodyPartType, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addKnownMediaLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, float arg1, float arg2, float arg3): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6, boolean arg7, boolean arg8, boolean arg9, boolean arg10, boolean arg11, boolean arg12): void
       */
      addLineChatElement(arg0: string, arg1?: number, arg2?: number, arg3?: number, arg4?: zombie.ui.UIFont, arg5?: number, arg6?: string, arg7?: boolean, arg8?: boolean, arg9?: boolean, arg10?: boolean, arg11?: boolean, arg12?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      addSecondaryContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): boolean
       */
      addSheetRope(arg0: zombie.characters.IsoPlayer, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addVisualDamage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      addWorldSoundUnlessInvisible(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      applyTraits(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      attackFromWindowsLunge(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      autoDrink(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      avoidDamage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      becomeCorpse(): void;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0): void
       */
      burnCorpse(arg0: zombie.iso.objects.IsoDeadBody): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (IsoGameCharacter arg0, HandWeapon arg1, Vector2 arg2): number
       */
      calcHitDir(arg0: zombie.iso.Vector2 | zombie.characters.IsoGameCharacter, arg1?: zombie.inventory.types.HandWeapon, arg2?: zombie.iso.Vector2): void | number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateBaseSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canAddSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      canClimbDownSheetRope(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClimbDownSheetRopeInCurrentSquare(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      canClimbSheetRope(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      canHaveMultipleHits(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      changeState(arg0: zombie.ai.State): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkAmbientSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkHaveElectricity(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      checkIsNearWall(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkUpdateModelTextures(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cleanWallBlood(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearAttachedAnimSprite(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearAttachedItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearKnownMediaLines(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearVariables(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearWornItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      climbDownSheetRope(): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      climbOverFence(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      climbSheetRope(): void;
      /**
       * Method Parameters: 
       *  - (IsoThumpable arg0): void
       *  - (IsoWindow arg0): void
       *  - (IsoThumpable arg0, Integer arg1): void
       *  - (IsoWindow arg0, Integer arg1): void
       */
      climbThroughWindow(arg0: zombie.iso.objects.IsoThumpable | zombie.iso.objects.IsoWindow, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      climbThroughWindowFrame(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      closeWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clothingItemChanged(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      collideWith(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      compareMovePriority(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      compareToY(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      countAddSheetRope(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      createContainersFromSpriteProperties(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      createKeyRing(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      customHashCode(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      dbgGetAnimTrack(arg0: number, arg1: number): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      dbgGetAnimTrackName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      dbgGetAnimTrackTime(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      dbgGetAnimTrackWeight(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugPrintout(): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      destroyFence(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      die(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      distToNearestCamCharacter(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doFindExternalWaterSource(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, HitVars arg1): void
       */
      doHitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle$HitVars): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doStairs(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      drawDebugTextBelow(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      drawDirectionLine(arg0: zombie.iso.Vector2, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      dressInClothingItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      dressInNamedOutfit(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      dressInPersistentOutfit(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      dressInPersistentOutfitID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dressInRandomOutfit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dropHandItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dropHeavyItems(): void;
      /**
       * Method Parameters: 
       *  - (AnimationVariableSource arg0): void
       */
      endPlaybackGameVariables(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ensureOnTile(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, int arg1, Vector3f arg2): void
       */
      enterVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number, arg2: org.joml.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      exert(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      faceLocation(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      faceLocationF(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      facePosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      faceThisObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      faceThisObjectAlt(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fallenOnKnees(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceAwake(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteExcessTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionContext
       */
      getActionContext(): zombie.characters.action.ActionContext;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getActionStateName(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getActiveLightItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
       */
      getAdvancedAnimator(): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getAlreadyReadPages(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngleRadians(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngleStepDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngleTwistDelta(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getAnimVector(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimationDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
       */
      getAnimationPlayerRecorder(): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimationStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getAttachedAnimSprite(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getAttachedItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.AttachedItems.AttachedItems
       */
      getAttachedItems(): zombie.characters.AttachedItems.AttachedItems;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.AttachedItems.AttachedLocationGroup
       */
      getAttachedLocationGroup(): zombie.characters.AttachedItems.AttachedLocationGroup;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getAttackTargetSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getAttackedBy(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getAutoWalkDirection(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBarricadeStrengthMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBarricadeTimeMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getBed(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBeenMovingFor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBeenSprintingFor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBetaDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBetaEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodImpactX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodImpactY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodImpactZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getBloodSplat(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.BodyDamage
       */
      getBodyDamage(): zombie.characters.BodyDamage.BodyDamage;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.BodyDamage
       */
      getBodyDamageRemote(): zombie.characters.BodyDamage.BodyDamage;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.WornItems.BodyLocationGroup
       */
      getBodyLocationGroup(): zombie.characters.WornItems.BodyLocationGroup;
      /**
       * Method Parameters: 
       *  - (Integer arg0, boolean arg1, boolean arg2): number
       */
      getBodyPartClothingDefense(arg0: number, arg1: boolean, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.GameCharacterAIBrain
       */
      getBrain(): zombie.ai.GameCharacterAIBrain;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBumpFallType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBumpType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getBumpedChr(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): string
       */
      getBumpedType(arg0: zombie.characters.IsoGameCharacter): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      getCell(): zombie.iso.IsoCell;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.characters.CharacterTimedActions.BaseAction>
       */
      getCharacterActions(): java.util.Stack<zombie.characters.CharacterTimedActions.BaseAction>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$CharacterTraits
       */
      getCharacterTraits(): zombie.characters.IsoGameCharacter$CharacterTraits;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatElement
       */
      getChatElement(): zombie.chat.ChatElement;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getChildSprites(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChopTreeSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Back(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Feet(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Hands(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Head(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Legs(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Torso(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.ClothingWetness
       */
      getClothingWetness(): zombie.characters.ClothingWetness;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCollideType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getCollidedObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.inventory.ItemContainer
       */
      getContainerByEitherType(arg0: string, arg1: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.ItemContainer
       */
      getContainerByIndex(arg0: number): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemContainer
       */
      getContainerByType(arg0: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerCount(): number;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): number
       */
      getContainerIndex(arg0: zombie.inventory.ItemContainer): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentActionContextStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getCurrentBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.BuildingDef
       */
      getCurrentBuildingDef(): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.RoomDef
       */
      getCurrentRoomDef(): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getCurrentSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getCurrentState(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaGrid$Zone
       */
      getCurrentZone(): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getCustomColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDangerLevels(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
       */
      getDebugMonitor(): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getDefaultState(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredAngleDelta(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getDeferredMovement(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredRotationWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDepressDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDepressEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.SurvivorDesc
       */
      getDescriptor(): zombie.characters.SurvivorDesc;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDieCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDirectionAngle(): number;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      getDistanceSq(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): number
       *  - (float arg0, float arg1): number
       */
      getDotWithForwardDirection(arg0: zombie.iso.Vector3 | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getEatingZombies(): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BaseCharacterSoundEmitter
       */
      getEmitter(): zombie.characters.BaseCharacterSoundEmitter;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.characters.IsoGameCharacter>
       */
      getEnemyList(): java.util.Stack<zombie.characters.IsoGameCharacter>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.Radio
       */
      getEquipedRadio(): zombie.inventory.types.Radio;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExcessTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.FMODParameterList
       */
      getFMODParameters(): zombie.audio.FMODParameterList;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getFacingPosition(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getFacingPositionAlt(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFallTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.iso.areas.IsoBuilding>
       */
      getFamiliarBuildings(): java.util.Stack<zombie.iso.areas.IsoBuilding>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatiqueMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.IsoGridSquare
       */
      getFeelerTile(arg0: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFeelersize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.astar.AStarPathFinderResult
       */
      getFinder(): zombie.ai.astar.AStarPathFinderResult;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFireKillRate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFireSpreadProbability(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getFollowingTarget(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getForceWakeUpTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getForwardDirection(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFuturWalkedSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.GameCharacterAIBrain
       */
      getGameCharacterAIBrain(): zombie.ai.GameCharacterAIBrain;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getGlobalMovementMod(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHaloTimerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHammerSoundMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getHighlightColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitChancesMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getHitDir(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitForce(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitFromAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHitReaction(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.HitReactionNetworkAI
       */
      getHitReactionNetworkAI(): zombie.characters.HitReactionNetworkAI;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHittingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSurvived(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.HumanVisual
       */
      getHumanVisual(): zombie.core.skinnedmodel.visual.HumanVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHurtSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHyperthermiaMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIgnoreMovement(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImpulsex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImpulsey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getInventory(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInventoryWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsNPC(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsSurfaceNormalOffset(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getItemContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisuals
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0?: zombie.core.skinnedmodel.visual.ItemVisuals): zombie.core.skinnedmodel.visual.ItemVisuals | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getKnownRecipes(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastBump(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatMessage
       */
      getLastChatMessage(): zombie.chat.ChatMessage;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastCollideTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastFallSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$Location
       */
      getLastHeardSound(): zombie.characters.IsoGameCharacter$Location;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastHitCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastHourSleeped(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, zombie.characters.IsoGameCharacter$Location>
       */
      getLastKnownLocation(): java.util.HashMap<string, zombie.characters.IsoGameCharacter$Location>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.IsoGameCharacter$Location
       */
      getLastKnownLocationOf(arg0: string): zombie.characters.IsoGameCharacter$Location;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastLocalEnemies(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastSpokenLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getLastSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoZombie
       */
      getLastTargettedBy(): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastZombieKills(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLeaveBodyTimedown(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getLegsSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevelMaxForXp(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getLevelUpLevels(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevelUpMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$LightInfo
       */
      getLightInfo2(): zombie.characters.IsoGameCharacter$LightInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightfootMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLimpulsex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLimpulsey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLlx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLlz(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.characters.IsoGameCharacter>
       */
      getLocalEnemyList(): java.util.Stack<zombie.characters.IsoGameCharacter>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalGroupList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalNeutralList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalRelevantEnemyList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLookAngleRadians(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getLookVector(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoGridSquare
       */
      getLowDangerInVicinity(arg0: number, arg1: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLrx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLry(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLy(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLz(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaintenanceMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.MapKnowledge
       */
      getMapKnowledge(): zombie.ai.MapKnowledge;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): number
       */
      getMaskClickedY(arg0: number, arg1: number, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IWorldRegion
       */
      getMasterRegion(): zombie.iso.areas.isoregion.regions.IWorldRegion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxChatLines(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeightBase(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeleeCombatMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeleeDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetalBarricadeStrengthMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModel(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModelInstance(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMomentumScalar(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Moodles.Moodles
       */
      getMoodles(): zombie.characters.Moodles.Moodles;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMoveDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getMoveForwardVec(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMoveSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getMovementLastFrame(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovingObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getNearVehicle(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.NetworkCharacterAI
       */
      getNetworkCharacterAI(): zombie.characters.NetworkCharacterAI;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNextWander(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNimbleMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNoDamage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumSurvivorsInVicinity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNy(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getObjectRenderEffects(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getObjectRenderEffectsToApply(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.sadisticAIDirector.SleepingEventData
       */
      getOrCreateSleepingEventData(): zombie.ai.sadisticAIDirector.SleepingEventData;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getOrCreateVariable(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutfitName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getOutlineHighlightCol(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOutlineThickness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getOverlaySprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getOverlaySpriteColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.PolygonalMap2$Path
       */
      getPath2(): zombie.vehicles.PolygonalMap2$Path;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.PathFindBehavior2
       */
      getPathFindBehavior2(): zombie.vehicles.PathFindBehavior2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathFindIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathTargetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathTargetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathTargetZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatience(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatienceMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatienceMin(): number;
      /**
       * Method Parameters: 
       *  - (Perk arg0): zombie.characters.IsoGameCharacter$PerkInfo
       */
      getPerkInfo(arg0: zombie.characters.skills.PerkFactory$Perk): zombie.characters.IsoGameCharacter$PerkInfo;
      /**
       * Method Parameters: 
       *  - (Perk arg0): number
       */
      getPerkLevel(arg0: zombie.characters.skills.PerkFactory$Perk): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoGameCharacter$PerkInfo>
       */
      getPerkList(): java.util.ArrayList<zombie.characters.IsoGameCharacter$PerkInfo>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPersistentOutfitID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPipedFuelAmount(): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPosition(arg0: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPreviousActionContextStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPreviousStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getPrimaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPrimaryHandType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.Outfit
       */
      getRandomDefaultOutfit(): zombie.core.skinnedmodel.population.Outfit;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>
       */
      getReadyModelData(): java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReanimAnimDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReanimAnimFrame(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReanimateTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoilDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoveryMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReduceInfectionPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemoteID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRenderEffectMaster(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderYOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteCollide(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteMask(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteMaskObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRunSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Safety
       */
      getSafety(): zombie.characters.Safety;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSayLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptModule(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptnx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptny(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getSecondaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSecondaryHandType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShoulderTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShovingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSleepingTabletDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSleepingTabletEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlowFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlowTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSneakSpotMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getSpeakColour(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpeakTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpecialObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpeedMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSprintMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteInstance
       */
      getSpriteDef(): zombie.iso.sprite.IsoSpriteInstance;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getSpriteGridObjects(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpriteName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaggerTimeMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStateEventDelayTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.StateMachine
       */
      getStateMachine(): zombie.ai.StateMachine;
      /**
       * Method Parameters: 
       *  - (State arg0): java.util.HashMap<any, any>
       */
      getStateMachineParams(arg0: zombie.ai.State): java.util.HashMap<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaticMovingObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Stats
       */
      getStats(): zombie.characters.Stats;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceNormalOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceOffsetNoTable(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurroundingAttackingZombies(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurvivorKills(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTalkerType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getTargetAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.NetworkTeleport
       */
      getTeleport(): zombie.characters.NetworkTeleport;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator
       */
      getTextureCreator(): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextureName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThreatLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThumpCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpTarget(): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpableFor(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTile(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceLastSmoke(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceZombieAttack(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeThumping(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimedActionTimeModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTorchStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalBlood(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.traits.TraitCollection
       */
      getTraits(): zombie.characters.traits.TraitCollection;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTurnDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.HandWeapon
       */
      getUseHandWeapon(): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<string>
       */
      getUsedItemsOn(): java.util.Stack<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUserNameHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsesExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getVectorFromDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getVehicle(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getVeryCloseEnemyList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.BaseVisual
       *  - (Empty): zombie.core.skinnedmodel.visual.HumanVisual
       */
      getVisual(): zombie.core.skinnedmodel.visual.BaseVisual | zombie.core.skinnedmodel.visual.HumanVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterMax(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): zombie.inventory.InventoryItem
       */
      getWaterSource(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeaponLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0, float arg1): number
       */
      getWeight(arg0?: number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeldingSoundMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getWindRenderEffects(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getWornItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.WornItems.WornItems
       */
      getWornItems(): zombie.characters.WornItems.WornItems;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$XP
       */
      getXp(): zombie.characters.IsoGameCharacter$XP;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getXpForLevel(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZombieKills(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasActiveModel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAnimationPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasEquipped(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasEquippedTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasFootInjury(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasHitReaction(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      hasItems(arg0: string, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasPath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTimedActions(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveSpecialTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       *  - (boolean arg0, String arg1): boolean
       */
      helmetFall(arg0: boolean, arg1?: string): boolean;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1, boolean arg2, float arg3, boolean arg4): void
       */
      hitConsequences(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2: boolean, arg3: number, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      initAttachedItems(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$LightInfo
       */
      initLightInfo2(): zombie.characters.IsoGameCharacter$LightInfo;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSpritePartsEmpty(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      initWornItems(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAboveTopOfStairs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAimAtFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowConversation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isAlphaAndTargetZero(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isAlphaZero(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimForecasted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimationRecorderActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAsleep(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isAttachedItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttackAnim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttackWasSuperAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttacking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutoWalk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBehaviourMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isBehind(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingSteppedOn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBuildCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumpDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumpFall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumpStaggered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanShout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isClimbing(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): boolean
       */
      isClimbingThroughWindow(arg0: zombie.iso.objects.IsoWindow): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCloseKilled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): boolean
       */
      isClosingWindow(arg0: zombie.iso.objects.IsoWindow): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollided(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedE(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedN(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedS(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedW(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithDoor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCriticalHit(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): boolean
       */
      isCurrentState(arg0: zombie.ai.State): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDead(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDeathDragDown(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoDeathSound(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDriving(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isEatingOther(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isEquipped(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isEquippedClothing(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistInTheWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isFacingLocation(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1): boolean
       */
      isFacingObject(arg0: zombie.iso.IsoObject, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFallOnFront(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFarmingCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFirstUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceShove(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGodMod(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isHandItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHealthCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isHeavyItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHideWeaponModel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHighlighted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHitFromBehind(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreMovementForDirection(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStaggerBack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInARoom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInTrees(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isInTrees2(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInTreesNoBush(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvincible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvisible(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isItemAllowedInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isItemInBothHands(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKnockedDown(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isKnownMediaLine(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isKnownPoison(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLastCollidedN(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLastCollidedW(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocal(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       *  - (int arg0, int arg1, boolean arg2): boolean
       */
      isMaskClicked(arg0: number, arg1: number, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMechanicsCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovablesCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovedThumpable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMuzzleFlash(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNPC(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoPicking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNorthHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnDeathDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFire(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnKillDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHighlight(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHlAttached(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHlBlink(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutlineOnMouseover(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutside(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPathing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPersistentOutfitInit(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayerMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingDeathSound(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isPrimaryEquipped(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isPrimaryHandItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProne(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPushableForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isPushedByForSeparate(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRangedWeaponEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReading(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReanim(): boolean;
      /**
       * Method Parameters: 
       *  - (Recipe arg0): boolean
       *  - (String arg0): boolean
       */
      isRecipeKnown(arg0: zombie.scripting.objects.Recipe | string): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isRemoveItemAllowedFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSceneCulled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSeatedInVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isSecondaryHandItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShootable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowAdminTag(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSitOnGround(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkipResolveCollision(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSneaking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolidForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpeaking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSprinting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpriteInvisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsNorth(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsObject(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsWest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStrafing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSuperAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableSurface(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableTopObject(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTaintedWater(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isTargetAlphaZero(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTeleporting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimedActionInstant(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimedActionInstantCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnderVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnlimitedCarry(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnlimitedEndurance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUsingWornItems(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): boolean
       */
      isVehicleCollisionActive(arg0: zombie.vehicles.BaseVehicle): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToNPCs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (IsoMovingObject arg0): boolean
       */
      isZombieAttacking(arg0?: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombiesDontAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbAltCollide(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbDoDefer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbFalling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbOnBed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbUseParts(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      learnRecipe(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       */
      level0(arg0: zombie.characters.skills.PerkFactory$Perk): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ByteBuffer arg1): void
       */
      loadChange(arg0: string, arg1: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      loadFromRemoteBuffer(arg0: java.nio.ByteBuffer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      loadState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ModelManager arg0, boolean arg1): void
       */
      onCullStateChanged(arg0: zombie.core.skinnedmodel.ModelManager, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      onMouseLeftClick(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onMouseRightClick(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onMouseRightReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onWornItemsChanged(): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      openWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      pathToCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToLocation(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      pathToLocationF(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToSound(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playBloodSplatterSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playDeadSound(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playEmote(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playHurtSound(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLocal(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionStateSnapshot
       */
      playbackRecordCurrentStateSnapshot(): zombie.characters.action.ActionStateSnapshot;
      /**
       * Method Parameters: 
       *  - (ActionStateSnapshot arg0): void
       */
      playbackSetCurrentStateSnapshot(arg0: zombie.characters.action.ActionStateSnapshot): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postUpdateEquippedTextures(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postUpdateModelTextures(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preupdate(): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       */
      processHitDamage(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2: number, arg3: boolean, arg4: number): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): string
       */
      readInventory(arg0: java.nio.ByteBuffer): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseAnimationPlayer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reloadOutfit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllContainers(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      removeAttachedItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      removeFromHands(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromSquare(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeKnownMediaLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ObjectRenderEffects arg0): void
       */
      removeRenderEffect(arg0: zombie.iso.objects.ObjectRenderEffects): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      removeSheetRope(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       *  - (InventoryItem arg0, boolean arg1): void
       */
      removeWornItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6): void
       */
      render(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7): void
       */
      renderAttachedAndOverlaySprites(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7, Consumer arg8): void
       */
      renderFloorTile(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>, arg8: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, boolean arg3): void
       */
      renderFxMask(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3): void
       */
      renderObjectPicker(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderServerGUI(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      renderShadow(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7): void
       */
      renderWallTile(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, Shader arg4, Consumer arg5): void
       */
      renderWallTileOnly(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: zombie.core.opengl.Shader, arg5: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      replaceItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      reportEvent(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBeardGrowingTime(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBodyDamageRemote(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetEquippedHandsModels(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetHairGrowingTime(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetModel(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetModelNextFrame(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reuseGridSquare(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1, ByteBuffer arg2): void
       */
      saveChange(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable, arg2: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, KahluaTable arg1): void
       *  - (String arg0, Object... arg1): void
       */
      sendObjectChange(arg0: string, arg1?: se.krka.kahlua.vm.KahluaTable | any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendStopBurning(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      separate(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      serverRemoveItemFromZombie(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAimAtFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowConversation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setAlpha(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setAlphaAndTarget(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAlphaToTarget(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      setAlreadyReadPages(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAnimForecasted(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAsleep(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setAttachedAnimSprite(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       */
      setAttachedItem(arg0: string, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (AttachedItems arg0): void
       */
      setAttachedItems(arg0: zombie.characters.AttachedItems.AttachedItems): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAttackAnim(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setAttackTargetSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAttackWasSuperAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setAttackedBy(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAutoWalk(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setAutoWalkDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAvoidDamage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setBed(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBedType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBeenMovingFor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBeenSprintingFor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBetaDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBetaEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodImpactX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodImpactY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodImpactZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): void
       */
      setBloodSplat(arg0: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBuildCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBumpDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBumpFall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBumpFallType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBumpStaggered(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBumpType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setBumpedChr(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanShout(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setChildSprites(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCloseKilled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Back(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Feet(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Hands(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Head(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Legs(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Torso(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCollideType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedE(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedN(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setCollidedObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedS(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedThisFrame(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedW(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedWithDoor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCriticalHit(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setCurrent(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setCustomColor(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDangerLevels(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDeathDragDown(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimatorDebugMonitor arg0): void
       */
      setDebugMonitor(arg0: zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (State arg0): void
       */
      setDefaultState(arg0?: zombie.ai.State): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDelayToSleep(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDepressDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDepressEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      setDescriptor(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDestroyed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDieCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       *  - (int arg0): void
       */
      setDir(arg0: zombie.iso.IsoDirections | number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDirectionAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoDeathSound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setEatingZombies(arg0: java.util.ArrayList<zombie.characters.IsoZombie>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFallOnFront(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFallTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFarmingCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFeelersize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFemale(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFireKillRate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFireSpreadProbability(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFirstUpdate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setFollowingTarget(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceShove(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForceWakeUpTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (float arg0, float arg1): void
       */
      setForwardDirection(arg0: zombie.iso.Vector2 | number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGodMod(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      setHaloNote(arg0: string, arg1?: number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHealthCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHideWeaponModel(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setHighlightColor(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1): void
       */
      setHighlighted(arg0: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setHitDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHitForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHitFromAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHitFromBehind(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHitReaction(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHurtSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreAimingInput(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreMovement(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreStaggerBack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setImpulsex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setImpulsey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setInventory(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInvincible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInvisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsAiming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsNPC(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKnockedDown(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setLast(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLastBump(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0): void
       */
      setLastChatMessage(arg0: zombie.chat.ChatMessage): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastCollideTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLastCollidedN(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLastCollidedW(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastFallSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setLastHeardSound(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastHitCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastHourSleeped(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastLocalEnemies(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLastSpokenLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      setLastTargettedBy(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastZombieKills(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLeaveBodyTimedown(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): void
       */
      setLegsSprite(arg0: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLevelUpMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLimpulsex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLimpulsey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLlx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLlz(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLrx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLry(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLy(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLz(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxTwist(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxWeightBase(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMechanicsCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMeleeDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Metabolics arg0): void
       *  - (float arg0): void
       */
      setMetabolicTarget(arg0: zombie.characters.BodyDamage.Metabolics | number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMomentumScalar(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovablesCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMoveDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setMoveForwardVec(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovedThumpable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setMovementLastFrame(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoving(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setMovingSquareNow(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNPC(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNextWander(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoDamage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoPicking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNumSurvivorsInVicinity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNy(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffsetX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffsetY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnDeathDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFire(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnKillDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHighlight(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (int arg0, ColorInfo arg1): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setOutlineHighlightCol(arg0: zombie.core.textures.ColorInfo | number, arg1?: zombie.core.textures.ColorInfo | number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHlAttached(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHlBlink(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOutlineOnMouseover(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOutlineThickness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, boolean arg5): boolean
       */
      setOverlaySprite(arg0: string, arg1?: boolean | number, arg2?: number, arg3?: number, arg4?: number, arg5?: boolean): void | boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setOverlaySpriteColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Path arg0): void
       */
      setPath2(arg0: zombie.vehicles.PolygonalMap2$Path): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPathFindIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPathIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPathing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPatience(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPatienceMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPatienceMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      setPerkLevelDebug(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setPersistentOutfitID(arg0: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPipedFuelAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPlayingDeathSound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setPrimaryHandItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRangedWeaponEmpty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setReading(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setReanim(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setReanimAnimDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setReanimAnimFrame(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReanimateTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRecoilDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReduceInfectionPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemoteID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (RenderEffectType arg0): void
       *  - (RenderEffectType arg0, boolean arg1): void
       */
      setRenderEffect(arg0: zombie.iso.objects.RenderEffectType, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderYOffset(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setRerouteCollide(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setRerouteMask(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRunning(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Safety arg0): void
       */
      setSafety(arg0: zombie.characters.Safety): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSayLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSceneCulled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScriptModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScriptnx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScriptny(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setSecondaryHandItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShootable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowAdminTag(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSitOnGround(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSleepingTabletDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSleepingTabletEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSlowFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSlowTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSneaking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolid(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setSpeakColour(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setSpeakColourInfo(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSpeakTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpeaking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpecialTooltip(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSpeedMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSprinting(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (IsoSprite arg0): void
       */
      setSprite(arg0: string | zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteFromName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStaggerTimeMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStateEventDelayTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStateMachineLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSuperAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSurvivorKills(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTaintedWater(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setTargetAlpha(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (NetworkTeleport arg0): void
       */
      setTeleport(arg0: zombie.characters.NetworkTeleport): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ModelInstanceTextureCreator arg0): void
       */
      setTextureCreator(arg0: zombie.core.skinnedmodel.model.ModelInstanceTextureCreator): void;
      /**
       * Method Parameters: 
       *  - (Thumpable arg0): void
       */
      setThumpTarget(arg0: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTimeOfSleep(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTimeSinceLastSmoke(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeSinceZombieAttack(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeThumping(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTimedActionInstantCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTurnDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnlimitedCarry(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnlimitedEndurance(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      setUseHandWeapon(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsesExternalWaterSource(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSlot arg0): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       */
      setVariable(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot | string, arg1?: number | string | boolean, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      setVehicle(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisibleToNPCs(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWaterAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       *  - (String arg0, InventoryItem arg1, boolean arg2): void
       */
      setWornItem(arg0: string, arg1: zombie.inventory.InventoryItem, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (WornItems arg0): void
       */
      setWornItems(arg0: zombie.characters.WornItems.WornItems): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (XP arg0): void
       */
      setXp(arg0: zombie.characters.IsoGameCharacter$XP): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setZombieKills(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setZombiesDontAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbAltCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbClimbing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbDoDefer(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbFalling(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbOnBed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbUseParts(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeTurning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeTurning90(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeTurningAround(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBecomeCorpse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBecomeZombieAfterDeath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldDoInventory(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldWaitToStartTimedAction(): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      smashCarWindow(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      smashWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      softReset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      splatBlood(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      splatBloodFloor(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      splatBloodFloorBig(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1): void
       */
      spotted(arg0: zombie.iso.IsoMovingObject, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      startEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startMuzzleFlash(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
       */
      startPlaybackGameVariables(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      stopEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopOrTriggerSound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, byte arg1, UdpConnection arg2, ByteBuffer arg3): void
       */
      syncIsoObject(arg0: boolean, arg1: number, arg2: zombie.core.raknet.UdpConnection, arg3: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      syncIsoObjectSend(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): boolean
       */
      testDefense(arg0: zombie.characters.IsoZombie): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): string
       */
      testDotSide(arg0: zombie.iso.IsoMovingObject): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCompleteItemToClients(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCompleteItemToServer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCustomColor(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitModData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitUpdatedSprite(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (UdpConnection arg0): void
       */
      transmitUpdatedSpriteToClients(arg0?: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitUpdatedSpriteToServer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unsetOutlineHighlight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEmitter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEquippedRadioFreq(): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1): void
       */
      updateEvent(arg0: number, arg1: zombie.audio.GameSoundClip): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLightInfo(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateRecoilVar(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSpeedModifiers(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateTextObjects(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      useItemOn(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      useWater(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      writeInventory(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      writeToRemoteBuffer(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      zeroForwardDirectionX(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      zeroForwardDirectionY(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      static FindExternalWaterSource(arg0: zombie.iso.IsoGridSquare | number, arg1?: number, arg2?: number): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      static FindWaterSourceOnSquare(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1): java.lang.Class
       */
      static factoryClassFromFileInput(arg0: zombie.iso.IsoCell, arg1: number): java.lang.Class<any>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, byte arg1): zombie.iso.IsoObject
       *  - (IsoCell arg0, ByteBuffer arg1): zombie.iso.IsoObject
       */
      static factoryFromFileInput(arg0: zombie.iso.IsoCell, arg1: number | java.nio.ByteBuffer): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1): zombie.iso.IsoObject
       */
      static factoryFromFileInput_OLD(arg0: zombie.iso.IsoCell, arg1: number): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static factoryGetClassID(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject$IsoObjectFactory
       */
      static getFactoryVehicle(): zombie.iso.IsoObject$IsoObjectFactory;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getIDCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      static getInf(): zombie.core.textures.ColorInfo;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastRendered(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastRenderedRendered(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number[]
       */
      static getLevelUpLevels(): number[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3): zombie.iso.IsoObject
       */
      static getNew(arg0?: zombie.iso.IsoGridSquare, arg1?: string, arg2?: string, arg3?: boolean): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<number, zombie.characters.SurvivorDesc>
       */
      static getSurvivorMap(): java.util.HashMap<number, zombie.characters.SurvivorDesc>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getTempo(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, IsoDirections arg1): zombie.iso.Vector2
       */
      static getVectorFromDirection(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoDirections): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setDefaultCondition(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setIDCount(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastRendered(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastRenderedRendered(arg0: zombie.iso.IsoObject): void;
    }
  }
}
