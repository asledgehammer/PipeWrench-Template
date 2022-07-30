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
 * File generated at 2022-07-29T02:33Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../reference.d.ts" />
declare module 'PipeWrench' {
  export namespace zombie.randomizedWorld.randomizedVehicleStory {
    /**
     * @customConstructor RVSAmbulanceCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSAmbulanceCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSAmbulanceCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSBanditRoad.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSBanditRoad extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSBanditRoad {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSBurntCar.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSBurntCar extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSBurntCar {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSCarCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCarCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSCarCrashCorpse.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrashCorpse extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCarCrashCorpse {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSChangingTire.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSChangingTire extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSChangingTire {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSConstructionSite.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSConstructionSite extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSConstructionSite {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSCrashHorde.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCrashHorde extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCrashHorde {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSFlippedCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSFlippedCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSFlippedCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSPoliceBlockade.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockade extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSPoliceBlockade {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSPoliceBlockadeShooting.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockadeShooting extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSPoliceBlockadeShooting {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSTrailerCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSTrailerCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSTrailerCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RVSUtilityVehicle.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSUtilityVehicle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, String arg2, String arg3, String arg4, Integer arg5, String arg6, ArrayList arg7, int arg8, boolean arg9): void
       */
      doUtilityVehicle(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: string, arg3: string, arg4: string, arg5: number, arg6: string, arg7: java.util.ArrayList<string>, arg8: number, arg9: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor RandomizedVehicleStoryBase.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase extends zombie.randomizedWorld.RandomizedWorldBase
     */
    export class RandomizedVehicleStoryBase {
      /** float */
      static readonly baseChance: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       *  - (RoomDef arg0, String arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: java.util.ArrayList<string> | string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
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
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
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
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
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
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
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
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
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
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): void;
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
     * @customConstructor VehicleStorySpawnData.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
     */
    export class VehicleStorySpawnData {
      /**
       * Constructors: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, float arg2, float arg3, float arg4, int arg5, int arg6, int arg7, int arg8)
       */
      constructor(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): boolean
       */
      isValid(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: zombie.iso.IsoChunk): boolean;
    }
    /**
     * @customConstructor VehicleStorySpawner.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner
     */
    export class VehicleStorySpawner {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element
       */
      addElement<E>(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<E>(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, int[] arg5): void
       */
      getAABB<E>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Class arg1): E
       */
      getParameter<E>(arg0: string, arg1: java.lang.Class<E>): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getParameterBoolean<E>(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getParameterFloat<E>(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getParameterInteger<E>(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getParameterString<E>(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      render<E>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2 arg2, float arg3): zombie.iso.Vector2
       */
      rotate<E>(arg0: number, arg1: number, arg2: zombie.iso.Vector2, arg3: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, int arg1): void
       *  - (String arg0, Object arg1): void
       */
      setParameter<E>(arg0: string, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, IElementSpawner arg4): void
       */
      spawn<E>(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$IElementSpawner): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner
       */
      static getInstance<E>(): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner;
    }
    /**
     * @customConstructor Element.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element
     */
    export class VehicleStorySpawner$Element {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor IElementSpawner.new
     * @
     * [INTERFACE] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$IElementSpawner
     */
    export class VehicleStorySpawner$IElementSpawner {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawn(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
    }
  }
}
