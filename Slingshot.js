class Slingshot{
    constructor(body1,body2){
        var options = {
            bodyA: body1,
            bodyB: body2,
            length: 3,
            stiffness: 0.65,
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}