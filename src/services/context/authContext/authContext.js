import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import UseLocalStorage from '../../../utils/hooks/localStorage'

const AuthProvider = ({children}) => {
    const AuthContext = createContext({
        accessToken: '',
        refreshToken: '',
        isAuthenticated: null,
        account: null,
        user: null,
        setUser: () => { },
        signIn: async () => { },
        signOut: () => { },
        setAccessToken: () => { },
        setRefreshToken: () => { },
        setIsAuthenticated: () => { }
    })

    const { setItem, getItem, removeItem } = UseLocalStorage()

    const [accessToken, setAccessToken] = useState(getItem('accessToken'))
    const [refreshToken, setRefreshToken] = useState(getItem('refreshToken'))
    const [user, setUser] = useState(getItem('user'))
    const [isAuthenticated, setIsAuthenticated] = useState(getItem('isAuthenticated'))
    const [account, setAccount] = useState(getItem('account'))

    const signIn = async (emailAddress, password) => { }

    const signOut = () => { }
    
    

  return (
      <AuthContext.Provider value={{
          accessToken,
          refreshToken,
          isAuthenticated,
          account,
          user,
          signIn,
          signOut,
          setUser,
          setAccessToken,
          setRefreshToken,
          setIsAuthenticated
      }}>
      {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider

export function useAuth() {
    const {
        accessToken,
        refreshToken,
        isAuthenticated,
        account,
        user,
        signIn,
        setUser,
        signOut,
        setAccessToken,
        setIsAuthenticated
    } = useContext(AuthContext);
    return {
        accessToken,
        refreshToken,
        isAuthenticated,
        account,
        user,
        signIn,
        signOut,
        setUser
    }
}
