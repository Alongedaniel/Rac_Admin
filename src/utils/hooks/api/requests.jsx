import React, { useState } from 'react'
import axiosInstance from './axiosInstance';

const Requests = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const suspendUser = async (url) => {
        setLoading(true);
        try {
            const res = await axiosInstance.put(url);
            // console.log(res.message);
            setData(res.data);
            setError("");
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setData(null);
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
         setError(e.message);
         setData('');
         setLoading(false);
       }
  }
  return { suspendUser, data, error, loading, deleteUser, setData };
}

export default Requests
