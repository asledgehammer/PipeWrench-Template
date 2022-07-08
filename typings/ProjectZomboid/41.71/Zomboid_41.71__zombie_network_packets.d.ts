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
 * File generated at Friday July 2022 15:18:33.586-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.network.packets {
    /**
     * @customConstructor DeadCharacterPacket.new
     * @
     * [ABSTRACT CLASS] zombie.network.packets.DeadCharacterPacket
     */
    export class DeadCharacterPacket {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCharacterFlags(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeathDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDirection(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getKiller(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
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
      isConsistent(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      log(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      parseDeadBodyInventory(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      process(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      set(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      writeCharacterInventory(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor PlayerPacket.new
     * @
     * [CLASS] zombie.network.packets.PlayerPacket
     */
    export class PlayerPacket {
      /** int */
      static readonly PACKET_SIZE_BYTES: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (PlayerPacket arg0): void
       */
      copy(arg0: zombie.network.packets.PlayerPacket): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsistent(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      log(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      set(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor l_receive.new
     * @
     * [CLASS] zombie.network.packets.PlayerPacket$l_receive
     */
    export class PlayerPacket$l_receive {
      /** zombie.network.packets.PlayerPacket */
      static playerPacket?: zombie.network.packets.PlayerPacket;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor l_send.new
     * @
     * [CLASS] zombie.network.packets.PlayerPacket$l_send
     */
    export class PlayerPacket$l_send {
      /** zombie.network.packets.PlayerPacket */
      static playerPacket?: zombie.network.packets.PlayerPacket;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
