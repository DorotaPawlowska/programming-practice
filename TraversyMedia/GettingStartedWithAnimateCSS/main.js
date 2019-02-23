
const btn = document.querySelector('#animateBtn');
    btn.addEventListener('click', () => {
        animate('#anim-head', 'bounce');
        animate('#anim-body', 'rubberBand');
    }, false);

const btn2 = document.querySelector('#animateBtn2');
    btn2.addEventListener('click', () => {
        animate('header', 'slideOutUp');
        setTimeout(() => {
            document.querySelector('header').style.display = "hidden";
        }, 1000);
    }, false);

function animate(element, animation){
    const elem = document.querySelector(element);
    elem.classList.add('animated', animation);
}