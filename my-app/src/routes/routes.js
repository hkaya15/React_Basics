import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import Blogs from "../pages/blog/Blogs"
import Categories from "../pages/blog/Categories"
import Post from "../pages/blog/Post"
import Home from "../pages/Home"
import Layout from "../pages/LayOut"
import Login from "../pages/Login"
import NoPage from "../pages/NoPage"
import Profile from "../pages/Profile"

import React from "react"

const routes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blogs/>,
                children: [
                    {
                        index: true,
                        path: 'categories',
                        element: <Categories/>
                    },
                    {
                        path: 'post/:id',
                        element: <Post/>
                    }
                ]
            }
        ]
    },
    {
        path: '/auth',
        element: <Login/>,
        children:[
            {
                path:'login',
                element: <Login/>
            }
        ]
    },
    {
        path: '*',
        element: <NoPage/>
    }
]

export default routes