let gridStep = 50
let cRadius = gridStep * 0.375

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, width, height, 100);
}

function draw() {
    background(200, 200, 127);
  
  //showGrid();
  noStroke()
  for(let x = 0; x < width/gridStep; x++){
    for(let y = 0; y < height/gridStep; y++){
      posX = (x + 0.5) * gridStep;
      posY = (y + 0.5) * gridStep;
      
      posX += random(-2,2)
      posY += random(-2,2)
      
      fill(posX, posY, 80)
      circle(posX, posY, cRadius * 2)
    }
  }
}

function showGrid(){
  stroke(255, 0, 0)
  for(let x = 0; x < width; x += gridStep){
      line(x,0,x,height)
  }
  stroke(0, 0, 255)
  for(let y = 0; y < height; y += gridStep){
      line(0,y,width,y)
  }
}