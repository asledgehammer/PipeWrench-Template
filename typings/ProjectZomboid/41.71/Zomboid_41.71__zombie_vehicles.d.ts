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
 * File generated at Friday July 2022 15:18:33.614-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
  export namespace zombie.vehicles {
    /**
     * @customConstructor BaseVehicle.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle extends zombie.iso.IsoMovingObject
     */
    export class BaseVehicle {
      /** float */
      static CENTER_OF_MASS_MAGIC: number;
      /** int */
      static readonly FADE_DISTANCE: number;
      /** int */
      static readonly MASK1_DOOR_LEFT_FRONT: number;
      /** int */
      static readonly MASK1_DOOR_LEFT_REAR: number;
      /** int */
      static readonly MASK1_DOOR_RIGHT_FRONT: number;
      /** int */
      static readonly MASK1_DOOR_RIGHT_REAR: number;
      /** int */
      static readonly MASK1_FRONT: number;
      /** int */
      static readonly MASK1_GUARD_LEFT_FRONT: number;
      /** int */
      static readonly MASK1_GUARD_LEFT_REAR: number;
      /** int */
      static readonly MASK1_GUARD_RIGHT_FRONT: number;
      /** int */
      static readonly MASK1_GUARD_RIGHT_REAR: number;
      /** int */
      static readonly MASK1_REAR: number;
      /** int */
      static readonly MASK1_WINDOW_FRONT: number;
      /** int */
      static readonly MASK1_WINDOW_LEFT_FRONT: number;
      /** int */
      static readonly MASK1_WINDOW_LEFT_REAR: number;
      /** int */
      static readonly MASK1_WINDOW_REAR: number;
      /** int */
      static readonly MASK1_WINDOW_RIGHT_FRONT: number;
      /** int */
      static readonly MASK1_WINDOW_RIGHT_REAR: number;
      /** int */
      static readonly MASK2_BOOT: number;
      /** int */
      static readonly MASK2_BRAKE_LEFT: number;
      /** int */
      static readonly MASK2_BRAKE_RIGHT: number;
      /** int */
      static readonly MASK2_HOOD: number;
      /** int */
      static readonly MASK2_LIGHTBAR_LEFT: number;
      /** int */
      static readonly MASK2_LIGHTBAR_RIGHT: number;
      /** int */
      static readonly MASK2_LIGHT_LEFT_FRONT: number;
      /** int */
      static readonly MASK2_LIGHT_LEFT_REAR: number;
      /** int */
      static readonly MASK2_LIGHT_RIGHT_FRONT: number;
      /** int */
      static readonly MASK2_LIGHT_RIGHT_REAR: number;
      /** int */
      static readonly MASK2_ROOF: number;
      /** int */
      static readonly MAX_WHEELS: number;
      /** int */
      static readonly PHYSICS_PARAM_COUNT: number;
      /** float */
      static readonly PHYSICS_Z_SCALE: number;
      /** float */
      static PLUS_RADIUS: number;
      /** float */
      static readonly RADIUS: number;
      /** int */
      static readonly RANDOMIZE_CONTAINER_CHANCE: number;
      /** boolean */
      static RENDER_TO_TEXTURE: boolean;
      /** java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Matrix4fObjectPool> */
      static readonly TL_matrix4f_pool?: java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Matrix4fObjectPool>;
      /** java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$QuaternionfObjectPool> */
      static readonly TL_quaternionf_pool?: java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$QuaternionfObjectPool>;
      /** java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Vector2ObjectPool> */
      static readonly TL_vector2_pool?: java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Vector2ObjectPool>;
      /** java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Vector2fObjectPool> */
      static readonly TL_vector2f_pool?: java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Vector2fObjectPool>;
      /** java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Vector3fObjectPool> */
      static readonly TL_vector3f_pool?: java.lang.ThreadLocal<zombie.vehicles.BaseVehicle$Vector3fObjectPool>;
      /** boolean */
      static readonly YURI_FORCE_FIELD: boolean;
      /** byte */
      static readonly authorizationOnServer: number;
      /** byte */
      static readonly authorizationOwner: number;
      /** byte */
      static readonly authorizationServerOwner: number;
      /** byte */
      static readonly authorizationServerSimulation: number;
      /** byte */
      static readonly authorizationSimulation: number;
      /** byte */
      static readonly noAuthorization: number;
      /** zombie.core.textures.Texture */
      static vehicleShadow?: zombie.core.textures.Texture;

      /**
       * Constructors: 
       *  - (IsoCell arg0)
       */
      constructor(arg0: zombie.iso.IsoCell | null);
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1): void
       */
      ApplyImpulse(arg0: zombie.iso.IsoObject, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1): void
       */
      ApplyImpulse4Break(arg0: zombie.iso.IsoObject, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, float arg3, int arg4, int arg5, boolean arg6, int arg7, boolean arg8, float arg9, ColorInfo arg10): void
       */
      AttachAnim(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: number, arg10: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0, int arg1, int arg2, boolean arg3, int arg4, boolean arg5, float arg6): void
       *  - (IsoSprite arg0, int arg1, int arg2, boolean arg3, int arg4, boolean arg5, float arg6, ColorInfo arg7): void
       */
      AttachExistingAnim(arg0: zombie.iso.sprite.IsoSprite, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: number, arg7?: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      AttackObject(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1): void
       */
      Collision(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Damage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Despawn(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DirtySlice(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       *  - (int arg0, int arg1): number
       */
      DistTo(arg0: zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       */
      DistToProper(arg0: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       *  - (float arg0, float arg1): number
       */
      DistToSquared(arg0: zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoCollideNorS(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoCollideWorE(): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0, IsoGridSquare arg1): void
       */
      DoSpecialTooltip(arg0: zombie.ui.ObjectTooltip, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): number
       */
      GetVehicleSlowFactor(arg0: zombie.vehicles.BaseVehicle): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1, float arg2): void
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       */
      Hit(arg0: zombie.iso.Vector2 | zombie.inventory.types.HandWeapon, arg1: zombie.iso.IsoObject | zombie.characters.IsoGameCharacter, arg2: number, arg3?: boolean, arg4?: number): void | number;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, float arg1): void
       */
      HitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      Move(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      MoveUnmodded(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RemoveAttachedAnim(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RemoveAttachedAnims(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Serialize(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoGridSquare arg1, IsoGridSquare arg2): boolean
       */
      TestCollide(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoGridSquare arg1, IsoGridSquare arg2): boolean
       */
      TestPathfindCollide(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoGridSquare arg1): zombie.iso.IsoObject$VisionResult
       */
      TestVision(arg0: zombie.iso.IsoGridSquare, arg1: zombie.iso.IsoGridSquare): zombie.iso.IsoObject$VisionResult;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      Thump(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      UnCollision(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      WeaponHit(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addChild(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      addDamageFrontHitAChr(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      addDamageRearHitAChr(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, Vector3f arg1): void
       */
      addImpulse(arg0: org.joml.Vector3f, arg1: org.joml.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addKeyToGloveBox(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      addKeyToSquare(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addKeyToWorld(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, String arg1, String arg2): void
       *  - (BaseVehicle arg0, String arg1, String arg2, Float arg3, Boolean arg4): void
       */
      addPointConstraint(arg0: zombie.vehicles.BaseVehicle, arg1: string, arg2: string, arg3?: number, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      addRandomDamageFromCrash(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      addSecondaryContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): boolean
       */
      addSheetRope(arg0: zombie.characters.IsoPlayer, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      areAllDoorsLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Area arg0): zombie.iso.Vector2
       *  - (Area arg0, Vector2 arg1): zombie.iso.Vector2
       */
      areaPositionWorld(arg0: zombie.scripting.objects.VehicleScript$Area, arg1?: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Area arg0): zombie.iso.Vector2
       *  - (Area arg0, Vector2 arg1): zombie.iso.Vector2
       */
      areaPositionWorld4PlayerInteract(arg0: zombie.scripting.objects.VehicleScript$Area, arg1?: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      attachmentExist(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      authorizationClientForecast(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (short arg0, boolean arg1): void
       */
      authorizationServerCollide(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      authorizationServerOnSeat(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      authorizationServerUpdate(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      blocked(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1): void
       */
      breakConstraint(arg0: boolean, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      brekingObjects(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      calculateDamageWithCharacter(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGameCharacter arg1): boolean
       */
      canAccessContainer(arg0: number, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canAddSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, String arg1, String arg2): boolean
       */
      canAttachTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: string, arg2: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      canHaveMultipleHits(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, VehiclePart arg1): boolean
       */
      canInstallPart(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.vehicles.VehiclePart): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0, IsoGameCharacter arg1): boolean
       */
      canLockDoor(arg0: zombie.vehicles.VehiclePart, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      canSwitchSeat(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, VehiclePart arg1): boolean
       */
      canUninstallPart(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.vehicles.VehiclePart): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0, IsoGameCharacter arg1): boolean
       */
      canUnlockDoor(arg0: zombie.vehicles.VehiclePart, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (TransmissionNumber arg0): void
       */
      changeTransmission(arg0: zombie.vehicles.TransmissionNumber): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1): void
       */
      cheatHotwire(arg0: boolean, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkAmbientSound(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.vehicles.BaseVehicle$HitVars
       */
      checkCollision(arg0: zombie.characters.IsoGameCharacter): zombie.vehicles.BaseVehicle$HitVars;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkHaveElectricity(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkPhysicsValidWithServer(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, Vector3f arg2): org.joml.Vector3f
       */
      chooseBestAttackPosition(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): boolean
       */
      circleIntersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cleanWallBlood(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearAttachedAnimSprite(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      clearPassenger(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      collideWith(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      compareToY(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      constraintChanged(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      couldCrawlerAttackPassenger(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      countAddSheetRope(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, boolean arg1): void
       */
      crash(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      createContainersFromSpriteProperties(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      createPhysics(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      createVehicleKey(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      customHashCode(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      damageObjects(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      damagePlayers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugPrintout(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      debugSetStatic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      destroyFence(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      distToNearestCamCharacter(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doBloodOverlay(): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      doChrHitImpulse(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doDamageOverlay(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doFindExternalWaterSource(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doStairs(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      drainBatteryUpdateHack(): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      drawDirectionLine(arg0: zombie.iso.Vector2, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoIdle(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoRetryingStarting(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoRunning(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoShuttingDown(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoStalling(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoStarting(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoStartingFailed(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoStartingFailedNoPower(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      engineDoStartingSuccess(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ensureOnTile(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGameCharacter arg1): boolean
       *  - (int arg0, IsoGameCharacter arg1, Vector3f arg2): boolean
       */
      enter(arg0: number, arg1: zombie.characters.IsoGameCharacter, arg2?: org.joml.Vector3f): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGameCharacter arg1, BaseVehicle arg2): boolean
       */
      enterRSync(arg0: number, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.vehicles.BaseVehicle): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      exit(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      exitRSync(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0, Vector3f arg1): void
       */
      fixLightbarModelLighting(arg0: zombie.iso.IsoLightSource, arg1: org.joml.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      flipUpright(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngleX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngleY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAngleZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.Vector2
       *  - (String arg0, Vector2 arg1): zombie.iso.Vector2
       */
      getAreaCenter(arg0: string, arg1?: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGameCharacter arg1): number
       */
      getAreaDist(arg0: string, arg1: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getAttachedAnimSprite(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): org.joml.Vector3f
       */
      getAttachmentLocalPos(arg0: string, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): org.joml.Vector3f
       */
      getAttachmentWorldPos(arg0: string, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getBattery(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBatteryCharge(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getBestSeat(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getBloodIntensity(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBrakeSpeedBetweenUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBrakingForce(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): string
       */
      getBumpedType(arg0: zombie.characters.IsoGameCharacter): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      getCell(): zombie.iso.IsoCell;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.IsoGameCharacter
       */
      getCharacter(arg0: number): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getChildSprites(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, string>
       */
      getChoosenParts(): java.util.HashMap<string, string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClientForce(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.vehicles.VehiclePart
       */
      getClosestWindow(arg0: zombie.characters.IsoGameCharacter): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCollideType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getCollidedObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorHue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorSaturation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.inventory.ItemContainer
       */
      getContainerByEitherType(arg0: string, arg1: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.ItemContainer
       */
      getContainerByIndex(arg0: number): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemContainer
       */
      getContainerByType(arg0: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerCount(): number;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): number
       */
      getContainerIndex(arg0: zombie.inventory.ItemContainer): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.CarController
       */
      getController(): zombie.core.physics.CarController;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getCurrentBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getCurrentKey(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentSpeedForRegulator(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentSpeedKmHour(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getCurrentSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentSteering(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMetaGrid$Zone
       */
      getCurrentZone(): zombie.iso.IsoMetaGrid$Zone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getCustomColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDamage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDebugZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      getDistanceSq(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getDriver(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getEatingZombies(): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.BaseSoundEmitter
       */
      getEmitter(): zombie.audio.BaseSoundEmitter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineLoudness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnginePower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.FMODParameterList
       */
      getFMODParameters(): zombie.audio.FMODParameterList;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       *  - (IsoGameCharacter arg0, Vector2 arg1): void
       */
      getFacingPosition(arg0: zombie.iso.Vector2 | zombie.characters.IsoGameCharacter, arg1?: zombie.iso.Vector2): zombie.iso.Vector2 | void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getFacingPositionAlt(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.IsoGridSquare
       */
      getFeelerTile(arg0: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFeelersize(): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      getForwardVector(arg0: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFudgedMass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFuturWalkedSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getGlobalMovementMod(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getHeadlightCanEmmitLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getHeadlightsOn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getHeater(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getHighlightColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getHitDir(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitForce(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitFromAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImpulsex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImpulsey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInitialMass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInsideTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsSurfaceNormalOffset(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getItemContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJoypad(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getKeySpawned(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastCollideTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getLastSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoZombie
       */
      getLastTargettedBy(): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.VehiclePart
       */
      getLightByIndex(arg0: number): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightbarLightsMode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightbarSirenMode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLimpulsex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLimpulsey(): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      getLinearVelocity(arg0: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      getLocalPos(arg0: org.joml.Vector3f | number, arg1: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLy(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLz(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): number
       */
      getMaskClickedY(arg0: number, arg1: number, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMass(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IWorldRegion
       */
      getMasterRegion(): zombie.iso.areas.isoregion.regions.IWorldRegion;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxPassengers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMechanicalID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle$MinMaxPosition
       */
      getMinMaxPosition(): zombie.vehicles.BaseVehicle$MinMaxPosition;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getMovementLastFrame(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovingObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.vehicles.VehiclePart
       */
      getNearestBodyworkPart(arg0: zombie.characters.IsoGameCharacter): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNoDamage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfPartsWithContainers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNy(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getObjectRenderEffects(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getObjectRenderEffectsToApply(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffroadEfficiency(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getOutlineHighlightCol(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOutlineThickness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getOverlaySprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getOverlaySpriteColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.VehiclePart
       */
      getPartById(arg0: string): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.VehiclePart
       */
      getPartByIndex(arg0: number): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPartCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.VehiclePart
       */
      getPartForSeatContainer(arg0: number): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.BaseVehicle$Passenger
       */
      getPassenger(arg0: number): zombie.vehicles.BaseVehicle$Passenger;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.scripting.objects.VehicleScript$Anim
       */
      getPassengerAnim(arg0: number, arg1: string): zombie.scripting.objects.VehicleScript$Anim;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getPassengerArea(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.VehiclePart
       */
      getPassengerDoor(arg0: number): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.VehiclePart
       */
      getPassengerDoor2(arg0: number): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (int arg0, Vector3f arg1): org.joml.Vector3f
       */
      getPassengerLocalPos(arg0: number, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.scripting.objects.VehicleScript$Position
       */
      getPassengerPosition(arg0: number, arg1: string): zombie.scripting.objects.VehicleScript$Position;
      /**
       * Method Parameters: 
       *  - (Position arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      getPassengerPositionWorldPos(arg0: zombie.scripting.objects.VehicleScript$Position | number, arg1: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat
       */
      getPassengerSwitchSeat(arg0: number, arg1: number): zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getPassengerSwitchSeatCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Vector3f arg1): org.joml.Vector3f
       */
      getPassengerWorldPos(arg0: number, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathFindIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPipedFuelAmount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, Vector3f arg2): org.joml.Vector3f
       */
      getPlayerTrailerLocalPos(arg0: string, arg1: boolean, arg2: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, Vector3f arg2): org.joml.Vector3f
       */
      getPlayerTrailerWorldPos(arg0: string, arg1: boolean, arg2: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.PolygonalMap2$VehiclePoly
       */
      getPoly(): zombie.vehicles.PolygonalMap2$VehiclePoly;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.PolygonalMap2$VehiclePoly
       */
      getPolyPlusRadius(): zombie.vehicles.PolygonalMap2$VehiclePoly;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPosition(arg0: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRegulatorSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemainingFuelPercentage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRenderEffectMaster(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderYOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteCollide(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteMask(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteMaskObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRust(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript
       */
      getScript(): zombie.scripting.objects.VehicleScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptModule(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptnx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptny(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getSeat(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getShadowTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSirenStartTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSkin(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkinIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpecialObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpeed2D(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getSpriteGridObjects(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpriteName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSqlId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStateEventDelayTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaticMovingObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getStoplightsOn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceNormalOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceOffsetNoTable(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.SurroundVehicle
       */
      getSurroundVehicle(): zombie.vehicles.SurroundVehicle;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      getSwitchSeatAnimName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getSwitchSeatAnimRate(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      getSwitchSeatSound(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getTargetAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextureName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThumpCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpTarget(): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpableFor(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTile(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceZombieAttack(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTowAttachmentOther(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTowAttachmentSelf(): string;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): org.joml.Vector3f
       */
      getTowedByLocalPos(arg0: string, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): org.joml.Vector3f
       */
      getTowedByWorldPos(arg0: string, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): org.joml.Vector3f
       */
      getTowingLocalPos(arg0: string, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): org.joml.Vector3f
       */
      getTowingWorldPos(arg0: string, arg1: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransmissionNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTransmissionNumberLetter(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      getUpVector(arg0: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUpVectorDot(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.vehicles.VehiclePart
       *  - (IsoGameCharacter arg0, boolean arg1): zombie.vehicles.VehiclePart
       */
      getUseablePart(arg0: zombie.characters.IsoGameCharacter, arg1?: boolean): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsesExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getVectorFromDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehicleEngineRPM
       */
      getVehicleEngineRPM(): zombie.vehicles.VehicleEngineRPM;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getVehicleTowedBy(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getVehicleTowing(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVehicleType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0, float arg1): number
       */
      getWeight(arg0?: number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Vector3f arg1): void
       */
      getWheelForwardVector(arg0: number, arg1: org.joml.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getWindRenderEffects(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getWindowLightsOn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Vector3f arg0, Vector3f arg1, VehicleScript arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3, VehicleScript arg4): org.joml.Vector3f
       */
      getWorldPos(arg0: org.joml.Vector3f | number, arg1: org.joml.Vector3f | number, arg2?: zombie.scripting.objects.VehicleScript | number, arg3?: org.joml.Vector3f, arg4?: zombie.scripting.objects.VehicleScript): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Transform arg0): zombie.core.physics.Transform
       */
      getWorldTransform(arg0: zombie.core.physics.Transform): zombie.core.physics.Transform;
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
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getZone(): string;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      hasAuthorization(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBackSignal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasHeadlights(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasHorn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasLightbar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      hasRoof(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveOneDoorUnlocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveSpecialTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       *  - (IsoGameCharacter arg0, HitVars arg1): void
       */
      hitCharacter(arg0: zombie.characters.IsoZombie | zombie.characters.IsoGameCharacter, arg1?: zombie.vehicles.BaseVehicle$HitVars): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      hitVehicle(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlarmed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isAlphaAndTargetZero(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isAlphaZero(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyDoorLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyListenerInside(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAtRest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBackSignalEmitting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBraking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isCharacterAdjacentTo(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCloseKilled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (IsoGameCharacter arg0): boolean
       */
      isCollided(arg0?: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedE(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedN(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedS(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedW(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithDoor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoColor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingOffroad(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDriveable(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isDriver(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isEatingOther(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEngineRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEngineStarted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEngineWorking(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1): boolean
       */
      isEnterBlocked(arg0: zombie.characters.IsoGameCharacter, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1): boolean
       */
      isEnterBlocked2(arg0: zombie.characters.IsoGameCharacter, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistInTheWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (IsoGameCharacter arg0, int arg1): boolean
       */
      isExitBlocked(arg0: number | zombie.characters.IsoGameCharacter, arg1?: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isExitBlocked2(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFirstUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoodCar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHighlighted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHotwired(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHotwiredBroken(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGameCharacter arg1): boolean
       */
      isInArea(arg0: string, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      isInBounds(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInForest(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isIntersectingSquare(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isIntersectingSquareWithShadow(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvalidChunkAhead(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0, boolean arg1, boolean arg2, boolean arg3): boolean
       */
      isInvalidChunkAround(arg0?: boolean, arg1?: boolean, arg2?: boolean, arg3?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvalidChunkBehind(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isItemAllowedInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeyIsOnDoor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeyboardControlled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeysInIgnition(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocalPhysicSim(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       *  - (int arg0, int arg1, boolean arg2): boolean
       */
      isMaskClicked(arg0: number, arg1: number, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMechanicUIOpen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovedThumpable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoPicking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNorthHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOperational(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHighlight(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHlAttached(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHlBlink(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutlineOnMouseover(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1): boolean
       */
      isPassengerUseDoor2(arg0: zombie.characters.IsoGameCharacter, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      isPositionOnLeftOrRight(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPushableForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isPushedByForSeparate(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRegulator(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isRemoveItemAllowedFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemovedFromWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isSeatInstalled(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isSeatOccupied(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShootable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolidForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpriteInvisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsNorth(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsObject(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsWest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStarting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableSurface(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableTopObject(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTaintedWater(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isTargetAlphaZero(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTrunkLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombiesDontAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbAltCollide(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ByteBuffer arg1): void
       */
      loadChange(arg0: string, arg1: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      loadFromRemoteBuffer(arg0: java.nio.ByteBuffer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      loadState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      lockServerUpdate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needPartsUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (byte arg0, short arg1): void
       */
      netPlayerFromServerUpdate(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      netPlayerServerSendAuthorisation(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBackMoveSignalStart(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBackMoveSignalStop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onHornStart(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onHornStop(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      onMouseLeftClick(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onMouseRightClick(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onMouseRightReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      permanentlyRemove(): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0, String arg1, IsoGameCharacter arg2): void
       */
      playActorAnim(arg0: zombie.vehicles.VehiclePart, arg1: string, arg2: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0, String arg1): void
       */
      playPartAnim(arg0: zombie.vehicles.VehiclePart, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0, IsoPlayer arg1, String arg2): void
       */
      playPartSound(arg0: zombie.vehicles.VehiclePart, arg1: zombie.characters.IsoPlayer, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       *  - (int arg0, String arg1, IsoGameCharacter arg2): void
       */
      playPassengerAnim(arg0: number, arg1: string, arg2?: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      playPassengerSound(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): number
       */
      playSoundImpl(arg0: string, arg1: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      playSwitchSeatAnim(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      positionTrailer(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preupdate(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      putKeyInIgnition(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      putKeyOnDoor(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoGridSquare arg1, IsoObject arg2): void
       */
      putKeyToContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      putKeyToWorld(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      putKeyToZombie(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseAnimationPlayers(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllContainers(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromSquare(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromWorld(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeKeyFromDoor(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeKeyFromIgnition(): void;
      /**
       * Method Parameters: 
       *  - (ObjectRenderEffects arg0): void
       */
      removeRenderEffect(arg0: zombie.iso.objects.ObjectRenderEffects): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      removeSheetRope(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6): void
       */
      render(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7): void
       */
      renderAttachedAndOverlaySprites(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7, Consumer arg8): void
       */
      renderFloorTile(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>, arg8: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, boolean arg3): void
       */
      renderFxMask(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3): void
       */
      renderObjectPicker(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderShadow(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7): void
       */
      renderWallTile(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, Shader arg4, Consumer arg5): void
       */
      renderWallTileOnly(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: zombie.core.opengl.Shader, arg5: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      repair(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      replaceItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeRunningAfterLoad(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reuseGridSquare(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1, ByteBuffer arg2): void
       */
      saveChange(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable, arg2: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      scriptReloaded(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, KahluaTable arg1): void
       *  - (String arg0, Object... arg1): void
       */
      sendObjectChange(arg0: string, arg1?: se.krka.kahlua.vm.KahluaTable | any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      separate(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActiveInBullet(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAddThumpWorldSound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlarmed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setAlpha(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setAlphaAndTarget(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAlphaToTarget(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setAngles(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setAttachedAnimSprite(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBaseQuality(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      setBloodIntensity(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBraking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBrakingForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, String arg2): void
       */
      setCharacterPosition(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, String arg2): void
       */
      setCharacterPositionToAnim(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setChildSprites(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setClientForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCloseKilled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCollideType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedE(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedN(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setCollidedObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedS(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedThisFrame(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedW(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedWithDoor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setColor(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setColorHSV(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setCurrent(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setCurrentKey(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentSteering(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setCustomColor(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDebugZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDestroyed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       *  - (int arg0): void
       */
      setDir(arg0: zombie.iso.IsoDirections | number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoColor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setEatingZombies(arg0: java.util.ArrayList<zombie.characters.IsoZombie>): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setEngineFeature(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFeelersize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFirstUpdate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setGeneralPartCondition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGoodCar(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHeadlightsOn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setHighlightColor(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1): void
       */
      setHighlighted(arg0: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setHitDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHitForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHitFromAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHotwired(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHotwiredBroken(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setImpulsex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setImpulsey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setInitialMass(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKeyIsOnDoor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKeysInIgnition(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setLast(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastCollideTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      setLastTargettedBy(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightbarLightsMode(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightbarSirenMode(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLimpulsex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLimpulsey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLy(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLz(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMass(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMechanicUIOpen(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMechanicalID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovedThumpable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setMovementLastFrame(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setMovingSquareNow(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNeedPartsUpdate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      setNetPlayerAuthorization(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoDamage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoPicking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setNy(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffsetX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffsetY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHighlight(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (int arg0, ColorInfo arg1): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setOutlineHighlightCol(arg0: zombie.core.textures.ColorInfo | number, arg1?: zombie.core.textures.ColorInfo | number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHlAttached(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHlBlink(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOutlineOnMouseover(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOutlineThickness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, boolean arg5): boolean
       */
      setOverlaySprite(arg0: string, arg1?: boolean | number, arg2?: number, arg3?: number, arg4?: number, arg5?: boolean): void | boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setOverlaySpriteColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGameCharacter arg1, Vector3f arg2): boolean
       */
      setPassenger(arg0: number, arg1: zombie.characters.IsoGameCharacter, arg2: org.joml.Vector3f): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPathFindIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPhysicsActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPipedFuelAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRegulator(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRegulatorSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (RenderEffectType arg0): void
       *  - (RenderEffectType arg0, boolean arg1): void
       */
      setRenderEffect(arg0: zombie.iso.objects.RenderEffectType, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderYOffset(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setRerouteCollide(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setRerouteMask(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRust(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       */
      setScript(arg0?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScriptModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScriptName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScriptnx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScriptny(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShootable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setSirenStartTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSkinIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.BaseVehicle
       *  - (String arg0, boolean arg1): zombie.vehicles.BaseVehicle
       */
      setSmashed(arg0: string, arg1?: boolean): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolid(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpecialTooltip(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (IsoSprite arg0): void
       */
      setSprite(arg0: string | zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteFromName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStateEventDelayTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStoplightsOn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTaintedWater(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setTargetAlpha(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (Thumpable arg0): void
       */
      setThumpTarget(arg0: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeSinceZombieAttack(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      setTireInflation(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setTireRemoved(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTrunkLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsesExternalWaterSource(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, String arg1, String arg2, float arg3): void
       */
      setVehicleTowedBy(arg0: zombie.vehicles.BaseVehicle, arg1: string, arg2: string, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, String arg1, String arg2, float arg3): void
       */
      setVehicleTowing(arg0: zombie.vehicles.BaseVehicle, arg1: string, arg2: string, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setVehicleType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWaterAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWindowLightsOn(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Transform arg0): void
       */
      setWorldTransform(arg0: zombie.core.physics.Transform): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setZombiesDontAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setZone(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbAltCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldCollideWithCharacters(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldCollideWithObjects(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       *  - (int arg0): boolean
       */
      showPassenger(arg0: zombie.characters.IsoGameCharacter | number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      shutOff(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      sirenShutoffTimeExpired(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      softReset(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1): void
       */
      spotted(arg0: zombie.iso.IsoMovingObject, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      startEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      stopEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      stopSound(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1): void
       */
      switchSeat(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1): void
       */
      switchSeatRSync(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, byte arg1, UdpConnection arg2, ByteBuffer arg3): void
       */
      syncIsoObject(arg0: boolean, arg1: number, arg2: zombie.core.raknet.UdpConnection, arg3: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      syncIsoObjectSend(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1, InventoryItem arg2): void
       */
      syncKeyInIgnition(arg0: boolean, arg1: boolean, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1, Vector2 arg2): zombie.iso.Vector2
       */
      testCollisionWithCharacter(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0, boolean arg1): number
       */
      testCollisionWithCorpse(arg0: zombie.iso.objects.IsoDeadBody, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1, Vector2 arg2): zombie.iso.Vector2
       */
      testCollisionWithObject(arg0: zombie.iso.IsoObject, arg1: number, arg2: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1): number
       *  - (IsoMovingObject arg0, float arg1, float arg2, boolean arg3): number
       */
      testCollisionWithProneCharacter(arg0: zombie.characters.IsoGameCharacter | zombie.iso.IsoMovingObject, arg1: boolean | number, arg2?: number, arg3?: boolean): number;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): boolean
       */
      testCollisionWithVehicle(arg0: zombie.vehicles.BaseVehicle): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0, IsoGameCharacter arg1, boolean arg2): void
       */
      toggleLockedDoor(arg0: zombie.vehicles.VehiclePart, arg1: zombie.characters.IsoGameCharacter, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitBlood(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      transmitCharacterPosition(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitColorHSV(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCompleteItemToClients(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCompleteItemToServer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCustomColor(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitEngine(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitModData(): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      transmitPartCondition(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      transmitPartDoor(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      transmitPartItem(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      transmitPartModData(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      transmitPartUsedDelta(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      transmitPartWindow(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitRust(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitSkinIndex(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitUpdatedSprite(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (UdpConnection arg0): void
       */
      transmitUpdatedSpriteToClients(arg0?: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitUpdatedSpriteToServer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      triggerAlarm(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      tryHotwire(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trySpawnKey(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      tryStartEngine(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unsetOutlineHighlight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateBulletStats(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      updateConstraint(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateControls(): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1): void
       */
      updateEvent(arg0: number, arg1: zombie.audio.GameSoundClip): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      updateHasExtendOffset(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      updateHasExtendOffsetForExit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      updateHasExtendOffsetForExitEnd(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      updateHitByVehicle(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLights(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updatePartStats(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateParts(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updatePhysics(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updatePhysicsNetwork(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSkin(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateTotalMass(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      useItemOn(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      useWater(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      windowsOpen(): number;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      writeToRemoteBuffer(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      static FindExternalWaterSource(arg0: zombie.iso.IsoGridSquare | number, arg1?: number, arg2?: number): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      static FindWaterSourceOnSquare(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static LoadAllVehicleTextures(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.textures.Texture
       *  - (String arg0, int arg1): zombie.core.textures.Texture
       */
      static LoadVehicleTexture(arg0: string, arg1?: number): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (VehicleScript arg0): void
       */
      static LoadVehicleTextures(arg0: zombie.scripting.objects.VehicleScript): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static allocVector2(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      static allocVector3f(): org.joml.Vector3f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1): java.lang.Class
       */
      static factoryClassFromFileInput(arg0: zombie.iso.IsoCell, arg1: number): java.lang.Class<any>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, byte arg1): zombie.iso.IsoObject
       *  - (IsoCell arg0, ByteBuffer arg1): zombie.iso.IsoObject
       */
      static factoryFromFileInput(arg0: zombie.iso.IsoCell, arg1: number | java.nio.ByteBuffer): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1): zombie.iso.IsoObject
       */
      static factoryFromFileInput_OLD(arg0: zombie.iso.IsoCell, arg1: number): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static factoryGetClassID(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject$IsoObjectFactory
       */
      static getFactoryVehicle(): zombie.iso.IsoObject$IsoObjectFactory;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFakeSpeedModifier(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getIDCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastRendered(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastRenderedRendered(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3): zombie.iso.IsoObject
       */
      static getNew(arg0?: zombie.iso.IsoGridSquare, arg1?: string, arg2?: string, arg3?: boolean): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, IsoDirections arg1): zombie.iso.Vector2
       */
      static getVectorFromDirection(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoDirections): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      static releaseVector2(arg0: zombie.iso.Vector2): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3f arg0): void
       */
      static releaseVector3f(arg0: org.joml.Vector3f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setDefaultCondition(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setIDCount(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastRendered(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastRenderedRendered(arg0: zombie.iso.IsoObject): void;
    }
    /**
     * @customConstructor HitVars.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$HitVars
     */
    export class BaseVehicle$HitVars {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, BaseVehicle arg1): void
       */
      calc(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.vehicles.BaseVehicle): void;
    }
    /**
     * @customConstructor Matrix4fObjectPool.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$Matrix4fObjectPool extends zombie.popman.ObjectPool<org.joml.Matrix4f>
     */
    export class BaseVehicle$Matrix4fObjectPool {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<org.joml.Matrix4f>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<org.joml.Matrix4f> | java.util.List<org.joml.Matrix4f>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<org.joml.Matrix4f>): void;
    }
    /**
     * @customConstructor MinMaxPosition.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$MinMaxPosition
     */
    export class BaseVehicle$MinMaxPosition {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ModelInfo.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$ModelInfo
     */
    export class BaseVehicle$ModelInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseAnimationPlayer(): void;
    }
    /**
     * @customConstructor Passenger.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$Passenger
     */
    export class BaseVehicle$Passenger {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor QuaternionfObjectPool.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$QuaternionfObjectPool extends zombie.popman.ObjectPool<org.joml.Quaternionf>
     */
    export class BaseVehicle$QuaternionfObjectPool {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<org.joml.Quaternionf>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<org.joml.Quaternionf> | java.util.List<org.joml.Quaternionf>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<org.joml.Quaternionf>): void;
    }
    /**
     * @customConstructor ServerVehicleState.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$ServerVehicleState
     */
    export class BaseVehicle$ServerVehicleState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      setAuthorization(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): boolean
       */
      shouldSend(arg0: zombie.vehicles.BaseVehicle): boolean;
    }
    /**
     * @customConstructor Vector2ObjectPool.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$Vector2ObjectPool extends zombie.popman.ObjectPool<zombie.iso.Vector2>
     */
    export class BaseVehicle$Vector2ObjectPool {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.iso.Vector2>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<zombie.iso.Vector2> | java.util.List<zombie.iso.Vector2>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<zombie.iso.Vector2>): void;
    }
    /**
     * @customConstructor Vector2fObjectPool.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$Vector2fObjectPool extends zombie.popman.ObjectPool<org.joml.Vector2f>
     */
    export class BaseVehicle$Vector2fObjectPool {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<org.joml.Vector2f>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<org.joml.Vector2f> | java.util.List<org.joml.Vector2f>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<org.joml.Vector2f>): void;
    }
    /**
     * @customConstructor Vector3fObjectPool.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$Vector3fObjectPool extends zombie.popman.ObjectPool<org.joml.Vector3f>
     */
    export class BaseVehicle$Vector3fObjectPool {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<org.joml.Vector3f>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<org.joml.Vector3f> | java.util.List<org.joml.Vector3f>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<org.joml.Vector3f>): void;
    }
    /**
     * @customConstructor WheelInfo.new
     * @
     * [CLASS] zombie.vehicles.BaseVehicle$WheelInfo
     */
    export class BaseVehicle$WheelInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /** [ENUM] zombie.vehicles.BaseVehicle$engineStateTypes */
    export class BaseVehicle$engineStateTypes {
      protected constructor();
      static readonly Idle: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly RetryingStarting: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly Running: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly ShutingDown: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly Stalling: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly Starting: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly StartingFailed: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly StartingFailedNoPower: zombie.vehicles.BaseVehicle$engineStateTypes;
      static readonly StartingSuccess: zombie.vehicles.BaseVehicle$engineStateTypes;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor EditVehicleState.new
     * @
     * [CLASS] zombie.vehicles.EditVehicleState extends zombie.gameStates.GameState
     */
    export class EditVehicleState {
      /** zombie.vehicles.EditVehicleState */
      static instance?: zombie.vehicles.EditVehicleState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScript(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.EditVehicleState
       */
      static checkInstance(): zombie.vehicles.EditVehicleState;
    }
    /**
     * @customConstructor LuaEnvironment.new
     * @
     * [CLASS] zombie.vehicles.EditVehicleState$LuaEnvironment
     */
    export class EditVehicleState$LuaEnvironment {
      /**
       * Constructors: 
       *  - (J2SEPlatform arg0, KahluaConverterManager arg1, KahluaTable arg2)
       */
      constructor(arg0: se.krka.kahlua.j2se.J2SEPlatform | null, arg1: se.krka.kahlua.converter.KahluaConverterManager | null, arg2: se.krka.kahlua.vm.KahluaTable | null);
    }
    /**
     * @customConstructor PathFindBehavior2.new
     * @
     * [CLASS] zombie.vehicles.PathFindBehavior2
     */
    export class PathFindBehavior2 {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter | null);
      /**
       * Method Parameters: 
       *  - (Mover arg0): void
       */
      Failed(arg0: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (Path arg0, Mover arg1): void
       */
      Succeeded(arg0: zombie.vehicles.PolygonalMap2$Path, arg1: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cancel(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getTargetChar(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalLocation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalNone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalSound(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalVehicleAdjacent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalVehicleArea(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalVehicleSeat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovingUsingPathFind(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStrafing(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isTargetLocation(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, float arg1): void
       */
      moveToDir(arg0: zombie.iso.IsoMovingObject, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      moveToPoint(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      pathToCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToLocation(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      pathToLocationF(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (TFloatArrayList arg0): void
       */
      pathToNearest(arg0: gnu.trove.list.array.TFloatArrayList): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      pathToNearestTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToSound(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      pathToVehicleAdjacent(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, String arg1): void
       */
      pathToVehicleArea(arg0: zombie.vehicles.BaseVehicle, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, int arg1): void
       */
      pathToVehicleSeat(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setData(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldGetUpFromCrawl(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.PathFindBehavior2$BehaviorResult
       */
      update(): zombie.vehicles.PathFindBehavior2$BehaviorResult;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, IsoMovingObject arg3, Path arg4, PointOnPath arg5): void
       */
      static closestPointOnPath(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoMovingObject, arg4: zombie.vehicles.PolygonalMap2$Path, arg5: zombie.vehicles.PathFindBehavior2$PointOnPath): void;
    }
    /** [ENUM] zombie.vehicles.PathFindBehavior2$BehaviorResult */
    export class PathFindBehavior2$BehaviorResult {
      protected constructor();
      static readonly Failed: zombie.vehicles.PathFindBehavior2$BehaviorResult;
      static readonly Succeeded: zombie.vehicles.PathFindBehavior2$BehaviorResult;
      static readonly Working: zombie.vehicles.PathFindBehavior2$BehaviorResult;
      name(): string;
      ordinal(): number;
    }
    /**
     * @customConstructor NPCData.new
     * @
     * [CLASS] zombie.vehicles.PathFindBehavior2$NPCData
     */
    export class PathFindBehavior2$NPCData {
      /**
       * Constructors: 
       *  - (PathFindBehavior2 arg0)
       */
      constructor(arg0: zombie.vehicles.PathFindBehavior2 | null);
    }
    /**
     * @customConstructor PointOnPath.new
     * @
     * [CLASS] zombie.vehicles.PathFindBehavior2$PointOnPath
     */
    export class PathFindBehavior2$PointOnPath {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor PathFindState2.new
     * @
     * [CLASS] zombie.vehicles.PathFindState2 extends zombie.ai.State
     */
    export class PathFindState2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
    }
    /**
     * @customConstructor PolygonalMap2.new
     * @
     * [CLASS] zombie.vehicles.PolygonalMap2
     */
    export class PolygonalMap2 {
      /** boolean */
      static readonly CLOSE_TO_WALLS: boolean;
      /** boolean */
      static readonly COLLIDE_BEVEL: boolean;
      /** boolean */
      static readonly COLLIDE_CLIPPER: boolean;
      /** int */
      static readonly CXN_FLAG_CAN_PATH: number;
      /** int */
      static readonly CXN_FLAG_THUMP: number;
      /** int */
      static readonly LCC_ALLOW_ON_EDGE: number;
      /** int */
      static readonly LCC_CHECK_COST: number;
      /** int */
      static readonly LCC_CLOSE_TO_WALLS: number;
      /** int */
      static readonly LCC_IGNORE_DOORS: number;
      /** int */
      static readonly LCC_RENDER: number;
      /** int */
      static readonly LCC_ZERO: number;
      /** int */
      static readonly NODE_FLAG_CRAWL: number;
      /** int */
      static readonly NODE_FLAG_CRAWL_INTERIOR: number;
      /** int */
      static readonly NODE_FLAG_IN_CHUNK_DATA: number;
      /** int */
      static readonly NODE_FLAG_KEEP: number;
      /** int */
      static readonly NODE_FLAG_PERIMETER: number;
      /** boolean */
      static readonly PATHS_UNDER_VEHICLES: boolean;
      /** float */
      static readonly RADIUS: number;
      /** zombie.vehicles.PolygonalMap2 */
      static readonly instance?: zombie.vehicles.PolygonalMap2;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      addChunkToWorld(arg0: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (IPathfinder arg0, Mover arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): zombie.vehicles.PolygonalMap2$PathFindRequest
       */
      addRequest(arg0: zombie.vehicles.PolygonalMap2$IPathfinder, arg1: zombie.ai.astar.Mover, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): zombie.vehicles.PolygonalMap2$PathFindRequest;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      addVehicleToWorld(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, int arg2, BaseVehicle arg3, int arg4): boolean
       *  - (float arg0, float arg1, int arg2, IsoMovingObject arg3, boolean arg4, boolean arg5): boolean
       */
      canStandAt(arg0: number, arg1: number, arg2: number, arg3: zombie.vehicles.BaseVehicle | zombie.iso.IsoMovingObject, arg4: number | boolean, arg5?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Mover arg0): void
       */
      cancelRequest(arg0: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, IsoMovingObject arg5, int arg6): zombie.iso.Vector2
       */
      getCollidepoint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.iso.IsoMovingObject, arg6: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): java.util.ArrayList<zombie.vehicles.PolygonalMap2$Point>
       */
      getPointInLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): java.util.ArrayList<zombie.vehicles.PolygonalMap2$Point>;
      /**
       * Method Parameters: 
       *  - (IsoMetaGrid arg0): void
       */
      init(arg0: zombie.iso.IsoMetaGrid): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, BaseVehicle arg4, Vector2 arg5): boolean
       */
      intersectLineWithVehicle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.vehicles.BaseVehicle, arg5: zombie.iso.Vector2): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): boolean
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, IsoMovingObject arg5): boolean
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, IsoMovingObject arg5, int arg6): boolean
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4, IsoMovingObject arg5, boolean arg6, boolean arg7): boolean
       */
      lineClearCollide(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: zombie.iso.IsoMovingObject, arg6?: number | boolean, arg7?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      removeChunkFromWorld(arg0: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      removeVehicleFromWorld(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1, float arg2, Vector2f arg3): org.joml.Vector2f
       */
      resolveCollision(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      squareChanged(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateMain(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateThread(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      updateVehicle(arg0: zombie.vehicles.BaseVehicle): void;
    }
    /**
     * @customConstructor IPathfinder.new
     * @
     * [INTERFACE] zombie.vehicles.PolygonalMap2$IPathfinder
     */
    export class PolygonalMap2$IPathfinder {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Mover arg0): void
       */
      Failed(arg0: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (Path arg0, Mover arg1): void
       */
      Succeeded(arg0: zombie.vehicles.PolygonalMap2$Path, arg1: zombie.ai.astar.Mover): void;
    }
    /**
     * @customConstructor LiangBarsky.new
     * @
     * [CLASS] zombie.vehicles.PolygonalMap2$LiangBarsky
     */
    export class PolygonalMap2$LiangBarsky {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): boolean
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, double[] arg8): boolean
       */
      lineRectIntersect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8?: number[]): boolean;
    }
    /**
     * @customConstructor Path.new
     * @
     * [CLASS] zombie.vehicles.PolygonalMap2$Path
     */
    export class PolygonalMap2$Path {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      crossesSquare(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * @customConstructor PathFindRequest.new
     * @
     * [CLASS] zombie.vehicles.PolygonalMap2$PathFindRequest
     */
    export class PolygonalMap2$PathFindRequest {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
    }
    /**
     * @customConstructor Point.new
     * @
     * [CLASS] zombie.vehicles.PolygonalMap2$Point
     */
    export class PolygonalMap2$Point {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
    }
    /**
     * @customConstructor VehiclePoly.new
     * @
     * [CLASS] zombie.vehicles.PolygonalMap2$VehiclePoly
     */
    export class PolygonalMap2$VehiclePoly {

      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      containsPoint(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, Vector2 arg1, Vector2 arg2, Vector2 arg3): zombie.iso.Vector2
       */
      static lineIntersection(arg0: zombie.iso.Vector2, arg1: zombie.iso.Vector2, arg2: zombie.iso.Vector2, arg3: zombie.iso.Vector2): zombie.iso.Vector2;
    }
    /**
     * @customConstructor SurroundVehicle.new
     * @
     * [CLASS] zombie.vehicles.SurroundVehicle
     */
    export class SurroundVehicle {
      /**
       * Constructors: 
       *  - (BaseVehicle arg0)
       */
      constructor(arg0: zombie.vehicles.BaseVehicle | null);
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, Vector2f arg1): org.joml.Vector2f
       */
      getPositionForZombie(arg0: zombie.characters.IsoZombie, arg1: org.joml.Vector2f): org.joml.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /** [ENUM] zombie.vehicles.TransmissionNumber */
    export class TransmissionNumber {
      protected constructor();
      static readonly N: zombie.vehicles.TransmissionNumber;
      static readonly R: zombie.vehicles.TransmissionNumber;
      static readonly Speed1: zombie.vehicles.TransmissionNumber;
      static readonly Speed2: zombie.vehicles.TransmissionNumber;
      static readonly Speed3: zombie.vehicles.TransmissionNumber;
      static readonly Speed4: zombie.vehicles.TransmissionNumber;
      static readonly Speed5: zombie.vehicles.TransmissionNumber;
      static readonly Speed6: zombie.vehicles.TransmissionNumber;
      static readonly Speed7: zombie.vehicles.TransmissionNumber;
      static readonly Speed8: zombie.vehicles.TransmissionNumber;
      name(): string;
      ordinal(): number;
      getIndex(): number;

      /** (int arg0): TransmissionNumber */
      getNext(arg0: number): zombie.vehicles.TransmissionNumber;

      /** (int arg0): TransmissionNumber */
      getPrev(arg0: number): zombie.vehicles.TransmissionNumber;

      getString(): string;

    }
    /**
     * @customConstructor UI3DScene.new
     * @
     * [CLASS] zombie.vehicles.UI3DScene extends zombie.ui.UIElement
     */
    export class UI3DScene {
      /**
       * Constructors: 
       *  - (KahluaTable arg0)
       */
      constructor(arg0: se.krka.kahlua.vm.KahluaTable | null);
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      AddChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      BringToTop(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ButtonClicked(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearChildren(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawSubTextureRGBA(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawText(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextCentre(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextRight(arg0: string | zombie.ui.UIFont, arg1: number | string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (UIFont arg0, String arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextUntrimmed(arg0: zombie.ui.UIFont, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8, double arg9, double arg10, double arg11, double arg12): void
       */
      DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureAngle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, Color arg3): void
       */
      DrawTextureCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      DrawTextureColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTextureIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5): void
       */
      DrawTextureScaled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledAspect2(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5): void
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureScaledCol(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color | number, arg6?: number, arg7?: number, arg8?: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, Double arg1, Double arg2, Double arg3, Double arg4, Double arg5, Double arg6, Double arg7, Double arg8): void
       */
      DrawTextureScaledColor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7): void
       */
      DrawTextureScaledUniform(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiled(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, double arg5, double arg6, double arg7, double arg8): void
       */
      DrawTextureTiledY(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedX(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, int arg3, int arg4, Color arg5): void
       */
      DrawTexture_FlippedXIgnoreOffset(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, double arg1, double arg2, double arg3, double arg4, Color arg5, double arg6, double arg7, double arg8, double arg9): void
       */
      DrawUVSliceTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: zombie.core.Color, arg6: number, arg7: number, arg8: number, arg9: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveChild(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      RemoveControl(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      backMost(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      bringToTop(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (double arg0): number
       */
      clampToParentY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearMaxDrawHeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearStencilRect(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3): any
       */
      fromLua3(arg0: string, arg1: any, arg2: any, arg3: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): any
       */
      fromLua4(arg0: string, arg1: any, arg2: any, arg3: any, arg4: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6): any
       */
      fromLua6(arg0: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5, Object arg6, Object arg7, Object arg8, Object arg9): any
       */
      fromLua9(arg0: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickedValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.ui.UIElement>
       */
      getControls(): java.util.ArrayList<zombie.ui.UIElement>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxDrawHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ui.UIElement
       */
      getParent(): zombie.ui.UIElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerContext(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderThisPlayerOnly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollChildren(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScrollHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getScrollWithParent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUIName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getXScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYScroll(): number;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): number
       */
      getYScrolled(arg0: zombie.ui.UIElement): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreHeightChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ignoreWidthChange(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorBottom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnchorTop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCapture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeMouseEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultDraw(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFollowGameWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceCursorVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreLossControl(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isKeyConsumed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMouseOver(): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      isPointOver(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWantKeyEvents(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyPress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRelease(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      onKeyRepeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseMove(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseMoveOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): void
       */
      onMouseUpOutside(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): boolean
       */
      onMouseWheel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onResize(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseDown(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1): boolean
       */
      onRightMouseUp(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onresize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      repaintStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resumeStencil(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      sceneToUIX(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      sceneToUIY(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlwaysOnTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorBottom(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorLeft(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorRight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnchorTop(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCapture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickedValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setConsumeMouseEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector arg0): void
       */
      setControls(arg0: java.util.Vector<zombie.ui.UIElement>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDefaultDraw(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFollowGameWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceCursorVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHeightSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreLossControl(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setMaxDrawHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0): void
       */
      setParent(arg0: zombie.ui.UIElement): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerContext(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRenderClippedChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRenderThisPlayerOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollChildren(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setScrollHeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScrollWithParent(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2, double arg3): void
       */
      setStencilRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUIName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWantKeyEvents(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthOnly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setWidthSilent(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setXScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setYScroll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      suspendStencil(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       *  - (Matrix4f arg0, float arg1, float arg2, float arg3, Vector3f arg4): org.joml.Vector3f
       */
      uiToScene(arg0: number | org.joml.Matrix4f, arg1: number, arg2: number, arg3: org.joml.Vector3f | number, arg4?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      uiToSceneX(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      uiToSceneY(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Plane arg0, Ray arg1, Vector3f arg2): number
       */
      static intersect_ray_plane(arg0: zombie.vehicles.UI3DScene$Plane, arg1: zombie.vehicles.UI3DScene$Ray, arg2: org.joml.Vector3f): number;
    }
    /**
     * @customConstructor Plane.new
     * @
     * [CLASS] zombie.vehicles.UI3DScene$Plane
     */
    export class UI3DScene$Plane {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3f arg0, Vector3f arg1)
       */
      constructor(arg0?: org.joml.Vector3f | null, arg1?: org.joml.Vector3f | null);
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, Vector3f arg1): zombie.vehicles.UI3DScene$Plane
       */
      set(arg0: org.joml.Vector3f, arg1: org.joml.Vector3f): zombie.vehicles.UI3DScene$Plane;
    }
    /**
     * @customConstructor PlaneObjectPool.new
     * @
     * [CLASS] zombie.vehicles.UI3DScene$PlaneObjectPool extends zombie.popman.ObjectPool<zombie.vehicles.UI3DScene$Plane>
     */
    export class UI3DScene$PlaneObjectPool {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.vehicles.UI3DScene$Plane>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<zombie.vehicles.UI3DScene$Plane> | java.util.List<zombie.vehicles.UI3DScene$Plane>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<zombie.vehicles.UI3DScene$Plane>): void;
    }
    /**
     * @customConstructor Ray.new
     * @
     * [CLASS] zombie.vehicles.UI3DScene$Ray
     */
    export class UI3DScene$Ray {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor RayObjectPool.new
     * @
     * [CLASS] zombie.vehicles.UI3DScene$RayObjectPool extends zombie.popman.ObjectPool<zombie.vehicles.UI3DScene$Ray>
     */
    export class UI3DScene$RayObjectPool {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.vehicles.UI3DScene$Ray>): void;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       *  - (Object arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<zombie.vehicles.UI3DScene$Ray> | java.util.List<zombie.vehicles.UI3DScene$Ray>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<zombie.vehicles.UI3DScene$Ray>): void;
    }
    /**
     * @customConstructor VehicleDoor.new
     * @
     * [CLASS] zombie.vehicles.VehicleDoor
     */
    export class VehicleDoor {
      /**
       * Constructors: 
       *  - (VehiclePart arg0)
       */
      constructor(arg0: zombie.vehicles.VehiclePart | null);
      /**
       * Method Parameters: 
       *  - (Door arg0): void
       */
      init(arg0: zombie.scripting.objects.VehicleScript$Door): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLockBroken(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOpen(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLockBroken(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOpen(arg0: boolean): void;
    }
    /**
     * @customConstructor VehicleEngineRPM.new
     * @
     * [CLASS] zombie.vehicles.VehicleEngineRPM extends zombie.scripting.objects.BaseScriptObject
     */
    export class VehicleEngineRPM {
      /** int */
      static readonly MAX_GEARS: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor VehicleLight.new
     * @
     * [CLASS] zombie.vehicles.VehicleLight
     */
    export class VehicleLight {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canFocusingDown(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canFocusingUp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDistanization(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFocusing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntensity(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setFocusingDown(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setFocusingUp(): void;
    }
    /**
     * @customConstructor VehiclePart.new
     * @
     * [CLASS] zombie.vehicles.VehiclePart
     */
    export class VehiclePart {
      /**
       * Constructors: 
       *  - (BaseVehicle arg0)
       */
      constructor(arg0: zombie.vehicles.BaseVehicle | null);
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, String arg4, String arg5, int arg6): void
       *  - (IsoPlayer arg0, String arg1, float arg2, float arg3, float arg4, String arg5, String arg6, int arg7): void
       */
      AddDeviceText(arg0: string | zombie.characters.IsoPlayer, arg1: number | string, arg2: number, arg3: number, arg4: string | number, arg5: string, arg6: number | string, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasPlayerInRange(): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      addChild(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.DeviceData
       */
      createSignalDevice(): zombie.radio.devices.DeviceData;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, int arg5): void
       */
      createSpotLight(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      damage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, int arg1): void
       */
      doInventoryItemStats(arg0: zombie.inventory.InventoryItem, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehicleWindow
       */
      findWindow(): zombie.vehicles.VehicleWindow;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript$Anim
       */
      getAnimById(arg0: string): zombie.scripting.objects.VehicleScript$Anim;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getArea(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vehicles.VehiclePart
       */
      getChild(arg0: number): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChildCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getChildWindow(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (IsoGameCharacter arg0): number
       */
      getContainerCapacity(arg0?: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerContentAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getContainerContentType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerSeatNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.devices.DeviceData
       */
      getDeviceData(): zombie.radio.devices.DeviceData;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehicleDoor
       */
      getDoor(): zombie.vehicles.VehicleDoor;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineLoudness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getInventoryItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getItemContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getItemType(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastUpdated(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehicleLight
       */
      getLight(): zombie.vehicles.VehicleLight;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightFocusing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightIntensity(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getLuaFunction(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMechanicSkillInstaller(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getParent(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.VehicleScript$Part
       */
      getScriptPart(): zombie.scripting.objects.VehicleScript$Part;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionCompression(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionDamping(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      getTable(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getVehicle(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelFriction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehicleWindow
       */
      getWindow(): zombie.vehicles.VehicleWindow;
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
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasDevicePower(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isContainer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInventoryItemUninstalled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSetAllModelsVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpecificItem(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      repair(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllModelsVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCondition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setContainerCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (float arg0, boolean arg1, boolean arg2): void
       */
      setContainerContentAmount(arg0: number, arg1?: boolean, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (DeviceData arg0): void
       */
      setDeviceData(arg0: zombie.radio.devices.DeviceData): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setEngineLoudness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, float arg1, float arg2): void
       */
      setGeneralCondition(arg0: zombie.inventory.InventoryItem, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       *  - (InventoryItem arg0, int arg1): void
       */
      setInventoryItem(arg0: zombie.inventory.InventoryItem, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setItemContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastUpdated(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLightActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMechanicSkillInstaller(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setModelVisible(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setRandomCondition(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Part arg0): void
       */
      setScriptPart(arg0: zombie.scripting.objects.VehicleScript$Part): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpecificItem(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSuspensionCompression(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSuspensionDamping(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWheelFriction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSignalDevice(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static getNumberByCondition(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * @customConstructor VehicleType.new
     * @
     * [CLASS] zombie.vehicles.VehicleType
     */
    export class VehicleType {
      /** java.util.ArrayList<zombie.vehicles.VehicleType> */
      static readonly specialVehicles?: java.util.ArrayList<zombie.vehicles.VehicleType>;
      /** java.util.HashMap<java.lang.String, zombie.vehicles.VehicleType> */
      static readonly vehicles?: java.util.HashMap<string, zombie.vehicles.VehicleType>;

      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string | null);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBaseVehicleQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChanceToSpawnKey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRandomBaseVehicleQuality(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChanceToSpawnKey(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.VehicleType
       *  - (String arg0, Boolean arg1): zombie.vehicles.VehicleType
       */
      static getRandomVehicleType(arg0: string, arg1?: boolean): zombie.vehicles.VehicleType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.VehicleType
       */
      static getTypeFromName(arg0: string): zombie.vehicles.VehicleType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static hasTypeForZone(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor VehicleTypeDefinition.new
     * @
     * [CLASS] zombie.vehicles.VehicleType$VehicleTypeDefinition
     */
    export class VehicleType$VehicleTypeDefinition {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, float arg2)
       */
      constructor(arg0: string | null, arg1: number, arg2: number);
    }
    /**
     * @customConstructor VehicleWindow.new
     * @
     * [CLASS] zombie.vehicles.VehicleWindow
     */
    export class VehicleWindow {

      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      damage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOpenDelta(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      hit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Window arg0): void
       */
      init(arg0: zombie.scripting.objects.VehicleScript$Window): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHittable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOpen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOpenable(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOpen(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOpenDelta(arg0: number): void;
    }
  }
}
