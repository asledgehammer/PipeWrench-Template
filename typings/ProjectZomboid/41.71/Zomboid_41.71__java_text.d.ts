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
 * File generated at Friday July 2022 15:18:33.629-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace java.text {
    export type AttributedCharacterIterator = any;
    export type DateFormat = any;
    export type DateFormatSymbols = any;
    export type FieldPosition = any;
    export type NumberFormat = any;
    export type ParsePosition = any;
    /**
     * @customConstructor SimpleDateFormat.new
     * @
     * [CLASS] java.text.SimpleDateFormat extends java.text.DateFormat
     */
    export class SimpleDateFormat {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0)
       *  - (String arg0, DateFormatSymbols arg1)
       *  - (String arg0, Locale arg1)
       */
      constructor(arg0?: string | null, arg1?: java.text.DateFormatSymbols | java.util.Locale | null);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      applyLocalizedPattern(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      applyPattern(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Date arg0): string
       *  - (Object arg0): string
       *  - (Date arg0, StringBuffer arg1, FieldPosition arg2): java.lang.StringBuffer
       *  - (Object arg0, StringBuffer arg1, FieldPosition arg2): java.lang.StringBuffer
       */
      format(arg0: any, arg1?: java.lang.StringBuffer, arg2?: java.text.FieldPosition): string | java.lang.StringBuffer;
      /**
       * Method Parameters: 
       *  - (Object arg0): java.text.AttributedCharacterIterator
       */
      formatToCharacterIterator(arg0: any): java.text.AttributedCharacterIterator;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Date
       */
      get2DigitYearStart(): java.util.Date;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Calendar
       */
      getCalendar(): java.util.Calendar;
      /**
       * Method Parameters: 
       *  - (Empty): java.text.DateFormatSymbols
       */
      getDateFormatSymbols(): java.text.DateFormatSymbols;
      /**
       * Method Parameters: 
       *  - (Empty): java.text.NumberFormat
       */
      getNumberFormat(): java.text.NumberFormat;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.TimeZone
       */
      getTimeZone(): java.util.TimeZone;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLenient(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.Date
       *  - (String arg0, ParsePosition arg1): java.util.Date
       */
      parse(arg0: string, arg1?: java.text.ParsePosition): java.util.Date;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       *  - (String arg0, ParsePosition arg1): any
       */
      parseObject(arg0: string, arg1?: java.text.ParsePosition): any;
      /**
       * Method Parameters: 
       *  - (Date arg0): void
       */
      set2DigitYearStart(arg0: java.util.Date): void;
      /**
       * Method Parameters: 
       *  - (Calendar arg0): void
       */
      setCalendar(arg0: java.util.Calendar): void;
      /**
       * Method Parameters: 
       *  - (DateFormatSymbols arg0): void
       */
      setDateFormatSymbols(arg0: java.text.DateFormatSymbols): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLenient(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (NumberFormat arg0): void
       */
      setNumberFormat(arg0: java.text.NumberFormat): void;
      /**
       * Method Parameters: 
       *  - (TimeZone arg0): void
       */
      setTimeZone(arg0: java.util.TimeZone): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toLocalizedPattern(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toPattern(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.Locale[]
       */
      static getAvailableLocales(): java.util.Locale[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.text.DateFormat
       *  - (int arg0): java.text.DateFormat
       *  - (int arg0, Locale arg1): java.text.DateFormat
       */
      static getDateInstance(arg0?: number, arg1?: java.util.Locale): java.text.DateFormat;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.text.DateFormat
       *  - (int arg0, int arg1): java.text.DateFormat
       *  - (int arg0, int arg1, Locale arg2): java.text.DateFormat
       */
      static getDateTimeInstance(arg0?: number, arg1?: number, arg2?: java.util.Locale): java.text.DateFormat;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.text.DateFormat
       */
      static getInstance(): java.text.DateFormat;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.text.DateFormat
       *  - (int arg0): java.text.DateFormat
       *  - (int arg0, Locale arg1): java.text.DateFormat
       */
      static getTimeInstance(arg0?: number, arg1?: java.util.Locale): java.text.DateFormat;
    }
  }
}
