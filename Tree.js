class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width = 450;
        this.height = 600;

        this.image = loadImage("sprites/tree.png");
        this.body  = Bodies.rectangle(x,y,450,600,{isStatic:true});

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y+10);
        imageMode (CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
        pop ();
    }


    }








