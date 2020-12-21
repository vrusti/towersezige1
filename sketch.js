const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var polygonImg,slingShot;
 
var ground1,ground2,ground3;


function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
/*ground =Bodies.rectangle(600,height,1200,20,{isStatic:true});
    World.add(world,ground);*/
   ground1 = new Ground(600,height,1200,20);
   ground2 = new Ground(390,300,250,10);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
    block9 = new Block(390,155,30,40);
   
    stone=Bodies.circle(50,250,20);
    World.add(world,stone);
    slingshot = new SlingShot(stone,{x:150,y:200});
    
}

function draw(){
    background(255);
    Engine.update(engine);
    /*strokeWeight(4);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,1200,20);*/
    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display(); 
    block9.display();
    
    imageMode(CENTER)
    image(polygonImg,stone.position.x,stone.position.y,40,40);
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

    


    
   
    



