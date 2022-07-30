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
 * File generated at 2022-07-29T23:58Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="reference.d.ts" />

declare module 'PipeWrench' {

///////////////////////////////////////
// [PARTIAL] : Java.api.partial.d.ts //
///////////////////////////////////////

  /** @customConstructor AStarPathFinderResult.new */
  export class AStarPathFinderResult extends zombie.ai.astar.AStarPathFinderResult {}
  /** @customConstructor AbstractStyle.new */
  export class AbstractStyle extends zombie.core.Styles.AbstractStyle {}
  /** @customConstructor ActionContext.new */
  export class ActionContext extends zombie.characters.action.ActionContext {}
  /** @customConstructor ActionGroup.new */
  export class ActionGroup extends zombie.characters.action.ActionGroup {}
  /** @customConstructor ActionProgressBar.new */
  export class ActionProgressBar extends zombie.ui.ActionProgressBar {}
  /** @customConstructor ActionState.new */
  export class ActionState extends zombie.characters.action.ActionState {}
  /** @customConstructor ActionStateSnapshot.new */
  export class ActionStateSnapshot extends zombie.characters.action.ActionStateSnapshot {}
  /** @customConstructor ActiveMods.new */
  export class ActiveMods extends zombie.modding.ActiveMods {}
  /** @customConstructor Add.new */
  export class Add extends zombie.Lua.Event$Add {}
  /** @customConstructor AdvancedAnimator.new */
  export class AdvancedAnimator extends zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator {}
  /** @customConstructor AirFront.new */
  export class AirFront extends zombie.iso.weather.ClimateManager$AirFront {}
  /** @customConstructor AlarmClock.new */
  export class AlarmClock extends zombie.inventory.types.AlarmClock {}
  /** @customConstructor AlarmClockClothing.new */
  export class AlarmClockClothing extends zombie.inventory.types.AlarmClockClothing {}
  /** @customConstructor Allocator.new */
  export class Allocator<any> extends zombie.popman.ObjectPool$Allocator<any> {}
  /** @customConstructor AlphaOp.new */
  export class AlphaOp extends zombie.core.Styles.AlphaOp {}
  /** @customConstructor Alternate.new */
  export class Alternate extends zombie.core.skinnedmodel.population.HairStyle$Alternate {}
  /** @customConstructor Ambient.new */
  export class Ambient extends zombie.AmbientStreamManager$Ambient {}
  /** @customConstructor AmbientLoop.new */
  export class AmbientLoop extends zombie.AmbientStreamManager$AmbientLoop {}
  /** @customConstructor AmbientSoundEffect.new */
  export class AmbientSoundEffect extends zombie.SoundManager$AmbientSoundEffect {}
  /** @customConstructor AmbientSoundLogic.new */
  export class AmbientSoundLogic extends zombie.audio.ObjectAmbientEmitters$AmbientSoundLogic {}
  /** @customConstructor AmbientStreamManager.new */
  export class AmbientStreamManager extends zombie.AmbientStreamManager {}
  /** @customConstructor AngelCodeFont.new */
  export class AngelCodeFont extends zombie.core.fonts.AngelCodeFont {}
  /** @customConstructor Anim.new */
  export class Anim extends zombie.scripting.objects.VehicleScript$Anim {}
  /** @customConstructor AnimBoneWeight.new */
  export class AnimBoneWeight extends zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight {}
  /** @customConstructor AnimEvent.new */
  export class AnimEvent extends zombie.core.skinnedmodel.advancedanimation.AnimEvent {}
  /** @customConstructor AnimEventTime.new */
  export class AnimEventTime extends zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime {}
  /** @customConstructor AnimLayer.new */
  export class AnimLayer extends zombie.core.skinnedmodel.advancedanimation.AnimLayer {}
  /** @customConstructor AnimNode.new */
  export class AnimNode extends zombie.core.skinnedmodel.advancedanimation.AnimNode {}
  /** @customConstructor AnimState.new */
  export class AnimState extends zombie.core.skinnedmodel.advancedanimation.AnimState {}
  /** @customConstructor AnimTimer.new */
  export class AnimTimer extends zombie.GameTime$AnimTimer {}
  /** @customConstructor AnimTrackSampler.new */
  export class AnimTrackSampler extends zombie.core.skinnedmodel.animation.AnimTrackSampler {}
  /** @customConstructor AnimTransition.new */
  export class AnimTransition extends zombie.core.skinnedmodel.advancedanimation.AnimTransition {}
  /** @customConstructor AnimationAsset.new */
  export class AnimationAsset extends zombie.core.skinnedmodel.model.AnimationAsset {}
  /** @customConstructor AnimationAssetParams.new */
  export class AnimationAssetParams extends zombie.core.skinnedmodel.model.AnimationAsset$AnimationAssetParams {}
  /** @customConstructor AnimationBoneBinding.new */
  export class AnimationBoneBinding extends zombie.core.skinnedmodel.animation.AnimationBoneBinding {}
  /** @customConstructor AnimationClip.new */
  export class AnimationClip extends zombie.core.skinnedmodel.animation.AnimationClip {}
  /** @customConstructor AnimationMultiTrack.new */
  export class AnimationMultiTrack extends zombie.core.skinnedmodel.animation.AnimationMultiTrack {}
  /** @customConstructor AnimationPlayer.new */
  export class AnimationPlayer extends zombie.core.skinnedmodel.animation.AnimationPlayer {}
  /** @customConstructor AnimationPlayerRecorder.new */
  export class AnimationPlayerRecorder extends zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder {}
  /** @customConstructor AnimationSet.new */
  export class AnimationSet extends zombie.core.skinnedmodel.advancedanimation.AnimationSet {}
  /** @customConstructor AnimationTrack.new */
  export class AnimationTrack extends zombie.core.skinnedmodel.animation.AnimationTrack {}
  /** @customConstructor AnimationVariableHandle.new */
  export class AnimationVariableHandle extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle {}
  /** @customConstructor AnimationVariableSlotCallbackBool.new */
  export class AnimationVariableSlotCallbackBool extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool {}
  /** @customConstructor AnimationVariableSlotCallbackFloat.new */
  export class AnimationVariableSlotCallbackFloat extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat {}
  /** @customConstructor AnimationVariableSlotCallbackInt.new */
  export class AnimationVariableSlotCallbackInt extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt {}
  /** @customConstructor AnimationVariableSlotCallbackString.new */
  export class AnimationVariableSlotCallbackString extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString {}
  /** @customConstructor AnimationVariableSource.new */
  export class AnimationVariableSource extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource {}
  /** @customConstructor AnimationVariableType.new */
  export class AnimationVariableType extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableType {}
  /** @customConstructor AnimationViewerState.new */
  export class AnimationViewerState extends zombie.gameStates.AnimationViewerState {}
  /** @customConstructor AnimationsMesh.new */
  export class AnimationsMesh extends zombie.scripting.objects.AnimationsMesh {}
  /** @customConstructor AnimatorDebugMonitor.new */
  export class AnimatorDebugMonitor extends zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor {}
  /** @customConstructor Area.new */
  export class Area extends zombie.scripting.objects.VehicleScript$Area {}
  /** @customConstructor ArrayList.new */
  export class ArrayList<any> extends java.util.ArrayList<any> {}
  /** @customConstructor Asset.new */
  export class Asset extends zombie.asset.Asset {}
  /** @customConstructor AssetManager.new */
  export class AssetManager extends zombie.asset.AssetManager {}
  /** @customConstructor AssetManagerTable.new */
  export class AssetManagerTable extends zombie.asset.AssetManagers$AssetManagerTable {}
  /** @customConstructor AssetManagers.new */
  export class AssetManagers extends zombie.asset.AssetManagers {}
  /** @customConstructor AssetParams.new */
  export class AssetParams extends zombie.asset.AssetManager$AssetParams {}
  /** @customConstructor AssetPath.new */
  export class AssetPath extends zombie.asset.AssetPath {}
  /** @customConstructor AssetStateObserver.new */
  export class AssetStateObserver extends zombie.asset.AssetStateObserver {}
  /** @customConstructor AssetTable.new */
  export class AssetTable extends zombie.asset.AssetManager$AssetTable {}
  /** @customConstructor AssetType.new */
  export class AssetType extends zombie.asset.AssetType {}
  /** @customConstructor AttachedItem.new */
  export class AttachedItem extends zombie.characters.AttachedItems.AttachedItem {}
  /** @customConstructor AttachedItems.new */
  export class AttachedItems extends zombie.characters.AttachedItems.AttachedItems {}
  /** @customConstructor AttachedLocation.new */
  export class AttachedLocation extends zombie.characters.AttachedItems.AttachedLocation {}
  /** @customConstructor AttachedLocationGroup.new */
  export class AttachedLocationGroup extends zombie.characters.AttachedItems.AttachedLocationGroup {}
  /** @customConstructor AttachedLocations.new */
  export class AttachedLocations extends zombie.characters.AttachedItems.AttachedLocations {}
  /** @customConstructor AttachmentEditorState.new */
  export class AttachmentEditorState extends zombie.gameStates.AttachmentEditorState {}
  /** @customConstructor AttackState.new */
  export class AttackState extends zombie.ai.states.AttackState {}
  /** @customConstructor AttackVars.new */
  export class AttackVars extends zombie.network.packets.hit.AttackVars {}
  /** @customConstructor BSFurnace.new */
  export class BSFurnace extends zombie.iso.objects.BSFurnace {}
  /** @customConstructor BarricadeAble.new */
  export class BarricadeAble extends zombie.iso.objects.interfaces.BarricadeAble {}
  /** @customConstructor BaseAction.new */
  export class BaseAction extends zombie.characters.CharacterTimedActions.BaseAction {}
  /** @customConstructor BaseAmbientStreamManager.new */
  export class BaseAmbientStreamManager extends zombie.BaseAmbientStreamManager {}
  /** @customConstructor BaseCharacterSoundEmitter.new */
  export class BaseCharacterSoundEmitter extends zombie.characters.BaseCharacterSoundEmitter {}
  /** @customConstructor BaseSoundBank.new */
  export class BaseSoundBank extends zombie.audio.BaseSoundBank {}
  /** @customConstructor BaseSoundEmitter.new */
  export class BaseSoundEmitter extends zombie.audio.BaseSoundEmitter {}
  /** @customConstructor BaseSoundManager.new */
  export class BaseSoundManager extends zombie.BaseSoundManager {}
  /** @customConstructor BaseVehicle.new */
  export class BaseVehicle extends zombie.vehicles.BaseVehicle {}
  /** @customConstructor BaseVisual.new */
  export class BaseVisual extends zombie.core.skinnedmodel.visual.BaseVisual {}
  /** @customConstructor BeardStyle.new */
  export class BeardStyle extends zombie.core.skinnedmodel.population.BeardStyle {}
  /** @customConstructor BeardStyles.new */
  export class BeardStyles extends zombie.core.skinnedmodel.population.BeardStyles {}
  /** @customConstructor BehaviorResult.new */
  export class BehaviorResult extends zombie.vehicles.PathFindBehavior2$BehaviorResult {}
  /** @customConstructor BentFences.new */
  export class BentFences extends zombie.iso.BentFences {}
  /** @customConstructor BloodBodyPartType.new */
  export class BloodBodyPartType extends zombie.characterTextures.BloodBodyPartType {}
  /** @customConstructor BloodClothingType.new */
  export class BloodClothingType extends zombie.characterTextures.BloodClothingType {}
  /** @customConstructor BodyDamage.new */
  export class BodyDamage extends zombie.characters.BodyDamage.BodyDamage {}
  /** @customConstructor BodyDamageSync.new */
  export class BodyDamageSync extends zombie.network.BodyDamageSync {}
  /** @customConstructor BodyLocation.new */
  export class BodyLocation extends zombie.characters.IsoGameCharacter$BodyLocation {}
  /** @customConstructor BodyLocationGroup.new */
  export class BodyLocationGroup extends zombie.characters.WornItems.BodyLocationGroup {}
  /** @customConstructor BodyLocations.new */
  export class BodyLocations extends zombie.characters.WornItems.BodyLocations {}
  /** @customConstructor BodyPart.new */
  export class BodyPart extends zombie.characters.BodyDamage.BodyPart {}
  /** @customConstructor BodyPartLast.new */
  export class BodyPartLast extends zombie.characters.BodyDamage.BodyPartLast {}
  /** @customConstructor BodyPartType.new */
  export class BodyPartType extends zombie.characters.BodyDamage.BodyPartType {}
  /** @customConstructor BoneAxis.new */
  export class BoneAxis extends zombie.core.skinnedmodel.animation.BoneAxis {}
  /** @customConstructor BooleanConfigOption.new */
  export class BooleanConfigOption extends zombie.config.BooleanConfigOption {}
  /** @customConstructor BooleanDebugOption.new */
  export class BooleanDebugOption extends zombie.gameStates.AnimationViewerState$BooleanDebugOption {}
  /** @customConstructor BooleanGrid.new */
  export class BooleanGrid extends zombie.core.utils.BooleanGrid {}
  /** @customConstructor BooleanSandboxOption.new */
  export class BooleanSandboxOption extends zombie.SandboxOptions$BooleanSandboxOption {}
  /** @customConstructor BooleanServerOption.new */
  export class BooleanServerOption extends zombie.network.ServerOptions$BooleanServerOption {}
  /** @customConstructor BrokenFences.new */
  export class BrokenFences extends zombie.iso.BrokenFences {}
  /** @customConstructor BufferedRandomAccessFile.new */
  export class BufferedRandomAccessFile extends zombie.util.BufferedRandomAccessFile {}
  /** @customConstructor BufferedReader.new */
  export class BufferedReader extends java.io.BufferedReader {}
  /** @customConstructor BufferedWriter.new */
  export class BufferedWriter extends java.io.BufferedWriter {}
  /** @customConstructor BuildingDef.new */
  export class BuildingDef extends zombie.iso.BuildingDef {}
  /** @customConstructor BuildingScore.new */
  export class BuildingScore extends zombie.iso.areas.BuildingScore {}
  /** @customConstructor BuildingSearchCriteria.new */
  export class BuildingSearchCriteria extends zombie.iso.IsoCell$BuildingSearchCriteria {}
  /** @customConstructor BulletVariables.new */
  export class BulletVariables extends zombie.core.physics.CarController$BulletVariables {}
  /** @customConstructor BurntToDeath.new */
  export class BurntToDeath extends zombie.ai.states.BurntToDeath {}
  /** @customConstructor ByteBufferWriter.new */
  export class ByteBufferWriter extends zombie.core.network.ByteBufferWriter {}
  /** @customConstructor CGlobalObject.new */
  export class CGlobalObject extends zombie.globalObjects.CGlobalObject {}
  /** @customConstructor CGlobalObjectSystem.new */
  export class CGlobalObjectSystem extends zombie.globalObjects.CGlobalObjectSystem {}
  /** @customConstructor CGlobalObjects.new */
  export class CGlobalObjects extends zombie.globalObjects.CGlobalObjects {}
  /** @customConstructor CallbackGetStrongTyped.new */
  export class CallbackGetStrongTyped extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped {}
  /** @customConstructor CallbackSetStrongTyped.new */
  export class CallbackSetStrongTyped extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped {}
  /** @customConstructor CarController.new */
  export class CarController extends zombie.core.physics.CarController {}
  /** @customConstructor CellGetSquare.new */
  export class CellGetSquare extends zombie.iso.IsoGridSquare$CellGetSquare {}
  /** @customConstructor ChannelCategory.new */
  export class ChannelCategory extends zombie.radio.ChannelCategory {}
  /** @customConstructor CharDef.new */
  export class CharDef extends zombie.core.fonts.AngelCodeFont$CharDef {}
  /** @customConstructor CharDefTexture.new */
  export class CharDefTexture extends zombie.core.fonts.AngelCodeFont$CharDefTexture {}
  /** @customConstructor CharacterActionAnims.new */
  export class CharacterActionAnims extends zombie.characters.CharacterActionAnims {}
  /** @customConstructor CharacterMask.new */
  export class CharacterMask extends zombie.core.skinnedmodel.model.CharacterMask {}
  /** @customConstructor CharacterSoundEmitter.new */
  export class CharacterSoundEmitter extends zombie.characters.CharacterSoundEmitter {}
  /** @customConstructor CharacterTraits.new */
  export class CharacterTraits extends zombie.characters.IsoGameCharacter$CharacterTraits {}
  /** @customConstructor ChatBase.new */
  export class ChatBase extends zombie.chat.ChatBase {}
  /** @customConstructor ChatElement.new */
  export class ChatElement extends zombie.chat.ChatElement {}
  /** @customConstructor ChatElementOwner.new */
  export class ChatElementOwner extends zombie.chat.ChatElementOwner {}
  /** @customConstructor ChatMessage.new */
  export class ChatMessage extends zombie.chat.ChatMessage {}
  /** @customConstructor ChatMode.new */
  export class ChatMode extends zombie.chat.ChatMode {}
  /** @customConstructor ChatSettings.new */
  export class ChatSettings extends zombie.chat.ChatSettings {}
  /** @customConstructor ChatTab.new */
  export class ChatTab extends zombie.chat.ChatTab {}
  /** @customConstructor ChatType.new */
  export class ChatType extends zombie.network.chat.ChatType {}
  /** @customConstructor Checks.new */
  export class Checks extends zombie.debug.DebugOptions$Checks {}
  /** @customConstructor ChecksumState.new */
  export class ChecksumState extends zombie.core.raknet.UdpConnection$ChecksumState {}
  /** @customConstructor ChooseGameInfo.new */
  export class ChooseGameInfo extends zombie.gameStates.ChooseGameInfo {}
  /** @customConstructor Chunk.new */
  export class Chunk extends zombie.erosion.ErosionData$Chunk {}
  /** @customConstructor ChunkData.new */
  export class ChunkData extends zombie.audio.ObjectAmbientEmitters$ChunkData {}
  /** @customConstructor CircleIsoMarker.new */
  export class CircleIsoMarker extends zombie.iso.IsoMarkers$CircleIsoMarker {}
  /** @customConstructor CircleStencilShader.new */
  export class CircleStencilShader extends zombie.iso.IsoGridSquare$CircleStencilShader {}
  /** @customConstructor ClickObject.new */
  export class ClickObject extends zombie.iso.IsoObjectPicker$ClickObject {}
  /** @customConstructor ClientChunkRequest.new */
  export class ClientChunkRequest extends zombie.network.ClientChunkRequest {}
  /** @customConstructor ClientControls.new */
  export class ClientControls extends zombie.core.physics.CarController$ClientControls {}
  /** @customConstructor ClientServerMap.new */
  export class ClientServerMap extends zombie.network.ClientServerMap {}
  /** @customConstructor ClimateBool.new */
  export class ClimateBool extends zombie.iso.weather.ClimateManager$ClimateBool {}
  /** @customConstructor ClimateColor.new */
  export class ClimateColor extends zombie.iso.weather.ClimateManager$ClimateColor {}
  /** @customConstructor ClimateColorInfo.new */
  export class ClimateColorInfo extends zombie.iso.weather.ClimateColorInfo {}
  /** @customConstructor ClimateFloat.new */
  export class ClimateFloat extends zombie.iso.weather.ClimateManager$ClimateFloat {}
  /** @customConstructor ClimateForecaster.new */
  export class ClimateForecaster extends zombie.iso.weather.ClimateForecaster {}
  /** @customConstructor ClimateHistory.new */
  export class ClimateHistory extends zombie.iso.weather.ClimateHistory {}
  /** @customConstructor ClimateManager.new */
  export class ClimateManager extends zombie.iso.weather.ClimateManager {}
  /** @customConstructor ClimateMoon.new */
  export class ClimateMoon extends zombie.iso.weather.ClimateMoon {}
  /** @customConstructor ClimateNetAuth.new */
  export class ClimateNetAuth extends zombie.iso.weather.ClimateManager$ClimateNetAuth {}
  /** @customConstructor ClimateValues.new */
  export class ClimateValues extends zombie.iso.weather.ClimateValues {}
  /** @customConstructor ClimbDownSheetRopeState.new */
  export class ClimbDownSheetRopeState extends zombie.ai.states.ClimbDownSheetRopeState {}
  /** @customConstructor ClimbOverFenceState.new */
  export class ClimbOverFenceState extends zombie.ai.states.ClimbOverFenceState {}
  /** @customConstructor ClimbOverWallState.new */
  export class ClimbOverWallState extends zombie.ai.states.ClimbOverWallState {}
  /** @customConstructor ClimbSheetRopeState.new */
  export class ClimbSheetRopeState extends zombie.ai.states.ClimbSheetRopeState {}
  /** @customConstructor ClimbThroughWindowState.new */
  export class ClimbThroughWindowState extends zombie.ai.states.ClimbThroughWindowState {}
  /** @customConstructor Clipboard.new */
  export class Clipboard extends zombie.core.Clipboard {}
  /** @customConstructor Clock.new */
  export class Clock extends zombie.ui.Clock {}
  /** @customConstructor CloseWindowState.new */
  export class CloseWindowState extends zombie.ai.states.CloseWindowState {}
  /** @customConstructor Clothing.new */
  export class Clothing extends zombie.inventory.types.Clothing {}
  /** @customConstructor ClothingItem.new */
  export class ClothingItem extends zombie.core.skinnedmodel.population.ClothingItem {}
  /** @customConstructor ClothingItemReference.new */
  export class ClothingItemReference extends zombie.core.skinnedmodel.population.ClothingItemReference {}
  /** @customConstructor ClothingPatch.new */
  export class ClothingPatch extends zombie.inventory.types.Clothing$ClothingPatch {}
  /** @customConstructor ClothingPatchFabricType.new */
  export class ClothingPatchFabricType extends zombie.inventory.types.Clothing$ClothingPatchFabricType {}
  /** @customConstructor ClothingWetness.new */
  export class ClothingWetness extends zombie.characters.ClothingWetness {}
  /** @customConstructor Color.new */
  export class Color extends zombie.core.Color {}
  /** @customConstructor ColorInfo.new */
  export class ColorInfo extends zombie.core.textures.ColorInfo {}
  /** @customConstructor ColorRGB.new */
  export class ColorRGB extends zombie.characters.HaloTextHelper$ColorRGB {}
  /** @customConstructor ColorStop.new */
  export class ColorStop extends zombie.worldMap.styles.WorldMapStyleLayer$ColorStop {}
  /** @customConstructor Colors.new */
  export class Colors extends zombie.core.Colors {}
  /** @customConstructor ComboItem.new */
  export class ComboItem extends zombie.inventory.types.ComboItem {}
  /** @customConstructor ConfigOption.new */
  export class ConfigOption extends zombie.config.ConfigOption {}
  /** @customConstructor ConnectToServerState.new */
  export class ConnectToServerState extends zombie.gameStates.ConnectToServerState {}
  /** @customConstructor Container.new */
  export class Container extends zombie.scripting.objects.VehicleScript$Container {}
  /** @customConstructor ContainerOverlays.new */
  export class ContainerOverlays extends zombie.iso.ContainerOverlays {}
  /** @customConstructor Core.new */
  export class Core extends zombie.core.Core {}
  /** @customConstructor CrawlingZombieTurnState.new */
  export class CrawlingZombieTurnState extends zombie.ai.states.CrawlingZombieTurnState {}
  /** @customConstructor Credit.new */
  export class Credit extends zombie.gameStates.MainScreenState$Credit {}
  /** @customConstructor CustomComparator.new */
  export class CustomComparator extends zombie.ai.states.SwipeStatePlayer$CustomComparator {}
  /** @customConstructor CustomSandboxOption.new */
  export class CustomSandboxOption extends zombie.sandbox.CustomSandboxOption {}
  /** @customConstructor DBResult.new */
  export class DBResult extends zombie.network.DBResult {}
  /** @customConstructor DBTicket.new */
  export class DBTicket extends zombie.network.DBTicket {}
  /** @customConstructor DataCell.new */
  export class DataCell extends zombie.iso.areas.isoregion.data.DataCell {}
  /** @customConstructor DataChunk.new */
  export class DataChunk extends zombie.iso.areas.isoregion.data.DataChunk {}
  /** @customConstructor DataInputStream.new */
  export class DataInputStream extends java.io.DataInputStream {}
  /** @customConstructor DataOutputStream.new */
  export class DataOutputStream extends java.io.DataOutputStream {}
  /** @customConstructor DataPoint.new */
  export class DataPoint extends zombie.radio.StorySounds.DataPoint {}
  /** @customConstructor DayForecast.new */
  export class DayForecast extends zombie.iso.weather.ClimateForecaster$DayForecast {}
  /** @customConstructor DayInfo.new */
  export class DayInfo extends zombie.iso.weather.ClimateManager$DayInfo {}
  /** @customConstructor DeadCharacterPacket.new */
  export class DeadCharacterPacket extends zombie.network.packets.DeadCharacterPacket {}
  /** @customConstructor Debug.new */
  export class Debug extends zombie.erosion.ErosionConfig$Debug {}
  /** @customConstructor DebugChunkState.new */
  export class DebugChunkState extends zombie.gameStates.DebugChunkState {}
  /** @customConstructor DebugGlobalObjectState.new */
  export class DebugGlobalObjectState extends zombie.gameStates.DebugGlobalObjectState {}
  /** @customConstructor DebugLog.new */
  export class DebugLog extends zombie.debug.DebugLog {}
  /** @customConstructor DebugLogStream.new */
  export class DebugLogStream extends zombie.debug.DebugLogStream {}
  /** @customConstructor DebugOptions.new */
  export class DebugOptions extends zombie.debug.DebugOptions {}
  /** @customConstructor DebugType.new */
  export class DebugType extends zombie.debug.DebugType {}
  /** @customConstructor DeferedTextDraw.new */
  export class DeferedTextDraw extends zombie.ui.TextManager$DeferedTextDraw {}
  /** @customConstructor Descriptor.new */
  export class Descriptor extends zombie.SharedDescriptors$Descriptor {}
  /** @customConstructor DeviceData.new */
  export class DeviceData extends zombie.radio.devices.DeviceData {}
  /** @customConstructor DeviceList.new */
  export class DeviceList extends zombie.fileSystem.DeviceList {}
  /** @customConstructor DevicePresets.new */
  export class DevicePresets extends zombie.radio.devices.DevicePresets {}
  /** @customConstructor DirectionArrow.new */
  export class DirectionArrow extends zombie.iso.WorldMarkers$DirectionArrow {}
  /** @customConstructor Door.new */
  export class Door extends zombie.scripting.objects.VehicleScript$Door {}
  /** @customConstructor DoorLogic.new */
  export class DoorLogic extends zombie.audio.ObjectAmbientEmitters$DoorLogic {}
  /** @customConstructor DoorType.new */
  export class DoorType extends zombie.iso.objects.IsoDoor$DoorType {}
  /** @customConstructor DoubleConfigOption.new */
  export class DoubleConfigOption extends zombie.config.DoubleConfigOption {}
  /** @customConstructor DoubleSandboxOption.new */
  export class DoubleSandboxOption extends zombie.SandboxOptions$DoubleSandboxOption {}
  /** @customConstructor DoubleServerOption.new */
  export class DoubleServerOption extends zombie.network.ServerOptions$DoubleServerOption {}
  /** @customConstructor Drainable.new */
  export class Drainable extends zombie.inventory.types.Drainable {}
  /** @customConstructor DrainableComboItem.new */
  export class DrainableComboItem extends zombie.inventory.types.DrainableComboItem {}
  /** @customConstructor Drawer.new */
  export class Drawer extends zombie.worldMap.WorldMapRenderer$Drawer {}
  /** @customConstructor DummyCharacterSoundEmitter.new */
  export class DummyCharacterSoundEmitter extends zombie.characters.DummyCharacterSoundEmitter {}
  /** @customConstructor DummySoundBank.new */
  export class DummySoundBank extends zombie.audio.DummySoundBank {}
  /** @customConstructor DummySoundEmitter.new */
  export class DummySoundEmitter extends zombie.audio.DummySoundEmitter {}
  /** @customConstructor DummySoundManager.new */
  export class DummySoundManager extends zombie.DummySoundManager {}
  /** @customConstructor DynamicRadioChannel.new */
  export class DynamicRadioChannel extends zombie.radio.scripting.DynamicRadioChannel {}
  /** @customConstructor EditVehicleState.new */
  export class EditVehicleState extends zombie.vehicles.EditVehicleState {}
  /** @customConstructor EffectLight.new */
  export class EffectLight extends zombie.core.skinnedmodel.model.ModelInstance$EffectLight {}
  /** @customConstructor Element.new */
  export class Element extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element {}
  /** @customConstructor EmitterType.new */
  export class EmitterType extends fmod.fmod.EmitterType {}
  /** @customConstructor EnumConfigOption.new */
  export class EnumConfigOption extends zombie.config.EnumConfigOption {}
  /** @customConstructor EnumMap.new */
  export class EnumMap<any, any> extends java.util.EnumMap<any, any> {}
  /** @customConstructor EnumSandboxOption.new */
  export class EnumSandboxOption extends zombie.SandboxOptions$EnumSandboxOption {}
  /** @customConstructor ErosionConfig.new */
  export class ErosionConfig extends zombie.erosion.ErosionConfig {}
  /** @customConstructor ErosionData.new */
  export class ErosionData extends zombie.erosion.ErosionData {}
  /** @customConstructor ErosionMain.new */
  export class ErosionMain extends zombie.erosion.ErosionMain {}
  /** @customConstructor ErosionSeason.new */
  export class ErosionSeason extends zombie.erosion.season.ErosionSeason {}
  /** @customConstructor Event.new */
  export class Event extends zombie.Lua.Event {}
  /** @customConstructor EventSound.new */
  export class EventSound extends zombie.radio.StorySounds.EventSound {}
  /** @customConstructor EvolvedRecipe.new */
  export class EvolvedRecipe extends zombie.scripting.objects.EvolvedRecipe {}
  /** @customConstructor ExitOption.new */
  export class ExitOption extends zombie.radio.scripting.RadioScript$ExitOption {}
  /** @customConstructor ExplosionMode.new */
  export class ExplosionMode extends zombie.iso.objects.IsoTrap$ExplosionMode {}
  /** @customConstructor Exposer.new */
  export class Exposer extends zombie.Lua.LuaManager$Exposer {}
  /** @customConstructor FMODAudio.new */
  export class FMODAudio extends fmod.fmod.FMODAudio {}
  /** @customConstructor FMODParameter.new */
  export class FMODParameter extends zombie.audio.FMODParameter {}
  /** @customConstructor FMODParameterList.new */
  export class FMODParameterList extends zombie.audio.FMODParameterList {}
  /** @customConstructor FMODSoundBank.new */
  export class FMODSoundBank extends fmod.fmod.FMODSoundBank {}
  /** @customConstructor FMODSoundEmitter.new */
  export class FMODSoundEmitter extends fmod.fmod.FMODSoundEmitter {}
  /** @customConstructor Faction.new */
  export class Faction extends zombie.characters.Faction {}
  /** @customConstructor FakeDeadAttackState.new */
  export class FakeDeadAttackState extends zombie.ai.states.FakeDeadAttackState {}
  /** @customConstructor FakeDeadZombieState.new */
  export class FakeDeadZombieState extends zombie.ai.states.FakeDeadZombieState {}
  /** @customConstructor FileSeekMode.new */
  export class FileSeekMode extends zombie.fileSystem.FileSeekMode {}
  /** @customConstructor FileSystem.new */
  export class FileSystem extends zombie.fileSystem.FileSystem {}
  /** @customConstructor FileTask.new */
  export class FileTask extends zombie.fileSystem.FileTask {}
  /** @customConstructor FilterArgs.new */
  export class FilterArgs extends zombie.worldMap.styles.WorldMapStyleLayer$FilterArgs {}
  /** @customConstructor FishingState.new */
  export class FishingState extends zombie.ai.states.FishingState {}
  /** @customConstructor Fitness.new */
  export class Fitness extends zombie.characters.BodyDamage.Fitness {}
  /** @customConstructor FitnessExercise.new */
  export class FitnessExercise extends zombie.characters.BodyDamage.Fitness$FitnessExercise {}
  /** @customConstructor FitnessState.new */
  export class FitnessState extends zombie.ai.states.FitnessState {}
  /** @customConstructor Fixer.new */
  export class Fixer extends zombie.scripting.objects.Fixing$Fixer {}
  /** @customConstructor FixerSkill.new */
  export class FixerSkill extends zombie.scripting.objects.Fixing$FixerSkill {}
  /** @customConstructor Fixing.new */
  export class Fixing extends zombie.scripting.objects.Fixing {}
  /** @customConstructor FixingManager.new */
  export class FixingManager extends zombie.inventory.FixingManager {}
  /** @customConstructor Flare.new */
  export class Flare extends zombie.iso.weather.WorldFlares$Flare {}
  /** @customConstructor FloatList.new */
  export class FloatList extends zombie.core.Styles.FloatList {}
  /** @customConstructor FloatStop.new */
  export class FloatStop extends zombie.worldMap.styles.WorldMapStyleLayer$FloatStop {}
  /** @customConstructor FontSize.new */
  export class FontSize extends zombie.chat.ChatSettings$FontSize {}
  /** @customConstructor Food.new */
  export class Food extends zombie.inventory.types.Food {}
  /** @customConstructor ForecastValue.new */
  export class ForecastValue extends zombie.iso.weather.ClimateForecaster$ForecastValue {}
  /** @customConstructor Frame.new */
  export class Frame extends zombie.iso.IsoWorld$Frame {}
  /** @customConstructor FrameLightBlendStatus.new */
  export class FrameLightBlendStatus extends zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus {}
  /** @customConstructor FrameLightInfo.new */
  export class FrameLightInfo extends zombie.core.skinnedmodel.model.ModelInstance$FrameLightInfo {}
  /** @customConstructor FrameState.new */
  export class FrameState extends zombie.iso.IsoCamera$FrameState {}
  /** @customConstructor FridgeHumLogic.new */
  export class FridgeHumLogic extends zombie.audio.ObjectAmbientEmitters$FridgeHumLogic {}
  /** @customConstructor GameCharacterAIBrain.new */
  export class GameCharacterAIBrain extends zombie.ai.GameCharacterAIBrain {}
  /** @customConstructor GameClient.new */
  export class GameClient extends zombie.network.GameClient {}
  /** @customConstructor GameKeyboard.new */
  export class GameKeyboard extends zombie.input.GameKeyboard {}
  /** @customConstructor GameLoadingState.new */
  export class GameLoadingState extends zombie.gameStates.GameLoadingState {}
  /** @customConstructor GameMode.new */
  export class GameMode extends zombie.radio.GameMode {}
  /** @customConstructor GameSound.new */
  export class GameSound extends zombie.audio.GameSound {}
  /** @customConstructor GameSoundClip.new */
  export class GameSoundClip extends zombie.audio.GameSoundClip {}
  /** @customConstructor GameSoundScript.new */
  export class GameSoundScript extends zombie.scripting.objects.GameSoundScript {}
  /** @customConstructor GameSounds.new */
  export class GameSounds extends zombie.GameSounds {}
  /** @customConstructor GameState.new */
  export class GameState extends zombie.gameStates.GameState {}
  /** @customConstructor GameStateMachine.new */
  export class GameStateMachine extends zombie.gameStates.GameStateMachine {}
  /** @customConstructor GameTime.new */
  export class GameTime extends zombie.GameTime {}
  /** @customConstructor GameVersion.new */
  export class GameVersion extends zombie.core.GameVersion {}
  /** @customConstructor GameWindow.new */
  export class GameWindow extends zombie.GameWindow {}
  /** @customConstructor GearInfo.new */
  export class GearInfo extends zombie.core.physics.CarController$GearInfo {}
  /** @customConstructor GenericDrawer.new */
  export class GenericDrawer extends zombie.core.textures.TextureDraw$GenericDrawer {}
  /** @customConstructor GenericSpriteRenderState.new */
  export class GenericSpriteRenderState extends zombie.core.sprite.GenericSpriteRenderState {}
  /** @customConstructor GeometryData.new */
  export class GeometryData extends zombie.core.Styles.GeometryData {}
  /** @customConstructor GetSquare.new */
  export class GetSquare extends zombie.iso.IsoGridSquare$GetSquare {}
  /** @customConstructor GibletType.new */
  export class GibletType extends zombie.iso.objects.IsoZombieGiblets$GibletType {}
  /** @customConstructor GlobalObject.new */
  export class GlobalObject extends zombie.Lua.LuaManager$GlobalObject {}
  /** @customConstructor GlobalObjectSystem.new */
  export class GlobalObjectSystem extends zombie.globalObjects.GlobalObjectSystem {}
  /** @customConstructor GridSquareMarker.new */
  export class GridSquareMarker extends zombie.iso.WorldMarkers$GridSquareMarker {}
  /** @customConstructor HUDButton.new */
  export class HUDButton extends zombie.ui.HUDButton {}
  /** @customConstructor HairStyle.new */
  export class HairStyle extends zombie.core.skinnedmodel.population.HairStyle {}
  /** @customConstructor HairStyles.new */
  export class HairStyles extends zombie.core.skinnedmodel.population.HairStyles {}
  /** @customConstructor HaloTextHelper.new */
  export class HaloTextHelper extends zombie.characters.HaloTextHelper {}
  /** @customConstructor HandWeapon.new */
  export class HandWeapon extends zombie.inventory.types.HandWeapon {}
  /** @customConstructor HashMap.new */
  export class HashMap<any, any> extends java.util.HashMap<any, any> {}
  /** @customConstructor HitCharacterPacket.new */
  export class HitCharacterPacket extends zombie.network.packets.hit.HitCharacterPacket {}
  /** @customConstructor HitInfo.new */
  export class HitInfo extends zombie.network.packets.hit.HitInfo {}
  /** @customConstructor HitReactionNetworkAI.new */
  export class HitReactionNetworkAI extends zombie.characters.HitReactionNetworkAI {}
  /** @customConstructor HitType.new */
  export class HitType extends zombie.network.packets.hit.HitCharacterPacket$HitType {}
  /** @customConstructor HitVars.new */
  export class HitVars extends zombie.vehicles.BaseVehicle$HitVars {}
  /** @customConstructor HumanCorpse.new */
  export class HumanCorpse extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase$HumanCorpse {}
  /** @customConstructor HumanVisual.new */
  export class HumanVisual extends zombie.core.skinnedmodel.visual.HumanVisual {}
  /** @customConstructor IAnimEventCallback.new */
  export class IAnimEventCallback extends zombie.core.skinnedmodel.advancedanimation.IAnimEventCallback {}
  /** @customConstructor IAnimListener.new */
  export class IAnimListener extends zombie.core.skinnedmodel.animation.IAnimListener {}
  /** @customConstructor IAnimatable.new */
  export class IAnimatable extends zombie.core.skinnedmodel.advancedanimation.IAnimatable {}
  /** @customConstructor IAnimationVariableSlot.new */
  export class IAnimationVariableSlot extends zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot {}
  /** @customConstructor IAnimationVariableSource.new */
  export class IAnimationVariableSource extends zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource {}
  /** @customConstructor IChunkRegion.new */
  export class IChunkRegion extends zombie.iso.areas.isoregion.regions.IChunkRegion {}
  /** @customConstructor IDebugLogFormatter.new */
  export class IDebugLogFormatter extends zombie.debug.IDebugLogFormatter {}
  /** @customConstructor IDebugOption.new */
  export class IDebugOption extends zombie.debug.options.IDebugOption {}
  /** @customConstructor IDebugOptionGroup.new */
  export class IDebugOptionGroup extends zombie.debug.options.IDebugOptionGroup {}
  /** @customConstructor IElementSpawner.new */
  export class IElementSpawner extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$IElementSpawner {}
  /** @customConstructor IFile.new */
  export class IFile extends zombie.fileSystem.IFile {}
  /** @customConstructor IFileDevice.new */
  export class IFileDevice extends zombie.fileSystem.IFileDevice {}
  /** @customConstructor IFileTask2Callback.new */
  export class IFileTask2Callback extends zombie.fileSystem.IFileTask2Callback {}
  /** @customConstructor IFileTaskCallback.new */
  export class IFileTaskCallback extends zombie.fileSystem.IFileTaskCallback {}
  /** @customConstructor IGLFramebufferObject.new */
  export class IGLFramebufferObject extends zombie.core.textures.IGLFramebufferObject {}
  /** @customConstructor IHumanVisual.new */
  export class IHumanVisual extends zombie.core.skinnedmodel.visual.IHumanVisual {}
  /** @customConstructor ILighting.new */
  export class ILighting extends zombie.iso.IsoGridSquare$ILighting {}
  /** @customConstructor IPathfinder.new */
  export class IPathfinder extends zombie.vehicles.PolygonalMap2$IPathfinder {}
  /** @customConstructor IPooledObject.new */
  export class IPooledObject extends zombie.util.IPooledObject {}
  /** @customConstructor IShaderProgramListener.new */
  export class IShaderProgramListener extends zombie.core.opengl.IShaderProgramListener {}
  /** @customConstructor IStatePermissions.new */
  export class IStatePermissions extends zombie.ai.permission.IStatePermissions {}
  /** @customConstructor ITexture.new */
  export class ITexture extends zombie.interfaces.ITexture {}
  /** @customConstructor IWorldMapStyleFilter.new */
  export class IWorldMapStyleFilter extends zombie.worldMap.styles.WorldMapStyleLayer$IWorldMapStyleFilter {}
  /** @customConstructor IWorldRegion.new */
  export class IWorldRegion extends zombie.iso.areas.isoregion.regions.IWorldRegion {}
  /** @customConstructor IdleState.new */
  export class IdleState extends zombie.ai.states.IdleState {}
  /** @customConstructor ImageData.new */
  export class ImageData extends zombie.core.textures.ImageData {}
  /** @customConstructor ImagePyramid.new */
  export class ImagePyramid extends zombie.worldMap.ImagePyramid {}
  /** @customConstructor ImmutableColor.new */
  export class ImmutableColor extends zombie.core.ImmutableColor {}
  /** @customConstructor ImprovedFog.new */
  export class ImprovedFog extends zombie.iso.weather.fog.ImprovedFog {}
  /** @customConstructor Input.new */
  export class Input extends zombie.core.input.Input {}
  /** @customConstructor IntegerConfigOption.new */
  export class IntegerConfigOption extends zombie.config.IntegerConfigOption {}
  /** @customConstructor IntegerSandboxOption.new */
  export class IntegerSandboxOption extends zombie.SandboxOptions$IntegerSandboxOption {}
  /** @customConstructor IntegerServerOption.new */
  export class IntegerServerOption extends zombie.network.ServerOptions$IntegerServerOption {}
  /** @customConstructor InventoryContainer.new */
  export class InventoryContainer extends zombie.inventory.types.InventoryContainer {}
  /** @customConstructor InventoryItem.new */
  export class InventoryItem extends zombie.inventory.InventoryItem {}
  /** @customConstructor InventoryItemFactory.new */
  export class InventoryItemFactory extends zombie.inventory.InventoryItemFactory {}
  /** @customConstructor IsoAnim.new */
  export class IsoAnim extends zombie.iso.sprite.IsoAnim {}
  /** @customConstructor IsoBarbecue.new */
  export class IsoBarbecue extends zombie.iso.objects.IsoBarbecue {}
  /** @customConstructor IsoBarricade.new */
  export class IsoBarricade extends zombie.iso.objects.IsoBarricade {}
  /** @customConstructor IsoBrokenGlass.new */
  export class IsoBrokenGlass extends zombie.iso.objects.IsoBrokenGlass {}
  /** @customConstructor IsoBuilding.new */
  export class IsoBuilding extends zombie.iso.areas.IsoBuilding {}
  /** @customConstructor IsoCamera.new */
  export class IsoCamera extends zombie.iso.IsoCamera {}
  /** @customConstructor IsoCarBatteryCharger.new */
  export class IsoCarBatteryCharger extends zombie.iso.objects.IsoCarBatteryCharger {}
  /** @customConstructor IsoCell.new */
  export class IsoCell extends zombie.iso.IsoCell {}
  /** @customConstructor IsoChunk.new */
  export class IsoChunk extends zombie.iso.IsoChunk {}
  /** @customConstructor IsoChunkMap.new */
  export class IsoChunkMap extends zombie.iso.IsoChunkMap {}
  /** @customConstructor IsoChunkRegion.new */
  export class IsoChunkRegion extends zombie.iso.areas.isoregion.regions.IsoChunkRegion {}
  /** @customConstructor IsoClothingDryer.new */
  export class IsoClothingDryer extends zombie.iso.objects.IsoClothingDryer {}
  /** @customConstructor IsoClothingWasher.new */
  export class IsoClothingWasher extends zombie.iso.objects.IsoClothingWasher {}
  /** @customConstructor IsoCombinationWasherDryer.new */
  export class IsoCombinationWasherDryer extends zombie.iso.objects.IsoCombinationWasherDryer {}
  /** @customConstructor IsoCompost.new */
  export class IsoCompost extends zombie.iso.objects.IsoCompost {}
  /** @customConstructor IsoCurtain.new */
  export class IsoCurtain extends zombie.iso.objects.IsoCurtain {}
  /** @customConstructor IsoDeadBody.new */
  export class IsoDeadBody extends zombie.iso.objects.IsoDeadBody {}
  /** @customConstructor IsoDirectionSet.new */
  export class IsoDirectionSet extends zombie.iso.IsoDirectionSet {}
  /** @customConstructor IsoDirections.new */
  export class IsoDirections extends zombie.iso.IsoDirections {}
  /** @customConstructor IsoDoor.new */
  export class IsoDoor extends zombie.iso.objects.IsoDoor {}
  /** @customConstructor IsoDummyCameraCharacter.new */
  export class IsoDummyCameraCharacter extends zombie.characters.IsoDummyCameraCharacter {}
  /** @customConstructor IsoFire.new */
  export class IsoFire extends zombie.iso.objects.IsoFire {}
  /** @customConstructor IsoFireManager.new */
  export class IsoFireManager extends zombie.iso.objects.IsoFireManager {}
  /** @customConstructor IsoFireplace.new */
  export class IsoFireplace extends zombie.iso.objects.IsoFireplace {}
  /** @customConstructor IsoFlagType.new */
  export class IsoFlagType extends zombie.iso.SpriteDetails.IsoFlagType {}
  /** @customConstructor IsoGameCharacter.new */
  export class IsoGameCharacter extends zombie.characters.IsoGameCharacter {}
  /** @customConstructor IsoGenerator.new */
  export class IsoGenerator extends zombie.iso.objects.IsoGenerator {}
  /** @customConstructor IsoGridOcclusionData.new */
  export class IsoGridOcclusionData extends zombie.iso.IsoGridOcclusionData {}
  /** @customConstructor IsoGridSquare.new */
  export class IsoGridSquare extends zombie.iso.IsoGridSquare {}
  /** @customConstructor IsoHeatSource.new */
  export class IsoHeatSource extends zombie.iso.IsoHeatSource {}
  /** @customConstructor IsoJukebox.new */
  export class IsoJukebox extends zombie.iso.objects.IsoJukebox {}
  /** @customConstructor IsoLightSource.new */
  export class IsoLightSource extends zombie.iso.IsoLightSource {}
  /** @customConstructor IsoLightSwitch.new */
  export class IsoLightSwitch extends zombie.iso.objects.IsoLightSwitch {}
  /** @customConstructor IsoLivingCharacter.new */
  export class IsoLivingCharacter extends zombie.characters.IsoLivingCharacter {}
  /** @customConstructor IsoLot.new */
  export class IsoLot extends zombie.iso.IsoLot {}
  /** @customConstructor IsoLuaMover.new */
  export class IsoLuaMover extends zombie.iso.IsoLuaMover {}
  /** @customConstructor IsoMannequin.new */
  export class IsoMannequin extends zombie.iso.objects.IsoMannequin {}
  /** @customConstructor IsoMarker.new */
  export class IsoMarker extends zombie.iso.IsoMarkers$IsoMarker {}
  /** @customConstructor IsoMarkers.new */
  export class IsoMarkers extends zombie.iso.IsoMarkers {}
  /** @customConstructor IsoMetaCell.new */
  export class IsoMetaCell extends zombie.iso.IsoMetaCell {}
  /** @customConstructor IsoMetaChunk.new */
  export class IsoMetaChunk extends zombie.iso.IsoMetaChunk {}
  /** @customConstructor IsoMetaGrid.new */
  export class IsoMetaGrid extends zombie.iso.IsoMetaGrid {}
  /** @customConstructor IsoMolotovCocktail.new */
  export class IsoMolotovCocktail extends zombie.iso.objects.IsoMolotovCocktail {}
  /** @customConstructor IsoMovingObject.new */
  export class IsoMovingObject extends zombie.iso.IsoMovingObject {}
  /** @customConstructor IsoObject.new */
  export class IsoObject extends zombie.iso.IsoObject {}
  /** @customConstructor IsoObjectFactory.new */
  export class IsoObjectFactory extends zombie.iso.IsoObject$IsoObjectFactory {}
  /** @customConstructor IsoObjectPicker.new */
  export class IsoObjectPicker extends zombie.iso.IsoObjectPicker {}
  /** @customConstructor IsoObjectType.new */
  export class IsoObjectType extends zombie.iso.SpriteDetails.IsoObjectType {}
  /** @customConstructor IsoPlayer.new */
  export class IsoPlayer extends zombie.characters.IsoPlayer {}
  /** @customConstructor IsoPuddles.new */
  export class IsoPuddles extends zombie.iso.IsoPuddles {}
  /** @customConstructor IsoPuddlesGeometry.new */
  export class IsoPuddlesGeometry extends zombie.iso.IsoPuddlesGeometry {}
  /** @customConstructor IsoPushableObject.new */
  export class IsoPushableObject extends zombie.iso.IsoPushableObject {}
  /** @customConstructor IsoRadio.new */
  export class IsoRadio extends zombie.iso.objects.IsoRadio {}
  /** @customConstructor IsoRainSplash.new */
  export class IsoRainSplash extends zombie.iso.objects.IsoRainSplash {}
  /** @customConstructor IsoRaindrop.new */
  export class IsoRaindrop extends zombie.iso.objects.IsoRaindrop {}
  /** @customConstructor IsoRegionLog.new */
  export class IsoRegionLog extends zombie.iso.areas.isoregion.IsoRegionsLogger$IsoRegionLog {}
  /** @customConstructor IsoRegionLogType.new */
  export class IsoRegionLogType extends zombie.iso.areas.isoregion.IsoRegionLogType {}
  /** @customConstructor IsoRegions.new */
  export class IsoRegions extends zombie.iso.areas.isoregion.IsoRegions {}
  /** @customConstructor IsoRegionsLogger.new */
  export class IsoRegionsLogger extends zombie.iso.areas.isoregion.IsoRegionsLogger {}
  /** @customConstructor IsoRegionsRenderer.new */
  export class IsoRegionsRenderer extends zombie.iso.areas.isoregion.IsoRegionsRenderer {}
  /** @customConstructor IsoRoom.new */
  export class IsoRoom extends zombie.iso.areas.IsoRoom {}
  /** @customConstructor IsoSprite.new */
  export class IsoSprite extends zombie.iso.sprite.IsoSprite {}
  /** @customConstructor IsoSpriteGrid.new */
  export class IsoSpriteGrid extends zombie.iso.sprite.IsoSpriteGrid {}
  /** @customConstructor IsoSpriteInstance.new */
  export class IsoSpriteInstance extends zombie.iso.sprite.IsoSpriteInstance {}
  /** @customConstructor IsoSpriteManager.new */
  export class IsoSpriteManager extends zombie.iso.sprite.IsoSpriteManager {}
  /** @customConstructor IsoStackedWasherDryer.new */
  export class IsoStackedWasherDryer extends zombie.iso.objects.IsoStackedWasherDryer {}
  /** @customConstructor IsoStove.new */
  export class IsoStove extends zombie.iso.objects.IsoStove {}
  /** @customConstructor IsoSurvivor.new */
  export class IsoSurvivor extends zombie.characters.IsoSurvivor {}
  /** @customConstructor IsoTelevision.new */
  export class IsoTelevision extends zombie.iso.objects.IsoTelevision {}
  /** @customConstructor IsoThumpable.new */
  export class IsoThumpable extends zombie.iso.objects.IsoThumpable {}
  /** @customConstructor IsoTrap.new */
  export class IsoTrap extends zombie.iso.objects.IsoTrap {}
  /** @customConstructor IsoTree.new */
  export class IsoTree extends zombie.iso.objects.IsoTree {}
  /** @customConstructor IsoUtils.new */
  export class IsoUtils extends zombie.iso.IsoUtils {}
  /** @customConstructor IsoWaterGeometry.new */
  export class IsoWaterGeometry extends zombie.iso.IsoWaterGeometry {}
  /** @customConstructor IsoWaveSignal.new */
  export class IsoWaveSignal extends zombie.iso.objects.IsoWaveSignal {}
  /** @customConstructor IsoWeatherFX.new */
  export class IsoWeatherFX extends zombie.iso.weather.fx.IsoWeatherFX {}
  /** @customConstructor IsoWheelieBin.new */
  export class IsoWheelieBin extends zombie.iso.objects.IsoWheelieBin {}
  /** @customConstructor IsoWindow.new */
  export class IsoWindow extends zombie.iso.objects.IsoWindow {}
  /** @customConstructor IsoWindowFrame.new */
  export class IsoWindowFrame extends zombie.iso.objects.IsoWindowFrame {}
  /** @customConstructor IsoWorld.new */
  export class IsoWorld extends zombie.iso.IsoWorld {}
  /** @customConstructor IsoWorldInventoryObject.new */
  export class IsoWorldInventoryObject extends zombie.iso.objects.IsoWorldInventoryObject {}
  /** @customConstructor IsoWorldRegion.new */
  export class IsoWorldRegion extends zombie.iso.areas.isoregion.regions.IsoWorldRegion {}
  /** @customConstructor IsoZombie.new */
  export class IsoZombie extends zombie.characters.IsoZombie {}
  /** @customConstructor IsoZombieGiblets.new */
  export class IsoZombieGiblets extends zombie.iso.objects.IsoZombieGiblets {}
  /** @customConstructor Item.new */
  export class Item extends zombie.scripting.objects.Item {}
  /** @customConstructor ItemContainer.new */
  export class ItemContainer extends zombie.inventory.ItemContainer {}
  /** @customConstructor ItemPickerContainer.new */
  export class ItemPickerContainer extends zombie.inventory.ItemPickerJava$ItemPickerContainer {}
  /** @customConstructor ItemPickerItem.new */
  export class ItemPickerItem extends zombie.inventory.ItemPickerJava$ItemPickerItem {}
  /** @customConstructor ItemPickerJava.new */
  export class ItemPickerJava extends zombie.inventory.ItemPickerJava {}
  /** @customConstructor ItemPickerRoom.new */
  export class ItemPickerRoom extends zombie.inventory.ItemPickerJava$ItemPickerRoom {}
  /** @customConstructor ItemPickerUpgradeWeapons.new */
  export class ItemPickerUpgradeWeapons extends zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons {}
  /** @customConstructor ItemRecipe.new */
  export class ItemRecipe extends zombie.scripting.objects.ItemRecipe {}
  /** @customConstructor ItemReplacement.new */
  export class ItemReplacement extends zombie.scripting.objects.ItemReplacement {}
  /** @customConstructor ItemState.new */
  export class ItemState extends zombie.core.znet.SteamWorkshopItem$ItemState {}
  /** @customConstructor ItemType.new */
  export class ItemType extends zombie.inventory.ItemType {}
  /** @customConstructor ItemVisual.new */
  export class ItemVisual extends zombie.core.skinnedmodel.visual.ItemVisual {}
  /** @customConstructor ItemVisuals.new */
  export class ItemVisuals extends zombie.core.skinnedmodel.visual.ItemVisuals {}
  /** @customConstructor Iterator.new */
  export class Iterator<any> extends java.util.Iterator<any> {}
  /** @customConstructor JobType.new */
  export class JobType extends zombie.iso.IsoChunk$JobType {}
  /** @customConstructor Joypad.new */
  export class Joypad extends zombie.input.JoypadManager$Joypad {}
  /** @customConstructor JoypadManager.new */
  export class JoypadManager extends zombie.input.JoypadManager {}
  /** @customConstructor KahluaUtil.new */
  export class KahluaUtil extends se.krka.kahlua.vm.KahluaUtil {}
  /** @customConstructor Key.new */
  export class Key extends zombie.inventory.types.Key {}
  /** @customConstructor KeyRing.new */
  export class KeyRing extends zombie.inventory.types.KeyRing {}
  /** @customConstructor Keyboard.new */
  export class Keyboard extends org.lwjglx.input.Keyboard {}
  /** @customConstructor Keyframe.new */
  export class Keyframe extends zombie.core.skinnedmodel.animation.Keyframe {}
  /** @customConstructor KnownBlockedEdges.new */
  export class KnownBlockedEdges extends zombie.ai.KnownBlockedEdges {}
  /** @customConstructor Language.new */
  export class Language extends zombie.core.Language {}
  /** @customConstructor Layout.new */
  export class Layout extends zombie.ui.ObjectTooltip$Layout {}
  /** @customConstructor LayoutItem.new */
  export class LayoutItem extends zombie.ui.ObjectTooltip$LayoutItem {}
  /** @customConstructor LiangBarsky.new */
  export class LiangBarsky extends zombie.vehicles.PolygonalMap2$LiangBarsky {}
  /** @customConstructor LightBar.new */
  export class LightBar extends zombie.scripting.objects.VehicleScript$LightBar {}
  /** @customConstructor LightInfo.new */
  export class LightInfo extends zombie.characters.IsoGameCharacter$LightInfo {}
  /** @customConstructor Lighting.new */
  export class Lighting extends zombie.iso.IsoGridSquare$Lighting {}
  /** @customConstructor Line.new */
  export class Line extends zombie.iso.WorldMarkers$Line {}
  /** @customConstructor LinkedList.new */
  export class LinkedList<any> extends java.util.LinkedList<any> {}
  /** @customConstructor Literature.new */
  export class Literature extends zombie.inventory.types.Literature {}
  /** @customConstructor LiveAnimNode.new */
  export class LiveAnimNode extends zombie.core.skinnedmodel.advancedanimation.LiveAnimNode {}
  /** @customConstructor LoadingQueueState.new */
  export class LoadingQueueState extends zombie.gameStates.LoadingQueueState {}
  /** @customConstructor Location.new */
  export class Location extends zombie.characters.IsoGameCharacter$Location {}
  /** @customConstructor LogSeverity.new */
  export class LogSeverity extends zombie.debug.LogSeverity {}
  /** @customConstructor LosUtil.new */
  export class LosUtil extends zombie.iso.LosUtil {}
  /** @customConstructor LotHeader.new */
  export class LotHeader extends zombie.iso.LotHeader {}
  /** @customConstructor LuaEnvironment.new */
  export class LuaEnvironment extends zombie.vehicles.EditVehicleState$LuaEnvironment {}
  /** @customConstructor LuaEventManager.new */
  export class LuaEventManager extends zombie.Lua.LuaEventManager {}
  /** @customConstructor LuaFileWriter.new */
  export class LuaFileWriter extends zombie.Lua.LuaManager$GlobalObject$LuaFileWriter {}
  /** @customConstructor LuaManager.new */
  export class LuaManager extends zombie.Lua.LuaManager {}
  /** @customConstructor LuaTimedAction.new */
  export class LuaTimedAction extends zombie.characters.CharacterTimedActions.LuaTimedAction {}
  /** @customConstructor LuaTimedActionNew.new */
  export class LuaTimedActionNew extends zombie.characters.CharacterTimedActions.LuaTimedActionNew {}
  /** @customConstructor LungeState.new */
  export class LungeState extends zombie.ai.states.LungeState {}
  /** @customConstructor MPClientStatistic.new */
  export class MPClientStatistic extends zombie.core.raknet.UdpConnection$MPClientStatistic {}
  /** @customConstructor MainScreenState.new */
  export class MainScreenState extends zombie.gameStates.MainScreenState {}
  /** @customConstructor MannequinScript.new */
  export class MannequinScript extends zombie.scripting.objects.MannequinScript {}
  /** @customConstructor MannequinZone.new */
  export class MannequinZone extends zombie.iso.objects.IsoMannequin$MannequinZone {}
  /** @customConstructor Map.new */
  export class Map extends zombie.SandboxOptions$Map {}
  /** @customConstructor MapGroups.new */
  export class MapGroups extends zombie.MapGroups {}
  /** @customConstructor MapItem.new */
  export class MapItem extends zombie.inventory.types.MapItem {}
  /** @customConstructor MapKnowledge.new */
  export class MapKnowledge extends zombie.ai.MapKnowledge {}
  /** @customConstructor MapObjects.new */
  export class MapObjects extends zombie.Lua.MapObjects {}
  /** @customConstructor Mask.new */
  export class Mask extends zombie.core.textures.Mask {}
  /** @customConstructor MasterVolume.new */
  export class MasterVolume extends zombie.audio.GameSound$MasterVolume {}
  /** @customConstructor Material.new */
  export class Material extends zombie.audio.parameters.ParameterMeleeHitSurface$Material {}
  /** @customConstructor Math.new */
  export class Math extends java.lang.Math {}
  /** @customConstructor Matrix4fObjectPool.new */
  export class Matrix4fObjectPool extends zombie.vehicles.BaseVehicle$Matrix4fObjectPool {}
  /** @customConstructor MediaData.new */
  export class MediaData extends zombie.radio.media.MediaData {}
  /** @customConstructor MediaLineData.new */
  export class MediaLineData extends zombie.radio.media.MediaData$MediaLineData {}
  /** @customConstructor MediaNameSorter.new */
  export class MediaNameSorter extends zombie.radio.media.RecordedMedia$MediaNameSorter {}
  /** @customConstructor MetaCell.new */
  export class MetaCell extends zombie.iso.IsoWorld$MetaCell {}
  /** @customConstructor MetaObject.new */
  export class MetaObject extends zombie.iso.MetaObject {}
  /** @customConstructor Metabolics.new */
  export class Metabolics extends zombie.characters.BodyDamage.Metabolics {}
  /** @customConstructor MinMaxPosition.new */
  export class MinMaxPosition extends zombie.vehicles.BaseVehicle$MinMaxPosition {}
  /** @customConstructor MipMapLevel.new */
  export class MipMapLevel extends zombie.core.textures.MipMapLevel {}
  /** @customConstructor Mod.new */
  export class Mod extends zombie.gameStates.ChooseGameInfo$Mod {}
  /** @customConstructor ModAnimations.new */
  export class ModAnimations extends zombie.core.skinnedmodel.ModelManager$ModAnimations {}
  /** @customConstructor ModData.new */
  export class ModData extends zombie.world.moddata.ModData {}
  /** @customConstructor ModalDialog.new */
  export class ModalDialog extends zombie.ui.ModalDialog {}
  /** @customConstructor Model.new */
  export class Model extends zombie.core.skinnedmodel.model.Model {}
  /** @customConstructor ModelAssetParams.new */
  export class ModelAssetParams extends zombie.core.skinnedmodel.model.Model$ModelAssetParams {}
  /** @customConstructor ModelAttachment.new */
  export class ModelAttachment extends zombie.scripting.objects.ModelAttachment {}
  /** @customConstructor ModelInfo.new */
  export class ModelInfo extends zombie.vehicles.BaseVehicle$ModelInfo {}
  /** @customConstructor ModelInstance.new */
  export class ModelInstance extends zombie.core.skinnedmodel.model.ModelInstance {}
  /** @customConstructor ModelInstanceRenderData.new */
  export class ModelInstanceRenderData extends zombie.core.skinnedmodel.model.ModelInstanceRenderData {}
  /** @customConstructor ModelInstanceTextureCreator.new */
  export class ModelInstanceTextureCreator extends zombie.core.skinnedmodel.model.ModelInstanceTextureCreator {}
  /** @customConstructor ModelInstanceTextureInitializer.new */
  export class ModelInstanceTextureInitializer extends zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer {}
  /** @customConstructor ModelManager.new */
  export class ModelManager extends zombie.core.skinnedmodel.ModelManager {}
  /** @customConstructor ModelScript.new */
  export class ModelScript extends zombie.scripting.objects.ModelScript {}
  /** @customConstructor ModelSlot.new */
  export class ModelSlot extends zombie.core.skinnedmodel.ModelManager$ModelSlot {}
  /** @customConstructor ModelSlotRenderData.new */
  export class ModelSlotRenderData extends zombie.core.skinnedmodel.model.ModelSlotRenderData {}
  /** @customConstructor ModelWeaponPart.new */
  export class ModelWeaponPart extends zombie.scripting.objects.ModelWeaponPart {}
  /** @customConstructor Moodle.new */
  export class Moodle extends zombie.characters.Moodles.Moodle {}
  /** @customConstructor MoodleType.new */
  export class MoodleType extends zombie.characters.Moodles.MoodleType {}
  /** @customConstructor Moodles.new */
  export class Moodles extends zombie.characters.Moodles.Moodles {}
  /** @customConstructor MoodlesUI.new */
  export class MoodlesUI extends zombie.ui.MoodlesUI {}
  /** @customConstructor MostTested.new */
  export class MostTested extends zombie.core.properties.PropertyContainer$MostTested {}
  /** @customConstructor Mouse.new */
  export class Mouse extends zombie.input.Mouse {}
  /** @customConstructor MovableRecipe.new */
  export class MovableRecipe extends zombie.scripting.objects.MovableRecipe {}
  /** @customConstructor MoveDeltaModifiers.new */
  export class MoveDeltaModifiers extends zombie.characters.MoveDeltaModifiers {}
  /** @customConstructor Moveable.new */
  export class Moveable extends zombie.inventory.types.Moveable {}
  /** @customConstructor MovementType.new */
  export class MovementType extends zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType {}
  /** @customConstructor Mover.new */
  export class Mover extends zombie.ai.astar.Mover {}
  /** @customConstructor MultiStageBuilding.new */
  export class MultiStageBuilding extends zombie.iso.MultiStageBuilding {}
  /** @customConstructor NPCData.new */
  export class NPCData extends zombie.vehicles.PathFindBehavior2$NPCData {}
  /** @customConstructor NetworkAIParams.new */
  export class NetworkAIParams extends zombie.network.NetworkAIParams {}
  /** @customConstructor NetworkCharacterAI.new */
  export class NetworkCharacterAI extends zombie.characters.NetworkCharacterAI {}
  /** @customConstructor NetworkTeleport.new */
  export class NetworkTeleport extends zombie.characters.NetworkTeleport {}
  /** @customConstructor NetworkTeleportDebug.new */
  export class NetworkTeleportDebug extends zombie.characters.NetworkTeleport$NetworkTeleportDebug {}
  /** @customConstructor NewHealthPanel.new */
  export class NewHealthPanel extends zombie.ui.NewHealthPanel {}
  /** @customConstructor NineGridTexture.new */
  export class NineGridTexture extends zombie.chat.NineGridTexture {}
  /** @customConstructor NoCircleStencilShader.new */
  export class NoCircleStencilShader extends zombie.iso.IsoGridSquare$NoCircleStencilShader {}
  /** @customConstructor NonBlockingHashMap.new */
  export class NonBlockingHashMap<any, any> extends zombie.core.Collections.NonBlockingHashMap<any, any> {}
  /** @customConstructor NonPvpZone.new */
  export class NonPvpZone extends zombie.iso.areas.NonPvpZone {}
  /** @customConstructor Nutrition.new */
  export class Nutrition extends zombie.characters.BodyDamage.Nutrition {}
  /** @customConstructor OSValidator.new */
  export class OSValidator extends zombie.GameWindow$OSValidator {}
  /** @customConstructor ObjectAmbientEmitters.new */
  export class ObjectAmbientEmitters extends zombie.audio.ObjectAmbientEmitters {}
  /** @customConstructor ObjectPool.new */
  export class ObjectPool<any> extends zombie.popman.ObjectPool<any> {}
  /** @customConstructor ObjectRenderEffects.new */
  export class ObjectRenderEffects extends zombie.iso.objects.ObjectRenderEffects {}
  /** @customConstructor ObjectTooltip.new */
  export class ObjectTooltip extends zombie.ui.ObjectTooltip {}
  /** @customConstructor Observation.new */
  export class Observation extends zombie.characters.traits.ObservationFactory$Observation {}
  /** @customConstructor ObservationFactory.new */
  export class ObservationFactory extends zombie.characters.traits.ObservationFactory {}
  /** @customConstructor ObserverCallback.new */
  export class ObserverCallback extends zombie.asset.Asset$ObserverCallback {}
  /** @customConstructor OccluderType.new */
  export class OccluderType extends zombie.iso.IsoGridOcclusionData$OccluderType {}
  /** @customConstructor OcclusionFilter.new */
  export class OcclusionFilter extends zombie.iso.IsoGridOcclusionData$OcclusionFilter {}
  /** @customConstructor OnceEvery.new */
  export class OnceEvery extends zombie.core.utils.OnceEvery {}
  /** @customConstructor OpenWindowState.new */
  export class OpenWindowState extends zombie.ai.states.OpenWindowState {}
  /** @customConstructor Outfit.new */
  export class Outfit extends zombie.core.skinnedmodel.population.Outfit {}
  /** @customConstructor OutlineShader.new */
  export class OutlineShader extends zombie.iso.IsoObject$OutlineShader {}
  /** @customConstructor PZArrayList.new */
  export class PZArrayList<any> extends zombie.util.list.PZArrayList<any> {}
  /** @customConstructor PZCalendar.new */
  export class PZCalendar extends zombie.util.PZCalendar {}
  /** @customConstructor PZFileformat.new */
  export class PZFileformat extends zombie.core.textures.Texture$PZFileformat {}
  /** @customConstructor PZMath.new */
  export class PZMath extends zombie.core.math.PZMath {}
  /** @customConstructor PackFile.new */
  export class PackFile extends zombie.gameStates.ChooseGameInfo$PackFile {}
  /** @customConstructor PacketType.new */
  export class PacketType extends zombie.network.PacketTypes$PacketType {}
  /** @customConstructor ParameterCharacterMovementSpeed.new */
  export class ParameterCharacterMovementSpeed extends zombie.audio.parameters.ParameterCharacterMovementSpeed {}
  /** @customConstructor Part.new */
  export class Part extends zombie.core.skinnedmodel.model.CharacterMask$Part {}
  /** @customConstructor Passenger.new */
  export class Passenger extends zombie.scripting.objects.VehicleScript$Passenger {}
  /** @customConstructor Path.new */
  export class Path extends zombie.ai.astar.Path {}
  /** @customConstructor PathFindBehavior2.new */
  export class PathFindBehavior2 extends zombie.vehicles.PathFindBehavior2 {}
  /** @customConstructor PathFindRequest.new */
  export class PathFindRequest extends zombie.vehicles.PolygonalMap2$PathFindRequest {}
  /** @customConstructor PathFindState.new */
  export class PathFindState extends zombie.ai.states.PathFindState {}
  /** @customConstructor PathFindState2.new */
  export class PathFindState2 extends zombie.vehicles.PathFindState2 {}
  /** @customConstructor PerObjectLogic.new */
  export class PerObjectLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic {}
  /** @customConstructor PerPlayerRender.new */
  export class PerPlayerRender extends zombie.iso.IsoCell$PerPlayerRender {}
  /** @customConstructor PerformanceSettings.new */
  export class PerformanceSettings extends zombie.core.PerformanceSettings {}
  /** @customConstructor Perk.new */
  export class Perk extends zombie.characters.skills.PerkFactory$Perk {}
  /** @customConstructor PerkFactory.new */
  export class PerkFactory extends zombie.characters.skills.PerkFactory {}
  /** @customConstructor PerkInfo.new */
  export class PerkInfo extends zombie.characters.IsoGameCharacter$PerkInfo {}
  /** @customConstructor Perks.new */
  export class Perks extends zombie.characters.skills.PerkFactory$Perks {}
  /** @customConstructor PhysicsShape.new */
  export class PhysicsShape extends zombie.scripting.objects.VehicleScript$PhysicsShape {}
  /** @customConstructor Plane.new */
  export class Plane extends zombie.vehicles.UI3DScene$Plane {}
  /** @customConstructor PlaneObjectPool.new */
  export class PlaneObjectPool extends zombie.vehicles.UI3DScene$PlaneObjectPool {}
  /** @customConstructor PlayerActionsState.new */
  export class PlayerActionsState extends zombie.ai.states.PlayerActionsState {}
  /** @customConstructor PlayerAimState.new */
  export class PlayerAimState extends zombie.ai.states.PlayerAimState {}
  /** @customConstructor PlayerCamera.new */
  export class PlayerCamera extends zombie.iso.PlayerCamera {}
  /** @customConstructor PlayerData.new */
  export class PlayerData extends zombie.core.skinnedmodel.model.ModelInstance$PlayerData {}
  /** @customConstructor PlayerEmoteState.new */
  export class PlayerEmoteState extends zombie.ai.states.PlayerEmoteState {}
  /** @customConstructor PlayerExtState.new */
  export class PlayerExtState extends zombie.ai.states.PlayerExtState {}
  /** @customConstructor PlayerFallDownState.new */
  export class PlayerFallDownState extends zombie.ai.states.PlayerFallDownState {}
  /** @customConstructor PlayerFallingState.new */
  export class PlayerFallingState extends zombie.ai.states.PlayerFallingState {}
  /** @customConstructor PlayerGetUpState.new */
  export class PlayerGetUpState extends zombie.ai.states.PlayerGetUpState {}
  /** @customConstructor PlayerHitReactionPVPState.new */
  export class PlayerHitReactionPVPState extends zombie.ai.states.PlayerHitReactionPVPState {}
  /** @customConstructor PlayerHitReactionState.new */
  export class PlayerHitReactionState extends zombie.ai.states.PlayerHitReactionState {}
  /** @customConstructor PlayerHomingPoint.new */
  export class PlayerHomingPoint extends zombie.iso.WorldMarkers$PlayerHomingPoint {}
  /** @customConstructor PlayerKnockedDown.new */
  export class PlayerKnockedDown extends zombie.ai.states.PlayerKnockedDown {}
  /** @customConstructor PlayerOnGroundState.new */
  export class PlayerOnGroundState extends zombie.ai.states.PlayerOnGroundState {}
  /** @customConstructor PlayerPacket.new */
  export class PlayerPacket extends zombie.network.packets.PlayerPacket {}
  /** @customConstructor PlayerRenderSettings.new */
  export class PlayerRenderSettings extends zombie.core.opengl.RenderSettings$PlayerRenderSettings {}
  /** @customConstructor PlayerSearchMode.new */
  export class PlayerSearchMode extends zombie.iso.SearchMode$PlayerSearchMode {}
  /** @customConstructor PlayerSitOnGroundState.new */
  export class PlayerSitOnGroundState extends zombie.ai.states.PlayerSitOnGroundState {}
  /** @customConstructor PlayerStrafeState.new */
  export class PlayerStrafeState extends zombie.ai.states.PlayerStrafeState {}
  /** @customConstructor Point.new */
  export class Point extends zombie.vehicles.PolygonalMap2$Point {}
  /** @customConstructor PointOnPath.new */
  export class PointOnPath extends zombie.vehicles.PathFindBehavior2$PointOnPath {}
  /** @customConstructor PolygonalMap2.new */
  export class PolygonalMap2 extends zombie.vehicles.PolygonalMap2 {}
  /** @customConstructor Pool.new */
  export class Pool<any> extends zombie.util.Pool<any> {}
  /** @customConstructor Position.new */
  export class Position extends zombie.scripting.objects.VehicleScript$Position {}
  /** @customConstructor PredictionTypes.new */
  export class PredictionTypes extends zombie.network.NetworkVariables$PredictionTypes {}
  /** @customConstructor PresetEntry.new */
  export class PresetEntry extends zombie.radio.devices.PresetEntry {}
  /** @customConstructor ProceduralItem.new */
  export class ProceduralItem extends zombie.inventory.ItemPickerJava$ProceduralItem {}
  /** @customConstructor Profession.new */
  export class Profession extends zombie.characters.professions.ProfessionFactory$Profession {}
  /** @customConstructor ProfessionFactory.new */
  export class ProfessionFactory extends zombie.characters.professions.ProfessionFactory {}
  /** @customConstructor PropertyContainer.new */
  export class PropertyContainer extends zombie.core.properties.PropertyContainer {}
  /** @customConstructor PuddlesDirection.new */
  export class PuddlesDirection extends zombie.iso.IsoGridSquare$PuddlesDirection {}
  /** @customConstructor PuddlesFloat.new */
  export class PuddlesFloat extends zombie.iso.IsoPuddles$PuddlesFloat {}
  /** @customConstructor PyramidTexture.new */
  export class PyramidTexture extends zombie.worldMap.ImagePyramid$PyramidTexture {}
  /** @customConstructor QuaternionfObjectPool.new */
  export class QuaternionfObjectPool extends zombie.vehicles.BaseVehicle$QuaternionfObjectPool {}
  /** @customConstructor RBBar.new */
  export class RBBar extends zombie.randomizedWorld.randomizedBuilding.RBBar {}
  /** @customConstructor RBBasic.new */
  export class RBBasic extends zombie.randomizedWorld.randomizedBuilding.RBBasic {}
  /** @customConstructor RBBurnt.new */
  export class RBBurnt extends zombie.randomizedWorld.randomizedBuilding.RBBurnt {}
  /** @customConstructor RBBurntCorpse.new */
  export class RBBurntCorpse extends zombie.randomizedWorld.randomizedBuilding.RBBurntCorpse {}
  /** @customConstructor RBBurntFireman.new */
  export class RBBurntFireman extends zombie.randomizedWorld.randomizedBuilding.RBBurntFireman {}
  /** @customConstructor RBCafe.new */
  export class RBCafe extends zombie.randomizedWorld.randomizedBuilding.RBCafe {}
  /** @customConstructor RBClinic.new */
  export class RBClinic extends zombie.randomizedWorld.randomizedBuilding.RBClinic {}
  /** @customConstructor RBHairSalon.new */
  export class RBHairSalon extends zombie.randomizedWorld.randomizedBuilding.RBHairSalon {}
  /** @customConstructor RBKateAndBaldspot.new */
  export class RBKateAndBaldspot extends zombie.randomizedWorld.randomizedBuilding.RBKateAndBaldspot {}
  /** @customConstructor RBLooted.new */
  export class RBLooted extends zombie.randomizedWorld.randomizedBuilding.RBLooted {}
  /** @customConstructor RBOffice.new */
  export class RBOffice extends zombie.randomizedWorld.randomizedBuilding.RBOffice {}
  /** @customConstructor RBOther.new */
  export class RBOther extends zombie.randomizedWorld.randomizedBuilding.RBOther {}
  /** @customConstructor RBPileOCrepe.new */
  export class RBPileOCrepe extends zombie.randomizedWorld.randomizedBuilding.RBPileOCrepe {}
  /** @customConstructor RBPizzaWhirled.new */
  export class RBPizzaWhirled extends zombie.randomizedWorld.randomizedBuilding.RBPizzaWhirled {}
  /** @customConstructor RBSafehouse.new */
  export class RBSafehouse extends zombie.randomizedWorld.randomizedBuilding.RBSafehouse {}
  /** @customConstructor RBSchool.new */
  export class RBSchool extends zombie.randomizedWorld.randomizedBuilding.RBSchool {}
  /** @customConstructor RBShopLooted.new */
  export class RBShopLooted extends zombie.randomizedWorld.randomizedBuilding.RBShopLooted {}
  /** @customConstructor RBSpiffo.new */
  export class RBSpiffo extends zombie.randomizedWorld.randomizedBuilding.RBSpiffo {}
  /** @customConstructor RBStripclub.new */
  export class RBStripclub extends zombie.randomizedWorld.randomizedBuilding.RBStripclub {}
  /** @customConstructor RDSBandPractice.new */
  export class RDSBandPractice extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBandPractice {}
  /** @customConstructor RDSBathroomZed.new */
  export class RDSBathroomZed extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBathroomZed {}
  /** @customConstructor RDSBedroomZed.new */
  export class RDSBedroomZed extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBedroomZed {}
  /** @customConstructor RDSBleach.new */
  export class RDSBleach extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBleach {}
  /** @customConstructor RDSCorpsePsycho.new */
  export class RDSCorpsePsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSCorpsePsycho {}
  /** @customConstructor RDSDeadDrunk.new */
  export class RDSDeadDrunk extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSDeadDrunk {}
  /** @customConstructor RDSFootballNight.new */
  export class RDSFootballNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSFootballNight {}
  /** @customConstructor RDSGunmanInBathroom.new */
  export class RDSGunmanInBathroom extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSGunmanInBathroom {}
  /** @customConstructor RDSGunslinger.new */
  export class RDSGunslinger extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSGunslinger {}
  /** @customConstructor RDSHenDo.new */
  export class RDSHenDo extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSHenDo {}
  /** @customConstructor RDSHockeyPsycho.new */
  export class RDSHockeyPsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSHockeyPsycho {}
  /** @customConstructor RDSHouseParty.new */
  export class RDSHouseParty extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSHouseParty {}
  /** @customConstructor RDSPokerNight.new */
  export class RDSPokerNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPokerNight {}
  /** @customConstructor RDSPoliceAtHouse.new */
  export class RDSPoliceAtHouse extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPoliceAtHouse {}
  /** @customConstructor RDSPrisonEscape.new */
  export class RDSPrisonEscape extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPrisonEscape {}
  /** @customConstructor RDSPrisonEscapeWithPolice.new */
  export class RDSPrisonEscapeWithPolice extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPrisonEscapeWithPolice {}
  /** @customConstructor RDSSkeletonPsycho.new */
  export class RDSSkeletonPsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSSkeletonPsycho {}
  /** @customConstructor RDSSpecificProfession.new */
  export class RDSSpecificProfession extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSSpecificProfession {}
  /** @customConstructor RDSStagDo.new */
  export class RDSStagDo extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSStagDo {}
  /** @customConstructor RDSStudentNight.new */
  export class RDSStudentNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSStudentNight {}
  /** @customConstructor RDSSuicidePact.new */
  export class RDSSuicidePact extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSSuicidePact {}
  /** @customConstructor RDSTinFoilHat.new */
  export class RDSTinFoilHat extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSTinFoilHat {}
  /** @customConstructor RDSZombieLockedBathroom.new */
  export class RDSZombieLockedBathroom extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSZombieLockedBathroom {}
  /** @customConstructor RDSZombiesEating.new */
  export class RDSZombiesEating extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSZombiesEating {}
  /** @customConstructor RGBAf.new */
  export class RGBAf extends zombie.worldMap.styles.WorldMapStyleLayer$RGBAf {}
  /** @customConstructor RVSAmbulanceCrash.new */
  export class RVSAmbulanceCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSAmbulanceCrash {}
  /** @customConstructor RVSBanditRoad.new */
  export class RVSBanditRoad extends zombie.randomizedWorld.randomizedVehicleStory.RVSBanditRoad {}
  /** @customConstructor RVSBurntCar.new */
  export class RVSBurntCar extends zombie.randomizedWorld.randomizedVehicleStory.RVSBurntCar {}
  /** @customConstructor RVSCarCrash.new */
  export class RVSCarCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrash {}
  /** @customConstructor RVSCarCrashCorpse.new */
  export class RVSCarCrashCorpse extends zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrashCorpse {}
  /** @customConstructor RVSChangingTire.new */
  export class RVSChangingTire extends zombie.randomizedWorld.randomizedVehicleStory.RVSChangingTire {}
  /** @customConstructor RVSConstructionSite.new */
  export class RVSConstructionSite extends zombie.randomizedWorld.randomizedVehicleStory.RVSConstructionSite {}
  /** @customConstructor RVSCrashHorde.new */
  export class RVSCrashHorde extends zombie.randomizedWorld.randomizedVehicleStory.RVSCrashHorde {}
  /** @customConstructor RVSFlippedCrash.new */
  export class RVSFlippedCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSFlippedCrash {}
  /** @customConstructor RVSPoliceBlockade.new */
  export class RVSPoliceBlockade extends zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockade {}
  /** @customConstructor RVSPoliceBlockadeShooting.new */
  export class RVSPoliceBlockadeShooting extends zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockadeShooting {}
  /** @customConstructor RVSTrailerCrash.new */
  export class RVSTrailerCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSTrailerCrash {}
  /** @customConstructor RVSUtilityVehicle.new */
  export class RVSUtilityVehicle extends zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle {}
  /** @customConstructor RZSBBQParty.new */
  export class RZSBBQParty extends zombie.randomizedWorld.randomizedZoneStory.RZSBBQParty {}
  /** @customConstructor RZSBaseball.new */
  export class RZSBaseball extends zombie.randomizedWorld.randomizedZoneStory.RZSBaseball {}
  /** @customConstructor RZSBeachParty.new */
  export class RZSBeachParty extends zombie.randomizedWorld.randomizedZoneStory.RZSBeachParty {}
  /** @customConstructor RZSBuryingCamp.new */
  export class RZSBuryingCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSBuryingCamp {}
  /** @customConstructor RZSFishingTrip.new */
  export class RZSFishingTrip extends zombie.randomizedWorld.randomizedZoneStory.RZSFishingTrip {}
  /** @customConstructor RZSForestCamp.new */
  export class RZSForestCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSForestCamp {}
  /** @customConstructor RZSForestCampEaten.new */
  export class RZSForestCampEaten extends zombie.randomizedWorld.randomizedZoneStory.RZSForestCampEaten {}
  /** @customConstructor RZSHunterCamp.new */
  export class RZSHunterCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSHunterCamp {}
  /** @customConstructor RZSMusicFest.new */
  export class RZSMusicFest extends zombie.randomizedWorld.randomizedZoneStory.RZSMusicFest {}
  /** @customConstructor RZSMusicFestStage.new */
  export class RZSMusicFestStage extends zombie.randomizedWorld.randomizedZoneStory.RZSMusicFestStage {}
  /** @customConstructor RZSSexyTime.new */
  export class RZSSexyTime extends zombie.randomizedWorld.randomizedZoneStory.RZSSexyTime {}
  /** @customConstructor RZSTrapperCamp.new */
  export class RZSTrapperCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSTrapperCamp {}
  /** @customConstructor RadarPanel.new */
  export class RadarPanel extends zombie.ui.RadarPanel {}
  /** @customConstructor RadialMenu.new */
  export class RadialMenu extends zombie.ui.RadialMenu {}
  /** @customConstructor RadialProgressBar.new */
  export class RadialProgressBar extends zombie.ui.RadialProgressBar {}
  /** @customConstructor Radio.new */
  export class Radio extends zombie.inventory.types.Radio {}
  /** @customConstructor RadioAPI.new */
  export class RadioAPI extends zombie.radio.RadioAPI {}
  /** @customConstructor RadioBroadCast.new */
  export class RadioBroadCast extends zombie.radio.scripting.RadioBroadCast {}
  /** @customConstructor RadioChannel.new */
  export class RadioChannel extends zombie.radio.scripting.RadioChannel {}
  /** @customConstructor RadioData.new */
  export class RadioData extends zombie.radio.RadioData {}
  /** @customConstructor RadioLine.new */
  export class RadioLine extends zombie.radio.scripting.RadioLine {}
  /** @customConstructor RadioScript.new */
  export class RadioScript extends zombie.radio.scripting.RadioScript {}
  /** @customConstructor RadioScriptManager.new */
  export class RadioScriptManager extends zombie.radio.scripting.RadioScriptManager {}
  /** @customConstructor RainManager.new */
  export class RainManager extends zombie.iso.objects.RainManager {}
  /** @customConstructor RakNetPeerInterface.new */
  export class RakNetPeerInterface extends zombie.core.raknet.RakNetPeerInterface {}
  /** @customConstructor RandomData.new */
  export class RandomData extends zombie.core.skinnedmodel.population.Outfit$RandomData {}
  /** @customConstructor RandomizedBuildingBase.new */
  export class RandomizedBuildingBase extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase {}
  /** @customConstructor RandomizedDeadSurvivorBase.new */
  export class RandomizedDeadSurvivorBase extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase {}
  /** @customConstructor RandomizedVehicleStoryBase.new */
  export class RandomizedVehicleStoryBase extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase {}
  /** @customConstructor RandomizedWorldBase.new */
  export class RandomizedWorldBase extends zombie.randomizedWorld.RandomizedWorldBase {}
  /** @customConstructor RandomizedZoneStoryBase.new */
  export class RandomizedZoneStoryBase extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase {}
  /** @customConstructor Ray.new */
  export class Ray extends zombie.vehicles.UI3DScene$Ray {}
  /** @customConstructor RayObjectPool.new */
  export class RayObjectPool extends zombie.vehicles.UI3DScene$RayObjectPool {}
  /** @customConstructor Recipe.new */
  export class Recipe extends zombie.scripting.objects.Recipe {}
  /** @customConstructor RecipeManager.new */
  export class RecipeManager extends zombie.inventory.RecipeManager {}
  /** @customConstructor RecordedMedia.new */
  export class RecordedMedia extends zombie.radio.media.RecordedMedia {}
  /** @customConstructor Remove.new */
  export class Remove extends zombie.Lua.Event$Remove {}
  /** @customConstructor RenderArgs.new */
  export class RenderArgs extends zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs {}
  /** @customConstructor RenderEffectType.new */
  export class RenderEffectType extends zombie.iso.objects.RenderEffectType {}
  /** @customConstructor RenderSettings.new */
  export class RenderSettings extends zombie.core.opengl.RenderSettings {}
  /** @customConstructor RequiredSkill.new */
  export class RequiredSkill extends zombie.scripting.objects.Recipe$RequiredSkill {}
  /** @customConstructor Result.new */
  export class Result extends zombie.scripting.objects.Recipe$Result {}
  /** @customConstructor ResultBiggestSound.new */
  export class ResultBiggestSound extends zombie.WorldSoundManager$ResultBiggestSound {}
  /** @customConstructor ResultLight.new */
  export class ResultLight extends zombie.iso.IsoGridSquare$ResultLight {}
  /** @customConstructor RingBuffer.new */
  export class RingBuffer extends zombie.core.SpriteRenderer$RingBuffer {}
  /** @customConstructor RoomDef.new */
  export class RoomDef extends zombie.iso.RoomDef {}
  /** @customConstructor RoomRect.new */
  export class RoomRect extends zombie.iso.RoomDef$RoomRect {}
  /** @customConstructor RoomTone.new */
  export class RoomTone extends zombie.iso.IsoMetaGrid$RoomTone {}
  /** @customConstructor RuntimeAnimationScript.new */
  export class RuntimeAnimationScript extends zombie.core.skinnedmodel.runtime.RuntimeAnimationScript {}
  /** @customConstructor SCButton.new */
  export class SCButton extends zombie.ui.SpeedControls$SCButton {}
  /** @customConstructor SGlobalObject.new */
  export class SGlobalObject extends zombie.globalObjects.SGlobalObject {}
  /** @customConstructor SGlobalObjectSystem.new */
  export class SGlobalObjectSystem extends zombie.globalObjects.SGlobalObjectSystem {}
  /** @customConstructor SGlobalObjects.new */
  export class SGlobalObjects extends zombie.globalObjects.SGlobalObjects {}
  /** @customConstructor SLSoundManager.new */
  export class SLSoundManager extends zombie.radio.StorySounds.SLSoundManager {}
  /** @customConstructor SafeHouse.new */
  export class SafeHouse extends zombie.iso.areas.SafeHouse {}
  /** @customConstructor Safety.new */
  export class Safety extends zombie.characters.Safety {}
  /** @customConstructor SandboxOption.new */
  export class SandboxOption extends zombie.SandboxOptions$SandboxOption {}
  /** @customConstructor SandboxOptions.new */
  export class SandboxOptions extends zombie.SandboxOptions {}
  /** @customConstructor ScreenElement.new */
  export class ScreenElement extends zombie.gameStates.MainScreenState$ScreenElement {}
  /** @customConstructor ScriptManager.new */
  export class ScriptManager extends zombie.scripting.ScriptManager {}
  /** @customConstructor ScriptModule.new */
  export class ScriptModule extends zombie.scripting.objects.ScriptModule {}
  /** @customConstructor SearchMode.new */
  export class SearchMode extends zombie.iso.SearchMode {}
  /** @customConstructor SearchModeFloat.new */
  export class SearchModeFloat extends zombie.iso.SearchMode$SearchModeFloat {}
  /** @customConstructor Season.new */
  export class Season extends zombie.erosion.ErosionConfig$Season {}
  /** @customConstructor Seeds.new */
  export class Seeds extends zombie.erosion.ErosionConfig$Seeds {}
  /** @customConstructor Server.new */
  export class Server extends zombie.network.Server {}
  /** @customConstructor ServerChatMessage.new */
  export class ServerChatMessage extends zombie.chat.ServerChatMessage {}
  /** @customConstructor ServerOption.new */
  export class ServerOption extends zombie.network.ServerOptions$ServerOption {}
  /** @customConstructor ServerOptions.new */
  export class ServerOptions extends zombie.network.ServerOptions {}
  /** @customConstructor ServerSettings.new */
  export class ServerSettings extends zombie.network.ServerSettings {}
  /** @customConstructor ServerSettingsManager.new */
  export class ServerSettingsManager extends zombie.network.ServerSettingsManager {}
  /** @customConstructor ServerVehicleState.new */
  export class ServerVehicleState extends zombie.vehicles.BaseVehicle$ServerVehicleState {}
  /** @customConstructor Shader.new */
  export class Shader extends zombie.core.opengl.Shader {}
  /** @customConstructor ShaderProgram.new */
  export class ShaderProgram extends zombie.core.opengl.ShaderProgram {}
  /** @customConstructor ShaderUnit.new */
  export class ShaderUnit extends zombie.core.opengl.ShaderUnit {}
  /** @customConstructor SharedDescriptors.new */
  export class SharedDescriptors extends zombie.SharedDescriptors {}
  /** @customConstructor SharedSkeleAnimationRepository.new */
  export class SharedSkeleAnimationRepository extends zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationRepository {}
  /** @customConstructor SharedSkeleAnimationTrack.new */
  export class SharedSkeleAnimationTrack extends zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack {}
  /** @customConstructor SharedVertexBufferObjects.new */
  export class SharedVertexBufferObjects extends zombie.core.opengl.SharedVertexBufferObjects {}
  /** @customConstructor ShortList.new */
  export class ShortList extends zombie.core.Styles.ShortList {}
  /** @customConstructor SideOfLine.new */
  export class SideOfLine extends zombie.core.math.PZMath$SideOfLine {}
  /** @customConstructor SimpleDateFormat.new */
  export class SimpleDateFormat extends java.text.SimpleDateFormat {}
  /** @customConstructor Skin.new */
  export class Skin extends zombie.scripting.objects.VehicleScript$Skin {}
  /** @customConstructor SkinningBone.new */
  export class SkinningBone extends zombie.core.skinnedmodel.model.SkinningBone {}
  /** @customConstructor SkinningBoneHierarchy.new */
  export class SkinningBoneHierarchy extends zombie.core.skinnedmodel.model.SkinningBoneHierarchy {}
  /** @customConstructor SkinningData.new */
  export class SkinningData extends zombie.core.skinnedmodel.model.SkinningData {}
  /** @customConstructor SleepingEvent.new */
  export class SleepingEvent extends zombie.ai.sadisticAIDirector.SleepingEvent {}
  /** @customConstructor SleepingEventData.new */
  export class SleepingEventData extends zombie.ai.sadisticAIDirector.SleepingEventData {}
  /** @customConstructor SliceY.new */
  export class SliceY extends zombie.iso.SliceY {}
  /** @customConstructor SmashWindowState.new */
  export class SmashWindowState extends zombie.ai.states.SmashWindowState {}
  /** @customConstructor Sound.new */
  export class Sound extends zombie.radio.StorySounds.StoryEmitter$Sound {}
  /** @customConstructor SoundManager.new */
  export class SoundManager extends zombie.SoundManager {}
  /** @customConstructor SoundTimelineScript.new */
  export class SoundTimelineScript extends zombie.scripting.objects.SoundTimelineScript {}
  /** @customConstructor Sounds.new */
  export class Sounds extends zombie.scripting.objects.VehicleScript$Sounds {}
  /** @customConstructor Source.new */
  export class Source extends zombie.scripting.objects.Recipe$Source {}
  /** @customConstructor SpawnOrigin.new */
  export class SpawnOrigin extends zombie.gameStates.ChooseGameInfo$SpawnOrigin {}
  /** @customConstructor SpeedControls.new */
  export class SpeedControls extends zombie.ui.SpeedControls {}
  /** @customConstructor SpriteRenderState.new */
  export class SpriteRenderState extends zombie.core.sprite.SpriteRenderState {}
  /** @customConstructor SpriteRenderer.new */
  export class SpriteRenderer extends zombie.core.SpriteRenderer {}
  /** @customConstructor Square.new */
  export class Square extends zombie.erosion.ErosionData$Square {}
  /** @customConstructor Stack.new */
  export class Stack<any> extends java.util.Stack<any> {}
  /** @customConstructor Stage.new */
  export class Stage extends zombie.iso.MultiStageBuilding$Stage {}
  /** @customConstructor StaggerBackState.new */
  export class StaggerBackState extends zombie.ai.states.StaggerBackState {}
  /** @customConstructor Stash.new */
  export class Stash extends zombie.core.stash.Stash {}
  /** @customConstructor StashBuilding.new */
  export class StashBuilding extends zombie.core.stash.StashBuilding {}
  /** @customConstructor StashSystem.new */
  export class StashSystem extends zombie.core.stash.StashSystem {}
  /** @customConstructor State.new */
  export class State extends zombie.asset.Asset$State {}
  /** @customConstructor StateAction.new */
  export class StateAction extends zombie.gameStates.GameStateMachine$StateAction {}
  /** @customConstructor StateMachine.new */
  export class StateMachine extends zombie.ai.StateMachine {}
  /** @customConstructor Stats.new */
  export class Stats extends zombie.characters.Stats {}
  /** @customConstructor SteamFriend.new */
  export class SteamFriend extends zombie.core.znet.SteamFriend {}
  /** @customConstructor SteamUGCDetails.new */
  export class SteamUGCDetails extends zombie.core.znet.SteamUGCDetails {}
  /** @customConstructor SteamWorkshopItem.new */
  export class SteamWorkshopItem extends zombie.core.znet.SteamWorkshopItem {}
  /** @customConstructor Step.new */
  export class Step extends zombie.ai.astar.Path$Step {}
  /** @customConstructor Stop.new */
  export class Stop extends zombie.worldMap.styles.WorldMapStyleLayer$Stop {}
  /** @customConstructor StoryEmitter.new */
  export class StoryEmitter extends zombie.radio.StorySounds.StoryEmitter {}
  /** @customConstructor StorySound.new */
  export class StorySound extends zombie.radio.StorySounds.StorySound {}
  /** @customConstructor StorySoundEvent.new */
  export class StorySoundEvent extends zombie.radio.StorySounds.StorySoundEvent {}
  /** @customConstructor StrLerpVal.new */
  export class StrLerpVal extends zombie.iso.weather.WeatherPeriod$StrLerpVal {}
  /** @customConstructor StringConfigOption.new */
  export class StringConfigOption extends zombie.config.StringConfigOption {}
  /** @customConstructor StringSandboxOption.new */
  export class StringSandboxOption extends zombie.SandboxOptions$StringSandboxOption {}
  /** @customConstructor StringServerOption.new */
  export class StringServerOption extends zombie.network.ServerOptions$StringServerOption {}
  /** @customConstructor SubLayerSlot.new */
  export class SubLayerSlot extends zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator$SubLayerSlot {}
  /** @customConstructor SubTexture.new */
  export class SubTexture extends zombie.fileSystem.FileSystem$SubTexture {}
  /** @customConstructor SubTextureInfo.new */
  export class SubTextureInfo extends zombie.core.textures.TexturePackPage$SubTextureInfo {}
  /** @customConstructor SubstateSlot.new */
  export class SubstateSlot extends zombie.ai.StateMachine$SubstateSlot {}
  /** @customConstructor SurroundVehicle.new */
  export class SurroundVehicle extends zombie.vehicles.SurroundVehicle {}
  /** @customConstructor SurvivorDesc.new */
  export class SurvivorDesc extends zombie.characters.SurvivorDesc {}
  /** @customConstructor SurvivorFactory.new */
  export class SurvivorFactory extends zombie.characters.SurvivorFactory {}
  /** @customConstructor SurvivorGroup.new */
  export class SurvivorGroup extends zombie.characters.SurvivorGroup {}
  /** @customConstructor SurvivorType.new */
  export class SurvivorType extends zombie.characters.SurvivorFactory$SurvivorType {}
  /** @customConstructor SwipeStatePlayer.new */
  export class SwipeStatePlayer extends zombie.ai.states.SwipeStatePlayer {}
  /** @customConstructor SwitchSeat.new */
  export class SwitchSeat extends zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat {}
  /** @customConstructor SystemDisabler.new */
  export class SystemDisabler extends zombie.SystemDisabler {}
  /** @customConstructor Temperature.new */
  export class Temperature extends zombie.iso.weather.Temperature {}
  /** @customConstructor TentAmbianceLogic.new */
  export class TentAmbianceLogic extends zombie.audio.ObjectAmbientEmitters$TentAmbianceLogic {}
  /** @customConstructor TestResults.new */
  export class TestResults extends zombie.iso.LosUtil$TestResults {}
  /** @customConstructor TextDrawHorizontal.new */
  export class TextDrawHorizontal extends zombie.ui.TextDrawHorizontal {}
  /** @customConstructor TextDrawObject.new */
  export class TextDrawObject extends zombie.ui.TextDrawObject {}
  /** @customConstructor TextManager.new */
  export class TextManager extends zombie.ui.TextManager {}
  /** @customConstructor TextServerOption.new */
  export class TextServerOption extends zombie.network.ServerOptions$TextServerOption {}
  /** @customConstructor Texture.new */
  export class Texture extends zombie.core.textures.Texture {}
  /** @customConstructor TextureAssetParams.new */
  export class TextureAssetParams extends zombie.core.textures.Texture$TextureAssetParams {}
  /** @customConstructor TextureDraw.new */
  export class TextureDraw extends zombie.core.textures.TextureDraw {}
  /** @customConstructor TextureFBO.new */
  export class TextureFBO extends zombie.core.textures.TextureFBO {}
  /** @customConstructor TextureID.new */
  export class TextureID extends zombie.core.textures.TextureID {}
  /** @customConstructor TextureIDAssetParams.new */
  export class TextureIDAssetParams extends zombie.core.textures.TextureID$TextureIDAssetParams {}
  /** @customConstructor TexturePack.new */
  export class TexturePack extends zombie.GameWindow$TexturePack {}
  /** @customConstructor TexturePackPage.new */
  export class TexturePackPage extends zombie.core.textures.TexturePackPage {}
  /** @customConstructor TexturePackTextures.new */
  export class TexturePackTextures extends zombie.fileSystem.FileSystem$TexturePackTextures {}
  /** @customConstructor TextureStop.new */
  export class TextureStop extends zombie.worldMap.styles.WorldMapStyleLayer$TextureStop {}
  /** @customConstructor ThermalNode.new */
  export class ThermalNode extends zombie.characters.BodyDamage.Thermoregulator$ThermalNode {}
  /** @customConstructor Thermoregulator.new */
  export class Thermoregulator extends zombie.characters.BodyDamage.Thermoregulator {}
  /** @customConstructor ThumpState.new */
  export class ThumpState extends zombie.ai.states.ThumpState {}
  /** @customConstructor Thumpable.new */
  export class Thumpable extends zombie.iso.objects.interfaces.Thumpable {}
  /** @customConstructor ThunderCloud.new */
  export class ThunderCloud extends zombie.iso.weather.ThunderStorm$ThunderCloud {}
  /** @customConstructor ThunderStorm.new */
  export class ThunderStorm extends zombie.iso.weather.ThunderStorm {}
  /** @customConstructor TileDef.new */
  export class TileDef extends zombie.gameStates.ChooseGameInfo$TileDef {}
  /** @customConstructor TileOverlays.new */
  export class TileOverlays extends zombie.iso.TileOverlays {}
  /** @customConstructor Time.new */
  export class Time extends zombie.erosion.ErosionConfig$Time {}
  /** @customConstructor TorchInfo.new */
  export class TorchInfo extends zombie.characters.IsoGameCharacter$TorchInfo {}
  /** @customConstructor Trait.new */
  export class Trait extends zombie.characters.traits.TraitFactory$Trait {}
  /** @customConstructor TraitCollection.new */
  export class TraitCollection extends zombie.characters.traits.TraitCollection {}
  /** @customConstructor TraitFactory.new */
  export class TraitFactory extends zombie.characters.traits.TraitFactory {}
  /** @customConstructor TraitSlot.new */
  export class TraitSlot extends zombie.characters.traits.TraitCollection$TraitSlot {}
  /** @customConstructor Transform.new */
  export class Transform extends zombie.core.physics.Transform {}
  /** @customConstructor Translator.new */
  export class Translator extends zombie.core.Translator {}
  /** @customConstructor TransmissionNumber.new */
  export class TransmissionNumber extends zombie.vehicles.TransmissionNumber {}
  /** @customConstructor TreeAmbianceLogic.new */
  export class TreeAmbianceLogic extends zombie.audio.ObjectAmbientEmitters$TreeAmbianceLogic {}
  /** @customConstructor TreeShader.new */
  export class TreeShader extends zombie.iso.objects.IsoTree$TreeShader {}
  /** @customConstructor TreeSoundManager.new */
  export class TreeSoundManager extends zombie.iso.IsoMovingObject$TreeSoundManager {}
  /** @customConstructor Trigger.new */
  export class Trigger extends zombie.iso.IsoMetaGrid$Trigger {}
  /** @customConstructor Type.new */
  export class Type extends zombie.core.opengl.ShaderUnit$Type {}
  /** @customConstructor UI3DModel.new */
  export class UI3DModel extends zombie.ui.UI3DModel {}
  /** @customConstructor UI3DScene.new */
  export class UI3DScene extends zombie.vehicles.UI3DScene {}
  /** @customConstructor UIDebugConsole.new */
  export class UIDebugConsole extends zombie.ui.UIDebugConsole {}
  /** @customConstructor UIElement.new */
  export class UIElement extends zombie.ui.UIElement {}
  /** @customConstructor UIEventHandler.new */
  export class UIEventHandler extends zombie.ui.UIEventHandler {}
  /** @customConstructor UIFont.new */
  export class UIFont extends zombie.ui.UIFont {}
  /** @customConstructor UIManager.new */
  export class UIManager extends zombie.ui.UIManager {}
  /** @customConstructor UIServerToolbox.new */
  export class UIServerToolbox extends zombie.ui.UIServerToolbox {}
  /** @customConstructor UITextBox2.new */
  export class UITextBox2 extends zombie.ui.UITextBox2 {}
  /** @customConstructor UITransition.new */
  export class UITransition extends zombie.ui.UITransition {}
  /** @customConstructor UIWorldMap.new */
  export class UIWorldMap extends zombie.worldMap.UIWorldMap {}
  /** @customConstructor UIWorldMapV1.new */
  export class UIWorldMapV1 extends zombie.worldMap.UIWorldMapV1 {}
  /** @customConstructor UdpConnection.new */
  export class UdpConnection extends zombie.core.raknet.UdpConnection {}
  /** @customConstructor UdpEngine.new */
  export class UdpEngine extends zombie.core.raknet.UdpEngine {}
  /** @customConstructor Uniform.new */
  export class Uniform extends zombie.core.opengl.ShaderProgram$Uniform {}
  /** @customConstructor UniqueRecipe.new */
  export class UniqueRecipe extends zombie.scripting.objects.UniqueRecipe {}
  /** @customConstructor Updater.new */
  export class Updater extends zombie.network.BodyDamageSync$Updater {}
  /** @customConstructor Userlog.new */
  export class Userlog extends zombie.network.Userlog {}
  /** @customConstructor UserlogType.new */
  export class UserlogType extends zombie.network.Userlog$UserlogType {}
  /** @customConstructor Vector.new */
  export class Vector<any> extends java.util.Vector<any> {}
  /** @customConstructor Vector2.new */
  export class Vector2 extends zombie.iso.Vector2 {}
  /** @customConstructor Vector2ObjectPool.new */
  export class Vector2ObjectPool extends zombie.vehicles.BaseVehicle$Vector2ObjectPool {}
  /** @customConstructor Vector2f.new */
  export class Vector2f extends org.joml.Vector2f {}
  /** @customConstructor Vector2fObjectPool.new */
  export class Vector2fObjectPool extends zombie.vehicles.BaseVehicle$Vector2fObjectPool {}
  /** @customConstructor Vector3.new */
  export class Vector3 extends zombie.iso.Vector3 {}
  /** @customConstructor Vector3fObjectPool.new */
  export class Vector3fObjectPool extends zombie.vehicles.BaseVehicle$Vector3fObjectPool {}
  /** @customConstructor Vehicle.new */
  export class Vehicle extends zombie.network.packets.hit.Vehicle {}
  /** @customConstructor VehicleDistribution.new */
  export class VehicleDistribution extends zombie.inventory.ItemPickerJava$VehicleDistribution {}
  /** @customConstructor VehicleDoor.new */
  export class VehicleDoor extends zombie.vehicles.VehicleDoor {}
  /** @customConstructor VehicleEngineRPM.new */
  export class VehicleEngineRPM extends zombie.vehicles.VehicleEngineRPM {}
  /** @customConstructor VehicleGauge.new */
  export class VehicleGauge extends zombie.ui.VehicleGauge {}
  /** @customConstructor VehicleHitPacket.new */
  export class VehicleHitPacket extends zombie.network.packets.hit.VehicleHitPacket {}
  /** @customConstructor VehicleLight.new */
  export class VehicleLight extends zombie.vehicles.VehicleLight {}
  /** @customConstructor VehiclePart.new */
  export class VehiclePart extends zombie.vehicles.VehiclePart {}
  /** @customConstructor VehiclePoly.new */
  export class VehiclePoly extends zombie.vehicles.PolygonalMap2$VehiclePoly {}
  /** @customConstructor VehicleScript.new */
  export class VehicleScript extends zombie.scripting.objects.VehicleScript {}
  /** @customConstructor VehicleStorySpawnData.new */
  export class VehicleStorySpawnData extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData {}
  /** @customConstructor VehicleStorySpawner.new */
  export class VehicleStorySpawner extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner {}
  /** @customConstructor VehicleTemplate.new */
  export class VehicleTemplate extends zombie.scripting.objects.VehicleTemplate {}
  /** @customConstructor VehicleType.new */
  export class VehicleType extends zombie.vehicles.VehicleType {}
  /** @customConstructor VehicleTypeDefinition.new */
  export class VehicleTypeDefinition extends zombie.vehicles.VehicleType$VehicleTypeDefinition {}
  /** @customConstructor VehicleWindow.new */
  export class VehicleWindow extends zombie.vehicles.VehicleWindow {}
  /** @customConstructor VehicleZone.new */
  export class VehicleZone extends zombie.iso.IsoMetaGrid$VehicleZone {}
  /** @customConstructor VirtualZombieManager.new */
  export class VirtualZombieManager extends zombie.VirtualZombieManager {}
  /** @customConstructor VisionResult.new */
  export class VisionResult extends zombie.iso.IsoObject$VisionResult {}
  /** @customConstructor WalkTowardState.new */
  export class WalkTowardState extends zombie.ai.states.WalkTowardState {}
  /** @customConstructor WallShaderTexRender.new */
  export class WallShaderTexRender extends zombie.core.SpriteRenderer$WallShaderTexRender {}
  /** @customConstructor WallShaperWhole.new */
  export class WallShaperWhole extends zombie.iso.sprite.shapers.WallShaperWhole {}
  /** @customConstructor WaterDripLogic.new */
  export class WaterDripLogic extends zombie.audio.ObjectAmbientEmitters$WaterDripLogic {}
  /** @customConstructor WaveSignalDevice.new */
  export class WaveSignalDevice extends zombie.radio.devices.WaveSignalDevice {}
  /** @customConstructor WeaponPart.new */
  export class WeaponPart extends zombie.inventory.types.WeaponPart {}
  /** @customConstructor WeaponType.new */
  export class WeaponType extends zombie.inventory.types.WeaponType {}
  /** @customConstructor WeatherPeriod.new */
  export class WeatherPeriod extends zombie.iso.weather.WeatherPeriod {}
  /** @customConstructor WeatherStage.new */
  export class WeatherStage extends zombie.iso.weather.WeatherPeriod$WeatherStage {}
  /** @customConstructor Wheel.new */
  export class Wheel extends zombie.scripting.objects.VehicleScript$Wheel {}
  /** @customConstructor WheelInfo.new */
  export class WheelInfo extends zombie.vehicles.BaseVehicle$WheelInfo {}
  /** @customConstructor Window.new */
  export class Window extends zombie.scripting.objects.VehicleScript$Window {}
  /** @customConstructor WindowLogic.new */
  export class WindowLogic extends zombie.audio.ObjectAmbientEmitters$WindowLogic {}
  /** @customConstructor WindowType.new */
  export class WindowType extends zombie.iso.objects.IsoWindow$WindowType {}
  /** @customConstructor WorldFlares.new */
  export class WorldFlares extends zombie.iso.weather.WorldFlares {}
  /** @customConstructor WorldMap.new */
  export class WorldMap extends zombie.worldMap.WorldMap {}
  /** @customConstructor WorldMapBaseSymbol.new */
  export class WorldMapBaseSymbol extends zombie.worldMap.symbols.WorldMapBaseSymbol {}
  /** @customConstructor WorldMapBaseSymbolV1.new */
  export class WorldMapBaseSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1 {}
  /** @customConstructor WorldMapBooleanOption.new */
  export class WorldMapBooleanOption extends zombie.worldMap.WorldMapRenderer$WorldMapBooleanOption {}
  /** @customConstructor WorldMapCell.new */
  export class WorldMapCell extends zombie.worldMap.WorldMapCell {}
  /** @customConstructor WorldMapData.new */
  export class WorldMapData extends zombie.worldMap.WorldMapData {}
  /** @customConstructor WorldMapDoubleOption.new */
  export class WorldMapDoubleOption extends zombie.worldMap.WorldMapRenderer$WorldMapDoubleOption {}
  /** @customConstructor WorldMapFeature.new */
  export class WorldMapFeature extends zombie.worldMap.WorldMapFeature {}
  /** @customConstructor WorldMapGridSquareMarker.new */
  export class WorldMapGridSquareMarker extends zombie.worldMap.markers.WorldMapGridSquareMarker {}
  /** @customConstructor WorldMapGridSquareMarkerV1.new */
  export class WorldMapGridSquareMarkerV1 extends zombie.worldMap.markers.WorldMapMarkersV1$WorldMapGridSquareMarkerV1 {}
  /** @customConstructor WorldMapImages.new */
  export class WorldMapImages extends zombie.worldMap.WorldMapImages {}
  /** @customConstructor WorldMapLineStyleLayerV1.new */
  export class WorldMapLineStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapLineStyleLayerV1 {}
  /** @customConstructor WorldMapMarker.new */
  export class WorldMapMarker extends zombie.worldMap.markers.WorldMapMarker {}
  /** @customConstructor WorldMapMarkerV1.new */
  export class WorldMapMarkerV1 extends zombie.worldMap.markers.WorldMapMarkersV1$WorldMapMarkerV1 {}
  /** @customConstructor WorldMapMarkers.new */
  export class WorldMapMarkers extends zombie.worldMap.markers.WorldMapMarkers {}
  /** @customConstructor WorldMapMarkersV1.new */
  export class WorldMapMarkersV1 extends zombie.worldMap.markers.WorldMapMarkersV1 {}
  /** @customConstructor WorldMapPolygonStyleLayerV1.new */
  export class WorldMapPolygonStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapPolygonStyleLayerV1 {}
  /** @customConstructor WorldMapRenderer.new */
  export class WorldMapRenderer extends zombie.worldMap.WorldMapRenderer {}
  /** @customConstructor WorldMapStyle.new */
  export class WorldMapStyle extends zombie.worldMap.styles.WorldMapStyle {}
  /** @customConstructor WorldMapStyleLayer.new */
  export class WorldMapStyleLayer extends zombie.worldMap.styles.WorldMapStyleLayer {}
  /** @customConstructor WorldMapStyleLayerV1.new */
  export class WorldMapStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1 {}
  /** @customConstructor WorldMapStyleV1.new */
  export class WorldMapStyleV1 extends zombie.worldMap.styles.WorldMapStyleV1 {}
  /** @customConstructor WorldMapSymbolCollisions.new */
  export class WorldMapSymbolCollisions extends zombie.worldMap.symbols.WorldMapSymbolCollisions {}
  /** @customConstructor WorldMapSymbolType.new */
  export class WorldMapSymbolType extends zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType {}
  /** @customConstructor WorldMapSymbols.new */
  export class WorldMapSymbols extends zombie.worldMap.symbols.WorldMapSymbols {}
  /** @customConstructor WorldMapSymbolsV1.new */
  export class WorldMapSymbolsV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1 {}
  /** @customConstructor WorldMapTextSymbol.new */
  export class WorldMapTextSymbol extends zombie.worldMap.symbols.WorldMapTextSymbol {}
  /** @customConstructor WorldMapTextSymbolV1.new */
  export class WorldMapTextSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1 {}
  /** @customConstructor WorldMapTextureStyleLayerV1.new */
  export class WorldMapTextureStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapTextureStyleLayerV1 {}
  /** @customConstructor WorldMapTextureSymbol.new */
  export class WorldMapTextureSymbol extends zombie.worldMap.symbols.WorldMapTextureSymbol {}
  /** @customConstructor WorldMapTextureSymbolV1.new */
  export class WorldMapTextureSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1 {}
  /** @customConstructor WorldMapVisited.new */
  export class WorldMapVisited extends zombie.worldMap.WorldMapVisited {}
  /** @customConstructor WorldMarkers.new */
  export class WorldMarkers extends zombie.iso.WorldMarkers {}
  /** @customConstructor WorldSound.new */
  export class WorldSound extends zombie.WorldSoundManager$WorldSound {}
  /** @customConstructor WorldSoundEmitter.new */
  export class WorldSoundEmitter extends zombie.AmbientStreamManager$WorldSoundEmitter {}
  /** @customConstructor WorldSoundManager.new */
  export class WorldSoundManager extends zombie.WorldSoundManager {}
  /** @customConstructor WornItem.new */
  export class WornItem extends zombie.characters.WornItems.WornItem {}
  /** @customConstructor WornItems.new */
  export class WornItems extends zombie.characters.WornItems.WornItems {}
  /** @customConstructor WrappedBuffer.new */
  export class WrappedBuffer extends zombie.core.utils.WrappedBuffer {}
  /** @customConstructor XP.new */
  export class XP extends zombie.characters.IsoGameCharacter$XP {}
  /** @customConstructor XPMultiplier.new */
  export class XPMultiplier extends zombie.characters.IsoGameCharacter$XPMultiplier {}
  /** @customConstructor ZLogger.new */
  export class ZLogger extends zombie.core.logger.ZLogger {}
  /** @customConstructor ZNetFileAnnounce.new */
  export class ZNetFileAnnounce extends zombie.core.znet.ZNetFileAnnounce {}
  /** @customConstructor ZNetFileChunk.new */
  export class ZNetFileChunk extends zombie.core.znet.ZNetFileChunk {}
  /** @customConstructor ZNetSessionState.new */
  export class ZNetSessionState extends zombie.core.znet.ZNetSessionState {}
  /** @customConstructor ZNetStatistics.new */
  export class ZNetStatistics extends zombie.core.znet.ZNetStatistics {}
  /** @customConstructor ZombieConfig.new */
  export class ZombieConfig extends zombie.SandboxOptions$ZombieConfig {}
  /** @customConstructor ZombieFallDownState.new */
  export class ZombieFallDownState extends zombie.ai.states.ZombieFallDownState {}
  /** @customConstructor ZombieGetDownState.new */
  export class ZombieGetDownState extends zombie.ai.states.ZombieGetDownState {}
  /** @customConstructor ZombieGetUpState.new */
  export class ZombieGetUpState extends zombie.ai.states.ZombieGetUpState {}
  /** @customConstructor ZombieIdleState.new */
  export class ZombieIdleState extends zombie.ai.states.ZombieIdleState {}
  /** @customConstructor ZombieLore.new */
  export class ZombieLore extends zombie.SandboxOptions$ZombieLore {}
  /** @customConstructor ZombieOnGroundState.new */
  export class ZombieOnGroundState extends zombie.ai.states.ZombieOnGroundState {}
  /** @customConstructor ZombiePopulationManager.new */
  export class ZombiePopulationManager extends zombie.popman.ZombiePopulationManager {}
  /** @customConstructor ZombiePopulationRenderer.new */
  export class ZombiePopulationRenderer extends zombie.popman.ZombiePopulationRenderer {}
  /** @customConstructor ZombieReanimateState.new */
  export class ZombieReanimateState extends zombie.ai.states.ZombieReanimateState {}
  /** @customConstructor ZombieSittingState.new */
  export class ZombieSittingState extends zombie.ai.states.ZombieSittingState {}
  /** @customConstructor ZombieSound.new */
  export class ZombieSound extends zombie.characters.IsoZombie$ZombieSound {}
  /** @customConstructor ZomboidBitFlag.new */
  export class ZomboidBitFlag extends zombie.ZomboidBitFlag {}
  /** @customConstructor ZomboidRadio.new */
  export class ZomboidRadio extends zombie.radio.ZomboidRadio {}
  /** @customConstructor Zone.new */
  export class Zone extends zombie.iso.IsoMetaGrid$Zone {}
  /** @customConstructor ZoneGeometryType.new */
  export class ZoneGeometryType extends zombie.iso.IsoMetaGrid$ZoneGeometryType {}
  /** @customConstructor ZoneType.new */
  export class ZoneType extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType {}
  /** @customConstructor engineStateTypes.new */
  export class engineStateTypes extends zombie.vehicles.BaseVehicle$engineStateTypes {}
  /** @customConstructor l_receive.new */
  export class l_receive extends zombie.network.packets.PlayerPacket$l_receive {}
  /** @customConstructor l_send.new */
  export class l_send extends zombie.network.packets.PlayerPacket$l_send {}
  /** @customConstructor vector2.new */
  export class vector2 extends zombie.core.math.PZMath$UnitTests$vector2 {}

  export type AbstractList = java.util.AbstractList<any>
  export type Appendable = java.lang.Appendable
  export type ArrayDeque = java.util.ArrayDeque<any>
  export type AttributedCharacterIterator = java.text.AttributedCharacterIterator
  export type Audio = fmod.fmod.Audio
  export type BiConsumer = java.util._function_.BiConsumer<any, any>
  export type BiFunction = java.util._function_.BiFunction<any, any, any>
  export type BitSet = java.util.BitSet
  export type BooleanSupplier = java.util._function_.BooleanSupplier
  export type Buffer = org.lwjgl.glfw.GLFWImage$Buffer
  export type BufferedImage = java.awt.image.BufferedImage
  export type BufferedInputStream = java.io.BufferedInputStream
  export type ByteBuffer = java.nio.ByteBuffer
  export type CRC32 = java.util.zip.CRC32
  export type Calendar = java.util.Calendar
  export type CharBuffer = java.nio.CharBuffer
  export type CharSequence = java.lang.CharSequence
  export type Class = java.lang.Class<any>
  export type ClassDebugInformation = se.krka.kahlua.integration.expose.ClassDebugInformation
  export type Collection = java.util.Collection<any>
  export type Comparator = java.util.Comparator<any>
  export type ConcurrentLinkedQueue = java.util.concurrent.ConcurrentLinkedQueue<any>
  export type Constructor = java.lang.reflect.Constructor<any>
  export type Consumer = java.util._function_.Consumer<any>
  export type Controller = org.lwjglx.input.Controller
  export type Coroutine = se.krka.kahlua.vm.Coroutine
  export type Cursor = org.lwjglx.input.Cursor
  export type DataInput = java.io.DataInput
  export type Date = java.util.Date
  export type DateFormat = java.text.DateFormat
  export type DateFormatSymbols = java.text.DateFormatSymbols
  export type Dimension = java.awt.Dimension
  export type Entry = java.util.Map$Entry<any, any>
  export type Enum = java.lang.Enum<any>
  export type Enumeration = java.util.Enumeration<any>
  export type Exception = java.lang.Exception
  export type FMODFootstep = fmod.fmod.FMODFootstep
  export type FMODVoice = fmod.fmod.FMODVoice
  export type FMOD_STUDIO_PARAMETER_DESCRIPTION = fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION
  export type FMOD_STUDIO_PARAMETER_ID = fmod.fmod.FMOD_STUDIO_PARAMETER_ID
  export type Field = java.lang.reflect.Field
  export type FieldPosition = java.text.FieldPosition
  export type File = java.io.File
  export type FileChannel = java.nio.channels.FileChannel
  export type FileDescriptor = java.io.FileDescriptor
  export type FloatBuffer = java.nio.FloatBuffer
  export type Function = java.util._function_.Function<any, any>
  export type GregorianCalendar = java.util.GregorianCalendar
  export type HashSet = java.util.HashSet<any>
  export type InetSocketAddress = java.net.InetSocketAddress
  export type InputStream = java.io.InputStream
  export type IntBuffer = java.nio.IntBuffer
  export type IntFunction = java.util._function_.IntFunction<any>
  export type Iterable = java.lang.Iterable<any>
  export type J2SEPlatform = se.krka.kahlua.j2se.J2SEPlatform
  export type KahluaConverterManager = se.krka.kahlua.converter.KahluaConverterManager
  export type KahluaTable = se.krka.kahlua.vm.KahluaTable
  export type KahluaTableImpl = se.krka.kahlua.j2se.KahluaTableImpl
  export type KahluaThread = se.krka.kahlua.vm.KahluaThread
  export type KeyEventQueue = org.lwjglx.input.KeyEventQueue
  export type LinkedHashMap = java.util.LinkedHashMap<any, any>
  export type List = java.util.List<any>
  export type ListIterator = java.util.ListIterator<any>
  export type LocalDateTime = java.time.LocalDateTime
  export type Locale = java.util.Locale
  export type LogListener = com.asledgehammer.crafthammer.api.event.log.LogListener
  export type LuaCallFrame = se.krka.kahlua.vm.LuaCallFrame
  export type LuaCaller = se.krka.kahlua.integration.LuaCaller
  export type LuaClosure = se.krka.kahlua.vm.LuaClosure
  export type Matrix2dc = org.joml.Matrix2dc
  export type Matrix2fc = org.joml.Matrix2fc
  export type Matrix3dc = org.joml.Matrix3dc
  export type Matrix3f = org.joml.Matrix3f
  export type Matrix3fc = org.joml.Matrix3fc
  export type Matrix3x2fc = org.joml.Matrix3x2fc
  export type Matrix4dc = org.joml.Matrix4dc
  export type Matrix4f = org.lwjgl.util.vector.Matrix4f
  export type Matrix4fc = org.joml.Matrix4fc
  export type Matrix4x3fc = org.joml.Matrix4x3fc
  export type Method = java.lang.reflect.Method
  export type NumberFormat = java.text.NumberFormat
  export type ObjectInput = java.io.ObjectInput
  export type ObjectOutput = java.io.ObjectOutput
  export type ObjectOutputStream = java.io.ObjectOutputStream
  export type OutputStream = java.io.OutputStream
  export type ParsePosition = java.text.ParsePosition
  export type Platform = se.krka.kahlua.vm.Platform
  export type Predicate = java.util._function_.Predicate<any>
  export type PrintStream = java.io.PrintStream
  export type PrintWriter = java.io.PrintWriter
  export type Prototype = se.krka.kahlua.vm.Prototype
  export type Quaternion = org.lwjgl.util.vector.Quaternion
  export type Quaternionf = org.joml.Quaternionf
  export type Quaternionfc = org.joml.Quaternionfc
  export type RandomAccessFile = java.io.RandomAccessFile
  export type Raster = java.awt.image.Raster
  export type ReadableColor = org.lwjgl.util.ReadableColor
  export type Reader = java.io.Reader
  export type ReentrantLock = java.util.concurrent.locks.ReentrantLock
  export type Runnable = java.lang.Runnable
  export type Set = java.util.Set<any>
  export type Spliterator = java.util.Spliterator<any>
  export type StackTraceElement = java.lang.StackTraceElement
  export type Stream = java.util.stream.Stream<any>
  export type StringBuffer = java.lang.StringBuffer
  export type Supplier = java.util._function_.Supplier<any>
  export type TFloatArrayList = gnu.trove.list.array.TFloatArrayList
  export type THashMap = gnu.trove.map.hash.THashMap<any, any>
  export type TIntArrayList = gnu.trove.list.array.TIntArrayList
  export type TLongObjectIterator = gnu.trove.iterator.TLongObjectIterator<any>
  export type TLongObjectMap = gnu.trove.map.TLongObjectMap<any>
  export type TLongObjectProcedure = gnu.trove.procedure.TLongObjectProcedure<any>
  export type TLongProcedure = gnu.trove.procedure.TLongProcedure
  export type TLongSet = gnu.trove.set.TLongSet
  export type TObjectFunction = gnu.trove._function_.TObjectFunction<any, any>
  export type TObjectObjectProcedure = gnu.trove.procedure.TObjectObjectProcedure<any, any>
  export type TObjectProcedure = gnu.trove.procedure.TObjectProcedure<any>
  export type TShortObjectHashMap = gnu.trove.map.hash.TShortObjectHashMap<any>
  export type Thread = java.lang.Thread
  export type ThreadLocal = java.lang.ThreadLocal<any>
  export type Throwable = java.lang.Throwable
  export type TimeZone = java.util.TimeZone
  export type ToDoubleFunction = java.util._function_.ToDoubleFunction<any>
  export type ToIntFunction = java.util._function_.ToIntFunction<any>
  export type ToLongFunction = java.util._function_.ToLongFunction<any>
  export type URI = java.net.URI
  export type UUID = java.util.UUID
  export type UnaryOperator = java.util._function_.UnaryOperator<any>
  export type Vector2d = org.joml.Vector2d
  export type Vector2dc = org.joml.Vector2dc
  export type Vector2fc = org.joml.Vector2fc
  export type Vector2i = org.joml.Vector2i
  export type Vector2ic = org.joml.Vector2ic
  export type Vector3d = org.joml.Vector3d
  export type Vector3dc = org.joml.Vector3dc
  export type Vector3f = org.lwjgl.util.vector.Vector3f
  export type Vector3fc = org.joml.Vector3fc
  export type Vector3i = org.joml.Vector3i
  export type Vector3ic = org.joml.Vector3ic
  export type Vector4f = org.joml.Vector4f
  export type Writer = java.io.Writer

  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGridSquare arg0, int arg1): void
   */
  export function AddNoiseToken(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, int arg1, int arg2): void
   */
  export function AddWorldSound(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (long arg0, String arg1, IsoPlayer arg2): void
   */
  export function InvMngGetItem(arg0: number, arg1: string, arg2: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (long arg0, IsoPlayer arg1): void
   */
  export function InvMngRemoveItem(arg0: number, arg1: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function ProceedFactionMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function ProcessAdminChatMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function ProcessSafehouseMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function SendCommandToServer(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0): number
   *  - (double arg0, double arg1): number
   */
  export function ZombRand(arg0: number, arg1?: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0, double arg1): number
   */
  export function ZombRandBetween(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1): number
   */
  export function ZombRandFloat(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Faction arg0, String arg1): void
   */
  export function acceptFactionInvite(arg0: zombie.characters.Faction, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, String arg1): void
   */
  export function acceptSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, boolean arg2): void
   */
  export function acceptTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function activateJoypadOnSteamDeck(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function activateSteamOverlayToWebPage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function activateSteamOverlayToWorkshop(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function activateSteamOverlayToWorkshopItem(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function activateSteamOverlayToWorkshopUser(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function addAllBurntVehicles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function addAllSmashedVehicles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   *  - (Predicate arg0): void
   */
  export function addAllVehicles(arg0?: java.util._function_.Predicate<zombie.scripting.objects.VehicleScript>): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function addCarCrash(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.vehicles.BaseVehicle
   */
  export function addPhysicsObject(): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, int arg2): void
   */
  export function addTicket(arg0: string, arg1: string, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): void
   */
  export function addUserlog(arg0: string, arg1: string, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.vehicles.BaseVehicle
   */
  export function addVehicle(arg0: string): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, IsoDirections arg1, Integer arg2, IsoGridSquare arg3): zombie.vehicles.BaseVehicle
   */
  export function addVehicleDebug(arg0: string, arg1: zombie.iso.IsoDirections, arg2: number, arg3: zombie.iso.IsoGridSquare): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function addVirtualZombie(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, int arg2): void
   */
  export function addWarningPoint(arg0: string, arg1: string, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2, int arg3, String arg4, Integer arg5): java.util.ArrayList<zombie.characters.IsoZombie>
   *  - (int arg0, int arg1, int arg2, int arg3, String arg4, Integer arg5, boolean arg6, boolean arg7, boolean arg8, boolean arg9, float arg10): java.util.ArrayList<zombie.characters.IsoZombie>
   */
  export function addZombiesInOutfit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6?: boolean, arg7?: boolean, arg8?: boolean, arg9?: boolean, arg10?: number): java.util.ArrayList<zombie.characters.IsoZombie>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function assaultPlayer(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function attachTrailerToPlayerVehicle(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function backToSinglePlayer(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function breakpoint(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canConnect(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canInviteFriends(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canModifyPlayerScoreboard(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canModifyPlayerStats(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canSeePlayerStats(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkPlayerCanUseChat(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkSaveFileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkSaveFolderExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function checkSavePlayerExists(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): zombie.scripting.objects.Item
   */
  export function cloneItemType(arg0: string, arg1: string): zombie.scripting.objects.Item;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0): void
   */
  export function configureLighting(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function connectToServerStateCallback(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): se.krka.kahlua.vm.KahluaTable
   *  - (KahluaTable arg0, KahluaTable arg1): se.krka.kahlua.vm.KahluaTable
   */
  export function copyTable(arg0: se.krka.kahlua.vm.KahluaTable, arg1?: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
   */
  export function createHordeFromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): void
   */
  export function createHordeInAreaTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): void
   */
  export function createItemTransaction(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, String arg4): zombie.scripting.objects.Item
   */
  export function createNewScriptItem(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): zombie.scripting.objects.Item;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGridSquare arg0, int arg1): zombie.iso.objects.IsoDeadBody
   */
  export function createRandomDeadBody(arg0: zombie.iso.IsoGridSquare, arg1: number): zombie.iso.objects.IsoDeadBody;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function createRegionFile(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function createStory(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, IsoGridSquare arg1): void
   */
  export function createTile(arg0: string, arg1: zombie.iso.IsoGridSquare): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function createWorld(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, SurvivorDesc arg3, int arg4, IsoDirections arg5): zombie.characters.IsoZombie
   */
  export function createZombie(arg0: number, arg1: number, arg2: number, arg3: zombie.characters.SurvivorDesc, arg4: number, arg5: zombie.iso.IsoDirections): zombie.characters.IsoZombie;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function debugFullyStreamedIn(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): void
   *  - (Object arg0, int arg1): void
   */
  export function debugLuaTable(arg0: any, arg1?: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Double arg0): void
   */
  export function debugSetRoomType(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteAllGameModeSaves(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deletePlayerSave(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteSandboxPreset(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteSave(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function disconnect(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): void
   */
  export function doChallenge(arg0: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function doKeyPress(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): void
   */
  export function doTutorial(arg0: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (UIElement arg0, float arg1, float arg2, float arg3): void
   */
  export function drawOverheadMap(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endFileInput(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endFileOutput(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endHelicopter(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endTextFileInput(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, KahluaTable arg1): void
   */
  export function executeQuery(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function fileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Short arg0): void
   */
  export function focusOnTab(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (GameState arg0): void
   */
  export function forceChangeState(arg0: zombie.gameStates.GameState): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function forceDisconnect(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function forceSnowCheck(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getAbsoluteSaveFolderName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getAccessLevel(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getActivatedMods(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getAllBeardStyles(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0): java.util.ArrayList<string>
   */
  export function getAllDecalNamesForItem(arg0: zombie.inventory.InventoryItem): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): java.util.ArrayList<string>
   */
  export function getAllHairStyles(arg0: boolean): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
   */
  export function getAllItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getAllItemsForBodyLocation(arg0: string): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): java.util.ArrayList<string>
   */
  export function getAllOutfits(arg0: boolean): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe>
   */
  export function getAllRecipes(): java.util.ArrayList<zombie.scripting.objects.Recipe>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<java.io.BufferedReader>
   */
  export function getAllSavedPlayers(): java.util.List<java.io.BufferedReader>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getAllVehicles(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.BaseAmbientStreamManager
   */
  export function getAmbientStreamManager(): zombie.BaseAmbientStreamManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.AnimationViewerState
   */
  export function getAnimationViewerState(): zombie.gameStates.AnimationViewerState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.AttachmentEditorState
   */
  export function getAttachmentEditorState(): zombie.gameStates.AttachmentEditorState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.skinnedmodel.population.BeardStyles
   */
  export function getBeardStylesInstance(): zombie.core.skinnedmodel.population.BeardStyles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.characters.IsoGameCharacter
   */
  export function getBehaviourDebugPlayer(): zombie.characters.IsoGameCharacter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getButtonCount(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0): number
   */
  export function getCallframeTop(arg0: se.krka.kahlua.vm.Coroutine): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCameraOffX(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCameraOffY(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoCell
   */
  export function getCell(): zombie.iso.IsoCell;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, int arg1): java.lang.reflect.Field
   */
  export function getClassField(arg0: any, arg1: number): java.lang.reflect.Field;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, Field arg1): any
   */
  export function getClassFieldVal(arg0: any, arg1: java.lang.reflect.Field): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, int arg1): java.lang.reflect.Method
   */
  export function getClassFunction(arg0: any, arg1: number): java.lang.reflect.Method;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getClientUsername(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.weather.ClimateManager
   */
  export function getClimateManager(): zombie.iso.weather.ClimateManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.weather.ClimateMoon
   */
  export function getClimateMoon(): zombie.iso.weather.ClimateMoon;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
   */
  export function getConnectedPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerAxisCount(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): number
   */
  export function getControllerAxisValue(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerButtonCount(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getControllerCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): number
   */
  export function getControllerDeadZone(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getControllerGUID(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getControllerName(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerPovX(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerPovY(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.Core
   */
  export function getCore(): zombie.core.Core;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): se.krka.kahlua.vm.LuaCallFrame
   */
  export function getCoroutineCallframeStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): se.krka.kahlua.vm.LuaCallFrame;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): any
   */
  export function getCoroutineObjStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): any
   */
  export function getCoroutineObjStackWithBase(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0): number
   */
  export function getCoroutineTop(arg0: se.krka.kahlua.vm.Coroutine): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.Coroutine
   */
  export function getCurrentCoroutine(): se.krka.kahlua.vm.Coroutine;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getCurrentUserProfileName(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getCurrentUserSteamID(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function getDBSchema(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getDebug(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.debug.DebugOptions
   */
  export function getDebugOptions(): zombie.debug.DebugOptions;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoObject arg1): zombie.iso.IsoDirections
   */
  export function getDirectionTo(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject): zombie.iso.IsoDirections;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.vehicles.EditVehicleState
   */
  export function getEditVehicleState(): zombie.vehicles.EditVehicleState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.erosion.ErosionMain
   */
  export function getErosion(): zombie.erosion.ErosionMain;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>
   */
  export function getEvolvedRecipes(): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.audio.BaseSoundBank
   */
  export function getFMODSoundBank(): zombie.audio.BaseSoundBank;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataInputStream
   */
  export function getFileInput(arg0: string): java.io.DataInputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataOutputStream
   */
  export function getFileOutput(arg0: string): java.io.DataOutputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1): java.io.BufferedReader
   */
  export function getFileReader(arg0: string, arg1: boolean): java.io.BufferedReader;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getFileSeparator(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1, boolean arg2): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
   */
  export function getFileWriter(arg0: string, arg1: boolean, arg2: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaCallFrame arg0): string
   */
  export function getFilenameOfCallframe(arg0: se.krka.kahlua.vm.LuaCallFrame): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaClosure arg0): string
   */
  export function getFilenameOfClosure(arg0: se.krka.kahlua.vm.LuaClosure): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaClosure arg0): number
   */
  export function getFirstLineOfClosure(arg0: se.krka.kahlua.vm.LuaClosure): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getFriendsList(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getFullSaveDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.GameClient
   */
  export function getGameClient(): zombie.network.GameClient;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataInputStream
   */
  export function getGameFilesInput(arg0: string): java.io.DataInputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.BufferedReader
   */
  export function getGameFilesTextInput(arg0: string): java.io.BufferedReader;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getGameSpeed(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.GameTime
   */
  export function getGameTime(): zombie.GameTime;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getGametimeTimestamp(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.skinnedmodel.population.HairStyles
   */
  export function getHairStylesInstance(): zombie.core.skinnedmodel.population.HairStyles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getHourMinute(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoMarkers
   */
  export function getIsoMarkers(): zombie.iso.IsoMarkers;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemNameFromFullType(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemText(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadAButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadAimingAxisX(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadAimingAxisY(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadBButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadBackButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadLBumper(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadLeftStickButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadMovementAxisX(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadMovementAxisY(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadRBumper(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadRightStickButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadStartButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadXButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadYButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getKeyCode(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getKeyName(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getLastPlayedDate(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<string>
   */
  export function getLastStandPlayerFileNames(): java.util.List<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getLastStandPlayersDirectory(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getLatestSave(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaCallFrame arg0): number
   */
  export function getLineNumber(arg0: se.krka.kahlua.vm.LuaCallFrame): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getLoadedLua(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getLoadedLuaCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0): number
   */
  export function getLocalVarCount(arg0: se.krka.kahlua.vm.Coroutine): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): string
   */
  export function getLocalVarName(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): number
   */
  export function getLocalVarStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getLotDirectories(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getLuaDebuggerErrorCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getLuaDebuggerErrors(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getMapDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.util.ArrayList<string>
   */
  export function getMapFoldersForMod(arg0: string): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getMapInfo(arg0: string): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMaxActivePlayers(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMaxPlayers(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Method arg0, int arg1): string
   */
  export function getMethodParameter(arg0: java.lang.reflect.Method, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Method arg0): number
   */
  export function getMethodParameterCount(arg0: java.lang.reflect.Method): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getModDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, boolean arg2): java.io.BufferedReader
   */
  export function getModFileReader(arg0: string, arg1: string, arg2: boolean): java.io.BufferedReader;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, boolean arg2, boolean arg3): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
   */
  export function getModFileWriter(arg0: string, arg1: string, arg2: boolean, arg3: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
   */
  export function getModInfo(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
   */
  export function getModInfoByID(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<string>
   */
  export function getMods(): java.util.List<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseX(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseXScaled(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseY(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseYScaled(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getMyDocumentFolder(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getNumActivePlayers(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): number
   */
  export function getNumClassFields(arg0: any): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): number
   */
  export function getNumClassFunctions(arg0: any): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
   */
  export function getOnlinePlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getOnlineUsername(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getPacketCounts(arg0: number): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.PerformanceSettings
   */
  export function getPerformance(): zombie.core.PerformanceSettings;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.characters.IsoPlayer
   */
  export function getPlayer(): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.characters.IsoPlayer
   */
  export function getPlayerByOnlineID(arg0: number): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.characters.IsoPlayer
   */
  export function getPlayerFromUsername(arg0: string): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getPlayerInfo(arg0: zombie.characters.IsoPlayer): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenHeight(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenLeft(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenTop(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenWidth(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getPublicServersList(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoPuddles
   */
  export function getPuddlesManager(): zombie.iso.IsoPuddles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.radio.RadioAPI
   */
  export function getRadioAPI(): zombie.radio.RadioAPI;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getRadioText(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Language arg0): java.util.ArrayList<string>
   */
  export function getRadioTranslators(arg0: zombie.core.Language): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getRandomUUID(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getRecipeDisplayName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getReconnectCountdownTimer(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.SpriteRenderer
   */
  export function getRenderer(): zombie.core.SpriteRenderer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.radio.StorySounds.SLSoundManager
   */
  export function getSLSoundManager(): zombie.radio.StorySounds.SLSoundManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1, boolean arg2): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
   */
  export function getSandboxFileWriter(arg0: string, arg1: boolean, arg2: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.SandboxOptions
   */
  export function getSandboxOptions(): zombie.SandboxOptions;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<string>
   */
  export function getSandboxPresets(): java.util.List<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.util.ArrayList<java.io.File>
   */
  export function getSaveDirectory(arg0: string): java.util.ArrayList<java.io.File>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getSaveDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getSaveInfo(arg0: string): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (File arg0): string
   */
  export function getSaveName(arg0: java.io.File): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.scripting.ScriptManager
   */
  export function getScriptManager(): zombie.scripting.ScriptManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.SearchMode
   */
  export function getSearchMode(): zombie.iso.SearchMode;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerAddressFromArgs(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getServerList(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerListFile(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function getServerModData(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerName(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.ServerOptions
   */
  export function getServerOptions(): zombie.network.ServerOptions;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerPasswordFromArgs(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getServerSavedWorldVersion(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.ServerSettingsManager
   */
  export function getServerSettingsManager(): zombie.network.ServerSettingsManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getServerSpawnRegions(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getServerStatistic(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getServerStatisticEnable(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getShortenedFilename(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.ai.sadisticAIDirector.SleepingEvent
   */
  export function getSleepingEvent(): zombie.ai.sadisticAIDirector.SleepingEvent;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.BaseSoundManager
   */
  export function getSoundManager(): zombie.BaseSoundManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.characters.IsoPlayer
   */
  export function getSpecificPlayer(arg0: number): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.iso.sprite.IsoSprite
   */
  export function getSprite(arg0: string): zombie.iso.sprite.IsoSprite;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.iso.sprite.IsoSpriteManager
   */
  export function getSpriteManager(arg0: string): zombie.iso.sprite.IsoSpriteManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0, double arg1, double arg2): zombie.iso.IsoGridSquare
   */
  export function getSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getStatistics(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getSteamAvatarFromSteamID(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getSteamAvatarFromUsername(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getSteamIDFromUsername(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getSteamModeActive(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getSteamProfileNameFromSteamID(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getSteamProfileNameFromUsername(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getSteamScoreboard(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getSteamWorkshopItemIDs(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$Mod>
   */
  export function getSteamWorkshopItemMods(arg0: string): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$Mod>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.core.znet.SteamWorkshopItem>
   */
  export function getSteamWorkshopStagedItems(): java.util.ArrayList<zombie.core.znet.SteamWorkshopItem>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): void
   */
  export function getTableResult(arg0: string, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   *  - (String arg0, Object arg1): string
   *  - (String arg0, Object arg1, Object arg2): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): string
   */
  export function getText(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.ui.TextManager
   */
  export function getTextManager(): zombie.ui.TextManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getTextMediaEN(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   *  - (String arg0, Object arg1): string
   *  - (String arg0, Object arg1, Object arg2): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): string
   */
  export function getTextOrNull(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getTexture(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): zombie.core.textures.Texture
   */
  export function getTextureFromSaveDir(arg0: string, arg1: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function getTickets(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getTime(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getTimeInMillis(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getTimestamp(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getTimestampMs(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Language arg0): java.util.ArrayList<string>
   */
  export function getTranslatorCredits(arg0: zombie.core.Language): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataInputStream
   */
  export function getUrlInputStream(arg0: string): java.io.DataInputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.vehicles.BaseVehicle
   */
  export function getVehicleById(arg0: number): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (BaseVehicle arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getVehicleInfo(arg0: zombie.vehicles.BaseVehicle): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$VehicleZone
   */
  export function getVehicleZoneAt(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$VehicleZone;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoWorld
   */
  export function getWorld(): zombie.iso.IsoWorld;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.WorldMarkers
   */
  export function getWorldMarkers(): zombie.iso.WorldMarkers;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.WorldSoundManager
   */
  export function getWorldSoundManager(): zombie.WorldSoundManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoZombie arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getZombieInfo(arg0: zombie.characters.IsoZombie): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.radio.ZomboidRadio
   */
  export function getZomboidRadio(): zombie.radio.ZomboidRadio;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): zombie.iso.IsoMetaGrid$Zone
   */
  export function getZone(arg0: number, arg1: number, arg2: number): zombie.iso.IsoMetaGrid$Zone;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>
   */
  export function getZones(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.iso.IsoMetaGrid$Zone>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function hasBreakpoint(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): boolean
   */
  export function hasDataBreakpoint(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): boolean
   */
  export function hasDataReadBreakpoint(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function initUISystem(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.inventory.InventoryItem
   *  - (Item arg0): zombie.inventory.InventoryItem
   */
  export function instanceItem(arg0: string | zombie.scripting.objects.Item): zombie.inventory.InventoryItem;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, String arg1): boolean
   */
  export function instof(arg0: any, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function inviteFriend(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function is64bit(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isAccessLevel(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isAdmin(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isAltKeyDown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isClient(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isControllerConnected(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isCoopHost(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isCtrlKeyDown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function isCurrentExecutionPoint(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isDebugEnabled(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isDemo(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isDesktopOpenSupported(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isFloatingGamepadTextInputVisible(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isGamePaused(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isIngameState(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): boolean
   */
  export function isItemTransactionConsistent(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadConnected(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadDown(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLBPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLTPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLeft(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLeftStickButtonPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): boolean
   */
  export function isJoypadPressed(arg0: number, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRBPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRTPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRight(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRightStickButtonPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadUp(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isKeyDown(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isKeyPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Mod arg0): boolean
   */
  export function isModActive(arg0: zombie.gameStates.ChooseGameInfo$Mod): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isMouseButtonDown(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isPublicServerListAllowed(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isServer(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isServerSoftReset(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isShiftKeyDown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): boolean
   */
  export function isSoundPlaying(arg0: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSteamOverlayEnabled(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSteamRunningOnSteamDeck(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSystemLinux(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSystemMacOS(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSystemWindows(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, String arg1): boolean
   */
  export function isType(arg0: any, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isValidSteamID(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isValidUserName(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isXBOXController(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.areas.isoregion.IsoRegionsRenderer
   */
  export function isoRegionsRenderer(): zombie.iso.areas.isoregion.IsoRegionsRenderer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function isoToScreenX(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function isoToScreenY(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadSkinnedZomboidModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadStaticZomboidModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadVehicleModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): zombie.core.skinnedmodel.model.Model
   */
  export function loadZomboidModel(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): string
   */
  export function localVarName(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function luaDebug(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function manipulateSavefile(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): string
   */
  export function moduleDotType(arg0: string, arg1: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function openURl(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function pauseSoundAndMusic(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3): void
   */
  export function ping(arg0: string, arg1: string, arg2: string, arg3: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, IsoGridSquare arg1): void
   */
  export function playServerSound(arg0: string, arg1: zombie.iso.IsoGridSquare): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function proceedPM(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processGeneralMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processSayMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processShoutMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ArrayList arg0, LuaClosure arg1, Object arg2): void
   */
  export function querySteamWorkshopItemDetails(arg0: java.util.ArrayList<string>, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function queueCharEvent(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function queueKeyEvent(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): void
   */
  export function rainConfig(arg0: string, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function reactivateJoypadAfterResetLua(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function refreshAnimSets(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadActionGroups(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadControllerConfigFiles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadEngineRPM(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadLuaFile(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadModelsMatching(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadServerLuaFile(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadSoundFiles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadVehicleTextures(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadVehicles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): void
   */
  export function removeItemTransaction(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function removeTicket(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): void
   */
  export function removeUserlog(arg0: string, arg1: string, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, int arg8): void
   */
  export function renderIsoCircle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): string
   */
  export function replaceWith(arg0: string, arg1: string, arg2: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function requestPacketCounts(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1): void
   */
  export function requestTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function requestUserlog(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): any
   */
  export function require(arg0: string): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function resetRegionFile(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function resumeSoundAndMusic(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function revertToKeyboardAndMouse(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function sanitizeWorldName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function save(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function saveControllerSettings(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function saveGame(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function saveModsFile(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function scoreboardUpdate(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function screenToIsoX(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function screenToIsoY(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, boolean arg2, float arg3, boolean arg4, String arg5): void
   */
  export function sendBandage(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: boolean, arg5: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
   */
  export function sendCataplasm(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3): void
   */
  export function sendCleanBurn(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, KahluaTable arg2): void
   *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
   */
  export function sendClientCommand(arg0: string | zombie.characters.IsoPlayer, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendClothing(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3): void
   */
  export function sendDisinfect(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Faction arg0, IsoPlayer arg1, String arg2): void
   */
  export function sendFactionInvite(arg0: zombie.characters.Faction, arg1: zombie.characters.IsoPlayer, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, ArrayList arg1, IsoPlayer arg2, String arg3, String arg4): boolean
   */
  export function sendItemListNet(arg0: zombie.characters.IsoPlayer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: zombie.characters.IsoPlayer, arg3: string, arg4: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoObject arg0, ItemContainer arg1): void
   */
  export function sendItemsInContainer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPersonalColor(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function sendPing(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPlayerExtraInfo(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPlayerStatsChange(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2): void
   */
  export function sendRemoveBullet(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, boolean arg3): void
   */
  export function sendRemoveGlass(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendRequestInventory(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, IsoPlayer arg1, String arg2): void
   */
  export function sendSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: zombie.characters.IsoPlayer, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, KahluaTable arg2): void
   *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
   */
  export function sendServerCommand(arg0: string | zombie.characters.IsoPlayer, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, boolean arg2, float arg3, String arg4): void
   */
  export function sendSplint(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoGameCharacter arg1, BodyPart arg2, InventoryItem arg3, boolean arg4): void
   */
  export function sendStitch(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.characters.BodyDamage.BodyPart, arg3: zombie.inventory.InventoryItem, arg4: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendVisual(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5): void
   */
  export function serverConnect(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function serverConnectCoop(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function serverFileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function setActivePlayer(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function setAdmin(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): void
   */
  export function setAggroTarget(arg0: number, arg1: number, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setBehaviorStep(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, float arg2): void
   */
  export function setControllerDeadZone(arg0: number, arg1: number, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function setDebugToggleControllerPluggedIn(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function setGameSpeed(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): void
   */
  export function setModelMetaData(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function setMouseXY(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, IsoPlayer arg2, String arg3): void
   */
  export function setPlayerJoypad(arg0: number, arg1: number, arg2: zombie.characters.IsoPlayer, arg3: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function setPlayerMouse(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, boolean arg1): void
   */
  export function setPlayerMovementActive(arg0: number, arg1: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, int arg1): void
   */
  export function setProgressBarValue(arg0: zombie.characters.IsoPlayer, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0): void
   */
  export function setPuddles(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, int arg2): void
   */
  export function setSavefilePlayer1(arg0: string, arg1: string, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setServerStatisticEnable(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setShowPausedMessage(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showAnimationViewer(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showAttachmentEditor(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showChunkDebugger(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showFolderInDesktop(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showGlobalObjectDebugger(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0, int arg1, int arg2, int arg3, int arg4): boolean
   */
  export function showSteamFloatingGamepadTextInput(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0, boolean arg1, String arg2, int arg3, String arg4): boolean
   */
  export function showSteamGamepadTextInput(arg0: boolean, arg1: boolean, arg2: string, arg3: number, arg4: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showVehicleEditor(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showWorldMapEditor(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, String arg2): void
   */
  export function showWrongChatTabMessage(arg0: number, arg1: number, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoObject arg0): void
   */
  export function sledgeDestroy(arg0: zombie.iso.IsoObject): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, int arg5): void
   */
  export function spawnHorde(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): boolean
   */
  export function spawnpointsExistsForMod(arg0: string, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.network.Server
   */
  export function steamGetInternetServerDetails(arg0: number): zombie.network.Server;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function steamReleaseInternetServersRequest(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function steamRequestInternetServersCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function steamRequestInternetServersList(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function steamRequestServerDetails(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function steamRequestServerRules(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function stopPing(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (long arg0): void
   */
  export function stopSound(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): string
   */
  export function tabToX(arg0: string, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   *  - (String arg0): void
   */
  export function takeScreenshot(arg0?: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function testHelicopter(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function testSound(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): void
   */
  export function timSort(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0): number
   */
  export function toInt(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): void
   */
  export function toggleBreakOnChange(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): void
   */
  export function toggleBreakOnRead(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): void
   */
  export function toggleBreakpoint(arg0: string, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Mod arg0, boolean arg1): void
   */
  export function toggleModActive(arg0: zombie.gameStates.ChooseGameInfo$Mod, arg1: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function toggleSafetyServer(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function toggleVehicleRenderToTexture(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
   */
  export function tradingUISendAddItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
   */
  export function tradingUISendRemoveItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
   */
  export function tradingUISendUpdateState(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (HashMap arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function transformIntoKahluaTable(arg0: java.util.HashMap<any, any>): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointXInOverheadMapToWindow(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointXInOverheadMapToWorld(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointYInOverheadMapToWindow(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointYInOverheadMapToWorld(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   *  - (String arg0, Object arg1): void
   *  - (String arg0, Object arg1, Object arg2): void
   *  - (String arg0, Object arg1, Object arg2, Object arg3): void
   *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
   */
  export function triggerEvent(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1, boolean arg2): void
   */
  export function updateChatSettings(arg0: string, arg1: boolean, arg2: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function updateFire(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function useStaticErosionRand(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function useTextureFiltering(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function wasKeyDown(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function wasMouseActiveMoreRecentlyThanJoypad(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function writeLog(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function zpopClearZombies(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.popman.ZombiePopulationRenderer
   */
  export function zpopNewRenderer(): zombie.popman.ZombiePopulationRenderer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function zpopSpawnNow(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function zpopSpawnTimeToZero(arg0: number, arg1: number): void;
  export function addEventListener(id: string, listener: any): void;
  export function removeEventListener(id: string, listener: any): void;

//////////////////////////////////////
// [PARTIAL] : Lua.api.partial.d.ts //
//////////////////////////////////////

  // [client/Blacksmith/ISUI/ISBlacksmithMenu.d.ts]
  export class ISBlacksmithMenu {}

  // [client/Blacksmith/ISUI/ISFurnaceInfoWindow.d.ts]
  /** @customConstructor ISFurnaceInfoWindow:new */
  export class ISFurnaceInfoWindow extends lua.client.Blacksmith.ISUI.ISFurnaceInfoWindow {}

  // [client/Blacksmith/TimedActions/ISAddCoalInFurnace.d.ts]
  /** @customConstructor ISAddCoalInFurnace:new */
  export class ISAddCoalInFurnace extends lua.client.Blacksmith.TimedActions.ISAddCoalInFurnace {}

  // [client/Blacksmith/TimedActions/ISAddLogsInDrum.d.ts]
  /** @customConstructor ISAddLogsInDrum:new */
  export class ISAddLogsInDrum extends lua.client.Blacksmith.TimedActions.ISAddLogsInDrum {}

  // [client/Blacksmith/TimedActions/ISDrumLightFromKindle.d.ts]
  /** @customConstructor ISDrumLightFromKindle:new */
  export class ISDrumLightFromKindle extends lua.client.Blacksmith.TimedActions.ISDrumLightFromKindle {}

  // [client/Blacksmith/TimedActions/ISDrumLightFromLiterature.d.ts]
  /** @customConstructor ISDrumLightFromLiterature:new */
  export class ISDrumLightFromLiterature extends lua.client.Blacksmith.TimedActions.ISDrumLightFromLiterature {}

  // [client/Blacksmith/TimedActions/ISDrumLightFromPetrol.d.ts]
  /** @customConstructor ISDrumLightFromPetrol:new */
  export class ISDrumLightFromPetrol extends lua.client.Blacksmith.TimedActions.ISDrumLightFromPetrol {}

  // [client/Blacksmith/TimedActions/ISEmptyDrum.d.ts]
  /** @customConstructor ISEmptyDrum:new */
  export class ISEmptyDrum extends lua.client.Blacksmith.TimedActions.ISEmptyDrum {}

  // [client/Blacksmith/TimedActions/ISFurnaceInfoAction.d.ts]
  /** @customConstructor ISFurnaceInfoAction:new */
  export class ISFurnaceInfoAction extends lua.client.Blacksmith.TimedActions.ISFurnaceInfoAction {}

  // [client/Blacksmith/TimedActions/ISFurnaceLightFromKindle.d.ts]
  /** @customConstructor ISFurnaceLightFromKindle:new */
  export class ISFurnaceLightFromKindle extends lua.client.Blacksmith.TimedActions.ISFurnaceLightFromKindle {}

  // [client/Blacksmith/TimedActions/ISFurnaceLightFromLiterature.d.ts]
  /** @customConstructor ISFurnaceLightFromLiterature:new */
  export class ISFurnaceLightFromLiterature extends lua.client.Blacksmith.TimedActions.ISFurnaceLightFromLiterature {}

  // [client/Blacksmith/TimedActions/ISFurnaceLightFromPetrol.d.ts]
  /** @customConstructor ISFurnaceLightFromPetrol:new */
  export class ISFurnaceLightFromPetrol extends lua.client.Blacksmith.TimedActions.ISFurnaceLightFromPetrol {}

  // [client/Blacksmith/TimedActions/ISPutOutFireDrum.d.ts]
  /** @customConstructor ISPutOutFireDrum:new */
  export class ISPutOutFireDrum extends lua.client.Blacksmith.TimedActions.ISPutOutFireDrum {}

  // [client/Blacksmith/TimedActions/ISRemoveCharcoal.d.ts]
  /** @customConstructor ISRemoveCharcoal:new */
  export class ISRemoveCharcoal extends lua.client.Blacksmith.TimedActions.ISRemoveCharcoal {}

  // [client/Blacksmith/TimedActions/ISRemoveDrum.d.ts]
  /** @customConstructor ISRemoveDrum:new */
  export class ISRemoveDrum extends lua.client.Blacksmith.TimedActions.ISRemoveDrum {}

  // [client/Blacksmith/TimedActions/ISStopFurnaceFire.d.ts]
  /** @customConstructor ISStopFurnaceFire:new */
  export class ISStopFurnaceFire extends lua.client.Blacksmith.TimedActions.ISStopFurnaceFire {}

  // [client/Blacksmith/TimedActions/ISUseBellows.d.ts]
  /** @customConstructor ISUseBellows:new */
  export class ISUseBellows extends lua.client.Blacksmith.TimedActions.ISUseBellows {}

  // [server/BuildingObjects/ISAnvil.d.ts]
  /** @customConstructor ISAnvil:new */
  export class ISAnvil extends lua.server.BuildingObjects.ISAnvil {}

  // [server/BuildingObjects/ISBarbedWire.d.ts]
  /** @customConstructor ISBarbedWire:new */
  export class ISBarbedWire extends lua.server.BuildingObjects.ISBarbedWire {}

  // [server/BuildingObjects/ISBSFurnace.d.ts]
  /** @customConstructor ISBSFurnace:new */
  export class ISBSFurnace extends lua.server.BuildingObjects.ISBSFurnace {}

  // [server/BuildingObjects/ISBuildCursorMouse.d.ts]
  /** @customConstructor ISBuildCursorMouse:new */
  export class ISBuildCursorMouse extends lua.server.BuildingObjects.ISBuildCursorMouse {}

  // [server/BuildingObjects/ISBuildingObject.d.ts]
  /** @customConstructor ISBuildingObject:new */
  export class ISBuildingObject extends lua.server.BuildingObjects.ISBuildingObject {}

  // [server/BuildingObjects/ISBuildUtil.d.ts]
  export class buildUtil {}

  // [server/BuildingObjects/ISChopTreeCursor.d.ts]
  /** @customConstructor ISChopTreeCursor:new */
  export class ISChopTreeCursor extends lua.server.BuildingObjects.ISChopTreeCursor {}

  // [server/BuildingObjects/ISCleanBloodCursor.d.ts]
  /** @customConstructor ISCleanBloodCursor:new */
  export class ISCleanBloodCursor extends lua.server.BuildingObjects.ISCleanBloodCursor {}

  // [server/BuildingObjects/ISCompost.d.ts]
  /** @customConstructor ISCompost:new */
  export class ISCompost extends lua.server.BuildingObjects.ISCompost {}

  // [server/BuildingObjects/ISDestroyCursor.d.ts]
  /** @customConstructor ISDestroyCursor:new */
  export class ISDestroyCursor extends lua.server.BuildingObjects.ISDestroyCursor {}

  // [server/BuildingObjects/ISDoubleDoor.d.ts]
  /** @customConstructor ISDoubleDoor:new */
  export class ISDoubleDoor extends lua.server.BuildingObjects.ISDoubleDoor {}

  // [server/BuildingObjects/ISDoubleTileFurniture.d.ts]
  /** @customConstructor ISDoubleTileFurniture:new */
  export class ISDoubleTileFurniture extends lua.server.BuildingObjects.ISDoubleTileFurniture {}

  // [server/BuildingObjects/ISEmptyGraves.d.ts]
  /** @customConstructor ISEmptyGraves:new */
  export class ISEmptyGraves extends lua.server.BuildingObjects.ISEmptyGraves {}

  // [server/BuildingObjects/ISLightSource.d.ts]
  /** @customConstructor ISLightSource:new */
  export class ISLightSource extends lua.server.BuildingObjects.ISLightSource {}

  // [server/BuildingObjects/ISMoveableCursor.d.ts]
  /** @customConstructor ISMoveableCursor:new */
  export class ISMoveableCursor extends lua.server.BuildingObjects.ISMoveableCursor {}

  // [server/BuildingObjects/ISNaturalFloor.d.ts]
  /** @customConstructor ISNaturalFloor:new */
  export class ISNaturalFloor extends lua.server.BuildingObjects.ISNaturalFloor {}

  // [server/BuildingObjects/ISPaintCursor.d.ts]
  /** @customConstructor ISPaintCursor:new */
  export class ISPaintCursor extends lua.server.BuildingObjects.ISPaintCursor {}

  // [server/BuildingObjects/ISPlace3DItemCursor.d.ts]
  /** @customConstructor ISPlace3DItemCursor:new */
  export class ISPlace3DItemCursor extends lua.server.BuildingObjects.ISPlace3DItemCursor {}

  // [server/BuildingObjects/ISRemovePlantCursor.d.ts]
  /** @customConstructor ISRemovePlantCursor:new */
  export class ISRemovePlantCursor extends lua.server.BuildingObjects.ISRemovePlantCursor {}

  // [server/BuildingObjects/ISSelectCursor.d.ts]
  /** @customConstructor ISSelectCursor:new */
  export class ISSelectCursor extends lua.server.BuildingObjects.ISSelectCursor {}

  // [server/BuildingObjects/ISShovelGroundCursor.d.ts]
  /** @customConstructor ISShovelGroundCursor:new */
  export class ISShovelGroundCursor extends lua.server.BuildingObjects.ISShovelGroundCursor {}

  // [server/BuildingObjects/ISSimpleFurniture.d.ts]
  /** @customConstructor ISSimpleFurniture:new */
  export class ISSimpleFurniture extends lua.server.BuildingObjects.ISSimpleFurniture {}

  // [client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
  export class ISBuildMenu {}

  // [client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
  export class ISInventoryBuildMenu {}

  // [client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
  export class ISPaintMenu {}

  // [server/BuildingObjects/ISWalkToCursor.d.ts]
  /** @customConstructor ISWalkToCursor:new */
  export class ISWalkToCursor extends lua.server.BuildingObjects.ISWalkToCursor {}

  // [server/BuildingObjects/ISWoodenContainer.d.ts]
  /** @customConstructor ISWoodenContainer:new */
  export class ISWoodenContainer extends lua.server.BuildingObjects.ISWoodenContainer {}

  // [server/BuildingObjects/ISWoodenDoor.d.ts]
  /** @customConstructor ISWoodenDoor:new */
  export class ISWoodenDoor extends lua.server.BuildingObjects.ISWoodenDoor {}

  // [server/BuildingObjects/ISWoodenDoorFrame.d.ts]
  /** @customConstructor ISWoodenDoorFrame:new */
  export class ISWoodenDoorFrame extends lua.server.BuildingObjects.ISWoodenDoorFrame {}

  // [server/BuildingObjects/ISWoodenFloor.d.ts]
  /** @customConstructor ISWoodenFloor:new */
  export class ISWoodenFloor extends lua.server.BuildingObjects.ISWoodenFloor {}

  // [server/BuildingObjects/ISWoodenStairs.d.ts]
  /** @customConstructor ISWoodenStairs:new */
  export class ISWoodenStairs extends lua.server.BuildingObjects.ISWoodenStairs {}

  // [server/BuildingObjects/ISWoodenWall.d.ts]
  /** @customConstructor ISWoodenWall:new */
  export class ISWoodenWall extends lua.server.BuildingObjects.ISWoodenWall {}

  // [server/BuildingObjects/PaintingReference.d.ts]
  export class OtherPainting {}
  export class Painting {}

  // [client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
  /** @customConstructor ISBuildAction:new */
  export class ISBuildAction extends lua.client.BuildingObjects.TimedActions.ISBuildAction {}

  // [client/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
  /** @customConstructor ISInsertLightSourceFuelAction:new */
  export class ISInsertLightSourceFuelAction extends lua.client.BuildingObjects.TimedActions
    .ISInsertLightSourceFuelAction {}

  // [client/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
  /** @customConstructor ISMultiStageBuild:new */
  export class ISMultiStageBuild extends lua.client.BuildingObjects.TimedActions.ISMultiStageBuild {}

  // [client/BuildingObjects/TimedActions/ISPaintAction.d.ts]
  /** @customConstructor ISPaintAction:new */
  export class ISPaintAction extends lua.client.BuildingObjects.TimedActions.ISPaintAction {}

  // [client/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
  /** @customConstructor ISPaintSignAction:new */
  export class ISPaintSignAction extends lua.client.BuildingObjects.TimedActions.ISPaintSignAction {}

  // [client/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
  /** @customConstructor ISPlasterAction:new */
  export class ISPlasterAction extends lua.client.BuildingObjects.TimedActions.ISPlasterAction {}

  // [client/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
  /** @customConstructor ISRemoveLightSourceFuelAction:new */
  export class ISRemoveLightSourceFuelAction extends lua.client.BuildingObjects.TimedActions
    .ISRemoveLightSourceFuelAction {}

  // [client/BuildingObjects/TimedActions/ISShovelGround.d.ts]
  /** @customConstructor ISShovelGround:new */
  export class ISShovelGround extends lua.client.BuildingObjects.TimedActions.ISShovelGround {}

  // [client/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
  /** @customConstructor ISToggleLightSourceAction:new */
  export class ISToggleLightSourceAction extends lua.client.BuildingObjects.TimedActions.ISToggleLightSourceAction {}

  // [server/Camping/BuildingObjects/campingCampfire.d.ts]
  /** @customConstructor campingCampfire:new */
  export class campingCampfire extends lua.server.Camping.BuildingObjects.campingCampfire {}

  // [server/Camping/BuildingObjects/campingTent.d.ts]
  /** @customConstructor campingTent:new */
  export class campingTent extends lua.server.Camping.BuildingObjects.campingTent {}

  // [server/Camping/camping_fuel.d.ts]
  export class campingFuelCategory {}
  export class campingFuelType {}
  export class campingLightFireCategory {}
  export class campingLightFireType {}

  // [server/Camping/camping_tent.d.ts]
  export class camping {}

  // [server/Camping/camping_text.d.ts]
  export class campingText {}

  // [client/Camping/CCampfireGlobalObject.d.ts]
  /** @customConstructor CCampfireGlobalObject:new */
  export class CCampfireGlobalObject extends lua.client.Camping.CCampfireGlobalObject {}

  // [client/Camping/CCampfireSystem.d.ts]
  /** @customConstructor CCampfireSystem:new */
  export class CCampfireSystem extends lua.client.Camping.CCampfireSystem {}

  // [client/Camping/ISUI/ISCampingInfoWindow.d.ts]
  /** @customConstructor ISCampingInfoWindow:new */
  export class ISCampingInfoWindow extends lua.client.Camping.ISUI.ISCampingInfoWindow {}

  // [client/Camping/ISUI/ISCampingMenu.d.ts]
  export class ISCampingMenu {}

  // [server/Camping/SCampfireGlobalObject.d.ts]
  /** @customConstructor SCampfireGlobalObject:new */
  export class SCampfireGlobalObject extends lua.server.Camping.SCampfireGlobalObject {}

  // [server/Camping/SCampfireSystem.d.ts]
  /** @customConstructor SCampfireSystem:new */
  export class SCampfireSystem extends lua.server.Camping.SCampfireSystem {}

  // [client/Camping/TimedActions/ISAddFuelAction.d.ts]
  /** @customConstructor ISAddFuelAction:new */
  export class ISAddFuelAction extends lua.client.Camping.TimedActions.ISAddFuelAction {}

  // [client/Camping/TimedActions/ISAddTentAction.d.ts]
  /** @customConstructor ISAddTentAction:new */
  export class ISAddTentAction extends lua.client.Camping.TimedActions.ISAddTentAction {}

  // [client/Camping/TimedActions/ISLightFromKindle.d.ts]
  /** @customConstructor ISLightFromKindle:new */
  export class ISLightFromKindle extends lua.client.Camping.TimedActions.ISLightFromKindle {}

  // [client/Camping/TimedActions/ISLightFromLiterature.d.ts]
  /** @customConstructor ISLightFromLiterature:new */
  export class ISLightFromLiterature extends lua.client.Camping.TimedActions.ISLightFromLiterature {}

  // [client/Camping/TimedActions/ISLightFromPetrol.d.ts]
  /** @customConstructor ISLightFromPetrol:new */
  export class ISLightFromPetrol extends lua.client.Camping.TimedActions.ISLightFromPetrol {}

  // [client/Camping/TimedActions/ISPlaceCampfireAction.d.ts]
  /** @customConstructor ISPlaceCampfireAction:new */
  export class ISPlaceCampfireAction extends lua.client.Camping.TimedActions.ISPlaceCampfireAction {}

  // [client/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
  /** @customConstructor ISPutOutCampfireAction:new */
  export class ISPutOutCampfireAction extends lua.client.Camping.TimedActions.ISPutOutCampfireAction {}

  // [client/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
  /** @customConstructor ISRemoveCampfireAction:new */
  export class ISRemoveCampfireAction extends lua.client.Camping.TimedActions.ISRemoveCampfireAction {}

  // [client/Camping/TimedActions/ISRemoveTentAction.d.ts]
  /** @customConstructor ISRemoveTentAction:new */
  export class ISRemoveTentAction extends lua.client.Camping.TimedActions.ISRemoveTentAction {}

  // [client/Camping/TimedActions/ISSleepInTentAction.d.ts]
  /** @customConstructor ISSleepInTentAction:new */
  export class ISSleepInTentAction extends lua.client.Camping.TimedActions.ISSleepInTentAction {}

  // [client/Chat/ISChat.d.ts]
  /** @customConstructor ISChat:new */
  export class ISChat extends lua.client.Chat.ISChat {}

  // [server/Climate/ClimateMain.d.ts]
  export class ClimateMain {}

  // [client/Context/ISContextManager.d.ts]
  export class ISContextManager {}

  // [client/Context/ISMenuContext.d.ts]
  export class ISMenuContext {}

  // [client/Context/ISMenuContextBuild.d.ts]
  export class ISMenuContextBuild {}

  // [client/Context/ISMenuContextInventory.d.ts]
  export class ISMenuContextInventory {}

  // [client/Context/ISMenuContextWorld.d.ts]
  export class ISMenuContextWorld {}

  // [client/Context/ISMenuElement.d.ts]
  export class ISMenuElement {}

  // [client/Context/World/TestMarkers.d.ts]
  export class TestMarkers {}

  // [client/DebugUIs/AdminContextMenu.d.ts]
  export class AdminContextMenu {}

  // [client/DebugUIs/AnimationClipViewer.d.ts]
  /** @customConstructor AnimationClipViewer:new */
  export class AnimationClipViewer extends lua.client.DebugUIs.AnimationClipViewer {}
  /** @customConstructor AnimationClipViewer_ListBox:new */
  export class AnimationClipViewer_ListBox extends lua.client.DebugUIs.AnimationClipViewer_ListBox {}
  /** @customConstructor AnimationClipViewer_OptionsPanel:new */
  export class AnimationClipViewer_OptionsPanel extends lua.client.DebugUIs.AnimationClipViewer_OptionsPanel {}
  /** @customConstructor AnimationClipViewer_Scene:new */
  export class AnimationClipViewer_Scene extends lua.client.DebugUIs.AnimationClipViewer_Scene {}
  /** @customConstructor AnimationClipViewer_Timeline:new */
  export class AnimationClipViewer_Timeline extends lua.client.DebugUIs.AnimationClipViewer_Timeline {}
  /** @noSelf */
  export const AnimationViewerState_InitUI = lua.client.DebugUIs.AnimationClipViewer.AnimationViewerState_InitUI;

  // [client/DebugUIs/AttachmentEditorUI.d.ts]
  /** @customConstructor AttachmentEditorUI:new */
  export class AttachmentEditorUI extends lua.client.DebugUIs.AttachmentEditorUI {}
  /** @customConstructor AttachmentEditorUI_EditAttachment:new */
  export class AttachmentEditorUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditAttachment {}
  /** @customConstructor AttachmentEditorUI_EditPanel:new */
  export class AttachmentEditorUI_EditPanel extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {}
  /** @customConstructor AttachmentEditorUI_ListBox:new */
  export class AttachmentEditorUI_ListBox extends lua.client.DebugUIs.AttachmentEditorUI_ListBox {}
  /** @customConstructor AttachmentEditorUI_Scene:new */
  export class AttachmentEditorUI_Scene extends lua.client.DebugUIs.AttachmentEditorUI_Scene {}
  /** @customConstructor AttachmentEditorUI_SwitchView:new */
  export class AttachmentEditorUI_SwitchView extends lua.client.DebugUIs.AttachmentEditorUI_SwitchView {}
  /** @noSelf */
  export const AttachmentEditorState_InitUI = lua.client.DebugUIs.AttachmentEditorUI.AttachmentEditorState_InitUI;

  // [client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel.d.ts]
  /** @customConstructor DebugChunkState_ObjectPickerPanel:new */
  export class DebugChunkState_ObjectPickerPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_ObjectPickerPanel {}

  // [client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.d.ts]
  /** @customConstructor DebugChunkStateUI_ObjPropsHandler:new */
  export class DebugChunkStateUI_ObjPropsHandler extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_ObjPropsHandler {}
  /** @customConstructor DebugChunkStateUI_ObjPropsPanel:new */
  export class DebugChunkStateUI_ObjPropsPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_ObjPropsPanel {}

  // [client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel.d.ts]
  /** @customConstructor DebugChunkStateUI_SquarePanel:new */
  export class DebugChunkStateUI_SquarePanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SquarePanel {}
  /** @customConstructor DebugChunkStateUI_SquarePropsHandler:new */
  export class DebugChunkStateUI_SquarePropsHandler extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SquarePropsHandler {}

  // [client/DebugUIs/DebugChunkState/DebugChunkState_Tools.d.ts]
  /** @customConstructor DebugChunkStateUI_DragCameraTool:new */
  export class DebugChunkStateUI_DragCameraTool extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_DragCameraTool {}
  /** @customConstructor DebugChunkStateUI_Tool:new */
  export class DebugChunkStateUI_Tool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {}

  // [client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel.d.ts]
  /** @customConstructor DebugChunkState_VehicleStoryPanel:new */
  export class DebugChunkState_VehicleStoryPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_VehicleStoryPanel {}

  // [client/DebugUIs/DebugChunkState/DebugChunkStateUI.d.ts]
  /** @customConstructor DebugChunkStateUI:new */
  export class DebugChunkStateUI extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI {}
  /** @customConstructor DebugChunkStateUI_OptionsPanel:new */
  export class DebugChunkStateUI_OptionsPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_OptionsPanel {}

  // [client/DebugUIs/DebugChunkState/ISSectionedPanel.d.ts]
  /** @customConstructor ISSectionedPanel:new */
  export class ISSectionedPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {}
  /** @customConstructor ISSectionedPanel_Section:new */
  export class ISSectionedPanel_Section extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel_Section {}

  // [client/DebugUIs/DebugContextMenu.d.ts]
  export class DebugContextMenu {}

  // [client/DebugUIs/DebugErrorsWindow.d.ts]
  /** @customConstructor DebugErrorsWindow:new */
  export class DebugErrorsWindow extends lua.client.DebugUIs.DebugErrorsWindow {}

  // [client/DebugUIs/DebuggerContextMenu.d.ts]
  /** @customConstructor DebuggerContextMenu:new */
  export class DebuggerContextMenu extends lua.client.DebugUIs.DebuggerContextMenu {}
  /** @noSelf */
  export const getDebuggerContextMenu = lua.client.DebugUIs.DebuggerContextMenu.getDebuggerContextMenu;

  // [client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel.d.ts]
  /** @customConstructor DebugGlobalObjectState_BasePropertiesPanel:new */
  export class DebugGlobalObjectState_BasePropertiesPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_BasePropertiesPanel {}
  /** @customConstructor DebugGlobalObjectState_GlobalObjectPanel:new */
  export class DebugGlobalObjectState_GlobalObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_GlobalObjectPanel {}
  /** @customConstructor DebugGlobalObjectState_IsoObjectPanel:new */
  export class DebugGlobalObjectState_IsoObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_IsoObjectPanel {}
  /** @customConstructor DebugGlobalObjectState_PropertiesPanel:new */
  export class DebugGlobalObjectState_PropertiesPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_PropertiesPanel {}
  /** @customConstructor DebugGlobalObjectState_SystemPanel:new */
  export class DebugGlobalObjectState_SystemPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_SystemPanel {}

  // [client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools.d.ts]
  /** @customConstructor DebugGlobalObjectStateUI_DragCameraTool:new */
  export class DebugGlobalObjectStateUI_DragCameraTool extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectStateUI_DragCameraTool {}
  /** @customConstructor DebugGlobalObjectStateUI_Tool:new */
  export class DebugGlobalObjectStateUI_Tool extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectStateUI_Tool {}

  // [client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI.d.ts]
  /** @customConstructor DebugGlobalObjectStateUI:new */
  export class DebugGlobalObjectStateUI extends lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectStateUI {}

  // [client/DebugUIs/DebugLogSettings.d.ts]
  /** @customConstructor DebugLogSettings:new */
  export class DebugLogSettings extends lua.client.DebugUIs.DebugLogSettings {}

  // [client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter.d.ts]
  /** @customConstructor FloatArrayPlotter:new */
  export class FloatArrayPlotter extends lua.client.DebugUIs.DebugMenu.Anims.FloatArrayPlotter {}

  // [client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor.d.ts]
  /** @customConstructor ISAnimDebugMonitor:new */
  export class ISAnimDebugMonitor extends lua.client.DebugUIs.DebugMenu.Anims.ISAnimDebugMonitor {}

  // [client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput.d.ts]
  /** @customConstructor ISAnimLoggerOutput:new */
  export class ISAnimLoggerOutput extends lua.client.DebugUIs.DebugMenu.Anims.ISAnimLoggerOutput {}

  // [client/DebugUIs/DebugMenu/Base/ISDebugPanelBase.d.ts]
  /** @customConstructor ISDebugPanelBase:new */
  export class ISDebugPanelBase extends lua.client.DebugUIs.DebugMenu.Base.ISDebugPanelBase {}

  // [client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase.d.ts]
  /** @customConstructor ISDebugSubPanelBase:new */
  export class ISDebugSubPanelBase extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {}

  // [client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug.d.ts]
  /** @customConstructor ClimateColorsDebug:new */
  export class ClimateColorsDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateColorsDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.d.ts]
  /** @customConstructor ClimateControlDebug:new */
  export class ClimateControlDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateControlDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ClimateDebug.d.ts]
  /** @customConstructor ClimateDebug:new */
  export class ClimateDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.d.ts]
  /** @customConstructor ClimateOptionsDebug:new */
  export class ClimateOptionsDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateOptionsDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.d.ts]
  /** @customConstructor ClimDebuggersPanel:new */
  export class ClimDebuggersPanel extends lua.client.DebugUIs.DebugMenu.Climate.ClimDebuggersPanel {}

  // [client/DebugUIs/DebugMenu/Climate/DailyValuesDebug.d.ts]
  /** @customConstructor DailyValuesDebug:new */
  export class DailyValuesDebug extends lua.client.DebugUIs.DebugMenu.Climate.DailyValuesDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ForecasterDebug.d.ts]
  /** @customConstructor ForecasterDebug:new */
  export class ForecasterDebug extends lua.client.DebugUIs.DebugMenu.Climate.ForecasterDebug {}

  // [client/DebugUIs/DebugMenu/Climate/NewFogDebug.d.ts]
  /** @customConstructor NewFogDebug:new */
  export class NewFogDebug extends lua.client.DebugUIs.DebugMenu.Climate.NewFogDebug {}

  // [client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.d.ts]
  /** @customConstructor PlayerClimateDebug:new */
  export class PlayerClimateDebug extends lua.client.DebugUIs.DebugMenu.Climate.PlayerClimateDebug {}

  // [client/DebugUIs/DebugMenu/Climate/PopupColorEdit.d.ts]
  /** @customConstructor PopupColorEdit:new */
  export class PopupColorEdit extends lua.client.DebugUIs.DebugMenu.Climate.PopupColorEdit {}

  // [client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts]
  /** @customConstructor ThermoDebug:new */
  export class ThermoDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}
  export class ThermoDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ThunderDebug.d.ts]
  /** @customConstructor ThunderDebug:new */
  export class ThunderDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThunderDebug {}

  // [client/DebugUIs/DebugMenu/Climate/ValuePlotter.d.ts]
  /** @customConstructor ValuePlotter:new */
  export class ValuePlotter extends lua.client.DebugUIs.DebugMenu.Climate.ValuePlotter {}

  // [client/DebugUIs/DebugMenu/Climate/WeatherFXDebug.d.ts]
  /** @customConstructor WeatherFXDebug:new */
  export class WeatherFXDebug extends lua.client.DebugUIs.DebugMenu.Climate.WeatherFXDebug {}

  // [client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.d.ts]
  /** @customConstructor WeatherPeriodDebug:new */
  export class WeatherPeriodDebug extends lua.client.DebugUIs.DebugMenu.Climate.WeatherPeriodDebug {}

  // [client/DebugUIs/DebugMenu/Climate/WindDebug.d.ts]
  /** @customConstructor WindDebug:new */
  export class WindDebug extends lua.client.DebugUIs.DebugMenu.Climate.WindDebug {}

  // [client/DebugUIs/DebugMenu/General/ISCheatPanelUI.d.ts]
  /** @customConstructor ISCheatPanelUI:new */
  export class ISCheatPanelUI extends lua.client.DebugUIs.DebugMenu.General.ISCheatPanelUI {}

  // [client/DebugUIs/DebugMenu/General/ISDebugBlood.d.ts]
  /** @customConstructor ISDebugBlood:new */
  export class ISDebugBlood extends lua.client.DebugUIs.DebugMenu.General.ISDebugBlood {}

  // [client/DebugUIs/DebugMenu/General/ISGameDebugPanel.d.ts]
  /** @customConstructor ISGameDebugPanel:new */
  export class ISGameDebugPanel extends lua.client.DebugUIs.DebugMenu.General.ISGameDebugPanel {}

  // [client/DebugUIs/DebugMenu/General/ISGeneralCheats.d.ts]
  /** @customConstructor ISGeneralCheats:new */
  export class ISGeneralCheats extends lua.client.DebugUIs.DebugMenu.General.ISGeneralCheats {}

  // [client/DebugUIs/DebugMenu/General/ISGeneralDebug.d.ts]
  /** @customConstructor ISGeneralDebug:new */
  export class ISGeneralDebug extends lua.client.DebugUIs.DebugMenu.General.ISGeneralDebug {}

  // [client/DebugUIs/DebugMenu/General/ISSearchMode.d.ts]
  /** @customConstructor ISSearchMode:new */
  export class ISSearchMode extends lua.client.DebugUIs.DebugMenu.General.ISSearchMode {}

  // [client/DebugUIs/DebugMenu/General/ISStatsAndBody.d.ts]
  /** @customConstructor ISStatsAndBody:new */
  export class ISStatsAndBody extends lua.client.DebugUIs.DebugMenu.General.ISStatsAndBody {}

  // [client/DebugUIs/DebugMenu/GlobalModData/GlobalModData.d.ts]
  /** @customConstructor GlobalModDataDebug:new */
  export class GlobalModDataDebug extends lua.client.DebugUIs.DebugMenu.GlobalModData.GlobalModDataDebug {}

  // [client/DebugUIs/DebugMenu/GlobalModData/GlobalModDataTest.d.ts]

  // [client/DebugUIs/DebugMenu/ISDebugMenu.d.ts]
  /** @customConstructor ISDebugMenu:new */
  export class ISDebugMenu extends lua.client.DebugUIs.DebugMenu.ISDebugMenu {}

  // [client/DebugUIs/DebugMenu/ISDebugUtils.d.ts]
  export class ISDebugUtils {}

  // [client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug.d.ts]
  /** @customConstructor IsoRegionDebug:new */
  export class IsoRegionDebug extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDebug {}

  // [client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails.d.ts]
  /** @customConstructor IsoRegionDetails:new */
  export class IsoRegionDetails extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDetails {}

  // [client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow.d.ts]
  /** @customConstructor IsoRegionLogWindow:new */
  export class IsoRegionLogWindow extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionLogWindow {}

  // [client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow.d.ts]
  /** @customConstructor IsoRegionsWindow:new */
  export class IsoRegionsWindow extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionsWindow {}
  /** @noSelf */
  export const newIsoRegionsWindow = lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionsWindow.newIsoRegionsWindow;

  // [client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
  /** @customConstructor PuddlesControl:new */
  export class PuddlesControl extends lua.client.DebugUIs.DebugMenu.Puddles.PuddlesControl {}

  // [client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
  /** @customConstructor PuddlesPeriodDebug:new */
  export class PuddlesPeriodDebug extends lua.client.DebugUIs.DebugMenu.Puddles.PuddlesPeriodDebug {}

  // [client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
  /** @customConstructor RadioScriptDebugger:new */
  export class RadioScriptDebugger extends lua.client.DebugUIs.DebugMenu.radio.RadioScriptDebugger {}

  // [client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
  /** @customConstructor ZomboidRadioDebug:new */
  export class ZomboidRadioDebug extends lua.client.DebugUIs.DebugMenu.radio.ZomboidRadioDebug {}

  // [client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel.d.ts]
  /** @customConstructor ISGameStatisticPanel:new */
  export class ISGameStatisticPanel extends lua.client.DebugUIs.DebugMenu.Statistic.ISGameStatisticPanel {}

  // [client/DebugUIs/DebugMenu/Statistic/StatisticChart.d.ts]
  /** @customConstructor StatisticChart:new */
  export class StatisticChart extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChart {}

  // [client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations.d.ts]
  /** @customConstructor StatisticChartDiskOperations:new */
  export class StatisticChartDiskOperations extends lua.client.DebugUIs.DebugMenu.Statistic
    .StatisticChartDiskOperations {}

  // [client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory.d.ts]
  /** @customConstructor StatisticChartMemory:new */
  export class StatisticChartMemory extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartMemory {}

  // [client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets.d.ts]
  /** @customConstructor StatisticChartPackets:new */
  export class StatisticChartPackets extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartPackets {}

  // [client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod.d.ts]
  /** @customConstructor StatisticChartUpdatePeriod:new */
  export class StatisticChartUpdatePeriod extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartUpdatePeriod {}

  // [client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
  /** @customConstructor WorldFlaresDebug:new */
  export class WorldFlaresDebug extends lua.client.DebugUIs.DebugMenu.WorldFlares.WorldFlaresDebug {}

  // [client/DebugUIs/DebugOptionsWindow.d.ts]
  /** @customConstructor DebugOptionsWindow:new */
  export class DebugOptionsWindow extends lua.client.DebugUIs.DebugOptionsWindow {}

  // [client/DebugUIs/DebugScenarios.d.ts]
  /** @customConstructor DebugScenarios:new */
  export class DebugScenarios extends lua.client.DebugUIs.DebugScenarios {}
  /** @noSelf */
  export const doDebugScenarios = lua.client.DebugUIs.DebugScenarios.doDebugScenarios;

  // [client/DebugUIs/DebugToolstrip.d.ts]
  /** @customConstructor DebugToolstrip:new */
  export class DebugToolstrip extends lua.client.DebugUIs.DebugToolstrip {}

  // [client/DebugUIs/DeviceInspector.d.ts]
  /** @customConstructor DeviceInspector:new */
  export class DeviceInspector extends lua.client.DebugUIs.DeviceInspector {}

  // [client/DebugUIs/ISAttachedItemsUI.d.ts]
  /** @customConstructor ISAttachedItemsUI:new */
  export class ISAttachedItemsUI extends lua.client.DebugUIs.ISAttachedItemsUI {}

  // [client/DebugUIs/ISFastTeleportMove.d.ts]
  export class ISFastTeleportMove {}

  // [client/DebugUIs/ISLootStressTestUI.d.ts]
  /** @customConstructor ISLootStreetTestUI:new */
  export class ISLootStreetTestUI extends lua.client.DebugUIs.ISLootStreetTestUI {}

  // [client/DebugUIs/ISRemoveItemTool.d.ts]
  /** @customConstructor ISRemoveItemTool:new */
  export class ISRemoveItemTool extends lua.client.DebugUIs.ISRemoveItemTool {}

  // [client/DebugUIs/ISRunningDebugUI.d.ts]
  /** @customConstructor ISRunningDebugUI:new */
  export class ISRunningDebugUI extends lua.client.DebugUIs.ISRunningDebugUI {}

  // [client/DebugUIs/ISSpawnHordeUI.d.ts]
  /** @customConstructor ISSpawnHordeUI:new */
  export class ISSpawnHordeUI extends lua.client.DebugUIs.ISSpawnHordeUI {}

  // [client/DebugUIs/ISSpawnPointsEditor.d.ts]
  /** @customConstructor ISSpawnPointsEditor:new */
  export class ISSpawnPointsEditor extends lua.client.DebugUIs.ISSpawnPointsEditor {}

  // [client/DebugUIs/ISSpawnVehicleUI.d.ts]
  /** @customConstructor ISSpawnVehicleUI:new */
  export class ISSpawnVehicleUI extends lua.client.DebugUIs.ISSpawnVehicleUI {}

  // [client/DebugUIs/ISTeleportDebugUI.d.ts]
  /** @customConstructor ISTeleportDebugUI:new */
  export class ISTeleportDebugUI extends lua.client.DebugUIs.ISTeleportDebugUI {}

  // [client/DebugUIs/ISTilesPickerDebugUI.d.ts]
  /** @customConstructor ISTilesPickerDebugUI:new */
  export class ISTilesPickerDebugUI extends lua.client.DebugUIs.ISTilesPickerDebugUI {}
  /** @customConstructor ISTilesPickerTilesList:new */
  export class ISTilesPickerTilesList extends lua.client.DebugUIs.ISTilesPickerTilesList {}

  // [client/DebugUIs/LuaDebugger.d.ts]
  /** @customConstructor LuaDebugger:new */
  export class LuaDebugger extends lua.client.DebugUIs.LuaDebugger {}

  // [client/DebugUIs/LuaDebugOutput.d.ts]
  /** @customConstructor LuaDebugOutput:new */
  export class LuaDebugOutput extends lua.client.DebugUIs.LuaDebugOutput {}

  // [client/DebugUIs/LuaFileBrowser.d.ts]
  /** @customConstructor LuaFileBrowser:new */
  export class LuaFileBrowser extends lua.client.DebugUIs.LuaFileBrowser {}
  /** @customConstructor LuaFileBrowserList:new */
  export class LuaFileBrowserList extends lua.client.DebugUIs.LuaFileBrowserList {}

  // [client/DebugUIs/LuaThreadWindow.d.ts]
  /** @customConstructor LuaThreadWindow:new */
  export class LuaThreadWindow extends lua.client.DebugUIs.LuaThreadWindow {}

  // [client/DebugUIs/MPDebugger.d.ts]
  /** @customConstructor MPDebugger:new */
  export class MPDebugger extends lua.client.DebugUIs.MPDebugger {}

  // [client/DebugUIs/ObjectViewer.d.ts]
  /** @customConstructor ObjectViewer:new */
  export class ObjectViewer extends lua.client.DebugUIs.ObjectViewer {}

  // [client/DebugUIs/SourceWindow.d.ts]
  /** @customConstructor SourceWindow:new */
  export class SourceWindow extends lua.client.DebugUIs.SourceWindow {}

  // [client/DebugUIs/StashDebug.d.ts]
  /** @customConstructor StashDebug:new */
  export class StashDebug extends lua.client.DebugUIs.StashDebug {}

  // [client/DebugUIs/StreamMapWindow.d.ts]
  /** @customConstructor StreamMapWindow:new */
  export class StreamMapWindow extends lua.client.DebugUIs.StreamMapWindow {}

  // [client/DebugUIs/TextureViewer.d.ts]
  /** @customConstructor TextureWindow:new */
  export class TextureWindow extends lua.client.DebugUIs.TextureWindow {}

  // [client/DebugUIs/WatchWindow.d.ts]
  /** @customConstructor WatchWindow:new */
  export class WatchWindow extends lua.client.DebugUIs.WatchWindow {}

  // [shared/defines.d.ts]
  export class ZomboidGlobals {}

  // [shared/Definitions/ClothingRecipesDefinitions.d.ts]
  export class ClothingRecipesDefinitions {}

  // [shared/Definitions/DefaultClothing.d.ts]
  export class DefaultClothing {}

  // [shared/Definitions/FitnessExercises.d.ts]
  export class FitnessExercises {}

  // [client/erosion/debug/DebugDemoTime.d.ts]

  // [client/erosion/debug/Point2D.d.ts]
  export class Point2D {}

  // [server/Farming/BuildingObjects/farmingPlot.d.ts]
  /** @customConstructor farmingPlot:new */
  export class farmingPlot extends lua.server.Farming.BuildingObjects.farmingPlot {}

  // [server/Farming/BuildingObjects/ISFarmingCursor.d.ts]
  /** @customConstructor ISFarmingCursor:new */
  export class ISFarmingCursor extends lua.server.Farming.BuildingObjects.ISFarmingCursor {}

  // [server/Farming/BuildingObjects/ISFarmingCursorMouse.d.ts]
  /** @customConstructor ISFarmingCursorMouse:new */
  export class ISFarmingCursorMouse extends lua.server.Farming.BuildingObjects.ISFarmingCursorMouse {}

  // [client/Farming/CFarmingSystem.d.ts]
  /** @customConstructor CFarmingSystem:new */
  export class CFarmingSystem extends lua.client.Farming.CFarmingSystem {}

  // [client/Farming/CPlantGlobalObject.d.ts]
  /** @customConstructor CPlantGlobalObject:new */
  export class CPlantGlobalObject extends lua.client.Farming.CPlantGlobalObject {}

  // [server/Farming/farming_vegetableconf.d.ts]
  export class farming_vegetableconf {}

  // [client/Farming/ISUI/ISFarmingInfo.d.ts]
  /** @customConstructor ISFarmingInfo:new */
  export class ISFarmingInfo extends lua.client.Farming.ISUI.ISFarmingInfo {}
  export class disease {}
  export class disease_rgb {}
  export class fertilizer_rgb {}
  export class health_rgb {}
  export class nowateredsince_rgb {}
  export class title_rgb {}
  export class water_rgb {}
  export class waterbar_rgb {}

  // [client/Farming/ISUI/ISFarmingMenu.d.ts]
  export class ISFarmingMenu {}

  // [client/Farming/ISUI/ISFarmingWindow.d.ts]
  /** @customConstructor ISFarmingWindow:new */
  export class ISFarmingWindow extends lua.client.Farming.ISUI.ISFarmingWindow {}

  // [server/Farming/ScavengeDefinition.d.ts]
  export class scavenges {}

  // [server/Farming/SFarmingSystem.d.ts]
  /** @customConstructor SFarmingSystem:new */
  export class SFarmingSystem extends lua.server.Farming.SFarmingSystem {}

  // [server/Farming/SPlantGlobalObject.d.ts]
  /** @customConstructor SPlantGlobalObject:new */
  export class SPlantGlobalObject extends lua.server.Farming.SPlantGlobalObject {}

  // [client/Farming/TimedActions/ISCureFliesAction.d.ts]
  /** @customConstructor ISCureFliesAction:new */
  export class ISCureFliesAction extends lua.client.Farming.TimedActions.ISCureFliesAction {}

  // [client/Farming/TimedActions/ISCureMildewAction.d.ts]
  /** @customConstructor ISCureMildewAction:new */
  export class ISCureMildewAction extends lua.client.Farming.TimedActions.ISCureMildewAction {}

  // [client/Farming/TimedActions/ISFertilizeAction.d.ts]
  /** @customConstructor ISFertilizeAction:new */
  export class ISFertilizeAction extends lua.client.Farming.TimedActions.ISFertilizeAction {}

  // [client/Farming/TimedActions/ISHarvestPlantAction.d.ts]
  /** @customConstructor ISHarvestPlantAction:new */
  export class ISHarvestPlantAction extends lua.client.Farming.TimedActions.ISHarvestPlantAction {}

  // [client/Farming/TimedActions/ISPlantInfoAction.d.ts]
  /** @customConstructor ISPlantInfoAction:new */
  export class ISPlantInfoAction extends lua.client.Farming.TimedActions.ISPlantInfoAction {}

  // [client/Farming/TimedActions/ISPlowAction.d.ts]
  /** @customConstructor ISPlowAction:new */
  export class ISPlowAction extends lua.client.Farming.TimedActions.ISPlowAction {}

  // [client/Farming/TimedActions/ISSeedAction.d.ts]
  /** @customConstructor ISSeedAction:new */
  export class ISSeedAction extends lua.client.Farming.TimedActions.ISSeedAction {}

  // [client/Farming/TimedActions/ISShovelAction.d.ts]
  /** @customConstructor ISShovelAction:new */
  export class ISShovelAction extends lua.client.Farming.TimedActions.ISShovelAction {}

  // [client/Farming/TimedActions/ISWaterPlantAction.d.ts]
  /** @customConstructor ISWaterPlantAction:new */
  export class ISWaterPlantAction extends lua.client.Farming.TimedActions.ISWaterPlantAction {}

  // [server/FireFighting/FireFighting.d.ts]
  export class FireFighting {}

  // [server/FireFighting/ISExtinguishCursor.d.ts]
  /** @customConstructor ISExtinguishCursor:new */
  export class ISExtinguishCursor extends lua.server.FireFighting.ISExtinguishCursor {}

  // [server/Fishing/BuildingObjects/FishingNet.d.ts]
  /** @customConstructor fishingNet:new */
  export class fishingNet extends lua.server.Fishing.BuildingObjects.fishingNet {}

  // [client/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
  /** @customConstructor ISCheckFishingNetAction:new */
  export class ISCheckFishingNetAction extends lua.client.Fishing.TimedActions.ISCheckFishingNetAction {}

  // [client/Fishing/TimedActions/ISFishingAction.d.ts]
  /** @customConstructor ISFishingAction:new */
  export class ISFishingAction extends lua.client.Fishing.TimedActions.ISFishingAction {}

  // [client/Foraging/forageClient.d.ts]
  export class forageClient {}
  export class forageData {}

  // [shared/Foraging/forageDefinitions.d.ts]
  export class forageCategories {}
  export class forageDefaultDefs {}
  export class forageDefs {}
  export class forageSkills {}
  export class forageZones {}
  export class scavenges {}

  // [shared/Foraging/forageSystem.d.ts]
  export class forageSystem {}

  // [client/Foraging/ISBaseIcon.d.ts]
  /** @customConstructor ISBaseIcon:new */
  export class ISBaseIcon extends lua.client.Foraging.ISBaseIcon {}

  // [client/Foraging/ISForageAction.d.ts]
  /** @customConstructor ISForageAction:new */
  export class ISForageAction extends lua.client.Foraging.ISForageAction {}

  // [client/Foraging/ISForageIcon.d.ts]
  /** @customConstructor ISForageIcon:new */
  export class ISForageIcon extends lua.client.Foraging.ISForageIcon {}

  // [client/Foraging/ISSearchManager.d.ts]
  /** @customConstructor ISSearchManager:new */
  export class ISSearchManager extends lua.client.Foraging.ISSearchManager {}

  // [client/Foraging/ISSearchWindow.d.ts]
  /** @customConstructor ISSearchWindow:new */
  export class ISSearchWindow extends lua.client.Foraging.ISSearchWindow {}

  // [client/Foraging/ISWorldItemIcon.d.ts]
  /** @customConstructor ISWorldItemIcon:new */
  export class ISWorldItemIcon extends lua.client.Foraging.ISWorldItemIcon {}

  // [client/Foraging/ISZoneDisplay.d.ts]
  /** @customConstructor ISZoneDisplay:new */
  export class ISZoneDisplay extends lua.client.Foraging.ISZoneDisplay {}

  // [server/HealthSystem/HealthUpdate.d.ts]
  export class healthUpdate {}

  // [client/Hotbar/ISHotbar.d.ts]
  /** @customConstructor ISHotbar:new */
  export class ISHotbar extends lua.client.Hotbar.ISHotbar {}

  // [shared/ISBaseObject.d.ts]
  /** @customConstructor ISBaseObject:new */
  export class ISBaseObject extends lua.shared.ISBaseObject.ISBaseObject {}

  // [server/ISBuildingBlueprintManager.d.ts]
  export class ISBuildingBlueprintManager {}

  // [server/ISCoordConversion.d.ts]
  export class ISCoordConversion {}

  // [server/ISObjectClickHandler.d.ts]
  export class ISObjectClickHandler {}

  // [client/ISUI/AdminPanel/ISAddNonPvpZoneUI.d.ts]
  /** @customConstructor ISAddNonPvpZoneUI:new */
  export class ISAddNonPvpZoneUI extends lua.client.ISUI.AdminPanel.ISAddNonPvpZoneUI {}

  // [client/ISUI/AdminPanel/ISAddSafeZoneUI.d.ts]
  /** @customConstructor ISAddSafeZoneUI:new */
  export class ISAddSafeZoneUI extends lua.client.ISUI.AdminPanel.ISAddSafeZoneUI {}

  // [client/ISUI/AdminPanel/ISAdminMessage.d.ts]
  /** @customConstructor ISAdminMessage:new */
  export class ISAdminMessage extends lua.client.ISUI.AdminPanel.ISAdminMessage {}

  // [client/ISUI/AdminPanel/ISAdminPanelUI.d.ts]
  /** @customConstructor ISAdminPanelUI:new */
  export class ISAdminPanelUI extends lua.client.ISUI.AdminPanel.ISAdminPanelUI {}

  // [client/ISUI/AdminPanel/ISAdminPowerUI.d.ts]
  /** @customConstructor ISAdminPowerUI:new */
  export class ISAdminPowerUI extends lua.client.ISUI.AdminPanel.ISAdminPowerUI {}

  // [client/ISUI/AdminPanel/ISAdminTicketsUI.d.ts]
  /** @customConstructor ISAdminTicketsUI:new */
  export class ISAdminTicketsUI extends lua.client.ISUI.AdminPanel.ISAdminTicketsUI {}

  // [client/ISUI/AdminPanel/ISAdminWeather.d.ts]
  /** @customConstructor ISAdminWeather:new */
  export class ISAdminWeather extends lua.client.ISUI.AdminPanel.ISAdminWeather {}

  // [client/ISUI/AdminPanel/ISAdmPanelClimate.d.ts]
  /** @customConstructor ISAdmPanelClimate:new */
  export class ISAdmPanelClimate extends lua.client.ISUI.AdminPanel.ISAdmPanelClimate {}

  // [client/ISUI/AdminPanel/ISAdmPanelWeather.d.ts]
  /** @customConstructor ISAdmPanelWeather:new */
  export class ISAdmPanelWeather extends lua.client.ISUI.AdminPanel.ISAdmPanelWeather {}

  // [client/ISUI/AdminPanel/ISFactionsList.d.ts]
  /** @customConstructor ISFactionsList:new */
  export class ISFactionsList extends lua.client.ISUI.AdminPanel.ISFactionsList {}

  // [client/ISUI/AdminPanel/ISItemEditorUI.d.ts]
  /** @customConstructor ISItemEditorUI:new */
  export class ISItemEditorUI extends lua.client.ISUI.AdminPanel.ISItemEditorUI {}

  // [client/ISUI/AdminPanel/ISItemsListTable.d.ts]
  /** @customConstructor ISItemsListTable:new */
  export class ISItemsListTable extends lua.client.ISUI.AdminPanel.ISItemsListTable {}

  // [client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
  /** @customConstructor ISItemsListViewer:new */
  export class ISItemsListViewer extends lua.client.ISUI.AdminPanel.ISItemsListViewer {}

  // [client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
  /** @customConstructor ISMiniScoreboardUI:new */
  export class ISMiniScoreboardUI extends lua.client.ISUI.AdminPanel.ISMiniScoreboardUI {}

  // [client/ISUI/AdminPanel/ISPacketCounts.d.ts]
  /** @customConstructor ISPacketCounts:new */
  export class ISPacketCounts extends lua.client.ISUI.AdminPanel.ISPacketCounts {}
  /** @customConstructor ISPacketCountsList:new */
  export class ISPacketCountsList extends lua.client.ISUI.AdminPanel.ISPacketCountsList {}

  // [client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
  /** @customConstructor ISPvpZonePanel:new */
  export class ISPvpZonePanel extends lua.client.ISUI.AdminPanel.ISPvpZonePanel {}

  // [client/ISUI/AdminPanel/ISSafehousesList.d.ts]
  /** @customConstructor ISSafehousesList:new */
  export class ISSafehousesList extends lua.client.ISUI.AdminPanel.ISSafehousesList {}

  // [client/ISUI/AdminPanel/ISServerOptions.d.ts]
  /** @customConstructor ISServerOptions:new */
  export class ISServerOptions extends lua.client.ISUI.AdminPanel.ISServerOptions {}

  // [client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
  /** @customConstructor ISServerOptionsChange:new */
  export class ISServerOptionsChange extends lua.client.ISUI.AdminPanel.ISServerOptionsChange {}

  // [client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
  /** @customConstructor ISServerSandboxOptionsUI:new */
  export class ISServerSandboxOptionsUI extends lua.client.ISUI.AdminPanel.ISServerSandboxOptionsUI {}

  // [client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
  /** @customConstructor ISStatisticsUI:new */
  export class ISStatisticsUI extends lua.client.ISUI.AdminPanel.ISStatisticsUI {}

  // [client/ISUI/AdminPanel/ISWhitelistModifyRow.d.ts]
  /** @customConstructor ISWhitelistModifyRow:new */
  export class ISWhitelistModifyRow extends lua.client.ISUI.AdminPanel.ISWhitelistModifyRow {}

  // [client/ISUI/AdminPanel/ISWhitelistTable.d.ts]
  /** @customConstructor ISWhitelistTable:new */
  export class ISWhitelistTable extends lua.client.ISUI.AdminPanel.ISWhitelistTable {}

  // [client/ISUI/AdminPanel/ISWhitelistViewer.d.ts]
  /** @customConstructor ISWhitelistViewer:new */
  export class ISWhitelistViewer extends lua.client.ISUI.AdminPanel.ISWhitelistViewer {}

  // [client/ISUI/AdminPanel/LootZed/ISLootZed.d.ts]
  /** @customConstructor ISLootZed:new */
  export class ISLootZed extends lua.client.ISUI.AdminPanel.LootZed.ISLootZed {}

  // [client/ISUI/AdminPanel/LootZed/SpawnRateChecker.d.ts]
  export class LootZedTool {}

  // [client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
  /** @customConstructor ISBodyPartPanel:new */
  export class ISBodyPartPanel extends lua.client.ISUI.BodyParts.ISBodyPartPanel {}

  // [client/ISUI/Fireplace/ISKnob.d.ts]
  /** @customConstructor ISKnob:new */
  export class ISKnob extends lua.client.ISUI.Fireplace.ISKnob {}

  // [client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
  /** @customConstructor ISMicrowaveUI:new */
  export class ISMicrowaveUI extends lua.client.ISUI.Fireplace.ISMicrowaveUI {}

  // [client/ISUI/Fireplace/ISOvenUI.d.ts]
  /** @customConstructor ISOvenUI:new */
  export class ISOvenUI extends lua.client.ISUI.Fireplace.ISOvenUI {}

  // [client/ISUI/FPS.d.ts]
  export class ISFPS {}

  // [client/ISUI/InterpolationPeriodDebug.d.ts]
  /** @customConstructor InterpolationPeriodDebug:new */
  export class InterpolationPeriodDebug extends lua.client.ISUI.InterpolationPeriodDebug {}

  // [client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
  /** @customConstructor InterpolationPlayerPeriodDebug:new */
  export class InterpolationPlayerPeriodDebug extends lua.client.ISUI.InterpolationPlayerPeriodDebug {}

  // [client/ISUI/ISAlarmClockDialog.d.ts]
  /** @customConstructor ISAlarmClockDialog:new */
  export class ISAlarmClockDialog extends lua.client.ISUI.ISAlarmClockDialog {}

  // [client/ISUI/ISBackButtonWheel.d.ts]
  /** @customConstructor ISBackButtonWheel:new */
  export class ISBackButtonWheel extends lua.client.ISUI.ISBackButtonWheel {}

  // [client/ISUI/ISBBQInfoWindow.d.ts]
  /** @customConstructor ISBBQInfoWindow:new */
  export class ISBBQInfoWindow extends lua.client.ISUI.ISBBQInfoWindow {}

  // [client/ISUI/ISBBQMenu.d.ts]
  export class ISBBQMenu {}

  // [client/ISUI/ISBombTimerDialog.d.ts]
  /** @customConstructor ISBombTimerDialog:new */
  export class ISBombTimerDialog extends lua.client.ISUI.ISBombTimerDialog {}

  // [client/ISUI/ISButton.d.ts]
  /** @customConstructor ISButton:new */
  export class ISButton extends lua.client.ISUI.ISButton {}

  // [client/ISUI/ISButtonPrompt.d.ts]
  /** @customConstructor ISButtonPrompt:new */
  export class ISButtonPrompt extends lua.client.ISUI.ISButtonPrompt {}

  // [client/ISUI/ISCollapsableModalRichText.d.ts]
  /** @customConstructor ISCollapsableModalRichText:new */
  export class ISCollapsableModalRichText extends lua.client.ISUI.ISCollapsableModalRichText {}

  // [client/ISUI/ISCollapsableWindow.d.ts]
  /** @customConstructor ISCollapsableWindow:new */
  export class ISCollapsableWindow extends lua.client.ISUI.ISCollapsableWindow {}

  // [client/ISUI/ISCollapsableWindowJoypad.d.ts]
  /** @customConstructor ISCollapsableWindowJoypad:new */
  export class ISCollapsableWindowJoypad extends lua.client.ISUI.ISCollapsableWindowJoypad {}

  // [client/ISUI/ISColorPicker.d.ts]
  /** @customConstructor ISColorPicker:new */
  export class ISColorPicker extends lua.client.ISUI.ISColorPicker {}

  // [client/ISUI/ISComboBox.d.ts]
  /** @customConstructor ISComboBox:new */
  export class ISComboBox extends lua.client.ISUI.ISComboBox {}
  /** @customConstructor ISComboBoxEditor:new */
  export class ISComboBoxEditor extends lua.client.ISUI.ISComboBoxEditor {}
  /** @customConstructor ISComboBoxPopup:new */
  export class ISComboBoxPopup extends lua.client.ISUI.ISComboBoxPopup {}

  // [client/ISUI/ISConfirmMonitorSettingsDialog.d.ts]
  /** @customConstructor ISConfirmMonitorSettingsDialog:new */
  export class ISConfirmMonitorSettingsDialog extends lua.client.ISUI.ISConfirmMonitorSettingsDialog {}

  // [client/ISUI/ISContextMenu.d.ts]
  /** @customConstructor ISContextMenu:new */
  export class ISContextMenu extends lua.client.ISUI.ISContextMenu {}

  // [client/ISUI/ISControllerTestPanel.d.ts]
  /** @customConstructor ISControllerTestPanel:new */
  export class ISControllerTestPanel extends lua.client.ISUI.ISControllerTestPanel {}

  // [client/ISUI/ISCraftingCategoryUI.d.ts]
  /** @customConstructor ISCraftingCategoryUI:new */
  export class ISCraftingCategoryUI extends lua.client.ISUI.ISCraftingCategoryUI {}

  // [client/ISUI/ISCraftingUI.d.ts]
  /** @customConstructor ISCraftingUI:new */
  export class ISCraftingUI extends lua.client.ISUI.ISCraftingUI {}

  // [client/ISUI/ISDemoPopup.d.ts]
  /** @customConstructor ISDemoPopup:new */
  export class ISDemoPopup extends lua.client.ISUI.ISDemoPopup {}
  /** @noSelf */
  export const DoDemoPopup = lua.client.ISUI.ISDemoPopup.DoDemoPopup;

  // [client/ISUI/ISDigitalCode.d.ts]
  /** @customConstructor ISDigitalCode:new */
  export class ISDigitalCode extends lua.client.ISUI.ISDigitalCode {}

  // [client/ISUI/ISDPadWheels.d.ts]
  export class ISDPadWheels {}

  // [client/ISUI/ISDuplicateKeybindDialog.d.ts]
  /** @customConstructor ISDuplicateKeybindDialog:new */
  export class ISDuplicateKeybindDialog extends lua.client.ISUI.ISDuplicateKeybindDialog {}

  // [client/ISUI/ISEmoteRadialMenu.d.ts]
  /** @customConstructor ISEmoteRadialMenu:new */
  export class ISEmoteRadialMenu extends lua.client.ISUI.ISEmoteRadialMenu {}

  // [client/ISUI/ISEquippedItem.d.ts]
  /** @customConstructor ISEquippedItem:new */
  export class ISEquippedItem extends lua.client.ISUI.ISEquippedItem {}
  /** @customConstructor ISMapPopup:new */
  export class ISMapPopup extends lua.client.ISUI.ISMapPopup {}
  /** @customConstructor ISMoveablesIconPopup:new */
  export class ISMoveablesIconPopup extends lua.client.ISUI.ISMoveablesIconPopup {}

  // [client/ISUI/ISFirearmRadialMenu.d.ts]
  /** @customConstructor ISFirearmRadialMenu:new */
  export class ISFirearmRadialMenu extends lua.client.ISUI.ISFirearmRadialMenu {}

  // [client/ISUI/ISFireplaceInfoWindow.d.ts]
  /** @customConstructor ISFireplaceInfoWindow:new */
  export class ISFireplaceInfoWindow extends lua.client.ISUI.ISFireplaceInfoWindow {}

  // [client/ISUI/ISFireplaceMenu.d.ts]
  export class ISFireplaceMenu {}

  // [client/ISUI/ISFishingUI.d.ts]
  /** @customConstructor ISFishingUI:new */
  export class ISFishingUI extends lua.client.ISUI.ISFishingUI {}

  // [client/ISUI/ISFitnessUI.d.ts]
  /** @customConstructor ISFitnessUI:new */
  export class ISFitnessUI extends lua.client.ISUI.ISFitnessUI {}

  // [client/ISUI/ISGameLoadingUI.d.ts]
  /** @customConstructor ISGameLoadingUI:new */
  export class ISGameLoadingUI extends lua.client.ISUI.ISGameLoadingUI {}

  // [client/ISUI/ISGameSoundVolumeControl.d.ts]
  /** @customConstructor ISGameSoundVolumeControl:new */
  export class ISGameSoundVolumeControl extends lua.client.ISUI.ISGameSoundVolumeControl {}

  // [client/ISUI/ISGarmentUI.d.ts]
  /** @customConstructor ISGarmentUI:new */
  export class ISGarmentUI extends lua.client.ISUI.ISGarmentUI {}

  // [client/ISUI/ISGeneratorInfoWindow.d.ts]
  /** @customConstructor ISGeneratorInfoWindow:new */
  export class ISGeneratorInfoWindow extends lua.client.ISUI.ISGeneratorInfoWindow {}

  // [client/ISUI/ISGradientBar.d.ts]
  /** @customConstructor ISGradientBar:new */
  export class ISGradientBar extends lua.client.ISUI.ISGradientBar {}

  // [client/ISUI/ISImage.d.ts]
  /** @customConstructor ISImage:new */
  export class ISImage extends lua.client.ISUI.ISImage {}

  // [client/ISUI/ISInfoContainer.d.ts]
  /** @customConstructor ISInfoContainer:new */
  export class ISInfoContainer extends lua.client.ISUI.ISInfoContainer {}

  // [client/ISUI/ISInventoryPage.d.ts]
  /** @customConstructor ISInventoryPage:new */
  export class ISInventoryPage extends lua.client.ISUI.ISInventoryPage {}

  // [client/ISUI/ISInventoryPane.d.ts]
  /** @customConstructor ISInventoryPane:new */
  export class ISInventoryPane extends lua.client.ISUI.ISInventoryPane {}
  export class ISInventoryPaneDraggedItems {}

  // [client/ISUI/ISInventoryPaneContextMenu.d.ts]
  export class ISInventoryPaneContextMenu {}

  // [client/ISUI/ISJoystickButtonRadialMenu.d.ts]
  export class ISJoystickButtonRadialMenu {}

  // [client/ISUI/ISLabel.d.ts]
  /** @customConstructor ISLabel:new */
  export class ISLabel extends lua.client.ISUI.ISLabel {}

  // [client/ISUI/ISLayoutManager.d.ts]
  export class ISLayoutManager {}

  // [client/ISUI/ISLcdBar.d.ts]
  /** @customConstructor ISLcdBar:new */
  export class ISLcdBar extends lua.client.ISUI.ISLcdBar {}

  // [client/ISUI/ISLightSourceRadialMenu.d.ts]
  /** @customConstructor ISLightSourceRadialMenu:new */
  export class ISLightSourceRadialMenu extends lua.client.ISUI.ISLightSourceRadialMenu {}

  // [client/ISUI/ISLiteratureUI.d.ts]
  /** @customConstructor ISLiteratureList:new */
  export class ISLiteratureList extends lua.client.ISUI.ISLiteratureList {}
  /** @customConstructor ISLiteratureMediaList:new */
  export class ISLiteratureMediaList extends lua.client.ISUI.ISLiteratureMediaList {}
  /** @customConstructor ISLiteratureUI:new */
  export class ISLiteratureUI extends lua.client.ISUI.ISLiteratureUI {}

  // [client/ISUI/ISMakeUpUI.d.ts]
  /** @customConstructor ISMakeUpUI:new */
  export class ISMakeUpUI extends lua.client.ISUI.ISMakeUpUI {}

  // [client/ISUI/ISMegaVolumeControl.d.ts]
  /** @customConstructor ISMegaVolumeControl:new */
  export class ISMegaVolumeControl extends lua.client.ISUI.ISMegaVolumeControl {}

  // [client/ISUI/ISModalDialog.d.ts]
  /** @customConstructor ISModalDialog:new */
  export class ISModalDialog extends lua.client.ISUI.ISModalDialog {}

  // [client/ISUI/ISModalRichText.d.ts]
  /** @customConstructor ISModalRichText:new */
  export class ISModalRichText extends lua.client.ISUI.ISModalRichText {}

  // [client/ISUI/ISMouseDrag.d.ts]
  export class ISMouseDrag {}

  // [client/ISUI/ISMoveableInfoWindow.d.ts]
  /** @customConstructor ISMoveableInfoWindow:new */
  export class ISMoveableInfoWindow extends lua.client.ISUI.ISMoveableInfoWindow {}

  // [client/ISUI/ISNewsUpdate.d.ts]
  /** @customConstructor ISNewsUpdate:new */
  export class ISNewsUpdate extends lua.client.ISUI.ISNewsUpdate {}

  // [client/ISUI/ISOnScreenKeyboard.d.ts]
  /** @customConstructor ISOnScreenKeyboard:new */
  export class ISOnScreenKeyboard extends lua.client.ISUI.ISOnScreenKeyboard {}
  /** @customConstructor OnScreenKeyboardEntry:new */
  export class OnScreenKeyboardEntry extends lua.client.ISUI.OnScreenKeyboardEntry {}
  /** @customConstructor OnScreenKeyboardPanel:new */
  export class OnScreenKeyboardPanel extends lua.client.ISUI.OnScreenKeyboardPanel {}
  export class OnScreenKeyboard {}

  // [client/ISUI/ISOptionPanel.d.ts]
  /** @customConstructor ISOptionPanel:new */
  export class ISOptionPanel extends lua.client.ISUI.ISOptionPanel {}

  // [client/ISUI/ISPanel.d.ts]
  /** @customConstructor ISPanel:new */
  export class ISPanel extends lua.client.ISUI.ISPanel {}

  // [client/ISUI/ISPanelJoypad.d.ts]
  /** @customConstructor ISPanelJoypad:new */
  export class ISPanelJoypad extends lua.client.ISUI.ISPanelJoypad {}

  // [client/ISUI/ISPostDeathUI.d.ts]
  /** @customConstructor ISPostDeathUI:new */
  export class ISPostDeathUI extends lua.client.ISUI.ISPostDeathUI {}

  // [client/ISUI/ISRadialMenu.d.ts]
  /** @customConstructor ISRadialMenu:new */
  export class ISRadialMenu extends lua.client.ISUI.ISRadialMenu {}

  // [client/ISUI/ISRadialProgressBar.d.ts]
  /** @customConstructor ISRadialProgressBar:new */
  export class ISRadialProgressBar extends lua.client.ISUI.ISRadialProgressBar {}

  // [client/ISUI/ISRadioButtons.d.ts]
  /** @customConstructor ISRadioButtons:new */
  export class ISRadioButtons extends lua.client.ISUI.ISRadioButtons {}

  // [client/ISUI/ISRadioOption.d.ts]
  /** @customConstructor ISRadioOption:new */
  export class ISRadioOption extends lua.client.ISUI.ISRadioOption {}

  // [client/ISUI/ISRainPanel.d.ts]
  /** @customConstructor ISRainPanel:new */
  export class ISRainPanel extends lua.client.ISUI.ISRainPanel {}
  /** @noSelf */
  export const addRainPanel = lua.client.ISUI.ISRainPanel.addRainPanel;

  // [client/ISUI/ISRect.d.ts]
  /** @customConstructor ISRect:new */
  export class ISRect extends lua.client.ISUI.ISRect {}

  // [client/ISUI/ISResizeableButton.d.ts]
  /** @customConstructor ISResizableButton:new */
  export class ISResizableButton extends lua.client.ISUI.ISResizableButton {}

  // [client/ISUI/ISResizeWidget.d.ts]
  /** @customConstructor ISResizeWidget:new */
  export class ISResizeWidget extends lua.client.ISUI.ISResizeWidget {}

  // [client/ISUI/ISRichTextBox.d.ts]
  /** @customConstructor ISRichTextBox:new */
  export class ISRichTextBox extends lua.client.ISUI.ISRichTextBox {}

  // [client/ISUI/ISRichTextPanel.d.ts]
  /** @customConstructor ISRichTextPanel:new */
  export class ISRichTextPanel extends lua.client.ISUI.ISRichTextPanel {}

  // [client/ISUI/ISSafetyUI.d.ts]
  /** @customConstructor ISSafetyUI:new */
  export class ISSafetyUI extends lua.client.ISUI.ISSafetyUI {}

  // [client/ISUI/ISScavengeUI.d.ts]
  /** @customConstructor ISScavengeUI:new */
  export class ISScavengeUI extends lua.client.ISUI.ISScavengeUI {}

  // [client/ISUI/ISScrollBar.d.ts]
  /** @customConstructor ISScrollBar:new */
  export class ISScrollBar extends lua.client.ISUI.ISScrollBar {}

  // [client/ISUI/ISScrollingListBox.d.ts]
  /** @customConstructor ISScrollingListBox:new */
  export class ISScrollingListBox extends lua.client.ISUI.ISScrollingListBox {}

  // [client/ISUI/ISServerDisconnectUI.d.ts]
  /** @customConstructor ISServerDisconnectUI:new */
  export class ISServerDisconnectUI extends lua.client.ISUI.ISServerDisconnectUI {}

  // [client/ISUI/ISServerSavingMessage.d.ts]
  /** @customConstructor ISServerSavingMessage:new */
  export class ISServerSavingMessage extends lua.client.ISUI.ISServerSavingMessage {}

  // [client/ISUI/ISSetKeybindDialog.d.ts]
  /** @customConstructor ISSetKeybindDialog:new */
  export class ISSetKeybindDialog extends lua.client.ISUI.ISSetKeybindDialog {}

  // [client/ISUI/ISSleepDialog.d.ts]
  /** @customConstructor ISSleepDialog:new */
  export class ISSleepDialog extends lua.client.ISUI.ISSleepDialog {}

  // [client/ISUI/ISSpinBox.d.ts]
  /** @customConstructor ISSpinBox:new */
  export class ISSpinBox extends lua.client.ISUI.ISSpinBox {}

  // [client/ISUI/ISTabPanel.d.ts]
  /** @customConstructor ISTabPanel:new */
  export class ISTabPanel extends lua.client.ISUI.ISTabPanel {}

  // [client/ISUI/ISTextBox.d.ts]
  /** @customConstructor ISTextBox:new */
  export class ISTextBox extends lua.client.ISUI.ISTextBox {}

  // [client/ISUI/ISTextEntryBox.d.ts]
  /** @customConstructor ISTextEntryBox:new */
  export class ISTextEntryBox extends lua.client.ISUI.ISTextEntryBox {}

  // [client/ISUI/ISTickBox.d.ts]
  /** @customConstructor ISTickBox:new */
  export class ISTickBox extends lua.client.ISUI.ISTickBox {}

  // [client/ISUI/ISToolTip.d.ts]
  /** @customConstructor ISToolTip:new */
  export class ISToolTip extends lua.client.ISUI.ISToolTip {}

  // [client/ISUI/ISToolTipInv.d.ts]
  /** @customConstructor ISToolTipInv:new */
  export class ISToolTipInv extends lua.client.ISUI.ISToolTipInv {}

  // [client/ISUI/ISTradingUI.d.ts]
  /** @customConstructor ISTradingUI:new */
  export class ISTradingUI extends lua.client.ISUI.ISTradingUI {}

  // [client/ISUI/ISTradingUIHistorial.d.ts]
  /** @customConstructor ISTradingUIHistorical:new */
  export class ISTradingUIHistorical extends lua.client.ISUI.ISTradingUIHistorical {}

  // [client/ISUI/ISUI3DModel.d.ts]
  /** @customConstructor ISUI3DModel:new */
  export class ISUI3DModel extends lua.client.ISUI.ISUI3DModel {}

  // [client/ISUI/ISUIElement.d.ts]
  /**
   * @customConstructor ISUIElement:new
   * @author [JabDoesThings]
   *
   * **ISUIElement** is the base UI class in the Project Zomboid Lua codebase.
   */
  export class ISUIElement extends lua.client.ISUI.ISUIElement {}

  // [client/ISUI/ISUIEmoteConfig.d.ts]
  /** @customConstructor ISUIEmoteConfig:new */
  export class ISUIEmoteConfig extends lua.client.ISUI.ISUIEmoteConfig {}

  // [client/ISUI/ISUIHandler.d.ts]
  export class ISUIHandler {}

  // [client/ISUI/ISUIWriteJournal.d.ts]
  /** @customConstructor ISUIWriteJournal:new */
  export class ISUIWriteJournal extends lua.client.ISUI.ISUIWriteJournal {}

  // [client/ISUI/ISVehicleConfirmBox.d.ts]
  /** @customConstructor ISVehicleConfirmBox:new */
  export class ISVehicleConfirmBox extends lua.client.ISUI.ISVehicleConfirmBox {}
  /** @customConstructor ISVehiclePartListBox:new */
  export class ISVehiclePartListBox extends lua.client.ISUI.ISVehiclePartListBox {}

  // [client/ISUI/ISVolumeControl.d.ts]
  /** @customConstructor ISVolumeControl:new */
  export class ISVolumeControl extends lua.client.ISUI.ISVolumeControl {}

  // [client/ISUI/ISVolumeIndicator.d.ts]
  /** @customConstructor ISVolumeIndicator:new */
  export class ISVolumeIndicator extends lua.client.ISUI.ISVolumeIndicator {}

  // [client/ISUI/ISWindow.d.ts]
  /** @customConstructor ISWindow:new */
  export class ISWindow extends lua.client.ISUI.ISWindow {}

  // [client/ISUI/ISWorldObjectContextMenu.d.ts]
  export class ISWorldObjectContextMenu {}

  // [client/ISUI/Maps/Editor/WorldMapEditor.d.ts]
  /** @customConstructor WorldMapEditor:new */
  export class WorldMapEditor extends lua.client.ISUI.Maps.Editor.WorldMapEditor {}

  // [client/ISUI/Maps/Editor/WorldMapEditorListBox.d.ts]
  /** @customConstructor WorldMapEditorListBox:new */
  export class WorldMapEditorListBox extends lua.client.ISUI.Maps.Editor.WorldMapEditorListBox {}

  // [client/ISUI/Maps/Editor/WorldMapEditorLocationControl.d.ts]
  /** @customConstructor WorldMapEditorLocationControl:new */
  export class WorldMapEditorLocationControl extends lua.client.ISUI.Maps.Editor.WorldMapEditorLocationControl {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode.d.ts]
  /** @customConstructor WorldMapEditorMode:new */
  export class WorldMapEditorMode extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations.d.ts]
  /** @customConstructor WorldMapEditorMode_Annotations:new */
  export class WorldMapEditorMode_Annotations extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Annotations {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds.d.ts]
  /** @customConstructor WorldMapEditorMode_Bounds:new */
  export class WorldMapEditorMode_Bounds extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Bounds {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles.d.ts]
  /** @customConstructor WorldMapEditorMode_DataFiles:new */
  export class WorldMapEditorMode_DataFiles extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_DataFiles {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode_Maps.d.ts]
  /** @customConstructor WorldMapEditorMode_Maps:new */
  export class WorldMapEditorMode_Maps extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Maps {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes.d.ts]
  /** @customConstructor WorldMapEditorMode_Stashes:new */
  export class WorldMapEditorMode_Stashes extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Stashes {}

  // [client/ISUI/Maps/Editor/WorldMapEditorMode_Style.d.ts]
  /** @customConstructor WorldMapEditorMode_Style:new */
  export class WorldMapEditorMode_Style extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Style {}
  /** @customConstructor WorldMapStyleEditor:new */
  export class WorldMapStyleEditor extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {}
  /** @customConstructor WorldMapStyleEditor_ColorStopsPanel:new */
  export class WorldMapStyleEditor_ColorStopsPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_ColorStopsPanel {}
  /** @customConstructor WorldMapStyleEditor_FilterPanel:new */
  export class WorldMapStyleEditor_FilterPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_FilterPanel {}
  /** @customConstructor WorldMapStyleEditor_PolygonLayerPanel:new */
  export class WorldMapStyleEditor_PolygonLayerPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_PolygonLayerPanel {}
  /** @customConstructor WorldMapStyleEditor_TabPanel:new */
  export class WorldMapStyleEditor_TabPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {}
  /** @customConstructor WorldMapStyleEditor_TextureLayerPanel:new */
  export class WorldMapStyleEditor_TextureLayerPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_TextureLayerPanel {}
  /** @customConstructor WorldMapStyleEditor_TexturePanel:new */
  export class WorldMapStyleEditor_TexturePanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TexturePanel {}
  /** @customConstructor WorldMapStyleEditor_TextureStopsPanel:new */
  export class WorldMapStyleEditor_TextureStopsPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_TextureStopsPanel {}

  // [client/ISUI/Maps/Editor/WorldMapEditorResizer.d.ts]
  /** @customConstructor WorldMapEditorResizer:new */
  export class WorldMapEditorResizer extends lua.client.ISUI.Maps.Editor.WorldMapEditorResizer {}

  // [client/ISUI/Maps/ISMap.d.ts]
  /** @customConstructor ISMap:new */
  export class ISMap extends lua.client.ISUI.Maps.ISMap {}
  /** @customConstructor ISMapWrapper:new */
  export class ISMapWrapper extends lua.client.ISUI.Maps.ISMapWrapper {}

  // [client/ISUI/Maps/ISMapDefinitions.d.ts]
  export class LootMaps {}
  export class MapUtils {}

  // [client/ISUI/Maps/ISMiniMap.d.ts]
  /** @customConstructor ISMiniMapInner:new */
  export class ISMiniMapInner extends lua.client.ISUI.Maps.ISMiniMapInner {}
  /** @customConstructor ISMiniMapOuter:new */
  export class ISMiniMapOuter extends lua.client.ISUI.Maps.ISMiniMapOuter {}
  /** @customConstructor ISMiniMapTitleBar:new */
  export class ISMiniMapTitleBar extends lua.client.ISUI.Maps.ISMiniMapTitleBar {}
  export class ISMiniMap {}

  // [client/ISUI/Maps/ISTextBoxMap.d.ts]
  /** @customConstructor ISTextBoxMap:new */
  export class ISTextBoxMap extends lua.client.ISUI.Maps.ISTextBoxMap {}

  // [client/ISUI/Maps/ISWorldMap.d.ts]
  /** @customConstructor ISWorldMap:new */
  export class ISWorldMap extends lua.client.ISUI.Maps.ISWorldMap {}
  /** @customConstructor ISWorldMapButtonPanel:new */
  export class ISWorldMapButtonPanel extends lua.client.ISUI.Maps.ISWorldMapButtonPanel {}
  /** @customConstructor WorldMapOptions:new */
  export class WorldMapOptions extends lua.client.ISUI.Maps.WorldMapOptions {}

  // [client/ISUI/Maps/ISWorldMapSymbols.d.ts]
  /** @customConstructor ISWorldMapSymbols:new */
  export class ISWorldMapSymbols extends lua.client.ISUI.Maps.ISWorldMapSymbols {}
  /** @customConstructor ISWorldMapSymbolTool:new */
  export class ISWorldMapSymbolTool extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {}
  /** @customConstructor ISWorldMapSymbolTool_AddNote:new */
  export class ISWorldMapSymbolTool_AddNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_AddNote {}
  /** @customConstructor ISWorldMapSymbolTool_AddSymbol:new */
  export class ISWorldMapSymbolTool_AddSymbol extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_AddSymbol {}
  /** @customConstructor ISWorldMapSymbolTool_EditNote:new */
  export class ISWorldMapSymbolTool_EditNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_EditNote {}
  /** @customConstructor ISWorldMapSymbolTool_MoveAnnotation:new */
  export class ISWorldMapSymbolTool_MoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_MoveAnnotation {}
  /** @customConstructor ISWorldMapSymbolTool_RemoveAnnotation:new */
  export class ISWorldMapSymbolTool_RemoveAnnotation extends lua.client.ISUI.Maps
    .ISWorldMapSymbolTool_RemoveAnnotation {}

  // [client/ISUI/PlayerData/ISPlayerData.d.ts]
  export class ISPlayerData {}
  /** @noSelf */
  export const destroyAllPlayerData = lua.client.ISUI.PlayerData.ISPlayerData.destroyAllPlayerData;

  // [client/ISUI/PlayerData/ISPlayerDataObject.d.ts]
  /** @customConstructor ISPlayerDataObject:new */
  export class ISPlayerDataObject extends lua.client.ISUI.PlayerData.ISPlayerDataObject {}

  // [client/ISUI/PlayerStats/ISPlayerStatsAddXPUI.d.ts]
  /** @customConstructor ISPlayerStatsAddXPUI:new */
  export class ISPlayerStatsAddXPUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsAddXPUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel.d.ts]
  /** @customConstructor ISPlayerStatsChooseAccessLevelUI:new */
  export class ISPlayerStatsChooseAccessLevelUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseAccessLevelUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI.d.ts]
  /** @customConstructor ISPlayerStatsChooseProfessionUI:new */
  export class ISPlayerStatsChooseProfessionUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseProfessionUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI.d.ts]
  /** @customConstructor ISPlayerStatsChooseTraitUI:new */
  export class ISPlayerStatsChooseTraitUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseTraitUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsManageInvUI.d.ts]
  /** @customConstructor ISPlayerStatsManageInvUI:new */
  export class ISPlayerStatsManageInvUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsManageInvUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
  /** @customConstructor ISPlayerStatsUI:new */
  export class ISPlayerStatsUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
  /** @customConstructor ISPlayerStatsUserlogUI:new */
  export class ISPlayerStatsUserlogUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}

  // [client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
  /** @customConstructor ISPlayerStatsWarningPointUI:new */
  export class ISPlayerStatsWarningPointUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsWarningPointUI {}

  // [client/ISUI/RichTextLayout.d.ts]
  /** @customConstructor ISRichTextLayout:new */
  export class ISRichTextLayout extends lua.client.ISUI.ISRichTextLayout {}

  // [client/ISUI/SpeedControlsHandler.d.ts]
  export class SpeedControlsHandler {}

  // [client/ISUI/UserPanel/ISCreateFactionTagUI.d.ts]
  /** @customConstructor ISCreateFactionTagUI:new */
  export class ISCreateFactionTagUI extends lua.client.ISUI.UserPanel.ISCreateFactionTagUI {}

  // [client/ISUI/UserPanel/ISCreateFactionUI.d.ts]
  /** @customConstructor ISCreateFactionUI:new */
  export class ISCreateFactionUI extends lua.client.ISUI.UserPanel.ISCreateFactionUI {}

  // [client/ISUI/UserPanel/ISFactionAddPlayerUI.d.ts]
  /** @customConstructor ISFactionAddPlayerUI:new */
  export class ISFactionAddPlayerUI extends lua.client.ISUI.UserPanel.ISFactionAddPlayerUI {}

  // [client/ISUI/UserPanel/ISFactionUI.d.ts]
  /** @customConstructor ISFactionUI:new */
  export class ISFactionUI extends lua.client.ISUI.UserPanel.ISFactionUI {}

  // [client/ISUI/UserPanel/ISSafehouseAddPlayerUI.d.ts]
  /** @customConstructor ISSafehouseAddPlayerUI:new */
  export class ISSafehouseAddPlayerUI extends lua.client.ISUI.UserPanel.ISSafehouseAddPlayerUI {}

  // [client/ISUI/UserPanel/ISSafehouseUI.d.ts]
  /** @customConstructor ISSafehouseUI:new */
  export class ISSafehouseUI extends lua.client.ISUI.UserPanel.ISSafehouseUI {}

  // [client/ISUI/UserPanel/ISTicketsUI.d.ts]
  /** @customConstructor ISTicketsUI:new */
  export class ISTicketsUI extends lua.client.ISUI.UserPanel.ISTicketsUI {}

  // [client/ISUI/UserPanel/ISUserPanelUI.d.ts]
  /** @customConstructor ISUserPanelUI:new */
  export class ISUserPanelUI extends lua.client.ISUI.UserPanel.ISUserPanelUI {}

  // [client/ISUI/ZombiePopulationWindow.d.ts]
  /** @customConstructor ZombiePopulationWindow:new */
  export class ZombiePopulationWindow extends lua.client.ISUI.ZombiePopulationWindow {}
  /** @noSelf */
  export const newZombiePopulationWindow = lua.client.ISUI.ZombiePopulationWindow.newZombiePopulationWindow;

  // [server/Items/AcceptItemFunction.d.ts]
  export class AcceptItemFunction {}

  // [server/Items/BrokenFences.d.ts]
  export class debris {}

  // [server/Items/ItemBindingHandler.d.ts]
  export class ItemBindingHandler {}

  // [server/Items/ProceduralDistributions.d.ts]
  export class ProceduralDistributions {}

  // [server/Items/ScriptItemInterface.d.ts]
  export class ScriptItemInterface {}

  // [server/Items/SuburbsDistributions.d.ts]
  export class NoContainerFillRooms {}
  export class WeaponUpgrades {}

  // [shared/iwbumstempmodelcompat.d.ts]
  /** @noSelf */
  export const getDir = lua.shared.iwbumstempmodelcompat.getDir;

  // [client/JoyPad/ISJoypadDebugUI.d.ts]
  /** @customConstructor ISJoypadDebugUI:new */
  export class ISJoypadDebugUI extends lua.client.JoyPad.ISJoypadDebugUI {}

  // [client/JoyPad/ISJoypadDisconnectedUI.d.ts]
  /** @customConstructor ISJoypadDisconnectedUI:new */
  export class ISJoypadDisconnectedUI extends lua.client.JoyPad.ISJoypadDisconnectedUI {}

  // [client/JoyPad/ISJoyPadListBox.d.ts]
  /** @customConstructor ISJoypadListBox:new */
  export class ISJoypadListBox extends lua.client.JoyPad.ISJoypadListBox {}

  // [shared/JoyPad/JoyPadSetup.d.ts]
  /** @customConstructor JoypadControllerData:new */
  export class JoypadControllerData extends lua.shared.JoyPad.JoypadControllerData {}
  /** @customConstructor JoypadData:new */
  export class JoypadData extends lua.shared.JoyPad.JoypadData {}
  export class joypad {}
  export class Joypad {}
  export class JoypadState {}

  // [shared/keyBinding.d.ts]
  export class keyBinding {}

  // [client/LastStand/AReallyCDDAy.d.ts]
  export class CDDA {}

  // [client/LastStand/AStormIsComing.d.ts]
  export class AStormIsComing {}

  // [client/LastStand/Challenge1.d.ts]
  export class Challenge1 {}

  // [client/LastStand/Challenge2.d.ts]
  export class Challenge2 {}

  // [client/LastStand/EightMonthsLater.d.ts]
  export class EightMonthsLater {}

  // [client/LastStand/Insomnia.d.ts]
  export class InsomniaChallenge {}
  /** @noSelf */
  export const injectInsomnia = lua.client.LastStand.Insomnia.injectInsomnia;
  /** @noSelf */
  export const removeInsomnia = lua.client.LastStand.Insomnia.removeInsomnia;

  // [client/LastStand/ISUI/ISChallenge2PlayerUpWindow.d.ts]
  /** @customConstructor ISChallenge2PlayerUpWindow:new */
  export class ISChallenge2PlayerUpWindow extends lua.client.LastStand.ISUI.ISChallenge2PlayerUpWindow {}

  // [client/LastStand/ISUI/ISChallenge2UpgradeTab.d.ts]
  /** @customConstructor ISChallenge2UpgradeTab:new */
  export class ISChallenge2UpgradeTab extends lua.client.LastStand.ISUI.ISChallenge2UpgradeTab {}

  // [client/LastStand/ISUI/ISChallenge2VariousItemWindow.d.ts]
  /** @customConstructor ISChallenge2VariousItemWindow:new */
  export class ISChallenge2VariousItemWindow extends lua.client.LastStand.ISUI.ISChallenge2VariousItemWindow {}

  // [client/LastStand/ISUI/ISChallenge2WeaponRepairWindow.d.ts]
  /** @customConstructor ISChallenge2WeaponRepairWindow:new */
  export class ISChallenge2WeaponRepairWindow extends lua.client.LastStand.ISUI.ISChallenge2WeaponRepairWindow {}

  // [client/LastStand/ISUI/ISChallenge2WeaponUpWindow.d.ts]
  /** @customConstructor ISChallenge2WeaponUpWindow:new */
  export class ISChallenge2WeaponUpWindow extends lua.client.LastStand.ISUI.ISChallenge2WeaponUpWindow {}

  // [client/LastStand/Kingsmouth.d.ts]
  export class Kingsmouth {}

  // [client/LastStand/LastStandPlayerFile.d.ts]
  export class LastStandPlayerFile {}

  // [client/LastStand/LastStandSetup.d.ts]
  export class LastStandData {}
  /** @noSelf */
  export const doLastStandDraw = lua.client.LastStand.LastStandSetup.doLastStandDraw;
  /** @noSelf */
  export const doLastStandInit = lua.client.LastStand.LastStandSetup.doLastStandInit;
  /** @noSelf */
  export const preLoadLastStandInit = lua.client.LastStand.LastStandSetup.preLoadLastStandInit;

  // [client/LastStand/OpeningHours.d.ts]
  export class OpeningHours {}

  // [client/LastStand/Studio.d.ts]
  export class Studio {}

  // [client/LastStand/TheDescendingFog.d.ts]
  export class TheDescendingFog {}

  // [client/LastStand/WinterIsComing.d.ts]
  export class WinterIsComing {}

  // [client/LastStand/YouHaveOneDay.d.ts]
  export class YouHaveOneDay {}

  // [shared/Logs/ISLogSystem.d.ts]
  export class ISLogSystem {}

  // [shared/Logs/ISPerkLog.d.ts]
  export class ISPerkLog {}

  // [shared/luautils.d.ts]
  export class luautils {}

  // [client/Map/CGlobalObject.d.ts]
  /** @customConstructor CGlobalObject:new */
  export class CGlobalObject extends lua.client.Map.CGlobalObject {}

  // [client/Map/CGlobalObjectSystem.d.ts]
  /** @customConstructor CGlobalObjectSystem:new */
  export class CGlobalObjectSystem extends lua.client.Map.CGlobalObjectSystem {}

  // [server/Map/MapObjects/MOFarming.d.ts]

  // [server/Map/MetaEnum.d.ts]
  export class MetaObjectEnum {}

  // [server/Map/SGlobalObject.d.ts]
  /** @customConstructor SGlobalObject:new */
  export class SGlobalObject extends lua.server.Map.SGlobalObject {}

  // [server/Map/SGlobalObjectSystem.d.ts]
  /** @customConstructor SGlobalObjectSystem:new */
  export class SGlobalObjectSystem extends lua.server.Map.SGlobalObjectSystem {}

  // [server/MetalDrum/BuildingObjects/ISMetalDrum.d.ts]
  /** @customConstructor ISMetalDrum:new */
  export class ISMetalDrum extends lua.server.MetalDrum.BuildingObjects.ISMetalDrum {}

  // [client/MetalDrum/CMetalDrumGlobalObject.d.ts]
  /** @customConstructor CMetalDrumGlobalObject:new */
  export class CMetalDrumGlobalObject extends lua.client.MetalDrum.CMetalDrumGlobalObject {}

  // [client/MetalDrum/CMetalDrumSystem.d.ts]
  /** @customConstructor CMetalDrumSystem:new */
  export class CMetalDrumSystem extends lua.client.MetalDrum.CMetalDrumSystem {}

  // [server/MetalDrum/SMetalDrumGlobalObject.d.ts]
  /** @customConstructor SMetalDrumGlobalObject:new */
  export class SMetalDrumGlobalObject extends lua.server.MetalDrum.SMetalDrumGlobalObject {}

  // [server/MetalDrum/SMetalDrumSystem.d.ts]
  /** @customConstructor SMetalDrumSystem:new */
  export class SMetalDrumSystem extends lua.server.MetalDrum.SMetalDrumSystem {}

  // [server/metazones/metazoneHandler.d.ts]
  /** @noSelf */
  export const doMapZones = lua.server.metazones.metazoneHandler.doMapZones;
  /** @noSelf */
  export const doSpawnOrigins = lua.server.metazones.metazoneHandler.doSpawnOrigins;

  // [client/Moveables/ISMoveableDefinitions.d.ts]
  export class ISMoveableDefinitions {}

  // [client/Moveables/ISMoveablesAction.d.ts]
  /** @customConstructor ISMoveablesAction:new */
  export class ISMoveablesAction extends lua.client.Moveables.ISMoveablesAction {}

  // [client/Moveables/ISMoveablesIconToolTip.d.ts]
  /** @customConstructor ISMoveablesIconToolTip:new */
  export class ISMoveablesIconToolTip extends lua.client.Moveables.ISMoveablesIconToolTip {}

  // [client/Moveables/ISMoveableSpriteProps.d.ts]
  export class InfoPanelFlags {}
  export class ISMoveableSpriteProps {}
  export class ISThumpableSpriteProps {}
  export class SpriteGridCache {}

  // [client/Moveables/ISMoveableTools.d.ts]
  export class ISMoveableTools {}

  // [server/Movers/ISBaseMover.d.ts]
  /** @customConstructor ISBaseMover:new */
  export class ISBaseMover extends lua.server.Movers.ISBaseMover {}

  // [server/Movers/MoverStateMachine.d.ts]
  /** @customConstructor ISMoverStateMachine:new */
  export class ISMoverStateMachine extends lua.server.Movers.ISMoverStateMachine {}

  // [server/Movers/MoverStates/ISBaseState.d.ts]
  /** @customConstructor ISBaseState:new */
  export class ISBaseState extends lua.server.Movers.MoverStates.ISBaseState {}

  // [server/Movers/MoverStates/MoveToState.d.ts]
  /** @customConstructor MoveToState:new */
  export class MoveToState extends lua.server.Movers.MoverStates.MoveToState {}

  // [server/Movers/Rabbit.d.ts]
  /** @customConstructor Rabbit:new */
  export class Rabbit extends lua.server.Movers.Rabbit {}
  /** @noSelf */
  export const testCreateRabbit = lua.server.Movers.Rabbit.testCreateRabbit;

  // [client/Music/MusicChoices.d.ts]
  export class MusicChoices {}

  // [server/NewSelectionSystem/GridSquareSelector.d.ts]
  export class GridSquareSelector {}

  // [shared/NPCs/MainCreationMethods.d.ts]
  export class BaseGameCharacterDetails {}

  // [server/NPCs/SadisticAIDirector/SadisticMusicDirector.d.ts]
  /** @customConstructor SadisticMusicDirector:new */
  export class SadisticMusicDirector extends lua.server.NPCs.SadisticAIDirector.SadisticMusicDirector {}
  /** @noSelf */
  export const SadisticMusicDirectorTick =
    lua.server.NPCs.SadisticAIDirector.SadisticMusicDirector.SadisticMusicDirectorTick;

  // [client/NPCs/UI/CharacterInfoPage.d.ts]
  /** @customConstructor CharacterInfoPage:new */
  export class CharacterInfoPage extends lua.client.NPCs.UI.CharacterInfoPage {}

  // [client/NPCs/UI/TeamOverview.d.ts]
  /** @customConstructor TeamOverview:new */
  export class TeamOverview extends lua.client.NPCs.UI.TeamOverview {}

  // [client/NPCs/UI/TeamPicker.d.ts]
  /** @customConstructor TeamPicker:new */
  export class TeamPicker extends lua.client.NPCs.UI.TeamPicker {}

  // [client/OptionScreens/BootstrapConnectPopup.d.ts]
  /** @customConstructor BootstrapConnectPopup:new */
  export class BootstrapConnectPopup extends lua.client.OptionScreens.BootstrapConnectPopup {}

  // [client/OptionScreens/CharacterCreationHeader.d.ts]
  /** @customConstructor CharacterCreationHeader:new */
  export class CharacterCreationHeader extends lua.client.OptionScreens.CharacterCreationHeader {}

  // [client/OptionScreens/CharacterCreationMain.d.ts]
  /** @customConstructor CharacterCreationMain:new */
  export class CharacterCreationMain extends lua.client.OptionScreens.CharacterCreationMain {}
  /** @customConstructor CharacterCreationMainCharacterPanel:new */
  export class CharacterCreationMainCharacterPanel extends lua.client.OptionScreens
    .CharacterCreationMainCharacterPanel {}
  /** @customConstructor CharacterCreationMainPresetPanel:new */
  export class CharacterCreationMainPresetPanel extends lua.client.OptionScreens.CharacterCreationMainPresetPanel {}

  // [client/OptionScreens/CharacterCreationProfession.d.ts]
  /** @customConstructor CharacterCreationProfession:new */
  export class CharacterCreationProfession extends lua.client.OptionScreens.CharacterCreationProfession {}
  export class BCRC {}

  // [client/OptionScreens/ConnectToServer.d.ts]
  /** @customConstructor ConnectToServer:new */
  export class ConnectToServer extends lua.client.OptionScreens.ConnectToServer {}

  // [client/OptionScreens/CoopCharacterCreation.d.ts]
  /** @customConstructor CoopCharacterCreation:new */
  export class CoopCharacterCreation extends lua.client.OptionScreens.CoopCharacterCreation {}

  // [client/OptionScreens/CoopCharacterCreationMain.d.ts]
  /** @customConstructor CoopCharacterCreationMain:new */
  export class CoopCharacterCreationMain extends lua.client.OptionScreens.CoopCharacterCreationMain {}

  // [client/OptionScreens/CoopCharacterCreationProfession.d.ts]
  /** @customConstructor CoopCharacterCreationProfession:new */
  export class CoopCharacterCreationProfession extends lua.client.OptionScreens.CoopCharacterCreationProfession {}

  // [client/OptionScreens/CoopMapSpawnSelect.d.ts]
  /** @customConstructor CoopMapSpawnSelect:new */
  export class CoopMapSpawnSelect extends lua.client.OptionScreens.CoopMapSpawnSelect {}

  // [client/OptionScreens/CoopOptionsScreen.d.ts]
  /** @customConstructor CoopOptionsScreen:new */
  export class CoopOptionsScreen extends lua.client.OptionScreens.CoopOptionsScreen {}
  /** @customConstructor CoopOptionsScreenPanel:new */
  export class CoopOptionsScreenPanel extends lua.client.OptionScreens.CoopOptionsScreenPanel {}
  export class CoopConnection {}

  // [client/OptionScreens/CoopUserName.d.ts]
  /** @customConstructor CoopUserName:new */
  export class CoopUserName extends lua.client.OptionScreens.CoopUserName {}

  // [client/OptionScreens/InviteFriends.d.ts]
  /** @customConstructor InviteFriends:new */
  export class InviteFriends extends lua.client.OptionScreens.InviteFriends {}

  // [client/OptionScreens/ISGameSounds.d.ts]
  /** @customConstructor ISGameSounds:new */
  export class ISGameSounds extends lua.client.OptionScreens.ISGameSounds {}

  // [client/OptionScreens/ISModsNagPanel.d.ts]
  /** @customConstructor ISModsNagPanel:new */
  export class ISModsNagPanel extends lua.client.OptionScreens.ISModsNagPanel {}

  // [client/OptionScreens/ISScoreboard.d.ts]
  /** @customConstructor ISScoreboard:new */
  export class ISScoreboard extends lua.client.OptionScreens.ISScoreboard {}

  // [client/OptionScreens/LastStandChallenge.d.ts]
  export class LastStandChallenge {}

  // [client/OptionScreens/LastStandPlayerSelect.d.ts]
  /** @customConstructor LastStandPlayerSelect:new */
  export class LastStandPlayerSelect extends lua.client.OptionScreens.LastStandPlayerSelect {}

  // [client/OptionScreens/LoadGameScreen.d.ts]
  /** @customConstructor LoadGameScreen:new */
  export class LoadGameScreen extends lua.client.OptionScreens.LoadGameScreen {}
  /** @noSelf */
  export const LoadGameScreen_onModsModified = lua.client.OptionScreens.LoadGameScreen.LoadGameScreen_onModsModified;

  // [client/OptionScreens/LoginScreen.d.ts]
  /** @customConstructor LoginScreen:new */
  export class LoginScreen extends lua.client.OptionScreens.LoginScreen {}
  /** @noSelf */
  export const deleteLoginScreen = lua.client.OptionScreens.LoginScreen.deleteLoginScreen;

  // [client/OptionScreens/MainOptions.d.ts]
  /** @customConstructor MainOptions:new */
  export class MainOptions extends lua.client.OptionScreens.MainOptions {}

  // [client/OptionScreens/MainScreen.d.ts]
  /** @customConstructor MainScreen:new */
  export class MainScreen extends lua.client.OptionScreens.MainScreen {}

  // [client/OptionScreens/MapSpawnSelect.d.ts]
  /** @customConstructor MapSpawnSelect:new */
  export class MapSpawnSelect extends lua.client.OptionScreens.MapSpawnSelect {}
  /** @customConstructor MapSpawnSelectInfoPanel:new */
  export class MapSpawnSelectInfoPanel extends lua.client.OptionScreens.MapSpawnSelectInfoPanel {}
  /** @customConstructor MapSpawnSelectListBox:new */
  export class MapSpawnSelectListBox extends lua.client.OptionScreens.MapSpawnSelectListBox {}

  // [client/OptionScreens/ModMoreInfo.d.ts]
  /** @customConstructor ModMoreInfo:new */
  export class ModMoreInfo extends lua.client.OptionScreens.ModMoreInfo {}

  // [client/OptionScreens/ModOrderUI.d.ts]
  /** @customConstructor ModOrderUI:new */
  export class ModOrderUI extends lua.client.OptionScreens.ModOrderUI {}

  // [client/OptionScreens/ModSelector.d.ts]
  /** @customConstructor ModInfoPanel:new */
  export class ModInfoPanel extends lua.client.OptionScreens.ModInfoPanel {}
  /** @customConstructor ModListBox:new */
  export class ModListBox extends lua.client.OptionScreens.ModListBox {}
  /** @customConstructor ModPosterPanel:new */
  export class ModPosterPanel extends lua.client.OptionScreens.ModPosterPanel {}
  /** @customConstructor ModSelector:new */
  export class ModSelector extends lua.client.OptionScreens.ModSelector {}
  /** @customConstructor ModThumbnailPanel:new */
  export class ModThumbnailPanel extends lua.client.OptionScreens.ModThumbnailPanel {}
  /** @noSelf */
  export const ModSelector_onModsModified = lua.client.OptionScreens.ModSelector.ModSelector_onModsModified;

  // [client/OptionScreens/NewGameScreen.d.ts]
  /** @customConstructor NewGameScreen:new */
  export class NewGameScreen extends lua.client.OptionScreens.NewGameScreen {}

  // [client/OptionScreens/PublicServerList.d.ts]
  /** @customConstructor PublicServerList:new */
  export class PublicServerList extends lua.client.OptionScreens.PublicServerList {}

  // [client/OptionScreens/SandboxOptions.d.ts]
  /** @customConstructor SandboxOptionsScreen:new */
  export class SandboxOptionsScreen extends lua.client.OptionScreens.SandboxOptionsScreen {}

  // [client/OptionScreens/ServerConnectPopup.d.ts]
  /** @customConstructor ServerConnectPopup:new */
  export class ServerConnectPopup extends lua.client.OptionScreens.ServerConnectPopup {}

  // [client/OptionScreens/ServerList.d.ts]
  /** @customConstructor ServerList:new */
  export class ServerList extends lua.client.OptionScreens.ServerList {}

  // [client/OptionScreens/ServerSettingsScreen.d.ts]
  /** @customConstructor BaseServerSettingsPanel:new */
  export class BaseServerSettingsPanel extends lua.client.OptionScreens.BaseServerSettingsPanel {}
  /** @customConstructor ServerSettingsScreen:new */
  export class ServerSettingsScreen extends lua.client.OptionScreens.ServerSettingsScreen {}
  /** @customConstructor SpawnRegionsNameFilePanel:new */
  export class SpawnRegionsNameFilePanel extends lua.client.OptionScreens.SpawnRegionsNameFilePanel {}
  export class DefaultServerSettings {}

  // [client/OptionScreens/ServerToolbox.d.ts]
  /** @customConstructor ServerToolbox:new */
  export class ServerToolbox extends lua.client.OptionScreens.ServerToolbox {}

  // [client/OptionScreens/ServerWorkshopItemScreen.d.ts]
  /** @customConstructor ServerWorkshopItemScreen:new */
  export class ServerWorkshopItemScreen extends lua.client.OptionScreens.ServerWorkshopItemScreen {}

  // [client/OptionScreens/WorkshopSubmitScreen.d.ts]
  /** @customConstructor WorkshopSubmitScreen:new */
  export class WorkshopSubmitScreen extends lua.client.OptionScreens.WorkshopSubmitScreen {}

  // [client/OptionScreens/WorldSelect.d.ts]
  /** @customConstructor WorldSelect:new */
  export class WorldSelect extends lua.client.OptionScreens.WorldSelect {}

  // [server/Professions/Professions.d.ts]
  export class Professions {}

  // [server/radio/ISDynamicRadio.d.ts]
  export class DynamicRadio {}

  // [server/radio/ISWeatherChannel.d.ts]
  export class WeatherChannel {}

  // [client/RadioCom/ISRadioAction.d.ts]
  /** @customConstructor ISRadioAction:new */
  export class ISRadioAction extends lua.client.RadioCom.ISRadioAction {}

  // [client/RadioCom/ISRadioInteractions.d.ts]
  export class ISRadioInteractions {}

  // [client/RadioCom/ISRadioWindow.d.ts]
  /** @customConstructor ISRadioWindow:new */
  export class ISRadioWindow extends lua.client.RadioCom.ISRadioWindow {}

  // [client/RadioCom/ISUIRadio/ISBatteryStatusDisplay.d.ts]
  /** @customConstructor ISBatteryStatusDisplay:new */
  export class ISBatteryStatusDisplay extends lua.client.RadioCom.ISUIRadio.ISBatteryStatusDisplay {}

  // [client/RadioCom/ISUIRadio/ISItemDropBox.d.ts]
  /** @customConstructor ISItemDropBox:new */
  export class ISItemDropBox extends lua.client.RadioCom.ISUIRadio.ISItemDropBox {}

  // [client/RadioCom/ISUIRadio/ISLedLight.d.ts]
  /** @customConstructor ISLedLight:new */
  export class ISLedLight extends lua.client.RadioCom.ISUIRadio.ISLedLight {}

  // [client/RadioCom/ISUIRadio/ISSineWaveDisplay.d.ts]
  /** @customConstructor ISSineWaveDisplay:new */
  export class ISSineWaveDisplay extends lua.client.RadioCom.ISUIRadio.ISSineWaveDisplay {}

  // [client/RadioCom/ISUIRadio/ISSliderPanel.d.ts]
  /** @customConstructor ISSliderPanel:new */
  export class ISSliderPanel extends lua.client.RadioCom.ISUIRadio.ISSliderPanel {}

  // [client/RadioCom/ISUIRadio/ISSpeakerButton.d.ts]
  /** @customConstructor ISSpeakerButton:new */
  export class ISSpeakerButton extends lua.client.RadioCom.ISUIRadio.ISSpeakerButton {}

  // [client/RadioCom/ISUIRadio/ISVolumeBar.d.ts]
  /** @customConstructor ISVolumeBar:new */
  export class ISVolumeBar extends lua.client.RadioCom.ISUIRadio.ISVolumeBar {}

  // [client/RadioCom/RadioWindowModules/RWM.d.ts]
  /** @customConstructor RWM:new */
  export class RWM extends lua.client.RadioCom.RadioWindowModules.RWM {}

  // [client/RadioCom/RadioWindowModules/RWMChannel.d.ts]
  /** @customConstructor RWMChannel:new */
  export class RWMChannel extends lua.client.RadioCom.RadioWindowModules.RWMChannel {}

  // [client/RadioCom/RadioWindowModules/RWMChannelTV.d.ts]
  /** @customConstructor RWMChannelTV:new */
  export class RWMChannelTV extends lua.client.RadioCom.RadioWindowModules.RWMChannelTV {}

  // [client/RadioCom/RadioWindowModules/RWMElement.d.ts]
  /** @customConstructor RWMElement:new */
  export class RWMElement extends lua.client.RadioCom.RadioWindowModules.RWMElement {}

  // [client/RadioCom/RadioWindowModules/RWMGeneral.d.ts]
  /** @customConstructor RWMGeneral:new */
  export class RWMGeneral extends lua.client.RadioCom.RadioWindowModules.RWMGeneral {}

  // [client/RadioCom/RadioWindowModules/RWMGridPower.d.ts]
  /** @customConstructor RWMGridPower:new */
  export class RWMGridPower extends lua.client.RadioCom.RadioWindowModules.RWMGridPower {}

  // [client/RadioCom/RadioWindowModules/RWMMedia.d.ts]
  /** @customConstructor RWMMedia:new */
  export class RWMMedia extends lua.client.RadioCom.RadioWindowModules.RWMMedia {}

  // [client/RadioCom/RadioWindowModules/RWMMicrophone.d.ts]
  /** @customConstructor RWMMicrophone:new */
  export class RWMMicrophone extends lua.client.RadioCom.RadioWindowModules.RWMMicrophone {}

  // [client/RadioCom/RadioWindowModules/RWMPanel.d.ts]
  /** @customConstructor RWMPanel:new */
  export class RWMPanel extends lua.client.RadioCom.RadioWindowModules.RWMPanel {}

  // [client/RadioCom/RadioWindowModules/RWMPower.d.ts]
  /** @customConstructor RWMPower:new */
  export class RWMPower extends lua.client.RadioCom.RadioWindowModules.RWMPower {}

  // [client/RadioCom/RadioWindowModules/RWMSignal.d.ts]
  /** @customConstructor RWMSignal:new */
  export class RWMSignal extends lua.client.RadioCom.RadioWindowModules.RWMSignal {}

  // [client/RadioCom/RadioWindowModules/RWMSubEditPreset.d.ts]
  /** @customConstructor RWMSubEditPreset:new */
  export class RWMSubEditPreset extends lua.client.RadioCom.RadioWindowModules.RWMSubEditPreset {}

  // [client/RadioCom/RadioWindowModules/RWMTestPane.d.ts]
  /** @customConstructor RWMTestPane:new */
  export class RWMTestPane extends lua.client.RadioCom.RadioWindowModules.RWMTestPane {}

  // [client/RadioCom/RadioWindowModules/RWMVolume.d.ts]
  /** @customConstructor RWMVolume:new */
  export class RWMVolume extends lua.client.RadioCom.RadioWindowModules.RWMVolume {}

  // [client/RadioCom/StoryLineSounds/ISSLEvent.d.ts]
  /** @customConstructor ISSLEvent:new */
  export class ISSLEvent extends lua.client.RadioCom.StoryLineSounds.ISSLEvent {}

  // [client/RadioCom/StoryLineSounds/ISSLFrame.d.ts]
  /** @customConstructor ISSLFrame:new */
  export class ISSLFrame extends lua.client.RadioCom.StoryLineSounds.ISSLFrame {}

  // [client/RadioCom/StoryLineSounds/ISSLManager.d.ts]
  /** @customConstructor ISSLManager:new */
  export class ISSLManager extends lua.client.RadioCom.StoryLineSounds.ISSLManager {}

  // [client/RadioCom/StoryLineSounds/ISSLSounds.d.ts]
  /** @customConstructor ISSLSounds:new */
  export class ISSLSounds extends lua.client.RadioCom.StoryLineSounds.ISSLSounds {}

  // [client/RadioCom/StoryLineSounds/StorySoundDebug.d.ts]
  /** @customConstructor ISStorySoundsDebug:new */
  export class ISStorySoundsDebug extends lua.client.RadioCom.StoryLineSounds.ISStorySoundsDebug {}

  // [server/RainBarrel/BuildingObjects/RainCollectorBarrel.d.ts]
  /** @customConstructor RainCollectorBarrel:new */
  export class RainCollectorBarrel extends lua.server.RainBarrel.BuildingObjects.RainCollectorBarrel {}

  // [client/RainBarrel/CRainBarrelGlobalObject.d.ts]
  /** @customConstructor CRainBarrelGlobalObject:new */
  export class CRainBarrelGlobalObject extends lua.client.RainBarrel.CRainBarrelGlobalObject {}

  // [client/RainBarrel/CRainBarrelSystem.d.ts]
  /** @customConstructor CRainBarrelSystem:new */
  export class CRainBarrelSystem extends lua.client.RainBarrel.CRainBarrelSystem {}

  // [server/RainBarrel/SRainBarrelGlobalObject.d.ts]
  /** @customConstructor SRainBarrelGlobalObject:new */
  export class SRainBarrelGlobalObject extends lua.server.RainBarrel.SRainBarrelGlobalObject {}

  // [server/RainBarrel/SRainBarrelSystem.d.ts]
  /** @customConstructor SRainBarrelSystem:new */
  export class SRainBarrelSystem extends lua.server.RainBarrel.SRainBarrelSystem {}

  // [server/recipecode.d.ts]
  export class Recipe {}

  // [client/RecordedMedia/ISMediaInfo.d.ts]
  /** @customConstructor ISMediaInfo:new */
  export class ISMediaInfo extends lua.client.RecordedMedia.ISMediaInfo {}

  // [shared/RecordedMedia/ISRecordeMedia.d.ts]
  export class ISRecordedMedia {}

  // [shared/Reloading/ISRackAction.d.ts]
  /** @customConstructor ISRackAction:new */
  export class ISRackAction extends lua.shared.Reloading.ISRackAction {}

  // [shared/Reloading/ISReloadable.d.ts]
  /** @customConstructor ISReloadable:new */
  export class ISReloadable extends lua.shared.Reloading.ISReloadable {}

  // [shared/Reloading/ISReloadableMagazine.d.ts]
  /** @customConstructor ISReloadableMagazine:new */
  export class ISReloadableMagazine extends lua.shared.Reloading.ISReloadableMagazine {}

  // [shared/Reloading/ISReloadableWeapon.d.ts]
  /** @customConstructor ISReloadableWeapon:new */
  export class ISReloadableWeapon extends lua.shared.Reloading.ISReloadableWeapon {}

  // [shared/Reloading/ISReloadAction.d.ts]
  /** @customConstructor ISReloadAction:new */
  export class ISReloadAction extends lua.shared.Reloading.ISReloadAction {}

  // [shared/Reloading/ISReloadManager.d.ts]
  /** @customConstructor ISReloadManager:new */
  export class ISReloadManager extends lua.shared.Reloading.ISReloadManager {}
  export class aaa {}

  // [shared/Reloading/ISReloadUtil.d.ts]
  /** @customConstructor ISReloadUtil:new */
  export class ISReloadUtil extends lua.shared.Reloading.ISReloadUtil {}

  // [shared/Reloading/ISRevolverWeapon.d.ts]
  /** @customConstructor ISRevolverWeapon:new */
  export class ISRevolverWeapon extends lua.shared.Reloading.ISRevolverWeapon {}

  // [shared/Reloading/ISSemiAutoWeapon.d.ts]
  /** @customConstructor ISSemiAutoWeapon:new */
  export class ISSemiAutoWeapon extends lua.shared.Reloading.ISSemiAutoWeapon {}

  // [shared/Reloading/ISShotgunWeapon.d.ts]
  /** @customConstructor ISShotgunWeapon:new */
  export class ISShotgunWeapon extends lua.shared.Reloading.ISShotgunWeapon {}

  // [shared/Reloading/stormysReload.d.ts]
  export class ReloadManager {}
  /** @noSelf */
  export const addShotgun = lua.shared.Reloading.stormysReload.addShotgun;

  // [client/Seasons/ISUI/ISWeather.d.ts]
  /** @customConstructor ISWeather:new */
  export class ISWeather extends lua.client.Seasons.ISUI.ISWeather {}

  // [server/Seasons/season.d.ts]
  export class season {}

  // [server/Seasons/seasonProps.d.ts]
  export class seasonProps {}

  // [shared/SoundBanks/SoundBanks.d.ts]
  export class ambientSoundTable {}
  export class baseSoundTable {}
  export class footStepTable {}
  export class globalSoundTable {}
  export class voiceTable {}
  /** @noSelf */
  export const doLoadSoundbanks = lua.shared.SoundBanks.SoundBanks.doLoadSoundbanks;

  // [shared/SpawnRegions.d.ts]
  export class SpawnRegionMgr {}

  // [shared/StashDescriptions/StashUtil.d.ts]
  export class StashUtil {}

  // [client/SurvivalGuide/ISTutorialPageInfo.d.ts]
  /** @customConstructor ISTutorialPageInfo:new */
  export class ISTutorialPageInfo extends lua.client.SurvivalGuide.ISTutorialPageInfo {}
  /** @customConstructor ISTutorialSetInfo:new */
  export class ISTutorialSetInfo extends lua.client.SurvivalGuide.ISTutorialSetInfo {}

  // [client/SurvivalGuide/ISTutorialPanel.d.ts]
  /** @customConstructor ISSurvivalGuideListBox:new */
  export class ISSurvivalGuideListBox extends lua.client.SurvivalGuide.ISSurvivalGuideListBox {}
  /** @customConstructor ISSurvivalGuideRichText:new */
  export class ISSurvivalGuideRichText extends lua.client.SurvivalGuide.ISSurvivalGuideRichText {}
  /** @customConstructor ISSurvivalGuideRightPanel:new */
  export class ISSurvivalGuideRightPanel extends lua.client.SurvivalGuide.ISSurvivalGuideRightPanel {}
  /** @customConstructor ISTutorialPanel:new */
  export class ISTutorialPanel extends lua.client.SurvivalGuide.ISTutorialPanel {}

  // [client/SurvivalGuide/SurvivalGuideEntries.d.ts]
  export class SurvivalGuideEntries {}

  // [client/SurvivalGuide/SurvivalGuideManager.d.ts]
  /** @customConstructor SurvivalGuideManager:new */
  export class SurvivalGuideManager extends lua.client.SurvivalGuide.SurvivalGuideManager {}
  /** @noSelf */
  export const doSurvivalGuide = lua.client.SurvivalGuide.SurvivalGuideManager.doSurvivalGuide;

  // [client/Tests/MapObjectTests.d.ts]
  /** @noSelf */
  export const MapObjectTestCampfire = lua.client.Tests.MapObjectTests.MapObjectTestCampfire;
  /** @noSelf */
  export const MapObjectTestFarming = lua.client.Tests.MapObjectTests.MapObjectTestFarming;
  /** @noSelf */
  export const MapObjectTestRainBarrel = lua.client.Tests.MapObjectTests.MapObjectTestRainBarrel;

  // [client/Tests/RecipeTests.d.ts]
  /** @noSelf */
  export const RecipeTestAll = lua.client.Tests.RecipeTests.RecipeTestAll;
  /** @noSelf */
  export const RecipeTestAvailableItems = lua.client.Tests.RecipeTests.RecipeTestAvailableItems;
  /** @noSelf */
  export const RecipeTestNumberOfTimes = lua.client.Tests.RecipeTests.RecipeTestNumberOfTimes;
  /** @noSelf */
  export const RecipeTestSelectedItem = lua.client.Tests.RecipeTests.RecipeTestSelectedItem;

  // [client/Tests/RecipeUtils.d.ts]
  export class RecipeUtils {}

  // [client/Tests/TimedActionsTests.d.ts]
  export class TimedActionTests {}

  // [client/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
  /** @customConstructor ISActivateCarBatteryChargerAction:new */
  export class ISActivateCarBatteryChargerAction extends lua.client.TimedActions.ISActivateCarBatteryChargerAction {}

  // [client/TimedActions/ISActivateGenerator.d.ts]
  /** @customConstructor ISActivateGenerator:new */
  export class ISActivateGenerator extends lua.client.TimedActions.ISActivateGenerator {}

  // [client/TimedActions/ISAddCompost.d.ts]
  /** @customConstructor ISAddCompost:new */
  export class ISAddCompost extends lua.client.TimedActions.ISAddCompost {}

  // [client/TimedActions/ISAddFuel.d.ts]
  /** @customConstructor ISAddFuel:new */
  export class ISAddFuel extends lua.client.TimedActions.ISAddFuel {}

  // [client/TimedActions/ISAddItemInRecipe.d.ts]
  /** @customConstructor ISAddItemInRecipe:new */
  export class ISAddItemInRecipe extends lua.client.TimedActions.ISAddItemInRecipe {}

  // [client/TimedActions/ISAddSheetAction.d.ts]
  /** @customConstructor ISAddSheetAction:new */
  export class ISAddSheetAction extends lua.client.TimedActions.ISAddSheetAction {}

  // [client/TimedActions/ISAddSheetRope.d.ts]
  /** @customConstructor ISAddSheetRope:new */
  export class ISAddSheetRope extends lua.client.TimedActions.ISAddSheetRope {}

  // [client/TimedActions/ISAddWaterFromItemAction.d.ts]
  /** @customConstructor ISAddWaterFromItemAction:new */
  export class ISAddWaterFromItemAction extends lua.client.TimedActions.ISAddWaterFromItemAction {}

  // [client/TimedActions/ISApplyBandage.d.ts]
  /** @customConstructor ISApplyBandage:new */
  export class ISApplyBandage extends lua.client.TimedActions.ISApplyBandage {}

  // [client/TimedActions/ISAttachItemHotbar.d.ts]
  /** @customConstructor ISAttachItemHotbar:new */
  export class ISAttachItemHotbar extends lua.client.TimedActions.ISAttachItemHotbar {}

  // [client/TimedActions/ISBarricadeAction.d.ts]
  /** @customConstructor ISBarricadeAction:new */
  export class ISBarricadeAction extends lua.client.TimedActions.ISBarricadeAction {}

  // [shared/TimedActions/ISBaseTimedAction.d.ts]
  /** @customConstructor ISBaseTimedAction:new */
  export class ISBaseTimedAction extends lua.shared.TimedActions.ISBaseTimedAction {}

  // [client/TimedActions/ISBBQAddFuel.d.ts]
  /** @customConstructor ISBBQAddFuel:new */
  export class ISBBQAddFuel extends lua.client.TimedActions.ISBBQAddFuel {}

  // [client/TimedActions/ISBBQExtinguish.d.ts]
  /** @customConstructor ISBBQExtinguish:new */
  export class ISBBQExtinguish extends lua.client.TimedActions.ISBBQExtinguish {}

  // [client/TimedActions/ISBBQInfoAction.d.ts]
  /** @customConstructor ISBBQInfoAction:new */
  export class ISBBQInfoAction extends lua.client.TimedActions.ISBBQInfoAction {}

  // [client/TimedActions/ISBBQInsertPropaneTank.d.ts]
  /** @customConstructor ISBBQInsertPropaneTank:new */
  export class ISBBQInsertPropaneTank extends lua.client.TimedActions.ISBBQInsertPropaneTank {}

  // [client/TimedActions/ISBBQLightFromKindle.d.ts]
  /** @customConstructor ISBBQLightFromKindle:new */
  export class ISBBQLightFromKindle extends lua.client.TimedActions.ISBBQLightFromKindle {}

  // [client/TimedActions/ISBBQLightFromLiterature.d.ts]
  /** @customConstructor ISBBQLightFromLiterature:new */
  export class ISBBQLightFromLiterature extends lua.client.TimedActions.ISBBQLightFromLiterature {}

  // [client/TimedActions/ISBBQLightFromPetrol.d.ts]
  /** @customConstructor ISBBQLightFromPetrol:new */
  export class ISBBQLightFromPetrol extends lua.client.TimedActions.ISBBQLightFromPetrol {}

  // [client/TimedActions/ISBBQRemovePropaneTank.d.ts]
  /** @customConstructor ISBBQRemovePropaneTank:new */
  export class ISBBQRemovePropaneTank extends lua.client.TimedActions.ISBBQRemovePropaneTank {}

  // [client/TimedActions/ISBBQToggle.d.ts]
  /** @customConstructor ISBBQToggle:new */
  export class ISBBQToggle extends lua.client.TimedActions.ISBBQToggle {}

  // [client/TimedActions/ISBurnCorpseAction.d.ts]
  /** @customConstructor ISBurnCorpseAction:new */
  export class ISBurnCorpseAction extends lua.client.TimedActions.ISBurnCorpseAction {}

  // [client/TimedActions/ISBuryCorpse.d.ts]
  /** @customConstructor ISBuryCorpse:new */
  export class ISBuryCorpse extends lua.client.TimedActions.ISBuryCorpse {}

  // [client/TimedActions/ISCampingInfoAction.d.ts]
  /** @customConstructor ISCampingInfoAction:new */
  export class ISCampingInfoAction extends lua.client.TimedActions.ISCampingInfoAction {}

  // [client/TimedActions/ISChopTreeAction.d.ts]
  /** @customConstructor ISChopTreeAction:new */
  export class ISChopTreeAction extends lua.client.TimedActions.ISChopTreeAction {}

  // [client/TimedActions/ISCleanBandage.d.ts]
  /** @customConstructor ISCleanBandage:new */
  export class ISCleanBandage extends lua.client.TimedActions.ISCleanBandage {}

  // [client/TimedActions/ISCleanBlood.d.ts]
  /** @customConstructor ISCleanBlood:new */
  export class ISCleanBlood extends lua.client.TimedActions.ISCleanBlood {}

  // [client/TimedActions/ISCleanBurn.d.ts]
  /** @customConstructor ISCleanBurn:new */
  export class ISCleanBurn extends lua.client.TimedActions.ISCleanBurn {}

  // [client/TimedActions/ISClearAshes.d.ts]
  /** @customConstructor ISClearAshes:new */
  export class ISClearAshes extends lua.client.TimedActions.ISClearAshes {}

  // [client/TimedActions/ISClimbOverFence.d.ts]
  /** @customConstructor ISClimbOverFence:new */
  export class ISClimbOverFence extends lua.client.TimedActions.ISClimbOverFence {}

  // [client/TimedActions/ISClimbSheetRopeAction.d.ts]
  /** @customConstructor ISClimbSheetRopeAction:new */
  export class ISClimbSheetRopeAction extends lua.client.TimedActions.ISClimbSheetRopeAction {}

  // [client/TimedActions/ISClimbThroughWindow.d.ts]
  /** @customConstructor ISClimbThroughWindow:new */
  export class ISClimbThroughWindow extends lua.client.TimedActions.ISClimbThroughWindow {}

  // [client/TimedActions/ISClothingExtraAction.d.ts]
  /** @customConstructor ISClothingExtraAction:new */
  export class ISClothingExtraAction extends lua.client.TimedActions.ISClothingExtraAction {}

  // [client/TimedActions/ISComfreyCataplasm.d.ts]
  /** @customConstructor ISComfreyCataplasm:new */
  export class ISComfreyCataplasm extends lua.client.TimedActions.ISComfreyCataplasm {}

  // [client/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
  /** @customConstructor ISConnectCarBatteryToChargerAction:new */
  export class ISConnectCarBatteryToChargerAction extends lua.client.TimedActions.ISConnectCarBatteryToChargerAction {}

  // [client/TimedActions/ISConsolidateDrainable.d.ts]
  /** @customConstructor ISConsolidateDrainable:new */
  export class ISConsolidateDrainable extends lua.client.TimedActions.ISConsolidateDrainable {}

  // [client/TimedActions/ISConsolidateDrainableAll.d.ts]
  /** @customConstructor ISConsolidateDrainableAll:new */
  export class ISConsolidateDrainableAll extends lua.client.TimedActions.ISConsolidateDrainableAll {}

  // [client/TimedActions/ISCraftAction.d.ts]
  /** @customConstructor ISCraftAction:new */
  export class ISCraftAction extends lua.client.TimedActions.ISCraftAction {}

  // [client/TimedActions/ISCutHair.d.ts]
  /** @customConstructor ISCutHair:new */
  export class ISCutHair extends lua.client.TimedActions.ISCutHair {}

  // [client/TimedActions/ISDestroyStuffAction.d.ts]
  /** @customConstructor ISDestroyStuffAction:new */
  export class ISDestroyStuffAction extends lua.client.TimedActions.ISDestroyStuffAction {}

  // [client/TimedActions/ISDetachItemHotbar.d.ts]
  /** @customConstructor ISDetachItemHotbar:new */
  export class ISDetachItemHotbar extends lua.client.TimedActions.ISDetachItemHotbar {}

  // [client/TimedActions/ISDisinfect.d.ts]
  /** @customConstructor ISDisinfect:new */
  export class ISDisinfect extends lua.client.TimedActions.ISDisinfect {}

  // [client/TimedActions/ISDismantleAction.d.ts]
  /** @customConstructor ISDismantleAction:new */
  export class ISDismantleAction extends lua.client.TimedActions.ISDismantleAction {}

  // [client/TimedActions/ISDrinkFromBottle.d.ts]
  /** @customConstructor ISDrinkFromBottle:new */
  export class ISDrinkFromBottle extends lua.client.TimedActions.ISDrinkFromBottle {}

  // [client/TimedActions/ISDropItemAction.d.ts]
  /** @customConstructor ISDropItemAction:new */
  export class ISDropItemAction extends lua.client.TimedActions.ISDropItemAction {}

  // [client/TimedActions/ISDropWorldItemAction.d.ts]
  /** @customConstructor ISDropWorldItemAction:new */
  export class ISDropWorldItemAction extends lua.client.TimedActions.ISDropWorldItemAction {}

  // [client/TimedActions/ISDryMyself.d.ts]
  /** @customConstructor ISDryMyself:new */
  export class ISDryMyself extends lua.client.TimedActions.ISDryMyself {}

  // [client/TimedActions/ISDumpContentsAction.d.ts]
  /** @customConstructor ISDumpContentsAction:new */
  export class ISDumpContentsAction extends lua.client.TimedActions.ISDumpContentsAction {}

  // [client/TimedActions/ISDumpWaterAction.d.ts]
  /** @customConstructor ISDumpWaterAction:new */
  export class ISDumpWaterAction extends lua.client.TimedActions.ISDumpWaterAction {}

  // [client/TimedActions/ISDyeHair.d.ts]
  /** @customConstructor ISDyeHair:new */
  export class ISDyeHair extends lua.client.TimedActions.ISDyeHair {}

  // [client/TimedActions/ISEatFoodAction.d.ts]
  /** @customConstructor ISEatFoodAction:new */
  export class ISEatFoodAction extends lua.client.TimedActions.ISEatFoodAction {}

  // [client/TimedActions/ISEjectMagazine.d.ts]
  /** @customConstructor ISEjectMagazine:new */
  export class ISEjectMagazine extends lua.client.TimedActions.ISEjectMagazine {}

  // [client/TimedActions/ISEmptyRainBarrelAction.d.ts]
  /** @customConstructor ISEmptyRainBarrelAction:new */
  export class ISEmptyRainBarrelAction extends lua.client.TimedActions.ISEmptyRainBarrelAction {}

  // [client/TimedActions/ISEquipHeavyItem.d.ts]
  /** @customConstructor ISEquipHeavyItem:new */
  export class ISEquipHeavyItem extends lua.client.TimedActions.ISEquipHeavyItem {}

  // [client/TimedActions/ISEquipWeaponAction.d.ts]
  /** @customConstructor ISEquipWeaponAction:new */
  export class ISEquipWeaponAction extends lua.client.TimedActions.ISEquipWeaponAction {}

  // [client/TimedActions/ISFillGrave.d.ts]
  /** @customConstructor ISFillGrave:new */
  export class ISFillGrave extends lua.client.TimedActions.ISFillGrave {}

  // [client/TimedActions/ISFinalizeDealAction.d.ts]
  /** @customConstructor ISFinalizeDealAction:new */
  export class ISFinalizeDealAction extends lua.client.TimedActions.ISFinalizeDealAction {}

  // [client/TimedActions/ISFireplaceAddFuel.d.ts]
  /** @customConstructor ISFireplaceAddFuel:new */
  export class ISFireplaceAddFuel extends lua.client.TimedActions.ISFireplaceAddFuel {}

  // [client/TimedActions/ISFireplaceExtinguish.d.ts]
  /** @customConstructor ISFireplaceExtinguish:new */
  export class ISFireplaceExtinguish extends lua.client.TimedActions.ISFireplaceExtinguish {}

  // [client/TimedActions/ISFireplaceInfoAction.d.ts]
  /** @customConstructor ISFireplaceInfoAction:new */
  export class ISFireplaceInfoAction extends lua.client.TimedActions.ISFireplaceInfoAction {}

  // [client/TimedActions/ISFireplaceLightFromKindle.d.ts]
  /** @customConstructor ISFireplaceLightFromKindle:new */
  export class ISFireplaceLightFromKindle extends lua.client.TimedActions.ISFireplaceLightFromKindle {}

  // [client/TimedActions/ISFireplaceLightFromLiterature.d.ts]
  /** @customConstructor ISFireplaceLightFromLiterature:new */
  export class ISFireplaceLightFromLiterature extends lua.client.TimedActions.ISFireplaceLightFromLiterature {}

  // [client/TimedActions/ISFireplaceLightFromPetrol.d.ts]
  /** @customConstructor ISFireplaceLightFromPetrol:new */
  export class ISFireplaceLightFromPetrol extends lua.client.TimedActions.ISFireplaceLightFromPetrol {}

  // [client/TimedActions/ISFitnessAction.d.ts]
  /** @customConstructor ISFitnessAction:new */
  export class ISFitnessAction extends lua.client.TimedActions.ISFitnessAction {}

  // [client/TimedActions/ISFixAction.d.ts]
  /** @customConstructor ISFixAction:new */
  export class ISFixAction extends lua.client.TimedActions.ISFixAction {}

  // [client/TimedActions/ISFixGenerator.d.ts]
  /** @customConstructor ISFixGenerator:new */
  export class ISFixGenerator extends lua.client.TimedActions.ISFixGenerator {}

  // [client/TimedActions/ISGarlicCataplasm.d.ts]
  /** @customConstructor ISGarlicCataplasm:new */
  export class ISGarlicCataplasm extends lua.client.TimedActions.ISGarlicCataplasm {}

  // [client/TimedActions/ISGeneratorInfoAction.d.ts]
  /** @customConstructor ISGeneratorInfoAction:new */
  export class ISGeneratorInfoAction extends lua.client.TimedActions.ISGeneratorInfoAction {}

  // [client/TimedActions/ISGetCompost.d.ts]
  /** @customConstructor ISGetCompost:new */
  export class ISGetCompost extends lua.client.TimedActions.ISGetCompost {}

  // [client/TimedActions/ISGrabCorpseAction.d.ts]
  /** @customConstructor ISGrabCorpseAction:new */
  export class ISGrabCorpseAction extends lua.client.TimedActions.ISGrabCorpseAction {}

  // [client/TimedActions/ISGrabItemAction.d.ts]
  /** @customConstructor ISGrabItemAction:new */
  export class ISGrabItemAction extends lua.client.TimedActions.ISGrabItemAction {}

  // [client/TimedActions/ISInsertMagazine.d.ts]
  /** @customConstructor ISInsertMagazine:new */
  export class ISInsertMagazine extends lua.client.TimedActions.ISInsertMagazine {}

  // [client/TimedActions/ISInventoryTransferAction.d.ts]
  /** @customConstructor ISInventoryTransferAction:new */
  export class ISInventoryTransferAction extends lua.client.TimedActions.ISInventoryTransferAction {}

  // [client/TimedActions/ISLightActions.d.ts]
  /** @customConstructor ISLightActions:new */
  export class ISLightActions extends lua.client.TimedActions.ISLightActions {}

  // [client/TimedActions/ISLoadBulletsInMagazine.d.ts]
  /** @customConstructor ISLoadBulletsInMagazine:new */
  export class ISLoadBulletsInMagazine extends lua.client.TimedActions.ISLoadBulletsInMagazine {}

  // [client/TimedActions/ISLockDoor.d.ts]
  /** @customConstructor ISLockDoor:new */
  export class ISLockDoor extends lua.client.TimedActions.ISLockDoor {}

  // [client/TimedActions/ISMedicalCheckAction.d.ts]
  /** @customConstructor ISMedicalCheckAction:new */
  export class ISMedicalCheckAction extends lua.client.TimedActions.ISMedicalCheckAction {}

  // [client/TimedActions/ISOpenCloseCurtain.d.ts]
  /** @customConstructor ISOpenCloseCurtain:new */
  export class ISOpenCloseCurtain extends lua.client.TimedActions.ISOpenCloseCurtain {}

  // [client/TimedActions/ISOpenCloseDoor.d.ts]
  /** @customConstructor ISOpenCloseDoor:new */
  export class ISOpenCloseDoor extends lua.client.TimedActions.ISOpenCloseDoor {}

  // [client/TimedActions/ISOpenCloseWindow.d.ts]
  /** @customConstructor ISOpenCloseWindow:new */
  export class ISOpenCloseWindow extends lua.client.TimedActions.ISOpenCloseWindow {}

  // [client/TimedActions/ISOpenContainerTimedAction.d.ts]
  /** @customConstructor ISOpenContainerTimedAction:new */
  export class ISOpenContainerTimedAction extends lua.client.TimedActions.ISOpenContainerTimedAction {}

  // [client/TimedActions/ISOvenUITimedAction.d.ts]
  /** @customConstructor ISOvenUITimedAction:new */
  export class ISOvenUITimedAction extends lua.client.TimedActions.ISOvenUITimedAction {}

  // [client/TimedActions/ISPadlockAction.d.ts]
  /** @customConstructor ISPadlockAction:new */
  export class ISPadlockAction extends lua.client.TimedActions.ISPadlockAction {}

  // [client/TimedActions/ISPickupBrokenGlass.d.ts]
  /** @customConstructor ISPickupBrokenGlass:new */
  export class ISPickupBrokenGlass extends lua.client.TimedActions.ISPickupBrokenGlass {}

  // [client/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
  /** @customConstructor ISPlaceCarBatteryChargerAction:new */
  export class ISPlaceCarBatteryChargerAction extends lua.client.TimedActions.ISPlaceCarBatteryChargerAction {}

  // [client/TimedActions/ISPlaceTrap.d.ts]
  /** @customConstructor ISPlaceTrap:new */
  export class ISPlaceTrap extends lua.client.TimedActions.ISPlaceTrap {}

  // [client/TimedActions/ISPlantainCataplasm.d.ts]
  /** @customConstructor ISPlantainCataplasm:new */
  export class ISPlantainCataplasm extends lua.client.TimedActions.ISPlantainCataplasm {}

  // [client/TimedActions/ISPlugGenerator.d.ts]
  /** @customConstructor ISPlugGenerator:new */
  export class ISPlugGenerator extends lua.client.TimedActions.ISPlugGenerator {}

  // [client/TimedActions/ISPlumbItem.d.ts]
  /** @customConstructor ISPlumbItem:new */
  export class ISPlumbItem extends lua.client.TimedActions.ISPlumbItem {}

  // [client/TimedActions/ISPutOutFire.d.ts]
  /** @customConstructor ISPutOutFire:new */
  export class ISPutOutFire extends lua.client.TimedActions.ISPutOutFire {}

  // [client/TimedActions/ISQueueActionsAction.d.ts]
  /** @customConstructor ISQueueActionsAction:new */
  export class ISQueueActionsAction extends lua.client.TimedActions.ISQueueActionsAction {}

  // [client/TimedActions/ISRackFirearm.d.ts]
  /** @customConstructor ISRackFirearm:new */
  export class ISRackFirearm extends lua.client.TimedActions.ISRackFirearm {}

  // [client/TimedActions/ISReadABook.d.ts]
  /** @customConstructor ISReadABook:new */
  export class ISReadABook extends lua.client.TimedActions.ISReadABook {}

  // [client/TimedActions/ISReadWorldMap.d.ts]
  /** @customConstructor ISReadWorldMap:new */
  export class ISReadWorldMap extends lua.client.TimedActions.ISReadWorldMap {}

  // [client/TimedActions/ISReloadWeaponAction.d.ts]
  /** @customConstructor ISReloadWeaponAction:new */
  export class ISReloadWeaponAction extends lua.client.TimedActions.ISReloadWeaponAction {}

  // [client/TimedActions/ISRemoveBrokenGlass.d.ts]
  /** @customConstructor ISRemoveBrokenGlass:new */
  export class ISRemoveBrokenGlass extends lua.client.TimedActions.ISRemoveBrokenGlass {}

  // [client/TimedActions/ISRemoveBullet.d.ts]
  /** @customConstructor ISRemoveBullet:new */
  export class ISRemoveBullet extends lua.client.TimedActions.ISRemoveBullet {}

  // [client/TimedActions/ISRemoveBush.d.ts]
  /** @customConstructor ISRemoveBush:new */
  export class ISRemoveBush extends lua.client.TimedActions.ISRemoveBush {}

  // [client/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
  /** @customConstructor ISRemoveCarBatteryFromChargerAction:new */
  export class ISRemoveCarBatteryFromChargerAction extends lua.client.TimedActions
    .ISRemoveCarBatteryFromChargerAction {}

  // [client/TimedActions/ISRemoveGlass.d.ts]
  /** @customConstructor ISRemoveGlass:new */
  export class ISRemoveGlass extends lua.client.TimedActions.ISRemoveGlass {}

  // [client/TimedActions/ISRemoveGrass.d.ts]
  /** @customConstructor ISRemoveGrass:new */
  export class ISRemoveGrass extends lua.client.TimedActions.ISRemoveGrass {}

  // [client/TimedActions/ISRemovePatch.d.ts]
  /** @customConstructor ISRemovePatch:new */
  export class ISRemovePatch extends lua.client.TimedActions.ISRemovePatch {}

  // [client/TimedActions/ISRemoveSheetAction.d.ts]
  /** @customConstructor ISRemoveSheetAction:new */
  export class ISRemoveSheetAction extends lua.client.TimedActions.ISRemoveSheetAction {}

  // [client/TimedActions/ISRemoveSheetRope.d.ts]
  /** @customConstructor ISRemoveSheetRope:new */
  export class ISRemoveSheetRope extends lua.client.TimedActions.ISRemoveSheetRope {}

  // [client/TimedActions/ISRemoveWeaponUpgrade.d.ts]
  /** @customConstructor ISRemoveWeaponUpgrade:new */
  export class ISRemoveWeaponUpgrade extends lua.client.TimedActions.ISRemoveWeaponUpgrade {}

  // [client/TimedActions/ISRepairClothing.d.ts]
  /** @customConstructor ISRepairClothing:new */
  export class ISRepairClothing extends lua.client.TimedActions.ISRepairClothing {}

  // [client/TimedActions/ISRestAction.d.ts]
  /** @customConstructor ISRestAction:new */
  export class ISRestAction extends lua.client.TimedActions.ISRestAction {}

  // [client/TimedActions/ISRipClothing.d.ts]
  /** @customConstructor ISRipClothing:new */
  export class ISRipClothing extends lua.client.TimedActions.ISRipClothing {}

  // [client/TimedActions/ISScavengeAction.d.ts]
  /** @customConstructor ISScavengeAction:new */
  export class ISScavengeAction extends lua.client.TimedActions.ISScavengeAction {}

  // [client/TimedActions/ISSetComboWasherDryerMode.d.ts]
  /** @customConstructor ISSetComboWasherDryerMode:new */
  export class ISSetComboWasherDryerMode extends lua.client.TimedActions.ISSetComboWasherDryerMode {}

  // [client/TimedActions/ISSitOnChairAction.d.ts]
  /** @customConstructor ISSitOnChairAction:new */
  export class ISSitOnChairAction extends lua.client.TimedActions.ISSitOnChairAction {}

  // [client/TimedActions/ISSmashWindow.d.ts]
  /** @customConstructor ISSmashWindow:new */
  export class ISSmashWindow extends lua.client.TimedActions.ISSmashWindow {}

  // [client/TimedActions/ISSplint.d.ts]
  /** @customConstructor ISSplint:new */
  export class ISSplint extends lua.client.TimedActions.ISSplint {}

  // [client/TimedActions/ISStitch.d.ts]
  /** @customConstructor ISStitch:new */
  export class ISStitch extends lua.client.TimedActions.ISStitch {}

  // [client/TimedActions/ISStopAlarmClockAction.d.ts]
  /** @customConstructor ISStopAlarmClockAction:new */
  export class ISStopAlarmClockAction extends lua.client.TimedActions.ISStopAlarmClockAction {}

  // [client/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
  /** @customConstructor ISTakeCarBatteryChargerAction:new */
  export class ISTakeCarBatteryChargerAction extends lua.client.TimedActions.ISTakeCarBatteryChargerAction {}

  // [client/TimedActions/ISTakeFuel.d.ts]
  /** @customConstructor ISTakeFuel:new */
  export class ISTakeFuel extends lua.client.TimedActions.ISTakeFuel {}

  // [client/TimedActions/ISTakeGenerator.d.ts]
  /** @customConstructor ISTakeGenerator:new */
  export class ISTakeGenerator extends lua.client.TimedActions.ISTakeGenerator {}

  // [client/TimedActions/ISTakePillAction.d.ts]
  /** @customConstructor ISTakePillAction:new */
  export class ISTakePillAction extends lua.client.TimedActions.ISTakePillAction {}

  // [client/TimedActions/ISTakeTrap.d.ts]
  /** @customConstructor ISTakeTrap:new */
  export class ISTakeTrap extends lua.client.TimedActions.ISTakeTrap {}

  // [client/TimedActions/ISTakeWaterAction.d.ts]
  /** @customConstructor ISTakeWaterAction:new */
  export class ISTakeWaterAction extends lua.client.TimedActions.ISTakeWaterAction {}

  // [client/TimedActions/ISTimedActionQueue.d.ts]
  /** @customConstructor ISTimedActionQueue:new */
  export class ISTimedActionQueue extends lua.client.TimedActions.ISTimedActionQueue {}

  // [client/TimedActions/ISToggleClothingDryer.d.ts]
  /** @customConstructor ISToggleClothingDryer:new */
  export class ISToggleClothingDryer extends lua.client.TimedActions.ISToggleClothingDryer {}

  // [client/TimedActions/ISToggleClothingWasher.d.ts]
  /** @customConstructor ISToggleClothingWasher:new */
  export class ISToggleClothingWasher extends lua.client.TimedActions.ISToggleClothingWasher {}

  // [client/TimedActions/ISToggleComboWasherDryer.d.ts]
  /** @customConstructor ISToggleComboWasherDryer:new */
  export class ISToggleComboWasherDryer extends lua.client.TimedActions.ISToggleComboWasherDryer {}

  // [client/TimedActions/ISToggleLightAction.d.ts]
  /** @customConstructor ISToggleLightAction:new */
  export class ISToggleLightAction extends lua.client.TimedActions.ISToggleLightAction {}

  // [client/TimedActions/ISToggleSafetyAction.d.ts]
  /** @customConstructor ISToggleSafetyAction:new */
  export class ISToggleSafetyAction extends lua.client.TimedActions.ISToggleSafetyAction {}

  // [client/TimedActions/ISToggleStoveAction.d.ts]
  /** @customConstructor ISToggleStoveAction:new */
  export class ISToggleStoveAction extends lua.client.TimedActions.ISToggleStoveAction {}

  // [client/TimedActions/ISTransferWaterAction.d.ts]
  /** @customConstructor ISTransferWaterAction:new */
  export class ISTransferWaterAction extends lua.client.TimedActions.ISTransferWaterAction {}

  // [client/TimedActions/ISTrimBeard.d.ts]
  /** @customConstructor ISTrimBeard:new */
  export class ISTrimBeard extends lua.client.TimedActions.ISTrimBeard {}

  // [client/TimedActions/ISUnbarricadeAction.d.ts]
  /** @customConstructor ISUnbarricadeAction:new */
  export class ISUnbarricadeAction extends lua.client.TimedActions.ISUnbarricadeAction {}

  // [client/TimedActions/ISUnequipAction.d.ts]
  /** @customConstructor ISUnequipAction:new */
  export class ISUnequipAction extends lua.client.TimedActions.ISUnequipAction {}

  // [client/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
  /** @customConstructor ISUnloadBulletsFromFirearm:new */
  export class ISUnloadBulletsFromFirearm extends lua.client.TimedActions.ISUnloadBulletsFromFirearm {}

  // [client/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
  /** @customConstructor ISUnloadBulletsFromMagazine:new */
  export class ISUnloadBulletsFromMagazine extends lua.client.TimedActions.ISUnloadBulletsFromMagazine {}

  // [client/TimedActions/ISUpgradeWeapon.d.ts]
  /** @customConstructor ISUpgradeWeapon:new */
  export class ISUpgradeWeapon extends lua.client.TimedActions.ISUpgradeWeapon {}

  // [client/TimedActions/ISWakeOtherPlayer.d.ts]
  /** @customConstructor ISWakeOtherPlayer:new */
  export class ISWakeOtherPlayer extends lua.client.TimedActions.ISWakeOtherPlayer {}

  // [client/TimedActions/ISWashClothing.d.ts]
  /** @customConstructor ISWashClothing:new */
  export class ISWashClothing extends lua.client.TimedActions.ISWashClothing {}

  // [client/TimedActions/ISWashYourself.d.ts]
  /** @customConstructor ISWashYourself:new */
  export class ISWashYourself extends lua.client.TimedActions.ISWashYourself {}

  // [client/TimedActions/ISWearClothing.d.ts]
  /** @customConstructor ISWearClothing:new */
  export class ISWearClothing extends lua.client.TimedActions.ISWearClothing {}
  export class WearClothingAnimations {}

  // [client/TimedActions/WalkToTimedAction.d.ts]
  /** @customConstructor ISWalkToTimedAction:new */
  export class ISWalkToTimedAction extends lua.client.TimedActions.ISWalkToTimedAction {}

  // [server/Traps/BuildingObjects/TrapBO.d.ts]
  /** @customConstructor TrapBO:new */
  export class TrapBO extends lua.server.Traps.BuildingObjects.TrapBO {}

  // [client/Traps/CTrapGlobalObject.d.ts]
  /** @customConstructor CTrapGlobalObject:new */
  export class CTrapGlobalObject extends lua.client.Traps.CTrapGlobalObject {}

  // [client/Traps/CTrapSystem.d.ts]
  /** @customConstructor CTrapSystem:new */
  export class CTrapSystem extends lua.client.Traps.CTrapSystem {}

  // [server/Traps/ISUI/ISTrapMenu.d.ts]
  export class ISTrapMenu {}

  // [server/Traps/STrapGlobalObject.d.ts]
  /** @customConstructor STrapGlobalObject:new */
  export class STrapGlobalObject extends lua.server.Traps.STrapGlobalObject {}

  // [server/Traps/STrapSystem.d.ts]
  /** @customConstructor STrapSystem:new */
  export class STrapSystem extends lua.server.Traps.STrapSystem {}

  // [client/Traps/TimedActions/ISAddBaitAction.d.ts]
  /** @customConstructor ISAddBaitAction:new */
  export class ISAddBaitAction extends lua.client.Traps.TimedActions.ISAddBaitAction {}

  // [client/Traps/TimedActions/ISCheckTrapAction.d.ts]
  /** @customConstructor ISCheckTrapAction:new */
  export class ISCheckTrapAction extends lua.client.Traps.TimedActions.ISCheckTrapAction {}

  // [client/Traps/TimedActions/ISRemoveBaitAction.d.ts]
  /** @customConstructor ISRemoveBaitAction:new */
  export class ISRemoveBaitAction extends lua.client.Traps.TimedActions.ISRemoveBaitAction {}

  // [client/Traps/TimedActions/ISRemoveTrapAction.d.ts]
  /** @customConstructor ISRemoveTrapAction:new */
  export class ISRemoveTrapAction extends lua.client.Traps.TimedActions.ISRemoveTrapAction {}

  // [server/Traps/TrapDefinition.d.ts]
  export class Animals {}
  export class Traps {}

  // [server/TurnBased/TurnBasedMain.d.ts]
  export class TurnbasedDummyChr {}
  /** @noSelf */
  export const InitTurnbasedEngine = lua.server.TurnBased.TurnBasedMain.InitTurnbasedEngine;
  /** @noSelf */
  export const PrepareTurnbasedEngine = lua.server.TurnBased.TurnBasedMain.PrepareTurnbasedEngine;

  // [client/Tutorial/ISUI/TutorialFocus.d.ts]
  /** @customConstructor TutorialFocus:new */
  export class TutorialFocus extends lua.client.Tutorial.ISUI.TutorialFocus {}

  // [client/Tutorial/ISUI/TutorialMessage.d.ts]
  /** @customConstructor TutorialMessage:new */
  export class TutorialMessage extends lua.client.Tutorial.ISUI.TutorialMessage {}

  // [client/Tutorial/Steps.d.ts]
  /** @customConstructor BandageStep:new */
  export class BandageStep extends lua.client.Tutorial.BandageStep {}
  /** @customConstructor FightStep:new */
  export class FightStep extends lua.client.Tutorial.FightStep {}
  /** @customConstructor InventoryLootingStep:new */
  export class InventoryLootingStep extends lua.client.Tutorial.InventoryLootingStep {}
  /** @customConstructor InventoryUseStep:new */
  export class InventoryUseStep extends lua.client.Tutorial.InventoryUseStep {}
  /** @customConstructor ShotgunStep:new */
  export class ShotgunStep extends lua.client.Tutorial.ShotgunStep {}
  /** @customConstructor SneakStep:new */
  export class SneakStep extends lua.client.Tutorial.SneakStep {}
  /** @customConstructor WalkToAdjacent:new */
  export class WalkToAdjacent extends lua.client.Tutorial.WalkToAdjacent {}
  /** @customConstructor WelcomeStep:new */
  export class WelcomeStep extends lua.client.Tutorial.WelcomeStep {}
  export class TutorialTests {}

  // [client/Tutorial/Tutorial1.d.ts]
  export class Tutorial1 {}

  // [client/Tutorial/TutorialSetup.d.ts]
  export class TutorialData {}
  /** @noSelf */
  export const doTutorialDraw = lua.client.Tutorial.TutorialSetup.doTutorialDraw;
  /** @noSelf */
  export const doTutorialInit = lua.client.Tutorial.TutorialSetup.doTutorialInit;
  /** @noSelf */
  export const preLoadTutorialInit = lua.client.Tutorial.TutorialSetup.preLoadTutorialInit;

  // [client/Tutorial/TutorialStep.d.ts]
  /** @customConstructor TutorialStep:new */
  export class TutorialStep extends lua.client.Tutorial.TutorialStep {}

  // [server/TutorialHelperFunctions.d.ts]
  export class TutorialHelperFunctions {}

  // [shared/Util/AdjacentFreeTileFinder.d.ts]
  export class AdjacentFreeTileFinder {}

  // [shared/Util/BuildingHelper.d.ts]
  export class BuildingHelper {}

  // [shared/Util/ISPriorityTable.d.ts]
  export class ISPriorityTable {}

  // [shared/Util/LuaList.d.ts]
  /** @customConstructor LuaList:new */
  export class LuaList extends lua.shared.Util.LuaList {}

  // [shared/Util/LuaNet.d.ts]
  export class LuaNet {}

  // [shared/Util/StringReplacer.d.ts]
  export class StringReplacer {}

  // [shared/Util/Vector2.d.ts]
  export class Vector2 {}

  // [client/Vehicles/ISUI/EditVehicleState.d.ts]
  /** @customConstructor EditVehicleUI:new */
  export class EditVehicleUI extends lua.client.Vehicles.ISUI.EditVehicleUI {}
  /** @customConstructor EditVehicleUI_EditArea:new */
  export class EditVehicleUI_EditArea extends lua.client.Vehicles.ISUI.EditVehicleUI_EditArea {}
  /** @customConstructor EditVehicleUI_EditAttachment:new */
  export class EditVehicleUI_EditAttachment extends lua.client.Vehicles.ISUI.EditVehicleUI_EditAttachment {}
  /** @customConstructor EditVehicleUI_EditChassis:new */
  export class EditVehicleUI_EditChassis extends lua.client.Vehicles.ISUI.EditVehicleUI_EditChassis {}
  /** @customConstructor EditVehicleUI_EditPanel:new */
  export class EditVehicleUI_EditPanel extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPanel {}
  /** @customConstructor EditVehicleUI_EditPassenger:new */
  export class EditVehicleUI_EditPassenger extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPassenger {}
  /** @customConstructor EditVehicleUI_EditPhysics:new */
  export class EditVehicleUI_EditPhysics extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPhysics {}
  /** @customConstructor EditVehicleUI_EditWheel:new */
  export class EditVehicleUI_EditWheel extends lua.client.Vehicles.ISUI.EditVehicleUI_EditWheel {}
  /** @customConstructor EditVehicleUI_ListBox:new */
  export class EditVehicleUI_ListBox extends lua.client.Vehicles.ISUI.EditVehicleUI_ListBox {}
  /** @customConstructor EditVehicleUI_Scene:new */
  export class EditVehicleUI_Scene extends lua.client.Vehicles.ISUI.EditVehicleUI_Scene {}
  /** @customConstructor EditVehicleUI_SwitchView:new */
  export class EditVehicleUI_SwitchView extends lua.client.Vehicles.ISUI.EditVehicleUI_SwitchView {}
  /** @noSelf */
  export const EditVehicleState_InitUI = lua.client.Vehicles.ISUI.EditVehicleState.EditVehicleState_InitUI;

  // [client/Vehicles/ISUI/ISCarMechanicsOverlay.d.ts]
  export class ISCarMechanicsOverlay {}

  // [client/Vehicles/ISUI/ISLightbarUI.d.ts]
  /** @customConstructor ISLightbarUI:new */
  export class ISLightbarUI extends lua.client.Vehicles.ISUI.ISLightbarUI {}

  // [client/Vehicles/ISUI/ISUI3DScene.d.ts]
  /** @customConstructor ISUI3DScene:new */
  export class ISUI3DScene extends lua.client.Vehicles.ISUI.ISUI3DScene {}

  // [client/Vehicles/ISUI/ISUIVehicleModel.d.ts]
  /** @customConstructor ISUIVehicleModel:new */
  export class ISUIVehicleModel extends lua.client.Vehicles.ISUI.ISUIVehicleModel {}

  // [client/Vehicles/ISUI/ISVehicleACUI.d.ts]
  /** @customConstructor ISVehicleACUI:new */
  export class ISVehicleACUI extends lua.client.Vehicles.ISUI.ISVehicleACUI {}

  // [client/Vehicles/ISUI/ISVehicleAngles.d.ts]
  /** @customConstructor ISVehicleAngles:new */
  export class ISVehicleAngles extends lua.client.Vehicles.ISUI.ISVehicleAngles {}

  // [client/Vehicles/ISUI/ISVehicleBloodUI.d.ts]
  /** @customConstructor ISVehicleBloodUI:new */
  export class ISVehicleBloodUI extends lua.client.Vehicles.ISUI.ISVehicleBloodUI {}

  // [client/Vehicles/ISUI/ISVehicleColor.d.ts]
  /** @customConstructor ISVehicleHSV:new */
  export class ISVehicleHSV extends lua.client.Vehicles.ISUI.ISVehicleHSV {}

  // [client/Vehicles/ISUI/ISVehicleDashboard.d.ts]
  /** @customConstructor ISVehicleDashboard:new */
  export class ISVehicleDashboard extends lua.client.Vehicles.ISUI.ISVehicleDashboard {}

  // [client/Vehicles/ISUI/ISVehicleGauge.d.ts]
  /** @customConstructor ISVehicleGauge:new */
  export class ISVehicleGauge extends lua.client.Vehicles.ISUI.ISVehicleGauge {}

  // [client/Vehicles/ISUI/ISVehicleMechanics.d.ts]
  /** @customConstructor ISVehicleMechanics:new */
  export class ISVehicleMechanics extends lua.client.Vehicles.ISUI.ISVehicleMechanics {}

  // [client/Vehicles/ISUI/ISVehicleMenu.d.ts]
  export class ISVehicleMenu {}

  // [client/Vehicles/ISUI/ISVehiclePartMenu.d.ts]
  export class ISVehiclePartMenu {}

  // [client/Vehicles/ISUI/ISVehicleRegulator.d.ts]
  export class ISVehicleRegulator {}

  // [client/Vehicles/ISUI/ISVehicleRoadtripDebug.d.ts]
  /** @customConstructor ISVehicleRoadtripDebug:new */
  export class ISVehicleRoadtripDebug extends lua.client.Vehicles.ISUI.ISVehicleRoadtripDebug {}

  // [client/Vehicles/ISUI/ISVehicleSeatUI.d.ts]
  /** @customConstructor ISVehicleSeatUI:new */
  export class ISVehicleSeatUI extends lua.client.Vehicles.ISUI.ISVehicleSeatUI {}

  // [client/Vehicles/ISVehicleTrailerUtils.d.ts]
  export class ISVehicleTrailerUtils {}

  // [client/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
  /** @customConstructor ISAddGasolineToVehicle:new */
  export class ISAddGasolineToVehicle extends lua.client.Vehicles.TimedActions.ISAddGasolineToVehicle {}

  // [client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
  /** @customConstructor ISAttachTrailerToVehicle:new */
  export class ISAttachTrailerToVehicle extends lua.client.Vehicles.TimedActions.ISAttachTrailerToVehicle {}

  // [client/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
  /** @customConstructor ISCloseVehicleDoor:new */
  export class ISCloseVehicleDoor extends lua.client.Vehicles.TimedActions.ISCloseVehicleDoor {}

  // [client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
  /** @customConstructor ISConfigHeadlight:new */
  export class ISConfigHeadlight extends lua.client.Vehicles.TimedActions.ISConfigHeadlight {}

  // [client/Vehicles/TimedActions/ISDeflateTire.d.ts]
  /** @customConstructor ISDeflateTire:new */
  export class ISDeflateTire extends lua.client.Vehicles.TimedActions.ISDeflateTire {}

  // [client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
  /** @customConstructor ISDetachTrailerFromVehicle:new */
  export class ISDetachTrailerFromVehicle extends lua.client.Vehicles.TimedActions.ISDetachTrailerFromVehicle {}

  // [client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
  /** @customConstructor ISEnterVehicle:new */
  export class ISEnterVehicle extends lua.client.Vehicles.TimedActions.ISEnterVehicle {}

  // [client/Vehicles/TimedActions/ISExitVehicle.d.ts]
  /** @customConstructor ISExitVehicle:new */
  export class ISExitVehicle extends lua.client.Vehicles.TimedActions.ISExitVehicle {}

  // [client/Vehicles/TimedActions/ISHorn.d.ts]
  /** @customConstructor ISHorn:new */
  export class ISHorn extends lua.client.Vehicles.TimedActions.ISHorn {}

  // [client/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
  /** @customConstructor ISHotwireVehicle:new */
  export class ISHotwireVehicle extends lua.client.Vehicles.TimedActions.ISHotwireVehicle {}

  // [client/Vehicles/TimedActions/ISInflateTire.d.ts]
  /** @customConstructor ISInflateTire:new */
  export class ISInflateTire extends lua.client.Vehicles.TimedActions.ISInflateTire {}

  // [client/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
  /** @customConstructor ISInstallVehiclePart:new */
  export class ISInstallVehiclePart extends lua.client.Vehicles.TimedActions.ISInstallVehiclePart {}

  // [client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
  /** @customConstructor ISLightbarUITimedAction:new */
  export class ISLightbarUITimedAction extends lua.client.Vehicles.TimedActions.ISLightbarUITimedAction {}

  // [client/Vehicles/TimedActions/ISLockDoors.d.ts]
  /** @customConstructor ISLockDoors:new */
  export class ISLockDoors extends lua.client.Vehicles.TimedActions.ISLockDoors {}

  // [client/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
  /** @customConstructor ISLockVehicleDoor:new */
  export class ISLockVehicleDoor extends lua.client.Vehicles.TimedActions.ISLockVehicleDoor {}

  // [client/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
  /** @customConstructor ISOpenCloseVehicleWindow:new */
  export class ISOpenCloseVehicleWindow extends lua.client.Vehicles.TimedActions.ISOpenCloseVehicleWindow {}

  // [client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
  /** @customConstructor ISOpenMechanicsUIAction:new */
  export class ISOpenMechanicsUIAction extends lua.client.Vehicles.TimedActions.ISOpenMechanicsUIAction {}

  // [client/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
  /** @customConstructor ISOpenVehicleDoor:new */
  export class ISOpenVehicleDoor extends lua.client.Vehicles.TimedActions.ISOpenVehicleDoor {}

  // [client/Vehicles/TimedActions/ISPathFindAction.d.ts]
  /** @customConstructor ISPathFindAction:new */
  export class ISPathFindAction extends lua.client.Vehicles.TimedActions.ISPathFindAction {}

  // [client/Vehicles/TimedActions/ISRechargeCarBattery.d.ts]
  /** @customConstructor ISRechargeCarBattery:new */
  export class ISRechargeCarBattery extends lua.client.Vehicles.TimedActions.ISRechargeCarBattery {}

  // [client/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
  /** @customConstructor ISRefuelFromGasPump:new */
  export class ISRefuelFromGasPump extends lua.client.Vehicles.TimedActions.ISRefuelFromGasPump {}

  // [client/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
  /** @customConstructor ISRemoveBurntVehicle:new */
  export class ISRemoveBurntVehicle extends lua.client.Vehicles.TimedActions.ISRemoveBurntVehicle {}

  // [client/Vehicles/TimedActions/ISRepairEngine.d.ts]
  /** @customConstructor ISRepairEngine:new */
  export class ISRepairEngine extends lua.client.Vehicles.TimedActions.ISRepairEngine {}

  // [client/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
  /** @customConstructor ISShutOffVehicleEngine:new */
  export class ISShutOffVehicleEngine extends lua.client.Vehicles.TimedActions.ISShutOffVehicleEngine {}

  // [client/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
  /** @customConstructor ISSmashVehicleWindow:new */
  export class ISSmashVehicleWindow extends lua.client.Vehicles.TimedActions.ISSmashVehicleWindow {}

  // [client/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
  /** @customConstructor ISStartVehicleEngine:new */
  export class ISStartVehicleEngine extends lua.client.Vehicles.TimedActions.ISStartVehicleEngine {}

  // [client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
  /** @customConstructor ISSwitchVehicleSeat:new */
  export class ISSwitchVehicleSeat extends lua.client.Vehicles.TimedActions.ISSwitchVehicleSeat {}

  // [client/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
  /** @customConstructor ISTakeEngineParts:new */
  export class ISTakeEngineParts extends lua.client.Vehicles.TimedActions.ISTakeEngineParts {}

  // [client/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
  /** @customConstructor ISTakeGasolineFromVehicle:new */
  export class ISTakeGasolineFromVehicle extends lua.client.Vehicles.TimedActions.ISTakeGasolineFromVehicle {}

  // [client/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
  /** @customConstructor ISUninstallVehiclePart:new */
  export class ISUninstallVehiclePart extends lua.client.Vehicles.TimedActions.ISUninstallVehiclePart {}

  // [client/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
  /** @customConstructor ISUnlockVehicleDoor:new */
  export class ISUnlockVehicleDoor extends lua.client.Vehicles.TimedActions.ISUnlockVehicleDoor {}

  // [client/Vehicles/TimedActions/ISWashVehicle.d.ts]
  /** @customConstructor ISWashVehicle:new */
  export class ISWashVehicle extends lua.client.Vehicles.TimedActions.ISWashVehicle {}

  // [server/Vehicles/Vehicles.d.ts]
  export class Vehicles {}
  export class VehicleUtils {}

  // [client/XpSystem/ISUI/ISCharacterInfo.d.ts]
  /** @customConstructor ISCharacterInfo:new */
  export class ISCharacterInfo extends lua.client.XpSystem.ISUI.ISCharacterInfo {}

  // [client/XpSystem/ISUI/ISCharacterInfoWindow.d.ts]
  /** @customConstructor ISCharacterInfoWindow:new */
  export class ISCharacterInfoWindow extends lua.client.XpSystem.ISUI.ISCharacterInfoWindow {}

  // [client/XpSystem/ISUI/ISCharacterProtection.d.ts]
  /** @customConstructor ISCharacterProtection:new */
  export class ISCharacterProtection extends lua.client.XpSystem.ISUI.ISCharacterProtection {}

  // [client/XpSystem/ISUI/ISCharacterScreen.d.ts]
  /** @customConstructor ISCharacterScreen:new */
  export class ISCharacterScreen extends lua.client.XpSystem.ISUI.ISCharacterScreen {}
  /** @customConstructor ISCharacterScreenAvatar:new */
  export class ISCharacterScreenAvatar extends lua.client.XpSystem.ISUI.ISCharacterScreenAvatar {}

  // [client/XpSystem/ISUI/ISClothingInsPanel.d.ts]
  /** @customConstructor ISClothingInsPanel:new */
  export class ISClothingInsPanel extends lua.client.XpSystem.ISUI.ISClothingInsPanel {}

  // [client/XpSystem/ISUI/ISHealthPanel.d.ts]
  /** @customConstructor HealthPanelAction:new */
  export class HealthPanelAction extends lua.client.XpSystem.ISUI.HealthPanelAction {}
  /** @customConstructor ISHealthBodyPartListBox:new */
  export class ISHealthBodyPartListBox extends lua.client.XpSystem.ISUI.ISHealthBodyPartListBox {}
  /** @customConstructor ISHealthBodyPartPanel:new */
  export class ISHealthBodyPartPanel extends lua.client.XpSystem.ISUI.ISHealthBodyPartPanel {}
  /** @customConstructor ISHealthPanel:new */
  export class ISHealthPanel extends lua.client.XpSystem.ISUI.ISHealthPanel {}
  /** @customConstructor ISNewHealthPanel:new */
  export class ISNewHealthPanel extends lua.client.XpSystem.ISUI.ISNewHealthPanel {}

  // [client/XpSystem/ISUI/ISSkillProgressBar.d.ts]
  /** @customConstructor ISSkillProgressBar:new */
  export class ISSkillProgressBar extends lua.client.XpSystem.ISUI.ISSkillProgressBar {}

  // [server/XpSystem/XPSystem_SkillBook.d.ts]
  export class SkillBook {}

  // [server/XpSystem/XpSystem_text.d.ts]
  export class xpSystemText {}

  // [server/XpSystem/XpUpdate.d.ts]
  export class xpUpdate {}

}
