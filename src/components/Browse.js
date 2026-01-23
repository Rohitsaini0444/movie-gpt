import React, { useEffect } from 'react'
import Header from './Header'
import { MOVIE_LIST_API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addMovies} from '../utils/movieSlice'

function Browse() {
  const dispatch = useDispatch();

  const getNowPlayingMoviesList = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_LIST_API_OPTIONS);
      const data = await res.json();
      dispatch(addMovies(data))
      console.log("Data", data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNowPlayingMoviesList();
  }, [])

  return (
    <div>
      <Header />
      <div>Browse</div>
    </div>
  )
}

export default Browse