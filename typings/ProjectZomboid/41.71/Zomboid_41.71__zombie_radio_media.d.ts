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
 * File generated at Friday July 2022 15:18:33.606-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.radio.media {
    /**
     * @customConstructor MediaData.new
     * @
     * [CLASS] zombie.radio.media.MediaData
     */
    export class MediaData {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: number);
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, String arg4): void
       */
      addLine(arg0: string, arg1: number, arg2: number, arg3: number, arg4: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthorEN(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExtraEN(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.radio.media.MediaData$MediaLineData
       */
      getLine(arg0: number): zombie.radio.media.MediaData$MediaLineData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLineCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMediaType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpawning(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSubtitleEN(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitleEN(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedExtra(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedItemDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedSubTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAuthor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasExtra(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSubTitle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTitle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setExtra(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSubtitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
    }
    /**
     * @customConstructor MediaLineData.new
     * @
     * [CLASS] zombie.radio.media.MediaData$MediaLineData
     */
    export class MediaData$MediaLineData {
      /**
       * Constructors: 
       *  - (String arg0, float arg1, float arg2, float arg3, String arg4)
       */
      constructor(arg0: string | null, arg1: number, arg2: number, arg3: number, arg4: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCodes(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextGuid(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedText(): string;
    }
    /**
     * @customConstructor RecordedMedia.new
     * @
     * [CLASS] zombie.radio.media.RecordedMedia
     */
    export class RecordedMedia {
      /** boolean */
      static DISABLE_LINE_LEARNING: boolean;
      /** java.lang.String */
      static readonly SAVE_FILE?: string;
      /** int */
      static readonly VERSION: number;
      /** int */
      static readonly VERSION1: number;
      /** int */
      static readonly VERSION2: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.radio.media.MediaData>
       */
      getAllMediaForCategory(arg0: string): java.util.ArrayList<zombie.radio.media.MediaData>;
      /**
       * Method Parameters: 
       *  - (byte arg0): java.util.ArrayList<zombie.radio.media.MediaData>
       */
      getAllMediaForType(arg0: number): java.util.ArrayList<zombie.radio.media.MediaData>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCategories(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (MediaData arg0): number
       */
      getIndexForMediaData(arg0: zombie.radio.media.MediaData): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.radio.media.MediaData
       */
      getMediaData(arg0: string): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.radio.media.MediaData
       */
      getMediaDataFromIndex(arg0: number): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.radio.media.MediaData
       */
      getRandomFromCategory(arg0: string): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      handleLegacyListenedLines(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, MediaData arg1): boolean
       */
      hasListenedToAll(arg0: zombie.characters.IsoPlayer, arg1: zombie.radio.media.MediaData): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): boolean
       */
      hasListenedToLine(arg0: zombie.characters.IsoPlayer, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, int arg3): zombie.radio.media.MediaData
       */
      register(arg0: string, arg1: string, arg2: string, arg3: number): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      sendRequestData(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getMediaTypeForCategory(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static receiveRequestData(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static toAscii(arg0: string): string;
    }
    /**
     * @customConstructor MediaNameSorter.new
     * @
     * [CLASS] zombie.radio.media.RecordedMedia$MediaNameSorter
     */
    export class RecordedMedia$MediaNameSorter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (MediaData arg0, MediaData arg1): number
       *  - (Object arg0, Object arg1): number
       */
      compare<U>(arg0: any, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Comparator<T>
       */
      reversed<U>(): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): java.util.Comparator<T>
       *  - (Function arg0): java.util.Comparator<T>
       *  - (Function arg0, Comparator arg1): java.util.Comparator<T>
       */
      thenComparing<U>(arg0: java.util.Comparator<any> | java.util._function_.Function<any, U>, arg1?: java.util.Comparator<U>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToDoubleFunction arg0): java.util.Comparator<T>
       */
      thenComparingDouble<U>(arg0: java.util._function_.ToDoubleFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToIntFunction arg0): java.util.Comparator<T>
       */
      thenComparingInt<U>(arg0: java.util._function_.ToIntFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToLongFunction arg0): java.util.Comparator<T>
       */
      thenComparingLong<U>(arg0: java.util._function_.ToLongFunction<any>): java.util.Comparator<any>;
    }
  }
}
