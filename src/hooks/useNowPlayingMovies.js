import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/configs/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);

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
        !nowPlayingMovies && getNowPlayingMoviesList();
    }, [])

}

export default useNowPlayingMovies;