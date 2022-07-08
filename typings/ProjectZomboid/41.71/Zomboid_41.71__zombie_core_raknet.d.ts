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
 * File generated at Friday July 2022 15:18:33.605-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.raknet {
    /**
     * @customConstructor RakNetPeerInterface.new
     * @
     * [CLASS] zombie.core.raknet.RakNetPeerInterface
     */
    export class RakNetPeerInterface {
      /** int */
      static readonly ID_ALREADY_CONNECTED: number;
      /** int */
      static readonly ID_CONNECTED_PING: number;
      /** int */
      static readonly ID_CONNECTION_ATTEMPT_FAILED: number;
      /** int */
      static readonly ID_CONNECTION_BANNED: number;
      /** int */
      static readonly ID_CONNECTION_LOST: number;
      /** int */
      static readonly ID_CONNECTION_REQUEST_ACCEPTED: number;
      /** int */
      static readonly ID_DISCONNECTION_NOTIFICATION: number;
      /** int */
      static readonly ID_INCOMPATIBLE_PROTOCOL_VERSION: number;
      /** int */
      static readonly ID_INVALID_PASSWORD: number;
      /** int */
      static readonly ID_NEW_INCOMING_CONNECTION: number;
      /** int */
      static readonly ID_NO_FREE_INCOMING_CONNECTIONS: number;
      /** int */
      static readonly ID_PING: number;
      /** int */
      static readonly ID_RAKVOICE_CLOSE_CHANNEL: number;
      /** int */
      static readonly ID_RAKVOICE_DATA: number;
      /** int */
      static readonly ID_RAKVOICE_OPEN_CHANNEL_REPLY: number;
      /** int */
      static readonly ID_RAKVOICE_OPEN_CHANNEL_REQUEST: number;
      /** int */
      static readonly ID_REMOTE_CONNECTION_LOST: number;
      /** int */
      static readonly ID_REMOTE_DISCONNECTION_NOTIFICATION: number;
      /** int */
      static readonly ID_REMOTE_NEW_INCOMING_CONNECTION: number;
      /** int */
      static readonly ID_TIMESTAMP: number;
      /** int */
      static readonly ID_UNCONNECTED_PING: number;
      /** int */
      static readonly ID_USER_PACKET_ENUM: number;
      /** int */
      static readonly PacketPriority_HIGH: number;
      /** int */
      static readonly PacketPriority_IMMEDIATE: number;
      /** int */
      static readonly PacketPriority_LOW: number;
      /** int */
      static readonly PacketPriority_MEDIUM: number;
      /** int */
      static readonly PacketReliability_RELIABLE: number;
      /** int */
      static readonly PacketReliability_RELIABLE_ORDERED: number;
      /** int */
      static readonly PacketReliability_RELIABLE_ORDERED_WITH_ACK_RECEIPT: number;
      /** int */
      static readonly PacketReliability_RELIABLE_SEQUENCED: number;
      /** int */
      static readonly PacketReliability_RELIABLE_WITH_ACK_RECEIPT: number;
      /** int */
      static readonly PacketReliability_UNRELIABLE: number;
      /** int */
      static readonly PacketReliability_UNRELIABLE_SEQUENCED: number;
      /** int */
      static readonly PacketReliability_UNRELIABLE_WITH_ACK_RECEIPT: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, short arg1, short arg2): void
       */
      ApplyNetworkSimulator(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, String arg2): number
       */
      Connect(arg0: string, arg1: number, arg2: string): number;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): number
       */
      ConnectToSteamServer(arg0: number, arg1: string): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetAveragePing(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetClientOwnerSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetClientSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetConnectionsNumber(): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetLastPing(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetLowestPing(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetMTUSize(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.core.znet.ZNetStatistics
       */
      GetNetStatistics(arg0: number): zombie.core.znet.ZNetStatistics;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.core.znet.ZNetSessionState
       */
      GetP2PSessionState(arg0: number): zombie.core.znet.ZNetSessionState;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetServerIP(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      Init(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): boolean
       */
      Receive(arg0: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.znet.ZNetFileAnnounce
       */
      ReceiveFileAnnounce(): zombie.core.znet.ZNetFileAnnounce;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.znet.ZNetFileChunk
       */
      ReceiveFileChunk(): zombie.core.znet.ZNetFileChunk;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, byte arg3, long arg4, boolean arg5): number
       */
      Send(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
      /**
       * Method Parameters: 
       *  - (long arg0, long arg1, long arg2, long arg3, String arg4): number
       */
      SendFileAnnounce(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string): number;
      /**
       * Method Parameters: 
       *  - (long arg0, long arg1, long arg2, byte[] arg3, long arg4): number
       */
      SendFileChunk(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: number): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, byte arg3, long arg4, boolean arg5): number
       */
      SendRaw(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetClientPort(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetIncomingPassword(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetMaximumIncomingConnections(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetOccasionalPing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetServerIP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetServerPort(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetTimeoutTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetUnreliableTimeout(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Shutdown(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      Startup(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      disconnect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getGuidFromIndex(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGuidOfPacket(): number;
      /**
       * Method Parameters: 
       *  - (long arg0): string
       */
      getIPFromGUID(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor UdpConnection.new
     * @
     * [CLASS] zombie.core.raknet.UdpConnection
     */
    export class UdpConnection {
      /** long */
      static readonly CONNECTION_GRACE_INTERVAL: number;

      /**
       * Constructors: 
       *  - (UdpEngine arg0, long arg1, int arg2)
       */
      constructor(arg0: zombie.core.raknet.UdpEngine | null, arg1: number, arg2: number);
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       *  - (float arg0, float arg1, float arg2): boolean
       */
      RelevantTo(arg0: number, arg1: number, arg2?: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2): boolean
       */
      RelevantToPlayerIndex(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calcCountPlayersInRelevantPosition(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cancelPacket(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0, int arg1, byte arg2): void
       */
      endPacket(arg0?: number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketImmediate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketSuperHighUnreliable(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketUnordered(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketUnreliable(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPingPacket(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      forceDisconnect(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAveragePing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConnectedGUID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.net.InetSocketAddress
       */
      getInetSocketAddress(): java.net.InetSocketAddress;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastPing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLowestPing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMTUSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.znet.ZNetSessionState
       */
      getP2PSessionState(): zombie.core.znet.ZNetSessionState;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.RakNetPeerInterface
       */
      getPeer(): zombie.core.raknet.RakNetPeerInterface;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlayerDescription(): string;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      getRelevantAndDistance(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getServerIP(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.znet.ZNetStatistics
       */
      getStatistics(): zombie.core.znet.ZNetStatistics;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      havePlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConnectionAttemptTimeout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConnectionGraceIntervalTimeout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyConnected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setFullyConnected(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPacket(): zombie.core.network.ByteBufferWriter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPingPacket(): zombie.core.network.ByteBufferWriter;
    }
    /** [ENUM] zombie.core.raknet.UdpConnection$ChecksumState */
    export class UdpConnection$ChecksumState {
      protected constructor();
      static readonly Different: zombie.core.raknet.UdpConnection$ChecksumState;
      static readonly Done: zombie.core.raknet.UdpConnection$ChecksumState;
      static readonly Init: zombie.core.raknet.UdpConnection$ChecksumState;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor MPClientStatistic.new
     * @
     * [CLASS] zombie.core.raknet.UdpConnection$MPClientStatistic
     */
    export class UdpConnection$MPClientStatistic {
      /**
       * Constructors: 
       *  - (UdpConnection arg0)
       */
      constructor(arg0: zombie.core.raknet.UdpConnection | null);
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      parse(arg0: java.nio.ByteBuffer): void;
    }
    /**
     * @customConstructor UdpEngine.new
     * @
     * [CLASS] zombie.core.raknet.UdpEngine
     */
    export class UdpEngine {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, String arg2, boolean arg3)
       */
      constructor(arg0: number, arg1: number, arg2: string | null, arg3: boolean);
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): void
       *  - (String arg0, int arg1, String arg2): void
       */
      Connect(arg0: number | string, arg1: string | number, arg2?: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      Receive(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetServerPassword(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Shutdown(): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0): void
       */
      endPacketBroadcast(arg0: zombie.network.PacketTypes$PacketType): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, UdpConnection arg2): void
       */
      endPacketBroadcastExcept(arg0: number, arg1: number, arg2: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      forceDisconnect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.core.raknet.UdpConnection
       */
      getActiveConnection(arg0: number): zombie.core.raknet.UdpConnection;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      getClientOwnerSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      getClientSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxConnections(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.RakNetPeerInterface
       */
      getPeer(): zombie.core.raknet.RakNetPeerInterface;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getServerIP(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      hashServerPassword(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPacket(): zombie.core.network.ByteBufferWriter;
    }
  }
}
