import React from 'react'
import { useSelector } from 'react-redux'
import {lang} from '../utils/languageConstants';

const GptSearchBar = () => {
    const config = useSelector((store) => store.config);
    return (
        <div className="flex justify-center">
            <form className="w-1/2 mt-[10%] bg-gray-800 text-white  justify-center grid grid-cols-12 gap-4 text-center p-4 font-bold">
                <input type="text" placeholder={lang?.[config?.language]?.gptSearchPlaceholder} className="col-span-9" />
                <button className="px-4 py-2 bg-red-600 text-white rounded col-span-3">{lang?.[config?.language]?.search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;