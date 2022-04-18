var ship, ship_image;
var sea, sea_image;
function preload (){
ship_image=loadAnimation("ship-1.png")
ship_image=loadAnimation("ship-1.png")
ship_image=loadAnimation("ship-1")
ship_image=loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png"")
ship_image=loadAnimation("ship-1","ship-2","ship-1","ship-2")

sea_image=loadImage("sea.png")
}
function setup() 
{
  createCanvas(2000,4000);
ship=createSprite(50,100,10,10)
ship.addAnimation ("floating",ship_image)
ship.scale=0.4
sea=createSprite(50,190,10,10)
sea.addImage ("sea",sea_image)



}

function draw() 
{

sea.velocityX=-2
if(sea.x<0){
sea.x=sea.width/2
}
drawSprites()
}


















































































