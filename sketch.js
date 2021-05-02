var fr,mr;

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 40, 60);
  mr=createSprite(400, 200, 60, 40);
  fr.shapeColor="red";
  mr.shapeColor="red";
  fr.debug=true;
  mr.debug=true;
}

function draw() {
  background(255,255,255);  
mr.x=World.mouseX;
mr.y=World.mouseY;

if(touches(mr,fr))
{
  fr.shapeColor="blue";
  mr.shapeColor="blue";
}else{
  fr.shapeColor="red";
  mr.shapeColor="red";
}


  drawSprites();
}


