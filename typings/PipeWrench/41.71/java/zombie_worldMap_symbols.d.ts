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
  export namespace zombie.worldMap.symbols {
    /**
     * @customConstructor WorldMapBaseSymbol.new
     * @
     * [ABSTRACT CLASS] zombie.worldMap.symbols.WorldMapBaseSymbol
     */
    export class WorldMapBaseSymbol {
      /** float */
      static DEFAULT_SCALE: number;

      /**
       * Constructors: 
       *  - (WorldMapSymbols arg0)
       */
      protected constructor(arg0: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      getDisplayScale(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       */
      getType(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      heightScaled(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, WorldMapSymbolCollisions arg1, float arg2, float arg3): void
       */
      layout(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbolCollisions, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, float arg1, float arg2): void
       */
      render(arg0: zombie.worldMap.UIWorldMap, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      widthScaled(arg0: zombie.worldMap.UIWorldMap): number;
    }
    /**
     * @customConstructor WorldMapSymbolCollisions.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolCollisions
     */
    export class WorldMapSymbolCollisions {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor WorldMapSymbols.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbols
     */
    export class WorldMapSymbols {
      /** float */
      static readonly COLLAPSED_RADIUS: number;
      /** int */
      static readonly SAVEFILE_VERSION: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, UIFont arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11): zombie.worldMap.symbols.WorldMapTextSymbol
       */
      addText(arg0: string, arg1: boolean, arg2: zombie.ui.UIFont, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): zombie.worldMap.symbols.WorldMapTextSymbol;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): zombie.worldMap.symbols.WorldMapTextureSymbol
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9): zombie.worldMap.symbols.WorldMapTextureSymbol
       */
      addTexture(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number, arg9?: number): zombie.worldMap.symbols.WorldMapTextureSymbol;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): zombie.worldMap.symbols.WorldMapTextSymbol
       */
      addTranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): zombie.worldMap.symbols.WorldMapTextSymbol;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): zombie.worldMap.symbols.WorldMapTextSymbol
       */
      addUntranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): zombie.worldMap.symbols.WorldMapTextSymbol;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLayoutWorldScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getMiniMapSymbols(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.symbols.WorldMapBaseSymbol
       */
      getSymbolByIndex(arg0: number): zombie.worldMap.symbols.WorldMapBaseSymbol;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSymbolCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      invalidateLayout(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSymbolByIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): void
       */
      render(arg0: zombie.worldMap.UIWorldMap): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
    }
    /** [ENUM] zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType */
    export class WorldMapSymbols$WorldMapSymbolType {
      protected constructor();
      static readonly NONE: zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      static readonly Text: zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      static readonly Texture: zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor WorldMapSymbolsV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1
     */
    export class WorldMapSymbolsV1 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0, WorldMapSymbols arg1)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1
       */
      addTexture(arg0: string, arg1: number, arg2: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1
       */
      addTranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1
       */
      addUntranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1
       */
      getSymbolByIndex(arg0: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSymbolCount(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      hitTest(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSymbolByIndex(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Exposer arg0): void
       */
      static setExposed(arg0: zombie.Lua.LuaManager$Exposer): void;
    }
    /**
     * @customConstructor WorldMapBaseSymbolV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1 extends zombie.util.PooledObject
     */
    export class WorldMapSymbolsV1$WorldMapBaseSymbolV1 {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextSymbolV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1
     */
    export class WorldMapSymbolsV1$WorldMapTextSymbolV1 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUntranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUntranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextureSymbolV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1
     */
    export class WorldMapSymbolsV1$WorldMapTextureSymbolV1 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSymbolID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextSymbol.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapTextSymbol extends zombie.worldMap.symbols.WorldMapBaseSymbol
     */
    export class WorldMapTextSymbol {
      /**
       * Constructors: 
       *  - (WorldMapSymbols arg0)
       */
      constructor(arg0: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      getDisplayScale(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       */
      getType(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUntranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      heightScaled(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, WorldMapSymbolCollisions arg1, float arg2, float arg3): void
       */
      layout(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbolCollisions, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, float arg1, float arg2): void
       */
      render(arg0: zombie.worldMap.UIWorldMap, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUntranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      widthScaled(arg0: zombie.worldMap.UIWorldMap): number;
    }
    /**
     * @customConstructor WorldMapTextureSymbol.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapTextureSymbol extends zombie.worldMap.symbols.WorldMapBaseSymbol
     */
    export class WorldMapTextureSymbol {
      /**
       * Constructors: 
       *  - (WorldMapSymbols arg0)
       */
      constructor(arg0: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkTexture(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      getDisplayScale(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSymbolID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       */
      getType(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      heightScaled(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, WorldMapSymbolCollisions arg1, float arg2, float arg3): void
       */
      layout(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbolCollisions, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, float arg1, float arg2): void
       */
      render(arg0: zombie.worldMap.UIWorldMap, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSymbolID(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      widthScaled(arg0: zombie.worldMap.UIWorldMap): number;
    }
  }
}
