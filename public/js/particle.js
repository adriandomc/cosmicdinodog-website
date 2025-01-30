class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();

    this.angle = 0;
    this.size = random(2, 4);
  }

  update() {
    this.acc.mult(random(1));
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotateZ(this.angle);
    fill('white');
    noStroke();
    sphere(this.size);
    pop();
  }
}