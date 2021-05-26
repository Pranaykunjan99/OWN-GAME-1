const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var hero1;
var hero2;
var plant1;
var plant2;
var score=0;

function preload(){
  hero2=loadImage("HERO1.webp")
  plant2=loadImage("PLANT.webp")
}
function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  hero1=createSprite(200,300,20,20)
  hero1.scale=0.1
  hero1.addImage(hero2)
  plant1=createSprite(1100,300,20,20)
  plant1.addImage(plant2)
  plant1.scale=0.09
}

function draw() {
  background("yellow"); 

  

  if(keyDown(UP_ARROW)){
    hero1.velocityY=-3
    hero1.velocityX=0
  }
  if(keyDown(DOWN_ARROW)){
    hero1.velocityY=3
    hero1.velocityX=0
  }
  if(keyDown(LEFT_ARROW)){
    hero1.velocityY=0
    hero1.velocityX=-3
  }
  if(keyDown(RIGHT_ARROW)){
    hero1.velocityY=0
    hero1.velocityX=3
  }
  textSize(15)
  fill("red")
  text("MOVE THE HERO WITH THE 4 ARROW KEYS",430,100)

  
  /*textSize(15)
  fill("green")
  text("Score: "+ score, 500,50);*/
  
  
  
    
  
  
  drawSprites();
}