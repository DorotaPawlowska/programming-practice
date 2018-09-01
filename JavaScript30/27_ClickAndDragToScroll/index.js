const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // console.log(e.pageX);
    // console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    // console.log(e.pageX);
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    // console.log(e.pageX);
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log({x, startX});
    const walk = (x - startX) * 3;
    // console.log(walk);
    slider.scrollLeft = scrollLeft - walk;

    // console.count(isDown);
    // console.log(startX);
});
