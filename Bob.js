class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          density:0.8,
          restitution:1.0,
          friction:0
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("purple");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);

    }
  }