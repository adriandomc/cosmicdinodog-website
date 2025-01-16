function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Remove this line if you want continuous animation
}

function draw() {
  background(0);
  for (let i = 0; i < 100; i++) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(10, 50));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}