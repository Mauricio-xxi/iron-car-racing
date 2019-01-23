document.onload = function(){
  const canvas = document.getElementById('gameCar');
  const ctx = canvas.getContext('2d');
  const widthCell = 5;
  const canvaWidth = 500 ;
  const canvaHeight = 500;

  const game = new Game({
    //pasar objeto a game donde lleve la posición del coche 
    stage: new Stage(0,0,ctx),
    car : new Car((canvaWidth/2)-25,canvaHeight-80,ctx),
    obstacle : new Obstacle((canvaWidth/2),0,ctx),
    obstacle2 : new Obstacle((canvaWidth/3),-160,ctx),
    obstacle3 : new Obstacle((canvaWidth/5),-240,ctx),
    ctx:ctx
    });
console.log(canvaWidth/2)
console.log(canvaWidth/3)
console.log(canvaWidth/5)
document.getElementById("button-start").onclick = function() {game.start()};
document.getElementById("button-continue").onclick = function() {game.continue()};
}();

