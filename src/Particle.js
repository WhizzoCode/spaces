import { randomFloat, randomSign } from './common.js';

export default class Particle {

  space  = null;
  radius = null;
  pos    = {x: null, y: null};
  speed  = {x: null, y: null};

  constructor(space) {
    this.space = space;
    this.radius = randomFloat(1, 4);
    this.pos.x = randomFloat(0, this.space.canvas.width);
    this.pos.y = randomFloat(0, this.space.canvas.height);
    this.speed.x = randomSign() * randomFloat(0.02, 0.2);
    this.speed.y = randomSign() * randomFloat(0.02, 0.2);
  }

  update() {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if (this.pos.x < 0) {
      this.pos.x *= -1;
      this.speed.x *= -1;
    } else if (this.pos.x > this.space.canvas.width) {
      this.pos.x -= this.pos.x - this.space.canvas.width;
      this.speed.x *= -1;
    }

    if (this.pos.y < 0) {
      this.pos.y *= -1;
      this.speed.y *= -1;
    } else if (this.pos.y > this.space.canvas.height) {
      this.pos.y -= this.pos.y - this.space.canvas.height;
      this.speed.y *= -1;
    }
  }

}