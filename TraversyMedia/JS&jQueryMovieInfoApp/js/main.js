document.addEventListener("DOMContentLoaded", (event) => {  
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchText = document.getElementById('searchText').value;
        getMovies(searchText);
    })
});

const getMovies = (param) => {
    axios.get('http://www.omdbapi.com/?apikey=87a6aeab&s='+param)
    .then((res) => {
        let movies = res.data.Search;
        let output = '';
        movies.forEach((movie,index) => {
            output += `
                <div class="card col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>
            `;
        });
        const display = document.getElementById('movies');
        display.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
}

const movieSelected = (id) => {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

const getMovie = () => {
    let movieId = sessionStorage.getItem('movieId');
    axios.get('http://www.omdbapi.com/?apikey=87a6aeab&i='+movieId)
    .then((res) => {
        let movie = res.data;
        let output = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${movie.Poster}" class="thumbnail">
                </div>
                <div class="col-md-8">
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="well">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-light">Go Back To Search</a>
                </div>
            </div>
        `;

        const display = document.getElementById('movie');
        display.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
}