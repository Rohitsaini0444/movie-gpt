import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";
import movieSlice from "../utils/movieSlice";
import gptSearchSlice from "./gptSearchSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gptSearch: gptSearchSlice,
        config: configSlice
    }
});

export default appStore;