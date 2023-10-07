import React from 'react'
import Auth from '../../Pages/Auth/Auth'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Protected from '../../Layout/Protected'


const AUTH = "/auth"
const HOME = "/"


const router = createBrowserRouter(
    [
        {
            path:AUTH,
            element:<Auth/>,
            errorElement:<h1>Oops ! Page not found.</h1>
        },
        {
            path:HOME,
            element:<Protected><h1>Home page </h1></Protected>,
            errorElement:<h1>Oops ! Page not found.</h1>
        },
    ]
)
const Router = () => {

    return (
        <RouterProvider router={router} />
    )
  
}

export default Router
