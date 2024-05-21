import React, { createContext, useContext, useEffect, useState } from "react";
import useAccountAuthenticate from "../../hooks/api/auth/useSignUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else setUser(null);


    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      setIsAuthenticated(JSON.parse(isAuthenticated));
    } else setIsAuthenticated(false);


  }, [loading]);

  const signUpMutation = useAccountAuthenticate();
  const signUp = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://rac-backend.onrender.com/api/users",
        data
      );

      console.log(res.data);
      if (res) {
        setMessage(res.data.message);
      }
      setLoading(false);
      navigate("/", {
        state: {
          newUser: true,
        },
      });
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  const verifyOtp = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://rac-backend.onrender.com/api/users/auth/otp",
        data
      );

      setUser(res.data);
      setIsAuthenticated(true);

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));

      // navigate("/");
      setSuccess('Account verification successful')
      setLoading(false);
    } catch (e) {
      setError('Otp invalid or expired')
      setLoading(false);
    }
  };

  const login = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://rac-backend.onrender.com/api/users/auth",
        data
      );
      setMessage(res.data.message);
      setLoading(false);
      navigate("/two-factor-auth");
      setError('')
    } catch (e) {
      setError('Invalid credentials');
      setLoading(false);
    }
  };
  const logout = async (data) => {
    setLoading(true);
    try {
      // const res = await axios.post(
      //   "https://rac-backend.onrender.com/api/users/logout"
      // );
      setSuccess("Logout successful");
      setLoading(false);
      setUser(null)
      setIsAuthenticated(false)
      navigate("/login");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signUp,
        message,
        verifyOtp,
        login,
        isAuthenticated,
        loading,
        logout,
        success,
        error,
        setError,
        setSuccess
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const {
    message,
    user,
    setUser,
    signUp,
    verifyOtp,
    login,
    isAuthenticated,
    loading,
    logout,
    success,
    error,
    setError,
    setSuccess,
  } = useContext(UserContext);
  return {
    user,
    setUser,
    signUp,
    message,
    verifyOtp,
    login,
    isAuthenticated,
    loading,
    logout,
    success,
    error,
    setError,
    setSuccess,
  };
};