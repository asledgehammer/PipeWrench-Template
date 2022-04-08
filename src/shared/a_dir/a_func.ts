/** @noResolution */
import * as Zomboid from 'Zomboid';

export function greet() {
    const player = Zomboid.getPlayer();
    console.log(`Hello, ${player.getFullName()}!`);
}