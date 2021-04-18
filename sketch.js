const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var platform;
var  slingShot;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18
var box19,box20,box21,box22,box23,box24,box25

var polygon
var poly;
var slingShot;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    background("black")

    
    engine = Engine.create();
    world = engine.world;

   

    ground = new Ground(320,380,2000,10);
    platform = new Ground(880, 250, 170, 10);
    ground = new Ground(500,380,250,10)

    box1 = new Box(410,355,30,40);
   
    box2 = new Box(440,355,30,40);
    box3 = new Box(470,355,30,40);
    box4 = new Box(500,355,30,40);
    
    box5 = new Box(530,355,30,40);
    box6 = new Box(560,355,30,40);
    box7 = new Box(590,355,30,40);
    box8 = new Box(440,315,30,40);
    box9 = new Box(470,315,30,40);
    box10 = new Box(500,315,30,40);
    box11 = new Box(530,315,30,40);
    box12= new Box(560,315,30,40);
    box13= new Box(470,275,30,40);
    box14= new Box(500,275,30,40);
    box15= new Box(530,275,30,40);
    box16= new Box(500,235,30,40);
    box17= new Box(835,225,30,40);
    box18= new Box(865,225,30,40);
    box19= new Box(895,225,30,40);
    box20= new Box(925,225,30,40);
    box21= new Box(955,225,30,40);
    box22= new Box(865,190,30,40);
    box23= new Box(895,190,30,40);
    box24= new Box(880,160,30,40);
    box25= new Box(885,225,30,40);

     polygon = new Polygon(100,100)

    
    slingshot = new SlingShot(this.polygon,{x:200, y:50});
   
   
}

function draw(){
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    slingShot.display();
    
    
    platform.display();
    slingShot.display();
    
}

function mouseDragged(){
    
}


function mouseReleased(){
    
}