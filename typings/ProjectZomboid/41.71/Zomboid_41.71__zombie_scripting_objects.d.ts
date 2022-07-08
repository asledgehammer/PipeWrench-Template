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
 * File generated at Friday July 2022 15:18:33.601-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.scripting.objects {
    /**
     * @customConstructor AnimationsMesh.new
     * @
     * [CLASS] zombie.scripting.objects.AnimationsMesh extends zombie.scripting.objects.BaseScriptObject
     */
    export class AnimationsMesh {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor EvolvedRecipe.new
     * @
     * [CLASS] zombie.scripting.objects.EvolvedRecipe extends zombie.scripting.objects.BaseScriptObject
     */
    export class EvolvedRecipe {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, InventoryItem arg1, IsoGameCharacter arg2): zombie.inventory.InventoryItem
       */
      addItem(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.InventoryItem, arg2: zombie.characters.IsoGameCharacter): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAddIngredientSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBaseItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullResultItem(): string;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.scripting.objects.ItemRecipe
       */
      getItemRecipe(arg0: zombie.inventory.InventoryItem): zombie.scripting.objects.ItemRecipe;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsCanBeUse(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, zombie.scripting.objects.ItemRecipe>
       */
      getItemsList(): java.util.Map<string, zombie.scripting.objects.ItemRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxItems(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalname(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.ItemRecipe>
       */
      getPossibleItems(): java.util.ArrayList<zombie.scripting.objects.ItemRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getResultItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUntranslatedName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowFrozenItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHidden(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isResultItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, InventoryItem arg1): boolean
       */
      isSpiceAdded(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      needToBeCooked(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowFrozenItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsHidden(arg0: boolean): void;
    }
    /**
     * @customConstructor Fixing.new
     * @
     * [CLASS] zombie.scripting.objects.Fixing extends zombie.scripting.objects.BaseScriptObject
     */
    export class Fixing {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addRequiredItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Fixer arg1, InventoryItem arg2): number
       */
      countUses(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.scripting.objects.Fixing$Fixer, arg2: zombie.inventory.InventoryItem): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.LinkedList<zombie.scripting.objects.Fixing$Fixer>
       */
      getFixers(): java.util.LinkedList<zombie.scripting.objects.Fixing$Fixer>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Fixing$Fixer
       */
      getGlobalItem(): zombie.scripting.objects.Fixing$Fixer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Fixer arg1, InventoryItem arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getRequiredFixerItems(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.scripting.objects.Fixing$Fixer, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequiredItem(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Fixer arg1, InventoryItem arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getRequiredItems(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.scripting.objects.Fixing$Fixer, arg2: zombie.inventory.InventoryItem): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.inventory.InventoryItem
       */
      haveGlobalItem(arg0: zombie.characters.IsoGameCharacter): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Fixer arg1, InventoryItem arg2): zombie.inventory.InventoryItem
       */
      haveThisFixer(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.scripting.objects.Fixing$Fixer, arg2: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setConditionModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Fixer arg0): void
       */
      setGlobalItem(arg0: zombie.scripting.objects.Fixing$Fixer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1): zombie.scripting.objects.Fixing$Fixer
       */
      usedInFixer(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter): zombie.scripting.objects.Fixing$Fixer;
    }
    /**
     * @customConstructor Fixer.new
     * @
     * [CLASS] zombie.scripting.objects.Fixing$Fixer
     */
    export class Fixing$Fixer {
      /**
       * Constructors: 
       *  - (String arg0, LinkedList arg1, int arg2)
       */
      constructor(arg0: string | null, arg1: java.util.LinkedList<zombie.scripting.objects.Fixing$FixerSkill> | null, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFixerName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.LinkedList<zombie.scripting.objects.Fixing$FixerSkill>
       */
      getFixerSkills(): java.util.LinkedList<zombie.scripting.objects.Fixing$FixerSkill>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfUse(): number;
    }
    /**
     * @customConstructor FixerSkill.new
     * @
     * [CLASS] zombie.scripting.objects.Fixing$FixerSkill
     */
    export class Fixing$FixerSkill {
      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string | null, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkillLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSkillName(): string;
    }
    /**
     * @customConstructor GameSoundScript.new
     * @
     * [CLASS] zombie.scripting.objects.GameSoundScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class GameSoundScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor Item.new
     * @
     * [CLASS] zombie.scripting.objects.Item extends zombie.scripting.objects.BaseScriptObject
     */
    export class Item {
      /** java.util.HashMap<java.lang.Integer, java.lang.String> */
      static NetIDToItem?: java.util.HashMap<number, string>;
      /** java.util.HashMap<java.lang.String, java.lang.Integer> */
      static NetItemToID?: java.util.HashMap<string, number>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      DoParam(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      InstanceItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAcceptItemFunction(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getActualWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAmmoType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characterTextures.BloodClothingType>
       */
      getBloodClothingType(): java.util.ArrayList<zombie.characterTextures.BloodClothingType>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBodyLocation(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoredomChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBreakSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBringToBearSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBulletOutSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getCanStoreWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCategories(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChanceToFall(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCloseSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClothingItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItem
       */
      getClothingItemAsset(): zombie.core.skinnedmodel.population.ClothingItem;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getClothingItemExtra(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getClothingItemExtraOption(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCookingSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCountDownSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomEatSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaysFresh(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaysTotallyRotten(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDoorDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDoorHitSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEatType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEjectAmmoSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEjectAmmoStartSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEjectAmmoStopSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEquipSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getExistsAsVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExplosionSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFabricType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFileAbsPath(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFillFromDispenserSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFillFromTapSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIcon(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getIconsForTexture(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getImpactSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInsertAmmoSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInsertAmmoStartSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInsertAmmoStopSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInsulation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKnockdownMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevelSkillTrained(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMapID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxHitCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxLevelTrained(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumSwingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutesToBurn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutesToCook(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModuleName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNPCSoundBoost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoiseDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getNormalTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumLevelsTrained(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfPages(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOpenSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOtherCharacterVolumeBoost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOtherHandRequire(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<string>
       */
      getPaletteChoices(): java.util.Stack<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPalettesStart(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPhysicsObject(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlaceMultipleSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlaceOneSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPushBackMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPutInSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecordedMediaCat(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRegistry_id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnDeplete(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUse(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getReplaceType(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceTypes(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, string>
       */
      getReplaceTypesMap(): java.util.HashMap<string, string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceWhenUnequip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShellFallSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSkillTrained(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getSoundByID(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getSoundParameter(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSoundRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSoundVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSplatNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpriteName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getStaticModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStressChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSwingAmountBeforeImpact(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSwingAnim(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSwingSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSwingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTags(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getTeachedRecipes(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTicksPerEquipUse(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getToHitModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Item$Type
       */
      getType(): zombie.scripting.objects.Item$Type;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUnequipSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappyChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUseDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterresist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWeaponSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeaponWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightEmpty(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightWet(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindresist(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasReplaceType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlcoholic(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysKnockdown(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysWelcomeGift(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAngleFalloff(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBandage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBarricade(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCantAttackWithLowestEndurance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCantEat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConditionAffectsCapacity(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCosmetic(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDangerousUncooked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisappearOnUse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHidden(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKnockBackOnNoDeath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isManuallyRemoveSpentRounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultipleHitConditionAffected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOtherHandUse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRangeFalloff(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRanged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShareDamage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShareEndurance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSplatBloodOnNoDeath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseEndurance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseSelf(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseWhileEquipped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseWhileUnequipped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWorldRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resolveItemTypes(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resolveModelScripts(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setActualWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlcoholic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysKnockdown(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysWelcomeGift(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAmmoType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAngleFalloff(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBodyLocation(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBoredomChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBandage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBarricade(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCantAttackWithLowestEndurance(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setCategories(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (ClothingItem arg0): void
       */
      setClothingItemAsset(arg0: zombie.core.skinnedmodel.population.ClothingItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setConditionLowerChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setConditionMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDangerousUncooked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDaysFresh(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDaysTotallyRotten(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDisappearOnUse(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDisplayName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDoorDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDoorHitSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setEnduranceChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setEnduranceMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHungerChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setIcon(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setImpactSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInsulation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsCookable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKnockBackOnNoDeath(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setKnockdownMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaCreate(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxHitCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinimumSwingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinutesToBurn(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinutesToCook(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModID(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMultipleHitConditionAffected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNPCSoundBoost(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOtherCharacterVolumeBoost(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOtherHandRequire(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOtherHandUse(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): void
       */
      setPaletteChoices(arg0: java.util.Stack<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPalettesStart(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPhysicsObject(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPushBackMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRangeFalloff(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRanged(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setRegistry_id(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnDeplete(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnUse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShareDamage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShareEndurance(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSoundRadius(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSoundVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSplatBloodOnNoDeath(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSplatNumber(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStressChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSwingAmountBeforeImpact(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSwingAnim(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSwingSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSwingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setThirstChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTicksPerEquipUse(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setToHitModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Type arg0): void
       */
      setType(arg0: zombie.scripting.objects.Item$Type): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUnhappyChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUseDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseEndurance(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseSelf(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseWhileEquipped(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseWhileUnequipped(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWaterresist(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWeaponSprite(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeaponWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeightEmpty(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeightWet(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindresist(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.scripting.objects.Item$Type */
    export class Item$Type {
      protected constructor();
      static readonly AlarmClock: zombie.scripting.objects.Item$Type;
      static readonly AlarmClockClothing: zombie.scripting.objects.Item$Type;
      static readonly Clothing: zombie.scripting.objects.Item$Type;
      static readonly Container: zombie.scripting.objects.Item$Type;
      static readonly Drainable: zombie.scripting.objects.Item$Type;
      static readonly Food: zombie.scripting.objects.Item$Type;
      static readonly Key: zombie.scripting.objects.Item$Type;
      static readonly KeyRing: zombie.scripting.objects.Item$Type;
      static readonly Literature: zombie.scripting.objects.Item$Type;
      static readonly Map: zombie.scripting.objects.Item$Type;
      static readonly Moveable: zombie.scripting.objects.Item$Type;
      static readonly Normal: zombie.scripting.objects.Item$Type;
      static readonly Radio: zombie.scripting.objects.Item$Type;
      static readonly Weapon: zombie.scripting.objects.Item$Type;
      static readonly WeaponPart: zombie.scripting.objects.Item$Type;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor ItemRecipe.new
     * @
     * [CLASS] zombie.scripting.objects.ItemRecipe
     */
    export class ItemRecipe {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, Integer arg2)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: number | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModule(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUse(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModule(arg0: string): void;
    }
    /**
     * @customConstructor ItemReplacement.new
     * @
     * [CLASS] zombie.scripting.objects.ItemReplacement
     */
    export class ItemReplacement {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor MannequinScript.new
     * @
     * [CLASS] zombie.scripting.objects.MannequinScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class MannequinScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimSet(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimState(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModelScriptName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutfit(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPose(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTexture(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAnimSet(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAnimState(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFemale(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModelScriptName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOutfit(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPose(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTexture(arg0: string): void;
    }
    /**
     * @customConstructor ModelAttachment.new
     * @
     * [CLASS] zombie.scripting.objects.ModelAttachment
     */
    export class ModelAttachment {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBone(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCanAttach(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getOffset(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getRotate(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUpdateConstraint(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBone(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setCanAttach(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUpdateConstraint(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZOffset(arg0: number): void;
    }
    /**
     * @customConstructor ModelScript.new
     * @
     * [CLASS] zombie.scripting.objects.ModelScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class ModelScript {
      /** java.lang.String */
      static readonly DEFAULT_SHADER_NAME?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (ModelAttachment arg0): zombie.scripting.objects.ModelAttachment
       */
      addAttachment(arg0: zombie.scripting.objects.ModelAttachment): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (int arg0, ModelAttachment arg1): zombie.scripting.objects.ModelAttachment
       */
      addAttachmentAt(arg0: number, arg1: zombie.scripting.objects.ModelAttachment): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachment(arg0: number): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachmentById(arg0: string): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAttachmentCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMeshName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShaderName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (boolean arg0): string
       */
      getTextureName(arg0?: boolean): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.ModelAttachment
       *  - (ModelAttachment arg0): zombie.scripting.objects.ModelAttachment
       */
      removeAttachment(arg0: number | zombie.scripting.objects.ModelAttachment): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static ScriptsLoaded(): void;
    }
    /**
     * @customConstructor ModelWeaponPart.new
     * @
     * [CLASS] zombie.scripting.objects.ModelWeaponPart
     */
    export class ModelWeaponPart {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor MovableRecipe.new
     * @
     * [CLASS] zombie.scripting.objects.MovableRecipe extends zombie.scripting.objects.Recipe
     */
    export class MovableRecipe {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      DoResult(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      DoSource(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): number
       */
      FindIndexOf(arg0: zombie.inventory.InventoryItem): number;
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      addRequiredSkill(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearRequiredSkills(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe$Source
       */
      findSource(arg0: string): zombie.scripting.objects.Recipe$Source;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCanPerform(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaGiveXP(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaGrab(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTest(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNearItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfNeededItem(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalname(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Recipe$Source
       */
      getPrimaryTools(): zombie.scripting.objects.Recipe$Source;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getProp1(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getProp2(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.Recipe$RequiredSkill
       */
      getRequiredSkill(arg0: number): zombie.scripting.objects.Recipe$RequiredSkill;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRequiredSkillCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequiredSkills(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Recipe$Result
       */
      getResult(): zombie.scripting.objects.Recipe$Result;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Recipe$Source
       */
      getSecondaryTools(): zombie.scripting.objects.Recipe$Source;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe$Source>
       */
      getSource(): java.util.ArrayList<zombie.scripting.objects.Recipe$Source>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeToMake(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterAmountNeeded(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.skills.PerkFactory$Perk
       */
      getXpPerk(): zombie.characters.skills.PerkFactory$Perk;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasXpPerk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowDestroyedItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowFrozenItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBeDoneFromFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isDestroy(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHidden(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isKeep(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoveResultItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopOnRun(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopOnWalk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needToBeLearn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      noBrokenItems(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowDestroyedItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowFrozenItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAnimNode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeDoneFromFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCanPerform(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsHidden(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaCreate(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaGiveXP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaGrab(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaTest(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setNearItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNeedToBeLearn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOnCreate(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOnXP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOriginalname(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setProp1(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setProp2(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRemoveResultItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      setRequiredSkill(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      setResult(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSource(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStopOnRun(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStopOnWalk(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setTool(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValid(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorldSprite(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       */
      setXpPerk(arg0: zombie.characters.skills.PerkFactory$Perk): void;
    }
    /**
     * @customConstructor Recipe.new
     * @
     * [CLASS] zombie.scripting.objects.Recipe extends zombie.scripting.objects.BaseScriptObject
     */
    export class Recipe {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      DoResult(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      DoSource(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): number
       */
      FindIndexOf(arg0: zombie.inventory.InventoryItem): number;
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      addRequiredSkill(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearRequiredSkills(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe$Source
       */
      findSource(arg0: string): zombie.scripting.objects.Recipe$Source;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCanPerform(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaGiveXP(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaGrab(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTest(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNearItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfNeededItem(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalname(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getProp1(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getProp2(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.Recipe$RequiredSkill
       */
      getRequiredSkill(arg0: number): zombie.scripting.objects.Recipe$RequiredSkill;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRequiredSkillCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequiredSkills(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Recipe$Result
       */
      getResult(): zombie.scripting.objects.Recipe$Result;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe$Source>
       */
      getSource(): java.util.ArrayList<zombie.scripting.objects.Recipe$Source>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeToMake(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterAmountNeeded(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowDestroyedItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowFrozenItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBeDoneFromFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isDestroy(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHidden(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isKeep(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoveResultItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopOnRun(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopOnWalk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needToBeLearn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      noBrokenItems(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowDestroyedItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowFrozenItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAnimNode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeDoneFromFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCanPerform(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsHidden(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaCreate(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaGiveXP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaGrab(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLuaTest(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setNearItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNeedToBeLearn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOriginalname(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setProp1(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setProp2(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRemoveResultItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStopOnRun(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStopOnWalk(arg0: boolean): void;
    }
    /**
     * @customConstructor RequiredSkill.new
     * @
     * [CLASS] zombie.scripting.objects.Recipe$RequiredSkill
     */
    export class Recipe$RequiredSkill {
      /**
       * Constructors: 
       *  - (Perk arg0, int arg1)
       */
      constructor(arg0: zombie.characters.skills.PerkFactory$Perk | null, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.skills.PerkFactory$Perk
       */
      getPerk(): zombie.characters.skills.PerkFactory$Perk;
    }
    /**
     * @customConstructor Result.new
     * @
     * [CLASS] zombie.scripting.objects.Recipe$Result
     */
    export class Recipe$Result {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDrainableCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModule(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDrainableCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
    }
    /**
     * @customConstructor Source.new
     * @
     * [CLASS] zombie.scripting.objects.Recipe$Source
     */
    export class Recipe$Source {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getItems(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnlyItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUse(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroy(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeep(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDestroy(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKeep(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUse(arg0: number): void;
    }
    /**
     * @customConstructor ScriptModule.new
     * @
     * [CLASS] zombie.scripting.objects.ScriptModule extends zombie.scripting.objects.BaseScriptObject
     */
    export class ScriptModule {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CheckExitPoints(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ParseScript(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ParseScriptPP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelScript
       */
      getModelScript(arg0: string): zombie.scripting.objects.ModelScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe
       */
      getRecipe(arg0: string): zombie.scripting.objects.Recipe;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript
       */
      getVehicle(arg0: string): zombie.scripting.objects.VehicleScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.VehicleEngineRPM
       */
      getVehicleEngineRPM(arg0: string): zombie.vehicles.VehicleEngineRPM;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleTemplate
       */
      getVehicleTemplate(arg0: string): zombie.scripting.objects.VehicleTemplate;
    }
    /**
     * @customConstructor SoundTimelineScript.new
     * @
     * [CLASS] zombie.scripting.objects.SoundTimelineScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class SoundTimelineScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEventName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getPosition(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor UniqueRecipe.new
     * @
     * [CLASS] zombie.scripting.objects.UniqueRecipe extends zombie.scripting.objects.BaseScriptObject
     */
    export class UniqueRecipe {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBaseRecipe(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoredomBonus(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHapinessBonus(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerBonus(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getItems(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBaseRecipe(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setBoredomBonus(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHapinessBonus(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHungerBonus(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
    }
    /**
     * @customConstructor VehicleScript.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class VehicleScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Loaded(): void;
      /**
       * Method Parameters: 
       *  - (ModelAttachment arg0): zombie.scripting.objects.ModelAttachment
       */
      addAttachment(arg0: zombie.scripting.objects.ModelAttachment): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (int arg0, ModelAttachment arg1): zombie.scripting.objects.ModelAttachment
       */
      addAttachmentAt(arg0: number, arg1: zombie.scripting.objects.ModelAttachment): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (VehicleScript arg0, String arg1): void
       */
      copyAreasFrom(arg0: zombie.scripting.objects.VehicleScript, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (VehicleScript arg0, String arg1): void
       */
      copyPartsFrom(arg0: zombie.scripting.objects.VehicleScript, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (VehicleScript arg0, String arg1): void
       */
      copyPassengersFrom(arg0: zombie.scripting.objects.VehicleScript, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (VehicleScript arg0, String arg1): void
       */
      copyWheelsFrom(arg0: zombie.scripting.objects.VehicleScript, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Area
       */
      getArea(arg0: number): zombie.scripting.objects.VehicleScript$Area;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Area
       */
      getAreaById(arg0: string): zombie.scripting.objects.VehicleScript$Area;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAreaCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachment(arg0: number): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachmentById(arg0: string): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAttachmentCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getCenterOfMassOffset(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): gnu.trove.list.array.TFloatArrayList
       */
      getCrawlOffsets(): gnu.trove.list.array.TFloatArrayList;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineForce(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineIdleSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineLoudness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEngineRPMType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineRepairLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getExtents(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       */
      getExtentsOffset(): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getForcedHue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getForcedSat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getForcedVal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFrontEndHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGearRatioCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getHasSiren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeadlightConfigLevel(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getIndexOfAreaById(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getIndexOfPartById(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getIndexOfWheelById(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$LightBar
       */
      getLightbar(): zombie.scripting.objects.VehicleScript$LightBar;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMechanicType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$Model
       */
      getModel(): zombie.scripting.objects.VehicleScript$Model;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Model
       *  - (String arg0, ArrayList arg1): zombie.scripting.objects.VehicleScript$Model
       */
      getModelById(arg0: string, arg1?: java.util.ArrayList<zombie.scripting.objects.VehicleScript$Model>): zombie.scripting.objects.VehicleScript$Model;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Model
       */
      getModelByIndex(arg0: number): zombie.scripting.objects.VehicleScript$Model;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getModelCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getModelOffset(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getModelScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffroadEfficiency(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Part
       */
      getPart(arg0: number): zombie.scripting.objects.VehicleScript$Part;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Part
       */
      getPartById(arg0: string): zombie.scripting.objects.VehicleScript$Part;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPartCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Passenger
       */
      getPassenger(arg0: number): zombie.scripting.objects.VehicleScript$Passenger;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Passenger
       */
      getPassengerById(arg0: string): zombie.scripting.objects.VehicleScript$Passenger;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPassengerCount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getPassengerIndex(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getPhysicsChassisShape(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$PhysicsShape
       */
      getPhysicsShape(arg0: number): zombie.scripting.objects.VehicleScript$PhysicsShape;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPhysicsShapeCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerDamageProtection(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRearEndHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRollInfluence(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeats(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       */
      getShadowExtents(): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       */
      getShadowOffset(): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Skin
       */
      getSkin(arg0: number): zombie.scripting.objects.VehicleScript$Skin;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$Sounds
       */
      getSounds(): zombie.scripting.objects.VehicleScript$Sounds;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      getSteeringClamp(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSteeringIncrement(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStorageCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionCompression(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionDamping(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionRestLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionStiffness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionTravel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$Skin
       */
      getTextures(): zombie.scripting.objects.VehicleScript$Skin;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Wheel
       */
      getWheel(arg0: number): zombie.scripting.objects.VehicleScript$Wheel;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Wheel
       */
      getWheelById(arg0: string): zombie.scripting.objects.VehicleScript$Wheel;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelFriction(): number;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      globMatch(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (ModelAttachment arg0): zombie.scripting.objects.ModelAttachment
       *  - (int arg0): zombie.scripting.objects.ModelAttachment
       */
      removeAttachment(arg0: zombie.scripting.objects.ModelAttachment | number): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setEngineRPMType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setEngineRepairLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForcedHue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForcedSat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForcedVal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMechanicType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setModelScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffroadEfficiency(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPlayerDamageProtection(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSeats(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      toBullet(): void;
    }
    /**
     * @customConstructor Anim.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Anim
     */
    export class VehicleScript$Anim {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Area.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Area
     */
    export class VehicleScript$Area {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Double arg0): void
       */
      setH(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Double arg0): void
       */
      setW(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Double arg0): void
       */
      setY(arg0: number): void;
    }
    /**
     * @customConstructor Container.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Container
     */
    export class VehicleScript$Container {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Door.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Door
     */
    export class VehicleScript$Door {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor LightBar.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$LightBar
     */
    export class VehicleScript$LightBar {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Model.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Model
     */
    export class VehicleScript$Model {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getOffset(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getRotate(): org.joml.Vector3f;
    }
    /**
     * @customConstructor Part.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Part
     */
    export class VehicleScript$Part {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMechanicRequireKey(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRepairMechanic(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMechanicRequireKey(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRepairMechanic(arg0: boolean): void;
    }
    /**
     * @customConstructor Passenger.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Passenger
     */
    export class VehicleScript$Passenger {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.VehicleScript$Position
       */
      getPosition(arg0: number): zombie.scripting.objects.VehicleScript$Position;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Position
       */
      getPositionById(arg0: string): zombie.scripting.objects.VehicleScript$Position;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPositionCount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat
       */
      getSwitchSeatById(arg0: string): zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$Passenger
       */
      makeCopy(): zombie.scripting.objects.VehicleScript$Passenger;
    }
    /**
     * @customConstructor SwitchSeat.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat
     */
    export class VehicleScript$Passenger$SwitchSeat {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat
       */
      makeCopy(): zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat;
    }
    /**
     * @customConstructor PhysicsShape.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$PhysicsShape
     */
    export class VehicleScript$PhysicsShape {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getExtents(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getOffset(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getRotate(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRadius(arg0: number): void;
    }
    /**
     * @customConstructor Position.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Position
     */
    export class VehicleScript$Position {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getArea(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getOffset(): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getRotate(): org.joml.Vector3f;
    }
    /**
     * @customConstructor Skin.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Skin
     */
    export class VehicleScript$Skin {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Skin arg0): void
       */
      copyMissingFrom(arg0: zombie.scripting.objects.VehicleScript$Skin): void;
    }
    /**
     * @customConstructor Sounds.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Sounds
     */
    export class VehicleScript$Sounds {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Wheel.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Wheel
     */
    export class VehicleScript$Wheel {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      getOffset(): org.joml.Vector3f;
    }
    /**
     * @customConstructor Window.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleScript$Window
     */
    export class VehicleScript$Window {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor VehicleTemplate.new
     * @
     * [CLASS] zombie.scripting.objects.VehicleTemplate extends zombie.scripting.objects.BaseScriptObject
     */
    export class VehicleTemplate {
      /**
       * Constructors: 
       *  - (ScriptModule arg0, String arg1, String arg2)
       */
      constructor(arg0: zombie.scripting.objects.ScriptModule | null, arg1: string | null, arg2: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript
       */
      getScript(): zombie.scripting.objects.VehicleScript;
    }
  }
}
