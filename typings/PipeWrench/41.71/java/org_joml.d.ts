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
  export namespace org.joml {
    export type Matrix2dc = any;
    export type Matrix2fc = any;
    export type Matrix3dc = any;
    export type Matrix3f = any;
    export type Matrix3fc = any;
    export type Matrix3x2fc = any;
    export type Matrix4dc = any;
    export type Matrix4f = any;
    export type Matrix4fc = any;
    export type Matrix4x3fc = any;
    export type Quaternionf = any;
    export type Quaternionfc = any;
    export type Vector2d = any;
    export type Vector2dc = any;
    /**
     * @customConstructor Vector2f.new
     * @
     * [CLASS] org.joml.Vector2f
     */
    export class Vector2f {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (float[] arg0)
       *  - (ByteBuffer arg0)
       *  - (FloatBuffer arg0)
       *  - (float arg0)
       *  - (Vector2fc arg0)
       *  - (Vector2ic arg0)
       *  - (int arg0, ByteBuffer arg1)
       *  - (int arg0, FloatBuffer arg1)
       *  - (float arg0, float arg1)
       */
      constructor(arg0?: number[] | java.nio.ByteBuffer | java.nio.FloatBuffer | number | org.joml.Vector2fc | org.joml.Vector2ic, arg1?: java.nio.ByteBuffer | java.nio.FloatBuffer | number);
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       *  - (Vector2f arg0): org.joml.Vector2f
       */
      absolute(arg0?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2f arg1): org.joml.Vector2f
       *  - (float arg0, float arg1): org.joml.Vector2f
       *  - (float arg0, float arg1, Vector2f arg2): org.joml.Vector2f
       */
      add(arg0: org.joml.Vector2fc | number, arg1?: org.joml.Vector2f | number, arg2?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): number
       */
      angle(arg0: org.joml.Vector2fc): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       *  - (Vector2f arg0): org.joml.Vector2f
       */
      ceil(arg0?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): number
       *  - (float arg0, float arg1): number
       */
      distance(arg0: org.joml.Vector2fc | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): number
       *  - (float arg0, float arg1): number
       */
      distanceSquared(arg0: org.joml.Vector2fc | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector2f
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2f arg1): org.joml.Vector2f
       *  - (float arg0, float arg1): org.joml.Vector2f
       *  - (float arg0, Vector2f arg1): org.joml.Vector2f
       *  - (float arg0, float arg1, Vector2f arg2): org.joml.Vector2f
       */
      div(arg0: number | org.joml.Vector2fc, arg1?: org.joml.Vector2f | number, arg2?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): number
       */
      dot(arg0: org.joml.Vector2fc): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (Vector2fc arg0, float arg1): boolean
       *  - (float arg0, float arg1): boolean
       */
      equals(arg0: any, arg1?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       *  - (Vector2f arg0): org.joml.Vector2f
       */
      floor(arg0?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (float arg0, Vector2fc arg1): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2fc arg1): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2fc arg1, Vector2f arg2): org.joml.Vector2f
       *  - (float arg0, Vector2fc arg1, Vector2f arg2): org.joml.Vector2f
       */
      fma(arg0: number | org.joml.Vector2fc, arg1: org.joml.Vector2fc, arg2?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       *  - (FloatBuffer arg0): java.nio.FloatBuffer
       *  - (ByteBuffer arg0): java.nio.ByteBuffer
       *  - (Vector2f arg0): org.joml.Vector2f
       *  - (Vector2d arg0): org.joml.Vector2d
       *  - (int arg0, FloatBuffer arg1): java.nio.FloatBuffer
       *  - (int arg0, Vector2i arg1): org.joml.Vector2i
       *  - (int arg0, ByteBuffer arg1): java.nio.ByteBuffer
       */
      get(arg0: number | java.nio.FloatBuffer | java.nio.ByteBuffer | org.joml.Vector2f | org.joml.Vector2d, arg1?: java.nio.FloatBuffer | org.joml.Vector2i | java.nio.ByteBuffer): number | java.nio.FloatBuffer | java.nio.ByteBuffer | org.joml.Vector2f | org.joml.Vector2d | org.joml.Vector2i;
      /**
       * Method Parameters: 
       *  - (long arg0): org.joml.Vector2fc
       */
      getToAddress(arg0: number): org.joml.Vector2fc;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      lengthSquared(): number;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0, float arg1): org.joml.Vector2f
       *  - (Vector2fc arg0, float arg1, Vector2f arg2): org.joml.Vector2f
       */
      lerp(arg0: org.joml.Vector2fc, arg1: number, arg2?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2f arg1): org.joml.Vector2f
       */
      max(arg0: org.joml.Vector2fc, arg1?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      maxComponent(): number;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2f arg1): org.joml.Vector2f
       */
      min(arg0: org.joml.Vector2fc, arg1?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      minComponent(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector2f
       *  - (Matrix2dc arg0): org.joml.Vector2f
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (Matrix2fc arg0): org.joml.Vector2f
       *  - (float arg0, Vector2f arg1): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2f arg1): org.joml.Vector2f
       *  - (float arg0, float arg1): org.joml.Vector2f
       *  - (Matrix2dc arg0, Vector2f arg1): org.joml.Vector2f
       *  - (Matrix2fc arg0, Vector2f arg1): org.joml.Vector2f
       *  - (float arg0, float arg1, Vector2f arg2): org.joml.Vector2f
       */
      mul(arg0: number | org.joml.Matrix2dc | org.joml.Vector2fc | org.joml.Matrix2fc, arg1?: org.joml.Vector2f | number, arg2?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Matrix3x2fc arg0): org.joml.Vector2f
       *  - (Matrix3x2fc arg0, Vector2f arg1): org.joml.Vector2f
       */
      mulDirection(arg0: org.joml.Matrix3x2fc, arg1?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Matrix3x2fc arg0): org.joml.Vector2f
       *  - (Matrix3x2fc arg0, Vector2f arg1): org.joml.Vector2f
       */
      mulPosition(arg0: org.joml.Matrix3x2fc, arg1?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Matrix2fc arg0): org.joml.Vector2f
       *  - (Matrix2fc arg0, Vector2f arg1): org.joml.Vector2f
       */
      mulTranspose(arg0: org.joml.Matrix2fc, arg1?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       *  - (Vector2f arg0): org.joml.Vector2f
       */
      negate(arg0?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       *  - (Vector2f arg0): org.joml.Vector2f
       *  - (float arg0): org.joml.Vector2f
       *  - (float arg0, Vector2f arg1): org.joml.Vector2f
       */
      normalize(arg0?: org.joml.Vector2f | number, arg1?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       */
      perpendicular(): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (ObjectInput arg0): void
       */
      readExternal(arg0: java.io.ObjectInput): void;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       *  - (Vector2f arg0): org.joml.Vector2f
       */
      round(arg0?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (double arg0): org.joml.Vector2f
       *  - (float arg0): org.joml.Vector2f
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (ByteBuffer arg0): org.joml.Vector2f
       *  - (float[] arg0): org.joml.Vector2f
       *  - (Vector2dc arg0): org.joml.Vector2f
       *  - (Vector2ic arg0): org.joml.Vector2f
       *  - (FloatBuffer arg0): org.joml.Vector2f
       *  - (float arg0, float arg1): org.joml.Vector2f
       *  - (double arg0, double arg1): org.joml.Vector2f
       *  - (int arg0, FloatBuffer arg1): org.joml.Vector2f
       *  - (int arg0, ByteBuffer arg1): org.joml.Vector2f
       */
      set(arg0: number | org.joml.Vector2fc | java.nio.ByteBuffer | number[] | org.joml.Vector2dc | org.joml.Vector2ic | java.nio.FloatBuffer, arg1?: number | java.nio.FloatBuffer | java.nio.ByteBuffer): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): org.joml.Vector2f
       */
      setComponent(arg0: number, arg1: number): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (long arg0): org.joml.Vector2f
       */
      setFromAddress(arg0: number): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Vector2fc arg0): org.joml.Vector2f
       *  - (float arg0, float arg1): org.joml.Vector2f
       *  - (Vector2fc arg0, Vector2f arg1): org.joml.Vector2f
       *  - (float arg0, float arg1, Vector2f arg2): org.joml.Vector2f
       */
      sub(arg0: org.joml.Vector2fc | number, arg1?: number | org.joml.Vector2f, arg2?: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (NumberFormat arg0): string
       */
      toString(arg0?: java.text.NumberFormat): string;
      /**
       * Method Parameters: 
       *  - (ObjectOutput arg0): void
       */
      writeExternal(arg0: java.io.ObjectOutput): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      x(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      y(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2f
       */
      zero(): org.joml.Vector2f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static length(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static lengthSquared(arg0: number, arg1: number): number;
    }
    export type Vector2fc = any;
    export type Vector2i = any;
    export type Vector2ic = any;
    export type Vector3d = any;
    export type Vector3dc = any;
    /**
     * @customConstructor Vector3f.new
     * @
     * [CLASS] org.joml.Vector3f
     */
    export class Vector3f {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (float[] arg0)
       *  - (ByteBuffer arg0)
       *  - (FloatBuffer arg0)
       *  - (float arg0)
       *  - (Vector3ic arg0)
       *  - (Vector3fc arg0)
       *  - (Vector2ic arg0, float arg1)
       *  - (int arg0, ByteBuffer arg1)
       *  - (int arg0, FloatBuffer arg1)
       *  - (Vector2fc arg0, float arg1)
       *  - (float arg0, float arg1, float arg2)
       */
      constructor(arg0?: number[] | java.nio.ByteBuffer | java.nio.FloatBuffer | number | org.joml.Vector3ic | org.joml.Vector3fc | org.joml.Vector2ic | org.joml.Vector2fc, arg1?: number | java.nio.ByteBuffer | java.nio.FloatBuffer, arg2?: number);
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      absolute(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      add(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       */
      angle(arg0: org.joml.Vector3fc): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       */
      angleCos(arg0: org.joml.Vector3fc): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Vector3fc arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      angleSigned(arg0: org.joml.Vector3fc | number, arg1: org.joml.Vector3fc | number, arg2?: number, arg3?: number, arg4?: number, arg5?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      ceil(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      cross(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      distance(arg0: org.joml.Vector3fc | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      distanceSquared(arg0: org.joml.Vector3fc | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      div(arg0: number | org.joml.Vector3fc, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      dot(arg0: org.joml.Vector3fc | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (Vector3fc arg0, float arg1): boolean
       *  - (float arg0, float arg1, float arg2): boolean
       */
      equals(arg0: any, arg1?: number, arg2?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      floor(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (float arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (float arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       */
      fma(arg0: org.joml.Vector3fc | number, arg1: org.joml.Vector3fc, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): java.nio.ByteBuffer
       *  - (FloatBuffer arg0): java.nio.FloatBuffer
       *  - (int arg0): number
       *  - (Vector3f arg0): org.joml.Vector3f
       *  - (Vector3d arg0): org.joml.Vector3d
       *  - (int arg0, FloatBuffer arg1): java.nio.FloatBuffer
       *  - (int arg0, ByteBuffer arg1): java.nio.ByteBuffer
       *  - (int arg0, Vector3i arg1): org.joml.Vector3i
       */
      get(arg0: java.nio.ByteBuffer | java.nio.FloatBuffer | number | org.joml.Vector3f | org.joml.Vector3d, arg1?: java.nio.FloatBuffer | java.nio.ByteBuffer | org.joml.Vector3i): java.nio.ByteBuffer | java.nio.FloatBuffer | number | org.joml.Vector3f | org.joml.Vector3d | org.joml.Vector3i;
      /**
       * Method Parameters: 
       *  - (long arg0): org.joml.Vector3fc
       */
      getToAddress(arg0: number): org.joml.Vector3fc;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      half(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Vector3fc arg1, Vector3fc arg2, float arg3, Vector3f arg4): org.joml.Vector3f
       */
      hermite(arg0: org.joml.Vector3fc, arg1: org.joml.Vector3fc, arg2: org.joml.Vector3fc, arg3: number, arg4: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      lengthSquared(): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, float arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, float arg1, Vector3f arg2): org.joml.Vector3f
       */
      lerp(arg0: org.joml.Vector3fc, arg1: number, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      max(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      maxComponent(): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      min(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      minComponent(): number;
      /**
       * Method Parameters: 
       *  - (Matrix3x2fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Matrix3dc arg0): org.joml.Vector3f
       *  - (Matrix3fc arg0): org.joml.Vector3f
       *  - (float arg0): org.joml.Vector3f
       *  - (Matrix3x2fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix3dc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      mul(arg0: org.joml.Matrix3x2fc | org.joml.Vector3fc | org.joml.Matrix3dc | org.joml.Matrix3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (float arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (float arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       */
      mulAdd(arg0: org.joml.Vector3fc | number, arg1: org.joml.Vector3fc, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4x3fc arg0): org.joml.Vector3f
       *  - (Matrix4dc arg0): org.joml.Vector3f
       *  - (Matrix4dc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4x3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulDirection(arg0: org.joml.Matrix4fc | org.joml.Matrix4x3fc | org.joml.Matrix4dc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4x3fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4x3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulPosition(arg0: org.joml.Matrix4x3fc | org.joml.Matrix4fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): number
       *  - (Matrix4fc arg0, Vector3f arg1): number
       */
      mulPositionW(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f): number;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4fc arg0, float arg1, Vector3f arg2): org.joml.Vector3f
       */
      mulProject(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f | number, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix3fc arg0): org.joml.Vector3f
       *  - (Matrix3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulTranspose(arg0: org.joml.Matrix3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulTransposeDirection(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulTransposePosition(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      negate(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (float arg0): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      normalize(arg0?: number | org.joml.Vector3f, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      orthogonalize(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      orthogonalizeUnit(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (ObjectInput arg0): void
       */
      readExternal(arg0: java.io.ObjectInput): void;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      reflect(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Quaternionfc arg0): org.joml.Vector3f
       *  - (Quaternionfc arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotate(arg0: org.joml.Quaternionfc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, float arg3, Vector3f arg4): org.joml.Vector3f
       */
      rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotateX(arg0: number, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotateY(arg0: number, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotateZ(arg0: number, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Quaternionf arg1): org.joml.Quaternionf
       *  - (float arg0, float arg1, float arg2, Quaternionf arg3): org.joml.Quaternionf
       */
      rotationTo(arg0: org.joml.Vector3fc | number, arg1: org.joml.Quaternionf | number, arg2?: number, arg3?: org.joml.Quaternionf): org.joml.Quaternionf;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      round(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (double arg0): org.joml.Vector3f
       *  - (Vector3dc arg0): org.joml.Vector3f
       *  - (Vector3ic arg0): org.joml.Vector3f
       *  - (float arg0): org.joml.Vector3f
       *  - (ByteBuffer arg0): org.joml.Vector3f
       *  - (float[] arg0): org.joml.Vector3f
       *  - (FloatBuffer arg0): org.joml.Vector3f
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector2fc arg0, float arg1): org.joml.Vector3f
       *  - (Vector2dc arg0, float arg1): org.joml.Vector3f
       *  - (int arg0, FloatBuffer arg1): org.joml.Vector3f
       *  - (Vector2ic arg0, float arg1): org.joml.Vector3f
       *  - (int arg0, ByteBuffer arg1): org.joml.Vector3f
       *  - (double arg0, double arg1, double arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       */
      set(arg0: number | org.joml.Vector3dc | org.joml.Vector3ic | java.nio.ByteBuffer | number[] | java.nio.FloatBuffer | org.joml.Vector3fc | org.joml.Vector2fc | org.joml.Vector2dc | org.joml.Vector2ic, arg1?: number | java.nio.FloatBuffer | java.nio.ByteBuffer, arg2?: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): org.joml.Vector3f
       */
      setComponent(arg0: number, arg1: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (long arg0): org.joml.Vector3f
       */
      setFromAddress(arg0: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, float arg1, Vector3f arg2): org.joml.Vector3f
       */
      smoothStep(arg0: org.joml.Vector3fc, arg1: number, arg2: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      sub(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (NumberFormat arg0): string
       */
      toString(arg0?: java.text.NumberFormat): string;
      /**
       * Method Parameters: 
       *  - (ObjectOutput arg0): void
       */
      writeExternal(arg0: java.io.ObjectOutput): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      x(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      y(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      z(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      zero(): org.joml.Vector3f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static length(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lengthSquared(arg0: number, arg1: number, arg2: number): number;
    }
    export type Vector3fc = any;
    export type Vector3i = any;
    export type Vector3ic = any;
    export type Vector4f = any;
  }
}
