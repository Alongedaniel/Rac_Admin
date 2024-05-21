import React from 'react'
import { useAuth } from '../../utils/contexts/userContext/UserContext'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const { isAuthenticated } = useAuth()
  return ( isAuthenticated  ? <Navigate to='/' /> : children
  )
}

export default RequireAuth
