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
  export namespace zombie.chat {
    /**
     * @customConstructor ChatBase.new
     * @
     * [ABSTRACT CLASS] zombie.chat.ChatBase
     */
    export class ChatBase {
      /**
       * Constructors: 
       *  - (int arg0, ChatType arg1, ChatTab arg2)
       *  - (ByteBuffer arg0, ChatType arg1, ChatTab arg2, IsoPlayer arg3)
       */
      protected constructor(arg0: number | java.nio.ByteBuffer, arg1: zombie.network.chat.ChatType, arg2: zombie.chat.ChatTab, arg3?: zombie.characters.IsoPlayer);
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      addMember(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.chat.ChatMessage
       */
      createMessage(arg0: string): zombie.chat.ChatMessage;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.chat.ServerChatMessage
       */
      createServerMessage(arg0: string): zombie.chat.ServerChatMessage;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getJustAddedMembers(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getJustRemovedMembers(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0): string
       */
      getMessagePrefix(arg0: zombie.chat.ChatMessage): string;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0): string
       */
      getMessageTextWithPrefix(arg0: zombie.chat.ChatMessage): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatMode
       */
      getMode(): zombie.chat.ChatMode;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTabID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitleID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.chat.ChatType
       */
      getType(): zombie.network.chat.ChatType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZombieAttractionRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSendingToRadio(): boolean;
      /**
       * Method Parameters: 
       *  - (Short arg0): void
       */
      leaveMember(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0, ChatMessage arg1): void
       */
      packMessage(arg0: zombie.core.network.ByteBufferWriter, arg1: zombie.chat.ChatMessage): void;
      /**
       * Method Parameters: 
       *  - (Short arg0): void
       */
      removeMember(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0): void
       *  - (ServerChatMessage arg0): void
       */
      sendMessageToChatMembers(arg0: zombie.chat.ChatMessage | zombie.chat.ServerChatMessage): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0, ChatMessage arg1): void
       *  - (short arg0, ChatMessage arg1): void
       */
      sendMessageToPlayer(arg0: zombie.core.raknet.UdpConnection | number, arg1: zombie.chat.ChatMessage): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendPlayerJoinChatPacket(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       *  - (UdpConnection arg0): void
       */
      sendPlayerLeaveChatPacket(arg0: number | zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0, DeviceData arg1): void
       */
      sendToServer(arg0: zombie.chat.ChatMessage, arg1: zombie.radio.devices.DeviceData): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFontSize(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ChatSettings arg0): void
       */
      setSettings(arg0: zombie.chat.ChatSettings): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowTimestamp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowTitle(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0): void
       *  - (String arg0, String arg1): void
       */
      showMessage(arg0: zombie.chat.ChatMessage | string, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      syncMembersByUsernames(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): zombie.chat.ChatMessage
       */
      unpackMessage(arg0: java.nio.ByteBuffer): zombie.chat.ChatMessage;
    }
    /**
     * @customConstructor ChatElement.new
     * @
     * [CLASS] zombie.chat.ChatElement
     */
    export class ChatElement {
      /** zombie.chat.NineGridTexture */
      static backdropTexture?: zombie.chat.NineGridTexture;
      /** boolean */
      static doBackDrop: boolean;

      /**
       * Constructors: 
       *  - (ChatElementOwner arg0, int arg1, String arg2)
       */
      constructor(arg0: zombie.chat.ChatElementOwner, arg1: number, arg2: string);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsSpeaking(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      Say(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      SayDebug(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6, boolean arg7, boolean arg8, boolean arg9, boolean arg10, boolean arg11, boolean arg12): void
       */
      addChatLine(arg0: string, arg1: number, arg2: number, arg3: number, arg4?: number | zombie.ui.UIFont, arg5?: number, arg6?: string, arg7?: boolean, arg8?: boolean, arg9?: boolean, arg10?: boolean, arg11?: boolean, arg12?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      clear(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getHasChatToDisplay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxChatLines(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSayLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSayLineTag(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTalkerType(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       *  - (int arg0, int arg1, int arg2, boolean arg3): void
       */
      renderBatched(arg0: number, arg1: number, arg2: number, arg3?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHistoryRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxCharsPerLine(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxChatLines(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTalkerType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseEuclidean(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static NoRender(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static RenderBatch(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static addNoLogText(arg0: string): void;
    }
    /**
     * @customConstructor ChatElementOwner.new
     * @
     * [INTERFACE] zombie.chat.ChatElementOwner
     */
    export class ChatElementOwner {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
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
    }
    /**
     * @customConstructor ChatMessage.new
     * @
     * [CLASS] zombie.chat.ChatMessage
     */
    export class ChatMessage {
      /**
       * Constructors: 
       *  - (ChatBase arg0, String arg1)
       *  - (ChatBase arg0, LocalDateTime arg1, String arg2)
       */
      constructor(arg0: zombie.chat.ChatBase, arg1: string | java.time.LocalDateTime, arg2?: string);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatMessage
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatBase
       */
      getChat(): zombie.chat.ChatBase;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChatID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomTag(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.time.LocalDateTime
       */
      getDatetime(): java.time.LocalDateTime;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDatetimeStr(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRadioChannel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getTextColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextWithPrefix(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextWithReplacedParentheses(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomColor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFromDiscord(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOverHeadSpeech(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScramble(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isServerAlert(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isServerAuthor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShouldAttractZombies(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowAuthor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowInChat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      makeFromDiscord(): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      pack(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCustomTag(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (LocalDateTime arg0): void
       */
      setDatetime(arg0: java.time.LocalDateTime): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocal(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverHeadSpeech(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRadioChannel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScrambledText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setServerAlert(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setServerAuthor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShouldAttractZombies(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowInChat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setTextColor(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.chat.ChatMode */
    export class ChatMode {
      protected constructor();
      static readonly ClientMultiPlayer: zombie.chat.ChatMode;
      static readonly ServerMultiPlayer: zombie.chat.ChatMode;
      static readonly SinglePlayer: zombie.chat.ChatMode;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor ChatSettings.new
     * @
     * [CLASS] zombie.chat.ChatSettings
     */
    export class ChatSettings {
      /** float */
      static readonly infinityRange: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (ByteBuffer arg0)
       */
      constructor(arg0?: java.nio.ByteBuffer);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIFont
       */
      getFont(): zombie.ui.UIFont;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getFontColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFontSize(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZombieAttractionRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowBBcode(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowChatIcons(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowColors(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowFonts(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowImages(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBold(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEqualizeLineHeights(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowAuthor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowChatTitle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowTimestamp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseOnlyActiveTab(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      pack(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowBBcode(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowChatIcons(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowColors(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowFonts(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowImages(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBold(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEqualizeLineHeights(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0): void
       */
      setFont(arg0: zombie.ui.UIFont): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setFontColor(arg0: zombie.core.Color | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFontSize(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowAuthor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowChatTitle(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowTimestamp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseOnlyActiveTab(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZombieAttractionRange(arg0: number): void;
    }
    /** [ENUM] zombie.chat.ChatSettings$FontSize */
    export class ChatSettings$FontSize {
      protected constructor();
      static readonly Large: zombie.chat.ChatSettings$FontSize;
      static readonly Medium: zombie.chat.ChatSettings$FontSize;
      static readonly NotDefine: zombie.chat.ChatSettings$FontSize;
      static readonly Small: zombie.chat.ChatSettings$FontSize;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor ChatTab.new
     * @
     * [CLASS] zombie.chat.ChatTab
     */
    export class ChatTab {
      /**
       * Constructors: 
       *  - (short arg0, String arg1)
       *  - (short arg0, String arg1, int arg2)
       */
      constructor(arg0: number, arg1: string, arg2?: number);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RemoveChat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitleID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendAddTabPacket(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendRemoveTabPacket(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
    }
    /**
     * @customConstructor NineGridTexture.new
     * @
     * [CLASS] zombie.chat.NineGridTexture
     */
    export class NineGridTexture {
      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string, arg1: number);
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderInnerBased(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    /**
     * @customConstructor ServerChatMessage.new
     * @
     * [CLASS] zombie.chat.ServerChatMessage extends zombie.chat.ChatMessage
     */
    export class ServerChatMessage {
      /**
       * Constructors: 
       *  - (ChatBase arg0, String arg1)
       */
      constructor(arg0: zombie.chat.ChatBase, arg1: string);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatMessage
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatBase
       */
      getChat(): zombie.chat.ChatBase;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChatID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomTag(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.time.LocalDateTime
       */
      getDatetime(): java.time.LocalDateTime;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDatetimeStr(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRadioChannel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getTextColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextWithPrefix(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextWithReplacedParentheses(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomColor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFromDiscord(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOverHeadSpeech(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScramble(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isServerAlert(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isServerAuthor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShouldAttractZombies(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowAuthor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowInChat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      makeFromDiscord(): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      pack(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCustomTag(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (LocalDateTime arg0): void
       */
      setDatetime(arg0: java.time.LocalDateTime): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocal(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOverHeadSpeech(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRadioChannel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScrambledText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setServerAlert(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setServerAuthor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShouldAttractZombies(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowInChat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setTextColor(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
  }
}
