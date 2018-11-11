const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
}

const starsTotal = 5;

document.addEventListener('DOMContentLoaded', getRatings);

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

let product;

productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  // console.log(product);
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  if(rating > 5){
   alert('please rate 1 - 5');
   return;
  }

  ratings[product] = rating;
  getRatings();
});

function getRatings(){
  for( let rating in ratings){
    // console.log(rating);
    // console.log(ratings[rating]);

    const starPrecentage = (ratings[rating] / starsTotal) * 100;
    // console.log(starPrecentage);

    const starPrecentageRounded = `${Math.round(starPrecentage / 10)*10}%`;
    // console.log(starPrecentageRounded);

    document.querySelector(`.${rating} .stars-inner`).style.width = starPrecentageRounded;
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}
