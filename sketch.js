var fixedRect, movingRect,obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj2 = createSprite(600,200, 50, 80);
  obj2.shapeColor = "green";
  obj1 = createSprite(600, 800, 50, 80);
  obj1.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj1.velocityY = -5;
  obj2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 
  bounceOff(movingRect,fixedRect);
  bounceOff(obj1,obj2);

  if(isTouching(movingRect,fixedRect)){
   movingRect.shapeColor = "red"
   fixedRect.shapeColor = "red"
  }
  else if(!isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  }

  if(isTouching(obj1,obj2)){
    obj1.shapeColor = "red"
    obj2.shapeColor = "red"
   }
   else if(!isTouching(obj1,obj2)){
    obj1.shapeColor = "green"
    obj2.shapeColor = "green"
   }
  drawSprites();
}

