-- MIT License
-- 
-- Copyright (c) 2022 JabDoesThings
-- 
-- Permission is hereby granted, free of charge, to any person obtaining a copy
-- of this software and associated documentation files (the "Software"), to deal
-- in the Software without restriction, including without limitation the rights
-- to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
-- copies of the Software, and to permit persons to whom the Software is
-- furnished to do so, subject to the following conditions:
-- 
-- The above copyright notice and this permission notice shall be included in all
-- copies or substantial portions of the Software.
-- 
-- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
-- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-- OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-- SOFTWARE.
--
-- File generated at 2022-07-29T23:58Z

local Exports = {}

--------------------------------------------
-- [PARTIAL] : Java.interface.partial.lua --
--------------------------------------------

function Exports.tonumber(arg) return tonumber(arg) end
function Exports.tostring(arg) return tostring(arg) end
function Exports.global(id) return _G[id] end
function Exports.loadstring(lua) return loadstring(lua) end
function Exports.execute(lua) return loadstring(lua)() end
function Exports.addEventListener(id, func) Events[id].Add(func) end
function Exports.removeEventListener(id, func) Events[id].Add(func) end
function Exports.AddNoiseToken(arg1, arg2) return AddNoiseToken(arg1, arg2) end
function Exports.AddWorldSound(arg1, arg2, arg3) return AddWorldSound(arg1, arg2, arg3) end
function Exports.InvMngGetItem(arg1, arg2, arg3) return InvMngGetItem(arg1, arg2, arg3) end
function Exports.InvMngRemoveItem(arg1, arg2) return InvMngRemoveItem(arg1, arg2) end
function Exports.ProceedFactionMessage(arg1) return ProceedFactionMessage(arg1) end
function Exports.ProcessAdminChatMessage(arg1) return ProcessAdminChatMessage(arg1) end
function Exports.ProcessSafehouseMessage(arg1) return ProcessSafehouseMessage(arg1) end
function Exports.SendCommandToServer(arg1) return SendCommandToServer(arg1) end
function Exports.ZombRand(arg1, arg2) return ZombRand(arg1, arg2) end
function Exports.ZombRandBetween(arg1, arg2) return ZombRandBetween(arg1, arg2) end
function Exports.ZombRandFloat(arg1, arg2) return ZombRandFloat(arg1, arg2) end
function Exports.acceptFactionInvite(arg1, arg2) return acceptFactionInvite(arg1, arg2) end
function Exports.acceptSafehouseInvite(arg1, arg2) return acceptSafehouseInvite(arg1, arg2) end
function Exports.acceptTrading(arg1, arg2, arg3) return acceptTrading(arg1, arg2, arg3) end
function Exports.activateJoypadOnSteamDeck() return activateJoypadOnSteamDeck() end
function Exports.activateSteamOverlayToWebPage(arg1) return activateSteamOverlayToWebPage(arg1) end
function Exports.activateSteamOverlayToWorkshop() return activateSteamOverlayToWorkshop() end
function Exports.activateSteamOverlayToWorkshopItem(arg1) return activateSteamOverlayToWorkshopItem(arg1) end
function Exports.activateSteamOverlayToWorkshopUser() return activateSteamOverlayToWorkshopUser() end
function Exports.addAllBurntVehicles() return addAllBurntVehicles() end
function Exports.addAllSmashedVehicles() return addAllSmashedVehicles() end
function Exports.addAllVehicles(arg1) return addAllVehicles(arg1) end
function Exports.addCarCrash() return addCarCrash() end
function Exports.addPhysicsObject() return addPhysicsObject() end
function Exports.addTicket(arg1, arg2, arg3) return addTicket(arg1, arg2, arg3) end
function Exports.addUserlog(arg1, arg2, arg3) return addUserlog(arg1, arg2, arg3) end
function Exports.addVehicle(arg1) return addVehicle(arg1) end
function Exports.addVehicleDebug(arg1, arg2, arg3, arg4) return addVehicleDebug(arg1, arg2, arg3, arg4) end
function Exports.addVirtualZombie(arg1, arg2) return addVirtualZombie(arg1, arg2) end
function Exports.addWarningPoint(arg1, arg2, arg3) return addWarningPoint(arg1, arg2, arg3) end
function Exports.addZombiesInOutfit(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) return addZombiesInOutfit(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) end
function Exports.assaultPlayer() return assaultPlayer() end
function Exports.attachTrailerToPlayerVehicle(arg1) return attachTrailerToPlayerVehicle(arg1) end
function Exports.backToSinglePlayer() return backToSinglePlayer() end
function Exports.breakpoint() return breakpoint() end
function Exports.canConnect() return canConnect() end
function Exports.canInviteFriends() return canInviteFriends() end
function Exports.canModifyPlayerScoreboard() return canModifyPlayerScoreboard() end
function Exports.canModifyPlayerStats() return canModifyPlayerStats() end
function Exports.canSeePlayerStats() return canSeePlayerStats() end
function Exports.checkPlayerCanUseChat(arg1) return checkPlayerCanUseChat(arg1) end
function Exports.checkSaveFileExists(arg1) return checkSaveFileExists(arg1) end
function Exports.checkSaveFolderExists(arg1) return checkSaveFolderExists(arg1) end
function Exports.checkSavePlayerExists() return checkSavePlayerExists() end
function Exports.cloneItemType(arg1, arg2) return cloneItemType(arg1, arg2) end
function Exports.configureLighting(arg1) return configureLighting(arg1) end
function Exports.connectToServerStateCallback(arg1) return connectToServerStateCallback(arg1) end
function Exports.copyTable(arg1, arg2) return copyTable(arg1, arg2) end
function Exports.createHordeFromTo(arg1, arg2, arg3, arg4, arg5) return createHordeFromTo(arg1, arg2, arg3, arg4, arg5) end
function Exports.createHordeInAreaTo(arg1, arg2, arg3, arg4, arg5, arg6, arg7) return createHordeInAreaTo(arg1, arg2, arg3, arg4, arg5, arg6, arg7) end
function Exports.createItemTransaction(arg1, arg2, arg3) return createItemTransaction(arg1, arg2, arg3) end
function Exports.createNewScriptItem(arg1, arg2, arg3, arg4, arg5) return createNewScriptItem(arg1, arg2, arg3, arg4, arg5) end
function Exports.createRandomDeadBody(arg1, arg2) return createRandomDeadBody(arg1, arg2) end
function Exports.createRegionFile() return createRegionFile() end
function Exports.createStory(arg1) return createStory(arg1) end
function Exports.createTile(arg1, arg2) return createTile(arg1, arg2) end
function Exports.createWorld(arg1) return createWorld(arg1) end
function Exports.createZombie(arg1, arg2, arg3, arg4, arg5, arg6) return createZombie(arg1, arg2, arg3, arg4, arg5, arg6) end
function Exports.debugFullyStreamedIn(arg1, arg2) return debugFullyStreamedIn(arg1, arg2) end
function Exports.debugLuaTable(arg1, arg2) return debugLuaTable(arg1, arg2) end
function Exports.debugSetRoomType(arg1) return debugSetRoomType(arg1) end
function Exports.deleteAllGameModeSaves(arg1) return deleteAllGameModeSaves(arg1) end
function Exports.deletePlayerSave(arg1) return deletePlayerSave(arg1) end
function Exports.deleteSandboxPreset(arg1) return deleteSandboxPreset(arg1) end
function Exports.deleteSave(arg1) return deleteSave(arg1) end
function Exports.disconnect() return disconnect() end
function Exports.doChallenge(arg1) return doChallenge(arg1) end
function Exports.doKeyPress(arg1) return doKeyPress(arg1) end
function Exports.doTutorial(arg1) return doTutorial(arg1) end
function Exports.drawOverheadMap(arg1, arg2, arg3, arg4) return drawOverheadMap(arg1, arg2, arg3, arg4) end
function Exports.endFileInput() return endFileInput() end
function Exports.endFileOutput() return endFileOutput() end
function Exports.endHelicopter() return endHelicopter() end
function Exports.endTextFileInput() return endTextFileInput() end
function Exports.executeQuery(arg1, arg2) return executeQuery(arg1, arg2) end
function Exports.fileExists(arg1) return fileExists(arg1) end
function Exports.focusOnTab(arg1) return focusOnTab(arg1) end
function Exports.forceChangeState(arg1) return forceChangeState(arg1) end
function Exports.forceDisconnect() return forceDisconnect() end
function Exports.forceSnowCheck() return forceSnowCheck() end
function Exports.getAbsoluteSaveFolderName(arg1) return getAbsoluteSaveFolderName(arg1) end
function Exports.getAccessLevel() return getAccessLevel() end
function Exports.getActivatedMods() return getActivatedMods() end
function Exports.getAllBeardStyles() return getAllBeardStyles() end
function Exports.getAllDecalNamesForItem(arg1) return getAllDecalNamesForItem(arg1) end
function Exports.getAllHairStyles(arg1) return getAllHairStyles(arg1) end
function Exports.getAllItems() return getAllItems() end
function Exports.getAllItemsForBodyLocation(arg1) return getAllItemsForBodyLocation(arg1) end
function Exports.getAllOutfits(arg1) return getAllOutfits(arg1) end
function Exports.getAllRecipes() return getAllRecipes() end
function Exports.getAllSavedPlayers() return getAllSavedPlayers() end
function Exports.getAllVehicles() return getAllVehicles() end
function Exports.getAmbientStreamManager() return getAmbientStreamManager() end
function Exports.getAnimationViewerState() return getAnimationViewerState() end
function Exports.getAttachmentEditorState() return getAttachmentEditorState() end
function Exports.getBeardStylesInstance() return getBeardStylesInstance() end
function Exports.getBehaviourDebugPlayer() return getBehaviourDebugPlayer() end
function Exports.getButtonCount(arg1) return getButtonCount(arg1) end
function Exports.getCallframeTop(arg1) return getCallframeTop(arg1) end
function Exports.getCameraOffX() return getCameraOffX() end
function Exports.getCameraOffY() return getCameraOffY() end
function Exports.getCell() return getCell() end
function Exports.getClassField(arg1, arg2) return getClassField(arg1, arg2) end
function Exports.getClassFieldVal(arg1, arg2) return getClassFieldVal(arg1, arg2) end
function Exports.getClassFunction(arg1, arg2) return getClassFunction(arg1, arg2) end
function Exports.getClientUsername() return getClientUsername() end
function Exports.getClimateManager() return getClimateManager() end
function Exports.getClimateMoon() return getClimateMoon() end
function Exports.getConnectedPlayers() return getConnectedPlayers() end
function Exports.getControllerAxisCount(arg1) return getControllerAxisCount(arg1) end
function Exports.getControllerAxisValue(arg1, arg2) return getControllerAxisValue(arg1, arg2) end
function Exports.getControllerButtonCount(arg1) return getControllerButtonCount(arg1) end
function Exports.getControllerCount() return getControllerCount() end
function Exports.getControllerDeadZone(arg1, arg2) return getControllerDeadZone(arg1, arg2) end
function Exports.getControllerGUID(arg1) return getControllerGUID(arg1) end
function Exports.getControllerName(arg1) return getControllerName(arg1) end
function Exports.getControllerPovX(arg1) return getControllerPovX(arg1) end
function Exports.getControllerPovY(arg1) return getControllerPovY(arg1) end
function Exports.getCore() return getCore() end
function Exports.getCoroutineCallframeStack(arg1, arg2) return getCoroutineCallframeStack(arg1, arg2) end
function Exports.getCoroutineObjStack(arg1, arg2) return getCoroutineObjStack(arg1, arg2) end
function Exports.getCoroutineObjStackWithBase(arg1, arg2) return getCoroutineObjStackWithBase(arg1, arg2) end
function Exports.getCoroutineTop(arg1) return getCoroutineTop(arg1) end
function Exports.getCurrentCoroutine() return getCurrentCoroutine() end
function Exports.getCurrentUserProfileName() return getCurrentUserProfileName() end
function Exports.getCurrentUserSteamID() return getCurrentUserSteamID() end
function Exports.getDBSchema() return getDBSchema() end
function Exports.getDebug() return getDebug() end
function Exports.getDebugOptions() return getDebugOptions() end
function Exports.getDirectionTo(arg1, arg2) return getDirectionTo(arg1, arg2) end
function Exports.getEditVehicleState() return getEditVehicleState() end
function Exports.getErosion() return getErosion() end
function Exports.getEvolvedRecipes() return getEvolvedRecipes() end
function Exports.getFMODSoundBank() return getFMODSoundBank() end
function Exports.getFileInput(arg1) return getFileInput(arg1) end
function Exports.getFileOutput(arg1) return getFileOutput(arg1) end
function Exports.getFileReader(arg1, arg2) return getFileReader(arg1, arg2) end
function Exports.getFileSeparator() return getFileSeparator() end
function Exports.getFileWriter(arg1, arg2, arg3) return getFileWriter(arg1, arg2, arg3) end
function Exports.getFilenameOfCallframe(arg1) return getFilenameOfCallframe(arg1) end
function Exports.getFilenameOfClosure(arg1) return getFilenameOfClosure(arg1) end
function Exports.getFirstLineOfClosure(arg1) return getFirstLineOfClosure(arg1) end
function Exports.getFriendsList() return getFriendsList() end
function Exports.getFullSaveDirectoryTable() return getFullSaveDirectoryTable() end
function Exports.getGameClient() return getGameClient() end
function Exports.getGameFilesInput(arg1) return getGameFilesInput(arg1) end
function Exports.getGameFilesTextInput(arg1) return getGameFilesTextInput(arg1) end
function Exports.getGameSpeed() return getGameSpeed() end
function Exports.getGameTime() return getGameTime() end
function Exports.getGametimeTimestamp() return getGametimeTimestamp() end
function Exports.getHairStylesInstance() return getHairStylesInstance() end
function Exports.getHourMinute() return getHourMinute() end
function Exports.getIsoMarkers() return getIsoMarkers() end
function Exports.getItemNameFromFullType(arg1) return getItemNameFromFullType(arg1) end
function Exports.getItemText(arg1) return getItemText(arg1) end
function Exports.getJoypadAButton(arg1) return getJoypadAButton(arg1) end
function Exports.getJoypadAimingAxisX(arg1) return getJoypadAimingAxisX(arg1) end
function Exports.getJoypadAimingAxisY(arg1) return getJoypadAimingAxisY(arg1) end
function Exports.getJoypadBButton(arg1) return getJoypadBButton(arg1) end
function Exports.getJoypadBackButton(arg1) return getJoypadBackButton(arg1) end
function Exports.getJoypadLBumper(arg1) return getJoypadLBumper(arg1) end
function Exports.getJoypadLeftStickButton(arg1) return getJoypadLeftStickButton(arg1) end
function Exports.getJoypadMovementAxisX(arg1) return getJoypadMovementAxisX(arg1) end
function Exports.getJoypadMovementAxisY(arg1) return getJoypadMovementAxisY(arg1) end
function Exports.getJoypadRBumper(arg1) return getJoypadRBumper(arg1) end
function Exports.getJoypadRightStickButton(arg1) return getJoypadRightStickButton(arg1) end
function Exports.getJoypadStartButton(arg1) return getJoypadStartButton(arg1) end
function Exports.getJoypadXButton(arg1) return getJoypadXButton(arg1) end
function Exports.getJoypadYButton(arg1) return getJoypadYButton(arg1) end
function Exports.getKeyCode(arg1) return getKeyCode(arg1) end
function Exports.getKeyName(arg1) return getKeyName(arg1) end
function Exports.getLastPlayedDate(arg1) return getLastPlayedDate(arg1) end
function Exports.getLastStandPlayerFileNames() return getLastStandPlayerFileNames() end
function Exports.getLastStandPlayersDirectory() return getLastStandPlayersDirectory() end
function Exports.getLatestSave() return getLatestSave() end
function Exports.getLineNumber(arg1) return getLineNumber(arg1) end
function Exports.getLoadedLua(arg1) return getLoadedLua(arg1) end
function Exports.getLoadedLuaCount() return getLoadedLuaCount() end
function Exports.getLocalVarCount(arg1) return getLocalVarCount(arg1) end
function Exports.getLocalVarName(arg1, arg2) return getLocalVarName(arg1, arg2) end
function Exports.getLocalVarStack(arg1, arg2) return getLocalVarStack(arg1, arg2) end
function Exports.getLotDirectories() return getLotDirectories() end
function Exports.getLuaDebuggerErrorCount() return getLuaDebuggerErrorCount() end
function Exports.getLuaDebuggerErrors() return getLuaDebuggerErrors() end
function Exports.getMapDirectoryTable() return getMapDirectoryTable() end
function Exports.getMapFoldersForMod(arg1) return getMapFoldersForMod(arg1) end
function Exports.getMapInfo(arg1) return getMapInfo(arg1) end
function Exports.getMaxActivePlayers() return getMaxActivePlayers() end
function Exports.getMaxPlayers() return getMaxPlayers() end
function Exports.getMethodParameter(arg1, arg2) return getMethodParameter(arg1, arg2) end
function Exports.getMethodParameterCount(arg1) return getMethodParameterCount(arg1) end
function Exports.getModDirectoryTable() return getModDirectoryTable() end
function Exports.getModFileReader(arg1, arg2, arg3) return getModFileReader(arg1, arg2, arg3) end
function Exports.getModFileWriter(arg1, arg2, arg3, arg4) return getModFileWriter(arg1, arg2, arg3, arg4) end
function Exports.getModInfo(arg1) return getModInfo(arg1) end
function Exports.getModInfoByID(arg1) return getModInfoByID(arg1) end
function Exports.getMods() return getMods() end
function Exports.getMouseX() return getMouseX() end
function Exports.getMouseXScaled() return getMouseXScaled() end
function Exports.getMouseY() return getMouseY() end
function Exports.getMouseYScaled() return getMouseYScaled() end
function Exports.getMyDocumentFolder() return getMyDocumentFolder() end
function Exports.getNumActivePlayers() return getNumActivePlayers() end
function Exports.getNumClassFields(arg1) return getNumClassFields(arg1) end
function Exports.getNumClassFunctions(arg1) return getNumClassFunctions(arg1) end
function Exports.getOnlinePlayers() return getOnlinePlayers() end
function Exports.getOnlineUsername() return getOnlineUsername() end
function Exports.getPacketCounts(arg1) return getPacketCounts(arg1) end
function Exports.getPerformance() return getPerformance() end
function Exports.getPlayer() return getPlayer() end
function Exports.getPlayerByOnlineID(arg1) return getPlayerByOnlineID(arg1) end
function Exports.getPlayerFromUsername(arg1) return getPlayerFromUsername(arg1) end
function Exports.getPlayerInfo(arg1) return getPlayerInfo(arg1) end
function Exports.getPlayerScreenHeight(arg1) return getPlayerScreenHeight(arg1) end
function Exports.getPlayerScreenLeft(arg1) return getPlayerScreenLeft(arg1) end
function Exports.getPlayerScreenTop(arg1) return getPlayerScreenTop(arg1) end
function Exports.getPlayerScreenWidth(arg1) return getPlayerScreenWidth(arg1) end
function Exports.getPublicServersList() return getPublicServersList() end
function Exports.getPuddlesManager() return getPuddlesManager() end
function Exports.getRadioAPI() return getRadioAPI() end
function Exports.getRadioText(arg1) return getRadioText(arg1) end
function Exports.getRadioTranslators(arg1) return getRadioTranslators(arg1) end
function Exports.getRandomUUID() return getRandomUUID() end
function Exports.getRecipeDisplayName(arg1) return getRecipeDisplayName(arg1) end
function Exports.getReconnectCountdownTimer() return getReconnectCountdownTimer() end
function Exports.getRenderer() return getRenderer() end
function Exports.getSLSoundManager() return getSLSoundManager() end
function Exports.getSandboxFileWriter(arg1, arg2, arg3) return getSandboxFileWriter(arg1, arg2, arg3) end
function Exports.getSandboxOptions() return getSandboxOptions() end
function Exports.getSandboxPresets() return getSandboxPresets() end
function Exports.getSaveDirectory(arg1) return getSaveDirectory(arg1) end
function Exports.getSaveDirectoryTable() return getSaveDirectoryTable() end
function Exports.getSaveInfo(arg1) return getSaveInfo(arg1) end
function Exports.getSaveName(arg1) return getSaveName(arg1) end
function Exports.getScriptManager() return getScriptManager() end
function Exports.getSearchMode() return getSearchMode() end
function Exports.getServerAddressFromArgs() return getServerAddressFromArgs() end
function Exports.getServerList() return getServerList() end
function Exports.getServerListFile() return getServerListFile() end
function Exports.getServerModData() return getServerModData() end
function Exports.getServerName() return getServerName() end
function Exports.getServerOptions() return getServerOptions() end
function Exports.getServerPasswordFromArgs() return getServerPasswordFromArgs() end
function Exports.getServerSavedWorldVersion(arg1) return getServerSavedWorldVersion(arg1) end
function Exports.getServerSettingsManager() return getServerSettingsManager() end
function Exports.getServerSpawnRegions() return getServerSpawnRegions() end
function Exports.getServerStatistic() return getServerStatistic() end
function Exports.getServerStatisticEnable() return getServerStatisticEnable() end
function Exports.getShortenedFilename(arg1) return getShortenedFilename(arg1) end
function Exports.getSleepingEvent() return getSleepingEvent() end
function Exports.getSoundManager() return getSoundManager() end
function Exports.getSpecificPlayer(arg1) return getSpecificPlayer(arg1) end
function Exports.getSprite(arg1) return getSprite(arg1) end
function Exports.getSpriteManager(arg1) return getSpriteManager(arg1) end
function Exports.getSquare(arg1, arg2, arg3) return getSquare(arg1, arg2, arg3) end
function Exports.getStatistics() return getStatistics() end
function Exports.getSteamAvatarFromSteamID(arg1) return getSteamAvatarFromSteamID(arg1) end
function Exports.getSteamAvatarFromUsername(arg1) return getSteamAvatarFromUsername(arg1) end
function Exports.getSteamIDFromUsername(arg1) return getSteamIDFromUsername(arg1) end
function Exports.getSteamModeActive() return getSteamModeActive() end
function Exports.getSteamProfileNameFromSteamID(arg1) return getSteamProfileNameFromSteamID(arg1) end
function Exports.getSteamProfileNameFromUsername(arg1) return getSteamProfileNameFromUsername(arg1) end
function Exports.getSteamScoreboard() return getSteamScoreboard() end
function Exports.getSteamWorkshopItemIDs() return getSteamWorkshopItemIDs() end
function Exports.getSteamWorkshopItemMods(arg1) return getSteamWorkshopItemMods(arg1) end
function Exports.getSteamWorkshopStagedItems() return getSteamWorkshopStagedItems() end
function Exports.getTableResult(arg1, arg2) return getTableResult(arg1, arg2) end
function Exports.getText(arg1, arg2, arg3, arg4, arg5) return getText(arg1, arg2, arg3, arg4, arg5) end
function Exports.getTextManager() return getTextManager() end
function Exports.getTextMediaEN(arg1) return getTextMediaEN(arg1) end
function Exports.getTextOrNull(arg1, arg2, arg3, arg4, arg5) return getTextOrNull(arg1, arg2, arg3, arg4, arg5) end
function Exports.getTexture(arg1) return getTexture(arg1) end
function Exports.getTextureFromSaveDir(arg1, arg2) return getTextureFromSaveDir(arg1, arg2) end
function Exports.getTickets(arg1) return getTickets(arg1) end
function Exports.getTime() return getTime() end
function Exports.getTimeInMillis() return getTimeInMillis() end
function Exports.getTimestamp() return getTimestamp() end
function Exports.getTimestampMs() return getTimestampMs() end
function Exports.getTranslatorCredits(arg1) return getTranslatorCredits(arg1) end
function Exports.getUrlInputStream(arg1) return getUrlInputStream(arg1) end
function Exports.getVehicleById(arg1) return getVehicleById(arg1) end
function Exports.getVehicleInfo(arg1) return getVehicleInfo(arg1) end
function Exports.getVehicleZoneAt(arg1, arg2, arg3) return getVehicleZoneAt(arg1, arg2, arg3) end
function Exports.getWorld() return getWorld() end
function Exports.getWorldMarkers() return getWorldMarkers() end
function Exports.getWorldSoundManager() return getWorldSoundManager() end
function Exports.getZombieInfo(arg1) return getZombieInfo(arg1) end
function Exports.getZomboidRadio() return getZomboidRadio() end
function Exports.getZone(arg1, arg2, arg3) return getZone(arg1, arg2, arg3) end
function Exports.getZones(arg1, arg2, arg3) return getZones(arg1, arg2, arg3) end
function Exports.hasBreakpoint(arg1, arg2) return hasBreakpoint(arg1, arg2) end
function Exports.hasDataBreakpoint(arg1, arg2) return hasDataBreakpoint(arg1, arg2) end
function Exports.hasDataReadBreakpoint(arg1, arg2) return hasDataReadBreakpoint(arg1, arg2) end
function Exports.initUISystem() return initUISystem() end
function Exports.instanceItem(arg1) return instanceItem(arg1) end
function Exports.instof(arg1, arg2) return instof(arg1, arg2) end
function Exports.inviteFriend(arg1) return inviteFriend(arg1) end
function Exports.is64bit() return is64bit() end
function Exports.isAccessLevel(arg1) return isAccessLevel(arg1) end
function Exports.isAdmin() return isAdmin() end
function Exports.isAltKeyDown() return isAltKeyDown() end
function Exports.isClient() return isClient() end
function Exports.isControllerConnected(arg1) return isControllerConnected(arg1) end
function Exports.isCoopHost() return isCoopHost() end
function Exports.isCtrlKeyDown() return isCtrlKeyDown() end
function Exports.isCurrentExecutionPoint(arg1, arg2) return isCurrentExecutionPoint(arg1, arg2) end
function Exports.isDebugEnabled() return isDebugEnabled() end
function Exports.isDemo() return isDemo() end
function Exports.isDesktopOpenSupported() return isDesktopOpenSupported() end
function Exports.isFloatingGamepadTextInputVisible() return isFloatingGamepadTextInputVisible() end
function Exports.isGamePaused() return isGamePaused() end
function Exports.isIngameState() return isIngameState() end
function Exports.isItemTransactionConsistent(arg1, arg2, arg3) return isItemTransactionConsistent(arg1, arg2, arg3) end
function Exports.isJoypadConnected(arg1) return isJoypadConnected(arg1) end
function Exports.isJoypadDown(arg1) return isJoypadDown(arg1) end
function Exports.isJoypadLBPressed(arg1) return isJoypadLBPressed(arg1) end
function Exports.isJoypadLTPressed(arg1) return isJoypadLTPressed(arg1) end
function Exports.isJoypadLeft(arg1) return isJoypadLeft(arg1) end
function Exports.isJoypadLeftStickButtonPressed(arg1) return isJoypadLeftStickButtonPressed(arg1) end
function Exports.isJoypadPressed(arg1, arg2) return isJoypadPressed(arg1, arg2) end
function Exports.isJoypadRBPressed(arg1) return isJoypadRBPressed(arg1) end
function Exports.isJoypadRTPressed(arg1) return isJoypadRTPressed(arg1) end
function Exports.isJoypadRight(arg1) return isJoypadRight(arg1) end
function Exports.isJoypadRightStickButtonPressed(arg1) return isJoypadRightStickButtonPressed(arg1) end
function Exports.isJoypadUp(arg1) return isJoypadUp(arg1) end
function Exports.isKeyDown(arg1) return isKeyDown(arg1) end
function Exports.isKeyPressed(arg1) return isKeyPressed(arg1) end
function Exports.isModActive(arg1) return isModActive(arg1) end
function Exports.isMouseButtonDown(arg1) return isMouseButtonDown(arg1) end
function Exports.isPublicServerListAllowed() return isPublicServerListAllowed() end
function Exports.isServer() return isServer() end
function Exports.isServerSoftReset() return isServerSoftReset() end
function Exports.isShiftKeyDown() return isShiftKeyDown() end
function Exports.isSoundPlaying(arg1) return isSoundPlaying(arg1) end
function Exports.isSteamOverlayEnabled() return isSteamOverlayEnabled() end
function Exports.isSteamRunningOnSteamDeck() return isSteamRunningOnSteamDeck() end
function Exports.isSystemLinux() return isSystemLinux() end
function Exports.isSystemMacOS() return isSystemMacOS() end
function Exports.isSystemWindows() return isSystemWindows() end
function Exports.isType(arg1, arg2) return isType(arg1, arg2) end
function Exports.isValidSteamID(arg1) return isValidSteamID(arg1) end
function Exports.isValidUserName(arg1) return isValidUserName(arg1) end
function Exports.isXBOXController() return isXBOXController() end
function Exports.isoRegionsRenderer() return isoRegionsRenderer() end
function Exports.isoToScreenX(arg1, arg2, arg3, arg4) return isoToScreenX(arg1, arg2, arg3, arg4) end
function Exports.isoToScreenY(arg1, arg2, arg3, arg4) return isoToScreenY(arg1, arg2, arg3, arg4) end
function Exports.loadSkinnedZomboidModel(arg1, arg2, arg3) return loadSkinnedZomboidModel(arg1, arg2, arg3) end
function Exports.loadStaticZomboidModel(arg1, arg2, arg3) return loadStaticZomboidModel(arg1, arg2, arg3) end
function Exports.loadVehicleModel(arg1, arg2, arg3) return loadVehicleModel(arg1, arg2, arg3) end
function Exports.loadZomboidModel(arg1, arg2, arg3, arg4, arg5) return loadZomboidModel(arg1, arg2, arg3, arg4, arg5) end
function Exports.localVarName(arg1, arg2) return localVarName(arg1, arg2) end
function Exports.luaDebug() return luaDebug() end
function Exports.manipulateSavefile(arg1, arg2) return manipulateSavefile(arg1, arg2) end
function Exports.moduleDotType(arg1, arg2) return moduleDotType(arg1, arg2) end
function Exports.openURl(arg1) return openURl(arg1) end
function Exports.pauseSoundAndMusic() return pauseSoundAndMusic() end
function Exports.ping(arg1, arg2, arg3, arg4) return ping(arg1, arg2, arg3, arg4) end
function Exports.playServerSound(arg1, arg2) return playServerSound(arg1, arg2) end
function Exports.proceedPM(arg1) return proceedPM(arg1) end
function Exports.processGeneralMessage(arg1) return processGeneralMessage(arg1) end
function Exports.processSayMessage(arg1) return processSayMessage(arg1) end
function Exports.processShoutMessage(arg1) return processShoutMessage(arg1) end
function Exports.querySteamWorkshopItemDetails(arg1, arg2, arg3) return querySteamWorkshopItemDetails(arg1, arg2, arg3) end
function Exports.queueCharEvent(arg1) return queueCharEvent(arg1) end
function Exports.queueKeyEvent(arg1) return queueKeyEvent(arg1) end
function Exports.rainConfig(arg1, arg2) return rainConfig(arg1, arg2) end
function Exports.reactivateJoypadAfterResetLua() return reactivateJoypadAfterResetLua() end
function Exports.refreshAnimSets(arg1) return refreshAnimSets(arg1) end
function Exports.reloadActionGroups() return reloadActionGroups() end
function Exports.reloadControllerConfigFiles() return reloadControllerConfigFiles() end
function Exports.reloadEngineRPM() return reloadEngineRPM() end
function Exports.reloadLuaFile(arg1) return reloadLuaFile(arg1) end
function Exports.reloadModelsMatching(arg1) return reloadModelsMatching(arg1) end
function Exports.reloadServerLuaFile(arg1) return reloadServerLuaFile(arg1) end
function Exports.reloadSoundFiles() return reloadSoundFiles() end
function Exports.reloadVehicleTextures(arg1) return reloadVehicleTextures(arg1) end
function Exports.reloadVehicles() return reloadVehicles() end
function Exports.removeItemTransaction(arg1, arg2, arg3) return removeItemTransaction(arg1, arg2, arg3) end
function Exports.removeTicket(arg1) return removeTicket(arg1) end
function Exports.removeUserlog(arg1, arg2, arg3) return removeUserlog(arg1, arg2, arg3) end
function Exports.renderIsoCircle(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) return renderIsoCircle(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) end
function Exports.replaceWith(arg1, arg2, arg3) return replaceWith(arg1, arg2, arg3) end
function Exports.requestPacketCounts() return requestPacketCounts() end
function Exports.requestTrading(arg1, arg2) return requestTrading(arg1, arg2) end
function Exports.requestUserlog(arg1) return requestUserlog(arg1) end
function Exports.require(arg1) return require(arg1) end
function Exports.resetRegionFile() return resetRegionFile() end
function Exports.resumeSoundAndMusic() return resumeSoundAndMusic() end
function Exports.revertToKeyboardAndMouse() return revertToKeyboardAndMouse() end
function Exports.sanitizeWorldName(arg1) return sanitizeWorldName(arg1) end
function Exports.save(arg1) return save(arg1) end
function Exports.saveControllerSettings(arg1) return saveControllerSettings(arg1) end
function Exports.saveGame() return saveGame() end
function Exports.saveModsFile() return saveModsFile() end
function Exports.scoreboardUpdate() return scoreboardUpdate() end
function Exports.screenToIsoX(arg1, arg2, arg3, arg4) return screenToIsoX(arg1, arg2, arg3, arg4) end
function Exports.screenToIsoY(arg1, arg2, arg3, arg4) return screenToIsoY(arg1, arg2, arg3, arg4) end
function Exports.sendBandage(arg1, arg2, arg3, arg4, arg5, arg6) return sendBandage(arg1, arg2, arg3, arg4, arg5, arg6) end
function Exports.sendCataplasm(arg1, arg2, arg3, arg4, arg5) return sendCataplasm(arg1, arg2, arg3, arg4, arg5) end
function Exports.sendCleanBurn(arg1, arg2, arg3, arg4) return sendCleanBurn(arg1, arg2, arg3, arg4) end
function Exports.sendClientCommand(arg1, arg2, arg3, arg4) return sendClientCommand(arg1, arg2, arg3, arg4) end
function Exports.sendClothing(arg1) return sendClothing(arg1) end
function Exports.sendDisinfect(arg1, arg2, arg3, arg4) return sendDisinfect(arg1, arg2, arg3, arg4) end
function Exports.sendFactionInvite(arg1, arg2, arg3) return sendFactionInvite(arg1, arg2, arg3) end
function Exports.sendItemListNet(arg1, arg2, arg3, arg4, arg5) return sendItemListNet(arg1, arg2, arg3, arg4, arg5) end
function Exports.sendItemsInContainer(arg1, arg2) return sendItemsInContainer(arg1, arg2) end
function Exports.sendPersonalColor(arg1) return sendPersonalColor(arg1) end
function Exports.sendPing() return sendPing() end
function Exports.sendPlayerExtraInfo(arg1) return sendPlayerExtraInfo(arg1) end
function Exports.sendPlayerStatsChange(arg1) return sendPlayerStatsChange(arg1) end
function Exports.sendRemoveBullet(arg1, arg2, arg3) return sendRemoveBullet(arg1, arg2, arg3) end
function Exports.sendRemoveGlass(arg1, arg2, arg3, arg4) return sendRemoveGlass(arg1, arg2, arg3, arg4) end
function Exports.sendRequestInventory(arg1) return sendRequestInventory(arg1) end
function Exports.sendSafehouseInvite(arg1, arg2, arg3) return sendSafehouseInvite(arg1, arg2, arg3) end
function Exports.sendServerCommand(arg1, arg2, arg3, arg4) return sendServerCommand(arg1, arg2, arg3, arg4) end
function Exports.sendSplint(arg1, arg2, arg3, arg4, arg5) return sendSplint(arg1, arg2, arg3, arg4, arg5) end
function Exports.sendStitch(arg1, arg2, arg3, arg4, arg5) return sendStitch(arg1, arg2, arg3, arg4, arg5) end
function Exports.sendVisual(arg1) return sendVisual(arg1) end
function Exports.serverConnect(arg1, arg2, arg3, arg4, arg5, arg6) return serverConnect(arg1, arg2, arg3, arg4, arg5, arg6) end
function Exports.serverConnectCoop(arg1) return serverConnectCoop(arg1) end
function Exports.serverFileExists(arg1) return serverFileExists(arg1) end
function Exports.setActivePlayer(arg1) return setActivePlayer(arg1) end
function Exports.setAdmin() return setAdmin() end
function Exports.setAggroTarget(arg1, arg2, arg3) return setAggroTarget(arg1, arg2, arg3) end
function Exports.setBehaviorStep(arg1) return setBehaviorStep(arg1) end
function Exports.setControllerDeadZone(arg1, arg2, arg3) return setControllerDeadZone(arg1, arg2, arg3) end
function Exports.setDebugToggleControllerPluggedIn(arg1) return setDebugToggleControllerPluggedIn(arg1) end
function Exports.setGameSpeed(arg1) return setGameSpeed(arg1) end
function Exports.setModelMetaData(arg1, arg2, arg3, arg4, arg5) return setModelMetaData(arg1, arg2, arg3, arg4, arg5) end
function Exports.setMouseXY(arg1, arg2) return setMouseXY(arg1, arg2) end
function Exports.setPlayerJoypad(arg1, arg2, arg3, arg4) return setPlayerJoypad(arg1, arg2, arg3, arg4) end
function Exports.setPlayerMouse(arg1) return setPlayerMouse(arg1) end
function Exports.setPlayerMovementActive(arg1, arg2) return setPlayerMovementActive(arg1, arg2) end
function Exports.setProgressBarValue(arg1, arg2) return setProgressBarValue(arg1, arg2) end
function Exports.setPuddles(arg1) return setPuddles(arg1) end
function Exports.setSavefilePlayer1(arg1, arg2, arg3) return setSavefilePlayer1(arg1, arg2, arg3) end
function Exports.setServerStatisticEnable(arg1) return setServerStatisticEnable(arg1) end
function Exports.setShowPausedMessage(arg1) return setShowPausedMessage(arg1) end
function Exports.showAnimationViewer() return showAnimationViewer() end
function Exports.showAttachmentEditor() return showAttachmentEditor() end
function Exports.showChunkDebugger() return showChunkDebugger() end
function Exports.showFolderInDesktop(arg1) return showFolderInDesktop(arg1) end
function Exports.showGlobalObjectDebugger() return showGlobalObjectDebugger() end
function Exports.showSteamFloatingGamepadTextInput(arg1, arg2, arg3, arg4, arg5) return showSteamFloatingGamepadTextInput(arg1, arg2, arg3, arg4, arg5) end
function Exports.showSteamGamepadTextInput(arg1, arg2, arg3, arg4, arg5) return showSteamGamepadTextInput(arg1, arg2, arg3, arg4, arg5) end
function Exports.showVehicleEditor(arg1) return showVehicleEditor(arg1) end
function Exports.showWorldMapEditor(arg1) return showWorldMapEditor(arg1) end
function Exports.showWrongChatTabMessage(arg1, arg2, arg3) return showWrongChatTabMessage(arg1, arg2, arg3) end
function Exports.sledgeDestroy(arg1) return sledgeDestroy(arg1) end
function Exports.spawnHorde(arg1, arg2, arg3, arg4, arg5, arg6) return spawnHorde(arg1, arg2, arg3, arg4, arg5, arg6) end
function Exports.spawnpointsExistsForMod(arg1, arg2) return spawnpointsExistsForMod(arg1, arg2) end
function Exports.steamGetInternetServerDetails(arg1) return steamGetInternetServerDetails(arg1) end
function Exports.steamReleaseInternetServersRequest() return steamReleaseInternetServersRequest() end
function Exports.steamRequestInternetServersCount() return steamRequestInternetServersCount() end
function Exports.steamRequestInternetServersList() return steamRequestInternetServersList() end
function Exports.steamRequestServerDetails(arg1, arg2) return steamRequestServerDetails(arg1, arg2) end
function Exports.steamRequestServerRules(arg1, arg2) return steamRequestServerRules(arg1, arg2) end
function Exports.stopPing() return stopPing() end
function Exports.stopSound(arg1) return stopSound(arg1) end
function Exports.tabToX(arg1, arg2) return tabToX(arg1, arg2) end
function Exports.takeScreenshot(arg1) return takeScreenshot(arg1) end
function Exports.testHelicopter() return testHelicopter() end
function Exports.testSound() return testSound() end
function Exports.timSort(arg1, arg2) return timSort(arg1, arg2) end
function Exports.toInt(arg1) return toInt(arg1) end
function Exports.toggleBreakOnChange(arg1, arg2) return toggleBreakOnChange(arg1, arg2) end
function Exports.toggleBreakOnRead(arg1, arg2) return toggleBreakOnRead(arg1, arg2) end
function Exports.toggleBreakpoint(arg1, arg2) return toggleBreakpoint(arg1, arg2) end
function Exports.toggleModActive(arg1, arg2) return toggleModActive(arg1, arg2) end
function Exports.toggleSafetyServer(arg1) return toggleSafetyServer(arg1) end
function Exports.toggleVehicleRenderToTexture() return toggleVehicleRenderToTexture() end
function Exports.tradingUISendAddItem(arg1, arg2, arg3) return tradingUISendAddItem(arg1, arg2, arg3) end
function Exports.tradingUISendRemoveItem(arg1, arg2, arg3) return tradingUISendRemoveItem(arg1, arg2, arg3) end
function Exports.tradingUISendUpdateState(arg1, arg2, arg3) return tradingUISendUpdateState(arg1, arg2, arg3) end
function Exports.transformIntoKahluaTable(arg1) return transformIntoKahluaTable(arg1) end
function Exports.translatePointXInOverheadMapToWindow(arg1, arg2, arg3, arg4) return translatePointXInOverheadMapToWindow(arg1, arg2, arg3, arg4) end
function Exports.translatePointXInOverheadMapToWorld(arg1, arg2, arg3, arg4) return translatePointXInOverheadMapToWorld(arg1, arg2, arg3, arg4) end
function Exports.translatePointYInOverheadMapToWindow(arg1, arg2, arg3, arg4) return translatePointYInOverheadMapToWindow(arg1, arg2, arg3, arg4) end
function Exports.translatePointYInOverheadMapToWorld(arg1, arg2, arg3, arg4) return translatePointYInOverheadMapToWorld(arg1, arg2, arg3, arg4) end
function Exports.triggerEvent(arg1, arg2, arg3, arg4, arg5) return triggerEvent(arg1, arg2, arg3, arg4, arg5) end
function Exports.updateChatSettings(arg1, arg2, arg3) return updateChatSettings(arg1, arg2, arg3) end
function Exports.updateFire() return updateFire() end
function Exports.useStaticErosionRand(arg1) return useStaticErosionRand(arg1) end
function Exports.useTextureFiltering(arg1) return useTextureFiltering(arg1) end
function Exports.wasKeyDown(arg1) return wasKeyDown(arg1) end
function Exports.wasMouseActiveMoreRecentlyThanJoypad() return wasMouseActiveMoreRecentlyThanJoypad() end
function Exports.writeLog(arg1, arg2) return writeLog(arg1, arg2) end
function Exports.zpopClearZombies(arg1, arg2) return zpopClearZombies(arg1, arg2) end
function Exports.zpopNewRenderer() return zpopNewRenderer() end
function Exports.zpopSpawnNow(arg1, arg2) return zpopSpawnNow(arg1, arg2) end
function Exports.zpopSpawnTimeToZero(arg1, arg2) return zpopSpawnTimeToZero(arg1, arg2) end
Exports.AStarPathFinderResult = loadstring("return _G['AStarPathFinderResult']")()
Exports.AbstractStyle = loadstring("return _G['AbstractStyle']")()
Exports.ActionContext = loadstring("return _G['ActionContext']")()
Exports.ActionGroup = loadstring("return _G['ActionGroup']")()
Exports.ActionProgressBar = loadstring("return _G['ActionProgressBar']")()
Exports.ActionState = loadstring("return _G['ActionState']")()
Exports.ActionStateSnapshot = loadstring("return _G['ActionStateSnapshot']")()
Exports.ActiveMods = loadstring("return _G['ActiveMods']")()
Exports.Add = loadstring("return _G['Add']")()
Exports.AdvancedAnimator = loadstring("return _G['AdvancedAnimator']")()
Exports.AirFront = loadstring("return _G['AirFront']")()
Exports.AlarmClock = loadstring("return _G['AlarmClock']")()
Exports.AlarmClockClothing = loadstring("return _G['AlarmClockClothing']")()
Exports.Allocator = loadstring("return _G['Allocator']")()
Exports.AlphaOp = loadstring("return _G['AlphaOp']")()
Exports.Alternate = loadstring("return _G['Alternate']")()
Exports.Ambient = loadstring("return _G['Ambient']")()
Exports.AmbientLoop = loadstring("return _G['AmbientLoop']")()
Exports.AmbientSoundEffect = loadstring("return _G['AmbientSoundEffect']")()
Exports.AmbientSoundLogic = loadstring("return _G['AmbientSoundLogic']")()
Exports.AmbientStreamManager = loadstring("return _G['AmbientStreamManager']")()
Exports.AngelCodeFont = loadstring("return _G['AngelCodeFont']")()
Exports.Anim = loadstring("return _G['Anim']")()
Exports.AnimBoneWeight = loadstring("return _G['AnimBoneWeight']")()
Exports.AnimEvent = loadstring("return _G['AnimEvent']")()
Exports.AnimEventTime = loadstring("return _G['AnimEventTime']")()
Exports.AnimLayer = loadstring("return _G['AnimLayer']")()
Exports.AnimNode = loadstring("return _G['AnimNode']")()
Exports.AnimState = loadstring("return _G['AnimState']")()
Exports.AnimTimer = loadstring("return _G['AnimTimer']")()
Exports.AnimTrackSampler = loadstring("return _G['AnimTrackSampler']")()
Exports.AnimTransition = loadstring("return _G['AnimTransition']")()
Exports.AnimationAsset = loadstring("return _G['AnimationAsset']")()
Exports.AnimationAssetParams = loadstring("return _G['AnimationAssetParams']")()
Exports.AnimationBoneBinding = loadstring("return _G['AnimationBoneBinding']")()
Exports.AnimationClip = loadstring("return _G['AnimationClip']")()
Exports.AnimationMultiTrack = loadstring("return _G['AnimationMultiTrack']")()
Exports.AnimationPlayer = loadstring("return _G['AnimationPlayer']")()
Exports.AnimationPlayerRecorder = loadstring("return _G['AnimationPlayerRecorder']")()
Exports.AnimationSet = loadstring("return _G['AnimationSet']")()
Exports.AnimationTrack = loadstring("return _G['AnimationTrack']")()
Exports.AnimationVariableHandle = loadstring("return _G['AnimationVariableHandle']")()
Exports.AnimationVariableSlotCallbackBool = loadstring("return _G['AnimationVariableSlotCallbackBool']")()
Exports.AnimationVariableSlotCallbackFloat = loadstring("return _G['AnimationVariableSlotCallbackFloat']")()
Exports.AnimationVariableSlotCallbackInt = loadstring("return _G['AnimationVariableSlotCallbackInt']")()
Exports.AnimationVariableSlotCallbackString = loadstring("return _G['AnimationVariableSlotCallbackString']")()
Exports.AnimationVariableSource = loadstring("return _G['AnimationVariableSource']")()
Exports.AnimationVariableType = loadstring("return _G['AnimationVariableType']")()
Exports.AnimationViewerState = loadstring("return _G['AnimationViewerState']")()
Exports.AnimationsMesh = loadstring("return _G['AnimationsMesh']")()
Exports.AnimatorDebugMonitor = loadstring("return _G['AnimatorDebugMonitor']")()
Exports.Area = loadstring("return _G['Area']")()
Exports.ArrayList = loadstring("return _G['ArrayList']")()
Exports.Asset = loadstring("return _G['Asset']")()
Exports.AssetManager = loadstring("return _G['AssetManager']")()
Exports.AssetManagerTable = loadstring("return _G['AssetManagerTable']")()
Exports.AssetManagers = loadstring("return _G['AssetManagers']")()
Exports.AssetParams = loadstring("return _G['AssetParams']")()
Exports.AssetPath = loadstring("return _G['AssetPath']")()
Exports.AssetStateObserver = loadstring("return _G['AssetStateObserver']")()
Exports.AssetTable = loadstring("return _G['AssetTable']")()
Exports.AssetType = loadstring("return _G['AssetType']")()
Exports.AttachedItem = loadstring("return _G['AttachedItem']")()
Exports.AttachedItems = loadstring("return _G['AttachedItems']")()
Exports.AttachedLocation = loadstring("return _G['AttachedLocation']")()
Exports.AttachedLocationGroup = loadstring("return _G['AttachedLocationGroup']")()
Exports.AttachedLocations = loadstring("return _G['AttachedLocations']")()
Exports.AttachmentEditorState = loadstring("return _G['AttachmentEditorState']")()
Exports.AttackState = loadstring("return _G['AttackState']")()
Exports.AttackVars = loadstring("return _G['AttackVars']")()
Exports.BSFurnace = loadstring("return _G['BSFurnace']")()
Exports.BarricadeAble = loadstring("return _G['BarricadeAble']")()
Exports.BaseAction = loadstring("return _G['BaseAction']")()
Exports.BaseAmbientStreamManager = loadstring("return _G['BaseAmbientStreamManager']")()
Exports.BaseCharacterSoundEmitter = loadstring("return _G['BaseCharacterSoundEmitter']")()
Exports.BaseSoundBank = loadstring("return _G['BaseSoundBank']")()
Exports.BaseSoundEmitter = loadstring("return _G['BaseSoundEmitter']")()
Exports.BaseSoundManager = loadstring("return _G['BaseSoundManager']")()
Exports.BaseVehicle = loadstring("return _G['BaseVehicle']")()
Exports.BaseVisual = loadstring("return _G['BaseVisual']")()
Exports.BeardStyle = loadstring("return _G['BeardStyle']")()
Exports.BeardStyles = loadstring("return _G['BeardStyles']")()
Exports.BehaviorResult = loadstring("return _G['BehaviorResult']")()
Exports.BentFences = loadstring("return _G['BentFences']")()
Exports.BloodBodyPartType = loadstring("return _G['BloodBodyPartType']")()
Exports.BloodClothingType = loadstring("return _G['BloodClothingType']")()
Exports.BodyDamage = loadstring("return _G['BodyDamage']")()
Exports.BodyDamageSync = loadstring("return _G['BodyDamageSync']")()
Exports.BodyLocation = loadstring("return _G['BodyLocation']")()
Exports.BodyLocation = loadstring("return _G['BodyLocation']")()
Exports.BodyLocationGroup = loadstring("return _G['BodyLocationGroup']")()
Exports.BodyLocations = loadstring("return _G['BodyLocations']")()
Exports.BodyPart = loadstring("return _G['BodyPart']")()
Exports.BodyPartLast = loadstring("return _G['BodyPartLast']")()
Exports.BodyPartType = loadstring("return _G['BodyPartType']")()
Exports.BoneAxis = loadstring("return _G['BoneAxis']")()
Exports.BooleanConfigOption = loadstring("return _G['BooleanConfigOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")()
Exports.BooleanGrid = loadstring("return _G['BooleanGrid']")()
Exports.BooleanSandboxOption = loadstring("return _G['BooleanSandboxOption']")()
Exports.BooleanServerOption = loadstring("return _G['BooleanServerOption']")()
Exports.BrokenFences = loadstring("return _G['BrokenFences']")()
Exports.BufferedRandomAccessFile = loadstring("return _G['BufferedRandomAccessFile']")()
Exports.BufferedReader = loadstring("return _G['BufferedReader']")()
Exports.BufferedWriter = loadstring("return _G['BufferedWriter']")()
Exports.BuildingDef = loadstring("return _G['BuildingDef']")()
Exports.BuildingScore = loadstring("return _G['BuildingScore']")()
Exports.BuildingSearchCriteria = loadstring("return _G['BuildingSearchCriteria']")()
Exports.BulletVariables = loadstring("return _G['BulletVariables']")()
Exports.BurntToDeath = loadstring("return _G['BurntToDeath']")()
Exports.ByteBufferWriter = loadstring("return _G['ByteBufferWriter']")()
Exports.CGlobalObject = loadstring("return _G['CGlobalObject']")()
Exports.CGlobalObjectSystem = loadstring("return _G['CGlobalObjectSystem']")()
Exports.CGlobalObjects = loadstring("return _G['CGlobalObjects']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")()
Exports.CarController = loadstring("return _G['CarController']")()
Exports.CellGetSquare = loadstring("return _G['CellGetSquare']")()
Exports.ChannelCategory = loadstring("return _G['ChannelCategory']")()
Exports.CharDef = loadstring("return _G['CharDef']")()
Exports.CharDefTexture = loadstring("return _G['CharDefTexture']")()
Exports.CharacterActionAnims = loadstring("return _G['CharacterActionAnims']")()
Exports.CharacterMask = loadstring("return _G['CharacterMask']")()
Exports.CharacterSoundEmitter = loadstring("return _G['CharacterSoundEmitter']")()
Exports.CharacterTraits = loadstring("return _G['CharacterTraits']")()
Exports.ChatBase = loadstring("return _G['ChatBase']")()
Exports.ChatElement = loadstring("return _G['ChatElement']")()
Exports.ChatElementOwner = loadstring("return _G['ChatElementOwner']")()
Exports.ChatMessage = loadstring("return _G['ChatMessage']")()
Exports.ChatMode = loadstring("return _G['ChatMode']")()
Exports.ChatSettings = loadstring("return _G['ChatSettings']")()
Exports.ChatTab = loadstring("return _G['ChatTab']")()
Exports.ChatType = loadstring("return _G['ChatType']")()
Exports.Checks = loadstring("return _G['Checks']")()
Exports.ChecksumState = loadstring("return _G['ChecksumState']")()
Exports.ChooseGameInfo = loadstring("return _G['ChooseGameInfo']")()
Exports.Chunk = loadstring("return _G['Chunk']")()
Exports.Chunk = loadstring("return _G['Chunk']")()
Exports.ChunkData = loadstring("return _G['ChunkData']")()
Exports.CircleIsoMarker = loadstring("return _G['CircleIsoMarker']")()
Exports.CircleStencilShader = loadstring("return _G['CircleStencilShader']")()
Exports.ClickObject = loadstring("return _G['ClickObject']")()
Exports.ClientChunkRequest = loadstring("return _G['ClientChunkRequest']")()
Exports.ClientControls = loadstring("return _G['ClientControls']")()
Exports.ClientServerMap = loadstring("return _G['ClientServerMap']")()
Exports.ClimateBool = loadstring("return _G['ClimateBool']")()
Exports.ClimateColor = loadstring("return _G['ClimateColor']")()
Exports.ClimateColorInfo = loadstring("return _G['ClimateColorInfo']")()
Exports.ClimateFloat = loadstring("return _G['ClimateFloat']")()
Exports.ClimateForecaster = loadstring("return _G['ClimateForecaster']")()
Exports.ClimateHistory = loadstring("return _G['ClimateHistory']")()
Exports.ClimateManager = loadstring("return _G['ClimateManager']")()
Exports.ClimateMoon = loadstring("return _G['ClimateMoon']")()
Exports.ClimateNetAuth = loadstring("return _G['ClimateNetAuth']")()
Exports.ClimateValues = loadstring("return _G['ClimateValues']")()
Exports.ClimbDownSheetRopeState = loadstring("return _G['ClimbDownSheetRopeState']")()
Exports.ClimbOverFenceState = loadstring("return _G['ClimbOverFenceState']")()
Exports.ClimbOverWallState = loadstring("return _G['ClimbOverWallState']")()
Exports.ClimbSheetRopeState = loadstring("return _G['ClimbSheetRopeState']")()
Exports.ClimbThroughWindowState = loadstring("return _G['ClimbThroughWindowState']")()
Exports.Clipboard = loadstring("return _G['Clipboard']")()
Exports.Clock = loadstring("return _G['Clock']")()
Exports.CloseWindowState = loadstring("return _G['CloseWindowState']")()
Exports.Clothing = loadstring("return _G['Clothing']")()
Exports.ClothingItem = loadstring("return _G['ClothingItem']")()
Exports.ClothingItemReference = loadstring("return _G['ClothingItemReference']")()
Exports.ClothingPatch = loadstring("return _G['ClothingPatch']")()
Exports.ClothingPatchFabricType = loadstring("return _G['ClothingPatchFabricType']")()
Exports.ClothingWetness = loadstring("return _G['ClothingWetness']")()
Exports.Color = loadstring("return _G['Color']")()
Exports.ColorInfo = loadstring("return _G['ColorInfo']")()
Exports.ColorRGB = loadstring("return _G['ColorRGB']")()
Exports.ColorStop = loadstring("return _G['ColorStop']")()
Exports.Colors = loadstring("return _G['Colors']")()
Exports.ComboItem = loadstring("return _G['ComboItem']")()
Exports.ConfigOption = loadstring("return _G['ConfigOption']")()
Exports.ConnectToServerState = loadstring("return _G['ConnectToServerState']")()
Exports.Container = loadstring("return _G['Container']")()
Exports.ContainerOverlays = loadstring("return _G['ContainerOverlays']")()
Exports.Core = loadstring("return _G['Core']")()
Exports.CrawlingZombieTurnState = loadstring("return _G['CrawlingZombieTurnState']")()
Exports.Credit = loadstring("return _G['Credit']")()
Exports.CustomComparator = loadstring("return _G['CustomComparator']")()
Exports.CustomSandboxOption = loadstring("return _G['CustomSandboxOption']")()
Exports.DBResult = loadstring("return _G['DBResult']")()
Exports.DBTicket = loadstring("return _G['DBTicket']")()
Exports.DataCell = loadstring("return _G['DataCell']")()
Exports.DataChunk = loadstring("return _G['DataChunk']")()
Exports.DataInputStream = loadstring("return _G['DataInputStream']")()
Exports.DataOutputStream = loadstring("return _G['DataOutputStream']")()
Exports.DataPoint = loadstring("return _G['DataPoint']")()
Exports.DayForecast = loadstring("return _G['DayForecast']")()
Exports.DayInfo = loadstring("return _G['DayInfo']")()
Exports.DeadCharacterPacket = loadstring("return _G['DeadCharacterPacket']")()
Exports.Debug = loadstring("return _G['Debug']")()
Exports.DebugChunkState = loadstring("return _G['DebugChunkState']")()
Exports.DebugGlobalObjectState = loadstring("return _G['DebugGlobalObjectState']")()
Exports.DebugLog = loadstring("return _G['DebugLog']")()
Exports.DebugLogStream = loadstring("return _G['DebugLogStream']")()
Exports.DebugOptions = loadstring("return _G['DebugOptions']")()
Exports.DebugType = loadstring("return _G['DebugType']")()
Exports.DeferedTextDraw = loadstring("return _G['DeferedTextDraw']")()
Exports.Descriptor = loadstring("return _G['Descriptor']")()
Exports.DeviceData = loadstring("return _G['DeviceData']")()
Exports.DeviceList = loadstring("return _G['DeviceList']")()
Exports.DevicePresets = loadstring("return _G['DevicePresets']")()
Exports.DirectionArrow = loadstring("return _G['DirectionArrow']")()
Exports.Door = loadstring("return _G['Door']")()
Exports.DoorLogic = loadstring("return _G['DoorLogic']")()
Exports.DoorType = loadstring("return _G['DoorType']")()
Exports.DoubleConfigOption = loadstring("return _G['DoubleConfigOption']")()
Exports.DoubleSandboxOption = loadstring("return _G['DoubleSandboxOption']")()
Exports.DoubleServerOption = loadstring("return _G['DoubleServerOption']")()
Exports.Drainable = loadstring("return _G['Drainable']")()
Exports.DrainableComboItem = loadstring("return _G['DrainableComboItem']")()
Exports.Drawer = loadstring("return _G['Drawer']")()
Exports.DummyCharacterSoundEmitter = loadstring("return _G['DummyCharacterSoundEmitter']")()
Exports.DummySoundBank = loadstring("return _G['DummySoundBank']")()
Exports.DummySoundEmitter = loadstring("return _G['DummySoundEmitter']")()
Exports.DummySoundManager = loadstring("return _G['DummySoundManager']")()
Exports.DynamicRadioChannel = loadstring("return _G['DynamicRadioChannel']")()
Exports.EditVehicleState = loadstring("return _G['EditVehicleState']")()
Exports.EffectLight = loadstring("return _G['EffectLight']")()
Exports.Element = loadstring("return _G['Element']")()
Exports.EmitterType = loadstring("return _G['EmitterType']")()
Exports.EnumConfigOption = loadstring("return _G['EnumConfigOption']")()
Exports.EnumMap = loadstring("return _G['EnumMap']")()
Exports.EnumSandboxOption = loadstring("return _G['EnumSandboxOption']")()
Exports.ErosionConfig = loadstring("return _G['ErosionConfig']")()
Exports.ErosionData = loadstring("return _G['ErosionData']")()
Exports.ErosionMain = loadstring("return _G['ErosionMain']")()
Exports.ErosionSeason = loadstring("return _G['ErosionSeason']")()
Exports.Event = loadstring("return _G['Event']")()
Exports.EventSound = loadstring("return _G['EventSound']")()
Exports.EvolvedRecipe = loadstring("return _G['EvolvedRecipe']")()
Exports.ExitOption = loadstring("return _G['ExitOption']")()
Exports.ExplosionMode = loadstring("return _G['ExplosionMode']")()
Exports.Exposer = loadstring("return _G['Exposer']")()
Exports.FMODAudio = loadstring("return _G['FMODAudio']")()
Exports.FMODParameter = loadstring("return _G['FMODParameter']")()
Exports.FMODParameterList = loadstring("return _G['FMODParameterList']")()
Exports.FMODSoundBank = loadstring("return _G['FMODSoundBank']")()
Exports.FMODSoundEmitter = loadstring("return _G['FMODSoundEmitter']")()
Exports.Faction = loadstring("return _G['Faction']")()
Exports.FakeDeadAttackState = loadstring("return _G['FakeDeadAttackState']")()
Exports.FakeDeadZombieState = loadstring("return _G['FakeDeadZombieState']")()
Exports.FileSeekMode = loadstring("return _G['FileSeekMode']")()
Exports.FileSystem = loadstring("return _G['FileSystem']")()
Exports.FileTask = loadstring("return _G['FileTask']")()
Exports.FilterArgs = loadstring("return _G['FilterArgs']")()
Exports.FishingState = loadstring("return _G['FishingState']")()
Exports.Fitness = loadstring("return _G['Fitness']")()
Exports.FitnessExercise = loadstring("return _G['FitnessExercise']")()
Exports.FitnessState = loadstring("return _G['FitnessState']")()
Exports.Fixer = loadstring("return _G['Fixer']")()
Exports.FixerSkill = loadstring("return _G['FixerSkill']")()
Exports.Fixing = loadstring("return _G['Fixing']")()
Exports.FixingManager = loadstring("return _G['FixingManager']")()
Exports.Flare = loadstring("return _G['Flare']")()
Exports.FloatList = loadstring("return _G['FloatList']")()
Exports.FloatStop = loadstring("return _G['FloatStop']")()
Exports.FontSize = loadstring("return _G['FontSize']")()
Exports.Food = loadstring("return _G['Food']")()
Exports.ForecastValue = loadstring("return _G['ForecastValue']")()
Exports.Frame = loadstring("return _G['Frame']")()
Exports.FrameLightBlendStatus = loadstring("return _G['FrameLightBlendStatus']")()
Exports.FrameLightInfo = loadstring("return _G['FrameLightInfo']")()
Exports.FrameState = loadstring("return _G['FrameState']")()
Exports.FridgeHumLogic = loadstring("return _G['FridgeHumLogic']")()
Exports.GameCharacterAIBrain = loadstring("return _G['GameCharacterAIBrain']")()
Exports.GameClient = loadstring("return _G['GameClient']")()
Exports.GameKeyboard = loadstring("return _G['GameKeyboard']")()
Exports.GameLoadingState = loadstring("return _G['GameLoadingState']")()
Exports.GameMode = loadstring("return _G['GameMode']")()
Exports.GameSound = loadstring("return _G['GameSound']")()
Exports.GameSoundClip = loadstring("return _G['GameSoundClip']")()
Exports.GameSoundScript = loadstring("return _G['GameSoundScript']")()
Exports.GameSounds = loadstring("return _G['GameSounds']")()
Exports.GameState = loadstring("return _G['GameState']")()
Exports.GameStateMachine = loadstring("return _G['GameStateMachine']")()
Exports.GameTime = loadstring("return _G['GameTime']")()
Exports.GameVersion = loadstring("return _G['GameVersion']")()
Exports.GameWindow = loadstring("return _G['GameWindow']")()
Exports.GearInfo = loadstring("return _G['GearInfo']")()
Exports.GenericDrawer = loadstring("return _G['GenericDrawer']")()
Exports.GenericSpriteRenderState = loadstring("return _G['GenericSpriteRenderState']")()
Exports.GeometryData = loadstring("return _G['GeometryData']")()
Exports.GetSquare = loadstring("return _G['GetSquare']")()
Exports.GibletType = loadstring("return _G['GibletType']")()
Exports.GlobalObject = loadstring("return _G['GlobalObject']")()
Exports.GlobalObject = loadstring("return _G['GlobalObject']")()
Exports.GlobalObjectSystem = loadstring("return _G['GlobalObjectSystem']")()
Exports.GridSquareMarker = loadstring("return _G['GridSquareMarker']")()
Exports.HUDButton = loadstring("return _G['HUDButton']")()
Exports.HairStyle = loadstring("return _G['HairStyle']")()
Exports.HairStyles = loadstring("return _G['HairStyles']")()
Exports.HaloTextHelper = loadstring("return _G['HaloTextHelper']")()
Exports.HandWeapon = loadstring("return _G['HandWeapon']")()
Exports.HashMap = loadstring("return _G['HashMap']")()
Exports.HitCharacterPacket = loadstring("return _G['HitCharacterPacket']")()
Exports.HitInfo = loadstring("return _G['HitInfo']")()
Exports.HitReactionNetworkAI = loadstring("return _G['HitReactionNetworkAI']")()
Exports.HitType = loadstring("return _G['HitType']")()
Exports.HitVars = loadstring("return _G['HitVars']")()
Exports.HumanCorpse = loadstring("return _G['HumanCorpse']")()
Exports.HumanVisual = loadstring("return _G['HumanVisual']")()
Exports.IAnimEventCallback = loadstring("return _G['IAnimEventCallback']")()
Exports.IAnimListener = loadstring("return _G['IAnimListener']")()
Exports.IAnimatable = loadstring("return _G['IAnimatable']")()
Exports.IAnimationVariableSlot = loadstring("return _G['IAnimationVariableSlot']")()
Exports.IAnimationVariableSource = loadstring("return _G['IAnimationVariableSource']")()
Exports.IChunkRegion = loadstring("return _G['IChunkRegion']")()
Exports.IDebugLogFormatter = loadstring("return _G['IDebugLogFormatter']")()
Exports.IDebugOption = loadstring("return _G['IDebugOption']")()
Exports.IDebugOptionGroup = loadstring("return _G['IDebugOptionGroup']")()
Exports.IElementSpawner = loadstring("return _G['IElementSpawner']")()
Exports.IFile = loadstring("return _G['IFile']")()
Exports.IFileDevice = loadstring("return _G['IFileDevice']")()
Exports.IFileTask2Callback = loadstring("return _G['IFileTask2Callback']")()
Exports.IFileTaskCallback = loadstring("return _G['IFileTaskCallback']")()
Exports.IGLFramebufferObject = loadstring("return _G['IGLFramebufferObject']")()
Exports.IHumanVisual = loadstring("return _G['IHumanVisual']")()
Exports.ILighting = loadstring("return _G['ILighting']")()
Exports.IPathfinder = loadstring("return _G['IPathfinder']")()
Exports.IPooledObject = loadstring("return _G['IPooledObject']")()
Exports.IShaderProgramListener = loadstring("return _G['IShaderProgramListener']")()
Exports.IStatePermissions = loadstring("return _G['IStatePermissions']")()
Exports.ITexture = loadstring("return _G['ITexture']")()
Exports.IWorldMapStyleFilter = loadstring("return _G['IWorldMapStyleFilter']")()
Exports.IWorldRegion = loadstring("return _G['IWorldRegion']")()
Exports.IdleState = loadstring("return _G['IdleState']")()
Exports.ImageData = loadstring("return _G['ImageData']")()
Exports.ImagePyramid = loadstring("return _G['ImagePyramid']")()
Exports.ImmutableColor = loadstring("return _G['ImmutableColor']")()
Exports.ImprovedFog = loadstring("return _G['ImprovedFog']")()
Exports.Input = loadstring("return _G['Input']")()
Exports.IntegerConfigOption = loadstring("return _G['IntegerConfigOption']")()
Exports.IntegerSandboxOption = loadstring("return _G['IntegerSandboxOption']")()
Exports.IntegerServerOption = loadstring("return _G['IntegerServerOption']")()
Exports.InventoryContainer = loadstring("return _G['InventoryContainer']")()
Exports.InventoryItem = loadstring("return _G['InventoryItem']")()
Exports.InventoryItemFactory = loadstring("return _G['InventoryItemFactory']")()
Exports.IsoAnim = loadstring("return _G['IsoAnim']")()
Exports.IsoBarbecue = loadstring("return _G['IsoBarbecue']")()
Exports.IsoBarricade = loadstring("return _G['IsoBarricade']")()
Exports.IsoBrokenGlass = loadstring("return _G['IsoBrokenGlass']")()
Exports.IsoBuilding = loadstring("return _G['IsoBuilding']")()
Exports.IsoCamera = loadstring("return _G['IsoCamera']")()
Exports.IsoCarBatteryCharger = loadstring("return _G['IsoCarBatteryCharger']")()
Exports.IsoCell = loadstring("return _G['IsoCell']")()
Exports.IsoChunk = loadstring("return _G['IsoChunk']")()
Exports.IsoChunkMap = loadstring("return _G['IsoChunkMap']")()
Exports.IsoChunkRegion = loadstring("return _G['IsoChunkRegion']")()
Exports.IsoClothingDryer = loadstring("return _G['IsoClothingDryer']")()
Exports.IsoClothingWasher = loadstring("return _G['IsoClothingWasher']")()
Exports.IsoCombinationWasherDryer = loadstring("return _G['IsoCombinationWasherDryer']")()
Exports.IsoCompost = loadstring("return _G['IsoCompost']")()
Exports.IsoCurtain = loadstring("return _G['IsoCurtain']")()
Exports.IsoDeadBody = loadstring("return _G['IsoDeadBody']")()
Exports.IsoDirectionSet = loadstring("return _G['IsoDirectionSet']")()
Exports.IsoDirections = loadstring("return _G['IsoDirections']")()
Exports.IsoDoor = loadstring("return _G['IsoDoor']")()
Exports.IsoDummyCameraCharacter = loadstring("return _G['IsoDummyCameraCharacter']")()
Exports.IsoFire = loadstring("return _G['IsoFire']")()
Exports.IsoFireManager = loadstring("return _G['IsoFireManager']")()
Exports.IsoFireplace = loadstring("return _G['IsoFireplace']")()
Exports.IsoFlagType = loadstring("return _G['IsoFlagType']")()
Exports.IsoGameCharacter = loadstring("return _G['IsoGameCharacter']")()
Exports.IsoGenerator = loadstring("return _G['IsoGenerator']")()
Exports.IsoGridOcclusionData = loadstring("return _G['IsoGridOcclusionData']")()
Exports.IsoGridSquare = loadstring("return _G['IsoGridSquare']")()
Exports.IsoHeatSource = loadstring("return _G['IsoHeatSource']")()
Exports.IsoJukebox = loadstring("return _G['IsoJukebox']")()
Exports.IsoLightSource = loadstring("return _G['IsoLightSource']")()
Exports.IsoLightSwitch = loadstring("return _G['IsoLightSwitch']")()
Exports.IsoLivingCharacter = loadstring("return _G['IsoLivingCharacter']")()
Exports.IsoLot = loadstring("return _G['IsoLot']")()
Exports.IsoLuaMover = loadstring("return _G['IsoLuaMover']")()
Exports.IsoMannequin = loadstring("return _G['IsoMannequin']")()
Exports.IsoMarker = loadstring("return _G['IsoMarker']")()
Exports.IsoMarkers = loadstring("return _G['IsoMarkers']")()
Exports.IsoMetaCell = loadstring("return _G['IsoMetaCell']")()
Exports.IsoMetaChunk = loadstring("return _G['IsoMetaChunk']")()
Exports.IsoMetaGrid = loadstring("return _G['IsoMetaGrid']")()
Exports.IsoMolotovCocktail = loadstring("return _G['IsoMolotovCocktail']")()
Exports.IsoMovingObject = loadstring("return _G['IsoMovingObject']")()
Exports.IsoObject = loadstring("return _G['IsoObject']")()
Exports.IsoObjectFactory = loadstring("return _G['IsoObjectFactory']")()
Exports.IsoObjectPicker = loadstring("return _G['IsoObjectPicker']")()
Exports.IsoObjectType = loadstring("return _G['IsoObjectType']")()
Exports.IsoPlayer = loadstring("return _G['IsoPlayer']")()
Exports.IsoPuddles = loadstring("return _G['IsoPuddles']")()
Exports.IsoPuddlesGeometry = loadstring("return _G['IsoPuddlesGeometry']")()
Exports.IsoPushableObject = loadstring("return _G['IsoPushableObject']")()
Exports.IsoRadio = loadstring("return _G['IsoRadio']")()
Exports.IsoRainSplash = loadstring("return _G['IsoRainSplash']")()
Exports.IsoRaindrop = loadstring("return _G['IsoRaindrop']")()
Exports.IsoRegionLog = loadstring("return _G['IsoRegionLog']")()
Exports.IsoRegionLogType = loadstring("return _G['IsoRegionLogType']")()
Exports.IsoRegions = loadstring("return _G['IsoRegions']")()
Exports.IsoRegionsLogger = loadstring("return _G['IsoRegionsLogger']")()
Exports.IsoRegionsRenderer = loadstring("return _G['IsoRegionsRenderer']")()
Exports.IsoRoom = loadstring("return _G['IsoRoom']")()
Exports.IsoSprite = loadstring("return _G['IsoSprite']")()
Exports.IsoSpriteGrid = loadstring("return _G['IsoSpriteGrid']")()
Exports.IsoSpriteInstance = loadstring("return _G['IsoSpriteInstance']")()
Exports.IsoSpriteManager = loadstring("return _G['IsoSpriteManager']")()
Exports.IsoStackedWasherDryer = loadstring("return _G['IsoStackedWasherDryer']")()
Exports.IsoStove = loadstring("return _G['IsoStove']")()
Exports.IsoSurvivor = loadstring("return _G['IsoSurvivor']")()
Exports.IsoTelevision = loadstring("return _G['IsoTelevision']")()
Exports.IsoThumpable = loadstring("return _G['IsoThumpable']")()
Exports.IsoTrap = loadstring("return _G['IsoTrap']")()
Exports.IsoTree = loadstring("return _G['IsoTree']")()
Exports.IsoUtils = loadstring("return _G['IsoUtils']")()
Exports.IsoWaterGeometry = loadstring("return _G['IsoWaterGeometry']")()
Exports.IsoWaveSignal = loadstring("return _G['IsoWaveSignal']")()
Exports.IsoWeatherFX = loadstring("return _G['IsoWeatherFX']")()
Exports.IsoWheelieBin = loadstring("return _G['IsoWheelieBin']")()
Exports.IsoWindow = loadstring("return _G['IsoWindow']")()
Exports.IsoWindowFrame = loadstring("return _G['IsoWindowFrame']")()
Exports.IsoWorld = loadstring("return _G['IsoWorld']")()
Exports.IsoWorldInventoryObject = loadstring("return _G['IsoWorldInventoryObject']")()
Exports.IsoWorldRegion = loadstring("return _G['IsoWorldRegion']")()
Exports.IsoZombie = loadstring("return _G['IsoZombie']")()
Exports.IsoZombieGiblets = loadstring("return _G['IsoZombieGiblets']")()
Exports.Item = loadstring("return _G['Item']")()
Exports.ItemContainer = loadstring("return _G['ItemContainer']")()
Exports.ItemPickerContainer = loadstring("return _G['ItemPickerContainer']")()
Exports.ItemPickerItem = loadstring("return _G['ItemPickerItem']")()
Exports.ItemPickerJava = loadstring("return _G['ItemPickerJava']")()
Exports.ItemPickerRoom = loadstring("return _G['ItemPickerRoom']")()
Exports.ItemPickerUpgradeWeapons = loadstring("return _G['ItemPickerUpgradeWeapons']")()
Exports.ItemRecipe = loadstring("return _G['ItemRecipe']")()
Exports.ItemReplacement = loadstring("return _G['ItemReplacement']")()
Exports.ItemState = loadstring("return _G['ItemState']")()
Exports.ItemType = loadstring("return _G['ItemType']")()
Exports.ItemVisual = loadstring("return _G['ItemVisual']")()
Exports.ItemVisuals = loadstring("return _G['ItemVisuals']")()
Exports.Iterator = loadstring("return _G['Iterator']")()
Exports.JobType = loadstring("return _G['JobType']")()
Exports.Joypad = loadstring("return _G['Joypad']")()
Exports.JoypadManager = loadstring("return _G['JoypadManager']")()
Exports.KahluaUtil = loadstring("return _G['KahluaUtil']")()
Exports.Key = loadstring("return _G['Key']")()
Exports.KeyRing = loadstring("return _G['KeyRing']")()
Exports.Keyboard = loadstring("return _G['Keyboard']")()
Exports.Keyframe = loadstring("return _G['Keyframe']")()
Exports.KnownBlockedEdges = loadstring("return _G['KnownBlockedEdges']")()
Exports.Language = loadstring("return _G['Language']")()
Exports.Layout = loadstring("return _G['Layout']")()
Exports.LayoutItem = loadstring("return _G['LayoutItem']")()
Exports.LiangBarsky = loadstring("return _G['LiangBarsky']")()
Exports.LightBar = loadstring("return _G['LightBar']")()
Exports.LightInfo = loadstring("return _G['LightInfo']")()
Exports.Lighting = loadstring("return _G['Lighting']")()
Exports.Line = loadstring("return _G['Line']")()
Exports.LinkedList = loadstring("return _G['LinkedList']")()
Exports.Literature = loadstring("return _G['Literature']")()
Exports.LiveAnimNode = loadstring("return _G['LiveAnimNode']")()
Exports.LoadingQueueState = loadstring("return _G['LoadingQueueState']")()
Exports.Location = loadstring("return _G['Location']")()
Exports.LogSeverity = loadstring("return _G['LogSeverity']")()
Exports.LosUtil = loadstring("return _G['LosUtil']")()
Exports.LotHeader = loadstring("return _G['LotHeader']")()
Exports.LuaEnvironment = loadstring("return _G['LuaEnvironment']")()
Exports.LuaEventManager = loadstring("return _G['LuaEventManager']")()
Exports.LuaFileWriter = loadstring("return _G['LuaFileWriter']")()
Exports.LuaManager = loadstring("return _G['LuaManager']")()
Exports.LuaTimedAction = loadstring("return _G['LuaTimedAction']")()
Exports.LuaTimedActionNew = loadstring("return _G['LuaTimedActionNew']")()
Exports.LungeState = loadstring("return _G['LungeState']")()
Exports.MPClientStatistic = loadstring("return _G['MPClientStatistic']")()
Exports.MainScreenState = loadstring("return _G['MainScreenState']")()
Exports.MannequinScript = loadstring("return _G['MannequinScript']")()
Exports.MannequinZone = loadstring("return _G['MannequinZone']")()
Exports.Map = loadstring("return _G['Map']")()
Exports.Map = loadstring("return _G['Map']")()
Exports.MapGroups = loadstring("return _G['MapGroups']")()
Exports.MapItem = loadstring("return _G['MapItem']")()
Exports.MapKnowledge = loadstring("return _G['MapKnowledge']")()
Exports.MapObjects = loadstring("return _G['MapObjects']")()
Exports.Mask = loadstring("return _G['Mask']")()
Exports.MasterVolume = loadstring("return _G['MasterVolume']")()
Exports.Material = loadstring("return _G['Material']")()
Exports.Math = loadstring("return _G['Math']")()
Exports.Matrix4fObjectPool = loadstring("return _G['Matrix4fObjectPool']")()
Exports.MediaData = loadstring("return _G['MediaData']")()
Exports.MediaLineData = loadstring("return _G['MediaLineData']")()
Exports.MediaNameSorter = loadstring("return _G['MediaNameSorter']")()
Exports.MetaCell = loadstring("return _G['MetaCell']")()
Exports.MetaObject = loadstring("return _G['MetaObject']")()
Exports.Metabolics = loadstring("return _G['Metabolics']")()
Exports.MinMaxPosition = loadstring("return _G['MinMaxPosition']")()
Exports.MipMapLevel = loadstring("return _G['MipMapLevel']")()
Exports.Mod = loadstring("return _G['Mod']")()
Exports.ModAnimations = loadstring("return _G['ModAnimations']")()
Exports.ModData = loadstring("return _G['ModData']")()
Exports.ModalDialog = loadstring("return _G['ModalDialog']")()
Exports.Model = loadstring("return _G['Model']")()
Exports.Model = loadstring("return _G['Model']")()
Exports.ModelAssetParams = loadstring("return _G['ModelAssetParams']")()
Exports.ModelAttachment = loadstring("return _G['ModelAttachment']")()
Exports.ModelInfo = loadstring("return _G['ModelInfo']")()
Exports.ModelInstance = loadstring("return _G['ModelInstance']")()
Exports.ModelInstanceRenderData = loadstring("return _G['ModelInstanceRenderData']")()
Exports.ModelInstanceTextureCreator = loadstring("return _G['ModelInstanceTextureCreator']")()
Exports.ModelInstanceTextureInitializer = loadstring("return _G['ModelInstanceTextureInitializer']")()
Exports.ModelManager = loadstring("return _G['ModelManager']")()
Exports.ModelScript = loadstring("return _G['ModelScript']")()
Exports.ModelSlot = loadstring("return _G['ModelSlot']")()
Exports.ModelSlotRenderData = loadstring("return _G['ModelSlotRenderData']")()
Exports.ModelWeaponPart = loadstring("return _G['ModelWeaponPart']")()
Exports.Moodle = loadstring("return _G['Moodle']")()
Exports.MoodleType = loadstring("return _G['MoodleType']")()
Exports.Moodles = loadstring("return _G['Moodles']")()
Exports.MoodlesUI = loadstring("return _G['MoodlesUI']")()
Exports.MostTested = loadstring("return _G['MostTested']")()
Exports.Mouse = loadstring("return _G['Mouse']")()
Exports.MovableRecipe = loadstring("return _G['MovableRecipe']")()
Exports.MoveDeltaModifiers = loadstring("return _G['MoveDeltaModifiers']")()
Exports.Moveable = loadstring("return _G['Moveable']")()
Exports.MovementType = loadstring("return _G['MovementType']")()
Exports.Mover = loadstring("return _G['Mover']")()
Exports.MultiStageBuilding = loadstring("return _G['MultiStageBuilding']")()
Exports.NPCData = loadstring("return _G['NPCData']")()
Exports.NetworkAIParams = loadstring("return _G['NetworkAIParams']")()
Exports.NetworkCharacterAI = loadstring("return _G['NetworkCharacterAI']")()
Exports.NetworkTeleport = loadstring("return _G['NetworkTeleport']")()
Exports.NetworkTeleportDebug = loadstring("return _G['NetworkTeleportDebug']")()
Exports.NewHealthPanel = loadstring("return _G['NewHealthPanel']")()
Exports.NineGridTexture = loadstring("return _G['NineGridTexture']")()
Exports.NoCircleStencilShader = loadstring("return _G['NoCircleStencilShader']")()
Exports.NonBlockingHashMap = loadstring("return _G['NonBlockingHashMap']")()
Exports.NonPvpZone = loadstring("return _G['NonPvpZone']")()
Exports.Nutrition = loadstring("return _G['Nutrition']")()
Exports.OSValidator = loadstring("return _G['OSValidator']")()
Exports.ObjectAmbientEmitters = loadstring("return _G['ObjectAmbientEmitters']")()
Exports.ObjectPool = loadstring("return _G['ObjectPool']")()
Exports.ObjectRenderEffects = loadstring("return _G['ObjectRenderEffects']")()
Exports.ObjectTooltip = loadstring("return _G['ObjectTooltip']")()
Exports.Observation = loadstring("return _G['Observation']")()
Exports.ObservationFactory = loadstring("return _G['ObservationFactory']")()
Exports.ObserverCallback = loadstring("return _G['ObserverCallback']")()
Exports.OccluderType = loadstring("return _G['OccluderType']")()
Exports.OcclusionFilter = loadstring("return _G['OcclusionFilter']")()
Exports.OnceEvery = loadstring("return _G['OnceEvery']")()
Exports.OpenWindowState = loadstring("return _G['OpenWindowState']")()
Exports.Outfit = loadstring("return _G['Outfit']")()
Exports.OutlineShader = loadstring("return _G['OutlineShader']")()
Exports.PZArrayList = loadstring("return _G['PZArrayList']")()
Exports.PZCalendar = loadstring("return _G['PZCalendar']")()
Exports.PZFileformat = loadstring("return _G['PZFileformat']")()
Exports.PZMath = loadstring("return _G['PZMath']")()
Exports.PackFile = loadstring("return _G['PackFile']")()
Exports.PacketType = loadstring("return _G['PacketType']")()
Exports.ParameterCharacterMovementSpeed = loadstring("return _G['ParameterCharacterMovementSpeed']")()
Exports.Part = loadstring("return _G['Part']")()
Exports.Part = loadstring("return _G['Part']")()
Exports.Passenger = loadstring("return _G['Passenger']")()
Exports.Passenger = loadstring("return _G['Passenger']")()
Exports.Path = loadstring("return _G['Path']")()
Exports.Path = loadstring("return _G['Path']")()
Exports.PathFindBehavior2 = loadstring("return _G['PathFindBehavior2']")()
Exports.PathFindRequest = loadstring("return _G['PathFindRequest']")()
Exports.PathFindState = loadstring("return _G['PathFindState']")()
Exports.PathFindState2 = loadstring("return _G['PathFindState2']")()
Exports.PerObjectLogic = loadstring("return _G['PerObjectLogic']")()
Exports.PerPlayerRender = loadstring("return _G['PerPlayerRender']")()
Exports.PerformanceSettings = loadstring("return _G['PerformanceSettings']")()
Exports.Perk = loadstring("return _G['Perk']")()
Exports.PerkFactory = loadstring("return _G['PerkFactory']")()
Exports.PerkInfo = loadstring("return _G['PerkInfo']")()
Exports.Perks = loadstring("return _G['Perks']")()
Exports.PhysicsShape = loadstring("return _G['PhysicsShape']")()
Exports.Plane = loadstring("return _G['Plane']")()
Exports.PlaneObjectPool = loadstring("return _G['PlaneObjectPool']")()
Exports.PlayerActionsState = loadstring("return _G['PlayerActionsState']")()
Exports.PlayerAimState = loadstring("return _G['PlayerAimState']")()
Exports.PlayerCamera = loadstring("return _G['PlayerCamera']")()
Exports.PlayerData = loadstring("return _G['PlayerData']")()
Exports.PlayerEmoteState = loadstring("return _G['PlayerEmoteState']")()
Exports.PlayerExtState = loadstring("return _G['PlayerExtState']")()
Exports.PlayerFallDownState = loadstring("return _G['PlayerFallDownState']")()
Exports.PlayerFallingState = loadstring("return _G['PlayerFallingState']")()
Exports.PlayerGetUpState = loadstring("return _G['PlayerGetUpState']")()
Exports.PlayerHitReactionPVPState = loadstring("return _G['PlayerHitReactionPVPState']")()
Exports.PlayerHitReactionState = loadstring("return _G['PlayerHitReactionState']")()
Exports.PlayerHomingPoint = loadstring("return _G['PlayerHomingPoint']")()
Exports.PlayerKnockedDown = loadstring("return _G['PlayerKnockedDown']")()
Exports.PlayerOnGroundState = loadstring("return _G['PlayerOnGroundState']")()
Exports.PlayerPacket = loadstring("return _G['PlayerPacket']")()
Exports.PlayerRenderSettings = loadstring("return _G['PlayerRenderSettings']")()
Exports.PlayerSearchMode = loadstring("return _G['PlayerSearchMode']")()
Exports.PlayerSitOnGroundState = loadstring("return _G['PlayerSitOnGroundState']")()
Exports.PlayerStrafeState = loadstring("return _G['PlayerStrafeState']")()
Exports.Point = loadstring("return _G['Point']")()
Exports.Point = loadstring("return _G['Point']")()
Exports.PointOnPath = loadstring("return _G['PointOnPath']")()
Exports.PolygonalMap2 = loadstring("return _G['PolygonalMap2']")()
Exports.Pool = loadstring("return _G['Pool']")()
Exports.Position = loadstring("return _G['Position']")()
Exports.PredictionTypes = loadstring("return _G['PredictionTypes']")()
Exports.PresetEntry = loadstring("return _G['PresetEntry']")()
Exports.ProceduralItem = loadstring("return _G['ProceduralItem']")()
Exports.Profession = loadstring("return _G['Profession']")()
Exports.ProfessionFactory = loadstring("return _G['ProfessionFactory']")()
Exports.PropertyContainer = loadstring("return _G['PropertyContainer']")()
Exports.PuddlesDirection = loadstring("return _G['PuddlesDirection']")()
Exports.PuddlesFloat = loadstring("return _G['PuddlesFloat']")()
Exports.PyramidTexture = loadstring("return _G['PyramidTexture']")()
Exports.QuaternionfObjectPool = loadstring("return _G['QuaternionfObjectPool']")()
Exports.RBBar = loadstring("return _G['RBBar']")()
Exports.RBBasic = loadstring("return _G['RBBasic']")()
Exports.RBBurnt = loadstring("return _G['RBBurnt']")()
Exports.RBBurntCorpse = loadstring("return _G['RBBurntCorpse']")()
Exports.RBBurntFireman = loadstring("return _G['RBBurntFireman']")()
Exports.RBCafe = loadstring("return _G['RBCafe']")()
Exports.RBClinic = loadstring("return _G['RBClinic']")()
Exports.RBHairSalon = loadstring("return _G['RBHairSalon']")()
Exports.RBKateAndBaldspot = loadstring("return _G['RBKateAndBaldspot']")()
Exports.RBLooted = loadstring("return _G['RBLooted']")()
Exports.RBOffice = loadstring("return _G['RBOffice']")()
Exports.RBOther = loadstring("return _G['RBOther']")()
Exports.RBPileOCrepe = loadstring("return _G['RBPileOCrepe']")()
Exports.RBPizzaWhirled = loadstring("return _G['RBPizzaWhirled']")()
Exports.RBSafehouse = loadstring("return _G['RBSafehouse']")()
Exports.RBSchool = loadstring("return _G['RBSchool']")()
Exports.RBShopLooted = loadstring("return _G['RBShopLooted']")()
Exports.RBSpiffo = loadstring("return _G['RBSpiffo']")()
Exports.RBStripclub = loadstring("return _G['RBStripclub']")()
Exports.RDSBandPractice = loadstring("return _G['RDSBandPractice']")()
Exports.RDSBathroomZed = loadstring("return _G['RDSBathroomZed']")()
Exports.RDSBedroomZed = loadstring("return _G['RDSBedroomZed']")()
Exports.RDSBleach = loadstring("return _G['RDSBleach']")()
Exports.RDSCorpsePsycho = loadstring("return _G['RDSCorpsePsycho']")()
Exports.RDSDeadDrunk = loadstring("return _G['RDSDeadDrunk']")()
Exports.RDSFootballNight = loadstring("return _G['RDSFootballNight']")()
Exports.RDSGunmanInBathroom = loadstring("return _G['RDSGunmanInBathroom']")()
Exports.RDSGunslinger = loadstring("return _G['RDSGunslinger']")()
Exports.RDSHenDo = loadstring("return _G['RDSHenDo']")()
Exports.RDSHockeyPsycho = loadstring("return _G['RDSHockeyPsycho']")()
Exports.RDSHouseParty = loadstring("return _G['RDSHouseParty']")()
Exports.RDSPokerNight = loadstring("return _G['RDSPokerNight']")()
Exports.RDSPoliceAtHouse = loadstring("return _G['RDSPoliceAtHouse']")()
Exports.RDSPrisonEscape = loadstring("return _G['RDSPrisonEscape']")()
Exports.RDSPrisonEscapeWithPolice = loadstring("return _G['RDSPrisonEscapeWithPolice']")()
Exports.RDSSkeletonPsycho = loadstring("return _G['RDSSkeletonPsycho']")()
Exports.RDSSpecificProfession = loadstring("return _G['RDSSpecificProfession']")()
Exports.RDSStagDo = loadstring("return _G['RDSStagDo']")()
Exports.RDSStudentNight = loadstring("return _G['RDSStudentNight']")()
Exports.RDSSuicidePact = loadstring("return _G['RDSSuicidePact']")()
Exports.RDSTinFoilHat = loadstring("return _G['RDSTinFoilHat']")()
Exports.RDSZombieLockedBathroom = loadstring("return _G['RDSZombieLockedBathroom']")()
Exports.RDSZombiesEating = loadstring("return _G['RDSZombiesEating']")()
Exports.RGBAf = loadstring("return _G['RGBAf']")()
Exports.RVSAmbulanceCrash = loadstring("return _G['RVSAmbulanceCrash']")()
Exports.RVSBanditRoad = loadstring("return _G['RVSBanditRoad']")()
Exports.RVSBurntCar = loadstring("return _G['RVSBurntCar']")()
Exports.RVSCarCrash = loadstring("return _G['RVSCarCrash']")()
Exports.RVSCarCrashCorpse = loadstring("return _G['RVSCarCrashCorpse']")()
Exports.RVSChangingTire = loadstring("return _G['RVSChangingTire']")()
Exports.RVSConstructionSite = loadstring("return _G['RVSConstructionSite']")()
Exports.RVSCrashHorde = loadstring("return _G['RVSCrashHorde']")()
Exports.RVSFlippedCrash = loadstring("return _G['RVSFlippedCrash']")()
Exports.RVSPoliceBlockade = loadstring("return _G['RVSPoliceBlockade']")()
Exports.RVSPoliceBlockadeShooting = loadstring("return _G['RVSPoliceBlockadeShooting']")()
Exports.RVSTrailerCrash = loadstring("return _G['RVSTrailerCrash']")()
Exports.RVSUtilityVehicle = loadstring("return _G['RVSUtilityVehicle']")()
Exports.RZSBBQParty = loadstring("return _G['RZSBBQParty']")()
Exports.RZSBaseball = loadstring("return _G['RZSBaseball']")()
Exports.RZSBeachParty = loadstring("return _G['RZSBeachParty']")()
Exports.RZSBuryingCamp = loadstring("return _G['RZSBuryingCamp']")()
Exports.RZSFishingTrip = loadstring("return _G['RZSFishingTrip']")()
Exports.RZSForestCamp = loadstring("return _G['RZSForestCamp']")()
Exports.RZSForestCampEaten = loadstring("return _G['RZSForestCampEaten']")()
Exports.RZSHunterCamp = loadstring("return _G['RZSHunterCamp']")()
Exports.RZSMusicFest = loadstring("return _G['RZSMusicFest']")()
Exports.RZSMusicFestStage = loadstring("return _G['RZSMusicFestStage']")()
Exports.RZSSexyTime = loadstring("return _G['RZSSexyTime']")()
Exports.RZSTrapperCamp = loadstring("return _G['RZSTrapperCamp']")()
Exports.RadarPanel = loadstring("return _G['RadarPanel']")()
Exports.RadialMenu = loadstring("return _G['RadialMenu']")()
Exports.RadialProgressBar = loadstring("return _G['RadialProgressBar']")()
Exports.Radio = loadstring("return _G['Radio']")()
Exports.RadioAPI = loadstring("return _G['RadioAPI']")()
Exports.RadioBroadCast = loadstring("return _G['RadioBroadCast']")()
Exports.RadioChannel = loadstring("return _G['RadioChannel']")()
Exports.RadioData = loadstring("return _G['RadioData']")()
Exports.RadioLine = loadstring("return _G['RadioLine']")()
Exports.RadioScript = loadstring("return _G['RadioScript']")()
Exports.RadioScriptManager = loadstring("return _G['RadioScriptManager']")()
Exports.RainManager = loadstring("return _G['RainManager']")()
Exports.RakNetPeerInterface = loadstring("return _G['RakNetPeerInterface']")()
Exports.RandomData = loadstring("return _G['RandomData']")()
Exports.RandomData = loadstring("return _G['RandomData']")()
Exports.RandomizedBuildingBase = loadstring("return _G['RandomizedBuildingBase']")()
Exports.RandomizedDeadSurvivorBase = loadstring("return _G['RandomizedDeadSurvivorBase']")()
Exports.RandomizedVehicleStoryBase = loadstring("return _G['RandomizedVehicleStoryBase']")()
Exports.RandomizedWorldBase = loadstring("return _G['RandomizedWorldBase']")()
Exports.RandomizedZoneStoryBase = loadstring("return _G['RandomizedZoneStoryBase']")()
Exports.Ray = loadstring("return _G['Ray']")()
Exports.RayObjectPool = loadstring("return _G['RayObjectPool']")()
Exports.Recipe = loadstring("return _G['Recipe']")()
Exports.RecipeManager = loadstring("return _G['RecipeManager']")()
Exports.RecordedMedia = loadstring("return _G['RecordedMedia']")()
Exports.Remove = loadstring("return _G['Remove']")()
Exports.RenderArgs = loadstring("return _G['RenderArgs']")()
Exports.RenderEffectType = loadstring("return _G['RenderEffectType']")()
Exports.RenderSettings = loadstring("return _G['RenderSettings']")()
Exports.RequiredSkill = loadstring("return _G['RequiredSkill']")()
Exports.Result = loadstring("return _G['Result']")()
Exports.ResultBiggestSound = loadstring("return _G['ResultBiggestSound']")()
Exports.ResultLight = loadstring("return _G['ResultLight']")()
Exports.RingBuffer = loadstring("return _G['RingBuffer']")()
Exports.RoomDef = loadstring("return _G['RoomDef']")()
Exports.RoomRect = loadstring("return _G['RoomRect']")()
Exports.RoomTone = loadstring("return _G['RoomTone']")()
Exports.RuntimeAnimationScript = loadstring("return _G['RuntimeAnimationScript']")()
Exports.SCButton = loadstring("return _G['SCButton']")()
Exports.SGlobalObject = loadstring("return _G['SGlobalObject']")()
Exports.SGlobalObjectSystem = loadstring("return _G['SGlobalObjectSystem']")()
Exports.SGlobalObjects = loadstring("return _G['SGlobalObjects']")()
Exports.SLSoundManager = loadstring("return _G['SLSoundManager']")()
Exports.SafeHouse = loadstring("return _G['SafeHouse']")()
Exports.Safety = loadstring("return _G['Safety']")()
Exports.SandboxOption = loadstring("return _G['SandboxOption']")()
Exports.SandboxOptions = loadstring("return _G['SandboxOptions']")()
Exports.ScreenElement = loadstring("return _G['ScreenElement']")()
Exports.ScriptManager = loadstring("return _G['ScriptManager']")()
Exports.ScriptModule = loadstring("return _G['ScriptModule']")()
Exports.SearchMode = loadstring("return _G['SearchMode']")()
Exports.SearchModeFloat = loadstring("return _G['SearchModeFloat']")()
Exports.Season = loadstring("return _G['Season']")()
Exports.Seeds = loadstring("return _G['Seeds']")()
Exports.Server = loadstring("return _G['Server']")()
Exports.ServerChatMessage = loadstring("return _G['ServerChatMessage']")()
Exports.ServerOption = loadstring("return _G['ServerOption']")()
Exports.ServerOptions = loadstring("return _G['ServerOptions']")()
Exports.ServerSettings = loadstring("return _G['ServerSettings']")()
Exports.ServerSettingsManager = loadstring("return _G['ServerSettingsManager']")()
Exports.ServerVehicleState = loadstring("return _G['ServerVehicleState']")()
Exports.Shader = loadstring("return _G['Shader']")()
Exports.ShaderProgram = loadstring("return _G['ShaderProgram']")()
Exports.ShaderUnit = loadstring("return _G['ShaderUnit']")()
Exports.SharedDescriptors = loadstring("return _G['SharedDescriptors']")()
Exports.SharedSkeleAnimationRepository = loadstring("return _G['SharedSkeleAnimationRepository']")()
Exports.SharedSkeleAnimationTrack = loadstring("return _G['SharedSkeleAnimationTrack']")()
Exports.SharedVertexBufferObjects = loadstring("return _G['SharedVertexBufferObjects']")()
Exports.ShortList = loadstring("return _G['ShortList']")()
Exports.SideOfLine = loadstring("return _G['SideOfLine']")()
Exports.SimpleDateFormat = loadstring("return _G['SimpleDateFormat']")()
Exports.Skin = loadstring("return _G['Skin']")()
Exports.SkinningBone = loadstring("return _G['SkinningBone']")()
Exports.SkinningBoneHierarchy = loadstring("return _G['SkinningBoneHierarchy']")()
Exports.SkinningData = loadstring("return _G['SkinningData']")()
Exports.SleepingEvent = loadstring("return _G['SleepingEvent']")()
Exports.SleepingEventData = loadstring("return _G['SleepingEventData']")()
Exports.SliceY = loadstring("return _G['SliceY']")()
Exports.SmashWindowState = loadstring("return _G['SmashWindowState']")()
Exports.Sound = loadstring("return _G['Sound']")()
Exports.SoundManager = loadstring("return _G['SoundManager']")()
Exports.SoundTimelineScript = loadstring("return _G['SoundTimelineScript']")()
Exports.Sounds = loadstring("return _G['Sounds']")()
Exports.Source = loadstring("return _G['Source']")()
Exports.SpawnOrigin = loadstring("return _G['SpawnOrigin']")()
Exports.SpeedControls = loadstring("return _G['SpeedControls']")()
Exports.SpriteRenderState = loadstring("return _G['SpriteRenderState']")()
Exports.SpriteRenderer = loadstring("return _G['SpriteRenderer']")()
Exports.Square = loadstring("return _G['Square']")()
Exports.Stack = loadstring("return _G['Stack']")()
Exports.Stage = loadstring("return _G['Stage']")()
Exports.StaggerBackState = loadstring("return _G['StaggerBackState']")()
Exports.Stash = loadstring("return _G['Stash']")()
Exports.StashBuilding = loadstring("return _G['StashBuilding']")()
Exports.StashSystem = loadstring("return _G['StashSystem']")()
Exports.State = loadstring("return _G['State']")()
Exports.State = loadstring("return _G['State']")()
Exports.StateAction = loadstring("return _G['StateAction']")()
Exports.StateMachine = loadstring("return _G['StateMachine']")()
Exports.Stats = loadstring("return _G['Stats']")()
Exports.SteamFriend = loadstring("return _G['SteamFriend']")()
Exports.SteamUGCDetails = loadstring("return _G['SteamUGCDetails']")()
Exports.SteamWorkshopItem = loadstring("return _G['SteamWorkshopItem']")()
Exports.Step = loadstring("return _G['Step']")()
Exports.Stop = loadstring("return _G['Stop']")()
Exports.StoryEmitter = loadstring("return _G['StoryEmitter']")()
Exports.StorySound = loadstring("return _G['StorySound']")()
Exports.StorySoundEvent = loadstring("return _G['StorySoundEvent']")()
Exports.StrLerpVal = loadstring("return _G['StrLerpVal']")()
Exports.StringConfigOption = loadstring("return _G['StringConfigOption']")()
Exports.StringSandboxOption = loadstring("return _G['StringSandboxOption']")()
Exports.StringServerOption = loadstring("return _G['StringServerOption']")()
Exports.SubLayerSlot = loadstring("return _G['SubLayerSlot']")()
Exports.SubTexture = loadstring("return _G['SubTexture']")()
Exports.SubTextureInfo = loadstring("return _G['SubTextureInfo']")()
Exports.SubstateSlot = loadstring("return _G['SubstateSlot']")()
Exports.SurroundVehicle = loadstring("return _G['SurroundVehicle']")()
Exports.SurvivorDesc = loadstring("return _G['SurvivorDesc']")()
Exports.SurvivorFactory = loadstring("return _G['SurvivorFactory']")()
Exports.SurvivorGroup = loadstring("return _G['SurvivorGroup']")()
Exports.SurvivorType = loadstring("return _G['SurvivorType']")()
Exports.SwipeStatePlayer = loadstring("return _G['SwipeStatePlayer']")()
Exports.SwitchSeat = loadstring("return _G['SwitchSeat']")()
Exports.SystemDisabler = loadstring("return _G['SystemDisabler']")()
Exports.Temperature = loadstring("return _G['Temperature']")()
Exports.TentAmbianceLogic = loadstring("return _G['TentAmbianceLogic']")()
Exports.TestResults = loadstring("return _G['TestResults']")()
Exports.TextDrawHorizontal = loadstring("return _G['TextDrawHorizontal']")()
Exports.TextDrawObject = loadstring("return _G['TextDrawObject']")()
Exports.TextManager = loadstring("return _G['TextManager']")()
Exports.TextServerOption = loadstring("return _G['TextServerOption']")()
Exports.Texture = loadstring("return _G['Texture']")()
Exports.TextureAssetParams = loadstring("return _G['TextureAssetParams']")()
Exports.TextureDraw = loadstring("return _G['TextureDraw']")()
Exports.TextureFBO = loadstring("return _G['TextureFBO']")()
Exports.TextureID = loadstring("return _G['TextureID']")()
Exports.TextureIDAssetParams = loadstring("return _G['TextureIDAssetParams']")()
Exports.TexturePack = loadstring("return _G['TexturePack']")()
Exports.TexturePackPage = loadstring("return _G['TexturePackPage']")()
Exports.TexturePackTextures = loadstring("return _G['TexturePackTextures']")()
Exports.TextureStop = loadstring("return _G['TextureStop']")()
Exports.ThermalNode = loadstring("return _G['ThermalNode']")()
Exports.Thermoregulator = loadstring("return _G['Thermoregulator']")()
Exports.ThumpState = loadstring("return _G['ThumpState']")()
Exports.Thumpable = loadstring("return _G['Thumpable']")()
Exports.ThunderCloud = loadstring("return _G['ThunderCloud']")()
Exports.ThunderStorm = loadstring("return _G['ThunderStorm']")()
Exports.TileDef = loadstring("return _G['TileDef']")()
Exports.TileOverlays = loadstring("return _G['TileOverlays']")()
Exports.Time = loadstring("return _G['Time']")()
Exports.TorchInfo = loadstring("return _G['TorchInfo']")()
Exports.Trait = loadstring("return _G['Trait']")()
Exports.TraitCollection = loadstring("return _G['TraitCollection']")()
Exports.TraitFactory = loadstring("return _G['TraitFactory']")()
Exports.TraitSlot = loadstring("return _G['TraitSlot']")()
Exports.Transform = loadstring("return _G['Transform']")()
Exports.Translator = loadstring("return _G['Translator']")()
Exports.TransmissionNumber = loadstring("return _G['TransmissionNumber']")()
Exports.TreeAmbianceLogic = loadstring("return _G['TreeAmbianceLogic']")()
Exports.TreeShader = loadstring("return _G['TreeShader']")()
Exports.TreeSoundManager = loadstring("return _G['TreeSoundManager']")()
Exports.Trigger = loadstring("return _G['Trigger']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.Type = loadstring("return _G['Type']")()
Exports.UI3DModel = loadstring("return _G['UI3DModel']")()
Exports.UI3DScene = loadstring("return _G['UI3DScene']")()
Exports.UIDebugConsole = loadstring("return _G['UIDebugConsole']")()
Exports.UIElement = loadstring("return _G['UIElement']")()
Exports.UIEventHandler = loadstring("return _G['UIEventHandler']")()
Exports.UIFont = loadstring("return _G['UIFont']")()
Exports.UIManager = loadstring("return _G['UIManager']")()
Exports.UIServerToolbox = loadstring("return _G['UIServerToolbox']")()
Exports.UITextBox2 = loadstring("return _G['UITextBox2']")()
Exports.UITransition = loadstring("return _G['UITransition']")()
Exports.UIWorldMap = loadstring("return _G['UIWorldMap']")()
Exports.UIWorldMapV1 = loadstring("return _G['UIWorldMapV1']")()
Exports.UdpConnection = loadstring("return _G['UdpConnection']")()
Exports.UdpEngine = loadstring("return _G['UdpEngine']")()
Exports.Uniform = loadstring("return _G['Uniform']")()
Exports.UniqueRecipe = loadstring("return _G['UniqueRecipe']")()
Exports.Updater = loadstring("return _G['Updater']")()
Exports.Userlog = loadstring("return _G['Userlog']")()
Exports.UserlogType = loadstring("return _G['UserlogType']")()
Exports.Vector = loadstring("return _G['Vector']")()
Exports.Vector2 = loadstring("return _G['Vector2']")()
Exports.Vector2ObjectPool = loadstring("return _G['Vector2ObjectPool']")()
Exports.Vector2f = loadstring("return _G['Vector2f']")()
Exports.Vector2fObjectPool = loadstring("return _G['Vector2fObjectPool']")()
Exports.Vector3 = loadstring("return _G['Vector3']")()
Exports.Vector3f = loadstring("return _G['Vector3f']")()
Exports.Vector3fObjectPool = loadstring("return _G['Vector3fObjectPool']")()
Exports.Vehicle = loadstring("return _G['Vehicle']")()
Exports.VehicleDistribution = loadstring("return _G['VehicleDistribution']")()
Exports.VehicleDoor = loadstring("return _G['VehicleDoor']")()
Exports.VehicleEngineRPM = loadstring("return _G['VehicleEngineRPM']")()
Exports.VehicleGauge = loadstring("return _G['VehicleGauge']")()
Exports.VehicleHitPacket = loadstring("return _G['VehicleHitPacket']")()
Exports.VehicleLight = loadstring("return _G['VehicleLight']")()
Exports.VehiclePart = loadstring("return _G['VehiclePart']")()
Exports.VehiclePoly = loadstring("return _G['VehiclePoly']")()
Exports.VehicleScript = loadstring("return _G['VehicleScript']")()
Exports.VehicleStorySpawnData = loadstring("return _G['VehicleStorySpawnData']")()
Exports.VehicleStorySpawner = loadstring("return _G['VehicleStorySpawner']")()
Exports.VehicleTemplate = loadstring("return _G['VehicleTemplate']")()
Exports.VehicleType = loadstring("return _G['VehicleType']")()
Exports.VehicleTypeDefinition = loadstring("return _G['VehicleTypeDefinition']")()
Exports.VehicleWindow = loadstring("return _G['VehicleWindow']")()
Exports.VehicleZone = loadstring("return _G['VehicleZone']")()
Exports.VirtualZombieManager = loadstring("return _G['VirtualZombieManager']")()
Exports.VisionResult = loadstring("return _G['VisionResult']")()
Exports.WalkTowardState = loadstring("return _G['WalkTowardState']")()
Exports.WallShaderTexRender = loadstring("return _G['WallShaderTexRender']")()
Exports.WallShaperWhole = loadstring("return _G['WallShaperWhole']")()
Exports.WaterDripLogic = loadstring("return _G['WaterDripLogic']")()
Exports.WaveSignalDevice = loadstring("return _G['WaveSignalDevice']")()
Exports.WeaponPart = loadstring("return _G['WeaponPart']")()
Exports.WeaponType = loadstring("return _G['WeaponType']")()
Exports.WeatherPeriod = loadstring("return _G['WeatherPeriod']")()
Exports.WeatherStage = loadstring("return _G['WeatherStage']")()
Exports.Wheel = loadstring("return _G['Wheel']")()
Exports.WheelInfo = loadstring("return _G['WheelInfo']")()
Exports.Window = loadstring("return _G['Window']")()
Exports.WindowLogic = loadstring("return _G['WindowLogic']")()
Exports.WindowType = loadstring("return _G['WindowType']")()
Exports.WorldFlares = loadstring("return _G['WorldFlares']")()
Exports.WorldMap = loadstring("return _G['WorldMap']")()
Exports.WorldMapBaseSymbol = loadstring("return _G['WorldMapBaseSymbol']")()
Exports.WorldMapBaseSymbolV1 = loadstring("return _G['WorldMapBaseSymbolV1']")()
Exports.WorldMapBooleanOption = loadstring("return _G['WorldMapBooleanOption']")()
Exports.WorldMapCell = loadstring("return _G['WorldMapCell']")()
Exports.WorldMapData = loadstring("return _G['WorldMapData']")()
Exports.WorldMapDoubleOption = loadstring("return _G['WorldMapDoubleOption']")()
Exports.WorldMapFeature = loadstring("return _G['WorldMapFeature']")()
Exports.WorldMapGridSquareMarker = loadstring("return _G['WorldMapGridSquareMarker']")()
Exports.WorldMapGridSquareMarkerV1 = loadstring("return _G['WorldMapGridSquareMarkerV1']")()
Exports.WorldMapImages = loadstring("return _G['WorldMapImages']")()
Exports.WorldMapLineStyleLayerV1 = loadstring("return _G['WorldMapLineStyleLayerV1']")()
Exports.WorldMapMarker = loadstring("return _G['WorldMapMarker']")()
Exports.WorldMapMarkerV1 = loadstring("return _G['WorldMapMarkerV1']")()
Exports.WorldMapMarkers = loadstring("return _G['WorldMapMarkers']")()
Exports.WorldMapMarkersV1 = loadstring("return _G['WorldMapMarkersV1']")()
Exports.WorldMapPolygonStyleLayerV1 = loadstring("return _G['WorldMapPolygonStyleLayerV1']")()
Exports.WorldMapRenderer = loadstring("return _G['WorldMapRenderer']")()
Exports.WorldMapStyle = loadstring("return _G['WorldMapStyle']")()
Exports.WorldMapStyleLayer = loadstring("return _G['WorldMapStyleLayer']")()
Exports.WorldMapStyleLayerV1 = loadstring("return _G['WorldMapStyleLayerV1']")()
Exports.WorldMapStyleV1 = loadstring("return _G['WorldMapStyleV1']")()
Exports.WorldMapSymbolCollisions = loadstring("return _G['WorldMapSymbolCollisions']")()
Exports.WorldMapSymbolType = loadstring("return _G['WorldMapSymbolType']")()
Exports.WorldMapSymbols = loadstring("return _G['WorldMapSymbols']")()
Exports.WorldMapSymbolsV1 = loadstring("return _G['WorldMapSymbolsV1']")()
Exports.WorldMapTextSymbol = loadstring("return _G['WorldMapTextSymbol']")()
Exports.WorldMapTextSymbolV1 = loadstring("return _G['WorldMapTextSymbolV1']")()
Exports.WorldMapTextureStyleLayerV1 = loadstring("return _G['WorldMapTextureStyleLayerV1']")()
Exports.WorldMapTextureSymbol = loadstring("return _G['WorldMapTextureSymbol']")()
Exports.WorldMapTextureSymbolV1 = loadstring("return _G['WorldMapTextureSymbolV1']")()
Exports.WorldMapVisited = loadstring("return _G['WorldMapVisited']")()
Exports.WorldMarkers = loadstring("return _G['WorldMarkers']")()
Exports.WorldSound = loadstring("return _G['WorldSound']")()
Exports.WorldSoundEmitter = loadstring("return _G['WorldSoundEmitter']")()
Exports.WorldSoundManager = loadstring("return _G['WorldSoundManager']")()
Exports.WornItem = loadstring("return _G['WornItem']")()
Exports.WornItems = loadstring("return _G['WornItems']")()
Exports.WrappedBuffer = loadstring("return _G['WrappedBuffer']")()
Exports.XP = loadstring("return _G['XP']")()
Exports.XPMultiplier = loadstring("return _G['XPMultiplier']")()
Exports.ZLogger = loadstring("return _G['ZLogger']")()
Exports.ZNetFileAnnounce = loadstring("return _G['ZNetFileAnnounce']")()
Exports.ZNetFileChunk = loadstring("return _G['ZNetFileChunk']")()
Exports.ZNetSessionState = loadstring("return _G['ZNetSessionState']")()
Exports.ZNetStatistics = loadstring("return _G['ZNetStatistics']")()
Exports.ZombieConfig = loadstring("return _G['ZombieConfig']")()
Exports.ZombieFallDownState = loadstring("return _G['ZombieFallDownState']")()
Exports.ZombieGetDownState = loadstring("return _G['ZombieGetDownState']")()
Exports.ZombieGetUpState = loadstring("return _G['ZombieGetUpState']")()
Exports.ZombieIdleState = loadstring("return _G['ZombieIdleState']")()
Exports.ZombieLore = loadstring("return _G['ZombieLore']")()
Exports.ZombieOnGroundState = loadstring("return _G['ZombieOnGroundState']")()
Exports.ZombiePopulationManager = loadstring("return _G['ZombiePopulationManager']")()
Exports.ZombiePopulationRenderer = loadstring("return _G['ZombiePopulationRenderer']")()
Exports.ZombieReanimateState = loadstring("return _G['ZombieReanimateState']")()
Exports.ZombieSittingState = loadstring("return _G['ZombieSittingState']")()
Exports.ZombieSound = loadstring("return _G['ZombieSound']")()
Exports.ZomboidBitFlag = loadstring("return _G['ZomboidBitFlag']")()
Exports.ZomboidRadio = loadstring("return _G['ZomboidRadio']")()
Exports.Zone = loadstring("return _G['Zone']")()
Exports.ZoneGeometryType = loadstring("return _G['ZoneGeometryType']")()
Exports.ZoneType = loadstring("return _G['ZoneType']")()
Exports.engineStateTypes = loadstring("return _G['engineStateTypes']")()
Exports.l_receive = loadstring("return _G['l_receive']")()
Exports.l_send = loadstring("return _G['l_send']")()
Exports.vector2 = loadstring("return _G['vector2']")()

-------------------------------------------
-- [PARTIAL] : Lua.interface.partial.lua --
-------------------------------------------

_G.PIPEWRENCH_READY = false
triggerEvent('OnPipeWrenchBoot', false)

Events.OnGameBoot.Add(function()

--[client/Blacksmith/ISUI/ISBlacksmithMenu.d.ts]
  Exports.ISBlacksmithMenu = loadstring("return _G['ISBlacksmithMenu']")()

--[client/Blacksmith/ISUI/ISFurnaceInfoWindow.d.ts]
  Exports.ISFurnaceInfoWindow = loadstring("return _G['ISFurnaceInfoWindow']")()

--[client/Blacksmith/TimedActions/ISAddCoalInFurnace.d.ts]
  Exports.ISAddCoalInFurnace = loadstring("return _G['ISAddCoalInFurnace']")()

--[client/Blacksmith/TimedActions/ISAddLogsInDrum.d.ts]
  Exports.ISAddLogsInDrum = loadstring("return _G['ISAddLogsInDrum']")()

--[client/Blacksmith/TimedActions/ISDrumLightFromKindle.d.ts]
  Exports.ISDrumLightFromKindle = loadstring("return _G['ISDrumLightFromKindle']")()

--[client/Blacksmith/TimedActions/ISDrumLightFromLiterature.d.ts]
  Exports.ISDrumLightFromLiterature = loadstring("return _G['ISDrumLightFromLiterature']")()

--[client/Blacksmith/TimedActions/ISDrumLightFromPetrol.d.ts]
  Exports.ISDrumLightFromPetrol = loadstring("return _G['ISDrumLightFromPetrol']")()

--[client/Blacksmith/TimedActions/ISEmptyDrum.d.ts]
  Exports.ISEmptyDrum = loadstring("return _G['ISEmptyDrum']")()

--[client/Blacksmith/TimedActions/ISFurnaceInfoAction.d.ts]
  Exports.ISFurnaceInfoAction = loadstring("return _G['ISFurnaceInfoAction']")()

--[client/Blacksmith/TimedActions/ISFurnaceLightFromKindle.d.ts]
  Exports.ISFurnaceLightFromKindle = loadstring("return _G['ISFurnaceLightFromKindle']")()

--[client/Blacksmith/TimedActions/ISFurnaceLightFromLiterature.d.ts]
  Exports.ISFurnaceLightFromLiterature = loadstring("return _G['ISFurnaceLightFromLiterature']")()

--[client/Blacksmith/TimedActions/ISFurnaceLightFromPetrol.d.ts]
  Exports.ISFurnaceLightFromPetrol = loadstring("return _G['ISFurnaceLightFromPetrol']")()

--[client/Blacksmith/TimedActions/ISPutOutFireDrum.d.ts]
  Exports.ISPutOutFireDrum = loadstring("return _G['ISPutOutFireDrum']")()

--[client/Blacksmith/TimedActions/ISRemoveCharcoal.d.ts]
  Exports.ISRemoveCharcoal = loadstring("return _G['ISRemoveCharcoal']")()

--[client/Blacksmith/TimedActions/ISRemoveDrum.d.ts]
  Exports.ISRemoveDrum = loadstring("return _G['ISRemoveDrum']")()

--[client/Blacksmith/TimedActions/ISStopFurnaceFire.d.ts]
  Exports.ISStopFurnaceFire = loadstring("return _G['ISStopFurnaceFire']")()

--[client/Blacksmith/TimedActions/ISUseBellows.d.ts]
  Exports.ISUseBellows = loadstring("return _G['ISUseBellows']")()

--[server/BuildingObjects/ISAnvil.d.ts]
  Exports.ISAnvil = loadstring("return _G['ISAnvil']")()

--[server/BuildingObjects/ISBarbedWire.d.ts]
  Exports.ISBarbedWire = loadstring("return _G['ISBarbedWire']")()

--[server/BuildingObjects/ISBSFurnace.d.ts]
  Exports.ISBSFurnace = loadstring("return _G['ISBSFurnace']")()

--[server/BuildingObjects/ISBuildCursorMouse.d.ts]
  Exports.ISBuildCursorMouse = loadstring("return _G['ISBuildCursorMouse']")()

--[server/BuildingObjects/ISBuildingObject.d.ts]
  Exports.ISBuildingObject = loadstring("return _G['ISBuildingObject']")()

--[server/BuildingObjects/ISBuildUtil.d.ts]
  Exports.buildUtil = loadstring("return _G['buildUtil']")()

--[server/BuildingObjects/ISChopTreeCursor.d.ts]
  Exports.ISChopTreeCursor = loadstring("return _G['ISChopTreeCursor']")()

--[server/BuildingObjects/ISCleanBloodCursor.d.ts]
  Exports.ISCleanBloodCursor = loadstring("return _G['ISCleanBloodCursor']")()

--[server/BuildingObjects/ISCompost.d.ts]
  Exports.ISCompost = loadstring("return _G['ISCompost']")()

--[server/BuildingObjects/ISDestroyCursor.d.ts]
  Exports.ISDestroyCursor = loadstring("return _G['ISDestroyCursor']")()

--[server/BuildingObjects/ISDoubleDoor.d.ts]
  Exports.ISDoubleDoor = loadstring("return _G['ISDoubleDoor']")()

--[server/BuildingObjects/ISDoubleTileFurniture.d.ts]
  Exports.ISDoubleTileFurniture = loadstring("return _G['ISDoubleTileFurniture']")()

--[server/BuildingObjects/ISEmptyGraves.d.ts]
  Exports.ISEmptyGraves = loadstring("return _G['ISEmptyGraves']")()

--[server/BuildingObjects/ISLightSource.d.ts]
  Exports.ISLightSource = loadstring("return _G['ISLightSource']")()

--[server/BuildingObjects/ISMoveableCursor.d.ts]
  Exports.ISMoveableCursor = loadstring("return _G['ISMoveableCursor']")()

--[server/BuildingObjects/ISNaturalFloor.d.ts]
  Exports.ISNaturalFloor = loadstring("return _G['ISNaturalFloor']")()

--[server/BuildingObjects/ISPaintCursor.d.ts]
  Exports.ISPaintCursor = loadstring("return _G['ISPaintCursor']")()

--[server/BuildingObjects/ISPlace3DItemCursor.d.ts]
  Exports.ISPlace3DItemCursor = loadstring("return _G['ISPlace3DItemCursor']")()

--[server/BuildingObjects/ISRemovePlantCursor.d.ts]
  Exports.ISRemovePlantCursor = loadstring("return _G['ISRemovePlantCursor']")()

--[server/BuildingObjects/ISSelectCursor.d.ts]
  Exports.ISSelectCursor = loadstring("return _G['ISSelectCursor']")()

--[server/BuildingObjects/ISShovelGroundCursor.d.ts]
  Exports.ISShovelGroundCursor = loadstring("return _G['ISShovelGroundCursor']")()

--[server/BuildingObjects/ISSimpleFurniture.d.ts]
  Exports.ISSimpleFurniture = loadstring("return _G['ISSimpleFurniture']")()

--[client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
  Exports.ISBuildMenu = loadstring("return _G['ISBuildMenu']")()

--[client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
  Exports.ISInventoryBuildMenu = loadstring("return _G['ISInventoryBuildMenu']")()

--[client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
  Exports.ISPaintMenu = loadstring("return _G['ISPaintMenu']")()

--[server/BuildingObjects/ISWalkToCursor.d.ts]
  Exports.ISWalkToCursor = loadstring("return _G['ISWalkToCursor']")()

--[server/BuildingObjects/ISWoodenContainer.d.ts]
  Exports.ISWoodenContainer = loadstring("return _G['ISWoodenContainer']")()

--[server/BuildingObjects/ISWoodenDoor.d.ts]
  Exports.ISWoodenDoor = loadstring("return _G['ISWoodenDoor']")()

--[server/BuildingObjects/ISWoodenDoorFrame.d.ts]
  Exports.ISWoodenDoorFrame = loadstring("return _G['ISWoodenDoorFrame']")()

--[server/BuildingObjects/ISWoodenFloor.d.ts]
  Exports.ISWoodenFloor = loadstring("return _G['ISWoodenFloor']")()

--[server/BuildingObjects/ISWoodenStairs.d.ts]
  Exports.ISWoodenStairs = loadstring("return _G['ISWoodenStairs']")()

--[server/BuildingObjects/ISWoodenWall.d.ts]
  Exports.ISWoodenWall = loadstring("return _G['ISWoodenWall']")()

--[server/BuildingObjects/PaintingReference.d.ts]
  Exports.OtherPainting = loadstring("return _G['OtherPainting']")()
  Exports.Painting = loadstring("return _G['Painting']")()

--[client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
  Exports.ISBuildAction = loadstring("return _G['ISBuildAction']")()

--[client/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
  Exports.ISInsertLightSourceFuelAction = loadstring("return _G['ISInsertLightSourceFuelAction']")()

--[client/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
  Exports.ISMultiStageBuild = loadstring("return _G['ISMultiStageBuild']")()

--[client/BuildingObjects/TimedActions/ISPaintAction.d.ts]
  Exports.ISPaintAction = loadstring("return _G['ISPaintAction']")()

--[client/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
  Exports.ISPaintSignAction = loadstring("return _G['ISPaintSignAction']")()

--[client/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
  Exports.ISPlasterAction = loadstring("return _G['ISPlasterAction']")()

--[client/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
  Exports.ISRemoveLightSourceFuelAction = loadstring("return _G['ISRemoveLightSourceFuelAction']")()

--[client/BuildingObjects/TimedActions/ISShovelGround.d.ts]
  Exports.ISShovelGround = loadstring("return _G['ISShovelGround']")()

--[client/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
  Exports.ISToggleLightSourceAction = loadstring("return _G['ISToggleLightSourceAction']")()

--[server/Camping/BuildingObjects/campingCampfire.d.ts]
  Exports.campingCampfire = loadstring("return _G['campingCampfire']")()

--[server/Camping/BuildingObjects/campingTent.d.ts]
  Exports.campingTent = loadstring("return _G['campingTent']")()

--[server/Camping/camping_fuel.d.ts]
  Exports.campingFuelCategory = loadstring("return _G['campingFuelCategory']")()
  Exports.campingFuelType = loadstring("return _G['campingFuelType']")()
  Exports.campingLightFireCategory = loadstring("return _G['campingLightFireCategory']")()
  Exports.campingLightFireType = loadstring("return _G['campingLightFireType']")()

--[server/Camping/camping_tent.d.ts]
  Exports.camping = loadstring("return _G['camping']")()

--[server/Camping/camping_text.d.ts]
  Exports.campingText = loadstring("return _G['campingText']")()

--[client/Camping/CCampfireGlobalObject.d.ts]
  Exports.CCampfireGlobalObject = loadstring("return _G['CCampfireGlobalObject']")()

--[client/Camping/CCampfireSystem.d.ts]
  Exports.CCampfireSystem = loadstring("return _G['CCampfireSystem']")()

--[client/Camping/ISUI/ISCampingInfoWindow.d.ts]
  Exports.ISCampingInfoWindow = loadstring("return _G['ISCampingInfoWindow']")()

--[client/Camping/ISUI/ISCampingMenu.d.ts]
  Exports.ISCampingMenu = loadstring("return _G['ISCampingMenu']")()

--[server/Camping/SCampfireGlobalObject.d.ts]
  Exports.SCampfireGlobalObject = loadstring("return _G['SCampfireGlobalObject']")()

--[server/Camping/SCampfireSystem.d.ts]
  Exports.SCampfireSystem = loadstring("return _G['SCampfireSystem']")()

--[client/Camping/TimedActions/ISAddFuelAction.d.ts]
  Exports.ISAddFuelAction = loadstring("return _G['ISAddFuelAction']")()

--[client/Camping/TimedActions/ISAddTentAction.d.ts]
  Exports.ISAddTentAction = loadstring("return _G['ISAddTentAction']")()

--[client/Camping/TimedActions/ISLightFromKindle.d.ts]
  Exports.ISLightFromKindle = loadstring("return _G['ISLightFromKindle']")()

--[client/Camping/TimedActions/ISLightFromLiterature.d.ts]
  Exports.ISLightFromLiterature = loadstring("return _G['ISLightFromLiterature']")()

--[client/Camping/TimedActions/ISLightFromPetrol.d.ts]
  Exports.ISLightFromPetrol = loadstring("return _G['ISLightFromPetrol']")()

--[client/Camping/TimedActions/ISPlaceCampfireAction.d.ts]
  Exports.ISPlaceCampfireAction = loadstring("return _G['ISPlaceCampfireAction']")()

--[client/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
  Exports.ISPutOutCampfireAction = loadstring("return _G['ISPutOutCampfireAction']")()

--[client/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
  Exports.ISRemoveCampfireAction = loadstring("return _G['ISRemoveCampfireAction']")()

--[client/Camping/TimedActions/ISRemoveTentAction.d.ts]
  Exports.ISRemoveTentAction = loadstring("return _G['ISRemoveTentAction']")()

--[client/Camping/TimedActions/ISSleepInTentAction.d.ts]
  Exports.ISSleepInTentAction = loadstring("return _G['ISSleepInTentAction']")()

--[client/Chat/ISChat.d.ts]
  Exports.ISChat = loadstring("return _G['ISChat']")()

--[server/Climate/ClimateMain.d.ts]
  Exports.ClimateMain = loadstring("return _G['ClimateMain']")()

--[client/Context/ISContextManager.d.ts]
  Exports.ISContextManager = loadstring("return _G['ISContextManager']")()

--[client/Context/ISMenuContext.d.ts]
  Exports.ISMenuContext = loadstring("return _G['ISMenuContext']")()

--[client/Context/ISMenuContextBuild.d.ts]
  Exports.ISMenuContextBuild = loadstring("return _G['ISMenuContextBuild']")()

--[client/Context/ISMenuContextInventory.d.ts]
  Exports.ISMenuContextInventory = loadstring("return _G['ISMenuContextInventory']")()

--[client/Context/ISMenuContextWorld.d.ts]
  Exports.ISMenuContextWorld = loadstring("return _G['ISMenuContextWorld']")()

--[client/Context/ISMenuElement.d.ts]
  Exports.ISMenuElement = loadstring("return _G['ISMenuElement']")()

--[client/Context/World/TestMarkers.d.ts]
  Exports.TestMarkers = loadstring("return _G['TestMarkers']")()

--[client/DebugUIs/AdminContextMenu.d.ts]
  Exports.AdminContextMenu = loadstring("return _G['AdminContextMenu']")()

--[client/DebugUIs/AnimationClipViewer.d.ts]
  Exports.AnimationClipViewer = loadstring("return _G['AnimationClipViewer']")()
  Exports.AnimationClipViewer_ListBox = loadstring("return _G['AnimationClipViewer_ListBox']")()
  Exports.AnimationClipViewer_OptionsPanel = loadstring("return _G['AnimationClipViewer_OptionsPanel']")()
  Exports.AnimationClipViewer_Scene = loadstring("return _G['AnimationClipViewer_Scene']")()
  Exports.AnimationClipViewer_Timeline = loadstring("return _G['AnimationClipViewer_Timeline']")()

--[client/DebugUIs/AttachmentEditorUI.d.ts]
  Exports.AttachmentEditorUI = loadstring("return _G['AttachmentEditorUI']")()
  Exports.AttachmentEditorUI_EditAttachment = loadstring("return _G['AttachmentEditorUI_EditAttachment']")()
  Exports.AttachmentEditorUI_EditPanel = loadstring("return _G['AttachmentEditorUI_EditPanel']")()
  Exports.AttachmentEditorUI_ListBox = loadstring("return _G['AttachmentEditorUI_ListBox']")()
  Exports.AttachmentEditorUI_Scene = loadstring("return _G['AttachmentEditorUI_Scene']")()
  Exports.AttachmentEditorUI_SwitchView = loadstring("return _G['AttachmentEditorUI_SwitchView']")()

--[client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel.d.ts]
  Exports.DebugChunkState_ObjectPickerPanel = loadstring("return _G['DebugChunkState_ObjectPickerPanel']")()

--[client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.d.ts]
  Exports.DebugChunkStateUI_ObjPropsHandler = loadstring("return _G['DebugChunkStateUI_ObjPropsHandler']")()
  Exports.DebugChunkStateUI_ObjPropsPanel = loadstring("return _G['DebugChunkStateUI_ObjPropsPanel']")()

--[client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel.d.ts]
  Exports.DebugChunkStateUI_SquarePanel = loadstring("return _G['DebugChunkStateUI_SquarePanel']")()
  Exports.DebugChunkStateUI_SquarePropsHandler = loadstring("return _G['DebugChunkStateUI_SquarePropsHandler']")()

--[client/DebugUIs/DebugChunkState/DebugChunkState_Tools.d.ts]
  Exports.DebugChunkStateUI_DragCameraTool = loadstring("return _G['DebugChunkStateUI_DragCameraTool']")()
  Exports.DebugChunkStateUI_Tool = loadstring("return _G['DebugChunkStateUI_Tool']")()

--[client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel.d.ts]
  Exports.DebugChunkState_VehicleStoryPanel = loadstring("return _G['DebugChunkState_VehicleStoryPanel']")()

--[client/DebugUIs/DebugChunkState/DebugChunkStateUI.d.ts]
  Exports.DebugChunkStateUI = loadstring("return _G['DebugChunkStateUI']")()
  Exports.DebugChunkStateUI_OptionsPanel = loadstring("return _G['DebugChunkStateUI_OptionsPanel']")()

--[client/DebugUIs/DebugChunkState/ISSectionedPanel.d.ts]
  Exports.ISSectionedPanel = loadstring("return _G['ISSectionedPanel']")()
  Exports.ISSectionedPanel_Section = loadstring("return _G['ISSectionedPanel_Section']")()

--[client/DebugUIs/DebugContextMenu.d.ts]
  Exports.DebugContextMenu = loadstring("return _G['DebugContextMenu']")()

--[client/DebugUIs/DebugErrorsWindow.d.ts]
  Exports.DebugErrorsWindow = loadstring("return _G['DebugErrorsWindow']")()

--[client/DebugUIs/DebuggerContextMenu.d.ts]
  Exports.DebuggerContextMenu = loadstring("return _G['DebuggerContextMenu']")()

--[client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel.d.ts]
  Exports.DebugGlobalObjectState_BasePropertiesPanel = loadstring("return _G['DebugGlobalObjectState_BasePropertiesPanel']")()
  Exports.DebugGlobalObjectState_GlobalObjectPanel = loadstring("return _G['DebugGlobalObjectState_GlobalObjectPanel']")()
  Exports.DebugGlobalObjectState_IsoObjectPanel = loadstring("return _G['DebugGlobalObjectState_IsoObjectPanel']")()
  Exports.DebugGlobalObjectState_PropertiesPanel = loadstring("return _G['DebugGlobalObjectState_PropertiesPanel']")()
  Exports.DebugGlobalObjectState_SystemPanel = loadstring("return _G['DebugGlobalObjectState_SystemPanel']")()

--[client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools.d.ts]
  Exports.DebugGlobalObjectStateUI_DragCameraTool = loadstring("return _G['DebugGlobalObjectStateUI_DragCameraTool']")()
  Exports.DebugGlobalObjectStateUI_Tool = loadstring("return _G['DebugGlobalObjectStateUI_Tool']")()

--[client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI.d.ts]
  Exports.DebugGlobalObjectStateUI = loadstring("return _G['DebugGlobalObjectStateUI']")()

--[client/DebugUIs/DebugLogSettings.d.ts]
  Exports.DebugLogSettings = loadstring("return _G['DebugLogSettings']")()

--[client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter.d.ts]
  Exports.FloatArrayPlotter = loadstring("return _G['FloatArrayPlotter']")()

--[client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor.d.ts]
  Exports.ISAnimDebugMonitor = loadstring("return _G['ISAnimDebugMonitor']")()

--[client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput.d.ts]
  Exports.ISAnimLoggerOutput = loadstring("return _G['ISAnimLoggerOutput']")()

--[client/DebugUIs/DebugMenu/Base/ISDebugPanelBase.d.ts]
  Exports.ISDebugPanelBase = loadstring("return _G['ISDebugPanelBase']")()

--[client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase.d.ts]
  Exports.ISDebugSubPanelBase = loadstring("return _G['ISDebugSubPanelBase']")()

--[client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug.d.ts]
  Exports.ClimateColorsDebug = loadstring("return _G['ClimateColorsDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.d.ts]
  Exports.ClimateControlDebug = loadstring("return _G['ClimateControlDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ClimateDebug.d.ts]
  Exports.ClimateDebug = loadstring("return _G['ClimateDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.d.ts]
  Exports.ClimateOptionsDebug = loadstring("return _G['ClimateOptionsDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.d.ts]
  Exports.ClimDebuggersPanel = loadstring("return _G['ClimDebuggersPanel']")()

--[client/DebugUIs/DebugMenu/Climate/DailyValuesDebug.d.ts]
  Exports.DailyValuesDebug = loadstring("return _G['DailyValuesDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ForecasterDebug.d.ts]
  Exports.ForecasterDebug = loadstring("return _G['ForecasterDebug']")()

--[client/DebugUIs/DebugMenu/Climate/NewFogDebug.d.ts]
  Exports.NewFogDebug = loadstring("return _G['NewFogDebug']")()

--[client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.d.ts]
  Exports.PlayerClimateDebug = loadstring("return _G['PlayerClimateDebug']")()

--[client/DebugUIs/DebugMenu/Climate/PopupColorEdit.d.ts]
  Exports.PopupColorEdit = loadstring("return _G['PopupColorEdit']")()

--[client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts]
  Exports.ThermoDebug = loadstring("return _G['ThermoDebug']")()
  Exports.ThermoDebug = loadstring("return _G['ThermoDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ThunderDebug.d.ts]
  Exports.ThunderDebug = loadstring("return _G['ThunderDebug']")()

--[client/DebugUIs/DebugMenu/Climate/ValuePlotter.d.ts]
  Exports.ValuePlotter = loadstring("return _G['ValuePlotter']")()

--[client/DebugUIs/DebugMenu/Climate/WeatherFXDebug.d.ts]
  Exports.WeatherFXDebug = loadstring("return _G['WeatherFXDebug']")()

--[client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.d.ts]
  Exports.WeatherPeriodDebug = loadstring("return _G['WeatherPeriodDebug']")()

--[client/DebugUIs/DebugMenu/Climate/WindDebug.d.ts]
  Exports.WindDebug = loadstring("return _G['WindDebug']")()

--[client/DebugUIs/DebugMenu/General/ISCheatPanelUI.d.ts]
  Exports.ISCheatPanelUI = loadstring("return _G['ISCheatPanelUI']")()

--[client/DebugUIs/DebugMenu/General/ISDebugBlood.d.ts]
  Exports.ISDebugBlood = loadstring("return _G['ISDebugBlood']")()

--[client/DebugUIs/DebugMenu/General/ISGameDebugPanel.d.ts]
  Exports.ISGameDebugPanel = loadstring("return _G['ISGameDebugPanel']")()

--[client/DebugUIs/DebugMenu/General/ISGeneralCheats.d.ts]
  Exports.ISGeneralCheats = loadstring("return _G['ISGeneralCheats']")()

--[client/DebugUIs/DebugMenu/General/ISGeneralDebug.d.ts]
  Exports.ISGeneralDebug = loadstring("return _G['ISGeneralDebug']")()

--[client/DebugUIs/DebugMenu/General/ISSearchMode.d.ts]
  Exports.ISSearchMode = loadstring("return _G['ISSearchMode']")()

--[client/DebugUIs/DebugMenu/General/ISStatsAndBody.d.ts]
  Exports.ISStatsAndBody = loadstring("return _G['ISStatsAndBody']")()

--[client/DebugUIs/DebugMenu/GlobalModData/GlobalModData.d.ts]
  Exports.GlobalModDataDebug = loadstring("return _G['GlobalModDataDebug']")()

--[client/DebugUIs/DebugMenu/GlobalModData/GlobalModDataTest.d.ts]

--[client/DebugUIs/DebugMenu/ISDebugMenu.d.ts]
  Exports.ISDebugMenu = loadstring("return _G['ISDebugMenu']")()

--[client/DebugUIs/DebugMenu/ISDebugUtils.d.ts]
  Exports.ISDebugUtils = loadstring("return _G['ISDebugUtils']")()

--[client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug.d.ts]
  Exports.IsoRegionDebug = loadstring("return _G['IsoRegionDebug']")()

--[client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails.d.ts]
  Exports.IsoRegionDetails = loadstring("return _G['IsoRegionDetails']")()

--[client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow.d.ts]
  Exports.IsoRegionLogWindow = loadstring("return _G['IsoRegionLogWindow']")()

--[client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow.d.ts]
  Exports.IsoRegionsWindow = loadstring("return _G['IsoRegionsWindow']")()

--[client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
  Exports.PuddlesControl = loadstring("return _G['PuddlesControl']")()

--[client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
  Exports.PuddlesPeriodDebug = loadstring("return _G['PuddlesPeriodDebug']")()

--[client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
  Exports.RadioScriptDebugger = loadstring("return _G['RadioScriptDebugger']")()

--[client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
  Exports.ZomboidRadioDebug = loadstring("return _G['ZomboidRadioDebug']")()

--[client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel.d.ts]
  Exports.ISGameStatisticPanel = loadstring("return _G['ISGameStatisticPanel']")()

--[client/DebugUIs/DebugMenu/Statistic/StatisticChart.d.ts]
  Exports.StatisticChart = loadstring("return _G['StatisticChart']")()

--[client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations.d.ts]
  Exports.StatisticChartDiskOperations = loadstring("return _G['StatisticChartDiskOperations']")()

--[client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory.d.ts]
  Exports.StatisticChartMemory = loadstring("return _G['StatisticChartMemory']")()

--[client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets.d.ts]
  Exports.StatisticChartPackets = loadstring("return _G['StatisticChartPackets']")()

--[client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod.d.ts]
  Exports.StatisticChartUpdatePeriod = loadstring("return _G['StatisticChartUpdatePeriod']")()

--[client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
  Exports.WorldFlaresDebug = loadstring("return _G['WorldFlaresDebug']")()

--[client/DebugUIs/DebugOptionsWindow.d.ts]
  Exports.DebugOptionsWindow = loadstring("return _G['DebugOptionsWindow']")()

--[client/DebugUIs/DebugScenarios.d.ts]
  Exports.DebugScenarios = loadstring("return _G['DebugScenarios']")()

--[client/DebugUIs/DebugToolstrip.d.ts]
  Exports.DebugToolstrip = loadstring("return _G['DebugToolstrip']")()

--[client/DebugUIs/DeviceInspector.d.ts]
  Exports.DeviceInspector = loadstring("return _G['DeviceInspector']")()

--[client/DebugUIs/ISAttachedItemsUI.d.ts]
  Exports.ISAttachedItemsUI = loadstring("return _G['ISAttachedItemsUI']")()

--[client/DebugUIs/ISFastTeleportMove.d.ts]
  Exports.ISFastTeleportMove = loadstring("return _G['ISFastTeleportMove']")()

--[client/DebugUIs/ISLootStressTestUI.d.ts]
  Exports.ISLootStreetTestUI = loadstring("return _G['ISLootStreetTestUI']")()

--[client/DebugUIs/ISRemoveItemTool.d.ts]
  Exports.ISRemoveItemTool = loadstring("return _G['ISRemoveItemTool']")()

--[client/DebugUIs/ISRunningDebugUI.d.ts]
  Exports.ISRunningDebugUI = loadstring("return _G['ISRunningDebugUI']")()

--[client/DebugUIs/ISSpawnHordeUI.d.ts]
  Exports.ISSpawnHordeUI = loadstring("return _G['ISSpawnHordeUI']")()

--[client/DebugUIs/ISSpawnPointsEditor.d.ts]
  Exports.ISSpawnPointsEditor = loadstring("return _G['ISSpawnPointsEditor']")()

--[client/DebugUIs/ISSpawnVehicleUI.d.ts]
  Exports.ISSpawnVehicleUI = loadstring("return _G['ISSpawnVehicleUI']")()

--[client/DebugUIs/ISTeleportDebugUI.d.ts]
  Exports.ISTeleportDebugUI = loadstring("return _G['ISTeleportDebugUI']")()

--[client/DebugUIs/ISTilesPickerDebugUI.d.ts]
  Exports.ISTilesPickerDebugUI = loadstring("return _G['ISTilesPickerDebugUI']")()
  Exports.ISTilesPickerTilesList = loadstring("return _G['ISTilesPickerTilesList']")()

--[client/DebugUIs/LuaDebugger.d.ts]
  Exports.LuaDebugger = loadstring("return _G['LuaDebugger']")()

--[client/DebugUIs/LuaDebugOutput.d.ts]
  Exports.LuaDebugOutput = loadstring("return _G['LuaDebugOutput']")()

--[client/DebugUIs/LuaFileBrowser.d.ts]
  Exports.LuaFileBrowser = loadstring("return _G['LuaFileBrowser']")()
  Exports.LuaFileBrowserList = loadstring("return _G['LuaFileBrowserList']")()

--[client/DebugUIs/LuaThreadWindow.d.ts]
  Exports.LuaThreadWindow = loadstring("return _G['LuaThreadWindow']")()

--[client/DebugUIs/MPDebugger.d.ts]
  Exports.MPDebugger = loadstring("return _G['MPDebugger']")()

--[client/DebugUIs/ObjectViewer.d.ts]
  Exports.ObjectViewer = loadstring("return _G['ObjectViewer']")()

--[client/DebugUIs/SourceWindow.d.ts]
  Exports.SourceWindow = loadstring("return _G['SourceWindow']")()

--[client/DebugUIs/StashDebug.d.ts]
  Exports.StashDebug = loadstring("return _G['StashDebug']")()

--[client/DebugUIs/StreamMapWindow.d.ts]
  Exports.StreamMapWindow = loadstring("return _G['StreamMapWindow']")()

--[client/DebugUIs/TextureViewer.d.ts]
  Exports.TextureWindow = loadstring("return _G['TextureWindow']")()

--[client/DebugUIs/WatchWindow.d.ts]
  Exports.WatchWindow = loadstring("return _G['WatchWindow']")()

--[shared/defines.d.ts]
  Exports.ZomboidGlobals = loadstring("return _G['ZomboidGlobals']")()

--[shared/Definitions/ClothingRecipesDefinitions.d.ts]
  Exports.ClothingRecipesDefinitions = loadstring("return _G['ClothingRecipesDefinitions']")()

--[shared/Definitions/DefaultClothing.d.ts]
  Exports.DefaultClothing = loadstring("return _G['DefaultClothing']")()

--[shared/Definitions/FitnessExercises.d.ts]
  Exports.FitnessExercises = loadstring("return _G['FitnessExercises']")()

--[client/erosion/debug/DebugDemoTime.d.ts]

--[client/erosion/debug/Point2D.d.ts]
  Exports.Point2D = loadstring("return _G['Point2D']")()

--[server/Farming/BuildingObjects/farmingPlot.d.ts]
  Exports.farmingPlot = loadstring("return _G['farmingPlot']")()

--[server/Farming/BuildingObjects/ISFarmingCursor.d.ts]
  Exports.ISFarmingCursor = loadstring("return _G['ISFarmingCursor']")()

--[server/Farming/BuildingObjects/ISFarmingCursorMouse.d.ts]
  Exports.ISFarmingCursorMouse = loadstring("return _G['ISFarmingCursorMouse']")()

--[client/Farming/CFarmingSystem.d.ts]
  Exports.CFarmingSystem = loadstring("return _G['CFarmingSystem']")()

--[client/Farming/CPlantGlobalObject.d.ts]
  Exports.CPlantGlobalObject = loadstring("return _G['CPlantGlobalObject']")()

--[server/Farming/farming_vegetableconf.d.ts]
  Exports.farming_vegetableconf = loadstring("return _G['farming_vegetableconf']")()

--[client/Farming/ISUI/ISFarmingInfo.d.ts]
  Exports.ISFarmingInfo = loadstring("return _G['ISFarmingInfo']")()
  Exports.disease = loadstring("return _G['disease']")()
  Exports.disease_rgb = loadstring("return _G['disease_rgb']")()
  Exports.fertilizer_rgb = loadstring("return _G['fertilizer_rgb']")()
  Exports.health_rgb = loadstring("return _G['health_rgb']")()
  Exports.nowateredsince_rgb = loadstring("return _G['nowateredsince_rgb']")()
  Exports.title_rgb = loadstring("return _G['title_rgb']")()
  Exports.water_rgb = loadstring("return _G['water_rgb']")()
  Exports.waterbar_rgb = loadstring("return _G['waterbar_rgb']")()

--[client/Farming/ISUI/ISFarmingMenu.d.ts]
  Exports.ISFarmingMenu = loadstring("return _G['ISFarmingMenu']")()

--[client/Farming/ISUI/ISFarmingWindow.d.ts]
  Exports.ISFarmingWindow = loadstring("return _G['ISFarmingWindow']")()

--[server/Farming/ScavengeDefinition.d.ts]
  Exports.scavenges = loadstring("return _G['scavenges']")()

--[server/Farming/SFarmingSystem.d.ts]
  Exports.SFarmingSystem = loadstring("return _G['SFarmingSystem']")()

--[server/Farming/SPlantGlobalObject.d.ts]
  Exports.SPlantGlobalObject = loadstring("return _G['SPlantGlobalObject']")()

--[client/Farming/TimedActions/ISCureFliesAction.d.ts]
  Exports.ISCureFliesAction = loadstring("return _G['ISCureFliesAction']")()

--[client/Farming/TimedActions/ISCureMildewAction.d.ts]
  Exports.ISCureMildewAction = loadstring("return _G['ISCureMildewAction']")()

--[client/Farming/TimedActions/ISFertilizeAction.d.ts]
  Exports.ISFertilizeAction = loadstring("return _G['ISFertilizeAction']")()

--[client/Farming/TimedActions/ISHarvestPlantAction.d.ts]
  Exports.ISHarvestPlantAction = loadstring("return _G['ISHarvestPlantAction']")()

--[client/Farming/TimedActions/ISPlantInfoAction.d.ts]
  Exports.ISPlantInfoAction = loadstring("return _G['ISPlantInfoAction']")()

--[client/Farming/TimedActions/ISPlowAction.d.ts]
  Exports.ISPlowAction = loadstring("return _G['ISPlowAction']")()

--[client/Farming/TimedActions/ISSeedAction.d.ts]
  Exports.ISSeedAction = loadstring("return _G['ISSeedAction']")()

--[client/Farming/TimedActions/ISShovelAction.d.ts]
  Exports.ISShovelAction = loadstring("return _G['ISShovelAction']")()

--[client/Farming/TimedActions/ISWaterPlantAction.d.ts]
  Exports.ISWaterPlantAction = loadstring("return _G['ISWaterPlantAction']")()

--[server/FireFighting/FireFighting.d.ts]
  Exports.FireFighting = loadstring("return _G['FireFighting']")()

--[server/FireFighting/ISExtinguishCursor.d.ts]
  Exports.ISExtinguishCursor = loadstring("return _G['ISExtinguishCursor']")()

--[server/Fishing/BuildingObjects/FishingNet.d.ts]
  Exports.fishingNet = loadstring("return _G['fishingNet']")()

--[client/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
  Exports.ISCheckFishingNetAction = loadstring("return _G['ISCheckFishingNetAction']")()

--[client/Fishing/TimedActions/ISFishingAction.d.ts]
  Exports.ISFishingAction = loadstring("return _G['ISFishingAction']")()

--[client/Foraging/forageClient.d.ts]
  Exports.forageClient = loadstring("return _G['forageClient']")()
  Exports.forageData = loadstring("return _G['forageData']")()

--[shared/Foraging/forageDefinitions.d.ts]
  Exports.forageCategories = loadstring("return _G['forageCategories']")()
  Exports.forageDefaultDefs = loadstring("return _G['forageDefaultDefs']")()
  Exports.forageDefs = loadstring("return _G['forageDefs']")()
  Exports.forageSkills = loadstring("return _G['forageSkills']")()
  Exports.forageZones = loadstring("return _G['forageZones']")()
  Exports.scavenges = loadstring("return _G['scavenges']")()

--[shared/Foraging/forageSystem.d.ts]
  Exports.forageSystem = loadstring("return _G['forageSystem']")()

--[client/Foraging/ISBaseIcon.d.ts]
  Exports.ISBaseIcon = loadstring("return _G['ISBaseIcon']")()

--[client/Foraging/ISForageAction.d.ts]
  Exports.ISForageAction = loadstring("return _G['ISForageAction']")()

--[client/Foraging/ISForageIcon.d.ts]
  Exports.ISForageIcon = loadstring("return _G['ISForageIcon']")()

--[client/Foraging/ISSearchManager.d.ts]
  Exports.ISSearchManager = loadstring("return _G['ISSearchManager']")()

--[client/Foraging/ISSearchWindow.d.ts]
  Exports.ISSearchWindow = loadstring("return _G['ISSearchWindow']")()

--[client/Foraging/ISWorldItemIcon.d.ts]
  Exports.ISWorldItemIcon = loadstring("return _G['ISWorldItemIcon']")()

--[client/Foraging/ISZoneDisplay.d.ts]
  Exports.ISZoneDisplay = loadstring("return _G['ISZoneDisplay']")()

--[server/HealthSystem/HealthUpdate.d.ts]
  Exports.healthUpdate = loadstring("return _G['healthUpdate']")()

--[client/Hotbar/ISHotbar.d.ts]
  Exports.ISHotbar = loadstring("return _G['ISHotbar']")()

--[shared/ISBaseObject.d.ts]
  Exports.ISBaseObject = loadstring("return _G['ISBaseObject']")()

--[server/ISBuildingBlueprintManager.d.ts]
  Exports.ISBuildingBlueprintManager = loadstring("return _G['ISBuildingBlueprintManager']")()

--[server/ISCoordConversion.d.ts]
  Exports.ISCoordConversion = loadstring("return _G['ISCoordConversion']")()

--[server/ISObjectClickHandler.d.ts]
  Exports.ISObjectClickHandler = loadstring("return _G['ISObjectClickHandler']")()

--[client/ISUI/AdminPanel/ISAddNonPvpZoneUI.d.ts]
  Exports.ISAddNonPvpZoneUI = loadstring("return _G['ISAddNonPvpZoneUI']")()

--[client/ISUI/AdminPanel/ISAddSafeZoneUI.d.ts]
  Exports.ISAddSafeZoneUI = loadstring("return _G['ISAddSafeZoneUI']")()

--[client/ISUI/AdminPanel/ISAdminMessage.d.ts]
  Exports.ISAdminMessage = loadstring("return _G['ISAdminMessage']")()

--[client/ISUI/AdminPanel/ISAdminPanelUI.d.ts]
  Exports.ISAdminPanelUI = loadstring("return _G['ISAdminPanelUI']")()

--[client/ISUI/AdminPanel/ISAdminPowerUI.d.ts]
  Exports.ISAdminPowerUI = loadstring("return _G['ISAdminPowerUI']")()

--[client/ISUI/AdminPanel/ISAdminTicketsUI.d.ts]
  Exports.ISAdminTicketsUI = loadstring("return _G['ISAdminTicketsUI']")()

--[client/ISUI/AdminPanel/ISAdminWeather.d.ts]
  Exports.ISAdminWeather = loadstring("return _G['ISAdminWeather']")()

--[client/ISUI/AdminPanel/ISAdmPanelClimate.d.ts]
  Exports.ISAdmPanelClimate = loadstring("return _G['ISAdmPanelClimate']")()

--[client/ISUI/AdminPanel/ISAdmPanelWeather.d.ts]
  Exports.ISAdmPanelWeather = loadstring("return _G['ISAdmPanelWeather']")()

--[client/ISUI/AdminPanel/ISFactionsList.d.ts]
  Exports.ISFactionsList = loadstring("return _G['ISFactionsList']")()

--[client/ISUI/AdminPanel/ISItemEditorUI.d.ts]
  Exports.ISItemEditorUI = loadstring("return _G['ISItemEditorUI']")()

--[client/ISUI/AdminPanel/ISItemsListTable.d.ts]
  Exports.ISItemsListTable = loadstring("return _G['ISItemsListTable']")()

--[client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
  Exports.ISItemsListViewer = loadstring("return _G['ISItemsListViewer']")()

--[client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
  Exports.ISMiniScoreboardUI = loadstring("return _G['ISMiniScoreboardUI']")()

--[client/ISUI/AdminPanel/ISPacketCounts.d.ts]
  Exports.ISPacketCounts = loadstring("return _G['ISPacketCounts']")()
  Exports.ISPacketCountsList = loadstring("return _G['ISPacketCountsList']")()

--[client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
  Exports.ISPvpZonePanel = loadstring("return _G['ISPvpZonePanel']")()

--[client/ISUI/AdminPanel/ISSafehousesList.d.ts]
  Exports.ISSafehousesList = loadstring("return _G['ISSafehousesList']")()

--[client/ISUI/AdminPanel/ISServerOptions.d.ts]
  Exports.ISServerOptions = loadstring("return _G['ISServerOptions']")()

--[client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
  Exports.ISServerOptionsChange = loadstring("return _G['ISServerOptionsChange']")()

--[client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
  Exports.ISServerSandboxOptionsUI = loadstring("return _G['ISServerSandboxOptionsUI']")()

--[client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
  Exports.ISStatisticsUI = loadstring("return _G['ISStatisticsUI']")()

--[client/ISUI/AdminPanel/ISWhitelistModifyRow.d.ts]
  Exports.ISWhitelistModifyRow = loadstring("return _G['ISWhitelistModifyRow']")()

--[client/ISUI/AdminPanel/ISWhitelistTable.d.ts]
  Exports.ISWhitelistTable = loadstring("return _G['ISWhitelistTable']")()

--[client/ISUI/AdminPanel/ISWhitelistViewer.d.ts]
  Exports.ISWhitelistViewer = loadstring("return _G['ISWhitelistViewer']")()

--[client/ISUI/AdminPanel/LootZed/ISLootZed.d.ts]
  Exports.ISLootZed = loadstring("return _G['ISLootZed']")()

--[client/ISUI/AdminPanel/LootZed/SpawnRateChecker.d.ts]
  Exports.LootZedTool = loadstring("return _G['LootZedTool']")()

--[client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
  Exports.ISBodyPartPanel = loadstring("return _G['ISBodyPartPanel']")()

--[client/ISUI/Fireplace/ISKnob.d.ts]
  Exports.ISKnob = loadstring("return _G['ISKnob']")()

--[client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
  Exports.ISMicrowaveUI = loadstring("return _G['ISMicrowaveUI']")()

--[client/ISUI/Fireplace/ISOvenUI.d.ts]
  Exports.ISOvenUI = loadstring("return _G['ISOvenUI']")()

--[client/ISUI/FPS.d.ts]
  Exports.ISFPS = loadstring("return _G['ISFPS']")()

--[client/ISUI/InterpolationPeriodDebug.d.ts]
  Exports.InterpolationPeriodDebug = loadstring("return _G['InterpolationPeriodDebug']")()

--[client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
  Exports.InterpolationPlayerPeriodDebug = loadstring("return _G['InterpolationPlayerPeriodDebug']")()

--[client/ISUI/ISAlarmClockDialog.d.ts]
  Exports.ISAlarmClockDialog = loadstring("return _G['ISAlarmClockDialog']")()

--[client/ISUI/ISBackButtonWheel.d.ts]
  Exports.ISBackButtonWheel = loadstring("return _G['ISBackButtonWheel']")()

--[client/ISUI/ISBBQInfoWindow.d.ts]
  Exports.ISBBQInfoWindow = loadstring("return _G['ISBBQInfoWindow']")()

--[client/ISUI/ISBBQMenu.d.ts]
  Exports.ISBBQMenu = loadstring("return _G['ISBBQMenu']")()

--[client/ISUI/ISBombTimerDialog.d.ts]
  Exports.ISBombTimerDialog = loadstring("return _G['ISBombTimerDialog']")()

--[client/ISUI/ISButton.d.ts]
  Exports.ISButton = loadstring("return _G['ISButton']")()

--[client/ISUI/ISButtonPrompt.d.ts]
  Exports.ISButtonPrompt = loadstring("return _G['ISButtonPrompt']")()

--[client/ISUI/ISCollapsableModalRichText.d.ts]
  Exports.ISCollapsableModalRichText = loadstring("return _G['ISCollapsableModalRichText']")()

--[client/ISUI/ISCollapsableWindow.d.ts]
  Exports.ISCollapsableWindow = loadstring("return _G['ISCollapsableWindow']")()

--[client/ISUI/ISCollapsableWindowJoypad.d.ts]
  Exports.ISCollapsableWindowJoypad = loadstring("return _G['ISCollapsableWindowJoypad']")()

--[client/ISUI/ISColorPicker.d.ts]
  Exports.ISColorPicker = loadstring("return _G['ISColorPicker']")()

--[client/ISUI/ISComboBox.d.ts]
  Exports.ISComboBox = loadstring("return _G['ISComboBox']")()
  Exports.ISComboBoxEditor = loadstring("return _G['ISComboBoxEditor']")()
  Exports.ISComboBoxPopup = loadstring("return _G['ISComboBoxPopup']")()

--[client/ISUI/ISConfirmMonitorSettingsDialog.d.ts]
  Exports.ISConfirmMonitorSettingsDialog = loadstring("return _G['ISConfirmMonitorSettingsDialog']")()

--[client/ISUI/ISContextMenu.d.ts]
  Exports.ISContextMenu = loadstring("return _G['ISContextMenu']")()

--[client/ISUI/ISControllerTestPanel.d.ts]
  Exports.ISControllerTestPanel = loadstring("return _G['ISControllerTestPanel']")()

--[client/ISUI/ISCraftingCategoryUI.d.ts]
  Exports.ISCraftingCategoryUI = loadstring("return _G['ISCraftingCategoryUI']")()

--[client/ISUI/ISCraftingUI.d.ts]
  Exports.ISCraftingUI = loadstring("return _G['ISCraftingUI']")()

--[client/ISUI/ISDemoPopup.d.ts]
  Exports.ISDemoPopup = loadstring("return _G['ISDemoPopup']")()

--[client/ISUI/ISDigitalCode.d.ts]
  Exports.ISDigitalCode = loadstring("return _G['ISDigitalCode']")()

--[client/ISUI/ISDPadWheels.d.ts]
  Exports.ISDPadWheels = loadstring("return _G['ISDPadWheels']")()

--[client/ISUI/ISDuplicateKeybindDialog.d.ts]
  Exports.ISDuplicateKeybindDialog = loadstring("return _G['ISDuplicateKeybindDialog']")()

--[client/ISUI/ISEmoteRadialMenu.d.ts]
  Exports.ISEmoteRadialMenu = loadstring("return _G['ISEmoteRadialMenu']")()

--[client/ISUI/ISEquippedItem.d.ts]
  Exports.ISEquippedItem = loadstring("return _G['ISEquippedItem']")()
  Exports.ISMapPopup = loadstring("return _G['ISMapPopup']")()
  Exports.ISMoveablesIconPopup = loadstring("return _G['ISMoveablesIconPopup']")()

--[client/ISUI/ISFirearmRadialMenu.d.ts]
  Exports.ISFirearmRadialMenu = loadstring("return _G['ISFirearmRadialMenu']")()

--[client/ISUI/ISFireplaceInfoWindow.d.ts]
  Exports.ISFireplaceInfoWindow = loadstring("return _G['ISFireplaceInfoWindow']")()

--[client/ISUI/ISFireplaceMenu.d.ts]
  Exports.ISFireplaceMenu = loadstring("return _G['ISFireplaceMenu']")()

--[client/ISUI/ISFishingUI.d.ts]
  Exports.ISFishingUI = loadstring("return _G['ISFishingUI']")()

--[client/ISUI/ISFitnessUI.d.ts]
  Exports.ISFitnessUI = loadstring("return _G['ISFitnessUI']")()

--[client/ISUI/ISGameLoadingUI.d.ts]
  Exports.ISGameLoadingUI = loadstring("return _G['ISGameLoadingUI']")()

--[client/ISUI/ISGameSoundVolumeControl.d.ts]
  Exports.ISGameSoundVolumeControl = loadstring("return _G['ISGameSoundVolumeControl']")()

--[client/ISUI/ISGarmentUI.d.ts]
  Exports.ISGarmentUI = loadstring("return _G['ISGarmentUI']")()

--[client/ISUI/ISGeneratorInfoWindow.d.ts]
  Exports.ISGeneratorInfoWindow = loadstring("return _G['ISGeneratorInfoWindow']")()

--[client/ISUI/ISGradientBar.d.ts]
  Exports.ISGradientBar = loadstring("return _G['ISGradientBar']")()

--[client/ISUI/ISImage.d.ts]
  Exports.ISImage = loadstring("return _G['ISImage']")()

--[client/ISUI/ISInfoContainer.d.ts]
  Exports.ISInfoContainer = loadstring("return _G['ISInfoContainer']")()

--[client/ISUI/ISInventoryPage.d.ts]
  Exports.ISInventoryPage = loadstring("return _G['ISInventoryPage']")()

--[client/ISUI/ISInventoryPane.d.ts]
  Exports.ISInventoryPane = loadstring("return _G['ISInventoryPane']")()
  Exports.ISInventoryPaneDraggedItems = loadstring("return _G['ISInventoryPaneDraggedItems']")()

--[client/ISUI/ISInventoryPaneContextMenu.d.ts]
  Exports.ISInventoryPaneContextMenu = loadstring("return _G['ISInventoryPaneContextMenu']")()

--[client/ISUI/ISJoystickButtonRadialMenu.d.ts]
  Exports.ISJoystickButtonRadialMenu = loadstring("return _G['ISJoystickButtonRadialMenu']")()

--[client/ISUI/ISLabel.d.ts]
  Exports.ISLabel = loadstring("return _G['ISLabel']")()

--[client/ISUI/ISLayoutManager.d.ts]
  Exports.ISLayoutManager = loadstring("return _G['ISLayoutManager']")()

--[client/ISUI/ISLcdBar.d.ts]
  Exports.ISLcdBar = loadstring("return _G['ISLcdBar']")()

--[client/ISUI/ISLightSourceRadialMenu.d.ts]
  Exports.ISLightSourceRadialMenu = loadstring("return _G['ISLightSourceRadialMenu']")()

--[client/ISUI/ISLiteratureUI.d.ts]
  Exports.ISLiteratureList = loadstring("return _G['ISLiteratureList']")()
  Exports.ISLiteratureMediaList = loadstring("return _G['ISLiteratureMediaList']")()
  Exports.ISLiteratureUI = loadstring("return _G['ISLiteratureUI']")()

--[client/ISUI/ISMakeUpUI.d.ts]
  Exports.ISMakeUpUI = loadstring("return _G['ISMakeUpUI']")()

--[client/ISUI/ISMegaVolumeControl.d.ts]
  Exports.ISMegaVolumeControl = loadstring("return _G['ISMegaVolumeControl']")()

--[client/ISUI/ISModalDialog.d.ts]
  Exports.ISModalDialog = loadstring("return _G['ISModalDialog']")()

--[client/ISUI/ISModalRichText.d.ts]
  Exports.ISModalRichText = loadstring("return _G['ISModalRichText']")()

--[client/ISUI/ISMouseDrag.d.ts]
  Exports.ISMouseDrag = loadstring("return _G['ISMouseDrag']")()

--[client/ISUI/ISMoveableInfoWindow.d.ts]
  Exports.ISMoveableInfoWindow = loadstring("return _G['ISMoveableInfoWindow']")()

--[client/ISUI/ISNewsUpdate.d.ts]
  Exports.ISNewsUpdate = loadstring("return _G['ISNewsUpdate']")()

--[client/ISUI/ISOnScreenKeyboard.d.ts]
  Exports.ISOnScreenKeyboard = loadstring("return _G['ISOnScreenKeyboard']")()
  Exports.OnScreenKeyboardEntry = loadstring("return _G['OnScreenKeyboardEntry']")()
  Exports.OnScreenKeyboardPanel = loadstring("return _G['OnScreenKeyboardPanel']")()
  Exports.OnScreenKeyboard = loadstring("return _G['OnScreenKeyboard']")()

--[client/ISUI/ISOptionPanel.d.ts]
  Exports.ISOptionPanel = loadstring("return _G['ISOptionPanel']")()

--[client/ISUI/ISPanel.d.ts]
  Exports.ISPanel = loadstring("return _G['ISPanel']")()

--[client/ISUI/ISPanelJoypad.d.ts]
  Exports.ISPanelJoypad = loadstring("return _G['ISPanelJoypad']")()

--[client/ISUI/ISPostDeathUI.d.ts]
  Exports.ISPostDeathUI = loadstring("return _G['ISPostDeathUI']")()

--[client/ISUI/ISRadialMenu.d.ts]
  Exports.ISRadialMenu = loadstring("return _G['ISRadialMenu']")()

--[client/ISUI/ISRadialProgressBar.d.ts]
  Exports.ISRadialProgressBar = loadstring("return _G['ISRadialProgressBar']")()

--[client/ISUI/ISRadioButtons.d.ts]
  Exports.ISRadioButtons = loadstring("return _G['ISRadioButtons']")()

--[client/ISUI/ISRadioOption.d.ts]
  Exports.ISRadioOption = loadstring("return _G['ISRadioOption']")()

--[client/ISUI/ISRainPanel.d.ts]
  Exports.ISRainPanel = loadstring("return _G['ISRainPanel']")()

--[client/ISUI/ISRect.d.ts]
  Exports.ISRect = loadstring("return _G['ISRect']")()

--[client/ISUI/ISResizeableButton.d.ts]
  Exports.ISResizableButton = loadstring("return _G['ISResizableButton']")()

--[client/ISUI/ISResizeWidget.d.ts]
  Exports.ISResizeWidget = loadstring("return _G['ISResizeWidget']")()

--[client/ISUI/ISRichTextBox.d.ts]
  Exports.ISRichTextBox = loadstring("return _G['ISRichTextBox']")()

--[client/ISUI/ISRichTextPanel.d.ts]
  Exports.ISRichTextPanel = loadstring("return _G['ISRichTextPanel']")()

--[client/ISUI/ISSafetyUI.d.ts]
  Exports.ISSafetyUI = loadstring("return _G['ISSafetyUI']")()

--[client/ISUI/ISScavengeUI.d.ts]
  Exports.ISScavengeUI = loadstring("return _G['ISScavengeUI']")()

--[client/ISUI/ISScrollBar.d.ts]
  Exports.ISScrollBar = loadstring("return _G['ISScrollBar']")()

--[client/ISUI/ISScrollingListBox.d.ts]
  Exports.ISScrollingListBox = loadstring("return _G['ISScrollingListBox']")()

--[client/ISUI/ISServerDisconnectUI.d.ts]
  Exports.ISServerDisconnectUI = loadstring("return _G['ISServerDisconnectUI']")()

--[client/ISUI/ISServerSavingMessage.d.ts]
  Exports.ISServerSavingMessage = loadstring("return _G['ISServerSavingMessage']")()

--[client/ISUI/ISSetKeybindDialog.d.ts]
  Exports.ISSetKeybindDialog = loadstring("return _G['ISSetKeybindDialog']")()

--[client/ISUI/ISSleepDialog.d.ts]
  Exports.ISSleepDialog = loadstring("return _G['ISSleepDialog']")()

--[client/ISUI/ISSpinBox.d.ts]
  Exports.ISSpinBox = loadstring("return _G['ISSpinBox']")()

--[client/ISUI/ISTabPanel.d.ts]
  Exports.ISTabPanel = loadstring("return _G['ISTabPanel']")()

--[client/ISUI/ISTextBox.d.ts]
  Exports.ISTextBox = loadstring("return _G['ISTextBox']")()

--[client/ISUI/ISTextEntryBox.d.ts]
  Exports.ISTextEntryBox = loadstring("return _G['ISTextEntryBox']")()

--[client/ISUI/ISTickBox.d.ts]
  Exports.ISTickBox = loadstring("return _G['ISTickBox']")()

--[client/ISUI/ISToolTip.d.ts]
  Exports.ISToolTip = loadstring("return _G['ISToolTip']")()

--[client/ISUI/ISToolTipInv.d.ts]
  Exports.ISToolTipInv = loadstring("return _G['ISToolTipInv']")()

--[client/ISUI/ISTradingUI.d.ts]
  Exports.ISTradingUI = loadstring("return _G['ISTradingUI']")()

--[client/ISUI/ISTradingUIHistorial.d.ts]
  Exports.ISTradingUIHistorical = loadstring("return _G['ISTradingUIHistorical']")()

--[client/ISUI/ISUI3DModel.d.ts]
  Exports.ISUI3DModel = loadstring("return _G['ISUI3DModel']")()

--[client/ISUI/ISUIElement.d.ts]
  Exports.ISUIElement = ISUIElement

--[client/ISUI/ISUIEmoteConfig.d.ts]
  Exports.ISUIEmoteConfig = loadstring("return _G['ISUIEmoteConfig']")()

--[client/ISUI/ISUIHandler.d.ts]
  Exports.ISUIHandler = loadstring("return _G['ISUIHandler']")()

--[client/ISUI/ISUIWriteJournal.d.ts]
  Exports.ISUIWriteJournal = loadstring("return _G['ISUIWriteJournal']")()

--[client/ISUI/ISVehicleConfirmBox.d.ts]
  Exports.ISVehicleConfirmBox = loadstring("return _G['ISVehicleConfirmBox']")()
  Exports.ISVehiclePartListBox = loadstring("return _G['ISVehiclePartListBox']")()

--[client/ISUI/ISVolumeControl.d.ts]
  Exports.ISVolumeControl = loadstring("return _G['ISVolumeControl']")()

--[client/ISUI/ISVolumeIndicator.d.ts]
  Exports.ISVolumeIndicator = loadstring("return _G['ISVolumeIndicator']")()

--[client/ISUI/ISWindow.d.ts]
  Exports.ISWindow = loadstring("return _G['ISWindow']")()

--[client/ISUI/ISWorldObjectContextMenu.d.ts]
  Exports.ISWorldObjectContextMenu = loadstring("return _G['ISWorldObjectContextMenu']")()

--[client/ISUI/Maps/Editor/WorldMapEditor.d.ts]
  Exports.WorldMapEditor = loadstring("return _G['WorldMapEditor']")()

--[client/ISUI/Maps/Editor/WorldMapEditorListBox.d.ts]
  Exports.WorldMapEditorListBox = loadstring("return _G['WorldMapEditorListBox']")()

--[client/ISUI/Maps/Editor/WorldMapEditorLocationControl.d.ts]
  Exports.WorldMapEditorLocationControl = loadstring("return _G['WorldMapEditorLocationControl']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode.d.ts]
  Exports.WorldMapEditorMode = loadstring("return _G['WorldMapEditorMode']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations.d.ts]
  Exports.WorldMapEditorMode_Annotations = loadstring("return _G['WorldMapEditorMode_Annotations']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds.d.ts]
  Exports.WorldMapEditorMode_Bounds = loadstring("return _G['WorldMapEditorMode_Bounds']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles.d.ts]
  Exports.WorldMapEditorMode_DataFiles = loadstring("return _G['WorldMapEditorMode_DataFiles']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode_Maps.d.ts]
  Exports.WorldMapEditorMode_Maps = loadstring("return _G['WorldMapEditorMode_Maps']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes.d.ts]
  Exports.WorldMapEditorMode_Stashes = loadstring("return _G['WorldMapEditorMode_Stashes']")()

--[client/ISUI/Maps/Editor/WorldMapEditorMode_Style.d.ts]
  Exports.WorldMapEditorMode_Style = loadstring("return _G['WorldMapEditorMode_Style']")()
  Exports.WorldMapStyleEditor = loadstring("return _G['WorldMapStyleEditor']")()
  Exports.WorldMapStyleEditor_ColorStopsPanel = loadstring("return _G['WorldMapStyleEditor_ColorStopsPanel']")()
  Exports.WorldMapStyleEditor_FilterPanel = loadstring("return _G['WorldMapStyleEditor_FilterPanel']")()
  Exports.WorldMapStyleEditor_PolygonLayerPanel = loadstring("return _G['WorldMapStyleEditor_PolygonLayerPanel']")()
  Exports.WorldMapStyleEditor_TabPanel = loadstring("return _G['WorldMapStyleEditor_TabPanel']")()
  Exports.WorldMapStyleEditor_TextureLayerPanel = loadstring("return _G['WorldMapStyleEditor_TextureLayerPanel']")()
  Exports.WorldMapStyleEditor_TexturePanel = loadstring("return _G['WorldMapStyleEditor_TexturePanel']")()
  Exports.WorldMapStyleEditor_TextureStopsPanel = loadstring("return _G['WorldMapStyleEditor_TextureStopsPanel']")()

--[client/ISUI/Maps/Editor/WorldMapEditorResizer.d.ts]
  Exports.WorldMapEditorResizer = loadstring("return _G['WorldMapEditorResizer']")()

--[client/ISUI/Maps/ISMap.d.ts]
  Exports.ISMap = loadstring("return _G['ISMap']")()
  Exports.ISMapWrapper = loadstring("return _G['ISMapWrapper']")()

--[client/ISUI/Maps/ISMapDefinitions.d.ts]
  Exports.LootMaps = loadstring("return _G['LootMaps']")()
  Exports.MapUtils = loadstring("return _G['MapUtils']")()

--[client/ISUI/Maps/ISMiniMap.d.ts]
  Exports.ISMiniMapInner = loadstring("return _G['ISMiniMapInner']")()
  Exports.ISMiniMapOuter = loadstring("return _G['ISMiniMapOuter']")()
  Exports.ISMiniMapTitleBar = loadstring("return _G['ISMiniMapTitleBar']")()
  Exports.ISMiniMap = loadstring("return _G['ISMiniMap']")()

--[client/ISUI/Maps/ISTextBoxMap.d.ts]
  Exports.ISTextBoxMap = loadstring("return _G['ISTextBoxMap']")()

--[client/ISUI/Maps/ISWorldMap.d.ts]
  Exports.ISWorldMap = loadstring("return _G['ISWorldMap']")()
  Exports.ISWorldMapButtonPanel = loadstring("return _G['ISWorldMapButtonPanel']")()
  Exports.WorldMapOptions = loadstring("return _G['WorldMapOptions']")()

--[client/ISUI/Maps/ISWorldMapSymbols.d.ts]
  Exports.ISWorldMapSymbols = loadstring("return _G['ISWorldMapSymbols']")()
  Exports.ISWorldMapSymbolTool = loadstring("return _G['ISWorldMapSymbolTool']")()
  Exports.ISWorldMapSymbolTool_AddNote = loadstring("return _G['ISWorldMapSymbolTool_AddNote']")()
  Exports.ISWorldMapSymbolTool_AddSymbol = loadstring("return _G['ISWorldMapSymbolTool_AddSymbol']")()
  Exports.ISWorldMapSymbolTool_EditNote = loadstring("return _G['ISWorldMapSymbolTool_EditNote']")()
  Exports.ISWorldMapSymbolTool_MoveAnnotation = loadstring("return _G['ISWorldMapSymbolTool_MoveAnnotation']")()
  Exports.ISWorldMapSymbolTool_RemoveAnnotation = loadstring("return _G['ISWorldMapSymbolTool_RemoveAnnotation']")()

--[client/ISUI/PlayerData/ISPlayerData.d.ts]
  Exports.ISPlayerData = loadstring("return _G['ISPlayerData']")()

--[client/ISUI/PlayerData/ISPlayerDataObject.d.ts]
  Exports.ISPlayerDataObject = loadstring("return _G['ISPlayerDataObject']")()

--[client/ISUI/PlayerStats/ISPlayerStatsAddXPUI.d.ts]
  Exports.ISPlayerStatsAddXPUI = loadstring("return _G['ISPlayerStatsAddXPUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel.d.ts]
  Exports.ISPlayerStatsChooseAccessLevelUI = loadstring("return _G['ISPlayerStatsChooseAccessLevelUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI.d.ts]
  Exports.ISPlayerStatsChooseProfessionUI = loadstring("return _G['ISPlayerStatsChooseProfessionUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI.d.ts]
  Exports.ISPlayerStatsChooseTraitUI = loadstring("return _G['ISPlayerStatsChooseTraitUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsManageInvUI.d.ts]
  Exports.ISPlayerStatsManageInvUI = loadstring("return _G['ISPlayerStatsManageInvUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
  Exports.ISPlayerStatsUI = loadstring("return _G['ISPlayerStatsUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
  Exports.ISPlayerStatsUserlogUI = loadstring("return _G['ISPlayerStatsUserlogUI']")()

--[client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
  Exports.ISPlayerStatsWarningPointUI = loadstring("return _G['ISPlayerStatsWarningPointUI']")()

--[client/ISUI/RichTextLayout.d.ts]
  Exports.ISRichTextLayout = loadstring("return _G['ISRichTextLayout']")()

--[client/ISUI/SpeedControlsHandler.d.ts]
  Exports.SpeedControlsHandler = loadstring("return _G['SpeedControlsHandler']")()

--[client/ISUI/UserPanel/ISCreateFactionTagUI.d.ts]
  Exports.ISCreateFactionTagUI = loadstring("return _G['ISCreateFactionTagUI']")()

--[client/ISUI/UserPanel/ISCreateFactionUI.d.ts]
  Exports.ISCreateFactionUI = loadstring("return _G['ISCreateFactionUI']")()

--[client/ISUI/UserPanel/ISFactionAddPlayerUI.d.ts]
  Exports.ISFactionAddPlayerUI = loadstring("return _G['ISFactionAddPlayerUI']")()

--[client/ISUI/UserPanel/ISFactionUI.d.ts]
  Exports.ISFactionUI = loadstring("return _G['ISFactionUI']")()

--[client/ISUI/UserPanel/ISSafehouseAddPlayerUI.d.ts]
  Exports.ISSafehouseAddPlayerUI = loadstring("return _G['ISSafehouseAddPlayerUI']")()

--[client/ISUI/UserPanel/ISSafehouseUI.d.ts]
  Exports.ISSafehouseUI = loadstring("return _G['ISSafehouseUI']")()

--[client/ISUI/UserPanel/ISTicketsUI.d.ts]
  Exports.ISTicketsUI = loadstring("return _G['ISTicketsUI']")()

--[client/ISUI/UserPanel/ISUserPanelUI.d.ts]
  Exports.ISUserPanelUI = loadstring("return _G['ISUserPanelUI']")()

--[client/ISUI/ZombiePopulationWindow.d.ts]
  Exports.ZombiePopulationWindow = loadstring("return _G['ZombiePopulationWindow']")()

--[server/Items/AcceptItemFunction.d.ts]
  Exports.AcceptItemFunction = loadstring("return _G['AcceptItemFunction']")()

--[server/Items/BrokenFences.d.ts]
  Exports.debris = loadstring("return _G['debris']")()

--[server/Items/ItemBindingHandler.d.ts]
  Exports.ItemBindingHandler = loadstring("return _G['ItemBindingHandler']")()

--[server/Items/ProceduralDistributions.d.ts]
  Exports.ProceduralDistributions = loadstring("return _G['ProceduralDistributions']")()

--[server/Items/ScriptItemInterface.d.ts]
  Exports.ScriptItemInterface = loadstring("return _G['ScriptItemInterface']")()

--[server/Items/SuburbsDistributions.d.ts]
  Exports.NoContainerFillRooms = loadstring("return _G['NoContainerFillRooms']")()
  Exports.WeaponUpgrades = loadstring("return _G['WeaponUpgrades']")()

--[shared/iwbumstempmodelcompat.d.ts]

--[client/JoyPad/ISJoypadDebugUI.d.ts]
  Exports.ISJoypadDebugUI = loadstring("return _G['ISJoypadDebugUI']")()

--[client/JoyPad/ISJoypadDisconnectedUI.d.ts]
  Exports.ISJoypadDisconnectedUI = loadstring("return _G['ISJoypadDisconnectedUI']")()

--[client/JoyPad/ISJoyPadListBox.d.ts]
  Exports.ISJoypadListBox = loadstring("return _G['ISJoypadListBox']")()

--[shared/JoyPad/JoyPadSetup.d.ts]
  Exports.JoypadControllerData = loadstring("return _G['JoypadControllerData']")()
  Exports.JoypadData = loadstring("return _G['JoypadData']")()
  Exports.joypad = loadstring("return _G['joypad']")()
  Exports.Joypad = loadstring("return _G['Joypad']")()
  Exports.JoypadState = loadstring("return _G['JoypadState']")()

--[shared/keyBinding.d.ts]
  Exports.keyBinding = loadstring("return _G['keyBinding']")()

--[client/LastStand/AReallyCDDAy.d.ts]
  Exports.CDDA = loadstring("return _G['CDDA']")()

--[client/LastStand/AStormIsComing.d.ts]
  Exports.AStormIsComing = loadstring("return _G['AStormIsComing']")()

--[client/LastStand/Challenge1.d.ts]
  Exports.Challenge1 = loadstring("return _G['Challenge1']")()

--[client/LastStand/Challenge2.d.ts]
  Exports.Challenge2 = loadstring("return _G['Challenge2']")()

--[client/LastStand/EightMonthsLater.d.ts]
  Exports.EightMonthsLater = loadstring("return _G['EightMonthsLater']")()

--[client/LastStand/Insomnia.d.ts]
  Exports.InsomniaChallenge = loadstring("return _G['InsomniaChallenge']")()

--[client/LastStand/ISUI/ISChallenge2PlayerUpWindow.d.ts]
  Exports.ISChallenge2PlayerUpWindow = loadstring("return _G['ISChallenge2PlayerUpWindow']")()

--[client/LastStand/ISUI/ISChallenge2UpgradeTab.d.ts]
  Exports.ISChallenge2UpgradeTab = loadstring("return _G['ISChallenge2UpgradeTab']")()

--[client/LastStand/ISUI/ISChallenge2VariousItemWindow.d.ts]
  Exports.ISChallenge2VariousItemWindow = loadstring("return _G['ISChallenge2VariousItemWindow']")()

--[client/LastStand/ISUI/ISChallenge2WeaponRepairWindow.d.ts]
  Exports.ISChallenge2WeaponRepairWindow = loadstring("return _G['ISChallenge2WeaponRepairWindow']")()

--[client/LastStand/ISUI/ISChallenge2WeaponUpWindow.d.ts]
  Exports.ISChallenge2WeaponUpWindow = loadstring("return _G['ISChallenge2WeaponUpWindow']")()

--[client/LastStand/Kingsmouth.d.ts]
  Exports.Kingsmouth = loadstring("return _G['Kingsmouth']")()

--[client/LastStand/LastStandPlayerFile.d.ts]
  Exports.LastStandPlayerFile = loadstring("return _G['LastStandPlayerFile']")()

--[client/LastStand/LastStandSetup.d.ts]
  Exports.LastStandData = loadstring("return _G['LastStandData']")()

--[client/LastStand/OpeningHours.d.ts]
  Exports.OpeningHours = loadstring("return _G['OpeningHours']")()

--[client/LastStand/Studio.d.ts]
  Exports.Studio = loadstring("return _G['Studio']")()

--[client/LastStand/TheDescendingFog.d.ts]
  Exports.TheDescendingFog = loadstring("return _G['TheDescendingFog']")()

--[client/LastStand/WinterIsComing.d.ts]
  Exports.WinterIsComing = loadstring("return _G['WinterIsComing']")()

--[client/LastStand/YouHaveOneDay.d.ts]
  Exports.YouHaveOneDay = loadstring("return _G['YouHaveOneDay']")()

--[shared/Logs/ISLogSystem.d.ts]
  Exports.ISLogSystem = loadstring("return _G['ISLogSystem']")()

--[shared/Logs/ISPerkLog.d.ts]
  Exports.ISPerkLog = loadstring("return _G['ISPerkLog']")()

--[shared/luautils.d.ts]
  Exports.luautils = loadstring("return _G['luautils']")()

--[client/Map/CGlobalObject.d.ts]
  Exports.CGlobalObject = loadstring("return _G['CGlobalObject']")()

--[client/Map/CGlobalObjectSystem.d.ts]
  Exports.CGlobalObjectSystem = loadstring("return _G['CGlobalObjectSystem']")()

--[server/Map/MapObjects/MOFarming.d.ts]

--[server/Map/MetaEnum.d.ts]
  Exports.MetaObjectEnum = loadstring("return _G['MetaObjectEnum']")()

--[server/Map/SGlobalObject.d.ts]
  Exports.SGlobalObject = loadstring("return _G['SGlobalObject']")()

--[server/Map/SGlobalObjectSystem.d.ts]
  Exports.SGlobalObjectSystem = loadstring("return _G['SGlobalObjectSystem']")()

--[server/MetalDrum/BuildingObjects/ISMetalDrum.d.ts]
  Exports.ISMetalDrum = loadstring("return _G['ISMetalDrum']")()

--[client/MetalDrum/CMetalDrumGlobalObject.d.ts]
  Exports.CMetalDrumGlobalObject = loadstring("return _G['CMetalDrumGlobalObject']")()

--[client/MetalDrum/CMetalDrumSystem.d.ts]
  Exports.CMetalDrumSystem = loadstring("return _G['CMetalDrumSystem']")()

--[server/MetalDrum/SMetalDrumGlobalObject.d.ts]
  Exports.SMetalDrumGlobalObject = loadstring("return _G['SMetalDrumGlobalObject']")()

--[server/MetalDrum/SMetalDrumSystem.d.ts]
  Exports.SMetalDrumSystem = loadstring("return _G['SMetalDrumSystem']")()

--[server/metazones/metazoneHandler.d.ts]

--[client/Moveables/ISMoveableDefinitions.d.ts]
  Exports.ISMoveableDefinitions = loadstring("return _G['ISMoveableDefinitions']")()

--[client/Moveables/ISMoveablesAction.d.ts]
  Exports.ISMoveablesAction = loadstring("return _G['ISMoveablesAction']")()

--[client/Moveables/ISMoveablesIconToolTip.d.ts]
  Exports.ISMoveablesIconToolTip = loadstring("return _G['ISMoveablesIconToolTip']")()

--[client/Moveables/ISMoveableSpriteProps.d.ts]
  Exports.InfoPanelFlags = loadstring("return _G['InfoPanelFlags']")()
  Exports.ISMoveableSpriteProps = loadstring("return _G['ISMoveableSpriteProps']")()
  Exports.ISThumpableSpriteProps = loadstring("return _G['ISThumpableSpriteProps']")()
  Exports.SpriteGridCache = loadstring("return _G['SpriteGridCache']")()

--[client/Moveables/ISMoveableTools.d.ts]
  Exports.ISMoveableTools = loadstring("return _G['ISMoveableTools']")()

--[server/Movers/ISBaseMover.d.ts]
  Exports.ISBaseMover = loadstring("return _G['ISBaseMover']")()

--[server/Movers/MoverStateMachine.d.ts]
  Exports.ISMoverStateMachine = loadstring("return _G['ISMoverStateMachine']")()

--[server/Movers/MoverStates/ISBaseState.d.ts]
  Exports.ISBaseState = loadstring("return _G['ISBaseState']")()

--[server/Movers/MoverStates/MoveToState.d.ts]
  Exports.MoveToState = loadstring("return _G['MoveToState']")()

--[server/Movers/Rabbit.d.ts]
  Exports.Rabbit = loadstring("return _G['Rabbit']")()

--[client/Music/MusicChoices.d.ts]
  Exports.MusicChoices = loadstring("return _G['MusicChoices']")()

--[server/NewSelectionSystem/GridSquareSelector.d.ts]
  Exports.GridSquareSelector = loadstring("return _G['GridSquareSelector']")()

--[shared/NPCs/MainCreationMethods.d.ts]
  Exports.BaseGameCharacterDetails = loadstring("return _G['BaseGameCharacterDetails']")()

--[server/NPCs/SadisticAIDirector/SadisticMusicDirector.d.ts]
  Exports.SadisticMusicDirector = loadstring("return _G['SadisticMusicDirector']")()

--[client/NPCs/UI/CharacterInfoPage.d.ts]
  Exports.CharacterInfoPage = loadstring("return _G['CharacterInfoPage']")()

--[client/NPCs/UI/TeamOverview.d.ts]
  Exports.TeamOverview = loadstring("return _G['TeamOverview']")()

--[client/NPCs/UI/TeamPicker.d.ts]
  Exports.TeamPicker = loadstring("return _G['TeamPicker']")()

--[client/OptionScreens/BootstrapConnectPopup.d.ts]
  Exports.BootstrapConnectPopup = loadstring("return _G['BootstrapConnectPopup']")()

--[client/OptionScreens/CharacterCreationHeader.d.ts]
  Exports.CharacterCreationHeader = loadstring("return _G['CharacterCreationHeader']")()

--[client/OptionScreens/CharacterCreationMain.d.ts]
  Exports.CharacterCreationMain = loadstring("return _G['CharacterCreationMain']")()
  Exports.CharacterCreationMainCharacterPanel = loadstring("return _G['CharacterCreationMainCharacterPanel']")()
  Exports.CharacterCreationMainPresetPanel = loadstring("return _G['CharacterCreationMainPresetPanel']")()

--[client/OptionScreens/CharacterCreationProfession.d.ts]
  Exports.CharacterCreationProfession = loadstring("return _G['CharacterCreationProfession']")()
  Exports.BCRC = loadstring("return _G['BCRC']")()

--[client/OptionScreens/ConnectToServer.d.ts]
  Exports.ConnectToServer = loadstring("return _G['ConnectToServer']")()

--[client/OptionScreens/CoopCharacterCreation.d.ts]
  Exports.CoopCharacterCreation = loadstring("return _G['CoopCharacterCreation']")()

--[client/OptionScreens/CoopCharacterCreationMain.d.ts]
  Exports.CoopCharacterCreationMain = loadstring("return _G['CoopCharacterCreationMain']")()

--[client/OptionScreens/CoopCharacterCreationProfession.d.ts]
  Exports.CoopCharacterCreationProfession = loadstring("return _G['CoopCharacterCreationProfession']")()

--[client/OptionScreens/CoopMapSpawnSelect.d.ts]
  Exports.CoopMapSpawnSelect = loadstring("return _G['CoopMapSpawnSelect']")()

--[client/OptionScreens/CoopOptionsScreen.d.ts]
  Exports.CoopOptionsScreen = loadstring("return _G['CoopOptionsScreen']")()
  Exports.CoopOptionsScreenPanel = loadstring("return _G['CoopOptionsScreenPanel']")()
  Exports.CoopConnection = loadstring("return _G['CoopConnection']")()

--[client/OptionScreens/CoopUserName.d.ts]
  Exports.CoopUserName = loadstring("return _G['CoopUserName']")()

--[client/OptionScreens/InviteFriends.d.ts]
  Exports.InviteFriends = loadstring("return _G['InviteFriends']")()

--[client/OptionScreens/ISGameSounds.d.ts]
  Exports.ISGameSounds = loadstring("return _G['ISGameSounds']")()

--[client/OptionScreens/ISModsNagPanel.d.ts]
  Exports.ISModsNagPanel = loadstring("return _G['ISModsNagPanel']")()

--[client/OptionScreens/ISScoreboard.d.ts]
  Exports.ISScoreboard = loadstring("return _G['ISScoreboard']")()

--[client/OptionScreens/LastStandChallenge.d.ts]
  Exports.LastStandChallenge = loadstring("return _G['LastStandChallenge']")()

--[client/OptionScreens/LastStandPlayerSelect.d.ts]
  Exports.LastStandPlayerSelect = loadstring("return _G['LastStandPlayerSelect']")()

--[client/OptionScreens/LoadGameScreen.d.ts]
  Exports.LoadGameScreen = loadstring("return _G['LoadGameScreen']")()

--[client/OptionScreens/LoginScreen.d.ts]
  Exports.LoginScreen = loadstring("return _G['LoginScreen']")()

--[client/OptionScreens/MainOptions.d.ts]
  Exports.MainOptions = loadstring("return _G['MainOptions']")()

--[client/OptionScreens/MainScreen.d.ts]
  Exports.MainScreen = loadstring("return _G['MainScreen']")()

--[client/OptionScreens/MapSpawnSelect.d.ts]
  Exports.MapSpawnSelect = loadstring("return _G['MapSpawnSelect']")()
  Exports.MapSpawnSelectInfoPanel = loadstring("return _G['MapSpawnSelectInfoPanel']")()
  Exports.MapSpawnSelectListBox = loadstring("return _G['MapSpawnSelectListBox']")()

--[client/OptionScreens/ModMoreInfo.d.ts]
  Exports.ModMoreInfo = loadstring("return _G['ModMoreInfo']")()

--[client/OptionScreens/ModOrderUI.d.ts]
  Exports.ModOrderUI = loadstring("return _G['ModOrderUI']")()

--[client/OptionScreens/ModSelector.d.ts]
  Exports.ModInfoPanel = loadstring("return _G['ModInfoPanel']")()
  Exports.ModListBox = loadstring("return _G['ModListBox']")()
  Exports.ModPosterPanel = loadstring("return _G['ModPosterPanel']")()
  Exports.ModSelector = loadstring("return _G['ModSelector']")()
  Exports.ModThumbnailPanel = loadstring("return _G['ModThumbnailPanel']")()

--[client/OptionScreens/NewGameScreen.d.ts]
  Exports.NewGameScreen = loadstring("return _G['NewGameScreen']")()

--[client/OptionScreens/PublicServerList.d.ts]
  Exports.PublicServerList = loadstring("return _G['PublicServerList']")()

--[client/OptionScreens/SandboxOptions.d.ts]
  Exports.SandboxOptionsScreen = loadstring("return _G['SandboxOptionsScreen']")()

--[client/OptionScreens/ServerConnectPopup.d.ts]
  Exports.ServerConnectPopup = loadstring("return _G['ServerConnectPopup']")()

--[client/OptionScreens/ServerList.d.ts]
  Exports.ServerList = loadstring("return _G['ServerList']")()

--[client/OptionScreens/ServerSettingsScreen.d.ts]
  Exports.BaseServerSettingsPanel = loadstring("return _G['BaseServerSettingsPanel']")()
  Exports.ServerSettingsScreen = loadstring("return _G['ServerSettingsScreen']")()
  Exports.SpawnRegionsNameFilePanel = loadstring("return _G['SpawnRegionsNameFilePanel']")()
  Exports.DefaultServerSettings = loadstring("return _G['DefaultServerSettings']")()

--[client/OptionScreens/ServerToolbox.d.ts]
  Exports.ServerToolbox = loadstring("return _G['ServerToolbox']")()

--[client/OptionScreens/ServerWorkshopItemScreen.d.ts]
  Exports.ServerWorkshopItemScreen = loadstring("return _G['ServerWorkshopItemScreen']")()

--[client/OptionScreens/WorkshopSubmitScreen.d.ts]
  Exports.WorkshopSubmitScreen = loadstring("return _G['WorkshopSubmitScreen']")()

--[client/OptionScreens/WorldSelect.d.ts]
  Exports.WorldSelect = loadstring("return _G['WorldSelect']")()

--[server/Professions/Professions.d.ts]
  Exports.Professions = loadstring("return _G['Professions']")()

--[server/radio/ISDynamicRadio.d.ts]
  Exports.DynamicRadio = loadstring("return _G['DynamicRadio']")()

--[server/radio/ISWeatherChannel.d.ts]
  Exports.WeatherChannel = loadstring("return _G['WeatherChannel']")()

--[client/RadioCom/ISRadioAction.d.ts]
  Exports.ISRadioAction = loadstring("return _G['ISRadioAction']")()

--[client/RadioCom/ISRadioInteractions.d.ts]
  Exports.ISRadioInteractions = loadstring("return _G['ISRadioInteractions']")()

--[client/RadioCom/ISRadioWindow.d.ts]
  Exports.ISRadioWindow = loadstring("return _G['ISRadioWindow']")()

--[client/RadioCom/ISUIRadio/ISBatteryStatusDisplay.d.ts]
  Exports.ISBatteryStatusDisplay = loadstring("return _G['ISBatteryStatusDisplay']")()

--[client/RadioCom/ISUIRadio/ISItemDropBox.d.ts]
  Exports.ISItemDropBox = loadstring("return _G['ISItemDropBox']")()

--[client/RadioCom/ISUIRadio/ISLedLight.d.ts]
  Exports.ISLedLight = loadstring("return _G['ISLedLight']")()

--[client/RadioCom/ISUIRadio/ISSineWaveDisplay.d.ts]
  Exports.ISSineWaveDisplay = loadstring("return _G['ISSineWaveDisplay']")()

--[client/RadioCom/ISUIRadio/ISSliderPanel.d.ts]
  Exports.ISSliderPanel = loadstring("return _G['ISSliderPanel']")()

--[client/RadioCom/ISUIRadio/ISSpeakerButton.d.ts]
  Exports.ISSpeakerButton = loadstring("return _G['ISSpeakerButton']")()

--[client/RadioCom/ISUIRadio/ISVolumeBar.d.ts]
  Exports.ISVolumeBar = loadstring("return _G['ISVolumeBar']")()

--[client/RadioCom/RadioWindowModules/RWM.d.ts]
  Exports.RWM = loadstring("return _G['RWM']")()

--[client/RadioCom/RadioWindowModules/RWMChannel.d.ts]
  Exports.RWMChannel = loadstring("return _G['RWMChannel']")()

--[client/RadioCom/RadioWindowModules/RWMChannelTV.d.ts]
  Exports.RWMChannelTV = loadstring("return _G['RWMChannelTV']")()

--[client/RadioCom/RadioWindowModules/RWMElement.d.ts]
  Exports.RWMElement = loadstring("return _G['RWMElement']")()

--[client/RadioCom/RadioWindowModules/RWMGeneral.d.ts]
  Exports.RWMGeneral = loadstring("return _G['RWMGeneral']")()

--[client/RadioCom/RadioWindowModules/RWMGridPower.d.ts]
  Exports.RWMGridPower = loadstring("return _G['RWMGridPower']")()

--[client/RadioCom/RadioWindowModules/RWMMedia.d.ts]
  Exports.RWMMedia = loadstring("return _G['RWMMedia']")()

--[client/RadioCom/RadioWindowModules/RWMMicrophone.d.ts]
  Exports.RWMMicrophone = loadstring("return _G['RWMMicrophone']")()

--[client/RadioCom/RadioWindowModules/RWMPanel.d.ts]
  Exports.RWMPanel = loadstring("return _G['RWMPanel']")()

--[client/RadioCom/RadioWindowModules/RWMPower.d.ts]
  Exports.RWMPower = loadstring("return _G['RWMPower']")()

--[client/RadioCom/RadioWindowModules/RWMSignal.d.ts]
  Exports.RWMSignal = loadstring("return _G['RWMSignal']")()

--[client/RadioCom/RadioWindowModules/RWMSubEditPreset.d.ts]
  Exports.RWMSubEditPreset = loadstring("return _G['RWMSubEditPreset']")()

--[client/RadioCom/RadioWindowModules/RWMTestPane.d.ts]
  Exports.RWMTestPane = loadstring("return _G['RWMTestPane']")()

--[client/RadioCom/RadioWindowModules/RWMVolume.d.ts]
  Exports.RWMVolume = loadstring("return _G['RWMVolume']")()

--[client/RadioCom/StoryLineSounds/ISSLEvent.d.ts]
  Exports.ISSLEvent = loadstring("return _G['ISSLEvent']")()

--[client/RadioCom/StoryLineSounds/ISSLFrame.d.ts]
  Exports.ISSLFrame = loadstring("return _G['ISSLFrame']")()

--[client/RadioCom/StoryLineSounds/ISSLManager.d.ts]
  Exports.ISSLManager = loadstring("return _G['ISSLManager']")()

--[client/RadioCom/StoryLineSounds/ISSLSounds.d.ts]
  Exports.ISSLSounds = loadstring("return _G['ISSLSounds']")()

--[client/RadioCom/StoryLineSounds/StorySoundDebug.d.ts]
  Exports.ISStorySoundsDebug = loadstring("return _G['ISStorySoundsDebug']")()

--[server/RainBarrel/BuildingObjects/RainCollectorBarrel.d.ts]
  Exports.RainCollectorBarrel = loadstring("return _G['RainCollectorBarrel']")()

--[client/RainBarrel/CRainBarrelGlobalObject.d.ts]
  Exports.CRainBarrelGlobalObject = loadstring("return _G['CRainBarrelGlobalObject']")()

--[client/RainBarrel/CRainBarrelSystem.d.ts]
  Exports.CRainBarrelSystem = loadstring("return _G['CRainBarrelSystem']")()

--[server/RainBarrel/SRainBarrelGlobalObject.d.ts]
  Exports.SRainBarrelGlobalObject = loadstring("return _G['SRainBarrelGlobalObject']")()

--[server/RainBarrel/SRainBarrelSystem.d.ts]
  Exports.SRainBarrelSystem = loadstring("return _G['SRainBarrelSystem']")()

--[server/recipecode.d.ts]
  Exports.Recipe = loadstring("return _G['Recipe']")()

--[client/RecordedMedia/ISMediaInfo.d.ts]
  Exports.ISMediaInfo = loadstring("return _G['ISMediaInfo']")()

--[shared/RecordedMedia/ISRecordeMedia.d.ts]
  Exports.ISRecordedMedia = loadstring("return _G['ISRecordedMedia']")()

--[shared/Reloading/ISRackAction.d.ts]
  Exports.ISRackAction = loadstring("return _G['ISRackAction']")()

--[shared/Reloading/ISReloadable.d.ts]
  Exports.ISReloadable = loadstring("return _G['ISReloadable']")()

--[shared/Reloading/ISReloadableMagazine.d.ts]
  Exports.ISReloadableMagazine = loadstring("return _G['ISReloadableMagazine']")()

--[shared/Reloading/ISReloadableWeapon.d.ts]
  Exports.ISReloadableWeapon = loadstring("return _G['ISReloadableWeapon']")()

--[shared/Reloading/ISReloadAction.d.ts]
  Exports.ISReloadAction = loadstring("return _G['ISReloadAction']")()

--[shared/Reloading/ISReloadManager.d.ts]
  Exports.ISReloadManager = loadstring("return _G['ISReloadManager']")()
  Exports.aaa = loadstring("return _G['aaa']")()

--[shared/Reloading/ISReloadUtil.d.ts]
  Exports.ISReloadUtil = loadstring("return _G['ISReloadUtil']")()

--[shared/Reloading/ISRevolverWeapon.d.ts]
  Exports.ISRevolverWeapon = loadstring("return _G['ISRevolverWeapon']")()

--[shared/Reloading/ISSemiAutoWeapon.d.ts]
  Exports.ISSemiAutoWeapon = loadstring("return _G['ISSemiAutoWeapon']")()

--[shared/Reloading/ISShotgunWeapon.d.ts]
  Exports.ISShotgunWeapon = loadstring("return _G['ISShotgunWeapon']")()

--[shared/Reloading/stormysReload.d.ts]
  Exports.ReloadManager = loadstring("return _G['ReloadManager']")()

--[client/Seasons/ISUI/ISWeather.d.ts]
  Exports.ISWeather = loadstring("return _G['ISWeather']")()

--[server/Seasons/season.d.ts]
  Exports.season = loadstring("return _G['season']")()

--[server/Seasons/seasonProps.d.ts]
  Exports.seasonProps = loadstring("return _G['seasonProps']")()

--[shared/SoundBanks/SoundBanks.d.ts]
  Exports.ambientSoundTable = loadstring("return _G['ambientSoundTable']")()
  Exports.baseSoundTable = loadstring("return _G['baseSoundTable']")()
  Exports.footStepTable = loadstring("return _G['footStepTable']")()
  Exports.globalSoundTable = loadstring("return _G['globalSoundTable']")()
  Exports.voiceTable = loadstring("return _G['voiceTable']")()

--[shared/SpawnRegions.d.ts]
  Exports.SpawnRegionMgr = loadstring("return _G['SpawnRegionMgr']")()

--[shared/StashDescriptions/StashUtil.d.ts]
  Exports.StashUtil = loadstring("return _G['StashUtil']")()

--[client/SurvivalGuide/ISTutorialPageInfo.d.ts]
  Exports.ISTutorialPageInfo = loadstring("return _G['ISTutorialPageInfo']")()
  Exports.ISTutorialSetInfo = loadstring("return _G['ISTutorialSetInfo']")()

--[client/SurvivalGuide/ISTutorialPanel.d.ts]
  Exports.ISSurvivalGuideListBox = loadstring("return _G['ISSurvivalGuideListBox']")()
  Exports.ISSurvivalGuideRichText = loadstring("return _G['ISSurvivalGuideRichText']")()
  Exports.ISSurvivalGuideRightPanel = loadstring("return _G['ISSurvivalGuideRightPanel']")()
  Exports.ISTutorialPanel = loadstring("return _G['ISTutorialPanel']")()

--[client/SurvivalGuide/SurvivalGuideEntries.d.ts]
  Exports.SurvivalGuideEntries = loadstring("return _G['SurvivalGuideEntries']")()

--[client/SurvivalGuide/SurvivalGuideManager.d.ts]
  Exports.SurvivalGuideManager = loadstring("return _G['SurvivalGuideManager']")()

--[client/Tests/MapObjectTests.d.ts]

--[client/Tests/RecipeTests.d.ts]

--[client/Tests/RecipeUtils.d.ts]
  Exports.RecipeUtils = loadstring("return _G['RecipeUtils']")()

--[client/Tests/TimedActionsTests.d.ts]
  Exports.TimedActionTests = loadstring("return _G['TimedActionTests']")()

--[client/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
  Exports.ISActivateCarBatteryChargerAction = loadstring("return _G['ISActivateCarBatteryChargerAction']")()

--[client/TimedActions/ISActivateGenerator.d.ts]
  Exports.ISActivateGenerator = loadstring("return _G['ISActivateGenerator']")()

--[client/TimedActions/ISAddCompost.d.ts]
  Exports.ISAddCompost = loadstring("return _G['ISAddCompost']")()

--[client/TimedActions/ISAddFuel.d.ts]
  Exports.ISAddFuel = loadstring("return _G['ISAddFuel']")()

--[client/TimedActions/ISAddItemInRecipe.d.ts]
  Exports.ISAddItemInRecipe = loadstring("return _G['ISAddItemInRecipe']")()

--[client/TimedActions/ISAddSheetAction.d.ts]
  Exports.ISAddSheetAction = loadstring("return _G['ISAddSheetAction']")()

--[client/TimedActions/ISAddSheetRope.d.ts]
  Exports.ISAddSheetRope = loadstring("return _G['ISAddSheetRope']")()

--[client/TimedActions/ISAddWaterFromItemAction.d.ts]
  Exports.ISAddWaterFromItemAction = loadstring("return _G['ISAddWaterFromItemAction']")()

--[client/TimedActions/ISApplyBandage.d.ts]
  Exports.ISApplyBandage = loadstring("return _G['ISApplyBandage']")()

--[client/TimedActions/ISAttachItemHotbar.d.ts]
  Exports.ISAttachItemHotbar = loadstring("return _G['ISAttachItemHotbar']")()

--[client/TimedActions/ISBarricadeAction.d.ts]
  Exports.ISBarricadeAction = loadstring("return _G['ISBarricadeAction']")()

--[shared/TimedActions/ISBaseTimedAction.d.ts]
  Exports.ISBaseTimedAction = loadstring("return _G['ISBaseTimedAction']")()

--[client/TimedActions/ISBBQAddFuel.d.ts]
  Exports.ISBBQAddFuel = loadstring("return _G['ISBBQAddFuel']")()

--[client/TimedActions/ISBBQExtinguish.d.ts]
  Exports.ISBBQExtinguish = loadstring("return _G['ISBBQExtinguish']")()

--[client/TimedActions/ISBBQInfoAction.d.ts]
  Exports.ISBBQInfoAction = loadstring("return _G['ISBBQInfoAction']")()

--[client/TimedActions/ISBBQInsertPropaneTank.d.ts]
  Exports.ISBBQInsertPropaneTank = loadstring("return _G['ISBBQInsertPropaneTank']")()

--[client/TimedActions/ISBBQLightFromKindle.d.ts]
  Exports.ISBBQLightFromKindle = loadstring("return _G['ISBBQLightFromKindle']")()

--[client/TimedActions/ISBBQLightFromLiterature.d.ts]
  Exports.ISBBQLightFromLiterature = loadstring("return _G['ISBBQLightFromLiterature']")()

--[client/TimedActions/ISBBQLightFromPetrol.d.ts]
  Exports.ISBBQLightFromPetrol = loadstring("return _G['ISBBQLightFromPetrol']")()

--[client/TimedActions/ISBBQRemovePropaneTank.d.ts]
  Exports.ISBBQRemovePropaneTank = loadstring("return _G['ISBBQRemovePropaneTank']")()

--[client/TimedActions/ISBBQToggle.d.ts]
  Exports.ISBBQToggle = loadstring("return _G['ISBBQToggle']")()

--[client/TimedActions/ISBurnCorpseAction.d.ts]
  Exports.ISBurnCorpseAction = loadstring("return _G['ISBurnCorpseAction']")()

--[client/TimedActions/ISBuryCorpse.d.ts]
  Exports.ISBuryCorpse = loadstring("return _G['ISBuryCorpse']")()

--[client/TimedActions/ISCampingInfoAction.d.ts]
  Exports.ISCampingInfoAction = loadstring("return _G['ISCampingInfoAction']")()

--[client/TimedActions/ISChopTreeAction.d.ts]
  Exports.ISChopTreeAction = loadstring("return _G['ISChopTreeAction']")()

--[client/TimedActions/ISCleanBandage.d.ts]
  Exports.ISCleanBandage = loadstring("return _G['ISCleanBandage']")()

--[client/TimedActions/ISCleanBlood.d.ts]
  Exports.ISCleanBlood = loadstring("return _G['ISCleanBlood']")()

--[client/TimedActions/ISCleanBurn.d.ts]
  Exports.ISCleanBurn = loadstring("return _G['ISCleanBurn']")()

--[client/TimedActions/ISClearAshes.d.ts]
  Exports.ISClearAshes = loadstring("return _G['ISClearAshes']")()

--[client/TimedActions/ISClimbOverFence.d.ts]
  Exports.ISClimbOverFence = loadstring("return _G['ISClimbOverFence']")()

--[client/TimedActions/ISClimbSheetRopeAction.d.ts]
  Exports.ISClimbSheetRopeAction = loadstring("return _G['ISClimbSheetRopeAction']")()

--[client/TimedActions/ISClimbThroughWindow.d.ts]
  Exports.ISClimbThroughWindow = loadstring("return _G['ISClimbThroughWindow']")()

--[client/TimedActions/ISClothingExtraAction.d.ts]
  Exports.ISClothingExtraAction = loadstring("return _G['ISClothingExtraAction']")()

--[client/TimedActions/ISComfreyCataplasm.d.ts]
  Exports.ISComfreyCataplasm = loadstring("return _G['ISComfreyCataplasm']")()

--[client/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
  Exports.ISConnectCarBatteryToChargerAction = loadstring("return _G['ISConnectCarBatteryToChargerAction']")()

--[client/TimedActions/ISConsolidateDrainable.d.ts]
  Exports.ISConsolidateDrainable = loadstring("return _G['ISConsolidateDrainable']")()

--[client/TimedActions/ISConsolidateDrainableAll.d.ts]
  Exports.ISConsolidateDrainableAll = loadstring("return _G['ISConsolidateDrainableAll']")()

--[client/TimedActions/ISCraftAction.d.ts]
  Exports.ISCraftAction = loadstring("return _G['ISCraftAction']")()

--[client/TimedActions/ISCutHair.d.ts]
  Exports.ISCutHair = loadstring("return _G['ISCutHair']")()

--[client/TimedActions/ISDestroyStuffAction.d.ts]
  Exports.ISDestroyStuffAction = loadstring("return _G['ISDestroyStuffAction']")()

--[client/TimedActions/ISDetachItemHotbar.d.ts]
  Exports.ISDetachItemHotbar = loadstring("return _G['ISDetachItemHotbar']")()

--[client/TimedActions/ISDisinfect.d.ts]
  Exports.ISDisinfect = loadstring("return _G['ISDisinfect']")()

--[client/TimedActions/ISDismantleAction.d.ts]
  Exports.ISDismantleAction = loadstring("return _G['ISDismantleAction']")()

--[client/TimedActions/ISDrinkFromBottle.d.ts]
  Exports.ISDrinkFromBottle = loadstring("return _G['ISDrinkFromBottle']")()

--[client/TimedActions/ISDropItemAction.d.ts]
  Exports.ISDropItemAction = loadstring("return _G['ISDropItemAction']")()

--[client/TimedActions/ISDropWorldItemAction.d.ts]
  Exports.ISDropWorldItemAction = loadstring("return _G['ISDropWorldItemAction']")()

--[client/TimedActions/ISDryMyself.d.ts]
  Exports.ISDryMyself = loadstring("return _G['ISDryMyself']")()

--[client/TimedActions/ISDumpContentsAction.d.ts]
  Exports.ISDumpContentsAction = loadstring("return _G['ISDumpContentsAction']")()

--[client/TimedActions/ISDumpWaterAction.d.ts]
  Exports.ISDumpWaterAction = loadstring("return _G['ISDumpWaterAction']")()

--[client/TimedActions/ISDyeHair.d.ts]
  Exports.ISDyeHair = loadstring("return _G['ISDyeHair']")()

--[client/TimedActions/ISEatFoodAction.d.ts]
  Exports.ISEatFoodAction = loadstring("return _G['ISEatFoodAction']")()

--[client/TimedActions/ISEjectMagazine.d.ts]
  Exports.ISEjectMagazine = loadstring("return _G['ISEjectMagazine']")()

--[client/TimedActions/ISEmptyRainBarrelAction.d.ts]
  Exports.ISEmptyRainBarrelAction = loadstring("return _G['ISEmptyRainBarrelAction']")()

--[client/TimedActions/ISEquipHeavyItem.d.ts]
  Exports.ISEquipHeavyItem = loadstring("return _G['ISEquipHeavyItem']")()

--[client/TimedActions/ISEquipWeaponAction.d.ts]
  Exports.ISEquipWeaponAction = loadstring("return _G['ISEquipWeaponAction']")()

--[client/TimedActions/ISFillGrave.d.ts]
  Exports.ISFillGrave = loadstring("return _G['ISFillGrave']")()

--[client/TimedActions/ISFinalizeDealAction.d.ts]
  Exports.ISFinalizeDealAction = loadstring("return _G['ISFinalizeDealAction']")()

--[client/TimedActions/ISFireplaceAddFuel.d.ts]
  Exports.ISFireplaceAddFuel = loadstring("return _G['ISFireplaceAddFuel']")()

--[client/TimedActions/ISFireplaceExtinguish.d.ts]
  Exports.ISFireplaceExtinguish = loadstring("return _G['ISFireplaceExtinguish']")()

--[client/TimedActions/ISFireplaceInfoAction.d.ts]
  Exports.ISFireplaceInfoAction = loadstring("return _G['ISFireplaceInfoAction']")()

--[client/TimedActions/ISFireplaceLightFromKindle.d.ts]
  Exports.ISFireplaceLightFromKindle = loadstring("return _G['ISFireplaceLightFromKindle']")()

--[client/TimedActions/ISFireplaceLightFromLiterature.d.ts]
  Exports.ISFireplaceLightFromLiterature = loadstring("return _G['ISFireplaceLightFromLiterature']")()

--[client/TimedActions/ISFireplaceLightFromPetrol.d.ts]
  Exports.ISFireplaceLightFromPetrol = loadstring("return _G['ISFireplaceLightFromPetrol']")()

--[client/TimedActions/ISFitnessAction.d.ts]
  Exports.ISFitnessAction = loadstring("return _G['ISFitnessAction']")()

--[client/TimedActions/ISFixAction.d.ts]
  Exports.ISFixAction = loadstring("return _G['ISFixAction']")()

--[client/TimedActions/ISFixGenerator.d.ts]
  Exports.ISFixGenerator = loadstring("return _G['ISFixGenerator']")()

--[client/TimedActions/ISGarlicCataplasm.d.ts]
  Exports.ISGarlicCataplasm = loadstring("return _G['ISGarlicCataplasm']")()

--[client/TimedActions/ISGeneratorInfoAction.d.ts]
  Exports.ISGeneratorInfoAction = loadstring("return _G['ISGeneratorInfoAction']")()

--[client/TimedActions/ISGetCompost.d.ts]
  Exports.ISGetCompost = loadstring("return _G['ISGetCompost']")()

--[client/TimedActions/ISGrabCorpseAction.d.ts]
  Exports.ISGrabCorpseAction = loadstring("return _G['ISGrabCorpseAction']")()

--[client/TimedActions/ISGrabItemAction.d.ts]
  Exports.ISGrabItemAction = loadstring("return _G['ISGrabItemAction']")()

--[client/TimedActions/ISInsertMagazine.d.ts]
  Exports.ISInsertMagazine = loadstring("return _G['ISInsertMagazine']")()

--[client/TimedActions/ISInventoryTransferAction.d.ts]
  Exports.ISInventoryTransferAction = loadstring("return _G['ISInventoryTransferAction']")()

--[client/TimedActions/ISLightActions.d.ts]
  Exports.ISLightActions = loadstring("return _G['ISLightActions']")()

--[client/TimedActions/ISLoadBulletsInMagazine.d.ts]
  Exports.ISLoadBulletsInMagazine = loadstring("return _G['ISLoadBulletsInMagazine']")()

--[client/TimedActions/ISLockDoor.d.ts]
  Exports.ISLockDoor = loadstring("return _G['ISLockDoor']")()

--[client/TimedActions/ISMedicalCheckAction.d.ts]
  Exports.ISMedicalCheckAction = loadstring("return _G['ISMedicalCheckAction']")()

--[client/TimedActions/ISOpenCloseCurtain.d.ts]
  Exports.ISOpenCloseCurtain = loadstring("return _G['ISOpenCloseCurtain']")()

--[client/TimedActions/ISOpenCloseDoor.d.ts]
  Exports.ISOpenCloseDoor = loadstring("return _G['ISOpenCloseDoor']")()

--[client/TimedActions/ISOpenCloseWindow.d.ts]
  Exports.ISOpenCloseWindow = loadstring("return _G['ISOpenCloseWindow']")()

--[client/TimedActions/ISOpenContainerTimedAction.d.ts]
  Exports.ISOpenContainerTimedAction = loadstring("return _G['ISOpenContainerTimedAction']")()

--[client/TimedActions/ISOvenUITimedAction.d.ts]
  Exports.ISOvenUITimedAction = loadstring("return _G['ISOvenUITimedAction']")()

--[client/TimedActions/ISPadlockAction.d.ts]
  Exports.ISPadlockAction = loadstring("return _G['ISPadlockAction']")()

--[client/TimedActions/ISPickupBrokenGlass.d.ts]
  Exports.ISPickupBrokenGlass = loadstring("return _G['ISPickupBrokenGlass']")()

--[client/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
  Exports.ISPlaceCarBatteryChargerAction = loadstring("return _G['ISPlaceCarBatteryChargerAction']")()

--[client/TimedActions/ISPlaceTrap.d.ts]
  Exports.ISPlaceTrap = loadstring("return _G['ISPlaceTrap']")()

--[client/TimedActions/ISPlantainCataplasm.d.ts]
  Exports.ISPlantainCataplasm = loadstring("return _G['ISPlantainCataplasm']")()

--[client/TimedActions/ISPlugGenerator.d.ts]
  Exports.ISPlugGenerator = loadstring("return _G['ISPlugGenerator']")()

--[client/TimedActions/ISPlumbItem.d.ts]
  Exports.ISPlumbItem = loadstring("return _G['ISPlumbItem']")()

--[client/TimedActions/ISPutOutFire.d.ts]
  Exports.ISPutOutFire = loadstring("return _G['ISPutOutFire']")()

--[client/TimedActions/ISQueueActionsAction.d.ts]
  Exports.ISQueueActionsAction = loadstring("return _G['ISQueueActionsAction']")()

--[client/TimedActions/ISRackFirearm.d.ts]
  Exports.ISRackFirearm = loadstring("return _G['ISRackFirearm']")()

--[client/TimedActions/ISReadABook.d.ts]
  Exports.ISReadABook = loadstring("return _G['ISReadABook']")()

--[client/TimedActions/ISReadWorldMap.d.ts]
  Exports.ISReadWorldMap = loadstring("return _G['ISReadWorldMap']")()

--[client/TimedActions/ISReloadWeaponAction.d.ts]
  Exports.ISReloadWeaponAction = loadstring("return _G['ISReloadWeaponAction']")()

--[client/TimedActions/ISRemoveBrokenGlass.d.ts]
  Exports.ISRemoveBrokenGlass = loadstring("return _G['ISRemoveBrokenGlass']")()

--[client/TimedActions/ISRemoveBullet.d.ts]
  Exports.ISRemoveBullet = loadstring("return _G['ISRemoveBullet']")()

--[client/TimedActions/ISRemoveBush.d.ts]
  Exports.ISRemoveBush = loadstring("return _G['ISRemoveBush']")()

--[client/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
  Exports.ISRemoveCarBatteryFromChargerAction = loadstring("return _G['ISRemoveCarBatteryFromChargerAction']")()

--[client/TimedActions/ISRemoveGlass.d.ts]
  Exports.ISRemoveGlass = loadstring("return _G['ISRemoveGlass']")()

--[client/TimedActions/ISRemoveGrass.d.ts]
  Exports.ISRemoveGrass = loadstring("return _G['ISRemoveGrass']")()

--[client/TimedActions/ISRemovePatch.d.ts]
  Exports.ISRemovePatch = loadstring("return _G['ISRemovePatch']")()

--[client/TimedActions/ISRemoveSheetAction.d.ts]
  Exports.ISRemoveSheetAction = loadstring("return _G['ISRemoveSheetAction']")()

--[client/TimedActions/ISRemoveSheetRope.d.ts]
  Exports.ISRemoveSheetRope = loadstring("return _G['ISRemoveSheetRope']")()

--[client/TimedActions/ISRemoveWeaponUpgrade.d.ts]
  Exports.ISRemoveWeaponUpgrade = loadstring("return _G['ISRemoveWeaponUpgrade']")()

--[client/TimedActions/ISRepairClothing.d.ts]
  Exports.ISRepairClothing = loadstring("return _G['ISRepairClothing']")()

--[client/TimedActions/ISRestAction.d.ts]
  Exports.ISRestAction = loadstring("return _G['ISRestAction']")()

--[client/TimedActions/ISRipClothing.d.ts]
  Exports.ISRipClothing = loadstring("return _G['ISRipClothing']")()

--[client/TimedActions/ISScavengeAction.d.ts]
  Exports.ISScavengeAction = loadstring("return _G['ISScavengeAction']")()

--[client/TimedActions/ISSetComboWasherDryerMode.d.ts]
  Exports.ISSetComboWasherDryerMode = loadstring("return _G['ISSetComboWasherDryerMode']")()

--[client/TimedActions/ISSitOnChairAction.d.ts]
  Exports.ISSitOnChairAction = loadstring("return _G['ISSitOnChairAction']")()

--[client/TimedActions/ISSmashWindow.d.ts]
  Exports.ISSmashWindow = loadstring("return _G['ISSmashWindow']")()

--[client/TimedActions/ISSplint.d.ts]
  Exports.ISSplint = loadstring("return _G['ISSplint']")()

--[client/TimedActions/ISStitch.d.ts]
  Exports.ISStitch = loadstring("return _G['ISStitch']")()

--[client/TimedActions/ISStopAlarmClockAction.d.ts]
  Exports.ISStopAlarmClockAction = loadstring("return _G['ISStopAlarmClockAction']")()

--[client/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
  Exports.ISTakeCarBatteryChargerAction = loadstring("return _G['ISTakeCarBatteryChargerAction']")()

--[client/TimedActions/ISTakeFuel.d.ts]
  Exports.ISTakeFuel = loadstring("return _G['ISTakeFuel']")()

--[client/TimedActions/ISTakeGenerator.d.ts]
  Exports.ISTakeGenerator = loadstring("return _G['ISTakeGenerator']")()

--[client/TimedActions/ISTakePillAction.d.ts]
  Exports.ISTakePillAction = loadstring("return _G['ISTakePillAction']")()

--[client/TimedActions/ISTakeTrap.d.ts]
  Exports.ISTakeTrap = loadstring("return _G['ISTakeTrap']")()

--[client/TimedActions/ISTakeWaterAction.d.ts]
  Exports.ISTakeWaterAction = loadstring("return _G['ISTakeWaterAction']")()

--[client/TimedActions/ISTimedActionQueue.d.ts]
  Exports.ISTimedActionQueue = loadstring("return _G['ISTimedActionQueue']")()

--[client/TimedActions/ISToggleClothingDryer.d.ts]
  Exports.ISToggleClothingDryer = loadstring("return _G['ISToggleClothingDryer']")()

--[client/TimedActions/ISToggleClothingWasher.d.ts]
  Exports.ISToggleClothingWasher = loadstring("return _G['ISToggleClothingWasher']")()

--[client/TimedActions/ISToggleComboWasherDryer.d.ts]
  Exports.ISToggleComboWasherDryer = loadstring("return _G['ISToggleComboWasherDryer']")()

--[client/TimedActions/ISToggleLightAction.d.ts]
  Exports.ISToggleLightAction = loadstring("return _G['ISToggleLightAction']")()

--[client/TimedActions/ISToggleSafetyAction.d.ts]
  Exports.ISToggleSafetyAction = loadstring("return _G['ISToggleSafetyAction']")()

--[client/TimedActions/ISToggleStoveAction.d.ts]
  Exports.ISToggleStoveAction = loadstring("return _G['ISToggleStoveAction']")()

--[client/TimedActions/ISTransferWaterAction.d.ts]
  Exports.ISTransferWaterAction = loadstring("return _G['ISTransferWaterAction']")()

--[client/TimedActions/ISTrimBeard.d.ts]
  Exports.ISTrimBeard = loadstring("return _G['ISTrimBeard']")()

--[client/TimedActions/ISUnbarricadeAction.d.ts]
  Exports.ISUnbarricadeAction = loadstring("return _G['ISUnbarricadeAction']")()

--[client/TimedActions/ISUnequipAction.d.ts]
  Exports.ISUnequipAction = loadstring("return _G['ISUnequipAction']")()

--[client/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
  Exports.ISUnloadBulletsFromFirearm = loadstring("return _G['ISUnloadBulletsFromFirearm']")()

--[client/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
  Exports.ISUnloadBulletsFromMagazine = loadstring("return _G['ISUnloadBulletsFromMagazine']")()

--[client/TimedActions/ISUpgradeWeapon.d.ts]
  Exports.ISUpgradeWeapon = loadstring("return _G['ISUpgradeWeapon']")()

--[client/TimedActions/ISWakeOtherPlayer.d.ts]
  Exports.ISWakeOtherPlayer = loadstring("return _G['ISWakeOtherPlayer']")()

--[client/TimedActions/ISWashClothing.d.ts]
  Exports.ISWashClothing = loadstring("return _G['ISWashClothing']")()

--[client/TimedActions/ISWashYourself.d.ts]
  Exports.ISWashYourself = loadstring("return _G['ISWashYourself']")()

--[client/TimedActions/ISWearClothing.d.ts]
  Exports.ISWearClothing = loadstring("return _G['ISWearClothing']")()
  Exports.WearClothingAnimations = loadstring("return _G['WearClothingAnimations']")()

--[client/TimedActions/WalkToTimedAction.d.ts]
  Exports.ISWalkToTimedAction = loadstring("return _G['ISWalkToTimedAction']")()

--[server/Traps/BuildingObjects/TrapBO.d.ts]
  Exports.TrapBO = loadstring("return _G['TrapBO']")()

--[client/Traps/CTrapGlobalObject.d.ts]
  Exports.CTrapGlobalObject = loadstring("return _G['CTrapGlobalObject']")()

--[client/Traps/CTrapSystem.d.ts]
  Exports.CTrapSystem = loadstring("return _G['CTrapSystem']")()

--[server/Traps/ISUI/ISTrapMenu.d.ts]
  Exports.ISTrapMenu = loadstring("return _G['ISTrapMenu']")()

--[server/Traps/STrapGlobalObject.d.ts]
  Exports.STrapGlobalObject = loadstring("return _G['STrapGlobalObject']")()

--[server/Traps/STrapSystem.d.ts]
  Exports.STrapSystem = loadstring("return _G['STrapSystem']")()

--[client/Traps/TimedActions/ISAddBaitAction.d.ts]
  Exports.ISAddBaitAction = loadstring("return _G['ISAddBaitAction']")()

--[client/Traps/TimedActions/ISCheckTrapAction.d.ts]
  Exports.ISCheckTrapAction = loadstring("return _G['ISCheckTrapAction']")()

--[client/Traps/TimedActions/ISRemoveBaitAction.d.ts]
  Exports.ISRemoveBaitAction = loadstring("return _G['ISRemoveBaitAction']")()

--[client/Traps/TimedActions/ISRemoveTrapAction.d.ts]
  Exports.ISRemoveTrapAction = loadstring("return _G['ISRemoveTrapAction']")()

--[server/Traps/TrapDefinition.d.ts]
  Exports.Animals = loadstring("return _G['Animals']")()
  Exports.Traps = loadstring("return _G['Traps']")()

--[server/TurnBased/TurnBasedMain.d.ts]
  Exports.TurnbasedDummyChr = loadstring("return _G['TurnbasedDummyChr']")()

--[client/Tutorial/ISUI/TutorialFocus.d.ts]
  Exports.TutorialFocus = loadstring("return _G['TutorialFocus']")()

--[client/Tutorial/ISUI/TutorialMessage.d.ts]
  Exports.TutorialMessage = loadstring("return _G['TutorialMessage']")()

--[client/Tutorial/Steps.d.ts]
  Exports.BandageStep = loadstring("return _G['BandageStep']")()
  Exports.FightStep = loadstring("return _G['FightStep']")()
  Exports.InventoryLootingStep = loadstring("return _G['InventoryLootingStep']")()
  Exports.InventoryUseStep = loadstring("return _G['InventoryUseStep']")()
  Exports.ShotgunStep = loadstring("return _G['ShotgunStep']")()
  Exports.SneakStep = loadstring("return _G['SneakStep']")()
  Exports.WalkToAdjacent = loadstring("return _G['WalkToAdjacent']")()
  Exports.WelcomeStep = loadstring("return _G['WelcomeStep']")()
  Exports.TutorialTests = loadstring("return _G['TutorialTests']")()

--[client/Tutorial/Tutorial1.d.ts]
  Exports.Tutorial1 = loadstring("return _G['Tutorial1']")()

--[client/Tutorial/TutorialSetup.d.ts]
  Exports.TutorialData = loadstring("return _G['TutorialData']")()

--[client/Tutorial/TutorialStep.d.ts]
  Exports.TutorialStep = loadstring("return _G['TutorialStep']")()

--[server/TutorialHelperFunctions.d.ts]
  Exports.TutorialHelperFunctions = loadstring("return _G['TutorialHelperFunctions']")()

--[shared/Util/AdjacentFreeTileFinder.d.ts]
  Exports.AdjacentFreeTileFinder = loadstring("return _G['AdjacentFreeTileFinder']")()

--[shared/Util/BuildingHelper.d.ts]
  Exports.BuildingHelper = loadstring("return _G['BuildingHelper']")()

--[shared/Util/ISPriorityTable.d.ts]
  Exports.ISPriorityTable = loadstring("return _G['ISPriorityTable']")()

--[shared/Util/LuaList.d.ts]
  Exports.LuaList = loadstring("return _G['LuaList']")()

--[shared/Util/LuaNet.d.ts]
  Exports.LuaNet = loadstring("return _G['LuaNet']")()

--[shared/Util/StringReplacer.d.ts]
  Exports.StringReplacer = loadstring("return _G['StringReplacer']")()

--[shared/Util/Vector2.d.ts]
  Exports.Vector2 = loadstring("return _G['Vector2']")()

--[client/Vehicles/ISUI/EditVehicleState.d.ts]
  Exports.EditVehicleUI = loadstring("return _G['EditVehicleUI']")()
  Exports.EditVehicleUI_EditArea = loadstring("return _G['EditVehicleUI_EditArea']")()
  Exports.EditVehicleUI_EditAttachment = loadstring("return _G['EditVehicleUI_EditAttachment']")()
  Exports.EditVehicleUI_EditChassis = loadstring("return _G['EditVehicleUI_EditChassis']")()
  Exports.EditVehicleUI_EditPanel = loadstring("return _G['EditVehicleUI_EditPanel']")()
  Exports.EditVehicleUI_EditPassenger = loadstring("return _G['EditVehicleUI_EditPassenger']")()
  Exports.EditVehicleUI_EditPhysics = loadstring("return _G['EditVehicleUI_EditPhysics']")()
  Exports.EditVehicleUI_EditWheel = loadstring("return _G['EditVehicleUI_EditWheel']")()
  Exports.EditVehicleUI_ListBox = loadstring("return _G['EditVehicleUI_ListBox']")()
  Exports.EditVehicleUI_Scene = loadstring("return _G['EditVehicleUI_Scene']")()
  Exports.EditVehicleUI_SwitchView = loadstring("return _G['EditVehicleUI_SwitchView']")()

--[client/Vehicles/ISUI/ISCarMechanicsOverlay.d.ts]
  Exports.ISCarMechanicsOverlay = loadstring("return _G['ISCarMechanicsOverlay']")()

--[client/Vehicles/ISUI/ISLightbarUI.d.ts]
  Exports.ISLightbarUI = loadstring("return _G['ISLightbarUI']")()

--[client/Vehicles/ISUI/ISUI3DScene.d.ts]
  Exports.ISUI3DScene = loadstring("return _G['ISUI3DScene']")()

--[client/Vehicles/ISUI/ISUIVehicleModel.d.ts]
  Exports.ISUIVehicleModel = loadstring("return _G['ISUIVehicleModel']")()

--[client/Vehicles/ISUI/ISVehicleACUI.d.ts]
  Exports.ISVehicleACUI = loadstring("return _G['ISVehicleACUI']")()

--[client/Vehicles/ISUI/ISVehicleAngles.d.ts]
  Exports.ISVehicleAngles = loadstring("return _G['ISVehicleAngles']")()

--[client/Vehicles/ISUI/ISVehicleBloodUI.d.ts]
  Exports.ISVehicleBloodUI = loadstring("return _G['ISVehicleBloodUI']")()

--[client/Vehicles/ISUI/ISVehicleColor.d.ts]
  Exports.ISVehicleHSV = loadstring("return _G['ISVehicleHSV']")()

--[client/Vehicles/ISUI/ISVehicleDashboard.d.ts]
  Exports.ISVehicleDashboard = loadstring("return _G['ISVehicleDashboard']")()

--[client/Vehicles/ISUI/ISVehicleGauge.d.ts]
  Exports.ISVehicleGauge = loadstring("return _G['ISVehicleGauge']")()

--[client/Vehicles/ISUI/ISVehicleMechanics.d.ts]
  Exports.ISVehicleMechanics = loadstring("return _G['ISVehicleMechanics']")()

--[client/Vehicles/ISUI/ISVehicleMenu.d.ts]
  Exports.ISVehicleMenu = loadstring("return _G['ISVehicleMenu']")()

--[client/Vehicles/ISUI/ISVehiclePartMenu.d.ts]
  Exports.ISVehiclePartMenu = loadstring("return _G['ISVehiclePartMenu']")()

--[client/Vehicles/ISUI/ISVehicleRegulator.d.ts]
  Exports.ISVehicleRegulator = loadstring("return _G['ISVehicleRegulator']")()

--[client/Vehicles/ISUI/ISVehicleRoadtripDebug.d.ts]
  Exports.ISVehicleRoadtripDebug = loadstring("return _G['ISVehicleRoadtripDebug']")()

--[client/Vehicles/ISUI/ISVehicleSeatUI.d.ts]
  Exports.ISVehicleSeatUI = loadstring("return _G['ISVehicleSeatUI']")()

--[client/Vehicles/ISVehicleTrailerUtils.d.ts]
  Exports.ISVehicleTrailerUtils = loadstring("return _G['ISVehicleTrailerUtils']")()

--[client/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
  Exports.ISAddGasolineToVehicle = loadstring("return _G['ISAddGasolineToVehicle']")()

--[client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
  Exports.ISAttachTrailerToVehicle = loadstring("return _G['ISAttachTrailerToVehicle']")()

--[client/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
  Exports.ISCloseVehicleDoor = loadstring("return _G['ISCloseVehicleDoor']")()

--[client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
  Exports.ISConfigHeadlight = loadstring("return _G['ISConfigHeadlight']")()

--[client/Vehicles/TimedActions/ISDeflateTire.d.ts]
  Exports.ISDeflateTire = loadstring("return _G['ISDeflateTire']")()

--[client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
  Exports.ISDetachTrailerFromVehicle = loadstring("return _G['ISDetachTrailerFromVehicle']")()

--[client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
  Exports.ISEnterVehicle = loadstring("return _G['ISEnterVehicle']")()

--[client/Vehicles/TimedActions/ISExitVehicle.d.ts]
  Exports.ISExitVehicle = loadstring("return _G['ISExitVehicle']")()

--[client/Vehicles/TimedActions/ISHorn.d.ts]
  Exports.ISHorn = loadstring("return _G['ISHorn']")()

--[client/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
  Exports.ISHotwireVehicle = loadstring("return _G['ISHotwireVehicle']")()

--[client/Vehicles/TimedActions/ISInflateTire.d.ts]
  Exports.ISInflateTire = loadstring("return _G['ISInflateTire']")()

--[client/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
  Exports.ISInstallVehiclePart = loadstring("return _G['ISInstallVehiclePart']")()

--[client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
  Exports.ISLightbarUITimedAction = loadstring("return _G['ISLightbarUITimedAction']")()

--[client/Vehicles/TimedActions/ISLockDoors.d.ts]
  Exports.ISLockDoors = loadstring("return _G['ISLockDoors']")()

--[client/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
  Exports.ISLockVehicleDoor = loadstring("return _G['ISLockVehicleDoor']")()

--[client/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
  Exports.ISOpenCloseVehicleWindow = loadstring("return _G['ISOpenCloseVehicleWindow']")()

--[client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
  Exports.ISOpenMechanicsUIAction = loadstring("return _G['ISOpenMechanicsUIAction']")()

--[client/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
  Exports.ISOpenVehicleDoor = loadstring("return _G['ISOpenVehicleDoor']")()

--[client/Vehicles/TimedActions/ISPathFindAction.d.ts]
  Exports.ISPathFindAction = loadstring("return _G['ISPathFindAction']")()

--[client/Vehicles/TimedActions/ISRechargeCarBattery.d.ts]
  Exports.ISRechargeCarBattery = loadstring("return _G['ISRechargeCarBattery']")()

--[client/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
  Exports.ISRefuelFromGasPump = loadstring("return _G['ISRefuelFromGasPump']")()

--[client/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
  Exports.ISRemoveBurntVehicle = loadstring("return _G['ISRemoveBurntVehicle']")()

--[client/Vehicles/TimedActions/ISRepairEngine.d.ts]
  Exports.ISRepairEngine = loadstring("return _G['ISRepairEngine']")()

--[client/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
  Exports.ISShutOffVehicleEngine = loadstring("return _G['ISShutOffVehicleEngine']")()

--[client/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
  Exports.ISSmashVehicleWindow = loadstring("return _G['ISSmashVehicleWindow']")()

--[client/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
  Exports.ISStartVehicleEngine = loadstring("return _G['ISStartVehicleEngine']")()

--[client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
  Exports.ISSwitchVehicleSeat = loadstring("return _G['ISSwitchVehicleSeat']")()

--[client/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
  Exports.ISTakeEngineParts = loadstring("return _G['ISTakeEngineParts']")()

--[client/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
  Exports.ISTakeGasolineFromVehicle = loadstring("return _G['ISTakeGasolineFromVehicle']")()

--[client/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
  Exports.ISUninstallVehiclePart = loadstring("return _G['ISUninstallVehiclePart']")()

--[client/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
  Exports.ISUnlockVehicleDoor = loadstring("return _G['ISUnlockVehicleDoor']")()

--[client/Vehicles/TimedActions/ISWashVehicle.d.ts]
  Exports.ISWashVehicle = loadstring("return _G['ISWashVehicle']")()

--[server/Vehicles/Vehicles.d.ts]
  Exports.Vehicles = loadstring("return _G['Vehicles']")()
  Exports.VehicleUtils = loadstring("return _G['VehicleUtils']")()

--[client/XpSystem/ISUI/ISCharacterInfo.d.ts]
  Exports.ISCharacterInfo = loadstring("return _G['ISCharacterInfo']")()

--[client/XpSystem/ISUI/ISCharacterInfoWindow.d.ts]
  Exports.ISCharacterInfoWindow = loadstring("return _G['ISCharacterInfoWindow']")()

--[client/XpSystem/ISUI/ISCharacterProtection.d.ts]
  Exports.ISCharacterProtection = loadstring("return _G['ISCharacterProtection']")()

--[client/XpSystem/ISUI/ISCharacterScreen.d.ts]
  Exports.ISCharacterScreen = loadstring("return _G['ISCharacterScreen']")()
  Exports.ISCharacterScreenAvatar = loadstring("return _G['ISCharacterScreenAvatar']")()

--[client/XpSystem/ISUI/ISClothingInsPanel.d.ts]
  Exports.ISClothingInsPanel = loadstring("return _G['ISClothingInsPanel']")()

--[client/XpSystem/ISUI/ISHealthPanel.d.ts]
  Exports.HealthPanelAction = loadstring("return _G['HealthPanelAction']")()
  Exports.ISHealthBodyPartListBox = loadstring("return _G['ISHealthBodyPartListBox']")()
  Exports.ISHealthBodyPartPanel = loadstring("return _G['ISHealthBodyPartPanel']")()
  Exports.ISHealthPanel = loadstring("return _G['ISHealthPanel']")()
  Exports.ISNewHealthPanel = loadstring("return _G['ISNewHealthPanel']")()

--[client/XpSystem/ISUI/ISSkillProgressBar.d.ts]
  Exports.ISSkillProgressBar = loadstring("return _G['ISSkillProgressBar']")()

--[server/XpSystem/XPSystem_SkillBook.d.ts]
  Exports.SkillBook = loadstring("return _G['SkillBook']")()

--[server/XpSystem/XpSystem_text.d.ts]
  Exports.xpSystemText = loadstring("return _G['xpSystemText']")()

--[server/XpSystem/XpUpdate.d.ts]
  Exports.xpUpdate = loadstring("return _G['xpUpdate']")()

  _G.PIPEWRENCH_READY = true
  
  -- Trigger reimport blocks for all compiled PipeWrench TypeScript file(s).
  triggerEvent('OnPipeWrenchBoot', true)
end)
return Exports