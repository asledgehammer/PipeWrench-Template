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
  export namespace zombie.iso.SpriteDetails {
    /** [ENUM] zombie.iso.SpriteDetails.IsoFlagType */
    export class IsoFlagType {
      protected constructor();
      static readonly CantClimb: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly DoorWallN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly DoorWallW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly FloorHeightOneThird: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly FloorHeightTwoThirds: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly FloorOverlay: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly ForceAmbient: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly HasRainSplashes: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly HasRaindrop: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly HoppableN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly HoppableW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly MAX: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly NoWallLighting: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly SpearOnlyAttackThrough: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly TallHoppableN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly TallHoppableW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallNTrans: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallNW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallOverlay: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallSE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WallWTrans: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WindowN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly WindowW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly alwaysDraw: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedCeiling: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedFloor: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedNW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedS: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedSE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedSurface: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachedW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly attachtostairs: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly bed: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly blocksight: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly blueprint: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly burning: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly burntOut: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly canBeCut: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly canBeRemoved: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly canPathN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly canPathW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetS: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetTopE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetTopN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetTopS: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetTopW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly climbSheetW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly collideN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly collideW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly container: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly cutN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly cutW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly diamondFloor: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly doorN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly doorW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly exterior: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly floorE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly floorS: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly forceRender: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly halfheight: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly hidewalls: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly invisible: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly makeWindowInvincible: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly noStart: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly ontable: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly pushable: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly sheetCurtains: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly shelfE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly shelfS: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly smoke: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly solid: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly solidfloor: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly solidtrans: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableNE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableNW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableS: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableSE: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableSW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly tableW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly taintedWater: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly trans: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly transparentFloor: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly transparentN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly transparentW: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly unflamable: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly vegitation: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly water: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly waterPiped: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly windowN: zombie.iso.SpriteDetails.IsoFlagType;
      static readonly windowW: zombie.iso.SpriteDetails.IsoFlagType;
      name(): string;
      ordinal(): number;
      index(): number;

    }
    /** [ENUM] zombie.iso.SpriteDetails.IsoObjectType */
    export class IsoObjectType {
      protected constructor();
      static readonly MAX: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly UNUSED10: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly UNUSED24: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly UNUSED9: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly WestRoofB: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly WestRoofM: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly WestRoofT: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly curtainE: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly curtainN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly curtainS: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly curtainW: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly doorFrN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly doorFrW: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly doorN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly doorW: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly isMoveAbleObject: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly jukebox: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly lightswitch: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly normal: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly radio: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly stairsBN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly stairsBW: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly stairsMN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly stairsMW: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly stairsTN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly stairsTW: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly tree: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly wall: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly windowFN: zombie.iso.SpriteDetails.IsoObjectType;
      static readonly windowFW: zombie.iso.SpriteDetails.IsoObjectType;
      name(): string;
      ordinal(): number;
      index(): number;

    }
  }
}
