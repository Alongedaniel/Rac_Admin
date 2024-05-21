import React from 'react'
import { useAuth } from '../../utils/contexts/userContext/UserContext'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const location = useLocation();
//   const navigate = useNavigate();

  if (isAuthenticated) {
    const from = location.state?.from
    return <Navigate to={from} replace />;
  }

  return children;
};

export default RequireAuth
