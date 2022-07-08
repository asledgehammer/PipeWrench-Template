/** 
 * @noSelfInFile 
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code. 
 */

// PipeWrench Events API.
import * as Events from 'ZomboidEvents';

// ProjectZomboid API.
import * as Zomboid from 'Zomboid';

// (Our example API, imported from another TypeScript file)
import { addRedSquare, alertObjectsAdded, greetPlayer } from './ExampleAPI';

// Add all initialization code here.
Events.onGameStart.addListener(() => {
    addRedSquare();
    greetPlayer(Zomboid.getPlayer());
    alertObjectsAdded();
});
