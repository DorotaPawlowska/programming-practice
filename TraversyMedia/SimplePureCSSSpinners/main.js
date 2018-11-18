document.querySelector('.main p').style.display = 'none';
document.querySelector('.main').classList.add('spinner-3');
setTimeout(() => {
  document.querySelector('.main').classList.remove('spinner-3');
  document.querySelector('.main p').style.display = 'block';
}, 2000);