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
 * File generated at Friday July 2022 15:18:33.677-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.iso {
    /**
     * @customConstructor BentFences.new
     * @
     * [CLASS] zombie.iso.BentFences
     */
    export class BentFences {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, KahluaTableImpl arg1): void
       */
      addFenceTiles(arg0: number, arg1: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoDirections arg1): void
       */
      bendFence(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      isBentObject(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      isUnbentObject(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoDirections arg1): void
       */
      swapTiles(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      unbendFence(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.BentFences
       */
      static getInstance(): zombie.iso.BentFences;
    }
    /**
     * @customConstructor BrokenFences.new
     * @
     * [CLASS] zombie.iso.BrokenFences
     */
    export class BrokenFences {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      addBrokenTiles(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      addDebrisTiles(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoDirections arg1): void
       */
      destroyFence(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      isBreakableObject(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setDamagedLeft(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setDamagedRight(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setDestroyed(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, boolean arg1, boolean arg2): void
       */
      updateSprite(arg0: zombie.iso.IsoObject, arg1: boolean, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.BrokenFences
       */
      static getInstance(): zombie.iso.BrokenFences;
    }
    /**
     * @customConstructor BuildingDef.new
     * @
     * [CLASS] zombie.iso.BuildingDef
     */
    export class BuildingDef {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      CalculateBounds(arg0: java.util.ArrayList<zombie.iso.RoomDef>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsRoom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkY(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2f arg2): number
       */
      getClosestPoint(arg0: number, arg1: number, arg2: org.joml.Vector2f): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.RoomDef
       */
      getFirstRoom(): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFreeSquareInRoom(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeySpawned(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.RoomDef
       */
      getRoom(arg0: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.RoomDef>
       */
      getRooms(): java.util.ArrayList<zombie.iso.RoomDef>;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
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
       *  - (Empty): zombie.iso.IsoMetaGrid$Zone
       */
      getZone(): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlarmed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllExplored(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyStreamedIn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasBeenVisited(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      overlapsChunk(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recalculate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      refreshSquares(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlarmed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasBeenVisited(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeySpawned(arg0: number): void;
    }
    /**
     * @customConstructor ContainerOverlays.new
     * @
     * [CLASS] zombie.iso.ContainerOverlays
     */
    export class ContainerOverlays {
      /** zombie.iso.ContainerOverlays */
      static readonly instance?: zombie.iso.ContainerOverlays;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      addOverlays(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      hasOverlays(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      updateContainerOverlaySprite(arg0: zombie.iso.IsoObject): void;
    }
    /**
     * @customConstructor IsoCamera.new
     * @
     * [CLASS] zombie.iso.IsoCamera
     */
    export class IsoCamera {
      /** zombie.characters.IsoGameCharacter */
      static CamCharacter?: zombie.characters.IsoGameCharacter;
      /** zombie.iso.Vector2 */
      static FakePos?: zombie.iso.Vector2;
      /** zombie.iso.Vector2 */
      static FakePosVec?: zombie.iso.Vector2;
      /** int */
      static PLAYER_OFFSET_X: number;
      /** int */
      static PLAYER_OFFSET_Y: number;
      /** int */
      static TargetTileX: number;
      /** int */
      static TargetTileY: number;
      /** zombie.iso.PlayerCamera[] */
      static readonly cameras?: zombie.iso.PlayerCamera[];
      /** zombie.iso.IsoCamera$FrameState */
      static readonly frameState?: zombie.iso.IsoCamera$FrameState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      static SetCharacterToFollow(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      static getCamCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getFakePos(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getFakePosVec(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastOffX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLastOffY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getOffX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getOffY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getOffscreenHeight(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getOffscreenLeft(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getOffscreenTop(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getOffscreenWidth(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getRightClickOffX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getRightClickOffY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getScreenHeight(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getScreenLeft(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getScreenTop(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getScreenWidth(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTOffX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTOffY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTargetTileX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTargetTileY(): number;
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
       *  - (IsoGameCharacter arg0): void
       */
      static setCamCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      static setFakePos(arg0: zombie.iso.Vector2): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      static setFakePosVec(arg0: zombie.iso.Vector2): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setLastOffX(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setLastOffY(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setOffX(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setOffY(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setTargetTileX(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setTargetTileY(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updateAll(): void;
    }
    /**
     * @customConstructor FrameState.new
     * @
     * [CLASS] zombie.iso.IsoCamera$FrameState
     */
    export class IsoCamera$FrameState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      set(arg0: number): void;
    }
    /**
     * @customConstructor IsoCell.new
     * @
     * [CLASS] zombie.iso.IsoCell
     */
    export class IsoCell {
      /** boolean */
      static readonly ENABLE_SQUARE_CACHE: boolean;
      /** int */
      static readonly ISOANGLEFACTOR: number;
      /** int */
      static MaxHeight: number;
      /** int */
      static readonly RTF_MinusFloorCharacters: number;
      /** int */
      static readonly RTF_ShadedFloor: number;
      /** int */
      static readonly RTF_Shadows: number;
      /** int */
      static readonly RTF_SolidFloor: number;
      /** int */
      static readonly RTF_VegetationCorpses: number;
      /** zombie.iso.IsoCell$PerPlayerRender[] */
      static readonly perPlayerRender?: zombie.iso.IsoCell$PerPlayerRender[];

      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      CalculateVertColoursForTile(arg0: zombie.iso.IsoGridSquare, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      CanBuildingSquareOccludePlayer(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): zombie.iso.IsoGridSquare
       */
      ConnectNewSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DeleteAllMovingObjects(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      DistanceFromSupport(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): boolean
       */
      DoBuilding(arg0: number, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GetSquare arg1): void
       */
      DoGridNav(arg0: zombie.iso.IsoGridSquare, arg1: zombie.iso.IsoGridSquare$GetSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DrawStencilMask(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      EnsureSurroundNotNull(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetEffectivePlayerRoomId(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      IsPlayerWindowPeeking(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      LoadPlayer(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3, boolean arg4): void
       *  - (IsoLot arg0, int arg1, int arg2, int arg3, boolean arg4): void
       *  - (IsoLot arg0, int arg1, int arg2, int arg3, IsoChunk arg4, int arg5, int arg6): void
       */
      PlaceLot(arg0: string | zombie.iso.IsoLot, arg1: number, arg2: number, arg3: number, arg4: boolean | zombie.iso.IsoChunk, arg5?: number, arg6?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ProcessSpottedRooms(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      Remove(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RenderFloorShading(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RenderTiles(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoHeatSource arg0): void
       */
      addHeatSource(arg0: zombie.iso.IsoHeatSource): void;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0): void
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, int arg6): zombie.iso.IsoLightSource
       */
      addLamppost(arg0: zombie.iso.IsoLightSource | number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number): void | zombie.iso.IsoLightSource;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      addMovingObject(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addToProcessIsoObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addToProcessIsoObjectRemove(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       *  - (InventoryItem arg0): void
       */
      addToProcessItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem> | zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       *  - (InventoryItem arg0): void
       */
      addToProcessItemsRemove(arg0: java.util.ArrayList<zombie.inventory.InventoryItem> | zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldInventoryObject arg0): void
       */
      addToProcessWorldItems(arg0: zombie.iso.objects.IsoWorldInventoryObject): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldInventoryObject arg0): void
       */
      addToProcessWorldItemsRemove(arg0: zombie.iso.objects.IsoWorldInventoryObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addToStaticUpdaterObjectList(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      addToWindowList(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (Mover arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      blocked(arg0: zombie.ai.astar.Mover, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      checkHaveRoof(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      clearCacheGridSquare(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3): zombie.iso.IsoGridSquare
       */
      createNewGridSquare(arg0: number, arg1: number, arg2: number, arg3: boolean): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getAddList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (BuildingSearchCriteria arg0, int arg1): java.util.Stack<zombie.iso.areas.BuildingScore>
       */
      getBestBuildings(arg0: zombie.iso.IsoCell$BuildingSearchCriteria, arg1: number): java.util.Stack<zombie.iso.areas.BuildingScore>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.IsoBuilding>
       */
      getBuildingList(): java.util.ArrayList<zombie.iso.areas.IsoBuilding>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<number, zombie.iso.areas.BuildingScore>
       */
      getBuildingScores(): java.util.HashMap<number, zombie.iso.areas.BuildingScore>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoChunk
       */
      getChunk(arg0: number, arg1: number): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoChunk
       */
      getChunkForGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoChunkMap
       */
      getChunkMap(arg0: number): zombie.iso.IsoChunkMap;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoRoom arg1): zombie.iso.areas.IsoBuilding
       */
      getClosestBuildingExcept(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.areas.IsoRoom): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentLightX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentLightY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentLightZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.LotHeader
       */
      getCurrentLotHeader(): zombie.iso.LotHeader;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getDangerScore(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.utils.OnceEvery
       */
      getDangerUpdate(): zombie.core.utils.OnceEvery;
      /**
       * Method Parameters: 
       *  - (int arg0): se.krka.kahlua.vm.KahluaTable
       */
      getDrag(arg0: number): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoZombie
       */
      getFakeZombieForHit(): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      getFreeTile(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Double arg0, Double arg1, Double arg2): zombie.iso.IsoGridSquare
       *  - (double arg0, double arg1, double arg2): zombie.iso.IsoGridSquare
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): zombie.iso.IsoGridSquare
       */
      getGridSquareDirect(arg0: number, arg1: number, arg2: number, arg3: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2, int arg3): number
       */
      getHeatSourceHighestTemperature(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      getHeatSourceTemperature(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.iso.IsoLightSource>
       */
      getLamppostPositions(): java.util.Stack<zombie.iso.IsoLightSource>;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Thread
       */
      getLightInfoUpdate(): java.lang.Thread;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoLightSource
       */
      getLightSourceAt(arg0: number, arg1: number, arg2: number): zombie.iso.IsoLightSource;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getLuaObjectList(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxFloors(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZ(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.IsoZombie
       */
      getNearestVisibleZombie(arg0: number): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.IsoSurvivor
       */
      getNetworkPlayer(arg0: number): zombie.characters.IsoSurvivor;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getObjectList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2): zombie.iso.IsoGridSquare
       */
      getOrCreateGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getProcessIsoObjectRemove(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getProcessIsoObjects(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getProcessItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getProcessItemsRemove(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>
       */
      getProcessWorldItems(): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoPushableObject>
       */
      getPushableObjectList(): java.util.ArrayList<zombie.iso.IsoPushableObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomFreeTileInRoom(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomOutdoorTile(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getRelativeGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoGameCharacter>
       */
      getRemoteSurvivorList(): java.util.ArrayList<zombie.characters.IsoGameCharacter>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getRemoveList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.areas.IsoRoom
       */
      getRoom(arg0: number): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.IsoRoom>
       */
      getRoomList(): java.util.ArrayList<zombie.iso.areas.IsoRoom>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteManager
       */
      getSpriteManager(): zombie.iso.sprite.IsoSpriteManager;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getStaticUpdaterObjectList(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      getStencilValue(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      getStencilValue2z(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoSurvivor>
       */
      getSurvivorList(): java.util.ArrayList<zombie.characters.IsoSurvivor>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.vehicles.BaseVehicle>
       */
      getVehicles(): java.util.ArrayList<zombie.vehicles.BaseVehicle>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.fx.IsoWeatherFX
       */
      getWeatherFX(): zombie.iso.weather.fx.IsoWeatherFX;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWindow>
       */
      getWindowList(): java.util.ArrayList<zombie.iso.objects.IsoWindow>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getZombieList(): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      gridSquareIsSnow(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      invalidatePeekedRoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isInChunkMap(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isNull(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSafeToAdd(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      putInVehicle(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reloadRainTextures(): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      removeFromWindowList(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (IsoHeatSource arg0): void
       */
      removeHeatSource(arg0: zombie.iso.IsoHeatSource): void;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0): void
       *  - (int arg0, int arg1, int arg2): void
       */
      removeLamppost(arg0: zombie.iso.IsoLightSource | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      resumeVehicleSounds(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoRoom arg0): void
       */
      roomSpotted(arg0: zombie.iso.areas.IsoRoom): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0, boolean arg1): void
       */
      save(arg0: java.io.DataOutputStream, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      savePlayer(): void;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       *  - (IsoChunk arg0, int arg1): void
       */
      setCacheChunk(arg0: zombie.iso.IsoChunk, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, IsoGridSquare arg3): void
       */
      setCacheGridSquare(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, IsoGridSquare arg3, int arg4): void
       */
      setCacheGridSquareLocal(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoGridSquare, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentLightX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentLightY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentLightZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (OnceEvery arg0): void
       */
      setDangerUpdate(arg0: zombie.core.utils.OnceEvery): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0, int arg1): void
       */
      setDrag(arg0: se.krka.kahlua.vm.KahluaTable, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Thread arg0): void
       */
      setLightInfoUpdate(arg0: java.lang.Thread): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRainAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRainIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRainSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSafeToAdd(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSnowTarget(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setStencilValue(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setStencilValue2z(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWorldX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWorldY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateHeatSources(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      static FromMouseTile(): zombie.iso.IsoDirections;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getBComponent(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.iso.areas.BuildingScore>
       */
      static getBuildings(): java.util.Stack<zombie.iso.areas.BuildingScore>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getGComponent(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      static getInstance(): zombie.iso.IsoCell;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMaxHeight(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getRComponent(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Stack arg0): void
       */
      static setBuildings(arg0: java.util.Stack<zombie.iso.areas.BuildingScore>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static toIntColor(arg0: number, arg1: number, arg2: number, arg3: number): number;
    }
    /** [ENUM] zombie.iso.IsoCell$BuildingSearchCriteria */
    export class IsoCell$BuildingSearchCriteria {
      protected constructor();
      static readonly Defense: zombie.iso.IsoCell$BuildingSearchCriteria;
      static readonly Food: zombie.iso.IsoCell$BuildingSearchCriteria;
      static readonly General: zombie.iso.IsoCell$BuildingSearchCriteria;
      static readonly Weapons: zombie.iso.IsoCell$BuildingSearchCriteria;
      static readonly Wood: zombie.iso.IsoCell$BuildingSearchCriteria;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor PerPlayerRender.new
     * @
     * [CLASS] zombie.iso.IsoCell$PerPlayerRender
     */
    export class IsoCell$PerPlayerRender {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setSize(arg0: number, arg1: number): void;
    }
    /**
     * @customConstructor IsoChunk.new
     * @
     * [CLASS] zombie.iso.IsoChunk
     */
    export class IsoChunk {
      /** java.lang.Object */
      static readonly WriteLock?: any;
      /** boolean */
      static bDoServerRequests: boolean;
      /** java.util.concurrent.ConcurrentLinkedQueue<zombie.iso.IsoChunk> */
      static readonly loadGridSquare?: java.util.concurrent.ConcurrentLinkedQueue<zombie.iso.IsoChunk>;
      /** byte[][] */
      static readonly renderByIndex?: number[][];

      /**
       * Constructors: 
       *  - (IsoCell arg0)
       */
      constructor(arg0: zombie.iso.IsoCell | null);
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      AddBlood(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      AddCorpses(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      AddVehicles(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      Blam(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      LoadBrandNew(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, ByteBuffer arg2): boolean
       */
      LoadFromBuffer(arg0: number, arg1: number, arg2: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      LoadFromDisk(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      LoadFromDiskOrBuffer(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, ByteBuffer arg2): boolean
       */
      LoadOrCreate(arg0: number, arg1: number, arg2: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, String arg2, VehicleType arg3): boolean
       */
      RandomizeModel(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.IsoMetaGrid$Zone, arg2: string, arg3: zombie.vehicles.VehicleType): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (ByteBuffer arg0, CRC32 arg1): java.nio.ByteBuffer
       */
      Save(arg0: boolean | java.nio.ByteBuffer, arg1?: java.util.zip.CRC32): void | java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (Chunk arg0, CRC32 arg1): void
       */
      SaveLoadedChunk(arg0: zombie.network.ClientChunkRequest$Chunk, arg1: java.util.zip.CRC32): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): void
       */
      addBloodSplat(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addGeneratorPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, PerObjectLogic arg1): void
       */
      addObjectAmbientEmitter(arg0: zombie.iso.IsoObject, arg1: zombie.audio.ObjectAmbientEmitters$PerObjectLogic): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, boolean arg1): void
       */
      addRandomCarCrash(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      addSpawnedRoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      addSurvivorInHorde(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, boolean arg1): boolean
       */
      canAddRandomCarCrash(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkForMissingGenerators(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doLoadGridsquare(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doReuseGridsquares(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.ErosionData$Chunk
       */
      getErosionData(): zombie.erosion.ErosionData$Chunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHashCodeObjects(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfWaterTiles(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.areas.IsoRoom
       */
      getRoom(arg0: number): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaGrid$Zone
       */
      getScavengeZone(): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCodeNoOverride(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isGeneratorPoweringSquare(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNewChunk(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isSpawnedRoom(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadInMainThread(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadInWorldStreamerThread(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      loadObjectState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recalcHashCodeObjects(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recalcNeighboursNow(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      removeGeneratorPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      removeObjectAmbientEmitter(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetForStore(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): boolean
       */
      saveObjectState(arg0: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setCache(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setCacheIncludingNull(): void;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawnData arg0): void
       */
      setRandomVehicleStoryToSpawnLater(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, IsoGridSquare arg3): void
       */
      setSquare(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateBuildings(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateVehicleStory(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      static FileExists(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       *  - (IsoGridSquare arg0, int arg1): number
       */
      static Fix2x(arg0: string | zombie.iso.IsoGridSquare, arg1?: number): string | number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static IsDebugSave(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, ByteBuffer arg3): java.nio.ByteBuffer
       */
      static SafeRead(arg0: string, arg1: number, arg2: number, arg3: java.nio.ByteBuffer): java.nio.ByteBuffer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, ByteBuffer arg3): void
       */
      static SafeWrite(arg0: string, arg1: number, arg2: number, arg3: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      static addFromCheckedVehicles(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BaseVehicle arg0): boolean
       */
      static doSpawnedVehiclesInInvalidPosition(arg0: zombie.vehicles.BaseVehicle): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      static removeFromCheckedVehicles(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updatePlayerInBullet(): void;
    }
    /** [ENUM] zombie.iso.IsoChunk$JobType */
    export class IsoChunk$JobType {
      protected constructor();
      static readonly Convert: zombie.iso.IsoChunk$JobType;
      static readonly None: zombie.iso.IsoChunk$JobType;
      static readonly SoftReset: zombie.iso.IsoChunk$JobType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IsoChunkMap.new
     * @
     * [CLASS] zombie.iso.IsoChunkMap
     */
    export class IsoChunkMap {
      /** int */
      static ChunkGridWidth: number;
      /** int */
      static ChunkWidthInTiles: number;
      /** int */
      static readonly ChunksPerWidth: number;
      /** int */
      static readonly LEVELS: number;
      /** int */
      static MPWorldXA: number;
      /** int */
      static MPWorldYA: number;
      /** int */
      static MPWorldZA: number;
      /** int[] */
      static readonly SWorldX?: number[];
      /** int[] */
      static readonly SWorldY?: number[];
      /** java.util.HashMap<java.lang.Integer, zombie.iso.IsoChunk> */
      static readonly SharedChunks?: java.util.HashMap<number, zombie.iso.IsoChunk>;
      /** int */
      static WorldXA: number;
      /** int */
      static WorldYA: number;
      /** int */
      static WorldZA: number;
      /** java.util.concurrent.locks.ReentrantLock */
      static readonly bSettingChunk?: java.util.concurrent.locks.ReentrantLock;
      /** java.util.concurrent.ConcurrentLinkedQueue<zombie.iso.IsoChunk> */
      static readonly chunkStore?: java.util.concurrent.ConcurrentLinkedQueue<zombie.iso.IsoChunk>;

      /**
       * Constructors: 
       *  - (IsoCell arg0)
       */
      constructor(arg0: zombie.iso.IsoCell | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      LoadChunk(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): zombie.iso.IsoChunk
       */
      LoadChunkForLater(arg0: number, arg1: number, arg2: number, arg3: number): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ProcessChunkPos(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Save(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SwapChunkBuffers(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Unload(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkIntegrity(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkIntegrityThread(): void;
      /**
       * Method Parameters: 
       *  - (IsoChunkMap arg0): void
       */
      copy(arg0: zombie.iso.IsoChunkMap): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      drawDebugChunkMap(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoChunk
       */
      getChunk(arg0: number, arg1: number): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoChunk
       */
      getChunkCurrent(arg0: number, arg1: number): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoChunk
       */
      getChunkForGridSquare(arg0: number, arg1: number): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getGridSquareDirect(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.areas.IsoRoom
       */
      getRoom(arg0: number): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldXMaxTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldXMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldXMinTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldYMaxTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldYMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldYMinTiles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      processAllLoadGridSquare(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      renderBloodForChunks(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0, boolean arg1): boolean
       */
      setChunkDirect(arg0: zombie.iso.IsoChunk, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1, int arg2, int arg3): void
       */
      setGridSquare(arg0: zombie.iso.IsoGridSquare, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setInitialPos(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static CalcChunkWidth(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static setWorldStartPos(arg0: number, arg1: number): void;
    }
    /**
     * @customConstructor IsoDirectionSet.new
     * @
     * [CLASS] zombie.iso.IsoDirectionSet
     */
    export class IsoDirectionSet {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getNext(): zombie.iso.IsoDirections;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1): zombie.iso.IsoDirections
       */
      static rotate(arg0: zombie.iso.IsoDirections, arg1: number): zombie.iso.IsoDirections;
    }
    /** [ENUM] zombie.iso.IsoDirections */
    export class IsoDirections {
      protected constructor();
      static readonly E: zombie.iso.IsoDirections;
      static readonly Max: zombie.iso.IsoDirections;
      static readonly N: zombie.iso.IsoDirections;
      static readonly NE: zombie.iso.IsoDirections;
      static readonly NW: zombie.iso.IsoDirections;
      static readonly S: zombie.iso.IsoDirections;
      static readonly SE: zombie.iso.IsoDirections;
      static readonly SW: zombie.iso.IsoDirections;
      static readonly W: zombie.iso.IsoDirections;
      name(): string;
      ordinal(): number;
      RotRight(): zombie.iso.IsoDirections;

      ToVector(): zombie.iso.Vector2;

      index(): number;

      toAngle(): number;

      toCompassString(): string;

    }
    /**
     * @customConstructor IsoGridOcclusionData.new
     * @
     * [CLASS] zombie.iso.IsoGridOcclusionData
     */
    export class IsoGridOcclusionData {
      /** int */
      static readonly MAXBUILDINGOCCLUDERS: number;

      /**
       * Constructors: 
       *  - (IsoGridSquare arg0)
       */
      constructor(arg0: zombie.iso.IsoGridSquare | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (OcclusionFilter arg0): java.util.ArrayList<zombie.iso.areas.IsoBuilding>
       */
      getBuildingsCouldBeOccluders(arg0: zombie.iso.IsoGridOcclusionData$OcclusionFilter): java.util.ArrayList<zombie.iso.areas.IsoBuilding>;
      /**
       * Method Parameters: 
       *  - (OcclusionFilter arg0): boolean
       */
      getCouldBeOccludedByOrphanStructures(arg0: zombie.iso.IsoGridOcclusionData$OcclusionFilter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static SquareChanged(): void;
    }
    /** [ENUM] zombie.iso.IsoGridOcclusionData$OccluderType */
    export class IsoGridOcclusionData$OccluderType {
      protected constructor();
      static readonly Full: zombie.iso.IsoGridOcclusionData$OccluderType;
      static readonly NotFull: zombie.iso.IsoGridOcclusionData$OccluderType;
      static readonly Unknown: zombie.iso.IsoGridOcclusionData$OccluderType;
      name(): string;
      ordinal(): number;
    }
    /** [ENUM] zombie.iso.IsoGridOcclusionData$OcclusionFilter */
    export class IsoGridOcclusionData$OcclusionFilter {
      protected constructor();
      static readonly All: zombie.iso.IsoGridOcclusionData$OcclusionFilter;
      static readonly Left: zombie.iso.IsoGridOcclusionData$OcclusionFilter;
      static readonly Right: zombie.iso.IsoGridOcclusionData$OcclusionFilter;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IsoGridSquare.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare
     */
    export class IsoGridSquare {
      /** boolean */
      static CircleStencil: boolean;
      /** int */
      static IDMax: number;
      /** int */
      static RecalcLightTime: number;
      /** boolean */
      static USE_WALL_SHADER: boolean;
      /** boolean */
      static UseSlowCollision: boolean;
      /** int */
      static readonly WALL_TYPE_E: number;
      /** int */
      static readonly WALL_TYPE_N: number;
      /** int */
      static readonly WALL_TYPE_S: number;
      /** int */
      static readonly WALL_TYPE_W: number;
      /** float */
      static bmod: number;
      /** zombie.iso.IsoGridSquare$CellGetSquare */
      static readonly cellGetSquare?: zombie.iso.IsoGridSquare$CellGetSquare;
      /** java.util.ArrayList<zombie.iso.IsoGridSquare> */
      static readonly choices?: java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /** float */
      static gmod: number;
      /** int */
      static gridSquareCacheEmptyTimer: number;
      /** boolean */
      static isOnScreenLast: boolean;
      /** java.util.concurrent.ConcurrentLinkedQueue<zombie.iso.IsoGridSquare> */
      static readonly isoGridSquareCache?: java.util.concurrent.ConcurrentLinkedQueue<zombie.iso.IsoGridSquare>;
      /** java.util.ArrayDeque<zombie.iso.IsoGridSquare> */
      static loadGridSquareCache?: java.util.ArrayDeque<zombie.iso.IsoGridSquare>;
      /** float */
      static rmod: number;

      /**
       * Constructors: 
       *  - (IsoCell arg0, SliceY arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: zombie.iso.IsoCell | null, arg1: zombie.iso.SliceY | null, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       *  - (IsoObject arg0, int arg1): void
       */
      AddSpecialObject(arg0: zombie.iso.IsoObject, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      AddSpecialTileObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, int arg1, String arg2, String arg3, KahluaTable arg4): zombie.iso.objects.IsoThumpable
       */
      AddStairs(arg0: boolean, arg1: number, arg2: string, arg3: string, arg4: se.krka.kahlua.vm.KahluaTable): zombie.iso.objects.IsoThumpable;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       *  - (IsoObject arg0, int arg1): void
       */
      AddTileObject(arg0: zombie.iso.IsoObject, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, float arg1, float arg2, float arg3): zombie.inventory.InventoryItem
       *  - (String arg0, float arg1, float arg2, float arg3, int arg4): void
       *  - (InventoryItem arg0, float arg1, float arg2, float arg3, boolean arg4): zombie.inventory.InventoryItem
       */
      AddWorldInventoryItem(arg0: string | zombie.inventory.InventoryItem, arg1: number, arg2: number, arg3: number, arg4?: number | boolean): zombie.inventory.InventoryItem | void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      Burn(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BurnTick(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      BurnWalls(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BurnWallsTCOnly(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      CalcVisibility(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2, boolean arg3): boolean
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2, boolean arg3, boolean arg4): boolean
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2, boolean arg3, boolean arg4, GetSquare arg5): boolean
       */
      CalculateCollide(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean, arg3: boolean, arg4?: boolean, arg5?: zombie.iso.IsoGridSquare$GetSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       *  - (IsoGridSquare arg0, GetSquare arg1): boolean
       */
      CalculateVisionBlocked(arg0: zombie.iso.IsoGridSquare, arg1?: zombie.iso.IsoGridSquare$GetSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearTileObjects(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearTileObjectsExceptFloor(): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      DeleteTileObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DirtySlice(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): number
       *  - (IsoMovingObject arg0): number
       *  - (int arg0, int arg1): number
       */
      DistTo(arg0: zombie.iso.IsoGridSquare | zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): number
       *  - (IsoMovingObject arg0): number
       */
      DistToProper(arg0: zombie.iso.IsoGridSquare | zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, IsoDirections arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5, boolean arg6, boolean arg7, boolean arg8, WallShaperWhole arg9): void
       */
      DoCutawayShader(arg0: zombie.iso.IsoObject, arg1: zombie.iso.IsoDirections, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: zombie.iso.sprite.shapers.WallShaperWhole): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0, IsoDirections arg1, boolean arg2, boolean arg3, boolean arg4): void
       */
      DoCutawayShaderSprite(arg0: zombie.iso.sprite.IsoSprite, arg1: zombie.iso.IsoDirections, arg2: boolean, arg3: boolean, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, IsoFlagType arg2, float arg3, float arg4, float arg5): void
       */
      DoSplat(arg0: string, arg1: boolean, arg2: zombie.iso.SpriteDetails.IsoFlagType, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, int arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5, Shader arg6): number
       */
      DoWallLightingN(arg0: zombie.iso.IsoObject, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, int arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5, boolean arg6, boolean arg7, boolean arg8, Shader arg9): number
       */
      DoWallLightingNW(arg0: zombie.iso.IsoObject, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: zombie.core.opengl.Shader): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, int arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5, Shader arg6): number
       */
      DoWallLightingW(arg0: zombie.iso.IsoObject, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EnsureSurroundNotNull(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, ArrayList arg2): zombie.characters.IsoGameCharacter
       *  - (IsoGameCharacter arg0, int arg1, ArrayList arg2, IsoGameCharacter arg3, int arg4): zombie.characters.IsoGameCharacter
       */
      FindEnemy(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: java.util.ArrayList<zombie.iso.IsoMovingObject>, arg3?: zombie.characters.IsoGameCharacter, arg4?: number): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, Stack arg2): zombie.characters.IsoGameCharacter
       */
      FindFriend(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: java.util.Stack<zombie.characters.IsoGameCharacter>): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      FixStackableObjects(): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): boolean
       */
      Has(arg0: zombie.iso.SpriteDetails.IsoObjectType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasElevatedFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasPushable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasSlopedRoof(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasSlopedRoofNorth(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasSlopedRoofWest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasStairs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasStairsBelow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasStairsNorth(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasStairsWest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      InvalidateSpecialObjectPaths(): void;
      /**
       * Method Parameters: 
       *  - (IsoFlagType arg0): boolean
       *  - (String arg0): boolean
       */
      Is(arg0: zombie.iso.SpriteDetails.IsoFlagType | string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): boolean
       */
      IsOnScreen(arg0?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       *  - (IsoGridSquare arg0, GetSquare arg1): void
       */
      ReCalculateCollide(arg0: zombie.iso.IsoGridSquare, arg1?: zombie.iso.IsoGridSquare$GetSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       *  - (IsoGridSquare arg0, GetSquare arg1): void
       */
      ReCalculatePathFind(arg0: zombie.iso.IsoGridSquare, arg1?: zombie.iso.IsoGridSquare$GetSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       *  - (IsoGridSquare arg0, GetSquare arg1): void
       */
      ReCalculateVisionBlocked(arg0: zombie.iso.IsoGridSquare, arg1?: zombie.iso.IsoGridSquare$GetSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (boolean arg0, GetSquare arg1): void
       */
      RecalcAllWithNeighbours(arg0: boolean, arg1?: zombie.iso.IsoGridSquare$GetSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RecalcAllWithNeighboursMineOnly(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RecalcProperties(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RecalcPropertiesIfNeeded(): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       */
      RemoveTileObject(arg0: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       */
      RemoveTileObjectErosionNoRecalc(arg0: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, boolean arg2): boolean
       */
      RenderMinusFloorFxMask(arg0: number, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RenderOpenDoorOnly(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ResetIsoWorldRegion(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StartFire(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      TreatAsSolidFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoBrokenGlass
       */
      addBrokenGlass(): zombie.iso.objects.IsoBrokenGlass;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0, boolean arg1): void
       */
      addCorpse(arg0: zombie.iso.objects.IsoDeadBody, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      addDeferredCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.IsoObject
       */
      addFloor(arg0: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      checkRoomSeen(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearPuddles(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearWater(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      connectedWithFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, boolean arg1): boolean
       */
      damageSpriteSheetRopeFromBottom(arg0: zombie.characters.IsoPlayer, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      disableErosion(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      discard(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoTrap arg1, ExplosionMode arg2): void
       */
      drawCircleExplosion(arg0: number, arg1: zombie.iso.objects.IsoTrap, arg2: zombie.iso.objects.IsoTrap$ExplosionMode): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      explode(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      explodeTrap(): void;
      /**
       * Method Parameters: 
       *  - (IsoTrap arg0): void
       */
      explosion(arg0: zombie.iso.objects.IsoTrap): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fixPlacedItemRenderOffsets(): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): zombie.iso.IsoGridSquare
       */
      getAdjacentPathSquare(arg0: zombie.iso.IsoDirections): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): zombie.iso.IsoGridSquare
       */
      getAdjacentSquare(arg0: zombie.iso.IsoDirections): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      getApparentZ(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getBedTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoBrokenGlass
       */
      getBrokenGlass(): zombie.iso.objects.IsoBrokenGlass;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getCanSee(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      getCell(): zombie.iso.IsoCell;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoChunk
       */
      getChunk(): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      getCollideMatrix(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoCompost
       */
      getCompost(): zombie.iso.objects.IsoCompost;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.IsoObject
       */
      getContainerItem(arg0: string): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): zombie.iso.objects.IsoCurtain
       */
      getCurtain(arg0: zombie.iso.SpriteDetails.IsoObjectType): zombie.iso.objects.IsoCurtain;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getDarkMulti(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoDeadBody
       */
      getDeadBody(): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.iso.objects.IsoDeadBody>
       */
      getDeadBodys(): java.util.List<zombie.iso.objects.IsoDeadBody>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoGameCharacter>
       */
      getDeferedCharacters(): java.util.ArrayList<zombie.characters.IsoGameCharacter>;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getDoor(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getDoorFrameTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getDoorOrWindow(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, boolean arg1): zombie.iso.IsoObject
       */
      getDoorOrWindowOrWindowFrame(arg0: zombie.iso.IsoDirections, arg1: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getDoorTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getE(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.ErosionData$Square
       */
      getErosionData(): zombie.erosion.ErosionData$Square;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getFloor(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoGenerator
       */
      getGenerator(): zombie.iso.objects.IsoGenerator;
      /**
       * Method Parameters: 
       *  - (boolean arg0): number
       */
      getGridSneakModifier(arg0: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ZomboidBitFlag
       */
      getHasTypes(): zombie.ZomboidBitFlag;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHashCodeObjects(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHashCodeObjectsInt(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getHoppable(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.objects.IsoThumpable
       */
      getHoppableThumpable(arg0: boolean): zombie.iso.objects.IsoThumpable;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoThumpable
       */
      getHoppableThumpableTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoThumpable;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getHoppableTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getHoppableWall(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHourLastSeen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSinceLastSeen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, long arg1): boolean
       */
      getIsDissolved(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoDoor
       */
      getIsoDoor(): zombie.iso.objects.IsoDoor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IWorldRegion
       */
      getIsoWorldRegion(): zombie.iso.areas.isoregion.regions.IWorldRegion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLampostTotalB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLampostTotalG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLampostTotalR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getLightInfluenceB(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getLightInfluenceG(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getLightInfluenceR(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getLightLevel(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.list.PZArrayList<zombie.iso.IsoObject>
       */
      getLocalTemporaryObjects(): zombie.util.list.PZArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getLuaMovingObjectList(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getLuaTileObjectList(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getMovingObjects(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getN(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.list.PZArrayList<zombie.iso.IsoObject>
       */
      getObjects(): zombie.util.list.PZArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridOcclusionData
       */
      getOcclusionData(): zombie.iso.IsoGridOcclusionData;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): zombie.iso.IsoObject
       */
      getOpenDoor(arg0: zombie.iso.IsoDirections): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridOcclusionData
       */
      getOrCreateOcclusionData(): zombie.iso.IsoGridOcclusionData;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      getPathMatrix(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getPlayerBuiltFloor(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, long arg1): boolean
       */
      getPlayerCutawayFlag(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoPuddlesGeometry
       */
      getPuddles(): zombie.iso.IsoPuddlesGeometry;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPuddlesDir(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPuddlesInGround(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoRaindrop
       */
      getRainDrop(): zombie.iso.objects.IsoRaindrop;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoRainSplash
       */
      getRainSplash(): zombie.iso.objects.IsoRainSplash;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getRoofHideBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoRoom
       */
      getRoom(): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoomID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoomSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getS(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getSeen(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getSheetRope(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getSpecialObjects(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getStaticMovingObjects(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getTargetDarkMulti(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getThumpableWall(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getThumpableWallOrHoppable(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.objects.IsoThumpable
       */
      getThumpableWindow(arg0: boolean): zombie.iso.objects.IsoThumpable;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): zombie.iso.IsoGridSquare
       */
      getTileInDirection(arg0: zombie.iso.IsoDirections): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalWeightOfItemsOnFloor(): number;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getTransparentWallTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrapPositionX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrapPositionY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrapPositionZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoTree
       */
      getTree(): zombie.iso.objects.IsoTree;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getVehicleContainer(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getVertLight(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      getVisionMatrix(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getW(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getWall(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getWallFull(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getWallHoppable(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getWallHoppableTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getWallSE(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWallType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoWaterGeometry
       */
      getWater(): zombie.iso.IsoWaterGeometry;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoWindow
       *  - (boolean arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0?: boolean): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.IsoObject
       */
      getWindowFrame(arg0: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getWindowFrameTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoThumpable
       */
      getWindowThumpableTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoThumpable;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoWindow
       */
      getWindowTo(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>
       */
      getWorldObjects(): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): zombie.characters.IsoZombie
       */
      getZombie(): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaGrid$Zone
       */
      getZone(): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getZoneType(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      hasBlockedDoor(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      hasBlockedWindow(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasFlies(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      hasFloor(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSupport(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWindowFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWindowOrWindowFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCodeNoOverride(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveBlood(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveDoor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveElectricity(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveFire(): boolean;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0, float arg1, float arg2): void
       */
      interpolateLight(arg0: zombie.core.textures.ColorInfo, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAdjacentToWindow(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isBlockedTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCacheIsFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCachedIsFree(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isCanSee(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCommonGrass(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isCouldSee(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isDoorBlockedTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isDoorTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isFree(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       *  - (boolean arg0, boolean arg1): boolean
       */
      isFreeOrMidair(arg0: boolean, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isHoppableTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInARoom(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isNotBlocked(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutside(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOverlayDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (IsoGridSquare arg0, int arg1): void
       */
      isSafeToSpawn(arg0?: zombie.iso.IsoGridSquare, arg1?: number): boolean | void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isSameStaircase(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isSeen(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolidFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolidFloorCached(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolidTrans(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isSomethingTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVehicleIntersecting(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isWallTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isWindowBlockedTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isWindowTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, int arg1): number
       */
      placeWallAndDoorCheck(arg0: zombie.iso.IsoObject, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       */
      playSound(arg0: string, arg1?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recalcHashCodeObjects(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllWorldObjects(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1): void
       */
      removeBlood(arg0: boolean, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0, boolean arg1): void
       */
      removeCorpse(arg0: zombie.iso.objects.IsoDeadBody, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeErosionObject(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, boolean arg1): boolean
       */
      removeSheetRopeFromBottom(arg0: zombie.characters.IsoPlayer, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoWorldInventoryObject arg0): void
       */
      removeWorldObject(arg0: zombie.iso.objects.IsoWorldInventoryObject): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, boolean arg2): void
       */
      renderCharacters(arg0: number, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      renderDeferredCharacters(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      restackSheetRope(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, ObjectOutputStream arg1): void
       *  - (ByteBuffer arg0, ObjectOutputStream arg1, boolean arg2): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: java.io.ObjectOutputStream, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      scoreAsWaypoint(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCacheIsFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCachedIsFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setCanSee(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setCouldSee(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setDarkMulti(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setE(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasFlies(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHaveElectricity(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setHourSeenToCurrent(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, long arg2): void
       */
      setIsDissolved(arg0: number, arg1: boolean, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setIsSeen(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldRegion arg0): void
       */
      setIsoWorldRegion(arg0: zombie.iso.areas.isoregion.regions.IsoWorldRegion): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLampostTotalB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLampostTotalG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLampostTotalR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setLightInfluenceB(arg0: java.util.ArrayList<number>): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setLightInfluenceG(arg0: java.util.ArrayList<number>): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setLightInfluenceR(arg0: java.util.ArrayList<number>): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setLightInfoServerGUIOnly(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setN(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverlayDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, long arg2): void
       */
      setPlayerCutawayFlag(arg0: number, arg1: boolean, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoRaindrop arg0): void
       */
      setRainDrop(arg0: zombie.iso.objects.IsoRaindrop): void;
      /**
       * Method Parameters: 
       *  - (IsoRainSplash arg0): void
       */
      setRainSplash(arg0: zombie.iso.objects.IsoRainSplash): void;
      /**
       * Method Parameters: 
       *  - (IsoRoom arg0): void
       */
      setRoom(arg0: zombie.iso.areas.IsoRoom): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRoomID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setS(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolidFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolidFloorCached(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setTargetDarkMulti(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTrapPositionX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTrapPositionY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTrapPositionZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setVertLight(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setW(arg0: zombie.iso.IsoGridSquare): void;
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
       *  - (int arg0): void
       */
      setZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldSave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      smoke(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      softClear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      splatBlood(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopFire(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      switchLight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      syncIsoTrap(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, int arg1, int arg2, int arg3): boolean
       */
      testCollideAdjacent(arg0: zombie.iso.IsoMovingObject, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3): boolean
       */
      testCollideAdjacentAdvanced(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      testCollideSpecialObjects(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, int arg1, int arg2, int arg3): boolean
       *  - (IsoMovingObject arg0, int arg1, int arg2, int arg3, GetSquare arg4): boolean
       */
      testPathFindAdjacent(arg0: zombie.iso.IsoMovingObject, arg1: number, arg2: number, arg3: number, arg4?: zombie.iso.IsoGridSquare$GetSquare): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3, boolean arg4): zombie.iso.LosUtil$TestResults
       */
      testVisionAdjacent(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): zombie.iso.LosUtil$TestResults;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, int arg1): void
       */
      transmitAddObjectToSquare(arg0: zombie.iso.IsoObject, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitModdata(): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       */
      transmitRemoveItemFromSquare(arg0: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      transmitRemoveItemFromSquareOnServer(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitStopFire(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, char[] arg1): boolean
       */
      static auth(arg0: string, arg1: string[]): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getDarkStep(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      static getDefColorInfo(): zombie.core.textures.ColorInfo;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLightcache(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       *  - (int arg0, byte arg1, byte arg2, byte arg3): boolean
       */
      static getMatrixBit(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, SliceY arg1, int arg2, int arg3, int arg4): zombie.iso.IsoGridSquare
       *  - (ArrayDeque arg0, IsoCell arg1, SliceY arg2, int arg3, int arg4, int arg5): zombie.iso.IsoGridSquare
       */
      static getNew(arg0: zombie.iso.IsoCell | java.util.ArrayDeque<zombie.iso.IsoGridSquare>, arg1: zombie.iso.SliceY | zombie.iso.IsoCell, arg2: number | zombie.iso.SliceY, arg3: number, arg4: number, arg5?: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getRecalcLightTime(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayDeque arg0, int arg1): void
       */
      static getSquaresForThread(arg0: java.util.ArrayDeque<zombie.iso.IsoGridSquare>, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isbDoSlowPathfinding(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static setCollisionMode(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setDarkStep(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setLightcache(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, byte arg1, byte arg2, byte arg3, boolean arg4): number
       *  - (int arg0, int arg1, int arg2, int arg3, boolean arg4): number
       */
      static setMatrixBit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setRecalcLightTime(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setbDoSlowPathfinding(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte[] arg0): boolean
       */
      static toBoolean(arg0: number[]): boolean;
    }
    /**
     * @customConstructor CellGetSquare.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare$CellGetSquare
     */
    export class IsoGridSquare$CellGetSquare {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
    }
    /**
     * @customConstructor CircleStencilShader.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare$CircleStencilShader extends zombie.core.opengl.Shader
     */
    export class IsoGridSquare$CircleStencilShader {
      /** zombie.iso.IsoGridSquare$CircleStencilShader */
      static readonly instance?: zombie.iso.IsoGridSquare$CircleStencilShader;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      End(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Start(): void;
      /**
       * Method Parameters: 
       *  - (ShaderProgram arg0): void
       */
      callback(arg0: zombie.core.opengl.ShaderProgram): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.opengl.ShaderProgram
       */
      getProgram(): zombie.core.opengl.ShaderProgram;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCompiled(): boolean;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       */
      postRender(arg0: zombie.core.textures.TextureDraw): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      startMainThread(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       */
      startRenderThread(arg0: zombie.core.textures.TextureDraw): void;
    }
    /**
     * @customConstructor GetSquare.new
     * @
     * [INTERFACE] zombie.iso.IsoGridSquare$GetSquare
     */
    export class IsoGridSquare$GetSquare {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      getGridSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
    }
    /**
     * @customConstructor ILighting.new
     * @
     * [INTERFACE] zombie.iso.IsoGridSquare$ILighting
     */
    export class IsoGridSquare$ILighting {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): void
       */
      bCanSee(arg0?: boolean): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): void
       */
      bCouldSee(arg0?: boolean): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): void
       */
      bSeen(arg0?: boolean): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      darkMulti(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoGridSquare$ResultLight
       */
      getResultLight(arg0: number): zombie.iso.IsoGridSquare$ResultLight;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      lampostTotalB(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      lampostTotalG(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      lampostTotalR(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      lightInfo(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       *  - (int arg0, int arg1): void
       */
      lightverts(arg0: number, arg1?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      resultLightCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      targetDarkMulti(arg0?: number): number | void;
    }
    /**
     * @customConstructor Lighting.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare$Lighting
     */
    export class IsoGridSquare$Lighting {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): void
       */
      bCanSee(arg0?: boolean): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): void
       */
      bCouldSee(arg0?: boolean): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): void
       */
      bSeen(arg0?: boolean): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      darkMulti(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoGridSquare$ResultLight
       */
      getResultLight(arg0: number): zombie.iso.IsoGridSquare$ResultLight;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      lampostTotalB(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      lampostTotalG(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      lampostTotalR(arg0?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      lightInfo(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       *  - (int arg0, int arg1): void
       */
      lightverts(arg0: number, arg1?: number): number | void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      resultLightCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): void
       */
      targetDarkMulti(arg0?: number): number | void;
    }
    /**
     * @customConstructor NoCircleStencilShader.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare$NoCircleStencilShader
     */
    export class IsoGridSquare$NoCircleStencilShader {
      /** zombie.iso.IsoGridSquare$NoCircleStencilShader */
      static readonly instance?: zombie.iso.IsoGridSquare$NoCircleStencilShader;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor PuddlesDirection.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare$PuddlesDirection
     */
    export class IsoGridSquare$PuddlesDirection {
      /** byte */
      static PUDDLES_DIR_ALL: number;
      /** byte */
      static PUDDLES_DIR_NE: number;
      /** byte */
      static PUDDLES_DIR_NONE: number;
      /** byte */
      static PUDDLES_DIR_NW: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ResultLight.new
     * @
     * [CLASS] zombie.iso.IsoGridSquare$ResultLight
     */
    export class IsoGridSquare$ResultLight {
      /** int */
      static readonly RLF_NONE: number;
      /** int */
      static readonly RLF_ROOMLIGHT: number;
      /** int */
      static readonly RLF_TORCH: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ResultLight arg0): zombie.iso.IsoGridSquare$ResultLight
       */
      copyFrom(arg0: zombie.iso.IsoGridSquare$ResultLight): zombie.iso.IsoGridSquare$ResultLight;
    }
    /**
     * @customConstructor IsoHeatSource.new
     * @
     * [CLASS] zombie.iso.IsoHeatSource
     */
    export class IsoHeatSource {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isInBounds(arg0?: number, arg1?: number, arg2?: number, arg3?: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRadius(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTemperature(arg0: number): void;
    }
    /**
     * @customConstructor IsoLightSource.new
     * @
     * [CLASS] zombie.iso.IsoLightSource
     */
    export class IsoLightSource {
      /** int */
      static NextID: number;

      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, int arg6)
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, int arg6, int arg7)
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, int arg6, IsoBuilding arg7)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number | zombie.iso.areas.IsoBuilding);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearInfluence(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getLocalToBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>
       */
      getSwitches(): java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHydroPowered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isInBounds(arg0?: number, arg1?: number, arg2?: number, arg3?: number): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRadius(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setSwitches(arg0: java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWasActive(arg0: boolean): void;
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
       *  - (int arg0): void
       */
      setZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasActive(): boolean;
    }
    /**
     * @customConstructor IsoLot.new
     * @
     * [CLASS] zombie.iso.IsoLot
     */
    export class IsoLot {
      /** java.util.HashMap<java.lang.String, java.lang.String> */
      static readonly InfoFileNames?: java.util.HashMap<string, string>;
      /** java.util.ArrayList<java.lang.String> */
      static readonly InfoHeaderNames?: java.util.ArrayList<string>;
      /** java.util.HashMap<java.lang.String, zombie.iso.LotHeader> */
      static readonly InfoHeaders?: java.util.HashMap<string, zombie.iso.LotHeader>;
      /** zombie.popman.ObjectPool<zombie.iso.IsoLot> */
      static readonly pool?: zombie.popman.ObjectPool<zombie.iso.IsoLot>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Integer arg0, Integer arg1, Integer arg2, Integer arg3, IsoChunk arg4): void
       */
      load(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Dispose(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Integer arg0, Integer arg1, Integer arg2, Integer arg3, IsoChunk arg4): zombie.iso.IsoLot
       */
      static get(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.iso.IsoChunk): zombie.iso.IsoLot;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoLot arg0): void
       */
      static put(arg0: zombie.iso.IsoLot): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomAccessFile arg0): number
       */
      static readInt(arg0: java.io.RandomAccessFile): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomAccessFile arg0): number
       */
      static readShort(arg0: java.io.RandomAccessFile): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BufferedRandomAccessFile arg0): string
       */
      static readString(arg0: zombie.util.BufferedRandomAccessFile): string;
    }
    /**
     * @customConstructor IsoLuaMover.new
     * @
     * [CLASS] zombie.iso.IsoLuaMover extends zombie.characters.IsoGameCharacter
     */
    export class IsoLuaMover {
      /**
       * Constructors: 
       *  - (KahluaTable arg0)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable | null);
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
       */
      getVisual(): zombie.core.skinnedmodel.visual.BaseVisual;
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
       *  - (String arg0, float arg1, boolean arg2, boolean arg3): void
       */
      playAnim(arg0: string, arg1: number, arg2: boolean, arg3: boolean): void;
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
    /**
     * @customConstructor IsoMarkers.new
     * @
     * [CLASS] zombie.iso.IsoMarkers
     */
    export class IsoMarkers {
      /** zombie.iso.IsoMarkers */
      static readonly instance?: zombie.iso.IsoMarkers;


      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, float arg1, float arg2, float arg3, float arg4): zombie.iso.IsoMarkers$CircleIsoMarker
       */
      addCircleIsoMarker(arg0: zombie.iso.IsoGridSquare, arg1: number, arg2: number, arg3: number, arg4: number): zombie.iso.IsoMarkers$CircleIsoMarker;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5, boolean arg6): zombie.iso.IsoMarkers$IsoMarker
       *  - (KahluaTable arg0, KahluaTable arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6, boolean arg7): zombie.iso.IsoMarkers$IsoMarker
       *  - (KahluaTable arg0, KahluaTable arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6, boolean arg7, float arg8, float arg9, float arg10): zombie.iso.IsoMarkers$IsoMarker
       */
      addIsoMarker(arg0: string | se.krka.kahlua.vm.KahluaTable, arg1: zombie.iso.IsoGridSquare | se.krka.kahlua.vm.KahluaTable, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6: boolean, arg7?: boolean, arg8?: number, arg9?: number, arg10?: number): zombie.iso.IsoMarkers$IsoMarker;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoMarkers$CircleIsoMarker
       */
      getCircleIsoMarker(arg0: number): zombie.iso.IsoMarkers$CircleIsoMarker;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoMarkers$IsoMarker
       */
      getIsoMarker(arg0: number): zombie.iso.IsoMarkers$IsoMarker;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (CircleIsoMarker arg0): boolean
       */
      removeCircleIsoMarker(arg0: number | zombie.iso.IsoMarkers$CircleIsoMarker): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMarker arg0): boolean
       *  - (int arg0): boolean
       */
      removeIsoMarker(arg0: zombie.iso.IsoMarkers$IsoMarker | number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (PerPlayerRender arg0, int arg1, int arg2): void
       */
      renderCircleIsoMarkers(arg0: zombie.iso.IsoCell$PerPlayerRender, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (PerPlayerRender arg0, int arg1, int arg2): void
       */
      renderIsoMarkers(arg0: zombie.iso.IsoCell$PerPlayerRender, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (PerPlayerRender arg0, int arg1, int arg2): void
       */
      renderIsoMarkersDeferred(arg0: zombie.iso.IsoCell$PerPlayerRender, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (PerPlayerRender arg0, int arg1, int arg2): void
       */
      renderIsoMarkersOnSquare(arg0: zombie.iso.IsoCell$PerPlayerRender, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor CircleIsoMarker.new
     * @
     * [CLASS] zombie.iso.IsoMarkers$CircleIsoMarker
     */
    export class IsoMarkers$CircleIsoMarker {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFadeSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (int arg0, int arg1, int arg2, IsoGridSquare arg3): void
       */
      init(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoAlpha(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setA(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlphaMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlphaMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoAlpha(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFadeSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSquare(arg0: zombie.iso.IsoGridSquare): void;
    }
    /**
     * @customConstructor IsoMarker.new
     * @
     * [CLASS] zombie.iso.IsoMarkers$IsoMarker
     */
    export class IsoMarkers$IsoMarker {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addTempSquareObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFadeSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       */
      hasTempSquareObject(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3, IsoGridSquare arg4, boolean arg5): void
       *  - (KahluaTable arg0, KahluaTable arg1, int arg2, int arg3, int arg4, IsoGridSquare arg5): void
       *  - (KahluaTable arg0, KahluaTable arg1, int arg2, int arg3, int arg4, IsoGridSquare arg5, boolean arg6): void
       */
      init(arg0: string | se.krka.kahlua.vm.KahluaTable, arg1: number | se.krka.kahlua.vm.KahluaTable, arg2: number, arg3: number, arg4: zombie.iso.IsoGridSquare | number, arg5: boolean | zombie.iso.IsoGridSquare, arg6?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoAlpha(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeTempSquareObjects(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setA(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlphaMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlphaMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoAlpha(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFadeSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSquare(arg0: zombie.iso.IsoGridSquare): void;
    }
    /**
     * @customConstructor IsoMetaCell.new
     * @
     * [CLASS] zombie.iso.IsoMetaCell
     */
    export class IsoMetaCell {
      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1, int arg2): void
       */
      addRoom(arg0: zombie.iso.RoomDef, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, int arg2, String arg3): void
       */
      addTrigger(arg0: zombie.iso.BuildingDef, arg1: number, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, int arg1, int arg2): void
       */
      addZone(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkTriggers(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaChunk
       */
      getChunk(arg0: number, arg1: number): zombie.iso.IsoMetaChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, ArrayList arg4): void
       */
      getRoomsIntersecting(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java.util.ArrayList<zombie.iso.RoomDef>): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, ArrayList arg5): void
       */
      getZonesIntersecting(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): void;
      /**
       * Method Parameters: 
       *  - (Set arg0): void
       */
      getZonesUnique(arg0: java.util.Set<zombie.iso.IsoMetaGrid$Zone>): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      removeZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
    }
    /**
     * @customConstructor IsoMetaChunk.new
     * @
     * [CLASS] zombie.iso.IsoMetaChunk
     */
    export class IsoMetaChunk {
      /** float */
      static readonly zombiesFullPerChunk: number;
      /** float */
      static readonly zombiesMinPerChunk: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): void
       */
      addRoom(arg0: zombie.iso.RoomDef): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      addZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearRooms(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearZones(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.RoomDef
       */
      getEmptyOutsideAt(arg0: number, arg1: number, arg2: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLootZombieIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumRooms(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.RoomDef
       */
      getRoomAt(arg0: number, arg1: number, arg2: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, ArrayList arg4): void
       */
      getRoomsIntersecting(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java.util.ArrayList<zombie.iso.RoomDef>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnadjustedZombieIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getZombieIntensity(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoMetaGrid$Zone
       */
      getZone(arg0: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$Zone
       */
      getZoneAt(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
       */
      getZonesAt(arg0: number, arg1: number, arg2: number, arg3: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, ArrayList arg5): void
       */
      getZonesIntersecting(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): void;
      /**
       * Method Parameters: 
       *  - (Set arg0): void
       */
      getZonesUnique(arg0: java.util.Set<zombie.iso.IsoMetaGrid$Zone>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numZones(): number;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      removeZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setZombieIntensity(arg0: number): void;
    }
    /**
     * @customConstructor IsoMetaGrid.new
     * @
     * [CLASS] zombie.iso.IsoMetaGrid
     */
    export class IsoMetaGrid {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      AddToMeta(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Create(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CreateStep1(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CreateStep2(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      RemoveFromMeta(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkVehiclesZones(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): number
       */
      countNearbyBuildingsRooms(arg0: zombie.characters.IsoPlayer): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): number
       */
      countRoomsIntersecting(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.BuildingDef
       */
      getBuildingAt(arg0: number, arg1: number): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.BuildingDef
       */
      getBuildingAtRelax(arg0: number, arg1: number): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaCell
       */
      getCellData(arg0: number, arg1: number): zombie.iso.IsoMetaCell;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaCell
       */
      getCellDataAbs(arg0: number, arg1: number): zombie.iso.IsoMetaCell;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaChunk
       */
      getChunkData(arg0: number, arg1: number): zombie.iso.IsoMetaChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaChunk
       */
      getChunkDataFromTile(arg0: number, arg1: number): zombie.iso.IsoMetaChunk;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaCell
       */
      getCurrentCellData(): zombie.iso.IsoMetaCell;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaChunk
       */
      getCurrentChunkData(): zombie.iso.IsoMetaChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.RoomDef
       */
      getEmptyOutsideAt(arg0: number, arg1: number, arg2: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLotDirectories(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaCell
       */
      getMetaGridFromTile(arg0: number, arg1: number): zombie.iso.IsoMetaCell;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getRandomIndoorCoord(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): zombie.iso.RoomDef
       */
      getRandomRoomBetweenRange(arg0: number, arg1: number, arg2: number, arg3: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2): zombie.iso.RoomDef
       */
      getRandomRoomNotInRange(arg0: number, arg1: number, arg2: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.RoomDef
       */
      getRoomAt(arg0: number, arg1: number, arg2: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, ArrayList arg4): void
       */
      getRoomsIntersecting(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java.util.ArrayList<zombie.iso.RoomDef>): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$VehicleZone
       */
      getVehicleZoneAt(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$VehicleZone;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$Zone
       */
      getZoneAt(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
       *  - (int arg0, int arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
       */
      getZonesAt(arg0: number, arg1: number, arg2: number, arg3?: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, ArrayList arg5): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
       */
      getZonesIntersecting(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isValidChunk(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isValidSquare(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ByteBuffer arg0): void
       */
      load(arg0?: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadZone(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadZones(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      processZones(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, String arg3, KahluaTable arg4, KahluaTable arg5): zombie.iso.IsoMetaGrid$Zone
       */
      registerGeometryZone(arg0: string, arg1: string, arg2: number, arg3: string, arg4: se.krka.kahlua.vm.KahluaTable, arg5: se.krka.kahlua.vm.KahluaTable): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7): zombie.iso.IsoMetaGrid$Zone
       */
      registerMannequinZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7): void
       */
      registerRoomTone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7): zombie.iso.IsoMetaGrid$Zone
       */
      registerVehiclesZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6): zombie.iso.IsoMetaGrid$Zone
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, ZoneGeometryType arg7, TIntArrayList arg8, int arg9): zombie.iso.IsoMetaGrid$Zone
       */
      registerZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: zombie.iso.IsoMetaGrid$ZoneGeometryType, arg8?: gnu.trove.list.array.TIntArrayList, arg9?: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6): zombie.iso.IsoMetaGrid$Zone
       */
      registerZoneNoOverlap(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      removeZone(arg0: zombie.iso.IsoMetaGrid$Zone): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      removeZonesForCell(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeZonesForLotDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ByteBuffer arg0): void
       */
      save(arg0?: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      savePart(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveZone(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isPreferredZoneForSquare(arg0: string): boolean;
    }
    /**
     * @customConstructor RoomTone.new
     * @
     * [CLASS] zombie.iso.IsoMetaGrid$RoomTone
     */
    export class IsoMetaGrid$RoomTone {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Trigger.new
     * @
     * [CLASS] zombie.iso.IsoMetaGrid$Trigger
     */
    export class IsoMetaGrid$Trigger {
      /**
       * Constructors: 
       *  - (BuildingDef arg0, int arg1, int arg2, String arg3)
       */
      constructor(arg0: zombie.iso.BuildingDef | null, arg1: number, arg2: number, arg3: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
    }
    /**
     * @customConstructor VehicleZone.new
     * @
     * [CLASS] zombie.iso.IsoMetaGrid$VehicleZone extends zombie.iso.IsoMetaGrid$Zone
     */
    export class IsoMetaGrid$VehicleZone {
      /** short */
      static readonly VZF_FaceDirection: number;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      contains(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, ArrayList arg5): boolean
       */
      difference(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, double[] arg4): number
       */
      getClippedSegmentOfPolyline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSinceLastSeen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastActionTimestamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPolygonTriangles(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPolylineLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPolylineOutlineTriangles(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomUnseenSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getSquares(): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZombieDensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveCons(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): boolean
       */
      intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFaceDirection(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPoint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolyline(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRectangle(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      removeSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendToServer(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setH(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHaveConstruction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setHourSeenToCurrent(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastActionTimestamp(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOriginalName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPickedXForZoneStory(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPickedYForZoneStory(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
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
    }
    /**
     * @customConstructor Zone.new
     * @
     * [CLASS] zombie.iso.IsoMetaGrid$Zone
     */
    export class IsoMetaGrid$Zone {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      contains(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, ArrayList arg5): boolean
       */
      difference(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, double[] arg4): number
       */
      getClippedSegmentOfPolyline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSinceLastSeen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastActionTimestamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPolygonTriangles(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPolylineLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPolylineOutlineTriangles(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomUnseenSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getSquares(): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZombieDensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveCons(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): boolean
       */
      intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPoint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolyline(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRectangle(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      removeSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendToServer(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setH(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHaveConstruction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setHourSeenToCurrent(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastActionTimestamp(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOriginalName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPickedXForZoneStory(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPickedYForZoneStory(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
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
    }
    /** [ENUM] zombie.iso.IsoMetaGrid$ZoneGeometryType */
    export class IsoMetaGrid$ZoneGeometryType {
      protected constructor();
      static readonly INVALID: zombie.iso.IsoMetaGrid$ZoneGeometryType;
      static readonly Point: zombie.iso.IsoMetaGrid$ZoneGeometryType;
      static readonly Polygon: zombie.iso.IsoMetaGrid$ZoneGeometryType;
      static readonly Polyline: zombie.iso.IsoMetaGrid$ZoneGeometryType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IsoMovingObject.new
     * @
     * [CLASS] zombie.iso.IsoMovingObject extends zombie.iso.IsoObject
     */
    export class IsoMovingObject {
      /** int */
      static readonly MAX_ZOMBIES_EATING: number;
      /** zombie.iso.IsoMovingObject$TreeSoundManager */
      static treeSoundMgr?: zombie.iso.IsoMovingObject$TreeSoundManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoCell arg0)
       *  - (IsoCell arg0, boolean arg1)
       *  - (IsoCell arg0, IsoGridSquare arg1, IsoSprite arg2, boolean arg3)
       */
      constructor(arg0?: zombie.iso.IsoCell | null, arg1?: boolean | zombie.iso.IsoGridSquare, arg2?: zombie.iso.sprite.IsoSprite | null, arg3?: boolean);
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
       *  - (ObjectTooltip arg0, IsoGridSquare arg1): void
       */
      DoSpecialTooltip(arg0: zombie.ui.ObjectTooltip, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): number
       */
      GetVehicleSlowFactor(arg0: zombie.vehicles.BaseVehicle): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1, float arg2): void
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       */
      Hit(arg0: zombie.iso.Vector2 | zombie.inventory.types.HandWeapon, arg1: zombie.iso.IsoObject | zombie.characters.IsoGameCharacter, arg2: number, arg3?: boolean, arg4?: number): void | number;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, float arg1): void
       */
      HitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      Move(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      MoveUnmodded(arg0: zombie.iso.Vector2): void;
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
       *  - (IsoObject arg0): void
       */
      addChild(arg0: zombie.iso.IsoObject): void;
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
       *  - (Empty): boolean
       */
      canAddSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      canHaveMultipleHits(): number;
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
       *  - (IsoObject arg0): void
       */
      collideWith(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      compareToY(arg0: zombie.iso.IsoMovingObject): number;
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
       *  - (Empty): number
       */
      customHashCode(): number;
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
       *  - (Empty): void
       */
      doStairs(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ensureOnTile(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getAttachedAnimSprite(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
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
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getChildSprites(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
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
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getCurrentBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getCurrentSquare(): zombie.iso.IsoGridSquare;
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
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      getDistanceSq(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getEatingZombies(): java.util.ArrayList<zombie.characters.IsoZombie>;
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
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFuturWalkedSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getGlobalMovementMod(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getHighlightColor(): zombie.core.textures.ColorInfo;
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
       *  - (Empty): number
       */
      getID(): number;
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
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastCollideTime(): number;
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
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
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
       *  - (Empty): boolean
       */
      getNoDamage(): boolean;
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
      getPathFindIndex(): number;
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
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
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
       *  - (Empty): number
       */
      getSpecialObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getSprite(): zombie.iso.sprite.IsoSprite;
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
      getStateEventDelayTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaticMovingObjectIndex(): number;
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
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getTargetAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextureName(): string;
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
      getTimeSinceZombieAttack(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsesExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getVectorFromDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
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
       *  - (Empty): number
       *  - (float arg0, float arg1): number
       */
      getWeight(arg0?: number, arg1?: number): number;
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
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       */
      hasExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
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
      isBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCloseKilled(): boolean;
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
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isEatingOther(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistInTheWorld(): boolean;
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
      isHighlighted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isItemAllowedInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
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
      isMovedThumpable(): boolean;
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
      isOnFloor(): boolean;
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
      isPushableForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isPushedByForSeparate(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isRemoveItemAllowedFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShootable(): boolean;
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
      isZombie(): boolean;
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
      postupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllContainers(): void;
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
       *  - (Empty): void
       */
      reset(): void;
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
      separate(): void;
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
       *  - (ArrayList arg0): void
       */
      setAttachedAnimSprite(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setChildSprites(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCloseKilled(arg0: boolean): void;
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
       *  - (boolean arg0): void
       */
      setDestroyed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       *  - (int arg0): void
       */
      setDir(arg0: zombie.iso.IsoDirections | number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setEatingZombies(arg0: java.util.ArrayList<zombie.characters.IsoZombie>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFeelersize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFirstUpdate(arg0: boolean): void;
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
       *  - (int arg0): void
       */
      setID(arg0: number): void;
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
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setLast(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastCollideTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      setLastTargettedBy(arg0: zombie.characters.IsoZombie): void;
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
       *  - (Empty): void
       */
      setMovingSquareNow(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
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
      setOnFloor(arg0: boolean): void;
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
       *  - (int arg0): void
       */
      setPathFindIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPipedFuelAmount(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setShootable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolid(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpecialTooltip(arg0: boolean): void;
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
      setStateEventDelayTimer(arg0: number): void;
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
       *  - (Thumpable arg0): void
       */
      setThumpTarget(arg0: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeSinceZombieAttack(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsesExternalWaterSource(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setX(arg0: number): void;
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
       *  - (Empty): void
       */
      softReset(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1): void
       */
      spotted(arg0: zombie.iso.IsoMovingObject, arg1: boolean): void;
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
       *  - (ByteBufferWriter arg0): void
       */
      writeToRemoteBuffer(arg0: zombie.core.network.ByteBufferWriter): void;
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
       *  - (Empty): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3): zombie.iso.IsoObject
       */
      static getNew(arg0?: zombie.iso.IsoGridSquare, arg1?: string, arg2?: string, arg3?: boolean): zombie.iso.IsoObject;
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
    /**
     * @customConstructor TreeSoundManager.new
     * @
     * [CLASS] zombie.iso.IsoMovingObject$TreeSoundManager
     */
    export class IsoMovingObject$TreeSoundManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor IsoObject.new
     * @
     * [CLASS] zombie.iso.IsoObject
     */
    export class IsoObject {
      /** boolean */
      static LowLightingQualityHack: boolean;
      /** int */
      static readonly MAX_WALL_SPLATS: number;
      /** byte */
      static readonly OBF_Blink: number;
      /** byte */
      static readonly OBF_HighlightRenderOnce: number;
      /** byte */
      static readonly OBF_Highlighted: number;
      /** float */
      static bmod: number;
      /** float */
      static gmod: number;
      /** zombie.iso.IsoObject */
      static lastRendered?: zombie.iso.IsoObject;
      /** zombie.iso.IsoObject */
      static lastRenderedRendered?: zombie.iso.IsoObject;
      /** float */
      static rmod: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoCell arg0)
       *  - (IsoGridSquare arg0, String arg1)
       *  - (IsoGridSquare arg0, String arg1, boolean arg2)
       *  - (IsoCell arg0, IsoGridSquare arg1, IsoSprite arg2)
       *  - (IsoCell arg0, IsoGridSquare arg1, String arg2)
       *  - (IsoGridSquare arg0, String arg1, String arg2)
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3)
       */
      constructor(arg0?: zombie.iso.IsoCell | zombie.iso.IsoGridSquare | null, arg1?: string | zombie.iso.IsoGridSquare | null, arg2?: boolean | zombie.iso.sprite.IsoSprite | string, arg3?: boolean);
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
      DirtySlice(): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0, IsoGridSquare arg1): void
       */
      DoSpecialTooltip(arg0: zombie.ui.ObjectTooltip, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): number
       */
      GetVehicleSlowFactor(arg0: zombie.vehicles.BaseVehicle): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1, float arg2): void
       */
      Hit(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoObject, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, float arg1): void
       */
      HitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
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
       *  - (IsoObject arg0): void
       */
      addChild(arg0: zombie.iso.IsoObject): void;
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
       *  - (Empty): boolean
       */
      canAddSheetRope(): boolean;
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
       *  - (Empty): number
       */
      customHashCode(): number;
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
      doFindExternalWaterSource(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getAttachedAnimSprite(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      getCell(): zombie.iso.IsoCell;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getChildSprites(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
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
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
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
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getHighlightColor(): zombie.core.textures.ColorInfo;
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
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): number
       */
      getMaskClickedY(arg0: number, arg1: number, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
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
      getPipedFuelAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
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
       *  - (Empty): string
       */
      getScriptName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpecialObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getSprite(): zombie.iso.sprite.IsoSprite;
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
      getStaticMovingObjectIndex(): number;
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
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getTargetAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextureName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThumpCondition(): number;
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
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsesExternalWaterSource(): boolean;
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
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       */
      hasExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
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
      isBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistInTheWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHighlighted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isItemAllowedInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
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
      isMovedThumpable(): boolean;
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
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isRemoveItemAllowedFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
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
      isZombie(): boolean;
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
      removeAllContainers(): void;
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
       *  - (Empty): void
       */
      reset(): void;
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
       *  - (ArrayList arg0): void
       */
      setAttachedAnimSprite(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setChildSprites(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setContainer(arg0: zombie.inventory.ItemContainer): void;
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
       *  - (IsoDirections arg0): void
       *  - (int arg0): void
       */
      setDir(arg0: zombie.iso.IsoDirections | number): void;
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
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovedThumpable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoPicking(arg0: boolean): void;
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
       *  - (int arg0): void
       */
      setPipedFuelAmount(arg0: number): void;
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
      setSpecialTooltip(arg0: boolean): void;
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
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsesExternalWaterSource(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWaterAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      softReset(): void;
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
       *  - (ByteBufferWriter arg0): void
       */
      writeToRemoteBuffer(arg0: zombie.core.network.ByteBufferWriter): void;
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
       *  - (Empty): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3): zombie.iso.IsoObject
       */
      static getNew(arg0?: zombie.iso.IsoGridSquare, arg1?: string, arg2?: string, arg3?: boolean): zombie.iso.IsoObject;
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
    /**
     * @customConstructor IsoObjectFactory.new
     * @
     * [CLASS] zombie.iso.IsoObject$IsoObjectFactory
     */
    export class IsoObject$IsoObjectFactory {
      /**
       * Constructors: 
       *  - (byte arg0, String arg1)
       */
      constructor(arg0: number, arg1: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClassID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getObjectName(): string;
    }
    /**
     * @customConstructor OutlineShader.new
     * @
     * [CLASS] zombie.iso.IsoObject$OutlineShader
     */
    export class IsoObject$OutlineShader {
      /** zombie.iso.IsoObject$OutlineShader */
      static readonly instance?: zombie.iso.IsoObject$OutlineShader;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      StartShader(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initShader(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setOutlineColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2): void
       */
      setStepSize(arg0: number, arg1: number, arg2: number): void;
    }
    /** [ENUM] zombie.iso.IsoObject$VisionResult */
    export class IsoObject$VisionResult {
      protected constructor();
      static readonly Blocked: zombie.iso.IsoObject$VisionResult;
      static readonly NoEffect: zombie.iso.IsoObject$VisionResult;
      static readonly Unblocked: zombie.iso.IsoObject$VisionResult;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IsoObjectPicker.new
     * @
     * [CLASS] zombie.iso.IsoObjectPicker
     */
    export class IsoObjectPicker {
      /** zombie.iso.IsoObjectPicker */
      static readonly Instance?: zombie.iso.IsoObjectPicker;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, IsoGridSquare arg4, IsoObject arg5, boolean arg6, float arg7, float arg8): void
       */
      Add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.iso.IsoGridSquare, arg5: zombie.iso.IsoObject, arg6: boolean, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObjectPicker$ClickObject
       */
      ContextPick(arg0: number, arg1: number): zombie.iso.IsoObjectPicker$ClickObject;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Init(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObjectPicker$ClickObject
       */
      Pick(arg0: number, arg1: number): zombie.iso.IsoObjectPicker$ClickObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObject
       */
      PickCorpse(arg0: number, arg1: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): zombie.iso.IsoObject
       */
      PickDoor(arg0: number, arg1: number, arg2: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObject
       */
      PickHoppable(arg0: number, arg1: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMovingObject
       */
      PickTarget(arg0: number, arg1: number): zombie.iso.IsoMovingObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObject
       */
      PickThumpable(arg0: number, arg1: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObject
       */
      PickTree(arg0: number, arg1: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.vehicles.BaseVehicle
       */
      PickVehicle(arg0: number, arg1: number): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObject
       */
      PickWindow(arg0: number, arg1: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoObject
       */
      PickWindowFrame(arg0: number, arg1: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StartRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObjectPicker
       */
      getInstance(): zombie.iso.IsoObjectPicker;
    }
    /**
     * @customConstructor ClickObject.new
     * @
     * [CLASS] zombie.iso.IsoObjectPicker$ClickObject
     */
    export class IsoObjectPicker$ClickObject {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateScore(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScore(): number;
    }
    /**
     * @customConstructor IsoPuddles.new
     * @
     * [CLASS] zombie.iso.IsoPuddles
     */
    export class IsoPuddles {
      /** int */
      static readonly BOOL_MAX: number;
      /** int */
      static readonly FLOAT_MAX: number;
      /** int */
      static readonly FLOAT_MUDDYPUDDLES: number;
      /** int */
      static readonly FLOAT_PUDDLESSIZE: number;
      /** int */
      static readonly FLOAT_RAIN: number;
      /** int */
      static readonly FLOAT_RAININTENSITY: number;
      /** int */
      static readonly FLOAT_WETGROUND: number;
      /** zombie.core.opengl.SharedVertexBufferObjects */
      static readonly VBOs?: zombie.core.opengl.SharedVertexBufferObjects;
      /** boolean */
      static leakingPuddlesInTheRoom: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applyPuddlesQuality(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoolMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.interfaces.ITexture
       */
      getHMTexture(): zombie.interfaces.ITexture;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoPuddles$PuddlesFloat
       */
      getPuddlesFloat(arg0: number): zombie.iso.IsoPuddles$PuddlesFloat;
      /**
       * Method Parameters: 
       *  - (int arg0): java.nio.FloatBuffer
       */
      getPuddlesParams(arg0: number): java.nio.FloatBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPuddlesSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getShaderEnable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector4f
       */
      getShaderOffset(): org.joml.Vector4f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector4f
       */
      getShaderOffsetMain(): org.joml.Vector4f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderTime(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      puddlesGeometry(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      puddlesProjection(): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0, int arg1): void
       */
      render(arg0: java.util.ArrayList<zombie.iso.IsoGridSquare>, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ClimateManager arg0): void
       */
      update(arg0: zombie.iso.weather.ClimateManager): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoPuddles
       */
      static getInstance(): zombie.iso.IsoPuddles;
    }
    /**
     * @customConstructor PuddlesFloat.new
     * @
     * [CLASS] zombie.iso.IsoPuddles$PuddlesFloat
     */
    export class IsoPuddles$PuddlesFloat {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addFinalValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      addFinalValueForMax(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAdminValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFinalValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.iso.IsoPuddles$PuddlesFloat
       */
      init(arg0: number, arg1: string): zombie.iso.IsoPuddles$PuddlesFloat;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      interpolateFinalValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAdminValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFinalValue(arg0: number): void;
    }
    /**
     * @customConstructor IsoPuddlesGeometry.new
     * @
     * [CLASS] zombie.iso.IsoPuddlesGeometry
     */
    export class IsoPuddlesGeometry {
      /** zombie.popman.ObjectPool<zombie.iso.IsoPuddlesGeometry> */
      static readonly pool?: zombie.popman.ObjectPool<zombie.iso.IsoPuddlesGeometry>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoPuddlesGeometry
       */
      init(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoPuddlesGeometry;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recalcIfNeeded(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldRender(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      updateLighting(arg0: number): void;
    }
    /**
     * @customConstructor IsoPushableObject.new
     * @
     * [CLASS] zombie.iso.IsoPushableObject extends zombie.iso.IsoMovingObject
     */
    export class IsoPushableObject {
      /**
       * Constructors: 
       *  - (IsoCell arg0)
       *  - (IsoCell arg0, IsoGridSquare arg1, IsoSprite arg2)
       *  - (IsoCell arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: zombie.iso.IsoCell | null, arg1?: zombie.iso.IsoGridSquare | number, arg2?: zombie.iso.sprite.IsoSprite | number, arg3?: number);
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
       *  - (ObjectTooltip arg0, IsoGridSquare arg1): void
       */
      DoSpecialTooltip(arg0: zombie.ui.ObjectTooltip, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): number
       */
      GetVehicleSlowFactor(arg0: zombie.vehicles.BaseVehicle): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1, float arg2): void
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       */
      Hit(arg0: zombie.iso.Vector2 | zombie.inventory.types.HandWeapon, arg1: zombie.iso.IsoObject | zombie.characters.IsoGameCharacter, arg2: number, arg3?: boolean, arg4?: number): void | number;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, float arg1): void
       */
      HitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      Move(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      MoveUnmodded(arg0: zombie.iso.Vector2): void;
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
       *  - (IsoObject arg0): void
       */
      addChild(arg0: zombie.iso.IsoObject): void;
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
       *  - (Empty): boolean
       */
      canAddSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      canHaveMultipleHits(): number;
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
       *  - (IsoObject arg0): void
       */
      collideWith(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      compareToY(arg0: zombie.iso.IsoMovingObject): number;
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
       *  - (Empty): number
       */
      customHashCode(): number;
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
       *  - (Empty): void
       */
      doStairs(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ensureOnTile(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getAttachedAnimSprite(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
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
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getChildSprites(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
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
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getCurrentBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getCurrentSquare(): zombie.iso.IsoGridSquare;
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
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      getDistanceSq(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getEatingZombies(): java.util.ArrayList<zombie.characters.IsoZombie>;
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
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFuturWalkedSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getGlobalMovementMod(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getHighlightColor(): zombie.core.textures.ColorInfo;
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
       *  - (Empty): number
       */
      getID(): number;
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
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastCollideTime(): number;
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
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
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
       *  - (Empty): boolean
       */
      getNoDamage(): boolean;
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
      getPathFindIndex(): number;
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
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
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
       *  - (Empty): number
       */
      getSpecialObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getSprite(): zombie.iso.sprite.IsoSprite;
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
      getStateEventDelayTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaticMovingObjectIndex(): number;
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
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getTargetAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextureName(): string;
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
      getTimeSinceZombieAttack(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsesExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getVectorFromDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
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
       *  - (Empty): number
       *  - (float arg0, float arg1): number
       */
      getWeight(arg0?: number, arg1?: number): number;
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
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       */
      hasExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
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
      isBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCloseKilled(): boolean;
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
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isEatingOther(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistInTheWorld(): boolean;
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
      isHighlighted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isItemAllowedInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
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
      isMovedThumpable(): boolean;
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
      isOnFloor(): boolean;
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
      isPushableForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isPushedByForSeparate(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isRemoveItemAllowedFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShootable(): boolean;
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
      isZombie(): boolean;
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
      postupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllContainers(): void;
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
       *  - (Empty): void
       */
      reset(): void;
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
      separate(): void;
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
       *  - (ArrayList arg0): void
       */
      setAttachedAnimSprite(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setChildSprites(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCloseKilled(arg0: boolean): void;
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
       *  - (boolean arg0): void
       */
      setDestroyed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       *  - (int arg0): void
       */
      setDir(arg0: zombie.iso.IsoDirections | number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setEatingZombies(arg0: java.util.ArrayList<zombie.characters.IsoZombie>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFeelersize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFirstUpdate(arg0: boolean): void;
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
       *  - (int arg0): void
       */
      setID(arg0: number): void;
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
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setLast(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastCollideTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      setLastTargettedBy(arg0: zombie.characters.IsoZombie): void;
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
       *  - (Empty): void
       */
      setMovingSquareNow(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
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
      setOnFloor(arg0: boolean): void;
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
       *  - (int arg0): void
       */
      setPathFindIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPipedFuelAmount(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setShootable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolid(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpecialTooltip(arg0: boolean): void;
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
      setStateEventDelayTimer(arg0: number): void;
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
       *  - (Thumpable arg0): void
       */
      setThumpTarget(arg0: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeSinceZombieAttack(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsesExternalWaterSource(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setX(arg0: number): void;
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
       *  - (Empty): void
       */
      softReset(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1): void
       */
      spotted(arg0: zombie.iso.IsoMovingObject, arg1: boolean): void;
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
       *  - (ByteBufferWriter arg0): void
       */
      writeToRemoteBuffer(arg0: zombie.core.network.ByteBufferWriter): void;
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
       *  - (Empty): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3): zombie.iso.IsoObject
       */
      static getNew(arg0?: zombie.iso.IsoGridSquare, arg1?: string, arg2?: string, arg3?: boolean): zombie.iso.IsoObject;
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
    /**
     * @customConstructor IsoUtils.new
     * @
     * [CLASS] zombie.iso.IsoUtils
     */
    export class IsoUtils {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static DistanceManhatten(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static DistanceManhattenSquare(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static DistanceTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static DistanceTo2D(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static DistanceToSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static XToIso(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2): number
       */
      static XToIsoTrue(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): number
       */
      static XToScreen(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): number
       */
      static XToScreenExact(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): number
       */
      static XToScreenInt(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static YToIso(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): number
       */
      static YToScreen(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): number
       */
      static YToScreenExact(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): number
       */
      static YToScreenInt(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clamp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1, float arg2, float arg3, float arg4, float arg5): boolean
       */
      static isSimilarDirection(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static smoothstep(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * @customConstructor IsoWaterGeometry.new
     * @
     * [CLASS] zombie.iso.IsoWaterGeometry
     */
    export class IsoWaterGeometry {
      /** zombie.popman.ObjectPool<zombie.iso.IsoWaterGeometry> */
      static readonly pool?: zombie.popman.ObjectPool<zombie.iso.IsoWaterGeometry>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFlow(): number;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoWaterGeometry
       */
      init(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoWaterGeometry;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShore(): boolean;
    }
    /**
     * @customConstructor IsoWorld.new
     * @
     * [CLASS] zombie.iso.IsoWorld
     */
    export class IsoWorld {
      /** boolean */
      static NoZombies: boolean;
      /** java.util.HashMap<java.lang.String, java.util.ArrayList<java.lang.String>> */
      static readonly PropertyValueMap?: java.util.HashMap<string, java.util.ArrayList<string>>;
      /** int */
      static SavedWorldVersion: number;
      /** int */
      static TotalWorldVersion: number;
      /** int */
      static readonly WorldVersion: number;
      /** int */
      static readonly WorldVersion_AlarmClockRingSince: number;
      /** int */
      static readonly WorldVersion_AllPatches: number;
      /** int */
      static readonly WorldVersion_AlreadyReadBooks1: number;
      /** int */
      static readonly WorldVersion_AlreadyReadBooks2: number;
      /** int */
      static readonly WorldVersion_AttachedSlotType: number;
      /** int */
      static readonly WorldVersion_Barricade: number;
      /** int */
      static readonly WorldVersion_BodyLocation: number;
      /** int */
      static readonly WorldVersion_CanUpgradePerk: number;
      /** int */
      static readonly WorldVersion_CharacterModelData: number;
      /** int */
      static readonly WorldVersion_CharacterModelData2: number;
      /** int */
      static readonly WorldVersion_CharacterModelData3: number;
      /** int */
      static readonly WorldVersion_ChunkSpawnedRooms: number;
      /** int */
      static readonly WorldVersion_ChunkVehicles: number;
      /** int */
      static readonly WorldVersion_ClimateAdded: number;
      /** int */
      static readonly WorldVersion_ClimateColors: number;
      /** int */
      static readonly WorldVersion_ClothingPatchSaveLoad: number;
      /** int */
      static readonly WorldVersion_CompostLastUpdated: number;
      /** int */
      static readonly WorldVersion_ContainerMaxCapacity: number;
      /** int */
      static readonly WorldVersion_CruiseSpeedSaving: number;
      /** int */
      static readonly WorldVersion_DayLengthHours: number;
      /** int */
      static readonly WorldVersion_DeadBodyAngle: number;
      /** int */
      static readonly WorldVersion_DeadBodyAtlas: number;
      /** int */
      static readonly WorldVersion_DeadBodyFakeDead: number;
      /** int */
      static readonly WorldVersion_DeadBodyID: number;
      /** int */
      static readonly WorldVersion_DeadBodyPersistentOutfitID: number;
      /** int */
      static readonly WorldVersion_DeadBodyZombieRotStage: number;
      /** int */
      static readonly WorldVersion_DeathDragDown: number;
      /** int */
      static readonly WorldVersion_Fitness: number;
      /** int */
      static readonly WorldVersion_Fitness2: number;
      /** int */
      static readonly WorldVersion_FliesSound: number;
      /** int */
      static readonly WorldVersion_GeneratorFuelFloat: number;
      /** int */
      static readonly WorldVersion_HumanVisualBlood: number;
      /** int */
      static readonly WorldVersion_IgnoreRemoveSandbox: number;
      /** int */
      static readonly WorldVersion_InfectionTime: number;
      /** int */
      static readonly WorldVersion_ItemContainerIdenticalItems: number;
      /** int */
      static readonly WorldVersion_ItemContainerIdenticalItemsInt: number;
      /** int */
      static readonly WorldVersion_ItemVisualFullType: number;
      /** int */
      static readonly WorldVersion_KateBobStorm: number;
      /** int */
      static readonly WorldVersion_KnownMediaLines: number;
      /** int */
      static readonly WorldVersion_LampOnPillar: number;
      /** int */
      static readonly WorldVersion_LampOnPillar2: number;
      /** int */
      static readonly WorldVersion_LootRespawn: number;
      /** int */
      static readonly WorldVersion_MediaDisksAndTapes: number;
      /** int */
      static readonly WorldVersion_NaturalHairBeardColor: number;
      /** int */
      static readonly WorldVersion_NewFog: number;
      /** int */
      static readonly WorldVersion_NewSandboxLootModifier: number;
      /** int */
      static readonly WorldVersion_NoiseMakerDuration: number;
      /** int */
      static readonly WorldVersion_OverlappingGenerators: number;
      /** int */
      static readonly WorldVersion_PerkName: number;
      /** int */
      static readonly WorldVersion_PlayerVehicleSeat: number;
      /** int */
      static readonly WorldVersion_PolygonZone: number;
      /** int */
      static readonly WorldVersion_PolylineZone: number;
      /** int */
      static readonly WorldVersion_SandboxOptions: number;
      /** int */
      static readonly WorldVersion_Scarecrow: number;
      /** int */
      static readonly WorldVersion_Thermos: number;
      /** int */
      static readonly WorldVersion_TimedActionInstantCheat: number;
      /** int */
      static readonly WorldVersion_VehicleBlood: number;
      /** int */
      static readonly WorldVersion_VehicleJNITransform: number;
      /** int */
      static readonly WorldVersion_VehicleLightFocusing: number;
      /** int */
      static readonly WorldVersion_VehicleSirenStartTime: number;
      /** int */
      static readonly WorldVersion_VehicleTowAttachment: number;
      /** int */
      static readonly WorldVersion_VehicleTowingID: number;
      /** int */
      static readonly WorldVersion_ZombieRotStage: number;
      /** zombie.iso.IsoWorld */
      static instance?: zombie.iso.IsoWorld;
      /** java.lang.String */
      static mapPath?: string;
      /** boolean */
      static mapUseJar: boolean;
      /** int */
      static saveoffsetx: number;
      /** int */
      static saveoffsety: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0, IsoGridSquare arg1, IsoPlayer arg2): zombie.characters.IsoSurvivor
       */
      CreateRandomSurvivor(arg0: zombie.characters.SurvivorDesc, arg1: zombie.iso.IsoGridSquare, arg2: zombie.characters.IsoPlayer): zombie.characters.IsoSurvivor;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      CreateSwarm(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ForceKillAllZombies(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      KillCell(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      LoadPlayerForInfo(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoSpriteManager arg0, String arg1, int arg2): void
       */
      LoadTileDefinitions(arg0: zombie.iso.sprite.IsoSpriteManager, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteManager arg0, String arg1, int arg2): void
       */
      LoadTileDefinitionsPropertyStrings(arg0: zombie.iso.sprite.IsoSpriteManager, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addLuaTrait(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkVehiclesZones(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, java.util.ArrayList<string>>
       *  - (String arg0): java.util.ArrayList<string>
       */
      getAllTiles(arg0?: string): java.util.HashMap<string, java.util.ArrayList<string>> | java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAllTilesName(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      getCell(): zombie.iso.IsoCell;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateManager
       */
      getClimateManager(): zombie.iso.weather.ClimateManager;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDifficulty(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrameNo(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.BaseSoundEmitter
       *  - (float arg0, float arg1, float arg2): zombie.audio.BaseSoundEmitter
       */
      getFreeEmitter(arg0?: number, arg1?: number, arg2?: number): zombie.audio.BaseSoundEmitter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGameMode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGlobalTemperature(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): zombie.iso.IsoObject
       */
      getItemFromXYZIndexBuffer(arg0: java.nio.ByteBuffer): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.SurvivorDesc
       */
      getLuaPlayerDesc(): zombie.characters.SurvivorDesc;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLuaPosX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLuaPosY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLuaPosZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLuaSpawnCellX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLuaSpawnCellY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLuaTraits(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMap(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaChunk
       */
      getMetaChunk(arg0: number, arg1: number): zombie.iso.IsoMetaChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoMetaChunk
       */
      getMetaChunkFromTile(arg0: number, arg1: number): zombie.iso.IsoMetaChunk;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaGrid
       */
      getMetaGrid(): zombie.iso.IsoMetaGrid;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoPuddles
       */
      getPuddlesManager(): zombie.iso.IsoPuddles;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
       */
      getRBBasic(): zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase>
       */
      getRandomizedBuildingList(): java.util.ArrayList<zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
       */
      getRandomizedVehicleStoryByName(arg0: string): zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase>
       */
      getRandomizedVehicleStoryList(): java.util.ArrayList<zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase>
       */
      getRandomizedZoneList(): java.util.ArrayList<zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, java.util.ArrayList<number>>
       */
      getSpawnedZombieZone(): java.util.HashMap<string, java.util.ArrayList<number>>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceLastSurvivorInHorde(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWeather(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorld(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldAgeDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldSquareX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldSquareY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHydroPowerOn(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isValidSquare(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7): zombie.iso.IsoMetaGrid$Zone
       */
      registerMannequinZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7): void
       */
      registerRoomTone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, KahluaTable arg4): void
       */
      registerSpawnOrigin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7): zombie.iso.IsoMetaGrid$Zone
       */
      registerVehiclesZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      registerWaterFlow(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      registerWaterZone(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6): zombie.iso.IsoMetaGrid$Zone
       */
      registerZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6): zombie.iso.IsoMetaGrid$Zone
       */
      registerZoneNoOverlap(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeZonesForLotDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderTerrain(): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      returnOwnershipOfEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sceneCullZombies(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDifficulty(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDrawWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, IsoObject arg1): void
       */
      setEmitterOwner(arg0: zombie.audio.BaseSoundEmitter, arg1: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGameMode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGlobalTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHydroPowerOn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      setLuaPlayerDesc(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLuaPosX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLuaPosY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLuaPosZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLuaSpawnCellX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLuaSpawnCellY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMap(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeSinceLastSurvivorInHorde(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWeather(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorld(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      takeOwnershipOfEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitWeather(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getWorldVersion(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getZombiesDisabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getZombiesEnabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isAnimRecorderActive(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isAnimRecorderDiscardTriggered(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InputStream arg0): number
       *  - (RandomAccessFile arg0): number
       */
      static readInt(arg0: java.io.InputStream | java.io.RandomAccessFile): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomAccessFile arg0): string
       *  - (InputStream arg0): string
       */
      static readString(arg0: java.io.RandomAccessFile | java.io.InputStream): string;
    }
    /**
     * @customConstructor Frame.new
     * @
     * [CLASS] zombie.iso.IsoWorld$Frame
     */
    export class IsoWorld$Frame {
      /**
       * Constructors: 
       *  - (IsoWorld arg0)
       */
      constructor(arg0: zombie.iso.IsoWorld | null);
    }
    /**
     * @customConstructor MetaCell.new
     * @
     * [CLASS] zombie.iso.IsoWorld$MetaCell
     */
    export class IsoWorld$MetaCell {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor LosUtil.new
     * @
     * [CLASS] zombie.iso.LosUtil
     */
    export class LosUtil {
      /** int */
      static XSIZE: number;
      /** int */
      static YSIZE: number;
      /** int */
      static ZSIZE: number;
      /** boolean[] */
      static cachecleared?: boolean[];
      /** byte[][][][] */
      static cachedresults?: number[][][][];

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static init(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, boolean arg7): zombie.iso.LosUtil$TestResults
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, boolean arg7, int arg8): zombie.iso.LosUtil$TestResults
       */
      static lineClear(arg0: zombie.iso.IsoCell, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8?: number): zombie.iso.LosUtil$TestResults;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, boolean arg7, int arg8): zombie.iso.LosUtil$TestResults
       */
      static lineClearCached(arg0: zombie.iso.IsoCell, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): zombie.iso.LosUtil$TestResults;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6): boolean
       */
      static lineClearCollide(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoCell arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7): number
       */
      static lineClearCollideCount(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoCell, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
    }
    /** [ENUM] zombie.iso.LosUtil$TestResults */
    export class LosUtil$TestResults {
      protected constructor();
      static readonly Blocked: zombie.iso.LosUtil$TestResults;
      static readonly Clear: zombie.iso.LosUtil$TestResults;
      static readonly ClearThroughClosedDoor: zombie.iso.LosUtil$TestResults;
      static readonly ClearThroughOpenDoor: zombie.iso.LosUtil$TestResults;
      static readonly ClearThroughWindow: zombie.iso.LosUtil$TestResults;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor LotHeader.new
     * @
     * [CLASS] zombie.iso.LotHeader
     */
    export class LotHeader {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevels(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.areas.IsoRoom
       */
      getRoom(arg0: number): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      getRoomAt(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
    }
    /**
     * @customConstructor MetaObject.new
     * @
     * [CLASS] zombie.iso.MetaObject
     */
    export class MetaObject {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, RoomDef arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.RoomDef | null);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.RoomDef
       */
      getRoom(): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsed(arg0: boolean): void;
    }
    /**
     * @customConstructor MultiStageBuilding.new
     * @
     * [CLASS] zombie.iso.MultiStageBuilding
     */
    export class MultiStageBuilding {
      /** java.util.ArrayList<zombie.iso.MultiStageBuilding$Stage> */
      static readonly stages?: java.util.ArrayList<zombie.iso.MultiStageBuilding$Stage>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Stage arg0): void
       */
      static addStage(arg0: zombie.iso.MultiStageBuilding$Stage): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1, boolean arg2): java.util.ArrayList<zombie.iso.MultiStageBuilding$Stage>
       */
      static getStages(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject, arg2: boolean): java.util.ArrayList<zombie.iso.MultiStageBuilding$Stage>;
    }
    /**
     * @customConstructor Stage.new
     * @
     * [CLASS] zombie.iso.MultiStageBuilding$Stage
     */
    export class MultiStageBuilding$Stage {
      /**
       * Constructors: 
       *  - (MultiStageBuilding arg0)
       */
      constructor(arg0: zombie.iso.MultiStageBuilding | null);
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1, boolean arg2): boolean
       */
      canBeDone(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoThumpable arg1, boolean arg2): void
       */
      doStage(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.objects.IsoThumpable, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCraftingSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getItemsLua(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getItemsToKeep(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKnownRecipe(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNorthSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getPerksLua(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPreviousStages(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getThumpSound(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getTimeNeeded(arg0: zombie.characters.IsoGameCharacter): number;
    }
    /**
     * @customConstructor PlayerCamera.new
     * @
     * [CLASS] zombie.iso.PlayerCamera
     */
    export class PlayerCamera {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      XToIso(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): number
       */
      XToScreenExact(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      YToIso(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): number
       */
      YToScreenExact(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      center(): void;
      /**
       * Method Parameters: 
       *  - (PlayerCamera arg0): void
       */
      copyFrom(arg0: zombie.iso.PlayerCamera): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastOffX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastOffY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTOffX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTOffY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      initFromIsoCamera(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor RoomDef.new
     * @
     * [CLASS] zombie.iso.RoomDef
     */
    export class RoomDef {
      /**
       * Constructors: 
       *  - (int arg0, String arg1)
       */
      constructor(arg0: number, arg1: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CalculateBounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEachChunk(arg0: java.util._function_.BiConsumer<zombie.iso.RoomDef, zombie.iso.IsoChunk>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getArea(): number;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): number
       *  - (int arg0, int arg1, int arg2, int arg3): number
       */
      getAreaOverlapping(arg0: zombie.iso.IsoChunk | number, arg1?: number, arg2?: number, arg3?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.BuildingDef
       */
      getBuilding(): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2f arg2): number
       */
      getClosestPoint(arg0: number, arg1: number, arg2: org.joml.Vector2f): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoRoom
       */
      getIsoRoom(): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.MetaObject>
       */
      getMetaObjects(): java.util.ArrayList<zombie.iso.MetaObject>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.MetaObject>
       */
      getObjects(): java.util.ArrayList<zombie.iso.MetaObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, number>
       */
      getProceduralSpawnedContainer(): java.util.HashMap<string, number>;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): zombie.iso.IsoGridSquare
       */
      getRandomSquare(arg0: java.util._function_.Predicate<zombie.iso.IsoGridSquare>): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.RoomDef$RoomRect>
       */
      getRects(): java.util.ArrayList<zombie.iso.RoomDef$RoomRect>;
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
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmptyOutside(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExplored(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isInside(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRoofFixed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      refreshSquares(): void;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      setBuilding(arg0: zombie.iso.BuildingDef): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRoofFixed(arg0: boolean): void;
    }
    /**
     * @customConstructor RoomRect.new
     * @
     * [CLASS] zombie.iso.RoomDef$RoomRect
     */
    export class RoomDef$RoomRect {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2f arg2): number
       */
      getClosestPoint(arg0: number, arg1: number, arg2: org.joml.Vector2f): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
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
    }
    /**
     * @customConstructor SearchMode.new
     * @
     * [CLASS] zombie.iso.SearchMode
     */
    export class SearchMode {

      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.SearchMode$SearchModeFloat
       */
      getBlur(arg0: number): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.SearchMode$SearchModeFloat
       */
      getDarkness(arg0: number): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.SearchMode$SearchModeFloat
       */
      getDesat(arg0: number): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFadeTime(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.SearchMode$SearchModeFloat
       */
      getGradientWidth(arg0: number): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.SearchMode$SearchModeFloat
       */
      getRadius(arg0: number): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.SearchMode$PlayerSearchMode
       */
      getSearchModeForPlayer(arg0: number): zombie.iso.SearchMode$PlayerSearchMode;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isEnabled(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isOverride(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setEnabled(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFadeTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setOverride(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode
       */
      static getInstance(): zombie.iso.SearchMode;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reset(): void;
    }
    /**
     * @customConstructor PlayerSearchMode.new
     * @
     * [CLASS] zombie.iso.SearchMode$PlayerSearchMode
     */
    export class SearchMode$PlayerSearchMode {
      /**
       * Constructors: 
       *  - (int arg0, SearchMode arg1)
       */
      constructor(arg0: number, arg1: zombie.iso.SearchMode | null);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode$SearchModeFloat
       */
      getBlur(): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode$SearchModeFloat
       */
      getDarkness(): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode$SearchModeFloat
       */
      getDesat(): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode$SearchModeFloat
       */
      getGradientWidth(): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode$SearchModeFloat
       */
      getRadius(): zombie.iso.SearchMode$SearchModeFloat;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderBlur(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderDarkness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderDesat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderGradientWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShaderEnabled(): boolean;
    }
    /**
     * @customConstructor SearchModeFloat.new
     * @
     * [CLASS] zombie.iso.SearchMode$SearchModeFloat
     */
    export class SearchMode$SearchModeFloat {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      equalise(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExterior(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInterior(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStepsize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetExterior(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetInterior(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      set(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setExterior(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInterior(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetExterior(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetInterior(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setTargets(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      update(arg0: number): void;
    }
    /**
     * @customConstructor SliceY.new
     * @
     * [CLASS] zombie.iso.SliceY
     */
    export class SliceY {
      /** java.nio.ByteBuffer */
      static readonly SliceBuffer?: java.nio.ByteBuffer;
      /** java.lang.Object */
      static readonly SliceBufferLock?: any;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor TileOverlays.new
     * @
     * [CLASS] zombie.iso.TileOverlays
     */
    export class TileOverlays {
      /** zombie.iso.TileOverlays */
      static readonly instance?: zombie.iso.TileOverlays;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      addOverlays(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      fixTableTopOverlays(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      hasOverlays(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      updateTileOverlaySprite(arg0: zombie.iso.IsoObject): void;
    }
    /**
     * @customConstructor Vector2.new
     * @
     * [CLASS] zombie.iso.Vector2
     */
    export class Vector2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector2 arg0)
       *  - (float arg0, float arg1)
       */
      constructor(arg0?: zombie.iso.Vector2 | number, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      add(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      aimAt(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      angleBetween(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      angleTo(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): zombie.iso.Vector2
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      distanceTo(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      dot(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDirection(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDirectionNeg(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLengthSquared(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      normalize(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      rotate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      scale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       *  - (float arg0, float arg1): zombie.iso.Vector2
       */
      set(arg0: zombie.iso.Vector2 | number, arg1?: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.Vector2
       */
      setDirection(arg0: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.Vector2
       */
      setLength(arg0: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): zombie.iso.Vector2
       */
      setLengthAndDirection(arg0: number, arg1: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tangent(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.awt.Dimension
       */
      toAwtDimension(): java.awt.Dimension;
      /**
       * Method Parameters: 
       *  - (Empty): java.awt.Point
       */
      toAwtPoint(): java.awt.Point;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, Vector2 arg1, float arg2, Vector2 arg3): zombie.iso.Vector2
       */
      static addScaled(arg0: zombie.iso.Vector2, arg1: zombie.iso.Vector2, arg2: number, arg3: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Point arg0): zombie.iso.Vector2
       */
      static fromAwtPoint(arg0: java.awt.Point): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): zombie.iso.Vector2
       */
      static fromLengthDirection(arg0: number, arg1: number): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static getDirection(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, float arg1): zombie.iso.Vector2
       */
      static scale(arg0: zombie.iso.Vector2, arg1: number): zombie.iso.Vector2;
    }
    /**
     * @customConstructor Vector3.new
     * @
     * [CLASS] zombie.iso.Vector3
     */
    export class Vector3 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3 arg0)
       *  - (float arg0, float arg1, float arg2)
       */
      constructor(arg0?: zombie.iso.Vector3 | number, arg1?: number, arg2?: number);
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      add(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       *  - (Vector2 arg0): zombie.iso.Vector3
       */
      addToThis(arg0: zombie.iso.Vector3 | zombie.iso.Vector2): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector3
       */
      aimAt(arg0: zombie.iso.Vector2): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      angleTo(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): zombie.iso.Vector3
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      distanceTo(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.Vector3
       */
      div(arg0: number): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): number
       */
      dot(arg0: zombie.iso.Vector2): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): number
       */
      dot3d(arg0: zombie.iso.Vector3): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDirection(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLengthSq(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      normalize(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      rotate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      rotatey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       *  - (float arg0, float arg1, float arg2): zombie.iso.Vector3
       */
      set(arg0: zombie.iso.Vector3 | number, arg1?: number, arg2?: number): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.Vector3
       */
      setDirection(arg0: number): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.Vector3
       */
      setLength(arg0: number): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): zombie.iso.Vector3
       */
      setLengthAndDirection(arg0: number, arg1: number): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0, Vector3 arg1): zombie.iso.Vector3
       */
      sub(arg0: zombie.iso.Vector3, arg1: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): java.awt.Dimension
       */
      toAwtDimension(): java.awt.Dimension;
      /**
       * Method Parameters: 
       *  - (Empty): java.awt.Point
       */
      toAwtPoint(): java.awt.Point;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Point arg0): zombie.iso.Vector2
       */
      static fromAwtPoint(arg0: java.awt.Point): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): zombie.iso.Vector2
       */
      static fromLengthDirection(arg0: number, arg1: number): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3 arg0, Vector3 arg1, Vector3 arg2): zombie.iso.Vector3
       */
      static sub(arg0: zombie.iso.Vector3, arg1: zombie.iso.Vector3, arg2: zombie.iso.Vector3): zombie.iso.Vector3;
    }
    /**
     * @customConstructor WorldMarkers.new
     * @
     * [CLASS] zombie.iso.WorldMarkers
     */
    export class WorldMarkers {
      /** zombie.iso.WorldMarkers */
      static readonly instance?: zombie.iso.WorldMarkers;


      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1, int arg2, int arg3, String arg4, float arg5, float arg6, float arg7, float arg8): zombie.iso.WorldMarkers$DirectionArrow
       */
      addDirectionArrow(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: number): zombie.iso.WorldMarkers$DirectionArrow;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, float arg1, float arg2, float arg3, boolean arg4, float arg5): zombie.iso.WorldMarkers$GridSquareMarker
       *  - (String arg0, String arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6, float arg7): zombie.iso.WorldMarkers$GridSquareMarker
       *  - (String arg0, String arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6, float arg7, float arg8, float arg9, float arg10): zombie.iso.WorldMarkers$GridSquareMarker
       */
      addGridSquareMarker(arg0: zombie.iso.IsoGridSquare | string, arg1: number | string, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: boolean | number, arg5: number, arg6?: boolean, arg7?: number, arg8?: number, arg9?: number, arg10?: number): zombie.iso.WorldMarkers$GridSquareMarker;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1, int arg2): zombie.iso.WorldMarkers$PlayerHomingPoint
       *  - (IsoPlayer arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6): zombie.iso.WorldMarkers$PlayerHomingPoint
       *  - (IsoPlayer arg0, int arg1, int arg2, String arg3, float arg4, float arg5, float arg6, float arg7, boolean arg8, int arg9): zombie.iso.WorldMarkers$PlayerHomingPoint
       */
      addPlayerHomingPoint(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number, arg3?: number | string, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: boolean, arg9?: number): zombie.iso.WorldMarkers$PlayerHomingPoint;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugRender(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.WorldMarkers$DirectionArrow
       */
      getDirectionArrow(arg0: number): zombie.iso.WorldMarkers$DirectionArrow;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.WorldMarkers$GridSquareMarker
       */
      getGridSquareMarker(arg0: number): zombie.iso.WorldMarkers$GridSquareMarker;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.WorldMarkers$PlayerHomingPoint
       */
      getHomingPoint(arg0: number): zombie.iso.WorldMarkers$PlayerHomingPoint;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      removeAllDirectionArrows(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      removeAllHomingPoints(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (DirectionArrow arg0): boolean
       *  - (int arg0): boolean
       */
      removeDirectionArrow(arg0: zombie.iso.WorldMarkers$DirectionArrow | number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (GridSquareMarker arg0): boolean
       */
      removeGridSquareMarker(arg0: number | zombie.iso.WorldMarkers$GridSquareMarker): boolean;
      /**
       * Method Parameters: 
       *  - (PlayerHomingPoint arg0): boolean
       *  - (int arg0): boolean
       */
      removeHomingPoint(arg0: zombie.iso.WorldMarkers$PlayerHomingPoint | number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1): boolean
       *  - (IsoPlayer arg0, DirectionArrow arg1): boolean
       */
      removePlayerDirectionArrow(arg0: zombie.characters.IsoPlayer, arg1: number | zombie.iso.WorldMarkers$DirectionArrow): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, PlayerHomingPoint arg1): boolean
       *  - (IsoPlayer arg0, int arg1): boolean
       */
      removePlayerHomingPoint(arg0: zombie.characters.IsoPlayer, arg1: zombie.iso.WorldMarkers$PlayerHomingPoint | number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      renderDirectionArrow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PerPlayerRender arg0, int arg1, int arg2): void
       */
      renderGridSquareMarkers(arg0: zombie.iso.IsoCell$PerPlayerRender, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderHomingPoint(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Line arg0, Line arg1, Point arg2): boolean
       */
      static intersectLineSegments(arg0: zombie.iso.WorldMarkers$Line, arg1: zombie.iso.WorldMarkers$Line, arg2: zombie.iso.WorldMarkers$Point): boolean;
    }
    /**
     * @customConstructor DirectionArrow.new
     * @
     * [CLASS] zombie.iso.WorldMarkers$DirectionArrow
     */
    export class WorldMarkers$DirectionArrow {
      /** boolean */
      static readonly doDebug: boolean;

      /**
       * Constructors: 
       *  - (WorldMarkers arg0, int arg1)
       */
      constructor(arg0: zombie.iso.WorldMarkers | null, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setA(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTexDown(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTexStairsDown(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTexStairsUp(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTexture(arg0: string): void;
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
       *  - (int arg0): void
       */
      setZ(arg0: number): void;
    }
    /**
     * @customConstructor GridSquareMarker.new
     * @
     * [CLASS] zombie.iso.WorldMarkers$GridSquareMarker
     */
    export class WorldMarkers$GridSquareMarker {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFadeSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
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
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, float arg5): void
       */
      init(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoAlpha(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScaleCircleTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setA(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlphaMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlphaMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoAlpha(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFadeSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, float arg3): void
       */
      setPosAndSize(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScaleCircleTexture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSize(arg0: number): void;
    }
    /**
     * @customConstructor Line.new
     * @
     * [CLASS] zombie.iso.WorldMarkers$Line
     */
    export class WorldMarkers$Line {

      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor PlayerHomingPoint.new
     * @
     * [CLASS] zombie.iso.WorldMarkers$PlayerHomingPoint
     */
    export class WorldMarkers$PlayerHomingPoint {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngleLerpVal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHomeOnOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHomeOnOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHomeOnTargetDist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovementLerpVal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStickToCharDist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomTargetAngle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHomeOnTargetInView(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setA(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAngleLerpVal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomTargetAngle(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setHighCounter(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHomeOnOffsetX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHomeOnOffsetY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHomeOnTargetDist(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHomeOnTargetInView(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMovementLerpVal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderOffsetX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderOffsetY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStickToCharDist(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setTableSurface(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTexture(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setXOffsetScaled(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setYOffsetScaled(arg0: number): void;
    }
    /**
     * @customConstructor Point.new
     * @
     * [CLASS] zombie.iso.WorldMarkers$Point
     */
    export class WorldMarkers$Point {

      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      notInfinite(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): zombie.iso.WorldMarkers$Point
       */
      set(arg0: number, arg1: number): zombie.iso.WorldMarkers$Point;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
  }
}
