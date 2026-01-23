import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice";
import movieSlice from "../utils/movieSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice
    }
});

export default appStore;