class Game {
  constructor(options){
    this.stage = options.stage;
    this.car = options.car;
    this.obstacle = options.obstacle;
    this.ctx = options.ctx;
    this.obstacle2 = options.obstacle2;
    this.obstacle3 = options.obstacle3;
    this.puntaje = this.obstacle.velocity;
  }
 _drawPuntaje(){
  this.ctx.font = "1.5em Arial";
  this.ctx.fillStyle = "#FFFFFF";
  this.ctx.fillText(`Score: ${this.puntaje}`,20,25)
 }
_drawBoard(){
    this.stage._drawStage();
    this.car._drawCar();
    this.obstacle._drawObstacle();
    this._drawPuntaje();
    // this.obstacle2._drawObstacle();
    // this.obstacle3._drawObstacle();
  }
start(){
  document.getElementById("gameCar").style.display = "block"
  this.assingControlKeys();
  this.intervalGame = setInterval(this._update.bind(this),60)
  //this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  document.getElementById("startScreen").style.display = "none"
  document.getElementById("header").style.display = "none"
}
assingControlKeys(){
  document.onkeydown = (e) => {
    switch (e.keyCode){
      case 37:this.car.goLeft();
        break;
      case 39: this.car.goRight();
        break;
      case 38: this.car.goUp();
        break;
      case 40: this.car.goDown();
        break;
      case 32: this.obstacle._acceleration();
                this.stage._accelerationStage();
    }
  }

}
_controlCollision(){
  if (this.car.position.x < this.obstacle.position.x + this.obstacle.obstacleWith &&
    this.car.position.x + this.car.carWith > this.obstacle.position.x &&
    this.car.position.y < this.obstacle.position.y + this.obstacle.obstacleHeight &&
    this.car.carHeight + this.car.position.y > this.obstacle.position.y) {
     this.gameOver();
 }
}


_update(){
  this.clear();
  this._drawBoard();
//meto esta funcion para probar, recuerda moverla y crear una funcion gestora del movimiento de los obstaculos manolo
  this.obstacle._move();
  this.puntaje++;
  // this.obstacle2._move();
  // this.obstacle3._move();
  this.stage._parallax();
  this._controlCollision();
}
clear(){
  this.ctx.clearRect(0, 0,500,500);
}
gameOver(){
  let gameOverScreen = document.getElementById("gameOverScreen").style.display = "flex"
  window.clearInterval(this.intervalGame)
}
}
