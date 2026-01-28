import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BROWSE_BACKGROUND_IMAGE_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div className='w-full'>
            <div className='absolute -z-10'>
                <img src={BROWSE_BACKGROUND_IMAGE_URL} alt='background-img' ></img>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch