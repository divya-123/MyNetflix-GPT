import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../../src/utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/Browse",
            element: <Browse />
        }
    ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
