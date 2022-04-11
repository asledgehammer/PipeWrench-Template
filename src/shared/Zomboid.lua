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
function Exports.addAllVehicles() addAllVehicles() end
function Exports.addAllVehicles(arg0) addAllVehicles(arg0) end
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
function Exports.addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) return addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) end
function Exports.addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5) return addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5) end
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
function Exports.getText(arg0, arg1, arg2) return getText(arg0, arg1, arg2) end
function Exports.getText(arg0, arg1, arg2, arg3, arg4) return getText(arg0, arg1, arg2, arg3, arg4) end
function Exports.getText(arg0, arg1, arg2, arg3) return getText(arg0, arg1, arg2, arg3) end
function Exports.getTextManager() return getTextManager() end
function Exports.getTextMediaEN(arg0) return getTextMediaEN(arg0) end
function Exports.getTextOrNull(arg0, arg1) return getTextOrNull(arg0, arg1) end
function Exports.getTextOrNull(arg0, arg1, arg2, arg3) return getTextOrNull(arg0, arg1, arg2, arg3) end
function Exports.getTextOrNull(arg0, arg1, arg2, arg3, arg4) return getTextOrNull(arg0, arg1, arg2, arg3, arg4) end
function Exports.getTextOrNull(arg0) return getTextOrNull(arg0) end
function Exports.getTextOrNull(arg0, arg1, arg2) return getTextOrNull(arg0, arg1, arg2) end
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
function Exports.sendServerCommand(arg0, arg1, arg2) sendServerCommand(arg0, arg1, arg2) end
function Exports.sendServerCommand(arg0, arg1, arg2, arg3) sendServerCommand(arg0, arg1, arg2, arg3) end
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
function Exports.takeScreenshot(arg0) takeScreenshot(arg0) end
function Exports.takeScreenshot() takeScreenshot() end
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
function Exports.triggerEvent(arg0, arg1) triggerEvent(arg0, arg1) end
function Exports.triggerEvent(arg0, arg1, arg2, arg3, arg4) triggerEvent(arg0, arg1, arg2, arg3, arg4) end
function Exports.triggerEvent(arg0) triggerEvent(arg0) end
function Exports.triggerEvent(arg0, arg1, arg2, arg3) triggerEvent(arg0, arg1, arg2, arg3) end
function Exports.triggerEvent(arg0, arg1, arg2) triggerEvent(arg0, arg1, arg2) end
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

Exports.Vector2f = _G['Vector2f'];
Exports.Vector3f = _G['Vector3f'];
Exports.Keyboard = _G['Keyboard'];
Exports.FMODSoundBank = _G['FMODSoundBank'];
Exports.FMODSoundEmitter = _G['FMODSoundEmitter'];
Exports.FMODAudio = _G['FMODAudio'];
Exports.KahluaUtil = _G['KahluaUtil'];
Exports.HashMap = _G['HashMap'];
Exports.ArrayList = _G['ArrayList'];
Exports.Iterator = _G['Iterator'];
Exports.EnumMap = _G['EnumMap'];
Exports.Vector = _G['Vector'];
Exports.LinkedList = _G['LinkedList'];
Exports.Stack = _G['Stack'];
Exports.DataOutputStream = _G['DataOutputStream'];
Exports.DataInputStream = _G['DataInputStream'];
Exports.BufferedWriter = _G['BufferedWriter'];
Exports.BufferedReader = _G['BufferedReader'];
Exports.SimpleDateFormat = _G['SimpleDateFormat'];
Exports.Math = _G['Math'];
Exports.WorldMapLineStyleLayerV1 = _G['WorldMapLineStyleLayerV1'];
Exports.WorldMapTextureStyleLayerV1 = _G['WorldMapTextureStyleLayerV1'];
Exports.FilterArgs = _G['FilterArgs'];
Exports.Stop = _G['Stop'];
Exports.FloatStop = _G['FloatStop'];
Exports.ColorStop = _G['ColorStop'];
Exports.RenderArgs = _G['RenderArgs'];
Exports.WorldMapStyleLayerV1 = _G['WorldMapStyleLayerV1'];
Exports.WorldMapStyleLayer = _G['WorldMapStyleLayer'];
Exports.RGBAf = _G['RGBAf'];
Exports.WorldMapPolygonStyleLayerV1 = _G['WorldMapPolygonStyleLayerV1'];
Exports.IWorldMapStyleFilter = _G['IWorldMapStyleFilter'];
Exports.WorldMapStyleV1 = _G['WorldMapStyleV1'];
Exports.WorldMapStyle = _G['WorldMapStyle'];
Exports.TextureStop = _G['TextureStop'];
Exports.WorldMapMarkerV1 = _G['WorldMapMarkerV1'];
Exports.WorldMapGridSquareMarker = _G['WorldMapGridSquareMarker'];
Exports.WorldMapMarkersV1 = _G['WorldMapMarkersV1'];
Exports.WorldMapMarkers = _G['WorldMapMarkers'];
Exports.WorldMapGridSquareMarkerV1 = _G['WorldMapGridSquareMarkerV1'];
Exports.WorldMapMarker = _G['WorldMapMarker'];
Exports.WorldMapTextureSymbol = _G['WorldMapTextureSymbol'];
Exports.WorldMapBaseSymbol = _G['WorldMapBaseSymbol'];
Exports.WorldMapSymbols = _G['WorldMapSymbols'];
Exports.WorldMapSymbolsV1 = _G['WorldMapSymbolsV1'];
Exports.WorldMapTextureSymbolV1 = _G['WorldMapTextureSymbolV1'];
Exports.WorldMapBaseSymbolV1 = _G['WorldMapBaseSymbolV1'];
Exports.WorldMapTextSymbol = _G['WorldMapTextSymbol'];
Exports.WorldMapSymbolCollisions = _G['WorldMapSymbolCollisions'];
Exports.WorldMapTextSymbolV1 = _G['WorldMapTextSymbolV1'];
Exports.WorldMapDoubleOption = _G['WorldMapDoubleOption'];
Exports.WorldMapRenderer = _G['WorldMapRenderer'];
Exports.WorldMapPoints = _G['WorldMapPoints'];
Exports.PyramidTexture = _G['PyramidTexture'];
Exports.WorldMap = _G['WorldMap'];
Exports.WorldMapGeometry = _G['WorldMapGeometry'];
Exports.ImagePyramid = _G['ImagePyramid'];
Exports.Drawer = _G['Drawer'];
Exports.WorldMapCell = _G['WorldMapCell'];
Exports.WorldMapVisited = _G['WorldMapVisited'];
Exports.TrianglesPerZoom = _G['TrianglesPerZoom'];
Exports.UIWorldMapV1 = _G['UIWorldMapV1'];
Exports.WorldMapFeature = _G['WorldMapFeature'];
Exports.WorldMapBooleanOption = _G['WorldMapBooleanOption'];
Exports.WorldMapProperties = _G['WorldMapProperties'];
Exports.WorldMapImages = _G['WorldMapImages'];
Exports.WorldMapData = _G['WorldMapData'];
Exports.UIWorldMap = _G['UIWorldMap'];
Exports.Thumpable = _G['Thumpable'];
Exports.BarricadeAble = _G['BarricadeAble'];
Exports.IsoClothingDryer = _G['IsoClothingDryer'];
Exports.IsoDeadBody = _G['IsoDeadBody'];
Exports.IsoCombinationWasherDryer = _G['IsoCombinationWasherDryer'];
Exports.TreeShader = _G['TreeShader'];
Exports.IsoTree = _G['IsoTree'];
Exports.IsoCompost = _G['IsoCompost'];
Exports.IsoTelevision = _G['IsoTelevision'];
Exports.IsoWheelieBin = _G['IsoWheelieBin'];
Exports.IsoDoor = _G['IsoDoor'];
Exports.IsoClothingWasher = _G['IsoClothingWasher'];
Exports.IsoFire = _G['IsoFire'];
Exports.IsoTrap = _G['IsoTrap'];
Exports.IsoWindow = _G['IsoWindow'];
Exports.IsoWorldInventoryObject = _G['IsoWorldInventoryObject'];
Exports.MannequinZone = _G['MannequinZone'];
Exports.IsoCurtain = _G['IsoCurtain'];
Exports.IsoMolotovCocktail = _G['IsoMolotovCocktail'];
Exports.IsoLightSwitch = _G['IsoLightSwitch'];
Exports.IsoZombieGiblets = _G['IsoZombieGiblets'];
Exports.IsoBarbecue = _G['IsoBarbecue'];
Exports.IsoThumpable = _G['IsoThumpable'];
Exports.IsoFireplace = _G['IsoFireplace'];
Exports.IsoGenerator = _G['IsoGenerator'];
Exports.IsoFireManager = _G['IsoFireManager'];
Exports.IsoRadio = _G['IsoRadio'];
Exports.IsoStove = _G['IsoStove'];
Exports.IsoRainSplash = _G['IsoRainSplash'];
Exports.IsoRaindrop = _G['IsoRaindrop'];
Exports.RainManager = _G['RainManager'];
Exports.IsoWindowFrame = _G['IsoWindowFrame'];
Exports.IsoWaveSignal = _G['IsoWaveSignal'];
Exports.ObjectRenderEffects = _G['ObjectRenderEffects'];
Exports.IsoBrokenGlass = _G['IsoBrokenGlass'];
Exports.IsoJukebox = _G['IsoJukebox'];
Exports.IsoCarBatteryCharger = _G['IsoCarBatteryCharger'];
Exports.BSFurnace = _G['BSFurnace'];
Exports.IsoBarricade = _G['IsoBarricade'];
Exports.IsoMannequin = _G['IsoMannequin'];
Exports.IsoStackedWasherDryer = _G['IsoStackedWasherDryer'];
Exports.WallShaperWhole = _G['WallShaperWhole'];
Exports.SkyBox = _G['SkyBox'];
Exports.IsoDirectionFrame = _G['IsoDirectionFrame'];
Exports.IsoSpriteInstance = _G['IsoSpriteInstance'];
Exports.IsoAnim = _G['IsoAnim'];
Exports.IsoSprite = _G['IsoSprite'];
Exports.IsoSpriteGrid = _G['IsoSpriteGrid'];
Exports.IsoSpriteManager = _G['IsoSpriteManager'];
Exports.IsoWeatherFX = _G['IsoWeatherFX'];
Exports.ImprovedFog = _G['ImprovedFog'];
Exports.ClimateValues = _G['ClimateValues'];
Exports.Temperature = _G['Temperature'];
Exports.ThunderStorm = _G['ThunderStorm'];
Exports.ClimateColorInfo = _G['ClimateColorInfo'];
Exports.DayForecast = _G['DayForecast'];
Exports.Flare = _G['Flare'];
Exports.ClimateForecaster = _G['ClimateForecaster'];
Exports.WeatherPeriod = _G['WeatherPeriod'];
Exports.ClimateMoon = _G['ClimateMoon'];
Exports.ClimateFloat = _G['ClimateFloat'];
Exports.ForecastValue = _G['ForecastValue'];
Exports.ClimateColor = _G['ClimateColor'];
Exports.ClimateBool = _G['ClimateBool'];
Exports.DayInfo = _G['DayInfo'];
Exports.AirFront = _G['AirFront'];
Exports.ClimateManager = _G['ClimateManager'];
Exports.WeatherStage = _G['WeatherStage'];
Exports.ClimateHistory = _G['ClimateHistory'];
Exports.ThunderCloud = _G['ThunderCloud'];
Exports.WorldFlares = _G['WorldFlares'];
Exports.IWorldRegion = _G['IWorldRegion'];
Exports.IChunkRegion = _G['IChunkRegion'];
Exports.IsoRegionManager = _G['IsoRegionManager'];
Exports.IsoWorldRegion = _G['IsoWorldRegion'];
Exports.IsoChunkRegion = _G['IsoChunkRegion'];
Exports.DataRoot = _G['DataRoot'];
Exports.DataCell = _G['DataCell'];
Exports.DataChunk = _G['DataChunk'];
Exports.SelectInfo = _G['SelectInfo'];
Exports.IsoRegionsLogger = _G['IsoRegionsLogger'];
Exports.IsoRegionLog = _G['IsoRegionLog'];
Exports.IsoRegionsRenderer = _G['IsoRegionsRenderer'];
Exports.IsoRegions = _G['IsoRegions'];
Exports.BooleanDebugOption = _G['BooleanDebugOption'];
Exports.SafeHouse = _G['SafeHouse'];
Exports.BuildingScore = _G['BuildingScore'];
Exports.IsoRoom = _G['IsoRoom'];
Exports.NonPvpZone = _G['NonPvpZone'];
Exports.IsoBuilding = _G['IsoBuilding'];
Exports.IsoRoomExit = _G['IsoRoomExit'];
Exports.ContainerOverlays = _G['ContainerOverlays'];
Exports.Frame = _G['Frame'];
Exports.Lighting = _G['Lighting'];
Exports.ResultLight = _G['ResultLight'];
Exports.MetaObject = _G['MetaObject'];
Exports.ChunkData = _G['ChunkData'];
Exports.IsoChunkMap = _G['IsoChunkMap'];
Exports.MultiStageBuilding = _G['MultiStageBuilding'];
Exports.IsoPuddles = _G['IsoPuddles'];
Exports.TileOverlays = _G['TileOverlays'];
Exports.BentFences = _G['BentFences'];
Exports.LosUtil = _G['LosUtil'];
Exports.VehicleZone = _G['VehicleZone'];
Exports.GetSquare = _G['GetSquare'];
Exports.OutlineShader = _G['OutlineShader'];
Exports.MetaCell = _G['MetaCell'];
Exports.IsoObjectPicker = _G['IsoObjectPicker'];
Exports.SyncIsoGridSquare = _G['SyncIsoGridSquare'];
Exports.IsoPuddlesGeometry = _G['IsoPuddlesGeometry'];
Exports.CellGetSquare = _G['CellGetSquare'];
Exports.NearestWalls = _G['NearestWalls'];
Exports.GridSquareMarker = _G['GridSquareMarker'];
Exports.SearchModeFloat = _G['SearchModeFloat'];
Exports.Helicopter = _G['Helicopter'];
Exports.IsoGridStack = _G['IsoGridStack'];
Exports.BrokenFences = _G['BrokenFences'];
Exports.IsoWorld = _G['IsoWorld'];
Exports.IsoMetaGrid = _G['IsoMetaGrid'];
Exports.IsoMarker = _G['IsoMarker'];
Exports.ClickObject = _G['ClickObject'];
Exports.SyncIsoChunk = _G['SyncIsoChunk'];
Exports.IsoLot = _G['IsoLot'];
Exports.SyncIsoObject = _G['SyncIsoObject'];
Exports.IsoCamera = _G['IsoCamera'];
Exports.ObjectsSyncRequests = _G['ObjectsSyncRequests'];
Exports.CircleIsoMarker = _G['CircleIsoMarker'];
Exports.IsoUtils = _G['IsoUtils'];
Exports.Zone = _G['Zone'];
Exports.IsoLuaMover = _G['IsoLuaMover'];
Exports.IsoMarkers = _G['IsoMarkers'];
Exports.Stage = _G['Stage'];
Exports.PuddlesDirection = _G['PuddlesDirection'];
Exports.IsoCell = _G['IsoCell'];
Exports.IsoWallBloodSplat = _G['IsoWallBloodSplat'];
Exports.FrameState = _G['FrameState'];
Exports.PerPlayerRender = _G['PerPlayerRender'];
Exports.IsoGridSquare = _G['IsoGridSquare'];
Exports.Point = _G['Point'];
Exports.PuddlesFloat = _G['PuddlesFloat'];
Exports.IsoMetaCell = _G['IsoMetaCell'];
Exports.ILighting = _G['ILighting'];
Exports.NoCircleStencilShader = _G['NoCircleStencilShader'];
Exports.IsoPushableObject = _G['IsoPushableObject'];
Exports.IsoFloorBloodSplat = _G['IsoFloorBloodSplat'];
Exports.IsoObjectSyncRequests = _G['IsoObjectSyncRequests'];
Exports.IsoLightSource = _G['IsoLightSource'];
Exports.BuildingDef = _G['BuildingDef'];
Exports.IsoObject = _G['IsoObject'];
Exports.IsoMetaChunk = _G['IsoMetaChunk'];
Exports.PlayerCamera = _G['PlayerCamera'];
Exports.SliceY = _G['SliceY'];
Exports.IsoWaterGeometry = _G['IsoWaterGeometry'];
Exports.IsoChunk = _G['IsoChunk'];
Exports.IsoHeatSource = _G['IsoHeatSource'];
Exports.WorldMarkers = _G['WorldMarkers'];
Exports.IsoRoomLight = _G['IsoRoomLight'];
Exports.Vector3 = _G['Vector3'];
Exports.TreeSoundManager = _G['TreeSoundManager'];
Exports.IsoGridOcclusionData = _G['IsoGridOcclusionData'];
Exports.Trigger = _G['Trigger'];
Exports.CircleStencilShader = _G['CircleStencilShader'];
Exports.PlayerSearchMode = _G['PlayerSearchMode'];
Exports.Vector2 = _G['Vector2'];
Exports.DirectionArrow = _G['DirectionArrow'];
Exports.RoomRect = _G['RoomRect'];
Exports.Line = _G['Line'];
Exports.IsoMovingObject = _G['IsoMovingObject'];
Exports.RoomDef = _G['RoomDef'];
Exports.IsoObjectFactory = _G['IsoObjectFactory'];
Exports.SearchMode = _G['SearchMode'];
Exports.LotHeader = _G['LotHeader'];
Exports.IsoDirectionSet = _G['IsoDirectionSet'];
Exports.PlayerHomingPoint = _G['PlayerHomingPoint'];
Exports.SyncData = _G['SyncData'];
Exports.Allocator = _G['Allocator'];
Exports.ZombiePopulationManager = _G['ZombiePopulationManager'];
Exports.ZombiePopulationRenderer = _G['ZombiePopulationRenderer'];
Exports.ObjectPool = _G['ObjectPool'];
Exports.BooleanDebugOption = _G['BooleanDebugOption'];
Exports.RandomizedDeadSurvivorBase = _G['RandomizedDeadSurvivorBase'];
Exports.RDSHouseParty = _G['RDSHouseParty'];
Exports.RDSPokerNight = _G['RDSPokerNight'];
Exports.RDSZombiesEating = _G['RDSZombiesEating'];
Exports.RDSHenDo = _G['RDSHenDo'];
Exports.RDSPoliceAtHouse = _G['RDSPoliceAtHouse'];
Exports.RDSSuicidePact = _G['RDSSuicidePact'];
Exports.RDSPrisonEscape = _G['RDSPrisonEscape'];
Exports.RDSGunmanInBathroom = _G['RDSGunmanInBathroom'];
Exports.RDSHockeyPsycho = _G['RDSHockeyPsycho'];
Exports.RDSZombieLockedBathroom = _G['RDSZombieLockedBathroom'];
Exports.RDSPrisonEscapeWithPolice = _G['RDSPrisonEscapeWithPolice'];
Exports.RDSStagDo = _G['RDSStagDo'];
Exports.RDSTinFoilHat = _G['RDSTinFoilHat'];
Exports.RDSSkeletonPsycho = _G['RDSSkeletonPsycho'];
Exports.RDSFootballNight = _G['RDSFootballNight'];
Exports.RDSSpecificProfession = _G['RDSSpecificProfession'];
Exports.RDSBleach = _G['RDSBleach'];
Exports.RDSBandPractice = _G['RDSBandPractice'];
Exports.RDSBedroomZed = _G['RDSBedroomZed'];
Exports.RDSDeadDrunk = _G['RDSDeadDrunk'];
Exports.RDSGunslinger = _G['RDSGunslinger'];
Exports.RDSCorpsePsycho = _G['RDSCorpsePsycho'];
Exports.RDSStudentNight = _G['RDSStudentNight'];
Exports.RDSBathroomZed = _G['RDSBathroomZed'];
Exports.RVSBanditRoad = _G['RVSBanditRoad'];
Exports.RVSPoliceBlockadeShooting = _G['RVSPoliceBlockadeShooting'];
Exports.Element = _G['Element'];
Exports.RVSCrashHorde = _G['RVSCrashHorde'];
Exports.RVSPoliceBlockade = _G['RVSPoliceBlockade'];
Exports.RVSTrailerCrash = _G['RVSTrailerCrash'];
Exports.RVSBurntCar = _G['RVSBurntCar'];
Exports.RandomizedVehicleStoryBase = _G['RandomizedVehicleStoryBase'];
Exports.RVSCarCrashCorpse = _G['RVSCarCrashCorpse'];
Exports.RVSConstructionSite = _G['RVSConstructionSite'];
Exports.RVSFlippedCrash = _G['RVSFlippedCrash'];
Exports.RVSChangingTire = _G['RVSChangingTire'];
Exports.RVSCarCrash = _G['RVSCarCrash'];
Exports.VehicleStorySpawner = _G['VehicleStorySpawner'];
Exports.IElementSpawner = _G['IElementSpawner'];
Exports.RVSAmbulanceCrash = _G['RVSAmbulanceCrash'];
Exports.RVSUtilityVehicle = _G['RVSUtilityVehicle'];
Exports.VehicleStorySpawnData = _G['VehicleStorySpawnData'];
Exports.RZSMusicFestStage = _G['RZSMusicFestStage'];
Exports.RZSBeachParty = _G['RZSBeachParty'];
Exports.RZSForestCamp = _G['RZSForestCamp'];
Exports.RZSForestCampEaten = _G['RZSForestCampEaten'];
Exports.RZSBuryingCamp = _G['RZSBuryingCamp'];
Exports.RZSFishingTrip = _G['RZSFishingTrip'];
Exports.RZSMusicFest = _G['RZSMusicFest'];
Exports.RandomizedZoneStoryBase = _G['RandomizedZoneStoryBase'];
Exports.RZSHunterCamp = _G['RZSHunterCamp'];
Exports.RZSBBQParty = _G['RZSBBQParty'];
Exports.RZSSexyTime = _G['RZSSexyTime'];
Exports.RZSTrapperCamp = _G['RZSTrapperCamp'];
Exports.RZSBaseball = _G['RZSBaseball'];
Exports.RBBar = _G['RBBar'];
Exports.RBBurnt = _G['RBBurnt'];
Exports.RBCafe = _G['RBCafe'];
Exports.HumanCorpse = _G['HumanCorpse'];
Exports.RBSchool = _G['RBSchool'];
Exports.RandomizedBuildingBase = _G['RandomizedBuildingBase'];
Exports.RBSpiffo = _G['RBSpiffo'];
Exports.RBStripclub = _G['RBStripclub'];
Exports.RBClinic = _G['RBClinic'];
Exports.RBKateAndBaldspot = _G['RBKateAndBaldspot'];
Exports.RBLooted = _G['RBLooted'];
Exports.RBBurntCorpse = _G['RBBurntCorpse'];
Exports.RBOther = _G['RBOther'];
Exports.RBBurntFireman = _G['RBBurntFireman'];
Exports.RBBasic = _G['RBBasic'];
Exports.RBPileOCrepe = _G['RBPileOCrepe'];
Exports.RBSafehouse = _G['RBSafehouse'];
Exports.RBOffice = _G['RBOffice'];
Exports.RBShopLooted = _G['RBShopLooted'];
Exports.RBHairSalon = _G['RBHairSalon'];
Exports.RBPizzaWhirled = _G['RBPizzaWhirled'];
Exports.RandomizedWorldBase = _G['RandomizedWorldBase'];
Exports.NPCData = _G['NPCData'];
Exports.BaseVehicle = _G['BaseVehicle'];
Exports.QuaternionfObjectPool = _G['QuaternionfObjectPool'];
Exports.MinMaxPosition = _G['MinMaxPosition'];
Exports.PlaneObjectPool = _G['PlaneObjectPool'];
Exports.EditVehicleState = _G['EditVehicleState'];
Exports.VehicleInterpolation = _G['VehicleInterpolation'];
Exports.UI3DScene = _G['UI3DScene'];
Exports.LightbarLightsMode = _G['LightbarLightsMode'];
Exports.LightbarSirenMode = _G['LightbarSirenMode'];
Exports.Vector3fObjectPool = _G['Vector3fObjectPool'];
Exports.PathFindState2 = _G['PathFindState2'];
Exports.Path = _G['Path'];
Exports.WheelInfo = _G['WheelInfo'];
Exports.PathFindBehavior2 = _G['PathFindBehavior2'];
Exports.VehicleDoor = _G['VehicleDoor'];
Exports.LiangBarsky = _G['LiangBarsky'];
Exports.VehicleTypeDefinition = _G['VehicleTypeDefinition'];
Exports.CCObstacle = _G['CCObstacle'];
Exports.Matrix4fObjectPool = _G['Matrix4fObjectPool'];
Exports.RayObjectPool = _G['RayObjectPool'];
Exports.ModelInfo = _G['ModelInfo'];
Exports.ServerVehicleState = _G['ServerVehicleState'];
Exports.PathFindRequest = _G['PathFindRequest'];
Exports.VehicleWindow = _G['VehicleWindow'];
Exports.ChunkData = _G['ChunkData'];
Exports.SurroundVehicle = _G['SurroundVehicle'];
Exports.Ray = _G['Ray'];
Exports.Vector2ObjectPool = _G['Vector2ObjectPool'];
Exports.Passenger = _G['Passenger'];
Exports.EngineRPMData = _G['EngineRPMData'];
Exports.Plane = _G['Plane'];
Exports.LuaEnvironment = _G['LuaEnvironment'];
Exports.VehicleLight = _G['VehicleLight'];
Exports.CollideWithObstaclesPoly = _G['CollideWithObstaclesPoly'];
Exports.IPathfinder = _G['IPathfinder'];
Exports.PointOnPath = _G['PointOnPath'];
Exports.VehiclePart = _G['VehiclePart'];
Exports.Vector2fObjectPool = _G['Vector2fObjectPool'];
Exports.ChunkDataZ = _G['ChunkDataZ'];
Exports.PolygonalMap2 = _G['PolygonalMap2'];
Exports.CCNode = _G['CCNode'];
Exports.VehicleType = _G['VehicleType'];
Exports.Point = _G['Point'];
Exports.VehiclePoly = _G['VehiclePoly'];
Exports.VehicleEngineRPM = _G['VehicleEngineRPM'];
Exports.HitVars = _G['HitVars'];
Exports.Literature = _G['Literature'];
Exports.Clothing = _G['Clothing'];
Exports.Drainable = _G['Drainable'];
Exports.Radio = _G['Radio'];
Exports.ComboItem = _G['ComboItem'];
Exports.Moveable = _G['Moveable'];
Exports.WeaponPart = _G['WeaponPart'];
Exports.DrainableComboItem = _G['DrainableComboItem'];
Exports.InventoryContainer = _G['InventoryContainer'];
Exports.HandWeapon = _G['HandWeapon'];
Exports.KeyRing = _G['KeyRing'];
Exports.AlarmClockClothing = _G['AlarmClockClothing'];
Exports.ClothingPatch = _G['ClothingPatch'];
Exports.MapItem = _G['MapItem'];
Exports.AlarmClock = _G['AlarmClock'];
Exports.Key = _G['Key'];
Exports.Food = _G['Food'];
Exports.ItemContainer = _G['ItemContainer'];
Exports.InventoryItem = _G['InventoryItem'];
Exports.ItemPickerRoom = _G['ItemPickerRoom'];
Exports.FixingManager = _G['FixingManager'];
Exports.ItemPickerUpgradeWeapons = _G['ItemPickerUpgradeWeapons'];
Exports.ItemPickerJava = _G['ItemPickerJava'];
Exports.InventoryItemFactory = _G['InventoryItemFactory'];
Exports.ItemPickerItem = _G['ItemPickerItem'];
Exports.ItemPickerContainer = _G['ItemPickerContainer'];
Exports.RecipeManager = _G['RecipeManager'];
Exports.VehicleDistribution = _G['VehicleDistribution'];
Exports.ProceduralItem = _G['ProceduralItem'];
Exports.RadioLine = _G['RadioLine'];
Exports.ExitOption = _G['ExitOption'];
Exports.DynamicRadioChannel = _G['DynamicRadioChannel'];
Exports.RadioBroadCast = _G['RadioBroadCast'];
Exports.RadioScript = _G['RadioScript'];
Exports.RadioScriptManager = _G['RadioScriptManager'];
Exports.RadioChannel = _G['RadioChannel'];
Exports.DevicePresets = _G['DevicePresets'];
Exports.WaveSignalDevice = _G['WaveSignalDevice'];
Exports.PresetEntry = _G['PresetEntry'];
Exports.DeviceData = _G['DeviceData'];
Exports.MediaNameSorter = _G['MediaNameSorter'];
Exports.MediaData = _G['MediaData'];
Exports.RecordedMedia = _G['RecordedMedia'];
Exports.MediaLineData = _G['MediaLineData'];
Exports.StorySound = _G['StorySound'];
Exports.StorySoundEvent = _G['StorySoundEvent'];
Exports.DataPoint = _G['DataPoint'];
Exports.EventSound = _G['EventSound'];
Exports.SLSoundManager = _G['SLSoundManager'];
Exports.StoryEmitter = _G['StoryEmitter'];
Exports.Sound = _G['Sound'];
Exports.ZomboidRadio = _G['ZomboidRadio'];
Exports.RadioAPI = _G['RadioAPI'];
Exports.RadioData = _G['RadioData'];
Exports.Vehicle = _G['Vehicle'];
Exports.MovingObject = _G['MovingObject'];
Exports.HitInfo = _G['HitInfo'];
Exports.NetObject = _G['NetObject'];
Exports.HitCharacterPacket = _G['HitCharacterPacket'];
Exports.VehicleHitPacket = _G['VehicleHitPacket'];
Exports.AttackVars = _G['AttackVars'];
Exports.ZombiePacket = _G['ZombiePacket'];
Exports.l_send = _G['l_send'];
Exports.PlayerVariables = _G['PlayerVariables'];
Exports.PlayerPacket = _G['PlayerPacket'];
Exports.l_receive = _G['l_receive'];
Exports.EventPacket = _G['EventPacket'];
Exports.DeadCharacterPacket = _G['DeadCharacterPacket'];
Exports.ClientChunkRequest = _G['ClientChunkRequest'];
Exports.IntegerServerOption = _G['IntegerServerOption'];
Exports.Server = _G['Server'];
Exports.GameClient = _G['GameClient'];
Exports.Userlog = _G['Userlog'];
Exports.BodyDamageSync = _G['BodyDamageSync'];
Exports.StringServerOption = _G['StringServerOption'];
Exports.ReplayManager = _G['ReplayManager'];
Exports.DBTicket = _G['DBTicket'];
Exports.ServerSettings = _G['ServerSettings'];
Exports.BooleanServerOption = _G['BooleanServerOption'];
Exports.Chunk = _G['Chunk'];
Exports.PlayerDownloadServer = _G['PlayerDownloadServer'];
Exports.ClientServerMap = _G['ClientServerMap'];
Exports.DBResult = _G['DBResult'];
Exports.DoubleServerOption = _G['DoubleServerOption'];
Exports.Updater = _G['Updater'];
Exports.ServerOption = _G['ServerOption'];
Exports.TextServerOption = _G['TextServerOption'];
Exports.ServerSettingsManager = _G['ServerSettingsManager'];
Exports.NetworkAIParams = _G['NetworkAIParams'];
Exports.ServerOptions = _G['ServerOptions'];
Exports.Perk = _G['Perk'];
Exports.PerkFactory = _G['PerkFactory'];
Exports.Perks = _G['Perks'];
Exports.AttachedItems = _G['AttachedItems'];
Exports.AttachedLocationGroup = _G['AttachedLocationGroup'];
Exports.AttachedItem = _G['AttachedItem'];
Exports.AttachedLocation = _G['AttachedLocation'];
Exports.AttachedLocations = _G['AttachedLocations'];
Exports.TraitCollection = _G['TraitCollection'];
Exports.ObservationFactory = _G['ObservationFactory'];
Exports.TraitSlot = _G['TraitSlot'];
Exports.Observation = _G['Observation'];
Exports.Trait = _G['Trait'];
Exports.TraitFactory = _G['TraitFactory'];
Exports.Moodle = _G['Moodle'];
Exports.Moodles = _G['Moodles'];
Exports.BodyLocationGroup = _G['BodyLocationGroup'];
Exports.WornItem = _G['WornItem'];
Exports.WornItems = _G['WornItems'];
Exports.BodyLocations = _G['BodyLocations'];
Exports.BodyLocation = _G['BodyLocation'];
Exports.BodyPart = _G['BodyPart'];
Exports.ThermalNode = _G['ThermalNode'];
Exports.BodyPartLast = _G['BodyPartLast'];
Exports.Nutrition = _G['Nutrition'];
Exports.FitnessExercise = _G['FitnessExercise'];
Exports.BodyDamage = _G['BodyDamage'];
Exports.Thermoregulator = _G['Thermoregulator'];
Exports.Fitness = _G['Fitness'];
Exports.Profession = _G['Profession'];
Exports.ProfessionFactory = _G['ProfessionFactory'];
Exports.ActionTransition = _G['ActionTransition'];
Exports.ActionGroup = _G['ActionGroup'];
Exports.ActionStateSnapshot = _G['ActionStateSnapshot'];
Exports.IActionStateChanged = _G['IActionStateChanged'];
Exports.ActionContext = _G['ActionContext'];
Exports.ActionState = _G['ActionState'];
Exports.LuaTimedAction = _G['LuaTimedAction'];
Exports.BaseAction = _G['BaseAction'];
Exports.LuaTimedActionNew = _G['LuaTimedActionNew'];
Exports.HitReactionNetworkAI = _G['HitReactionNetworkAI'];
Exports.IsoPlayer = _G['IsoPlayer'];
Exports.XPMultiplier = _G['XPMultiplier'];
Exports.IsoZombie = _G['IsoZombie'];
Exports.MoveDeltaModifiers = _G['MoveDeltaModifiers'];
Exports.HaloTextHelper = _G['HaloTextHelper'];
Exports.Transform = _G['Transform'];
Exports.NetworkCharacter = _G['NetworkCharacter'];
Exports.LightInfo = _G['LightInfo'];
Exports.NetworkTeleport = _G['NetworkTeleport'];
Exports.NetworkPlayerAI = _G['NetworkPlayerAI'];
Exports.NetworkCharacterAI = _G['NetworkCharacterAI'];
Exports.PerkInfo = _G['PerkInfo'];
Exports.IsoLivingCharacter = _G['IsoLivingCharacter'];
Exports.CharacterSoundEmitter = _G['CharacterSoundEmitter'];
Exports.BaseCharacterSoundEmitter = _G['BaseCharacterSoundEmitter'];
Exports.DummyCharacterSoundEmitter = _G['DummyCharacterSoundEmitter'];
Exports.Faction = _G['Faction'];
Exports.ZombieGroup = _G['ZombieGroup'];
Exports.NetworkZombieAI = _G['NetworkZombieAI'];
Exports.TorchInfo = _G['TorchInfo'];
Exports.XP = _G['XP'];
Exports.SurvivorFactory = _G['SurvivorFactory'];
Exports.SurvivorDesc = _G['SurvivorDesc'];
Exports.ItemList = _G['ItemList'];
Exports.IsoSurvivor = _G['IsoSurvivor'];
Exports.NetworkZombieMind = _G['NetworkZombieMind'];
Exports.NetworkTeleportDebug = _G['NetworkTeleportDebug'];
Exports.ColorRGB = _G['ColorRGB'];
Exports.IsoGameCharacter = _G['IsoGameCharacter'];
Exports.IsoDummyCameraCharacter = _G['IsoDummyCameraCharacter'];
Exports.ClothingWetness = _G['ClothingWetness'];
Exports.Stats = _G['Stats'];
Exports.CharacterTraits = _G['CharacterTraits'];
Exports.Location = _G['Location'];
Exports.SurvivorGroup = _G['SurvivorGroup'];
Exports.EvolvedRecipe = _G['EvolvedRecipe'];
Exports.RequiredSkill = _G['RequiredSkill'];
Exports.Wheel = _G['Wheel'];
Exports.Recipe = _G['Recipe'];
Exports.SwitchSeat = _G['SwitchSeat'];
Exports.Sounds = _G['Sounds'];
Exports.Door = _G['Door'];
Exports.Result = _G['Result'];
Exports.Source = _G['Source'];
Exports.GameSoundScript = _G['GameSoundScript'];
Exports.VehicleScript = _G['VehicleScript'];
Exports.ModelWeaponPart = _G['ModelWeaponPart'];
Exports.Item = _G['Item'];
Exports.Position = _G['Position'];
Exports.Passenger = _G['Passenger'];
Exports.FixerSkill = _G['FixerSkill'];
Exports.ItemRecipe = _G['ItemRecipe'];
Exports.LightBar = _G['LightBar'];
Exports.Model = _G['Model'];
Exports.Container = _G['Container'];
Exports.UniqueRecipe = _G['UniqueRecipe'];
Exports.ScriptModule = _G['ScriptModule'];
Exports.ItemReplacement = _G['ItemReplacement'];
Exports.MovableRecipe = _G['MovableRecipe'];
Exports.VehicleTemplate = _G['VehicleTemplate'];
Exports.Area = _G['Area'];
Exports.ModelScript = _G['ModelScript'];
Exports.Anim = _G['Anim'];
Exports.SoundTimelineScript = _G['SoundTimelineScript'];
Exports.Window = _G['Window'];
Exports.Skin = _G['Skin'];
Exports.PhysicsShape = _G['PhysicsShape'];
Exports.Fixer = _G['Fixer'];
Exports.Part = _G['Part'];
Exports.Fixing = _G['Fixing'];
Exports.ModelAttachment = _G['ModelAttachment'];
Exports.ScriptManager = _G['ScriptManager'];
Exports.ModData = _G['ModData'];
Exports.TextManager = _G['TextManager'];
Exports.UIElement = _G['UIElement'];
Exports.TextDrawObject = _G['TextDrawObject'];
Exports.UIManager = _G['UIManager'];
Exports.UITransition = _G['UITransition'];
Exports.Layout = _G['Layout'];
Exports.RadialMenu = _G['RadialMenu'];
Exports.Clock = _G['Clock'];
Exports.SpeedControls = _G['SpeedControls'];
Exports.HUDButton = _G['HUDButton'];
Exports.NewHealthPanel = _G['NewHealthPanel'];
Exports.UIServerToolbox = _G['UIServerToolbox'];
Exports.UINineGrid = _G['UINineGrid'];
Exports.ActionProgressBar = _G['ActionProgressBar'];
Exports.UI3DModel = _G['UI3DModel'];
Exports.LayoutItem = _G['LayoutItem'];
Exports.MoodlesUI = _G['MoodlesUI'];
Exports.DeferedTextDraw = _G['DeferedTextDraw'];
Exports.RadialProgressBar = _G['RadialProgressBar'];
Exports.UITextBox2 = _G['UITextBox2'];
Exports.UIDebugConsole = _G['UIDebugConsole'];
Exports.VehicleGauge = _G['VehicleGauge'];
Exports.ModalDialog = _G['ModalDialog'];
Exports.SCButton = _G['SCButton'];
Exports.UI_BodyPart = _G['UI_BodyPart'];
Exports.ObjectTooltip = _G['ObjectTooltip'];
Exports.RadarPanel = _G['RadarPanel'];
Exports.UIEventHandler = _G['UIEventHandler'];
Exports.CGlobalObjectSystem = _G['CGlobalObjectSystem'];
Exports.GlobalObject = _G['GlobalObject'];
Exports.CGlobalObjects = _G['CGlobalObjects'];
Exports.CGlobalObject = _G['CGlobalObject'];
Exports.SGlobalObject = _G['SGlobalObject'];
Exports.GlobalObjectSystem = _G['GlobalObjectSystem'];
Exports.SGlobalObjectSystem = _G['SGlobalObjectSystem'];
Exports.SGlobalObjects = _G['SGlobalObjects'];
Exports.Exposer = _G['Exposer'];
Exports.LuaManager = _G['LuaManager'];
Exports.LuaEventManager = _G['LuaEventManager'];
Exports.LuaFileWriter = _G['LuaFileWriter'];
Exports.Event = _G['Event'];
Exports.GlobalObject = _G['GlobalObject'];
Exports.Remove = _G['Remove'];
Exports.Add = _G['Add'];
Exports.MapObjects = _G['MapObjects'];
Exports.ParameterCharacterMovementSpeed = _G['ParameterCharacterMovementSpeed'];
Exports.ParameterZombieState = _G['ParameterZombieState'];
Exports.FMODParameterList = _G['FMODParameterList'];
Exports.BaseSoundBank = _G['BaseSoundBank'];
Exports.DummySoundBank = _G['DummySoundBank'];
Exports.FMODParameter = _G['FMODParameter'];
Exports.DummySoundEmitter = _G['DummySoundEmitter'];
Exports.BaseSoundEmitter = _G['BaseSoundEmitter'];
Exports.GameSound = _G['GameSound'];
Exports.GameSoundClip = _G['GameSoundClip'];
Exports.TexturePackTextures = _G['TexturePackTextures'];
Exports.SubTexture = _G['SubTexture'];
Exports.FileTask = _G['FileTask'];
Exports.IFile = _G['IFile'];
Exports.FileSystem = _G['FileSystem'];
Exports.DeviceList = _G['DeviceList'];
Exports.IFileDevice = _G['IFileDevice'];
Exports.IFileTaskCallback = _G['IFileTaskCallback'];
Exports.IFileTask2Callback = _G['IFileTask2Callback'];
Exports.ActiveMods = _G['ActiveMods'];
Exports.ITexture = _G['ITexture'];
Exports.DebugOG = _G['DebugOG'];
Exports.OffscreenBuffer = _G['OffscreenBuffer'];
Exports.Character = _G['Character'];
Exports.RenderOG = _G['RenderOG'];
Exports.AnimLayerOG = _G['AnimLayerOG'];
Exports.IsoSprite = _G['IsoSprite'];
Exports.Walls = _G['Walls'];
Exports.Weather = _G['Weather'];
Exports.Server = _G['Server'];
Exports.IDebugOption = _G['IDebugOption'];
Exports.IsoGridSquare = _G['IsoGridSquare'];
Exports.Terrain = _G['Terrain'];
Exports.Floor = _G['Floor'];
Exports.Network = _G['Network'];
Exports.AnimateOG = _G['AnimateOG'];
Exports.Animation = _G['Animation'];
Exports.RenderTiles = _G['RenderTiles'];
Exports.Client = _G['Client'];
Exports.SharedSkelesOG = _G['SharedSkelesOG'];
Exports.IDebugOptionGroup = _G['IDebugOptionGroup'];
Exports.PublicServerUtil = _G['PublicServerUtil'];
Exports.DebugLog = _G['DebugLog'];
Exports.BooleanDebugOption = _G['BooleanDebugOption'];
Exports.IDebugLogFormatter = _G['IDebugLogFormatter'];
Exports.Checks = _G['Checks'];
Exports.DebugOptions = _G['DebugOptions'];
Exports.DebugLogStream = _G['DebugLogStream'];
Exports.CustomSandboxOption = _G['CustomSandboxOption'];
Exports.SleepingEventData = _G['SleepingEventData'];
Exports.SleepingEvent = _G['SleepingEvent'];
Exports.IStatePermissions = _G['IStatePermissions'];
Exports.AStarPathFinderResult = _G['AStarPathFinderResult'];
Exports.Mover = _G['Mover'];
Exports.Path = _G['Path'];
Exports.IPathfinder = _G['IPathfinder'];
Exports.Step = _G['Step'];
Exports.IdleState = _G['IdleState'];
Exports.PlayerFallDownState = _G['PlayerFallDownState'];
Exports.PlayerEmoteState = _G['PlayerEmoteState'];
Exports.SmashWindowState = _G['SmashWindowState'];
Exports.BurntToDeath = _G['BurntToDeath'];
Exports.CrawlingZombieTurnState = _G['CrawlingZombieTurnState'];
Exports.ThumpState = _G['ThumpState'];
Exports.OpenWindowState = _G['OpenWindowState'];
Exports.ZombieFallDownState = _G['ZombieFallDownState'];
Exports.LungeState = _G['LungeState'];
Exports.PlayerExtState = _G['PlayerExtState'];
Exports.PlayerFallingState = _G['PlayerFallingState'];
Exports.ClimbSheetRopeState = _G['ClimbSheetRopeState'];
Exports.PlayerHitReactionState = _G['PlayerHitReactionState'];
Exports.ClimbOverWallState = _G['ClimbOverWallState'];
Exports.CustomComparator = _G['CustomComparator'];
Exports.AttackState = _G['AttackState'];
Exports.PlayerKnockedDown = _G['PlayerKnockedDown'];
Exports.SwipeStatePlayer = _G['SwipeStatePlayer'];
Exports.FakeDeadAttackState = _G['FakeDeadAttackState'];
Exports.ZombieReanimateState = _G['ZombieReanimateState'];
Exports.StaggerBackState = _G['StaggerBackState'];
Exports.ZombieOnGroundState = _G['ZombieOnGroundState'];
Exports.ClimbOverFenceState = _G['ClimbOverFenceState'];
Exports.PlayerOnGroundState = _G['PlayerOnGroundState'];
Exports.WalkTowardState = _G['WalkTowardState'];
Exports.PlayerGetUpState = _G['PlayerGetUpState'];
Exports.ZombieIdleState = _G['ZombieIdleState'];
Exports.ClimbThroughWindowState = _G['ClimbThroughWindowState'];
Exports.ClimbDownSheetRopeState = _G['ClimbDownSheetRopeState'];
Exports.ZombieGetDownState = _G['ZombieGetDownState'];
Exports.FakeDeadZombieState = _G['FakeDeadZombieState'];
Exports.PlayerHitReactionPVPState = _G['PlayerHitReactionPVPState'];
Exports.PlayerSitOnGroundState = _G['PlayerSitOnGroundState'];
Exports.CloseWindowState = _G['CloseWindowState'];
Exports.PathFindState = _G['PathFindState'];
Exports.FishingState = _G['FishingState'];
Exports.PlayerStrafeState = _G['PlayerStrafeState'];
Exports.PlayerActionsState = _G['PlayerActionsState'];
Exports.ZombieSittingState = _G['ZombieSittingState'];
Exports.FitnessState = _G['FitnessState'];
Exports.PlayerAimState = _G['PlayerAimState'];
Exports.ZombieGetUpState = _G['ZombieGetUpState'];
Exports.GameCharacterAIBrain = _G['GameCharacterAIBrain'];
Exports.State = _G['State'];
Exports.StateMachine = _G['StateMachine'];
Exports.MapKnowledge = _G['MapKnowledge'];
Exports.WalkingOnTheSpot = _G['WalkingOnTheSpot'];
Exports.KnownBlockedEdges = _G['KnownBlockedEdges'];
Exports.AIBrainPlayerControlVars = _G['AIBrainPlayerControlVars'];
Exports.SubstateSlot = _G['SubstateSlot'];
Exports.Mouse = _G['Mouse'];
Exports.Joypad = _G['Joypad'];
Exports.GameKeyboard = _G['GameKeyboard'];
Exports.JoypadManager = _G['JoypadManager'];
Exports.IGLBufferObject = _G['IGLBufferObject'];
Exports.Shader = _G['Shader'];
Exports.RuntimeAnimationScript = _G['RuntimeAnimationScript'];
Exports.IHumanVisual = _G['IHumanVisual'];
Exports.HumanVisual = _G['HumanVisual'];
Exports.BaseVisual = _G['BaseVisual'];
Exports.ItemVisual = _G['ItemVisual'];
Exports.ItemVisuals = _G['ItemVisuals'];
Exports.ModelMesh = _G['ModelMesh'];
Exports.VertexArray = _G['VertexArray'];
Exports.VertexElement = _G['VertexElement'];
Exports.VehicleSubModelInstance = _G['VehicleSubModelInstance'];
Exports.VertexFormat = _G['VertexFormat'];
Exports.UInt4 = _G['UInt4'];
Exports.SkinningBone = _G['SkinningBone'];
Exports.ModelInstanceRenderData = _G['ModelInstanceRenderData'];
Exports.VertexPositionNormalTangentTextureSkin = _G['VertexPositionNormalTangentTextureSkin'];
Exports.SoftwareModelMeshInstance = _G['SoftwareModelMeshInstance'];
Exports.ModelSlotRenderData = _G['ModelSlotRenderData'];
Exports.PlayerData = _G['PlayerData'];
Exports.ModelInstanceTextureCreator = _G['ModelInstanceTextureCreator'];
Exports.MeshAssetParams = _G['MeshAssetParams'];
Exports.ModelInstanceRenderDataList = _G['ModelInstanceRenderDataList'];
Exports.AnimationAssetParams = _G['AnimationAssetParams'];
Exports.EffectLight = _G['EffectLight'];
Exports.ModelInstanceTextureInitializer = _G['ModelInstanceTextureInitializer'];
Exports.VertexBufferObject = _G['VertexBufferObject'];
Exports.FrameLightInfo = _G['FrameLightInfo'];
Exports.Vbo = _G['Vbo'];
Exports.ModelInstance = _G['ModelInstance'];
Exports.ModelAssetParams = _G['ModelAssetParams'];
Exports.SoftwareModelMesh = _G['SoftwareModelMesh'];
Exports.AnimationAsset = _G['AnimationAsset'];
Exports.SkinningBoneHierarchy = _G['SkinningBoneHierarchy'];
Exports.Model = _G['Model'];
Exports.VertexPositionNormalTangentTexture = _G['VertexPositionNormalTangentTexture'];
Exports.SkinningData = _G['SkinningData'];
Exports.CharacterMask = _G['CharacterMask'];
Exports.AnimatorDebugMonitor = _G['AnimatorDebugMonitor'];
Exports.AnimTransition = _G['AnimTransition'];
Exports.CallbackGetStrongTyped = _G['CallbackGetStrongTyped'];
Exports.AdvancedAnimator = _G['AdvancedAnimator'];
Exports.IAnimationVariableSlot = _G['IAnimationVariableSlot'];
Exports.AnimLayer = _G['AnimLayer'];
Exports.IAnimEventCallback = _G['IAnimEventCallback'];
Exports.LiveAnimNode = _G['LiveAnimNode'];
Exports.CallbackGetStrongTyped = _G['CallbackGetStrongTyped'];
Exports.AnimationVariableSource = _G['AnimationVariableSource'];
Exports.CallbackSetStrongTyped = _G['CallbackSetStrongTyped'];
Exports.CallbackGetStrongTyped = _G['CallbackGetStrongTyped'];
Exports.SubLayerSlot = _G['SubLayerSlot'];
Exports.AnimationSet = _G['AnimationSet'];
Exports.Anim2DBlendPicker = _G['Anim2DBlendPicker'];
Exports.AnimationVariableHandle = _G['AnimationVariableHandle'];
Exports.Anim2DBlend = _G['Anim2DBlend'];
Exports.Anim2DBlendTriangle = _G['Anim2DBlendTriangle'];
Exports.PickResults = _G['PickResults'];
Exports.CallbackGetStrongTyped = _G['CallbackGetStrongTyped'];
Exports.AnimCondition = _G['AnimCondition'];
Exports.AnimBoneWeight = _G['AnimBoneWeight'];
Exports.CallbackSetStrongTyped = _G['CallbackSetStrongTyped'];
Exports.IAnimationVariableSource = _G['IAnimationVariableSource'];
Exports.AnimationVariableSlotCallbackFloat = _G['AnimationVariableSlotCallbackFloat'];
Exports.AnimationVariableSlotCallbackBool = _G['AnimationVariableSlotCallbackBool'];
Exports.AnimationVariableSlotCallbackInt = _G['AnimationVariableSlotCallbackInt'];
Exports.AnimState = _G['AnimState'];
Exports.AnimNode = _G['AnimNode'];
Exports.AnimEvent = _G['AnimEvent'];
Exports.IAnimatable = _G['IAnimatable'];
Exports.CallbackSetStrongTyped = _G['CallbackSetStrongTyped'];
Exports.AnimationVariableSlotCallbackString = _G['AnimationVariableSlotCallbackString'];
Exports.CallbackSetStrongTyped = _G['CallbackSetStrongTyped'];
Exports.AnimationPlayerRecorder = _G['AnimationPlayerRecorder'];
Exports.SharedSkeleAnimationRepository = _G['SharedSkeleAnimationRepository'];
Exports.SharedSkeleAnimationTrack = _G['SharedSkeleAnimationTrack'];
Exports.AnimationMultiTrack = _G['AnimationMultiTrack'];
Exports.AnimationPlayer = _G['AnimationPlayer'];
Exports.AnimTrackSampler = _G['AnimTrackSampler'];
Exports.SoftwareSkinnedModelAnim = _G['SoftwareSkinnedModelAnim'];
Exports.Keyframe = _G['Keyframe'];
Exports.IAnimListener = _G['IAnimListener'];
Exports.AnimationBoneBinding = _G['AnimationBoneBinding'];
Exports.AnimationClip = _G['AnimationClip'];
Exports.AnimationTrack = _G['AnimationTrack'];
Exports.StaticAnimation = _G['StaticAnimation'];
Exports.RandomData = _G['RandomData'];
Exports.HairStyles = _G['HairStyles'];
Exports.BeardStyles = _G['BeardStyles'];
Exports.BeardStyle = _G['BeardStyle'];
Exports.Outfit = _G['Outfit'];
Exports.ClothingItem = _G['ClothingItem'];
Exports.RandomData = _G['RandomData'];
Exports.ClothingItemReference = _G['ClothingItemReference'];
Exports.Alternate = _G['Alternate'];
Exports.HairStyle = _G['HairStyle'];
Exports.ModAnimations = _G['ModAnimations'];
Exports.Vector3 = _G['Vector3'];
Exports.Vector4 = _G['Vector4'];
Exports.ModelManager = _G['ModelManager'];
Exports.ModelSlot = _G['ModelSlot'];
Exports.GenericDrawer = _G['GenericDrawer'];
Exports.MultiTextureFBO2 = _G['MultiTextureFBO2'];
Exports.Mask = _G['Mask'];
Exports.TextureIDAssetParams = _G['TextureIDAssetParams'];
Exports.IGLFramebufferObject = _G['IGLFramebufferObject'];
Exports.Texture = _G['Texture'];
Exports.TextureDraw = _G['TextureDraw'];
Exports.TextureFBO = _G['TextureFBO'];
Exports.ColorInfo = _G['ColorInfo'];
Exports.MipMapLevel = _G['MipMapLevel'];
Exports.TexturePackPage = _G['TexturePackPage'];
Exports.ImageData = _G['ImageData'];
Exports.TextureID = _G['TextureID'];
Exports.SubTextureInfo = _G['SubTextureInfo'];
Exports.TextureAssetParams = _G['TextureAssetParams'];
Exports.ZLogger = _G['ZLogger'];
Exports.PlayerRenderSettings = _G['PlayerRenderSettings'];
Exports.ShaderProgram = _G['ShaderProgram'];
Exports.SharedVertexBufferObjects = _G['SharedVertexBufferObjects'];
Exports.IShaderProgramListener = _G['IShaderProgramListener'];
Exports.Shader = _G['Shader'];
Exports.RenderSettings = _G['RenderSettings'];
Exports.Uniform = _G['Uniform'];
Exports.ShaderUnit = _G['ShaderUnit'];
Exports.ByteBufferWriter = _G['ByteBufferWriter'];
Exports.UdpConnection = _G['UdpConnection'];
Exports.UdpEngine = _G['UdpEngine'];
Exports.MPClientStatistic = _G['MPClientStatistic'];
Exports.RakNetPeerInterface = _G['RakNetPeerInterface'];
Exports.Input = _G['Input'];
Exports.AngelCodeFont = _G['AngelCodeFont'];
Exports.CharDefTexture = _G['CharDefTexture'];
Exports.CharDef = _G['CharDef'];
Exports.IntGrid = _G['IntGrid'];
Exports.WrappedBuffer = _G['WrappedBuffer'];
Exports.UpdateTimer = _G['UpdateTimer'];
Exports.UpdateLimit = _G['UpdateLimit'];
Exports.BooleanGrid = _G['BooleanGrid'];
Exports.BoundedQueue = _G['BoundedQueue'];
Exports.OnceEvery = _G['OnceEvery'];
Exports.CarController = _G['CarController'];
Exports.GearInfo = _G['GearInfo'];
Exports.ClientControls = _G['ClientControls'];
Exports.BulletVariables = _G['BulletVariables'];
Exports.Transform = _G['Transform'];
Exports.SpriteRenderState = _G['SpriteRenderState'];
Exports.SpriteRendererStates = _G['SpriteRendererStates'];
Exports.SpriteRenderStateUI = _G['SpriteRenderStateUI'];
Exports.GenericSpriteRenderState = _G['GenericSpriteRenderState'];
Exports.SteamUGCDetails = _G['SteamUGCDetails'];
Exports.ZNetFileChunk = _G['ZNetFileChunk'];
Exports.ZNetSessionState = _G['ZNetSessionState'];
Exports.SteamWorkshopItem = _G['SteamWorkshopItem'];
Exports.ZNetFileAnnounce = _G['ZNetFileAnnounce'];
Exports.ZNetStatistics = _G['ZNetStatistics'];
Exports.SteamFriend = _G['SteamFriend'];
Exports.vector2 = _G['vector2'];
Exports.PZMath = _G['PZMath'];
Exports.NonBlockingHashMap = _G['NonBlockingHashMap'];
Exports.PropertyContainer = _G['PropertyContainer'];
Exports.MostTested = _G['MostTested'];
Exports.AbstractStyle = _G['AbstractStyle'];
Exports.ShortList = _G['ShortList'];
Exports.Style = _G['Style'];
Exports.GeometryData = _G['GeometryData'];
Exports.FloatList = _G['FloatList'];
Exports.StashContainer = _G['StashContainer'];
Exports.Stash = _G['Stash'];
Exports.StashBuilding = _G['StashBuilding'];
Exports.StashAnnotation = _G['StashAnnotation'];
Exports.StashSystem = _G['StashSystem'];
Exports.Colors = _G['Colors'];
Exports.Language = _G['Language'];
Exports.Translator = _G['Translator'];
Exports.Color = _G['Color'];
Exports.ImmutableColor = _G['ImmutableColor'];
Exports.Clipboard = _G['Clipboard'];
Exports.PerformanceSettings = _G['PerformanceSettings'];
Exports.RingBuffer = _G['RingBuffer'];
Exports.SpriteRenderer = _G['SpriteRenderer'];
Exports.Core = _G['Core'];
Exports.GameVersion = _G['GameVersion'];
Exports.PZArrayList = _G['PZArrayList'];
Exports.PZCalendar = _G['PZCalendar'];
Exports.BufferedRandomAccessFile = _G['BufferedRandomAccessFile'];
Exports.Pool = _G['Pool'];
Exports.AddCoopPlayer = _G['AddCoopPlayer'];
Exports.IPooledObject = _G['IPooledObject'];
Exports.ChatSettings = _G['ChatSettings'];
Exports.ChatMessage = _G['ChatMessage'];
Exports.ChatBase = _G['ChatBase'];
Exports.ChatElement = _G['ChatElement'];
Exports.ChatElementOwner = _G['ChatElementOwner'];
Exports.NineGridTexture = _G['NineGridTexture'];
Exports.ChatTab = _G['ChatTab'];
Exports.ServerChatMessage = _G['ServerChatMessage'];
Exports.GameStateMachine = _G['GameStateMachine'];
Exports.ChooseGameInfo = _G['ChooseGameInfo'];
Exports.LoadingQueueState = _G['LoadingQueueState'];
Exports.BooleanDebugOption = _G['BooleanDebugOption'];
Exports.Mod = _G['Mod'];
Exports.AttachmentEditorState = _G['AttachmentEditorState'];
Exports.GameLoadingState = _G['GameLoadingState'];
Exports.MainScreenState = _G['MainScreenState'];
Exports.GameState = _G['GameState'];
Exports.PackFile = _G['PackFile'];
Exports.BooleanDebugOption = _G['BooleanDebugOption'];
Exports.AnimationViewerState = _G['AnimationViewerState'];
Exports.ConnectToServerState = _G['ConnectToServerState'];
Exports.DebugGlobalObjectState = _G['DebugGlobalObjectState'];
Exports.DebugChunkState = _G['DebugChunkState'];
Exports.Credit = _G['Credit'];
Exports.SpawnOrigin = _G['SpawnOrigin'];
Exports.Map = _G['Map'];
Exports.TileDef = _G['TileDef'];
Exports.ScreenElement = _G['ScreenElement'];
Exports.ErosionObj = _G['ErosionObj'];
Exports.ErosionObjSprites = _G['ErosionObjSprites'];
Exports.ErosionSeason = _G['ErosionSeason'];
Exports.Data = _G['Data'];
Exports.ErosionCategory = _G['ErosionCategory'];
Exports.ErosionConfig = _G['ErosionConfig'];
Exports.Debug = _G['Debug'];
Exports.Time = _G['Time'];
Exports.ErosionData = _G['ErosionData'];
Exports.ErosionMain = _G['ErosionMain'];
Exports.Seeds = _G['Seeds'];
Exports.Chunk = _G['Chunk'];
Exports.Season = _G['Season'];
Exports.Square = _G['Square'];
Exports.ErosionRegions = _G['ErosionRegions'];
Exports.Region = _G['Region'];
Exports.AssetPath = _G['AssetPath'];
Exports.AssetType = _G['AssetType'];
Exports.AssetManager = _G['AssetManager'];
Exports.AssetParams = _G['AssetParams'];
Exports.ObserverCallback = _G['ObserverCallback'];
Exports.Asset = _G['Asset'];
Exports.AssetManagerTable = _G['AssetManagerTable'];
Exports.AssetTable = _G['AssetTable'];
Exports.AssetManagers = _G['AssetManagers'];
Exports.AssetStateObserver = _G['AssetStateObserver'];
Exports.ConfigOption = _G['ConfigOption'];
Exports.BooleanConfigOption = _G['BooleanConfigOption'];
Exports.DoubleConfigOption = _G['DoubleConfigOption'];
Exports.IntegerConfigOption = _G['IntegerConfigOption'];
Exports.StringConfigOption = _G['StringConfigOption'];
Exports.EnumConfigOption = _G['EnumConfigOption'];
Exports.OSValidator = _G['OSValidator'];
Exports.GameSounds = _G['GameSounds'];
Exports.DummySoundManager = _G['DummySoundManager'];
Exports.DoubleSandboxOption = _G['DoubleSandboxOption'];
Exports.Map = _G['Map'];
Exports.TexturePack = _G['TexturePack'];
Exports.WorldSound = _G['WorldSound'];
Exports.ZombieLore = _G['ZombieLore'];
Exports.Ambient = _G['Ambient'];
Exports.BooleanSandboxOption = _G['BooleanSandboxOption'];
Exports.SoundManager = _G['SoundManager'];
Exports.GameWindow = _G['GameWindow'];
Exports.WorldSoundManager = _G['WorldSoundManager'];
Exports.BaseAmbientStreamManager = _G['BaseAmbientStreamManager'];
Exports.ChunkData = _G['ChunkData'];
Exports.GameTime = _G['GameTime'];
Exports.SandboxOption = _G['SandboxOption'];
Exports.SystemDisabler = _G['SystemDisabler'];
Exports.ZombieConfig = _G['ZombieConfig'];
Exports.AmbientStreamManager = _G['AmbientStreamManager'];
Exports.IntegerSandboxOption = _G['IntegerSandboxOption'];
Exports.Descriptor = _G['Descriptor'];
Exports.ResultBiggestSound = _G['ResultBiggestSound'];
Exports.AmbientSoundEffect = _G['AmbientSoundEffect'];
Exports.BaseSoundManager = _G['BaseSoundManager'];
Exports.WorldSoundEmitter = _G['WorldSoundEmitter'];
Exports.SharedDescriptors = _G['SharedDescriptors'];
Exports.VirtualZombieManager = _G['VirtualZombieManager'];
Exports.MapGroups = _G['MapGroups'];
Exports.EnumSandboxOption = _G['EnumSandboxOption'];
Exports.SandboxOptions = _G['SandboxOptions'];
Exports.FliesSound = _G['FliesSound'];
Exports.ZomboidBitFlag = _G['ZomboidBitFlag'];
Exports.AnimTimer = _G['AnimTimer'];
Exports.AmbientLoop = _G['AmbientLoop'];
Exports.StringSandboxOption = _G['StringSandboxOption'];

return Exports
