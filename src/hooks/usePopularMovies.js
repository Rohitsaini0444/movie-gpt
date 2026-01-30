import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/configs/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store?.movies?.popularMovies);

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
       !popularMovies &&  getPopularMoviesList();
    }, [])

}

export default usePopularMovies;