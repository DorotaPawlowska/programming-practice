const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// if(canvas.getContext){
  // sprawdzanie wsparcia
// }

// canvas.width = 200;
// canvas.width = window.innerWidth;

// fillRect()
ctx.fillStyle = 'skyblue';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'coral';
ctx.fillRect(200, 20, 150, 100);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);

// clearRect()
ctx.clearRect(25,25, 100, 50)

// fillText()
ctx.font = '30px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('hello world', 400, 50)

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.strokeText('hello world', 400, 100);