class paperBall {
    constructor(x, y, radius) {
        var options ={
            isStatic: false,
            restitution: 0.3,
            density:1.2,
            friction:0.5
        
        }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      this.x= x;
      this.y = y;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(1);
      stroke("grey");
      fill("white");
      rectMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
