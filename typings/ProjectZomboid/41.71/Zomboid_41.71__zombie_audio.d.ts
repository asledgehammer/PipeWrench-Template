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
 * File generated at Friday July 2022 15:18:33.607-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.audio {
    /**
     * @customConstructor BaseSoundBank.new
     * @
     * [ABSTRACT CLASS] zombie.audio.BaseSoundBank
     */
    export class BaseSoundBank {
      /** zombie.audio.BaseSoundBank */
      static instance?: zombie.audio.BaseSoundBank;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4): void
       */
      addFootstep(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, float arg2): void
       */
      addVoice(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.FMODFootstep
       */
      getFootstep(arg0: string): fmod.fmod.FMODFootstep;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.FMODVoice
       */
      getVoice(arg0: string): fmod.fmod.FMODVoice;
    }
    /**
     * @customConstructor BaseSoundEmitter.new
     * @
     * [ABSTRACT CLASS] zombie.audio.BaseSoundEmitter
     */
    export class BaseSoundEmitter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSoundsToStart(): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      hasSustainPoints(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (long arg0): boolean
       */
      isPlaying(arg0: string | number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playAmbientLoopedImpl(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playAmbientSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (GameSoundClip arg0, IsoObject arg1): number
       */
      playClip(arg0: zombie.audio.GameSoundClip, arg1: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, IsoGameCharacter arg1): number
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, int arg1, int arg2, int arg3): number
       */
      playSound(arg0: string, arg1?: zombie.characters.IsoGameCharacter | zombie.iso.IsoGridSquare | boolean | zombie.iso.IsoObject | number, arg2?: number, arg3?: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, boolean arg1, IsoObject arg2): number
       */
      playSoundImpl(arg0: string, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoObject | boolean, arg2?: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLooped(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLoopedImpl(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomStart(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      restart(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0, boolean arg1): void
       */
      set3D(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0, FMOD_STUDIO_PARAMETER_DESCRIPTION arg1, float arg2): void
       */
      setParameterValue(arg0: number, arg1: fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, float arg1): void
       */
      setPitch(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): void
       */
      setTimelinePosition(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0, float arg1): void
       */
      setVolume(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVolumeAll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopAll(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopOrTriggerSound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      stopOrTriggerSoundByName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      stopSound(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      stopSoundByName(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tick(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      triggerCue(arg0: number): void;
    }
    /**
     * @customConstructor DummySoundBank.new
     * @
     * [CLASS] zombie.audio.DummySoundBank extends zombie.audio.BaseSoundBank
     */
    export class DummySoundBank {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4): void
       */
      addFootstep(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, float arg2): void
       */
      addVoice(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.FMODFootstep
       */
      getFootstep(arg0: string): fmod.fmod.FMODFootstep;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.FMODVoice
       */
      getVoice(arg0: string): fmod.fmod.FMODVoice;
    }
    /**
     * @customConstructor DummySoundEmitter.new
     * @
     * [CLASS] zombie.audio.DummySoundEmitter extends zombie.audio.BaseSoundEmitter
     */
    export class DummySoundEmitter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSoundsToStart(): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      hasSustainPoints(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (long arg0): boolean
       */
      isPlaying(arg0: string | number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playAmbientLoopedImpl(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playAmbientSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (GameSoundClip arg0, IsoObject arg1): number
       */
      playClip(arg0: zombie.audio.GameSoundClip, arg1: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, IsoGameCharacter arg1): number
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, int arg1, int arg2, int arg3): number
       */
      playSound(arg0: string, arg1?: zombie.characters.IsoGameCharacter | zombie.iso.IsoGridSquare | boolean | zombie.iso.IsoObject | number, arg2?: number, arg3?: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, boolean arg1, IsoObject arg2): number
       */
      playSoundImpl(arg0: string, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoObject | boolean, arg2?: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLooped(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLoopedImpl(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomStart(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      restart(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0, boolean arg1): void
       */
      set3D(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0, FMOD_STUDIO_PARAMETER_DESCRIPTION arg1, float arg2): void
       */
      setParameterValue(arg0: number, arg1: fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, float arg1): void
       */
      setPitch(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): void
       */
      setTimelinePosition(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0, float arg1): void
       */
      setVolume(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVolumeAll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopAll(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopOrTriggerSound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      stopOrTriggerSoundByName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      stopSound(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      stopSoundByName(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tick(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      triggerCue(arg0: number): void;
    }
    /**
     * @customConstructor FMODParameter.new
     * @
     * [ABSTRACT CLASS] zombie.audio.FMODParameter
     */
    export class FMODParameter {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      protected constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION
       */
      getParameterDescription(): fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION;
      /**
       * Method Parameters: 
       *  - (Empty): fmod.fmod.FMOD_STUDIO_PARAMETER_ID
       */
      getParameterID(): fmod.fmod.FMOD_STUDIO_PARAMETER_ID;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      startEventInstance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopEventInstance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor FMODParameterList.new
     * @
     * [CLASS] zombie.audio.FMODParameterList
     */
    export class FMODParameterList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (FMODParameter arg0): void
       */
      add(arg0: zombie.audio.FMODParameter): void;
      /**
       * Method Parameters: 
       *  - (FMOD_STUDIO_PARAMETER_DESCRIPTION arg0): zombie.audio.FMODParameter
       */
      get(arg0: fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION): zombie.audio.FMODParameter;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor GameSound.new
     * @
     * [CLASS] zombie.audio.GameSound
     */
    export class GameSound {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMasterName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.GameSoundClip
       */
      getRandomClip(): zombie.audio.GameSoundClip;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUserVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLooped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUserVolume(arg0: number): void;
    }
    /** [ENUM] zombie.audio.GameSound$MasterVolume */
    export class GameSound$MasterVolume {
      protected constructor();
      static readonly Ambient: zombie.audio.GameSound$MasterVolume;
      static readonly Music: zombie.audio.GameSound$MasterVolume;
      static readonly Primary: zombie.audio.GameSound$MasterVolume;
      static readonly VehicleEngine: zombie.audio.GameSound$MasterVolume;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor GameSoundClip.new
     * @
     * [CLASS] zombie.audio.GameSoundClip
     */
    export class GameSoundClip {
      /** short */
      static INIT_FLAG_DISTANCE_MAX: number;
      /** short */
      static INIT_FLAG_DISTANCE_MIN: number;

      /**
       * Constructors: 
       *  - (GameSound arg0)
       */
      constructor(arg0: zombie.audio.GameSound | null);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.GameSoundClip
       */
      checkReloaded(): zombie.audio.GameSoundClip;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEffectiveVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEffectiveVolumeInMenu(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEvent(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFile(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPitch(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasMaxDistance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasMinDistance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSustainPoints(): boolean;
    }
    /**
     * @customConstructor ObjectAmbientEmitters.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters
     */
    export class ObjectAmbientEmitters {

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
       *  - (Empty): zombie.audio.ObjectAmbientEmitters
       */
      static getInstance(): zombie.audio.ObjectAmbientEmitters;
    }
    /**
     * @customConstructor AmbientSoundLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$AmbientSoundLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$AmbientSoundLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor ChunkData.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$ChunkData
     */
    export class ObjectAmbientEmitters$ChunkData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, PerObjectLogic arg1): void
       */
      addObject(arg0: zombie.iso.IsoObject, arg1: zombie.audio.ObjectAmbientEmitters$PerObjectLogic): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      removeObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor DoorLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$DoorLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$DoorLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor FridgeHumLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$FridgeHumLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$FridgeHumLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor PerObjectLogic.new
     * @
     * [ABSTRACT CLASS] zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$PerObjectLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor TentAmbianceLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$TentAmbianceLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$TentAmbianceLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor TreeAmbianceLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$TreeAmbianceLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$TreeAmbianceLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor WaterDripLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$WaterDripLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$WaterDripLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
    /**
     * @customConstructor WindowLogic.new
     * @
     * [CLASS] zombie.audio.ObjectAmbientEmitters$WindowLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic
     */
    export class ObjectAmbientEmitters$WindowLogic {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      checkParameters(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSoundName(): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): zombie.audio.ObjectAmbientEmitters$PerObjectLogic
       */
      init(arg0: zombie.iso.IsoObject): zombie.audio.ObjectAmbientEmitters$PerObjectLogic;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlaySound(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      startPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0, long arg1): void
       */
      stopPlaying(arg0: zombie.audio.BaseSoundEmitter, arg1: number): void;
    }
  }
}
