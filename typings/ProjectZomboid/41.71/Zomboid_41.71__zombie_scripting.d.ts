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
 * File generated at Friday July 2022 15:18:33.643-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.scripting {
    /**
     * @customConstructor ScriptManager.new
     * @
     * [CLASS] zombie.scripting.ScriptManager
     */
    export class ScriptManager {
      /** java.lang.String */
      static readonly VanillaID?: string;
      /** zombie.scripting.ScriptManager */
      static readonly instance?: zombie.scripting.ScriptManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckExitPoints(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       *  - (String arg0, boolean arg1): zombie.scripting.objects.Item
       */
      FindItem(arg0: string, arg1?: boolean): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Load(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      LoadFile(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ParseScript(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.AnimationsMesh>
       */
      getAllAnimationsMeshes(): java.util.ArrayList<zombie.scripting.objects.AnimationsMesh>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>
       */
      getAllEvolvedRecipes(): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * Method Parameters: 
       *  - (List arg0): java.util.List<zombie.scripting.objects.Fixing>
       */
      getAllFixing(arg0: java.util.List<zombie.scripting.objects.Fixing>): java.util.List<zombie.scripting.objects.Fixing>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.GameSoundScript>
       */
      getAllGameSounds(): java.util.ArrayList<zombie.scripting.objects.GameSoundScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getAllItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.MannequinScript>
       */
      getAllMannequinScripts(): java.util.ArrayList<zombie.scripting.objects.MannequinScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.ModelScript>
       */
      getAllModelScripts(): java.util.ArrayList<zombie.scripting.objects.ModelScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      getAllRecipes(): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      getAllRecipesFor(arg0: string): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.runtime.RuntimeAnimationScript>
       */
      getAllRuntimeAnimationScripts(): java.util.ArrayList<zombie.core.skinnedmodel.runtime.RuntimeAnimationScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.scripting.objects.UniqueRecipe>
       */
      getAllUniqueRecipes(): java.util.Stack<zombie.scripting.objects.UniqueRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.VehicleScript>
       */
      getAllVehicleScripts(): java.util.ArrayList<zombie.scripting.objects.VehicleScript>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.AnimationsMesh
       */
      getAnimationsMesh(arg0: string): zombie.scripting.objects.AnimationsMesh;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getChecksum(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getItemForClothingItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getItemTypeForClothingItem(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getItemsByType(arg0: string): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getItemsTag(arg0: string): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.MannequinScript
       */
      getMannequinScript(arg0: string): zombie.scripting.objects.MannequinScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelScript
       */
      getModelScript(arg0: string): zombie.scripting.objects.ModelScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ScriptModule
       *  - (String arg0, boolean arg1): zombie.scripting.objects.ScriptModule
       */
      getModule(arg0: string, arg1?: boolean): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ScriptModule
       */
      getModuleNoDisableCheck(arg0: string): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe
       */
      getRecipe(arg0: string): zombie.scripting.objects.Recipe;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.SoundTimelineScript
       */
      getSoundTimeline(arg0: string): zombie.scripting.objects.SoundTimelineScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getSpecificItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript
       */
      getVehicle(arg0: string): zombie.scripting.objects.VehicleScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.VehicleEngineRPM
       */
      getVehicleEngineRPM(arg0: string): zombie.vehicles.VehicleEngineRPM;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleTemplate
       */
      getVehicleTemplate(arg0: string): zombie.scripting.objects.VehicleTemplate;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getZedDmgMap(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isDrainableItemType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0, String arg1): string
       */
      resolveItemType(arg0: zombie.scripting.objects.ScriptModule, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0, String arg1): string
       */
      resolveModelScript(arg0: zombie.scripting.objects.ScriptModule, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (URI arg0, File arg1, ArrayList arg2): void
       */
      searchFolders(arg0: java.net.URI, arg1: java.io.File, arg2: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentLoadFileAbsPath(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentLoadFileMod(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getItemName(arg0: string): string;
    }
  }
}
