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
  export namespace zombie.characters.WornItems {
    /**
     * @customConstructor BodyLocation.new
     * @
     * [CLASS] zombie.characters.WornItems.BodyLocation
     */
    export class BodyLocation {
      /**
       * Constructors: 
       *  - (BodyLocationGroup arg0, String arg1)
       */
      constructor(arg0: zombie.characters.WornItems.BodyLocationGroup, arg1: string);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      addAlias(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isExclusive(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isHideModel(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isID(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiItem(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      setExclusive(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      setHideModel(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.characters.WornItems.BodyLocation
       */
      setMultiItem(arg0: boolean): zombie.characters.WornItems.BodyLocation;
    }
    /**
     * @customConstructor BodyLocationGroup.new
     * @
     * [CLASS] zombie.characters.WornItems.BodyLocationGroup
     */
    export class BodyLocationGroup {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      checkValid(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.WornItems.BodyLocation>
       */
      getAllLocations(): java.util.ArrayList<zombie.characters.WornItems.BodyLocation>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      getLocation(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.WornItems.BodyLocation
       */
      getLocationByIndex(arg0: number): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      getLocationNotNull(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.WornItems.BodyLocation
       */
      getOrCreateLocation(arg0: string): zombie.characters.WornItems.BodyLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      indexOf(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isExclusive(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isHideModel(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isMultiItem(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setExclusive(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setHideModel(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setMultiItem(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
    /**
     * @customConstructor BodyLocations.new
     * @
     * [CLASS] zombie.characters.WornItems.BodyLocations
     */
    export class BodyLocations {
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
       *  - (String arg0): zombie.characters.WornItems.BodyLocationGroup
       */
      static getGroup(arg0: string): zombie.characters.WornItems.BodyLocationGroup;
    }
    /**
     * @customConstructor WornItem.new
     * @
     * [CLASS] zombie.characters.WornItems.WornItem
     */
    export class WornItem {
      /**
       * Constructors: 
       *  - (String arg0, InventoryItem arg1)
       */
      constructor(arg0: string, arg1: zombie.inventory.InventoryItem);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLocation(): string;
    }
    /**
     * @customConstructor WornItems.new
     * @
     * [CLASS] zombie.characters.WornItems.WornItems
     */
    export class WornItems {
      /**
       * Constructors: 
       *  - (BodyLocationGroup arg0)
       *  - (WornItems arg0)
       */
      constructor(arg0: zombie.characters.WornItems.BodyLocationGroup | zombie.characters.WornItems.WornItems);
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      addItemsToItemContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      contains(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (WornItems arg0): void
       */
      copyFrom(arg0: zombie.characters.WornItems.WornItems): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.characters.WornItems.WornItem>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.WornItems.WornItem
       */
      get(arg0: number): zombie.characters.WornItems.WornItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.WornItems.BodyLocationGroup
       */
      getBodyLocationGroup(): zombie.characters.WornItems.BodyLocationGroup;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getItemByIndex(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): string
       */
      getLocation(arg0: zombie.inventory.InventoryItem): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      remove(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      setFromItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       */
      setItem(arg0: string, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
  }
}
