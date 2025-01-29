let stars = [];
let x, y;
let dx, dy;

let imgDino;

function preload() {
  imgDino = loadImage("src/img/cosmicdino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width / 2;
  y = height / 2;
  dx = -1;
  dy = 0.5 * dx;
}

function draw() {
  background(30, 28, 34);
  
  imageMode(CENTER);
  
  // Dinoperro
  image(imgDino, windowWidth / 2, windowHeight / 2, imgDino.width * 0.8, imgDino.height * 0.8);

  circle(x, y, 5);
  x += dx;
  y += dy;
}