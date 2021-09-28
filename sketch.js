var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
  box.shapeColor = "black";
  

}

function draw() 
{
  background("yellow");
  if (keyDown(RIGHT_ARROW)){
    background("red");
    
  }
  drawSprites();
}


