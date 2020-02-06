const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//BASICS

// if(canvas.getContext){
  // sprawdzanie wsparcia
// }

// canvas.width = 200;
// canvas.width = window.innerWidth;

// fillRect()
// ctx.fillStyle = 'skyblue';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'coral';
// ctx.fillRect(200, 20, 150, 100);

// strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// clearRect()
// ctx.clearRect(25,25, 100, 50);

// fillText()
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('hello world', 400, 50);

// strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('hello world', 400, 100);


// PATHS

// triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = 'coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// arcs (circles)
// ctx.beginPath();
// ctx.arc(400, 400, 40, 0, Math.PI * 2, true);

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// draw head
// ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
//move to mouth
// ctx.moveTo(centerX+50, centerY);
//draw the mouth
// ctx.arc(centerX, centerY, 50, 0, Math.PI, false);
//move to left eye
// ctx.moveTo(centerX-30, centerY-40);
//draw left eye
// ctx.arc(centerX-40, centerY-40, 10, 0, Math.PI * 2);
//move to right eye
// ctx.moveTo(centerX+50, centerY-40);
//draw right eye
// ctx.arc(centerX+40, centerY-40, 10, 0, Math.PI * 2);

// quadratic curve - speach bubble
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);

// ctx.stroke();


// ANIMATIONs
// 1

// const circle = {
//   x: 200,
//   y: 200,
//   size: 30,
//   dx: 5,
//   dy: 4,
// };

// function drawCircle(){
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = 'purple';
//   ctx.fill();
// }

// function update(){
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   drawCircle();

//   // change position
//   circle.x += circle.dx;
//   circle.y += circle.dy;

//   //detect side walls
//   if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0 ){
//     circle.dx *= -1;
//     // circle.dy *= -1;
//   }
//   // detect top and bottom walls
//   if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0 ){
//     circle.dy *= -1;
//     // circle.dy *= -1;
//   }

//   requestAnimationFrame(update);
// }

// update();


// 2 - character

const image = document.getElementById('source');

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 7,
  dx: 0,
  dy: 0,
};

function drawPlayer(){
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

function newPosition(){
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls(){
  // left wall
  if(player.x < 0){
    player.x = 0;
  }

  // right
  if(player.x + player.w > canvas.width){
    player.x = canvas.width - player.w;
  }

  // top
  if(player.y < 0){
    player.y = 0;
  }

  // bottom
  if(player.y + player.h > canvas.height){
    player.y = canvas.height - player.h;
  }
}

function update(){

  clear();
  drawPlayer();
  newPosition();

  requestAnimationFrame(update);
}

function moveUp(){
  player.dy = -player.speed;
}
function moveDown(){
  player.dy = player.speed;
}
function moveRight(){
  player.dx = player.speed;
}
function moveLeft(){
  player.dx = -player.speed;
}

function keyDown(e){
  // console.log(e.key);
  if(e.key === 'ArrowRight' || e.key ==='Right'){
    moveRight();
  } else if(e.key === 'ArrowLeft' || e.key ==='Left'){
    moveLeft();
  } else if(e.key === 'ArrowUp' || e.key ==='Up'){
    moveUp();
  } else if(e.key === 'ArrowDown' || e.key ==='Down'){
    moveDown();
  }
}

function keyUp(e){
  if(
    e.key === 'ArrowRight' || 
    e.key ==='Right' || 
    e.key === 'ArrowLeft' || 
    e.key ==='Left' || 
    e.key === 'ArrowUp' || 
    e.key ==='Up' || 
    e.key === 'ArrowDown' || 
    e.key ==='Down'){
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);