// option 2 - jQuery Smooth Scroll

// $('.navbar a').on('click', function(e){
//     if(this.hash !== ''){
//         e.preventDefault();

//         const hash = this.hash;
//         $('html,body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });

// option 3 - Smooth Scroll Script// https://github.com/cferdinandi/smooth-scroll

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});
