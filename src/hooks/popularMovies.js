import { options } from "../utils/tmdbApi.js";
import { useDispatch } from "react-redux";
import {useEffect} from "react"; 
import { setPopularMovies } from "../store/movieSlice.js";


const showPopularMovies = () =>{
    const dispatch = useDispatch();

    
 const getPopularMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(setPopularMovies(data.results));
};
useEffect(() => {
    getPopularMovies();
}, []);
}

export default showPopularMovies;