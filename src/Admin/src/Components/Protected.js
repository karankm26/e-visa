// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: false };
// };

// const Protected = (props) => {
//   let Component = props.Component;
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       console.log(localStorage.getItem("token"));
//       navigate("/customers");
//     }
//   }, []);

//   return (
//     <div>
//       <Component />
//     </div>
//   );
// };
// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router";
import useAuthState from "../hooks/useAuthState";

export default function PrivateRoute() {
  const { loggedIn, checkState } = useAuthState();
  console.log(loggedIn)
  if (checkState) {
    return (
      <div className="sweet-loading" style={{ margin: "300px" }}>
        Loading...
      </div>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/admin" />;
}
