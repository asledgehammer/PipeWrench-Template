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
 * File generated at Friday July 2022 15:18:33.562-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.worldMap.markers {
    /**
     * @customConstructor WorldMapGridSquareMarker.new
     * @
     * [CLASS] zombie.worldMap.markers.WorldMapGridSquareMarker extends zombie.worldMap.markers.WorldMapMarker
     */
    export class WorldMapGridSquareMarker {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
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
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinScreenRadius(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
    }
    /**
     * @customConstructor WorldMapMarker.new
     * @
     * [ABSTRACT CLASS] zombie.worldMap.markers.WorldMapMarker extends zombie.util.PooledObject
     */
    export class WorldMapMarker {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      getPool(): zombie.util.Pool<zombie.util.IPooledObject>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
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
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Pool arg0): void
       */
      setPool(arg0: zombie.util.Pool<zombie.util.IPooledObject>): void;
    }
    /**
     * @customConstructor WorldMapMarkers.new
     * @
     * [CLASS] zombie.worldMap.markers.WorldMapMarkers
     */
    export class WorldMapMarkers {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6): zombie.worldMap.markers.WorldMapGridSquareMarker
       */
      addGridSquareMarker(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.worldMap.markers.WorldMapGridSquareMarker;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (WorldMapMarker arg0): void
       */
      removeMarker(arg0: zombie.worldMap.markers.WorldMapMarker): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): void
       */
      render(arg0: zombie.worldMap.UIWorldMap): void;
    }
    /**
     * @customConstructor WorldMapMarkersV1.new
     * @
     * [CLASS] zombie.worldMap.markers.WorldMapMarkersV1
     */
    export class WorldMapMarkersV1 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap | null);
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, float arg3, float arg4, float arg5, float arg6): zombie.worldMap.markers.WorldMapMarkersV1$WorldMapGridSquareMarkerV1
       */
      addGridSquareMarker(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.worldMap.markers.WorldMapMarkersV1$WorldMapGridSquareMarkerV1;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (WorldMapMarkerV1 arg0): void
       */
      removeMarker(arg0: zombie.worldMap.markers.WorldMapMarkersV1$WorldMapMarkerV1): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Exposer arg0): void
       */
      static setExposed(arg0: zombie.Lua.LuaManager$Exposer): void;
    }
    /**
     * @customConstructor WorldMapGridSquareMarkerV1.new
     * @
     * [CLASS] zombie.worldMap.markers.WorldMapMarkersV1$WorldMapGridSquareMarkerV1 extends zombie.worldMap.markers.WorldMapMarkersV1$WorldMapMarkerV1
     */
    export class WorldMapMarkersV1$WorldMapGridSquareMarkerV1 {

      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinScreenRadius(arg0: number): void;
    }
    /**
     * @customConstructor WorldMapMarkerV1.new
     * @
     * [CLASS] zombie.worldMap.markers.WorldMapMarkersV1$WorldMapMarkerV1
     */
    export class WorldMapMarkersV1$WorldMapMarkerV1 {

    }
  }
}
