
// Variabeles
const API_KEY = '...';
const API_endpoint = 'https://api.themoviedb.org/3';

// Asynchronous Function to getMovieGenres
const getMovieGenres = async () => {
    const ApiUrl = `${API_endpoint}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const response = await fetch(ApiUrl, { method: "GET" });
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

// Asynchronous Function to getMovieByID
const getMovieById = async movieId => {
    const movieByIdUrl = `${API_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
    try {
        const response = await fetch(movieByIdUrl, { method: "GET" });
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

// Asynchronous Function to getTopRatedMovies
const getTopRatedMovies = async () => {
    const topRatedUrl = `${API_endpoint}/movie/top_rated?api_key=${API_KEY}`;
    try {
        const response = await fetch(topRatedUrl, { method: "GET"});
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

// Asynchronous Funtion to get TopRatedMovies by Genre. In this case: Genre: Action.
const getTopRatedMoviesByGenre = async genreId => {
    const topRatedUrl = `${API_endpoint}/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const response = await fetch(topRatedUrl, { method: "GET" });
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

// Asynchronous Funtion to get TopRatedMovie from a specific year. In this case Year: 1975.
const getMoviesFromYear = async year => {
    const moviesYearUrl = `${API_endpoint}/discover/movie?primary_release_year=${year}&api_key=${API_KEY}`;
    try {
      const response = await fetch(moviesYearUrl, { method: "GET" });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
};