var road
var roadImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  roadImg=loadImage("Untitled.png")
  carImg=loadImage("bbb.png")
  truckImg=loadImage("ttruck.png")  
  rangeImg=loadImage("rara.png")
  coinImg=loadImage("coin.png")
  restartImg=loadImage("gggggggg.png")
  rere=loadImage("rree.png")

}

function setup() {
  createCanvas(590,300)
  road=createSprite(300,150,100,100)
  road.addImage(roadImg)
  road.scale=3
  
  lamborghini=createSprite(80,115,100,50)
  lamborghini.addImage(carImg)
  lamborghini.scale=0.5
  lamborghini.debug=false
  lamborghini.setCollider("rectangle",0,-0,215,115);

  go=createSprite(300,100,100,100)
  go.addImage(restartImg)
  go.scale=0.5
  go.visible=false
  
  re=createSprite(300,250,100,100)
  re.addImage(rere)
  re.visible=false
  re.scale=0.4

  
    enemyGroup = new Group();
    coinGroup = new Group();

    score = 0;

}

function draw() {
  
  

  
  if (gameState===PLAY){
      road.velocityX = -3 

    if (road.x < 0){
      road.x = road.width/2;
    }

    
    if(coinGroup.isTouching(lamborghini)){
    coinGroup.destroyEach();
    score=score+2;
  }
    
   lamborghini.y = World.mouseY

    
    
  spawntruck();
  spawnrange();
  spawncoin()
    
  if(enemyGroup.isTouching(lamborghini)){
        gameState = END;
    }
  }
  
    else if (gameState === END) {
      
     
    enemyGroup.setVelocityXEach(0);
    enemyGroup.setLifetimeEach(-1);
    coinGroup.setVelocityXEach(0);
    coinGroup.setLifetimeEach(-1);

   go.visible=true
   re.visible=true
      

      
    }


 drawSprites();
  stroke("black");
  textSize(30);
  fill("black");
  text("Score: "+ score, 250,50);

    if(mousePressedOver(re)) {
      reset();
    }

 
}


function spawntruck(){
  if (frameCount % 315 === 0){
    var truck = createSprite(600,400,100,50);
    truck.addImage(truckImg)
    truck.velocityX=-6;
    truck.y = Math.round(random(1,400));
    truck.debug=false;
  truck.setCollider("rectangle",0,0,150,50);

    truck.lifetime=300;
    enemyGroup.add(truck);
    
}
}

                                                        
function spawnrange(){
  if (frameCount % 222 === 0){
    var range = createSprite(600,400,200,50);
    range.addImage(rangeImg)
    range.velocityX=-5;
    range.y = Math.round(random(1,400));
    range.scale=0.4
    range.lifetime=300;
    enemyGroup.add(range);
    range.debug=false;
    range.setCollider("rectangle",0,-50,215,70);


    
}
}
function spawncoin(){
  if (frameCount % 200 === 0){
    var coin = createSprite(600,400,50,50);
    coin.velocityX=-7;
    coin.y = Math.round(random(1,400));
    coin.addImage(coinImg)
    coin.scale=0.1
    coin.lifetime=300;
    coinGroup.add(coin);
    
}
}

function reset(){
  gameState = PLAY;
   go.visible=false
   re.visible=false
      

  enemyGroup.destroyEach();
  

  score = 0;
  
}

