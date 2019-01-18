class Stage  {
  constructor(x,y,ctx){
    this.position = {x,y};
    this.ctx = ctx;
    this.velocity = 10;
    this.backgroundY = -3200;
  }
  _accelerationStage(){
  this.velocity++
  }   
  _brake(){
    this.velocity--
  }
  _parallax(){
    if(this.backgroundY > -20){
      this.backgroundY+= this.velocity;
      return this.backgroundY = -3200;
    }else{
  return (this.backgroundY+=this.velocity)
  }
}
  _drawStage(){
    this.ctx.drawImage(background, 0, this.backgroundY,500,4000);
  
  }
}