import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: [],
        movieTrailer: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    },
});

export const { setNowPlaying, setMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;