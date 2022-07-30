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
  export namespace zombie.iso.objects.interfaces {
    /**
     * @customConstructor BarricadeAble.new
     * @
     * [INTERFACE] zombie.iso.objects.interfaces.BarricadeAble
     */
    export class BarricadeAble {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoBarricade
       */
      getBarricadeForCharacter(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoBarricade
       */
      getBarricadeOnOppositeSquare(): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoBarricade
       */
      getBarricadeOnSameSquare(): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoBarricade
       */
      getBarricadeOppositeCharacter(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoBarricade;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNorth(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getOppositeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBarricadeAllowed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBarricaded(): boolean;
    }
    /**
     * @customConstructor Thumpable.new
     * @
     * [INTERFACE] zombie.iso.objects.interfaces.Thumpable
     */
    export class Thumpable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      Thump(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      WeaponHit(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThumpCondition(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpableFor(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
    }
  }
}
