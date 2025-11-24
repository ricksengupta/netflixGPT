import Header from "./Header";
import { searchMovies, getMovieDetails } from "../utils/omdb";
import { useState, useEffect } from "react";
const { useDispatch, useSelector } = require("react-redux");

const Browse = () => {

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchMovies();  
      console.log(results);  
    };

    fetchData();
  }, []);


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
