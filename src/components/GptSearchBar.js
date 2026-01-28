import React from 'react'

const GptSearchBar = () => {
    return (
        <div className="flex justify-center">
            <form className="w-1/2 mt-[10%] bg-gray-800 text-white  justify-center grid grid-cols-12 gap-4 text-center p-4 font-bold">
                <input type="text" placeholder="Search movies using GPT..." className="col-span-9" />
                <button className="px-4 py-2 bg-red-600 text-white rounded col-span-3">Search</button>
            </form>
        </div>
    )
}
export default GptSearchBar;