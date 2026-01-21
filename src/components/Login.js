import { useState, useRef } from 'react'
import Header from './Header'
import validate from '../utils/validate';

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
    }

    return (
        <div>
            <Header />
            <div>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_large.jpg' alt='background-img' ></img>
            </div>
            <div className='absolute top-1/2 w-full text-center'>

                <form className='flex flex-col gap-4 w-1/4 mx-auto mt-10 p-10 bg-black/90 rounded'>
                    <span className='text-white text-3xl font-bold'>{isSignedIn ? "Sign In" : "Sign Up"}</span>
                    {!isSignedIn && <input ref={fullNameRef} type='text' placeholder='Full Name' className='h-10 px-4 py-2 bg-gray-800 text-white rounded' />}
                    <input ref={emailRef} type='text' placeholder='Email' className='h-10 px-4 py-2 bg-gray-800 text-white rounded' />
                    <input ref={passwordRef} type='password' placeholder='Password' className='h-10 px-4 py-2 bg-gray-800 text-white rounded' />
                    <p className='text-red-600'>{errorMsg}</p>
                    <button type='button' onClick={handleSubmit} className='h-10 px-4 py-2 bg-red-600 text-white rounded'>{isSignedIn ? "Sign In" : "Sign Up"}</button>
                    <p className='text-white'>{isSignedIn ? "New to Netflix?" : "Already have an account?"} <button type='button' onClick={() => toggleSignIn()} className='text-white underline'>{isSignedIn ? "Sign Up" : "Sign In"}</button></p>
                </form>
            </div>
        </div>
    )
}

export default Login