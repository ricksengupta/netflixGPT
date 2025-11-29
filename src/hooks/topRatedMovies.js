import { options } from "../utils/tmdbApi.js";
import { useDispatch } from "react-redux";
import {useEffect} from "react"; 
import { setTopRatedMovies } from "../store/movieSlice.js";


const showTopRatedMovies = () =>{
    const dispatch = useDispatch();

    
 const getTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(setTopRatedMovies(data.results));
};
useEffect(() => {
    getTopRatedMovies();
}, []);
}

export default showTopRatedMovies;