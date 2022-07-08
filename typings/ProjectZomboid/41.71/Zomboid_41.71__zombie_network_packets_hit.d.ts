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
  export namespace zombie.network.packets.hit {
    /**
     * @customConstructor AttackVars.new
     * @
     * [CLASS] zombie.network.packets.hit.AttackVars
     */
    export class AttackVars {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (AttackVars arg0): void
       */
      copy(arg0: zombie.network.packets.hit.AttackVars): void;
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
       *  - (IsoLivingCharacter arg0): zombie.inventory.types.HandWeapon
       */
      getWeapon(arg0: zombie.characters.IsoLivingCharacter): zombie.inventory.types.HandWeapon;
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
       *  - (HandWeapon arg0): void
       */
      setWeapon(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor HitCharacterPacket.new
     * @
     * [ABSTRACT CLASS] zombie.network.packets.hit.HitCharacterPacket
     */
    export class HitCharacterPacket {
      /**
       * Constructors: 
       *  - (HitType arg0)
       */
      protected constructor(arg0: zombie.network.packets.hit.HitCharacterPacket$HitType | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHitDescription(): string;
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
       *  - (UdpConnection arg0): boolean
       */
      isRelevant(arg0: zombie.core.raknet.UdpConnection): boolean;
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
       *  - (Empty): void
       */
      tryProcess(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tryProcessInternal(): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      validate(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): zombie.network.packets.hit.HitCharacterPacket
       */
      static process(arg0: java.nio.ByteBuffer): zombie.network.packets.hit.HitCharacterPacket;
    }
    /** [ENUM] zombie.network.packets.hit.HitCharacterPacket$HitType */
    export class HitCharacterPacket$HitType {
      protected constructor();
      static readonly Max: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly Min: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly PlayerHitPlayer: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly PlayerHitSquare: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly PlayerHitVehicle: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly PlayerHitZombie: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly VehicleHitPlayer: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly VehicleHitZombie: zombie.network.packets.hit.HitCharacterPacket$HitType;
      static readonly ZombieHitPlayer: zombie.network.packets.hit.HitCharacterPacket$HitType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor HitInfo.new
     * @
     * [CLASS] zombie.network.packets.hit.HitInfo
     */
    export class HitInfo {
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
       *  - (Empty): zombie.iso.IsoMovingObject
       */
      getObject(): zombie.iso.IsoMovingObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0, float arg1, float arg2): zombie.network.packets.hit.HitInfo
       *  - (IsoMovingObject arg0, float arg1, float arg2, float arg3, float arg4, float arg5): zombie.network.packets.hit.HitInfo
       */
      init(arg0: zombie.iso.objects.IsoWindow | zombie.iso.IsoMovingObject, arg1: number, arg2: number, arg3?: number, arg4?: number, arg5?: number): zombie.network.packets.hit.HitInfo;
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
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor Vehicle.new
     * @
     * [CLASS] zombie.network.packets.hit.Vehicle extends zombie.network.packets.hit.Instance
     */
    export class Vehicle {
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
       *  - (BaseVehicle arg0): void
       *  - (short arg0): void
       */
      set(arg0: zombie.vehicles.BaseVehicle | number): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor VehicleHitPacket.new
     * @
     * [ABSTRACT CLASS] zombie.network.packets.hit.VehicleHitPacket extends zombie.network.packets.hit.HitCharacterPacket
     */
    export class VehicleHitPacket {
      /**
       * Constructors: 
       *  - (HitType arg0)
       */
      protected constructor(arg0: zombie.network.packets.hit.HitCharacterPacket$HitType | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHitDescription(): string;
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
       *  - (UdpConnection arg0): boolean
       */
      isRelevant(arg0: zombie.core.raknet.UdpConnection): boolean;
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
       *  - (IsoPlayer arg0, BaseVehicle arg1, boolean arg2): void
       */
      set(arg0: zombie.characters.IsoPlayer, arg1: zombie.vehicles.BaseVehicle, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tryProcess(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tryProcessInternal(): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      validate(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): zombie.network.packets.hit.HitCharacterPacket
       */
      static process(arg0: java.nio.ByteBuffer): zombie.network.packets.hit.HitCharacterPacket;
    }
  }
}
