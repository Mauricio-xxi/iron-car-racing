class Game {
  constructor(options){
    this.stage = options.stage;
    this.car = options.car;
    this.obstacle = options.obstacle;
    this.ctx = options.ctx;
    this.obstacle2 = options.obstacle2;
    this.obstacle3 = options.obstacle3;
 

  }

_drawBoard(){
    this.stage._drawStage();
    this.car._drawCar();
    this.obstacle._drawObstacle();
    this.obstacle2._drawObstacle();
    this.obstacle3._drawObstacle();
  }
start(){
console.log("aquillega")
  document.getElementById("gameCar").style.display = "block"
  //quitar las funciones de aquí y meterlas en _drawBoard en orden, y llamar solo a drawBoard
  //this._drawBoard();
  this.assingControlKeys();
  this.intervalGame = setInterval(this._update.bind(this),60)
  //this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  //this.intervale = this.window.requestAnimationFrame(this._update)
// al darle al botón de start se debe llamar a las funciones basicas, asignar teclas, 
//llama a window.requestAnimationFrame(this._update)
  document.getElementById("startScreen").style.display = "none"
}
assingControlKeys(){
  document.onkeydown = (e) => {
    switch (e.keyCode){
      case 37:this.car.goLeft();
        break;
      case 39: this.car.goRight();
        break;
      case 32 , 38: this.car.goUp();
        break;
      case 40: this.car.goDown();
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
  //sacar de aqui las funciones y pasarle drawBoard
  this._drawBoard();
  // this.car._drawCar();
  // this.obstacle._drawObstacle();
//meto esta funcion para probar, recuerda moverla y crear una funcion gestora del movimiento de los obstaculos manolo
  this.obstacle._move();
  this.obstacle2._move();
  this.obstacle3._move();

  this._controlCollision();


  // limpia
  // dibuja 
  // pausa 
  
}
clear(){
  this.ctx.clearRect(0, 0,500,500);
}
gameOver(){
  let gameOverScreen = document.getElementById("gameOverScreen").style.display = "flex"
  window.clearInterval(this.intervalGame)

}

}
