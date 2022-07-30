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
 * File generated at: 2022-07-29T08:39:00.654Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTradingUI:new */
    export class ISTradingUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static tradeQuestionUI: any;

      acceptDeal: any;

      blockingMessage: any;

      blockingMessage2: any;

      hisOffer: any;

      hisOfferDatas: any;

      historic: any;

      historical: any;

      historicalUI: any;

      historyMessage: any;

      historyMessageCD: any;

      infoBtn: any;

      infoRichText: any;

      listHeaderColor: any;

      no: any;

      otherPlayer: any;

      otherSealedOffer: any;

      pendingRequest: any;

      player: any;

      remove: any;

      sealOffer: any;

      selectedItem: any;

      toolRender: any;

      yourOffer: any;

      yourOfferDatas: any;

      constructor(x: any, y: any, width: any, height: any, player: any, otherPlayer: any);

      addItemToYourOffer: ((item: any) => any) | any;

      drawOffer: ((y: any, item: any, alt: any) => any) | any;

      finalizeDeal: (() => any) | any;

      onAnswerTradeRequest: ((button: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onSealOffer: ((clickedOption: any, enabled: any) => any) | any;

      populateList: (() => any) | any;

      removeItem: ((item: any) => any) | any;

      render: (() => any) | any;

      setHistoryMessage: ((message: any, publishInHistorical: any, add: any, remove: any) => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;

      updateTooltip: (() => any) | any;

      yourOfferMouseUp: ((x: any, y: any) => any) | any;

      static AcceptedTrade: ((accepted: any) => any) | any;

      static OtherAddNewItem: ((player: any, item: any) => any) | any;

      static ReceiveTradeRequest: ((requester: any) => any) | any;

      static RemoveItem: ((player: any, index: any) => any) | any;

      static UpdateState: ((player: any, state: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTradingUI {}
}
