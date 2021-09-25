var room,room2,man,manImg,cleanteethImg
var exerciseImg,feedImg,cleanbodyImg,bodyImg
var romeImg,thrustyImg


function preload(){
 room2 = loadImage("images/iss.png");
 manImg = loadImage("images/sleep.png")
cleanteethImg = loadImage("images/brush.png")
exerciseImg = loadAnimation("images/gym1.png","images/gym2.png")
feedImg = loadAnimation("images/eat1.png","images/eat2.png")
cleanbodyImg = loadAnimation("images/bath1.png","images/bath2.png")
bodyImg = loadAnimation("images/gym11.png","images/gym12.png")
romeImg = loadImage("images/move.png")
thrustyImg = loadImage("images/drink1.png","drink2.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);

    room = createSprite(windowWidth/2,windowHeight/2,50,50)
    room.addImage("hall",room2)
    room.scale=0.21

    man = createSprite(windowWidth/2-80,windowHeight/2-50)
    man.addImage("bed",manImg)
    man.scale=0.1

    invisiblewall = createSprite(windowWidth/2,windowHeight/2-300,windowWidth,20)
invisiblewall2 = createSprite(windowWidth/2,windowHeight/2-(-300),windowWidth,20)
invisiblewall3 = createSprite(windowWidth/2-500,windowHeight/2,20,windowHeight)
invisiblewall4 = createSprite(windowWidth/2-(-500),windowHeight/2,20,windowHeight)
invisiblewall.visible=false
invisiblewall2.visible=false
invisiblewall3.visible=false
invisiblewall4.visible=false
}


function draw(){




  if(keyDown("up")){
man.addAnimation("white",cleanteethImg)
man.changeAnimation("white")  
man.y=windowHeight/2-(-100)
man.x=windowWidth/2-(-50)
man.velocityY=0
man.velocityX=0
}


if(keyDown("down")){
man.addAnimation("work",exerciseImg)
man.changeAnimation("work")
man.x=windowWidth/2-(-200)
man.y=windowHeight/2-(-150)
man.velocityY=0
man.velocityX=0
}

if(keyDown("left")){
  man.addAnimation("fill",feedImg)
  man.changeAnimation("fill")
 man.x=windowWidth/2-200
 man.y=windowHeight/2-(-90)
 man.velocityY=0
man.velocityX=0
  
}

if(keyDown("right")){
man.addAnimation("cb",cleanbodyImg)
man.changeAnimation("cb")
man.y=windowHeight/2-(-100)
man.x=windowWidth/2-(-20)
man.velocityY=0
man.velocityX=0
}

if(keyDown("g")){
man.addAnimation("building",bodyImg)
man.changeAnimation("building")
man.x=windowWidth/2-(-200)
man.y=windowHeight/2-(-150)
man.velocityY=0
man.velocityX=0
}

if(keyDown("space")){
man.addImage("wakeup",manImg)
man.changeImage("wakeup")
man.x=windowWidth/2-80
man.y=windowHeight/2-50
man.velocityX=0
man.velocityY=0
}

if(keyDown("enter")){
man.addImage("bore",romeImg)
man.changeImage("bore")
man.velocityX=2
man.velocityY=3
}

if(keyDown("d")){
man.addAnimation("water",thrustyImg)
man.changeAnimation("water")
man.x=windowWidth/2-(-200)
man.y=windowHeight/2-(-150)
man.velocityY=0
man.velocityX=0
}


man.bounceOff(invisiblewall)
man.bounceOff(invisiblewall2)
man.bounceOff(invisiblewall3)
man.bounceOff(invisiblewall4)

  drawSprites();
  textSize(18)
  fill("white")
  text("Instruction:",windowWidth/2-450,windowHeight/2-300)
  text("Key Space = sleep",windowWidth/2-450,windowHeight/2-280)
  text("UP Arrow = brush",windowWidth/2-450,windowHeight/2-260)
  text("Right Arrow = bath",windowWidth/2-450,windowHeight/2-240)
  text("Down Arrow = joging",windowWidth/2-450,windowHeight/2-220)
  text("Key D = drinking water",windowWidth/2-450,windowHeight/2-200)
  text("Key G = space exercise",windowWidth/2-450,windowHeight/2-180)
  text("Left Arrow = eating",windowWidth/2-450,windowHeight/2-160)
  text("Key Enter = moveing",windowWidth/2-450,windowHeight/2-140)






}