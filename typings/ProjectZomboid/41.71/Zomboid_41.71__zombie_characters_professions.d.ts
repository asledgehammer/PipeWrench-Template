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
 * File generated at Friday July 2022 15:18:33.636-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.characters.professions {
    /**
     * @customConstructor ProfessionFactory.new
     * @
     * [CLASS] zombie.characters.professions.ProfessionFactory
     */
    export class ProfessionFactory {
      /** java.util.LinkedHashMap<java.lang.String, zombie.characters.professions.ProfessionFactory$Profession> */
      static ProfessionMap?: java.util.LinkedHashMap<string, zombie.characters.professions.ProfessionFactory$Profession>;

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
       *  - (String arg0, String arg1, String arg2, int arg3): zombie.characters.professions.ProfessionFactory$Profession
       */
      static addProfession(arg0: string, arg1: string, arg2: string, arg3: number): zombie.characters.professions.ProfessionFactory$Profession;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.professions.ProfessionFactory$Profession
       */
      static getProfession(arg0: string): zombie.characters.professions.ProfessionFactory$Profession;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.professions.ProfessionFactory$Profession>
       */
      static getProfessions(): java.util.ArrayList<zombie.characters.professions.ProfessionFactory$Profession>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor Profession.new
     * @
     * [CLASS] zombie.characters.professions.ProfessionFactory$Profession
     */
    export class ProfessionFactory$Profession {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, int arg3, String arg4)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: string | null, arg3: number, arg4: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addFreeTrait(arg0: string): void;
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
       *  - (Empty): java.util.Stack<string>
       */
      getFreeTraitStack(): java.util.Stack<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFreeTraits(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIconPath(): string;
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
       *  - (int arg0): void
       */
      setCost(arg0: number): void;
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
       *  - (Stack arg0): void
       */
      setFreeTraitStack(arg0: java.util.Stack<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setIconPath(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
    }
  }
}
