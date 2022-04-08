import * as Zomboid from 'Zomboid';
import * as Events from 'Events';

Events.onServerStarted.addListener(() => {
    console.log("###### Server started!");
});
