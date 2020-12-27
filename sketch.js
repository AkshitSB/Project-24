
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin1, dustBin2, dustBin3, paper, paperBody;
var groundSprite, ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite =createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("lightGrey");
	

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 675, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	dustBin1 = new dustBin(650,650, 200, 20);	
	dustBin2 = new dustBin(550, height-90, 20, 100);
	dustBin3 = new dustBin(750, height-90, 20, 100);
	paper = new paperBall(20,height-100,20);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-60});
		
	}
}


