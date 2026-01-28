import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMoviesList = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', MOVIE_LIST_API_OPTIONS);
            const data = await res.json();
            dispatch(addPopularMovies(data?.results))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPopularMoviesList();
    }, [])

}

export default usePopularMovies;