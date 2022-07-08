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
 * File generated at Friday July 2022 15:18:33.673-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.network.chat {
    /** [ENUM] zombie.network.chat.ChatType */
    export class ChatType {
      protected constructor();
      static readonly admin: zombie.network.chat.ChatType;
      static readonly faction: zombie.network.chat.ChatType;
      static readonly general: zombie.network.chat.ChatType;
      static readonly notDefined: zombie.network.chat.ChatType;
      static readonly radio: zombie.network.chat.ChatType;
      static readonly safehouse: zombie.network.chat.ChatType;
      static readonly say: zombie.network.chat.ChatType;
      static readonly server: zombie.network.chat.ChatType;
      static readonly shout: zombie.network.chat.ChatType;
      static readonly whisper: zombie.network.chat.ChatType;
      name(): string;
      ordinal(): number;
      getTitleID(): string;

      getValue(): number;

    }
  }
}
