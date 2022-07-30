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
  export namespace zombie.randomizedWorld.randomizedZoneStory {
    /**
     * @customConstructor RZSBBQParty.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSBBQParty extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSBBQParty {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      static getBeachClutter(): java.util.ArrayList<string>;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSBaseball.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSBaseball extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSBaseball {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSBeachParty.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSBeachParty extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSBeachParty {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      static getBeachClutter(): java.util.ArrayList<string>;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSBuryingCamp.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSBuryingCamp extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSBuryingCamp {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSFishingTrip.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSFishingTrip extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSFishingTrip {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      static getFishes(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getFishingTools(): java.util.ArrayList<string>;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSForestCamp.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSForestCamp extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSForestCamp {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      static getCoolerClutter(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getFireClutter(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getForestClutter(): java.util.ArrayList<string>;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSForestCampEaten.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSForestCampEaten extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSForestCampEaten {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSHunterCamp.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSHunterCamp extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSHunterCamp {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      static getForestClutter(): java.util.ArrayList<string>;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSMusicFest.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSMusicFest extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSMusicFest {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSMusicFestStage.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSMusicFestStage extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSMusicFestStage {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSSexyTime.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSSexyTime extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSSexyTime {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RZSTrapperCamp.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RZSTrapperCamp extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
     */
    export class RZSTrapperCamp {
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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
      static getTrapList(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor RandomizedZoneStoryBase.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase extends zombie.randomizedWorld.RandomizedWorldBase
     */
    export class RandomizedZoneStoryBase {
      /** int */
      static readonly baseChance: number;
      /** int */
      static totalChance: number;
      /** java.lang.String */
      static readonly zoneStory?: string;

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
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): void
       */
      cleanAreaForStory(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
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
      getMinimumHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (RandomizedZoneStoryBase arg0, Zone arg1): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareFullZone(arg0: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase, arg1: zombie.iso.IsoMetaGrid$Zone): zombie.iso.IsoGridSquare;
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
       *  - (Empty): boolean
       *  - (Zone arg0, boolean arg1): boolean
       */
      isValid(arg0?: zombie.iso.IsoMetaGrid$Zone, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      randomizeZoneStory(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
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
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef): zombie.vehicles.BaseVehicle;
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
       *  - (Zone arg0): void
       */
      static initAllRZSMapChance(arg0: zombie.iso.IsoMetaGrid$Zone): void;
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
       *  - (Zone arg0, boolean arg1): boolean
       */
      static isValidForStory(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /** [ENUM] zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType */
    export class RandomizedZoneStoryBase$ZoneType {
      protected constructor();
      static readonly Baseball: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      static readonly Beach: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      static readonly Forest: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      static readonly Lake: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      static readonly MusicFest: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      static readonly MusicFestStage: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      static readonly NewsStory: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType;
      name(): string;
      ordinal(): number;
    }
  }
}
