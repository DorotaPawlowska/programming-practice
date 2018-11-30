[...document.querySelectorAll('.invite-card')].forEach( card => {
  console.log(card);
  const headline = card.querySelector('.headline').textContent;
  console.log(headline);
  const accept = card.querySelector('.bt-invite-accept');
  const decline = card.querySelector('.bt-invite-decline');
  console.log(accept);
  const name = card.querySelector('.name').textContent;

  if(headline.match(/recruit/gi)){
    console.log(`Nah. ${name} looks a little fishy to me.`);
    decline.click();
  } else{
    console.log(`${name} looks cool. Let them in!`);
    accept.click();
  }
})
