
import { Navigate } from "react-router";
import { useAuth } from "../contexts/Auth";

const PrivateRoute = ({children}) => {
  const {userLoggenIn} = useAuth();

  return  userLoggenIn ? children : <Navigate to="/login"/> ;
};

export default PrivateRoute;
