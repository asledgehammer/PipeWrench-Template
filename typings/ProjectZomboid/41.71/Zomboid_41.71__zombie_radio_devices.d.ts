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
 * File generated at Friday July 2022 15:18:33.669-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.radio.devices {
    /**
     * @customConstructor DeviceData.new
     * @
     * [CLASS] zombie.radio.devices.DeviceData
     */
    export class DeviceData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (WaveSignalDevice arg0)
       */
      constructor(arg0?: zombie.radio.devices.WaveSignalDevice | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StartPlayMedia(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopPlayMedia(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      TriggerPlayerListening(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (DrainableComboItem arg0): void
       */
      addBattery(arg0: zombie.inventory.types.DrainableComboItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      addHeadphones(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      addMediaItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBePoweredHere(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cleanSoundsAndEmitter(): void;
      /**
       * Method Parameters: 
       *  - (DevicePresets arg0): void
       */
      cloneDevicePresets(arg0: zombie.radio.devices.DevicePresets): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      doReceiveMPSignal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      doReceiveSignal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      generatePresets(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseVolumeRange(): number;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): zombie.inventory.InventoryItem
       */
      getBattery(arg0: zombie.inventory.ItemContainer): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChannel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.DeviceData
       */
      getClone(): zombie.radio.devices.DeviceData;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeviceName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.DevicePresets
       */
      getDevicePresets(): zombie.radio.devices.DevicePresets;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeviceSoundVolumeRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeviceVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeviceVolumeRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.BaseSoundEmitter
       */
      getEmitter(): zombie.audio.BaseSoundEmitter;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getHasBattery(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeadphoneType(): number;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): zombie.inventory.InventoryItem
       */
      getHeadphones(arg0: zombie.inventory.ItemContainer): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsBatteryPowered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsHighTier(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsPortable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsTelevision(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsTurnedOn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsTwoWay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastRecordedDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxChannelRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.media.MediaData
       */
      getMediaData(): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMediaIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMediaType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getMicIsMuted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMicRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinChannelRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.WaveSignalDevice
       */
      getParent(): zombie.radio.devices.WaveSignalDevice;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransmitRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUseDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasMedia(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInventoryDevice(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsoDevice(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoTransmit(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingMedia(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReceivingSignal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVehicleDevice(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, boolean arg2): void
       */
      playSound(arg0: string, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      playSoundLocal(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      playSoundSend(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      receiveDeviceDataStatePacket(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): zombie.inventory.InventoryItem
       */
      removeMediaItem(arg0: zombie.inventory.ItemContainer): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBaseVolumeRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setChannel(arg0: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChannelRaw(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDeviceName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (DevicePresets arg0): void
       */
      setDevicePresets(arg0: zombie.radio.devices.DevicePresets): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDeviceVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDeviceVolumeRaw(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasBattery(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHeadphoneType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsBatteryPowered(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsHighTier(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsPortable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsTelevision(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsTurnedOn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsTwoWay(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxChannelRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setMediaIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      setMediaType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMicIsMuted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMicRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinChannelRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoTransmit(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WaveSignalDevice arg0): void
       */
      setParent(arg0: zombie.radio.devices.WaveSignalDevice): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setRandomChannel(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTransmitRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTurnedOnRaw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUseDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitBattryChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitPresets(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1): void
       */
      update(arg0: boolean, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateMediaPlaying(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSimple(): void;
    }
    /**
     * @customConstructor DevicePresets.new
     * @
     * [CLASS] zombie.radio.devices.DevicePresets
     */
    export class DevicePresets {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      addPreset(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearPresets(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxPresets(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getPresetFreq(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getPresetName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.devices.PresetEntry>
       */
      getPresets(): java.util.ArrayList<zombie.radio.devices.PresetEntry>;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getPresetsLua(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removePreset(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxPresets(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, int arg2): void
       */
      setPreset(arg0: number, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setPresetFreq(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      setPresetName(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setPresets(arg0: java.util.ArrayList<zombie.radio.devices.PresetEntry>): void;
    }
    /**
     * @customConstructor PresetEntry.new
     * @
     * [CLASS] zombie.radio.devices.PresetEntry
     */
    export class PresetEntry {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, int arg1)
       */
      constructor(arg0?: string | null, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrequency(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFrequency(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
    }
    /**
     * @customConstructor WaveSignalDevice.new
     * @
     * [INTERFACE] zombie.radio.devices.WaveSignalDevice
     */
    export class WaveSignalDevice {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, String arg4, String arg5, int arg6): void
       *  - (IsoPlayer arg0, String arg1, float arg2, float arg3, float arg4, String arg5, String arg6, int arg7): void
       */
      AddDeviceText(arg0: string | zombie.characters.IsoPlayer, arg1: number | string, arg2: number, arg3: number, arg4: string | number, arg5: string, arg6: number | string, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasPlayerInRange(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.DeviceData
       */
      getDeviceData(): zombie.radio.devices.DeviceData;
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
       *  - (float arg0): void
       */
      setDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (DeviceData arg0): void
       */
      setDeviceData(arg0: zombie.radio.devices.DeviceData): void;
    }
  }
}
