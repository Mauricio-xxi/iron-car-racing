document.onload = function(){
  const canvas = document.getElementById('gameCar');
  const ctx = canvas.getContext('2d');
  const widthCell = 5;
  const canvaWidth = 500 ;
  const canvaHeight = 500;

  const game = new Game({
    //pasar objeto a game donde lleve la posición del coche 
    stage: new Stage(0,0,ctx),
    car : new Car((canvaWidth/2)-25,canvaHeight-50,ctx),
    obstacle : new Obstacle((canvaWidth/2)-25,canvaHeight-250,ctx),
    ctx:ctx
    });
    game.start();
  // game._drawBoard();
  // game._drawCar();
  // game.assingControlKeys();
  console.log(document.onkeydown)
}();

