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
 * File generated at Friday July 2022 12:23:19.727-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace fmod.fmod {
    export type Audio = any;
    /** [ENUM] fmod.fmod.EmitterType */
    export class EmitterType {
      protected constructor();
      static readonly Extra: fmod.EmitterType;
      static readonly Footstep: fmod.EmitterType;
      static readonly Voice: fmod.EmitterType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor FMODAudio.new
     * @
     * [CLASS] fmod.fmod.FMODAudio
     */
    export class FMODAudio {
      /**
       * Constructors: 
       *  - (BaseSoundEmitter arg0)
       */
      constructor(arg0: zombie.audio.BaseSoundEmitter | null);
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
    }
    export type FMODFootstep = any;
    /**
     * @customConstructor FMODSoundBank.new
     * @
     * [CLASS] fmod.fmod.FMODSoundBank extends zombie.audio.BaseSoundBank
     */
    export class FMODSoundBank {
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
      getFootstep(arg0: string): fmod.FMODFootstep;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.fmod.FMODVoice
       */
      getVoice(arg0: string): fmod.FMODVoice;
    }
    /**
     * @customConstructor FMODSoundEmitter.new
     * @
     * [CLASS] fmod.fmod.FMODSoundEmitter extends zombie.audio.BaseSoundEmitter
     */
    export class FMODSoundEmitter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (FMODParameter arg0): void
       */
      addParameter(arg0: zombie.audio.FMODParameter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearParameters(): void;
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
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, IsoGameCharacter arg1): number
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, int arg1, int arg2, int arg3): number
       */
      playSound(arg0: string, arg1?: zombie.iso.IsoObject | boolean | zombie.characters.IsoGameCharacter | zombie.iso.IsoGridSquare | number, arg2?: number, arg3?: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, boolean arg1, IsoObject arg2): number
       */
      playSoundImpl(arg0: string, arg1: zombie.iso.IsoObject | zombie.iso.IsoGridSquare | boolean, arg2?: zombie.iso.IsoObject): number;
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
      setParameterValue(arg0: number, arg1: fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION, arg2: number): void;
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
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    export type FMODVoice = any;
    export type FMOD_STUDIO_PARAMETER_DESCRIPTION = any;
    export type FMOD_STUDIO_PARAMETER_ID = any;
  }
}
