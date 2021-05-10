var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";
var rand=0;
var birthday;



function preload(){
  birthday=loadSound("birthday.mp3");
  towerImg = loadImage("bg.jpg");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  h1=loadImage("my1.gif");
   h2=loadImage("my2.gif");
   h3=loadImage("my3.gif");
   h4=loadImage("my4.gif");
   h5=loadImage("my5.png");
  
  
  
  // h1=createImg("my1.gif");
  //  h2=createImg("my2.gif");
  //  h3=createImg("my3.gif");
  //  h4=createImg("my4.gif");
  //  h5=createImg("my5.png");
  
//   h1.position(0,0);
//   h2.position(0,0);
  
  
  
  
  
//   i1=loadImage("1.jpeg");
//   i2=loadImage("2.jpeg");
//   i3=loadImage("3.jpeg");
//   i4=loadImage("4.jpeg");
//   i5=loadImage("5.jpeg");
//   i6=loadImage("6.jpeg");
//   i7=loadImage("7.jpeg");
//   i8=loadImage("8.jpeg");
//   i9=loadImage("9.jpeg");
//   i10=loadImage("10.jpeg");
//   i11=loadImage("11.jpeg");
//   i12=loadImage("12.jpeg");
//   i13=loadImage("13.jpeg");
//   i14=loadImage("14.jpeg");
//   i15=loadImage("15.jpeg");
//   i16=loadImage("16.jpeg");
//   i17=loadImage("17.jpeg");
//   i18=loadImage("18.jpeg");
//   i19=loadImage("19.jpeg");
//   i20=loadImage("20.jpeg");
//   i21=loadImage("21.jpeg");
//   i22=loadImage("22.jpeg");
//   i23=loadImage("23.jpeg");
//   i24=loadImage("24.jpeg");
//   i25=loadImage("25.jpeg");
//   i25=loadImage("27.jpeg");
//   i28=loadImage("28.jpeg");
//   i29=loadImage("29.jpeg");
//   i30=loadImage("30.jpeg");
//   i31=loadImage("31.jpeg");
//   i32=loadImage("32.jpeg");
//   i33=loadImage("33.jpeg");
//   i34=loadImage("34.jpeg");
//   i35=loadImage("35.jpeg");
//   i36=loadImage("36.jpeg");
//   i37=loadImage("37.jpeg");
//   i38=loadImage("38.jpeg");
//   i39=loadImage("39.jpeg");
//   i40=loadImage("40.jpeg");
//   i41=loadImage("41.jpeg");
//   i42=loadImage("42.jpeg");
//   i43=loadImage("43.jpeg");
//   i44=loadImage("44.jpeg");
//   i45=loadImage("45.jpeg");
//   i46=loadImage("46.jpeg");
//   i47=loadImage("47.jpeg");
//   i48=loadImage("48.jpeg");
//   i49=loadImage("49.jpeg");
//   i50=loadImage("50.jpeg");
//   i51=loadImage("51.jpeg");
//   i52=loadImage("52.jpeg");
//   i53=loadImage("53.jpeg");
//   i54=loadImage("54.jpeg");
//   i55=loadImage("55.jpeg");
//   i56=loadImage("56.jpeg");
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  birthday.loop();
  //spookySound.loop();
  tower = createSprite(300,300,1,1);
  tower.addImage("tower",towerImg);
  //tower.velocityY = 1;
  tower.scale=height
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
   ghost = createSprite(width/2,(height-50)/2,700,30);
  ghost.velocityX=-2;
  ghost.velocityY=2
  ghost.shapeColor="white";
  ghost.visible=false
  // ghost.scale = 0.3;
  //ghost.addImage("ghost", ghostImg);
  
  edges=createEdgeSprites();
}

function draw(){
  background(0);
  
  ghost.bounceOff(edges);
  //ghost.bounceOff(edges[1]);
 
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
//     if(keyDown("space")){
//       ghost.velocityY = -10;
//     }
    
//     ghost.velocityY = ghost.velocityY + 0.8
    
   // if(tower.y > 400){
   //   tower.y = 300
   //  }
   // spawnDoors();

    spawnHearts();
    
    //climbersGroup.collide(ghost);
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    // if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
    //   ghost.destroy();
    //   gameState = "end"
    // }
    
    drawSprites();
    stroke("White");
    textFont("Kristen ITC");
    strokeWeight(5);
    textSize(50);
    
    fill(20,Math.round(random(0,255)),Math.round(random(0,255)));
      
    
    text("Happy Birthday Samanvitha",ghost.x-390,ghost.y+15);
    
     
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

}


 function spawnHearts()
{
  if(frameCount%5===0){
    var heart = createSprite(Math.round(random(0,width)), Math.round(random(0,height)));
    
    heart.velocityY=-2
    heart.x=Math.round(random(10,width))
   rand = Math.round(random(1,4));
    
   heart.depth=1;
    
   switch (rand){
       case 1 :heart.addImage(h1);
       heart.scale=0.2
       break;
       
       case 2:heart.addImage(h2);
       heart.scale=0.2
       break;
       
       case 3:heart.addImage(h3);
       heart.scale=0.2
       break; 
       
       case 4:heart.addImage(h4);
       heart.scale=0.2
       break; 
       
       // case 5:heart.addImage(h5);
       // heart.scale=0.05
       // break; 
  }
    
}
 }


// function spawnDoors() {
//   //write code here to spawn the doors in the tower
//   if (frameCount % 300 === 0 && frameCount>1000) {
//     var pics = createSprite(200, -50);
    
//    pics.x = Math.round(random(10,400));
   
//     rand=rand+1;
//    switch (rand){
//        case 1 :pics.addImage(i1);
//        break;
       
//        case 2:pics.addImage(i2);
//        break;
       
//        case 3:pics.addImage(i3);
//        break;
       
//        case 4:pics.addImage(i4);
//        break;
       
//        case 5:pics.addImage(i5);
//        break;
       
//        case 6:pics.addImage(i6);
//        break;
       
//        case 7:pics.addImage(i7);
//        break;
       
//        case 8:pics.addImage(i8);
//        break;
       
       
//        case 9:pics.addImage(i9);
//        break;
       
//        case 10:pics.addImage(i10);
//        break;
       
//        case 11:pics.addImage(i11);
//        break;
       
//        case 12:pics.addImage(i12);
//        break;
       
//        case 13:pics.addImage(i13);
//        break;
//        case 14:pics.addImage(i14);
//        break;
       
//        case 15:pics.addImage(i15);
//        break;
       
//        case 16:pics.addImage(i16);
//        break;
       
//        case 17:pics.addImage(i17);
//        break;
       
//        case 18:pics.addImage(i18);
//        break;
       
//        case 19:pics.addImage(i19);
//        break;
       
//        case 20:pics.addImage(i20);
//        break;
//        case 21:pics.addImage(i21);
//        break;
       
//        case 22:pics.addImage(i22);
//        break;
       
//        case 23:pics.addImage(i23);
//        break;
       
//        case 24:pics.addImage(i24);
//        break;
       
//        case 25:pics.addImage(i25);
//        break;
       
//        case 26:pics.addImage(i26);
//        break;
       
//        case 27:pics.addImage(i27);
//        break;
       
//        case 28:pics.addImage(i28);
//        break;
       
//        case 29:pics.addImage(i29);
//        break;
       
//        case 30:pics.addImage(i30);
//        break;
       
//        case 31:pics.addImage(i31);
//        break;
       
//        case 32 :pics.addImage(i32);
//        break;
       
//        case 33:pics.addImage(i33);
//        break;
       
//        case 34:pics.addImage(i34);
//        break;
       
//        case 35:pics.addImage(i35);
//        break;
       
//        case 36:pics.addImage(i36);
//        break;
       
//        case 37:pics.addImage(i37);
//        break;
       
//        case 38:pics.addImage(i38);
//        break;
       
//        case 39:pics.addImage(i39);
//        break;
       
//        case 40:pics.addImage(i40);
//        break;
       
//        case 41:pics.addImage(i41);
//        break;
       
//        case 42:pics.addImage(i42);
//        break;
       
//        case 43:pics.addImage(i43);
//        break;
       
//        case 44:pics.addImage(i44);
//        break;
       
//        case 45:pics.addImage(i45);
//        break;
       
//        case 46:pics.addImage(i46);
//        break;
       
//        case 47:pics.addImage(i47);
//        break;
       
//        case 48:pics.addImage(i48);
//        break;
       
//        case 49:pics.addImage(i49);
//        break;
       
//        case 50:pics.addImage(i50);
//        break;
       
//        case 51:pics.addImage(i51);
//        break;
       
//        case 52:pics.addImage(i52);
//        break;
       
//        case 53:pics.addImage(i53);
//        break;
       
//        case 54:pics.addImage(i54);
//        break;
       
//        v
//    }
   
//     //climber.addImage(climberImg);
    
//   pics.velocityY = 1;
    
    
    
// //     ghost.depth = pics.depth;
// //     ghost.depth +=1;
   
//     //assign lifetime to the variable
//     pics.lifetime = 800;
   
    
//     //add each door to the group
//     doorsGroup.add(pics);
   
//   }
//}

