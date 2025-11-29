const TMDB_BASE_URL = "https://api.themoviedb.org/3";

 export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";
