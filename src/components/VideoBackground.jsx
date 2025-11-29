import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/tmdbApi";
import { setMovieTrailer } from "../store/movieSlice";

const VideoBackground = ({ movieId }) => {
	const dispatch = useDispatch();

	const trailerVideo = useSelector((store) => store.movies.movieTrailer);

	const getMovieVideos = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
		const json = await data.json();

		console.log("Movie Videos:", json);

		const trailers = json.results.filter((video) => video.type === "Trailer");
		const trailer = trailers[0];

		dispatch(setMovieTrailer(trailer));
	};

	useEffect(() => {
		getMovieVideos();
	}, []);

	// 🛑 SAFETY CHECK — do not render iframe until trailer is loaded
	if (!trailerVideo) return <h2 className="text-white">Loading Trailer...</h2>;

	return (
		<div className="w-full h-screen">
			<iframe
				className="w-full h-screen object-fit"
				src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${trailerVideo.key}`}
				title="Movie Trailer"
				allow="autoplay; encrypted-media"
			></iframe>
		</div>
	);
};

export default VideoBackground;
