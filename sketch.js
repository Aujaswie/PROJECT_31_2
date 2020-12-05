const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinko = [];
var division = [];
var divisionHeight = 300;
var engine, world;
var ground;



function setup(){
   createCanvas(800,400);

    engine = Engine.create();

    world = engine.world;

//create the ground
    platform = new Ground(400, 370, 800, 20);


//to create the plinkos
 
for (var j = 75; j <=width; j=j+50) 
{

   plinko.push(new Plinko(j,75,10));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinko.push(new Plinko(j,175,10));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinko.push(new Plinko(j,275,10));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinko.push(new Plinko(j,375,10));
   
}


//create the divisions
    for (var k = 0; k<= width; k = k +80){
      division.push (new Division(k, height - divisionHeight / 2, 10 , divisionHeight))
    }



function draw(){

  background(0);  
  Engine.update(engine);

   ground.display();

   for (var i = 0; i < plinko.length; i++) {
     
    plinko[i].display();
    
  }
  
  if(frameCount%60===0){
   particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particle.length; j++) {
  
    particle[j].display();
  }

  for (var k = 0; k < division.length; k++) {
  
    division[k].display();
  }

}


}
