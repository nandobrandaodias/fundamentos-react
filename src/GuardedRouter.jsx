import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import FormProfileCard from "./components/FormProfileCard";

const GuardedRouter = ({element, auth, ...rest}) => {
    return(
        // <Route {...rest} render={ ()=> auth == true ? {element} : <Link to="/" /> }  />
        <Route path="/profile/edit" element={<FormProfileCard/>} />
    ) 
}

GuardedRouter.propTypes = {
    element: PropTypes.any,
    auth: PropTypes.bool,
    rest: PropTypes.any
}

export default GuardedRouter;