const game = () => {
    let scorePl = 0;
    let scoreComp = 0;

    //start the GAME
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    //play the GAME
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        //computer
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach( option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 1000);
                
                playerHand.style.animation = 'shakePlayer 1s ease';
                computerHand.style.animation = 'shakeComputer 1s ease';
            });
        });

        const updateScore = () => {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            playerScore.textContent = scorePl;
            computerScore.textContent = scoreComp;
        }

        const compareHands = (playerChoice, computerChoice) => {
            const winner = document.querySelector('.winner');
            if(playerChoice === computerChoice){
                winner.textContent = 'It is a tie';
                return;
            }
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Player Wins';
                    scorePl++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer Wins';
                    scoreComp++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'paper'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Computer Wins';
                    scoreComp++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Player Wins';
                    scorePl++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'scissors'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Computer Wins';
                    scoreComp++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Player Wins';
                    scorePl++;
                    updateScore();
                    return;
                }
            }
        } 
    }

    // call inner functions
    startGame();
    playMatch();
}

// the GAME function
game();