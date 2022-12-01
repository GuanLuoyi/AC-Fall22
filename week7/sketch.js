let dino;
let dImg;
let cImg;
let bImg;

function preload(){
  dImg = loadImage('./img/dino.png');
  cImg = loadImage('./img/cup.png');
  bImg = loadImage('./img/background.jpg');
}
function setup() {
  createCanvas(400, 400);
  dino = new Dino();
}
function keyPressed(){
  if (key == ' '){
    dino.jump();
  }
}
function draw() {
  background(bImg);
  dino.show();
  dino.move();
}