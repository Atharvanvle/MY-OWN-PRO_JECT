var jungle1,jungle1img;
var wood1,wood1img,wood2,wood2img;
var mogli,mogliIMG,tiger,tigerIMG;
var apple,appleIMG,banana,bananaIMG,melon,melonIMG,orange,orangeIMG,pine,pineIMG;

function preload(){
    jungle1img = loadImage("images/jungle.png");
    wood1img = loadImage("images/woodLog3.jpg");
    mogliIMG = loadImage("images/mowgli.png");
    tigerIMG = loadImage("images/tiger.gif");
    appleIMG = loadImage("images/apple2.png");
    bananaIMG = loadImage("images/banana2.png");
    melonIMG = loadImage("images/melon2.png");
    orangeIMG = loadImage("images/orange2.png");
    pineIMG = loadImage("images/pineapple2.png");
    fruitGroup = new Group();
}

function setup(){
    createCanvas(displayWidth-2,displayHeight-30);
    jungle1 = createSprite(displayWidth/2-800, displayHeight-400,displayWidth, displayHeight+300);
    jungle1.addImage("jungle1",jungle1img);
    jungle1.scale= 1.5;
    jungle1.velocityX = -3;
    jungle1.x = displayWidth/2-800 ;

    wood1 = createSprite(displayWidth/2-300,displayHeight/2 + 340,displayWidth*5,displayHeight-200);
    wood1.addImage("wood1",wood1img);
    wood1.scale= 1.3;

    wood2 = createSprite(displayWidth/2+300,displayHeight/2 + 340,displayWidth,displayHeight-200);
    wood2.addImage("wood2",wood1img);
    wood2.scale=1.3;

    mogli = createSprite(displayWidth/2-100,displayHeight/2+200,displayWidth,displayHeight-150);
    mogli.addImage(mogliIMG);
    mogli.scale=0.45;

    tiger = createSprite(displayWidth/2-500,displayHeight/2+185,displayWidth,displayHeight-150);
    tiger.addImage(tigerIMG);
    tiger.scale=0.35;
}


function draw(){
    jungle1.velocityX = -3;

    if(keyDown("space") && mogli.displayHeight/2+280){
        mogli.velocityY=-10;
    }
    mogli.velocityY=mogli.velocityY+0.7;

   if(jungle1.x <600){
        jungle1.x = displayWidth/2 ;
    }

    console.log(mogli.y);
  
    mogli.collide(wood1); 
   
    
    fruits();
    drawSprites();

}
function fruits(){
    if (frameCount % 170 === 0) {
        var fruit = createSprite(displayWidth/2+800,displayHeight/2+20,displayWidth,displayHeight-150);
        fruit.velocityX = -6;
        fruit.lifetime(200);
        var rand = Math.round(random(1,5));
        switch(rand){
           case 1: fruit.addImage("fruit1",appleIMG);
           break;
           case 2: fruit.addImage("fruit1",bananaIMG);
           break;
           case 3: fruit.addImage("fruit1",melonIMG);
           break;
           case 4: fruit.addImage("fruit1",orangeIMG);
           break;
           case 5: fruit.addImage("fruit1",pineIMG); 
        }
        fruitGroup.add(fruit);
}
}