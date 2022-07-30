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
 * File generated at: 2022-07-29T08:39:00.915Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Style:new */
    export class WorldMapEditorMode_Style extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      currentEditor: any;

      editors: any;

      layerNameEntry: any;

      layerType: any;

      listbox: any;

      zoomEntry: any;

      constructor(editor: any);

      createChildren: (() => any) | any;

      fillList: (() => any) | any;

      generateLuaScript_FillStops: ((layer: any) => any) | any;

      generateLuaScript_TextureStops: ((layer: any) => any) | any;

      onAdd: (() => any) | any;

      onChangeLayerType: (() => any) | any;

      onLayerNameEntered: (() => any) | any;

      onListboxEvent: ((action: any) => any) | any;

      onMinZoomEntered: (() => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      onMoveDown: (() => any) | any;

      onMoveUp: (() => any) | any;

      onRemove: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onSelect: (() => any) | any;

      render: (() => any) | any;

      setCurrentEditor: ((layer: any) => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor:new */
    export class WorldMapStyleEditor extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editorMode: any;

      layer: any;

      mapAPI: any;

      mapUI: any;

      styleAPI: any;

      constructor(editorMode: any);

      display: ((layer: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      shrinkWrap: (() => any) | any;

      undisplay: (() => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_ColorStopsPanel:new */
    export class WorldMapStyleEditor_ColorStopsPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {
      [id: string]: any;
      static [id: string]: any;

      alphaEntry: any;

      blueEntry: any;

      greenEntry: any;

      listbox: any;

      redEntry: any;

      zoomEntry: any;

      constructor(width: any, editorMode: any);

      createChildren: (() => any) | any;

      getSelectedAlpha: (() => any) | any;

      getSelectedBlue: (() => any) | any;

      getSelectedGreen: (() => any) | any;

      getSelectedIndex: (() => any) | any;

      getSelectedRed: (() => any) | any;

      getSelectedZoom: (() => any) | any;

      onAdd: (() => any) | any;

      onAlphaEntered: (() => any) | any;

      onBlueEntered: (() => any) | any;

      onGreenEntered: (() => any) | any;

      onListboxEvent: ((action: any) => any) | any;

      onMoveDown: (() => any) | any;

      onMoveUp: (() => any) | any;

      onRedEntered: (() => any) | any;

      onRemove: (() => any) | any;

      onSelect: (() => any) | any;

      onZoomEntered: (() => any) | any;

      setRGBA: ((r: any, g: any, b: any, a: any) => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_FilterPanel:new */
    export class WorldMapStyleEditor_FilterPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {
      [id: string]: any;
      static [id: string]: any;

      keyEntry: any;

      valueEntry: any;

      constructor(width: any, editorMode: any);

      createChildren: (() => any) | any;

      onKeyEntered: (() => any) | any;

      onValueEntered: (() => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_PolygonLayerPanel:new */
    export class WorldMapStyleEditor_PolygonLayerPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {
      [id: string]: any;
      static [id: string]: any;

      fillPanel: any;

      filterPanel: any;

      tabs: any;

      texturePanel: any;

      constructor(editorMode: any);

      createChildren: (() => any) | any;

      onMouseDownMap: ((x: any, y: any) => any) | any;

      onMouseMoveMap: ((dx: any, dy: any) => any) | any;

      onMouseUpMap: ((x: any, y: any) => any) | any;

      onMouseUpOutsideMap: ((x: any, y: any) => any) | any;

      onRightMouseDownMap: ((x: any, y: any) => any) | any;

      render: (() => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_TabPanel:new */
    export class WorldMapStyleEditor_TabPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editorMode: any;

      layer: any;

      mapAPI: any;

      mapUI: any;

      styleAPI: any;

      constructor(width: any, editorMode: any);

      getEntryClamped: ((entry: any, min: any, max: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onMouseDownMap: ((x: any, y: any) => any) | any;

      onMouseMoveMap: ((dx: any, dy: any) => any) | any;

      onMouseUpMap: ((x: any, y: any) => any) | any;

      onMouseUpOutsideMap: ((x: any, y: any) => any) | any;

      onRightMouseDownMap: ((x: any, y: any) => any) | any;

      populateList: ((layer: any) => any) | any;

      undisplay: (() => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_TextureLayerPanel:new */
    export class WorldMapStyleEditor_TextureLayerPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {
      [id: string]: any;
      static [id: string]: any;

      fillPanel: any;

      tabs: any;

      texturePanel: any;

      constructor(editorMode: any);

      createChildren: (() => any) | any;

      onMouseDownMap: ((x: any, y: any) => any) | any;

      onMouseMoveMap: ((dx: any, dy: any) => any) | any;

      onMouseUpMap: ((x: any, y: any) => any) | any;

      onMouseUpOutsideMap: ((x: any, y: any) => any) | any;

      onRightMouseDownMap: ((x: any, y: any) => any) | any;

      render: (() => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_TexturePanel:new */
    export class WorldMapStyleEditor_TexturePanel extends lua.client.ISUI.Maps.Editor
      .WorldMapStyleEditor_TextureStopsPanel {
      [id: string]: any;
      static [id: string]: any;

      lockSize: any;

      mode: any;

      resizeMode: any;

      resizer: any;

      scaleEntry: any;

      sizeLocked: any;

      snapButtons: any;

      snapMode: any;

      textureMode: any;

      useWorldBounds: any;

      constructor(width: any, editorMode: any);

      cancelResize: (() => any) | any;

      getSelectedTextureScale: (() => any) | any;

      onBoundsFromTexture: (() => any) | any;

      onChangeSizeLocked: (() => any) | any;

      onChangeSnapMode: ((button: any) => any) | any;

      onChangeTextureMode: (() => any) | any;

      onChangeUseWorldBounds: (() => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onResizeToTexture: (() => any) | any;

      onRightMouseDownMap: ((x: any, y: any) => any) | any;

      onScaleEntered: (() => any) | any;

      undisplay: (() => any) | any;
    }

    /** @customConstructor WorldMapStyleEditor_TextureStopsPanel:new */
    export class WorldMapStyleEditor_TextureStopsPanel extends lua.client.ISUI.Maps.Editor
      .WorldMapStyleEditor_TabPanel {
      [id: string]: any;
      static [id: string]: any;

      listbox: any;

      texturePathEntry: any;

      zoomEntry: any;

      constructor(width: any, editorMode: any);

      createChildren: (() => any) | any;

      getSelectedIndex: (() => any) | any;

      getSelectedTexture: (() => any) | any;

      getSelectedTexturePath: (() => any) | any;

      getSelectedZoom: (() => any) | any;

      onAdd: (() => any) | any;

      onListboxEvent: ((action: any) => any) | any;

      onMoveDown: (() => any) | any;

      onMoveUp: (() => any) | any;

      onRemove: (() => any) | any;

      onSelect: (() => any) | any;

      onTexturePathEntered: (() => any) | any;

      onZoomEntered: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Style {}
}
