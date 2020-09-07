var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(200,200,60,40);
  car.velocityX = speed;
    
  fill(80,80,80);
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(0);  

  if(wall.x - car.x <= (car.width/2 + wall.width)/2) {
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;

    if(deformation < 100) {
      car.shapeColor = "green";
    }
    if(deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    }
    if(deformation > 180) {
      car.shapeColor = "red";
    }
  }

  drawSprites();
}