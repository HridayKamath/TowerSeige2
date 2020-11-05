const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "rest";



function setup(){
    var canvas = createCanvas(1100,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    stand1 = new Ground(390,500,200,15);
    
    //first stack
    //bottom row - 4th row
    //from left to right
    b1 = new Box(330,470,20,50);
    console.log(b1.body);
    b2 = new Box(350,470,20,50);
    b3 = new Box(370,470,20,50);
    b4 = new Box(390,470,20,50);
    b5 = new Box(410,470,20,50);
    b6 = new Box(430,470,20,50);
    b7 = new Box(450,470,20,50);

    //3rd row from above
    b8 = new Box(350,420,20,50);
    b9 = new Box(370,420,20,50);
    b10 = new Box(390,420,20,50);
    b11 = new Box(410,420,20,50);
    b12 = new Box(430,420,20,50);

    //2nd row from above
    b13 = new Box(370,370,20,50);
    b14 = new Box(390,370,20,50);
    b15 = new Box(410,370,20,50);

    //1st row from above
    b16 = new Box(390,320,20,50);

    
    stand2 = new Ground(740,250,200,15);

    //second stack
    //bottom row 
    b17 = new Box(700,220,20,50);
    b18 = new Box(720,220,20,50);
    b19 = new Box(740,220,20,50);
    b20 = new Box(760,220,20,50);
    b21 = new Box(780,220,20,50);

    //middle row
    b22 = new Box(720,170,20,50);
    b23 = new Box(740,170,20,50);
    b24 = new Box(760,170,20,50);

    //first row
    b25 = new Box(740,120,20,50);

    polygon = new Polygon(100,50,10,10);
    slingshot = new Slingshot(polygon.body,{x:200, y:50});
    

    
}

function draw(){
    background("white");
    Engine.update(engine);
 
    ground.display();
    stand1.display();

    

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();
    b15.display();

    b16.display();



    stand2.display();

    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    b22.display();
    b23.display();
    b24.display();

    b25.display();

    polygon.display();
    slingshot.display();

  /*detectCollision(polygon,b1);
  detectCollision(polygon,b2);
  detectCollision(polygon,b3);
  detectCollision(polygon,b4);
  detectCollision(polygon,b5);
  detectCollision(polygon,b6);
  detectCollision(polygon,b7);
  detectCollision(polygon,b8);    */

    
}

function mouseDragged(){
    if(gameState !== "launch"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        }
    }

function mouseReleased(){
    slingshot.fly();
    gameState = "launch";
}

function detectCollision(polygon,b1){

   b1BodyPosition = b1.body.position;
    polygonBodyPosition = polygon.body.position;
    
    var distance = dist(polygonBodyPosition.x, polygonBodyPosition.y, b1BodyPosition.x, b1BodyPosition.y);
    if(distance<=b1.r+polygon.r)
    {
        Matter.Body.setStatic(b1.body,false);
    }
    
    
    }
    