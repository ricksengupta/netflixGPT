import { IMG_CDN_URL } from "../utils/tmdbApi";


const MovieCard = ({posterPath}) => {
	return (<div className="w-48 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={IMG_CDN_URL+posterPath} alt = "Movie posters" className="rounded-lg" />
    </div>);
};
export default MovieCard;