class Car {
  constructor(x,y,ctx){
    this.position = {x,y}
    this.carWith = 50;
    this.carHeight = 50;
    this.ctx = ctx;
  }
  _drawCar(){
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(this.position.x,this.position.y,this.carWith,this.carHeight)
  //meter el coche y el calculo para ponerlo en medio en cualquier tipo de pantalla (canvasWidth/2,canvasHeight, el tamaño del coche)
  }
  goRight (){
    if(this.position.x !=275){
      this.position.x += 50;
    }
  }

  goLeft (){
    if(this.position.x != 175){
     this.position.x -= 50;
    }
  }
  
  goUp (){
    if(this.position.y >= 0){
     this.position.x -= 50;
    }
  }
    goDown (){
    if(this.position.y <= 500){
      //substituir 500 por canvaHeigth
     this.position.y += 50;
    }
  }
  collidesWith(pasarPosicionM){

  }
  stop(){

  }
}
