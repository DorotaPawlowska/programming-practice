const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const text = document.getElementById('text');
let scroll = window.pageYOffset;

document.addEventListener('scroll', function(e){
  const offset = window.pageYOffset;
  scroll = offset;
  layer1.style.width = ( 100 + scroll/5) + "%";
  layer2.style.width = ( 100 + scroll/5) + "%";
  layer2.style.left = scroll/50 + "%";
  text.style.top = -scroll/5 + "%";
});

