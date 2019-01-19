class Stage  {
  constructor(x,y,ctx){
    this.position = {x,y};
    this.ctx = ctx;
    this.velocity = 10;
    this.backgroundY = -3200;
    this.maxSpeed = 100;
    this.minSpeed = 10;
  }
  _accelerationStage(){
    if(this.velocity < this.maxSpeed){
      this.velocity += 10;}
  }   
  _brake(){
   if(this.velocity > this.minSpeed){
     this.velocity -= 10;}
  }
  _parallax(){
    if(this.backgroundY > -20){
      this.backgroundY+= this.velocity;
      return this.backgroundY = -3500;
    }else{
  return (this.backgroundY+=this.velocity)
  }
}
  _drawStage(){
    this.ctx.drawImage(background, 0, this.backgroundY,500,4000);
  
  }
}