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
 * File generated at Friday July 2022 15:18:33.571-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie {
    /**
     * @customConstructor AmbientStreamManager.new
     * @
     * [CLASS] zombie.AmbientStreamManager extends zombie.BaseAmbientStreamManager
     */
    export class AmbientStreamManager {
      /** int */
      static MaxAmbientCount: number;
      /** float */
      static MaxRange: number;
      /** int */
      static OneInAmbienceChance: number;
      /** zombie.BaseAmbientStreamManager */
      static instance?: zombie.BaseAmbientStreamManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      addAmbient(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, String arg3): void
       */
      addAmbientEmitter(arg0: number, arg1: number, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5): void
       */
      addBlend(arg0: string, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, String arg3): void
       */
      addDaytimeAmbientEmitter(arg0: number, arg1: number, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addRandomAmbient(): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): void
       */
      doAlarm(arg0: zombie.iso.RoomDef): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doGunEvent(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doOneShotAmbients(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2f arg2): zombie.iso.BuildingDef
       */
      getNearestBuilding(arg0: number, arg1: number, arg2: org.joml.Vector2f): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.BaseAmbientStreamManager
       */
      static getInstance(): zombie.BaseAmbientStreamManager;
    }
    /**
     * @customConstructor Ambient.new
     * @
     * [CLASS] zombie.AmbientStreamManager$Ambient
     */
    export class AmbientStreamManager$Ambient {
      /**
       * Constructors: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4)
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, boolean arg5)
       */
      constructor(arg0: string | null, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finished(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      repeatWorldSounds(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor AmbientLoop.new
     * @
     * [CLASS] zombie.AmbientStreamManager$AmbientLoop
     */
    export class AmbientStreamManager$AmbientLoop {
      /** float */
      static volChangeAmount: number;

      /**
       * Constructors: 
       *  - (float arg0, String arg1, float arg2)
       */
      constructor(arg0: number, arg1: string | null, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor WorldSoundEmitter.new
     * @
     * [CLASS] zombie.AmbientStreamManager$WorldSoundEmitter
     */
    export class AmbientStreamManager$WorldSoundEmitter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor BaseAmbientStreamManager.new
     * @
     * [ABSTRACT CLASS] zombie.BaseAmbientStreamManager
     */
    export class BaseAmbientStreamManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      addAmbient(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, String arg3): void
       */
      addAmbientEmitter(arg0: number, arg1: number, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, boolean arg2, boolean arg3, boolean arg4, boolean arg5): void
       */
      addBlend(arg0: string, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, String arg3): void
       */
      addDaytimeAmbientEmitter(arg0: number, arg1: number, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0): void
       */
      doAlarm(arg0: zombie.iso.RoomDef): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doGunEvent(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doOneShotAmbients(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor BaseSoundManager.new
     * @
     * [ABSTRACT CLASS] zombie.BaseSoundManager
     */
    export class BaseSoundManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1, String arg2): fmod.fmod.Audio
       */
      BlendThenStart(arg0: fmod.fmod.Audio, arg1: number, arg2: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1): void
       *  - (Audio arg0, float arg1, float arg2): void
       */
      BlendVolume(arg0: fmod.fmod.Audio, arg1: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      CacheSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckDoMusic(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      DoMusic(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      FadeOutMusic(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsMusicPlaying(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, Audio arg1, boolean arg2, float arg3): void
       *  - (String arg0, Audio arg1, float arg2, boolean arg3): void
       */
      PlayAsMusic(arg0: string, arg1: fmod.fmod.Audio, arg2: boolean | number, arg3: number | boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       */
      PlayJukeboxSound(arg0: string, arg1: boolean, arg2: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, float arg3): fmod.fmod.Audio
       */
      PlayMusic(arg0: string, arg1: string, arg2: boolean, arg3: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, float arg2, float arg3): fmod.fmod.Audio
       */
      PlaySound(arg0: string, arg1: boolean, arg2: number, arg3?: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       */
      PlaySoundEvenSilent(arg0: string, arg1: boolean, arg2: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       *  - (String arg0, int arg1, boolean arg2, float arg3): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, float arg2, float arg3): fmod.fmod.Audio
       */
      PlaySoundWav(arg0: string, arg1: boolean | number, arg2: number | boolean, arg3?: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): fmod.fmod.Audio
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5, boolean arg6): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSound(arg0: string, arg1: zombie.iso.IsoGridSquare | boolean, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6?: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, boolean arg8): fmod.fmod.Audio
       */
      PlayWorldSoundImpl(arg0: string, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): fmod.fmod.Audio
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5, boolean arg6): void
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSoundWav(arg0: string, arg1: zombie.iso.IsoGridSquare | boolean, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6?: boolean): fmod.fmod.Audio | void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSoundWavImpl(arg0: string, arg1: boolean, arg2: zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: number, arg6: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.Audio
       */
      PrepareMusic(arg0: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Purge(): void;
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1, String arg2): fmod.fmod.Audio
       */
      Start(arg0: fmod.fmod.Audio, arg1: number, arg2: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopMusic(): void;
      /**
       * Method Parameters: 
       *  - (Audio arg0): void
       */
      StopSound(arg0: fmod.fmod.Audio): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugScriptSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<fmod.fmod.Audio>
       */
      getAmbientPieces(): java.util.ArrayList<fmod.fmod.Audio>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbientVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentMusicLibrary(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentMusicName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMusicPosition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMusicVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSoundVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVehicleEngineVolume(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isListenerInRange(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingMusic(): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       *  - (String arg0): boolean
       */
      isPlayingUISound(arg0: number | string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemastered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pauseSoundAndMusic(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playAmbient(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playMusic(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      playMusicNonTriggered(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playNightAmbient(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playUISound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      registerEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeSoundAndMusic(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbientVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMusicState(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMusicVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): void
       */
      setMusicWakeState(arg0: zombie.characters.IsoPlayer, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSoundVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVehicleEngineVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      stopMusic(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopUISound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      unregisterEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update1(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update2(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update3(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update3D(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update4(): void;
    }
    /**
     * @customConstructor DummySoundManager.new
     * @
     * [CLASS] zombie.DummySoundManager extends zombie.BaseSoundManager
     */
    export class DummySoundManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1, String arg2): fmod.fmod.Audio
       */
      BlendThenStart(arg0: fmod.fmod.Audio, arg1: number, arg2: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1): void
       *  - (Audio arg0, float arg1, float arg2): void
       */
      BlendVolume(arg0: fmod.fmod.Audio, arg1: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      CacheSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckDoMusic(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      DoMusic(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      FadeOutMusic(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsMusicPlaying(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, Audio arg1, float arg2, boolean arg3): void
       *  - (String arg0, Audio arg1, boolean arg2, float arg3): void
       */
      PlayAsMusic(arg0: string, arg1: fmod.fmod.Audio, arg2: number | boolean, arg3: boolean | number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       */
      PlayJukeboxSound(arg0: string, arg1: boolean, arg2: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, float arg3): fmod.fmod.Audio
       */
      PlayMusic(arg0: string, arg1: string, arg2: boolean, arg3: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, float arg2, float arg3): fmod.fmod.Audio
       */
      PlaySound(arg0: string, arg1: boolean, arg2: number, arg3?: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       */
      PlaySoundEvenSilent(arg0: string, arg1: boolean, arg2: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, float arg2, float arg3): fmod.fmod.Audio
       *  - (String arg0, int arg1, boolean arg2, float arg3): fmod.fmod.Audio
       */
      PlaySoundWav(arg0: string, arg1: boolean | number, arg2: number | boolean, arg3?: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSound(arg0: string, arg1: zombie.iso.IsoGridSquare | boolean, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6?: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, boolean arg8): fmod.fmod.Audio
       */
      PlayWorldSoundImpl(arg0: string, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5, boolean arg6): void
       */
      PlayWorldSoundWav(arg0: string, arg1: zombie.iso.IsoGridSquare | boolean, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6?: boolean): fmod.fmod.Audio | void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSoundWavImpl(arg0: string, arg1: boolean, arg2: zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: number, arg6: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.Audio
       */
      PrepareMusic(arg0: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Purge(): void;
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1, String arg2): fmod.fmod.Audio
       */
      Start(arg0: fmod.fmod.Audio, arg1: number, arg2: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopMusic(): void;
      /**
       * Method Parameters: 
       *  - (Audio arg0): void
       */
      StopSound(arg0: fmod.fmod.Audio): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugScriptSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<fmod.fmod.Audio>
       */
      getAmbientPieces(): java.util.ArrayList<fmod.fmod.Audio>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbientVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentMusicLibrary(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentMusicName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMusicPosition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMusicVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSoundVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVehicleEngineVolume(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isListenerInRange(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingMusic(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (long arg0): boolean
       */
      isPlayingUISound(arg0: string | number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemastered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pauseSoundAndMusic(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playAmbient(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playMusic(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      playMusicNonTriggered(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playNightAmbient(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playUISound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      registerEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeSoundAndMusic(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbientVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMusicState(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMusicVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): void
       */
      setMusicWakeState(arg0: zombie.characters.IsoPlayer, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSoundVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVehicleEngineVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      stopMusic(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopUISound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      unregisterEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update1(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update2(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update3(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update3D(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update4(): void;
    }
    /**
     * @customConstructor GameSounds.new
     * @
     * [CLASS] zombie.GameSounds
     */
    export class GameSounds {
      /** int */
      static readonly VERSION: number;
      /** boolean */
      static soundIsPaused: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static ReloadFile(arg0: string): void;
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
       *  - (Empty): void
       */
      static ScriptsLoaded(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameSound arg0): void
       */
      static addSound(arg0: zombie.audio.GameSound): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static fix3DListenerPosition(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getCategories(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.audio.GameSound
       */
      static getOrCreateSound(arg0: string): zombie.audio.GameSound;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.audio.GameSound
       */
      static getSound(arg0: string): zombie.audio.GameSound;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.audio.GameSound>
       */
      static getSoundsInCategory(arg0: string): java.util.ArrayList<zombie.audio.GameSound>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isKnownSound(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isPreviewPlaying(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static loadINI(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static previewSound(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static saveINI(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static stopPreview(): void;
    }
    /**
     * @customConstructor GameTime.new
     * @
     * [CLASS] zombie.GameTime
     */
    export class GameTime {
      /** float */
      static readonly MULTIPLIER: number;
      /** zombie.GameTime */
      static instance?: zombie.GameTime;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      Lerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RemoveZombiesIndiscriminate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      TimeLerp(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      daysInMonth(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbient(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbientMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbientMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.PZCalendar
       */
      getCalender(): zombie.util.PZCalendar;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDawn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayPlusOne(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaysSurvived(): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): string
       */
      getDeathString(arg0: zombie.characters.IsoPlayer): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeltaMinutesPerDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDusk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGameModeText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGameWorldSecondsSinceLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHelicopterDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHelicopterDay1(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHelicopterEndHour(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHelicopterStartHour(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHour(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSurvived(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInvMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastTimeOfDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxZombieCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxZombieCountStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZombieCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZombieCountStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutesPerDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutesStamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMonth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMultipliedSecondsSinceLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightTint(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNightsSurvived(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRealworldSecondsSinceLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getServerMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartMonth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartTimeOfDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartYear(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getThunderStorm(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeOfDay(): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): string
       */
      getTimeSurvived(arg0: zombie.characters.IsoPlayer): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrueMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnmoddedMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getViewDist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getViewDistMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getViewDistMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldAgeHours(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYear(): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): string
       */
      getZombieKilledText(arg0: zombie.characters.IsoPlayer): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRainingToday(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isThunderDay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ByteBuffer arg0): void
       *  - (DataInputStream arg0): void
       */
      load(arg0?: java.nio.ByteBuffer | java.io.DataInputStream): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (DataOutputStream arg0): void
       *  - (ByteBuffer arg0): void
       */
      save(arg0?: java.io.DataOutputStream | java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveToPacket(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbient(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbientMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbientMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (PZCalendar arg0): void
       */
      setCalender(arg0: zombie.util.PZCalendar): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDawn(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDusk(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHelicopterDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHelicopterEndHour(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHelicopterStartHour(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHoursSurvived(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastTimeOfDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxZombieCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxZombieCountStart(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinZombieCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinZombieCountStart(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinutesPerDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMonth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMoon(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNightMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNightMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNightTint(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNightsSurvived(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStartDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStartMonth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStartTimeOfDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStartYear(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTargetZombies(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setThunderDay(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTimeOfDay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setViewDistMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setViewDistMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setYear(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      update(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      updateCalendar(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getAnimSpeedFix(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.GameTime
       */
      static getInstance(): zombie.GameTime;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getServerTime(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getServerTimeMills(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getServerTimeShiftIsSet(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isGamePaused(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      static receiveTimeSync(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameTime arg0): void
       */
      static setInstance(arg0: zombie.GameTime): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): void
       */
      static setServerTimeShift(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0, long arg1, long arg2): void
       */
      static syncServerTime(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor AnimTimer.new
     * @
     * [CLASS] zombie.GameTime$AnimTimer
     */
    export class GameTime$AnimTimer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finished(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      init(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ratio(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor GameWindow.new
     * @
     * [CLASS] zombie.GameWindow
     */
    export class GameWindow {
      /** zombie.input.JoypadManager$Joypad */
      static ActivatedJoyPad?: zombie.input.JoypadManager$Joypad;
      /** boolean */
      static DEBUG_SAVE: boolean;
      /** boolean */
      static DrawReloadingLua: boolean;
      /** zombie.core.input.Input */
      static readonly GameInput?: zombie.core.input.Input;
      /** java.lang.Thread */
      static GameThread?: java.lang.Thread;
      /** boolean */
      static OkToSaveOnExit: boolean;
      /** zombie.asset.AssetManagers */
      static assetManagers?: zombie.asset.AssetManagers;
      /** float */
      static averageFPS: number;
      /** boolean */
      static bGameThreadExited: boolean;
      /** boolean */
      static bLoadedAsClient: boolean;
      /** boolean */
      static bLuaDebuggerKeyDown: boolean;
      /** boolean */
      static bServerDisconnected: boolean;
      /** boolean */
      static closeRequested: boolean;
      /** zombie.fileSystem.FileSystem */
      static fileSystem?: zombie.fileSystem.FileSystem;
      /** java.lang.String */
      static kickReason?: string;
      /** java.lang.String */
      static lastP?: string;
      /** zombie.gameStates.GameStateMachine */
      static states?: zombie.gameStates.GameStateMachine;
      /** zombie.fileSystem.FileSystem$TexturePackTextures */
      static readonly texturePackTextures?: zombie.fileSystem.FileSystem$TexturePackTextures;
      /** java.util.ArrayList<zombie.GameWindow$TexturePack> */
      static readonly texturePacks?: java.util.ArrayList<zombie.GameWindow$TexturePack>;
      /** java.lang.String */
      static version?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static DoLoadingText(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static InitDisplay(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static InitGameThread(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       *  - (String arg0, int arg1, String arg2): void
       */
      static LoadTexturePack(arg0: string, arg1: number, arg2?: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static LoadTexturePackDDS(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DataInputStream arg0): string
       *  - (ByteBuffer arg0): string
       */
      static ReadString(arg0: java.io.DataInputStream | java.nio.ByteBuffer): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): string
       */
      static ReadStringUTF(arg0: java.nio.ByteBuffer): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DataOutputStream arg0, String arg1): void
       *  - (ByteBuffer arg0, String arg1): void
       */
      static WriteString(arg0: java.io.DataOutputStream | java.nio.ByteBuffer, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, String arg1): void
       */
      static WriteStringUTF(arg0: java.nio.ByteBuffer, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static doRenderEvent(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCoopServerHome(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DataInputStream arg0): number
       */
      static readInt(arg0: java.io.DataInputStream): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DataInputStream arg0): number
       */
      static readLong(arg0: java.io.DataInputStream): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static render(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static save(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static setTexturePackLookup(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Thread arg0, Throwable arg1): void
       */
      static uncaughtException(arg0: java.lang.Thread, arg1: java.lang.Throwable): void;
    }
    /**
     * @customConstructor OSValidator.new
     * @
     * [CLASS] zombie.GameWindow$OSValidator
     */
    export class GameWindow$OSValidator {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isMac(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isSolaris(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isUnix(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isWindows(): boolean;
    }
    /**
     * @customConstructor TexturePack.new
     * @
     * [CLASS] zombie.GameWindow$TexturePack
     */
    export class GameWindow$TexturePack {

    }
    /**
     * @customConstructor MapGroups.new
     * @
     * [CLASS] zombie.MapGroups
     */
    export class MapGroups {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkMapConflicts(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ActiveMods arg0, boolean arg1): void
       *  - (ActiveMods arg0, boolean arg1, boolean arg2): void
       */
      createGroups(arg0?: zombie.modding.ActiveMods, arg1?: boolean, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAllMapsInOrder(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<string>
       */
      getMapConflicts(arg0: string): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<string>
       */
      getMapDirectoriesInGroup(arg0: number): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfGroups(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWorld(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static addMissingVanillaDirectories(arg0: string): string;
    }
    /**
     * @customConstructor SandboxOptions.new
     * @
     * [CLASS] zombie.SandboxOptions
     */
    export class SandboxOptions {
      /** zombie.SandboxOptions */
      static readonly instance?: zombie.SandboxOptions;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applySettings(): void;
      /**
       * Method Parameters: 
       *  - (SandboxOptions arg0): void
       */
      copyValuesFrom(arg0: zombie.SandboxOptions): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getAllClothesUnlocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCompostHours(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLengthMinutes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDayLengthMinutesDefault(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElecShutModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceRegenMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getErosionSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFirstYear(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFoodLootModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumOptions(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.SandboxOptions$SandboxOption
       */
      getOptionByIndex(arg0: number): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      getOptionByName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOtherLootModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStatsDecreaseMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperatureModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceApo(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterShutModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeaponLootModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      handleOldServerZombiesFile(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      handleOldZombiesFile1(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      handleOldZombiesFile2(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSandboxVars(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ByteBuffer arg0): void
       */
      load(arg0?: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadCurrentGameBinFile(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadGameFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadPresetFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadServerLuaFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadServerTextFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadServerZombiesFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.SandboxOptions
       */
      newCopy(): zombie.SandboxOptions;
      /**
       * Method Parameters: 
       *  - (CustomSandboxOption arg0): void
       */
      newCustomOption(arg0: zombie.sandbox.CustomSandboxOption): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      randomElectricityShut(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      randomWaterShut(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      saveGameFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      savePresetFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      saveServerLuaFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendToServer(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      set(arg0: string, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultsToCurrentValues(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      toLua(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateFromLua(): void;
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
       *  - (Empty): zombie.SandboxOptions
       */
      static getInstance(): zombie.SandboxOptions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isValidPresetName(arg0: string): boolean;
    }
    /**
     * @customConstructor BooleanSandboxOption.new
     * @
     * [CLASS] zombie.SandboxOptions$BooleanSandboxOption extends zombie.config.BooleanConfigOption
     */
    export class SandboxOptions$BooleanSandboxOption {
      /**
       * Constructors: 
       *  - (SandboxOptions arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.SandboxOptions | null, arg1: string | null, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      fromTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
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
      getPageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShortName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
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
       *  - (Empty): boolean
       */
      isCustom(): boolean;
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
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setPageName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setTranslation(arg0: string): zombie.SandboxOptions$SandboxOption;
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
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      toTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor DoubleSandboxOption.new
     * @
     * [CLASS] zombie.SandboxOptions$DoubleSandboxOption extends zombie.config.DoubleConfigOption
     */
    export class SandboxOptions$DoubleSandboxOption {
      /**
       * Constructors: 
       *  - (SandboxOptions arg0, String arg1, double arg2, double arg3, double arg4)
       */
      constructor(arg0: zombie.SandboxOptions | null, arg1: string | null, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      fromTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
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
      getPageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShortName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
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
       *  - (Empty): boolean
       */
      isCustom(): boolean;
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
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setPageName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setTranslation(arg0: string): zombie.SandboxOptions$SandboxOption;
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
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      toTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor EnumSandboxOption.new
     * @
     * [CLASS] zombie.SandboxOptions$EnumSandboxOption extends zombie.config.EnumConfigOption
     */
    export class SandboxOptions$EnumSandboxOption {
      /**
       * Constructors: 
       *  - (SandboxOptions arg0, String arg1, int arg2, int arg3)
       */
      constructor(arg0: zombie.SandboxOptions | null, arg1: string | null, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      fromTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
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
       *  - (Empty): number
       */
      getNumValues(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShortName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
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
       *  - (Empty): string
       */
      getValueTranslation(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getValueTranslationByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getValueTranslationByIndexOrNull(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustom(): boolean;
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
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setPageName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setTranslation(arg0: string): zombie.SandboxOptions$SandboxOption;
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
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$EnumSandboxOption
       */
      setValueTranslation(arg0: string): zombie.SandboxOptions$EnumSandboxOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      toTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor IntegerSandboxOption.new
     * @
     * [CLASS] zombie.SandboxOptions$IntegerSandboxOption extends zombie.config.IntegerConfigOption
     */
    export class SandboxOptions$IntegerSandboxOption {
      /**
       * Constructors: 
       *  - (SandboxOptions arg0, String arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: zombie.SandboxOptions | null, arg1: string | null, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      fromTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
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
      getPageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShortName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
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
       *  - (Empty): boolean
       */
      isCustom(): boolean;
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
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setPageName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setTranslation(arg0: string): zombie.SandboxOptions$SandboxOption;
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
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      toTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor Map.new
     * @
     * [CLASS] zombie.SandboxOptions$Map
     */
    export class SandboxOptions$Map {

    }
    /**
     * @customConstructor SandboxOption.new
     * @
     * [INTERFACE] zombie.SandboxOptions$SandboxOption
     */
    export class SandboxOptions$SandboxOption {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      fromTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShortName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setPageName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setTranslation(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      toTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor StringSandboxOption.new
     * @
     * [CLASS] zombie.SandboxOptions$StringSandboxOption extends zombie.config.StringConfigOption
     */
    export class SandboxOptions$StringSandboxOption {
      /**
       * Constructors: 
       *  - (SandboxOptions arg0, String arg1, String arg2, int arg3)
       */
      constructor(arg0: zombie.SandboxOptions | null, arg1: string | null, arg2: string | null, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      fromTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
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
      getPageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShortName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
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
       *  - (Empty): boolean
       */
      isCustom(): boolean;
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
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setPageName(arg0: string): zombie.SandboxOptions$SandboxOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.SandboxOptions$SandboxOption
       */
      setTranslation(arg0: string): zombie.SandboxOptions$SandboxOption;
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
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      toTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor ZombieConfig.new
     * @
     * [CLASS] zombie.SandboxOptions$ZombieConfig
     */
    export class SandboxOptions$ZombieConfig {

    }
    /**
     * @customConstructor ZombieLore.new
     * @
     * [CLASS] zombie.SandboxOptions$ZombieLore
     */
    export class SandboxOptions$ZombieLore {

    }
    /**
     * @customConstructor SharedDescriptors.new
     * @
     * [CLASS] zombie.SharedDescriptors
     */
    export class SharedDescriptors {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1, IsoGameCharacter arg2): void
       */
      static ApplyReanimatedPlayerOutfit(arg0: number, arg1: string, arg2: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      static createPlayerZombieDescriptor(arg0: zombie.characters.IsoZombie): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.SharedDescriptors$Descriptor[]
       */
      static getPlayerZombieDescriptors(): zombie.SharedDescriptors$Descriptor[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initSharedDescriptors(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Descriptor arg0): void
       */
      static registerPlayerZombieDescriptor(arg0: zombie.SharedDescriptors$Descriptor): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      static releasePlayerZombieDescriptor(arg0: zombie.characters.IsoZombie): void;
    }
    /**
     * @customConstructor Descriptor.new
     * @
     * [CLASS] zombie.SharedDescriptors$Descriptor
     */
    export class SharedDescriptors$Descriptor {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.HumanVisual
       */
      getHumanVisual(): zombie.core.skinnedmodel.visual.HumanVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPersistentOutfitID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
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
    }
    /**
     * @customConstructor SoundManager.new
     * @
     * [CLASS] zombie.SoundManager extends zombie.BaseSoundManager
     */
    export class SoundManager {
      /** zombie.BaseSoundManager */
      static instance?: zombie.BaseSoundManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1, String arg2): fmod.fmod.Audio
       */
      BlendThenStart(arg0: fmod.fmod.Audio, arg1: number, arg2: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1): void
       *  - (Audio arg0, float arg1, float arg2): void
       */
      BlendVolume(arg0: fmod.fmod.Audio, arg1: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      CacheSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckDoMusic(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      DoMusic(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      FadeOutMusic(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsMusicPlaying(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, Audio arg1, float arg2, boolean arg3): void
       *  - (String arg0, Audio arg1, boolean arg2, float arg3): void
       */
      PlayAsMusic(arg0: string, arg1: fmod.fmod.Audio, arg2: number | boolean, arg3: boolean | number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       */
      PlayJukeboxSound(arg0: string, arg1: boolean, arg2: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, float arg3): fmod.fmod.Audio
       */
      PlayMusic(arg0: string, arg1: string, arg2: boolean, arg3: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, float arg2, float arg3): fmod.fmod.Audio
       */
      PlaySound(arg0: string, arg1: boolean, arg2: number, arg3?: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       */
      PlaySoundEvenSilent(arg0: string, arg1: boolean, arg2: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, float arg2): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, float arg2, float arg3): fmod.fmod.Audio
       *  - (String arg0, int arg1, boolean arg2, float arg3): fmod.fmod.Audio
       */
      PlaySoundWav(arg0: string, arg1: boolean | number, arg2: number | boolean, arg3?: number): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): fmod.fmod.Audio
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5, boolean arg6): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSound(arg0: string, arg1: zombie.iso.IsoGridSquare | boolean, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6?: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, boolean arg8): fmod.fmod.Audio
       */
      PlayWorldSoundImpl(arg0: string, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): fmod.fmod.Audio
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, int arg5, boolean arg6): void
       */
      PlayWorldSoundWav(arg0: string, arg1: zombie.iso.IsoGridSquare | boolean, arg2: number | zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: boolean | number, arg6?: boolean): fmod.fmod.Audio | void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, IsoGridSquare arg2, float arg3, float arg4, float arg5, boolean arg6): fmod.fmod.Audio
       */
      PlayWorldSoundWavImpl(arg0: string, arg1: boolean, arg2: zombie.iso.IsoGridSquare, arg3: number, arg4: number, arg5: number, arg6: boolean): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.Audio
       */
      PrepareMusic(arg0: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Purge(): void;
      /**
       * Method Parameters: 
       *  - (Audio arg0, float arg1, String arg2): fmod.fmod.Audio
       */
      Start(arg0: fmod.fmod.Audio, arg1: number, arg2: string): fmod.fmod.Audio;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopMusic(): void;
      /**
       * Method Parameters: 
       *  - (Audio arg0): void
       */
      StopSound(arg0: fmod.fmod.Audio): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugScriptSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<fmod.fmod.Audio>
       */
      getAmbientPieces(): java.util.ArrayList<fmod.fmod.Audio>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbientVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentMusicLibrary(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentMusicName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.FMODParameterList
       */
      getFMODParameters(): zombie.audio.FMODParameterList;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMusicPosition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMusicVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSoundVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVehicleEngineVolume(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isListenerInRange(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingMusic(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (long arg0): boolean
       */
      isPlayingUISound(arg0: string | number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemastered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pauseSoundAndMusic(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playAmbient(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playMusic(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      playMusicNonTriggered(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playNightAmbient(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playUISound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      registerEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeSoundAndMusic(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAmbientVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMusicState(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMusicVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): void
       */
      setMusicWakeState(arg0: zombie.characters.IsoPlayer, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSoundVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVehicleEngineVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      startEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      stopEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      stopMusic(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopUISound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      unregisterEmitter(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update1(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update2(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update3(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update3D(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update4(): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1): void
       */
      updateEvent(arg0: number, arg1: zombie.audio.GameSoundClip): void;
    }
    /**
     * @customConstructor AmbientSoundEffect.new
     * @
     * [CLASS] zombie.SoundManager$AmbientSoundEffect
     */
    export class SoundManager$AmbientSoundEffect {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlaying(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pause(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor SystemDisabler.new
     * @
     * [CLASS] zombie.SystemDisabler
     */
    export class SystemDisabler {
      /** boolean */
      static doCharacterStats: boolean;
      /** boolean */
      static doEnableDetectOpenGLErrorsInTexture: boolean;
      /** boolean */
      static doObjectStateSyncEnable: boolean;
      /** boolean */
      static doOverridePOVCharacters: boolean;
      /** boolean */
      static doPlayerCreation: boolean;
      /** boolean */
      static doSurvivorCreation: boolean;
      /** boolean */
      static doVehiclesEverywhere: boolean;
      /** boolean */
      static doVehiclesWithoutTextures: boolean;
      /** boolean */
      static doWorldSyncEnable: boolean;
      /** boolean */
      static doZombieCreation: boolean;
      /** boolean */
      static useNetworkCharacter: boolean;
      /** boolean */
      static zombiesDontAttack: boolean;
      /** boolean */
      static zombiesSwitchOwnershipEachUpdate: boolean;

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
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getAllowDebugConnections(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getDoMainLoopDealWithNetData(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getEnableAdvancedSoundOptions(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getOverrideServerConnectDebugCheck(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getdoHighFriction(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getdoVehicleLowRider(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDoCharacterStats(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDoPlayerCreation(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDoSurvivorCreation(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDoZombieCreation(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setEnableAdvancedSoundOptions(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setObjectStateSyncEnable(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setOverridePOVCharacters(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setVehiclesEverywhere(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setWorldSyncEnable(arg0: boolean): void;
    }
    /**
     * @customConstructor VirtualZombieManager.new
     * @
     * [CLASS] zombie.VirtualZombieManager
     */
    export class VirtualZombieManager {
      /** zombie.VirtualZombieManager */
      static instance?: zombie.VirtualZombieManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, IsoChunk arg1): void
       */
      AddBloodToMap(arg0: number, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      RemoveZombie(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, RoomDef arg1): void
       */
      addDeadZombiesToMap(arg0: number, arg1: zombie.iso.RoomDef): void;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0, IsoRoom arg1): void
       *  - (IsoChunk arg0, IsoRoom arg1, int arg2, ArrayList arg3): void
       */
      addIndoorZombiesToChunk(arg0: zombie.iso.IsoChunk, arg1: zombie.iso.areas.IsoRoom, arg2?: number, arg3?: java.util.ArrayList<zombie.characters.IsoZombie>): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      addToReusable(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (int arg0, RoomDef arg1): java.util.ArrayList<zombie.characters.IsoZombie>
       *  - (int arg0, RoomDef arg1, boolean arg2): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesToMap(arg0: number, arg1: zombie.iso.RoomDef, arg2?: boolean): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      canSpawnAt(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0, int arg1): void
       */
      createEatingZombies(arg0: zombie.iso.objects.IsoDeadBody, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      createHordeFromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): zombie.characters.IsoZombie
       */
      createRealZombie(arg0: number, arg1: number, arg2: number): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): zombie.characters.IsoZombie
       *  - (int arg0, int arg1, boolean arg2): zombie.characters.IsoZombie
       *  - (int arg0, boolean arg1, int arg2): zombie.characters.IsoZombie
       */
      createRealZombieAlways(arg0: number, arg1: boolean | number, arg2?: boolean | number): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): zombie.characters.IsoZombie
       */
      createRealZombieNow(arg0: number, arg1: number, arg2: number): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): boolean
       */
      isReused(arg0: zombie.characters.IsoZombie): boolean;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): boolean
       */
      removeZombieFromWorld(arg0: zombie.characters.IsoZombie): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      reusableZombiesSize(): number;
      /**
       * Method Parameters: 
       *  - (IsoRoom arg0): void
       */
      roomSpotted(arg0: zombie.iso.areas.IsoRoom): void;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, boolean arg1): void
       */
      tryAddIndoorZombies(arg0: zombie.iso.RoomDef, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor WorldSoundManager.new
     * @
     * [CLASS] zombie.WorldSoundManager
     */
    export class WorldSoundManager {
      /** zombie.WorldSoundManager */
      static readonly instance?: zombie.WorldSoundManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      KillCell(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5): zombie.WorldSoundManager$WorldSound
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6): zombie.WorldSoundManager$WorldSound
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6, float arg7, float arg8): zombie.WorldSoundManager$WorldSound
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6, float arg7, float arg8, boolean arg9, boolean arg10, boolean arg11): zombie.WorldSoundManager$WorldSound
       */
      addSound(arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6?: boolean, arg7?: number, arg8?: number, arg9?: boolean, arg10?: boolean, arg11?: boolean): zombie.WorldSoundManager$WorldSound;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6): zombie.WorldSoundManager$WorldSound
       */
      addSoundRepeating(arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): zombie.WorldSoundManager$WorldSound;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, boolean arg3, IsoZombie arg4): zombie.WorldSoundManager$ResultBiggestSound
       */
      getBiggestSoundZomb(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: zombie.characters.IsoZombie): zombie.WorldSoundManager$ResultBiggestSound;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.WorldSoundManager$WorldSound
       */
      getNew(): zombie.WorldSoundManager$WorldSound;
      /**
       * Method Parameters: 
       *  - (WorldSound arg0, IsoZombie arg1): number
       */
      getSoundAttract(arg0: zombie.WorldSoundManager$WorldSound, arg1: zombie.characters.IsoZombie): number;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): zombie.WorldSoundManager$WorldSound
       */
      getSoundZomb(arg0: zombie.characters.IsoZombie): zombie.WorldSoundManager$WorldSound;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      getStressFromSounds(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (IsoCell arg0): void
       */
      init(arg0: zombie.iso.IsoCell): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initFrame(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor ResultBiggestSound.new
     * @
     * [CLASS] zombie.WorldSoundManager$ResultBiggestSound
     */
    export class WorldSoundManager$ResultBiggestSound {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (WorldSound arg0, float arg1): zombie.WorldSoundManager$ResultBiggestSound
       */
      init(arg0: zombie.WorldSoundManager$WorldSound, arg1: number): zombie.WorldSoundManager$ResultBiggestSound;
    }
    /**
     * @customConstructor WorldSound.new
     * @
     * [CLASS] zombie.WorldSoundManager$WorldSound
     */
    export class WorldSoundManager$WorldSound {
      /**
       * Constructors: 
       *  - (WorldSoundManager arg0)
       */
      constructor(arg0: zombie.WorldSoundManager | null);
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5): zombie.WorldSoundManager$WorldSound
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6): zombie.WorldSoundManager$WorldSound
       *  - (boolean arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6, float arg7, float arg8): zombie.WorldSoundManager$WorldSound
       *  - (Object arg0, int arg1, int arg2, int arg3, int arg4, int arg5, boolean arg6, float arg7, float arg8): zombie.WorldSoundManager$WorldSound
       */
      init(arg0: any, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6?: boolean, arg7?: number, arg8?: number): zombie.WorldSoundManager$WorldSound;
    }
    /**
     * @customConstructor ZomboidBitFlag.new
     * @
     * [CLASS] zombie.ZomboidBitFlag
     */
    export class ZomboidBitFlag {
      /**
       * Constructors: 
       *  - (int arg0)
       *  - (ZomboidBitFlag arg0)
       */
      constructor(arg0: number | zombie.ZomboidBitFlag);
      /**
       * Method Parameters: 
       *  - (ZomboidBitFlag arg0): void
       */
      Or(arg0: zombie.ZomboidBitFlag): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      getFromLong(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (IsoObjectType arg0): boolean
       *  - (IsoFlagType arg0): boolean
       */
      isSet(arg0: number | zombie.iso.SpriteDetails.IsoObjectType | zombie.iso.SpriteDetails.IsoFlagType): boolean;
      /**
       * Method Parameters: 
       *  - (DataInputStream arg0): void
       */
      load(arg0: java.io.DataInputStream): void;
      /**
       * Method Parameters: 
       *  - (DataOutputStream arg0): void
       */
      save(arg0: java.io.DataOutputStream): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0, boolean arg1): void
       *  - (IsoFlagType arg0, boolean arg1): void
       *  - (int arg0, boolean arg1): void
       */
      set(arg0: zombie.iso.SpriteDetails.IsoObjectType | zombie.iso.SpriteDetails.IsoFlagType | number, arg1: boolean): void;
    }
  }
}
