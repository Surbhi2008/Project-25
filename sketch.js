
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin1,ground1;

function preload()
{
  
}

function setup() {
	createCanvas(800, 700);

 	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50,600);
  dustbin1 = new Dustbin(); 
  ground1 = new Ground(400,650,800,10);

  
  

	Engine.run(engine);
  
}


function draw() {
  background(100);
  paper1.debug = true;
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbin1.display();
 

  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Engine.update(engine);
    Matter.Body.applyForce(paper1.body, paper1.body.position,{x:100,y:-105})
  } 
  
}


