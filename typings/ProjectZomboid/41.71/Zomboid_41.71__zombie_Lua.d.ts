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
 * File generated at Friday July 2022 15:18:33.646-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.Lua {
    /**
     * @customConstructor Event.new
     * @
     * [CLASS] zombie.Lua.Event
     */
    export class Event {
      /** int */
      static readonly ADD: number;
      /** int */
      static readonly NUM_FUNCTIONS: number;

      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string | null, arg1: number);
      /**
       * Method Parameters: 
       *  - (Platform arg0, KahluaTable arg1): void
       */
      register(arg0: se.krka.kahlua.vm.Platform, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0, LuaCaller arg1, Object[] arg2): boolean
       */
      trigger(arg0: se.krka.kahlua.vm.KahluaTable, arg1: se.krka.kahlua.integration.LuaCaller, arg2: any): boolean;
    }
    /**
     * @customConstructor Add.new
     * @
     * [CLASS] zombie.Lua.Event$Add
     */
    export class Event$Add {
      /**
       * Constructors: 
       *  - (Event arg0)
       */
      constructor(arg0: zombie.Lua.Event | null);
      /**
       * Method Parameters: 
       *  - (LuaCallFrame arg0, int arg1): number
       */
      call(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): number;
    }
    /**
     * @customConstructor Remove.new
     * @
     * [CLASS] zombie.Lua.Event$Remove
     */
    export class Event$Remove {
      /**
       * Constructors: 
       *  - (Event arg0)
       */
      constructor(arg0: zombie.Lua.Event | null);
      /**
       * Method Parameters: 
       *  - (LuaCallFrame arg0, int arg1): number
       */
      call(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): number;
    }
    /**
     * @customConstructor LuaEventManager.new
     * @
     * [CLASS] zombie.Lua.LuaEventManager
     */
    export class LuaEventManager {
      /** java.util.ArrayList<se.krka.kahlua.vm.LuaClosure> */
      static readonly OnTickCallbacks?: java.util.ArrayList<se.krka.kahlua.vm.LuaClosure>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (LuaCallFrame arg0, int arg1): number
       */
      call(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.Lua.Event
       */
      static AddEvent(arg0: string): zombie.Lua.Event;
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
       *  - (Empty): void
       */
      static ResetCallbacks(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static clear(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Platform arg0, KahluaTable arg1): void
       */
      static register(arg0: se.krka.kahlua.vm.Platform, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Prototype arg0, LuaClosure arg1): void
       */
      static reroute(arg0: se.krka.kahlua.vm.Prototype, arg1: se.krka.kahlua.vm.LuaClosure): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6, Object arg7): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8): void
       */
      static triggerEvent(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       */
      static triggerEventGarbage(arg0: string, arg1: any, arg2?: any, arg3?: any, arg4?: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      static triggerEventUnique(arg0: string, arg1: any): void;
    }
    /**
     * @customConstructor LuaManager.new
     * @
     * [CLASS] zombie.Lua.LuaManager
     */
    export class LuaManager {
      /** se.krka.kahlua.integration.LuaCaller */
      static caller?: se.krka.kahlua.integration.LuaCaller;
      /** boolean */
      static checksumDone: boolean;
      /** se.krka.kahlua.converter.KahluaConverterManager */
      static converterManager?: se.krka.kahlua.converter.KahluaConverterManager;
      /** se.krka.kahlua.integration.LuaCaller */
      static debugcaller?: se.krka.kahlua.integration.LuaCaller;
      /** se.krka.kahlua.vm.KahluaThread */
      static debugthread?: se.krka.kahlua.vm.KahluaThread;
      /** se.krka.kahlua.vm.KahluaTable */
      static env?: se.krka.kahlua.vm.KahluaTable;
      /** zombie.Lua.LuaManager$Exposer */
      static exposer?: zombie.Lua.LuaManager$Exposer;
      /** java.util.ArrayList<java.lang.String> */
      static loadList?: java.util.ArrayList<string>;
      /** java.util.ArrayList<java.lang.String> */
      static loaded?: java.util.ArrayList<string>;
      /** java.util.HashMap<java.lang.String, java.lang.Object> */
      static loadedReturn?: java.util.HashMap<string, any>;
      /** se.krka.kahlua.j2se.J2SEPlatform */
      static platform?: se.krka.kahlua.j2se.J2SEPlatform;
      /** se.krka.kahlua.vm.KahluaThread */
      static thread?: se.krka.kahlua.vm.KahluaThread;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): zombie.iso.IsoGridSquare
       */
      static AdjacentFreeTileFinder(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static LoadDir(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): void
       */
      static LoadDirBase(arg0?: string, arg1?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): any
       *  - (String arg0, boolean arg1): any
       */
      static RunLua(arg0: string, arg1?: boolean): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Test(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      static call(arg0: string, arg1: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0): se.krka.kahlua.vm.KahluaTable
       *  - (KahluaTable arg0, KahluaTable arg1): se.krka.kahlua.vm.KahluaTable
       */
      static copyTable(arg0: se.krka.kahlua.vm.KahluaTable, arg1?: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      static dropItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoPlayer arg1): void
       */
      static fillContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static finishChecksum(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): any
       */
      static get(arg0: any): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.LuaClosure
       */
      static getDotDelimitedClosure(arg0: string): se.krka.kahlua.vm.LuaClosure;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): any
       */
      static getFunctionObject(arg0: string): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHourMinuteJava(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getLuaCacheDir(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getSandboxCacheDir(): string;
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
       *  - (Empty): void
       */
      static initChecksum(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, int arg1): void
       */
      static outputTable(arg0: se.krka.kahlua.vm.KahluaTable, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (URI arg0, File arg1): void
       */
      static searchFolders(arg0: java.net.URI, arg1: java.io.File): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1, ItemContainer arg2, ItemContainer arg3): void
       */
      static transferItem(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem, arg2: zombie.inventory.ItemContainer, arg3: zombie.inventory.ItemContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static updateOverlaySprite(arg0: zombie.iso.IsoObject): void;
    }
    /**
     * @customConstructor Exposer.new
     * @
     * [CLASS] zombie.Lua.LuaManager$Exposer extends se.krka.kahlua.integration.expose.LuaJavaClassExposer
     */
    export class LuaManager$Exposer {
      /**
       * Constructors: 
       *  - (KahluaConverterManager arg0, Platform arg1, KahluaTable arg2)
       */
      constructor(arg0: se.krka.kahlua.converter.KahluaConverterManager | null, arg1: se.krka.kahlua.vm.Platform | null, arg2: se.krka.kahlua.vm.KahluaTable | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exposeAll(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0, Class arg1, Method arg2, String arg3): void
       *  - (KahluaTable arg0, Class arg1, Constructor arg2, String arg3): void
       */
      exposeGlobalClassFunction(arg0: se.krka.kahlua.vm.KahluaTable, arg1: java.lang.Class<any>, arg2: java.lang.reflect.Method | java.lang.reflect.Constructor<any>, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      exposeGlobalFunctions(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0, Object arg1, Method arg2): void
       *  - (KahluaTable arg0, Object arg1, Method arg2, String arg3): void
       */
      exposeGlobalObjectFunction(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any, arg2: java.lang.reflect.Method, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (Class arg0): void
       *  - (Class arg0, KahluaTable arg1): void
       */
      exposeLikeJava(arg0: java.lang.Class<any>, arg1?: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Type arg0): void
       *  - (Type arg0, KahluaTable arg1): void
       */
      exposeLikeJavaRecursively(arg0: java.lang.reflect.Type, arg1?: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Class arg0, Method arg1, KahluaTable arg2): void
       *  - (Class arg0, Method arg1, String arg2, KahluaTable arg3): void
       */
      exposeMethod(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Method, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<java.lang.Class<any>, se.krka.kahlua.integration.expose.ClassDebugInformation>
       */
      getClassDebugInformation(): java.util.Map<java.lang.Class<any>, se.krka.kahlua.integration.expose.ClassDebugInformation>;
      /**
       * Method Parameters: 
       *  - (Object arg0): string
       */
      getDefinition(arg0: any): string;
      /**
       * Method Parameters: 
       *  - (Class arg0): boolean
       */
      isExposed(arg0: java.lang.Class<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Class arg0): void
       */
      setExposed(arg0: java.lang.Class<any>): void;
      /**
       * Method Parameters: 
       *  - (Class arg0): boolean
       */
      shouldExpose(arg0: java.lang.Class<any>): boolean;
    }
    /**
     * @customConstructor GlobalObject.new
     * @
     * [CLASS] zombie.Lua.LuaManager$GlobalObject
     */
    export class LuaManager$GlobalObject {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      Render3DItem(arg0: zombie.inventory.InventoryItem, arg1: zombie.iso.IsoGridSquare, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      SyncXp(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, int arg1, int arg2, int arg3, int arg4, int arg5): void
       */
      addSound(arg0: zombie.iso.IsoObject, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addZombieSitting(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, boolean arg4): void
       */
      addZombiesEating(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1, String arg2, RoomDef arg3, Integer arg4): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesInBuilding(arg0: zombie.iso.BuildingDef, arg1: number, arg2: string, arg3: zombie.iso.RoomDef, arg4: number): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, String arg6, Integer arg7): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesInOutfitArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: number): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      checkServerName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAverageFSP(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.ContainerOverlays
       */
      getContainerOverlays(): zombie.iso.ContainerOverlays;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.TileOverlays
       */
      getTileOverlays(): zombie.iso.TileOverlays;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      screenZoomIn(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      screenZoomOut(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, Perk arg1, int arg2): void
       */
      sendAddXp(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.skills.PerkFactory$Perk, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      static AddNoiseToken(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1, int arg2): void
       */
      static AddWorldSound(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0, String arg1, IsoPlayer arg2): void
       */
      static InvMngGetItem(arg0: number, arg1: string, arg2: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0, IsoPlayer arg1): void
       */
      static InvMngRemoveItem(arg0: number, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static ProceedFactionMessage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static ProcessAdminChatMessage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static ProcessSafehouseMessage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static SendCommandToServer(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (double arg0, double arg1): number
       */
      static ZombRand(arg0: number, arg1?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       */
      static ZombRandBetween(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static ZombRandFloat(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, String arg1): void
       */
      static acceptFactionInvite(arg0: zombie.characters.Faction, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0, String arg1): void
       */
      static acceptSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, boolean arg2): void
       */
      static acceptTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static activateJoypadOnSteamDeck(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static activateSteamOverlayToWebPage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static activateSteamOverlayToWorkshop(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static activateSteamOverlayToWorkshopItem(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static activateSteamOverlayToWorkshopUser(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static addAllBurntVehicles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static addAllSmashedVehicles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       *  - (Predicate arg0): void
       */
      static addAllVehicles(arg0?: java.util._function_.Predicate<zombie.scripting.objects.VehicleScript>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static addCarCrash(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      static addPhysicsObject(): zombie.vehicles.BaseVehicle;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      static addTicket(arg0: string, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      static addUserlog(arg0: string, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.BaseVehicle
       */
      static addVehicle(arg0: string): zombie.vehicles.BaseVehicle;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, IsoDirections arg1, Integer arg2, IsoGridSquare arg3): zombie.vehicles.BaseVehicle
       */
      static addVehicleDebug(arg0: string, arg1: zombie.iso.IsoDirections, arg2: number, arg3: zombie.iso.IsoGridSquare): zombie.vehicles.BaseVehicle;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static addVirtualZombie(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      static addWarningPoint(arg0: string, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, String arg4, Integer arg5): java.util.ArrayList<zombie.characters.IsoZombie>
       *  - (int arg0, int arg1, int arg2, int arg3, String arg4, Integer arg5, boolean arg6, boolean arg7, boolean arg8, boolean arg9, float arg10): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      static addZombiesInOutfit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6?: boolean, arg7?: boolean, arg8?: boolean, arg9?: boolean, arg10?: number): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static assaultPlayer(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static attachTrailerToPlayerVehicle(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static backToSinglePlayer(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static breakpoint(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canConnect(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canInviteFriends(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canModifyPlayerScoreboard(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canModifyPlayerStats(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canSeePlayerStats(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static checkPlayerCanUseChat(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static checkSaveFileExists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static checkSaveFolderExists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static checkSavePlayerExists(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.scripting.objects.Item
       */
      static cloneItemType(arg0: string, arg1: string): zombie.scripting.objects.Item;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static configureLighting(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static connectToServerStateCallback(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0): se.krka.kahlua.vm.KahluaTable
       *  - (KahluaTable arg0, KahluaTable arg1): se.krka.kahlua.vm.KahluaTable
       */
      static copyTable(arg0: se.krka.kahlua.vm.KahluaTable, arg1?: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      static createHordeFromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): void
       */
      static createHordeInAreaTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): void
       */
      static createItemTransaction(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4): zombie.scripting.objects.Item
       */
      static createNewScriptItem(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): zombie.scripting.objects.Item;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.IsoGridSquare, arg1: number): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static createRegionFile(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static createStory(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1): void
       */
      static createTile(arg0: string, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static createWorld(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, SurvivorDesc arg3, int arg4, IsoDirections arg5): zombie.characters.IsoZombie
       */
      static createZombie(arg0: number, arg1: number, arg2: number, arg3: zombie.characters.SurvivorDesc, arg4: number, arg5: zombie.iso.IsoDirections): zombie.characters.IsoZombie;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static debugFullyStreamedIn(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (Object arg0, int arg1): void
       */
      static debugLuaTable(arg0: any, arg1?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Double arg0): void
       */
      static debugSetRoomType(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static deleteAllGameModeSaves(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static deletePlayerSave(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static deleteSandboxPreset(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static deleteSave(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static disconnect(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      static doChallenge(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static doKeyPress(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      static doTutorial(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UIElement arg0, float arg1, float arg2, float arg3): void
       */
      static drawOverheadMap(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static endFileInput(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static endFileOutput(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static endHelicopter(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static endTextFileInput(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      static executeQuery(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static fileExists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Short arg0): void
       */
      static focusOnTab(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameState arg0): void
       */
      static forceChangeState(arg0: zombie.gameStates.GameState): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static forceDisconnect(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static forceSnowCheck(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getAbsoluteSaveFolderName(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getAccessLevel(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getActivatedMods(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getAllBeardStyles(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): java.util.ArrayList<string>
       */
      static getAllDecalNamesForItem(arg0: zombie.inventory.InventoryItem): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): java.util.ArrayList<string>
       */
      static getAllHairStyles(arg0: boolean): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      static getAllItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getAllItemsForBodyLocation(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): java.util.ArrayList<string>
       */
      static getAllOutfits(arg0: boolean): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      static getAllRecipes(): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<java.io.BufferedReader>
       */
      static getAllSavedPlayers(): java.util.List<java.io.BufferedReader>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getAllVehicles(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.BaseAmbientStreamManager
       */
      static getAmbientStreamManager(): zombie.BaseAmbientStreamManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.AnimationViewerState
       */
      static getAnimationViewerState(): zombie.gameStates.AnimationViewerState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.AttachmentEditorState
       */
      static getAttachmentEditorState(): zombie.gameStates.AttachmentEditorState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.BeardStyles
       */
      static getBeardStylesInstance(): zombie.core.skinnedmodel.population.BeardStyles;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      static getBehaviourDebugPlayer(): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getButtonCount(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0): number
       */
      static getCallframeTop(arg0: se.krka.kahlua.vm.Coroutine): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getCameraOffX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getCameraOffY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      static getCell(): zombie.iso.IsoCell;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, int arg1): java.lang.reflect.Field
       */
      static getClassField(arg0: any, arg1: number): java.lang.reflect.Field;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, Field arg1): any
       */
      static getClassFieldVal(arg0: any, arg1: java.lang.reflect.Field): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, int arg1): java.lang.reflect.Method
       */
      static getClassFunction(arg0: any, arg1: number): java.lang.reflect.Method;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getClientUsername(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateManager
       */
      static getClimateManager(): zombie.iso.weather.ClimateManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.weather.ClimateMoon
       */
      static getClimateMoon(): zombie.iso.weather.ClimateMoon;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      static getConnectedPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getControllerAxisCount(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static getControllerAxisValue(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getControllerButtonCount(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getControllerCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static getControllerDeadZone(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getControllerGUID(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getControllerName(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getControllerPovX(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getControllerPovY(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Core
       */
      static getCore(): zombie.core.Core;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0, int arg1): se.krka.kahlua.vm.LuaCallFrame
       */
      static getCoroutineCallframeStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): se.krka.kahlua.vm.LuaCallFrame;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0, int arg1): any
       */
      static getCoroutineObjStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0, int arg1): any
       */
      static getCoroutineObjStackWithBase(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0): number
       */
      static getCoroutineTop(arg0: se.krka.kahlua.vm.Coroutine): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.Coroutine
       */
      static getCurrentCoroutine(): se.krka.kahlua.vm.Coroutine;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentUserProfileName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentUserSteamID(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static getDBSchema(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getDebug(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.debug.DebugOptions
       */
      static getDebugOptions(): zombie.debug.DebugOptions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1): zombie.iso.IsoDirections
       */
      static getDirectionTo(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject): zombie.iso.IsoDirections;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.EditVehicleState
       */
      static getEditVehicleState(): zombie.vehicles.EditVehicleState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.erosion.ErosionMain
       */
      static getErosion(): zombie.erosion.ErosionMain;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>
       */
      static getEvolvedRecipes(): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.audio.BaseSoundBank
       */
      static getFMODSoundBank(): zombie.audio.BaseSoundBank;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.io.DataInputStream
       */
      static getFileInput(arg0: string): java.io.DataInputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.io.DataOutputStream
       */
      static getFileOutput(arg0: string): java.io.DataOutputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1): java.io.BufferedReader
       */
      static getFileReader(arg0: string, arg1: boolean): java.io.BufferedReader;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFileSeparator(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1, boolean arg2): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
       */
      static getFileWriter(arg0: string, arg1: boolean, arg2: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (LuaCallFrame arg0): string
       */
      static getFilenameOfCallframe(arg0: se.krka.kahlua.vm.LuaCallFrame): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (LuaClosure arg0): string
       */
      static getFilenameOfClosure(arg0: se.krka.kahlua.vm.LuaClosure): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (LuaClosure arg0): number
       */
      static getFirstLineOfClosure(arg0: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getFriendsList(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getFullSaveDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.GameClient
       */
      static getGameClient(): zombie.network.GameClient;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.io.DataInputStream
       */
      static getGameFilesInput(arg0: string): java.io.DataInputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.io.BufferedReader
       */
      static getGameFilesTextInput(arg0: string): java.io.BufferedReader;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getGameSpeed(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.GameTime
       */
      static getGameTime(): zombie.GameTime;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getGametimeTimestamp(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.HairStyles
       */
      static getHairStylesInstance(): zombie.core.skinnedmodel.population.HairStyles;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHourMinute(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMarkers
       */
      static getIsoMarkers(): zombie.iso.IsoMarkers;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getItemNameFromFullType(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getItemText(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadAButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadAimingAxisX(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadAimingAxisY(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadBButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadBackButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadLBumper(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadLeftStickButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadMovementAxisX(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadMovementAxisY(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadRBumper(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadRightStickButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadStartButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadXButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getJoypadYButton(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getKeyCode(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getKeyName(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getLastPlayedDate(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      static getLastStandPlayerFileNames(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getLastStandPlayersDirectory(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getLatestSave(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (LuaCallFrame arg0): number
       */
      static getLineNumber(arg0: se.krka.kahlua.vm.LuaCallFrame): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getLoadedLua(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLoadedLuaCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0): number
       */
      static getLocalVarCount(arg0: se.krka.kahlua.vm.Coroutine): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0, int arg1): string
       */
      static getLocalVarName(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0, int arg1): number
       */
      static getLocalVarStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getLotDirectories(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLuaDebuggerErrorCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getLuaDebuggerErrors(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getMapDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<string>
       */
      static getMapFoldersForMod(arg0: string): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getMapInfo(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMaxActivePlayers(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMaxPlayers(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Method arg0, int arg1): string
       */
      static getMethodParameter(arg0: java.lang.reflect.Method, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Method arg0): number
       */
      static getMethodParameterCount(arg0: java.lang.reflect.Method): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getModDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2): java.io.BufferedReader
       */
      static getModFileReader(arg0: string, arg1: string, arg2: boolean): java.io.BufferedReader;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, boolean arg3): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
       */
      static getModFileWriter(arg0: string, arg1: string, arg2: boolean, arg3: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static getModInfo(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static getModInfoByID(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      static getMods(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMouseX(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMouseXScaled(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMouseY(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMouseYScaled(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMyDocumentFolder(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getNumActivePlayers(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): number
       */
      static getNumClassFields(arg0: any): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): number
       */
      static getNumClassFunctions(arg0: any): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      static getOnlinePlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOnlineUsername(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getPacketCounts(arg0: number): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.PerformanceSettings
       */
      static getPerformance(): zombie.core.PerformanceSettings;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      static getPlayer(): zombie.characters.IsoPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.characters.IsoPlayer
       */
      static getPlayerByOnlineID(arg0: number): zombie.characters.IsoPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.IsoPlayer
       */
      static getPlayerFromUsername(arg0: string): zombie.characters.IsoPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getPlayerInfo(arg0: zombie.characters.IsoPlayer): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getPlayerScreenHeight(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getPlayerScreenLeft(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getPlayerScreenTop(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getPlayerScreenWidth(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getPublicServersList(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoPuddles
       */
      static getPuddlesManager(): zombie.iso.IsoPuddles;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.RadioAPI
       */
      static getRadioAPI(): zombie.radio.RadioAPI;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getRadioText(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Language arg0): java.util.ArrayList<string>
       */
      static getRadioTranslators(arg0: zombie.core.Language): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getRandomUUID(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getRecipeDisplayName(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getReconnectCountdownTimer(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.SpriteRenderer
       */
      static getRenderer(): zombie.core.SpriteRenderer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.StorySounds.SLSoundManager
       */
      static getSLSoundManager(): zombie.radio.StorySounds.SLSoundManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1, boolean arg2): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
       */
      static getSandboxFileWriter(arg0: string, arg1: boolean, arg2: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.SandboxOptions
       */
      static getSandboxOptions(): zombie.SandboxOptions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      static getSandboxPresets(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<java.io.File>
       */
      static getSaveDirectory(arg0: string): java.util.ArrayList<java.io.File>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getSaveDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getSaveInfo(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (File arg0): string
       */
      static getSaveName(arg0: java.io.File): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptManager
       */
      static getScriptManager(): zombie.scripting.ScriptManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.SearchMode
       */
      static getSearchMode(): zombie.iso.SearchMode;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getServerAddressFromArgs(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getServerList(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getServerListFile(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static getServerModData(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getServerName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.ServerOptions
       */
      static getServerOptions(): zombie.network.ServerOptions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getServerPasswordFromArgs(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getServerSavedWorldVersion(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.ServerSettingsManager
       */
      static getServerSettingsManager(): zombie.network.ServerSettingsManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getServerSpawnRegions(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getServerStatistic(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getServerStatisticEnable(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getShortenedFilename(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.sadisticAIDirector.SleepingEvent
       */
      static getSleepingEvent(): zombie.ai.sadisticAIDirector.SleepingEvent;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.BaseSoundManager
       */
      static getSoundManager(): zombie.BaseSoundManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.characters.IsoPlayer
       */
      static getSpecificPlayer(arg0: number): zombie.characters.IsoPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.sprite.IsoSprite
       */
      static getSprite(arg0: string): zombie.iso.sprite.IsoSprite;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.sprite.IsoSpriteManager
       */
      static getSpriteManager(arg0: string): zombie.iso.sprite.IsoSpriteManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2): zombie.iso.IsoGridSquare
       */
      static getSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getStatistics(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      static getSteamAvatarFromSteamID(arg0: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      static getSteamAvatarFromUsername(arg0: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getSteamIDFromUsername(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getSteamModeActive(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getSteamProfileNameFromSteamID(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getSteamProfileNameFromUsername(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getSteamScoreboard(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getSteamWorkshopItemIDs(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$Mod>
       */
      static getSteamWorkshopItemMods(arg0: string): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$Mod>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.znet.SteamWorkshopItem>
       */
      static getSteamWorkshopStagedItems(): java.util.ArrayList<zombie.core.znet.SteamWorkshopItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      static getTableResult(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       *  - (String arg0, Object arg1): string
       *  - (String arg0, Object arg1, Object arg2): string
       *  - (String arg0, Object arg1, Object arg2, Object arg3): string
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): string
       */
      static getText(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ui.TextManager
       */
      static getTextManager(): zombie.ui.TextManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getTextMediaEN(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       *  - (String arg0, Object arg1): string
       *  - (String arg0, Object arg1, Object arg2): string
       *  - (String arg0, Object arg1, Object arg2, Object arg3): string
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): string
       */
      static getTextOrNull(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       */
      static getTexture(arg0: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.core.textures.Texture
       */
      static getTextureFromSaveDir(arg0: string, arg1: string): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static getTickets(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      static getTime(): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTimeInMillis(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTimestamp(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTimestampMs(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Language arg0): java.util.ArrayList<string>
       */
      static getTranslatorCredits(arg0: zombie.core.Language): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.io.DataInputStream
       */
      static getUrlInputStream(arg0: string): java.io.DataInputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.BaseVehicle
       */
      static getVehicleById(arg0: number): zombie.vehicles.BaseVehicle;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BaseVehicle arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getVehicleInfo(arg0: zombie.vehicles.BaseVehicle): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$VehicleZone
       */
      static getVehicleZoneAt(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$VehicleZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoWorld
       */
      static getWorld(): zombie.iso.IsoWorld;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.WorldMarkers
       */
      static getWorldMarkers(): zombie.iso.WorldMarkers;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.WorldSoundManager
       */
      static getWorldSoundManager(): zombie.WorldSoundManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getZombieInfo(arg0: zombie.characters.IsoZombie): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.radio.ZomboidRadio
       */
      static getZomboidRadio(): zombie.radio.ZomboidRadio;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$Zone
       */
      static getZone(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$Zone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
       */
      static getZones(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      static hasBreakpoint(arg0: string, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, Object arg1): boolean
       */
      static hasDataBreakpoint(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, Object arg1): boolean
       */
      static hasDataReadBreakpoint(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initUISystem(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (Item arg0): zombie.inventory.InventoryItem
       */
      static instanceItem(arg0: string | zombie.scripting.objects.Item): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, String arg1): boolean
       */
      static instof(arg0: any, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static inviteFriend(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static is64bit(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isAccessLevel(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isAdmin(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isAltKeyDown(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isClient(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isControllerConnected(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isCoopHost(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isCtrlKeyDown(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      static isCurrentExecutionPoint(arg0: string, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isDebugEnabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isDemo(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isDesktopOpenSupported(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isFloatingGamepadTextInputVisible(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isGamePaused(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isIngameState(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): boolean
       */
      static isItemTransactionConsistent(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadConnected(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadDown(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadLBPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadLTPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadLeft(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadLeftStickButtonPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      static isJoypadPressed(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadRBPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadRTPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadRight(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadRightStickButtonPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isJoypadUp(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isKeyDown(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isKeyPressed(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Mod arg0): boolean
       */
      static isModActive(arg0: zombie.gameStates.ChooseGameInfo$Mod): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static isMouseButtonDown(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isPublicServerListAllowed(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isServer(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isServerSoftReset(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isShiftKeyDown(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      static isSoundPlaying(arg0: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isSteamOverlayEnabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isSteamRunningOnSteamDeck(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isSystemLinux(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isSystemMacOS(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isSystemWindows(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, String arg1): boolean
       */
      static isType(arg0: any, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isValidSteamID(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isValidUserName(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isXBOXController(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.IsoRegionsRenderer
       */
      static isoRegionsRenderer(): zombie.iso.areas.isoregion.IsoRegionsRenderer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3): number
       */
      static isoToScreenX(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3): number
       */
      static isoToScreenY(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
       */
      static loadSkinnedZomboidModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
       */
      static loadStaticZomboidModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
       */
      static loadVehicleModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): zombie.core.skinnedmodel.model.Model
       */
      static loadZomboidModel(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): zombie.core.skinnedmodel.model.Model;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Coroutine arg0, int arg1): string
       */
      static localVarName(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static luaDebug(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      static manipulateSavefile(arg0: string, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): string
       */
      static moduleDotType(arg0: string, arg1: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static openURl(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static pauseSoundAndMusic(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3): void
       */
      static ping(arg0: string, arg1: string, arg2: string, arg3: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1): void
       */
      static playServerSound(arg0: string, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static proceedPM(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static processGeneralMessage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static processSayMessage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static processShoutMessage(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0, LuaClosure arg1, Object arg2): void
       */
      static querySteamWorkshopItemDetails(arg0: java.util.ArrayList<string>, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static queueCharEvent(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static queueKeyEvent(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      static rainConfig(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static reactivateJoypadAfterResetLua(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static refreshAnimSets(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reloadActionGroups(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reloadControllerConfigFiles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reloadEngineRPM(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static reloadLuaFile(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static reloadModelsMatching(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static reloadServerLuaFile(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reloadSoundFiles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static reloadVehicleTextures(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reloadVehicles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): void
       */
      static removeItemTransaction(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static removeTicket(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      static removeUserlog(arg0: string, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, int arg8): void
       */
      static renderIsoCircle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): string
       */
      static replaceWith(arg0: string, arg1: string, arg2: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static requestPacketCounts(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1): void
       */
      static requestTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static requestUserlog(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): any
       */
      static require(arg0: string): any;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static resetRegionFile(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static resumeSoundAndMusic(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static revertToKeyboardAndMouse(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static sanitizeWorldName(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static save(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static saveControllerSettings(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static saveGame(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static saveModsFile(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static scoreboardUpdate(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3): number
       */
      static screenToIsoX(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3): number
       */
      static screenToIsoY(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, float arg3, boolean arg4, String arg5): void
       */
      static sendBandage(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: boolean, arg5: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
       */
      static sendCataplasm(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3): void
       */
      static sendCleanBurn(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, KahluaTable arg2): void
       *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
       */
      static sendClientCommand(arg0: string | zombie.characters.IsoPlayer, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendClothing(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3): void
       */
      static sendDisinfect(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, IsoPlayer arg1, String arg2): void
       */
      static sendFactionInvite(arg0: zombie.characters.Faction, arg1: zombie.characters.IsoPlayer, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, ArrayList arg1, IsoPlayer arg2, String arg3, String arg4): boolean
       */
      static sendItemListNet(arg0: zombie.characters.IsoPlayer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: zombie.characters.IsoPlayer, arg3: string, arg4: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0, ItemContainer arg1): void
       */
      static sendItemsInContainer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPersonalColor(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendPing(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerExtraInfo(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerStatsChange(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2): void
       */
      static sendRemoveBullet(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, boolean arg3): void
       */
      static sendRemoveGlass(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendRequestInventory(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0, IsoPlayer arg1, String arg2): void
       */
      static sendSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: zombie.characters.IsoPlayer, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, KahluaTable arg2): void
       *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
       */
      static sendServerCommand(arg0: string | zombie.characters.IsoPlayer, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2, float arg3, String arg4): void
       */
      static sendSplint(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3, boolean arg4): void
       */
      static sendStitch(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem, arg4: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendVisual(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5): void
       */
      static serverConnect(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static serverConnectCoop(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static serverFileExists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setActivePlayer(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static setAdmin(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      static setAggroTarget(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setBehaviorStep(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      static setControllerDeadZone(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setDebugToggleControllerPluggedIn(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setGameSpeed(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): void
       */
      static setModelMetaData(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static setMouseXY(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, IsoPlayer arg2, String arg3): void
       */
      static setPlayerJoypad(arg0: number, arg1: number, arg2: zombie.characters.IsoPlayer, arg3: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static setPlayerMouse(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      static setPlayerMovementActive(arg0: number, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1): void
       */
      static setProgressBarValue(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setPuddles(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      static setSavefilePlayer1(arg0: string, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setServerStatisticEnable(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setShowPausedMessage(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static showAnimationViewer(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static showAttachmentEditor(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static showChunkDebugger(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static showFolderInDesktop(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static showGlobalObjectDebugger(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0, int arg1, int arg2, int arg3, int arg4): boolean
       */
      static showSteamFloatingGamepadTextInput(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1, String arg2, int arg3, String arg4): boolean
       */
      static showSteamGamepadTextInput(arg0: boolean, arg1: boolean, arg2: string, arg3: number, arg4: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static showVehicleEditor(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static showWorldMapEditor(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, String arg2): void
       */
      static showWrongChatTabMessage(arg0: number, arg1: number, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static sledgeDestroy(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, int arg5): void
       */
      static spawnHorde(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      static spawnpointsExistsForMod(arg0: string, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.network.Server
       */
      static steamGetInternetServerDetails(arg0: number): zombie.network.Server;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static steamReleaseInternetServersRequest(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static steamRequestInternetServersCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static steamRequestInternetServersList(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      static steamRequestServerDetails(arg0: string, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      static steamRequestServerRules(arg0: string, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static stopPing(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): void
       */
      static stopSound(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): string
       */
      static tabToX(arg0: string, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       */
      static takeScreenshot(arg0?: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static testHelicopter(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static testSound(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, Object arg1): void
       */
      static timSort(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static toInt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, Object arg1): void
       */
      static toggleBreakOnChange(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, Object arg1): void
       */
      static toggleBreakOnRead(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      static toggleBreakpoint(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Mod arg0, boolean arg1): void
       */
      static toggleModActive(arg0: zombie.gameStates.ChooseGameInfo$Mod, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static toggleSafetyServer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static toggleVehicleRenderToTexture(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
       */
      static tradingUISendAddItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
       */
      static tradingUISendRemoveItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
       */
      static tradingUISendUpdateState(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (HashMap arg0): se.krka.kahlua.vm.KahluaTable
       */
      static transformIntoKahluaTable(arg0: java.util.HashMap<any, any>): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, UIElement arg1, float arg2, float arg3): number
       */
      static translatePointXInOverheadMapToWindow(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, UIElement arg1, float arg2, float arg3): number
       */
      static translatePointXInOverheadMapToWorld(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, UIElement arg1, float arg2, float arg3): number
       */
      static translatePointYInOverheadMapToWindow(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, UIElement arg1, float arg2, float arg3): number
       */
      static translatePointYInOverheadMapToWorld(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       */
      static triggerEvent(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1, boolean arg2): void
       */
      static updateChatSettings(arg0: string, arg1: boolean, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updateFire(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static useStaticErosionRand(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static useTextureFiltering(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      static wasKeyDown(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static wasMouseActiveMoreRecentlyThanJoypad(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      static writeLog(arg0: string, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static zpopClearZombies(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.popman.ZombiePopulationRenderer
       */
      static zpopNewRenderer(): zombie.popman.ZombiePopulationRenderer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static zpopSpawnNow(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      static zpopSpawnTimeToZero(arg0: number, arg1: number): void;
    }
    /**
     * @customConstructor LuaFileWriter.new
     * @
     * [CLASS] zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
     */
    export class LuaManager$GlobalObject$LuaFileWriter {
      /**
       * Constructors: 
       *  - (PrintWriter arg0)
       */
      constructor(arg0: java.io.PrintWriter | null);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      write(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      writeln(arg0: string): void;
    }
    /**
     * @customConstructor MapObjects.new
     * @
     * [CLASS] zombie.Lua.MapObjects
     */
    export class MapObjects {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTable arg0, LuaClosure arg1, int arg2): void
       *  - (String arg0, LuaClosure arg1, int arg2): void
       */
      static OnLoadWithSprite(arg0: se.krka.kahlua.vm.KahluaTable | string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): void
       *  - (KahluaTable arg0, LuaClosure arg1, int arg2): void
       */
      static OnNewWithSprite(arg0: string | se.krka.kahlua.vm.KahluaTable, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number): void;
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
      static debugLoadChunk(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      static debugLoadSquare(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      static debugNewSquare(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static loadGridSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static newGridSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Prototype arg0, LuaClosure arg1): void
       */
      static reroute(arg0: se.krka.kahlua.vm.Prototype, arg1: se.krka.kahlua.vm.LuaClosure): void;
    }
  }
}
