import { randomFloat } from './common.js';

export default class Particle {

  space    = null;
  radius   = null;
  position = {x: null, y: null};

  constructor(space) {
    this.space = space;
    this.radius = randomFloat(1, 4);
    this.position.x = randomFloat(0, this.space.canvas.width);
    this.position.y = randomFloat(0, this.space.canvas.height);
  }

}