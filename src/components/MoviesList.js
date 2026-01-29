import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, moviesList }) => {
  return (
    <div className="px-8 mt-4 z-30">
      <h2 className="text-white text-xl font-semibold mb-3">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth">
        {moviesList?.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList