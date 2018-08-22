const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300; // 100px

function shadow(e) {
    // console.log(e);
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // const {offsetWidth: width, offsetHeight: height} = hero; // ES6
    let { offsetX: x, offsetY: y} = e;
    // console.log(x, y);
    // console.log(this, e.target);

    if(this !== e.target ){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`


    // console.log(x, y);
    // console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove', shadow);