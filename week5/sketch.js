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
  
      let cc2 = colorsRed[int(noise(frameCount/10,i)*colorsBlue.length)%colorsBlue.length]
      fill(cc2)
  
      drawingContext.shadowColor = color(cc2);
      drawingContext.shadowBlur =10;
      ellipse(xx*cos(ang*2),xx*sin(ang*2),rr/2)
        
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
}