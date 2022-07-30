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
  export namespace zombie.worldMap.styles {
    /**
     * @customConstructor WorldMapStyle.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyle
     */
    export class WorldMapStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (WorldMapStyle arg0): void
       */
      copyFrom(arg0: zombie.worldMap.styles.WorldMapStyle): void;
    }
    /**
     * @customConstructor WorldMapStyleLayer.new
     * @
     * [ABSTRACT CLASS] zombie.worldMap.styles.WorldMapStyleLayer
     */
    export class WorldMapStyleLayer {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      protected constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (WorldMapFeature arg0, FilterArgs arg1): boolean
       */
      filter(arg0: zombie.worldMap.WorldMapFeature, arg1: zombie.worldMap.styles.WorldMapStyleLayer$FilterArgs): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (WorldMapFeature arg0, RenderArgs arg1): void
       */
      render(arg0: zombie.worldMap.WorldMapFeature, arg1: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs): void;
      /**
       * Method Parameters: 
       *  - (RenderArgs arg0): void
       */
      renderCell(arg0: zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs): void;
    }
    /**
     * @customConstructor ColorStop.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$ColorStop extends zombie.worldMap.styles.WorldMapStyleLayer$Stop
     */
    export class WorldMapStyleLayer$ColorStop {
      /**
       * Constructors: 
       *  - (float arg0, int arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    /**
     * @customConstructor FilterArgs.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$FilterArgs
     */
    export class WorldMapStyleLayer$FilterArgs {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor FloatStop.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$FloatStop extends zombie.worldMap.styles.WorldMapStyleLayer$Stop
     */
    export class WorldMapStyleLayer$FloatStop {
      /**
       * Constructors: 
       *  - (float arg0, float arg1)
       */
      constructor(arg0: number, arg1: number);
    }
    /**
     * @customConstructor IWorldMapStyleFilter.new
     * @
     * [INTERFACE] zombie.worldMap.styles.WorldMapStyleLayer$IWorldMapStyleFilter
     */
    export class WorldMapStyleLayer$IWorldMapStyleFilter {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (WorldMapFeature arg0, FilterArgs arg1): boolean
       */
      filter(arg0: zombie.worldMap.WorldMapFeature, arg1: zombie.worldMap.styles.WorldMapStyleLayer$FilterArgs): boolean;
    }
    /**
     * @customConstructor RGBAf.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$RGBAf
     */
    export class WorldMapStyleLayer$RGBAf {
      /** zombie.popman.ObjectPool<zombie.worldMap.styles.WorldMapStyleLayer$RGBAf> */
      static readonly s_pool?: zombie.popman.ObjectPool<zombie.worldMap.styles.WorldMapStyleLayer$RGBAf>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): zombie.worldMap.styles.WorldMapStyleLayer$RGBAf
       */
      init(arg0: number, arg1: number, arg2: number, arg3: number): zombie.worldMap.styles.WorldMapStyleLayer$RGBAf;
    }
    /**
     * @customConstructor RenderArgs.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs
     */
    export class WorldMapStyleLayer$RenderArgs {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Stop.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$Stop
     */
    export class WorldMapStyleLayer$Stop {

    }
    /**
     * @customConstructor TextureStop.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleLayer$TextureStop extends zombie.worldMap.styles.WorldMapStyleLayer$Stop
     */
    export class WorldMapStyleLayer$TextureStop {
      /**
       * Constructors: 
       *  - (float arg0, String arg1)
       */
      constructor(arg0: number, arg1: string);
    }
    /**
     * @customConstructor WorldMapStyleV1.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleV1
     */
    export class WorldMapStyleV1 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
       */
      getLayerByIndex(arg0: number): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
       */
      getLayerByName(arg0: string): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLayerCount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      indexOfLayer(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      moveLayer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
       */
      newLineLayer(arg0: string): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
       */
      newPolygonLayer(arg0: string): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
       */
      newTextureLayer(arg0: string): zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeLayerById(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeLayerByIndex(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Exposer arg0): void
       */
      static setExposed(arg0: zombie.Lua.LuaManager$Exposer): void;
    }
    /**
     * @customConstructor WorldMapLineStyleLayerV1.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleV1$WorldMapLineStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
     */
    export class WorldMapStyleV1$WorldMapLineStyleLayerV1 {

      /**
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addFill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      addLineWidth(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setFilter(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinZoom(arg0: number): void;
    }
    /**
     * @customConstructor WorldMapPolygonStyleLayerV1.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleV1$WorldMapPolygonStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
     */
    export class WorldMapStyleV1$WorldMapPolygonStyleLayerV1 {

      /**
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addFill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      addScale(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, String arg1): void
       */
      addTexture(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillAlpha(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillBlue(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillGreen(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillRed(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFillStops(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillZoom(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilterKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilterValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoom(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.textures.Texture
       */
      getTexture(arg0: number): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getTexturePath(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTextureStops(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getTextureZoom(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      moveFill(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      moveTexture(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeFill(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeTexture(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setFillRGBA(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setFillZoom(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setFilter(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      setTexturePath(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setTextureZoom(arg0: number, arg1: number): void;
    }
    /**
     * @customConstructor WorldMapStyleLayerV1.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
     */
    export class WorldMapStyleV1$WorldMapStyleLayerV1 {

      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinZoom(arg0: number): void;
    }
    /**
     * @customConstructor WorldMapTextureStyleLayerV1.new
     * @
     * [CLASS] zombie.worldMap.styles.WorldMapStyleV1$WorldMapTextureStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1
     */
    export class WorldMapStyleV1$WorldMapTextureStyleLayerV1 {

      /**
       * Method Parameters: 
       *  - (float arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addFill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, String arg1): void
       */
      addTexture(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillAlpha(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillBlue(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillGreen(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillRed(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFillStops(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getFillZoom(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoom(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.textures.Texture
       */
      getTexture(arg0: number): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getTexturePath(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTextureStops(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getTextureZoom(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthInSquares(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTile(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseWorldBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      moveFill(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      moveTexture(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllFill(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllTexture(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeFill(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeTexture(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setBoundsInSquares(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setFillRGBA(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setFillZoom(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinZoom(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      setTexturePath(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setTextureZoom(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTile(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseWorldBounds(arg0: boolean): void;
    }
  }
}
