var paperObject,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	 ground = Bodies.rectangle(width/2, height-20, width, 10 , {isStatic:true} );
 	 World.add(world, ground);

	b1 = new Container(640,height-50,200,20);
	b2 = new Container(540,height-90,20,100);
	b3 = new Container(730,height-90,20,100);
    paperObject = new paper(100,300,30);

	
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
	// fill('magenta');
	// circle(60,150,30);
	// rect(100, 150, 20,20);
	
	 b1.display(); 
	 b2.display();
	 b3.display();
	 paperObject.display();

  	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-150});
	}
}



