import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('token');
    const isAuth = !!token; 
    return isAuth ? children : <Navigate to='/login' />;
}

export default PrivateRoute