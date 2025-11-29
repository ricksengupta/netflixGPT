import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: [],
        poplarMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        movieTrailer: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.poplarMovies = action.payload;
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    },
});

export const { setNowPlaying, setPopularMovies, setTopRatedMovies, setUpcomingMovies, setMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;