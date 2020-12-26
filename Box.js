class Box {
  constructor(x, y, width, color) {
    this.body = Bodies.rectangle(x, y, width, width);
    this.width = width;
    this.color = color;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    fill(this.color);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    rect(0, 0, this.width, this.width);
    pop();
  }
};
