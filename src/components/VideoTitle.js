import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[15%] px-20 absolute aspect-video bg-gradient-to-r form-black'>
            <h1 className='font-bold text-6xl text-white'>{title}</h1>
            <p className='w-1/2 text-bold my-4 text-xl text-white'>{overview}</p>
            <div className='my-4'>
                <button className='mr-2 py-4 px-10 bg-white rounded-lg '><span className='font-bold'>&#9658;</span> Play</button>
                <button className='py-4 px-10 bg-gray-500 text-white rounded-lg '><span className='font-bold'>&#9432;</span> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle