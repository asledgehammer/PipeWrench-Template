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
 * File generated at Friday July 2022 15:18:33.644-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.network {
    /**
     * @customConstructor BodyDamageSync.new
     * @
     * [CLASS] zombie.network.BodyDamageSync
     */
    export class BodyDamageSync {
      /** byte */
      static readonly BD_BodyDamage: number;
      /** byte */
      static readonly BD_Health: number;
      /** byte */
      static readonly BD_IsBleedingStemmed: number;
      /** byte */
      static readonly BD_IsCortorised: number;
      /** byte */
      static readonly BD_IsFakeInfected: number;
      /** byte */
      static readonly BD_IsInfected: number;
      /** byte */
      static readonly BD_additionalPain: number;
      /** byte */
      static readonly BD_alcoholLevel: number;
      /** byte */
      static readonly BD_alcoholicBandage: number;
      /** byte */
      static readonly BD_bandageLife: number;
      /** byte */
      static readonly BD_bandageType: number;
      /** byte */
      static readonly BD_bandaged: number;
      /** byte */
      static readonly BD_biteTime: number;
      /** byte */
      static readonly BD_bitten: number;
      /** byte */
      static readonly BD_bleeding: number;
      /** byte */
      static readonly BD_bleedingTime: number;
      /** byte */
      static readonly BD_burnTime: number;
      /** byte */
      static readonly BD_comfreyFactor: number;
      /** byte */
      static readonly BD_cut: number;
      /** byte */
      static readonly BD_cutTime: number;
      /** byte */
      static readonly BD_deepWoundTime: number;
      /** byte */
      static readonly BD_deepWounded: number;
      /** byte */
      static readonly BD_fractureTime: number;
      /** byte */
      static readonly BD_garlicFactor: number;
      /** byte */
      static readonly BD_getBandageXp: number;
      /** byte */
      static readonly BD_getSplintXp: number;
      /** byte */
      static readonly BD_getStitchXp: number;
      /** byte */
      static readonly BD_haveBullet: number;
      /** byte */
      static readonly BD_haveGlass: number;
      /** byte */
      static readonly BD_infectedWound: number;
      /** byte */
      static readonly BD_lastTimeBurnWash: number;
      /** byte */
      static readonly BD_needBurnWash: number;
      /** byte */
      static readonly BD_plantainFactor: number;
      /** byte */
      static readonly BD_scratchTime: number;
      /** byte */
      static readonly BD_scratched: number;
      /** byte */
      static readonly BD_splint: number;
      /** byte */
      static readonly BD_splintFactor: number;
      /** byte */
      static readonly BD_splintItem: number;
      /** byte */
      static readonly BD_stitchTime: number;
      /** byte */
      static readonly BD_stitched: number;
      /** byte */
      static readonly BD_woundInfectionLevel: number;
      /** zombie.network.BodyDamageSync */
      static instance?: zombie.network.BodyDamageSync;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      clientPacket(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      serverPacket(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      startReceivingUpdates(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0, short arg1): void
       */
      startSendingUpdates(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      stopReceivingUpdates(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0, short arg1): void
       */
      stopSendingUpdates(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor Updater.new
     * @
     * [CLASS] zombie.network.BodyDamageSync$Updater
     */
    export class BodyDamageSync$Updater {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (byte arg0, String arg1): void
       *  - (byte arg0, boolean arg1): void
       *  - (byte arg0, float arg1, float arg2): boolean
       */
      updateField(arg0: number, arg1: string | boolean | number, arg2?: number): void | boolean;
    }
    /**
     * @customConstructor ClientChunkRequest.new
     * @
     * [CLASS] zombie.network.ClientChunkRequest
     */
    export class ClientChunkRequest {
      /** java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer> */
      static readonly freeBuffers?: java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Chunk arg0): void
       */
      getByteBuffer(arg0: zombie.network.ClientChunkRequest$Chunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.ClientChunkRequest$Chunk
       */
      getChunk(): zombie.network.ClientChunkRequest$Chunk;
      /**
       * Method Parameters: 
       *  - (Chunk arg0): void
       */
      releaseBuffer(arg0: zombie.network.ClientChunkRequest$Chunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseBuffers(): void;
      /**
       * Method Parameters: 
       *  - (Chunk arg0): void
       */
      releaseChunk(arg0: zombie.network.ClientChunkRequest$Chunk): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      unpack(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      unpackLargeArea(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
    }
    /**
     * @customConstructor Chunk.new
     * @
     * [CLASS] zombie.network.ClientChunkRequest$Chunk
     */
    export class ClientChunkRequest$Chunk {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ClientServerMap.new
     * @
     * [CLASS] zombie.network.ClientServerMap
     */
    export class ClientServerMap {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
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
      getMinX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isValidCell(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendPacket(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      setLoaded(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      setPlayerPosition(arg0: number, arg1: number): boolean;
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
       *  - (UdpConnection arg0, int arg1): void
       */
      static characterIn(arg0: zombie.core.raknet.UdpConnection, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      static isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static receivePacket(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static render(arg0: number): void;
    }
    /**
     * @customConstructor DBResult.new
     * @
     * [CLASS] zombie.network.DBResult
     */
    export class DBResult {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getColumns(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, string>
       */
      getValues(): java.util.HashMap<string, string>;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setColumns(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTableName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
    }
    /**
     * @customConstructor DBTicket.new
     * @
     * [CLASS] zombie.network.DBTicket
     */
    export class DBTicket {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.DBTicket
       */
      getAnswer(): zombie.network.DBTicket;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMessage(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTicketID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnswer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isViewed(): boolean;
      /**
       * Method Parameters: 
       *  - (DBTicket arg0): void
       */
      setAnswer(arg0: zombie.network.DBTicket): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsAnswer(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMessage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTicketID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setViewed(arg0: boolean): void;
    }
    /**
     * @customConstructor GameClient.new
     * @
     * [CLASS] zombie.network.GameClient
     */
    export class GameClient {
      /** int */
      static readonly DEFAULT_PORT: number;
      /** java.lang.String */
      static GameMap?: string;
      /** java.util.HashMap<java.lang.Short, zombie.characters.IsoPlayer> */
      static readonly IDToPlayerMap?: java.util.HashMap<number, zombie.characters.IsoPlayer>;
      /** gnu.trove.map.hash.TShortObjectHashMap<zombie.characters.IsoZombie> */
      static readonly IDToZombieMap?: gnu.trove.map.hash.TShortObjectHashMap<zombie.characters.IsoZombie>;
      /** float */
      static ServerPredictedAhead: number;
      /** boolean */
      static allChatMuted: boolean;
      /** boolean */
      static askPing: boolean;
      /** boolean */
      static bClient: boolean;
      /** boolean */
      static bCoopInvite: boolean;
      /** boolean */
      static bFastForward: boolean;
      /** boolean */
      static bIngame: boolean;
      /** java.lang.String */
      static checksum?: string;
      /** boolean */
      static checksumValid: boolean;
      /** zombie.core.raknet.UdpConnection */
      static connection?: zombie.core.raknet.UdpConnection;
      /** int */
      static count: number;
      /** zombie.network.GameClient */
      static readonly instance?: zombie.network.GameClient;
      /** java.lang.String */
      static ip?: string;
      /** zombie.network.ClientServerMap[] */
      static readonly loadedCells?: zombie.network.ClientServerMap[];
      /** java.lang.String */
      static localIP?: string;
      /** java.lang.String */
      static password?: string;
      /** java.util.List<java.lang.Long> */
      static pingsList?: java.util.List<number>;
      /** java.lang.String */
      static poisonousBerry?: string;
      /** java.lang.String */
      static poisonousMushroom?: string;
      /** int */
      static port: number;
      /** java.util.Map<java.lang.Short, zombie.iso.Vector2> */
      static positions?: java.util.Map<number, zombie.iso.Vector2>;
      /** java.lang.String */
      static serverPassword?: string;
      /** java.util.Calendar */
      static startAuth?: java.util.Calendar;
      /** java.lang.String */
      static username?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      GameLoadingRequestData(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, IsoMovingObject arg2): void
       */
      PlaySound(arg0: string, arg1: boolean, arg2: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, byte arg3): void
       */
      PlayWorldSound(arg0: string, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Shutdown(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, String arg1, boolean arg2): void
       */
      StopSound(arg0: zombie.iso.IsoMovingObject, arg1: string, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, boolean arg2): void
       */
      acceptTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      addDisconnectPacket(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0, ByteBuffer arg1): void
       */
      addIncoming(arg0: number, arg1: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, ItemContainer arg1, InventoryItem arg2): void
       */
      addToItemRemoveSendBuffer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, ItemContainer arg1, InventoryItem arg2): void
       */
      addToItemSendBuffer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      addUserlog(arg0: string, arg1: string, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      addWarningPoint(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canConnect(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      checkAddedRemovedItems(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      connectionLost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      disconnect(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5): void
       */
      doConnect(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      doConnectCoop(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      doDisconnect(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, float arg1): void
       */
      drink(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, Food arg1, float arg2): void
       */
      eatFood(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.types.Food, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1): void
       */
      equip(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      executeQuery(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      getConnectedPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      getDBSchema(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): se.krka.kahlua.vm.KahluaTable
       */
      getPacketCounts(arg0: number): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.characters.IsoPlayer
       */
      getPlayerByOnlineID(arg0: number): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.IsoPlayer
       */
      getPlayerFromUsername(arg0: string): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      getPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReconnectCountdownTimer(): string;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getServerSpawnRegions(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      getTableResult(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      heartBeat(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadResetID(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): boolean
       */
      receivePlayerConnectWhileLoading(arg0: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      removeUserlog(arg0: string, arg1: string, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      removeZombieFromCache(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      requestPacketCounts(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1): void
       */
      requestTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      requestUserlog(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetDisconnectTimer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      scoreboardUpdate(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, Perk arg1, int arg2): void
       */
      sendAddXp(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.skills.PerkFactory$Perk, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      sendAddedRemovedItems(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      sendAdditionalPain(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, InventoryItem arg2): void
       */
      sendAttachedItem(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, float arg3, boolean arg4, String arg5): void
       */
      sendBandage(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: boolean, arg5: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
       */
      sendCataplasm(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendChangedPlayerStats(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3): void
       */
      sendCleanBurn(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
       */
      sendClientCommand(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: string, arg3: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, String arg2, Object... arg3): void
       */
      sendClientCommandV(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: string, arg3: any): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, InventoryItem arg2): void
       */
      sendClothing(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      sendCustomColor(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3): void
       */
      sendDisinfect(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      sendItemStats(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      sendLoginQueueDone2(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendLoginQueueRequest2(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPersonalColor(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayer2(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayerConnect(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayerSave(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2): void
       */
      sendRemoveBullet(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, boolean arg3): void
       */
      sendRemoveGlass(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      sendReplaceOnCooked(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (SandboxOptions arg0): void
       */
      sendSandboxOptionsToServer(arg0: zombie.SandboxOptions): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, float arg3, String arg4): void
       */
      sendSplint(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      sendSteamProfileName(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3, boolean arg4): void
       */
      sendStitch(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendSyncXp(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendTransactionID(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendVisual(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, HandWeapon arg1, IsoObject arg2): void
       */
      sendWeaponHit(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.types.HandWeapon, arg2: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      sendWorldMessage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (WorldSound arg0): void
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6, float arg7, float arg8): void
       */
      sendWorldSound(arg0: any, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: boolean, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      sendWoundInfection(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setResetID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0, int arg1): void
       */
      smashWindow(arg0: zombie.iso.objects.IsoWindow, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startClient(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startLocalServer(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
       */
      tradingUISendAddItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
       */
      tradingUISendRemoveItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
       */
      tradingUISendUpdateState(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      wakeUpPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0, IsoPlayer arg1): void
       */
      writePlayerConnectData(arg0: zombie.core.network.ByteBufferWriter, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static IsClientPaused(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static SendCommandToServer(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, String arg1): void
       */
      static acceptFactionInvite(arg0: zombie.characters.Faction, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0, String arg1): void
       */
      static acceptSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      static addTicket(arg0: string, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canModifyPlayerStats(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canSeePlayerStats(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static checksumServer(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static destroy(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static getCustomModData(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getServerStatisticEnable(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static getTickets(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): zombie.characters.IsoZombie
       */
      static getZombie(arg0: number): zombie.characters.IsoZombie;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1, IsoPlayer arg2): void
       */
      static invMngRequestItem(arg0: number, arg1: string, arg2: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, IsoPlayer arg1): void
       */
      static invMngRequestRemoveItem(arg0: number, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveEatBody(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveRadioDeviceDataState(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveRadioPostSilence(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveRadioServerData(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveSyncCustomLightSettings(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveSyncRadioData(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveThump(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveWaveSignal(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, boolean arg1): void
       */
      static registerZone(arg0: zombie.iso.IsoMetaGrid$Zone, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static removeTicket(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BaseAction arg0, boolean arg1): void
       */
      static sendAction(arg0: zombie.characters.CharacterTimedActions.BaseAction, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static sendBuildingStashToDo(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0, short arg1): void
       */
      static sendBurnCorpse(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Safety arg0): void
       */
      static sendChangeSafety(arg0: zombie.characters.Safety): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCompost arg0): void
       */
      static sendCompost(arg0: zombie.iso.objects.IsoCompost): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0, IsoMovingObject arg1): void
       */
      static sendEatBody(arg0: zombie.characters.IsoZombie, arg1: zombie.iso.IsoMovingObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendEquippedRadioFreq(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): void
       */
      static sendEvent(arg0: zombie.characters.IsoPlayer, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, boolean arg1): void
       */
      static sendFaction(arg0: zombie.characters.Faction, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, IsoPlayer arg1, String arg2): void
       */
      static sendFactionInvite(arg0: zombie.characters.Faction, arg1: zombie.characters.IsoPlayer, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BSFurnace arg0): void
       */
      static sendFurnaceChange(arg0: zombie.iso.objects.BSFurnace): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): void
       */
      static sendGetItemInvMng(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoMovingObject arg1, HandWeapon arg2, float arg3, boolean arg4, float arg5, boolean arg6, boolean arg7, boolean arg8): boolean
       */
      static sendHitCharacter(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoMovingObject, arg2: zombie.inventory.types.HandWeapon, arg3: number, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoGameCharacter arg1, BaseVehicle arg2, float arg3, boolean arg4, int arg5, float arg6, boolean arg7): void
       */
      static sendHitVehicle(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.vehicles.BaseVehicle, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendIsoRegionDataRequest(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, String arg3, String arg4, String arg5, float arg6, float arg7, float arg8, int arg9, boolean arg10): void
       */
      static sendIsoWaveSignal(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: string, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, ArrayList arg1, IsoPlayer arg2, String arg3, String arg4): boolean
       */
      static sendItemListNet(arg0: zombie.characters.IsoPlayer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: zombie.characters.IsoPlayer, arg3: string, arg4: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendKickOutOfSafehouse(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (NonPvpZone arg0, boolean arg1): void
       */
      static sendNonPvpZone(arg0: zombie.iso.areas.NonPvpZone, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPerks(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendPing(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerDamage(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerDeath(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerExtraInfo(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerInjuries(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, boolean arg1, boolean arg2): void
       */
      static sendPlayerListensChannel(arg0: number, arg1: boolean, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendRadioServerDataRequest(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoDeadBody arg0): void
       */
      static sendRemoveCorpseFromMap(arg0: zombie.iso.objects.IsoDeadBody): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendRequestInventory(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0, boolean arg1): void
       */
      static sendSafehouse(arg0: zombie.iso.areas.SafeHouse, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0, IsoPlayer arg1, String arg2): void
       */
      static sendSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: zombie.characters.IsoPlayer, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): void
       */
      static sendServerPing(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0, int arg1, byte arg2): void
       */
      static sendSneezingCoughing(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       *  - (IsoGameCharacter arg0): void
       */
      static sendStopFire(arg0: zombie.iso.IsoGridSquare | zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, float arg1, float arg2, float arg3): void
       */
      static sendTeleport(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Thumpable arg1): void
       */
      static sendThump(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendWeight(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      static sendZombieDeath(arg0: zombie.characters.IsoZombie): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoGameCharacter arg1, InventoryItem arg2): void
       */
      static sendZombieHelmetFall(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setServerStatisticEnable(arg0: boolean): void;
    }
    /**
     * @customConstructor NetworkAIParams.new
     * @
     * [CLASS] zombie.network.NetworkAIParams
     */
    export class NetworkAIParams {
      /** int */
      static readonly CHARACTER_EXTRAPOLATION_UPDATE_INTERVAL_MS: number;
      /** int */
      static readonly CHARACTER_PREDICTION_INTERVAL_MS: number;
      /** int */
      static readonly CHARACTER_UPDATE_RATE_MS: number;
      /** int */
      static readonly VEHICLE_SPEED_CAP: number;
      /** float */
      static readonly ZOMBIE_ANTICIPATORY_UPDATE_MULTIPLIER: number;
      /** int */
      static readonly ZOMBIE_MAX_UPDATE_INTERVAL_MS: number;
      /** int */
      static readonly ZOMBIE_MIN_UPDATE_INTERVAL_MS: number;
      /** int */
      static readonly ZOMBIE_REMOVE_INTERVAL_MS: number;
      /** int */
      static readonly ZOMBIE_TELEPORT_DISTANCE_SQ: number;
      /** int */
      static readonly ZOMBIE_TELEPORT_PLAYER: number;
      /** int */
      static readonly ZOMBIE_UPDATE_INFO_BUNCH_RATE_MS: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Init(): void;
    }
    /** [ENUM] zombie.network.NetworkVariables$PredictionTypes */
    export class NetworkVariables$PredictionTypes {
      protected constructor();
      static readonly Climb: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Lunge: zombie.network.NetworkVariables$PredictionTypes;
      static readonly LungeHalf: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Moving: zombie.network.NetworkVariables$PredictionTypes;
      static readonly None: zombie.network.NetworkVariables$PredictionTypes;
      static readonly PathFind: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Static: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Thump: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Walk: zombie.network.NetworkVariables$PredictionTypes;
      static readonly WalkHalf: zombie.network.NetworkVariables$PredictionTypes;
      name(): string;
      ordinal(): number;
    }
    /** [ENUM] zombie.network.PacketTypes$PacketType */
    export class PacketTypes$PacketType {
      protected constructor();
      static readonly AcceptedFactionInvite: zombie.network.PacketTypes$PacketType;
      static readonly AcceptedSafehouseInvite: zombie.network.PacketTypes$PacketType;
      static readonly AccessDenied: zombie.network.PacketTypes$PacketType;
      static readonly ActionPacket: zombie.network.PacketTypes$PacketType;
      static readonly AddAlarm: zombie.network.PacketTypes$PacketType;
      static readonly AddAmbient: zombie.network.PacketTypes$PacketType;
      static readonly AddBrokenGlass: zombie.network.PacketTypes$PacketType;
      static readonly AddChatTab: zombie.network.PacketTypes$PacketType;
      static readonly AddCoopPlayer: zombie.network.PacketTypes$PacketType;
      static readonly AddCorpseToMap: zombie.network.PacketTypes$PacketType;
      static readonly AddExplosiveTrap: zombie.network.PacketTypes$PacketType;
      static readonly AddInventoryItemToContainer: zombie.network.PacketTypes$PacketType;
      static readonly AddItemInInventory: zombie.network.PacketTypes$PacketType;
      static readonly AddItemToMap: zombie.network.PacketTypes$PacketType;
      static readonly AddTicket: zombie.network.PacketTypes$PacketType;
      static readonly AddUserlog: zombie.network.PacketTypes$PacketType;
      static readonly AddWarningPoint: zombie.network.PacketTypes$PacketType;
      static readonly AddXP: zombie.network.PacketTypes$PacketType;
      static readonly AddXpCommand: zombie.network.PacketTypes$PacketType;
      static readonly AddXpFromPlayerStatsUI: zombie.network.PacketTypes$PacketType;
      static readonly AdditionalPain: zombie.network.PacketTypes$PacketType;
      static readonly Bandage: zombie.network.PacketTypes$PacketType;
      static readonly BecomeCorpse: zombie.network.PacketTypes$PacketType;
      static readonly BloodSplatter: zombie.network.PacketTypes$PacketType;
      static readonly BodyDamageUpdate: zombie.network.PacketTypes$PacketType;
      static readonly BurnCorpse: zombie.network.PacketTypes$PacketType;
      static readonly Cataplasm: zombie.network.PacketTypes$PacketType;
      static readonly ChangePlayerStats: zombie.network.PacketTypes$PacketType;
      static readonly ChangeSafety: zombie.network.PacketTypes$PacketType;
      static readonly ChangeTextColor: zombie.network.PacketTypes$PacketType;
      static readonly ChatMessageFromPlayer: zombie.network.PacketTypes$PacketType;
      static readonly ChatMessageToPlayer: zombie.network.PacketTypes$PacketType;
      static readonly Checksum: zombie.network.PacketTypes$PacketType;
      static readonly ChunkObjectState: zombie.network.PacketTypes$PacketType;
      static readonly CleanBurn: zombie.network.PacketTypes$PacketType;
      static readonly ClientCommand: zombie.network.PacketTypes$PacketType;
      static readonly ClimateManagerPacket: zombie.network.PacketTypes$PacketType;
      static readonly ConnectionDetails: zombie.network.PacketTypes$PacketType;
      static readonly ConstructedZone: zombie.network.PacketTypes$PacketType;
      static readonly Disinfect: zombie.network.PacketTypes$PacketType;
      static readonly Drink: zombie.network.PacketTypes$PacketType;
      static readonly EatBody: zombie.network.PacketTypes$PacketType;
      static readonly EatFood: zombie.network.PacketTypes$PacketType;
      static readonly Equip: zombie.network.PacketTypes$PacketType;
      static readonly EventPacket: zombie.network.PacketTypes$PacketType;
      static readonly ExecuteQuery: zombie.network.PacketTypes$PacketType;
      static readonly ExtraInfo: zombie.network.PacketTypes$PacketType;
      static readonly GetDBSchema: zombie.network.PacketTypes$PacketType;
      static readonly GetTableResult: zombie.network.PacketTypes$PacketType;
      static readonly GlobalModData: zombie.network.PacketTypes$PacketType;
      static readonly GlobalModDataRequest: zombie.network.PacketTypes$PacketType;
      static readonly GlobalObjects: zombie.network.PacketTypes$PacketType;
      static readonly Helicopter: zombie.network.PacketTypes$PacketType;
      static readonly HitCharacter: zombie.network.PacketTypes$PacketType;
      static readonly HumanVisual: zombie.network.PacketTypes$PacketType;
      static readonly InitPlayerChat: zombie.network.PacketTypes$PacketType;
      static readonly InvMngGetItem: zombie.network.PacketTypes$PacketType;
      static readonly InvMngRemoveItem: zombie.network.PacketTypes$PacketType;
      static readonly InvMngReqItem: zombie.network.PacketTypes$PacketType;
      static readonly IsoRegionClientRequestFullUpdate: zombie.network.PacketTypes$PacketType;
      static readonly IsoRegionServerPacket: zombie.network.PacketTypes$PacketType;
      static readonly ItemStats: zombie.network.PacketTypes$PacketType;
      static readonly ItemTransaction: zombie.network.PacketTypes$PacketType;
      static readonly KeepAlive: zombie.network.PacketTypes$PacketType;
      static readonly KickOutOfSafehouse: zombie.network.PacketTypes$PacketType;
      static readonly Kicked: zombie.network.PacketTypes$PacketType;
      static readonly KillZombie: zombie.network.PacketTypes$PacketType;
      static readonly LoadPlayerProfile: zombie.network.PacketTypes$PacketType;
      static readonly Login: zombie.network.PacketTypes$PacketType;
      static readonly LoginQueueDone2: zombie.network.PacketTypes$PacketType;
      static readonly LoginQueueRequest2: zombie.network.PacketTypes$PacketType;
      static readonly MessageForAdmin: zombie.network.PacketTypes$PacketType;
      static readonly MetaGrid: zombie.network.PacketTypes$PacketType;
      static readonly NotRequiredInZip: zombie.network.PacketTypes$PacketType;
      static readonly ObjectChange: zombie.network.PacketTypes$PacketType;
      static readonly ObjectModData: zombie.network.PacketTypes$PacketType;
      static readonly PacketCounts: zombie.network.PacketTypes$PacketType;
      static readonly PacketTypeShort: zombie.network.PacketTypes$PacketType;
      static readonly PassengerMap: zombie.network.PacketTypes$PacketType;
      static readonly Ping: zombie.network.PacketTypes$PacketType;
      static readonly PingFromClient: zombie.network.PacketTypes$PacketType;
      static readonly PlaySound: zombie.network.PacketTypes$PacketType;
      static readonly PlaySoundEveryPlayer: zombie.network.PacketTypes$PacketType;
      static readonly PlayWorldSound: zombie.network.PacketTypes$PacketType;
      static readonly PlayerAttachedItem: zombie.network.PacketTypes$PacketType;
      static readonly PlayerConnect: zombie.network.PacketTypes$PacketType;
      static readonly PlayerConnectedToChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDamage: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDamageFromCarCrash: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDeath: zombie.network.PacketTypes$PacketType;
      static readonly PlayerJoinChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerLeaveChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerListensChannel: zombie.network.PacketTypes$PacketType;
      static readonly PlayerNotFound: zombie.network.PacketTypes$PacketType;
      static readonly PlayerSave: zombie.network.PacketTypes$PacketType;
      static readonly PlayerStartPMChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerTimeout: zombie.network.PacketTypes$PacketType;
      static readonly PlayerUpdate: zombie.network.PacketTypes$PacketType;
      static readonly PlayerUpdateReliable: zombie.network.PacketTypes$PacketType;
      static readonly RadioDeviceDataState: zombie.network.PacketTypes$PacketType;
      static readonly RadioPostSilenceEvent: zombie.network.PacketTypes$PacketType;
      static readonly RadioServerData: zombie.network.PacketTypes$PacketType;
      static readonly ReadAnnotedMap: zombie.network.PacketTypes$PacketType;
      static readonly ReceiveCommand: zombie.network.PacketTypes$PacketType;
      static readonly ReceiveModData: zombie.network.PacketTypes$PacketType;
      static readonly RegisterZone: zombie.network.PacketTypes$PacketType;
      static readonly ReloadOptions: zombie.network.PacketTypes$PacketType;
      static readonly RemoveBlood: zombie.network.PacketTypes$PacketType;
      static readonly RemoveBullet: zombie.network.PacketTypes$PacketType;
      static readonly RemoveChatTab: zombie.network.PacketTypes$PacketType;
      static readonly RemoveContestedItemsFromInventory: zombie.network.PacketTypes$PacketType;
      static readonly RemoveCorpseFromMap: zombie.network.PacketTypes$PacketType;
      static readonly RemoveGlass: zombie.network.PacketTypes$PacketType;
      static readonly RemoveInventoryItemFromContainer: zombie.network.PacketTypes$PacketType;
      static readonly RemoveItemFromSquare: zombie.network.PacketTypes$PacketType;
      static readonly RemoveTicket: zombie.network.PacketTypes$PacketType;
      static readonly RemoveUserlog: zombie.network.PacketTypes$PacketType;
      static readonly ReplaceOnCooked: zombie.network.PacketTypes$PacketType;
      static readonly RequestData: zombie.network.PacketTypes$PacketType;
      static readonly RequestInventory: zombie.network.PacketTypes$PacketType;
      static readonly RequestItemsForContainer: zombie.network.PacketTypes$PacketType;
      static readonly RequestLargeAreaZip: zombie.network.PacketTypes$PacketType;
      static readonly RequestPlayerData: zombie.network.PacketTypes$PacketType;
      static readonly RequestTrading: zombie.network.PacketTypes$PacketType;
      static readonly RequestZipList: zombie.network.PacketTypes$PacketType;
      static readonly SandboxOptions: zombie.network.PacketTypes$PacketType;
      static readonly ScoreboardUpdate: zombie.network.PacketTypes$PacketType;
      static readonly SendCustomColor: zombie.network.PacketTypes$PacketType;
      static readonly SendFactionInvite: zombie.network.PacketTypes$PacketType;
      static readonly SendInventory: zombie.network.PacketTypes$PacketType;
      static readonly SendItemListNet: zombie.network.PacketTypes$PacketType;
      static readonly SendModData: zombie.network.PacketTypes$PacketType;
      static readonly SendPlayerProfile: zombie.network.PacketTypes$PacketType;
      static readonly SendSafehouseInvite: zombie.network.PacketTypes$PacketType;
      static readonly SendTransactionID: zombie.network.PacketTypes$PacketType;
      static readonly SentChunk: zombie.network.PacketTypes$PacketType;
      static readonly ServerMap: zombie.network.PacketTypes$PacketType;
      static readonly ServerQuit: zombie.network.PacketTypes$PacketType;
      static readonly SledgehammerDestroy: zombie.network.PacketTypes$PacketType;
      static readonly SlowFactor: zombie.network.PacketTypes$PacketType;
      static readonly SmashWindow: zombie.network.PacketTypes$PacketType;
      static readonly SneezeCough: zombie.network.PacketTypes$PacketType;
      static readonly SpawnRegion: zombie.network.PacketTypes$PacketType;
      static readonly Splint: zombie.network.PacketTypes$PacketType;
      static readonly StartFire: zombie.network.PacketTypes$PacketType;
      static readonly StartPause: zombie.network.PacketTypes$PacketType;
      static readonly StartRain: zombie.network.PacketTypes$PacketType;
      static readonly Statistic: zombie.network.PacketTypes$PacketType;
      static readonly StatisticRequest: zombie.network.PacketTypes$PacketType;
      static readonly SteamGeneric: zombie.network.PacketTypes$PacketType;
      static readonly Stitch: zombie.network.PacketTypes$PacketType;
      static readonly StopFire: zombie.network.PacketTypes$PacketType;
      static readonly StopPause: zombie.network.PacketTypes$PacketType;
      static readonly StopRain: zombie.network.PacketTypes$PacketType;
      static readonly StopSound: zombie.network.PacketTypes$PacketType;
      static readonly SyncAlarmClock: zombie.network.PacketTypes$PacketType;
      static readonly SyncClock: zombie.network.PacketTypes$PacketType;
      static readonly SyncClothing: zombie.network.PacketTypes$PacketType;
      static readonly SyncCompost: zombie.network.PacketTypes$PacketType;
      static readonly SyncCustomLightSettings: zombie.network.PacketTypes$PacketType;
      static readonly SyncDoorKey: zombie.network.PacketTypes$PacketType;
      static readonly SyncEquippedRadioFreq: zombie.network.PacketTypes$PacketType;
      static readonly SyncFaction: zombie.network.PacketTypes$PacketType;
      static readonly SyncFurnace: zombie.network.PacketTypes$PacketType;
      static readonly SyncInjuries: zombie.network.PacketTypes$PacketType;
      static readonly SyncIsoObject: zombie.network.PacketTypes$PacketType;
      static readonly SyncIsoObjectReq: zombie.network.PacketTypes$PacketType;
      static readonly SyncNonPvpZone: zombie.network.PacketTypes$PacketType;
      static readonly SyncObjects: zombie.network.PacketTypes$PacketType;
      static readonly SyncPerks: zombie.network.PacketTypes$PacketType;
      static readonly SyncRadioData: zombie.network.PacketTypes$PacketType;
      static readonly SyncSafehouse: zombie.network.PacketTypes$PacketType;
      static readonly SyncThumpable: zombie.network.PacketTypes$PacketType;
      static readonly SyncWeight: zombie.network.PacketTypes$PacketType;
      static readonly SyncWorldObjectsReq: zombie.network.PacketTypes$PacketType;
      static readonly SyncXP: zombie.network.PacketTypes$PacketType;
      static readonly Teleport: zombie.network.PacketTypes$PacketType;
      static readonly Thump: zombie.network.PacketTypes$PacketType;
      static readonly TimeSync: zombie.network.PacketTypes$PacketType;
      static readonly TradingUIAddItem: zombie.network.PacketTypes$PacketType;
      static readonly TradingUIRemoveItem: zombie.network.PacketTypes$PacketType;
      static readonly TradingUIUpdateState: zombie.network.PacketTypes$PacketType;
      static readonly UpdateItemSprite: zombie.network.PacketTypes$PacketType;
      static readonly UpdateOverlaySprite: zombie.network.PacketTypes$PacketType;
      static readonly Userlog: zombie.network.PacketTypes$PacketType;
      static readonly Vehicles: zombie.network.PacketTypes$PacketType;
      static readonly VehiclesUnreliable: zombie.network.PacketTypes$PacketType;
      static readonly ViewTickets: zombie.network.PacketTypes$PacketType;
      static readonly WakeUpPlayer: zombie.network.PacketTypes$PacketType;
      static readonly WaveSignal: zombie.network.PacketTypes$PacketType;
      static readonly WeaponHit: zombie.network.PacketTypes$PacketType;
      static readonly Weather: zombie.network.PacketTypes$PacketType;
      static readonly WorldMessage: zombie.network.PacketTypes$PacketType;
      static readonly WorldSound: zombie.network.PacketTypes$PacketType;
      static readonly WoundInfection: zombie.network.PacketTypes$PacketType;
      static readonly WriteLog: zombie.network.PacketTypes$PacketType;
      static readonly ZombieControl: zombie.network.PacketTypes$PacketType;
      static readonly ZombieDeath: zombie.network.PacketTypes$PacketType;
      static readonly ZombieDescriptors: zombie.network.PacketTypes$PacketType;
      static readonly ZombieHelmetFalling: zombie.network.PacketTypes$PacketType;
      static readonly ZombieSimulation: zombie.network.PacketTypes$PacketType;
      static readonly ZombieSimulationReliable: zombie.network.PacketTypes$PacketType;
      static readonly ZombieSound: zombie.network.PacketTypes$PacketType;
      static readonly getModData: zombie.network.PacketTypes$PacketType;

      /* FIELDS */

      name(): string;
      ordinal(): number;
      /** (ByteBufferWriter arg0): void */
      doPacket(arg0: zombie.core.network.ByteBufferWriter | null): void;

      getId(): number;

      /** (ByteBuffer arg0): boolean */
      onGameLoadingDealWithNetData(arg0: java.nio.ByteBuffer | null): boolean;

      /** (ByteBuffer arg0): void */
      onMainLoopHandlePacketInternal(arg0: java.nio.ByteBuffer | null): void;

      /** (ByteBuffer arg0, UdpConnection arg1): void */
      onServerPacket(arg0: java.nio.ByteBuffer | null, arg1: zombie.core.raknet.UdpConnection | null): void;

      /** (UdpConnection arg0): void */
      onUnauthorized(arg0: zombie.core.raknet.UdpConnection | null): void;

      resetStatistics(): void;

      /** (UdpConnection arg0): void */
      send(arg0: zombie.core.raknet.UdpConnection | null): void;

    }
    /**
     * @customConstructor Server.new
     * @
     * [CLASS] zombie.network.Server
     */
    export class Server {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIp(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLocalIP(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMaxPlayers(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMods(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPing(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlayers(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPort(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPwd(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getServerPassword(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSteamId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUserName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVersion(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHosted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOpen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPasswordProtected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPublic(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHosted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setIp(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastUpdate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLocalIP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMaxPlayers(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMods(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOpen(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPasswordProtected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPing(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPlayers(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPort(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPublic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPwd(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setServerPassword(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSteamId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUserName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setVersion(arg0: string): void;
    }
    /**
     * @customConstructor ServerOptions.new
     * @
     * [CLASS] zombie.network.ServerOptions
     */
    export class ServerOptions {
      /** int */
      static readonly MAX_PORT: number;
      /** java.util.ArrayList<java.lang.String> */
      static cardList?: java.util.ArrayList<string>;
      /** java.util.HashMap<java.lang.String, java.lang.String> */
      static clientOptionsList?: java.util.HashMap<string, string>;
      /** zombie.network.ServerOptions */
      static readonly instance?: zombie.network.ServerOptions;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ServerOption arg0): void
       */
      addOption(arg0: zombie.network.ServerOptions$ServerOption): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): string
       */
      changeOption(arg0: string, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getDouble(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getFloat(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getInteger(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxPlayers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumOptions(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getOption(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.network.ServerOptions$ServerOption
       */
      getOptionByIndex(arg0: number): zombie.network.ServerOptions$ServerOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.network.ServerOptions$ServerOption
       */
      getOptionByName(arg0: string): zombie.network.ServerOptions$ServerOption;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.network.ServerOptions$ServerOption>
       */
      getOptions(): java.util.ArrayList<zombie.network.ServerOptions$ServerOption>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPublicOptions(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadServerTextFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      putOption(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      putSaveOption(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetRegionFile(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      saveServerTextFile(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): java.util.ArrayList<string>
       */
      static getClientCommandList(arg0: boolean): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.ServerOptions
       */
      static getInstance(): zombie.network.ServerOptions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getRandomCard(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initClientCommandsHelp(): void;
    }
    /**
     * @customConstructor BooleanServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$BooleanServerOption extends zombie.config.BooleanConfigOption
     */
    export class ServerOptions$BooleanServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.network.ServerOptions | null, arg1: string | null, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDefaultValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor DoubleServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$DoubleServerOption extends zombie.config.DoubleConfigOption
     */
    export class ServerOptions$DoubleServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, double arg2, double arg3, double arg4)
       */
      constructor(arg0: zombie.network.ServerOptions | null, arg1: string | null, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
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
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor IntegerServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$IntegerServerOption extends zombie.config.IntegerConfigOption
     */
    export class ServerOptions$IntegerServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: zombie.network.ServerOptions | null, arg1: string | null, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
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
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor ServerOption.new
     * @
     * [INTERFACE] zombie.network.ServerOptions$ServerOption
     */
    export class ServerOptions$ServerOption {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
    }
    /**
     * @customConstructor StringServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$StringServerOption extends zombie.config.StringConfigOption
     */
    export class ServerOptions$StringServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, String arg2, int arg3)
       */
      constructor(arg0: zombie.network.ServerOptions | null, arg1: string | null, arg2: string | null, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDefaultValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor TextServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$TextServerOption extends zombie.config.StringConfigOption
     */
    export class ServerOptions$TextServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, String arg2, int arg3)
       */
      constructor(arg0: zombie.network.ServerOptions | null, arg1: string | null, arg2: string | null, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDefaultValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor ServerSettings.new
     * @
     * [CLASS] zombie.network.ServerSettings
     */
    export class ServerSettings {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addSpawnRegion(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearSpawnRegions(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      deleteFiles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      duplicateFiles(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getErrorMsg(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumSpawnRegions(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.SandboxOptions
       */
      getSandboxOptions(): zombie.SandboxOptions;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.ServerOptions
       */
      getServerOptions(): zombie.network.ServerOptions;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getSpawnRegionFile(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getSpawnRegionName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      loadFiles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      loadSpawnPointsFile(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSpawnRegion(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      rename(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      saveFiles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): boolean
       */
      saveSpawnPointsFile(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): boolean;
    }
    /**
     * @customConstructor ServerSettingsManager.new
     * @
     * [CLASS] zombie.network.ServerSettingsManager
     */
    export class ServerSettingsManager {
      /** zombie.network.ServerSettingsManager */
      static readonly instance?: zombie.network.ServerSettingsManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getNameInSettingsFolder(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.network.ServerSettings
       */
      getSettingsByIndex(arg0: number): zombie.network.ServerSettings;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSettingsCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSettingsFolder(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSuffixes(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidName(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidNewName(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      readAllSettings(): void;
    }
    /**
     * @customConstructor Userlog.new
     * @
     * [CLASS] zombie.network.Userlog
     */
    export class Userlog {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3, int arg4)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: string | null, arg3: string | null, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIssuedBy(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUsername(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAmount(arg0: number): void;
    }
    /** [ENUM] zombie.network.Userlog$UserlogType */
    export class Userlog$UserlogType {
      protected constructor();
      static readonly AdminLog: zombie.network.Userlog$UserlogType;
      static readonly Banned: zombie.network.Userlog$UserlogType;
      static readonly DupeItem: zombie.network.Userlog$UserlogType;
      static readonly Kicked: zombie.network.Userlog$UserlogType;
      static readonly LuaChecksum: zombie.network.Userlog$UserlogType;
      static readonly UnauthorizedPacket: zombie.network.Userlog$UserlogType;
      static readonly WarningPoint: zombie.network.Userlog$UserlogType;
      name(): string;
      ordinal(): number;
      index(): number;

    }
  }
}
