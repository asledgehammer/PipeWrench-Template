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
 * File generated at Friday July 2022 15:18:33.796-0500
 */

/** @noResolution @noSelfInFile */
/// <reference path="Zomboid_41.71_References.d.ts" />
declare module 'Zomboid' {
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
}
