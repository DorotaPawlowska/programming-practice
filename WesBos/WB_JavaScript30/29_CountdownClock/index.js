let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    displayEndTime(then);

    // console.log({now, then});

    countdown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if we should stop it!
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        //display it
        // console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    }, 1000)

    // old one
    // setInterval(function () {
    //     seconds--;
    // }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;

    document.title = display;

    // console.log(seconds);
    // console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    // const adjustedHour = hour > 12 ? hour - 12 : hour; // canada and usa !

    endTime.textContent = `be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`; // europe
    // endTime.textContent = `be back at ${hour > 12 ? hour - 12 : hour}:${minutes}`; // canada and usa !
    // endTime.textContent = `be back at ${adjustedHou}:${minutes}`; // canada and usa !
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);
    timer(seconds);
}

buttons.forEach( button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});
