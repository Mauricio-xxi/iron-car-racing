class Obstacle {
  constructor(x,y,ctx){
    this.position = {x,y}
    this.obstacleWith = 50;
    this.obstacleHeight = 50;
    this.velocity = 10 ;
    this.ctx = ctx;
  }

_drawObstacle(){
  this.ctx.fillStyle = "black"
  this.ctx.fillRect(this.position.x,this.position.y,this.obstacleWith,this.obstacleHeight)
}
_acceleration(){
  this.velocity += 1;
}
_desacceleration(){
  if(this.velocity > 2)
  this.velocity -= 1;
}
_randomNumber(){
  console.log(Math.random());

}
_changeRoad(){
  let valor = Math.random();
 if (valor < 0.33){ this.position.x = 175 ; this.position.y = 250}
 else if (valor > 0.66){this.position.x = 275;this.position.y = 250}
 else {this.position.x = 225 ;this.position.y = 250}
}
_move(){
  if(this.position.y < 500){
  return this.position.y += this.velocity;
  }
  else return this._changeRoad();
}


}