const secondHand = document.querySelector('.second-hand');
const minutsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90;

    const minuts = now.getMinutes();
    const minutsDegrees = ((minuts/60)*360) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutsHand.style.transform = `rotate(${minutsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
