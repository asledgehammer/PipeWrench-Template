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
 * File generated at: 2022-07-29T08:38:59.452Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Statistic {
    /** @customConstructor ISGameStatisticPanel:new */
    export class ISGameStatisticPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      avgUpdatePeriod: any;

      buttonBorderColor: any;

      buttonChartDiskOperations: any;

      buttonChartMemory: any;

      buttonChartPackets: any;

      buttonChartUpdatePeriod: any;

      buttonToggleMonitor: any;

      cGreen: any;

      colExt: any;

      colInt: any;

      connection_access: any;

      connection_fps: any;

      connection_fpsAvg: any;

      connection_ip: any;

      connection_ping: any;

      connection_ping_avg: any;

      connection_players: any;

      connection_players_count: any;

      connection_players_desync_avg: any;

      connection_players_desync_max: any;

      connection_players_desync_teleport: any;

      connection_username: any;

      connection_zombies_count: any;

      connection_zombies_desync_avg: any;

      connection_zombies_desync_max: any;

      connection_zombies_desync_teleport: any;

      connections: any;

      cRed: any;

      data: any;

      flareCount: any;

      flareID: any;

      freeMemory: any;

      histogramm_h: any;

      histogramm_w: any;

      histogramm_y: any;

      incomePackets: any;

      init: any;

      lastReport: any;

      loadCellFromDisk: any;

      maxUpdatePeriod: any;

      minUpdatePeriod: any;

      outcomePackets: any;

      panelTitle: any;

      periodValue: any;

      saveCellToDisk: any;

      usedMemory: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawIncomePacketsList: ((y: any, item: any, alt: any) => any) | any;

      drawOutcomePacketsList: ((y: any, item: any, alt: any) => any) | any;

      drawUsersList: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((_button: any) => any) | any;

      onClickClose: (() => any) | any;

      onCombo: ((_combo: any) => any) | any;

      OnFlaresListMouseDown: ((item: any) => any) | any;

      populateConnectionsList: (() => any) | any;

      populatePacketsList: (() => any) | any;

      populateUsersList: ((connect: any) => any) | any;

      updateValues: (() => any) | any;

      static OnOpenPanel: (() => any) | any;

      static OnServerStatisticReceived: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Statistic.ISGameStatisticPanel {}
}
