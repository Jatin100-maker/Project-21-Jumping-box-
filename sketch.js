var canvas;
var music;
var surface1,surface2,surface3,surface4
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

//creating 4 different surfaces
 surface1 = createSprite(100,594,190,12);
 surface1.shapeColor = "red";

 surface2 = createSprite(300,594,190,12);
 surface2.shapeColor = "green";

 surface3 = createSprite(500,594,190,12);
 surface3.shapeColor = "purple";

 surface4 = createSprite(700,594,190,12);
 surface4.shapeColor = "deeppink";
 
 box = createSprite(random(20,750),150,20,20);
 box.shapeColor = "white";
 box.velocityX =5;
 box.velocityY =5;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 
    edges = createEdgeSprites();
    box.bounceOff(edges);

  if(surface1.isTouching(box) && box.bounceOff(surface1)){
      music.play();
      box.shapeColor = "red";
  }

  if(surface2.isTouching(box) && box.bounceOff(surface2)){
    music.stop();
    box.shapeColor = "green";
    box.velocityX = 0;
    box.velocityY = 0;
}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    music.play();
    box.shapeColor = "purple";
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    music.play();
    box.shapeColor = "deeppink";
}

 drawSprites();
    
}

