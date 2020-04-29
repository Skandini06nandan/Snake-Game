var snake;
var food;
var rezoning =30;
var wid;
var h;
var grass;

function setup() {
  createCanvas(800,400);
  wid =grass(width/rezoning);
  h =grass(height/rezoning);

  foodPosition();
  frameRate(8);

  snake =createSprite(200,100,10,10);
  snake.shapeColor("red");
}

function foodPosition(){
  var x = grass(random(wid));
  var y = grass(random(h));
  food = createVector(x,y);
}

function draw() {
  background(255,255,255);
  scale(rez);
  
  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
  }

  if(snake.isTouching(food)){
    foodPosition();
  }

  noStroke();
  fill(255,0,0);
  rect(food.x,food.y,1,1);
   drawSprites();
}
function changePosition(x,y){
  snake.x = snake.x + x;
  snake.y = snake.y + y;
}
