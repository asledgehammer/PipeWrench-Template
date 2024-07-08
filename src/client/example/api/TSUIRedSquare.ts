import { ISUIElement } from '@asledgehammer/pipewrench';

export class TSUIRedSquare extends ISUIElement {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
    this.initialise();
    this.instantiate();
    this.addToUIManager();
    this.setVisible(true);
  }

  render = (): void => {
    this.drawRedSquare();
  };

  /**
   * Adds a red square element to the UI using the example ISUI typings.
   */
  drawRedSquare() {
    this.drawRect(this.x, this.y, this.width, this.height, 1, 1.0, 0.0, 0.0);
  }
}
