//Create variables here

var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage ("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(1000, 1000);
  dog=createSprite(250,250,50,50);
  dog.addImage("image1",dogImg);
  dog.addImage("image2",happyDog); 
  database = firebase.database();
  dog.scale=0.5
  foodStock=database.ref('food');
  foodStock.on("value",readStock); 

}


function draw() {  

  background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.changeImage("image2",happyDog);
}
  drawSprites();
  //add styles here
text("print food from the data base",200,400);
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({

    Food:x
  })

}