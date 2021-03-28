const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var raindrops = [];

//var rain0, rain2, rain3, rain3, rain4, rain5, rain6, rain7, rain8;

var maxDrops = 100;

var man, manImage;

var block;

var thunder, thunderImage;

function preload(){
    manImage = loadImage("man.png");

    thunderImage = loadImage("po.png");
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    rain = new Drops(200,100,20,20);
    fill("blue");
    rain2 = new Drops(100,100,20,20);
    fill("blue");
    rain3 = new Drops(125,100,20,20);
    fill("blue");
    rain4 = new Drops(325,100,20,20);
    fill("blue");
    rain5 = new Drops(300,100,20,20);
    fill("blue");
    rain6 = new Drops(225,100,20,20);
    fill("blue");
    rain7 = new Drops(25,100,20,20);
    fill("blue");
    rain8 = new Drops(380,100,20,20);
    fill("blue");

    man = new Umbrella(200,700,50,50);

    var block = createSprite(200,700,50,50);

    thunder = createSprite(200,200);
    thunder.addImage(thunderImage);
    //thunder.scale(0.6);
}

function draw(){
    background("midnightblue");

    
    if(frameCount % 1 === 0){
        var rain = new Drops(random(0, windowWidth), -100,10);
        raindrops.push(rain);
      
    
        rand = Math.round(random(1,4));
    if (frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch (rand){
            case 1: thunder.addImage(thunderImage);

            case 2: thunder.addImage(thunderImage);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6);
    }
    
    
   
    
    
    man.display();
    thunder.display();
    
    rain.display();
    rain2.display();
    rain3.display();
    rain4.display();
    rain5.display();
    rain6.display();
    rain7.display();
    rain8.display();
    
    }
}   