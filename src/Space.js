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
    this.ctx.fillStyle = 'white';
    this.ctx.globalAlpha = 0.7;
    this.particles.forEach((p) => {
      this.started ? p.update() : this.started = true;
      this.ctx.beginPath();
      this.ctx.arc(p.position.x, p.position.y, p.radius, 0, 2 * Math.PI);
      this.ctx.fill();
    });
    requestAnimationFrame(() => {this.getNextFrame();});
  }

}
