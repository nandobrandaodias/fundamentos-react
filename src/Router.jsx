import { createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Profile from './components/Profile'
import FormProfile from "./components/FormProfile"
import FormPost from "./components/FormPost"
import Login from "./components/Login"
import { ProtectedRoute } from "./ProtectedRoute"

const getAccessToken = ()=>{
    return localStorage.getItem("token")
}
export const isAuthenticated = ()=>{
    return getAccessToken()
}


export const router =  createBrowserRouter(
    [
        {
            path: '/',
            element: <Login />,
            index: true
        },
        {
            element: <ProtectedRoute isAuthenticated={isAuthenticated()}/>,
            children:[
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/profile/edit',
                    element: <FormProfile />
                },
                {
                    path: '/posts/create',
                    element: <FormPost />
                },
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
)