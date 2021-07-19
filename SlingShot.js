class SlingShot{
constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length:20
    }
    this.pointB = pointB
    this.SlingShot = Constraint.create(options);
    //world.add(world, this.SlingShot);
}
fly(){
    this.SlingShot.bodyA = null;
}
display(){
    if(this.sling.bodyA){
        var pointA = this.SlingShot.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        fill("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}
}