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
  export namespace zombie.core.skinnedmodel.visual {
    /**
     * @customConstructor BaseVisual.new
     * @
     * [ABSTRACT CLASS] zombie.core.skinnedmodel.visual.BaseVisual
     */
    export class BaseVisual {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (BaseVisual arg0): void
       */
      copyFrom(arg0: zombie.core.skinnedmodel.visual.BaseVisual): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ItemVisuals arg1): void
       */
      dressInNamedOutfit(arg0: string, arg1: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.Model
       */
      getModel(): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ModelScript
       */
      getModelScript(): zombie.scripting.objects.ModelScript;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
    }
    /**
     * @customConstructor HumanVisual.new
     * @
     * [CLASS] zombie.core.skinnedmodel.visual.HumanVisual extends zombie.core.skinnedmodel.visual.BaseVisual
     */
    export class HumanVisual {
      /**
       * Constructors: 
       *  - (IHumanVisual arg0)
       */
      constructor(arg0: zombie.core.skinnedmodel.visual.IHumanVisual);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.visual.ItemVisual
       */
      addBodyVisual(arg0: string): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.visual.ItemVisual
       */
      addBodyVisualFromClothingItemName(arg0: string): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.visual.ItemVisual
       */
      addBodyVisualFromItemType(arg0: string): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0, Item arg1): zombie.core.skinnedmodel.visual.ItemVisual
       */
      addClothingItem(arg0: zombie.core.skinnedmodel.visual.ItemVisuals, arg1: zombie.scripting.objects.Item): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (BaseVisual arg0): void
       */
      copyFrom(arg0: zombie.core.skinnedmodel.visual.BaseVisual): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ItemVisuals arg1): void
       *  - (String arg0, ItemVisuals arg1, boolean arg2): void
       */
      dressInClothingItem(arg0: string, arg1: zombie.core.skinnedmodel.visual.ItemVisuals, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ItemVisuals arg1): void
       */
      dressInNamedOutfit(arg0: string, arg1: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      getBeardColor(): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBeardModel(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBlood(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyHairIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisuals
       */
      getBodyVisuals(): zombie.core.skinnedmodel.visual.ItemVisuals;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getDirt(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      getHairColor(): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHairModel(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getHole(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastStandString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.Model
       */
      getModel(): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ModelScript
       */
      getModelScript(): zombie.scripting.objects.ModelScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      getNaturalBeardColor(): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      getNaturalHairColor(): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNonAttachedHair(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.Outfit
       */
      getOutfit(): zombie.core.skinnedmodel.population.Outfit;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      getSkinColor(): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSkinTexture(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinTextureIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalBlood(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasBodyVisualFromItemType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      lerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadLastStandString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      pickRandomZombieRotStage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomBlood(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomDirt(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeBlood(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.visual.ItemVisual
       */
      removeBodyVisualFromItemType(arg0: string): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeDirt(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): void
       */
      setBeardColor(arg0: zombie.core.ImmutableColor): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBeardModel(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setBlood(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setBodyHairIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Model arg0): void
       */
      setForceModel(arg0: zombie.core.skinnedmodel.model.Model): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setForceModelScript(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): void
       */
      setHairColor(arg0: zombie.core.ImmutableColor): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHairModel(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      setHole(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): void
       */
      setNaturalBeardColor(arg0: zombie.core.ImmutableColor): void;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): void
       */
      setNaturalHairColor(arg0: zombie.core.ImmutableColor): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setNonAttachedHair(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Outfit arg0): void
       */
      setOutfit(arg0: zombie.core.skinnedmodel.population.Outfit): void;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): void
       */
      setSkinColor(arg0: zombie.core.ImmutableColor): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSkinTextureIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSkinTextureName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Outfit arg0): void
       */
      synchWithOutfit(arg0: zombie.core.skinnedmodel.population.Outfit): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemVisuals arg0): zombie.core.skinnedmodel.model.CharacterMask
       */
      static GetMask(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): zombie.core.skinnedmodel.model.CharacterMask;
    }
    /**
     * @customConstructor IHumanVisual.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.visual.IHumanVisual
     */
    export class IHumanVisual {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.HumanVisual
       */
      getHumanVisual(): zombie.core.skinnedmodel.visual.HumanVisual;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
    }
    /**
     * @customConstructor ItemVisual.new
     * @
     * [CLASS] zombie.core.skinnedmodel.visual.ItemVisual
     */
    export class ItemVisual {
      /** float */
      static readonly NULL_HUE: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (ItemVisual arg0)
       */
      constructor(arg0?: zombie.core.skinnedmodel.visual.ItemVisual);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      copyBlood(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      copyDirt(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      copyFrom(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      copyHoles(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      copyPatches(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAlternateModelName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (ClothingItem arg0): string
       */
      getBaseTexture(arg0?: zombie.core.skinnedmodel.population.ClothingItem): number | string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBasicPatch(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBasicPatchesNumber(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBlood(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItem
       */
      getClothingItem(): zombie.core.skinnedmodel.population.ClothingItem;
      /**
       * Method Parameters: 
       *  - (CharacterMask arg0): void
       */
      getClothingItemCombinedMask(arg0: zombie.core.skinnedmodel.model.CharacterMask): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClothingItemName(): string;
      /**
       * Method Parameters: 
       *  - (ClothingItem arg0): string
       */
      getDecal(arg0: zombie.core.skinnedmodel.population.ClothingItem): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getDenimPatch(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getDirt(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getHole(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHolesNumber(): number;
      /**
       * Method Parameters: 
       *  - (ClothingItem arg0): number
       */
      getHue(arg0: zombie.core.skinnedmodel.population.ClothingItem): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getInventoryItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getItemType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastStandString(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getLeatherPatch(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Item
       */
      getScriptItem(): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (ClothingItem arg0): string
       */
      getTextureChoice(arg0?: zombie.core.skinnedmodel.population.ClothingItem): number | string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       *  - (ClothingItem arg0): zombie.core.ImmutableColor
       */
      getTint(arg0?: zombie.core.skinnedmodel.population.ClothingItem): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalBlood(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ClothingItem arg0): void
       */
      pickUninitializedValues(arg0: zombie.core.skinnedmodel.population.ClothingItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeBlood(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeDirt(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeHole(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removePatch(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAlternateModelName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setBaseTexture(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      setBasicPatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setBlood(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClothingItemName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDecal(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      setDenimPatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      setHole(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setInventoryItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setItemType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      setLeatherPatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTextureChoice(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): void
       */
      setTint(arg0: zombie.core.ImmutableColor): void;
      /**
       * Method Parameters: 
       *  - (ClothingItemReference arg0): void
       */
      synchWithOutfit(arg0: zombie.core.skinnedmodel.population.ClothingItemReference): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      static createLastStandItem(arg0: string): zombie.inventory.InventoryItem;
    }
    /**
     * @customConstructor ItemVisuals.new
     * @
     * [CLASS] zombie.core.skinnedmodel.visual.ItemVisuals extends java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual>
     */
    export class ItemVisuals {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add<T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<T>(arg0: java.util.Collection<zombie.core.skinnedmodel.visual.ItemVisual> | number, arg1?: java.util.Collection<zombie.core.skinnedmodel.visual.ItemVisual>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<T>(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisual
       */
      findHat<T>(): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisual
       */
      findMask<T>(): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<T>(arg0: java.util._function_.Consumer<zombie.core.skinnedmodel.visual.ItemVisual>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<T>(): java.util.Iterator<zombie.core.skinnedmodel.visual.ItemVisual>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<T>(arg0?: number): java.util.ListIterator<zombie.core.skinnedmodel.visual.ItemVisual>;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load<T>(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<T>(): java.util.stream.Stream<zombie.core.skinnedmodel.visual.ItemVisual>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0): E
       */
      remove<T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<T>(arg0: java.util._function_.Predicate<zombie.core.skinnedmodel.visual.ItemVisual>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<T>(arg0: java.util._function_.UnaryOperator<zombie.core.skinnedmodel.visual.ItemVisual>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save<T>(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<T>(arg0: java.util.Comparator<zombie.core.skinnedmodel.visual.ItemVisual>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<T>(): java.util.Spliterator<zombie.core.skinnedmodel.visual.ItemVisual>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<T>(): java.util.stream.Stream<zombie.core.skinnedmodel.visual.ItemVisual>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<T>(arg0: number, arg1: number): java.util.List<zombie.core.skinnedmodel.visual.ItemVisual>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<T>(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize<T>(): void;
    }
  }
}
