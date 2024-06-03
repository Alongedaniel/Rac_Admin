import React, { createContext, useContext, useEffect, useState } from "react";
import useAccountAuthenticate from "../../hooks/api/auth/useSignUp";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../hooks/api/axiosInstance";
import { CronJob } from "cron";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bearerToken, setBearerToken] = useState('')
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
        // const job = new CronJob(
        //   "1 * * * * *",
        //   function () {
        //     const res = axiosInstance.post("/admin/auth", '')
        //     const res1 = axiosInstance.post("/admin/auth/otp", '')
        //     const res2 =  axiosInstance.post("/users", '');
        //   },
        //   true
        // );
        // job.start();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }

    const token = localStorage.getItem("jwtToken");
    if (token) {
      setBearerToken(JSON.parse(token));
    }


    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      setIsAuthenticated(JSON.parse(isAuthenticated));
    }


  }, [loading]);

  const signUpMutation = useAccountAuthenticate();
  const signUp = async (data) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/users", data);

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
      if (e.response.request.status == 404) setError("Not found");
      else if (e.response.request.status == 500)
        setError("Internal server error");
      else setError(e.message);
      setLoading(false);
    }
  };
  const verifyOtp = async (data) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/admin/auth/otp", data);

      setUser(res.data);
      setIsAuthenticated(true);
      setBearerToken(res.data.jwt)

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("jwtToken", JSON.stringify(res.data.jwt));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));

      // navigate("/");
      setSuccess('Account verification successful')
      setLoading(false);
    } catch (e) {
      setError(e.response.data)
      setLoading(false);
    }
  };

  const login = async (data) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/admin/auth", data);
      setMessage(res.data.message);
      setLoading(false);
      navigate("/two-factor-auth");
      setError('')
    } catch (e) {
      if (e.response.request.status == 404) setError('Not found')
      else if (e.response.request.status == 500) setError('Internal server error')
      else setError(e.message);
      setLoading(false);
    }
  };
  const logout = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/admin/logout");
      setSuccess("Logout successful");
      setLoading(false);
      setUser(null)
      setIsAuthenticated(false)
      setBearerToken('')
      navigate("/login");
      localStorage.removeItem("user");
      localStorage.removeItem("jwtToken");
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
        setSuccess,
        bearerToken,
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
    bearerToken,
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
    bearerToken,
  };
};
