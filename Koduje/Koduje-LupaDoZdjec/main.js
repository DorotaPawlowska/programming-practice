const photo = document.querySelector('.photo');
let mag = null;
let zoom = null;


const createMagnifier = () => {
    const magEl = document.createElement('div');
    magEl.classList.add('magnifier');
    mag = magEl;
    photo.appendChild(magEl);
};

const removeMagnifier = () => {
    if(mag){
        photo.removeChild(mag);
        mag = null;
    }
};

const createZoomedPhoto = () => {
    zoom = document.createElement('div');
    zoom.classList.add('zoom');
    document.body.appendChild(zoom);
};

const removedZoomedPhot = () => {
    if(zoom){
        document.body.removeChild(zoom);
        zoom = null;
    }
};

const onMouseMove = (e) => {
    const photoBounding = photo.getBoundingClientRect();
    let x = e.clientX - photoBounding.left;
    let y = e.clientY - photoBounding.top;
    let photoSize = parseInt(window.getComputedStyle(photo).height);
    let magSize = parseInt(window.getComputedStyle(mag).height);
    const MAX_POSITION = photoSize - magSize;

    x -= magSize / 2;
    y -= magSize / 2;

    if(x + magSize > photoSize){
        x = MAX_POSITION;
    }
    if(y + magSize > photoSize){
        y = MAX_POSITION;
    }
    if(x < 0){
        x = 0;
    }
    if(y < 0){
        y = 0;
    }

    let transformCSSValues = "translateX(" + x + "px) translateY(" + y + "px)";
    mag.style.transform = transformCSSValues;

    zoom.style.backgroundPosition = -x*2 +"px " + -y*2 + "px";

}

const onMouseEnter = () => {
    createMagnifier();
    createZoomedPhoto();
}

const onMouseLeave = () => {
    removeMagnifier();
    removedZoomedPhot();
}

photo.addEventListener('mouseenter', onMouseEnter);
photo.addEventListener('mouseleave', onMouseLeave);
photo.addEventListener('mousemove', onMouseMove);