IronCar Racing 

## Description

Mini game based on a car that moves between three lanes, the car has to avoid the obstacles that stand in its way.
The goal is to travel as much as possible without crashing.


## MVP (CANVAS)

The car is a rectangular object.
The car moves lane changes when you press a direction key.
The road is three lanes, the obstacles are appearing in a random way.
When the car hits an obstacle it loses and a final screen appears.


## Backlog

The car can accelerate and brake.
The obstacles can slow down or accelerate.
Include Music
Count the advanced meters (Score).
You can choose between three cars with different skills.
Win lives and with each impact that the car is deformed.
The map can rotate.



## Data structure

Class Game(){
  this.car
  this.map
  this.obstacle
  this.metersCount
    drawCar()
    drawMap()
    start()
    assingControlsKeys()
    pause()
    end()
    colisionCar()
    mapMovement()
}

Class Car(){
  this.posX
  this.posY
    moveCar()
    acelerateCar()
}

Class Obstacle(){
  this.posX
  this.posY
    createObst()
    acelerateObst()
}

Class Map(){


}



## States y States Transitions

- splashScreen
  start button
- Choose your car (optional backlog)
  choose between 3 cars whit different skills
- gameScreen
  Canvas
- gameoverScreen
  game over message & restart


## Task
Task definition in order of priority

Create the file structure
Create the constructors of the Classes
Create a square
Draw a square on the srceen
Create the ground
Draw the ground on the screen
Place correctly the elements
Make the square moves
Create an obstacle
Draw the obstacle correctly
Make the ground + the obstacle move at the same time
Create a collision
Take off a life if there is a collision
Restart the map if there is a collision
Game over screen if it has a collision
Make a meters counter
Create start page
Create Game ver page

## Links

### Trello

[Link url](https://trello.com/b/NP7laq7b/ironcar-racing)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides

[Link Slides.com](https://slides.com/alvarocamacho/ironcar-racing#/)# iron-car-racing
# iron-car-racing
# iron-car-racing
# iron-car-racing
