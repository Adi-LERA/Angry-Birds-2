class Log extends BaseClass {
    constructor(x, y, height, angle) {
super (x,y,width,height);
this.image=loadImage ("sprite/wood2.png")
Matter.Body.setAngle(this.body, angle);
}
  
    display(){

      super.display ();

      }
    }