import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';


const SecondryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  return (
    <div className='w-screen  p-4  bg-black z-10'>
      <div className='flex flex-col bg-transparent z-20 md:-mt-[300px]'>
      <MoviesList title={'Now Playing Movies'} moviesList={nowPlayingMovies} />
      <MoviesList title={'Top Rated Movies'} moviesList={topRatedMovies} />
      <MoviesList title={'Popular Movies'} moviesList={popularMovies} />
      <MoviesList title={'Upcoming Movies'} moviesList={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondryContainer