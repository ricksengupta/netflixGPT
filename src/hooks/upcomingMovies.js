import { options } from "../utils/tmdbApi.js";
import { useDispatch } from "react-redux";
import {useEffect} from "react"; 
import { setUpcomingMovies} from "../store/movieSlice.js";


const showUpcomingMovies = () =>{
    const dispatch = useDispatch();

    
 const getUpcomingMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(setUpcomingMovies(data.results));
};
useEffect(() => {
    getUpcomingMovies();
}, []);
}

export default showUpcomingMovies;