import { options } from "../utils/tmdbApi.js";
import { useDispatch } from "react-redux";
import {useEffect} from "react"; 
import { setNowPlaying } from "../store/movieSlice.js";


const showNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    
 const getNowPlayingMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(setNowPlaying(data.results));
};
useEffect(() => {
    getNowPlayingMovies();
}, []);
}

export default showNowPlayingMovies;