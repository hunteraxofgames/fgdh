class Cannonball {
    constructor (x,y){
        var options ={
            isStatic:true 
        }
        this.r =30 
        this.image = loadImage ("./assets/cannonball.png")
        this.body =Bodies.circle  (x,y,this.r,options)
        World.add(world,this.body)
    }
shoot (){
    var newAngle = cannon.angle-28
    newAngle=newAngle * (3.14/180)
    var velocity = p5.Vector.fromAngle (newAngle)
    velocity.mult (0.05)
    Matter.Body.SetStatic (this.body,false)
    Matter.Body.setVelocity (this.body,{x:velocity.x*(180/14),y:velocity.y*(180/14)})

}
    show () {
        var pos = this.body.position
        push ()
        imageMode(CENTER)
        image(this.image,pos.x.pos.y,this.r,this.r)
        pop ()
    }
}