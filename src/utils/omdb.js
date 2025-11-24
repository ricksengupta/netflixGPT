import { OMDB_API_KEY, OMDB_BASE_URL } from "./constants";


//*to search movies that have the search item in their titles or meta data.
// * if u write &t=${movie} it will just match with the title of the movie
// * while &s searches the data inside as well

export const searchMovies = async (movie) => {
	const url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${movie}`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

//*to get detailed information about a specific movie using its IMDb ID.

export const getMovieDetails = async (imdbID) => {
	const url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`;
	const res = await fetch(url);
	const data = await res.json();
	return data;
};
