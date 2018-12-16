const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then( function (blob) {
        return blob.json();
    })
    .then(function(data){
        return cities.push(...data);
    });

function findMatches(wordTomatch, cities) {
    return cities.filter(function (place) {
        const regex = new RegExp(wordTomatch, 'gi'); //flagi: g-global i-insesitive
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(function (place) {
        const regex = new RegExp(this.value, 'gi');

//            const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`); // error
//            const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`); // error
//            console.log(cityName); // undefined
//            console.log(stateName); //undefined

        return`
            <li>
                <span class="name">${place.city}, ${place.state}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
            `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
