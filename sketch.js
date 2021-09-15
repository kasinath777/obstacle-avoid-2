var car, carImg, track, trackImg, ground, groundImg, obstacle, obstacleImg;

function preload(){
carImg = loadImage("car1.png");
trackImg = loadImage("track.png");
obstacleImg = loadImage("wall.jpg");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
track = createSprite(800, 350);
track.addImage("avoid", trackImg);
track.scale = 1.2
car = createSprite(800, 700);
car.addImage("race", carImg);


}

function draw(){
background("white");

drawSprites();
}


//function spawnObstacles(){
//if(frameCount % 1000 === 0){
//obstacle = createSprite(400, 600);
//obstacle.addImage("wall", obstacleImg);
//}
//}