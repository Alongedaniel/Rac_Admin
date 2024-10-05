import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/userContext/UserContext";
import axiosInstance from "./axiosInstance";
import { CronJob } from "cron";
import { useNavigate } from "react-router-dom";

const useCustomGetRequest = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { bearerToken } = useAuth();
  // const job = new CronJob(
  //   "1 * * * * *",
  //   function () {
  //     const res = axiosInstance.get(url);
  //   },
  //   true
  // );
  // job.start();

  const getRequests = async () => {
    // const config = {
    //   // method: "GET",
    //   url: `https://rac-backend.onrender.com/api/${url}`,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${bearerToken}`,
    //   },
    //   maxBodyLength: Infinity,
    // };
    setLoading(true);
    try {
      const res = await axiosInstance.get(url);
      setData(res.data);
      setError("");
      setLoading(false);
    } catch (e) {
      if (e?.response?.request?.status === 401) {
          setError("Token expired, Login again")
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("isAuthenticated");
          navigate("/login");
      } else setError(e?.response?.data?.message);
      setData(null);
      setLoading(false);
    }
  };

  const refetch = () => {
    getRequests();
  };

  useEffect(() => {
    getRequests();
  }, []);

  return { data, error, loading, setError, setLoading, setData, refetch };
};

export default useCustomGetRequest;
