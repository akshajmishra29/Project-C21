var bullet;
var wall,thickness;
var deformation;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  bullet = createSprite(200,200,100,50);
  bullet.velocityX = 100;
  speed = random(223,321);
  bullet.shapeColor = "white";
  
  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  weight = random(30,52);
  }

function draw() {
  background(30,40,30);

  console.log(bullet.velocityX);
  if(hasCollided(bullet,wall)){
    deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(deformation);
  
    if(deformation < 10){
      wall.shapeColor = "green";
      text("Remarkable quality",1100,350,textFont("Brush Script MT"),textSize(30));
    }
    if(deformation > 10){
      wall.shapeColor = "red";
      text("Poor quality",1200,350,textFont("chiller"),textSize(35));
    }
    if(hasCollided(bullet,wall) && deformation === 10){
      wall.shapeColor = "green";
      text("Satisfactory",1500,370,textFont("georgia"),textSize(30));
    }
    bullet.velocityX = 0;
  }

  drawSprites(); 
}