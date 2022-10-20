function setup() {
  createCanvas(1728, 1368);
}

function draw() {
  background(230)
  translate(width/2,  height/2)

  for(var i=0; i<width; i+=100){
    ellipse(0, 0, width-i);
  }

  for(var i=0; i<width; i+=100){
    beginShape()
    let rr = width-i;
    // ellipse(0, 0, width-i);
    for(var o=0; o<360; o+=3){
      vertex(cos(o)*rr, sin(o)*rr)
    }
    endShape()
  }

  for(var i=0; i<width; i+=100){
    beginShape()
    let rr = width-i;
    // ellipse(0, 0, width-i);
    for(var o=0; o<360; o+=3){
      let ang = o/1.2+frameCount;
      vertex(cos(ang)*rr, sin(ang)*rr)
    }
    endShape()
  }
}