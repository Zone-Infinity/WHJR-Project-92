const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400, 400, 200, 10);
    ground2 = new Ground(650, 250, 200, 10);

    box111 = new Box(340, 380, 35, randomColor());
    box112 = new Box(370, 380, 35, randomColor());
    box113 = new Box(400, 380, 35, randomColor());
    box114 = new Box(430, 380, 35, randomColor());
    box115 = new Box(460, 380, 35, randomColor());
    
    box121 = new Box(347.5, 335, 35, randomColor());
    box122 = new Box(382.5, 335, 35, randomColor());
    box123 = new Box(417.5, 335, 35, randomColor());
    box124 = new Box(452.5, 335, 35, randomColor());
    
    box131 = new Box(365, 290, 35, randomColor())
    box132 = new Box(400, 290, 35, randomColor())
    box133 = new Box(435, 290, 35, randomColor())

    box141 = new Box(382.5, 245, 35, randomColor());
    box142 = new Box(417.5, 245, 35, randomColor());

    box151 = new Box(400, 200, 35, randomColor());

    box211 = new Box(590, 230, 35, randomColor());
    box212 = new Box(620, 230, 35, randomColor());
    box213 = new Box(650, 230, 35, randomColor());
    box214 = new Box(680, 230, 35, randomColor());
    box215 = new Box(710, 230, 35, randomColor());
    
    box221 = new Box(597.5, 185, 35, randomColor());
    box222 = new Box(632.5, 185, 35, randomColor());
    box223 = new Box(667.5, 185, 35, randomColor());
    box224 = new Box(702.5, 185, 35, randomColor());
    
    box231 = new Box(615, 140, 35, randomColor())
    box232 = new Box(650, 140, 35, randomColor())
    box233 = new Box(685, 140, 35, randomColor())

    box241 = new Box(632.5, 95, 35, randomColor());
    box242 = new Box(667.5, 95, 35, randomColor());

    box251 = new Box(650, 40, 35, randomColor());

    polygon = Bodies.polygon(100, 225, 6, 30, {
        density:1.2
    });

    slingshot = new SlingShot(polygon, {x:100, y:225});

    World.add(world, polygon);
}

function draw(){
    background("black")
    Engine.update(engine);
    strokeWeight(4);
    
    ground1.display();
    ground2.display();

    // ground 1 level 1
    box111.display();
    box112.display();
    box113.display();
    box114.display();
    box115.display();

    // ground 1 level 2
    box121.display();
    box122.display();
    box123.display();
    box124.display();

    // ground 1 level 3
    box131.display();
    box132.display();
    box133.display();

    // ground 1 level 4
    box141.display();
    box142.display();

    // ground 1 level 5
    box151.display();

    // ground 2 level 1
    box211.display();
    box212.display();
    box213.display();
    box214.display();
    box215.display();

    // ground 2 level 2
    box221.display();
    box222.display();
    box223.display();
    box224.display();

    // ground 2 level 3
    box231.display();
    box232.display();
    box233.display();

    // ground 2 level 4
    box241.display();
    box242.display();

    // ground 2 level 5
    box251.display();

    slingshot.display();

    var polpos = polygon.position;
    imageMode(CENTER);
    image(polygonImg, polpos.x, polpos.y, 30, 30)

    fill("white");
    text("X: " + mouseX + " Y: " + mouseY, 725, 15);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function randomColor(){
    return rgb(random(0,255),random(0,255),random(0,255));
}
