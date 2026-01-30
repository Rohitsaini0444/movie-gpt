import React from 'react'
import MoviesList from '../browse/MoviesList'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
    const movieNamesList = useSelector((store) => store.gptSearch?.movies || []);
    const gptSearchResults = useSelector((store) => store.gptSearch?.gptSearchResults || []);
    return (
        <div className='w-[90%] justify-self-center bg-black bg-opacity-80'>
            {
                movieNamesList?.length > 0 && gptSearchResults?.length > 0 && movieNamesList.length === gptSearchResults.length && movieNamesList.map((movie, index) => (
                    <MoviesList key={index} title={movie} moviesList={gptSearchResults?.[index]?.results} />
                ))
            }
        </div>
    )
}

export default GptMovieSuggestions