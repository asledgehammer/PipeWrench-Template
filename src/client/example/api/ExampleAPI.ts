/**
 * MIT License
 *
 * Copyright (c) 2022 asledgehammer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
