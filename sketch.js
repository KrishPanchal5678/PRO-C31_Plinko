// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
 
// var ground;
// var particles = [];
// var plinkos = [];
// var divisions = [];

// var divisionHeight = 300;

// function setup() {
//   createCanvas(800,480);
//   engine = Engine.create();
//   world = engine.world;

 
//   ground = new Ground(width/2,height,width,20);
//   console.log(ground);

//   for(var k = 0; k <= width; k = k + 80)
//     {
//       divisions.push(new Divisions(k, height = divisionHeight/2, 10, divisionHeight));
//     }

//      for (var j = 0; j<= width; j= j+50){
//         for (var i= 75; i<350; i = i+70)
//         plinkos.push(new Plinko(j,i));
//      }

// }

// function draw() {
//   background(0);  
  
//   Engine.update(engine);
  


// //   for(var k = 0; k < divisions.length; k++)
// //  {
// //    divisions[k].display();
// //  }
 
// //   for(var j = 40; j <= width; j = j + 50)
// //   {
// //     plinkos.push(new Plinko(j, 75, 15));
// //   }

// //   for(var i = 15; i <= width - 10; i = i + 50)
// //   {
// //     plinkos.push(new Plinko(j, 175, 15));
// //   }
  
// //   for(var l = 25; l <= width - 10; l = l + 50)
// //   {
// //     plinkos.push(new Plinko(l, 275, 15));
// //   }

// //   for(var m = 40; m <= width - 10; m = m + 50)
// //   {
// //     plinkos.push(new Plinko(m, 375, 15));
// //   }

// //   if(frameCount%60 === 0)
// //   {
// //     particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
// //   }

  
//   ground.display();
  
//   for (var j =0; j< plinkos.length; j++){
//     plinkos[j].display();
//   }
//   for (var k =0; k< plinkos.length;kj++){
//     divisions[k].display();
//   }
// }



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var ground, division;

var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight = 300;



function setup() {
  createCanvas(800,800);

  engine = Engine.create()
  world= engine.world

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <= width; k=k+80){
    divisions.push( new Divisions(k,height-divisionHeight/2, 10,divisionHeight))
  }

  //------------------///////-----Could have done this way but it was making the output load too slow because of nested for-loops ------------------
  
  
  // for (var j = 0; j<= width; j= j+50){
  //   for (var i= 75; i<350; i = i+70)
  //   plinkos.push(new Plinko(j,i));
  // }

  //new way for creation of plinkos
  
  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j+25,125));
  }

  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j+25,225));
  }

  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j+25,325));
  }

  for (var j = 0; j<= width; j= j+50){
    plinkos.push(new Plinko(j,375));
  }
}
function draw() {
  background(0); 
  
  Engine.update(engine);


  for (var j =0; j< plinkos.length; j++){
    plinkos[j].display();
  }

  for (var j =0; j< divisions.length; j++){
    divisions[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(0, 800), 10,random(5,15)));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }


  ground.display()

 
}

