/*class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      //this.image = loadImage("sprites/bird.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }*/

  class Polygon {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false,
          'friction': 0.2,
          'density': 1

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

  