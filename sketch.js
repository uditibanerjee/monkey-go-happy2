
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var monkey_still;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 monkey_still=loadAnimation("sprite_0.png"); 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(800,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.addAnimation("still", monkey_still);
  monkey.scale=0.1;

  ground=createSprite(400,350,1600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup=new Group();
  foodGroup=new Group();
  score=0;
}


function draw() {
  background("white");
 if(ground.x<0){
   ground.x=ground.width/2
 }
 if(keyDown("space")&& monkey.y>=100){
   monkey.velocityY=-13;
 }
 monkey.velocityY=monkey.velocityY+0.8;
 monkey.collide(ground);
 
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
   foodGroup.setVelocityXEach(0);
   obstacleGroup.setLifetimeEach(-1) 
   foodGroup.setLifetimeEach(-1) 
    monkey.changeAnimation("still", monkey_still)
  }
 stroke("white");
 textSize(20);
 fill("white");
  text("score:",score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time:"+ survivalTime,100,50);
  spawnObstacle();
  spawnBanana();
  drawSprites();
  
}
function spawnObstacle(){
if(frameCount%180===0){
 obstacle=createSprite(800,350,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-2;
  obstacle.lifetime=400;
  obstacleGroup.add(obstacle);
 }
}
  
function spawnBanana(){
if(frameCount%100===0){
  banana=createSprite(800,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-2;
  banana.lifetime=400;
  foodGroup.add(banana);
} 
} 


