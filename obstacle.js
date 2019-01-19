class Obstacle {
  constructor(x,y,ctx){
    this.position = {x,y}
    this.obstacleWith = 50;
    this.obstacleHeight = 80;
    this.velocity = 10 ;
    this.ctx = ctx;
  }

_drawObstacle(){
  this.ctx.drawImage(carObstacle,this.position.x,this.position.y,this.obstacleWith,this.obstacleHeight)
}
_acceleration(){
  this.velocity +=10;
}
_desacceleration(){
  console.log(this.velocity)
  if(this.velocity > 11){
  this.velocity -=10;}
}

_randomNumber(){
  console.log(Math.random());
}

_changesY(){
  let valor = this._randomNumber();
  if (valor < 0.33){ return this.position.y = -240}
 else if (valor > 0.66){return this.position.y =  -160}
 else {return this.position.y = -80}
}
_changeRoad(){
  let valor = Math.random();
 if (valor < 0.25){ this.position.x = 150; this.position.y =this._changesY()}
 else if (valor < 0.50){this.position.x = 250;this.position.y = this._changesY()}
 else if (valor < 0.80){this.position.x = 300;this.position.y = this._changesY()}
 else {this.position.x = 200 ;this.position.y = this._changesY()}
}
_move(){
  if(this.position.y < 500){
  return this.position.y += this.velocity;
  }
  else return this._changeRoad();
}


}