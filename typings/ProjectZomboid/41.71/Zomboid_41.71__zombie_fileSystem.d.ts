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
 * File generated at Friday July 2022 15:18:33.632-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.fileSystem {
    /**
     * @customConstructor DeviceList.new
     * @
     * [CLASS] zombie.fileSystem.DeviceList
     */
    export class DeviceList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IFileDevice arg0): void
       */
      add(arg0: zombie.fileSystem.IFileDevice): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.fileSystem.IFile
       */
      createFile(): zombie.fileSystem.IFile;
      /**
       * Method Parameters: 
       *  - (String arg0): java.io.InputStream
       */
      createStream(arg0: string): java.io.InputStream;
    }
    /** [ENUM] zombie.fileSystem.FileSeekMode */
    export class FileSeekMode {
      protected constructor();
      static readonly BEGIN: zombie.fileSystem.FileSeekMode;
      static readonly CURRENT: zombie.fileSystem.FileSeekMode;
      static readonly END: zombie.fileSystem.FileSeekMode;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor FileSystem.new
     * @
     * [ABSTRACT CLASS] zombie.fileSystem.FileSystem
     */
    export class FileSystem {
      /** int */
      static readonly INVALID_ASYNC: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      cancelAsync(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IFile arg0): void
       */
      close(arg0: zombie.fileSystem.IFile): void;
      /**
       * Method Parameters: 
       *  - (IFile arg0, IFileTask2Callback arg1): void
       */
      closeAsync(arg0: zombie.fileSystem.IFile, arg1: zombie.fileSystem.IFileTask2Callback): void;
      /**
       * Method Parameters: 
       *  - (InputStream arg0): void
       */
      closeStream(arg0: java.io.InputStream): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.fileSystem.DeviceList
       */
      getDefaultDevice(): zombie.fileSystem.DeviceList;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      getTexturePackAlpha(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.fileSystem.DeviceList
       */
      getTexturePackDevice(arg0: string): zombie.fileSystem.DeviceList;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getTexturePackFlags(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWork(): boolean;
      /**
       * Method Parameters: 
       *  - (IFileDevice arg0): boolean
       */
      mount(arg0: zombie.fileSystem.IFileDevice): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, TexturePackTextures arg1, int arg2): void
       */
      mountTexturePack(arg0: string, arg1: zombie.fileSystem.FileSystem$TexturePackTextures, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (DeviceList arg0, String arg1, int arg2): zombie.fileSystem.IFile
       */
      open(arg0: zombie.fileSystem.DeviceList, arg1: string, arg2: number): zombie.fileSystem.IFile;
      /**
       * Method Parameters: 
       *  - (DeviceList arg0, String arg1, int arg2, IFileTask2Callback arg3): number
       */
      openAsync(arg0: zombie.fileSystem.DeviceList, arg1: string, arg2: number, arg3: zombie.fileSystem.IFileTask2Callback): number;
      /**
       * Method Parameters: 
       *  - (DeviceList arg0, String arg1): java.io.InputStream
       */
      openStream(arg0: zombie.fileSystem.DeviceList, arg1: string): java.io.InputStream;
      /**
       * Method Parameters: 
       *  - (FileTask arg0): number
       */
      runAsync(arg0: zombie.fileSystem.FileTask): number;
      /**
       * Method Parameters: 
       *  - (IFileDevice arg0): boolean
       */
      unMount(arg0: zombie.fileSystem.IFileDevice): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateAsyncTransactions(): void;
    }
    /**
     * @customConstructor SubTexture.new
     * @
     * [CLASS] zombie.fileSystem.FileSystem$SubTexture
     */
    export class FileSystem$SubTexture {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, SubTextureInfo arg2)
       */
      constructor(arg0: string | null, arg1: string | null, arg2: zombie.core.textures.TexturePackPage$SubTextureInfo | null);
    }
    /**
     * @customConstructor TexturePackTextures.new
     * @
     * [CLASS] zombie.fileSystem.FileSystem$TexturePackTextures extends java.util.HashMap<java.lang.String, zombie.fileSystem.FileSystem$SubTexture>
     */
    export class FileSystem$TexturePackTextures {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      compute(arg0: any, arg1: java.util._function_.BiFunction<string, zombie.fileSystem.FileSystem$SubTexture, zombie.fileSystem.FileSystem$SubTexture>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Function arg1): V
       */
      computeIfAbsent(arg0: any, arg1: java.util._function_.Function<string, zombie.fileSystem.FileSystem$SubTexture>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      computeIfPresent(arg0: any, arg1: java.util._function_.BiFunction<string, zombie.fileSystem.FileSystem$SubTexture, zombie.fileSystem.FileSystem$SubTexture>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsKey(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsValue(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<java.util.Map$Entry<K, V>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<string, zombie.fileSystem.FileSystem$SubTexture>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<string, zombie.fileSystem.FileSystem$SubTexture>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      get(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      getOrDefault(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<K>
       */
      keySet(): java.util.Set<string>;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<zombie.fileSystem.FileSystem$SubTexture, zombie.fileSystem.FileSystem$SubTexture, zombie.fileSystem.FileSystem$SubTexture>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<string, zombie.fileSystem.FileSystem$SubTexture>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       *  - (Object arg0, Object arg1, Object arg2): boolean
       */
      replace(arg0: any, arg1: any, arg2?: any): any;
      /**
       * Method Parameters: 
       *  - (BiFunction arg0): void
       */
      replaceAll(arg0: java.util._function_.BiFunction<string, zombie.fileSystem.FileSystem$SubTexture, zombie.fileSystem.FileSystem$SubTexture>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<V>
       */
      values(): java.util.Collection<zombie.fileSystem.FileSystem$SubTexture>;
    }
    /**
     * @customConstructor FileTask.new
     * @
     * [ABSTRACT CLASS] zombie.fileSystem.FileTask
     */
    export class FileTask {
      /**
       * Constructors: 
       *  - (FileSystem arg0)
       *  - (FileSystem arg0, IFileTaskCallback arg1)
       */
      protected constructor(arg0: zombie.fileSystem.FileSystem | null, arg1?: zombie.fileSystem.IFileTaskCallback | null);
      /**
       * Method Parameters: 
       *  - (Empty): V
       */
      call(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      done(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getErrorMessage(): string;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      handleResult(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPriority(arg0: number): void;
    }
    /**
     * @customConstructor IFile.new
     * @
     * [INTERFACE] zombie.fileSystem.IFile
     */
    export class IFile {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getBuffer(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.fileSystem.IFileDevice
       */
      getDevice(): zombie.fileSystem.IFileDevice;
      /**
       * Method Parameters: 
       *  - (Empty): java.io.InputStream
       */
      getInputStream(): java.io.InputStream;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      open(arg0: string, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      pos(): number;
      /**
       * Method Parameters: 
       *  - (byte[] arg0, long arg1): boolean
       */
      read(arg0: number[], arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (FileSeekMode arg0, long arg1): boolean
       */
      seek(arg0: zombie.fileSystem.FileSeekMode, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (byte[] arg0, long arg1): boolean
       */
      write(arg0: number[], arg1: number): boolean;
    }
    /**
     * @customConstructor IFileDevice.new
     * @
     * [INTERFACE] zombie.fileSystem.IFileDevice
     */
    export class IFileDevice {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IFile arg0): zombie.fileSystem.IFile
       */
      createFile(arg0: zombie.fileSystem.IFile): zombie.fileSystem.IFile;
      /**
       * Method Parameters: 
       *  - (String arg0, InputStream arg1): java.io.InputStream
       */
      createStream(arg0: string, arg1: java.io.InputStream): java.io.InputStream;
      /**
       * Method Parameters: 
       *  - (IFile arg0): void
       */
      destroyFile(arg0: zombie.fileSystem.IFile): void;
      /**
       * Method Parameters: 
       *  - (InputStream arg0): void
       */
      destroyStream(arg0: java.io.InputStream): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
    }
    /**
     * @customConstructor IFileTask2Callback.new
     * @
     * [INTERFACE] zombie.fileSystem.IFileTask2Callback
     */
    export class IFileTask2Callback {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IFile arg0, Object arg1): void
       */
      onFileTaskFinished(arg0: zombie.fileSystem.IFile, arg1: any): void;
    }
    /**
     * @customConstructor IFileTaskCallback.new
     * @
     * [INTERFACE] zombie.fileSystem.IFileTaskCallback
     */
    export class IFileTaskCallback {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      onFileTaskFinished(arg0: any): void;
    }
  }
}
