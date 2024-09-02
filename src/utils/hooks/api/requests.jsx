import React, { useState } from 'react'
import axiosInstance from './axiosInstance';

const Requests = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const suspendUser = async (url) => {
        setLoading(true);
        try {
            const res = await axiosInstance.put(url);
            // console.log(res.message);
            setData(res.data);
            setError("");
            setLoading(false);
        } catch (e) {
            setError(e?.response?.data?.message);
            setData(null);
            setLoading(false);
        }
    }
    const customPutRequest = async (url, data) => {
        setLoading(true);
        try {
            const res = await axiosInstance.put(url, data);
            // console.log(res.message);
            setSuccess(true);
            setData(res.data);
          setError("");
            setLoading(false);
        } catch (e) {
            setError(e?.response?.data?.message);
          setData(null);
          setSuccess(false);
            setLoading(false);
        }
    }
    const deleteUser = async (url) => {
       setLoading(true);
       try {
         const res = await axiosInstance.delete(url);
         console.log(res);
         setData(res.data);
         setError("");
         setLoading(false);
       } catch (e) {
         setError(e?.response?.data?.message);
         setData('');
         setLoading(false);
       }
  }
  return {
    suspendUser,
    data,
    error,
    loading,
    deleteUser,
    setData,
      customPutRequest,
    setError,
    success
  };
}

export default Requests
