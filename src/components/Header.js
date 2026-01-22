import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const dispath = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                dispath(addUser({ email: user.email, displayName: user.name, uid: uid, photoURL: user?.photoURL }))
                navigate("/browse")
            } else {
                dispath(removeUser(null))
                navigate("/")
            }
        });
    }, [dispath, navigate])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispath(removeUser(null))
        }).catch((error) => {
            navigate('/error');
        })
    }
    return (
        <div className='flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black'>
            <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='app-logo'></img>
            {user?.uid && <div className='flex h-full p-2 text-center align-middle justify-center'>
                <img className='w-7 h-7' src={user?.photoURL} alt='signOut' />
                <button onClick={handleSignOut} className='px-2 font-bold text-white'>SignOut</button>
            </div>}
        </div>
    )
}

export default Header