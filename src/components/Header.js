import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { APP_LOGO } from '../utils/constants'

const Header = () => {
    const dispath = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

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
    return (
        <div className='flex sticky top-0 justify-between w-screen px-8 py-2 bg-gradient-to-b bg-black from-black z-20'>
            <img className='w-36' src={APP_LOGO} alt='app-logo'></img>
            {user?.uid && <div className='flex h-full p-2 text-center align-middle justify-center'>
                <img className='w-7 h-7' src={user?.photoURL} alt='signOut' />
                <button onClick={handleSignOut} className='px-2 font-bold text-white'>SignOut</button>
            </div>}
        </div>
    )
}

export default Header