import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        gptSearchEnabled: false,
        movies: [],
        gptSearchResults: []
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.gptSearchEnabled = !state.gptSearchEnabled;
        },
        addGPTSearchResults: (state, action) => {
            const { movies, gptSearchResults } = action.payload;
            state.movies = movies;
            state.gptSearchResults = gptSearchResults;
        }
    }
})
export const { toggleGPTSearch, addGPTSearchResults } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;