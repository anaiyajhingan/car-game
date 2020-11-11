var PLAY = 1;
var END = 0;
var gameState = PLAY;
var road,roadI;
var blue1,green,green1,yellow1,red1,purple;
var cars,car,car1,cars2,carsGroup,bike1,bike,cars3,car4;
var score;
var gameOver, restart;

function preload(){
roadI=loadImage("download (5).png");
  blue1=loadImage("blue2.png")
  yellow1=loadImage("download.png")
  red1=loadImage("red.png")
  green1=loadImage("green.png")
  purple=loadImage("purple.png")
 gameOverImg = loadImage("gameover.png");
  restartImg = loadImage("reload.png");
  bike1=loadImage("bike1.png")
}

function setup() {
  createCanvas(550,650)
  road= createSprite(282,330,400,20)
  road.addImage(roadI)
  road.scale=0.8
  

  
  bike= createSprite(250,250,400,20)
  bike.addImage(bike1)
  bike.scale=0.7
  score=0;
  gameOver = createSprite(282,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.2;
  restart.scale = 0.2;
  
   gameOver.visible = false;
  restart.visible = false;
  
 carsGroup=createGroup();
}

function draw() {
 background(220)
  if (gameState===PLAY){
     if(frameCount % 60 === 0 ){
     score=score+1
   }
  bike.x = World.mouseX
  
     car4();
    if(carsGroup.isTouching(bike)){
        gameState = END;
    }
  }
  
 
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
   

    
   carsGroup.setVelocityXEach(0);
    
    
   
    carsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
 
 
drawSprites();
    text("Score: "+ score, 400,50);
}
function cars(){
 
    var car = createSprite(90,0,10,40);
   
    car.velocityY = (3+ 1*score/10);
    
  
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: car.addImage(red1);
              break;
      case 2: car.addImage(yellow1);
              break;
      case 3: car.addImage(green1);
              break;
      case 4: car.addImage(blue1);
              break;
      case 5: car.addImage(purple);
              break;
      
      default: break;
    }
              
    car.scale = 0.5;
   car.lifetime = 1000;
   
    carsGroup.add(car);
  
}
function cars2(){
    var car = createSprite(280,0,10,40);
    //obstacle.debug = true;
    car.velocityY = (3+ 1*score/10);
    
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: car.addImage(red1);
              break;
      case 2: car.addImage(yellow1);
              break;
      case 3: car.addImage(green1);
              break;
      case 4: car.addImage(blue1);
              break;
      case 5: car.addImage(purple);
              break;
      
      default: break;
    }
  
   
    
              
    car.scale = 0.5;
   car.lifetime = 1000;
   
    carsGroup.add(car);
  
}
function cars3(){

    var car = createSprite(440,0,10,40);
    //obstacle.debug = true;
    car.velocityY = (3+ 1*score/10);
    
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: car.addImage(red1);
              break;
      case 2: car.addImage(yellow1);
              break;
      case 3: car.addImage(green1);
              break;
      case 4: car.addImage(blue1);
              break;
      case 5: car.addImage(purple);
              break;
      
      default: break;
    }
  
    
              
    car.scale = 0.5;
   car.lifetime =1000;
   
    carsGroup.add(car);
  }
  
function car4(){
  if (frameCount %140 === 0){
 r=Math.round(random(1,4));
if(r==1){
cars();
}else if(r==2){
cars2();
}else if(r==3){
cars3();
}
         
  }}
function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  carsGroup.destroyEach();
  
  score = 0;
  
}