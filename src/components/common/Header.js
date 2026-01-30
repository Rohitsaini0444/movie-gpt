import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../utils/configs/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../../utils/store/userSlice'
import { toggleGPTSearch } from '../../utils/store/gptSearchSlice'
import { useNavigate } from 'react-router-dom'
import { APP_LOGO } from '../../utils/configs/constants'
import { LANGUAGE_OPTIONS } from '../../utils/configs/constants'
import { selectLanguage } from '../../utils/store/configSlice'
import { lang } from '../../utils/configs/languageConstants'

const Header = () => {
    const dispath = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const gptSearchEnabled = useSelector((store) => store?.gptSearch?.gptSearchEnabled)
    const config = useSelector((store) => store.config)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                dispath(addUser({ email: user.email, displayName: user.name, uid: uid, photoURL: user?.photoURL }))
                navigate("/browse")
            } else {
                dispath(removeUser(null))
                navigate("/")
            }
        });
        return () => unsubscribe()
    }, [dispath, navigate])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispath(removeUser(null))
        }).catch((error) => {
            navigate('/error');
        })
    }

    const handleGPTSearch = () => {
        dispath(toggleGPTSearch());
    }

    const handleLanguageChange = (e) => {
        dispath(selectLanguage(e.target.value));
    }

    return (
        <div className='flex flex-col md:flex-row sticky top-0 items-center md:justify-between w-screen px-8 py-2 bg-gradient-to-b bg-black from-black z-20'>
            <img className='w-36' src={APP_LOGO} alt='app-logo'></img>
            <div className='flex h-full p-2 text-center align-middle justify-center'>
                <select onChange={handleLanguageChange} value={config?.language} className='bg-black text-white border-white border-2 rounded-md px-2 mr-4'>
                    {LANGUAGE_OPTIONS
                        .map((lang) => (
                            <option key={lang.identifier} value={lang.identifier} className='bg-black text-white'>{lang.label}</option>
                        ))}
                </select>
                {user?.uid && <>
                    <button onClick={handleGPTSearch} className=' mr-2 px-2 bg-green-600 rounded font-bold text-white'>{gptSearchEnabled ? lang[config?.language].homePage : lang[config?.language].gptSearch}</button>
                    <img className='w-7 h-7 hidden md:block' src={user?.photoURL} alt='signOut' />
                    <button onClick={handleSignOut} className='px-2 font-bold text-white'>{lang[config?.language].signOut}</button>
                </>
                }
            </div>
        </div>
    )
}

export default Header