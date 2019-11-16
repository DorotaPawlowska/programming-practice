const timeS = document.getElementById('timeSt');

// const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `http://api.open-notify.org/iss-now.json`;

// altitude - wysokość 400km(250mi)
// promień ziemi - 6371km
// czas trawnia doby - 23:56:4 = 86164s

const getData = () => {
  fetch(api)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let str = data.timestamp;
    let lati = data.iss_position.latitude;
    let long = data.iss_position.longitude;
    console.log(localStorage.getItem('latitude'));
    console.log(localStorage.getItem('longitude'));

    let spLati = lati - localStorage.getItem('latitude'); 
    let spLong = long - localStorage.getItem('longitude'); 
    // console.log(spLati);
    // console.log(spLong);

    let timeSt = new Date(str*1000);
    // console.log(timeSt);
    timeS.innerHTML = `${timeSt} </br> 
    ${lati} </br> 
    ${long} </br> 
    ${spLong} </br> 
    ${spLati} </br> `;

    localStorage.setItem('longitude', long);
    localStorage.setItem('latitude', lati);
    console.log(localStorage.getItem('latitude'));
    console.log(localStorage.getItem('longitude'));


  })
  .catch( err => console.log(err));
}

setInterval(getData, 1000);