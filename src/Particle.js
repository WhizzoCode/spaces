import { randomFloat, randomSign } from './common.js';

export default class Particle {

  space    = null;
  radius   = null;
  position = {x: null, y: null};
  speed    = {x: null, y: null};

  constructor(space) {
    this.space = space;
    this.radius = randomFloat(1, 4);
    this.position.x = randomFloat(0, this.space.canvas.width);
    this.position.y = randomFloat(0, this.space.canvas.height);
    this.speed.x = randomSign() * randomFloat(0.02, 0.2);
    this.speed.y = randomSign() * randomFloat(0.02, 0.2);
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

}