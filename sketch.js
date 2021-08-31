var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg.loadAnimation("path.png")
  boyImg.loadAnimation("Jake1.png,Jake2.png,jake3.png,jake4.PNG,jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 path.createSprite(200,200)
 path.addImage(pathImg)
 path.velocityY = 4
 path.scale = 1.2
//add image for the path
//Make the track a moving background by giving velocity Y.
path.scale=1.2;

boy.createSprite(180,370,30,30)
boy.addAnimation("running",boyImg)
boy.scale=0.08
  
// create left Boundary
leftBoundary.createSprite(0,0,100,800)
leftBoundary.visible = false
//create right Boundary
rightBoundary.createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = world.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //code to reset the background
  if(path.y > 400){
    path.y = height/2;
  }
  
  drawSprites();
}
