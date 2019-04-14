const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;



function flipCard(){
    this.classList.add('flip');

    if(!hasFlippedCard){
        // fisrt click
        hasFlippedCard = true;
        firstCard = this;
        // console.log({hasFlippedCard, firstCard});
    } else {
        // second card clicked
        hasFlippedCard = false;
        secondCard = this;
        // console.log({firstCard, secondCard});
        // do cards macht?

    }
}

cards.forEach( card => card.addEventListener('click', flipCard));