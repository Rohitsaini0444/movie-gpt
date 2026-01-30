import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../../utils/configs/languageConstants';

const VideoTitle = ({ title, overview }) => {
    const language = useSelector((store) => store?.config?.language);
    return (
        <div className='pt-[15%] px-20 absolute aspect-video bg-gradient-to-r form-black z-10'>
            <h1 className='font-bold md:text-6xl text-white'>{title}</h1>
            <p className='w-1/2 hidden md:inline-block text-bold my-4 text-xl text-white'>{overview}</p>
            <div className='flex'>
                <button className='mr-2 md:py-4 px-10 bg-white rounded-lg '><span className='font-bold'>&#9658;</span>{lang[language].play}</button>
                <button className='md:py-4 px-10 bg-gray-500 text-white rounded-lg '><span className='font-bold'>&#9432;</span>{lang[language].moreInfo}</button>
            </div>
        </div>
    )
}

export default VideoTitle