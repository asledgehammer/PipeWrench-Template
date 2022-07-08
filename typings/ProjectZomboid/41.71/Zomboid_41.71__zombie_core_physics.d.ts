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
 * File generated at Friday July 2022 15:18:33.611-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.core.physics {
    /**
     * @customConstructor CarController.new
     * @
     * [CLASS] zombie.core.physics.CarController
     */
    export class CarController {
      /** zombie.core.physics.CarController$GearInfo[] */
      static gears?: zombie.core.physics.CarController$GearInfo[];

      /**
       * Constructors: 
       *  - (BaseVehicle arg0)
       */
      constructor(arg0: zombie.vehicles.BaseVehicle | null);
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      accelerator(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      brake(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkShouldBeActive(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debug(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      drawCircle(arg0: number, arg1: number, arg2: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (Vector3f arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      drawRect(arg0: org.joml.Vector3f, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.core.physics.CarController$GearInfo
       */
      findGear(arg0: number): zombie.core.physics.CarController$GearInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.CarController$ClientControls
       */
      getClientControls(): zombie.core.physics.CarController$ClientControls;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBrakePedalPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGasPedalPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      park(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateControls(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateTrailer(): void;
    }
    /**
     * @customConstructor BulletVariables.new
     * @
     * [CLASS] zombie.core.physics.CarController$BulletVariables
     */
    export class CarController$BulletVariables {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ClientControls.new
     * @
     * [CLASS] zombie.core.physics.CarController$ClientControls
     */
    export class CarController$ClientControls {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor GearInfo.new
     * @
     * [CLASS] zombie.core.physics.CarController$GearInfo
     */
    export class CarController$GearInfo {

    }
    /**
     * @customConstructor Transform.new
     * @
     * [CLASS] zombie.core.physics.Transform
     */
    export class Transform {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Transform arg0)
       *  - (Matrix4f arg0)
       *  - (Matrix3f arg0)
       */
      constructor(arg0?: zombie.core.physics.Transform | org.joml.Matrix4f | org.joml.Matrix3f | null);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Matrix4f arg0): org.joml.Matrix4f
       */
      getMatrix(arg0: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Quaternionf arg0): org.joml.Quaternionf
       */
      getRotation(arg0: org.joml.Quaternionf): org.joml.Quaternionf;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (Transform arg0): void
       */
      inverse(arg0?: zombie.core.physics.Transform): void;
      /**
       * Method Parameters: 
       *  - (Transform arg0): void
       *  - (Matrix3f arg0): void
       *  - (Matrix4f arg0): void
       */
      set(arg0: zombie.core.physics.Transform | org.joml.Matrix3f | org.joml.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setIdentity(): void;
      /**
       * Method Parameters: 
       *  - (Quaternionf arg0): void
       */
      setRotation(arg0: org.joml.Quaternionf): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): void
       */
      transform(arg0: org.joml.Vector3f): void;
    }
  }
}
