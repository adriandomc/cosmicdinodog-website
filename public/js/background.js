let imgDino;
let particles = [];
let n = 1000;

function preload() {
  imgDino = loadImage("src/img/cosmicdino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  for (i = 0; i < n; i++) {
    particles[i] = new Particle(0, 0);
  }
}

function draw() {
  background(30, 28, 34);

  particles.forEach(p => {
    p.update();
    p.display();
  }); 

  // Dinoperro
  push();
  translate(0, 0, 25);
  imageMode(CENTER);
  image(imgDino, 0, 0, imgDino.width * 0.8, imgDino.height * 0.8);
  pop();
}