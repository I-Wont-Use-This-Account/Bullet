var wall,bullet;
var speed,weight;
var deformation;
var thickness;

function setup() {
  createCanvas(800,200);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  wall = createSprite(700,100,thickness,200);
  bullet = createSprite(100, 100, 60, 20);

  bullet.shapeColor = ("black");

  bullet.velocityX = speed - weight*4;
}

function draw() {
  background(255,255,255);

  deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  text("Bullet Speed: " + (speed-weight*4) + "                        Bullet Weight: " + weight, 25, 25);
  text("Wall Thickness: " + thickness, 550,25);

  if(isColliding()){

    bullet.velocityX = -0;

    text("Wall Damage: " + deformation, width/3, height/2);

    if(deformation>=10){
      bullet.shapeColor = ("red");

    }
    else if (deformation < 10){
      bullet.shapeColor = ("green");
    }
  }

  drawSprites();
}

function isColliding(){
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2 && 
    wall.x - bullet.x < wall.width/2 + bullet.width/2){
    return true;
  }
  else{
    return false;
  }
}