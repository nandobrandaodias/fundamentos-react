import { Routes, Route } from "react-router-dom"
// import GuardedRouter from "./GuardedRouter"
import Home from './components/Home'
import Profile from './components/Profile'
import FormProfile from "./components/FormProfile"
import FormPost from "./components/FormPost"
import DefaultLayout from "./layouts/DefaultLayout"

export default function Router(){
    return(
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home/>} />
            {/* <GuardedRouter path='/profile' component={<ProfileCardPage/>} auth={false} /> */}
            <Route path="/profile" element={<Profile/>} />
            <Route path="/profile/edit" element={<FormProfile/>} />
            <Route path="/posts/create" element={<FormPost/>} />
        </Route>
    </Routes>
    )
}