import { useContext } from "react";
import { UserContext } from "../contextAPI/AuthContext";
import { Navigate, useHref, useLocation } from "react-router-dom";



function PrivateRoute({children}) {
    const {user} = useContext(UserContext);
    const location = useLocation();
    
    if (user) {
       return children;
    }else{
        return <Navigate to={"/login"} state={location.pathname} replace={true}> </Navigate>
    }
}

export default PrivateRoute;