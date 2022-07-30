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
  export namespace zombie.asset {
    /**
     * @customConstructor Asset.new
     * @
     * [ABSTRACT CLASS] zombie.asset.Asset
     */
    export class Asset {

      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
    }
    /**
     * @customConstructor ObserverCallback.new
     * @
     * [CLASS] zombie.asset.Asset$ObserverCallback extends java.util.ArrayList<zombie.asset.AssetStateObserver>
     */
    export class Asset$ObserverCallback {
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
      add<T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<T>(arg0: java.util.Collection<zombie.asset.AssetStateObserver> | number, arg1?: java.util.Collection<zombie.asset.AssetStateObserver>): boolean;
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
      forEach<T>(arg0: java.util._function_.Consumer<zombie.asset.AssetStateObserver>): void;
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
       *  - (State arg0, State arg1, Asset arg2): void
       */
      invoke<T>(arg0: zombie.asset.Asset$State, arg1: zombie.asset.Asset$State, arg2: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<T>(): java.util.Iterator<zombie.asset.AssetStateObserver>;
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
      listIterator<T>(arg0?: number): java.util.ListIterator<zombie.asset.AssetStateObserver>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<T>(): java.util.stream.Stream<zombie.asset.AssetStateObserver>;
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
      removeIf<T>(arg0: java.util._function_.Predicate<zombie.asset.AssetStateObserver>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<T>(arg0: java.util._function_.UnaryOperator<zombie.asset.AssetStateObserver>): void;
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
      sort<T>(arg0: java.util.Comparator<zombie.asset.AssetStateObserver>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<T>(): java.util.Spliterator<zombie.asset.AssetStateObserver>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<T>(): java.util.stream.Stream<zombie.asset.AssetStateObserver>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<T>(arg0: number, arg1: number): java.util.List<zombie.asset.AssetStateObserver>;
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
    /** [ENUM] zombie.asset.Asset$State */
    export class Asset$State {
      protected constructor();
      static readonly EMPTY: zombie.asset.Asset$State;
      static readonly FAILURE: zombie.asset.Asset$State;
      static readonly READY: zombie.asset.Asset$State;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor AssetManager.new
     * @
     * [ABSTRACT CLASS] zombie.asset.AssetManager
     */
    export class AssetManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (AssetType arg0, AssetManagers arg1): void
       */
      create(arg0: zombie.asset.AssetType, arg1: zombie.asset.AssetManagers): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      enableUnload(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager$AssetTable
       */
      getAssetTable(): zombie.asset.AssetManager$AssetTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManagers
       */
      getOwner(): zombie.asset.AssetManagers;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       *  - (AssetPath arg0): zombie.asset.Asset
       *  - (AssetPath arg0, AssetParams arg1): zombie.asset.Asset
       */
      load(arg0: zombie.asset.Asset | zombie.asset.AssetPath, arg1?: zombie.asset.AssetManager$AssetParams): void | zombie.asset.Asset;
      /**
       * Method Parameters: 
       *  - (State arg0, State arg1, Asset arg2): void
       */
      onStateChanged(arg0: zombie.asset.Asset$State, arg1: zombie.asset.Asset$State, arg2: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetPath arg0): void
       *  - (Asset arg0): void
       *  - (Asset arg0, AssetParams arg1): void
       */
      reload(arg0: zombie.asset.AssetPath | zombie.asset.Asset, arg1?: zombie.asset.AssetManager$AssetParams): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeUnreferenced(): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       *  - (AssetPath arg0): void
       */
      unload(arg0: zombie.asset.Asset | zombie.asset.AssetPath): void;
    }
    /**
     * @customConstructor AssetParams.new
     * @
     * [CLASS] zombie.asset.AssetManager$AssetParams
     */
    export class AssetManager$AssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor AssetTable.new
     * @
     * [CLASS] zombie.asset.AssetManager$AssetTable extends gnu.trove.map.hash.THashMap<java.lang.String, zombie.asset.Asset>
     */
    export class AssetManager$AssetTable {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (Empty): void
       */
      compact(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      compute(arg0: any, arg1: java.util._function_.BiFunction<string, zombie.asset.Asset, zombie.asset.Asset>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Function arg1): V
       */
      computeIfAbsent(arg0: any, arg1: java.util._function_.Function<string, zombie.asset.Asset>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      computeIfPresent(arg0: any, arg1: java.util._function_.BiFunction<string, zombie.asset.Asset, zombie.asset.Asset>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
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
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<java.util.Map$Entry<K, V>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<string, zombie.asset.Asset>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (TObjectProcedure arg0): boolean
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: gnu.trove.procedure.TObjectProcedure<string> | java.util._function_.BiConsumer<string, zombie.asset.Asset>): boolean | void;
      /**
       * Method Parameters: 
       *  - (TObjectObjectProcedure arg0): boolean
       */
      forEachEntry(arg0: gnu.trove.procedure.TObjectObjectProcedure<string, zombie.asset.Asset>): boolean;
      /**
       * Method Parameters: 
       *  - (TObjectProcedure arg0): boolean
       */
      forEachKey(arg0: gnu.trove.procedure.TObjectProcedure<string>): boolean;
      /**
       * Method Parameters: 
       *  - (TObjectProcedure arg0): boolean
       */
      forEachValue(arg0: gnu.trove.procedure.TObjectProcedure<zombie.asset.Asset>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      get(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAutoCompactionFactor(): number;
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
      keySet(): java.util.Set<string>;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<zombie.asset.Asset, zombie.asset.Asset, zombie.asset.Asset>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<string, zombie.asset.Asset>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (ObjectInput arg0): void
       */
      readExternal(arg0: java.io.ObjectInput): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      reenableAutoCompaction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeAt(arg0: number): void;
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
      replaceAll(arg0: java.util._function_.BiFunction<string, zombie.asset.Asset, zombie.asset.Asset>): void;
      /**
       * Method Parameters: 
       *  - (TObjectObjectProcedure arg0): boolean
       */
      retainEntries(arg0: gnu.trove.procedure.TObjectObjectProcedure<string, zombie.asset.Asset>): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAutoCompactionFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUp(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tempDisableAutoCompaction(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (TObjectFunction arg0): void
       */
      transformValues(arg0: gnu.trove._function_.TObjectFunction<zombie.asset.Asset, zombie.asset.Asset>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<V>
       */
      values(): java.util.Collection<zombie.asset.Asset>;
      /**
       * Method Parameters: 
       *  - (ObjectOutput arg0): void
       */
      writeExternal(arg0: java.io.ObjectOutput): void;
    }
    /**
     * @customConstructor AssetManagers.new
     * @
     * [CLASS] zombie.asset.AssetManagers
     */
    export class AssetManagers {
      /**
       * Constructors: 
       *  - (FileSystem arg0)
       */
      constructor(arg0: zombie.fileSystem.FileSystem);
      /**
       * Method Parameters: 
       *  - (AssetType arg0, AssetManager arg1): void
       */
      add(arg0: zombie.asset.AssetType, arg1: zombie.asset.AssetManager): void;
      /**
       * Method Parameters: 
       *  - (AssetType arg0): zombie.asset.AssetManager
       */
      get(arg0: zombie.asset.AssetType): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.fileSystem.FileSystem
       */
      getFileSystem(): zombie.fileSystem.FileSystem;
    }
    /**
     * @customConstructor AssetManagerTable.new
     * @
     * [CLASS] zombie.asset.AssetManagers$AssetManagerTable extends gnu.trove.map.hash.TLongObjectHashMap<zombie.asset.AssetManager>
     */
    export class AssetManagers$AssetManagerTable {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (Empty): void
       */
      compact(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      contains(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      containsKey(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsValue(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (TLongProcedure arg0): boolean
       */
      forEach(arg0: gnu.trove.procedure.TLongProcedure): boolean;
      /**
       * Method Parameters: 
       *  - (TLongObjectProcedure arg0): boolean
       */
      forEachEntry(arg0: gnu.trove.procedure.TLongObjectProcedure<zombie.asset.AssetManager>): boolean;
      /**
       * Method Parameters: 
       *  - (TLongProcedure arg0): boolean
       */
      forEachKey(arg0: gnu.trove.procedure.TLongProcedure): boolean;
      /**
       * Method Parameters: 
       *  - (TObjectProcedure arg0): boolean
       */
      forEachValue(arg0: gnu.trove.procedure.TObjectProcedure<zombie.asset.AssetManager>): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0): V
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAutoCompactionFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoEntryKey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNoEntryValue(): number;
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
       *  - (Empty): gnu.trove.iterator.TLongObjectIterator<V>
       */
      iterator(): gnu.trove.iterator.TLongObjectIterator<zombie.asset.AssetManager>;
      /**
       * Method Parameters: 
       *  - (Empty): gnu.trove.set.TLongSet
       */
      keySet(): gnu.trove.set.TLongSet;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       *  - (long[] arg0): number[]
       */
      keys(arg0?: number[]): number[];
      /**
       * Method Parameters: 
       *  - (long arg0, Object arg1): V
       */
      put(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       *  - (TLongObjectMap arg0): void
       */
      putAll(arg0: java.util.Map<number, zombie.asset.AssetManager> | gnu.trove.map.TLongObjectMap<zombie.asset.AssetManager>): void;
      /**
       * Method Parameters: 
       *  - (long arg0, Object arg1): V
       */
      putIfAbsent(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (ObjectInput arg0): void
       */
      readExternal(arg0: java.io.ObjectInput): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      reenableAutoCompaction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0): V
       */
      remove(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (TLongObjectProcedure arg0): boolean
       */
      retainEntries(arg0: gnu.trove.procedure.TLongObjectProcedure<zombie.asset.AssetManager>): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAutoCompactionFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tempDisableAutoCompaction(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (TObjectFunction arg0): void
       */
      transformValues(arg0: gnu.trove._function_.TObjectFunction<zombie.asset.AssetManager, zombie.asset.AssetManager>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<V>
       */
      valueCollection(): java.util.Collection<zombie.asset.AssetManager>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): V[]
       */
      values(arg0?: any): any;
      /**
       * Method Parameters: 
       *  - (ObjectOutput arg0): void
       */
      writeExternal(arg0: java.io.ObjectOutput): void;
    }
    /**
     * @customConstructor AssetPath.new
     * @
     * [CLASS] zombie.asset.AssetPath
     */
    export class AssetPath {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHash(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPath(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor AssetStateObserver.new
     * @
     * [INTERFACE] zombie.asset.AssetStateObserver
     */
    export class AssetStateObserver {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (State arg0, State arg1, Asset arg2): void
       */
      onStateChanged(arg0: zombie.asset.Asset$State, arg1: zombie.asset.Asset$State, arg2: zombie.asset.Asset): void;
    }
    /**
     * @customConstructor AssetType.new
     * @
     * [CLASS] zombie.asset.AssetType
     */
    export class AssetType {
      /** zombie.asset.AssetType */
      static readonly INVALID_ASSET_TYPE?: zombie.asset.AssetType;

      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
    }
  }
}
