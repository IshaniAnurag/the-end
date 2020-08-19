//Global Variables
var BananaImage;
var ObstacleImage;
var Obstaclegroup;
var Backimage;
var Score;
var Player_running;
var Score=0;
var Ground;
var Player;
var screen;
var fruitgroup;



function preload(){
  Backimage=loadImage("jungle.jpg");
  Player_running=loadAnimation(
   "Monkey_01.png","Monkey_02.png","Monkey_03.png",
    "Monkey_04.png","Monkey_05.png","Monkey_06.png",
    "Monkey_07.png","Monkey_08.png","Monkey_09.png",
    "Monkey_10.png"
   );
  
  BananaImage=loadImage("Banana.png");
  ObstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
 
  screen=createSprite(300,150,700,300);
  screen.addImage(Backimage);
  screen.scale=1.5;
  
  Player=createSprite(30,242,20,20);
  Player.addAnimation("playerrunning",Player_running);
  Player.scale=0.1;
  
  ground=createSprite(300,285,600,27);
  ground.shapeColor=rgb(68, 42, 27);
  
  fruitgroup= new Group();
  Obstaclegroup= new Group();
}


function draw(){
 background("green"); 

 if(Score===80){
   text("GAME OVER",200,200);
   fruitgroup.visible=false;
   Obstaclegroup.visible=false;
   Obstaclegroup.velocityX=0;
   fruitgroup.velocityX=0;
   
 }
  
  
  
  screen.velocityX=-4;
  
  
  if(screen.x<0){
screen.x=screen.width/2;
  }
  
  if(keyDown("space")&&Player.y>=150){
    Player.velocityY=-15;
  }
  Player.velocityY=Player.velocityY+0.75;
  
  if(fruitgroup.isTouching(Player)){
  Score=Score+2;
 fruitgroup.destroyEach();
}
  
  if(Obstaclegroup.isTouching(Player)){
    Player.scale=0.1;
  }
  
  switch(Score){
    case 10: Player.scale=0.12;
      break;
      
    case 20:Player.scale=0.14;
      break;
      
      case 30:Player.scale=0.16;
      break;
      
      case 40:Player.scale=0.18;
      break;
      
      default:break;
  }
  
Player.collide(ground);
  
  Spawnfruits();
  Spawnobstacles();
  drawSprites();
  
  
  stroke("white");
  fill("white");
  textSize(20);
  text("SCORE:"+Score,500,100);
  
}


function Spawnfruits(){
  if(World.frameCount%80===0){
    fruits=createSprite(600,200,40,40);
    fruits.addImage(BananaImage);
    fruits.scale=0.05;
    fruits.velocityX=-2;
    fruits.y=random(100,200);
    fruits.lifetime=300;
    fruitgroup.add(fruits);
    
  }
}

function Spawnobstacles(){
  if(World.frameCount%200===0){
    stones=createSprite(600,255,40,40);
    stones.addImage(ObstacleImage);
    stones.scale=0.15;
    stones.velocityX=-2;
    stones.lifetime=300;
    Obstaclegroup.add(stones);
  }
}