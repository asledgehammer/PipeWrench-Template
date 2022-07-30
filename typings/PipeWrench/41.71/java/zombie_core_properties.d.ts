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
  export namespace zombie.core.properties {
    /**
     * @customConstructor PropertyContainer.new
     * @
     * [CLASS] zombie.core.properties.PropertyContainer
     */
    export class PropertyContainer {
      /** java.util.List<java.lang.Object> */
      static sorted?: java.util.List<any>;
      /** zombie.core.Collections.NonBlockingHashMap<zombie.iso.SpriteDetails.IsoFlagType, zombie.core.properties.PropertyContainer$MostTested> */
      static test?: zombie.core.Collections.NonBlockingHashMap<zombie.iso.SpriteDetails.IsoFlagType, zombie.core.properties.PropertyContainer$MostTested>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (PropertyContainer arg0): void
       */
      AddProperties(arg0: zombie.core.properties.PropertyContainer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CreateKeySet(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (Double arg0): boolean
       *  - (IsoFlagType arg0): boolean
       */
      Is(arg0: string | number | zombie.iso.SpriteDetails.IsoFlagType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoFlagType arg0): void
       *  - (String arg0, String arg1): void
       *  - (IsoFlagType arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       */
      Set(arg0: zombie.iso.SpriteDetails.IsoFlagType | string, arg1?: string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoFlagType arg0): void
       *  - (String arg0): void
       */
      UnSet(arg0: zombie.iso.SpriteDetails.IsoFlagType | string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      Val(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.SpriteDetails.IsoFlagType>
       */
      getFlagsList(): java.util.ArrayList<zombie.iso.SpriteDetails.IsoFlagType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPropertyNames(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStackReplaceTileOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurface(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSurfaceOffset(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableTop(): boolean;
    }
    /**
     * @customConstructor MostTested.new
     * @
     * [CLASS] zombie.core.properties.PropertyContainer$MostTested
     */
    export class PropertyContainer$MostTested {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
