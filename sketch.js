function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green"
  fixedrect = createSprite(500, 200, 50, 50);
  fixedrect.shapeColor="green"
}

function draw() {
  background("lightblue");  
movingrect.x=mouseX

movingrect.y=mouseY

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2 ){
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
}
else{
movingrect.shapeColor="green"
fixedrect.shapeColor="green"

}











  drawSprites();
}