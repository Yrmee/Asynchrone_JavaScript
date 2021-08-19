
// Asynchronous Function to getMoviesGenres to DOM
const setMovieGenresToDom = async () => {

    const movieGenreList = document.getElementById("movieGenreList");
    const data = await getMovieGenres();

    data.genres.forEach(movieGenre => {
        const newListItem = document.createElement("li");
        const newListItemContent = document.createTextNode(
            `Genre: ${movieGenre.name}, Genre-ID: ${movieGenre.id}`);

        newListItem.appendChild(newListItemContent);
        movieGenreList.append(newListItem);
    });
};

// Asynchronous Funtion to set My Top Movie to DOM
const setMyTopMovieToDom = async () => {

    const data = await getMovieById("tt1951265");
    const movie = data.movie_results[0];
    const myTopMovie = document.getElementById("myTopMovie");
    // <p> The Hunger Games - MockingJay - Part 1 </p>
    myTopMovie.appendChild(document.createTextNode(movie.title));
};

// Asynchronous Funtion to set Single Movie to Dom
const setSingleMovieToDom = async () => {

    const data = await getMovieById("tt0114709");
    const movie = data.movie_results[0];
    const singleMovie = document.getElementById("single-movies");
    // <p> Toy Story </p>
    singleMovie.appendChild(document.createTextNode(movie.title));
};

// Asynchronous Funtion to set Top Rated Movies to DOM.
// Using .splice method to set the data response into a top-10 list.
const setTopRatedMovies = async () => {

    const topRatedMovies = document.getElementById("topRatedList");
    const data = await getTopRatedMovies();
    const topTenList = data.results.splice(0, 10);

    topTenList.forEach(movie => {
        const newListItem = document.createElement("li");
        const newListItemContent = document.createTextNode(
            `Naam Film: ${movie.title}, Cijfer: ${movie.vote_average}`);

            newListItem.appendChild(newListItemContent);
            topRatedMovies.append(newListItem);
    });
};

// Asynchronous Funtion to set Top Rated Movies by Genre to DOM.
const setTopRatedMoviesByGenre = async () => {

    const topRatedMoviesByGenre = document.getElementById("topRatedListAction");

    const data = await getTopRatedMoviesByGenre(28);
    const topTenList = data.results.splice(0, 10);

    topTenList.forEach(movie => {
        const newListItem = document.createElement("li");
        const newListItemContent = document.createTextNode(
            `Naam Film: ${movie.title}, Cijfer: ${movie.vote_average}, Aantal Votes: ${movie.vote_count}`);
        
            newListItem.appendChild(newListItemContent);
            topRatedMoviesByGenre.append(newListItem);
    });
};

//Asynchronous Function to set Movies from the year 1975 to DOM.
const setMoviesForYear = async () => {
    const movieList = document.getElementById("movieListFromYear");

    const data = await getMoviesFromYear("1975");
    const topTenList = data.results.splice(0, 10);

    topTenList.forEach(movie => {
        const newListItem = document.createElement("li");
        const newListItemContent = document.createTextNode(
            `Naam Film: ${movie.title}, Cijfer: ${movie.vote_average}, Aantal Votes: ${movie.vote_count}`
        );
        newListItem.appendChild(newListItemContent);
        movieList.append(newListItem);
    });
  };


// addEventListener to set Content to DOM
document.addEventListener("DOMContentLoaded", () => {
    setMovieGenresToDom();
    setMyTopMovieToDom();
    setSingleMovieToDom();
    setTopRatedMovies();
    setTopRatedMoviesByGenre();
    setMoviesForYear();
});

