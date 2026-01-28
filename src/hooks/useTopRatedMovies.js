import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/constants";

const useTopRatedMovies  = () => {
    const dispatch = useDispatch();

    const getTopRatedMoviesList = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', MOVIE_LIST_API_OPTIONS);
            const data = await res.json();
            dispatch(addTopRatedMovies(data?.results))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTopRatedMoviesList();
    }, [])

}

export default useTopRatedMovies ;