import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMoviesList = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_LIST_API_OPTIONS);
            const data = await res.json();
            dispatch(addNowPlayingMovies(data?.results))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getNowPlayingMoviesList();
    }, [])

}

export default useNowPlayingMovies;