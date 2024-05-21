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
    const [loading, setLoading] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      setIsAuthenticated(JSON.parse(isAuthenticated));
    }
  }, []);
    console.log(user)
    console.log(isAuthenticated)
  const signUpMutation = useAccountAuthenticate();
    const signUp = async (data) => {
      setLoading(true)
      try {
      const res = await axios.post(
        "https://rac-backend.onrender.com/api/users",
        data
      );

      console.log(res.data);
      if (res) {
          setMessage(res.data.message);
          }
          setLoading(false)
    } catch (e) {
          console.log(e.message);
          setLoading(false)
    }
  };
    const verifyOtp = async (data) => {
      setLoading(true)
    try {
      const res = await axios.post(
        "https://rac-backend.onrender.com/api/users/auth/otp",
        data
      );

      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));

      navigate("/");
        console.log(isAuthenticated, "isAuthenticated");
        setLoading(false)
    } catch (e) {
        console.log(e.message);
        setLoading(false)
    }
  };

    const login = async (data) => {
      setLoading(true)
    try {
      const res = await axios.post(
        "https://rac-backend.onrender.com/api/users/auth",
        data
      );
      setIsAuthenticated(true);
        setMessage(res.data);
        setLoading(false)
    } catch (e) {
        console.log(e.message);
        setLoading(false)
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
        loading
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
  };
};
