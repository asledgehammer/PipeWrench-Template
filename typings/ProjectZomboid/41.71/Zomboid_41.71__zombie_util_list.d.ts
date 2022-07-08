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
 * File generated at Friday July 2022 15:18:33.668-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.util.list {
    /**
     * @customConstructor PZArrayList.new
     * @
     * [CLASS] zombie.util.list.PZArrayList extends java.util.AbstractList<E>
     */
    export class PZArrayList<E> {
      /**
       * Constructors: 
       *  - (Class arg0, int arg1)
       */
      constructor(arg0: java.lang.Class<E> | null, arg1: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add<E, T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<E, T>(arg0: java.util.Collection<any> | number, arg1?: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<E, T>(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<E, T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<E, T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<E, T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<E, T>(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<E, T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): E[]
       */
      getElements<E, T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<E, T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf<E, T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<E, T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<E, T>(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf<E, T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<E, T>(arg0?: number): java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<E, T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0): E
       */
      remove<E, T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<E, T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<E, T>(arg0: java.util._function_.Predicate<any>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<E, T>(arg0: java.util._function_.UnaryOperator<any>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<E, T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<E, T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<E, T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<E, T>(arg0: java.util.Comparator<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<E, T>(): java.util.Spliterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<E, T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<E, T>(arg0: number, arg1: number): java.util.List<any>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<E, T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<E, T>(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.AbstractList<E>
       */
      static emptyList<E, T>(): java.util.AbstractList<E>;
    }
  }
}
