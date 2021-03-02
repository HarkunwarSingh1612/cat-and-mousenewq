var background, backgroundImage;
var tom, tomImage, mouse, mouseImage, tom_running, mouse_running, tom_lastImage, mouse_lastImage;

function preload() {
    //load the images here
    backgroundImage= loadImage("garden.png");
     tomImage= loadImage("cat1.png");
     tom_running= loadAnimation("cat2.png", "cat3.png" );
     tom_lastImage= loadAnimation("cat4.png"); 
     
     mouse_running= loadAnimation("mouse2.png", "mouse3.png")
     mouseImage= loadImage("mouse1.png");
     mouse_lastImage= loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background=createSprite(0,0,1000,800);
    background.addImage(backgroundImage);
    background.scale=2.5;

    tom=createSprite(900, 400, 10, 20);
    tom.addImage(tomImage);
    tom.scale=0.2;

    mouse=createSprite(250, 400, 10, 20);
    mouse.addImage(mouseImage);
    mouse.scale=0.1;
    

    
    //tom.addAnimation(cat1.png);
   
}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(tom.x-mouse.x<((tom.width-mouse.width)/2)+40)
        {
        tom.addAnimation("catLastImage", tom_lastImage);
        tom.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage", mouse_lastImage);
        mouse.changeAnimation("mouseLastImage");
        tom.velocityX=0;
        mouse.velocityX=0;
      }
    
    keyPressed();
    drawSprites();
}
function keyPressed(){
    if(keyDown("LEFT_ARROW")){
        tom.velocityX= -5;
        tom.addAnimation("catRunning", tom_running);
        tom.changeAnimation("catRunning");

        mouse.addAnimation("mouseRunning", mouse_running);
        mouse.changeAnimation("mouseRunning");
    }
}


