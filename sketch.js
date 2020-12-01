const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

var engine,ball,world,ground;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

var op = {
  restitution:1
}

  ball=Bodies.circle(200,200,30,op);
  World.add(world,ball);

  var ground_op = { isStatic:true } 
  ground = Bodies.rectangle(400,380,800,10,ground_op); 
  World.add(world,ground);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
}