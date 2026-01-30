import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/store/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/configs/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

    const getUpcomingMovies = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', MOVIE_LIST_API_OPTIONS);
            const data = await res.json();
            dispatch(addUpcomingMovies(data?.results))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [])

}

export default useUpcomingMovies;