import Header from "./Header.jsx";
import { useEffect } from "react";
import { getNowPlayingMovies } from "../utils/tmdbApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlaying } from "../store/movieSlice.js";
import MainContainer from "./MainContainer.jsx";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const data = await getNowPlayingMovies();
      dispatch(setNowPlaying(data.results));
    }

    loadData();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
