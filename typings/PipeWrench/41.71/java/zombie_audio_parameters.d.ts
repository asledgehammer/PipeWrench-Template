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
  export namespace zombie.audio.parameters {
    /**
     * @customConstructor ParameterCharacterMovementSpeed.new
     * @
     * [CLASS] zombie.audio.parameters.ParameterCharacterMovementSpeed extends zombie.audio.FMODLocalParameter
     */
    export class ParameterCharacterMovementSpeed {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION
       */
      getParameterDescription(): fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION;
      /**
       * Method Parameters: 
       *  - (Empty): fmod.fmod.FMOD_STUDIO_PARAMETER_ID
       */
      getParameterID(): fmod.fmod.FMOD_STUDIO_PARAMETER_ID;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (MovementType arg0): void
       */
      setMovementType(arg0: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      startEventInstance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopEventInstance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /** [ENUM] zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType */
    export class ParameterCharacterMovementSpeed$MovementType {
      protected constructor();
      static readonly Run: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly SneakRun: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly SneakWalk: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly Sprint: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly Strafe: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly Walk: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;

      /* FIELDS */

      name(): string;
      ordinal(): number;
    }
    /** [ENUM] zombie.audio.parameters.ParameterMeleeHitSurface$Material */
    export class ParameterMeleeHitSurface$Material {
      protected constructor();
      static readonly Body: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Default: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Fabric: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly GarageDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Glass: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Head: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Metal: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly MetalDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly MetalGate: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Plastic: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly PrisonMetalDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly SlidingGlassDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Stone: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Tree: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Wood: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly WoodDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly WoodGate: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      name(): string;
      ordinal(): number;
    }
  }
}
