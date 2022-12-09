/**
 * @noSelfInFile
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code.
 */

// PipeWrench API.
import { getPlayer } from '@asledgehammer/pipewrench';
import * as Events from '@asledgehammer/pipewrench-events';
// Example reference API.
import { addRedSquare, alertObjectsAdded, greetPlayer } from './api/ExampleAPI';

// Add all initialization code here.
Events.onGameStart.addListener(() => {
  addRedSquare();
  greetPlayer(getPlayer());
  alertObjectsAdded();
});
