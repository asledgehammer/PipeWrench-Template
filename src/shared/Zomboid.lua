--- MIT License
--- 
--- Copyright (c) 2022 JabDoesThings
--- 
--- Permission is hereby granted, free of charge, to any person obtaining a copy
--- of this software and associated documentation files (the "Software"), to deal
--- in the Software without restriction, including without limitation the rights
--- to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
--- copies of the Software, and to permit persons to whom the Software is
--- furnished to do so, subject to the following conditions:
--- 
--- The above copyright notice and this permission notice shall be included in all
--- copies or substantial portions of the Software.
--- 
--- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
--- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
--- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
--- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
--- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
--- OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
--- SOFTWARE.
---
--- File generated at Friday July 2022 12:23:19.850-0500

local Exports = {}
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
return Exports
