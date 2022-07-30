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
  export namespace zombie.globalObjects {
    /**
     * @customConstructor CGlobalObject.new
     * @
     * [CLASS] zombie.globalObjects.CGlobalObject extends zombie.globalObjects.GlobalObject
     */
    export class CGlobalObject {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.globalObjects.GlobalObjectSystem
       */
      getSystem(): zombie.globalObjects.GlobalObjectSystem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setLocation(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor CGlobalObjectSystem.new
     * @
     * [CLASS] zombie.globalObjects.CGlobalObjectSystem extends zombie.globalObjects.GlobalObjectSystem
     */
    export class CGlobalObjectSystem {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      allocList(): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      finishedWithList(arg0: java.util.ArrayList<zombie.globalObjects.GlobalObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.globalObjects.GlobalObject
       */
      getObjectAt(arg0: number, arg1: number, arg2: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.globalObjects.GlobalObject
       */
      getObjectByIndex(arg0: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getObjectCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      getObjectsAdjacentTo(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      getObjectsInChunk(arg0: number, arg1: number): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      hasObjectsInChunk(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.globalObjects.GlobalObject
       */
      newObject(arg0: number, arg1: number, arg2: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, KahluaTable arg3): void
       */
      receiveNewLuaObjectAt(arg0: number, arg1: number, arg2: number, arg3: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      receiveRemoveLuaObjectAt(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      receiveServerCommand(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, KahluaTable arg3): void
       */
      receiveUpdateLuaObjectAt(arg0: number, arg1: number, arg2: number, arg3: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (GlobalObject arg0): void
       */
      removeObject(arg0: zombie.globalObjects.GlobalObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoPlayer arg1, KahluaTable arg2): void
       */
      sendCommand(arg0: string, arg1: zombie.characters.IsoPlayer, arg2: se.krka.kahlua.vm.KahluaTable): void;
    }
    /**
     * @customConstructor CGlobalObjects.new
     * @
     * [CLASS] zombie.globalObjects.CGlobalObjects
     */
    export class CGlobalObjects {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.globalObjects.CGlobalObjectSystem
       */
      static getSystemByIndex(arg0: number): zombie.globalObjects.CGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.globalObjects.CGlobalObjectSystem
       */
      static getSystemByName(arg0: string): zombie.globalObjects.CGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSystemCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initSystems(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static loadInitialState(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.globalObjects.CGlobalObjectSystem
       */
      static newSystem(arg0: string): zombie.globalObjects.CGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static noise(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, KahluaTable arg2): boolean
       */
      static receiveServerCommand(arg0: string, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.globalObjects.CGlobalObjectSystem
       */
      static registerSystem(arg0: string): zombie.globalObjects.CGlobalObjectSystem;
    }
    /**
     * @customConstructor GlobalObject.new
     * @
     * [ABSTRACT CLASS] zombie.globalObjects.GlobalObject
     */
    export class GlobalObject {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.globalObjects.GlobalObjectSystem
       */
      getSystem(): zombie.globalObjects.GlobalObjectSystem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setLocation(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor GlobalObjectSystem.new
     * @
     * [ABSTRACT CLASS] zombie.globalObjects.GlobalObjectSystem
     */
    export class GlobalObjectSystem {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      allocList(): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      finishedWithList(arg0: java.util.ArrayList<zombie.globalObjects.GlobalObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.globalObjects.GlobalObject
       */
      getObjectAt(arg0: number, arg1: number, arg2: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.globalObjects.GlobalObject
       */
      getObjectByIndex(arg0: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getObjectCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      getObjectsAdjacentTo(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      getObjectsInChunk(arg0: number, arg1: number): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      hasObjectsInChunk(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.globalObjects.GlobalObject
       */
      newObject(arg0: number, arg1: number, arg2: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (GlobalObject arg0): void
       */
      removeObject(arg0: zombie.globalObjects.GlobalObject): void;
    }
    /**
     * @customConstructor SGlobalObject.new
     * @
     * [CLASS] zombie.globalObjects.SGlobalObject extends zombie.globalObjects.GlobalObject
     */
    export class SGlobalObject {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.globalObjects.GlobalObjectSystem
       */
      getSystem(): zombie.globalObjects.GlobalObjectSystem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setLocation(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * @customConstructor SGlobalObjectSystem.new
     * @
     * [CLASS] zombie.globalObjects.SGlobalObjectSystem extends zombie.globalObjects.GlobalObjectSystem
     */
    export class SGlobalObjectSystem {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      OnIsoObjectChangedItself(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (SGlobalObject arg0): void
       */
      addGlobalObjectOnClient(arg0: zombie.globalObjects.SGlobalObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      allocList(): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      chunkLoaded(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      finishedWithList(arg0: java.util.ArrayList<zombie.globalObjects.GlobalObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getInitialStateForClient(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.globalObjects.GlobalObject
       */
      getObjectAt(arg0: number, arg1: number, arg2: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.globalObjects.GlobalObject
       */
      getObjectByIndex(arg0: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getObjectCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      getObjectsAdjacentTo(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.ArrayList<zombie.globalObjects.GlobalObject>
       */
      getObjectsInChunk(arg0: number, arg1: number): java.util.ArrayList<zombie.globalObjects.GlobalObject>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      hasObjectsInChunk(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0?: java.nio.ByteBuffer, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      loadedWorldVersion(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.globalObjects.GlobalObject
       */
      newObject(arg0: number, arg1: number, arg2: number): zombie.globalObjects.GlobalObject;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoPlayer arg1, KahluaTable arg2): void
       */
      receiveClientCommand(arg0: string, arg1: zombie.characters.IsoPlayer, arg2: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (SGlobalObject arg0): void
       */
      removeGlobalObjectOnClient(arg0: zombie.globalObjects.SGlobalObject): void;
      /**
       * Method Parameters: 
       *  - (GlobalObject arg0): void
       */
      removeObject(arg0: zombie.globalObjects.GlobalObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (ByteBuffer arg0): void
       */
      save(arg0?: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      sendCommand(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setModDataKeys(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setObjectModDataKeys(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setObjectSyncKeys(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (SGlobalObject arg0): void
       */
      updateGlobalObjectOnClient(arg0: zombie.globalObjects.SGlobalObject): void;
    }
    /**
     * @customConstructor SGlobalObjects.new
     * @
     * [CLASS] zombie.globalObjects.SGlobalObjects
     */
    export class SGlobalObjects {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): void
       */
      static OnIsoObjectChangedItself(arg0: string, arg1: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static chunkLoaded(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.globalObjects.SGlobalObjectSystem
       */
      static getSystemByIndex(arg0: number): zombie.globalObjects.SGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.globalObjects.SGlobalObjectSystem
       */
      static getSystemByName(arg0: string): zombie.globalObjects.SGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSystemCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initSystems(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static load(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.globalObjects.SGlobalObjectSystem
       */
      static newSystem(arg0: string): zombie.globalObjects.SGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static noise(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, IsoPlayer arg2, KahluaTable arg3): boolean
       */
      static receiveClientCommand(arg0: string, arg1: string, arg2: zombie.characters.IsoPlayer, arg3: se.krka.kahlua.vm.KahluaTable): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.globalObjects.SGlobalObjectSystem
       */
      static registerSystem(arg0: string): zombie.globalObjects.SGlobalObjectSystem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static save(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static saveInitialStateForClient(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
  }
}
