class Car {
  constructor(x,y,ctx){
    this.position = {x,y}
    this.carWith = 50;
    this.carHeight = 80;
    this.ctx = ctx;
  }
  _drawCar(){
    this.ctx.drawImage(carImage,this.position.x,this.position.y,this.carWith,this.carHeight)
  //meter el coche y el calculo para ponerlo en medio en cualquier tipo de pantalla (canvasWidth/2,canvasHeight, el tamaño del coche)
  }
  goRight (){
    if(true){
      this.position.x += 10;
    }
  }

  goLeft (){
    if(true){
     this.position.x -= 10;
    }
  }
  
  goUp (){
    if(this.position.y >= 0){
     this.position.y -= 10;
    }
  }
  goDown (){
    if(this.position.y <= 500){
      //substituir 500 por canvaHeigth
     this.position.y += 10;
    }
  }
  collidesWith(pasarPosicionM){

  }
  stop(){

  }
}
