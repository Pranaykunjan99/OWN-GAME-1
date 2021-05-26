/*class Hero
{
constructor(x,y,radius){
    var options= {
        isStatic:false,
        restitution:0.5,
        friction:0.3,
        density:1.5,
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.image=loadImage("HERO1.webp")
    this.radius=radius
    World.add(world,this.body)
}
     display(){
        
        var pos=this.body.position;
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius,this.radius)
    }
}*/