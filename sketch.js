var fixedRect, movingRect;
var game1,game2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"
  game1= createSprite(100,100,50,80)
  game1.shapeColor = "green"
  game2= createSprite(200,100,80,50)
  game2.shapeColor = "green"
  //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,game1)) {
    movingRect.shapeColor = "yellow";
    game1.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    game1.shapeColor = "green";
  }
  drawSprites();
}
//boolean datatype-true or false
