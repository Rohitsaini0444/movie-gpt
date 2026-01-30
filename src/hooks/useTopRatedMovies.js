import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/store/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/configs/constants";

const useTopRatedMovies  = () => {
    const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

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
       !topRatedMovies && getTopRatedMoviesList();
    }, [])

}

export default useTopRatedMovies ;