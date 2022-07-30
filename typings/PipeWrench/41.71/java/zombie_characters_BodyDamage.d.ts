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
  export namespace zombie.characters.BodyDamage {
    /**
     * @customConstructor BodyDamage.new
     * @
     * [CLASS] zombie.characters.BodyDamage.BodyDamage
     */
    export class BodyDamage {
      /** float */
      static readonly InfectionLevelToZombify: number;

      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, float arg1): void
       *  - (int arg0, float arg1): void
       */
      AddDamage(arg0: zombie.characters.BodyDamage.BodyPartType | number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      AddGeneralHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      AddRandomDamage(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1): boolean
       */
      AddRandomDamageFromZombie(arg0: zombie.characters.IsoZombie, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      DamageFromWeapon(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      DisableFakeInfection(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      DrawUntexturedQuad(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasInjury(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      IncreasePanic(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      IncreasePanicFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       *  - (int arg0): boolean
       */
      IsBandaged(arg0: zombie.characters.BodyDamage.BodyPartType | number): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       *  - (int arg0): boolean
       */
      IsBitten(arg0: zombie.characters.BodyDamage.BodyPartType | number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (BodyPartType arg0): boolean
       */
      IsBleeding(arg0: number | zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (BodyPartType arg0): boolean
       */
      IsBleedingStemmed(arg0: number | zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (BodyPartType arg0): boolean
       */
      IsCortorised(arg0: number | zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       */
      IsCut(arg0: zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       */
      IsDeepWounded(arg0: zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      IsFakeInfected(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       *  - (BodyPartType arg0): boolean
       */
      IsInfected(arg0?: number | zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsOnFire(): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       *  - (int arg0): boolean
       */
      IsScratched(arg0: zombie.characters.BodyDamage.BodyPartType | number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      IsSneezingCoughing(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (BodyPartType arg0): boolean
       */
      IsStitched(arg0: number | zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       *  - (int arg0): boolean
       */
      IsWounded(arg0: zombie.characters.BodyDamage.BodyPartType | number): boolean;
      /**
       * Method Parameters: 
       *  - (Food arg0): void
       *  - (Food arg0, float arg1): void
       */
      JustAteFood(arg0: zombie.inventory.types.Food, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (Food arg0, float arg1): void
       */
      JustDrankBooze(arg0: zombie.inventory.types.Food, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Literature arg0): void
       */
      JustReadSomething(arg0: zombie.inventory.types.Literature): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      JustTookPainMeds(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      JustTookPill(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      OnFire(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      ReduceGeneralHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ReducePanic(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RestoreToFullHealth(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, float arg2, boolean arg3, String arg4): void
       */
      SetBandaged(arg0: number, arg1: boolean, arg2: number, arg3: boolean, arg4: string): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, boolean arg1): void
       *  - (int arg0, boolean arg1): void
       *  - (int arg0, boolean arg1, boolean arg2): void
       */
      SetBitten(arg0: zombie.characters.BodyDamage.BodyPartType | number, arg1: boolean, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, boolean arg1): void
       *  - (int arg0, boolean arg1): void
       */
      SetBleeding(arg0: zombie.characters.BodyDamage.BodyPartType | number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, boolean arg1): void
       *  - (int arg0, boolean arg1): void
       */
      SetBleedingStemmed(arg0: zombie.characters.BodyDamage.BodyPartType | number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       *  - (BodyPartType arg0, boolean arg1): void
       */
      SetCortorised(arg0: number | zombie.characters.BodyDamage.BodyPartType, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      SetCut(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, boolean arg1): void
       *  - (int arg0, boolean arg1): void
       */
      SetScratched(arg0: zombie.characters.BodyDamage.BodyPartType | number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      SetScratchedFromWeapon(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, boolean arg1): void
       *  - (int arg0, boolean arg1): void
       */
      SetWounded(arg0: zombie.characters.BodyDamage.BodyPartType | number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ShowDebugInfo(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      TriggerSneezeCough(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateBoredom(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateCold(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdatePanicState(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateStrength(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateWetness(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      UseBandageOnMostNeededPart(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      WasBurntToDeath(): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, BodyPartType arg1): boolean
       */
      areBodyPartsBleeding(arg0: zombie.characters.BodyDamage.BodyPartType, arg1: zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      decreaseBodyWetness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, BodyPartType arg1): boolean
       */
      doBodyPartsHaveInjuries(arg0: zombie.characters.BodyDamage.BodyPartType, arg1: zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       */
      doesBodyPartHaveInjury(arg0: zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getApparentInfectionLevel(): number;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): zombie.characters.BodyDamage.BodyPart
       */
      getBodyPart(arg0: zombie.characters.BodyDamage.BodyPartType): zombie.characters.BodyDamage.BodyPart;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       *  - (BodyPartType arg0): number
       */
      getBodyPartHealth(arg0: number | zombie.characters.BodyDamage.BodyPartType): number;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): string
       *  - (int arg0): string
       */
      getBodyPartName(arg0: zombie.characters.BodyDamage.BodyPartType | number): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.BodyDamage.BodyPart>
       */
      getBodyParts(): java.util.ArrayList<zombie.characters.BodyDamage.BodyPart>;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): zombie.characters.BodyDamage.BodyPartLast
       */
      getBodyPartsLastState(arg0: zombie.characters.BodyDamage.BodyPartType): zombie.characters.BodyDamage.BodyPartLast;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoredomDecreaseFromReading(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoredomLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCatchACold(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColdDamageStage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColdProgressionRate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColdReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColdSneezeTimerMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColdSneezeTimerMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColdStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContinualPainIncrease(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentNumZombiesVisible(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDamageModCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDrunkIncreaseValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDrunkReductionValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFakeInfectionLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFoodSicknessLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealthFromFood(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealthFromFoodTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealthReductionFromSevereBadMoodles(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInfectionGrowthRate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInfectionLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInfectionMortalityDuration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInfectionTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInitialBitePain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInitialScratchPain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInitialThumpPain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInitialWoundPain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMildColdSneezeTimerMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMildColdSneezeTimerMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNastyColdSneezeTimerMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNastyColdSneezeTimerMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumPartsBitten(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumPartsBleeding(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumPartsScratched(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOldNumZombiesVisible(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOverallBodyHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainReductionFromMeds(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPanicIncreaseValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPanicIncreaseValueFrame(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPanicReductionValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getParentChar(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPoisonLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReducedHealthAddition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemotePainLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeverlyReducedHealthAddition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSleepingHealthAddition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSneezeCoughActive(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSneezeCoughDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSneezeCoughTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStandardHealthAddition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStandardHealthFromFoodTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStandardPainReductionWhenWell(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperatureChangeTick(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.Thermoregulator
       */
      getThermoregulator(): zombie.characters.BodyDamage.Thermoregulator;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeToSneezeOrCough(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappynessLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetness(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      increaseBodyWetness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): boolean
       */
      isBodyPartBleeding(arg0: zombie.characters.BodyDamage.BodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBurntToDeath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasACold(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInf(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInfected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsFakeInfected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsOnFire(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReduceFakeInfection(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      pickMortalityDuration(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBodyPartsLastState(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBoredomDecreaseFromReading(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBoredomLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBurntToDeath(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCatchACold(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColdDamageStage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColdProgressionRate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColdReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setColdSneezeTimerMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setColdSneezeTimerMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColdStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setContinualPainIncrease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentNumZombiesVisible(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDamageModCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDrunkIncreaseValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDrunkReductionValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFakeInfectionLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFoodSicknessLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasACold(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHealthFromFood(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHealthFromFoodTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHealthReductionFromSevereBadMoodles(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInf(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInfected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInfectionGrowthRate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInfectionLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInfectionMortalityDuration(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInfectionTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInitialBitePain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInitialScratchPain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInitialThumpPain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInitialWoundPain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsFakeInfected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsOnFire(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMildColdSneezeTimerMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMildColdSneezeTimerMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNastyColdSneezeTimerMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNastyColdSneezeTimerMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOldNumZombiesVisible(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOverallBodyHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainReductionFromMeds(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPanicIncreaseValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPanicReductionValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setParentChar(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPoisonLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setReduceFakeInfection(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReducedHealthAddition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemotePainLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.BodyPart
       */
      setScratchedWindow(): zombie.characters.BodyDamage.BodyPart;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSeverlyReducedHealthAddition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSleepingHealthAddition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSneezeCoughActive(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSneezeCoughDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSneezeCoughTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStandardHealthAddition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStandardHealthFromFoodTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStandardPainReductionWhenWell(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeToSneezeOrCough(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUnhappynessLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWetness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      splatBloodFloorBig(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static getSicknessFromCorpsesRate(arg0: number): number;
    }
    /**
     * @customConstructor BodyPart.new
     * @
     * [CLASS] zombie.characters.BodyDamage.BodyPart
     */
    export class BodyPart {
      /**
       * Constructors: 
       *  - (BodyPartType arg0, IsoGameCharacter arg1)
       */
      constructor(arg0: zombie.characters.BodyDamage.BodyPartType, arg1: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      AddDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      AddHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DamageUpdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DisableFakeInfection(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasInjury(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsBleedingStemmed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsCortorised(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsFakeInfected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsInfected(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      ReduceHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RestoreToFullHealth(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1): void
       */
      SetBitten(arg0: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetBleedingStemmed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetCortorised(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetFakeInfected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      SetHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetInfected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetScratchedWeapon(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetScratchedWindow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bandaged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bitten(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bleeding(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      damageFromFirearm(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      deepWounded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      generateBleeding(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      generateDeepShardWound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      generateDeepWound(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      generateZombieInfection(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getAdditionalPain(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcoholLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBandageLife(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBandageType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBiteTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBleedingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBurnSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBurnTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getComfreyFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCutSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeepWoundSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeepWoundTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDistToCore(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFractureTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGarlicFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInnerTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastTimeBurnWash(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlantainFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScratchSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScratchTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinSurface(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSplintFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSplintItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStiffness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStitchTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.Thermoregulator$ThermalNode
       */
      getThermalNode(): zombie.characters.BodyDamage.Thermoregulator$ThermalNode;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.BodyPartType
       */
      getType(): zombie.characters.BodyDamage.BodyPartType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWoundInfectionLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveBullet(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveGlass(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBandageDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBurnt(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCut(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDeepWounded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGetBandageXp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGetSplintXp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGetStitchXp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInfectedWound(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNeedBurnWash(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSplint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      scratched(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAdditionalPain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlcoholLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBandageLife(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBandageType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, float arg1): void
       *  - (boolean arg0, float arg1, boolean arg2, String arg3): void
       */
      setBandaged(arg0: boolean, arg1: number, arg2?: boolean, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBiteTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBleeding(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBleedingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBurnSpeedModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBurnTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setBurned(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setComfreyFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1): void
       */
      setCut(arg0: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCutSpeedModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCutTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDeepWoundSpeedModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDeepWoundTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDeepWounded(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFractureTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGarlicFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGetBandageXp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGetSplintXp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGetStitchXp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, int arg1): void
       */
      setHaveBullet(arg0: boolean, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHaveGlass(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInfectedWound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastTimeBurnWash(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNeedBurnWash(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPlantainFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScratchSpeedModifier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScratchTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1): void
       */
      setScratched(arg0: boolean, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, float arg1): void
       */
      setSplint(arg0: boolean, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSplintFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSplintItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStiffness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStitchTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStitched(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWetness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWoundInfectionLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      stitched(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, byte arg1): void
       *  - (BodyPart arg0, Updater arg1): void
       */
      sync(arg0: java.nio.ByteBuffer | zombie.characters.BodyDamage.BodyPart, arg1: number | zombie.network.BodyDamageSync$Updater): void;
    }
    /**
     * @customConstructor BodyPartLast.new
     * @
     * [CLASS] zombie.characters.BodyDamage.BodyPartLast
     */
    export class BodyPartLast {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bandaged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      bitten(): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPart arg0): void
       */
      copy(arg0: zombie.characters.BodyDamage.BodyPart): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCut(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      scratched(): boolean;
    }
    /** [ENUM] zombie.characters.BodyDamage.BodyPartType */
    export class BodyPartType {
      protected constructor();
      static readonly Foot_L: zombie.characters.BodyDamage.BodyPartType;
      static readonly Foot_R: zombie.characters.BodyDamage.BodyPartType;
      static readonly ForeArm_L: zombie.characters.BodyDamage.BodyPartType;
      static readonly ForeArm_R: zombie.characters.BodyDamage.BodyPartType;
      static readonly Groin: zombie.characters.BodyDamage.BodyPartType;
      static readonly Hand_L: zombie.characters.BodyDamage.BodyPartType;
      static readonly Hand_R: zombie.characters.BodyDamage.BodyPartType;
      static readonly Head: zombie.characters.BodyDamage.BodyPartType;
      static readonly LowerLeg_L: zombie.characters.BodyDamage.BodyPartType;
      static readonly LowerLeg_R: zombie.characters.BodyDamage.BodyPartType;
      static readonly MAX: zombie.characters.BodyDamage.BodyPartType;
      static readonly Neck: zombie.characters.BodyDamage.BodyPartType;
      static readonly Torso_Lower: zombie.characters.BodyDamage.BodyPartType;
      static readonly Torso_Upper: zombie.characters.BodyDamage.BodyPartType;
      static readonly UpperArm_L: zombie.characters.BodyDamage.BodyPartType;
      static readonly UpperArm_R: zombie.characters.BodyDamage.BodyPartType;
      static readonly UpperLeg_L: zombie.characters.BodyDamage.BodyPartType;
      static readonly UpperLeg_R: zombie.characters.BodyDamage.BodyPartType;
      name(): string;
      ordinal(): number;
      getBandageModel(): string;

      /** (boolean arg0): String */
      getBiteWoundModel(arg0: boolean): string;

      /** (boolean arg0): String */
      getCutWoundModel(arg0: boolean): string;

      /** (boolean arg0): String */
      getScratchWoundModel(arg0: boolean): string;

      index(): number;

    }
    /**
     * @customConstructor Fitness.new
     * @
     * [CLASS] zombie.characters.BodyDamage.Fitness
     */
    export class Fitness {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exerciseRepeat(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCurrentExeStiffnessInc(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCurrentExeStiffnessTimer(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getParent(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getRegularity(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, number>
       */
      getRegularityMap(): java.util.HashMap<string, number>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      incFutureStiffness(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      incRegularity(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      incStats(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initRegularityMapProfession(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      onGoingStiffness(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reduceEndurance(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeStiffnessValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetValues(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCurrentExercise(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setParent(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (HashMap arg0): void
       */
      setRegularityMap(arg0: java.util.HashMap<string, number>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor FitnessExercise.new
     * @
     * [CLASS] zombie.characters.BodyDamage.Fitness$FitnessExercise
     */
    export class Fitness$FitnessExercise {
      /**
       * Constructors: 
       *  - (KahluaTableImpl arg0)
       */
      constructor(arg0: se.krka.kahlua.j2se.KahluaTableImpl);
    }
    /** [ENUM] zombie.characters.BodyDamage.Metabolics */
    export class Metabolics {
      protected constructor();
      static readonly ClimbRope: zombie.characters.BodyDamage.Metabolics;
      static readonly Default: zombie.characters.BodyDamage.Metabolics;
      static readonly DefaultExercise: zombie.characters.BodyDamage.Metabolics;
      static readonly DiggingSpade: zombie.characters.BodyDamage.Metabolics;
      static readonly DrivingCar: zombie.characters.BodyDamage.Metabolics;
      static readonly Fitness: zombie.characters.BodyDamage.Metabolics;
      static readonly FitnessHeavy: zombie.characters.BodyDamage.Metabolics;
      static readonly ForestryAxe: zombie.characters.BodyDamage.Metabolics;
      static readonly HeavyDomestic: zombie.characters.BodyDamage.Metabolics;
      static readonly HeavyWork: zombie.characters.BodyDamage.Metabolics;
      static readonly JumpFence: zombie.characters.BodyDamage.Metabolics;
      static readonly LightDomestic: zombie.characters.BodyDamage.Metabolics;
      static readonly LightWork: zombie.characters.BodyDamage.Metabolics;
      static readonly MAX: zombie.characters.BodyDamage.Metabolics;
      static readonly MediumWork: zombie.characters.BodyDamage.Metabolics;
      static readonly Running10kmh: zombie.characters.BodyDamage.Metabolics;
      static readonly Running15kmh: zombie.characters.BodyDamage.Metabolics;
      static readonly SeatedResting: zombie.characters.BodyDamage.Metabolics;
      static readonly SedentaryActivity: zombie.characters.BodyDamage.Metabolics;
      static readonly Sleeping: zombie.characters.BodyDamage.Metabolics;
      static readonly StandingAtRest: zombie.characters.BodyDamage.Metabolics;
      static readonly UsingTools: zombie.characters.BodyDamage.Metabolics;
      static readonly Walking2kmh: zombie.characters.BodyDamage.Metabolics;
      static readonly Walking5kmh: zombie.characters.BodyDamage.Metabolics;
      name(): string;
      ordinal(): number;
      getBtuHr(): number;

      getMet(): number;

      getW(): number;

      getWm2(): number;

    }
    /**
     * @customConstructor Nutrition.new
     * @
     * [CLASS] zombie.characters.BodyDamage.Nutrition
     */
    export class Nutrition {
      /**
       * Constructors: 
       *  - (IsoPlayer arg0)
       */
      constructor(arg0: zombie.characters.IsoPlayer);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applyTraitFromWeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applyWeightFromTraits(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canAddFitnessXp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      characterHaveWeightTrouble(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCalories(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCarbohydrates(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLipids(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProteins(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecWeight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIncWeight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIncWeightLot(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCalories(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCarbohydrates(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDecWeight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIncWeight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIncWeightLot(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLipids(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setProteins(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor Thermoregulator.new
     * @
     * [CLASS] zombie.characters.BodyDamage.Thermoregulator
     */
    export class Thermoregulator {
      /**
       * Constructors: 
       *  - (BodyDamage arg0)
       */
      constructor(arg0: zombie.characters.BodyDamage.BodyDamage);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyFluids(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyHeatDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyHeatMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCatchAColdDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCombatModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreCelcius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreHeatContractMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreHeatDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreHeatExpandMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreRateOfChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCoreTemperatureUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDbg_primTotal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDbg_secTotal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDbg_totalHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDbg_totalHeatRaw(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergy(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExternalAirTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidsMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeatGeneration(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeatGenerationUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetabolicRate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetabolicRateDecMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetabolicRateIncMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetabolicRateReal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetabolicTarget(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovementModifier(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.BodyDamage.Thermoregulator$ThermalNode
       */
      getNode(arg0: number): zombie.characters.BodyDamage.Thermoregulator$ThermalNode;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): zombie.characters.BodyDamage.Thermoregulator$ThermalNode
       */
      getNodeForBloodType(arg0: zombie.characterTextures.BloodBodyPartType): zombie.characters.BodyDamage.Thermoregulator$ThermalNode;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): zombie.characters.BodyDamage.Thermoregulator$ThermalNode
       */
      getNodeForType(arg0: zombie.characters.BodyDamage.BodyPartType): zombie.characters.BodyDamage.Thermoregulator$ThermalNode;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNodeSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSetPoint(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSimulationMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinCelciusMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperatureAir(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperatureAirAndWind(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThermalDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimedActionTimeModifier(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Metabolics arg0): void
       *  - (float arg0): void
       */
      setMetabolicTarget(arg0: zombie.characters.BodyDamage.Metabolics | number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      thermalChevronCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      thermalChevronUp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSkinCelciusFavorable(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSkinCelciusMax(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getSkinCelciusMin(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): void
       */
      static setSimulationMultiplier(arg0: number): void;
    }
    /**
     * @customConstructor ThermalNode.new
     * @
     * [CLASS] zombie.characters.BodyDamage.Thermoregulator$ThermalNode
     */
    export class Thermoregulator$ThermalNode {
      /**
       * Constructors: 
       *  - (Thermoregulator arg0, float arg1, BodyPart arg2, float arg3)
       *  - (Thermoregulator arg0, boolean arg1, float arg2, BodyPart arg3, float arg4)
       */
      constructor(arg0: zombie.characters.BodyDamage.Thermoregulator, arg1: number | boolean, arg2: zombie.characters.BodyDamage.BodyPart | number, arg3: number | zombie.characters.BodyDamage.BodyPart, arg4?: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyResponse(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyResponseUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyWetness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBodyWetnessUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCelcius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClothingWetness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClothingWetnessUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDistToCore(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeatDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeatDeltaUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInsulation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInsulationUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPrimaryDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPrimaryDeltaUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSecondaryDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSecondaryDeltaUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinCelcius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinCelciusUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinSurface(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindresist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindresistUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasDownstream(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasUpstream(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCore(): boolean;
    }
  }
}
