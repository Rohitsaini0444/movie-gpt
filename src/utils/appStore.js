import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";
import movieSlice from "../utils/movieSlice";
import gptSearchSlice from "./gptSearchSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gptSearch: gptSearchSlice
    }
});

export default appStore;