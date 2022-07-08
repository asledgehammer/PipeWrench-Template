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
 * File generated at Friday July 2022 15:18:33.620-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.Styles {
    /**
     * @customConstructor AbstractStyle.new
     * @
     * [ABSTRACT CLASS] zombie.core.Styles.AbstractStyle
     */
    export class AbstractStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.GeometryData
       */
      build(): zombie.core.Styles.GeometryData;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.AlphaOp
       */
      getAlphaOp(): zombie.core.Styles.AlphaOp;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getRenderSprite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStyleID(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      render(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetState(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setupState(): void;
    }
    /** [ENUM] zombie.core.Styles.AlphaOp */
    export class AlphaOp {
      protected constructor();
      static readonly KEEP: zombie.core.Styles.AlphaOp;
      static readonly PREMULTIPLY: zombie.core.Styles.AlphaOp;
      static readonly ZERO: zombie.core.Styles.AlphaOp;
      name(): string;
      ordinal(): number;
      /** (ReadableColor arg0, int arg1, FloatBuffer arg2): void */
      op(arg0: org.lwjgl.util.ReadableColor | null, arg1: number, arg2: java.nio.FloatBuffer | null): void;

    }
    /**
     * @customConstructor FloatList.new
     * @
     * [CLASS] zombie.core.Styles.FloatList
     */
    export class FloatList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (boolean arg0, int arg1)
       */
      constructor(arg0?: number | boolean, arg1?: number);
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      add(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       *  - (FloatList arg0): void
       */
      addAll(arg0: number[] | zombie.core.Styles.FloatList): void;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      array(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      get(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      remove(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       */
      toArray(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
    /**
     * @customConstructor GeometryData.new
     * @
     * [CLASS] zombie.core.Styles.GeometryData
     */
    export class GeometryData {
      /**
       * Constructors: 
       *  - (FloatList arg0, ShortList arg1)
       */
      constructor(arg0: zombie.core.Styles.FloatList | null, arg1: zombie.core.Styles.ShortList | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.ShortList
       */
      getIndexData(): zombie.core.Styles.ShortList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.FloatList
       */
      getVertexData(): zombie.core.Styles.FloatList;
    }
    /**
     * @customConstructor ShortList.new
     * @
     * [CLASS] zombie.core.Styles.ShortList
     */
    export class ShortList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (boolean arg0, int arg1)
       */
      constructor(arg0?: number | boolean, arg1?: number);
      /**
       * Method Parameters: 
       *  - (short arg0): number
       */
      add(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (short[] arg0): void
       *  - (ShortList arg0): void
       */
      addAll(arg0: number[] | zombie.core.Styles.ShortList): void;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      array(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      get(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      remove(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (short[] arg0): number[]
       */
      toArray(arg0: number[]): number[];
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
  }
}
