import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchResults: [],
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { addSearchResults } = moviesSlice.actions;

export default moviesSlice.reducer;
