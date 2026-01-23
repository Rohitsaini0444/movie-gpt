import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/constants";

const useTrailerVideos = (movieId) => {
    const dispatch = useDispatch();

     const getMovieVideos = async () => {
       const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, MOVIE_LIST_API_OPTIONS);
       const data = await res.json();
       const videos = data?.results;
       const filteredVideos = videos?.filter((video) => video?.type === 'Trailer')
       const movieVideos = filteredVideos ? filteredVideos[0] : videos[0];
       dispatch(addTrailerVideo(movieVideos));
     }
   
     useEffect(() => {
       getMovieVideos()
     }, [])

}

export default useTrailerVideos;