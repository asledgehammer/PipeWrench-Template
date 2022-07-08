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
 * File generated at Friday July 2022 15:18:33.634-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.iso.areas.isoregion {
    /** [ENUM] zombie.iso.areas.isoregion.IsoRegionLogType */
    export class IsoRegionLogType {
      protected constructor();
      static readonly Normal: zombie.iso.areas.isoregion.IsoRegionLogType;
      static readonly Warn: zombie.iso.areas.isoregion.IsoRegionLogType;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor IsoRegions.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.IsoRegions
     */
    export class IsoRegions {
      /** byte */
      static readonly BIT_EMPTY: number;
      /** byte */
      static readonly BIT_HAS_FLOOR: number;
      /** byte */
      static readonly BIT_HAS_ROOF: number;
      /** byte */
      static readonly BIT_PATH_WALL_N: number;
      /** byte */
      static readonly BIT_PATH_WALL_W: number;
      /** byte */
      static readonly BIT_STAIRCASE: number;
      /** byte */
      static readonly BIT_WALL_N: number;
      /** byte */
      static readonly BIT_WALL_W: number;
      /** int */
      static readonly CELL_CHUNK_DIM: number;
      /** int */
      static readonly CELL_DIM: number;
      /** int */
      static readonly CHUNKS_DATA_PACKET_SIZE: number;
      /** int */
      static readonly CHUNK_DIM: number;
      /** int */
      static readonly CHUNK_MAX_Z: number;
      /** byte */
      static readonly DIR_2D_MAX: number;
      /** byte */
      static readonly DIR_2D_NW: number;
      /** byte */
      static readonly DIR_BOT: number;
      /** byte */
      static readonly DIR_E: number;
      /** byte */
      static readonly DIR_MAX: number;
      /** byte */
      static readonly DIR_N: number;
      /** byte */
      static readonly DIR_NONE: number;
      /** byte */
      static readonly DIR_S: number;
      /** byte */
      static readonly DIR_TOP: number;
      /** byte */
      static readonly DIR_W: number;
      /** java.lang.String */
      static readonly FILE_DIR?: string;
      /** java.lang.String */
      static readonly FILE_EXT?: string;
      /** java.lang.String */
      static readonly FILE_PRE?: string;
      /** java.lang.String */
      static readonly FILE_SEP?: string;
      /** boolean */
      static PRINT_D: boolean;
      /** int */
      static readonly SINGLE_CHUNK_PACKET_SIZE: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0): number
       */
      static GetOppositeDir(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static ResetAllDataDebug(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): java.io.File
       */
      static getChunkFile(arg0: number, arg1: number): java.io.File;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.isoregion.regions.IChunkRegion
       */
      static getChunkRegion(arg0: number, arg1: number, arg2: number): zombie.iso.areas.isoregion.regions.IChunkRegion;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.areas.isoregion.data.DataChunk
       */
      static getDataChunk(arg0: number, arg1: number): zombie.iso.areas.isoregion.data.DataChunk;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.File
       */
      static getDirectory(): java.io.File;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.File
       */
      static getHeaderFile(): java.io.File;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.isoregion.regions.IWorldRegion
       */
      static getIsoWorldRegion(arg0: number, arg1: number, arg2: number): zombie.iso.areas.isoregion.regions.IWorldRegion;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.IsoRegionsLogger
       */
      static getLogger(): zombie.iso.areas.isoregion.IsoRegionsLogger;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      static getSquareFlags(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static hash(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isDebugLoadAllChunks(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Color arg1): void
       */
      static log(arg0: string, arg1?: zombie.core.Color): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      static receiveClientRequestFullDataChunks(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static receiveServerUpdatePacket(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setDebugLoadAllChunks(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static setPreviousFlags(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       *  - (IsoGridSquare arg0, boolean arg1): void
       */
      static squareChanged(arg0: zombie.iso.IsoGridSquare, arg1?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static warn(arg0: string): void;
    }
    /**
     * @customConstructor IsoRegionsLogger.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.IsoRegionsLogger
     */
    export class IsoRegionsLogger {
      /**
       * Constructors: 
       *  - (boolean arg0)
       */
      constructor(arg0: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.isoregion.IsoRegionsLogger$IsoRegionLog>
       */
      getLogs(): java.util.ArrayList<zombie.iso.areas.isoregion.IsoRegionsLogger$IsoRegionLog>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirtyUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unsetDirtyUI(): void;
    }
    /**
     * @customConstructor IsoRegionLog.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.IsoRegionsLogger$IsoRegionLog
     */
    export class IsoRegionsLogger$IsoRegionLog {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getStr(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.IsoRegionLogType
       */
      getType(): zombie.iso.areas.isoregion.IsoRegionLogType;
    }
    /**
     * @customConstructor IsoRegionsRenderer.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.IsoRegionsRenderer
     */
    export class IsoRegionsRenderer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      editRotate(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      editSquare(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.areas.isoregion.regions.IsoChunkRegion
       */
      getChunkRegion(arg0: number, arg1: number): zombie.iso.areas.isoregion.regions.IsoChunkRegion;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getEditOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getEditOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEditOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZLevel(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getZLevelOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getZLevelOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZLevelOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      hasChunkRegion(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEditingEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasSelected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      outlineRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recalcSurroundings(): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, float arg1, float arg2, float arg3): void
       */
      render(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      renderCellInfo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      renderEntity(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      renderSquare(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      renderString(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, String arg2, Color arg3): void
       *  - (float arg0, float arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      renderStringUI(arg0: number, arg1: number, arg2: string, arg3: zombie.core.Color | number, arg4?: number, arg5?: number, arg6?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      renderZombie(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setEditOption(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setEditSquareCoord(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setSelected(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setSelectedWorld(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setZLevelOption(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      uiToWorldX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      uiToWorldY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unsetSelected(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldToScreenX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldToScreenY(arg0: number): number;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.iso.areas.isoregion.IsoRegionsRenderer$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class IsoRegionsRenderer$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (ArrayList arg0, String arg1, boolean arg2)
       *  - (ArrayList arg0, String arg1, boolean arg2, int arg3)
       */
      constructor(arg0: java.util.ArrayList<zombie.config.ConfigOption> | null, arg1: string | null, arg2: boolean, arg3?: number);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDefaultValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
  }
}
