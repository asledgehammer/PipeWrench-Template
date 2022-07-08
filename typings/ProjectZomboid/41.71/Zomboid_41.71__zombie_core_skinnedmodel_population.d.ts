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
 * File generated at Friday July 2022 15:18:33.564-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.skinnedmodel.population {
    /**
     * @customConstructor BeardStyle.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.BeardStyle
     */
    export class BeardStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTrimChoices(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
    }
    /**
     * @customConstructor BeardStyles.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.BeardStyles
     */
    export class BeardStyles {
      /** zombie.core.skinnedmodel.population.BeardStyles */
      static instance?: zombie.core.skinnedmodel.population.BeardStyles;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.BeardStyle
       */
      FindStyle(arg0: string): zombie.core.skinnedmodel.population.BeardStyle;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.population.BeardStyle>
       */
      getAllStyles(): java.util.ArrayList<zombie.core.skinnedmodel.population.BeardStyle>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.BeardStyles
       */
      getInstance(): zombie.core.skinnedmodel.population.BeardStyles;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getRandomStyle(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.BeardStyles
       */
      static Parse(arg0: string): zombie.core.skinnedmodel.population.BeardStyles;
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
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.BeardStyles
       */
      static parse(arg0: string): zombie.core.skinnedmodel.population.BeardStyles;
    }
    /**
     * @customConstructor ClothingItem.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.ClothingItem extends zombie.asset.Asset
     */
    export class ClothingItem {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;
      /** java.lang.String */
      static readonly s_masksFolderDefault?: string;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1)
       */
      constructor(arg0: zombie.asset.AssetPath | null, arg1: zombie.asset.AssetManager | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetATexture(): string;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getAllowRandomHue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getAllowRandomTint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBaseTextures(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (CharacterMask arg0): void
       */
      getCombinedMask(arg0: zombie.core.skinnedmodel.model.CharacterMask): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDecalGroup(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFemaleModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMaleModel(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): string
       */
      getModel(arg0: boolean): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTextureChoices(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMask(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ClothingItem arg0, CharacterMask arg1): void
       *  - (ClothingItemReference arg0, CharacterMask arg1): void
       */
      static tryGetCombinedMask(arg0: zombie.core.skinnedmodel.population.ClothingItem | zombie.core.skinnedmodel.population.ClothingItemReference, arg1: zombie.core.skinnedmodel.model.CharacterMask): void;
    }
    /**
     * @customConstructor ClothingItemReference.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.ClothingItemReference
     */
    export class ClothingItemReference {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItemReference
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItem
       */
      getClothingItem(): zombie.core.skinnedmodel.population.ClothingItem;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomize(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModID(arg0: string): void;
    }
    /**
     * @customConstructor RandomData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.ClothingItemReference$RandomData
     */
    export class ClothingItemReference$RandomData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor HairStyle.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.HairStyle
     */
    export class HairStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getAlternate(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTrimChoices(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttachedHair(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrowReference(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoChoose(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
    }
    /**
     * @customConstructor Alternate.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.HairStyle$Alternate
     */
    export class HairStyle$Alternate {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor HairStyles.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.HairStyles
     */
    export class HairStyles {
      /** zombie.core.skinnedmodel.population.HairStyles */
      static instance?: zombie.core.skinnedmodel.population.HairStyles;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.HairStyle
       */
      FindFemaleStyle(arg0: string): zombie.core.skinnedmodel.population.HairStyle;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.HairStyle
       */
      FindMaleStyle(arg0: string): zombie.core.skinnedmodel.population.HairStyle;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.population.HairStyle>
       */
      getAllFemaleStyles(): java.util.ArrayList<zombie.core.skinnedmodel.population.HairStyle>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.population.HairStyle>
       */
      getAllMaleStyles(): java.util.ArrayList<zombie.core.skinnedmodel.population.HairStyle>;
      /**
       * Method Parameters: 
       *  - (HairStyle arg0, String arg1): zombie.core.skinnedmodel.population.HairStyle
       */
      getAlternateForHat(arg0: zombie.core.skinnedmodel.population.HairStyle, arg1: string): zombie.core.skinnedmodel.population.HairStyle;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getRandomFemaleStyle(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getRandomMaleStyle(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.HairStyles
       */
      static Parse(arg0: string): zombie.core.skinnedmodel.population.HairStyles;
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
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.HairStyles
       */
      static parse(arg0: string): zombie.core.skinnedmodel.population.HairStyles;
    }
    /**
     * @customConstructor Outfit.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.Outfit
     */
    export class Outfit {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ClothingItemReference arg0): void
       */
      AddItem(arg0: zombie.core.skinnedmodel.population.ClothingItemReference): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.CharacterMask
       */
      GetMask(): zombie.core.skinnedmodel.model.CharacterMask;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Randomize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): zombie.core.skinnedmodel.population.Outfit
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsItemGuid(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItemReference
       */
      findHat(): zombie.core.skinnedmodel.population.ClothingItemReference;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.population.ClothingItemReference
       */
      findItemByGUID(arg0: string): zombie.core.skinnedmodel.population.ClothingItemReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadItems(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      randomizeItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModID(arg0: string): void;
    }
    /**
     * @customConstructor RandomData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.population.Outfit$RandomData
     */
    export class Outfit$RandomData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
