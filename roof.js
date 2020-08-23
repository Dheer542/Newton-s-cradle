class ground{
constructor(x,y,width,height){
var options={
isStatic:true,
density:0.9

}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
World.add(world, this.body);
var height = this.body.height;


}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("red");
    pop();
  }



}