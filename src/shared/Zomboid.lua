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

function Exports.AddNoiseToken(arg0, arg1) end
function Exports.AddWorldSound(arg0, arg1, arg2) end
function Exports.InvMngGetItem(arg0, arg1, arg2) end
function Exports.InvMngRemoveItem(arg0, arg1) end
function Exports.ProceedFactionMessage(arg0) end
function Exports.ProcessAdminChatMessage(arg0) end
function Exports.ProcessSafehouseMessage(arg0) end
function Exports.Render3DItem(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.SendCommandToServer(arg0) end
function Exports.SyncXp(arg0) end
function Exports.ZombRand(arg0, arg1) return ZombRand(arg0, arg1) end
function Exports.ZombRandBetween(arg0, arg1) return ZombRandBetween(arg0, arg1) end
function Exports.ZombRandFloat(arg0, arg1) return ZombRandFloat(arg0, arg1) end
function Exports.acceptFactionInvite(arg0, arg1) end
function Exports.acceptSafehouseInvite(arg0, arg1) end
function Exports.acceptTrading(arg0, arg1, arg2) end
function Exports.activateJoypadOnSteamDeck() end
function Exports.activateSteamOverlayToWebPage(arg0) end
function Exports.activateSteamOverlayToWorkshop() end
function Exports.activateSteamOverlayToWorkshopItem(arg0) end
function Exports.activateSteamOverlayToWorkshopUser() end
function Exports.addAllBurntVehicles() end
function Exports.addAllSmashedVehicles() end
function Exports.addAllVehicles() end
function Exports.addBloodSplat(arg0, arg1) end
function Exports.addCarCrash() end
function Exports.addPhysicsObject() return addPhysicsObject() end
function Exports.addSound(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.addTicket(arg0, arg1, arg2) end
function Exports.addUserlog(arg0, arg1, arg2) end
function Exports.addVehicle(arg0) return addVehicle(arg0) end
function Exports.addVehicleDebug(arg0, arg1, arg2, arg3) return addVehicleDebug(arg0, arg1, arg2, arg3) end
function Exports.addVirtualZombie(arg0, arg1) end
function Exports.addWarningPoint(arg0, arg1, arg2) end
function Exports.addZombieSitting(arg0, arg1, arg2) end
function Exports.addZombiesEating(arg0, arg1, arg2, arg3, arg4) end
function Exports.addZombiesInBuilding(arg0, arg1, arg2, arg3, arg4) return addZombiesInBuilding(arg0, arg1, arg2, arg3, arg4) end
function Exports.addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) return addZombiesInOutfit(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) end
function Exports.addZombiesInOutfitArea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) return addZombiesInOutfitArea(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) end
function Exports.assaultPlayer() end
function Exports.attachTrailerToPlayerVehicle(arg0) end
function Exports.backToSinglePlayer() end
function Exports.breakpoint() end
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
function Exports.configureLighting(arg0) end
function Exports.connectToServerStateCallback(arg0) end
function Exports.copyTable(arg0, arg1) return copyTable(arg0, arg1) end
function Exports.createHordeFromTo(arg0, arg1, arg2, arg3, arg4) end
function Exports.createHordeInAreaTo(arg0, arg1, arg2, arg3, arg4, arg5, arg6) end
function Exports.createItemTransaction(arg0, arg1, arg2) end
function Exports.createNewScriptItem(arg0, arg1, arg2, arg3, arg4) return createNewScriptItem(arg0, arg1, arg2, arg3, arg4) end
function Exports.createRandomDeadBody(arg0, arg1) return createRandomDeadBody(arg0, arg1) end
function Exports.createRegionFile() return createRegionFile() end
function Exports.createStory(arg0) end
function Exports.createTile(arg0, arg1) end
function Exports.createWorld(arg0) end
function Exports.createZombie(arg0, arg1, arg2, arg3, arg4, arg5) return createZombie(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.debugFullyStreamedIn(arg0, arg1) end
function Exports.debugLuaTable(arg0) end
function Exports.deleteAllGameModeSaves(arg0) end
function Exports.deletePlayerSave(arg0) end
function Exports.deleteSandboxPreset(arg0) end
function Exports.deleteSave(arg0) end
function Exports.disconnect() end
function Exports.doChallenge(arg0) end
function Exports.doKeyPress(arg0) end
function Exports.doTutorial(arg0) end
function Exports.drawOverheadMap(arg0, arg1, arg2, arg3) end
function Exports.endFileInput() end
function Exports.endFileOutput() end
function Exports.endHelicopter() end
function Exports.endTextFileInput() end
function Exports.equals(arg0) return equals(arg0) end
function Exports.executeQuery(arg0, arg1) end
function Exports.fileExists(arg0) return fileExists(arg0) end
function Exports.focusOnTab(arg0) end
function Exports.forceChangeState(arg0) end
function Exports.forceDisconnect() end
function Exports.forceSnowCheck() end
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
function Exports.getDBSchema() end
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
function Exports.getServerModData() end
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
function Exports.getTableResult(arg0, arg1) end
function Exports.getText(arg0) return getText(arg0) end
function Exports.getTextManager() return getTextManager() end
function Exports.getTextMediaEN(arg0) return getTextMediaEN(arg0) end
function Exports.getTextOrNull(arg0, arg1, arg2, arg3, arg4) return getTextOrNull(arg0, arg1, arg2, arg3, arg4) end
function Exports.getTexture(arg0) return getTexture(arg0) end
function Exports.getTextureFromSaveDir(arg0, arg1) return getTextureFromSaveDir(arg0, arg1) end
function Exports.getTickets(arg0) end
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
function Exports.initUISystem() end
function Exports.instanceItem(arg0) return instanceItem(arg0) end
function Exports.instof(arg0, arg1) return instof(arg0, arg1) end
function Exports.inviteFriend(arg0) end
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
function Exports.luaDebug() end
function Exports.manipulateSavefile(arg0, arg1) end
function Exports.moduleDotType(arg0, arg1) return moduleDotType(arg0, arg1) end
function Exports.notify() end
function Exports.notifyAll() end
function Exports.openURl(arg0) end
function Exports.pauseSoundAndMusic() end
function Exports.ping(arg0, arg1, arg2, arg3) end
function Exports.playServerSound(arg0, arg1) end
function Exports.proceedPM(arg0) return proceedPM(arg0) end
function Exports.processGeneralMessage(arg0) end
function Exports.processSayMessage(arg0) end
function Exports.processShoutMessage(arg0) end
function Exports.querySteamWorkshopItemDetails(arg0, arg1, arg2) end
function Exports.queueCharEvent(arg0) end
function Exports.queueKeyEvent(arg0) end
function Exports.rainConfig(arg0, arg1) end
function Exports.reactivateJoypadAfterResetLua() return reactivateJoypadAfterResetLua() end
function Exports.refreshAnimSets(arg0) end
function Exports.reloadActionGroups() end
function Exports.reloadControllerConfigFiles() end
function Exports.reloadEngineRPM() end
function Exports.reloadLuaFile(arg0) end
function Exports.reloadModelsMatching(arg0) end
function Exports.reloadServerLuaFile(arg0) end
function Exports.reloadSoundFiles() end
function Exports.reloadVehicleTextures(arg0) end
function Exports.reloadVehicles() end
function Exports.removeItemTransaction(arg0, arg1, arg2) end
function Exports.removeTicket(arg0) end
function Exports.removeUserlog(arg0, arg1, arg2) end
function Exports.renderIsoCircle(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) end
function Exports.replaceWith(arg0, arg1, arg2) return replaceWith(arg0, arg1, arg2) end
function Exports.requestPacketCounts() end
function Exports.requestTrading(arg0, arg1) end
function Exports.requestUserlog(arg0) end
function Exports.require(arg0) return require(arg0) end
function Exports.resetRegionFile() end
function Exports.resumeSoundAndMusic() end
function Exports.revertToKeyboardAndMouse() end
function Exports.sanitizeWorldName(arg0) return sanitizeWorldName(arg0) end
function Exports.save(arg0) end
function Exports.saveControllerSettings(arg0) end
function Exports.saveGame() end
function Exports.saveModsFile() end
function Exports.scoreboardUpdate() end
function Exports.screenToIsoX(arg0, arg1, arg2, arg3) return screenToIsoX(arg0, arg1, arg2, arg3) end
function Exports.screenToIsoY(arg0, arg1, arg2, arg3) return screenToIsoY(arg0, arg1, arg2, arg3) end
function Exports.screenZoomIn() end
function Exports.screenZoomOut() end
function Exports.sendAddXp(arg0, arg1, arg2) end
function Exports.sendBandage(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.sendCataplasm(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendCleanBurn(arg0, arg1, arg2, arg3) end
function Exports.sendClientCommand(arg0, arg1, arg2) end
function Exports.sendClothing(arg0) end
function Exports.sendDisinfect(arg0, arg1, arg2, arg3) end
function Exports.sendFactionInvite(arg0, arg1, arg2) end
function Exports.sendItemListNet(arg0, arg1, arg2, arg3, arg4) return sendItemListNet(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendItemsInContainer(arg0, arg1) end
function Exports.sendPersonalColor(arg0) end
function Exports.sendPing() end
function Exports.sendPlayerExtraInfo(arg0) end
function Exports.sendPlayerStatsChange(arg0) end
function Exports.sendRemoveBullet(arg0, arg1, arg2) end
function Exports.sendRemoveGlass(arg0, arg1, arg2, arg3) end
function Exports.sendRequestInventory(arg0) end
function Exports.sendSafehouseInvite(arg0, arg1, arg2) end
function Exports.sendServerCommand(arg0, arg1, arg2) end
function Exports.sendSplint(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendStitch(arg0, arg1, arg2, arg3, arg4) end
function Exports.sendVisual(arg0) end
function Exports.serverConnect(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.serverConnectCoop(arg0) end
function Exports.serverFileExists(arg0) return serverFileExists(arg0) end
function Exports.setActivePlayer(arg0) end
function Exports.setAdmin() end
function Exports.setAggroTarget(arg0, arg1, arg2) end
function Exports.setBehaviorStep(arg0) end
function Exports.setControllerDeadZone(arg0, arg1, arg2) end
function Exports.setDebugToggleControllerPluggedIn(arg0) end
function Exports.setGameSpeed(arg0) end
function Exports.setModelMetaData(arg0, arg1, arg2, arg3, arg4) end
function Exports.setMouseXY(arg0, arg1) end
function Exports.setPlayerJoypad(arg0, arg1, arg2, arg3) end
function Exports.setPlayerMouse(arg0) end
function Exports.setPlayerMovementActive(arg0, arg1) end
function Exports.setProgressBarValue(arg0, arg1) end
function Exports.setPuddles(arg0) end
function Exports.setSavefilePlayer1(arg0, arg1, arg2) end
function Exports.setServerStatisticEnable(arg0) end
function Exports.setShowPausedMessage(arg0) end
function Exports.showAnimationViewer() end
function Exports.showAttachmentEditor() end
function Exports.showChunkDebugger() end
function Exports.showFolderInDesktop(arg0) end
function Exports.showGlobalObjectDebugger() end
function Exports.showSteamFloatingGamepadTextInput(arg0, arg1, arg2, arg3, arg4) return showSteamFloatingGamepadTextInput(arg0, arg1, arg2, arg3, arg4) end
function Exports.showSteamGamepadTextInput(arg0, arg1, arg2, arg3, arg4) return showSteamGamepadTextInput(arg0, arg1, arg2, arg3, arg4) end
function Exports.showVehicleEditor(arg0) end
function Exports.showWorldMapEditor(arg0) end
function Exports.showWrongChatTabMessage(arg0, arg1, arg2) end
function Exports.sledgeDestroy(arg0) end
function Exports.spawnHorde(arg0, arg1, arg2, arg3, arg4, arg5) end
function Exports.spawnpointsExistsForMod(arg0, arg1) return spawnpointsExistsForMod(arg0, arg1) end
function Exports.steamGetInternetServerDetails(arg0) return steamGetInternetServerDetails(arg0) end
function Exports.steamReleaseInternetServersRequest() end
function Exports.steamRequestInternetServersCount() return steamRequestInternetServersCount() end
function Exports.steamRequestInternetServersList() end
function Exports.steamRequestServerDetails(arg0, arg1) return steamRequestServerDetails(arg0, arg1) end
function Exports.steamRequestServerRules(arg0, arg1) return steamRequestServerRules(arg0, arg1) end
function Exports.stopPing() end
function Exports.stopSound(arg0) end
function Exports.tabToX(arg0, arg1) return tabToX(arg0, arg1) end
function Exports.takeScreenshot(arg0) end
function Exports.testHelicopter() end
function Exports.testSound() end
function Exports.timSort(arg0, arg1) end
function Exports.toInt(arg0) return toInt(arg0) end
function Exports.toString() return toString() end
function Exports.toggleBreakOnChange(arg0, arg1) end
function Exports.toggleBreakOnRead(arg0, arg1) end
function Exports.toggleBreakpoint(arg0, arg1) end
function Exports.toggleModActive(arg0, arg1) end
function Exports.toggleSafetyServer(arg0) end
function Exports.toggleVehicleRenderToTexture() end
function Exports.tradingUISendAddItem(arg0, arg1, arg2) end
function Exports.tradingUISendRemoveItem(arg0, arg1, arg2) end
function Exports.tradingUISendUpdateState(arg0, arg1, arg2) end
function Exports.transformIntoKahluaTable(arg0) return transformIntoKahluaTable(arg0) end
function Exports.translatePointXInOverheadMapToWindow(arg0, arg1, arg2, arg3) return translatePointXInOverheadMapToWindow(arg0, arg1, arg2, arg3) end
function Exports.translatePointXInOverheadMapToWorld(arg0, arg1, arg2, arg3) return translatePointXInOverheadMapToWorld(arg0, arg1, arg2, arg3) end
function Exports.translatePointYInOverheadMapToWindow(arg0, arg1, arg2, arg3) return translatePointYInOverheadMapToWindow(arg0, arg1, arg2, arg3) end
function Exports.translatePointYInOverheadMapToWorld(arg0, arg1, arg2, arg3) return translatePointYInOverheadMapToWorld(arg0, arg1, arg2, arg3) end
function Exports.triggerEvent(arg0, arg1, arg2) end
function Exports.updateChatSettings(arg0, arg1, arg2) end
function Exports.updateFire() end
function Exports.useStaticErosionRand(arg0) end
function Exports.useTextureFiltering(arg0) end
function Exports.wait(arg0) end
function Exports.wasKeyDown(arg0) return wasKeyDown(arg0) end
function Exports.wasMouseActiveMoreRecentlyThanJoypad() return wasMouseActiveMoreRecentlyThanJoypad() end
function Exports.writeLog(arg0, arg1) end
function Exports.zpopClearZombies(arg0, arg1) end
function Exports.zpopNewRenderer() return zpopNewRenderer() end
function Exports.zpopSpawnNow(arg0, arg1) end
function Exports.zpopSpawnTimeToZero(arg0, arg1) end

-------------------------------------------------------------------

return Exports
