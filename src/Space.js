import Particle from './Particle.js';

export default class Space {

  canvas    = null;
  ctx       = null;
  config    = null;
  particles = [];
  started   = false;

  constructor(canvasId, config) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.config = config;
    this.setCanvasStyle();
    this.resizeCanvas();
  }

  setCanvasStyle() {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    window.addEventListener('resize', () => {this.resizeCanvas();});
  }

  resizeCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.setParticles();
  }

  setParticles() {
    this.particles = [];
    for (let i = 0; i < this.config.numParticles; i++) {
      this.particles.push(new Particle(this));
    }
    this.start();
  }

  start() {
    requestAnimationFrame(() => {this.getNextFrame();});
  }

  getNextFrame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      this.started ? p.update() : this.started = true;
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dist = Math.sqrt(
          (p.pos.x - p2.pos.x) ** 2 +
          (p.pos.y - p2.pos.y) ** 2
        );
        if (dist < 125) {
          let trans = 1 - (dist / 125);
          this.ctx.strokeStyle = `hsla(0, 0%, 80%, ${trans})`;
          this.ctx.beginPath();
          this.ctx.moveTo(p.pos.x, p.pos.y);
          this.ctx.lineTo(p2.pos.x, p2.pos.y);
          this.ctx.stroke();
        }
      }
      this.ctx.fillStyle = 'hsla(0, 0%, 100%, 0.7)';
      this.ctx.beginPath();
      this.ctx.arc(p.pos.x, p.pos.y, p.radius, 0, 2 * Math.PI);
      this.ctx.fill();
    }
    requestAnimationFrame(() => {this.getNextFrame();});
  }

}
