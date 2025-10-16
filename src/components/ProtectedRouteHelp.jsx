import { Navigate } from "react-router-dom";


const ProtectedRouteHelp = ({ children }) => {
  const loggedInUser = localStorage.getItem("loggedInUser") === "true";
  const userInChat = localStorage.getItem("userInChat") === "true";
  return loggedInUser && userInChat ? children : <Navigate to="/" replace />;

};


export default ProtectedRouteHelp