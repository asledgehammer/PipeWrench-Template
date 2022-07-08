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
 * File generated at Friday July 2022 15:18:33.638-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace java.util {
    export type AbstractList<E> = any;
    export type ArrayDeque<E> = any;
    /**
     * @customConstructor ArrayList.new
     * @
     * [CLASS] java.util.ArrayList extends java.util.AbstractList<E>
     */
    export class ArrayList<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Collection arg0)
       *  - (int arg0)
       */
      constructor(arg0?: java.util.Collection<E> | number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add<T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<T>(arg0: java.util.Collection<E> | number, arg1?: java.util.Collection<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<T>(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<T>(arg0: java.util._function_.Consumer<E>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<T>(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<T>(arg0?: number): java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0): E
       */
      remove<T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<T>(arg0: java.util._function_.Predicate<E>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<T>(arg0: java.util._function_.UnaryOperator<E>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<T>(arg0: java.util.Comparator<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<T>(): java.util.Spliterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<T>(arg0: number, arg1: number): java.util.List<E>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<T>(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize<T>(): void;
    }
    export type BitSet = any;
    export type Calendar = any;
    export type Collection<E> = any;
    export type Comparator<T> = any;
    export type Date = any;
    /**
     * @customConstructor EnumMap.new
     * @
     * [CLASS] java.util.EnumMap extends java.util.AbstractMap<K, V>
     */
    export class EnumMap<K, V> {
      /**
       * Constructors: 
       *  - (Class arg0)
       *  - (Map arg0)
       *  - (EnumMap arg0)
       */
      constructor(arg0: java.lang.Class<K> | java.util.Map<K, V> | java.util.EnumMap<K, V> | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): java.util.EnumMap<K, V>
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      compute(arg0: any, arg1: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Function arg1): V
       */
      computeIfAbsent(arg0: any, arg1: java.util._function_.Function<any, any>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      computeIfPresent(arg0: any, arg1: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsKey(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsValue(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<java.util.Map$Entry<K, V>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<K, V>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<any, any>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      get(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      getOrDefault(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<K>
       */
      keySet(): java.util.Set<K>;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): any
       *  - (Enum arg0, Object arg1): V
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       *  - (Object arg0, Object arg1, Object arg2): boolean
       */
      replace(arg0: any, arg1: any, arg2?: any): any;
      /**
       * Method Parameters: 
       *  - (BiFunction arg0): void
       */
      replaceAll(arg0: java.util._function_.BiFunction<any, any, any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<V>
       */
      values(): java.util.Collection<V>;
    }
    export type Enumeration<E> = any;
    export type GregorianCalendar = any;
    /**
     * @customConstructor HashMap.new
     * @
     * [CLASS] java.util.HashMap extends java.util.AbstractMap<K, V>
     */
    export class HashMap<K, V> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (Map arg0)
       *  - (int arg0, float arg1)
       */
      constructor(arg0?: number | java.util.Map<K, V>, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      compute(arg0: any, arg1: java.util._function_.BiFunction<K, V, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Function arg1): V
       */
      computeIfAbsent(arg0: any, arg1: java.util._function_.Function<K, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      computeIfPresent(arg0: any, arg1: java.util._function_.BiFunction<K, V, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsKey(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsValue(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<java.util.Map$Entry<K, V>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<K, V>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      get(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      getOrDefault(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<K>
       */
      keySet(): java.util.Set<K>;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<V, V, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       *  - (Object arg0, Object arg1, Object arg2): boolean
       */
      replace(arg0: any, arg1: any, arg2?: any): any;
      /**
       * Method Parameters: 
       *  - (BiFunction arg0): void
       */
      replaceAll(arg0: java.util._function_.BiFunction<K, V, V>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<V>
       */
      values(): java.util.Collection<V>;
    }
    export type HashSet<E> = any;
    /**
     * @customConstructor Iterator.new
     * @
     * [INTERFACE] java.util.Iterator
     */
    export class Iterator<E> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachRemaining(arg0: java.util._function_.Consumer<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasNext(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      next(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
    }
    export type LinkedHashMap<K, V> = any;
    /**
     * @customConstructor LinkedList.new
     * @
     * [CLASS] java.util.LinkedList extends java.util.AbstractSequentialList<E>
     */
    export class LinkedList<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Collection arg0)
       */
      constructor(arg0?: java.util.Collection<E> | null);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add<T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<T>(arg0: java.util.Collection<E> | number, arg1?: java.util.Collection<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addFirst<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addLast<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<T>(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      descendingIterator<T>(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      element<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<T>(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      getFirst<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      getLast<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<T>(): java.util.Iterator<any>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<T>(arg0?: number): java.util.ListIterator<any> | java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      offer<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      offerFirst<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      offerLast<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peek<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peekFirst<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peekLast<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      poll<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pollFirst<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pollLast<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pop<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      push<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): E
       *  - (Object arg0): boolean
       *  - (int arg0): E
       */
      remove<T>(arg0?: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      removeFirst<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeFirstOccurrence<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<T>(arg0: java.util._function_.Predicate<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      removeLast<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeLastOccurrence<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<T>(arg0: java.util._function_.UnaryOperator<any>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<T>(arg0: java.util.Comparator<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<T>(): java.util.Spliterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<T>(arg0: number, arg1: number): java.util.List<any>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<T>(): string;
    }
    export type List<E> = any;
    export type ListIterator<E> = any;
    export type Locale = any;
    export type Map<K, V> = any;
    export type Map$Entry<K, V> = any;
    export type Set<E> = any;
    export type Spliterator<T> = any;
    /**
     * @customConstructor Stack.new
     * @
     * [CLASS] java.util.Stack extends java.util.Vector<E>
     */
    export class Stack<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add<T>(arg0: any, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<T>(arg0: java.util.Collection<any> | number, arg1?: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addElement<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity<T>(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<T>(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       */
      copyInto<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      elementAt<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Enumeration<E>
       */
      elements<T>(): java.util.Enumeration<any>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      empty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      firstElement<T>(): any;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<T>(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      indexOf<T>(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      insertElementAt<T>(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<T>(): java.util.Iterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      lastElement<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      lastIndexOf<T>(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<T>(arg0?: number): java.util.ListIterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peek<T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pop<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): E
       */
      push<T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove<T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllElements<T>(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeElement<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeElementAt<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<T>(arg0: java.util._function_.Predicate<any>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<T>(arg0: java.util._function_.UnaryOperator<any>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      search<T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      setElementAt<T>(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSize<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<T>(arg0: java.util.Comparator<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<T>(): java.util.Spliterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<T>(arg0: number, arg1: number): java.util.List<any>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<T>(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize<T>(): void;
    }
    export type TimeZone = any;
    export type UUID = any;
    /**
     * @customConstructor Vector.new
     * @
     * [CLASS] java.util.Vector extends java.util.AbstractList<E>
     */
    export class Vector<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Collection arg0)
       *  - (int arg0)
       *  - (int arg0, int arg1)
       */
      constructor(arg0?: java.util.Collection<E> | number, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add<T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<T>(arg0: java.util.Collection<E> | number, arg1?: java.util.Collection<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addElement<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity<T>(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<T>(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       */
      copyInto<T>(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      elementAt<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Enumeration<E>
       */
      elements<T>(): java.util.Enumeration<E>;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      firstElement<T>(): any;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<T>(arg0: java.util._function_.Consumer<E>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      indexOf<T>(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      insertElementAt<T>(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<T>(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      lastElement<T>(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      lastIndexOf<T>(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<T>(arg0?: number): java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove<T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllElements<T>(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeElement<T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeElementAt<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<T>(arg0: java.util._function_.Predicate<E>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<T>(arg0: java.util._function_.UnaryOperator<E>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      setElementAt<T>(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSize<T>(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<T>(arg0: java.util.Comparator<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<T>(): java.util.Spliterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<T>(arg0: number, arg1: number): java.util.List<E>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<T>(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize<T>(): void;
    }
  }
}
