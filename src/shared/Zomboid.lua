local Exports = {}

-- File: helper.lua
-------------------------------------------------------------------

function Exports.tonumber(arg) return tonumber(arg) end
function Exports.tostring(arg) return tostring(arg) end
function Exports.global(id) return _G[id] end
function Exports.loadstring(lua) return loadstring(lua) end
function Exports.execute(lua) return loadstring(lua)() end

-- File: zomboid.lua
-------------------------------------------------------------------

function Exports.addEventListener(id, func) Events[id].Add(func) end
function Exports.removeEventListener(id, func) Events[id].Add(func) end

-- File: globalobject.lua
-------------------------------------------------------------------

function Exports.AddNoiseToken(arg0, arg1) AddNoiseToken(arg0, arg1) end
function Exports.AddWorldSound(arg0, arg1, arg2) AddWorldSound(arg0, arg1, arg2) end
function Exports.InvMngGetItem(arg0, arg1, arg2) InvMngGetItem(arg0, arg1, arg2) end
function Exports.InvMngRemoveItem(arg0, arg1) InvMngRemoveItem(arg0, arg1) end
function Exports.ProceedFactionMessage(arg0) ProceedFactionMessage(arg0) end
function Exports.ProcessAdminChatMessage(arg0) ProcessAdminChatMessage(arg0) end
function Exports.ProcessSafehouseMessage(arg0) ProcessSafehouseMessage(arg0) end
function Exports.Render3DItem(arg0, arg1, arg2, arg3, arg4, arg5) Render3DItem(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.SendCommandToServer(arg0) SendCommandToServer(arg0) end
function Exports.SyncXp(arg0) SyncXp(arg0) end
function Exports.ZombRand(arg0, arg1) return ZombRand(arg0, arg1) end
function Exports.ZombRand(arg0) return ZombRand(arg0) end
function Exports.ZombRandBetween(arg0, arg1) return ZombRandBetween(arg0, arg1) end
function Exports.ZombRandFloat(arg0, arg1) return ZombRandFloat(arg0, arg1) end
function Exports.acceptFactionInvite(arg0, arg1) acceptFactionInvite(arg0, arg1) end
function Exports.acceptSafehouseInvite(arg0, arg1) acceptSafehouseInvite(arg0, arg1) end
function Exports.acceptTrading(arg0, arg1, arg2) acceptTrading(arg0, arg1, arg2) end
function Exports.activateJoypadOnSteamDeck() activateJoypadOnSteamDeck() end
function Exports.activateSteamOverlayToWebPage(arg0) activateSteamOverlayToWebPage(arg0) end
function Exports.activateSteamOverlayToWorkshop() activateSteamOverlayToWorkshop() end
function Exports.activateSteamOverlayToWorkshopItem(arg0) activateSteamOverlayToWorkshopItem(arg0) end
function Exports.activateSteamOverlayToWorkshopUser() activateSteamOverlayToWorkshopUser() end
function Exports.addAllBurntVehicles() addAllBurntVehicles() end
function Exports.addAllSmashedVehicles() addAllSmashedVehicles() end
function Exports.addAllVehicles(arg0) addAllVehicles(arg0) end
function Exports.addAllVehicles() addAllVehicles() end
function Exports.addBloodSplat(arg0, arg1) addBloodSplat(arg0, arg1) end
function Exports.addCarCrash() addCarCrash() end
function Exports.addPhysicsObject() return addPhysicsObject() end
function Exports.addSound(arg0, arg1, arg2, arg3, arg4, arg5) addSound(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.addTicket(arg0, arg1, arg2) addTicket(arg0, arg1, arg2) end
function Exports.addUserlog(arg0, arg1, arg2) addUserlog(arg0, arg1, arg2) end
function Exports.addVehicle(arg0) return addVehicle(arg0) end
function Exports.addVehicleDebug(arg0, arg1, arg2, arg3) return addVehicleDebug(arg0, arg1, arg2, arg3) end
function Exports.addVirtualZombie(arg0, arg1) addVirtualZombie(arg0, arg1) end
function Exports.addWarningPoint(arg0, arg1, arg2) addWarningPoint(arg0, arg1, arg2) end
function Exports.addZombieSitting(arg0, arg1, arg2) addZombieSitting(arg0, arg1, arg2) end
function Exports.addZombiesEating(arg0, arg1, arg2, arg3, arg4) addZombiesEating(arg0, arg1, arg2, arg3, arg4) end
function Exports.addZombiesInBuilding(arg0, arg1, arg2, arg3, arg4) return addZombiesInBuilding(arg0, arg1, arg2, arg3, arg4) end
function Exports.addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5) return addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) return addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) end
function Exports.addZombiesInOutfitArea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) return addZombiesInOutfitArea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) end
function Exports.assaultPlayer() assaultPlayer() end
function Exports.attachTrailerToPlayerVehicle(arg0) attachTrailerToPlayerVehicle(arg0) end
function Exports.backToSinglePlayer() backToSinglePlayer() end
function Exports.breakpoint() breakpoint() end
function Exports.canConnect() return canConnect() end
function Exports.canInviteFriends() return canInviteFriends() end
function Exports.canModifyPlayerScoreboard() return canModifyPlayerScoreboard() end
function Exports.canModifyPlayerStats() return canModifyPlayerStats() end
function Exports.canSeePlayerStats() return canSeePlayerStats() end
function Exports.checkPlayerCanUseChat(arg0) return checkPlayerCanUseChat(arg0) end
function Exports.checkSaveFileExists(arg0) return checkSaveFileExists(arg0) end
function Exports.checkSaveFolderExists(arg0) return checkSaveFolderExists(arg0) end
function Exports.checkSavePlayerExists() return checkSavePlayerExists() end
function Exports.checkServerName(arg0) return checkServerName(arg0) end
function Exports.cloneItemType(arg0, arg1) return cloneItemType(arg0, arg1) end
function Exports.configureLighting(arg0) configureLighting(arg0) end
function Exports.connectToServerStateCallback(arg0) connectToServerStateCallback(arg0) end
function Exports.copyTable(arg0, arg1) return copyTable(arg0, arg1) end
function Exports.copyTable(arg0) return copyTable(arg0) end
function Exports.createHordeFromTo(arg0, arg1, arg2, arg3, arg4) createHordeFromTo(arg0, arg1, arg2, arg3, arg4) end
function Exports.createHordeInAreaTo(arg0, arg1, arg2, arg3, arg4, arg5, arg6) createHordeInAreaTo(arg0, arg1, arg2, arg3, arg4, arg5, arg6) end
function Exports.createItemTransaction(arg0, arg1, arg2) createItemTransaction(arg0, arg1, arg2) end
function Exports.createNewScriptItem(arg0, arg1, arg2, arg3, arg4) return createNewScriptItem(arg0, arg1, arg2, arg3, arg4) end
function Exports.createRandomDeadBody(arg0, arg1) return createRandomDeadBody(arg0, arg1) end
function Exports.createRegionFile() return createRegionFile() end
function Exports.createStory(arg0) createStory(arg0) end
function Exports.createTile(arg0, arg1) createTile(arg0, arg1) end
function Exports.createWorld(arg0) createWorld(arg0) end
function Exports.createZombie(arg0, arg1, arg2, arg3, arg4, arg5) return createZombie(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.debugFullyStreamedIn(arg0, arg1) debugFullyStreamedIn(arg0, arg1) end
function Exports.debugLuaTable(arg0, arg1) debugLuaTable(arg0, arg1) end
function Exports.debugLuaTable(arg0) debugLuaTable(arg0) end
function Exports.deleteAllGameModeSaves(arg0) deleteAllGameModeSaves(arg0) end
function Exports.deletePlayerSave(arg0) deletePlayerSave(arg0) end
function Exports.deleteSandboxPreset(arg0) deleteSandboxPreset(arg0) end
function Exports.deleteSave(arg0) deleteSave(arg0) end
function Exports.disconnect() disconnect() end
function Exports.doChallenge(arg0) doChallenge(arg0) end
function Exports.doKeyPress(arg0) doKeyPress(arg0) end
function Exports.doTutorial(arg0) doTutorial(arg0) end
function Exports.drawOverheadMap(arg0, arg1, arg2, arg3) drawOverheadMap(arg0, arg1, arg2, arg3) end
function Exports.endFileInput() endFileInput() end
function Exports.endFileOutput() endFileOutput() end
function Exports.endHelicopter() endHelicopter() end
function Exports.endTextFileInput() endTextFileInput() end
function Exports.equals(arg0) return equals(arg0) end
function Exports.executeQuery(arg0, arg1) executeQuery(arg0, arg1) end
function Exports.fileExists(arg0) return fileExists(arg0) end
function Exports.focusOnTab(arg0) focusOnTab(arg0) end
function Exports.forceChangeState(arg0) forceChangeState(arg0) end
function Exports.forceDisconnect() forceDisconnect() end
function Exports.forceSnowCheck() forceSnowCheck() end
function Exports.getAbsoluteSaveFolderName(arg0) return getAbsoluteSaveFolderName(arg0) end
function Exports.getAccessLevel() return getAccessLevel() end
function Exports.getActivatedMods() return getActivatedMods() end
function Exports.getAllBeardStyles() return getAllBeardStyles() end
function Exports.getAllDecalNamesForItem(arg0) return getAllDecalNamesForItem(arg0) end
function Exports.getAllHairStyles(arg0) return getAllHairStyles(arg0) end
function Exports.getAllItems() return getAllItems() end
function Exports.getAllItemsForBodyLocation(arg0) return getAllItemsForBodyLocation(arg0) end
function Exports.getAllOutfits(arg0) return getAllOutfits(arg0) end
function Exports.getAllRecipes() return getAllRecipes() end
function Exports.getAllSavedPlayers() return getAllSavedPlayers() end
function Exports.getAllVehicles() return getAllVehicles() end
function Exports.getAmbientStreamManager() return getAmbientStreamManager() end
function Exports.getAnimationViewerState() return getAnimationViewerState() end
function Exports.getAttachmentEditorState() return getAttachmentEditorState() end
function Exports.getAverageFSP() return getAverageFSP() end
function Exports.getBeardStylesInstance() return getBeardStylesInstance() end
function Exports.getBehaviourDebugPlayer() return getBehaviourDebugPlayer() end
function Exports.getButtonCount(arg0) return getButtonCount(arg0) end
function Exports.getCallframeTop(arg0) return getCallframeTop(arg0) end
function Exports.getCameraOffX() return getCameraOffX() end
function Exports.getCameraOffY() return getCameraOffY() end
function Exports.getCell() return getCell() end
function Exports.getClass() return getClass() end
function Exports.getClassField(arg0, arg1) return getClassField(arg0, arg1) end
function Exports.getClassFieldVal(arg0, arg1) return getClassFieldVal(arg0, arg1) end
function Exports.getClassFunction(arg0, arg1) return getClassFunction(arg0, arg1) end
function Exports.getClientUsername() return getClientUsername() end
function Exports.getClimateManager() return getClimateManager() end
function Exports.getClimateMoon() return getClimateMoon() end
function Exports.getConnectedPlayers() return getConnectedPlayers() end
function Exports.getContainerOverlays() return getContainerOverlays() end
function Exports.getControllerAxisCount(arg0) return getControllerAxisCount(arg0) end
function Exports.getControllerAxisValue(arg0, arg1) return getControllerAxisValue(arg0, arg1) end
function Exports.getControllerButtonCount(arg0) return getControllerButtonCount(arg0) end
function Exports.getControllerCount() return getControllerCount() end
function Exports.getControllerDeadZone(arg0, arg1) return getControllerDeadZone(arg0, arg1) end
function Exports.getControllerGUID(arg0) return getControllerGUID(arg0) end
function Exports.getControllerName(arg0) return getControllerName(arg0) end
function Exports.getControllerPovX(arg0) return getControllerPovX(arg0) end
function Exports.getControllerPovY(arg0) return getControllerPovY(arg0) end
function Exports.getCore() return getCore() end
function Exports.getCoroutineCallframeStack(arg0, arg1) return getCoroutineCallframeStack(arg0, arg1) end
function Exports.getCoroutineObjStack(arg0, arg1) return getCoroutineObjStack(arg0, arg1) end
function Exports.getCoroutineObjStackWithBase(arg0, arg1) return getCoroutineObjStackWithBase(arg0, arg1) end
function Exports.getCoroutineTop(arg0) return getCoroutineTop(arg0) end
function Exports.getCurrentCoroutine() return getCurrentCoroutine() end
function Exports.getCurrentUserProfileName() return getCurrentUserProfileName() end
function Exports.getCurrentUserSteamID() return getCurrentUserSteamID() end
function Exports.getDBSchema() getDBSchema() end
function Exports.getDebug() return getDebug() end
function Exports.getDebugOptions() return getDebugOptions() end
function Exports.getDirectionTo(arg0, arg1) return getDirectionTo(arg0, arg1) end
function Exports.getEditVehicleState() return getEditVehicleState() end
function Exports.getErosion() return getErosion() end
function Exports.getEvolvedRecipes() return getEvolvedRecipes() end
function Exports.getFMODSoundBank() return getFMODSoundBank() end
function Exports.getFileInput(arg0) return getFileInput(arg0) end
function Exports.getFileOutput(arg0) return getFileOutput(arg0) end
function Exports.getFileReader(arg0, arg1) return getFileReader(arg0, arg1) end
function Exports.getFileSeparator() return getFileSeparator() end
function Exports.getFileWriter(arg0, arg1, arg2) return getFileWriter(arg0, arg1, arg2) end
function Exports.getFilenameOfCallframe(arg0) return getFilenameOfCallframe(arg0) end
function Exports.getFilenameOfClosure(arg0) return getFilenameOfClosure(arg0) end
function Exports.getFirstLineOfClosure(arg0) return getFirstLineOfClosure(arg0) end
function Exports.getFriendsList() return getFriendsList() end
function Exports.getFullSaveDirectoryTable() return getFullSaveDirectoryTable() end
function Exports.getGameClient() return getGameClient() end
function Exports.getGameFilesInput(arg0) return getGameFilesInput(arg0) end
function Exports.getGameFilesTextInput(arg0) return getGameFilesTextInput(arg0) end
function Exports.getGameSpeed() return getGameSpeed() end
function Exports.getGameTime() return getGameTime() end
function Exports.getGametimeTimestamp() return getGametimeTimestamp() end
function Exports.getHairStylesInstance() return getHairStylesInstance() end
function Exports.getHourMinute() return getHourMinute() end
function Exports.getIsoMarkers() return getIsoMarkers() end
function Exports.getItemNameFromFullType(arg0) return getItemNameFromFullType(arg0) end
function Exports.getItemText(arg0) return getItemText(arg0) end
function Exports.getJoypadAButton(arg0) return getJoypadAButton(arg0) end
function Exports.getJoypadAimingAxisX(arg0) return getJoypadAimingAxisX(arg0) end
function Exports.getJoypadAimingAxisY(arg0) return getJoypadAimingAxisY(arg0) end
function Exports.getJoypadBButton(arg0) return getJoypadBButton(arg0) end
function Exports.getJoypadBackButton(arg0) return getJoypadBackButton(arg0) end
function Exports.getJoypadLBumper(arg0) return getJoypadLBumper(arg0) end
function Exports.getJoypadLeftStickButton(arg0) return getJoypadLeftStickButton(arg0) end
function Exports.getJoypadMovementAxisX(arg0) return getJoypadMovementAxisX(arg0) end
function Exports.getJoypadMovementAxisY(arg0) return getJoypadMovementAxisY(arg0) end
function Exports.getJoypadRBumper(arg0) return getJoypadRBumper(arg0) end
function Exports.getJoypadRightStickButton(arg0) return getJoypadRightStickButton(arg0) end
function Exports.getJoypadStartButton(arg0) return getJoypadStartButton(arg0) end
function Exports.getJoypadXButton(arg0) return getJoypadXButton(arg0) end
function Exports.getJoypadYButton(arg0) return getJoypadYButton(arg0) end
function Exports.getKeyCode(arg0) return getKeyCode(arg0) end
function Exports.getKeyName(arg0) return getKeyName(arg0) end
function Exports.getLastPlayedDate(arg0) return getLastPlayedDate(arg0) end
function Exports.getLastStandPlayerFileNames() return getLastStandPlayerFileNames() end
function Exports.getLastStandPlayersDirectory() return getLastStandPlayersDirectory() end
function Exports.getLatestSave() return getLatestSave() end
function Exports.getLineNumber(arg0) return getLineNumber(arg0) end
function Exports.getLoadedLua(arg0) return getLoadedLua(arg0) end
function Exports.getLoadedLuaCount() return getLoadedLuaCount() end
function Exports.getLocalVarCount(arg0) return getLocalVarCount(arg0) end
function Exports.getLocalVarName(arg0, arg1) return getLocalVarName(arg0, arg1) end
function Exports.getLocalVarStack(arg0, arg1) return getLocalVarStack(arg0, arg1) end
function Exports.getLotDirectories() return getLotDirectories() end
function Exports.getLuaDebuggerErrorCount() return getLuaDebuggerErrorCount() end
function Exports.getLuaDebuggerErrors() return getLuaDebuggerErrors() end
function Exports.getMapDirectoryTable() return getMapDirectoryTable() end
function Exports.getMapFoldersForMod(arg0) return getMapFoldersForMod(arg0) end
function Exports.getMapInfo(arg0) return getMapInfo(arg0) end
function Exports.getMaxActivePlayers() return getMaxActivePlayers() end
function Exports.getMaxPlayers() return getMaxPlayers() end
function Exports.getMethodParameter(arg0, arg1) return getMethodParameter(arg0, arg1) end
function Exports.getMethodParameterCount(arg0) return getMethodParameterCount(arg0) end
function Exports.getModDirectoryTable() return getModDirectoryTable() end
function Exports.getModFileReader(arg0, arg1, arg2) return getModFileReader(arg0, arg1, arg2) end
function Exports.getModFileWriter(arg0, arg1, arg2, arg3) return getModFileWriter(arg0, arg1, arg2, arg3) end
function Exports.getModInfo(arg0) return getModInfo(arg0) end
function Exports.getModInfoByID(arg0) return getModInfoByID(arg0) end
function Exports.getMods() return getMods() end
function Exports.getMouseX() return getMouseX() end
function Exports.getMouseXScaled() return getMouseXScaled() end
function Exports.getMouseY() return getMouseY() end
function Exports.getMouseYScaled() return getMouseYScaled() end
function Exports.getMyDocumentFolder() return getMyDocumentFolder() end
function Exports.getNumActivePlayers() return getNumActivePlayers() end
function Exports.getNumClassFields(arg0) return getNumClassFields(arg0) end
function Exports.getNumClassFunctions(arg0) return getNumClassFunctions(arg0) end
function Exports.getOnlinePlayers() return getOnlinePlayers() end
function Exports.getOnlineUsername() return getOnlineUsername() end
function Exports.getPacketCounts(arg0) return getPacketCounts(arg0) end
function Exports.getPerformance() return getPerformance() end
function Exports.getPlayer() return getPlayer() end
function Exports.getPlayerByOnlineID(arg0) return getPlayerByOnlineID(arg0) end
function Exports.getPlayerFromUsername(arg0) return getPlayerFromUsername(arg0) end
function Exports.getPlayerInfo(arg0) return getPlayerInfo(arg0) end
function Exports.getPlayerScreenHeight(arg0) return getPlayerScreenHeight(arg0) end
function Exports.getPlayerScreenLeft(arg0) return getPlayerScreenLeft(arg0) end
function Exports.getPlayerScreenTop(arg0) return getPlayerScreenTop(arg0) end
function Exports.getPlayerScreenWidth(arg0) return getPlayerScreenWidth(arg0) end
function Exports.getPublicServersList() return getPublicServersList() end
function Exports.getPuddlesManager() return getPuddlesManager() end
function Exports.getRadioAPI() return getRadioAPI() end
function Exports.getRadioText(arg0) return getRadioText(arg0) end
function Exports.getRadioTranslators(arg0) return getRadioTranslators(arg0) end
function Exports.getRandomUUID() return getRandomUUID() end
function Exports.getRecipeDisplayName(arg0) return getRecipeDisplayName(arg0) end
function Exports.getReconnectCountdownTimer() return getReconnectCountdownTimer() end
function Exports.getRenderer() return getRenderer() end
function Exports.getSLSoundManager() return getSLSoundManager() end
function Exports.getSandboxFileWriter(arg0, arg1, arg2) return getSandboxFileWriter(arg0, arg1, arg2) end
function Exports.getSandboxOptions() return getSandboxOptions() end
function Exports.getSandboxPresets() return getSandboxPresets() end
function Exports.getSaveDirectory(arg0) return getSaveDirectory(arg0) end
function Exports.getSaveDirectoryTable() return getSaveDirectoryTable() end
function Exports.getSaveInfo(arg0) return getSaveInfo(arg0) end
function Exports.getSaveName(arg0) return getSaveName(arg0) end
function Exports.getScriptManager() return getScriptManager() end
function Exports.getSearchMode() return getSearchMode() end
function Exports.getServerAddressFromArgs() return getServerAddressFromArgs() end
function Exports.getServerList() return getServerList() end
function Exports.getServerListFile() return getServerListFile() end
function Exports.getServerModData() getServerModData() end
function Exports.getServerName() return getServerName() end
function Exports.getServerOptions() return getServerOptions() end
function Exports.getServerPasswordFromArgs() return getServerPasswordFromArgs() end
function Exports.getServerSavedWorldVersion(arg0) return getServerSavedWorldVersion(arg0) end
function Exports.getServerSettingsManager() return getServerSettingsManager() end
function Exports.getServerSpawnRegions() return getServerSpawnRegions() end
function Exports.getServerStatistic() return getServerStatistic() end
function Exports.getServerStatisticEnable() return getServerStatisticEnable() end
function Exports.getShortenedFilename(arg0) return getShortenedFilename(arg0) end
function Exports.getSleepingEvent() return getSleepingEvent() end
function Exports.getSoundManager() return getSoundManager() end
function Exports.getSpecificPlayer(arg0) return getSpecificPlayer(arg0) end
function Exports.getSprite(arg0) return getSprite(arg0) end
function Exports.getSpriteManager(arg0) return getSpriteManager(arg0) end
function Exports.getSquare(arg0, arg1, arg2) return getSquare(arg0, arg1, arg2) end
function Exports.getStatistics() return getStatistics() end
function Exports.getSteamAvatarFromSteamID(arg0) return getSteamAvatarFromSteamID(arg0) end
function Exports.getSteamAvatarFromUsername(arg0) return getSteamAvatarFromUsername(arg0) end
function Exports.getSteamIDFromUsername(arg0) return getSteamIDFromUsername(arg0) end
function Exports.getSteamModeActive() return getSteamModeActive() end
function Exports.getSteamProfileNameFromSteamID(arg0) return getSteamProfileNameFromSteamID(arg0) end
function Exports.getSteamProfileNameFromUsername(arg0) return getSteamProfileNameFromUsername(arg0) end
function Exports.getSteamScoreboard() return getSteamScoreboard() end
function Exports.getSteamWorkshopItemIDs() return getSteamWorkshopItemIDs() end
function Exports.getSteamWorkshopItemMods(arg0) return getSteamWorkshopItemMods(arg0) end
function Exports.getSteamWorkshopStagedItems() return getSteamWorkshopStagedItems() end
function Exports.getTableResult(arg0, arg1) getTableResult(arg0, arg1) end
function Exports.getText(arg0, arg1) return getText(arg0, arg1) end
function Exports.getText(arg0) return getText(arg0) end
function Exports.getText(arg0, arg1, arg2, arg3, arg4) return getText(arg0, arg1, arg2, arg3, arg4) end
function Exports.getText(arg0, arg1, arg2) return getText(arg0, arg1, arg2) end
function Exports.getText(arg0, arg1, arg2, arg3) return getText(arg0, arg1, arg2, arg3) end
function Exports.getTextManager() return getTextManager() end
function Exports.getTextMediaEN(arg0) return getTextMediaEN(arg0) end
function Exports.getTextOrNull(arg0, arg1, arg2, arg3, arg4) return getTextOrNull(arg0, arg1, arg2, arg3, arg4) end
function Exports.getTextOrNull(arg0, arg1, arg2) return getTextOrNull(arg0, arg1, arg2) end
function Exports.getTextOrNull(arg0, arg1) return getTextOrNull(arg0, arg1) end
function Exports.getTextOrNull(arg0) return getTextOrNull(arg0) end
function Exports.getTextOrNull(arg0, arg1, arg2, arg3) return getTextOrNull(arg0, arg1, arg2, arg3) end
function Exports.getTexture(arg0) return getTexture(arg0) end
function Exports.getTextureFromSaveDir(arg0, arg1) return getTextureFromSaveDir(arg0, arg1) end
function Exports.getTickets(arg0) getTickets(arg0) end
function Exports.getTileOverlays() return getTileOverlays() end
function Exports.getTime() return getTime() end
function Exports.getTimeInMillis() return getTimeInMillis() end
function Exports.getTimestamp() return getTimestamp() end
function Exports.getTimestampMs() return getTimestampMs() end
function Exports.getTranslatorCredits(arg0) return getTranslatorCredits(arg0) end
function Exports.getUrlInputStream(arg0) return getUrlInputStream(arg0) end
function Exports.getVehicleById(arg0) return getVehicleById(arg0) end
function Exports.getVehicleInfo(arg0) return getVehicleInfo(arg0) end
function Exports.getVehicleZoneAt(arg0, arg1, arg2) return getVehicleZoneAt(arg0, arg1, arg2) end
function Exports.getWorld() return getWorld() end
function Exports.getWorldMarkers() return getWorldMarkers() end
function Exports.getWorldSoundManager() return getWorldSoundManager() end
function Exports.getZombieInfo(arg0) return getZombieInfo(arg0) end
function Exports.getZomboidRadio() return getZomboidRadio() end
function Exports.getZone(arg0, arg1, arg2) return getZone(arg0, arg1, arg2) end
function Exports.getZones(arg0, arg1, arg2) return getZones(arg0, arg1, arg2) end
function Exports.hasBreakpoint(arg0, arg1) return hasBreakpoint(arg0, arg1) end
function Exports.hasDataBreakpoint(arg0, arg1) return hasDataBreakpoint(arg0, arg1) end
function Exports.hasDataReadBreakpoint(arg0, arg1) return hasDataReadBreakpoint(arg0, arg1) end
function Exports.hashCode() return hashCode() end
function Exports.initUISystem() initUISystem() end
function Exports.instanceItem(arg0) return instanceItem(arg0) end
function Exports.instanceItem(arg0) return instanceItem(arg0) end
function Exports.instof(arg0, arg1) return instof(arg0, arg1) end
function Exports.inviteFriend(arg0) inviteFriend(arg0) end
function Exports.is64bit() return is64bit() end
function Exports.isAccessLevel(arg0) return isAccessLevel(arg0) end
function Exports.isAdmin() return isAdmin() end
function Exports.isAltKeyDown() return isAltKeyDown() end
function Exports.isClient() return isClient() end
function Exports.isControllerConnected(arg0) return isControllerConnected(arg0) end
function Exports.isCoopHost() return isCoopHost() end
function Exports.isCtrlKeyDown() return isCtrlKeyDown() end
function Exports.isCurrentExecutionPoint(arg0, arg1) return isCurrentExecutionPoint(arg0, arg1) end
function Exports.isDebugEnabled() return isDebugEnabled() end
function Exports.isDemo() return isDemo() end
function Exports.isDesktopOpenSupported() return isDesktopOpenSupported() end
function Exports.isFloatingGamepadTextInputVisible() return isFloatingGamepadTextInputVisible() end
function Exports.isGamePaused() return isGamePaused() end
function Exports.isIngameState() return isIngameState() end
function Exports.isItemTransactionConsistent(arg0, arg1, arg2) return isItemTransactionConsistent(arg0, arg1, arg2) end
function Exports.isJoypadConnected(arg0) return isJoypadConnected(arg0) end
function Exports.isJoypadDown(arg0) return isJoypadDown(arg0) end
function Exports.isJoypadLBPressed(arg0) return isJoypadLBPressed(arg0) end
function Exports.isJoypadLTPressed(arg0) return isJoypadLTPressed(arg0) end
function Exports.isJoypadLeft(arg0) return isJoypadLeft(arg0) end
function Exports.isJoypadLeftStickButtonPressed(arg0) return isJoypadLeftStickButtonPressed(arg0) end
function Exports.isJoypadPressed(arg0, arg1) return isJoypadPressed(arg0, arg1) end
function Exports.isJoypadRBPressed(arg0) return isJoypadRBPressed(arg0) end
function Exports.isJoypadRTPressed(arg0) return isJoypadRTPressed(arg0) end
function Exports.isJoypadRight(arg0) return isJoypadRight(arg0) end
function Exports.isJoypadRightStickButtonPressed(arg0) return isJoypadRightStickButtonPressed(arg0) end
function Exports.isJoypadUp(arg0) return isJoypadUp(arg0) end
function Exports.isKeyDown(arg0) return isKeyDown(arg0) end
function Exports.isKeyPressed(arg0) return isKeyPressed(arg0) end
function Exports.isModActive(arg0) return isModActive(arg0) end
function Exports.isMouseButtonDown(arg0) return isMouseButtonDown(arg0) end
function Exports.isPublicServerListAllowed() return isPublicServerListAllowed() end
function Exports.isServer() return isServer() end
function Exports.isServerSoftReset() return isServerSoftReset() end
function Exports.isShiftKeyDown() return isShiftKeyDown() end
function Exports.isSoundPlaying(arg0) return isSoundPlaying(arg0) end
function Exports.isSteamOverlayEnabled() return isSteamOverlayEnabled() end
function Exports.isSteamRunningOnSteamDeck() return isSteamRunningOnSteamDeck() end
function Exports.isSystemLinux() return isSystemLinux() end
function Exports.isSystemMacOS() return isSystemMacOS() end
function Exports.isSystemWindows() return isSystemWindows() end
function Exports.isType(arg0, arg1) return isType(arg0, arg1) end
function Exports.isValidSteamID(arg0) return isValidSteamID(arg0) end
function Exports.isValidUserName(arg0) return isValidUserName(arg0) end
function Exports.isXBOXController() return isXBOXController() end
function Exports.isoRegionsRenderer() return isoRegionsRenderer() end
function Exports.isoToScreenX(arg0, arg1, arg2, arg3) return isoToScreenX(arg0, arg1, arg2, arg3) end
function Exports.isoToScreenY(arg0, arg1, arg2, arg3) return isoToScreenY(arg0, arg1, arg2, arg3) end
function Exports.loadSkinnedZomboidModel(arg0, arg1, arg2) return loadSkinnedZomboidModel(arg0, arg1, arg2) end
function Exports.loadStaticZomboidModel(arg0, arg1, arg2) return loadStaticZomboidModel(arg0, arg1, arg2) end
function Exports.loadVehicleModel(arg0, arg1, arg2) return loadVehicleModel(arg0, arg1, arg2) end
function Exports.loadZomboidModel(arg0, arg1, arg2, arg3, arg4) return loadZomboidModel(arg0, arg1, arg2, arg3, arg4) end
function Exports.localVarName(arg0, arg1) return localVarName(arg0, arg1) end
function Exports.luaDebug() luaDebug() end
function Exports.manipulateSavefile(arg0, arg1) manipulateSavefile(arg0, arg1) end
function Exports.moduleDotType(arg0, arg1) return moduleDotType(arg0, arg1) end
function Exports.notify() notify() end
function Exports.notifyAll() notifyAll() end
function Exports.openURl(arg0) openURl(arg0) end
function Exports.pauseSoundAndMusic() pauseSoundAndMusic() end
function Exports.ping(arg0, arg1, arg2, arg3) ping(arg0, arg1, arg2, arg3) end
function Exports.playServerSound(arg0, arg1) playServerSound(arg0, arg1) end
function Exports.proceedPM(arg0) return proceedPM(arg0) end
function Exports.processGeneralMessage(arg0) processGeneralMessage(arg0) end
function Exports.processSayMessage(arg0) processSayMessage(arg0) end
function Exports.processShoutMessage(arg0) processShoutMessage(arg0) end
function Exports.querySteamWorkshopItemDetails(arg0, arg1, arg2) querySteamWorkshopItemDetails(arg0, arg1, arg2) end
function Exports.queueCharEvent(arg0) queueCharEvent(arg0) end
function Exports.queueKeyEvent(arg0) queueKeyEvent(arg0) end
function Exports.rainConfig(arg0, arg1) rainConfig(arg0, arg1) end
function Exports.reactivateJoypadAfterResetLua() return reactivateJoypadAfterResetLua() end
function Exports.refreshAnimSets(arg0) refreshAnimSets(arg0) end
function Exports.reloadActionGroups() reloadActionGroups() end
function Exports.reloadControllerConfigFiles() reloadControllerConfigFiles() end
function Exports.reloadEngineRPM() reloadEngineRPM() end
function Exports.reloadLuaFile(arg0) reloadLuaFile(arg0) end
function Exports.reloadModelsMatching(arg0) reloadModelsMatching(arg0) end
function Exports.reloadServerLuaFile(arg0) reloadServerLuaFile(arg0) end
function Exports.reloadSoundFiles() reloadSoundFiles() end
function Exports.reloadVehicleTextures(arg0) reloadVehicleTextures(arg0) end
function Exports.reloadVehicles() reloadVehicles() end
function Exports.removeItemTransaction(arg0, arg1, arg2) removeItemTransaction(arg0, arg1, arg2) end
function Exports.removeTicket(arg0) removeTicket(arg0) end
function Exports.removeUserlog(arg0, arg1, arg2) removeUserlog(arg0, arg1, arg2) end
function Exports.renderIsoCircle(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) renderIsoCircle(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) end
function Exports.replaceWith(arg0, arg1, arg2) return replaceWith(arg0, arg1, arg2) end
function Exports.requestPacketCounts() requestPacketCounts() end
function Exports.requestTrading(arg0, arg1) requestTrading(arg0, arg1) end
function Exports.requestUserlog(arg0) requestUserlog(arg0) end
function Exports.require(arg0) return require(arg0) end
function Exports.resetRegionFile() resetRegionFile() end
function Exports.resumeSoundAndMusic() resumeSoundAndMusic() end
function Exports.revertToKeyboardAndMouse() revertToKeyboardAndMouse() end
function Exports.sanitizeWorldName(arg0) return sanitizeWorldName(arg0) end
function Exports.save(arg0) save(arg0) end
function Exports.saveControllerSettings(arg0) saveControllerSettings(arg0) end
function Exports.saveGame() saveGame() end
function Exports.saveModsFile() saveModsFile() end
function Exports.scoreboardUpdate() scoreboardUpdate() end
function Exports.screenToIsoX(arg0, arg1, arg2, arg3) return screenToIsoX(arg0, arg1, arg2, arg3) end
function Exports.screenToIsoY(arg0, arg1, arg2, arg3) return screenToIsoY(arg0, arg1, arg2, arg3) end
function Exports.screenZoomIn() screenZoomIn() end
function Exports.screenZoomOut() screenZoomOut() end
function Exports.sendAddXp(arg0, arg1, arg2) sendAddXp(arg0, arg1, arg2) end
function Exports.sendBandage(arg0, arg1, arg2, arg3, arg4, arg5) sendBandage(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.sendCataplasm(arg0, arg1, arg2, arg3, arg4) sendCataplasm(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendCleanBurn(arg0, arg1, arg2, arg3) sendCleanBurn(arg0, arg1, arg2, arg3) end
function Exports.sendClientCommand(arg0, arg1, arg2, arg3) sendClientCommand(arg0, arg1, arg2, arg3) end
function Exports.sendClientCommand(arg0, arg1, arg2) sendClientCommand(arg0, arg1, arg2) end
function Exports.sendClothing(arg0) sendClothing(arg0) end
function Exports.sendDisinfect(arg0, arg1, arg2, arg3) sendDisinfect(arg0, arg1, arg2, arg3) end
function Exports.sendFactionInvite(arg0, arg1, arg2) sendFactionInvite(arg0, arg1, arg2) end
function Exports.sendItemListNet(arg0, arg1, arg2, arg3, arg4) return sendItemListNet(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendItemsInContainer(arg0, arg1) sendItemsInContainer(arg0, arg1) end
function Exports.sendPersonalColor(arg0) sendPersonalColor(arg0) end
function Exports.sendPing() sendPing() end
function Exports.sendPlayerExtraInfo(arg0) sendPlayerExtraInfo(arg0) end
function Exports.sendPlayerStatsChange(arg0) sendPlayerStatsChange(arg0) end
function Exports.sendRemoveBullet(arg0, arg1, arg2) sendRemoveBullet(arg0, arg1, arg2) end
function Exports.sendRemoveGlass(arg0, arg1, arg2, arg3) sendRemoveGlass(arg0, arg1, arg2, arg3) end
function Exports.sendRequestInventory(arg0) sendRequestInventory(arg0) end
function Exports.sendSafehouseInvite(arg0, arg1, arg2) sendSafehouseInvite(arg0, arg1, arg2) end
function Exports.sendServerCommand(arg0, arg1, arg2, arg3) sendServerCommand(arg0, arg1, arg2, arg3) end
function Exports.sendServerCommand(arg0, arg1, arg2) sendServerCommand(arg0, arg1, arg2) end
function Exports.sendSplint(arg0, arg1, arg2, arg3, arg4) sendSplint(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendStitch(arg0, arg1, arg2, arg3, arg4) sendStitch(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendVisual(arg0) sendVisual(arg0) end
function Exports.serverConnect(arg0, arg1, arg2, arg3, arg4, arg5) serverConnect(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.serverConnectCoop(arg0) serverConnectCoop(arg0) end
function Exports.serverFileExists(arg0) return serverFileExists(arg0) end
function Exports.setActivePlayer(arg0) setActivePlayer(arg0) end
function Exports.setAdmin() setAdmin() end
function Exports.setAggroTarget(arg0, arg1, arg2) setAggroTarget(arg0, arg1, arg2) end
function Exports.setBehaviorStep(arg0) setBehaviorStep(arg0) end
function Exports.setControllerDeadZone(arg0, arg1, arg2) setControllerDeadZone(arg0, arg1, arg2) end
function Exports.setDebugToggleControllerPluggedIn(arg0) setDebugToggleControllerPluggedIn(arg0) end
function Exports.setGameSpeed(arg0) setGameSpeed(arg0) end
function Exports.setModelMetaData(arg0, arg1, arg2, arg3, arg4) setModelMetaData(arg0, arg1, arg2, arg3, arg4) end
function Exports.setMouseXY(arg0, arg1) setMouseXY(arg0, arg1) end
function Exports.setPlayerJoypad(arg0, arg1, arg2, arg3) setPlayerJoypad(arg0, arg1, arg2, arg3) end
function Exports.setPlayerMouse(arg0) setPlayerMouse(arg0) end
function Exports.setPlayerMovementActive(arg0, arg1) setPlayerMovementActive(arg0, arg1) end
function Exports.setProgressBarValue(arg0, arg1) setProgressBarValue(arg0, arg1) end
function Exports.setPuddles(arg0) setPuddles(arg0) end
function Exports.setSavefilePlayer1(arg0, arg1, arg2) setSavefilePlayer1(arg0, arg1, arg2) end
function Exports.setServerStatisticEnable(arg0) setServerStatisticEnable(arg0) end
function Exports.setShowPausedMessage(arg0) setShowPausedMessage(arg0) end
function Exports.showAnimationViewer() showAnimationViewer() end
function Exports.showAttachmentEditor() showAttachmentEditor() end
function Exports.showChunkDebugger() showChunkDebugger() end
function Exports.showFolderInDesktop(arg0) showFolderInDesktop(arg0) end
function Exports.showGlobalObjectDebugger() showGlobalObjectDebugger() end
function Exports.showSteamFloatingGamepadTextInput(arg0, arg1, arg2, arg3, arg4) return showSteamFloatingGamepadTextInput(arg0, arg1, arg2, arg3, arg4) end
function Exports.showSteamGamepadTextInput(arg0, arg1, arg2, arg3, arg4) return showSteamGamepadTextInput(arg0, arg1, arg2, arg3, arg4) end
function Exports.showVehicleEditor(arg0) showVehicleEditor(arg0) end
function Exports.showWorldMapEditor(arg0) showWorldMapEditor(arg0) end
function Exports.showWrongChatTabMessage(arg0, arg1, arg2) showWrongChatTabMessage(arg0, arg1, arg2) end
function Exports.sledgeDestroy(arg0) sledgeDestroy(arg0) end
function Exports.spawnHorde(arg0, arg1, arg2, arg3, arg4, arg5) spawnHorde(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.spawnpointsExistsForMod(arg0, arg1) return spawnpointsExistsForMod(arg0, arg1) end
function Exports.steamGetInternetServerDetails(arg0) return steamGetInternetServerDetails(arg0) end
function Exports.steamReleaseInternetServersRequest() steamReleaseInternetServersRequest() end
function Exports.steamRequestInternetServersCount() return steamRequestInternetServersCount() end
function Exports.steamRequestInternetServersList() steamRequestInternetServersList() end
function Exports.steamRequestServerDetails(arg0, arg1) return steamRequestServerDetails(arg0, arg1) end
function Exports.steamRequestServerRules(arg0, arg1) return steamRequestServerRules(arg0, arg1) end
function Exports.stopPing() stopPing() end
function Exports.stopSound(arg0) stopSound(arg0) end
function Exports.tabToX(arg0, arg1) return tabToX(arg0, arg1) end
function Exports.takeScreenshot() takeScreenshot() end
function Exports.takeScreenshot(arg0) takeScreenshot(arg0) end
function Exports.testHelicopter() testHelicopter() end
function Exports.testSound() testSound() end
function Exports.timSort(arg0, arg1) timSort(arg0, arg1) end
function Exports.toInt(arg0) return toInt(arg0) end
function Exports.toString() return toString() end
function Exports.toggleBreakOnChange(arg0, arg1) toggleBreakOnChange(arg0, arg1) end
function Exports.toggleBreakOnRead(arg0, arg1) toggleBreakOnRead(arg0, arg1) end
function Exports.toggleBreakpoint(arg0, arg1) toggleBreakpoint(arg0, arg1) end
function Exports.toggleModActive(arg0, arg1) toggleModActive(arg0, arg1) end
function Exports.toggleSafetyServer(arg0) toggleSafetyServer(arg0) end
function Exports.toggleVehicleRenderToTexture() toggleVehicleRenderToTexture() end
function Exports.tradingUISendAddItem(arg0, arg1, arg2) tradingUISendAddItem(arg0, arg1, arg2) end
function Exports.tradingUISendRemoveItem(arg0, arg1, arg2) tradingUISendRemoveItem(arg0, arg1, arg2) end
function Exports.tradingUISendUpdateState(arg0, arg1, arg2) tradingUISendUpdateState(arg0, arg1, arg2) end
function Exports.transformIntoKahluaTable(arg0) return transformIntoKahluaTable(arg0) end
function Exports.translatePointXInOverheadMapToWindow(arg0, arg1, arg2, arg3) return translatePointXInOverheadMapToWindow(arg0, arg1, arg2, arg3) end
function Exports.translatePointXInOverheadMapToWorld(arg0, arg1, arg2, arg3) return translatePointXInOverheadMapToWorld(arg0, arg1, arg2, arg3) end
function Exports.translatePointYInOverheadMapToWindow(arg0, arg1, arg2, arg3) return translatePointYInOverheadMapToWindow(arg0, arg1, arg2, arg3) end
function Exports.translatePointYInOverheadMapToWorld(arg0, arg1, arg2, arg3) return translatePointYInOverheadMapToWorld(arg0, arg1, arg2, arg3) end
function Exports.triggerEvent(arg0, arg1, arg2, arg3, arg4) triggerEvent(arg0, arg1, arg2, arg3, arg4) end
function Exports.triggerEvent(arg0, arg1, arg2, arg3) triggerEvent(arg0, arg1, arg2, arg3) end
function Exports.triggerEvent(arg0, arg1, arg2) triggerEvent(arg0, arg1, arg2) end
function Exports.triggerEvent(arg0) triggerEvent(arg0) end
function Exports.triggerEvent(arg0, arg1) triggerEvent(arg0, arg1) end
function Exports.updateChatSettings(arg0, arg1, arg2) updateChatSettings(arg0, arg1, arg2) end
function Exports.updateFire() updateFire() end
function Exports.useStaticErosionRand(arg0) useStaticErosionRand(arg0) end
function Exports.useTextureFiltering(arg0) useTextureFiltering(arg0) end
function Exports.wait(arg0, arg1) wait(arg0, arg1) end
function Exports.wait() wait() end
function Exports.wait(arg0) wait(arg0) end
function Exports.wasKeyDown(arg0) return wasKeyDown(arg0) end
function Exports.wasMouseActiveMoreRecentlyThanJoypad() return wasMouseActiveMoreRecentlyThanJoypad() end
function Exports.writeLog(arg0, arg1) writeLog(arg0, arg1) end
function Exports.zpopClearZombies(arg0, arg1) zpopClearZombies(arg0, arg1) end
function Exports.zpopNewRenderer() return zpopNewRenderer() end
function Exports.zpopSpawnNow(arg0, arg1) zpopSpawnNow(arg0, arg1) end
function Exports.zpopSpawnTimeToZero(arg0, arg1) zpopSpawnTimeToZero(arg0, arg1) end

-------------------------------------------------------------------

Exports.Vector2f = loadstring("return _G['Vector2f']")();
Exports.Vector3f = loadstring("return _G['Vector3f']")();
Exports.Keyboard = loadstring("return _G['Keyboard']")();
Exports.EmitterType = loadstring("return _G['EmitterType']")();
Exports.FMODSoundBank = loadstring("return _G['FMODSoundBank']")();
Exports.FMODSoundEmitter = loadstring("return _G['FMODSoundEmitter']")();
Exports.FMODAudio = loadstring("return _G['FMODAudio']")();
Exports.KahluaUtil = loadstring("return _G['KahluaUtil']")();
Exports.HashMap = loadstring("return _G['HashMap']")();
Exports.ArrayList = loadstring("return _G['ArrayList']")();
Exports.Iterator = loadstring("return _G['Iterator']")();
Exports.EnumMap = loadstring("return _G['EnumMap']")();
Exports.Vector = loadstring("return _G['Vector']")();
Exports.LinkedList = loadstring("return _G['LinkedList']")();
Exports.Stack = loadstring("return _G['Stack']")();
Exports.DataOutputStream = loadstring("return _G['DataOutputStream']")();
Exports.DataInputStream = loadstring("return _G['DataInputStream']")();
Exports.BufferedWriter = loadstring("return _G['BufferedWriter']")();
Exports.BufferedReader = loadstring("return _G['BufferedReader']")();
Exports.SimpleDateFormat = loadstring("return _G['SimpleDateFormat']")();
Exports.Math = loadstring("return _G['Math']")();
Exports.WorldMapLineStyleLayerV1 = loadstring("return _G['WorldMapLineStyleLayerV1']")();
Exports.WorldMapTextureStyleLayerV1 = loadstring("return _G['WorldMapTextureStyleLayerV1']")();
Exports.FilterArgs = loadstring("return _G['FilterArgs']")();
Exports.Stop = loadstring("return _G['Stop']")();
Exports.FloatStop = loadstring("return _G['FloatStop']")();
Exports.ColorStop = loadstring("return _G['ColorStop']")();
Exports.RenderArgs = loadstring("return _G['RenderArgs']")();
Exports.WorldMapStyleLayerV1 = loadstring("return _G['WorldMapStyleLayerV1']")();
Exports.WorldMapStyleLayer = loadstring("return _G['WorldMapStyleLayer']")();
Exports.RGBAf = loadstring("return _G['RGBAf']")();
Exports.WorldMapPolygonStyleLayerV1 = loadstring("return _G['WorldMapPolygonStyleLayerV1']")();
Exports.IWorldMapStyleFilter = loadstring("return _G['IWorldMapStyleFilter']")();
Exports.WorldMapStyleV1 = loadstring("return _G['WorldMapStyleV1']")();
Exports.WorldMapStyle = loadstring("return _G['WorldMapStyle']")();
Exports.TextureStop = loadstring("return _G['TextureStop']")();
Exports.WorldMapMarkerV1 = loadstring("return _G['WorldMapMarkerV1']")();
Exports.WorldMapGridSquareMarker = loadstring("return _G['WorldMapGridSquareMarker']")();
Exports.WorldMapMarkersV1 = loadstring("return _G['WorldMapMarkersV1']")();
Exports.WorldMapMarkers = loadstring("return _G['WorldMapMarkers']")();
Exports.WorldMapGridSquareMarkerV1 = loadstring("return _G['WorldMapGridSquareMarkerV1']")();
Exports.WorldMapMarker = loadstring("return _G['WorldMapMarker']")();
Exports.WorldMapTextureSymbol = loadstring("return _G['WorldMapTextureSymbol']")();
Exports.WorldMapBaseSymbol = loadstring("return _G['WorldMapBaseSymbol']")();
Exports.WorldMapSymbols = loadstring("return _G['WorldMapSymbols']")();
Exports.WorldMapSymbolsV1 = loadstring("return _G['WorldMapSymbolsV1']")();
Exports.WorldMapSymbolType = loadstring("return _G['WorldMapSymbolType']")();
Exports.WorldMapTextureSymbolV1 = loadstring("return _G['WorldMapTextureSymbolV1']")();
Exports.WorldMapBaseSymbolV1 = loadstring("return _G['WorldMapBaseSymbolV1']")();
Exports.WorldMapTextSymbol = loadstring("return _G['WorldMapTextSymbol']")();
Exports.WorldMapSymbolCollisions = loadstring("return _G['WorldMapSymbolCollisions']")();
Exports.WorldMapTextSymbolV1 = loadstring("return _G['WorldMapTextSymbolV1']")();
Exports.WorldMapDoubleOption = loadstring("return _G['WorldMapDoubleOption']")();
Exports.Type = loadstring("return _G['Type']")();
Exports.WorldMapRenderer = loadstring("return _G['WorldMapRenderer']")();
Exports.WorldMapPoints = loadstring("return _G['WorldMapPoints']")();
Exports.PyramidTexture = loadstring("return _G['PyramidTexture']")();
Exports.WorldMap = loadstring("return _G['WorldMap']")();
Exports.WorldMapGeometry = loadstring("return _G['WorldMapGeometry']")();
Exports.ImagePyramid = loadstring("return _G['ImagePyramid']")();
Exports.Drawer = loadstring("return _G['Drawer']")();
Exports.WorldMapCell = loadstring("return _G['WorldMapCell']")();
Exports.WorldMapVisited = loadstring("return _G['WorldMapVisited']")();
Exports.TrianglesPerZoom = loadstring("return _G['TrianglesPerZoom']")();
Exports.UIWorldMapV1 = loadstring("return _G['UIWorldMapV1']")();
Exports.WorldMapFeature = loadstring("return _G['WorldMapFeature']")();
Exports.WorldMapBooleanOption = loadstring("return _G['WorldMapBooleanOption']")();
Exports.WorldMapProperties = loadstring("return _G['WorldMapProperties']")();
Exports.WorldMapImages = loadstring("return _G['WorldMapImages']")();
Exports.WorldMapData = loadstring("return _G['WorldMapData']")();
Exports.UIWorldMap = loadstring("return _G['UIWorldMap']")();
Exports.Thumpable = loadstring("return _G['Thumpable']")();
Exports.BarricadeAble = loadstring("return _G['BarricadeAble']")();
Exports.IsoClothingDryer = loadstring("return _G['IsoClothingDryer']")();
Exports.IsoDeadBody = loadstring("return _G['IsoDeadBody']")();
Exports.IsoCombinationWasherDryer = loadstring("return _G['IsoCombinationWasherDryer']")();
Exports.TreeShader = loadstring("return _G['TreeShader']")();
Exports.IsoTree = loadstring("return _G['IsoTree']")();
Exports.RenderEffectType = loadstring("return _G['RenderEffectType']")();
Exports.IsoCompost = loadstring("return _G['IsoCompost']")();
Exports.IsoTelevision = loadstring("return _G['IsoTelevision']")();
Exports.GibletType = loadstring("return _G['GibletType']")();
Exports.IsoWheelieBin = loadstring("return _G['IsoWheelieBin']")();
Exports.IsoDoor = loadstring("return _G['IsoDoor']")();
Exports.IsoClothingWasher = loadstring("return _G['IsoClothingWasher']")();
Exports.DoorType = loadstring("return _G['DoorType']")();
Exports.IsoFire = loadstring("return _G['IsoFire']")();
Exports.IsoTrap = loadstring("return _G['IsoTrap']")();
Exports.IsoWindow = loadstring("return _G['IsoWindow']")();
Exports.IsoWorldInventoryObject = loadstring("return _G['IsoWorldInventoryObject']")();
Exports.MannequinZone = loadstring("return _G['MannequinZone']")();
Exports.IsoCurtain = loadstring("return _G['IsoCurtain']")();
Exports.IsoMolotovCocktail = loadstring("return _G['IsoMolotovCocktail']")();
Exports.IsoLightSwitch = loadstring("return _G['IsoLightSwitch']")();
Exports.ExplosionMode = loadstring("return _G['ExplosionMode']")();
Exports.IsoZombieGiblets = loadstring("return _G['IsoZombieGiblets']")();
Exports.IsoBarbecue = loadstring("return _G['IsoBarbecue']")();
Exports.IsoThumpable = loadstring("return _G['IsoThumpable']")();
Exports.IsoFireplace = loadstring("return _G['IsoFireplace']")();
Exports.IsoGenerator = loadstring("return _G['IsoGenerator']")();
Exports.IsoFireManager = loadstring("return _G['IsoFireManager']")();
Exports.IsoRadio = loadstring("return _G['IsoRadio']")();
Exports.IsoStove = loadstring("return _G['IsoStove']")();
Exports.IsoRainSplash = loadstring("return _G['IsoRainSplash']")();
Exports.IsoRaindrop = loadstring("return _G['IsoRaindrop']")();
Exports.RainManager = loadstring("return _G['RainManager']")();
Exports.IsoWindowFrame = loadstring("return _G['IsoWindowFrame']")();
Exports.WindowType = loadstring("return _G['WindowType']")();
Exports.IsoWaveSignal = loadstring("return _G['IsoWaveSignal']")();
Exports.ObjectRenderEffects = loadstring("return _G['ObjectRenderEffects']")();
Exports.IsoBrokenGlass = loadstring("return _G['IsoBrokenGlass']")();
Exports.IsoJukebox = loadstring("return _G['IsoJukebox']")();
Exports.IsoCarBatteryCharger = loadstring("return _G['IsoCarBatteryCharger']")();
Exports.BSFurnace = loadstring("return _G['BSFurnace']")();
Exports.IsoBarricade = loadstring("return _G['IsoBarricade']")();
Exports.IsoMannequin = loadstring("return _G['IsoMannequin']")();
Exports.IsoStackedWasherDryer = loadstring("return _G['IsoStackedWasherDryer']")();
Exports.WallShaperWhole = loadstring("return _G['WallShaperWhole']")();
Exports.SkyBox = loadstring("return _G['SkyBox']")();
Exports.IsoDirectionFrame = loadstring("return _G['IsoDirectionFrame']")();
Exports.IsoSpriteInstance = loadstring("return _G['IsoSpriteInstance']")();
Exports.IsoAnim = loadstring("return _G['IsoAnim']")();
Exports.IsoSprite = loadstring("return _G['IsoSprite']")();
Exports.IsoSpriteGrid = loadstring("return _G['IsoSpriteGrid']")();
Exports.IsoSpriteManager = loadstring("return _G['IsoSpriteManager']")();
Exports.IsoWeatherFX = loadstring("return _G['IsoWeatherFX']")();
Exports.ImprovedFog = loadstring("return _G['ImprovedFog']")();
Exports.ClimateValues = loadstring("return _G['ClimateValues']")();
Exports.Temperature = loadstring("return _G['Temperature']")();
Exports.ClimateNetAuth = loadstring("return _G['ClimateNetAuth']")();
Exports.ThunderStorm = loadstring("return _G['ThunderStorm']")();
Exports.ClimateColorInfo = loadstring("return _G['ClimateColorInfo']")();
Exports.DayForecast = loadstring("return _G['DayForecast']")();
Exports.Flare = loadstring("return _G['Flare']")();
Exports.ClimateForecaster = loadstring("return _G['ClimateForecaster']")();
Exports.WeatherPeriod = loadstring("return _G['WeatherPeriod']")();
Exports.ClimateMoon = loadstring("return _G['ClimateMoon']")();
Exports.ClimateFloat = loadstring("return _G['ClimateFloat']")();
Exports.ForecastValue = loadstring("return _G['ForecastValue']")();
Exports.ClimateColor = loadstring("return _G['ClimateColor']")();
Exports.ClimateBool = loadstring("return _G['ClimateBool']")();
Exports.DayInfo = loadstring("return _G['DayInfo']")();
Exports.AirFront = loadstring("return _G['AirFront']")();
Exports.ClimateManager = loadstring("return _G['ClimateManager']")();
Exports.WeatherStage = loadstring("return _G['WeatherStage']")();
Exports.ClimateHistory = loadstring("return _G['ClimateHistory']")();
Exports.StrLerpVal = loadstring("return _G['StrLerpVal']")();
Exports.ThunderCloud = loadstring("return _G['ThunderCloud']")();
Exports.WorldFlares = loadstring("return _G['WorldFlares']")();
Exports.IsoObjectType = loadstring("return _G['IsoObjectType']")();
Exports.IsoFlagType = loadstring("return _G['IsoFlagType']")();
Exports.IWorldRegion = loadstring("return _G['IWorldRegion']")();
Exports.IChunkRegion = loadstring("return _G['IChunkRegion']")();
Exports.IsoRegionManager = loadstring("return _G['IsoRegionManager']")();
Exports.IsoWorldRegion = loadstring("return _G['IsoWorldRegion']")();
Exports.IsoChunkRegion = loadstring("return _G['IsoChunkRegion']")();
Exports.DataRoot = loadstring("return _G['DataRoot']")();
Exports.DataCell = loadstring("return _G['DataCell']")();
Exports.DataChunk = loadstring("return _G['DataChunk']")();
Exports.SelectInfo = loadstring("return _G['SelectInfo']")();
Exports.IsoRegionsLogger = loadstring("return _G['IsoRegionsLogger']")();
Exports.IsoRegionLog = loadstring("return _G['IsoRegionLog']")();
Exports.IsoRegionsRenderer = loadstring("return _G['IsoRegionsRenderer']")();
Exports.IsoRegionLogType = loadstring("return _G['IsoRegionLogType']")();
Exports.IsoRegions = loadstring("return _G['IsoRegions']")();
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")();
Exports.SafeHouse = loadstring("return _G['SafeHouse']")();
Exports.ExitType = loadstring("return _G['ExitType']")();
Exports.BuildingScore = loadstring("return _G['BuildingScore']")();
Exports.IsoRoom = loadstring("return _G['IsoRoom']")();
Exports.NonPvpZone = loadstring("return _G['NonPvpZone']")();
Exports.IsoBuilding = loadstring("return _G['IsoBuilding']")();
Exports.IsoRoomExit = loadstring("return _G['IsoRoomExit']")();
Exports.ContainerOverlays = loadstring("return _G['ContainerOverlays']")();
Exports.Frame = loadstring("return _G['Frame']")();
Exports.Lighting = loadstring("return _G['Lighting']")();
Exports.VisionResult = loadstring("return _G['VisionResult']")();
Exports.ResultLight = loadstring("return _G['ResultLight']")();
Exports.MetaObject = loadstring("return _G['MetaObject']")();
Exports.ChunkData = loadstring("return _G['ChunkData']")();
Exports.IsoChunkMap = loadstring("return _G['IsoChunkMap']")();
Exports.MultiStageBuilding = loadstring("return _G['MultiStageBuilding']")();
Exports.IsoPuddles = loadstring("return _G['IsoPuddles']")();
Exports.TileOverlays = loadstring("return _G['TileOverlays']")();
Exports.BentFences = loadstring("return _G['BentFences']")();
Exports.LosUtil = loadstring("return _G['LosUtil']")();
Exports.VehicleZone = loadstring("return _G['VehicleZone']")();
Exports.GetSquare = loadstring("return _G['GetSquare']")();
Exports.OutlineShader = loadstring("return _G['OutlineShader']")();
Exports.MetaCell = loadstring("return _G['MetaCell']")();
Exports.IsoObjectPicker = loadstring("return _G['IsoObjectPicker']")();
Exports.OcclusionFilter = loadstring("return _G['OcclusionFilter']")();
Exports.SyncIsoGridSquare = loadstring("return _G['SyncIsoGridSquare']")();
Exports.IsoPuddlesGeometry = loadstring("return _G['IsoPuddlesGeometry']")();
Exports.CellGetSquare = loadstring("return _G['CellGetSquare']")();
Exports.NearestWalls = loadstring("return _G['NearestWalls']")();
Exports.IsoDirections = loadstring("return _G['IsoDirections']")();
Exports.GridSquareMarker = loadstring("return _G['GridSquareMarker']")();
Exports.SearchModeFloat = loadstring("return _G['SearchModeFloat']")();
Exports.Helicopter = loadstring("return _G['Helicopter']")();
Exports.IsoGridStack = loadstring("return _G['IsoGridStack']")();
Exports.BrokenFences = loadstring("return _G['BrokenFences']")();
Exports.IsoWorld = loadstring("return _G['IsoWorld']")();
Exports.IsoMetaGrid = loadstring("return _G['IsoMetaGrid']")();
Exports.IsoMarker = loadstring("return _G['IsoMarker']")();
Exports.ClickObject = loadstring("return _G['ClickObject']")();
Exports.SyncIsoChunk = loadstring("return _G['SyncIsoChunk']")();
Exports.IsoLot = loadstring("return _G['IsoLot']")();
Exports.TestResults = loadstring("return _G['TestResults']")();
Exports.SyncIsoObject = loadstring("return _G['SyncIsoObject']")();
Exports.IsoCamera = loadstring("return _G['IsoCamera']")();
Exports.ObjectsSyncRequests = loadstring("return _G['ObjectsSyncRequests']")();
Exports.CircleIsoMarker = loadstring("return _G['CircleIsoMarker']")();
Exports.IsoUtils = loadstring("return _G['IsoUtils']")();
Exports.Zone = loadstring("return _G['Zone']")();
Exports.IsoLuaMover = loadstring("return _G['IsoLuaMover']")();
Exports.IsoMarkers = loadstring("return _G['IsoMarkers']")();
Exports.Stage = loadstring("return _G['Stage']")();
Exports.PuddlesDirection = loadstring("return _G['PuddlesDirection']")();
Exports.IsoCell = loadstring("return _G['IsoCell']")();
Exports.IsoWallBloodSplat = loadstring("return _G['IsoWallBloodSplat']")();
Exports.FrameState = loadstring("return _G['FrameState']")();
Exports.PerPlayerRender = loadstring("return _G['PerPlayerRender']")();
Exports.IsoGridSquare = loadstring("return _G['IsoGridSquare']")();
Exports.Point = loadstring("return _G['Point']")();
Exports.PuddlesFloat = loadstring("return _G['PuddlesFloat']")();
Exports.IsoMetaCell = loadstring("return _G['IsoMetaCell']")();
Exports.ILighting = loadstring("return _G['ILighting']")();
Exports.NoCircleStencilShader = loadstring("return _G['NoCircleStencilShader']")();
Exports.IsoPushableObject = loadstring("return _G['IsoPushableObject']")();
Exports.IsoFloorBloodSplat = loadstring("return _G['IsoFloorBloodSplat']")();
Exports.IsoObjectSyncRequests = loadstring("return _G['IsoObjectSyncRequests']")();
Exports.IsoLightSource = loadstring("return _G['IsoLightSource']")();
Exports.ZoneGeometryType = loadstring("return _G['ZoneGeometryType']")();
Exports.BuildingSearchCriteria = loadstring("return _G['BuildingSearchCriteria']")();
Exports.BuildingDef = loadstring("return _G['BuildingDef']")();
Exports.IsoObject = loadstring("return _G['IsoObject']")();
Exports.IsoMetaChunk = loadstring("return _G['IsoMetaChunk']")();
Exports.PlayerCamera = loadstring("return _G['PlayerCamera']")();
Exports.SliceY = loadstring("return _G['SliceY']")();
Exports.IsoWaterGeometry = loadstring("return _G['IsoWaterGeometry']")();
Exports.IsoChunk = loadstring("return _G['IsoChunk']")();
Exports.IsoHeatSource = loadstring("return _G['IsoHeatSource']")();
Exports.WorldMarkers = loadstring("return _G['WorldMarkers']")();
Exports.IsoRoomLight = loadstring("return _G['IsoRoomLight']")();
Exports.Vector3 = loadstring("return _G['Vector3']")();
Exports.TreeSoundManager = loadstring("return _G['TreeSoundManager']")();
Exports.IsoGridOcclusionData = loadstring("return _G['IsoGridOcclusionData']")();
Exports.Trigger = loadstring("return _G['Trigger']")();
Exports.CircleStencilShader = loadstring("return _G['CircleStencilShader']")();
Exports.PlayerSearchMode = loadstring("return _G['PlayerSearchMode']")();
Exports.OccluderType = loadstring("return _G['OccluderType']")();
Exports.Vector2 = loadstring("return _G['Vector2']")();
Exports.DirectionArrow = loadstring("return _G['DirectionArrow']")();
Exports.RoomRect = loadstring("return _G['RoomRect']")();
Exports.Line = loadstring("return _G['Line']")();
Exports.IsoMovingObject = loadstring("return _G['IsoMovingObject']")();
Exports.RoomDef = loadstring("return _G['RoomDef']")();
Exports.IsoObjectFactory = loadstring("return _G['IsoObjectFactory']")();
Exports.JobType = loadstring("return _G['JobType']")();
Exports.SearchMode = loadstring("return _G['SearchMode']")();
Exports.LotHeader = loadstring("return _G['LotHeader']")();
Exports.IsoDirectionSet = loadstring("return _G['IsoDirectionSet']")();
Exports.PlayerHomingPoint = loadstring("return _G['PlayerHomingPoint']")();
Exports.SyncData = loadstring("return _G['SyncData']")();
Exports.Allocator = loadstring("return _G['Allocator']")();
Exports.ZombiePopulationManager = loadstring("return _G['ZombiePopulationManager']")();
Exports.ZombiePopulationRenderer = loadstring("return _G['ZombiePopulationRenderer']")();
Exports.ObjectPool = loadstring("return _G['ObjectPool']")();
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")();
Exports.RandomizedDeadSurvivorBase = loadstring("return _G['RandomizedDeadSurvivorBase']")();
Exports.RDSHouseParty = loadstring("return _G['RDSHouseParty']")();
Exports.RDSPokerNight = loadstring("return _G['RDSPokerNight']")();
Exports.RDSZombiesEating = loadstring("return _G['RDSZombiesEating']")();
Exports.RDSHenDo = loadstring("return _G['RDSHenDo']")();
Exports.RDSPoliceAtHouse = loadstring("return _G['RDSPoliceAtHouse']")();
Exports.RDSSuicidePact = loadstring("return _G['RDSSuicidePact']")();
Exports.RDSPrisonEscape = loadstring("return _G['RDSPrisonEscape']")();
Exports.RDSGunmanInBathroom = loadstring("return _G['RDSGunmanInBathroom']")();
Exports.RDSHockeyPsycho = loadstring("return _G['RDSHockeyPsycho']")();
Exports.RDSZombieLockedBathroom = loadstring("return _G['RDSZombieLockedBathroom']")();
Exports.RDSPrisonEscapeWithPolice = loadstring("return _G['RDSPrisonEscapeWithPolice']")();
Exports.RDSStagDo = loadstring("return _G['RDSStagDo']")();
Exports.RDSTinFoilHat = loadstring("return _G['RDSTinFoilHat']")();
Exports.RDSSkeletonPsycho = loadstring("return _G['RDSSkeletonPsycho']")();
Exports.RDSFootballNight = loadstring("return _G['RDSFootballNight']")();
Exports.RDSSpecificProfession = loadstring("return _G['RDSSpecificProfession']")();
Exports.RDSBleach = loadstring("return _G['RDSBleach']")();
Exports.RDSBandPractice = loadstring("return _G['RDSBandPractice']")();
Exports.RDSBedroomZed = loadstring("return _G['RDSBedroomZed']")();
Exports.RDSDeadDrunk = loadstring("return _G['RDSDeadDrunk']")();
Exports.RDSGunslinger = loadstring("return _G['RDSGunslinger']")();
Exports.RDSCorpsePsycho = loadstring("return _G['RDSCorpsePsycho']")();
Exports.RDSStudentNight = loadstring("return _G['RDSStudentNight']")();
Exports.RDSBathroomZed = loadstring("return _G['RDSBathroomZed']")();
Exports.RVSBanditRoad = loadstring("return _G['RVSBanditRoad']")();
Exports.RVSPoliceBlockadeShooting = loadstring("return _G['RVSPoliceBlockadeShooting']")();
Exports.Element = loadstring("return _G['Element']")();
Exports.RVSCrashHorde = loadstring("return _G['RVSCrashHorde']")();
Exports.RVSPoliceBlockade = loadstring("return _G['RVSPoliceBlockade']")();
Exports.RVSTrailerCrash = loadstring("return _G['RVSTrailerCrash']")();
Exports.RVSBurntCar = loadstring("return _G['RVSBurntCar']")();
Exports.RandomizedVehicleStoryBase = loadstring("return _G['RandomizedVehicleStoryBase']")();
Exports.RVSCarCrashCorpse = loadstring("return _G['RVSCarCrashCorpse']")();
Exports.RVSConstructionSite = loadstring("return _G['RVSConstructionSite']")();
Exports.RVSFlippedCrash = loadstring("return _G['RVSFlippedCrash']")();
Exports.RVSChangingTire = loadstring("return _G['RVSChangingTire']")();
Exports.RVSCarCrash = loadstring("return _G['RVSCarCrash']")();
Exports.VehicleStorySpawner = loadstring("return _G['VehicleStorySpawner']")();
Exports.IElementSpawner = loadstring("return _G['IElementSpawner']")();
Exports.RVSAmbulanceCrash = loadstring("return _G['RVSAmbulanceCrash']")();
Exports.RVSUtilityVehicle = loadstring("return _G['RVSUtilityVehicle']")();
Exports.VehicleStorySpawnData = loadstring("return _G['VehicleStorySpawnData']")();
Exports.RZSMusicFestStage = loadstring("return _G['RZSMusicFestStage']")();
Exports.RZSBeachParty = loadstring("return _G['RZSBeachParty']")();
Exports.RZSForestCamp = loadstring("return _G['RZSForestCamp']")();
Exports.RZSForestCampEaten = loadstring("return _G['RZSForestCampEaten']")();
Exports.RZSBuryingCamp = loadstring("return _G['RZSBuryingCamp']")();
Exports.RZSFishingTrip = loadstring("return _G['RZSFishingTrip']")();
Exports.RZSMusicFest = loadstring("return _G['RZSMusicFest']")();
Exports.RandomizedZoneStoryBase = loadstring("return _G['RandomizedZoneStoryBase']")();
Exports.ZoneType = loadstring("return _G['ZoneType']")();
Exports.RZSHunterCamp = loadstring("return _G['RZSHunterCamp']")();
Exports.RZSBBQParty = loadstring("return _G['RZSBBQParty']")();
Exports.RZSSexyTime = loadstring("return _G['RZSSexyTime']")();
Exports.RZSTrapperCamp = loadstring("return _G['RZSTrapperCamp']")();
Exports.RZSBaseball = loadstring("return _G['RZSBaseball']")();
Exports.RBBar = loadstring("return _G['RBBar']")();
Exports.RBBurnt = loadstring("return _G['RBBurnt']")();
Exports.RBCafe = loadstring("return _G['RBCafe']")();
Exports.HumanCorpse = loadstring("return _G['HumanCorpse']")();
Exports.RBSchool = loadstring("return _G['RBSchool']")();
Exports.RandomizedBuildingBase = loadstring("return _G['RandomizedBuildingBase']")();
Exports.RBSpiffo = loadstring("return _G['RBSpiffo']")();
Exports.RBStripclub = loadstring("return _G['RBStripclub']")();
Exports.RBClinic = loadstring("return _G['RBClinic']")();
Exports.RBKateAndBaldspot = loadstring("return _G['RBKateAndBaldspot']")();
Exports.RBLooted = loadstring("return _G['RBLooted']")();
Exports.RBBurntCorpse = loadstring("return _G['RBBurntCorpse']")();
Exports.RBOther = loadstring("return _G['RBOther']")();
Exports.RBBurntFireman = loadstring("return _G['RBBurntFireman']")();
Exports.RBBasic = loadstring("return _G['RBBasic']")();
Exports.RBPileOCrepe = loadstring("return _G['RBPileOCrepe']")();
Exports.RBSafehouse = loadstring("return _G['RBSafehouse']")();
Exports.RBOffice = loadstring("return _G['RBOffice']")();
Exports.RBShopLooted = loadstring("return _G['RBShopLooted']")();
Exports.RBHairSalon = loadstring("return _G['RBHairSalon']")();
Exports.RBPizzaWhirled = loadstring("return _G['RBPizzaWhirled']")();
Exports.RandomizedWorldBase = loadstring("return _G['RandomizedWorldBase']")();
Exports.NPCData = loadstring("return _G['NPCData']")();
Exports.BaseVehicle = loadstring("return _G['BaseVehicle']")();
Exports.QuaternionfObjectPool = loadstring("return _G['QuaternionfObjectPool']")();
Exports.MinMaxPosition = loadstring("return _G['MinMaxPosition']")();
Exports.PlaneObjectPool = loadstring("return _G['PlaneObjectPool']")();
Exports.EditVehicleState = loadstring("return _G['EditVehicleState']")();
Exports.VehicleInterpolation = loadstring("return _G['VehicleInterpolation']")();
Exports.UI3DScene = loadstring("return _G['UI3DScene']")();
Exports.LightbarLightsMode = loadstring("return _G['LightbarLightsMode']")();
Exports.LightbarSirenMode = loadstring("return _G['LightbarSirenMode']")();
Exports.Vector3fObjectPool = loadstring("return _G['Vector3fObjectPool']")();
Exports.PathFindState2 = loadstring("return _G['PathFindState2']")();
Exports.Path = loadstring("return _G['Path']")();
Exports.WheelInfo = loadstring("return _G['WheelInfo']")();
Exports.TransmissionNumber = loadstring("return _G['TransmissionNumber']")();
Exports.PathFindBehavior2 = loadstring("return _G['PathFindBehavior2']")();
Exports.VehicleDoor = loadstring("return _G['VehicleDoor']")();
Exports.LiangBarsky = loadstring("return _G['LiangBarsky']")();
Exports.VehicleTypeDefinition = loadstring("return _G['VehicleTypeDefinition']")();
Exports.CCObstacle = loadstring("return _G['CCObstacle']")();
Exports.engineStateTypes = loadstring("return _G['engineStateTypes']")();
Exports.Matrix4fObjectPool = loadstring("return _G['Matrix4fObjectPool']")();
Exports.RayObjectPool = loadstring("return _G['RayObjectPool']")();
Exports.ModelInfo = loadstring("return _G['ModelInfo']")();
Exports.ServerVehicleState = loadstring("return _G['ServerVehicleState']")();
Exports.PathFindRequest = loadstring("return _G['PathFindRequest']")();
Exports.VehicleWindow = loadstring("return _G['VehicleWindow']")();
Exports.ChunkData = loadstring("return _G['ChunkData']")();
Exports.SurroundVehicle = loadstring("return _G['SurroundVehicle']")();
Exports.Ray = loadstring("return _G['Ray']")();
Exports.Vector2ObjectPool = loadstring("return _G['Vector2ObjectPool']")();
Exports.Passenger = loadstring("return _G['Passenger']")();
Exports.EngineRPMData = loadstring("return _G['EngineRPMData']")();
Exports.Plane = loadstring("return _G['Plane']")();
Exports.LuaEnvironment = loadstring("return _G['LuaEnvironment']")();
Exports.VehicleLight = loadstring("return _G['VehicleLight']")();
Exports.CollideWithObstaclesPoly = loadstring("return _G['CollideWithObstaclesPoly']")();
Exports.IPathfinder = loadstring("return _G['IPathfinder']")();
Exports.PointOnPath = loadstring("return _G['PointOnPath']")();
Exports.VehiclePart = loadstring("return _G['VehiclePart']")();
Exports.Vector2fObjectPool = loadstring("return _G['Vector2fObjectPool']")();
Exports.ChunkDataZ = loadstring("return _G['ChunkDataZ']")();
Exports.PolygonalMap2 = loadstring("return _G['PolygonalMap2']")();
Exports.CCNode = loadstring("return _G['CCNode']")();
Exports.BehaviorResult = loadstring("return _G['BehaviorResult']")();
Exports.VehicleType = loadstring("return _G['VehicleType']")();
Exports.Point = loadstring("return _G['Point']")();
Exports.VehiclePoly = loadstring("return _G['VehiclePoly']")();
Exports.VehicleEngineRPM = loadstring("return _G['VehicleEngineRPM']")();
Exports.HitVars = loadstring("return _G['HitVars']")();
Exports.Literature = loadstring("return _G['Literature']")();
Exports.Clothing = loadstring("return _G['Clothing']")();
Exports.Drainable = loadstring("return _G['Drainable']")();
Exports.Radio = loadstring("return _G['Radio']")();
Exports.ComboItem = loadstring("return _G['ComboItem']")();
Exports.Moveable = loadstring("return _G['Moveable']")();
Exports.WeaponPart = loadstring("return _G['WeaponPart']")();
Exports.DrainableComboItem = loadstring("return _G['DrainableComboItem']")();
Exports.InventoryContainer = loadstring("return _G['InventoryContainer']")();
Exports.HandWeapon = loadstring("return _G['HandWeapon']")();
Exports.KeyRing = loadstring("return _G['KeyRing']")();
Exports.AlarmClockClothing = loadstring("return _G['AlarmClockClothing']")();
Exports.WeaponType = loadstring("return _G['WeaponType']")();
Exports.ClothingPatch = loadstring("return _G['ClothingPatch']")();
Exports.MapItem = loadstring("return _G['MapItem']")();
Exports.AlarmClock = loadstring("return _G['AlarmClock']")();
Exports.Key = loadstring("return _G['Key']")();
Exports.ClothingPatchFabricType = loadstring("return _G['ClothingPatchFabricType']")();
Exports.Food = loadstring("return _G['Food']")();
Exports.ItemContainer = loadstring("return _G['ItemContainer']")();
Exports.InventoryItem = loadstring("return _G['InventoryItem']")();
Exports.ItemPickerRoom = loadstring("return _G['ItemPickerRoom']")();
Exports.FixingManager = loadstring("return _G['FixingManager']")();
Exports.ItemPickerUpgradeWeapons = loadstring("return _G['ItemPickerUpgradeWeapons']")();
Exports.ItemType = loadstring("return _G['ItemType']")();
Exports.ItemPickerJava = loadstring("return _G['ItemPickerJava']")();
Exports.InventoryItemFactory = loadstring("return _G['InventoryItemFactory']")();
Exports.ItemPickerItem = loadstring("return _G['ItemPickerItem']")();
Exports.ItemPickerContainer = loadstring("return _G['ItemPickerContainer']")();
Exports.RecipeManager = loadstring("return _G['RecipeManager']")();
Exports.VehicleDistribution = loadstring("return _G['VehicleDistribution']")();
Exports.ProceduralItem = loadstring("return _G['ProceduralItem']")();
Exports.RadioLine = loadstring("return _G['RadioLine']")();
Exports.ExitOption = loadstring("return _G['ExitOption']")();
Exports.DynamicRadioChannel = loadstring("return _G['DynamicRadioChannel']")();
Exports.RadioBroadCast = loadstring("return _G['RadioBroadCast']")();
Exports.RadioScript = loadstring("return _G['RadioScript']")();
Exports.RadioScriptManager = loadstring("return _G['RadioScriptManager']")();
Exports.RadioChannel = loadstring("return _G['RadioChannel']")();
Exports.DevicePresets = loadstring("return _G['DevicePresets']")();
Exports.WaveSignalDevice = loadstring("return _G['WaveSignalDevice']")();
Exports.PresetEntry = loadstring("return _G['PresetEntry']")();
Exports.DeviceData = loadstring("return _G['DeviceData']")();
Exports.MediaNameSorter = loadstring("return _G['MediaNameSorter']")();
Exports.MediaData = loadstring("return _G['MediaData']")();
Exports.RecordedMedia = loadstring("return _G['RecordedMedia']")();
Exports.MediaLineData = loadstring("return _G['MediaLineData']")();
Exports.StorySound = loadstring("return _G['StorySound']")();
Exports.StorySoundEvent = loadstring("return _G['StorySoundEvent']")();
Exports.DataPoint = loadstring("return _G['DataPoint']")();
Exports.EventSound = loadstring("return _G['EventSound']")();
Exports.SLSoundManager = loadstring("return _G['SLSoundManager']")();
Exports.StoryEmitter = loadstring("return _G['StoryEmitter']")();
Exports.Sound = loadstring("return _G['Sound']")();
Exports.ZomboidRadio = loadstring("return _G['ZomboidRadio']")();
Exports.GameMode = loadstring("return _G['GameMode']")();
Exports.RadioAPI = loadstring("return _G['RadioAPI']")();
Exports.RadioData = loadstring("return _G['RadioData']")();
Exports.ChannelCategory = loadstring("return _G['ChannelCategory']")();
Exports.ChatType = loadstring("return _G['ChatType']")();
Exports.Vehicle = loadstring("return _G['Vehicle']")();
Exports.MovingObject = loadstring("return _G['MovingObject']")();
Exports.HitInfo = loadstring("return _G['HitInfo']")();
Exports.NetObject = loadstring("return _G['NetObject']")();
Exports.HitCharacterPacket = loadstring("return _G['HitCharacterPacket']")();
Exports.VehicleHitPacket = loadstring("return _G['VehicleHitPacket']")();
Exports.AttackVars = loadstring("return _G['AttackVars']")();
Exports.HitType = loadstring("return _G['HitType']")();
Exports.ZombiePacket = loadstring("return _G['ZombiePacket']")();
Exports.l_send = loadstring("return _G['l_send']")();
Exports.PlayerVariables = loadstring("return _G['PlayerVariables']")();
Exports.EventType = loadstring("return _G['EventType']")();
Exports.PlayerPacket = loadstring("return _G['PlayerPacket']")();
Exports.l_receive = loadstring("return _G['l_receive']")();
Exports.EventPacket = loadstring("return _G['EventPacket']")();
Exports.DeadCharacterPacket = loadstring("return _G['DeadCharacterPacket']")();
Exports.ClientChunkRequest = loadstring("return _G['ClientChunkRequest']")();
Exports.IntegerServerOption = loadstring("return _G['IntegerServerOption']")();
Exports.Server = loadstring("return _G['Server']")();
Exports.GameClient = loadstring("return _G['GameClient']")();
Exports.WalkType = loadstring("return _G['WalkType']")();
Exports.Userlog = loadstring("return _G['Userlog']")();
Exports.BodyDamageSync = loadstring("return _G['BodyDamageSync']")();
Exports.StringServerOption = loadstring("return _G['StringServerOption']")();
Exports.ReplayManager = loadstring("return _G['ReplayManager']")();
Exports.DBTicket = loadstring("return _G['DBTicket']")();
Exports.State = loadstring("return _G['State']")();
Exports.ServerSettings = loadstring("return _G['ServerSettings']")();
Exports.BooleanServerOption = loadstring("return _G['BooleanServerOption']")();
Exports.Chunk = loadstring("return _G['Chunk']")();
Exports.PlayerDownloadServer = loadstring("return _G['PlayerDownloadServer']")();
Exports.ClientServerMap = loadstring("return _G['ClientServerMap']")();
Exports.DBResult = loadstring("return _G['DBResult']")();
Exports.DoubleServerOption = loadstring("return _G['DoubleServerOption']")();
Exports.Updater = loadstring("return _G['Updater']")();
Exports.ServerOption = loadstring("return _G['ServerOption']")();
Exports.TextServerOption = loadstring("return _G['TextServerOption']")();
Exports.PredictionTypes = loadstring("return _G['PredictionTypes']")();
Exports.ServerSettingsManager = loadstring("return _G['ServerSettingsManager']")();
Exports.NetworkAIParams = loadstring("return _G['NetworkAIParams']")();
Exports.UserlogType = loadstring("return _G['UserlogType']")();
Exports.ServerOptions = loadstring("return _G['ServerOptions']")();
Exports.PacketType = loadstring("return _G['PacketType']")();
Exports.ZombieState = loadstring("return _G['ZombieState']")();
Exports.Perk = loadstring("return _G['Perk']")();
Exports.PerkFactory = loadstring("return _G['PerkFactory']")();
Exports.Perks = loadstring("return _G['Perks']")();
Exports.AttachedItems = loadstring("return _G['AttachedItems']")();
Exports.AttachedLocationGroup = loadstring("return _G['AttachedLocationGroup']")();
Exports.AttachedItem = loadstring("return _G['AttachedItem']")();
Exports.AttachedLocation = loadstring("return _G['AttachedLocation']")();
Exports.AttachedLocations = loadstring("return _G['AttachedLocations']")();
Exports.TraitCollection = loadstring("return _G['TraitCollection']")();
Exports.ObservationFactory = loadstring("return _G['ObservationFactory']")();
Exports.TraitSlot = loadstring("return _G['TraitSlot']")();
Exports.Observation = loadstring("return _G['Observation']")();
Exports.Trait = loadstring("return _G['Trait']")();
Exports.TraitFactory = loadstring("return _G['TraitFactory']")();
Exports.Moodle = loadstring("return _G['Moodle']")();
Exports.Moodles = loadstring("return _G['Moodles']")();
Exports.MoodleType = loadstring("return _G['MoodleType']")();
Exports.BodyLocationGroup = loadstring("return _G['BodyLocationGroup']")();
Exports.WornItem = loadstring("return _G['WornItem']")();
Exports.WornItems = loadstring("return _G['WornItems']")();
Exports.BodyLocations = loadstring("return _G['BodyLocations']")();
Exports.BodyLocation = loadstring("return _G['BodyLocation']")();
Exports.BodyPart = loadstring("return _G['BodyPart']")();
Exports.ThermalNode = loadstring("return _G['ThermalNode']")();
Exports.BodyPartType = loadstring("return _G['BodyPartType']")();
Exports.BodyPartLast = loadstring("return _G['BodyPartLast']")();
Exports.Nutrition = loadstring("return _G['Nutrition']")();
Exports.FitnessExercise = loadstring("return _G['FitnessExercise']")();
Exports.BodyDamage = loadstring("return _G['BodyDamage']")();
Exports.Thermoregulator = loadstring("return _G['Thermoregulator']")();
Exports.Metabolics = loadstring("return _G['Metabolics']")();
Exports.Fitness = loadstring("return _G['Fitness']")();
Exports.Profession = loadstring("return _G['Profession']")();
Exports.ProfessionFactory = loadstring("return _G['ProfessionFactory']")();
Exports.ActionTransition = loadstring("return _G['ActionTransition']")();
Exports.ActionGroup = loadstring("return _G['ActionGroup']")();
Exports.ActionStateSnapshot = loadstring("return _G['ActionStateSnapshot']")();
Exports.IActionStateChanged = loadstring("return _G['IActionStateChanged']")();
Exports.ActionContext = loadstring("return _G['ActionContext']")();
Exports.ActionState = loadstring("return _G['ActionState']")();
Exports.LuaTimedAction = loadstring("return _G['LuaTimedAction']")();
Exports.BaseAction = loadstring("return _G['BaseAction']")();
Exports.LuaTimedActionNew = loadstring("return _G['LuaTimedActionNew']")();
Exports.HitReactionNetworkAI = loadstring("return _G['HitReactionNetworkAI']")();
Exports.IsoPlayer = loadstring("return _G['IsoPlayer']")();
Exports.XPMultiplier = loadstring("return _G['XPMultiplier']")();
Exports.IsoZombie = loadstring("return _G['IsoZombie']")();
Exports.MoveDeltaModifiers = loadstring("return _G['MoveDeltaModifiers']")();
Exports.HaloTextHelper = loadstring("return _G['HaloTextHelper']")();
Exports.Transform = loadstring("return _G['Transform']")();
Exports.SurvivorType = loadstring("return _G['SurvivorType']")();
Exports.NetworkCharacter = loadstring("return _G['NetworkCharacter']")();
Exports.LightInfo = loadstring("return _G['LightInfo']")();
Exports.NetworkTeleport = loadstring("return _G['NetworkTeleport']")();
Exports.NetworkPlayerAI = loadstring("return _G['NetworkPlayerAI']")();
Exports.NetworkCharacterAI = loadstring("return _G['NetworkCharacterAI']")();
Exports.Operation = loadstring("return _G['Operation']")();
Exports.PerkInfo = loadstring("return _G['PerkInfo']")();
Exports.IsoLivingCharacter = loadstring("return _G['IsoLivingCharacter']")();
Exports.CharacterSoundEmitter = loadstring("return _G['CharacterSoundEmitter']")();
Exports.BaseCharacterSoundEmitter = loadstring("return _G['BaseCharacterSoundEmitter']")();
Exports.DummyCharacterSoundEmitter = loadstring("return _G['DummyCharacterSoundEmitter']")();
Exports.Faction = loadstring("return _G['Faction']")();
Exports.ZombieGroup = loadstring("return _G['ZombieGroup']")();
Exports.Stance = loadstring("return _G['Stance']")();
Exports.NetworkZombieAI = loadstring("return _G['NetworkZombieAI']")();
Exports.TorchInfo = loadstring("return _G['TorchInfo']")();
Exports.XP = loadstring("return _G['XP']")();
Exports.SurvivorFactory = loadstring("return _G['SurvivorFactory']")();
Exports.SurvivorDesc = loadstring("return _G['SurvivorDesc']")();
Exports.ItemList = loadstring("return _G['ItemList']")();
Exports.IsoSurvivor = loadstring("return _G['IsoSurvivor']")();
Exports.NetworkZombieMind = loadstring("return _G['NetworkZombieMind']")();
Exports.NetworkTeleportDebug = loadstring("return _G['NetworkTeleportDebug']")();
Exports.CharacterActionAnims = loadstring("return _G['CharacterActionAnims']")();
Exports.ColorRGB = loadstring("return _G['ColorRGB']")();
Exports.IsoGameCharacter = loadstring("return _G['IsoGameCharacter']")();
Exports.ZombieSound = loadstring("return _G['ZombieSound']")();
Exports.IsoDummyCameraCharacter = loadstring("return _G['IsoDummyCameraCharacter']")();
Exports.ClothingWetness = loadstring("return _G['ClothingWetness']")();
Exports.Stats = loadstring("return _G['Stats']")();
Exports.CharacterTraits = loadstring("return _G['CharacterTraits']")();
Exports.Location = loadstring("return _G['Location']")();
Exports.BodyLocation = loadstring("return _G['BodyLocation']")();
Exports.SurvivorGroup = loadstring("return _G['SurvivorGroup']")();
Exports.Type = loadstring("return _G['Type']")();
Exports.EvolvedRecipe = loadstring("return _G['EvolvedRecipe']")();
Exports.RequiredSkill = loadstring("return _G['RequiredSkill']")();
Exports.Wheel = loadstring("return _G['Wheel']")();
Exports.Recipe = loadstring("return _G['Recipe']")();
Exports.SwitchSeat = loadstring("return _G['SwitchSeat']")();
Exports.Sounds = loadstring("return _G['Sounds']")();
Exports.Door = loadstring("return _G['Door']")();
Exports.Result = loadstring("return _G['Result']")();
Exports.Source = loadstring("return _G['Source']")();
Exports.GameSoundScript = loadstring("return _G['GameSoundScript']")();
Exports.VehicleScript = loadstring("return _G['VehicleScript']")();
Exports.ModelWeaponPart = loadstring("return _G['ModelWeaponPart']")();
Exports.Item = loadstring("return _G['Item']")();
Exports.Position = loadstring("return _G['Position']")();
Exports.Passenger = loadstring("return _G['Passenger']")();
Exports.FixerSkill = loadstring("return _G['FixerSkill']")();
Exports.ItemRecipe = loadstring("return _G['ItemRecipe']")();
Exports.LightBar = loadstring("return _G['LightBar']")();
Exports.Model = loadstring("return _G['Model']")();
Exports.Container = loadstring("return _G['Container']")();
Exports.UniqueRecipe = loadstring("return _G['UniqueRecipe']")();
Exports.ScriptModule = loadstring("return _G['ScriptModule']")();
Exports.ItemReplacement = loadstring("return _G['ItemReplacement']")();
Exports.MovableRecipe = loadstring("return _G['MovableRecipe']")();
Exports.VehicleTemplate = loadstring("return _G['VehicleTemplate']")();
Exports.Area = loadstring("return _G['Area']")();
Exports.ModelScript = loadstring("return _G['ModelScript']")();
Exports.Type = loadstring("return _G['Type']")();
Exports.Anim = loadstring("return _G['Anim']")();
Exports.SoundTimelineScript = loadstring("return _G['SoundTimelineScript']")();
Exports.Window = loadstring("return _G['Window']")();
Exports.Skin = loadstring("return _G['Skin']")();
Exports.PhysicsShape = loadstring("return _G['PhysicsShape']")();
Exports.Fixer = loadstring("return _G['Fixer']")();
Exports.Part = loadstring("return _G['Part']")();
Exports.Fixing = loadstring("return _G['Fixing']")();
Exports.ModelAttachment = loadstring("return _G['ModelAttachment']")();
Exports.ScriptManager = loadstring("return _G['ScriptManager']")();
Exports.ModData = loadstring("return _G['ModData']")();
Exports.TextManager = loadstring("return _G['TextManager']")();
Exports.UIElement = loadstring("return _G['UIElement']")();
Exports.TextDrawObject = loadstring("return _G['TextDrawObject']")();
Exports.UIManager = loadstring("return _G['UIManager']")();
Exports.UITransition = loadstring("return _G['UITransition']")();
Exports.Layout = loadstring("return _G['Layout']")();
Exports.RadialMenu = loadstring("return _G['RadialMenu']")();
Exports.Clock = loadstring("return _G['Clock']")();
Exports.SpeedControls = loadstring("return _G['SpeedControls']")();
Exports.HUDButton = loadstring("return _G['HUDButton']")();
Exports.NewHealthPanel = loadstring("return _G['NewHealthPanel']")();
Exports.UIServerToolbox = loadstring("return _G['UIServerToolbox']")();
Exports.UINineGrid = loadstring("return _G['UINineGrid']")();
Exports.ActionProgressBar = loadstring("return _G['ActionProgressBar']")();
Exports.TextDrawHorizontal = loadstring("return _G['TextDrawHorizontal']")();
Exports.UI3DModel = loadstring("return _G['UI3DModel']")();
Exports.LayoutItem = loadstring("return _G['LayoutItem']")();
Exports.MoodlesUI = loadstring("return _G['MoodlesUI']")();
Exports.DeferedTextDraw = loadstring("return _G['DeferedTextDraw']")();
Exports.RadialProgressBar = loadstring("return _G['RadialProgressBar']")();
Exports.UITextBox2 = loadstring("return _G['UITextBox2']")();
Exports.UIDebugConsole = loadstring("return _G['UIDebugConsole']")();
Exports.UIFont = loadstring("return _G['UIFont']")();
Exports.VehicleGauge = loadstring("return _G['VehicleGauge']")();
Exports.ModalDialog = loadstring("return _G['ModalDialog']")();
Exports.SCButton = loadstring("return _G['SCButton']")();
Exports.UI_BodyPart = loadstring("return _G['UI_BodyPart']")();
Exports.ObjectTooltip = loadstring("return _G['ObjectTooltip']")();
Exports.RadarPanel = loadstring("return _G['RadarPanel']")();
Exports.UIEventHandler = loadstring("return _G['UIEventHandler']")();
Exports.CGlobalObjectSystem = loadstring("return _G['CGlobalObjectSystem']")();
Exports.GlobalObject = loadstring("return _G['GlobalObject']")();
Exports.CGlobalObjects = loadstring("return _G['CGlobalObjects']")();
Exports.CGlobalObject = loadstring("return _G['CGlobalObject']")();
Exports.SGlobalObject = loadstring("return _G['SGlobalObject']")();
Exports.GlobalObjectSystem = loadstring("return _G['GlobalObjectSystem']")();
Exports.SGlobalObjectSystem = loadstring("return _G['SGlobalObjectSystem']")();
Exports.SGlobalObjects = loadstring("return _G['SGlobalObjects']")();
Exports.Exposer = loadstring("return _G['Exposer']")();
Exports.LuaManager = loadstring("return _G['LuaManager']")();
Exports.LuaEventManager = loadstring("return _G['LuaEventManager']")();
Exports.LuaFileWriter = loadstring("return _G['LuaFileWriter']")();
Exports.Event = loadstring("return _G['Event']")();
Exports.GlobalObject = loadstring("return _G['GlobalObject']")();
Exports.Remove = loadstring("return _G['Remove']")();
Exports.Add = loadstring("return _G['Add']")();
Exports.MapObjects = loadstring("return _G['MapObjects']")();
Exports.State = loadstring("return _G['State']")();
Exports.ParameterCharacterMovementSpeed = loadstring("return _G['ParameterCharacterMovementSpeed']")();
Exports.ParameterZombieState = loadstring("return _G['ParameterZombieState']")();
Exports.Material = loadstring("return _G['Material']")();
Exports.MovementType = loadstring("return _G['MovementType']")();
Exports.FMODParameterList = loadstring("return _G['FMODParameterList']")();
Exports.BaseSoundBank = loadstring("return _G['BaseSoundBank']")();
Exports.DummySoundBank = loadstring("return _G['DummySoundBank']")();
Exports.FMODParameter = loadstring("return _G['FMODParameter']")();
Exports.MasterVolume = loadstring("return _G['MasterVolume']")();
Exports.DummySoundEmitter = loadstring("return _G['DummySoundEmitter']")();
Exports.BaseSoundEmitter = loadstring("return _G['BaseSoundEmitter']")();
Exports.GameSound = loadstring("return _G['GameSound']")();
Exports.GameSoundClip = loadstring("return _G['GameSoundClip']")();
Exports.BloodBodyPartType = loadstring("return _G['BloodBodyPartType']")();
Exports.BloodClothingType = loadstring("return _G['BloodClothingType']")();
Exports.TexturePackTextures = loadstring("return _G['TexturePackTextures']")();
Exports.SubTexture = loadstring("return _G['SubTexture']")();
Exports.FileTask = loadstring("return _G['FileTask']")();
Exports.IFile = loadstring("return _G['IFile']")();
Exports.FileSeekMode = loadstring("return _G['FileSeekMode']")();
Exports.FileSystem = loadstring("return _G['FileSystem']")();
Exports.DeviceList = loadstring("return _G['DeviceList']")();
Exports.IFileDevice = loadstring("return _G['IFileDevice']")();
Exports.IFileTaskCallback = loadstring("return _G['IFileTaskCallback']")();
Exports.IFileTask2Callback = loadstring("return _G['IFileTask2Callback']")();
Exports.ActiveMods = loadstring("return _G['ActiveMods']")();
Exports.ITexture = loadstring("return _G['ITexture']")();
Exports.DebugOG = loadstring("return _G['DebugOG']")();
Exports.OffscreenBuffer = loadstring("return _G['OffscreenBuffer']")();
Exports.Character = loadstring("return _G['Character']")();
Exports.RenderOG = loadstring("return _G['RenderOG']")();
Exports.AnimLayerOG = loadstring("return _G['AnimLayerOG']")();
Exports.IsoSprite = loadstring("return _G['IsoSprite']")();
Exports.Walls = loadstring("return _G['Walls']")();
Exports.Weather = loadstring("return _G['Weather']")();
Exports.Server = loadstring("return _G['Server']")();
Exports.IDebugOption = loadstring("return _G['IDebugOption']")();
Exports.IsoGridSquare = loadstring("return _G['IsoGridSquare']")();
Exports.Terrain = loadstring("return _G['Terrain']")();
Exports.Floor = loadstring("return _G['Floor']")();
Exports.Network = loadstring("return _G['Network']")();
Exports.AnimateOG = loadstring("return _G['AnimateOG']")();
Exports.Animation = loadstring("return _G['Animation']")();
Exports.RenderTiles = loadstring("return _G['RenderTiles']")();
Exports.Client = loadstring("return _G['Client']")();
Exports.SharedSkelesOG = loadstring("return _G['SharedSkelesOG']")();
Exports.IDebugOptionGroup = loadstring("return _G['IDebugOptionGroup']")();
Exports.PublicServerUtil = loadstring("return _G['PublicServerUtil']")();
Exports.DebugLog = loadstring("return _G['DebugLog']")();
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")();
Exports.IDebugLogFormatter = loadstring("return _G['IDebugLogFormatter']")();
Exports.Checks = loadstring("return _G['Checks']")();
Exports.DebugType = loadstring("return _G['DebugType']")();
Exports.LogSeverity = loadstring("return _G['LogSeverity']")();
Exports.DebugOptions = loadstring("return _G['DebugOptions']")();
Exports.DebugLogStream = loadstring("return _G['DebugLogStream']")();
Exports.CustomSandboxOption = loadstring("return _G['CustomSandboxOption']")();
Exports.SleepingEventData = loadstring("return _G['SleepingEventData']")();
Exports.SleepingEvent = loadstring("return _G['SleepingEvent']")();
Exports.IStatePermissions = loadstring("return _G['IStatePermissions']")();
Exports.AStarPathFinderResult = loadstring("return _G['AStarPathFinderResult']")();
Exports.Mover = loadstring("return _G['Mover']")();
Exports.Path = loadstring("return _G['Path']")();
Exports.IPathfinder = loadstring("return _G['IPathfinder']")();
Exports.Step = loadstring("return _G['Step']")();
Exports.PathFindProgress = loadstring("return _G['PathFindProgress']")();
Exports.IdleState = loadstring("return _G['IdleState']")();
Exports.PlayerFallDownState = loadstring("return _G['PlayerFallDownState']")();
Exports.PlayerEmoteState = loadstring("return _G['PlayerEmoteState']")();
Exports.SmashWindowState = loadstring("return _G['SmashWindowState']")();
Exports.BurntToDeath = loadstring("return _G['BurntToDeath']")();
Exports.CrawlingZombieTurnState = loadstring("return _G['CrawlingZombieTurnState']")();
Exports.ThumpState = loadstring("return _G['ThumpState']")();
Exports.OpenWindowState = loadstring("return _G['OpenWindowState']")();
Exports.ZombieFallDownState = loadstring("return _G['ZombieFallDownState']")();
Exports.LungeState = loadstring("return _G['LungeState']")();
Exports.PlayerExtState = loadstring("return _G['PlayerExtState']")();
Exports.PlayerFallingState = loadstring("return _G['PlayerFallingState']")();
Exports.ClimbSheetRopeState = loadstring("return _G['ClimbSheetRopeState']")();
Exports.PlayerHitReactionState = loadstring("return _G['PlayerHitReactionState']")();
Exports.ClimbOverWallState = loadstring("return _G['ClimbOverWallState']")();
Exports.CustomComparator = loadstring("return _G['CustomComparator']")();
Exports.AttackState = loadstring("return _G['AttackState']")();
Exports.PlayerKnockedDown = loadstring("return _G['PlayerKnockedDown']")();
Exports.SwipeStatePlayer = loadstring("return _G['SwipeStatePlayer']")();
Exports.FakeDeadAttackState = loadstring("return _G['FakeDeadAttackState']")();
Exports.ZombieReanimateState = loadstring("return _G['ZombieReanimateState']")();
Exports.StaggerBackState = loadstring("return _G['StaggerBackState']")();
Exports.ZombieOnGroundState = loadstring("return _G['ZombieOnGroundState']")();
Exports.ClimbOverFenceState = loadstring("return _G['ClimbOverFenceState']")();
Exports.PlayerOnGroundState = loadstring("return _G['PlayerOnGroundState']")();
Exports.WalkTowardState = loadstring("return _G['WalkTowardState']")();
Exports.PlayerGetUpState = loadstring("return _G['PlayerGetUpState']")();
Exports.ZombieIdleState = loadstring("return _G['ZombieIdleState']")();
Exports.ClimbThroughWindowState = loadstring("return _G['ClimbThroughWindowState']")();
Exports.ClimbDownSheetRopeState = loadstring("return _G['ClimbDownSheetRopeState']")();
Exports.ZombieGetDownState = loadstring("return _G['ZombieGetDownState']")();
Exports.FakeDeadZombieState = loadstring("return _G['FakeDeadZombieState']")();
Exports.PlayerHitReactionPVPState = loadstring("return _G['PlayerHitReactionPVPState']")();
Exports.PlayerSitOnGroundState = loadstring("return _G['PlayerSitOnGroundState']")();
Exports.CloseWindowState = loadstring("return _G['CloseWindowState']")();
Exports.PathFindState = loadstring("return _G['PathFindState']")();
Exports.FishingState = loadstring("return _G['FishingState']")();
Exports.PlayerStrafeState = loadstring("return _G['PlayerStrafeState']")();
Exports.PlayerActionsState = loadstring("return _G['PlayerActionsState']")();
Exports.ZombieSittingState = loadstring("return _G['ZombieSittingState']")();
Exports.FitnessState = loadstring("return _G['FitnessState']")();
Exports.PlayerAimState = loadstring("return _G['PlayerAimState']")();
Exports.ZombieGetUpState = loadstring("return _G['ZombieGetUpState']")();
Exports.GameCharacterAIBrain = loadstring("return _G['GameCharacterAIBrain']")();
Exports.State = loadstring("return _G['State']")();
Exports.StateMachine = loadstring("return _G['StateMachine']")();
Exports.MapKnowledge = loadstring("return _G['MapKnowledge']")();
Exports.WalkingOnTheSpot = loadstring("return _G['WalkingOnTheSpot']")();
Exports.KnownBlockedEdges = loadstring("return _G['KnownBlockedEdges']")();
Exports.AIBrainPlayerControlVars = loadstring("return _G['AIBrainPlayerControlVars']")();
Exports.SubstateSlot = loadstring("return _G['SubstateSlot']")();
Exports.Mouse = loadstring("return _G['Mouse']")();
Exports.Joypad = loadstring("return _G['Joypad']")();
Exports.GameKeyboard = loadstring("return _G['GameKeyboard']")();
Exports.JoypadManager = loadstring("return _G['JoypadManager']")();
Exports.IGLBufferObject = loadstring("return _G['IGLBufferObject']")();
Exports.Shader = loadstring("return _G['Shader']")();
Exports.RuntimeAnimationScript = loadstring("return _G['RuntimeAnimationScript']")();
Exports.IHumanVisual = loadstring("return _G['IHumanVisual']")();
Exports.HumanVisual = loadstring("return _G['HumanVisual']")();
Exports.BaseVisual = loadstring("return _G['BaseVisual']")();
Exports.ItemVisual = loadstring("return _G['ItemVisual']")();
Exports.ItemVisuals = loadstring("return _G['ItemVisuals']")();
Exports.ModelMesh = loadstring("return _G['ModelMesh']")();
Exports.VertexArray = loadstring("return _G['VertexArray']")();
Exports.VertexElement = loadstring("return _G['VertexElement']")();
Exports.VehicleSubModelInstance = loadstring("return _G['VehicleSubModelInstance']")();
Exports.VertexFormat = loadstring("return _G['VertexFormat']")();
Exports.UInt4 = loadstring("return _G['UInt4']")();
Exports.SkinningBone = loadstring("return _G['SkinningBone']")();
Exports.FrameLightBlendStatus = loadstring("return _G['FrameLightBlendStatus']")();
Exports.Part = loadstring("return _G['Part']")();
Exports.ModelInstanceRenderData = loadstring("return _G['ModelInstanceRenderData']")();
Exports.VertexPositionNormalTangentTextureSkin = loadstring("return _G['VertexPositionNormalTangentTextureSkin']")();
Exports.VertexType = loadstring("return _G['VertexType']")();
Exports.SoftwareModelMeshInstance = loadstring("return _G['SoftwareModelMeshInstance']")();
Exports.ModelSlotRenderData = loadstring("return _G['ModelSlotRenderData']")();
Exports.PlayerData = loadstring("return _G['PlayerData']")();
Exports.ModelInstanceTextureCreator = loadstring("return _G['ModelInstanceTextureCreator']")();
Exports.MeshAssetParams = loadstring("return _G['MeshAssetParams']")();
Exports.ModelInstanceRenderDataList = loadstring("return _G['ModelInstanceRenderDataList']")();
Exports.AnimationAssetParams = loadstring("return _G['AnimationAssetParams']")();
Exports.EffectLight = loadstring("return _G['EffectLight']")();
Exports.ModelInstanceTextureInitializer = loadstring("return _G['ModelInstanceTextureInitializer']")();
Exports.VertexBufferObject = loadstring("return _G['VertexBufferObject']")();
Exports.FrameLightInfo = loadstring("return _G['FrameLightInfo']")();
Exports.Vbo = loadstring("return _G['Vbo']")();
Exports.ModelInstance = loadstring("return _G['ModelInstance']")();
Exports.ModelAssetParams = loadstring("return _G['ModelAssetParams']")();
Exports.SoftwareModelMesh = loadstring("return _G['SoftwareModelMesh']")();
Exports.AnimationAsset = loadstring("return _G['AnimationAsset']")();
Exports.SkinningBoneHierarchy = loadstring("return _G['SkinningBoneHierarchy']")();
Exports.BeginMode = loadstring("return _G['BeginMode']")();
Exports.Model = loadstring("return _G['Model']")();
Exports.VertexPositionNormalTangentTexture = loadstring("return _G['VertexPositionNormalTangentTexture']")();
Exports.SkinningData = loadstring("return _G['SkinningData']")();
Exports.CharacterMask = loadstring("return _G['CharacterMask']")();
Exports.AnimatorDebugMonitor = loadstring("return _G['AnimatorDebugMonitor']")();
Exports.AnimTransition = loadstring("return _G['AnimTransition']")();
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")();
Exports.AdvancedAnimator = loadstring("return _G['AdvancedAnimator']")();
Exports.AnimationVariableType = loadstring("return _G['AnimationVariableType']")();
Exports.IAnimationVariableSlot = loadstring("return _G['IAnimationVariableSlot']")();
Exports.AnimLayer = loadstring("return _G['AnimLayer']")();
Exports.IAnimEventCallback = loadstring("return _G['IAnimEventCallback']")();
Exports.LiveAnimNode = loadstring("return _G['LiveAnimNode']")();
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")();
Exports.AnimationVariableSource = loadstring("return _G['AnimationVariableSource']")();
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")();
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")();
Exports.SubLayerSlot = loadstring("return _G['SubLayerSlot']")();
Exports.AnimationSet = loadstring("return _G['AnimationSet']")();
Exports.Anim2DBlendPicker = loadstring("return _G['Anim2DBlendPicker']")();
Exports.Type = loadstring("return _G['Type']")();
Exports.AnimationVariableHandle = loadstring("return _G['AnimationVariableHandle']")();
Exports.Anim2DBlend = loadstring("return _G['Anim2DBlend']")();
Exports.Anim2DBlendTriangle = loadstring("return _G['Anim2DBlendTriangle']")();
Exports.PickResults = loadstring("return _G['PickResults']")();
Exports.CallbackGetStrongTyped = loadstring("return _G['CallbackGetStrongTyped']")();
Exports.AnimCondition = loadstring("return _G['AnimCondition']")();
Exports.AnimBoneWeight = loadstring("return _G['AnimBoneWeight']")();
Exports.AnimEventTime = loadstring("return _G['AnimEventTime']")();
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")();
Exports.IAnimationVariableSource = loadstring("return _G['IAnimationVariableSource']")();
Exports.AnimationVariableSlotCallbackFloat = loadstring("return _G['AnimationVariableSlotCallbackFloat']")();
Exports.AnimationVariableSlotCallbackBool = loadstring("return _G['AnimationVariableSlotCallbackBool']")();
Exports.AnimationVariableSlotCallbackInt = loadstring("return _G['AnimationVariableSlotCallbackInt']")();
Exports.AnimState = loadstring("return _G['AnimState']")();
Exports.AnimNode = loadstring("return _G['AnimNode']")();
Exports.AnimEvent = loadstring("return _G['AnimEvent']")();
Exports.IAnimatable = loadstring("return _G['IAnimatable']")();
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")();
Exports.AnimationVariableSlotCallbackString = loadstring("return _G['AnimationVariableSlotCallbackString']")();
Exports.CallbackSetStrongTyped = loadstring("return _G['CallbackSetStrongTyped']")();
Exports.AnimationPlayerRecorder = loadstring("return _G['AnimationPlayerRecorder']")();
Exports.SharedSkeleAnimationRepository = loadstring("return _G['SharedSkeleAnimationRepository']")();
Exports.SharedSkeleAnimationTrack = loadstring("return _G['SharedSkeleAnimationTrack']")();
Exports.AnimationMultiTrack = loadstring("return _G['AnimationMultiTrack']")();
Exports.BoneAxis = loadstring("return _G['BoneAxis']")();
Exports.AnimationPlayer = loadstring("return _G['AnimationPlayer']")();
Exports.AnimTrackSampler = loadstring("return _G['AnimTrackSampler']")();
Exports.SoftwareSkinnedModelAnim = loadstring("return _G['SoftwareSkinnedModelAnim']")();
Exports.Keyframe = loadstring("return _G['Keyframe']")();
Exports.IAnimListener = loadstring("return _G['IAnimListener']")();
Exports.AnimationBoneBinding = loadstring("return _G['AnimationBoneBinding']")();
Exports.AnimationClip = loadstring("return _G['AnimationClip']")();
Exports.AnimationTrack = loadstring("return _G['AnimationTrack']")();
Exports.StaticAnimation = loadstring("return _G['StaticAnimation']")();
Exports.RandomData = loadstring("return _G['RandomData']")();
Exports.HairStyles = loadstring("return _G['HairStyles']")();
Exports.BeardStyles = loadstring("return _G['BeardStyles']")();
Exports.BeardStyle = loadstring("return _G['BeardStyle']")();
Exports.Outfit = loadstring("return _G['Outfit']")();
Exports.ClothingItem = loadstring("return _G['ClothingItem']")();
Exports.RandomData = loadstring("return _G['RandomData']")();
Exports.ClothingItemReference = loadstring("return _G['ClothingItemReference']")();
Exports.Alternate = loadstring("return _G['Alternate']")();
Exports.HairStyle = loadstring("return _G['HairStyle']")();
Exports.ModAnimations = loadstring("return _G['ModAnimations']")();
Exports.Vector3 = loadstring("return _G['Vector3']")();
Exports.Vector4 = loadstring("return _G['Vector4']")();
Exports.ModelManager = loadstring("return _G['ModelManager']")();
Exports.ModelSlot = loadstring("return _G['ModelSlot']")();
Exports.GenericDrawer = loadstring("return _G['GenericDrawer']")();
Exports.MultiTextureFBO2 = loadstring("return _G['MultiTextureFBO2']")();
Exports.Mask = loadstring("return _G['Mask']")();
Exports.TextureIDAssetParams = loadstring("return _G['TextureIDAssetParams']")();
Exports.IGLFramebufferObject = loadstring("return _G['IGLFramebufferObject']")();
Exports.Texture = loadstring("return _G['Texture']")();
Exports.TextureDraw = loadstring("return _G['TextureDraw']")();
Exports.TextureFBO = loadstring("return _G['TextureFBO']")();
Exports.ColorInfo = loadstring("return _G['ColorInfo']")();
Exports.MipMapLevel = loadstring("return _G['MipMapLevel']")();
Exports.TexturePackPage = loadstring("return _G['TexturePackPage']")();
Exports.ImageData = loadstring("return _G['ImageData']")();
Exports.Type = loadstring("return _G['Type']")();
Exports.PZFileformat = loadstring("return _G['PZFileformat']")();
Exports.TextureID = loadstring("return _G['TextureID']")();
Exports.SubTextureInfo = loadstring("return _G['SubTextureInfo']")();
Exports.TextureAssetParams = loadstring("return _G['TextureAssetParams']")();
Exports.ZLogger = loadstring("return _G['ZLogger']")();
Exports.PlayerRenderSettings = loadstring("return _G['PlayerRenderSettings']")();
Exports.Type = loadstring("return _G['Type']")();
Exports.ShaderProgram = loadstring("return _G['ShaderProgram']")();
Exports.SharedVertexBufferObjects = loadstring("return _G['SharedVertexBufferObjects']")();
Exports.IShaderProgramListener = loadstring("return _G['IShaderProgramListener']")();
Exports.Shader = loadstring("return _G['Shader']")();
Exports.RenderSettings = loadstring("return _G['RenderSettings']")();
Exports.Uniform = loadstring("return _G['Uniform']")();
Exports.ShaderUnit = loadstring("return _G['ShaderUnit']")();
Exports.ByteBufferWriter = loadstring("return _G['ByteBufferWriter']")();
Exports.UdpConnection = loadstring("return _G['UdpConnection']")();
Exports.UdpEngine = loadstring("return _G['UdpEngine']")();
Exports.ChecksumState = loadstring("return _G['ChecksumState']")();
Exports.MPClientStatistic = loadstring("return _G['MPClientStatistic']")();
Exports.RakNetPeerInterface = loadstring("return _G['RakNetPeerInterface']")();
Exports.Input = loadstring("return _G['Input']")();
Exports.AngelCodeFont = loadstring("return _G['AngelCodeFont']")();
Exports.CharDefTexture = loadstring("return _G['CharDefTexture']")();
Exports.CharDef = loadstring("return _G['CharDef']")();
Exports.IntGrid = loadstring("return _G['IntGrid']")();
Exports.WrappedBuffer = loadstring("return _G['WrappedBuffer']")();
Exports.UpdateTimer = loadstring("return _G['UpdateTimer']")();
Exports.UpdateLimit = loadstring("return _G['UpdateLimit']")();
Exports.BooleanGrid = loadstring("return _G['BooleanGrid']")();
Exports.BoundedQueue = loadstring("return _G['BoundedQueue']")();
Exports.OnceEvery = loadstring("return _G['OnceEvery']")();
Exports.CarController = loadstring("return _G['CarController']")();
Exports.GearInfo = loadstring("return _G['GearInfo']")();
Exports.ClientControls = loadstring("return _G['ClientControls']")();
Exports.BulletVariables = loadstring("return _G['BulletVariables']")();
Exports.Transform = loadstring("return _G['Transform']")();
Exports.SpriteRenderState = loadstring("return _G['SpriteRenderState']")();
Exports.SpriteRendererStates = loadstring("return _G['SpriteRendererStates']")();
Exports.SpriteRenderStateUI = loadstring("return _G['SpriteRenderStateUI']")();
Exports.GenericSpriteRenderState = loadstring("return _G['GenericSpriteRenderState']")();
Exports.SteamUGCDetails = loadstring("return _G['SteamUGCDetails']")();
Exports.ZNetFileChunk = loadstring("return _G['ZNetFileChunk']")();
Exports.ZNetSessionState = loadstring("return _G['ZNetSessionState']")();
Exports.SteamWorkshopItem = loadstring("return _G['SteamWorkshopItem']")();
Exports.ZNetFileAnnounce = loadstring("return _G['ZNetFileAnnounce']")();
Exports.ItemState = loadstring("return _G['ItemState']")();
Exports.ZNetStatistics = loadstring("return _G['ZNetStatistics']")();
Exports.SteamFriend = loadstring("return _G['SteamFriend']")();
Exports.SideOfLine = loadstring("return _G['SideOfLine']")();
Exports.vector2 = loadstring("return _G['vector2']")();
Exports.PZMath = loadstring("return _G['PZMath']")();
Exports.NonBlockingHashMap = loadstring("return _G['NonBlockingHashMap']")();
Exports.PropertyContainer = loadstring("return _G['PropertyContainer']")();
Exports.MostTested = loadstring("return _G['MostTested']")();
Exports.AlphaOp = loadstring("return _G['AlphaOp']")();
Exports.AbstractStyle = loadstring("return _G['AbstractStyle']")();
Exports.ShortList = loadstring("return _G['ShortList']")();
Exports.Style = loadstring("return _G['Style']")();
Exports.GeometryData = loadstring("return _G['GeometryData']")();
Exports.FloatList = loadstring("return _G['FloatList']")();
Exports.StashContainer = loadstring("return _G['StashContainer']")();
Exports.Stash = loadstring("return _G['Stash']")();
Exports.StashBuilding = loadstring("return _G['StashBuilding']")();
Exports.StashAnnotation = loadstring("return _G['StashAnnotation']")();
Exports.StashSystem = loadstring("return _G['StashSystem']")();
Exports.Colors = loadstring("return _G['Colors']")();
Exports.Language = loadstring("return _G['Language']")();
Exports.Translator = loadstring("return _G['Translator']")();
Exports.Color = loadstring("return _G['Color']")();
Exports.ImmutableColor = loadstring("return _G['ImmutableColor']")();
Exports.Clipboard = loadstring("return _G['Clipboard']")();
Exports.PerformanceSettings = loadstring("return _G['PerformanceSettings']")();
Exports.RingBuffer = loadstring("return _G['RingBuffer']")();
Exports.SpriteRenderer = loadstring("return _G['SpriteRenderer']")();
Exports.WallShaderTexRender = loadstring("return _G['WallShaderTexRender']")();
Exports.Core = loadstring("return _G['Core']")();
Exports.GameVersion = loadstring("return _G['GameVersion']")();
Exports.PZArrayList = loadstring("return _G['PZArrayList']")();
Exports.PZCalendar = loadstring("return _G['PZCalendar']")();
Exports.BufferedRandomAccessFile = loadstring("return _G['BufferedRandomAccessFile']")();
Exports.Pool = loadstring("return _G['Pool']")();
Exports.AddCoopPlayer = loadstring("return _G['AddCoopPlayer']")();
Exports.IPooledObject = loadstring("return _G['IPooledObject']")();
Exports.Stage = loadstring("return _G['Stage']")();
Exports.ChatSettings = loadstring("return _G['ChatSettings']")();
Exports.ChatMessage = loadstring("return _G['ChatMessage']")();
Exports.ChatBase = loadstring("return _G['ChatBase']")();
Exports.ChatElement = loadstring("return _G['ChatElement']")();
Exports.ChatElementOwner = loadstring("return _G['ChatElementOwner']")();
Exports.NineGridTexture = loadstring("return _G['NineGridTexture']")();
Exports.ChatTab = loadstring("return _G['ChatTab']")();
Exports.ServerChatMessage = loadstring("return _G['ServerChatMessage']")();
Exports.FontSize = loadstring("return _G['FontSize']")();
Exports.ChatMode = loadstring("return _G['ChatMode']")();
Exports.GameStateMachine = loadstring("return _G['GameStateMachine']")();
Exports.ChooseGameInfo = loadstring("return _G['ChooseGameInfo']")();
Exports.LoadingQueueState = loadstring("return _G['LoadingQueueState']")();
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")();
Exports.Mod = loadstring("return _G['Mod']")();
Exports.AttachmentEditorState = loadstring("return _G['AttachmentEditorState']")();
Exports.GameLoadingState = loadstring("return _G['GameLoadingState']")();
Exports.MainScreenState = loadstring("return _G['MainScreenState']")();
Exports.GameState = loadstring("return _G['GameState']")();
Exports.PackFile = loadstring("return _G['PackFile']")();
Exports.BooleanDebugOption = loadstring("return _G['BooleanDebugOption']")();
Exports.AnimationViewerState = loadstring("return _G['AnimationViewerState']")();
Exports.ConnectToServerState = loadstring("return _G['ConnectToServerState']")();
Exports.DebugGlobalObjectState = loadstring("return _G['DebugGlobalObjectState']")();
Exports.DebugChunkState = loadstring("return _G['DebugChunkState']")();
Exports.Credit = loadstring("return _G['Credit']")();
Exports.SpawnOrigin = loadstring("return _G['SpawnOrigin']")();
Exports.Map = loadstring("return _G['Map']")();
Exports.TileDef = loadstring("return _G['TileDef']")();
Exports.StateAction = loadstring("return _G['StateAction']")();
Exports.ScreenElement = loadstring("return _G['ScreenElement']")();
Exports.ErosionObj = loadstring("return _G['ErosionObj']")();
Exports.ErosionObjSprites = loadstring("return _G['ErosionObjSprites']")();
Exports.ErosionSeason = loadstring("return _G['ErosionSeason']")();
Exports.Data = loadstring("return _G['Data']")();
Exports.ErosionCategory = loadstring("return _G['ErosionCategory']")();
Exports.ErosionConfig = loadstring("return _G['ErosionConfig']")();
Exports.Debug = loadstring("return _G['Debug']")();
Exports.Time = loadstring("return _G['Time']")();
Exports.ErosionData = loadstring("return _G['ErosionData']")();
Exports.ErosionMain = loadstring("return _G['ErosionMain']")();
Exports.Seeds = loadstring("return _G['Seeds']")();
Exports.Chunk = loadstring("return _G['Chunk']")();
Exports.Season = loadstring("return _G['Season']")();
Exports.Square = loadstring("return _G['Square']")();
Exports.ErosionRegions = loadstring("return _G['ErosionRegions']")();
Exports.Region = loadstring("return _G['Region']")();
Exports.AssetPath = loadstring("return _G['AssetPath']")();
Exports.State = loadstring("return _G['State']")();
Exports.AssetType = loadstring("return _G['AssetType']")();
Exports.AssetManager = loadstring("return _G['AssetManager']")();
Exports.AssetParams = loadstring("return _G['AssetParams']")();
Exports.ObserverCallback = loadstring("return _G['ObserverCallback']")();
Exports.Asset = loadstring("return _G['Asset']")();
Exports.AssetManagerTable = loadstring("return _G['AssetManagerTable']")();
Exports.AssetTable = loadstring("return _G['AssetTable']")();
Exports.AssetManagers = loadstring("return _G['AssetManagers']")();
Exports.AssetStateObserver = loadstring("return _G['AssetStateObserver']")();
Exports.ConfigOption = loadstring("return _G['ConfigOption']")();
Exports.BooleanConfigOption = loadstring("return _G['BooleanConfigOption']")();
Exports.DoubleConfigOption = loadstring("return _G['DoubleConfigOption']")();
Exports.IntegerConfigOption = loadstring("return _G['IntegerConfigOption']")();
Exports.StringConfigOption = loadstring("return _G['StringConfigOption']")();
Exports.EnumConfigOption = loadstring("return _G['EnumConfigOption']")();
Exports.OSValidator = loadstring("return _G['OSValidator']")();
Exports.GameSounds = loadstring("return _G['GameSounds']")();
Exports.DummySoundManager = loadstring("return _G['DummySoundManager']")();
Exports.DoubleSandboxOption = loadstring("return _G['DoubleSandboxOption']")();
Exports.Map = loadstring("return _G['Map']")();
Exports.TexturePack = loadstring("return _G['TexturePack']")();
Exports.WorldSound = loadstring("return _G['WorldSound']")();
Exports.ZombieLore = loadstring("return _G['ZombieLore']")();
Exports.Ambient = loadstring("return _G['Ambient']")();
Exports.BooleanSandboxOption = loadstring("return _G['BooleanSandboxOption']")();
Exports.SoundManager = loadstring("return _G['SoundManager']")();
Exports.GameWindow = loadstring("return _G['GameWindow']")();
Exports.WorldSoundManager = loadstring("return _G['WorldSoundManager']")();
Exports.BaseAmbientStreamManager = loadstring("return _G['BaseAmbientStreamManager']")();
Exports.ChunkData = loadstring("return _G['ChunkData']")();
Exports.GameTime = loadstring("return _G['GameTime']")();
Exports.SandboxOption = loadstring("return _G['SandboxOption']")();
Exports.SystemDisabler = loadstring("return _G['SystemDisabler']")();
Exports.ZombieConfig = loadstring("return _G['ZombieConfig']")();
Exports.AmbientStreamManager = loadstring("return _G['AmbientStreamManager']")();
Exports.IntegerSandboxOption = loadstring("return _G['IntegerSandboxOption']")();
Exports.Descriptor = loadstring("return _G['Descriptor']")();
Exports.ResultBiggestSound = loadstring("return _G['ResultBiggestSound']")();
Exports.AmbientSoundEffect = loadstring("return _G['AmbientSoundEffect']")();
Exports.BaseSoundManager = loadstring("return _G['BaseSoundManager']")();
Exports.WorldSoundEmitter = loadstring("return _G['WorldSoundEmitter']")();
Exports.SharedDescriptors = loadstring("return _G['SharedDescriptors']")();
Exports.VirtualZombieManager = loadstring("return _G['VirtualZombieManager']")();
Exports.MapGroups = loadstring("return _G['MapGroups']")();
Exports.EnumSandboxOption = loadstring("return _G['EnumSandboxOption']")();
Exports.SandboxOptions = loadstring("return _G['SandboxOptions']")();
Exports.FliesSound = loadstring("return _G['FliesSound']")();
Exports.ZomboidBitFlag = loadstring("return _G['ZomboidBitFlag']")();
Exports.AnimTimer = loadstring("return _G['AnimTimer']")();
Exports.AmbientLoop = loadstring("return _G['AmbientLoop']")();
Exports.StringSandboxOption = loadstring("return _G['StringSandboxOption']")();

return Exports
