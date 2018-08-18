// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//functions
function togglePlay() {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }

    //or better
    //const method = video.paused ? 'play' : 'pause';
    //video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' :'❚ ❚';
    // console.log(icon);
    toggle.textContent = icon;
    // console.log('update the button');
}

function skip() {
    // console.log('skipping!');
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.log(this.value);
    // console.log(this.name);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    // console.log(progressBar.style.flexBasis);
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth)* video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

// hook up event listners

video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);

video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);


skipButtons.forEach( function (button){
    button.addEventListener('click', skip);
});


ranges.forEach( function (range){
    range.addEventListener('change', handleRangeUpdate);
});

ranges.forEach( function (range){
    range.addEventListener('mousemove', handleRangeUpdate);
});


var mousedown = false;
progress.addEventListener('click', scrub);

progress.addEventListener('mousemove', function (e) {
    if(mousedown){
        scrub(e);
    }
});

// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

progress.addEventListener('mousedown', function () {
    mousedown = true;
});

progress.addEventListener('mouseup', function () {
    mousedown = false;
});
