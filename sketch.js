
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime
var bananaGroup;
var obstaclesGroup;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
   
  bananaGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
 background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  food();
  obstacles();
  if(keyDown("Space")){
    monkey.velocityY=-5;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityX=0;
    ground.velocityX=0;
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
  }
  drawSprites();
}
function food(){
  if(frameCount%80==0){
    banana=createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-2;
    bananaGroup.add(banana);
    banana.y=Math.round(random(80,120));
  }
}
function obstacles(){
  if(frameCount%80==0){
  obstacle=createSprite(800,320,10,40);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-2; 
  obstaclesGroup.add(obstacle);  
  }
 
}




