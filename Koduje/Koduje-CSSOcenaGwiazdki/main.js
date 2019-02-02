const countStars = () => {
  const checkedRadio = document.querySelector('.stars input:checked');
  console.log(checkedRadio.value);
};

document.querySelector('.stars').addEventListener('click', countStars);