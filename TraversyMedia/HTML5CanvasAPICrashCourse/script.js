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
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle = 'coral';
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();

// rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = 'teal';
ctx.fill();

// arcs (circles)
ctx.beginPath();
// ctx.arc(400, 400, 40, 0, Math.PI * 2, true);

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// draw head
ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
//move to mouth
ctx.moveTo(centerX+50, centerY);
//draw the mouth
ctx.arc(centerX, centerY, 50, 0, Math.PI, false);
//move to left eye
ctx.moveTo(centerX-30, centerY-40);
//draw left eye
ctx.arc(centerX-40, centerY-40, 10, 0, Math.PI * 2);
//move to right eye
ctx.moveTo(centerX+50, centerY-40);
//draw right eye
ctx.arc(centerX+40, centerY-40, 10, 0, Math.PI * 2);

// quadratic curve
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);

ctx.stroke();

