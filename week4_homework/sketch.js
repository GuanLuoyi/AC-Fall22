function setup() {
  createCanvas(800,800);
  background(0);
}

function addline(xx,rid,clr){
  beginShape()
  strokeWeight(noise(rid,5000)*180)
  let hh = noise(xx,rid,1000)*500 + random(2)
  stroke(clr)
  for(var i = 0; i<hh; i++){
    let deltaFactor = map(i, 0, 50, 0,1, true)
    let deltaX = deltaFactor* (noise(i/400, frameCount/100,rid)-0.5) * 200
    curveVertex(xx + deltaX,-i*2)
  }
  endShape()
}
function draw() {
  translate(0,height)
  stroke(255)
  blendMode(BLEND)
  background(0)
  noFill()

  let clrs = ['red', 'green', 'blue']
  blendMode(SCREEN)
  for(var i = 0; i<10; i++){
    clrs.forEach((clr,clrId)=>{
      addline(i*100,i+clrId/2, clr)
    })
    
  }
}
