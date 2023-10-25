import React from "react";
import ROLES from "../common/Roles";
import { Navigate, Route, useLocation } from "react-router-dom";
import AccessDeniedScreen from "../screens/AccessDeniedScreen/AccessDeniedScreen";

const PrivateRoute = ({ children, roles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/login" />;
  }
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;
  console.log("role from component", roles[0]);
  console.log("roles from user", user.role);
  
  if (user && !userHasRequiredRole) {
    return <AccessDeniedScreen />; // build your won access denied page (sth like 404)
  }
  return children;
};

export default PrivateRoute;
