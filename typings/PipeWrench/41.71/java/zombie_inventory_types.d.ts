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
  export namespace zombie.inventory.types {
    /**
     * @customConstructor AlarmClock.new
     * @
     * [CLASS] zombie.inventory.types.AlarmClock extends zombie.inventory.InventoryItem
     */
    export class AlarmClock {
      /** short */
      static PacketPlayer: number;
      /** short */
      static PacketWorld: number;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
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
       *  - (Empty): string
       */
      getAlarmSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getAlarmSquare(): zombie.iso.IsoGridSquare;
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
      getHour(): number;
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
      getMinute(): number;
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
      getSoundRadius(): number;
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
      isAlarmSet(): boolean;
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
      isDigital(): boolean;
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
      isRinging(): boolean;
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
       *  - (boolean arg0): void
       */
      setAlarmSet(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAlarmSound(arg0: string): void;
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
      setHour(arg0: number): void;
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
       *  - (int arg0): void
       */
      setMinute(arg0: number): void;
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
      setSoundRadius(arg0: number): void;
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
       *  - (Empty): void
       */
      stopRinging(): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      storeInByteData(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncAlarmClock(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      syncAlarmClock_Player(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncAlarmClock_World(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncStopRinging(): void;
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
     * @customConstructor AlarmClockClothing.new
     * @
     * [CLASS] zombie.inventory.types.AlarmClockClothing extends zombie.inventory.types.Clothing
     */
    export class AlarmClockClothing {
      /** short */
      static PacketPlayer: number;
      /** short */
      static PacketWorld: number;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5)
       *  - (String arg0, String arg1, String arg2, Item arg3, String arg4, String arg5)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item, arg4: string, arg5: string);
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
       */
      Unwear(): void;
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
       *  - (IsoGameCharacter arg0, BloodBodyPartType arg1, InventoryItem arg2): void
       */
      addPatch(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characterTextures.BloodBodyPartType, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowRandomTint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBe3DRender(): boolean;
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
       *  - (IsoGameCharacter arg0, BloodBodyPartType arg1, InventoryItem arg2): boolean
       */
      canFullyRestore(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characterTextures.BloodBodyPartType, arg2: zombie.inventory.InventoryItem): boolean;
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
       *  - (Clothing arg0): void
       */
      copyPatchesTo(arg0: zombie.inventory.types.Clothing): void;
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
       *  - (Empty): void
       */
      flushWetness(): void;
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
       *  - (Empty): string
       */
      getAlarmSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getAlarmSquare(): zombie.iso.IsoGridSquare;
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
       *  - (Empty): number
       */
      getBiteDefense(): number;
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
       *  - (Empty): number
       */
      getBloodLevel(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBloodLevelForPart(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodlevel(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBloodlevelForPart(arg0: zombie.characterTextures.BloodBodyPartType): number;
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
       *  - (Empty): number
       */
      getBulletDefense(): number;
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
       *  - (Empty): boolean
       */
      getCanHaveHoles(): boolean;
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
      getChanceToFall(): number;
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
       *  - (Empty): number
       */
      getClothingDirtynessIncreaseLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClothingExtraSubmenu(): string;
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
      getCombatSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondLossPerHole(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerChance(): number;
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
       *  - (Empty): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>
       */
      getCoveredParts(): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>;
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
       *  - (BloodBodyPartType arg0, boolean arg1, boolean arg2): number
       */
      getDefForPart(arg0: zombie.characterTextures.BloodBodyPartType, arg1: boolean, arg2: boolean): number;
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
       *  - (Empty): number
       */
      getDirtyness(): number;
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
      getHolesNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHotbarEquippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHour(): number;
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
      getInsulation(): number;
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
      getMinute(): number;
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
       *  - (Empty): number
       */
      getNbrOfCoveredParts(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNeckProtectionModifier(): number;
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
       *  - (Empty): string
       */
      getPalette(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): zombie.inventory.types.Clothing$ClothingPatch
       */
      getPatchType(arg0: zombie.characterTextures.BloodBodyPartType): zombie.inventory.types.Clothing$ClothingPatch;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatchesNumber(): number;
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
      getRunSpeedModifier(): number;
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
       *  - (Empty): number
       */
      getScratchDefense(): number;
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
      getSoundRadius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpriteName(): string;
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
      getStompPower(): number;
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
       *  - (Empty): number
       */
      getTemperature(): number;
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
      getWaterResistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightWet(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetCooldown(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelFriction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindresistance(): number;
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
      isAlarmSet(): boolean;
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
      isBloody(): boolean;
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
      isCosmetic(): boolean;
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
      isDigital(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
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
      isRemoveOnBroken(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresEquippedBothHands(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRinging(): boolean;
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
       *  - (BloodBodyPartType arg0): void
       */
      removePatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
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
       *  - (boolean arg0): void
       */
      setAlarmSet(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAlarmSound(arg0: string): void;
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
       *  - (float arg0): void
       */
      setBiteDefense(arg0: number): void;
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
      setBloodLevel(arg0: number): void;
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
       *  - (float arg0): void
       */
      setBulletDefense(arg0: number): void;
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
       *  - (Boolean arg0): void
       */
      setCanHaveHoles(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): void
       */
      setCat(arg0: zombie.inventory.ItemType): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChanceToFall(arg0: number): void;
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
       *  - (float arg0): void
       */
      setCombatSpeedModifier(arg0: number): void;
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
       *  - (int arg0): void
       */
      setConditionLowerChance(arg0: number): void;
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
       *  - (float arg0): void
       */
      setDirtyness(arg0: number): void;
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
      setHour(arg0: number): void;
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
       *  - (int arg0): void
       */
      setMinute(arg0: number): void;
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
       *  - (float arg0): void
       */
      setNeckProtectionModifier(arg0: number): void;
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
       *  - (String arg0): void
       */
      setPalette(arg0: string): void;
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
       *  - (Boolean arg0): void
       */
      setRemoveOnBroken(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setRunSpeedModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScratchDefense(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setScriptItem(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSoundRadius(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteName(arg0: string): void;
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
      setStompPower(arg0: number): void;
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
       *  - (float arg0): void
       */
      setTemperature(arg0: number): void;
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
      setWaterResistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeightWet(arg0: number): void;
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
      setWetness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWheelFriction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindresistance(arg0: number): void;
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
       *  - (Empty): void
       */
      stopRinging(): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      storeInByteData(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncAlarmClock(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      syncAlarmClock_Player(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncAlarmClock_World(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncStopRinging(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      synchWithVisual(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
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
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      updateWetness(arg0?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.types.Clothing
       */
      static CreateFromSprite(arg0: string): zombie.inventory.types.Clothing;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1): number
       */
      static getBiteDefenseFromItem(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1): number
       */
      static getScratchDefenseFromItem(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem): number;
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
     * @customConstructor Clothing.new
     * @
     * [CLASS] zombie.inventory.types.Clothing extends zombie.inventory.InventoryItem
     */
    export class Clothing {
      /** int */
      static readonly CONDITION_PER_HOLES: number;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, Item arg3, String arg4, String arg5)
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: zombie.scripting.objects.Item | string, arg4: string, arg5: string);
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
       */
      Unwear(): void;
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
       *  - (IsoGameCharacter arg0, BloodBodyPartType arg1, InventoryItem arg2): void
       */
      addPatch(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characterTextures.BloodBodyPartType, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowRandomTint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBe3DRender(): boolean;
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
       *  - (IsoGameCharacter arg0, BloodBodyPartType arg1, InventoryItem arg2): boolean
       */
      canFullyRestore(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characterTextures.BloodBodyPartType, arg2: zombie.inventory.InventoryItem): boolean;
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
       *  - (Clothing arg0): void
       */
      copyPatchesTo(arg0: zombie.inventory.types.Clothing): void;
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
       *  - (Empty): void
       */
      flushWetness(): void;
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
       *  - (Empty): number
       */
      getBiteDefense(): number;
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
       *  - (Empty): number
       */
      getBloodLevel(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBloodLevelForPart(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodlevel(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBloodlevelForPart(arg0: zombie.characterTextures.BloodBodyPartType): number;
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
       *  - (Empty): number
       */
      getBulletDefense(): number;
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
       *  - (Empty): boolean
       */
      getCanHaveHoles(): boolean;
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
      getChanceToFall(): number;
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
       *  - (Empty): number
       */
      getClothingDirtynessIncreaseLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClothingExtraSubmenu(): string;
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
      getCombatSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondLossPerHole(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerChance(): number;
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
       *  - (Empty): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>
       */
      getCoveredParts(): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>;
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
       *  - (BloodBodyPartType arg0, boolean arg1, boolean arg2): number
       */
      getDefForPart(arg0: zombie.characterTextures.BloodBodyPartType, arg1: boolean, arg2: boolean): number;
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
       *  - (Empty): number
       */
      getDirtyness(): number;
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
      getHolesNumber(): number;
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
      getInsulation(): number;
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
       *  - (Empty): number
       */
      getNbrOfCoveredParts(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNeckProtectionModifier(): number;
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
       *  - (Empty): string
       */
      getPalette(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): zombie.inventory.types.Clothing$ClothingPatch
       */
      getPatchType(arg0: zombie.characterTextures.BloodBodyPartType): zombie.inventory.types.Clothing$ClothingPatch;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatchesNumber(): number;
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
      getRunSpeedModifier(): number;
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
       *  - (Empty): number
       */
      getScratchDefense(): number;
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
       *  - (Empty): string
       */
      getSpriteName(): string;
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
      getStompPower(): number;
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
       *  - (Empty): number
       */
      getTemperature(): number;
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
      getWaterResistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightWet(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetCooldown(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelFriction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindresistance(): number;
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
      isBloody(): boolean;
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
      isCosmetic(): boolean;
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
      isDirty(): boolean;
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
      isRemoveOnBroken(): boolean;
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
       *  - (BloodBodyPartType arg0): void
       */
      removePatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
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
       *  - (float arg0): void
       */
      setBiteDefense(arg0: number): void;
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
      setBloodLevel(arg0: number): void;
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
       *  - (float arg0): void
       */
      setBulletDefense(arg0: number): void;
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
       *  - (Boolean arg0): void
       */
      setCanHaveHoles(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): void
       */
      setCat(arg0: zombie.inventory.ItemType): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChanceToFall(arg0: number): void;
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
       *  - (float arg0): void
       */
      setCombatSpeedModifier(arg0: number): void;
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
       *  - (int arg0): void
       */
      setConditionLowerChance(arg0: number): void;
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
       *  - (float arg0): void
       */
      setDirtyness(arg0: number): void;
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
       *  - (float arg0): void
       */
      setNeckProtectionModifier(arg0: number): void;
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
       *  - (String arg0): void
       */
      setPalette(arg0: string): void;
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
       *  - (Boolean arg0): void
       */
      setRemoveOnBroken(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setRunSpeedModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScratchDefense(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setScriptItem(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteName(arg0: string): void;
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
      setStompPower(arg0: number): void;
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
       *  - (float arg0): void
       */
      setTemperature(arg0: number): void;
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
      setWaterResistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeightWet(arg0: number): void;
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
      setWetness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWheelFriction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindresistance(arg0: number): void;
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
       *  - (Empty): string
       */
      toString(): string;
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
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      updateWetness(arg0?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.types.Clothing
       */
      static CreateFromSprite(arg0: string): zombie.inventory.types.Clothing;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1): number
       */
      static getBiteDefenseFromItem(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1): number
       */
      static getScratchDefenseFromItem(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem): number;
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
     * @customConstructor ClothingPatch.new
     * @
     * [CLASS] zombie.inventory.types.Clothing$ClothingPatch
     */
    export class Clothing$ClothingPatch {
      /**
       * Constructors: 
       *  - (Clothing arg0)
       *  - (Clothing arg0, int arg1, int arg2, boolean arg3)
       */
      constructor(arg0: zombie.inventory.types.Clothing, arg1?: number, arg2?: number, arg3?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBiteDefense(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFabricType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFabricTypeName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScratchDefense(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load_old(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save_old(arg0: java.nio.ByteBuffer, arg1: boolean): void;
    }
    /** [ENUM] zombie.inventory.types.Clothing$ClothingPatchFabricType */
    export class Clothing$ClothingPatchFabricType {
      protected constructor();
      static readonly Cotton: zombie.inventory.types.Clothing$ClothingPatchFabricType;
      static readonly Denim: zombie.inventory.types.Clothing$ClothingPatchFabricType;
      static readonly Leather: zombie.inventory.types.Clothing$ClothingPatchFabricType;

      /* FIELDS */

      name(): string;
      ordinal(): number;
      getType(): string;

    }
    /**
     * @customConstructor ComboItem.new
     * @
     * [CLASS] zombie.inventory.types.ComboItem extends zombie.inventory.InventoryItem
     */
    export class ComboItem {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
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
     * @customConstructor Drainable.new
     * @
     * [INTERFACE] zombie.inventory.types.Drainable
     */
    export class Drainable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUsedDelta(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUsedDelta(arg0: number): void;
    }
    /**
     * @customConstructor DrainableComboItem.new
     * @
     * [CLASS] zombie.inventory.types.DrainableComboItem extends zombie.inventory.InventoryItem
     */
    export class DrainableComboItem {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
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
      canConsolidate(): boolean;
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
       *  - (Empty): number
       */
      getDelta(): number;
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
       *  - (Empty): number
       */
      getDrainableUsesFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDrainableUsesInt(): number;
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
      getHeat(): number;
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
       *  - (Empty): string
       */
      getOnCooked(): string;
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
      getRainFactor(): number;
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
      getRemainingUses(): number;
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
       *  - (Empty): java.util.List<string>
       */
      getReplaceOnCooked(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnDeplete(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnDepleteFullType(): string;
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
       *  - (Empty): number
       */
      getTicks(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTicksPerEquipUse(): number;
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
      getUseDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUsedDelta(): number;
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
      getWeightEmpty(): number;
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
      isUseWhileEquiped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseWhileUnequiped(): boolean;
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
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
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
       *  - (boolean arg0): void
       */
      setCanConsolidate(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setDelta(arg0: number): void;
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
       *  - (float arg0): void
       */
      setHeat(arg0: number): void;
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
       *  - (String arg0): void
       */
      setOnCooked(arg0: string): void;
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
       *  - (float arg0): void
       */
      setRainFactor(arg0: number): void;
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
       *  - (List arg0): void
       */
      setReplaceOnCooked(arg0: java.util.List<string>): void;
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
       *  - (float arg0): void
       */
      setTicks(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTicksPerEquipUse(arg0: number): void;
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
       *  - (float arg0): void
       */
      setUseDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseWhileEquiped(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseWhileUnequiped(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUsedDelta(arg0: number): void;
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
       *  - (float arg0): void
       */
      setWeightEmpty(arg0: number): void;
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
       * Method Parameters: 
       *  - (Empty): void
       */
      updateWeight(): void;
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
     * @customConstructor Food.new
     * @
     * [CLASS] zombie.inventory.types.Food extends zombie.inventory.InventoryItem
     */
    export class Food {
      /** float */
      static readonly FreezerAgeMultiplier: number;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, Item arg3)
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: zombie.scripting.objects.Item | string);
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
      canBeFrozen(): boolean;
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
       *  - (Empty): void
       */
      freeze(): void;
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
       *  - (Empty): number
       */
      getBaseHungChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseHunger(): number;
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
      getBoredomChangeUnmodified(): number;
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
       *  - (Empty): number
       */
      getCalories(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCarbohydrates(): number;
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
       *  - (Empty): string
       */
      getChef(): string;
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
      getCompostTime(): number;
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
       *  - (Empty): string
       */
      getCookingSound(): string;
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
      getCustomEatSound(): string;
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
      getEndChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceChangeUnmodified(): number;
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
       *  - (Empty): number
       */
      getFluReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFoodType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreezingTime(): number;
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
      getHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHerbalistType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHotbarEquippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerChange(): number;
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
      getLastCookMinute(): number;
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
       *  - (Empty): number
       */
      getLipids(): number;
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
       *  - (Empty): string
       */
      getOnCooked(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnEat(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getOutermostContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainReduction(): number;
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
       *  - (Empty): number
       */
      getPoisonDetectionLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPoisonLevelForRecipe(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPoisonPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getPreviousOwner(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProteins(): number;
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
      getReduceFoodSickness(): number;
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
       *  - (Empty): java.util.List<string>
       */
      getReplaceOnCooked(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnRotten(): string;
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
      getRottenTime(): number;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      getSpices(): java.util.ArrayList<string>;
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
       *  - (Empty): number
       */
      getStressChangeUnmodified(): number;
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
       *  - (Empty): number
       */
      getThirstChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstChangeUnmodified(): number;
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
      getUnhappyChangeUnmodified(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUseForPoison(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUseOnConsume(): string;
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
      isBadCold(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBadInMicrowave(): boolean;
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
      isCookedInMicrowave(): boolean;
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
      isFreezing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFresh(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFrozen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoodHot(): boolean;
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
      isPackaged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPoison(): boolean;
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
      isRemoveNegativeEffectOnCooked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresEquippedBothHands(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRotten(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpice(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTaintedWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isThawing(): boolean;
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
       *  - (Empty): boolean
       */
      isbDangerousUncooked(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      multiplyFoodValues(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setBadCold(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBadInMicrowave(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBandagePower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBaseHunger(arg0: number): void;
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
       *  - (float arg0): void
       */
      setCalories(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeActivated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeFrozen(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCarbohydrates(arg0: number): void;
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
       *  - (String arg0): void
       */
      setChef(arg0: string): void;
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
       *  - (float arg0): void
       */
      setCompostTime(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setCookedInMicrowave(arg0: boolean): void;
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
      setCustomEatSound(arg0: string): void;
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
      setEndChange(arg0: number): void;
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
       *  - (int arg0): void
       */
      setFluReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFoodType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFreezingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFrozen(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGoodHot(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setHeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHerbalistType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHungChange(arg0: number): void;
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
      setLastCookMinute(arg0: number): void;
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
       *  - (float arg0): void
       */
      setLipids(arg0: number): void;
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
       *  - (String arg0): void
       */
      setOnCooked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOnEat(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPackaged(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setPlaceDir(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPoisonDetectionLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Integer arg0): void
       */
      setPoisonLevelForRecipe(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPoisonPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setPreviousOwner(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setProteins(arg0: number): void;
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
       *  - (int arg0): void
       */
      setReduceFoodSickness(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setRemoveNegativeEffectOnCooked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      setReplaceOnCooked(arg0: java.util.List<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnRotten(arg0: string): void;
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
       *  - (boolean arg0): void
       */
      setRotten(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRottenTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setScriptItem(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpice(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setSpices(arg0: java.util.ArrayList<string>): void;
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
       *  - (float arg0): void
       */
      setThirstChange(arg0: number): void;
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
      setUseForPoison(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUseOnConsume(arg0: string): void;
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
       *  - (boolean arg0): void
       */
      setbDangerousUncooked(arg0: boolean): void;
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
       *  - (ItemContainer arg0): void
       */
      updateFreezing(arg0: zombie.inventory.ItemContainer): void;
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
     * @customConstructor HandWeapon.new
     * @
     * [CLASS] zombie.inventory.types.HandWeapon extends zombie.inventory.InventoryItem
     */
    export class HandWeapon {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
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
       *  - (WeaponPart arg0): void
       *  - (WeaponPart arg0, boolean arg1): void
       */
      attachWeaponPart(arg0: zombie.inventory.types.WeaponPart, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBePlaced(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeRemote(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeReused(): boolean;
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
       *  - (WeaponPart arg0): void
       */
      detachWeaponPart(arg0: zombie.inventory.types.WeaponPart): void;
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
      getAimingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingPerkCritModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingPerkHitChanceModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingPerkMinAngleModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingPerkRangeModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcoholPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.types.WeaponPart>
       */
      getAllWeaponParts(): java.util.ArrayList<zombie.inventory.types.WeaponPart>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAlternateModelName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAmmoBox(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmmoPerShoot(): number;
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
       *  - (Empty): number
       */
      getBaseSpeed(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.inventory.InventoryItem
       */
      getBestMagazine(arg0: zombie.characters.IsoGameCharacter): zombie.inventory.InventoryItem;
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
       *  - (Empty): number
       */
      getBloodLevel(): number;
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
      getBulletOutSound(): string;
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
       *  - (Empty): zombie.inventory.types.WeaponPart
       */
      getCanon(): zombie.inventory.types.WeaponPart;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemType
       */
      getCat(): zombie.inventory.ItemType;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCategories(): java.util.ArrayList<string>;
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
       *  - (Empty): string
       */
      getClickSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.WeaponPart
       */
      getClip(): zombie.inventory.types.WeaponPart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClipSize(): number;
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
      getConditionLowerChance(): number;
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
      getCritDmgMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCriticalChance(): number;
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
      getDamageCategory(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getDamageMod(arg0: zombie.characters.IsoGameCharacter): number;
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
       *  - (Empty): number
       */
      getDoSwingBeforeImpact(): number;
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
      getEnduranceMod(): number;
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
       *  - (Empty): number
       */
      getExplosionPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExplosionRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExplosionSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExplosionTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExtraDamage(): number;
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
       *  - (IsoGameCharacter arg0): number
       */
      getFatigueMod(arg0: zombie.characters.IsoGameCharacter): number;
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
      getFireMode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFireModePossibilities(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFirePower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFireRange(): number;
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
      getHitChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHitFloorSound(): string;
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
      getJamGunChance(): number;
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
       *  - (IsoGameCharacter arg0): number
       */
      getKnockbackMod(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKnockdownMod(): number;
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
      getMagazineType(): string;
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
      getMaxAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxCapacity(): number;
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
       *  - (IsoGameCharacter arg0): number
       */
      getMaxRange(arg0?: zombie.characters.IsoGameCharacter): number;
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
      getMinRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinRangeRanged(): number;
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
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.ModelWeaponPart>
       */
      getModelWeaponPart(): java.util.ArrayList<zombie.scripting.objects.ModelWeaponPart>;
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
      getNoiseDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoiseFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoiseRange(): number;
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
       *  - (Empty): string
       */
      getOriginalWeaponSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOtherBoost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOtherHandRequire(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getOutermostContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPhysicsObject(): string;
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
       *  - (Empty): string
       */
      getPlacedSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getPreviousOwner(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProjectileCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPushBackMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRackSound(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getRangeMod(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoilDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.WeaponPart
       */
      getRecoilpad(): zombie.inventory.types.WeaponPart;
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
      getReloadTime(): number;
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
       *  - (Empty): string
       */
      getRunAnim(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSaveType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.WeaponPart
       */
      getScope(): zombie.inventory.types.WeaponPart;
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
       *  - (Empty): number
       */
      getSensorRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShellFallSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.WeaponPart
       */
      getSling(): zombie.inventory.types.WeaponPart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSmokeRange(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getSoundByID(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSoundGain(): number;
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
       *  - (IsoGameCharacter arg0): number
       */
      getSpeedMod(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpentRoundCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSplatNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSplatSize(): number;
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
       *  - (Empty): zombie.inventory.types.WeaponPart
       */
      getStock(): zombie.inventory.types.WeaponPart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStopPower(): number;
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
       *  - (Empty): string
       */
      getSubCategory(): string;
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
       *  - (IsoGameCharacter arg0): number
       */
      getToHitMod(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getToHitModifier(): number;
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
       *  - (Empty): number
       */
      getTreeDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTriggerExplosionTimer(): number;
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
       *  - (String arg0): zombie.inventory.types.WeaponPart
       */
      getWeaponPart(arg0: string): zombie.inventory.types.WeaponPart;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWeaponReloadType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWeaponSprite(): string;
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
       *  - (Empty): string
       */
      getZombieHitSound(): string;
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
      haveChamber(): boolean;
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
      isAimed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAimedFirearm(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAimedHandWeapon(): boolean;
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
      isCanBarracade(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCantAttackWithLowestEndurance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConditionAffectsCapacity(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isContainsClip(): boolean;
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
      isDamageMakeHole(): boolean;
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
      isInsertAllBulletsReload(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInstantExplosion(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isJammed(): boolean;
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
      isPiercingBullets(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProtectFromRainWhileEquipped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRackAfterShoot(): boolean;
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
      isRecordedMedia(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isReloadable(arg0: zombie.characters.IsoGameCharacter): boolean;
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
      isRoundChambered(): boolean;
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
      isSpentRoundChambered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSplatBloodOnNoDeath(): boolean;
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
       *  - (Empty): void
       */
      randomizeBullets(): void;
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
       *  - (int arg0): void
       */
      setAimingPerkCritModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAimingPerkHitChanceModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAimingPerkMinAngleModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAimingPerkRangeModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAimingTime(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setAlwaysKnockdown(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAmmoBox(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAmmoPerShoot(arg0: number): void;
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
       *  - (float arg0): void
       */
      setBaseSpeed(arg0: number): void;
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
      setBloodLevel(arg0: number): void;
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
       *  - (String arg0): void
       */
      setBulletOutSound(arg0: string): void;
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
      setCanBarracade(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeActivated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBePlaced(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeReused(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WeaponPart arg0): void
       */
      setCanon(arg0: zombie.inventory.types.WeaponPart): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCantAttackWithLowestEndurance(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): void
       */
      setCat(arg0: zombie.inventory.ItemType): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setCategories(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChanceToSpawnDamaged(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (WeaponPart arg0): void
       */
      setClip(arg0: zombie.inventory.types.WeaponPart): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setClipSize(arg0: number): void;
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
       *  - (int arg0): void
       */
      setConditionLowerChance(arg0: number): void;
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
      setContainsClip(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setCritDmgMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCriticalChance(arg0: number): void;
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
      setDamageCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDamageMakeHole(arg0: boolean): void;
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
      setDoSwingBeforeImpact(arg0: number): void;
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
      setEnduranceMod(arg0: number): void;
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
       *  - (int arg0): void
       */
      setExplosionPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setExplosionRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setExplosionSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setExplosionTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setExtraDamage(arg0: number): void;
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
      setFireMode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setFireModePossibilities(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFirePower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFireRange(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setHaveChamber(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHitChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHitFloorSound(arg0: string): void;
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
       *  - (String arg0): void
       */
      setImpactSound(arg0: string): void;
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
      setInsertAllBulletsReload(arg0: boolean): void;
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
      setJamGunChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setJammed(arg0: boolean): void;
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
       *  - (String arg0): void
       */
      setMagazineType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxAmmo(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxCapacity(arg0: number): void;
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
      setMinRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinRangeRanged(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinimumSwingTime(arg0: number): void;
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
       *  - (ArrayList arg0): void
       */
      setModelWeaponPart(arg0: java.util.ArrayList<zombie.scripting.objects.ModelWeaponPart>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMultipleHitConditionAffected(arg0: boolean): void;
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
       *  - (float arg0): void
       */
      setNoiseFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNoiseRange(arg0: number): void;
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
       *  - (String arg0): void
       */
      setOriginalWeaponSprite(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOtherBoost(arg0: number): void;
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
       *  - (String arg0): void
       */
      setPhysicsObject(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPiercingBullets(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setPlaceDir(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPlacedSprite(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setPreviousOwner(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setProjectileCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPushBackMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRackAfterShoot(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setRackSound(arg0: string): void;
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
       *  - (int arg0): void
       */
      setRecoilDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (WeaponPart arg0): void
       */
      setRecoilpad(arg0: zombie.inventory.types.WeaponPart): void;
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
      setReloadTime(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setRoundChambered(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WeaponPart arg0): void
       */
      setScope(arg0: zombie.inventory.types.WeaponPart): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setScriptItem(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSensorRange(arg0: number): void;
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
       *  - (String arg0): void
       */
      setShellFallSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (WeaponPart arg0): void
       */
      setSling(arg0: zombie.inventory.types.WeaponPart): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSmokeRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSoundGain(arg0: number): void;
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
      setSpentRoundChambered(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSpentRoundCount(arg0: number): void;
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
       *  - (WeaponPart arg0): void
       */
      setStock(arg0: zombie.inventory.types.WeaponPart): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStressChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSubCategory(arg0: string): void;
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
       *  - (float arg0): void
       */
      setToHitModifier(arg0: number): void;
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
       *  - (int arg0): void
       */
      setTreeDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTriggerExplosionTimer(arg0: number): void;
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
       *  - (int arg0): void
       */
      setUses(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeaponLength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, WeaponPart arg1): void
       */
      setWeaponPart(arg0: string, arg1: zombie.inventory.types.WeaponPart): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWeaponReloadType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWeaponSprite(arg0: string): void;
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
       *  - (String arg0): void
       */
      setZombieHitSound(arg0: string): void;
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
     * @customConstructor InventoryContainer.new
     * @
     * [CLASS] zombie.inventory.types.InventoryContainer extends zombie.inventory.InventoryItem
     */
    export class InventoryContainer {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string);
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
       *  - (Empty): string
       */
      canBeEquipped(): string;
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
       *  - (Empty): number
       */
      getBloodLevel(): number;
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
       *  - (Empty): number
       */
      getCapacity(): number;
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
       *  - (Empty): string
       */
      getClothingExtraSubmenu(): string;
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
       *  - (IsoGameCharacter arg0): number
       */
      getEffectiveCapacity(arg0: zombie.characters.IsoGameCharacter): number;
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
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getInventory(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInventoryWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getItemContainer(): zombie.inventory.ItemContainer;
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
      getWeightReduction(): number;
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
      setBloodLevel(arg0: number): void;
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
       *  - (String arg0): void
       */
      setCanBeEquipped(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCapacity(arg0: number): void;
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
       *  - (ItemContainer arg0): void
       */
      setItemContainer(arg0: zombie.inventory.ItemContainer): void;
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
       *  - (int arg0): void
       */
      setWeightReduction(arg0: number): void;
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
     * @customConstructor Key.new
     * @
     * [CLASS] zombie.inventory.types.Key extends zombie.inventory.InventoryItem
     */
    export class Key {
      /** zombie.inventory.types.Key[] */
      static readonly highlightDoor?: zombie.inventory.types.Key[];

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string);
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
      getNumberOfKey(): number;
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
      isDigitalPadlock(): boolean;
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
      isPadlock(): boolean;
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
       *  - (boolean arg0): void
       */
      setDigitalPadlock(arg0: boolean): void;
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
      setNumberOfKey(arg0: number): void;
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
       *  - (boolean arg0): void
       */
      setPadlock(arg0: boolean): void;
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
      takeKeyId(): void;
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
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, InventoryItem arg1): void
       */
      static setHighlightDoors(arg0: number, arg1: zombie.inventory.InventoryItem): void;
    }
    /**
     * @customConstructor KeyRing.new
     * @
     * [CLASS] zombie.inventory.types.KeyRing extends zombie.inventory.InventoryItem
     */
    export class KeyRing {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string);
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
       *  - (Key arg0): void
       */
      addKey(arg0: zombie.inventory.types.Key): void;
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
       *  - (int arg0): boolean
       */
      containsKeyId(arg0: number): boolean;
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
       *  - (Empty): java.util.ArrayList<zombie.inventory.types.Key>
       */
      getKeys(): java.util.ArrayList<zombie.inventory.types.Key>;
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
       *  - (ArrayList arg0): void
       */
      setKeys(arg0: java.util.ArrayList<zombie.inventory.types.Key>): void;
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
     * @customConstructor Literature.new
     * @
     * [CLASS] zombie.inventory.types.Literature extends zombie.inventory.InventoryItem
     */
    export class Literature {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
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
       *  - (Integer arg0, String arg1): void
       */
      addPage(arg0: number, arg1: string): void;
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
      canBeWrite(): boolean;
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
       *  - (Empty): number
       */
      getAlreadyReadPages(): number;
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
       *  - (Empty): string
       */
      getBookName(): string;
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
       *  - (Empty): java.util.HashMap<number, string>
       */
      getCustomPages(): java.util.HashMap<number, string>;
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
      getLockedBy(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLvlSkillTrained(): number;
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
      getMaxLevelTrained(): number;
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
      getNumLevelsTrained(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfPages(): number;
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
       *  - (Empty): number
       */
      getPageToWrite(): number;
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
       *  - (Empty): java.util.List<string>
       */
      getTeachedRecipes(): java.util.List<string>;
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
       *  - (Integer arg0): string
       */
      seePage(arg0: number): string;
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
       *  - (int arg0): void
       */
      setAlreadyReadPages(arg0: number): void;
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
       *  - (String arg0): void
       */
      setBookName(arg0: string): void;
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
       *  - (boolean arg0): void
       */
      setCanBeWrite(arg0: boolean): void;
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
       *  - (HashMap arg0): void
       */
      setCustomPages(arg0: java.util.HashMap<number, string>): void;
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
       *  - (String arg0): void
       */
      setLockedBy(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLvlSkillTrained(arg0: number): void;
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
      setNumLevelsTrained(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNumberOfPages(arg0: number): void;
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
       *  - (int arg0): void
       */
      setPageToWrite(arg0: number): void;
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
       *  - (String arg0): void
       */
      setSkillTrained(arg0: string): void;
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
       *  - (List arg0): void
       */
      setTeachedRecipes(arg0: java.util.List<string>): void;
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
     * @customConstructor MapItem.new
     * @
     * [CLASS] zombie.inventory.types.MapItem extends zombie.inventory.InventoryItem
     */
    export class MapItem {
      /** zombie.inventory.types.MapItem */
      static WORLD_MAP_INSTANCE?: zombie.inventory.types.MapItem;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, Item arg3)
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: zombie.scripting.objects.Item | string);
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
       *  - (Empty): string
       */
      getMapID(): string;
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
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols
       */
      getSymbols(): zombie.worldMap.symbols.WorldMapSymbols;
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
       *  - (String arg0): void
       */
      setMapID(arg0: string): void;
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
       *  - (Empty): void
       */
      static LoadWorldMap(): void;
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
      static SaveWorldMap(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.MapItem
       */
      static getSingleton(): zombie.inventory.types.MapItem;
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
     * @customConstructor Moveable.new
     * @
     * [CLASS] zombie.inventory.types.Moveable extends zombie.inventory.InventoryItem
     */
    export class Moveable {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CanBeDroppedOnFloor(): boolean;
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
       *  - (String arg0): boolean
       */
      ReadFromWorldSprite(arg0: string): boolean;
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
      getCustomNameFull(): string;
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
      getLightB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLightBulbItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightR(): number;
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
      getMovableFullName(): string;
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
       *  - (Empty): zombie.iso.sprite.IsoSpriteGrid
       */
      getSpriteGrid(): zombie.iso.sprite.IsoSpriteGrid;
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
      getWorldSprite(): string;
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
      isLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLightHasBattery(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLightUseBattery(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiGridAnchor(): boolean;
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
       *  - (boolean arg0): void
       */
      setLight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLightBulbItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightDistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLightHasBattery(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLightUseBattery(arg0: boolean): void;
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
      setWorldSprite(arg0: string): void;
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
     * @customConstructor Radio.new
     * @
     * [CLASS] zombie.inventory.types.Radio extends zombie.inventory.types.Moveable
     */
    export class Radio {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string);
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0, float arg1, float arg2, float arg3, String arg4, String arg5, int arg6): void
       *  - (String arg0, float arg1, float arg2, float arg3, String arg4, String arg5, int arg6): void
       *  - (IsoPlayer arg0, String arg1, float arg2, float arg3, float arg4, String arg5, String arg6, int arg7): void
       */
      AddDeviceText(arg0: zombie.chat.ChatMessage | string | zombie.characters.IsoPlayer, arg1: number | string, arg2: number, arg3: number, arg4: string | number, arg5: string, arg6: number | string, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CanBeDroppedOnFloor(): boolean;
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
       *  - (Empty): boolean
       */
      HasPlayerInRange(): boolean;
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
      IsSpeaking(): boolean;
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
       *  - (String arg0): boolean
       */
      ReadFromWorldSprite(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      Say(arg0: string): void;
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
       *  - (int arg0): void
       */
      doReceiveSignal(arg0: number): void;
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
      getCustomNameFull(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.DeviceData
       */
      getDeviceData(): zombie.radio.devices.DeviceData;
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
      getLightB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLightBulbItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightR(): number;
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
      getMovableFullName(): string;
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
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getPlayer(): zombie.characters.IsoPlayer;
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
       *  - (Empty): string
       */
      getSayLine(): string;
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
       *  - (Empty): zombie.iso.sprite.IsoSpriteGrid
       */
      getSpriteGrid(): zombie.iso.sprite.IsoSpriteGrid;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
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
       *  - (Empty): string
       */
      getTalkerType(): string;
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
      getWorldSprite(): string;
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
       *  - (Empty): number
       */
      getZ(): number;
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
      isLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLightHasBattery(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLightUseBattery(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiGridAnchor(): boolean;
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
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
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
       *  - (float arg0): void
       */
      setDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (DeviceData arg0): void
       */
      setDeviceData(arg0: zombie.radio.devices.DeviceData): void;
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
       *  - (boolean arg0): void
       */
      setLight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightB(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLightBulbItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightDistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightG(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLightHasBattery(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLightUseBattery(arg0: boolean): void;
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
      setWorldSprite(arg0: string): void;
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
     * @customConstructor WeaponPart.new
     * @
     * [CLASS] zombie.inventory.types.WeaponPart extends zombie.inventory.InventoryItem
     */
    export class WeaponPart {
      /** java.lang.String */
      static readonly TYPE_CANON?: string;
      /** java.lang.String */
      static readonly TYPE_CLIP?: string;
      /** java.lang.String */
      static readonly TYPE_RECOILPAD?: string;
      /** java.lang.String */
      static readonly TYPE_SCOPE?: string;
      /** java.lang.String */
      static readonly TYPE_SLING?: string;
      /** java.lang.String */
      static readonly TYPE_STOCK?: string;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string);
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
      getAimingTime(): number;
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
      getAngle(): number;
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
       *  - (Empty): number
       */
      getClipSize(): number;
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
       *  - (Empty): number
       */
      getDamage(): number;
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
      getHitChance(): number;
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
      getMaxRange(): number;
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
      getMinRangeRanged(): number;
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
       *  - (Empty): java.util.ArrayList<string>
       */
      getMountOn(): java.util.ArrayList<string>;
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
       *  - (Empty): string
       */
      getPartType(): string;
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
      getRecoilDelay(): number;
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
      getReloadTime(): number;
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
      getWeightModifier(): number;
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
       *  - (int arg0): void
       */
      setAimingTime(arg0: number): void;
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
       *  - (float arg0): void
       */
      setAngle(arg0: number): void;
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
       *  - (int arg0): void
       */
      setClipSize(arg0: number): void;
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
       *  - (float arg0): void
       */
      setDamage(arg0: number): void;
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
      setHitChance(arg0: number): void;
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
       *  - (float arg0): void
       */
      setMaxRange(arg0: number): void;
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
      setMinRangeRanged(arg0: number): void;
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
       *  - (ArrayList arg0): void
       */
      setMountOn(arg0: java.util.ArrayList<string>): void;
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
       *  - (String arg0): void
       */
      setPartType(arg0: string): void;
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
       *  - (float arg0): void
       */
      setRecoilDelay(arg0: number): void;
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
      setReloadTime(arg0: number): void;
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
       *  - (float arg0): void
       */
      setWeightModifier(arg0: number): void;
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
    /** [ENUM] zombie.inventory.types.WeaponType */
    export class WeaponType {
      protected constructor();
      static readonly barehand: zombie.inventory.types.WeaponType;
      static readonly chainsaw: zombie.inventory.types.WeaponType;
      static readonly firearm: zombie.inventory.types.WeaponType;
      static readonly handgun: zombie.inventory.types.WeaponType;
      static readonly heavy: zombie.inventory.types.WeaponType;
      static readonly knife: zombie.inventory.types.WeaponType;
      static readonly onehanded: zombie.inventory.types.WeaponType;
      static readonly spear: zombie.inventory.types.WeaponType;
      static readonly throwing: zombie.inventory.types.WeaponType;
      static readonly twohanded: zombie.inventory.types.WeaponType;

      /* FIELDS */

      name(): string;
      ordinal(): number;
      getType(): string;

    }
  }
}
