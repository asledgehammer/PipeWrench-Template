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
 * File generated at Friday July 2022 15:18:33.633-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.math {
    /**
     * @customConstructor PZMath.new
     * @
     * [CLASS] zombie.core.math.PZMath
     */
    export class PZMath {
      /** float */
      static readonly PI: number;
      /** float */
      static readonly PI2: number;
      /** float */
      static readonly degToRads: number;
      /** long */
      static readonly microsToNanos: number;
      /** long */
      static readonly millisToMicros: number;
      /** float */
      static readonly radToDegs: number;
      /** long */
      static readonly secondsToMillis: number;
      /** long */
      static secondsToNanos: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static abs(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static almostIdentity(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static almostUnitIdentity(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static c_lerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static canParseFloat(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static ceil(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0, long arg1, long arg2): number
       *  - (float arg0, float arg1, float arg2): number
       *  - (int arg0, int arg1, int arg2): number
       */
      static clamp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clampFloat(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static clamp_01(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0, Matrix4f arg1): org.lwjgl.util.vector.Matrix4f
       *  - (Matrix4f arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      static convertMatrix(arg0: org.joml.Matrix4f | org.lwjgl.util.vector.Matrix4f, arg1: org.lwjgl.util.vector.Matrix4f | org.joml.Matrix4f): org.lwjgl.util.vector.Matrix4f | org.joml.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static degToRad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       *  - (float arg0, float arg1, float arg2): boolean
       */
      static equal(arg0: number, arg1: number, arg2?: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static fastfloor(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static floor(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static frac(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static gain(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static getClosestAngle(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static getClosestAngleDegrees(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       *  - (Vector2 arg0, Vector2 arg1, Vector2 arg2, float arg3): zombie.iso.Vector2
       *  - (Vector3f arg0, Vector3f arg1, Vector3f arg2, float arg3): org.lwjgl.util.vector.Vector3f
       */
      static lerp(arg0: number | zombie.iso.Vector2 | org.lwjgl.util.vector.Vector3f, arg1: number | zombie.iso.Vector2 | org.lwjgl.util.vector.Vector3f, arg2: number | zombie.iso.Vector2 | org.lwjgl.util.vector.Vector3f, arg3?: number): number | zombie.iso.Vector2 | org.lwjgl.util.vector.Vector3f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerpAngle(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static lerpFunc_EaseInQuad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static lerpFunc_EaseOutInQuad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static lerpFunc_EaseOutQuad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       *  - (float arg0, float arg1): number
       */
      static max(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (int arg0, int arg1): number
       */
      static min(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static radToDeg(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundFromEdges(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundToInt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundToIntPlus05(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundToNearest(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static sign(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Quaternion arg0, Quaternion arg1, Quaternion arg2, float arg3): org.lwjgl.util.vector.Quaternion
       */
      static slerp(arg0: org.lwjgl.util.vector.Quaternion, arg1: org.lwjgl.util.vector.Quaternion, arg2: org.lwjgl.util.vector.Quaternion, arg3: number): org.lwjgl.util.vector.Quaternion;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static sqrt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static step(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): zombie.core.math.PZMath$SideOfLine
       */
      static testSideOfLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): zombie.core.math.PZMath$SideOfLine;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      static tryParseDouble(arg0: string, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      static tryParseFloat(arg0: string, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): number
       */
      static tryParseInt(arg0: string, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2): number
       */
      static wrap(arg0: number, arg1: number, arg2?: number): number;
    }
    /** [ENUM] zombie.core.math.PZMath$SideOfLine */
    export class PZMath$SideOfLine {
      protected constructor();
      static readonly Left: zombie.core.math.PZMath$SideOfLine;
      static readonly OnLine: zombie.core.math.PZMath$SideOfLine;
      static readonly Right: zombie.core.math.PZMath$SideOfLine;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor vector2.new
     * @
     * [CLASS] zombie.core.math.PZMath$UnitTests$vector2
     */
    export class PZMath$UnitTests$vector2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static run(): void;
    }
  }
}
