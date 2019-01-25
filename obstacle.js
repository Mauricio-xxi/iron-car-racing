class Obstacle {
  constructor(x,y,ctx){
    this.position = {x,y}
    this.obstacleWith = 50;
    this.obstacleHeight = 80;
    this.velocity = 10 ;
    this.ctx = ctx;
  }
 _randomNumber(){
  Math.random();
 }
  
_drawObstacle(){
  this.ctx.drawImage(carObstacle2,this.position.x,this.position.y,this.obstacleWith+9,this.obstacleHeight+9)
}
_acceleration(){
  this.velocity +=10;
}
_desacceleration(){
  console.log(this.velocity)
  if(this.velocity > 11){
  this.velocity -=10;}
}

_changesY(){
  let valor = this._randomNumber();
  if (valor < 0.5){ return this.position.y = -240}
 else{return this.position.y =  -160}
}
_changeRoad(){
  let valor = Math.random();
 if (valor < 0.25){ this.position.x = 110; this.position.y =this._changesY()}
 else if (valor < 0.50){this.position.x = 180;this.position.y = this._changesY()}
 else if (valor < 0.80){this.position.x = 260;this.position.y = this._changesY()}
 else {this.position.x = 340;this.position.y = this._changesY()}
}
_move(){
  if(this.position.y < 500){
  return this.position.y += this.velocity;
  }
  else return this._changeRoad();
}


}