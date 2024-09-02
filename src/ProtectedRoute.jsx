import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'
import DefaultLayout from "./layouts/DefaultLayout"

export const ProtectedRoute = ({isAuthenticated}) =>{
        if(!isAuthenticated){
            return <Navigate to="/" />
        }

        return (
            <>
            <DefaultLayout />
            </>
        )
}

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.any
}