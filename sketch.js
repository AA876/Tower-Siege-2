const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,362,30,30)
    box2 = new Box(631,362,30,30)
    box3 = new Box(662,362,30,30)

    box4 = new Box(615,300+31,30,30)
    box5 = new Box(646,300+31,30,30)

    box6 = new Box(631,300,30,30)

    stone = new Stone(170,320,10)
    
    ground = new Ground(1200,height,2000,30)

    slingshot = new Slingshot(stone.body,{x:200, y:50});

    Engine.run(engine)
}

function draw(){
    Engine.update(engine);
    background(255)
    
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()

    stone.display()

    slingshot.display()

    ground.display()

    drawSprites()
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if(keyCode===32){
slingshot.attach(stone.body)
 } 
}