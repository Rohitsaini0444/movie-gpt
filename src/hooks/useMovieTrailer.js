import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { MOVIE_LIST_API_OPTIONS } from "../utils/configs/constants";

const useTrailerVideos = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store?.movies?.trailerVideo)

     const getMovieVideos = async () => {
       const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, MOVIE_LIST_API_OPTIONS);
       const data = await res.json();
       const videos = data?.results;
       const filteredVideos = videos?.filter((video) => video?.type === 'Trailer')
       const movieVideos = filteredVideos ? filteredVideos[0] : videos[0];
       dispatch(addTrailerVideo(movieVideos));
     }
   
     useEffect(() => {
      !trailerVideo && getMovieVideos()
     }, [])

}

export default useTrailerVideos;