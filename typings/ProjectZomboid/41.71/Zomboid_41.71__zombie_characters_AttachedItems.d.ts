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
  export namespace zombie.characters.AttachedItems {
    /**
     * @customConstructor AttachedItem.new
     * @
     * [CLASS] zombie.characters.AttachedItems.AttachedItem
     */
    export class AttachedItem {
      /**
       * Constructors: 
       *  - (String arg0, InventoryItem arg1)
       */
      constructor(arg0: string | null, arg1: zombie.inventory.InventoryItem | null);
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
     * @customConstructor AttachedItems.new
     * @
     * [CLASS] zombie.characters.AttachedItems.AttachedItems
     */
    export class AttachedItems {
      /**
       * Constructors: 
       *  - (AttachedLocationGroup arg0)
       *  - (AttachedItems arg0)
       */
      constructor(arg0: zombie.characters.AttachedItems.AttachedLocationGroup | zombie.characters.AttachedItems.AttachedItems | null);
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
       *  - (AttachedItems arg0): void
       */
      copyFrom(arg0: zombie.characters.AttachedItems.AttachedItems): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.characters.AttachedItems.AttachedItem>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.AttachedItems.AttachedItem
       */
      get(arg0: number): zombie.characters.AttachedItems.AttachedItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.AttachedItems.AttachedLocationGroup
       */
      getGroup(): zombie.characters.AttachedItems.AttachedLocationGroup;
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
       *  - (String arg0, InventoryItem arg1): void
       */
      setItem(arg0: string, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
    /**
     * @customConstructor AttachedLocation.new
     * @
     * [CLASS] zombie.characters.AttachedItems.AttachedLocation
     */
    export class AttachedLocation {
      /**
       * Constructors: 
       *  - (AttachedLocationGroup arg0, String arg1)
       */
      constructor(arg0: zombie.characters.AttachedItems.AttachedLocationGroup | null, arg1: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachmentName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachmentName(arg0: string): void;
    }
    /**
     * @customConstructor AttachedLocationGroup.new
     * @
     * [CLASS] zombie.characters.AttachedItems.AttachedLocationGroup
     */
    export class AttachedLocationGroup {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      checkValid(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.AttachedItems.AttachedLocation
       */
      getLocation(arg0: string): zombie.characters.AttachedItems.AttachedLocation;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.AttachedItems.AttachedLocation
       */
      getLocationByIndex(arg0: number): zombie.characters.AttachedItems.AttachedLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.AttachedItems.AttachedLocation
       */
      getOrCreateLocation(arg0: string): zombie.characters.AttachedItems.AttachedLocation;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      indexOf(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
    /**
     * @customConstructor AttachedLocations.new
     * @
     * [CLASS] zombie.characters.AttachedItems.AttachedLocations
     */
    export class AttachedLocations {
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
       *  - (String arg0): zombie.characters.AttachedItems.AttachedLocationGroup
       */
      static getGroup(arg0: string): zombie.characters.AttachedItems.AttachedLocationGroup;
    }
  }
}
