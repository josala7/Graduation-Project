/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the auth user
  // const { isLoading, isAuth } = useUser();
  const isAuth = localStorage.getItem("token") ? true : false;
  // const isLoading = false;

  // 2. if there is No Auth, redirect to '/login'
  useEffect(
    function () {
      if (!isAuth) {
        navigate("/login", { replace: true });
      }
    },
    [isAuth, navigate]
  );
  // 3. spinner when isLoading
  // if (isLoading) return <div>loading...</div>;
  // 4. return the entire app
  if (isAuth) return children;
}

export default ProtectedRoute;
