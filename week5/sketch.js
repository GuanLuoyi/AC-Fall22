var colorsBlue = "04080f-507dbc-a1c6ea-bbd1ea-dae3e5".split("-").map(a=>"#"+a)
var colorsRed = "fe7f2d-fcca46-a1c181-619b8a-333".split("-").map(a=>"#"+a)

function planet(x,y,r=30){
  push()
    translate(x,y)
    let lastX, lastR, lastAng
    
    for(var i=0;i<200;i++){
      let cc = color(colorsBlue[int(noise(frameCount/10,i)*colorsBlue.length)%colorsBlue.length])
      cc.setAlpha(150)
      fill(cc)
      
      let shadowCC = color(cc) 
      shadowCC.setAlpha(255) 
      drawingContext.shadowColor = shadowCC; 
      drawingContext.shadowBlur =20;
        
      let xx = noise(i*2,frameCount/100+mouseX/500)*r*noise(i)*2 
      let ang = noise(i,frameCount/800+mouseX/1000,500)*10*PI
      let rr = noise(i,500,frameCount/50+mouseY/500)*30*(15/(sqrt(xx)+1))
      ellipse(xx*cos(ang),xx*sin(ang),rr)
        
      if (lastX && random()<0.1){
        push()
          stroke(255,50)
    line(xx*cos(ang),xx*sin(ang),lastX*cos(lastAng),lastX*sin(lastAng))
  pop()
      }
        
      if (random()<0.5){
        push()
          stroke(255,50)
          noFill()
          arc(0,0,xx,xx,ang,ang+PI)
        pop()
      }
        
      lastX=xx
      lastR=rr
      lastAng=ang
    }
  pop()
}
function redParticles(x,y,r=30){
  push()
    translate(x,y)
    for(var i=0;i<200;i++){
      let xx = noise(i*2,frameCount/100+mouseX/500)*r*noise(i)*2 
      let ang = noise(i,frameCount/800+mouseX/1000,500)*10*PI
      let rr = noise(i,500,frameCount/50+mouseY/500)*30*(15/(sqrt(xx)+1))
      ellipse(xx*cos(ang),xx*sin(ang),rr)

      let cc2 = colorsRed[int(noise(frameCount/10,i)*colorsBlue.length)%colorsBlue.length]
      fill(cc2)
      
      drawingContext.shadowColor = color(cc2)
      drawingContext.shadowBlur =10
      ellipse(xx*cos(ang*2),xx*sin(ang*2),rr/2)  
    }
  pop()
}

// function star(x, y, radius1, radius2, npoints) {
//   let angle = TWO_PI / npoints;
//   let halfAngle = angle / 2.0;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius2;
//     let sy = y + sin(a) * radius2;
//     vertex(sx, sy);
//     sx = x + cos(a + halfAngle) * radius1;
//     sy = y + sin(a + halfAngle) * radius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
//   x = cos(frameCount * 100)
// }

function setup() {
  createCanvas(800, 800)
  background(100)
}

function draw() {
  blendMode(BLEND)
  fill('#0f1954')
  rect(0,0,width,height)
    
  blendMode(SCREEN)
  planet(width/2, height/2, 400) 

  if(frameCount>50){
    redParticles(width/2, height/2, 500)
  }

}