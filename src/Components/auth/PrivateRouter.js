import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    let isAuthenticated = sessionStorage.getItem("User")
    return isAuthenticated ? children : <Navigate to="/" />;
  };