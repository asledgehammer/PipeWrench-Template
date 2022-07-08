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
 * File generated at Friday July 2022 15:18:33.683-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.characters.Moodles {
    /**
     * @customConstructor Moodle.new
     * @
     * [CLASS] zombie.characters.Moodles.Moodle
     */
    export class Moodle {
      /**
       * Constructors: 
       *  - (MoodleType arg0, IsoGameCharacter arg1)
       *  - (MoodleType arg0, IsoGameCharacter arg1, int arg2)
       */
      constructor(arg0: zombie.characters.Moodles.MoodleType | null, arg1: zombie.characters.IsoGameCharacter | null, arg2?: number);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Update(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, Color arg2): boolean
       */
      chevronDifference(arg0: number, arg1: boolean, arg2: zombie.core.Color): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getChevronColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChevronCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isChevronIsUp(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, Color arg2): void
       */
      setChevron(arg0: number, arg1: boolean, arg2: zombie.core.Color): void;
    }
    /** [ENUM] zombie.characters.Moodles.MoodleType */
    export class MoodleType {
      protected constructor();
      static readonly Angry: zombie.characters.Moodles.MoodleType;
      static readonly Bleeding: zombie.characters.Moodles.MoodleType;
      static readonly Bored: zombie.characters.Moodles.MoodleType;
      static readonly CantSprint: zombie.characters.Moodles.MoodleType;
      static readonly Dead: zombie.characters.Moodles.MoodleType;
      static readonly Drunk: zombie.characters.Moodles.MoodleType;
      static readonly Endurance: zombie.characters.Moodles.MoodleType;
      static readonly FoodEaten: zombie.characters.Moodles.MoodleType;
      static readonly HasACold: zombie.characters.Moodles.MoodleType;
      static readonly HeavyLoad: zombie.characters.Moodles.MoodleType;
      static readonly Hungry: zombie.characters.Moodles.MoodleType;
      static readonly Hyperthermia: zombie.characters.Moodles.MoodleType;
      static readonly Hypothermia: zombie.characters.Moodles.MoodleType;
      static readonly Injured: zombie.characters.Moodles.MoodleType;
      static readonly MAX: zombie.characters.Moodles.MoodleType;
      static readonly Pain: zombie.characters.Moodles.MoodleType;
      static readonly Panic: zombie.characters.Moodles.MoodleType;
      static readonly Sick: zombie.characters.Moodles.MoodleType;
      static readonly Stress: zombie.characters.Moodles.MoodleType;
      static readonly Thirst: zombie.characters.Moodles.MoodleType;
      static readonly Tired: zombie.characters.Moodles.MoodleType;
      static readonly Unhappy: zombie.characters.Moodles.MoodleType;
      static readonly Wet: zombie.characters.Moodles.MoodleType;
      static readonly Windchill: zombie.characters.Moodles.MoodleType;
      static readonly Zombie: zombie.characters.Moodles.MoodleType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor Moodles.new
     * @
     * [CLASS] zombie.characters.Moodles.Moodles
     */
    export class Moodles {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Randomise(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      UI_RefreshNeeded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getGoodBadNeutral(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.Color
       */
      getMoodleChevronColor(arg0: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getMoodleChevronCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getMoodleChevronIsUp(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getMoodleDescriptionString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getMoodleDisplayString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (MoodleType arg0): number
       *  - (int arg0): number
       */
      getMoodleLevel(arg0: zombie.characters.Moodles.MoodleType | number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.Moodles.MoodleType
       */
      getMoodleType(arg0: number): zombie.characters.Moodles.MoodleType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumMoodles(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoodlesStateChanged(arg0: boolean): void;
    }
  }
}
