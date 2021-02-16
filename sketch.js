var hr , min ,sec;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  min = minute();
  sec = second();
}

function draw() {
  background(255,255,255); 
  angleMode(DEGREES);
  scAngle = map(sec,0,60,0,360); 
  hrAngle = map(hr,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  // creating sec hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // creating min hand
  push();
  rotate(minAngle);
  stroke("blue");;
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // creating hr hand 
  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}