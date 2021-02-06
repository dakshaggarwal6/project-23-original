var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var box1,box2,box3;
var box1sprite,box2sprite,box3sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 190, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  box1sprite=createSprite(width/2,height-50,200,20);
  box1sprite.shapeColor="red";

  box2sprite = createSprite(500,610,20,100);
  box2sprite.shapeColor = "red";

  box3sprite = createSprite(300,610,20,100);
  box3sprite.shapeColor = "red";

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 190, 5, {
    restitution: 0,
    isStatic: true,
  });
  World.add(world, packageBody);

box1 = Bodies.rectangle(width/2,650,200,20);
box2 = Bodies.rectangle(500,610,20,100);
box3 = Bodies.rectangle(300,610,20,100);
  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
  World.add(world, ground);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  box1sprite.x=box1.position.x;
  box1sprite.y=box1.position.y;
  
  box2sprite.x=box2.position.x;
  box2sprite.y=box2.position.y;
  
  packageSprite.bounceOff(box1sprite);
  Matter.Body.setStatic(box1,false);
  Matter.Body.setStatic(box2,false);
  Matter.Body.setStatic(box3,false);
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

  Matter.Body.setStatic(packageBody, false);
  
	packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;
  }
  
}
