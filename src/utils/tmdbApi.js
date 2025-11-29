const TMDB_BASE_URL = "https://api.themoviedb.org/3";

 export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};

// Fetch any endpoint
export const tmdbFetch = async (endpoint) => {
  try {
    const res = await fetch(`${TMDB_BASE_URL}${endpoint}`, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("TMDB Fetch Error: ", err);
    return null;
  }
};

export const getNowPlayingMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const res = await fetch(url, options);
  return res.json();
};


export const getMoviesByGenre = (genreId) =>
  tmdbFetch(`/discover/movie?with_genres=${genreId}`);
