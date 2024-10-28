import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  //   const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      setIsAuthenticated(JSON.parse(isAuthenticated));
    }
  }, []);

  if (isAuthenticated) {
    const from = location.state?.from || "/";
    return <Navigate to={from} replace />;
  }

  return children;
};

export default RequireAuth;
