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
 * File generated at 2022-07-29T02:33Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../reference.d.ts" />
declare module 'PipeWrench' {
  export namespace zombie.radio.StorySounds {
    /**
     * @customConstructor DataPoint.new
     * @
     * [CLASS] zombie.radio.StorySounds.DataPoint
     */
    export class DataPoint {
      /**
       * Constructors: 
       *  - (float arg0, float arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTime(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTime(arg0: number): void;
    }
    /**
     * @customConstructor EventSound.new
     * @
     * [CLASS] zombie.radio.StorySounds.EventSound
     */
    export class EventSound {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0)
       */
      constructor(arg0?: string);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.StorySounds.DataPoint>
       */
      getDataPoints(): java.util.ArrayList<zombie.radio.StorySounds.DataPoint>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.StorySounds.StorySound>
       */
      getStorySounds(): java.util.ArrayList<zombie.radio.StorySounds.StorySound>;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setColor(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setDataPoints(arg0: java.util.ArrayList<zombie.radio.StorySounds.DataPoint>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setStorySounds(arg0: java.util.ArrayList<zombie.radio.StorySounds.StorySound>): void;
    }
    /**
     * @customConstructor SLSoundManager.new
     * @
     * [CLASS] zombie.radio.StorySounds.SLSoundManager
     */
    export class SLSoundManager {
      /** boolean */
      static DEBUG: boolean;
      /** boolean */
      static ENABLED: boolean;
      /** zombie.radio.StorySounds.StoryEmitter */
      static Emitter?: zombie.radio.StorySounds.StoryEmitter;
      /** boolean */
      static LUA_DEBUG: boolean;


      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDebug(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getLuaDebug(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getRandomBorderPosition(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRandomBorderRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.StorySounds.StorySound>
       */
      getStorySounds(): java.util.ArrayList<zombie.radio.StorySounds.StorySound>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadSounds(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      print(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderDebug(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      thunderTest(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      update(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateKeys(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.StorySounds.SLSoundManager
       */
      static getInstance(): zombie.radio.StorySounds.SLSoundManager;
    }
    /**
     * @customConstructor StoryEmitter.new
     * @
     * [CLASS] zombie.radio.StorySounds.StoryEmitter
     */
    export class StoryEmitter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): number
       */
      playSound(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      stopSound(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tick(): void;
    }
    /**
     * @customConstructor Sound.new
     * @
     * [CLASS] zombie.radio.StorySounds.StoryEmitter$Sound
     */
    export class StoryEmitter$Sound {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor StorySound.new
     * @
     * [CLASS] zombie.radio.StorySounds.StorySound
     */
    export class StorySound {
      /**
       * Constructors: 
       *  - (String arg0, float arg1)
       */
      constructor(arg0: string, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.StorySounds.StorySound
       */
      getClone(): zombie.radio.StorySounds.StorySound;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      playSound(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBaseVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
    }
    /**
     * @customConstructor StorySoundEvent.new
     * @
     * [CLASS] zombie.radio.StorySounds.StorySoundEvent
     */
    export class StorySoundEvent {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0)
       */
      constructor(arg0?: string);
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.radio.StorySounds.EventSound>
       */
      getEventSounds(): java.util.ArrayList<zombie.radio.StorySounds.EventSound>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setEventSounds(arg0: java.util.ArrayList<zombie.radio.StorySounds.EventSound>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
    }
  }
}
