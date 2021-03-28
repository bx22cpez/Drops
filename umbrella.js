class Umbrella {
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            isStatic: true
            
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("man.png");
        
      }
      
      display(){
        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}