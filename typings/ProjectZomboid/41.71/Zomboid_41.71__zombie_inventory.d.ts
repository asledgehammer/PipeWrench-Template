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
 * File generated at Friday July 2022 15:18:33.635-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.inventory {
    /**
     * @customConstructor FixingManager.new
     * @
     * [CLASS] zombie.inventory.FixingManager
     */
    export class FixingManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, Fixing arg2, Fixer arg3): zombie.inventory.InventoryItem
       */
      static fixItem(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.scripting.objects.Fixing, arg3: zombie.scripting.objects.Fixing$Fixer): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, Fixing arg2, Fixer arg3): number
       */
      static getChanceOfFail(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.scripting.objects.Fixing, arg3: zombie.scripting.objects.Fixing$Fixer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, Fixing arg2, Fixer arg3): number
       */
      static getCondRepaired(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.scripting.objects.Fixing, arg3: zombie.scripting.objects.Fixing$Fixer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): java.util.ArrayList<zombie.scripting.objects.Fixing>
       */
      static getFixes(arg0: zombie.inventory.InventoryItem): java.util.ArrayList<zombie.scripting.objects.Fixing>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Fixer arg1, InventoryItem arg2): void
       */
      static useFixer(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.scripting.objects.Fixing$Fixer, arg2: zombie.inventory.InventoryItem): void;
    }
    /**
     * @customConstructor InventoryItem.new
     * @
     * [CLASS] zombie.inventory.InventoryItem
     */
    export class InventoryItem {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, Item arg3)
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: string | null, arg3: zombie.scripting.objects.Item | string | null);
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      CanStack(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      CopyModData(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      HowRotten(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsClothing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsDrainable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsFood(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsInventoryContainer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsLiterature(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsMap(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsRotten(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      ModDataMatches(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      SetContainerPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1): void
       */
      Use(arg0?: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UseItem(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addExtraItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowRandomTint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeRemote(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canEmitLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canStoreWater(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyConditionModData(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      copyModData(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doBuildingStash(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finishupdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getActualWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcoholPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAlternateModelName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAmmoType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAttachedSlot(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachedSlotType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachedToModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachmentReplacement(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachmentType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAttachmentsProvided(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBandagePower(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBlood(arg0: zombie.characterTextures.BloodBodyPartType): number;
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
       *  - (Empty): number
       */
      getBrakeForce(): number;
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
      getBurntString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      getByteData(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemType
       */
      getCat(): zombie.inventory.ItemType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChanceToSpawnDamaged(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): string
       */
      getCleanString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItem
       */
      getClothingItem(): zombie.core.skinnedmodel.population.ClothingItem;
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
       *  - (Empty): string
       */
      getClothingItemName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getColorInfo(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerNormal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerOffroad(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getConsolidateOption(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContentsWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCookedString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCookingTime(): number;
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
       *  - (Empty): number
       */
      getCurrentAmmoCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomMenuOption(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getDirt(arg0: zombie.characterTextures.BloodBodyPartType): number;
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
       *  - (Empty): string
       */
      getEatType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineLoudness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getEquipParent(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEquipSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEquippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEvolvedRecipeName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExplosionSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getExtraItems(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExtraItemsWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFabricType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueChange(): number;
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
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGunType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHaveBeenRepaired(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHotbarEquippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getIconsForTexture(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInvHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ItemReplacement
       */
      getItemReplacementPrimaryHand(): zombie.scripting.objects.ItemReplacement;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ItemReplacement
       */
      getItemReplacementSecondHand(): zombie.scripting.objects.ItemReplacement;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getItemWhenDry(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJobDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getJobType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastAged(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMakeUpType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxAmmo(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMechanicType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.media.MediaData
       */
      getMediaData(): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMediaType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeltingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetalValue(): number;
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
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModName(): string;
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
       *  - (Empty): zombie.iso.IsoDirections
       */
      getNewPlaceDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffAgeMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOffString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getOutermostContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getPlaceDir(): zombie.iso.IsoDirections;
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
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getPreviousOwner(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecordedMediaIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReduceInfectionPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRegistry_id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemoteControlID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemoteRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUse(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUseFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUseOn(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUseOnString(): string;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequireInHandOrInventory(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getRightClickContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSaveType(): number;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): number
       */
      getScore(arg0: zombie.characters.SurvivorDesc): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Item
       */
      getScriptItem(): zombie.scripting.objects.Item;
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
      getStashChance(): number;
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
       *  - (Empty): string
       */
      getStringItemType(): string;
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
       *  - (Empty): string
       */
      getSwingAnim(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTags(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getTaken(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTex(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTextureBurnt(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTextureCooked(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexturerotten(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTorchDot(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUnCookedString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUnequipSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnequippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappyChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisual
       */
      getVisual(): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetCooldown(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelFriction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorker(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoWorldInventoryObject
       */
      getWorldItem(): zombie.iso.objects.IsoWorldInventoryObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldStaticItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldTexture(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBlood(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasDirt(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasReplaceType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveExtraItems(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initialiseItem(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlcoholic(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysWelcomeGift(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingFilled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBroken(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBurnt(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBandage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConditionAffectsCapacity(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCooked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomColor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomName(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomWeight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisappearOnUse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmittingLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEquipped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEquippedNoSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFavorite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFishingLure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHairDye(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHidden(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInLocalPlayerInventory(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInPlayerInventory(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInfected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInitialised(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProtectFromRainWhileEquipped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecordedMedia(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoteController(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresEquippedBothHands(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTaintedWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTorchCone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTrap(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTwoHandWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseWorldItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWet(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      saveWithSize(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActivated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActivatedRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setActualWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlcoholPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlcoholic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAmmoType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAttachedSlot(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachedSlotType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachedToModel(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachmentReplacement(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachmentType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setAttachmentsProvided(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setAutoAge(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBandagePower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBeingFilled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setBlood(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setBloodClothingType(arg0: java.util.ArrayList<zombie.characterTextures.BloodClothingType>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBoredomChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBrakeForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBreakSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBroken(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBurnt(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBurntString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeActivated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): void
       */
      setCat(arg0: zombie.inventory.ItemType): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChanceToSpawnDamaged(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setColor(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColorBlue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColorGreen(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColorRed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setCondition(arg0: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setConditionFromModData(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setConditionLowerNormal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setConditionLowerOffroad(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setConditionMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setContainerX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setContainerY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCooked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCookedString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCookingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCountDownSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentAmmoCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomColor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCustomMenuOption(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomName(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomWeight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDisplayCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setEngineLoudness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setEquipParent(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setEvolvedRecipeName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setExplosionSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFatigueChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFavorite(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGunType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHaveBeenRepaired(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setIconsForTexture(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInfected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInitialised(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsCookable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsWaterSource(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setItemCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setItemHeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setItemWhenDry(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setJobDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setJobType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastAged(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightDistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxAmmo(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      setMediaType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMeltingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMetalValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinutesToBurn(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinutesToCook(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setNewPlaceDir(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffAgeMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOffString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setPlaceDir(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setPreviousOwner(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (MediaData arg0): void
       */
      setRecordedMediaData(arg0: zombie.radio.media.MediaData): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setRecordedMediaIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRecordedMediaIndexInteger(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReduceInfectionPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setRegistry_id(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemoteControlID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRemoteController(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemoteRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnUse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnUseOn(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setRequireInHandOrInventory(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setRightClickContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setScriptItem(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStashChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setStashMap(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStressChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSuspensionCompression(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSuspensionDamping(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTaintedWater(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setTaken(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTextureBurnt(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTextureCooked(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexturerotten(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTooltip(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTorchCone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUnCookedString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUnhappyChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setUses(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWet(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWetCooldown(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWheelFriction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorker(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldInventoryObject arg0): void
       */
      setWorldItem(arg0: zombie.iso.objects.IsoWorldInventoryObject): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWorldScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorldTexture(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWorldZRotation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldUpdateInWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      storeInByteData(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      synchWithVisual(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateAge(): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      updateSound(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.inventory.InventoryItem
       *  - (ByteBuffer arg0, int arg1, boolean arg2): zombie.inventory.InventoryItem
       */
      static loadItem(arg0: java.nio.ByteBuffer, arg1: number, arg2?: boolean): zombie.inventory.InventoryItem;
    }
    /**
     * @customConstructor InventoryItemFactory.new
     * @
     * [CLASS] zombie.inventory.InventoryItemFactory
     */
    export class InventoryItemFactory {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): zombie.inventory.InventoryItem
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (String arg0, float arg1): zombie.inventory.InventoryItem
       *  - (String arg0, Food arg1): zombie.inventory.InventoryItem
       *  - (String arg0, float arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (String arg0, float arg1, String arg2): zombie.inventory.InventoryItem
       *  - (String arg0, String arg1, String arg2, String arg3): zombie.inventory.InventoryItem
       */
      static CreateItem(arg0: number | string, arg1?: number | zombie.inventory.types.Food | string, arg2?: boolean | string, arg3?: string): zombie.inventory.InventoryItem;
    }
    /**
     * @customConstructor ItemContainer.new
     * @
     * [CLASS] zombie.inventory.ItemContainer
     */
    export class ItemContainer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2)
       *  - (int arg0, String arg1, IsoGridSquare arg2, IsoObject arg3)
       */
      constructor(arg0?: number | string, arg1?: zombie.iso.IsoGridSquare | string | null, arg2?: zombie.iso.IsoObject | zombie.iso.IsoGridSquare | null, arg3?: zombie.iso.IsoObject | null);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (String arg0, float arg1): boolean
       */
      AddItem(arg0: string | zombie.inventory.InventoryItem, arg1?: number): zombie.inventory.InventoryItem | boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      AddItemBlind(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (InventoryItem arg0, int arg1): void
       */
      AddItems(arg0: string | zombie.inventory.InventoryItem, arg1: number): java.util.ArrayList<zombie.inventory.InventoryItem> | void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      DoAddItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      DoAddItemBlind(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      DoRemoveItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): zombie.inventory.InventoryItem
       */
      Find(arg0: zombie.inventory.ItemType): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      FindAll(arg0: string): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (String arg0, ArrayList arg1): zombie.inventory.InventoryItem
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      FindAndReturn(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem> | number): zombie.inventory.InventoryItem | java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      FindAndReturnCategory(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      FindAndReturnStack(arg0: zombie.inventory.InventoryItem | string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      FindAndReturnWaterItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      FindWaterSource(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): boolean
       */
      HasType(arg0: zombie.inventory.ItemType): boolean;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): zombie.inventory.InventoryItem
       *  - (String arg0): void
       *  - (InventoryItem arg0): void
       */
      Remove(arg0: zombie.inventory.ItemType | string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem | void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      RemoveAll(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): boolean
       */
      RemoveOneOf(arg0: string, arg1?: boolean): void | boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      addItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      addItemOnServer(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addItemsToProcessItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (String arg0): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       *  - (String arg0, boolean arg1): boolean
       *  - (String arg0, boolean arg1, boolean arg2): boolean
       */
      contains(arg0: zombie.inventory.InventoryItem | string, arg1?: boolean, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): boolean
       */
      containsEval(arg0: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): boolean
       */
      containsEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): boolean
       */
      containsEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): boolean
       */
      containsEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      containsID(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsRecursive(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): boolean
       */
      containsTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): boolean
       */
      containsTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): boolean
       */
      containsTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsTagRecurse(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): boolean
       */
      containsTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): boolean
       */
      containsTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsTypeRecurse(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      containsWithModule(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      emptyIt(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAcceptItemFunction(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAgeFactor(): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (Predicate arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAll(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllCategory(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllCategoryRecurse(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEval(arg0: se.krka.kahlua.vm.LuaClosure, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LinkedHashMap arg0, boolean arg1): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>
       */
      getAllItems(arg0: java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>, arg1: boolean): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTag(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagRecurse(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllType(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeRecurse(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllWaterFillables(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBest(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): zombie.inventory.InventoryItem
       */
      getBestBandage(arg0: zombie.characters.SurvivorDesc): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getBestCondition(arg0: string | java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getBestConditionEval(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getBestConditionEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getBestConditionEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getBestConditionEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getBestConditionRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem> | string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestEval(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): zombie.inventory.InventoryItem
       */
      getBestFood(arg0: zombie.characters.SurvivorDesc): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBestRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBestType(arg0: string, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBestTypeRecurse(arg0: string, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (SurvivorDesc arg0): zombie.inventory.InventoryItem
       */
      getBestWeapon(arg0?: zombie.characters.SurvivorDesc): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacityWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCloseSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getContainerPosition(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getContainingItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContentsWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCookingFactor(): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      getCount(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): number
       */
      getCountEval(arg0: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): number
       */
      getCountEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): number
       */
      getCountEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): number
       */
      getCountEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      getCountRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountTag(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTagEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountTagRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountType(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountTypeRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCustomTemperature(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getEffectiveCapacity(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getFirst(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstCategory(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstCategoryRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getFirstEval(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getFirstEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getFirstEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getFirstEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getFirstRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstTag(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getFirstTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstTagRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstType(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getFirstTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstTypeRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFreezerPosition(): string;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.inventory.InventoryItem
       */
      getItemById(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       */
      getItemCount(arg0: string, arg1?: boolean): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getItemCountFromTypeRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getItemCountRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (String arg0, boolean arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGameCharacter arg1, boolean arg2, boolean arg3, boolean arg4): zombie.inventory.InventoryItem
       */
      getItemFromType(arg0: string, arg1?: boolean | zombie.characters.IsoGameCharacter, arg2?: boolean, arg3?: boolean, arg4?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getItemFromTypeRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getItemWithID(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getItemWithIDRecursiv(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>
       */
      getItems4Admin(): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsFromCategory(arg0: string): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, boolean arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsFromFullType(arg0: string, arg1?: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, boolean arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsFromType(arg0: string, arg1?: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeight(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getNumItems(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, boolean arg1, boolean arg2): number
       *  - (String arg0, boolean arg1, ArrayList arg2): number
       */
      getNumberOfItem(arg0: string, arg1?: boolean, arg2?: boolean | java.util.ArrayList<zombie.inventory.ItemContainer>): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnlyAcceptCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOpenSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getParent(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPutSound(): string;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSome(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: number, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeCategory(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeCategoryRecurse(arg0: string, arg1: number, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEval(arg0: se.krka.kahlua.vm.LuaClosure, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: number, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTag(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagRecurse(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeType(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeRecurse(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSourceGrid(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemprature(): number;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): number
       */
      getTotalFoodScore(arg0: zombie.characters.SurvivorDesc): number;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): number
       */
      getTotalWeaponScore(arg0: zombie.characters.SurvivorDesc): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      getUsesRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getUsesType(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getUsesTypeRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getVehiclePart(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterContainerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightReduction(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): boolean
       *  - (IsoGameCharacter arg0, InventoryItem arg1): boolean
       */
      hasRoomFor(arg0: zombie.characters.IsoGameCharacter, arg1: number | zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      haveThisKeyId(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDrawDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistYet(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExplored(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasBeenLooted(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isInCharacterInventory(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isInside(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsDevice(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isItemAllowed(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMicrowave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPowered(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isRemoveItemAllowed(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTemperatureChanging(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllItems(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      removeItemOnServer(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      removeItemWithID(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      removeItemWithIDRecurse(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeItemsFromProcessItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      requestServerItemsForContainer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      requestSync(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ByteBuffer arg0, IsoGameCharacter arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      save(arg0: java.nio.ByteBuffer, arg1?: zombie.characters.IsoGameCharacter): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (UdpConnection arg0): void
       */
      sendContentsToRemoteContainer(arg0?: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAcceptItemFunction(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAgeFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCloseSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setContainerPosition(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCookingFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCustomTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDirty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDrawDirty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFreezerPosition(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasBeenLooted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsDevice(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOnlyAcceptCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOpenSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setParent(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPutSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSourceGrid(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWeightReduction(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static floatingPointCorrection(arg0: number): number;
    }
    /**
     * @customConstructor ItemPickerJava.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava
     */
    export class ItemPickerJava {
      /** java.util.ArrayList<java.lang.String> */
      static readonly NoContainerFillRooms?: java.util.ArrayList<string>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerContainer> */
      static readonly ProceduralDistributions?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerContainer>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$VehicleDistribution> */
      static readonly VehicleDistributions?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$VehicleDistribution>;
      /** java.util.HashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons> */
      static readonly WeaponUpgradeMap?: java.util.HashMap<string, zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons>;
      /** java.util.ArrayList<zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons> */
      static readonly WeaponUpgrades?: java.util.ArrayList<zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerContainer> */
      static readonly containers?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerContainer>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerRoom> */
      static readonly rooms?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerRoom>;
      /** float */
      static zombieDensityCap: number;

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
      static InitSandboxLootSettings(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Parse(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static doOverlaySprite(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerContainer arg0, ItemContainer arg1, float arg2, IsoGameCharacter arg3, boolean arg4, boolean arg5, ItemPickerRoom arg6): void
       */
      static doRollItem(arg0: zombie.inventory.ItemPickerJava$ItemPickerContainer, arg1: zombie.inventory.ItemContainer, arg2: number, arg3: zombie.characters.IsoGameCharacter, arg4: boolean, arg5: boolean, arg6: zombie.inventory.ItemPickerJava$ItemPickerRoom): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoPlayer arg1): void
       */
      static fillContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerRoom arg0, ItemContainer arg1, String arg2, IsoGameCharacter arg3): void
       */
      static fillContainerType(arg0: zombie.inventory.ItemPickerJava$ItemPickerRoom, arg1: zombie.inventory.ItemContainer, arg2: string, arg3: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, boolean arg3): zombie.inventory.ItemPickerJava$ItemPickerContainer
       */
      static getItemContainer(arg0: string, arg1: string, arg2: string, arg3: boolean): zombie.inventory.ItemPickerJava$ItemPickerContainer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getLootModifier(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryContainer arg0, IsoGameCharacter arg1, ItemPickerContainer arg2): void
       */
      static rollContainerItem(arg0: zombie.inventory.types.InventoryContainer, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.ItemPickerJava$ItemPickerContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerContainer arg0, ItemContainer arg1, boolean arg2, IsoGameCharacter arg3, ItemPickerRoom arg4): void
       */
      static rollItem(arg0: zombie.inventory.ItemPickerJava$ItemPickerContainer, arg1: zombie.inventory.ItemContainer, arg2: boolean, arg3: zombie.characters.IsoGameCharacter, arg4: zombie.inventory.ItemPickerJava$ItemPickerRoom): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, String arg1, ItemPickerContainer arg2): zombie.inventory.InventoryItem
       */
      static tryAddItemToContainer(arg0: zombie.inventory.ItemContainer, arg1: string, arg2: zombie.inventory.ItemPickerJava$ItemPickerContainer): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static updateOverlaySprite(arg0: zombie.iso.IsoObject): void;
    }
    /**
     * @customConstructor ItemPickerContainer.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerContainer
     */
    export class ItemPickerJava$ItemPickerContainer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemPickerItem.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerItem
     */
    export class ItemPickerJava$ItemPickerItem {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemPickerRoom.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerRoom
     */
    export class ItemPickerJava$ItemPickerRoom {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemPickerUpgradeWeapons.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons
     */
    export class ItemPickerJava$ItemPickerUpgradeWeapons {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ProceduralItem.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ProceduralItem
     */
    export class ItemPickerJava$ProceduralItem {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor VehicleDistribution.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$VehicleDistribution
     */
    export class ItemPickerJava$VehicleDistribution {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /** [ENUM] zombie.inventory.ItemType */
    export class ItemType {
      protected constructor();
      static readonly AlarmClock: zombie.inventory.ItemType;
      static readonly AlarmClockClothing: zombie.inventory.ItemType;
      static readonly Clothing: zombie.inventory.ItemType;
      static readonly Drainable: zombie.inventory.ItemType;
      static readonly Food: zombie.inventory.ItemType;
      static readonly Key: zombie.inventory.ItemType;
      static readonly KeyRing: zombie.inventory.ItemType;
      static readonly Literature: zombie.inventory.ItemType;
      static readonly Moveable: zombie.inventory.ItemType;
      static readonly None: zombie.inventory.ItemType;
      static readonly Weapon: zombie.inventory.ItemType;
      name(): string;
      ordinal(): number;
      index(): number;

    }
    /**
     * @customConstructor RecipeManager.new
     * @
     * [CLASS] zombie.inventory.RecipeManager
     */
    export class RecipeManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Recipe arg1): boolean
       */
      static DoesUseItemUp(arg0: string, arg1: zombie.scripting.objects.Recipe): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      static DoesWipeUseDelta(arg0: string, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0, Recipe arg1, InventoryItem arg2, IsoGameCharacter arg3, ArrayList arg4): zombie.inventory.InventoryItem
       */
      static GetMovableRecipeTool(arg0: boolean, arg1: zombie.scripting.objects.Recipe, arg2: zombie.inventory.InventoryItem, arg3: zombie.characters.IsoGameCharacter, arg4: java.util.ArrayList<zombie.inventory.ItemContainer>): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, InventoryItem arg2, ArrayList arg3): boolean
       */
      static HasAllRequiredItems(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Recipe arg1): boolean
       */
      static IsItemDestroyed(arg0: string, arg1: zombie.scripting.objects.Recipe): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, InventoryItem arg2, ArrayList arg3): boolean
       */
      static IsRecipeValid(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Loaded(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static LoadedAfterLua(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, InventoryItem arg1, IsoGameCharacter arg2, ArrayList arg3): zombie.inventory.InventoryItem
       */
      static PerformMakeItem(arg0: zombie.scripting.objects.Recipe, arg1: zombie.inventory.InventoryItem, arg2: zombie.characters.IsoGameCharacter, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Recipe arg1, IsoGameCharacter arg2): number
       */
      static UseAmount(arg0: string, arg1: zombie.scripting.objects.Recipe, arg2: zombie.characters.IsoGameCharacter): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>
       */
      static getAllEvolvedRecipes(): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getAvailableItemsAll(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getAvailableItemsNeeded(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe
       */
      static getDismantleRecipeFor(arg0: string): zombie.scripting.objects.Recipe;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, ArrayList arg2, boolean arg3): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>
       */
      static getEvolvedRecipe(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: boolean): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      static getKnownRecipesNumber(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3): number
       */
      static getNumberOfTimesRecipeCanBeDone(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, int arg1, IsoGameCharacter arg2, ArrayList arg3, InventoryItem arg4, ArrayList arg5): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getSourceItemsAll(arg0: zombie.scripting.objects.Recipe, arg1: number, arg2: zombie.characters.IsoGameCharacter, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>, arg4: zombie.inventory.InventoryItem, arg5: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, int arg1, IsoGameCharacter arg2, ArrayList arg3, InventoryItem arg4, ArrayList arg5): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getSourceItemsNeeded(arg0: zombie.scripting.objects.Recipe, arg1: number, arg2: zombie.characters.IsoGameCharacter, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>, arg4: zombie.inventory.InventoryItem, arg5: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, ArrayList arg2): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      static getUniqueRecipeItems(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, InventoryItem arg1, ArrayList arg2, IsoGameCharacter arg3): boolean
       */
      static hasHeat(arg0: zombie.scripting.objects.Recipe, arg1: zombie.inventory.InventoryItem, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.characters.IsoGameCharacter): boolean;
    }
  }
}
