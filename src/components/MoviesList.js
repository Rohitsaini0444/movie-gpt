import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, moviesList }) => {
  console.log("movie list", moviesList)
  return (
    <div className="bg-black px-8 py-4">
      <h2 className="text-white text-xl font-semibold mb-3">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth">
        {moviesList?.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList