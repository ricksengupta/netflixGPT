import Header from "./Header.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import nowPlayingMovies from "../hooks/nowPlayingMovies.js";
import showPopularMovies from "../hooks/popularMovies.js";
import showTopRatedMovies from "../hooks/topRatedMovies.js";
import showUpcomingMovies from "../hooks/upcomingMovies.js";

const Browse = () => {

  nowPlayingMovies();
  showPopularMovies();
  showTopRatedMovies();
  showUpcomingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
