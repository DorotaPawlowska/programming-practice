
var wait = 20;
var immediate = true;

//function debounce(func, wait = 20, immediate = true){
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(e);
    // console.log(window.scrollY);
    // console.count(e);
    sliderImages.forEach(function (sliderImage) {
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 3;
        //bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // console.log(slideInAt);
        // console.log(imageBottom);
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }


    });

}

window.addEventListener('scroll', debounce(checkSlide, wait, immediate));