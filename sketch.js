var wall1,wall2,wall3,wall4;
var back1,back2,back3,back4;
var mainSprite;
var edges;
function setup(){
    createCanvas(800,400);
    wall1 = createSprite(103,394,187.5,8);
    wall2 = createSprite(300,394,187.5,8);
    wall3 = createSprite(500,394,187.5,8);
    wall4 = createSprite(700,394,187.5,8);
    back1 = createSprite(1,200,1,800);
    back2 = createSprite(200,1,1200,1);
    back3 = createSprite(799,200,1,800);
    back4 = createSprite(200,399,120,1);
    mainSprite = createSprite(400,40,50,50);

    wall1.shapeColor = "red";
    wall2.shapeColor = "blue";
    wall3.shapeColor = "yellow";
    wall4.shapeColor = "green";

    mainSprite.velocityY = 4;
    mainSprite.velocityX = -2;

}

function draw(){
   
    background(0);
    createEdgeSprites();

    if(isTouching(mainSprite,wall1)){
        mainSprite.shapeColor = "red";
        bounceOff(mainSprite,wall1);
        mainSprite.velocityX *= -1;
    }

    if(isTouching(mainSprite,wall2)){
        mainSprite.shapeColor = "blue";
        bounceOff(mainSprite,wall2);
        mainSprite.velocityX *= -1;
    }

    if(isTouching(mainSprite,wall3)){
        mainSprite.shapeColor = "yellow";
        bounceOff(mainSprite,wall3);
        mainSprite.velocityX *= -1;
    }

    if(isTouching(mainSprite,wall4)){
        mainSprite.shapeColor = "green";
        bounceOff(mainSprite,wall4);
        mainSprite.velocityX *= -1;
    }

    if(isTouching(mainSprite,back1)){
        bounceOff(mainSprite,back1);
    }

    if(isTouching(mainSprite,back2)){
        bounceOff(mainSprite,back2);
        mainSprite.velocityX *= -1;
    }

    if(isTouching(mainSprite,back3)){
        bounceOff(mainSprite,back3);
    }

    if(isTouching(mainSprite,back4)){
        bounceOff(mainSprite,back4);
        mainSprite.velocityX *= -1;
    }
    
   
    background(0);
    drawSprites();
}