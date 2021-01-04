class Dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body1 = Bodies.rectangle(600,640,200,15,options);
      World.add(world, this.body1); 
      this.body2 = Bodies.rectangle(507.5,547.5,15,200,options)
      World.add(world, this.body2);
      this.body3 = Bodies.rectangle(692.5,547.5,15,200,options);
      World.add(world, this.body3);
      this.width = width;
      this.height = height;

      this.image = loadImage("dustbingreen.png");

      
    }
    display(){
      imageMode(CENTER);
      image(this.image, 600, 547, 200, 200);
      fill("white");
      //rectMode(CENTER);  
      //rect(600,640,200,15); 
      //rect(507.5,547.5,15,200)
      //rect(692.5,547.5,15,200);
    }
  };