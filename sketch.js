
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bobObject1 = new Bob(140,650);
	 bobObject2 = new Bob(280,650);
	 bobObject3 = new Bob(420,650);
   bobObject4 = new Bob(560,650);
	 bobObject5 = new Bob(700,650);

	 roofObject = new Roof(400,50,600,50);

	 rope1 = new Chain (bobObject1.body,{x:200,y:50});
	 rope2 = new Chain (bobObject2.body,{x:300,y:50});
	 rope3 = new Chain (bobObject3.body,{x:400,y:50});
	 rope4 = new Chain (bobObject4.body,{x:500,y:50});
	 rope5 = new Chain (bobObject5.body,{x:600,y:50});

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background("pink");


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



