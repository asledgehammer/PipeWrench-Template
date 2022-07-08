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
 * File generated at Friday July 2022 15:18:33.646-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.characters.skills {
    /**
     * @customConstructor PerkFactory.new
     * @
     * [CLASS] zombie.characters.skills.PerkFactory
     */
    export class PerkFactory {
      /** java.util.ArrayList<zombie.characters.skills.PerkFactory$Perk> */
      static readonly PerkList?: java.util.ArrayList<zombie.characters.skills.PerkFactory$Perk>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Perk arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8, int arg9, int arg10, int arg11): zombie.characters.skills.PerkFactory$Perk
       *  - (Perk arg0, String arg1, Perk arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8, int arg9, int arg10, int arg11, int arg12): zombie.characters.skills.PerkFactory$Perk
       *  - (Perk arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8, int arg9, int arg10, int arg11, boolean arg12): zombie.characters.skills.PerkFactory$Perk
       *  - (Perk arg0, String arg1, Perk arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8, int arg9, int arg10, int arg11, int arg12, boolean arg13): zombie.characters.skills.PerkFactory$Perk
       */
      static AddPerk(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: string, arg2: number | zombie.characters.skills.PerkFactory$Perk, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12?: number | boolean, arg13?: boolean): zombie.characters.skills.PerkFactory$Perk;
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
       *  - (Perk arg0): zombie.characters.skills.PerkFactory$Perk
       */
      static getPerk(arg0: zombie.characters.skills.PerkFactory$Perk): zombie.characters.skills.PerkFactory$Perk;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.skills.PerkFactory$Perk
       */
      static getPerkFromName(arg0: string): zombie.characters.skills.PerkFactory$Perk;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Perk arg0): string
       */
      static getPerkName(arg0: zombie.characters.skills.PerkFactory$Perk): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initTranslations(): void;
    }
    /**
     * @customConstructor Perk.new
     * @
     * [CLASS] zombie.characters.skills.PerkFactory$Perk
     */
    export class PerkFactory$Perk {
      /**
       * Constructors: 
       *  - (String arg0)
       *  - (String arg0, Perk arg1)
       */
      constructor(arg0: string | null, arg1?: zombie.characters.skills.PerkFactory$Perk | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.skills.PerkFactory$Perk
       */
      getParent(): zombie.characters.skills.PerkFactory$Perk;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getTotalXpForLevel(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.skills.PerkFactory$Perk
       */
      getType(): zombie.characters.skills.PerkFactory$Perk;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp1(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp10(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp2(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp3(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp4(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp5(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp6(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp7(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp8(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXp9(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getXpForLevel(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      index(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPassiv(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setCustom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Perks.new
     * @
     * [CLASS] zombie.characters.skills.PerkFactory$Perks
     */
    export class PerkFactory$Perks {
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Agility?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Aiming?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Axe?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Blacksmith?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Blunt?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Combat?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Cooking?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Crafting?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Doctor?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Electricity?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Farming?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Firearm?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Fishing?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Fitness?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Lightfoot?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly LongBlade?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly MAX?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Maintenance?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Mechanics?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Melee?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Melting?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly MetalWelding?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Nimble?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly None?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Passiv?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly PlantScavenging?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Reloading?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly SmallBlade?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly SmallBlunt?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Sneak?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Spear?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Sprinting?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Strength?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Survivalist?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Tailoring?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Trapping?: zombie.characters.skills.PerkFactory$Perk;
      /** zombie.characters.skills.PerkFactory$Perk */
      static readonly Woodwork?: zombie.characters.skills.PerkFactory$Perk;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.skills.PerkFactory$Perk
       */
      static FromString(arg0: string): zombie.characters.skills.PerkFactory$Perk;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.characters.skills.PerkFactory$Perk
       */
      static fromIndex(arg0: number): zombie.characters.skills.PerkFactory$Perk;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMaxIndex(): number;
    }
  }
}
