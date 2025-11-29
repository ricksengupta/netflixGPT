import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlaying);
    const popularMovies = useSelector((store) => store.movies.poplarMovies);
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    return (
        <div className=" bg-black">
           <div className="-mt-55 relative z-20">
             <MovieList title={"Now Playing"} movies={movies} />
            <MovieList title={"Popular Movies"} movies={popularMovies} />
            <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
           </div>
           
        </div>
    );
};
export default SecondaryContainer;
