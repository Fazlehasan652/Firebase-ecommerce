import React from "react";
import { useAuth } from "../contexts/Auth";
import { Navigate } from "react-router";

const PrivateAdminRoute = ({ children }) => {
  const { userLoggenIn, role } = useAuth();
  return userLoggenIn &&
    role &&
    (role === "admin" || role === "super-admin") ? (
    children
  ) : (
    <Navigate to="/home" />
  );
};

export default PrivateAdminRoute;
