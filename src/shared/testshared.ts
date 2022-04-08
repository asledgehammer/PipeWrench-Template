import * as Zomboid from 'Zomboid';
import * as Events from 'Events';

Events.onObjectAdded.addListener((object) => {
    const x = object.getX();
    const y = object.getY();
    const z = object.getZ();
    console.log(`Object added at {x: ${x}, y: ${y}, z: ${z}}.`);
});
