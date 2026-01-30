import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BROWSE_BACKGROUND_IMAGE_URL } from '../../utils/configs/constants'

const GptSearch = () => {
    return (
        <div className='w-screen justify-center'>
            <div className='absolute h-screen -z-10'>
                <img src={BROWSE_BACKGROUND_IMAGE_URL} className='h-full w-full object-cover' alt='background-img' ></img>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch