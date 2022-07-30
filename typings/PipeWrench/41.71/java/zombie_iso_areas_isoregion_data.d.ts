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
  export namespace zombie.iso.areas.isoregion.data {
    /**
     * @customConstructor DataCell.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.data.DataCell
     */
    export class DataCell {

    }
    /**
     * @customConstructor DataChunk.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.data.DataChunk
     */
    export class DataChunk {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChunkY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.isoregion.regions.IsoChunkRegion
       */
      getIsoChunkRegion(arg0: number, arg1: number, arg2: number): zombie.iso.areas.isoregion.regions.IsoChunkRegion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastUpdateStamp(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       *  - (int arg0, int arg1, int arg2, boolean arg3): number
       */
      getSquare(arg0: number, arg1: number, arg2: number, arg3?: boolean): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): boolean
       */
      selectedHasFlags(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirtyAllActive(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLastUpdateStamp(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, byte arg3): void
       */
      setRegion(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setSelectedFlags(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      squareGetFlags(arg0: number, arg1: number, arg2: number): number;
    }
  }
}
