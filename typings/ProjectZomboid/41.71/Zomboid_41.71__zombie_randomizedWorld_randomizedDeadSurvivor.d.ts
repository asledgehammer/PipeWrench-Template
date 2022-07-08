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
 * File generated at Friday July 2022 15:18:33.651-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.randomizedWorld.randomizedDeadSurvivor {
    /**
     * @customConstructor RDSBandPractice.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSBandPractice extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSBandPractice {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSBathroomZed.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSBathroomZed extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSBathroomZed {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSBedroomZed.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSBedroomZed extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSBedroomZed {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSBleach.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSBleach extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSBleach {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSCorpsePsycho.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSCorpsePsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSCorpsePsycho {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSDeadDrunk.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSDeadDrunk extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSDeadDrunk {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSFootballNight.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSFootballNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSFootballNight {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSGunmanInBathroom.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSGunmanInBathroom extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSGunmanInBathroom {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSGunslinger.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSGunslinger extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSGunslinger {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSHenDo.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSHenDo extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSHenDo {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSHockeyPsycho.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSHockeyPsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSHockeyPsycho {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSHouseParty.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSHouseParty extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSHouseParty {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSPokerNight.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSPokerNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSPokerNight {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSPoliceAtHouse.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSPoliceAtHouse extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSPoliceAtHouse {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSPrisonEscape.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSPrisonEscape extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSPrisonEscape {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSPrisonEscapeWithPolice.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSPrisonEscapeWithPolice extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSPrisonEscapeWithPolice {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSSkeletonPsycho.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSSkeletonPsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSSkeletonPsycho {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSSpecificProfession.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSSpecificProfession extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSSpecificProfession {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSStagDo.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSStagDo extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSStagDo {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSStudentNight.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSStudentNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSStudentNight {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSSuicidePact.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSSuicidePact extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSSuicidePact {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSTinFoilHat.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSTinFoilHat extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSTinFoilHat {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSZombieLockedBathroom.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSZombieLockedBathroom extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSZombieLockedBathroom {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RDSZombiesEating.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RDSZombiesEating extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase
     */
    export class RDSZombiesEating {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
     * @customConstructor RandomizedDeadSurvivorBase.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
     */
    export class RandomizedDeadSurvivorBase {
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
       *  - (BuildingDef arg0): void
       */
      randomizeDeadSurvivor(arg0: zombie.iso.BuildingDef): void;
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
  }
}
