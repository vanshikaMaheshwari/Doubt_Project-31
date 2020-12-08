const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  GROUND = new Ground(300,585,580,10);
  Border_1 = new Ground(300,595,600,10);
  Border_2 = new Ground(5,300,10,600);
  Border_3 = new Ground(300,5,600,10);
  Border_4 = new Ground(595,300,10,600);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);

  fill(255);
  GROUND.display();
  fill("brown");
  stroke("brown");
  Border_1.display();
  Border_2.display();
  Border_3.display();
  Border_4.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}