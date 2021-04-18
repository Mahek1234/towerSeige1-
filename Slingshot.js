class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.polygon = addImage(polygon.png)
        World.add(world,this.sling)
        
    }

    

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            ImageMode(CENTER);
            image(polygon,polygon.position.x,polygon.position.y,40,40);
        
    }
    
}