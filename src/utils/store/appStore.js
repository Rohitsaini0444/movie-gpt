import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
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