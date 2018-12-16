const timeButton = document.querySelector('#timeButton');
const container = document.querySelector('#container');

const showCurrentTime = () => {
  container.textContent = new Date().toLocaleTimeString();
}

timeButton.addEventListener('click', showCurrentTime);
