import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {
        const movies = useSelector((store) => store.movies.nowPlaying);
        console.log("Now Playing Movies in MainContainer:", movies);

        if (movies.length === 0) {
                return (<div className="p-8 text-white">Loading Main Container...</div>);
        }

        const mainMovie = movies[0];

        const { original_title, overview, id } = mainMovie;
        return (
            <div className="relative w-full h-screen overflow-hidden">
                <VideoTitle title={original_title} overview={overview} />
                <VideoBackground movieId={id} movie={mainMovie} />
            </div>
        );
}
export default MainContainer;