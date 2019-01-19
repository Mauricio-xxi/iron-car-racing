class Car {
  constructor(x,y,ctx){
    this.position = {x,y}
    this.carWith = 50;
    this.carHeight = 80;
    this.ctx = ctx;
  }
  _drawCar(){
    this.ctx.drawImage(carImage,this.position.x,this.position.y,this.carWith,this.carHeight)
   }

  goRight (){
    if(this.position.x < 350){
      this.position.x += 15;
    }
  }

  goLeft (){
    if(this.position.x > 80){
     this.position.x -= 15;
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
}
