import React from 'react'
import VideoPlaying from './VideoPlaying'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

export const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) 
        return null;
    const mainMovie = movies[0];
  return (
    <div>
        mainContainer
        <VideoPlaying />
        <VideoTitle />
    </div>
  )
}

