var Start
var Play
var End
var gamestate = 'Play'

function preload() {

  shotputball = loadImage('Untitled67_20201120174856.png')
  rantaro = loadImage('Untitled65_20201120174420.png')
  library = loadImage('DanganronpaV3-2.png')
  dead= loadImage ('dead rantaro.png')

}

function setup() {
  createCanvas(600, 400)
  
  DRantaro= createSprite (300,200,600,400)
  DRantaro.addImage(dead)
  Background = createSprite(300, 200, 600, 400)
  Background.addImage(library)

  Rantaro = createSprite(300, 310, 20, 20)
  Rantaro.addImage(rantaro)
  Rantaro.scale = 0.25
  edges = createEdgeSprites()
  Rantaro.setCollider('rectangle', 0, -180, 200, 900)
  

  shotball = createGroup()
   

}

function draw() {
  if (gamestate === 'Play') {
    DRantaro.visble= false
    
    Background.visible= true
    
    Rantaro.visible = true
    if (Rantaro.isTouching(shotball)) {
      shotball.destroyEach()
      gamestate = 'End'
    }

    if (World.frameCount % 150 === 0) {
      shotputballspawn()

    }
    if (keyDown(LEFT_ARROW)) {

      Rantaro.velocityX = -4

    }

    if (keyDown(RIGHT_ARROW)) {

      Rantaro.velocityX = 4

    }

    if (keyWentUp(LEFT_ARROW)) {

      Rantaro.velocityX = 0
    }
    if (keyWentUp(RIGHT_ARROW)) {

      Rantaro.velocityX = 0
    }


    Rantaro.bounceOff(edges)




  }
 if (gamestate === 'End') {
    Rantaro.velocityX = 0
    Background.visible= false
    background('black')
    if (keyDown('space')) {

      gamestate = 'Play'
    }
    Rantaro.visible = false
     DRantaro.visble= true
    DRantaro.depth= 9
 fill('black')
  textSize(30)
    text('You died', 250, 100)

  } 
 
   drawSprites()
  
  
  
  
}

function shotputballspawn() {
  var Shotball = createSprite(Math.round(random(20, 370)), 0, 20, 20)
  Shotball.addImage(shotputball)
  Shotball.velocityY = 7
  Shotball.scale = 0.10
  shotball.add(Shotball)
  Shotball.setCollider('rectangle',0, -300, 330,330)
  
}


