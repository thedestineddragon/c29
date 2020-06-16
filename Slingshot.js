class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.catapult1=loadImage("sprites/sling1.png");
        this.catapult2=loadImage("sprites/sling2.png");
        this.rubber=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<200){
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y-50);
            line(pointA.x-25,pointA.y,pointB.x-20,pointB.y-50);
            image(this.rubber,pointA.x-25,pointA.y,15,20);
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x+20, pointB.y-50);
                line(pointA.x+25,pointA.y,pointB.x-20,pointB.y-50);
                image(this.rubber,pointA.x+25,pointA.y,15,20);
                            }
        }
        image(this.catapult1,200,20);
        image(this.catapult2,175,20);

    }
    
}