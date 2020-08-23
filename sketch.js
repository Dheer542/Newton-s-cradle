
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobDiameter;
var roof1;

function preload()
{
	
}

function setup() {
var canvas = createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
//Create the Bodies Here.
bobObject1 = new paper(400,350,40);
roof1 = new ground(200,350,30,200);
rope1 = new rope(bobObject1.body,roof1.body,bobDiameter*2,0);
Engine.run(engine);
}


function draw() {
background("yellow");
Engine.update(engine);
bobObject1.display();
roof1.display();
rope1.display();
drawSprites();
 
}



