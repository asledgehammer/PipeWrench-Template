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
 * File generated at Friday July 2022 15:18:33.611-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.radio {
    /** [ENUM] zombie.radio.ChannelCategory */
    export class ChannelCategory {
      protected constructor();
      static readonly Amateur: zombie.radio.ChannelCategory;
      static readonly Bandit: zombie.radio.ChannelCategory;
      static readonly Emergency: zombie.radio.ChannelCategory;
      static readonly Military: zombie.radio.ChannelCategory;
      static readonly Other: zombie.radio.ChannelCategory;
      static readonly Radio: zombie.radio.ChannelCategory;
      static readonly Television: zombie.radio.ChannelCategory;
      static readonly Undefined: zombie.radio.ChannelCategory;
      name(): string;
      ordinal(): number;
    }
    /** [ENUM] zombie.radio.GameMode */
    export class GameMode {
      protected constructor();
      static readonly Client: zombie.radio.GameMode;
      static readonly Server: zombie.radio.GameMode;
      static readonly SinglePlayer: zombie.radio.GameMode;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor RadioAPI.new
     * @
     * [CLASS] zombie.radio.RadioAPI
     */
    export class RadioAPI {

      /**
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      getChannels(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.RadioAPI
       */
      static getInstance(): zombie.radio.RadioAPI;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static hasInstance(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static timeStampToDays(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static timeStampToHours(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static timeStampToMinutes(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      static timeToTimeStamp(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * @customConstructor RadioData.new
     * @
     * [CLASS] zombie.radio.RadioData
     */
    export class RadioData {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.scripting.RadioChannel>
       */
      getRadioChannels(): java.util.ArrayList<zombie.radio.scripting.RadioChannel>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.RadioData>
       */
      static fetchAllRadioData(): java.util.ArrayList<zombie.radio.RadioData>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Language arg0): java.util.ArrayList<string>
       */
      static getTranslatorNames(arg0: zombie.core.Language): java.util.ArrayList<string>;
    }
    /**
     * @customConstructor ZomboidRadio.new
     * @
     * [CLASS] zombie.radio.ZomboidRadio
     */
    export class ZomboidRadio {
      /** boolean */
      static DEBUG_MODE: boolean;
      /** boolean */
      static DEBUG_SOUND: boolean;
      /** boolean */
      static DEBUG_XML: boolean;
      /** boolean */
      static DISABLE_BROADCASTING: boolean;
      /** boolean */
      static LOUISVILLE_OBFUSCATION: boolean;
      /** boolean */
      static POST_RADIO_SILENCE: boolean;
      /** java.lang.String */
      static readonly SAVE_FILE?: string;


      /**
       * Method Parameters: 
       *  - (String arg0): java.util.Map<number, string>
       */
      GetChannelList(arg0: string): java.util.Map<number, string>;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      Init(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Load(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, boolean arg2): void
       */
      PlayerListensChannel(arg0: number, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, String arg3, String arg4, String arg5, float arg6, float arg7, float arg8, int arg9, boolean arg10): void
       */
      ReceiveTransmission(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: string, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
      /**
       * Method Parameters: 
       *  - (WaveSignalDevice arg0): void
       */
      RegisterDevice(arg0: zombie.radio.devices.WaveSignalDevice): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Save(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, ChatMessage arg2, int arg3): void
       *  - (int arg0, int arg1, int arg2, String arg3, String arg4, String arg5, float arg6, float arg7, float arg8, int arg9, boolean arg10): void
       *  - (long arg0, int arg1, int arg2, int arg3, String arg4, String arg5, String arg6, float arg7, float arg8, float arg9, int arg10, boolean arg11): void
       */
      SendTransmission(arg0: number, arg1: number, arg2: zombie.chat.ChatMessage | number, arg3: number | string, arg4?: string, arg5?: string, arg6?: number | string, arg7?: number, arg8?: number, arg9?: number, arg10?: boolean | number, arg11?: boolean): void;
      /**
       * Method Parameters: 
       *  - (WaveSignalDevice arg0): void
       */
      UnRegisterDevice(arg0: zombie.radio.devices.WaveSignalDevice): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      UpdateScripts(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      WriteRadioServerDataPacket(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, String arg2): void
       *  - (String arg0, int arg1, String arg2, boolean arg3): void
       */
      addChannelName(arg0: string, arg1: number, arg2: string, arg3?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      computerize(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.devices.WaveSignalDevice>
       */
      getBroadcastDevices(): java.util.ArrayList<zombie.radio.devices.WaveSignalDevice>;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getChannelName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaysSinceStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.devices.WaveSignalDevice>
       */
      getDevices(): java.util.ArrayList<zombie.radio.devices.WaveSignalDevice>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDisableBroadcasting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDisableMediaLineLearning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, java.util.Map<number, string>>
       */
      getFullChannelList(): java.util.Map<string, java.util.Map<number, string>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.GameMode
       */
      getGameMode(): zombie.radio.GameMode;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRandomBzztFzzt(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0, int arg1): number
       */
      getRandomFrequency(arg0?: number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.media.RecordedMedia
       */
      getRecordedMedia(): zombie.radio.media.RecordedMedia;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.scripting.RadioScriptManager
       */
      getScriptManager(): zombie.radio.scripting.RadioScriptManager;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeChannelName(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, boolean arg2, String arg3): string
       */
      scrambleString(arg0: string, arg1: number, arg2: boolean, arg3: string): string;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      sendRequestData(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDisableBroadcasting(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDisableMediaLineLearning(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasRecievedServerData(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RadioChannel arg0): void
       */
      static ObfuscateChannelCheck(arg0: zombie.radio.scripting.RadioChannel): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.ZomboidRadio
       */
      static getInstance(): zombie.radio.ZomboidRadio;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static hasInstance(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isStaticSound(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static receiveRequestData(arg0: java.nio.ByteBuffer): void;
    }
  }
}
