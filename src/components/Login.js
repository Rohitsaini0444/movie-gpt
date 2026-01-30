import { useState, useRef } from 'react'
import Header from './Header'
import validate from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR_URL, BROWSE_BACKGROUND_IMAGE_URL } from '../utils/constants';
import { lang } from '../utils/languageConstants';

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispath = useDispatch();
    const language = useSelector((store) => store?.config?.language);

    const toggleSignIn = () => {
        setIsSignedIn(!isSignedIn);
    }

    const handleSubmit = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const fullName = fullNameRef.current ? fullNameRef.current.value : null;
        const validationError = validate(fullName, email, password);
        setErrorMsg(validationError);
        if (validationError) return;
        // Proceed with sign-in or sign-up logic
        if (isSignedIn) {
            // Sign-in logic here
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        } else {
            // Sign-up logic here
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullNameRef.current.value, photoURL: AVATAR_URL
                    }).then(() => {
                        const { uid, displayName, email, photoURL } = auth.currentUser;
                        dispath(addUser({ uid, displayName, email, photoURL }))
                    }).catch((error) => {
                        setErrorMsg(error?.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='h-screen bg-cover bg-center'>
                <img src={BROWSE_BACKGROUND_IMAGE_URL} class="h-full w-full object-cover" alt='background-img' ></img>
            </div>
            <div className='absolute top-[20%] md:top-1/3 w-full text-center'>

                <form className='flex flex-col gap-4 md:w-1/4 mx-auto mt-10 p-10 bg-black/90 rounded'>
                    <span className='text-white text-3xl font-bold'>{isSignedIn ? lang[language].signin : lang[language].signUp}</span>
                    {!isSignedIn && <input ref={fullNameRef} type='text' placeholder={lang[language].fullNamePlaceholder} className='h-10 px-4 py-2 bg-gray-800 text-white rounded' />}
                    <input ref={emailRef} type='text' placeholder={lang[language].emailPlaceholder} className='h-10 px-4 py-2 bg-gray-800 text-white rounded' />
                    <input ref={passwordRef} type='password' placeholder={lang[language].passwordPlaceholder} className='h-10 px-4 py-2 bg-gray-800 text-white rounded' />
                    <p className='text-red-600'>{errorMsg}</p>
                    <button type='button' onClick={handleSubmit} className='h-10 px-4 py-2 bg-red-600 text-white rounded'>{isSignedIn ? lang[language].signin : lang[language].signUp}</button>
                    <p className='text-white'>{isSignedIn ? lang[language].signUpDescription : lang[language].signInDescription} <button type='button' onClick={() => toggleSignIn()} className='text-white underline'>{isSignedIn ? lang[language].signUp : lang[language].signin}</button></p>
                </form>
            </div>
        </div>
    )
}

export default Login