/*
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
 * File generated at: 2022-07-29T08:39:00.267Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCraftingUI:new */
    export class ISCraftingUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      addIngredientButton: any;

      allRecipesList: any;

      bottomInfoText1: any;

      bottomInfoText2: any;

      categories: any;

      catList: any;

      catListButtons: any;

      character: any;

      containerList: any;

      craftAllButton: any;

      craftInProgress: any;

      craftOneButton: any;

      debugGiveIngredientsButton: any;

      drawJoypadFocus: any;

      fgBar: any;

      ingredientListbox: any;

      ingredientPanel: any;

      ItemInstances: any;

      keysRichText: any;

      keysText: any;

      knownRecipes: any;

      LabelAddIngredient: any;

      LabelClose: any;

      LabelCraftAll: any;

      LabelCraftOne: any;

      LabelDash: any;

      LabelDashWidth: any;

      LabelFavorite: any;

      lineH: any;

      minimumHeight: any;

      minimumWidth: any;

      needRefreshIngredientPanel: any;

      noteRichText: any;

      panel: any;

      playerNum: any;

      PoisonTexture: any;

      recipeListHasFocus: any;

      recipesList: any;

      recipesListH: any;

      refreshTypesAvailableMS: any;

      selected: any;

      selectedIndex: any;

      selectedRecipeItem: any;

      taskLabel: any;

      totalRecipes: any;

      TreeExpanded: any;

      constructor(x: any, y: any, width: any, height: any, character: any);

      addItemInEvolvedRecipe: ((button: any) => any) | any;

      craft: ((button: any, all: any) => any) | any;

      craftAll: (() => any) | any;

      debugGiveIngredients: (() => any) | any;

      drawEvolvedIngredient: ((y: any, item: any, alt: any) => any) | any;

      drawNonEvolvedIngredient: ((y: any, item: any, alt: any) => any) | any;

      getAvailableItemsType: (() => any) | any;

      getContainers: (() => any) | any;

      getFavoriteModDataLocalString: ((recipe: any) => any) | any;

      getFavoriteModDataString: ((recipe: any) => any) | any;

      GetItemInstance: ((type: any) => any) | any;

      getRecipeListBox: (() => any) | any;

      isExtraClothingItemOf: ((item1: any, item2: any) => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      isWaterSource: ((item: any, count: any) => any) | any;

      onActivateView: (() => any) | any;

      onAddIngredient: (() => any) | any;

      onAddRandomIngredient: ((button: any) => any) | any;

      onCraftComplete: ((completedAction: any, recipe: any, container: any, containers: any) => any) | any;

      onDblClickIngredientListbox: ((data: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onResize: (() => any) | any;

      populateRecipesList: (() => any) | any;

      refresh: (() => any) | any;

      refreshIngredientList: (() => any) | any;

      refreshIngredientPanel: (() => any) | any;

      refreshTickBox: (() => any) | any;

      removeExtraClothingItemsFromList: ((index: any, item: any, itemList: any) => any) | any;

      setVisible: ((bVisible: any) => any) | any;

      sortList: (() => any) | any;

      transferItems: (() => any) | any;

      update: (() => any) | any;

      static onPressKey: ((key: any) => any) | any;

      static ReturnItemsToOriginalContainer: ((playerObj: any, items: any) => any) | any;

      static sortByName: ((a: any, b: any) => any) | any;

      static toggleCraftingUI: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISCraftingUI {}
}
