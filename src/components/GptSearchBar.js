import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants';
import client from '../utils/gptConfig';
import { DEFAULT_MOVIES_LIST, MOVIE_LIST_API_OPTIONS } from '../utils/constants';
import { addGPTSearchResults } from '../utils/gptSearchSlice';

const GptSearchBar = () => {
    const config = useSelector((store) => store.config);
    const inputRef = React.useRef(null);
    const dispatch = useDispatch();

    const fetchMovieData = async (movieName) => {
        let movieData = null;
        try {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1', MOVIE_LIST_API_OPTIONS)
            movieData = await response?.json();
        } catch (error) {
            console.error("Error fetching movie data for " + movieName, error);
        }
        return movieData;
    }

    const handleGPTSearch = async (e) => {
        e.preventDefault();
        const query = "Suggest some movies " + inputRef.current.value + " in the form of a list";
        console.log("GPT Search Query: ", query);
        let moviesList = [];
        try {
            const completion = await client.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: query }],
            });
            const gptSearchResults = completion?.choices?.[0]?.message?.content;
            moviesList = gptSearchResults.split(',').map(movie => movie.trim());
        } catch (error) {
            moviesList = DEFAULT_MOVIES_LIST;
        }

        const promises = moviesList.map(movie => fetchMovieData(movie));
        const moviesData = await Promise.all(promises);
        console.log("Movie Data: ", moviesData);
        dispatch(addGPTSearchResults({ movies: moviesList, gptSearchResults: moviesData }));
    }
    return (
        <div className="flex justify-center">
            <form className="w-1/2 mt-[10%] bg-gray-800 text-white  justify-center grid grid-cols-12 gap-4 text-center p-4 font-bold">
                <input type="text" ref={inputRef} placeholder={lang?.[config?.language]?.gptSearchPlaceholder} className="col-span-9 text-black" />
                <button onClick={handleGPTSearch} className="px-4 py-2 bg-red-600 text-white rounded col-span-3">{lang?.[config?.language]?.search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;