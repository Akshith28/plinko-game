const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var divisions;

var particles =[];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(240,790,480,20);
 

 
}

function draw() {
  background(0);
  Engine.update(engine);  

  ground.display();

  for (var k =0 <= width;k = k + 80 ) {
    divisions.push(new Division(k,height = divisionHeight/2,10,divisionHeight));
  }
  
}