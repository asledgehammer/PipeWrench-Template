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
 * File generated at: 2022-07-29T08:39:01.462Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CharacterCreationMain:new */
    export class CharacterCreationMain extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static debug: any;

      static forceUpdateCombo: any;

      static instance: any;

      avatarPanelX: any;

      avatarPanelY: any;

      backButton: any;

      beardLbl: any;

      beardRect: any;

      beardStubbleLbl: any;

      beardStubbleTickBox: any;

      beardTypeCombo: any;

      beardTypeLbl: any;

      characterPanel: any;

      chestHairLbl: any;

      chestHairTickBox: any;

      clothingColorBtn: any;

      clothingCombo: any;

      clothingComboLabel: any;

      clothingDebugCreated: any;

      clothingDecalCombo: any;

      clothingLbl: any;

      clothingPanel: any;

      clothingTextureCombo: any;

      clothingWidgets: any;

      colorPanel: any;

      colorPicker: any;

      colorPickerHair: any;

      colorPickerSkin: any;

      comboWid: any;

      decalItem: any;

      deleteBuildButton: any;

      disabledLArrow: any;

      disabledRArrow: any;

      female: any;

      femaletex: any;

      hairColorButton: any;

      hairColorLbl: any;

      hairStubbleLbl: any;

      hairStubbleTickBox: any;

      hairType: any;

      hairTypeCombo: any;

      hairTypeLbl: any;

      inputModal: any;

      itemheightoverride: any;

      javaObject: any;

      lArrow: any;

      mainPanel: any;

      maletex: any;

      originalYOffset: any;

      outfitCombo: any;

      outfitLbl: any;

      playButton: any;

      presetPanel: any;

      randomButton: any;

      rArrow: any;

      saveBuildButton: any;

      savedBuilds: any;

      skinColor: any;

      skinColorButton: any;

      skinColorLbl: any;

      skinColors: any;

      xOffset: any;

      yOffset: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      createBeardTypeBtn: (() => any) | any;

      createChestTypeBtn: (() => any) | any;

      createClothingBtn: (() => any) | any;

      createClothingCombo: ((bodyLocation: any) => any) | any;

      createClothingComboDebug: ((bodyLocation: any) => any) | any;

      createHairTypeBtn: (() => any) | any;

      debugClothingDefinitions: (() => any) | any;

      deleteBuildStep1: (() => any) | any;

      deleteBuildStep2: ((button: any, joypadData: any) => any) | any;

      disableBtn: (() => any) | any;

      doClothingCombo: ((definition: any, erasePrevious: any) => any) | any;

      initClothing: (() => any) | any;

      initClothingDebug: (() => any) | any;

      initPlayer: (() => any) | any;

      instantiate: (() => any) | any;

      loadJoypadButtons: ((joypadData: any) => any) | any;

      loadOutfit: ((box: any) => any) | any;

      onBeardStubbleSelected: ((index: any, selected: any) => any) | any;

      onBeardTypeSelected: ((combo: any) => any) | any;

      onChestHairSelected: ((index: any, selected: any) => any) | any;

      onClothingColorClicked: ((button: any, bodyLocation: any) => any) | any;

      onClothingColorPicked: ((color: any, mouseUp: any, bodyLocation: any) => any) | any;

      onClothingComboSelected: ((combo: any, bodyLocation: any) => any) | any;

      onClothingDecalComboSelected: ((combo: any, bodyLocation: any) => any) | any;

      onClothingTextureComboSelected: ((combo: any, bodyLocation: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onHairColorMouseDown: ((button: any, x: any, y: any) => any) | any;

      onHairColorPicked: ((color: any, mouseUp: any) => any) | any;

      onHairTypeSelected: ((combo: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onOutfitSelected: ((combo: any) => any) | any;

      onRandomizeOutfitClicked: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onShavedHairSelected: ((index: any, selected: any) => any) | any;

      onSkinColorPicked: ((color: any, mouseUp: any) => any) | any;

      onSkinColorSelected: ((button: any, x: any, y: any) => any) | any;

      requiredSize: ((panel: any) => any) | any;

      saveBuildStep1: (() => any) | any;

      saveBuildStep2: ((button: any, joypadData: any, param2: any) => any) | any;

      saveBuildValidate: ((text: any) => any) | any;

      syncTorsoWithUI: (() => any) | any;

      syncUIWithTorso: (() => any) | any;

      updateClothingTextureCombo: ((bodyLocation: any, clothing: any) => any) | any;

      updateColorButton: ((bodyLocation: any, clothing: any) => any) | any;

      updateSelectedClothingCombo: (() => any) | any;

      static invertSort: ((list: any) => any) | any;

      static readSavedOutfitFile: (() => any) | any;

      static sort: ((list: any) => any) | any;

      static sortByCost: ((a: any, b: any) => any) | any;

      static sortByInvertCost: ((a: any, b: any) => any) | any;

      static writeSaveFile: ((options: any) => any) | any;
    }

    /** @customConstructor CharacterCreationMainCharacterPanel:new */
    export class CharacterCreationMainCharacterPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      prevJoypadIndexY: any;

      constructor(x: any, y: any, width: any, height: any);

      loadJoypadButtons: ((joypadData: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;
    }

    /** @customConstructor CharacterCreationMainPresetPanel:new */
    export class CharacterCreationMainPresetPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationMain {}
}
