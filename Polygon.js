class Polygon  {
        constructor(x, y){
          
          var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': false
        }
        this.polygon =Bodies.circle(50,200,20);
        this.polygon = addImage("polygon.png")     
              World.add(world, this.polygon);
              
              
            }
            display(){
                var angle = this.body.angle;
                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                imageMode(CENTER);
                image(this.image, 0, 0, this.width, this.height);
                pop();
                this.polygon.position.x = mouseX;
                this.polygon.position.y = mouseY;
                
              
            }
      
      
        
      
      }
      
     
     
 
  