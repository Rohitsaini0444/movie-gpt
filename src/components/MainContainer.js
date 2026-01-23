import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

export const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) 
        return null;
    const mainMovie = movies[0];
    console.log("mainMovie",mainMovie);
  return (
    <div>
        mainContainer
        <VideoTitle />
        <VideoBackground />
    </div>
  )
}

