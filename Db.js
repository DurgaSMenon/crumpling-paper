class Db{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':0.5,
            'density':0.5,
            isStatic:true
        }
          this.x=x
          this.y=y
          this.width=width
          this.height=height

          this.body=Bodies.rectangle(x,y,width,height,options)
          World.add(world,this.body)
    }
          display(){
           
          var pos=this.body.position
          push()
          translate(pos.x,pos.y)
          rectMode(CENTER)
          strokeWeight(4);
          stroke("red")
          fill("red")
          rect(0,0,this.width,this.height)
          pop()
          }
}