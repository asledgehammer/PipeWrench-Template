import * as Zomboid from 'Zomboid';
import * as Events from 'Events';
import { greet } from '../shared/a_dir/a_func';

Events.onGameStart.addListener(() => {
    greet();
});
