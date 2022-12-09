/**
 * @noSelfInFile
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code.
 */

// PipeWrench API.
import { IsoObject, IsoPlayer, ISUIElement } from '@asledgehammer/pipewrench';

// PipeWrench Events API.
import * as Events from '@asledgehammer/pipewrench-events';

/**
 * @param object The object to stringify.
 * @returns A string of the object's name, x, y, and z coordinates.
 */
export function isoObjectToString(object: IsoObject): string {
  return `{name: ${object.getObjectName()}, x: ${object.getX()}, y: ${object.getY()}, z: ${object.getZ()}}`;
}

/**
 * Adds a red square element to the UI using the example ISUI typings.
 */
export function addRedSquare() {
  const element = new ISUIElement(512, 256, 256, 256);
  element.initialise();
  element.instantiate();
  element.addToUIManager();
  element.setVisible(true);
  element.render = () => {
    element.drawRect(512, 256, 256, 256, 1, 1.0, 0.0, 0.0);
  };
}

/**
 * @param player The player to greet.
 */
export function greetPlayer(player: IsoPlayer) {
  print(`Hello, ${player.getFullName()}!`);
}

/**
 * Registers the 'OnObjectAdded' Lua event and prints objects that are added to the world.
 */
export function alertObjectsAdded() {
  Events.onObjectAdded.addListener((object: IsoObject) => {
    if (object != null) {
      print(`IsoObject added: ${isoObjectToString(object)}`);
    }
  });
}
