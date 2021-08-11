var zombieImage,zombie;
var bg1;
var bg2;
var pg;
var pgborder;
var zombieGroup;
var player;
var pc
function preload(){
  bg1=loadImage("bg.jpg");
  zombieImage=loadAnimation("npc1.png","npc2.png","npc3.png","npc4.png");
 pc=loadImage("pc.png")
}

function setup() {
  createCanvas(1400,650);
  pg=createSprite(675,325,625,625);
  pg.shapeColor=("white")
  pgborder1=createSprite(359,325,5,625)
  pgborder1.shapeColor="black";
  pgborder2=createSprite(672,10,632,5);
  pgborder2.shapeColor="black";
  pgborder3=createSprite(985,325,5,625);
  pgborder3.shapeColor="black";
  pgborder4=createSprite(672,640,632,5);
  pgborder4.shapeColor="black";
  zombieGroup=createGroup();
  
}
function draw() {
  background(bg1);  
  drawSprites();
  zombies();
  
  if(zombieGroup.isTouching(pgborder3)){
    zombieGroup[0].destroy();
  }
  player=createSprite(650,300,5,5);
  player.scale=0.1;
  player.addImage(pc);
  if(keyDown(UP_ARROW)){
    player.velocityY=-10;
  }
}

function zombies(){
  if(frameCount%80===0){
  zombie=createSprite(359,random(10,500), 50, 50);
  zombie.velocityX=random(4,8);
  zombie.addAnimation("zombieImage",zombieImage);
  zombieGroup.add(zombie);
  console.log(zombie.x)
  
}

}
