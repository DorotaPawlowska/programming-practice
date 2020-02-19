const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const rock = document.getElementById('rock');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

// play game
function play(e){
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
  console.log(playerChoice, computerChoice, winner);
}

function getComputerChoice(){
  const rand = Math.random();
  if(rand < 0.34){
    return 'rock';
  }else if(rand <= 0.67){
    return 'paper';
  }else{
    return 'scissors';
  }
}

function getWinner(playerChoice, computerChoice){
  if(playerChoice === computerChoice){
    return 'draw';
  }else if(playerChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'computer';
    } else {
      return 'player';
    }
  }else if(playerChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'computer';
    } else {
      return 'player';
    }
  }else if(playerChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice){
  if(winner == 'player'){
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
    <img id="${computerChoice}" class="choice" height="200" width="200" src="img/${computerChoice}.png"></img>
    <p>Computer Chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>`;
  }else if(winner === 'computer'){
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">You Lose</h1>
    <img id="${computerChoice}" class="choice" height="200" width="200" src="img/${computerChoice}.png"></img>
    <p>Computer Chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>`;
  }else{
    result.innerHTML = `
    <h1>It's a draw</h1>
    <img id="${computerChoice}" class="choice" height="200" width="200" src="img/${computerChoice}.png"></img>
    <p>Computer Chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>`;
  }
  
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;

  modal.style.display = 'inline-block';
}

function restartGame(){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  restart.style.display = 'none';
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
}

function clearModal(e){
  if(e.target === modal){
    modal.style.display = 'none';
  }
}

// event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
