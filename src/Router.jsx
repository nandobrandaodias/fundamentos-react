import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import FormProfile from "./components/FormProfile"
import DefaultLayout from "./layouts/DefaultLayout"

export default function Router(){
    return(
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/profile/edit" element={<FormProfile/>} />
        </Route>
    </Routes>
    )
}