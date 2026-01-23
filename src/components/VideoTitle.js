import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='p-8'>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <p className='w-1/4 text-bold my-4'>{overview}</p>
            <div className='my-4'>
                <button className='mr-2 py-2 px-8 bg-gray-400 text-white rounded '><span className='font-bold'>&#9658;</span> Play</button>
                <button className='py-2 px-4 bg-gray-400 text-white rounded '><span className='font-bold'>&#9432;</span> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle