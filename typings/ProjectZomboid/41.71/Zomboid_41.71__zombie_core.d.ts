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
 * File generated at Friday July 2022 15:18:33.662-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core {
    /**
     * @customConstructor Clipboard.new
     * @
     * [CLASS] zombie.core.Clipboard
     */
    export class Clipboard {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getClipboard(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initMainThread(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static rememberCurrentValue(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static setClipboard(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updateMainThread(): void;
    }
    /**
     * @customConstructor Color.new
     * @
     * [CLASS] zombie.core.Color
     */
    export class Color {
      /** zombie.core.Color */
      static readonly black?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly blue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly cyan?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly darkGray?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly darkGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly gray?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly green?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly lightGray?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly lightGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly magenta?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly orange?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly pink?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly purple?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly red?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly transparent?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly white?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly yellow?: zombie.core.Color;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (Color arg0)
       *  - (Color arg0, Color arg1, float arg2)
       *  - (int arg0, int arg1, int arg2)
       *  - (float arg0, float arg1, float arg2)
       *  - (int arg0, int arg1, int arg2, int arg3)
       *  - (float arg0, float arg1, float arg2, float arg3)
       */
      constructor(arg0?: number | zombie.core.Color, arg1?: zombie.core.Color | number, arg2?: number, arg3?: number);
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      add(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): zombie.core.Color
       */
      addToCopy(arg0: zombie.core.Color): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       *  - (float arg0): zombie.core.Color
       */
      brighter(arg0?: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      changeHSBValue(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       *  - (float arg0): zombie.core.Color
       */
      darker(arg0?: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      fromColor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlueByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreenByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreenFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRedByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRedFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Color arg0, float arg1, Color arg2): void
       */
      interp(arg0: zombie.core.Color, arg1: number, arg2: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): zombie.core.Color
       */
      multiply(arg0: zombie.core.Color): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.core.Color
       */
      scale(arg0: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.core.Color
       */
      scaleCopy(arg0: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Color arg0): zombie.core.Color
       *  - (float arg0, float arg1, float arg2): zombie.core.Color
       *  - (float arg0, float arg1, float arg2, float arg3): zombie.core.Color
       */
      set(arg0: zombie.core.Color | number, arg1?: number, arg2?: number, arg3?: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setABGR(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Color arg0, Color arg1, float arg2): void
       */
      setColor(arg0: zombie.core.Color, arg1: zombie.core.Color, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): zombie.core.Color
       *  - (float arg0, float arg1, float arg2, Color arg3): zombie.core.Color
       */
      static HSBtoRGB(arg0: number, arg1: number, arg2: number, arg3?: zombie.core.Color): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, Color arg1): zombie.core.Color
       */
      static abgrToColor(arg0: number, arg1: zombie.core.Color): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static blendABGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static blendBGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Color arg0): number
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static colorToABGR(arg0: zombie.core.Color | number, arg1?: number, arg2?: number, arg3?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.Color
       */
      static decode(arg0: string): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getAlphaChannelFromABGR(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getBlueChannelFromABGR(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getGreenChannelFromABGR(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getRedChannelFromABGR(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): number
       */
      static lerpABGR(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static multiplyABGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static multiplyBGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      static random(): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1): number
       */
      static setAlphaChannelToABGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1): number
       */
      static setBlueChannelToABGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1): number
       */
      static setGreenChannelToABGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, float arg1): number
       */
      static setRedChannelToABGR(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static tintABGR(arg0: number, arg1: number): number;
    }
    /**
     * @customConstructor Colors.new
     * @
     * [CLASS] zombie.core.Colors
     */
    export class Colors {
      /** zombie.core.Color */
      static readonly Aqua?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Aquamarine?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Bisque?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly BlanchedAlmond?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Blue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly BlueViolet?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Brown?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly BurlyWood?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly CadetBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Chartreuse?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Chocolate?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Coral?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly CornFlowerBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly CornSilk?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Crimson?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Cyan?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkCyan?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkGoldenrod?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkKhaki?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkMagenta?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkOliveGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkOrange?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkOrchid?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkRed?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkSalmon?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkSeaGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkSlateBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkTurquoise?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DarkViolet?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DeepPink?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DeepSkyBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly DodgerBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly FireBrick?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly ForestGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Fuchsia?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Gold?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Goldenrod?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Green?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly GreenYellow?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly HotPink?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly IndianRed?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Indigo?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Khaki?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Lavender?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LawnGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LemonChiffon?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightCoral?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightCyan?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightGoldenrodYellow?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightPink?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightSalmon?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightSeaGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightSkyBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightSteelBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LightYellow?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Lime?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly LimeGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Magenta?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Maroon?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumAquamarine?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumOrchid?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumPurple?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumSeaGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumSlateBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumSpringGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumTurquoise?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MediumVioletRed?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly MidnightBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Moccasin?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly NavajoWhite?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Navy?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Olive?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly OliveDrab?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Orange?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly OrangeRed?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Orchid?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PaleGoldenrod?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PaleGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PaleTurquoise?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PaleVioletRed?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PapayaWhip?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PeachPu?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Peru?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Pink?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Plum?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly PowderBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Purple?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Red?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly RosyBrown?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly RoyalBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SaddleBrown?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Salmon?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SandyBrown?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SeaGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Sienna?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SkyBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SlateBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SpringGreen?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly SteelBlue?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Tan?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Teal?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Thistle?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Tomato?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Turquoise?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Violet?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Wheat?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly Yellow?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly YellowGreen?: zombie.core.Color;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static ColorExists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.Color
       */
      static GetColorByName(arg0: string): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.core.Color
       */
      static GetColorFromIndex(arg0: number): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static GetColorNames(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static GetColorsCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      static GetRandomColor(): zombie.core.Color;
    }
    /**
     * @customConstructor Core.new
     * @
     * [CLASS] zombie.core.Core
     */
    export class Core {
      /** java.lang.String */
      static ChallengeID?: string;
      /** zombie.ui.UITextBox2 */
      static CurrentTextEntryBox?: zombie.ui.UITextBox2;
      /** java.lang.String */
      static GameMap?: string;
      /** java.lang.String */
      static GameMode?: string;
      /** java.lang.String */
      static GameSaveWorld?: string;
      /** int */
      static MaxJukeBoxesActive: number;
      /** int */
      static NumJukeBoxesActive: number;
      /** boolean */
      static Option3DGroundItem: boolean;
      /** int */
      static OptionAmbientVolume: number;
      /** boolean */
      static OptionAutoProneAtk: boolean;
      /** int */
      static OptionBloodDecals: number;
      /** boolean */
      static OptionBorderlessWindow: boolean;
      /** float */
      static OptionChatFadeTime: number;
      /** java.lang.String */
      static OptionChatFontSize?: string;
      /** boolean */
      static OptionChatOpaqueOnFocus: boolean;
      /** boolean */
      static OptionClock24Hour: boolean;
      /** int */
      static OptionClockFormat: number;
      /** int */
      static OptionClockSize: number;
      /** java.lang.String */
      static OptionContextMenuFont?: string;
      /** boolean */
      static OptionDoDoorSpriteEffects: boolean;
      /** boolean */
      static OptionDoWindSpriteEffects: boolean;
      /** boolean */
      static OptionEnableContentTranslations: boolean;
      /** int */
      static OptionFontSize: number;
      /** java.lang.String */
      static OptionInventoryFont?: string;
      /** boolean */
      static OptionLockCursorToWindow: boolean;
      /** float */
      static OptionMaxChatOpaque: number;
      /** java.lang.String */
      static OptionMeasurementFormat?: string;
      /** float */
      static OptionMinChatOpaque: number;
      /** boolean */
      static OptionModelTextureMipmaps: boolean;
      /** boolean */
      static OptionModsEnabled: boolean;
      /** int */
      static OptionMusicActionStyle: number;
      /** int */
      static OptionMusicLibrary: number;
      /** int */
      static OptionMusicVolume: number;
      /** boolean */
      static OptionPanCameraWhileAiming: boolean;
      /** boolean */
      static OptionPanCameraWhileDriving: boolean;
      /** boolean */
      static OptionRackProgress: boolean;
      /** boolean */
      static OptionRadialMenuKeyToggle: boolean;
      /** int */
      static OptionReloadDifficulty: number;
      /** boolean */
      static OptionReloadRadialInstant: boolean;
      /** boolean */
      static OptionRenderPrecipIndoors: boolean;
      /** int */
      static OptionRenderPrecipitation: number;
      /** boolean */
      static OptionShowChatTimestamp: boolean;
      /** boolean */
      static OptionShowChatTitle: boolean;
      /** boolean */
      static OptionShowCursorWhileAiming: boolean;
      /** int */
      static OptionSoundVolume: number;
      /** boolean */
      static OptionTemperatureDisplayCelsius: boolean;
      /** boolean */
      static OptionTexture2x: boolean;
      /** boolean */
      static OptionTextureCompression: boolean;
      /** java.lang.String */
      static OptionTooltipFont?: string;
      /** boolean */
      static OptionUIFBO: boolean;
      /** int */
      static OptionUIRenderFPS: number;
      /** boolean */
      static OptionUpdateSneakButton: boolean;
      /** boolean */
      static OptionVSync: boolean;
      /** int */
      static OptionVehicleEngineVolume: number;
      /** int */
      static OptionVoiceAGCMode: number;
      /** boolean */
      static OptionVoiceEnable: boolean;
      /** int */
      static OptionVoiceMode: number;
      /** java.lang.String */
      static OptionVoiceRecordDeviceName?: string;
      /** int */
      static OptionVoiceVADMode: number;
      /** int */
      static OptionVoiceVolumeMic: number;
      /** int */
      static OptionVoiceVolumePlayers: number;
      /** boolean */
      static OptionZoom: boolean;
      /** boolean */
      static OptiondblTapJogToSprint: boolean;
      /** boolean */
      static SafeMode: boolean;
      /** boolean */
      static SafeModeForced: boolean;
      /** boolean */
      static SoundDisabled: boolean;
      /** int */
      static TileScale: number;
      /** boolean */
      static bAltMoveMethod: boolean;
      /** boolean */
      static bDebug: boolean;
      /** boolean */
      static readonly bDemo: boolean;
      /** boolean */
      static bExiting: boolean;
      /** boolean */
      static bLastStand: boolean;
      /** boolean */
      static bTutorial: boolean;
      /** float */
      static blinkAlpha: number;
      /** boolean */
      static blinkAlphaIncrease: boolean;
      /** int */
      static height: number;
      /** int */
      static readonly iPerfPuddles_All: number;
      /** int */
      static readonly iPerfPuddles_GroundOnly: number;
      /** int */
      static readonly iPerfPuddles_GroundWithRuts: number;
      /** int */
      static readonly iPerfPuddles_None: number;
      /** int */
      static readonly iPerfSkybox_High: number;
      /** int */
      static readonly iPerfSkybox_Medium: number;
      /** int */
      static readonly iPerfSkybox_Static: number;
      /** int */
      static width: number;
      /** int */
      static xx: number;
      /** int */
      static yy: number;
      /** int */
      static zz: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckDelayResetLua(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      DelayResetLua(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      DoEndFrameStuff(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      DoEndFrameStuffFx(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoFrameReady(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoPopIsoStuff(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      DoPushIsoParticleStuff(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4): void
       */
      DoPushIsoStuff(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, int arg3): void
       *  - (int arg0, int arg1, float arg2, int arg3, boolean arg4): void
       */
      DoStartFrameStuff(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      DoStartFrameStuffSmartTextureFx(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      EndFrame(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      EndFrameText(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EndFrameUI(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      MoveMethodToggle(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RenderOffScreenBuffer(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (boolean arg0, String arg1): void
       */
      ResetLua(arg0: string | boolean, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0, boolean arg1): void
       */
      StartFrame(arg0?: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      StartFrameText(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      StartFrameUI(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      TakeFullScreenshot(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0, int arg1, int arg2): void
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      TakeScreenshot(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Integer arg1): void
       */
      addKeyBinding(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      countMissing3DItems(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      doZoomScroll(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exitToMenu(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getAutoZoom(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBlinkingMoodle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getChallengeID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getContentTranslationsEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentPlayerZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDebug(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getDefaultZoomLevels(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGameMode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.GameVersion
       */
      getGameVersion(): zombie.core.GameVersion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIgnoreProneZombieRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIsoCursorVisibility(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getKey(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, number>
       */
      getKeyMaps(): java.util.Map<string, number>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getMicVolumeError(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMicVolumeIndicator(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getMpTextColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getNextZoom(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getObjectHighlitedColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.TextureFBO
       *  - (int arg0): zombie.core.textures.TextureFBO
       */
      getOffscreenBuffer(arg0?: number): zombie.core.textures.TextureFBO;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getOffscreenHeight(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffscreenTrueHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffscreenTrueWidth(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getOffscreenWidth(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getOptionActiveController(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionAimOutline(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionAmbientVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionAutoDrink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionBloodDecals(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionBorderlessWindow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionChatFadeTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionChatFontSize(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionChatOpaqueOnFocus(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionClock24Hour(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionClockFormat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionClockSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionContextMenuFont(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionCorpseShadows(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionCycleContainerKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionDisplayAsCelsius(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionDoDoorSpriteEffects(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionDoWindSpriteEffects(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionDropItemsOnSquareCenter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionEnableLeftJoystickRadialMenu(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionFontSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionIgnoreProneZombieRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionInventoryContainerSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionInventoryFont(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionLanguageName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionLeaveKeyInIgnition(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionLockCursorToWindow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionMaxChatOpaque(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionMeasurementFormat(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionMinChatOpaque(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionModelTextureMipmaps(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionModsEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionMusicActionStyle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionMusicLibrary(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionMusicVolume(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      getOptionOnStartup(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionPanCameraWhileAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionPanCameraWhileDriving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionRackProgress(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionRadialMenuKeyToggle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionReloadDifficulty(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionReloadRadialInstant(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionRenderPrecipitation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionSearchModeOverlayEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionShoulderButtonContainerSwitch(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionShowCursorWhileAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionShowItemModInfo(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionShowSurvivalGuide(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionSimpleClothingTextures(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionSimpleWeaponTextures(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getOptionSingleContextMenu(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionSoundVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionTexture2x(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionTextureCompression(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionTieredZombieUpdates(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionTimedActionGameSpeedReset(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionTooltipFont(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionUIFBO(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionUIRenderFPS(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionUpdateSneakButton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionVSync(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVehicleEngineVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVoiceAGCMode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionVoiceEnable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVoiceMode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVoiceRecordDevice(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionVoiceRecordDeviceName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVoiceVADMode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVoiceVolumeMic(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionVoiceVolumePlayers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getOptionZoom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionZoomLevels1x(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOptionZoomLevels2x(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPerfPuddles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPerfPuddlesOnLoad(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getPerfReflections(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getPerfReflectionsOnLoad(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPerfSkybox(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPerfSkyboxOnLoad(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPoisonousBerry(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPoisonousMushroom(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRealOptionSoundVolume(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSaveFolder(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getScreenModes(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSeenUpdateText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getServerVOIPEnable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSteamServerVersion(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseShaders(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVersionNumber(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVidMem(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): number
       */
      getXAngle(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): number
       */
      getYAngle(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getZoom(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      gotNewBelt(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      init(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initFBOs(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initPoisonousBerry(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initPoisonousMushroom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initShaders(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimPopupDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAzerty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCelsius(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isChallenge(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollideZombies(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDedicated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultOptions(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingTextEntry(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoneNewSaveFolder(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFlashIsoCursor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceSnow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullScreen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInDebug(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isModsPopupDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiThread(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNewReloading(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoSave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOption3DGroundItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOptionAutoProneAtk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOptionProgressBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOptionShowChatTimestamp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOptionShowChatTitle(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isOptionSimpleClothingTextures(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOptiondblTapJogToSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRenderPrecipIndoors(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRiversideDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSelectingAll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowFirstTimeSearchTutorial(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowFirstTimeSneakTutorial(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowFirstTimeVehicleTutorial(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowFirstTimeWeatherTutorial(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowPing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowYourUsername(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToggleToAim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToggleToRun(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToggleToSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTutorialDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVehiclesWarningShow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombieGroupSound(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZoomEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      loadOptions(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      loadedShader(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      quit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      quitToDesktop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reinitKeyMaps(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      saveOptions(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimPopupDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setAutoZoom(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAzerty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBlinkingMoodle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCelsius(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setChallenge(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollideZombies(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setContentTranslationsEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoneNewSaveFolder(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFlashIsoCursor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceSnow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFramerate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGotNewBelt(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsSelectingAll(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setIsoCursorVisibility(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      setKeyMaps(arg0: java.util.Map<string, number>): void;
      /**
       * Method Parameters: 
       *  - (TextureFBO arg0): void
       */
      setLastRenderedFBO(arg0: zombie.core.textures.TextureFBO): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setModsPopupDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setMpTextColor(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMultiThread(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNewReloading(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoSave(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setObjectHighlitedColor(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOption3DGroundItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setOptionActiveController(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionAimOutline(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionAmbientVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionAutoDrink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionAutoProneAtk(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionBloodDecals(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionBorderlessWindow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOptionChatFadeTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionChatFontSize(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionChatOpaqueOnFocus(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionClock24Hour(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionClockFormat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionClockSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionContextMenuFont(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionCorpseShadows(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionCycleContainerKey(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionDisplayAsCelsius(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionDoDoorSpriteEffects(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionDoWindSpriteEffects(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionDropItemsOnSquareCenter(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionEnableLeftJoystickRadialMenu(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionFontSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionIgnoreProneZombieRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionInventoryContainerSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionInventoryFont(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionLanguageName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionLeaveKeyInIgnition(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionLockCursorToWindow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOptionMaxChatOpaque(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionMeasurementFormat(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOptionMinChatOpaque(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionModelTextureMipmaps(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionModsEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionMusicActionStyle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionMusicLibrary(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionMusicVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      setOptionOnStartup(arg0: string, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionPanCameraWhileAiming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionPanCameraWhileDriving(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionProgressBar(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionRackProgress(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionRadialMenuKeyToggle(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionReloadDifficulty(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionReloadRadialInstant(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionRenderPrecipitation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionSearchModeOverlayEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionShoulderButtonContainerSwitch(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionShowChatTimestamp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionShowChatTitle(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionShowCursorWhileAiming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionShowItemModInfo(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionShowSurvivalGuide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionSimpleClothingTextures(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionSimpleWeaponTextures(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setOptionSingleContextMenu(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionSoundVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionTexture2x(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionTextureCompression(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionTieredZombieUpdates(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionTimedActionGameSpeedReset(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionTooltipFont(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionUIFBO(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionUIRenderFPS(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionUpdateSneakButton(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionVSync(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVehicleEngineVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVoiceAGCMode(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionVoiceEnable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVoiceMode(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVoiceRecordDevice(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionVoiceRecordDeviceName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVoiceVADMode(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVoiceVolumeMic(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOptionVoiceVolumePlayers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptionZoom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionZoomLevels1x(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOptionZoomLevels2x(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOptiondblTapJogToSprint(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPerfPuddles(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerfReflections(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPerfSkybox(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPoisonousBerry(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPoisonousMushroom(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderPrecipIndoors(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setResolution(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      setResolutionAndFullScreen(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRiversideDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setScreenSize(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSeenUpdateText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowFirstTimeSearchTutorial(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowFirstTimeSneakTutorial(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowFirstTimeVehicleTutorial(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowFirstTimeWeatherTutorial(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowPing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowYourUsername(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTestingMicrophone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setToggleToAim(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setToggleToRun(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setToggleToSprint(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTutorialDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseShaders(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVehiclesWarningShow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setVidMem(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWindowed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setZombieGroupSound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      shadersOptionChanged(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      supportRes(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      supportsFBO(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateKeyboard(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      zoomLevelsChanged(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      zoomOptionChanged(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static UnfocusActiveTextEntryBox(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int[] arg0, int arg1, int arg2): number[]
       */
      static flipPixels(arg0: number[], arg1: number, arg2: number): number[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDifficulty(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getGLMajorVersion(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGLVersion(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Core
       */
      static getInstance(): zombie.core.Core;
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
       *  - (Empty): void
       */
      static getOpenGLVersions(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTileScale(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isLastStand(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static setDifficulty(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      static setDisplayMode(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setFullScreen(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static supportCompressedTextures(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static supportNPTTexture(): boolean;
    }
    /**
     * @customConstructor GameVersion.new
     * @
     * [CLASS] zombie.core.GameVersion
     */
    export class GameVersion {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, String arg2)
       */
      constructor(arg0: number, arg1: number, arg2: string | null);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMajor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSuffix(): string;
      /**
       * Method Parameters: 
       *  - (GameVersion arg0): boolean
       */
      isGreaterThan(arg0: zombie.core.GameVersion): boolean;
      /**
       * Method Parameters: 
       *  - (GameVersion arg0): boolean
       */
      isGreaterThanOrEqualTo(arg0: zombie.core.GameVersion): boolean;
      /**
       * Method Parameters: 
       *  - (GameVersion arg0): boolean
       */
      isLessThan(arg0: zombie.core.GameVersion): boolean;
      /**
       * Method Parameters: 
       *  - (GameVersion arg0): boolean
       */
      isLessThanOrEqualTo(arg0: zombie.core.GameVersion): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.GameVersion
       */
      static parse(arg0: string): zombie.core.GameVersion;
    }
    /**
     * @customConstructor ImmutableColor.new
     * @
     * [CLASS] zombie.core.ImmutableColor
     */
    export class ImmutableColor {
      /** zombie.core.ImmutableColor */
      static readonly black?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly blue?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly cyan?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly darkGray?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly darkGreen?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly gray?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly green?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly lightGray?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly lightGreen?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly magenta?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly orange?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly pink?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly purple?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly red?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly transparent?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly white?: zombie.core.ImmutableColor;
      /** zombie.core.ImmutableColor */
      static readonly yellow?: zombie.core.ImmutableColor;

      /**
       * Constructors: 
       *  - (int arg0)
       *  - (ImmutableColor arg0)
       *  - (Color arg0)
       *  - (Color arg0, Color arg1, float arg2)
       *  - (int arg0, int arg1, int arg2)
       *  - (float arg0, float arg1, float arg2)
       *  - (float arg0, float arg1, float arg2, float arg3)
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number | zombie.core.ImmutableColor | zombie.core.Color, arg1?: zombie.core.Color | number, arg2?: number, arg3?: number);
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0): zombie.core.ImmutableColor
       */
      add(arg0: zombie.core.ImmutableColor): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       *  - (float arg0): zombie.core.ImmutableColor
       */
      brighter(arg0?: number): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       *  - (float arg0): zombie.core.ImmutableColor
       */
      darker(arg0?: number): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlphaInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlueByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlueInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreenByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreenFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreenInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRedByte(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRedFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRedInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (ImmutableColor arg0, float arg1): zombie.core.ImmutableColor
       */
      interp(arg0: zombie.core.ImmutableColor, arg1: number): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Color arg0): zombie.core.ImmutableColor
       */
      multiply(arg0: zombie.core.Color): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.core.ImmutableColor
       */
      scale(arg0: number): zombie.core.ImmutableColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      toMutableColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number[]
       */
      static HSBtoRGB(arg0: number, arg1: number, arg2: number): number[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.ImmutableColor
       */
      static decode(arg0: string): zombie.core.ImmutableColor;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.ImmutableColor
       */
      static random(): zombie.core.ImmutableColor;
    }
    /**
     * @customConstructor Language.new
     * @
     * [CLASS] zombie.core.Language
     */
    export class Language {

      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      base(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      charset(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      index(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAzerty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      text(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.Language
       */
      static FromString(arg0: string): zombie.core.Language;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.core.Language
       */
      static fromIndex(arg0: number): zombie.core.Language;
    }
    /**
     * @customConstructor PerformanceSettings.new
     * @
     * [CLASS] zombie.core.PerformanceSettings
     */
    export class PerformanceSettings {
      /** int */
      static AnimationSkip: number;
      /** int */
      static BaseStaticAnimFramerate: number;
      /** int */
      static FogQuality: number;
      /** boolean */
      static InterpolateAnims: boolean;
      /** int */
      static LightingFPS: number;
      /** int */
      static LightingFrameSkip: number;
      /** boolean */
      static LightingThread: boolean;
      /** int */
      static ManualFrameSkips: number;
      /** boolean */
      static ModelLighting: boolean;
      /** boolean */
      static NewRoofHiding: boolean;
      /** int */
      static PuddlesQuality: number;
      /** boolean */
      static UseFBOs: boolean;
      /** int */
      static WaterQuality: number;
      /** int */
      static ZombieAnimationSpeedFalloffCount: number;
      /** int */
      static ZombieBonusFullspeedFalloff: number;
      /** boolean */
      static auto3DZombies: boolean;
      /** zombie.core.PerformanceSettings */
      static readonly instance?: zombie.core.PerformanceSettings;
      /** int */
      static numberZombiesBlended: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFramerate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightingFPS(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightingQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNewRoofHiding(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPuddlesQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUIRenderFPS(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFramerateUncapped(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFogQuality(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFramerate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFramerateUncapped(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightingFPS(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightingQuality(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNewRoofHiding(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPuddlesQuality(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWaterQuality(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getLockFPS(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isUncappedFPS(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setLockFPS(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setUncappedFPS(arg0: boolean): void;
    }
    /**
     * @customConstructor SpriteRenderer.new
     * @
     * [CLASS] zombie.core.SpriteRenderer
     */
    export class SpriteRenderer {
      /** boolean */
      static GL_BLENDFUNC_ENABLED: boolean;
      /** int */
      static readonly NUM_RENDER_STATES: number;
      /** zombie.core.SpriteRenderer */
      static readonly instance?: zombie.core.SpriteRenderer;
      /** zombie.core.SpriteRenderer$RingBuffer */
      static readonly ringBuffer?: zombie.core.SpriteRenderer$RingBuffer;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EndShader(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      ShaderUpdate1f(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      ShaderUpdate1i(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3): void
       */
      ShaderUpdate2f(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
       */
      ShaderUpdate3f(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      ShaderUpdate4f(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      StartShader(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BooleanSupplier arg0): zombie.core.sprite.SpriteRenderState
       */
      acquireStateForRendering(arg0: java.util._function_.BooleanSupplier): zombie.core.sprite.SpriteRenderState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearCutawayTexture(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearSprites(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearUseVertColorsArray(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      create(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      doCoreIntParam(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (GenericDrawer arg0): void
       */
      drawGeneric(arg0: zombie.core.textures.TextureDraw$GenericDrawer): void;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0): void
       */
      drawModel(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      drawParticles(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, int arg3): void
       */
      drawPuddles(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, int arg3): void
       */
      drawSkyBox(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1, int arg2, boolean arg3): void
       */
      drawWater(arg0: zombie.core.opengl.Shader, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDoAdditive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMainStateIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerMaxZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerMinZoom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerZoomLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.sprite.SpriteRenderState
       */
      getPopulatingState(): zombie.core.sprite.SpriteRenderState;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderStateIndex(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.PlayerCamera
       */
      getRenderingPlayerCamera(arg0: number): zombie.iso.PlayerCamera;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderingPlayerIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.sprite.SpriteRenderState
       */
      getRenderingState(): zombie.core.sprite.SpriteRenderState;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      glAlphaFunc(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glBind(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glBlendEquation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBlendFunc(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glBlendFuncSeparate(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBuffer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glClear(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glColorMask(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      glDepthMask(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDisable(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      glDoEndFrame(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDoEndFrameFx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, int arg3): void
       *  - (int arg0, int arg1, float arg2, int arg3, boolean arg4): void
       */
      glDoStartFrame(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glDoStartFrameFx(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glEnable(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glGenerateMipMaps(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      glIgnoreStyles(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      glLoadIdentity(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glStencilFunc(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glStencilMask(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glStencilOp(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      glTexParameteri(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      glViewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      initFromIsoCamera(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMaxZoomLevel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMinZoomLevel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWaitingForRenderState(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      notifyRenderStateQueue(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      prePopulating(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pushFrameDown(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, int arg9, int arg10, int arg11, int arg12): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, float arg9, float arg10, float arg11, float arg12, Consumer arg13): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, Consumer arg17): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, Consumer arg25): void
       */
      render(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg10?: number, arg11?: number, arg12?: number, arg13?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg14?: number, arg15?: number, arg16?: number, arg17?: java.util._function_.Consumer<zombie.core.textures.TextureDraw> | number, arg18?: number, arg19?: number, arg20?: number, arg21?: number, arg22?: number, arg23?: number, arg24?: number, arg25?: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8, float arg9, float arg10, float arg11, float arg12, Consumer arg13): void
       */
      renderClamped(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20): void
       */
      renderPoly(arg0: number | zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12?: number, arg13?: number, arg14?: number, arg15?: number, arg16?: number, arg17?: number, arg18?: number, arg19?: number, arg20?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12, float arg13, float arg14, float arg15, float arg16, float arg17, float arg18, float arg19, float arg20, float arg21, float arg22, float arg23, float arg24, Consumer arg25): void
       */
      renderdebug(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number, arg19: number, arg20: number, arg21: number, arg22: number, arg23: number, arg24: number, arg25: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       */
      renderflipped(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8, Consumer arg9): void
       */
      renderi(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8): void
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8, int arg9): void
       */
      renderline(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setCutawayTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (AbstractStyle arg0): void
       */
      setDefaultStyle(arg0: zombie.core.Styles.AbstractStyle): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoAdditive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WallShaderTexRender arg0): void
       */
      setExtraWallShaderParams(arg0: zombie.core.SpriteRenderer$WallShaderTexRender): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderingPlayerIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (byte arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      setUseVertColorsArray(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startOffscreenUI(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopOffscreenUI(): void;
    }
    /**
     * @customConstructor RingBuffer.new
     * @
     * [CLASS] zombie.core.SpriteRenderer$RingBuffer
     */
    export class SpriteRenderer$RingBuffer {
      /** boolean */
      static IGNORE_STYLES: boolean;


      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkShaderChangedTexture1(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, int arg1): void
       */
      debugBoundTexture(arg0: zombie.core.textures.Texture, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      shaderChangedTexture1(): void;
    }
    /** [ENUM] zombie.core.SpriteRenderer$WallShaderTexRender */
    export class SpriteRenderer$WallShaderTexRender {
      protected constructor();
      static readonly All: zombie.core.SpriteRenderer$WallShaderTexRender;
      static readonly LeftOnly: zombie.core.SpriteRenderer$WallShaderTexRender;
      static readonly RightOnly: zombie.core.SpriteRenderer$WallShaderTexRender;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor Translator.new
     * @
     * [CLASS] zombie.core.Translator
     */
    export class Translator {
      /** boolean */
      static debug: boolean;
      /** zombie.core.Language */
      static language?: zombie.core.Language;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Language arg0, ArrayList arg1): void
       */
      static addLanguageToList(arg0: zombie.core.Language, arg1: java.util.ArrayList<zombie.core.Language>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static debugItemEvolvedRecipeNames(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static debugItemNames(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static debugMultiStageBuildNames(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static debugRecipeNames(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.Language>
       */
      static getAvailableLanguage(): java.util.ArrayList<zombie.core.Language>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getAzertyMap(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCharset(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Language
       */
      static getDefaultLanguage(): zombie.core.Language;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getDisplayItemName(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getItemEvolvedRecipeName(arg0: string): string;
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
       *  - (Empty): zombie.core.Language
       */
      static getLanguage(): zombie.core.Language;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getMoveableDisplayName(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getMultiStageBuild(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getNewsVersions(): java.util.ArrayList<string>;
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
       *  - (String arg0): string
       */
      static getRecipeName(arg0: string): string;
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
       *  - (Empty): void
       */
      static loadFiles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      static setDefaultItemEvolvedRecipeName(arg0: string, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       *  - (Language arg0): void
       */
      static setLanguage(arg0: number | zombie.core.Language): void;
    }
  }
}
