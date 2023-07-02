//Set global variable that would contain the position, velocity and the html element "ball"


var position = 0;
var velocity = 100;
var ball = document.getElementById('ball');
var positionX = 0;
var reverse = true;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;

  //positionX = positionX + velocity;
  //ball.style.left = positionX + 'px';

  if(reverse === false){
    positionX = positionX + velocity;
    ball.style.left = positionX + 'px';
  } else if(reverse === true){
    positionX = positionX - velocity;
    ball.style.left = positionX + 'px';
  }

  if(positionX > Xmax || positionX === Xmin){
    reverse = true;
  }
 
 
 
  /*if(positionX >=Xmax || positionX <=Xmin){
    velocity = velocity * -1;
  }*/

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
