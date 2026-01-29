import React from 'react'

const MovieCard = ({ movieData }) => {
  return (
    <div className="relative shrink-0 w-48 h-28 md:w-56 md:h-32 rounded overflow-hidden 
                    transform transition duration-300 ease-in-out
                    hover:scale-110 hover:z-10 cursor-pointer">

      <img
        className="w-full h-full object-cover text-white"
        src={`https://image.tmdb.org/t/p/w300${movieData?.poster_path}`}
        alt={movieData?.title || "Movie Poster"}
      />
    </div>
  );
}

export default MovieCard