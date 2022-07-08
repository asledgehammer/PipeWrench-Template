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
 * File generated at Friday July 2022 14:23:27.224-0500
 */

/// <reference path="Zomboid_41.71_API.d.ts" />
/// <reference path="Zomboid_41.71__fmod_fmod.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_function.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_iterator.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_list_array.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_map.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_map_hash.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_procedure.d.ts" />
/// <reference path="Zomboid_41.71__gnu_trove_set.d.ts" />
/// <reference path="Zomboid_41.71__java_awt.d.ts" />
/// <reference path="Zomboid_41.71__java_awt_image.d.ts" />
/// <reference path="Zomboid_41.71__java_io.d.ts" />
/// <reference path="Zomboid_41.71__java_lang.d.ts" />
/// <reference path="Zomboid_41.71__java_lang_reflect.d.ts" />
/// <reference path="Zomboid_41.71__java_net.d.ts" />
/// <reference path="Zomboid_41.71__java_nio.d.ts" />
/// <reference path="Zomboid_41.71__java_nio_channels.d.ts" />
/// <reference path="Zomboid_41.71__java_nio_file.d.ts" />
/// <reference path="Zomboid_41.71__java_text.d.ts" />
/// <reference path="Zomboid_41.71__java_time.d.ts" />
/// <reference path="Zomboid_41.71__java_util.d.ts" />
/// <reference path="Zomboid_41.71__java_util_concurrent.d.ts" />
/// <reference path="Zomboid_41.71__java_util_concurrent_locks.d.ts" />
/// <reference path="Zomboid_41.71__java_util_function.d.ts" />
/// <reference path="Zomboid_41.71__java_util_stream.d.ts" />
/// <reference path="Zomboid_41.71__java_util_zip.d.ts" />
/// <reference path="Zomboid_41.71__org_joml.d.ts" />
/// <reference path="Zomboid_41.71__org_lwjgl_glfw.d.ts" />
/// <reference path="Zomboid_41.71__org_lwjgl_util.d.ts" />
/// <reference path="Zomboid_41.71__org_lwjgl_util_vector.d.ts" />
/// <reference path="Zomboid_41.71__org_lwjglx_input.d.ts" />
/// <reference path="Zomboid_41.71__se_krka_kahlua_converter.d.ts" />
/// <reference path="Zomboid_41.71__se_krka_kahlua_integration.d.ts" />
/// <reference path="Zomboid_41.71__se_krka_kahlua_integration_expose.d.ts" />
/// <reference path="Zomboid_41.71__se_krka_kahlua_j2se.d.ts" />
/// <reference path="Zomboid_41.71__se_krka_kahlua_vm.d.ts" />
/// <reference path="Zomboid_41.71__zombie.d.ts" />
/// <reference path="Zomboid_41.71__zombie_Lua.d.ts" />
/// <reference path="Zomboid_41.71__zombie_ai.d.ts" />
/// <reference path="Zomboid_41.71__zombie_ai_astar.d.ts" />
/// <reference path="Zomboid_41.71__zombie_ai_permission.d.ts" />
/// <reference path="Zomboid_41.71__zombie_ai_sadisticAIDirector.d.ts" />
/// <reference path="Zomboid_41.71__zombie_ai_states.d.ts" />
/// <reference path="Zomboid_41.71__zombie_asset.d.ts" />
/// <reference path="Zomboid_41.71__zombie_audio.d.ts" />
/// <reference path="Zomboid_41.71__zombie_audio_parameters.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characterTextures.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_AttachedItems.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_BodyDamage.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_CharacterTimedActions.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_Moodles.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_WornItems.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_action.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_professions.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_skills.d.ts" />
/// <reference path="Zomboid_41.71__zombie_characters_traits.d.ts" />
/// <reference path="Zomboid_41.71__zombie_chat.d.ts" />
/// <reference path="Zomboid_41.71__zombie_config.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_Collections.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_Styles.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_fonts.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_input.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_logger.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_math.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_network.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_opengl.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_physics.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_properties.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_raknet.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_advancedanimation.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_advancedanimation_debug.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_animation.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_animation_debug.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_animation_sharedskele.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_model.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_population.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_runtime.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_skinnedmodel_visual.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_sprite.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_stash.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_textures.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_utils.d.ts" />
/// <reference path="Zomboid_41.71__zombie_core_znet.d.ts" />
/// <reference path="Zomboid_41.71__zombie_debug.d.ts" />
/// <reference path="Zomboid_41.71__zombie_debug_options.d.ts" />
/// <reference path="Zomboid_41.71__zombie_erosion.d.ts" />
/// <reference path="Zomboid_41.71__zombie_erosion_season.d.ts" />
/// <reference path="Zomboid_41.71__zombie_fileSystem.d.ts" />
/// <reference path="Zomboid_41.71__zombie_gameStates.d.ts" />
/// <reference path="Zomboid_41.71__zombie_globalObjects.d.ts" />
/// <reference path="Zomboid_41.71__zombie_input.d.ts" />
/// <reference path="Zomboid_41.71__zombie_interfaces.d.ts" />
/// <reference path="Zomboid_41.71__zombie_inventory.d.ts" />
/// <reference path="Zomboid_41.71__zombie_inventory_types.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_SpriteDetails.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_areas.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_areas_isoregion.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_areas_isoregion_data.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_areas_isoregion_regions.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_objects.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_objects_interfaces.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_sprite.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_sprite_shapers.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_weather.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_weather_fog.d.ts" />
/// <reference path="Zomboid_41.71__zombie_iso_weather_fx.d.ts" />
/// <reference path="Zomboid_41.71__zombie_modding.d.ts" />
/// <reference path="Zomboid_41.71__zombie_network.d.ts" />
/// <reference path="Zomboid_41.71__zombie_network_chat.d.ts" />
/// <reference path="Zomboid_41.71__zombie_network_packets.d.ts" />
/// <reference path="Zomboid_41.71__zombie_network_packets_hit.d.ts" />
/// <reference path="Zomboid_41.71__zombie_popman.d.ts" />
/// <reference path="Zomboid_41.71__zombie_radio.d.ts" />
/// <reference path="Zomboid_41.71__zombie_radio_StorySounds.d.ts" />
/// <reference path="Zomboid_41.71__zombie_radio_devices.d.ts" />
/// <reference path="Zomboid_41.71__zombie_radio_media.d.ts" />
/// <reference path="Zomboid_41.71__zombie_radio_scripting.d.ts" />
/// <reference path="Zomboid_41.71__zombie_randomizedWorld.d.ts" />
/// <reference path="Zomboid_41.71__zombie_randomizedWorld_randomizedBuilding.d.ts" />
/// <reference path="Zomboid_41.71__zombie_randomizedWorld_randomizedDeadSurvivor.d.ts" />
/// <reference path="Zomboid_41.71__zombie_randomizedWorld_randomizedVehicleStory.d.ts" />
/// <reference path="Zomboid_41.71__zombie_randomizedWorld_randomizedZoneStory.d.ts" />
/// <reference path="Zomboid_41.71__zombie_sandbox.d.ts" />
/// <reference path="Zomboid_41.71__zombie_scripting.d.ts" />
/// <reference path="Zomboid_41.71__zombie_scripting_objects.d.ts" />
/// <reference path="Zomboid_41.71__zombie_ui.d.ts" />
/// <reference path="Zomboid_41.71__zombie_util.d.ts" />
/// <reference path="Zomboid_41.71__zombie_util_list.d.ts" />
/// <reference path="Zomboid_41.71__zombie_vehicles.d.ts" />
/// <reference path="Zomboid_41.71__zombie_worldMap.d.ts" />
/// <reference path="Zomboid_41.71__zombie_worldMap_markers.d.ts" />
/// <reference path="Zomboid_41.71__zombie_worldMap_styles.d.ts" />
/// <reference path="Zomboid_41.71__zombie_worldMap_symbols.d.ts" />
/// <reference path="Zomboid_41.71__zombie_world_moddata.d.ts" />
