function setup() {
  createCanvas(1200,800);
 car= createSprite(50, 200, 20, 30);
 speed=random(55,120)
 weight=random(30,150)
 wall=createSprite(800,200,30,80)
 car.velocityX=speed
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<wall.width/2+car.width/2)
  {
    car.velocityX=0
    deformation=0.5*weight*speed*speed/22500
    if(deformation>100)
    {
      car.shapeColor="red"
    }
    if(deformation>100&deformation<180)
    {
      car.shapeColor="yellow"
    }
    if(deformation<180)
    {
      car.shapeColor="green"
    }
  }
  drawSprites();
}