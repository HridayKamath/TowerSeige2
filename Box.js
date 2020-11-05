class Box {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false,
          'friction': 0.2,
          'density': 1

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 20;
      this.height = 50;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      //rectMode(CENTER);
      //fill("skyblue");
      //rect(pos.x, pos.y, this.width, this.height);
//console.log(this.body.speed);

if(this.body.speed<1 && this.Visibility>0){
  
  var pos =this.body.position;
  rectMode(CENTER);
  fill("skyblue");
  rect(pos.x, pos.y, this.width, this.height); 
    
  
  }

  
  else{
    

    push();
    this.Visibility-=15;
    tint(255,this.Visibility);
    rectMode(CENTER);
    
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();

    //if(this.Visibility<0){
      
      World.remove(world,this.body);
      
    //}

  }

  
     
    }
    
  };





  
  
  
  
  