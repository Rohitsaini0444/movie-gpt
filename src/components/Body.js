import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const appRouter = createBrowserRouter(
        [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            }
        ]
    )

    const dispath = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                dispath(addUser({ email: user.email, displayName: user.name, uid: uid , photoURL: user?.photoURL}))
            } else {
                dispath(removeUser(null))
            }
        });
    }, [dispath])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body