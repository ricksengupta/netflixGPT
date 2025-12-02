import Header from "./Header.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import nowPlayingMovies from "../hooks/nowPlayingMovies.js";
import showPopularMovies from "../hooks/popularMovies.js";
import showTopRatedMovies from "../hooks/topRatedMovies.js";
import showUpcomingMovies from "../hooks/upcomingMovies.js";
import GptSearchPage from "./GptSeachPage.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	nowPlayingMovies();
	showPopularMovies();
	showTopRatedMovies();
	showUpcomingMovies();

	return (
		<div>
			<Header />
			{showGptSearch ? (
				<GptSearchPage />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
