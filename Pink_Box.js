class Pink_Box{
    constructor(x, y, width, height){
    var options = {
    isStatic:false
    }
    this.Visibility=255;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.width,this.height, options)
    World.add(world, this.body);
    }
    display(){
        if(this.body.speed<3){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y)
    rectMode(CENTER);
    fill(255,192,203);
    rect(0,0,this.width, this.height)
    pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visiblity);
            pop();
        }
           }
        }
        
    
        
    
    
    