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
 * File generated at Friday July 2022 15:18:33.637-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.characters.traits {
    /**
     * @customConstructor ObservationFactory.new
     * @
     * [CLASS] zombie.characters.traits.ObservationFactory
     */
    export class ObservationFactory {
      /** java.util.HashMap<java.lang.String, zombie.characters.traits.ObservationFactory$Observation> */
      static ObservationMap?: java.util.HashMap<string, zombie.characters.traits.ObservationFactory$Observation>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      static addObservation(arg0: string, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.traits.ObservationFactory$Observation
       */
      static getObservation(arg0: string): zombie.characters.traits.ObservationFactory$Observation;
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
       *  - (String arg0, String arg1): void
       */
      static setMutualExclusive(arg0: string, arg1: string): void;
    }
    /**
     * @customConstructor Observation.new
     * @
     * [CLASS] zombie.characters.traits.ObservationFactory$Observation
     */
    export class ObservationFactory$Observation {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLeftLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRightLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTraitID(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTraitID(arg0: string): void;
    }
    /**
     * @customConstructor TraitCollection.new
     * @
     * [CLASS] zombie.characters.traits.TraitCollection
     */
    export class TraitCollection {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      add(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): void
       */
      addAll(arg0: java.util.Collection<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      get(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.traits.TraitCollection$TraitSlot
       */
      getTraitSlot(arg0: string): zombie.characters.traits.TraitCollection$TraitSlot;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (Object arg0): boolean
       */
      remove(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): void
       */
      removeAll(arg0: java.util.Collection<any>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      set(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor TraitSlot.new
     * @
     * [CLASS] zombie.characters.traits.TraitCollection$TraitSlot
     */
    export class TraitCollection$TraitSlot {

      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isName(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSet(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      set(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor TraitFactory.new
     * @
     * [CLASS] zombie.characters.traits.TraitFactory
     */
    export class TraitFactory {
      /** java.util.LinkedHashMap<java.lang.String, zombie.characters.traits.TraitFactory$Trait> */
      static TraitMap?: java.util.LinkedHashMap<string, zombie.characters.traits.TraitFactory$Trait>;

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
       *  - (String arg0, String arg1, int arg2, String arg3, boolean arg4): zombie.characters.traits.TraitFactory$Trait
       *  - (String arg0, String arg1, int arg2, String arg3, boolean arg4, boolean arg5): zombie.characters.traits.TraitFactory$Trait
       */
      static addTrait(arg0: string, arg1: string, arg2: number, arg3: string, arg4: boolean, arg5?: boolean): zombie.characters.traits.TraitFactory$Trait;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.traits.TraitFactory$Trait
       */
      static getTrait(arg0: string): zombie.characters.traits.TraitFactory$Trait;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.traits.TraitFactory$Trait>
       */
      static getTraits(): java.util.ArrayList<zombie.characters.traits.TraitFactory$Trait>;
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
       *  - (String arg0, String arg1): void
       */
      static setMutualExclusive(arg0: string, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sortList(): void;
    }
    /**
     * @customConstructor Trait.new
     * @
     * [CLASS] zombie.characters.traits.TraitFactory$Trait
     */
    export class TraitFactory$Trait {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2, String arg3, boolean arg4, boolean arg5)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: number, arg3: string | null, arg4: boolean, arg5: boolean);
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      addXPBoost(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getFreeRecipes(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLeftLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMutuallyExclusiveTraits(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRightLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<zombie.characters.skills.PerkFactory$Perk, number>
       */
      getXPBoostMap(): java.util.HashMap<zombie.characters.skills.PerkFactory$Perk, number>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoveInMP(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      setFreeRecipes(arg0: java.util.List<string>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRemoveInMP(arg0: boolean): void;
    }
  }
}
