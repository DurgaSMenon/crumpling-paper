
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,db1,db2,db3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,370,1200,20)
	paper=new Paper(60,100,40)
	db1=new Db(900,350,200,20)
	db2=new Db(810,300,20,100)
	db3=new Db(990,300,20,100)
   
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background(0);

  ground.display()
  paper.display()
  db1.display()
  db2.display()
  db3.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-125});
	}
}


