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
 * File generated at Friday July 2022 15:18:33.604-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.iso.areas {
    /**
     * @customConstructor BuildingScore.new
     * @
     * [CLASS] zombie.iso.areas.BuildingScore
     */
    export class BuildingScore {
      /**
       * Constructors: 
       *  - (IsoBuilding arg0)
       */
      constructor(arg0: zombie.iso.areas.IsoBuilding | null);
    }
    /**
     * @customConstructor IsoBuilding.new
     * @
     * [CLASS] zombie.iso.areas.IsoBuilding extends zombie.iso.areas.IsoArea
     */
    export class IsoBuilding {
      /** float */
      static GoodBuildingScore: number;
      /** int */
      static IDMax: number;
      /** float */
      static PoorBuildingScore: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoCell arg0)
       */
      constructor(arg0?: zombie.iso.IsoCell | null);
      /**
       * Method Parameters: 
       *  - (IsoRoom arg0): void
       */
      AddRoom(arg0: zombie.iso.areas.IsoRoom): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CalculateExits(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CalculateWindows(): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): boolean
       */
      ContainsAllItems(arg0: java.util.Stack<string>): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, LotHeader arg1): void
       */
      CreateFrom(arg0: zombie.iso.BuildingDef, arg1: zombie.iso.LotHeader): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      FillContainers(): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0, boolean arg1): number
       */
      ScoreBuildingPersonSpecific(arg0: zombie.characters.SurvivorDesc, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      TriggerAlarm(): void;
      /**
       * Method Parameters: 
       *  - (IsoDoor arg0, boolean arg1): void
       *  - (IsoDoor arg0, boolean arg1, IsoGridSquare arg2, IsoBuilding arg3): void
       */
      addDoor(arg0: zombie.iso.objects.IsoDoor, arg1: boolean, arg2?: zombie.iso.IsoGridSquare, arg3?: zombie.iso.areas.IsoBuilding): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0, boolean arg1): void
       *  - (IsoWindow arg0, boolean arg1, IsoGridSquare arg2, IsoBuilding arg3): void
       */
      addWindow(arg0: zombie.iso.objects.IsoWindow, arg1: boolean, arg2?: zombie.iso.IsoGridSquare, arg3?: zombie.iso.areas.IsoBuilding): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsRoom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceAwake(): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): zombie.inventory.ItemContainer
       */
      getContainerWith(arg0: zombie.inventory.ItemType): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.BuildingDef
       */
      getDef(): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFreeTile(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemContainer
       */
      getRandomContainer(arg0: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoWindow
       */
      getRandomFirstFloorWindow(): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoRoom
       *  - (String arg0): zombie.iso.areas.IsoRoom
       */
      getRandomRoom(arg0?: string): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoomsNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllExplored(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isResidential(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToxic(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setToxic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static Ardo(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static Thigglewhat(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      static Thigglewhat2(arg0: string, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static Thigglewhat22(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number[]
       */
      static asasa(arg0: string): number[];
    }
    /**
     * @customConstructor IsoRoom.new
     * @
     * [CLASS] zombie.iso.areas.IsoRoom
     */
    export class IsoRoom {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoCell arg0): zombie.iso.areas.IsoBuilding
       */
      CreateBuilding(arg0: zombie.iso.IsoCell): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      createLights(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.ItemContainer>
       */
      getContainer(): java.util.ArrayList<zombie.inventory.ItemContainer>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFreeTile(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>
       */
      getLightSwitches(): java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.RoomDef
       */
      getRoomDef(): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getSquares(): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Vector<zombie.iso.IsoGridSquare>
       */
      getTileList(): java.util.Vector<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getWaterSources(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWindow>
       */
      getWindows(): java.util.ArrayList<zombie.iso.objects.IsoWindow>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasLightSwitches(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isInside(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onSee(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      refreshSquares(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      removeSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setWaterSources(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      spawnZombies(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      useWater(): void;
    }
    /**
     * @customConstructor NonPvpZone.new
     * @
     * [CLASS] zombie.iso.areas.NonPvpZone
     */
    export class NonPvpZone {
      /** java.util.ArrayList<zombie.iso.areas.NonPvpZone> */
      static readonly nonPvpZoneList?: java.util.ArrayList<zombie.iso.areas.NonPvpZone>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, int arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0?: string | null, arg1?: number, arg2?: number, arg3?: number, arg4?: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX2(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY2(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX2(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY2(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      syncNonPvpZone(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3, int arg4): zombie.iso.areas.NonPvpZone
       */
      static addNonPvpZone(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): zombie.iso.areas.NonPvpZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.NonPvpZone>
       */
      static getAllZones(): java.util.ArrayList<zombie.iso.areas.NonPvpZone>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.areas.NonPvpZone
       */
      static getNonPvpZone(arg0: number, arg1: number): zombie.iso.areas.NonPvpZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.NonPvpZone
       */
      static getZoneByTitle(arg0: string): zombie.iso.areas.NonPvpZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static removeNonPvpZone(arg0: string): void;
    }
    /**
     * @customConstructor SafeHouse.new
     * @
     * [CLASS] zombie.iso.areas.SafeHouse
     */
    export class SafeHouse {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3, String arg4)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addPlayer(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.iso.areas.SafeHouse
       *  - (String arg0): zombie.iso.areas.SafeHouse
       */
      alreadyHaveSafehouse(arg0: zombie.characters.IsoPlayer | string): zombie.iso.areas.SafeHouse;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      checkTrespass(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      containsLocation(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastVisited(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOpenTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOwner(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerConnected(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPlayers(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX2(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY2(): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      isOwner(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isRespawnInSafehouse(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      kickOutOfSafehouse(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       *  - (String arg0): boolean
       */
      playerAllowed(arg0: zombie.characters.IsoPlayer | string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removePlayer(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       *  - (IsoPlayer arg0, boolean arg1): void
       */
      removeSafeHouse(arg0: zombie.characters.IsoPlayer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setH(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLastVisited(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOpenTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOwner(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerConnected(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setPlayers(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, String arg1): void
       */
      setRespawnInSafehouse(arg0: boolean, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setW(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncSafehouse(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updatePlayersConnected(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      updateSafehouse(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): zombie.iso.areas.SafeHouse
       *  - (int arg0, int arg1, int arg2, int arg3, String arg4, boolean arg5): zombie.iso.areas.SafeHouse
       */
      static addSafeHouse(arg0: zombie.iso.IsoGridSquare | number, arg1: zombie.characters.IsoPlayer | number, arg2?: number, arg3?: number, arg4?: string, arg5?: boolean): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      static allowSafeHouse(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): string
       */
      static canBeSafehouse(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static clearSafehouseList(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.areas.SafeHouse
       *  - (int arg0, int arg1, int arg2, int arg3): zombie.iso.areas.SafeHouse
       */
      static getSafeHouse(arg0: zombie.iso.IsoGridSquare | number, arg1?: number, arg2?: number, arg3?: number): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.SafeHouse>
       */
      static getSafehouseList(): java.util.ArrayList<zombie.iso.areas.SafeHouse>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.iso.areas.SafeHouse
       *  - (String arg0): zombie.iso.areas.SafeHouse
       */
      static hasSafehouse(arg0: zombie.characters.IsoPlayer | string): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoGridSquare arg1): boolean
       */
      static isPlayerAllowedOnSquare(arg0: zombie.characters.IsoPlayer, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.areas.SafeHouse
       */
      static isSafeHouse(arg0: zombie.iso.IsoGridSquare, arg1: string, arg2: boolean): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.iso.areas.SafeHouse
       */
      static load(arg0: java.nio.ByteBuffer, arg1: number): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updateSafehousePlayersConnected(): void;
    }
  }
}
