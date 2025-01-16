let ellipses = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(ADD); // Use additive blending mode for liquid light show effect
  for (let i = 0; i < 100; i++) {
    ellipses.push({
      x: random(width),
      y: random(height),
      size: random(10, 50),
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2),
      color: [random(255), random(255), random(255), 100] // Add alpha for transparency
    });
  }
}

function draw() {
  background(0, 20); // Use a low alpha value to create a trailing effect
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    fill(e.color);
    noStroke();
    ellipse(e.x, e.y, e.size);
    e.x += e.xSpeed;
    e.y += e.ySpeed;

    // Bounce off edges
    if (e.x < 0 || e.x > width) e.xSpeed *= -1;
    if (e.y < 0 || e.y > height) e.ySpeed *= -1;

    // Change color gradually
    e.color[0] = (e.color[0] + random(-1, 1)) % 256;
    e.color[1] = (e.color[1] + random(-1, 1)) % 256;
    e.color[2] = (e.color[2] + random(-1, 1)) % 256;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}