var sprite
var sprite2

function setup() {
  createCanvas(400,400);
   sprite = createSprite(200, 200, 20, 50)
   sprite2 = createSprite(200, 100, 20, 50)

}

function draw() {
  background(30);

  if(keyDown(RIGHT_ARROW)){
    sprite.velocityX=2
  }

  createEdgeSprites();

  sprite.bounceOff(edges);

  drawSprites();
}




