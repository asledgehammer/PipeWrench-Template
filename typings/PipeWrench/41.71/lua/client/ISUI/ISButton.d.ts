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
 * File generated at: 2022-07-29T08:39:00.193Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISButton:new */
    export class ISButton extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      allowMouseUpProcessing: any;

      backgroundColorMouseOver: any;

      backgroundColorPressed: any;

      blinkBGAlpha: any;

      blinkBGAlphaIncrease: any;

      blinkImageAlpha: any;

      blinkImageAlphaIncrease: any;

      borderColorEnabled: any;

      displayBackground: any;

      enable: any;

      fade: any;

      font: any;

      forcedHeightImage: any;

      forcedWidthImage: any;

      image: any;

      isButton: any;

      isJoypad: any;

      joypadFocused: any;

      joypadTexture: any;

      joypadTextureWH: any;

      onclick: any;

      onClickArgs: any;

      onmousedown: any;

      onmouseoutfunction: any;

      onmouseover: any;

      overlayText: any;

      pressed: any;

      pressedTime: any;

      repeatWhilePressedFunc: any;

      sounds: any;

      target: any;

      textColor: any;

      textureColor: any;

      title: any;

      tooltip: any;

      tooltipUI: any;

      yoffset: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        title: any,
        clicktarget: any,
        onclick: any,
        onmousedown: any,
        allowMouseUpProcessing: any
      );

      clearJoypadButton: (() => any) | any;

      forceClick: (() => any) | any;

      forceImageSize: ((width: any, height: any) => any) | any;

      getTitle: (() => any) | any;

      isEnabled: (() => any) | any;

      onMouseDoubleClick: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBackgroundColorMouseOverRGBA: ((r: any, g: any, b: any, a: any) => any) | any;

      setBackgroundRGBA: ((r: any, g: any, b: any, a: any) => any) | any;

      setBorderRGBA: ((r: any, g: any, b: any, a: any) => any) | any;

      setDisplayBackground: ((background: any) => any) | any;

      setEnable: ((bEnabled: any) => any) | any;

      setFont: ((font: any) => any) | any;

      setImage: ((image: any) => any) | any;

      setJoypadButton: ((texture: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setOnClick: ((func: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      setOnMouseOutFunction: ((onmouseout: any) => any) | any;

      setOnMouseOverFunction: ((onmouseover: any) => any) | any;

      setOverlayText: ((text: any) => any) | any;

      setRepeatWhilePressed: ((func: any) => any) | any;

      setSound: ((which: any, soundName: any) => any) | any;

      setTextureRGBA: ((r: any, g: any, b: any, a: any) => any) | any;

      setTitle: ((title: any) => any) | any;

      setTooltip: ((tooltip: any) => any) | any;

      setWidthToTitle: ((minWidth: any, isJoypad: any) => any) | any;

      update: (() => any) | any;

      updateTooltip: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISButton {}
}
