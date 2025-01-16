let ellipses = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    ellipses.push({
      x: random(width),
      y: random(height),
      size: random(10, 50),
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2),
      color: [random(255), random(255), random(255)]
    });
  }
}

function draw() {
  background(0);
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    fill(e.color);
    ellipse(e.x, e.y, e.size);
    e.x += e.xSpeed;
    e.y += e.ySpeed;

    // Bounce off edges
    if (e.x < 0 || e.x > width) e.xSpeed *= -1;
    if (e.y < 0 || e.y > height) e.ySpeed *= -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}